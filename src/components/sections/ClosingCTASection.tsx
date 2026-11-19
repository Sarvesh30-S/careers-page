"use client";

import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
import { ScrollBuild } from "@/components/ui/ScrollBuild";

export function ClosingCTASection() {
  return (
    <section className="relative py-32 sm:py-44 bg-transparent text-white overflow-hidden select-none">
      {/* Dark Ambient Backdrop with High Contrast Radial Glow for the 3D Singularity */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/90 to-[#171717] -z-10" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 z-10">
        <ScrollBuild direction="scale" depth={90}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FFD43B] border border-[#FFD43B]/40 shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-[#FFD43B]" />
            <span>Chapter 05 · The Final Portal</span>
          </div>

          <h2 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.98]">
            Let&apos;s Make Something{" "}
            <span className="block mt-2 text-[#FFD43B] underline decoration-white/40 decoration-4 underline-offset-8 drop-shadow-lg">
              That Matters.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            We&apos;re always interested in people who think differently,
            challenge ideas and create meaningful work. Find your seat at our table.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-roles"
              className="btn-primary text-base px-10 py-4 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 group flex items-center gap-2"
            >
              <span>COME CREATE WITH US</span>
              <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>

            <Link
              href="/employer"
              className="btn-secondary bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 text-base px-8 py-4"
            >
              Review Submissions
            </Link>
          </div>

          {/* Agency Footer Tags */}
          <div className="mt-16 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Strategy</span>
            <span className="text-[#FFD43B]">✦</span>
            <span>Influencer Marketing</span>
            <span className="text-[#FFD43B]">✦</span>
            <span>Production</span>
            <span className="text-[#FFD43B]">✦</span>
            <span>Creative Tech</span>
          </div>
        </ScrollBuild>
      </div>
    </section>
  );
}
