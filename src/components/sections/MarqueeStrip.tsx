"use client";

export function MarqueeStrip() {
  const items = [
    "INFLUENCER MARKETING",
    "STRATEGIC STORYTELLING",
    "500M+ VIEWS GENERATED",
    "VIRAL CONTENT PLAYBOOKS",
    "HIGH-IMPACT VIDEO PRODUCTION",
    "CREATOR CAMPAIGNS",
    "MEASURABLE BRAND IMPACT",
    "MUMBAI CREATIVE HQ",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#171717] py-4 sm:py-5 border-y border-[#FFD43B]/40 shadow-inner select-none">
      {/* Subtle Yellow Gradient Glow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#171717] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#171717] to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-6 mx-4">
            <span className="text-sm sm:text-base font-black tracking-widest text-[#FFD43B] uppercase">
              {text}
            </span>
            <span className="text-white/40 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
