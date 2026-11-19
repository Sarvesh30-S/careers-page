import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJob } from "@/lib/jobs";
import { Badge } from "@/components/Badge";
import { CompanyAvatar } from "@/components/CompanyAvatar";
import { ApplyForm } from "@/components/ApplyForm";
import { SaveButton } from "@/components/SaveButton";
import { formatSalary, timeAgo } from "@/lib/format";
import { jobTypeLabel, experienceLabel } from "@/lib/constants";
import { ArrowLeft, Check, Sparkles, Building2, MapPin } from "lucide-react";

export const dynamic = "force-dynamic";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const job = await getJob(id);
  if (!job) return { title: "Job not found" };
  return {
    title: `${job.title} — The Bored Monkey Careers`,
    description: job.description.slice(0, 155),
  };
}

export default async function JobDetailPage({ params }: Params) {
  const { id } = await params;
  const job = await getJob(id);
  if (!job) notFound();

  const salary = formatSalary(job.salaryMin, job.salaryMax, job.currency);

  return (
    <div className="min-h-screen bg-slate-50/50 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/#open-roles"
          className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#171717] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Openings</span>
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Main Job Information */}
          <article className="space-y-6">
            {/* Header Card */}
            <div className="card p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <div className="flex items-start gap-5">
                <CompanyAvatar company={job.company} logo={job.companyLogo} size={64} />
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF9E8] text-[#171717] border border-[#FFD43B]/60 mb-2">
                    <Sparkles className="h-3 w-3 text-amber-600" />
                    <span>The Bored Monkey Studio Opening</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-[#171717] tracking-tight">
                    {job.title}
                  </h1>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
                    <span className="font-semibold text-[#171717] flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 text-slate-400" />
                      {job.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
                <Badge variant="brand">{jobTypeLabel(job.type)}</Badge>
                {job.remote && <Badge variant="green">Remote</Badge>}
                <Badge variant="slate">{experienceLabel(job.experienceLevel)}</Badge>
                <Badge variant="slate">{job.category}</Badge>
                {salary && (
                  <span className="ml-2 text-sm font-black text-[#171717] bg-[#FFF9E8] px-3 py-1 rounded-full border border-[#FFD43B]/60">
                    {salary}
                  </span>
                )}
                <span className="ml-auto text-xs text-slate-400 font-medium">
                  Posted {timeAgo(job.postedAt)}
                </span>
              </div>
            </div>

            {/* Description */}
            <section className="card p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
              <h2 className="text-lg font-black uppercase tracking-tight text-[#171717] mb-4">
                About the Role
              </h2>
              <p className="whitespace-pre-line leading-relaxed text-slate-700 text-sm sm:text-base font-normal">
                {job.description}
              </p>
            </section>

            {/* Requirements */}
            {job.requirements.length > 0 && (
              <section className="card p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
                <h2 className="text-lg font-black uppercase tracking-tight text-[#171717] mb-4">
                  What You&apos;ll Bring
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                      <span className="h-5 w-5 rounded-full bg-[#FFF9E8] border border-[#FFD43B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#171717]" />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits & Perks */}
            {job.benefits.length > 0 && (
              <section className="card p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
                <h2 className="text-lg font-black uppercase tracking-tight text-[#171717] mb-4">
                  Perks & Culture
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                      <span className="h-5 w-5 rounded-full bg-[#FFF9E8] border border-[#FFD43B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#171717]" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills / Tags */}
            {job.tags.length > 0 && (
              <section className="card p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-xs">
                <h2 className="text-lg font-black uppercase tracking-tight text-[#171717] mb-4">
                  Key Skills & Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Apply Form Sidebar (Sticky) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6 sm:p-7 bg-white border-2 border-slate-200 rounded-2xl shadow-md">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight text-[#171717]">
                    Apply for this Role
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    No account needed · Fast response
                  </p>
                </div>
                <SaveButton jobId={job.id} />
              </div>

              {job.status === "CLOSED" ? (
                <div className="rounded-xl bg-slate-100 p-6 text-center text-sm font-semibold text-slate-500">
                  This role is no longer accepting applications.
                </div>
              ) : (
                <ApplyForm jobId={job.id} jobTitle={job.title} />
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
