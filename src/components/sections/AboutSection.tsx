"use client";

import { TiltCard } from "@/components/ui/TiltCard";
import { ScrollBuild } from "@/components/ui/ScrollBuild";
import {
  Brain,
  Video,
  Users2,
  TrendingUp,
  Flame,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: Brain,
      title: "Strategic Thinking",
      desc: "We don't guess what goes viral. We study cultural cues, audience behavior, and category whitespace to architect campaigns that stick.",
      badge: "Foundation",
    },
    {
      icon: Users2,
      title: "Influencer Partnerships",
      desc: "Connecting brands with storytellers who actually command attention. Meaningful creator matchmaking with zero fabricated hype.",
      badge: "Network",
    },
    {
      icon: Video,
      title: "Video Production",
      desc: "From thumb-stopping vertical reels to cinematic brand narratives. In-house studio, elite editors, and colorists obsessed with craft.",
      badge: "Studio",
    },
    {
      icon: Layers,
      title: "Content Playbooks",
      desc: "Repeatable, scalable content engines engineered for organic distribution across Instagram, YouTube, and digital platforms.",
      badge: "Scale",
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact",
      desc: "Vanity metrics don't pay bills. We tie creative storytelling directly to conversion, brand equity, and verifiable business growth.",
      badge: "Performance",
    },
    {
      icon: Flame,
      title: "Culture & Speed",
      desc: "The internet moves in hours, not quarters. We act fast, test fearlessly, and ship high-energy campaigns while trends are hot.",
      badge: "Velocity",
    },
  ];

  return (
    <section id="about-tbm" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reversible Scroll Build */}
        <ScrollBuild direction="up" depth={90}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#171717] border border-[#FFD43B]/80 shadow-xs">
              <Sparkles className="h-3 w-3 text-amber-600" />
              <span>Chapter 01 · About The Bored Monkey</span>
            </div>

            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#171717] leading-[1.02]">
              Not Just Creative Thinkers.{" "}
              <span className="relative inline-block text-[#171717]">
                We Are Creative Doers.
                <span className="absolute bottom-1 left-0 w-full h-3.5 bg-[#FFD43B] -z-10 -rotate-1 rounded-sm" />
              </span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-slate-700 leading-relaxed font-normal bg-white/60 backdrop-blur-xs p-4 rounded-2xl border border-white/60 shadow-xs">
              The Bored Monkey operates at the nexus of{" "}
              <strong className="text-[#171717] font-extrabold">ruthless strategy</strong>,{" "}
              <strong className="text-[#171717] font-extrabold">creator marketing</strong>, and{" "}
              <strong className="text-[#171717] font-extrabold">arresting visual storytelling</strong>.
              We don’t produce wallpaper—we engineer digital movements.
            </p>
          </div>
        </ScrollBuild>

        {/* 6 Core Pillars Grid with 3D Tilt Cards & Scroll Assembly */}
        <ScrollBuild direction="up" depth={120} stagger className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <TiltCard key={pillar.title} className="h-full">
                  <div className="relative h-full flex flex-col justify-between p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-md hover:border-[#FFD43B] hover:shadow-2xl hover:bg-white transition-all duration-300 group">
                    {/* Top indicator */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl bg-[#FFF9E8] border border-[#FFD43B]/60 flex items-center justify-center text-[#171717] group-hover:bg-[#FFD43B] group-hover:scale-110 transition-all duration-300 shadow-xs">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 bg-slate-100/90 px-3 py-1 rounded-full group-hover:bg-[#FFF9E8] group-hover:text-[#171717] transition-colors border border-slate-200/60">
                        {pillar.badge}
                      </span>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-extrabold text-[#171717] group-hover:text-amber-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-slate-700 group-hover:text-[#171717] group-hover:translate-x-1 transition-all">
                      <span>Explore pillar</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5 opacity-60 group-hover:opacity-100" />
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </ScrollBuild>

        {/* Dynamic Agency Metrics Strip */}
        <ScrollBuild direction="scale" depth={70} className="mt-16">
          <div className="rounded-2xl bg-[#171717]/95 backdrop-blur-md text-white p-8 sm:p-12 relative overflow-hidden border border-slate-700/80 shadow-2xl">
            <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FFD43B]/20 blur-3xl" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-5xl font-black text-[#FFD43B] font-mono">
                  500M+
                </div>
                <p className="mt-2 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                  Organic Views Generated
                </p>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-5xl font-black text-white font-mono">
                  250+
                </div>
                <p className="mt-2 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                  High-Impact Campaigns
                </p>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-5xl font-black text-[#FFD43B] font-mono">
                  100+
                </div>
                <p className="mt-2 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                  Top Creators Roster
                </p>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-5xl font-black text-white font-mono">
                  100%
                </div>
                <p className="mt-2 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                  In-House Studio Craft
                </p>
              </div>
            </div>
          </div>
        </ScrollBuild>
      </div>
    </section>
  );
}
