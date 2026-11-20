"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { UploadCloud, FileText, X, CheckCircle2 } from "lucide-react";

type FieldErrors = Record<string, string[] | undefined>;

export function ApplyForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) {
  const searchParams = useSearchParams();
  const source = searchParams?.get("source") || searchParams?.get("utm_source") || "direct";
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    const isPdf =
      file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
    if (!isPdf) {
      setErrors((prev) => ({
        ...prev,
        resume: ["Please upload a PDF format document."],
      }));
      return;
    }
    if (file.size > 12 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: ["PDF file size must be under 12 MB."],
      }));
      return;
    }
    setErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
    setResumeFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!resumeFile) {
      setErrors((prev) => ({
        ...prev,
        resume: ["Please upload your PDF resume to complete the application."],
      }));
      return;
    }

    setStatus("submitting");
    setErrors({});
    setFormError(null);

    const formData = new FormData(e.currentTarget);
    formData.set("resume", resumeFile);
    formData.set("source", source);

    try {
      const res = await fetch(`/api/jobs/${jobId}/apply`, {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        setStatus("success");
        return;
      }
      const body = await res.json().catch(() => ({}));
      if (res.status === 422 && body.issues) {
        setErrors(body.issues);
      } else {
        setFormError(body.error ?? "Failed to submit application. Please check all fields.");
      }
      setStatus("idle");
    } catch {
      setFormError("Network error. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-amber-400/20 text-amber-600 font-bold text-3xl mb-4">
          ✓
        </div>
        <h3 className="text-2xl font-black text-[#171717] tracking-tight">
          Application Received!
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
          Thanks for applying for <strong>{jobTitle}</strong>. Your PDF resume has been uploaded and our creative team will review it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {formError && (
        <p className="rounded-xl bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-200">
          {formError}
        </p>
      )}

      {source !== "direct" && (
        <div className="rounded-lg bg-amber-50/70 px-3 py-1.5 text-xs text-amber-900 border border-amber-200 flex items-center justify-between">
          <span>Applying via: <strong>{source}</strong></span>
          <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">Tracked</span>
        </div>
      )}

      {/* Full Name */}
      <Field label="Full name" name="name" errors={errors.name} required>
        <input id="name" name="name" required className="input" placeholder="Full name" />
      </Field>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Email" name="email" errors={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
            placeholder="name@email.com"
          />
        </Field>

        <Field label="Phone number" name="phone" errors={errors.phone}>
          <input id="phone" name="phone" className="input" placeholder="Phone number" />
        </Field>
      </div>

      {/* Experience Level */}
      <Field label="Experience level" name="experience" errors={errors.experience}>
        <select id="experience" name="experience" className="input" defaultValue="1-3 years">
          <option value="Fresher (0-1 yrs)">Fresher / Creative Graduate (0–1 yrs)</option>
          <option value="1-3 years">1–3 years (Junior / Mid-level)</option>
          <option value="3-5 years">3–5 years (Mid / Senior)</option>
          <option value="5+ years">5+ years (Lead / Director)</option>
        </select>
      </Field>

      {/* PDF RESUME UPLOAD ZONE */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
            Resume (PDF) <span className="text-amber-600">*</span>
          </label>
          <span className="text-[11px] text-slate-400 font-medium">PDF only (Max 12MB)</span>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        {!resumeFile ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              const file = e.dataTransfer.files?.[0];
              if (file) handleFile(file);
            }}
            className={`p-6 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
              isDragging
                ? "border-amber-500 bg-amber-50/60 scale-[1.01]"
                : "border-slate-200 hover:border-amber-400 bg-slate-50/60 hover:bg-amber-50/20"
            }`}
          >
            <div className="h-10 w-10 rounded-full bg-[#FFF9E8] border border-[#FFD43B]/60 flex items-center justify-center text-amber-600 mb-2">
              <UploadCloud className="h-5 w-5" />
            </div>
            <span className="text-xs font-black text-slate-800">
              Click to browse or drop your PDF resume here
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5">
              Supports .pdf documents
            </span>
          </div>
        ) : (
          <div className="p-3.5 rounded-2xl border-2 border-amber-400/80 bg-[#FFFDF9] flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-9 w-9 rounded-xl bg-amber-500 text-black flex items-center justify-center font-black text-xs shrink-0 shadow-2xs">
                <FileText className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black text-slate-900 truncate">
                  {resumeFile.name}
                </p>
                <p className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>{(resumeFile.size / (1024 * 1024)).toFixed(2)} MB · PDF Ready</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setResumeFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              className="h-7 w-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:border-rose-300 transition-colors cursor-pointer shrink-0 ml-2"
              title="Remove PDF"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {errors.resume && (
          <p className="mt-1.5 text-xs text-rose-600 font-medium">
            {errors.resume[0]}
          </p>
        )}
      </div>

      {/* Portfolio / Website / Socials */}
      <Field
        label="Portfolio / Reel / Socials (Optional)"
        name="linkedinUrl"
        errors={errors.linkedinUrl}
        hint="Behance, Website, or Instagram profile link"
      >
        <input
          id="linkedinUrl"
          name="linkedinUrl"
          type="url"
          className="input"
          placeholder="https://behance.net/… or https://instagram.com/…"
        />
      </Field>

      {/* Cover Note */}
      <Field
        label="Why The Bored Monkey?"
        name="coverLetter"
        errors={errors.coverLetter}
        hint="Brief note on your creative background"
      >
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={3}
          className="input resize-y"
          placeholder="Tell us about a campaign, project, or creator strategy you're proud of..."
        />
      </Field>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-[#171717] text-white py-4 text-xs font-black uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2 mt-4"
      >
        <span>
          {status === "submitting" ? "Uploading & Submitting Application…" : "Submit Application →"}
        </span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  errors,
  required = false,
  hint,
  children,
}: {
  label: string;
  name: string;
  errors?: string[];
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label htmlFor={name} className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
          {label} {required && <span className="text-amber-600">*</span>}
        </label>
        {hint && <span className="text-[11px] text-slate-400 font-normal">{hint}</span>}
      </div>
      {children}
      {errors && errors.length > 0 && (
        <p className="mt-1 text-xs text-rose-600 font-medium">{errors[0]}</p>
      )}
    </div>
  );
}
