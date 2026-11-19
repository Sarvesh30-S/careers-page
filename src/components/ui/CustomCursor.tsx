"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [isTextInverted, setIsTextInverted] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Check hover targets on mouse move as well for zero latency
      const target = e.target as HTMLElement | null;
      if (target) {
        const isText = !!target.closest("[data-cursor-invert='true'], .hover-invert");
        setIsTextInverted(isText);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInput = !!target.closest("input, textarea, select");
      setIsOverInput(isInput);

      const isInteractive = !!target.closest(
        "a, button, [role='button'], .cursor-pointer, summary, [tabindex]:not([tabindex='-1'])"
      );
      setIsHovered(isInteractive);

      const isText = !!target.closest("[data-cursor-invert='true'], .hover-invert");
      setIsTextInverted(isText);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver);

    // Smooth inertia lerp for the outer ring / inversion lens
    let animationFrameId: number;
    const render = () => {
      // 0.16 gives fluid, elastic follow inertia
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  const shouldShow = isVisible && !isOverInput;

  return (
    <>
      {/* 1. Inner Central Dot: Sticks directly to mouse, hides when inverting text */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99999] transition-opacity duration-200 ${
          shouldShow && !isTextInverted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`h-1.5 w-1.5 rounded-full bg-[#171717] transition-all duration-150 ${
            isHovered ? "scale-150 bg-amber-500" : "scale-100"
          }`}
        />
      </div>

      {/* 2. Outer Trailing Ring & Inverting Difference Lens */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          mixBlendMode: isTextInverted ? "difference" : "normal",
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[99998] transition-opacity duration-200 ${
          shouldShow ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`rounded-full transition-all duration-200 ease-out ${
            isTextInverted
              ? "h-20 w-20 bg-white border-0 shadow-none scale-100"
              : isHovered
              ? "h-12 w-12 border-2 border-amber-500 bg-amber-500/10 scale-100"
              : isClicked
              ? "h-7 w-7 border-[1.5px] border-slate-800 bg-slate-900/10 scale-100"
              : "h-9 w-9 border-[1.5px] border-[#555555] scale-100"
          }`}
        />
      </div>
    </>
  );
}
