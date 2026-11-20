"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import type { Job } from "@/generated/prisma";
import { TeamJobModal } from "@/components/TeamJobModal";
import { ApplyForm } from "@/components/ApplyForm";
import { formatSalary } from "@/lib/format";
import { jobTypeLabel } from "@/lib/constants";
import {
  Search,
  MapPin,
  Briefcase,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  Lock,
  Plus,
  Mail,
} from "lucide-react";

const EMPTY_STATE_VARIATIONS = [
  {
    headline: "YOU'RE EARLY. OR WE'RE LATE.",
    subheadline: "Either way, there are no openings right now.",
    description:
      "Our hiring plans are currently on a coffee break. But if you've got some seriously good work, we'd still love to see it.",
    cta: "SEND US YOUR PORTFOLIO →",
  },
  {
    headline: "IT'S NOT YOU. IT'S US.",
    subheadline: "For once, we mean it.",
    description:
      "We're not hiring right now, but that doesn't mean we don't want to know you. Drop your portfolio in our inbox. Future us might thank you.",
    cta: "SEND US YOUR PORTFOLIO →",
  },
  {
    headline: "PLOT TWIST: NO JOBS.",
    subheadline: "We know. Not the plot twist you were hoping for.",
    description:
      "Our careers page is currently experiencing a serious lack of vacancies. But hey, good things happen to people who send great portfolios.",
    cta: "SEND US YOUR PORTFOLIO →",
  },
  {
    headline: "HR SAID NO. WE ASKED AGAIN.",
    subheadline: "Still no openings.",
    description:
      "Apparently, we're fully booked on talent for now. But if your portfolio makes us spill our coffee, we'll definitely remember you.",
    cta: "SEND US YOUR PORTFOLIO →",
  },
];

interface CleanCareersBoardProps {
  initialJobs: Job[];
}

export function CleanCareersBoard({ initialJobs }: CleanCareersBoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  useEffect(() => {
    setJobs(initialJobs);
  }, [initialJobs]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeJobForModal, setActiveJobForModal] = useState<Job | null>(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isTeamUser, setIsTeamUser] = useState(false);
  const [variationIndex, setVariationIndex] = useState(0);

  useEffect(() => {
    // Check if user has team access via URL query (?team=true or ?admin=true) or active session
    const params = new URLSearchParams(window.location.search);
    const hasTeamParam = params.get("team") === "true" || params.get("admin") === "true";
    const hasSession = sessionStorage.getItem("tbm_team_access") === "true";

    if (hasTeamParam || hasSession) {
      setIsTeamUser(true);
      sessionStorage.setItem("tbm_team_access", "true");
      sessionStorage.setItem("tbm_team_auth", "true");
    }

    // Secret team keyboard shortcut: Press Shift + T to open Team Job Creator!
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && (e.key === "T" || e.key === "t")) {
        setIsTeamUser(true);
        sessionStorage.setItem("tbm_team_access", "true");
        sessionStorage.setItem("tbm_team_auth", "true");
        setIsTeamModalOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Guarantees a different witty line every single time the page refreshes
    const prev = parseInt(sessionStorage.getItem("tbm_empty_idx") ?? "-1", 10);
    const next =
      prev >= 0
        ? (prev + Math.floor(Math.random() * (EMPTY_STATE_VARIATIONS.length - 1)) + 1) %
          EMPTY_STATE_VARIATIONS.length
        : Math.floor(Math.random() * EMPTY_STATE_VARIATIONS.length);
    sessionStorage.setItem("tbm_empty_idx", next.toString());
    setVariationIndex(next);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Auto-open application drawer if candidate lands with ?job=<id> or ?apply=<id>
  useEffect(() => {
    if (typeof window === "undefined" || !jobs || jobs.length === 0) return;
    const params = new URLSearchParams(window.location.search);
    const target = params.get("job") || params.get("apply");
    if (!target) return;

    const matched = jobs.find(
      (j) =>
        j.id === target ||
        j.title.toLowerCase().replace(/\s+/g, "-") === target.toLowerCase() ||
        j.title.toLowerCase() === target.toLowerCase()
    );
    if (matched) {
      setActiveJobForModal(matched);
    }
  }, [jobs]);

  const emptyState = EMPTY_STATE_VARIATIONS[variationIndex];

  // Scroll & Cursor lerp state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const rawProgress = -rect.top / totalScrollable;
      targetProgressRef.current = Math.min(1, Math.max(0, rawProgress));
    };

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      targetMouseRef.current = { x: normX, y: normY };
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    onScroll();

    let animationFrameId: number;
    const loop = () => {
      currentProgressRef.current +=
        (targetProgressRef.current - currentProgressRef.current) * 0.12;
      currentMouseRef.current.x +=
        (targetMouseRef.current.x - currentMouseRef.current.x) * 0.08;
      currentMouseRef.current.y +=
        (targetMouseRef.current.y - currentMouseRef.current.y) * 0.08;

      setScrollProgress(currentProgressRef.current);
      setMouseOffset({
        x: currentMouseRef.current.x,
        y: currentMouseRef.current.y,
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Derive unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    jobs.forEach((j) => set.add(j.category));
    return ["All", ...Array.from(set)];
  }, [jobs]);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [jobs, searchTerm, selectedCategory]);

  const handleJobCreated = (newJob: Job) => {
    setJobs((prev) => [newJob, ...prev]);
  };

  // Slogan split calculations:
  // "WHERE" & "TALENT" slide left out of the frame
  // "MEETS" & "OPPORTUNITY" slide right out of the frame
  const leftShiftLarge = -(scrollProgress * 550) + mouseOffset.x * 20;
  const leftShiftSmall = -(scrollProgress * 300) + mouseOffset.x * 12;
  const rightShiftSmall = scrollProgress * 300 + mouseOffset.x * 12;
  const rightShiftLarge = scrollProgress * 550 + mouseOffset.x * 20;

  const sloganOpacity = Math.max(0, 1 - scrollProgress * 1.5);
  const sloganScale = 1 + scrollProgress * 0.12;

  // Info / Content coming up in its place:
  const infoProgress = Math.min(1, Math.max(0, (scrollProgress - 0.15) / 0.55));
  const infoTranslateY = (1 - infoProgress) * 120;
  const infoOpacity = Math.min(1, infoProgress * 1.5);
  const infoScale = 0.94 + infoProgress * 0.06;

  const tiltAngle = mouseOffset.x * 3;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[250vh] bg-[#FFFDF9] text-[#171717] selection:bg-[#FFD43B]"
    >
      {/* STICKY PINNED STAGE */}
      <div className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-hidden flex flex-col justify-between px-4 sm:px-6 lg:px-8 select-none">
        {/* Top discrete Team Access option: Only visible for internal team users */}
        {isTeamUser ? (
          <div className="w-full max-w-5xl mx-auto pt-4 flex items-center justify-end z-20">
            <button
              type="button"
              onClick={() => setIsTeamModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#171717] bg-white hover:bg-[#FFF9E8] hover:border-[#FFD43B] px-3.5 py-1.5 rounded-full border border-slate-200 transition-all cursor-pointer shadow-2xs"
            >
              <Lock className="h-3 w-3 text-amber-600" />
              <span>Team Access (Create Job)</span>
            </button>
          </div>
        ) : (
          <div className="h-8" />
        )}

        {/* CENTER STAGE: Slogans part left/right, and Info rises in their place without any card box */}
        <div className="relative w-full max-w-5xl mx-auto my-auto flex items-center justify-center min-h-[65vh]">
          {/* ======================================================== */}
          {/* LAYER A: ONLY THE CENTER SLOGAN (DIVIDES LEFT & RIGHT)   */}
          {/* ======================================================== */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center transition-transform duration-75"
            style={{
              opacity: sloganOpacity,
              transform: `perspective(1000px) rotateY(${tiltAngle * 0.3}deg) scale(${sloganScale})`,
              display: sloganOpacity <= 0.01 ? "none" : "flex",
              pointerEvents: sloganOpacity > 0.1 ? "auto" : "none",
            }}
          >
            {/* The Main 4-Word Headline */}
            <div
              data-cursor-invert="true"
              className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[1.02] cursor-default pointer-events-auto"
            >
              {/* "WHERE" moves far left */}
              <span
                data-cursor-invert="true"
                className="inline-block transform-gpu will-change-transform text-[#171717] cursor-default"
                style={{
                  transform: `translateX(${leftShiftLarge}px) rotate(${scrollProgress * -5}deg)`,
                }}
              >
                Where
              </span>

              {/* "TALENT" moves mid left */}
              <span
                data-cursor-invert="true"
                className="inline-block transform-gpu will-change-transform relative text-[#171717] cursor-default"
                style={{
                  transform: `translateX(${leftShiftSmall}px) rotate(${scrollProgress * -2.5}deg)`,
                }}
              >
                <span className="relative z-10">Talent</span>
                <span className="absolute bottom-1.5 left-0 w-full h-3 sm:h-4 bg-[#FFD43B] -z-0 -rotate-1 rounded-sm opacity-90" />
              </span>

              {/* "MEETS" moves mid right */}
              <span
                data-cursor-invert="true"
                className="inline-block transform-gpu will-change-transform text-[#171717] cursor-default"
                style={{
                  transform: `translateX(${rightShiftSmall}px) rotate(${scrollProgress * 2.5}deg)`,
                }}
              >
                Meets
              </span>

              {/* "OPPORTUNITY." moves far right */}
              <span
                data-cursor-invert="true"
                className="inline-block transform-gpu will-change-transform text-amber-600 drop-shadow-xs cursor-default"
                style={{
                  transform: `translateX(${rightShiftLarge}px) rotate(${scrollProgress * 5}deg)`,
                }}
              >
                Opportunity.
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* LAYER B: THE INFO & JOB LISTINGS (WRITTEN DIRECTLY)      */}
          {/* ======================================================== */}
          <div
            className="w-full flex flex-col justify-center transition-all duration-75"
            style={{
              opacity: infoOpacity,
              transform: `translateY(${infoTranslateY}px) scale(${infoScale}) perspective(1000px) rotateY(${tiltAngle * 0.2}deg)`,
              pointerEvents: infoOpacity >= 0.7 ? "auto" : "none",
              display: infoOpacity <= 0.01 ? "none" : "block",
            }}
          >
            {jobs.length === 0 ? (
              /* CLEAN DIRECT EMPTY STATE: Dynamic Witty Variations on Refresh */
              <div className="py-6 text-center max-w-xl mx-auto">
                <h3
                  data-cursor-invert="true"
                  className="text-3xl sm:text-5xl font-black text-[#171717] uppercase tracking-tight leading-[1.05] cursor-default"
                >
                  {emptyState.headline}
                </h3>

                <p className="mt-4 text-base sm:text-lg font-bold text-amber-700 tracking-tight">
                  {emptyState.subheadline}
                </p>

                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-md mx-auto">
                  {emptyState.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="mailto:careers@theboredmonkey.com"
                    className="btn-primary text-sm px-6 py-3.5 flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 transition-all font-bold"
                  >
                    <span>{emptyState.cta}</span>
                  </a>

                  {isTeamUser && (
                    <button
                      type="button"
                      onClick={() => {
                        sessionStorage.setItem("tbm_team_auth", "true");
                        setIsTeamModalOpen(true);
                      }}
                      className="btn-secondary text-sm px-5 py-3.5 flex items-center gap-2 hover:bg-[#FFF9E8] cursor-pointer font-bold"
                    >
                      <Plus className="h-4 w-4 text-amber-600" />
                      <span>Team: Create an Opening</span>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* WHEN JOBS EXIST: Clean list of jobs */
              <div>
                {/* Search & Categories */}
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search by role or skill..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#FFD43B] shadow-2xs"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-[#171717] text-white"
                            : "bg-white text-slate-700 hover:bg-[#FFF9E8] border border-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}

                    {isTeamUser && (
                      <button
                        type="button"
                        onClick={() => {
                          sessionStorage.setItem("tbm_team_auth", "true");
                          setIsTeamModalOpen(true);
                        }}
                        className="btn-primary text-xs px-3 py-1 flex items-center gap-1 font-bold shadow-xs cursor-pointer ml-1"
                      >
                        <Plus className="h-3 w-3" />
                        <span>Post Job</span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="max-h-[55vh] overflow-y-auto pr-2 scrollbar-thin divide-y divide-slate-200/80">
                  {filteredJobs.map((job, index) => {
                    const salary = formatSalary(job.salaryMin, job.salaryMax, job.currency);
                    const indexStr = String(index + 1).padStart(2, "0");

                    return (
                      <div
                        key={job.id}
                        className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-all hover:bg-[#FFFDF9] px-3 sm:px-4 rounded-2xl"
                      >
                        <div className="flex-1 min-w-0">
                          {/* Top Meta Line: Index, Category, Location, Type */}
                          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                            <span className="text-amber-600 font-mono font-black">{indexStr}</span>
                            <span>/</span>
                            <span className="text-slate-900 font-black">{job.category}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{jobTypeLabel(job.type)}</span>
                            {job.featured && (
                              <span className="text-[10px] bg-[#FFD43B] text-[#171717] px-2 py-0.5 rounded-full font-black">
                                Featured
                              </span>
                            )}
                          </div>

                          {/* Large Role Title */}
                          <h3
                            data-cursor-invert="true"
                            className="text-xl sm:text-2xl font-black text-[#171717] tracking-tight group-hover:text-amber-600 transition-colors cursor-default"
                          >
                            {job.title}
                          </h3>

                          {/* 1-line concise snippet */}
                          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 line-clamp-1 max-w-xl font-normal">
                            {job.description}
                          </p>
                        </div>

                        {/* Action trigger */}
                        <div className="flex items-center gap-4 shrink-0">
                          {salary && (
                            <span className="text-xs font-bold text-slate-600 hidden sm:inline-block">
                              {salary}
                            </span>
                          )}

                          <button
                            type="button"
                            onClick={() => setActiveJobForModal(job)}
                            className="inline-flex items-center gap-2 rounded-full bg-[#171717] text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-all shadow-sm group-hover:scale-105 active:scale-95 cursor-pointer"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Empty padding spacer to balance layout without the removed bottom bar */}
        <div className="h-4" />
      </div>

      {/* ======================================================== */}
      {/* APPLICATION MODAL (EACH JOB HAS A DIRECT FILL-OUT FORM)   */}
      {/* ======================================================== */}
      {/* ======================================================== */}
      {/* STUDIO SLIDE-OVER APPLICATION CANVAS (NO CARDS)          */}
      {/* ======================================================== */}
      {activeJobForModal && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300">
          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setActiveJobForModal(null)}
            aria-hidden="true"
          />

          {/* Slide-over Studio Drawer */}
          <div className="relative w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col z-10 overflow-hidden border-l border-slate-200 animate-slide-in-right">
            {/* Top Navigation Bar: Minimalist Back & Close */}
            <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-slate-100 bg-white sticky top-0 z-10">
              <button
                type="button"
                onClick={() => setActiveJobForModal(null)}
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-black transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Openings</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveJobForModal(null)}
                className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#171717] hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Content: Editorial Details & Direct Application */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-8 scrollbar-thin">
              {/* Role Header (NO 'The Bored Monkey - Application' badge) */}
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                  <span className="text-amber-600 font-mono font-black">ROLE</span>
                  <span>/</span>
                  <span className="text-slate-900 font-black">{activeJobForModal.category}</span>
                  <span>•</span>
                  <span>{activeJobForModal.location}</span>
                  <span>•</span>
                  <span>{jobTypeLabel(activeJobForModal.type)}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#171717] tracking-tight">
                  {activeJobForModal.title}
                </h2>

                {(activeJobForModal.salaryMin || activeJobForModal.salaryMax) && (
                  <p className="mt-2 text-xs font-bold text-slate-600">
                    Compensation: {formatSalary(activeJobForModal.salaryMin, activeJobForModal.salaryMax, activeJobForModal.currency)}
                  </p>
                )}
              </div>

              {/* Role Overview (Clean Editorial Prose - NO GREY CARD BOX!) */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  About the Role
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {activeJobForModal.description}
                </p>

                {activeJobForModal.requirements && activeJobForModal.requirements.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Key Requirements:
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                      {activeJobForModal.requirements.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Candidate Application Form */}
              <div className="pt-6 border-t border-slate-200">
                <div className="mb-6">
                  <h3 className="text-lg font-black text-[#171717] tracking-tight">
                    Candidate Application
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct submission to our creative talent leads. No account required.
                  </p>
                </div>

                <ApplyForm
                  jobId={activeJobForModal.id}
                  jobTitle={activeJobForModal.title}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TEAM-ONLY JOB POSTING MODAL                               */}
      {/* ======================================================== */}
      <TeamJobModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        onJobCreated={handleJobCreated}
      />
    </div>
  );
}
