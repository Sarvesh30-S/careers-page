"use client";

import { useState } from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ScrollBuild } from "@/components/ui/ScrollBuild";
import { Lightbulb, Palette, FlaskConical, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

export function PhilosophySection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: "think",
      stepNumber: "01",
      name: "THINK",
      tagline: "Strategic Dissection & Insights",
      icon: Lightbulb,
      description:
        "Every viral campaign starts as an analytical observation. We dig into comment sections, culture trends, customer friction points, and competitor blindspots.",
      deliverables: [
        "Audience Archetyping",
        "Competitor White-Space Analysis",
        "Core Narrative Hypotheses",
      ],
      quote: "Insight before aesthetic. Always.",
      themeColor: "from-amber-400 to-yellow-500",
      accentBg: "bg-amber-500/10",
      accentBorder: "border-amber-400",
    },
    {
      id: "create",
      stepNumber: "02",
      name: "CREATE",
      tagline: "Unapologetic Art Direction & Copy",
      icon: Palette,
      description:
        "We translate strategy into arresting scripts, dynamic storyboards, and visual hooks designed to stop the infinite scroll in the first 0.8 seconds.",
      deliverables: [
        "First-3-Seconds Hook Matrix",
        "High-Energy Visual Scripts",
        "Creative Director Signoff",
      ],
      quote: "If it doesn't provoke emotion, start over.",
      themeColor: "from-yellow-400 to-amber-500",
      accentBg: "bg-yellow-500/10",
      accentBorder: "border-yellow-400",
    },
    {
      id: "experiment",
      stepNumber: "03",
      name: "EXPERIMENT",
      tagline: "Rapid Iterations & Micro-Testing",
      icon: FlaskConical,
      description:
        "We treat content like code. We produce alternative hooks, thumbnail variations, and sound beds to test narrative elasticity across creator cohorts.",
      deliverables: [
        "Multi-Hook A/B Variations",
        "Audience Sentiment Polling",
        "Pacing & Sound Optimization",
      ],
      quote: "The algorithm rewards the curious and the swift.",
      themeColor: "from-amber-500 to-orange-500",
      accentBg: "bg-orange-500/10",
      accentBorder: "border-orange-400",
    },
    {
      id: "execute",
      stepNumber: "04",
      name: "EXECUTE",
      tagline: "Cinematic Studio & Creator Deployment",
      icon: Rocket,
      description:
        "Cameras roll, lights flare, and creator collaborations activate. We deliver broadcast-quality production with internet-native pacing.",
      deliverables: [
        "Full Studio Filming & Lighting",
        "Frame-by-Frame Motion Polish",
        "Omni-Platform Distribution",
      ],
      quote: "Excellence in every frame. No compromises.",
      themeColor: "from-yellow-500 to-amber-600",
      accentBg: "bg-amber-600/10",
      accentBorder: "border-amber-500",
    },
    {
      id: "grow",
      stepNumber: "05",
      name: "GROW",
      tagline: "Compounding Impact & Flywheel Momentum",
      icon: TrendingUp,
      description:
        "We analyze real business metrics—shares, saves, organic brand searches, and conversions—to feed back into the next creative cycle.",
      deliverables: [
        "Attribution & Reach Reporting",
        "Organic Flywheel Optimization",
        "Repeatable Playbook Synthesis",
      ],
      quote: "Creative energy converted into enterprise value.",
      themeColor: "from-amber-400 to-yellow-600",
      accentBg: "bg-yellow-400/15",
      accentBorder: "border-[#FFD43B]",
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Build */}
        <ScrollBuild direction="up" depth={90}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#171717] border border-[#FFD43B]/60 shadow-xs">
              <span>Chapter 03 · Our Creative Philosophy</span>
            </div>

            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#171717]">
              How We Turn Ideas Into Impact
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white/60 inline-block">
              A battle-tested 5-phase flywheel connecting creative audacity with
              rigorous execution. Click through each phase to discover how we operate.
            </p>
          </div>
        </ScrollBuild>

        {/* 5-Step Interactive Process Navigation with Scroll Build */}
        <ScrollBuild direction="up" depth={100} className="mt-14">
          <div className="flex items-center justify-between border-b border-slate-200/80 overflow-x-auto pb-4 gap-2 scrollbar-none bg-white/40 backdrop-blur-xs p-2 rounded-2xl">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 min-w-[130px] p-3.5 rounded-xl text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#171717] text-white shadow-xl -translate-y-1 scale-102"
                      : "bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-[#FFF9E8] hover:text-[#171717] border border-slate-200/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-black ${
                        isSelected ? "text-[#FFD43B]" : "text-slate-400"
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <Icon
                      className={`h-4 w-4 ${
                        isSelected ? "text-[#FFD43B]" : "text-slate-400"
                      }`}
                    />
                  </div>
                  <div className="mt-2 text-sm font-black uppercase tracking-wider">
                    {step.name}
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollBuild>

        {/* Dynamic Interactive Stage Showcase */}
        <ScrollBuild direction="scale" depth={90} className="mt-10">
          <TiltCard>
            <div className="relative rounded-3xl bg-white/85 backdrop-blur-md border-2 border-slate-200 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
              {/* Giant Watermark Background Number */}
              <div className="pointer-events-none absolute right-4 -bottom-10 text-[180px] sm:text-[240px] font-black text-slate-200/35 select-none font-mono leading-none -z-0">
                {current.stepNumber}
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Description */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-700 shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-[#FFD43B]" />
                    Phase {current.stepNumber} of 05
                  </div>

                  <h3 className="mt-4 text-3xl sm:text-5xl font-black uppercase text-[#171717] tracking-tight">
                    {current.name} —{" "}
                    <span className="text-amber-600 font-bold text-2xl sm:text-3xl block sm:inline">
                      {current.tagline}
                    </span>
                  </h3>

                  <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Quote */}
                  <blockquote className="mt-6 border-l-4 border-[#FFD43B] pl-4 italic text-slate-800 font-medium bg-[#FFF9E8]/50 p-3 rounded-r-xl">
                    &quot;{current.quote}&quot;
                  </blockquote>

                  {/* Next Step Shortcut Button */}
                  <div className="mt-8 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                      className="btn-primary text-xs uppercase px-6 py-3 font-bold cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      Next Phase →
                    </button>
                    <span className="text-xs text-slate-500 font-medium">
                      Press to cycle through flywheel
                    </span>
                  </div>
                </div>

                {/* Right Interactive Card: Deliverables & Specs */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-lg">
                    <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                      <div className="h-10 w-10 rounded-xl bg-[#FFF9E8] border border-[#FFD43B]/60 flex items-center justify-center text-[#171717] shadow-xs">
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase text-slate-400">
                          Phase Output
                        </div>
                        <div className="text-base font-extrabold text-[#171717]">
                          Key Deliverables
                        </div>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {current.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500 flex justify-between">
                      <span>TBM Standard Operating Framework</span>
                      <span className="font-bold text-[#171717]">100% Agency Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollBuild>
      </div>
    </section>
  );
}
