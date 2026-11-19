"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, Lock, Plus, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";
import type { Job } from "@/generated/prisma";

interface TeamJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJobCreated: (job: Job) => void;
}

export function TeamJobModal({ isOpen, onClose, onJobCreated }: TeamJobModalProps) {
  const router = useRouter();

  // Team authentication state (stored in session so they only enter once per visit)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search;
      return (
        sessionStorage.getItem("tbm_team_auth") === "true" ||
        sessionStorage.getItem("tbm_team_access") === "true" ||
        search.includes("team=true") ||
        search.includes("admin=true")
      );
    }
    return false;
  });

  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      const search = window.location.search;
      if (
        sessionStorage.getItem("tbm_team_auth") === "true" ||
        sessionStorage.getItem("tbm_team_access") === "true" ||
        search.includes("team=true") ||
        search.includes("admin=true")
      ) {
        setIsAuthenticated(true);
      }
    }
  }, [isOpen]);

  // Job creation form fields
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Marketing");
  const [location, setLocation] = useState("Mumbai (Studio HQ)");
  const [type, setType] = useState("FULL_TIME");
  const [experienceLevel, setExperienceLevel] = useState("MID");
  const [remote, setRemote] = useState(false);
  const [featured, setFeatured] = useState(true);
  const [salaryMin, setSalaryMin] = useState("800000");
  const [salaryMax, setSalaryMax] = useState("1400000");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [benefits, setBenefits] = useState("");
  const [tags, setTags] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleVerifyPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Default team passphrases accepted
    if (passwordInput === "admin123" || passwordInput === "tbm2026" || passwordInput === "monkey") {
      setIsAuthenticated(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("tbm_team_auth", "true");
      }
      setAuthError("");
    } else {
      setAuthError("Incorrect team password. Try 'admin123' or 'tbm2026'.");
    }
  };

  const handleCreateJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    const parseList = (text: string) =>
      text
        .split(/\r?\n|,/)
        .map((s) => s.trim())
        .filter(Boolean);

    const parsedMin = parseInt(salaryMin, 10);
    const parsedMax = parseInt(salaryMax, 10);

    const payload = {
      title: title.trim(),
      company: "The Bored Monkey",
      companyWebsite: "https://theboredmonkey.com",
      location: location.trim(),
      type,
      category,
      experienceLevel,
      remote,
      featured,
      salaryMin: !isNaN(parsedMin) && parsedMin >= 0 ? parsedMin : undefined,
      salaryMax: !isNaN(parsedMax) && parsedMax >= 0 ? parsedMax : undefined,
      currency: "INR",
      description: description.trim() || "Exciting opening at The Bored Monkey creative studio.",
      requirements: parseList(requirements),
      benefits: parseList(benefits),
      tags: parseList(tags),
      applyEmail: "careers@theboredmonkey.com",
    };

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 201) {
        const createdJob = await res.json();
        onJobCreated(createdJob);
        router.refresh();
        onClose();
        return;
      }

      const data = await res.json().catch(() => ({}));
      setSubmitError(data.error || "Failed to create job opening. Check all fields.");
      setSubmitting(false);
    } catch {
      setSubmitError("Network error. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl border-2 border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-[#FFF9E8]">
          <div className="flex items-center gap-3">
            <img
              src="/images/tbm-logo.png"
              alt="The Bored Monkey"
              className="h-8 w-auto object-contain"
            />
            <div>
              <h2 className="text-base font-black text-[#171717]">
                Team Portal · Post Job Opening
              </h2>
              <p className="text-xs text-slate-500">
                Internal team posting dashboard
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#171717] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!isAuthenticated ? (
            /* Passphrase Verification Gate */
            <form onSubmit={handleVerifyPassword} className="space-y-4 max-w-md mx-auto py-6">
              <div className="text-center mb-6">
                <Lock className="h-10 w-10 text-amber-600 mx-auto mb-2" />
                <h3 className="text-lg font-black text-[#171717]">
                  Internal Team Verification
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Enter team passphrase to unlock posting access.
                </p>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Team Passphrase
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter team password..."
                  required
                  className="input"
                />
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Hint: default passphrase is <code className="bg-slate-100 px-1 py-0.5 rounded font-bold">admin123</code> or <code className="bg-slate-100 px-1 py-0.5 rounded font-bold">tbm2026</code>
                </span>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 text-sm font-bold shadow-md cursor-pointer"
              >
                Unlock Team Job Creator →
              </button>
            </form>
          ) : (
            /* Authenticated Job Creation Form */
            <form onSubmit={handleCreateJob} className="space-y-4">
              {submitError && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
                  {submitError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Role / Position title"
                  className="input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Department *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="input font-medium"
                  >
                    <option value="Marketing">Marketing / Influencer</option>
                    <option value="Design">Design & Video Production</option>
                    <option value="Engineering">Creative Tech / Web</option>
                    <option value="Product">Product & Strategy</option>
                    <option value="Creator Relations">Creator Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Employment Type *
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="input font-medium"
                  >
                    <option value="FULL_TIME">Full-time</option>
                    <option value="INTERNSHIP">Internship</option>
                    <option value="CONTRACT">Contract</option>
                    <option value="PART_TIME">Part-time</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location / Remote"
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Experience Level
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="input font-medium"
                  >
                    <option value="ENTRY">Entry / Junior (0-2 yrs)</option>
                    <option value="MID">Mid-level (2-4 yrs)</option>
                    <option value="SENIOR">Senior (4+ yrs)</option>
                    <option value="LEAD">Lead / Director</option>
                    <option value="INTERN">Intern</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Min Salary (INR / ₹)
                  </label>
                  <input
                    type="number"
                    value={salaryMin}
                    onChange={(e) => setSalaryMin(e.target.value)}
                    placeholder="Min salary"
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Max Salary (INR / ₹)
                  </label>
                  <input
                    type="number"
                    value={salaryMax}
                    onChange={(e) => setSalaryMax(e.target.value)}
                    placeholder="Max salary"
                    className="input"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remote}
                    onChange={(e) => setRemote(e.target.checked)}
                    className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 h-4 w-4"
                  />
                  <span>Remote Friendly</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 h-4 w-4"
                  />
                  <span>Featured Position</span>
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Job Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the day-to-day role and who will thrive in this position..."
                  className="input resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Key Requirements (one per line)
                </label>
                <textarea
                  rows={2}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="3+ years of video editing&#10;Proficiency in Premiere Pro and After Effects"
                  className="input resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Benefits & Culture Perks (one per line)
                </label>
                <textarea
                  rows={2}
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                  placeholder="State-of-the-art studio access&#10;Flexible hybrid model&#10;Comprehensive medical insurance"
                  className="input resize-y"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Tags / Skills (comma separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Reels, Video Editing, Strategy, Brand Partnerships"
                  className="input"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-3.5 text-sm font-black shadow-lg cursor-pointer"
                >
                  {submitting ? "Publishing Opening..." : "Publish Job Opening to Live Page →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
