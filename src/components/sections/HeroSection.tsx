"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Sparkles, Compass } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroSection({ totalJobs }: { totalJobs: number }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = textContentRef.current;
    if (!el) return;

    // As user scrolls down, hero text translates up and fades into 3D perspective
    const anim = gsap.to(el, {
      y: -120,
      opacity: 0.15,
      scale: 0.92,
      rotateX: -10,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden px-4 pt-10 pb-12 sm:px-6 lg:px-8 select-none"
    >
      {/* Top Banner / Ticker Badge */}
      <div className="relative mx-auto max-w-7xl w-full pt-4 sm:pt-6 z-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-md px-4 py-1.5 border border-[#FFD43B]/70 shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD43B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD43B]" />
            </span>
            <span className="text-xs font-black uppercase tracking-wider text-[#171717]">
              Now Hiring · {totalJobs} Creative Roles
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-bold text-slate-600 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 shadow-xs uppercase tracking-widest">
            <span>Mumbai Studio HQ</span>
            <span className="text-[#FFD43B]">✦</span>
            <span>Creator Collabs</span>
            <span className="text-[#FFD43B]">✦</span>
            <span>Hybrid & Remote</span>
          </div>
        </div>
      </div>

      {/* Main Hero Typography & Callout */}
      <div
        ref={textContentRef}
        className="relative mx-auto max-w-7xl w-full my-auto py-10 z-10 transform-gpu will-change-transform"
        style={{ perspective: "1000px" }}
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF9E8]/90 backdrop-blur-sm px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#171717] border border-[#FFD43B]/60 mb-6 shadow-xs">
            <Compass className="h-3.5 w-3.5 text-amber-600 animate-spin [animation-duration:12s]" />
            <span>Interactive 3D Careers Experience</span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#171717] leading-[0.95] uppercase">
            <span className="block drop-shadow-xs">
              We Think{" "}
              <span className="relative inline-block text-[#FFD43B] drop-shadow-md">
                Different
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#171717] -z-10 -rotate-1 rounded-sm" />
              </span>
              .
            </span>
            <span className="block mt-3 text-[#171717]">
              We Create Different.
            </span>
            <span className="block mt-3 text-slate-400 hover:text-[#171717] transition-colors duration-300">
              We Grow Together.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-2xl text-slate-700 leading-relaxed max-w-2xl font-normal bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white/40">
            Strategy meets creativity. Ideas become impact. And great people make
            it happen. Find your place at{" "}
            <strong className="text-[#171717] font-black">The Bored Monkey</strong>.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#open-roles"
              className="btn-primary text-base px-8 py-4 shadow-xl hover:scale-105 active:scale-95 transition-all group flex items-center gap-2"
            >
              <span>EXPLORE OPEN ROLES</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#about-tbm"
              className="btn-secondary bg-white/80 backdrop-blur-md text-base px-7 py-4 group flex items-center gap-2 hover:bg-white"
            >
              <span>DISCOVER OUR WORLD</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Teams Bar */}
          <div className="mt-10 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="text-slate-400 font-bold uppercase mr-1">Specialties:</span>
            {[
              "Influencer Marketing",
              "Video Production",
              "Brand Strategy",
              "Motion Design",
              "Creator Relations",
              "3D & Creative Tech",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/80 backdrop-blur-sm px-3.5 py-1 text-slate-700 border border-slate-200/80 shadow-xs hover:border-[#FFD43B] hover:text-[#171717] transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt Bar */}
      <div className="relative mx-auto max-w-7xl w-full pb-4 z-10 flex items-center justify-between border-t border-slate-200/60 pt-4 text-xs text-slate-500">
        <div className="flex items-center gap-2 font-mono font-bold uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5 text-[#FFD43B]" />
          <span>The Bored Monkey · 3D Spatial Canvas</span>
        </div>

        <a
          href="#about-tbm"
          className="inline-flex items-center gap-2 font-black text-slate-700 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-xs hover:bg-[#FFD43B] hover:text-[#171717] transition-all group"
        >
          <span>Scroll down to build the agency world</span>
          <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
