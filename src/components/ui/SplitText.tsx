import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type SplitType = "chars" | "words";
type Vars = gsap.TweenVars;

interface SplitTextProps {
  text: string;
  className?: string;

  delay?: number; // ms entre letras/palavras
  duration?: number;
  ease?: string;

  splitType?: SplitType;

  from?: Vars;
  to?: Vars;

  threshold?: number; // 0..1
  rootMargin?: string;

  textAlign?: "left" | "center" | "right" | "justify";
  onLetterAnimationComplete?: () => void;

  /** força cor branca mesmo com CSS global */
  forceWhite?: boolean;
}

export default function SplitText({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  forceWhite = true,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  const units = useMemo(() => {
    if (splitType === "words") {
      const parts = text.split(" ");
      return parts.map((w, i) => (i < parts.length - 1 ? `${w} ` : w));
    }
    return Array.from(text);
  }, [text, splitType]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = Array.from(el.querySelectorAll<HTMLElement>("[data-split]"));

    // define estado inicial
    gsap.set(targets, { ...from });

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        if (hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;

        gsap.to(targets, {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          onComplete: () => {
            onLetterAnimationComplete?.();
          },
        });

        observer.disconnect();
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, splitType]);

  const whiteStyle = forceWhite ? { color: "#ffffff" } : undefined;

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        display: "inline-block",
        textAlign,
        ...(whiteStyle ?? {}),
      }}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <span
          key={`${unit}-${i}`}
          data-split
          style={{
            display: "inline-block",
            whiteSpace: unit === " " ? "pre" : "normal",
            ...(whiteStyle ?? {}),
          }}
        >
          {unit === " " ? "\u00A0" : unit}
        </span>
      ))}
    </span>
  );
}
