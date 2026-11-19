import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { applicationSchema } from "@/lib/validations";
import { appendApplicationToGoogleSheet } from "@/lib/sheets";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

/** POST /api/jobs/:id/apply — submit an application with PDF upload or link. */
export async function POST(req: NextRequest, { params }: Ctx) {
  const { id } = await params;

  const job = await prisma.job.findUnique({ where: { id } });
  if (!job) return NextResponse.json({ error: "Job not found" }, { status: 404 });
  if (job.status === "CLOSED")
    return NextResponse.json(
      { error: "This job is no longer accepting applications" },
      { status: 409 }
    );

  const contentType = req.headers.get("content-type") || "";

  let name = "";
  let email = "";
  let phone = "";
  let experience = "";
  let source = "direct";
  let resumeUrl = "";
  let linkedinUrl = "";
  let coverLetter = "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await req.formData();
    name = (formData.get("name") as string) || "";
    email = (formData.get("email") as string) || "";
    phone = (formData.get("phone") as string) || "";
    experience = (formData.get("experience") as string) || "";
    source = (formData.get("source") as string) || "direct";
    linkedinUrl = (formData.get("linkedinUrl") as string) || "";
    coverLetter = (formData.get("coverLetter") as string) || "";
    const directResumeUrl = (formData.get("resumeUrl") as string) || "";

    const resumeFile = formData.get("resume") as File | null;
    if (resumeFile && resumeFile.size > 0) {
      // Validate PDF format
      const lowerName = resumeFile.name.toLowerCase();
      const isPdf =
        resumeFile.type === "application/pdf" || lowerName.endsWith(".pdf");

      if (!isPdf) {
        return NextResponse.json(
          {
            error: "Please upload a valid PDF document for your resume.",
            issues: { resume: ["Only PDF format is accepted."] },
          },
          { status: 422 }
        );
      }

      if (resumeFile.size > 12 * 1024 * 1024) {
        return NextResponse.json(
          {
            error: "PDF file is too large (max 12 MB).",
            issues: { resume: ["File exceeds 12 MB limit."] },
          },
          { status: 422 }
        );
      }

      // Save PDF to public/uploads/resumes
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      const safeFileName = `${Date.now()}-${resumeFile.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const filePath = path.join(uploadDir, safeFileName);
      fs.writeFileSync(filePath, buffer);
      resumeUrl = `/uploads/resumes/${safeFileName}`;
    } else if (directResumeUrl) {
      resumeUrl = directResumeUrl;
    } else {
      return NextResponse.json(
        {
          error: "Please attach a PDF resume to complete your application.",
          issues: { resume: ["A PDF resume is required."] },
        },
        { status: 422 }
      );
    }
  } else {
    // JSON Payload fallback
    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
    name = body.name || "";
    email = body.email || "";
    phone = body.phone || "";
    experience = body.experience || "";
    source = body.source || "direct";
    resumeUrl = body.resumeUrl || "";
    linkedinUrl = body.linkedinUrl || "";
    coverLetter = body.coverLetter || "";
  }

  const parsed = applicationSchema.safeParse({
    name,
    email,
    phone,
    experience,
    source,
    resumeUrl,
    linkedinUrl,
    coverLetter,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;
  const application = await prisma.application.create({
    data: {
      jobId: id,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      experience: data.experience || null,
      source: data.source || "direct",
      resumeUrl: data.resumeUrl || null,
      linkedinUrl: data.linkedinUrl || null,
      coverLetter: data.coverLetter || null,
    },
  });

  // Simultaneously append applicant details to Google Sheet
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const fullResumeUrl = data.resumeUrl
    ? data.resumeUrl.startsWith("http")
      ? data.resumeUrl
      : `${baseUrl}${data.resumeUrl.startsWith("/") ? "" : "/"}${data.resumeUrl}`
    : "";

  appendApplicationToGoogleSheet({
    jobTitle: job.title,
    jobCategory: job.category,
    name: data.name,
    email: data.email,
    phone: data.phone || "",
    experience: data.experience || "",
    resumeUrl: fullResumeUrl,
    portfolioUrl: data.linkedinUrl || "",
    coverLetter: data.coverLetter || "",
    source: data.source || "direct",
    appliedAt: application.createdAt.toISOString(),
  }).catch((err) => {
    console.error("[GoogleSheets] Background append error:", err);
  });

  return NextResponse.json(
    { success: true, applicationId: application.id, resumeUrl: application.resumeUrl },
    { status: 201 }
  );
}
