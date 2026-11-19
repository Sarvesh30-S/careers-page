"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollBuildProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  direction?: "up" | "scale" | "left" | "right";
  stagger?: boolean;
}

export function ScrollBuild({
  children,
  className = "",
  depth = 80,
  direction = "up",
  stagger = false,
}: ScrollBuildProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = elementRef.current;
    if (!el) return;

    let initialVars: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") {
      initialVars = { opacity: 0, y: depth, scale: 0.96, rotateX: 6 };
    } else if (direction === "scale") {
      initialVars = { opacity: 0, scale: 0.88, y: depth * 0.5 };
    } else if (direction === "left") {
      initialVars = { opacity: 0, x: -depth, scale: 0.96 };
    } else if (direction === "right") {
      initialVars = { opacity: 0, x: depth, scale: 0.96 };
    }

    const targets = stagger && el.children.length > 0 ? Array.from(el.children) : el;

    const anim = gsap.fromTo(
      targets,
      initialVars,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotateX: 0,
        ease: "power2.out",
        stagger: stagger ? 0.08 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "top 42%",
          scrub: 0.8, // 100% reversible scrub with smooth catch-up
        },
      }
    );

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [depth, direction, stagger]);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu will-change-transform ${className}`}
      style={{ perspective: "1200px" }}
    >
      {children}
    </div>
  );
}
