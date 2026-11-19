"use client";

import { useEffect, useState, useRef } from "react";

export function SplitSlogan() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const currentMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      // Split takes effect over the first 350px of scroll
      const progress = Math.min(1, Math.max(0, window.scrollY / 320));
      targetProgressRef.current = progress;
    };

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      targetMouseRef.current = { x: normX, y: normY };
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;
    const update = () => {
      // Smooth lerp for buttery continuous motion
      currentProgressRef.current +=
        (targetProgressRef.current - currentProgressRef.current) * 0.1;
      currentMouseRef.current.x +=
        (targetMouseRef.current.x - currentMouseRef.current.x) * 0.08;
      currentMouseRef.current.y +=
        (targetMouseRef.current.y - currentMouseRef.current.y) * 0.08;

      setScrollProgress(currentProgressRef.current);
      setMouseOffset({
        x: currentMouseRef.current.x,
        y: currentMouseRef.current.y,
      });

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Compute word offsets based on scroll progress and cursor position
  // As scrollProgress increases (scrolling down): Left words travel left, Right words travel right!
  // As scrollProgress decreases (scrolling up): Words seamlessly return to center!
  const leftShiftLarge = -(scrollProgress * 140) + mouseOffset.x * 25;
  const leftShiftSmall = -(scrollProgress * 65) + mouseOffset.x * 15;
  const rightShiftSmall = scrollProgress * 65 + mouseOffset.x * 15;
  const rightShiftLarge = scrollProgress * 140 + mouseOffset.x * 25;

  const tiltAngle = mouseOffset.x * 4;

  return (
    <div className="relative my-4 select-none py-2 overflow-hidden">
      <div
        className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05]"
        style={{
          transform: `perspective(1000px) rotateY(${tiltAngle * 0.4}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* WORD 1: WHERE (moves far left) */}
        <span
          className="inline-block transform-gpu will-change-transform text-[#171717] transition-colors"
          style={{
            transform: `translateX(${leftShiftLarge}px) rotate(${scrollProgress * -4}deg)`,
          }}
        >
          Where
        </span>

        {/* WORD 2: TALENT (moves slightly left with golden accent) */}
        <span
          className="inline-block transform-gpu will-change-transform relative text-[#171717]"
          style={{
            transform: `translateX(${leftShiftSmall}px) rotate(${scrollProgress * -2}deg)`,
          }}
        >
          <span className="relative z-10">Talent</span>
          <span
            className="absolute bottom-1 left-0 w-full h-3 bg-[#FFD43B] -z-0 -rotate-1 rounded-sm opacity-90 transition-transform duration-300"
            style={{
              transform: `scaleX(${1 - scrollProgress * 0.15})`,
            }}
          />
        </span>

        {/* WORD 3: MEETS (moves slightly right) */}
        <span
          className="inline-block transform-gpu will-change-transform text-[#171717]"
          style={{
            transform: `translateX(${rightShiftSmall}px) rotate(${scrollProgress * 2}deg)`,
          }}
        >
          Meets
        </span>

        {/* WORD 4: OPPORTUNITY (moves far right with amber highlight) */}
        <span
          className="inline-block transform-gpu will-change-transform text-amber-600 drop-shadow-xs"
          style={{
            transform: `translateX(${rightShiftLarge}px) rotate(${scrollProgress * 4}deg)`,
          }}
        >
          Opportunity.
        </span>
      </div>

      {/* Sub-indicator hint for user */}
      <div className="mt-3 text-center">
        <span
          className="inline-block text-[11px] font-bold text-slate-400 uppercase tracking-widest transition-opacity duration-300"
          style={{ opacity: Math.max(0.2, 1 - scrollProgress * 1.5) }}
        >
          ✦ Scroll down to divide · Scroll up to reunite · Cursor moves letters ✦
        </span>
      </div>
    </div>
  );
}
