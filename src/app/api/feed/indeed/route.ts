import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function mapJobType(type: string): string {
  switch (type) {
    case "FULL_TIME":
      return "fulltime";
    case "PART_TIME":
      return "parttime";
    case "CONTRACT":
      return "contract";
    case "INTERNSHIP":
      return "internship";
    case "TEMPORARY":
      return "temporary";
    default:
      return "fulltime";
  }
}

function escapeCdata(text: string): string {
  return text ? text.replace(/]]>/g, "]]]]><![CDATA[>") : "";
}

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { postedAt: "desc" },
    });

    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://careers-page-silk-beta.vercel.app");

    const now = new Date().toUTCString();

    let xml = `<?xml version="1.0" encoding="utf-8"?>\n`;
    xml += `<source>\n`;
    xml += `  <publisher>The Bored Monkey</publisher>\n`;
    xml += `  <publisherurl>https://theboredmonkey.com</publisherurl>\n`;
    xml += `  <lastBuildDate>${now}</lastBuildDate>\n`;

    for (const job of jobs) {
      const jobUrl = `${baseUrl}/jobs/${job.id}?source=indeed`;
      const dateStr = job.postedAt.toUTCString();
      const jobType = mapJobType(job.type);

      // Build rich HTML description for Indeed
      let descHtml = `<p>${escapeCdata(job.description).replace(/\n/g, "<br/>")}</p>`;

      if (job.requirements && job.requirements.length > 0) {
        descHtml += `<h4>Key Requirements</h4><ul>`;
        for (const req of job.requirements) {
          descHtml += `<li>${escapeCdata(req)}</li>`;
        }
        descHtml += `</ul>`;
      }

      if (job.benefits && job.benefits.length > 0) {
        descHtml += `<h4>Perks &amp; Benefits</h4><ul>`;
        for (const ben of job.benefits) {
          descHtml += `<li>${escapeCdata(ben)}</li>`;
        }
        descHtml += `</ul>`;
      }

      descHtml += `<p><strong>To apply:</strong> Click the apply button or submit your application at The Bored Monkey Careers Studio (${jobUrl}).</p>`;

      let salaryText = "";
      if (job.salaryMin && job.salaryMax) {
        salaryText = `₹${job.salaryMin.toLocaleString("en-IN")} - ₹${job.salaryMax.toLocaleString("en-IN")} per year`;
      } else if (job.salaryMin) {
        salaryText = `From ₹${job.salaryMin.toLocaleString("en-IN")} per year`;
      }

      xml += `  <job>\n`;
      xml += `    <title><![CDATA[${escapeCdata(job.title)}]]></title>\n`;
      xml += `    <date><![CDATA[${dateStr}]]></date>\n`;
      xml += `    <referencenumber><![CDATA[${job.id}]]></referencenumber>\n`;
      xml += `    <url><![CDATA[${jobUrl}]]></url>\n`;
      xml += `    <company><![CDATA[The Bored Monkey]]></company>\n`;
      xml += `    <city><![CDATA[Mumbai]]></city>\n`;
      xml += `    <state><![CDATA[Maharashtra]]></state>\n`;
      xml += `    <country><![CDATA[IN]]></country>\n`;
      xml += `    <description><![CDATA[${descHtml}]]></description>\n`;
      if (salaryText) {
        xml += `    <salary><![CDATA[${salaryText}]]></salary>\n`;
      }
      xml += `    <jobtype><![CDATA[${jobType}]]></jobtype>\n`;
      xml += `    <category><![CDATA[${escapeCdata(job.category)}]]></category>\n`;
      if (job.remote) {
        xml += `    <remotetype><![CDATA[Fully Remote]]></remotetype>\n`;
      }
      xml += `  </job>\n`;
    }

    xml += `</source>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("Error generating Indeed XML feed:", error);
    return new NextResponse(
      `<?xml version="1.0" encoding="utf-8"?><source><publisher>The Bored Monkey</publisher><error>Failed to generate feed</error></source>`,
      {
        status: 500,
        headers: { "Content-Type": "application/xml; charset=utf-8" },
      }
    );
  }
}
