"use client";

import { useState } from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ScrollBuild } from "@/components/ui/ScrollBuild";
import { Sparkles, Camera, Users, Coffee, Trophy, Video } from "lucide-react";

export function CultureSection() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const cultureMoments = [
    {
      title: "Content War Rooms",
      tag: "Collaboration",
      desc: "Whiteboards full of hook ideas, script breakdowns, and raw brainstorms before every major shoot.",
      icon: Users,
      highlight: "High Energy",
      stat: "24/7 Ideas",
      bgGradient: "from-amber-500/10 via-yellow-400/5 to-transparent",
    },
    {
      title: "In-House Studio Shoots",
      tag: "Production",
      desc: "Lighting grids, high-speed lenses, dynamic set designs, and live monitoring with creator talent.",
      icon: Video,
      highlight: "State-of-the-Art",
      stat: "4K Cinema Gear",
      bgGradient: "from-orange-500/10 via-amber-400/5 to-transparent",
    },
    {
      title: "Behind The Scenes & Bloopers",
      tag: "BTS",
      desc: "The unscripted magic, giggles between takes, and serendipitous improvisations that make reels go viral.",
      icon: Camera,
      highlight: "Raw & Real",
      stat: "Unfiltered",
      bgGradient: "from-yellow-500/10 via-amber-300/5 to-transparent",
    },
    {
      title: "Creator Jam Sessions",
      tag: "Creators",
      desc: "Inviting top internet creators into our Mumbai creative hub to co-write, bounce perspectives, and experiment.",
      icon: Sparkles,
      highlight: "Creator DNA",
      stat: "50+ Collabs",
      bgGradient: "from-amber-400/10 via-yellow-200/5 to-transparent",
    },
    {
      title: "Fuel & Coffee Rituals",
      tag: "Vibe",
      desc: "Pour-overs, endless cold brews, impromptu snacks, and team lunches in the heart of Mumbai's creative quarter.",
      icon: Coffee,
      highlight: "Culture",
      stat: "Unlimited Fuel",
      bgGradient: "from-yellow-600/10 via-amber-400/5 to-transparent",
    },
    {
      title: "Celebrating Big Wins",
      tag: "Milestones",
      desc: "When a campaign crosses 20 million views or a client hits their record quarter, the whole monkey tribe celebrates.",
      icon: Trophy,
      highlight: "Shared Wins",
      stat: "Top Results",
      bgGradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
    },
  ];

  const tags = ["All", "Collaboration", "Production", "BTS", "Creators", "Culture"];

  const filteredMoments =
    activeTag === "All"
      ? cultureMoments
      : cultureMoments.filter(
          (m) => m.tag === activeTag || (activeTag === "Culture" && m.tag === "Vibe")
        );

  return (
    <section className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Build */}
        <ScrollBuild direction="up" depth={90}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#171717] border border-slate-200 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-[#FFD43B]" />
                <span>Chapter 02 · Life at The Bored Monkey</span>
              </div>

              <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#171717] leading-[1.02]">
                Good Ideas. Great People.{" "}
                <span className="block text-amber-600">Zero Ordinary Days.</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed bg-white/60 backdrop-blur-xs p-3 rounded-xl border border-white/60">
                We ditched corporate silos, boring decks, and passive bureaucracy.
                Instead, we built an agile, high-trust playground for hungry creative minds.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer shadow-xs ${
                    activeTag === tag
                      ? "bg-[#171717] text-white shadow-md scale-105"
                      : "bg-white/80 backdrop-blur-md text-slate-700 hover:bg-[#FFD43B] hover:text-[#171717] border border-slate-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </ScrollBuild>

        {/* Culture Cards Grid with 3D Tilt & Scroll Assembly */}
        <ScrollBuild direction="up" depth={120} stagger className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMoments.map((moment) => {
              const Icon = moment.icon;
              return (
                <TiltCard key={moment.title} className="h-full">
                  <div
                    className={`relative h-full flex flex-col justify-between p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#FFD43B] hover:bg-white transition-all duration-300 group overflow-hidden bg-gradient-to-br ${moment.bgGradient}`}
                  >
                    {/* Floating Top Tag */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF9E8] border border-[#FFD43B]/60 text-[#171717] shadow-xs">
                        <Icon className="h-3.5 w-3.5 text-amber-600" />
                        {moment.highlight}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {moment.stat}
                      </span>
                    </div>

                    {/* Body Content */}
                    <div className="my-8">
                      <h3 className="text-2xl font-black tracking-tight text-[#171717] group-hover:text-amber-600 transition-colors">
                        {moment.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                        {moment.desc}
                      </p>
                    </div>

                    {/* Bottom Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span className="uppercase tracking-wider">TBM Culture Deck</span>
                      <span className="text-[#FFD43B] font-bold group-hover:translate-x-1 transition-transform">
                        ✦ Inside Studio
                      </span>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </ScrollBuild>

        {/* Culture quote banner */}
        <ScrollBuild direction="scale" depth={80} className="mt-12">
          <div className="p-6 sm:p-10 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Our Core Creed
              </div>
              <div className="text-xl sm:text-2xl font-black text-[#171717] mt-1">
                &quot;Respect the audience&apos;s attention. Never make anything you wouldn&apos;t watch yourself.&quot;
              </div>
            </div>
            <a
              href="#open-roles"
              className="btn-primary whitespace-nowrap px-8 py-3.5 text-sm self-start sm:self-auto shadow-md"
            >
              JOIN OUR TRIBE
            </a>
          </div>
        </ScrollBuild>
      </div>
    </section>
  );
}
