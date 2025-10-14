"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  delay?: number; // ms
  once?: boolean;
  offset?: number; // root margin bottom offset trigger earlier
  variant?: "fade" | "up" | "down" | "left" | "right" | "scale";
  duration?: number; // ms
}

// Utility: map variant to starting transform
const variantClasses: Record<string, string> = {
  fade: "opacity-0 translate-y-0",
  up: "opacity-0 translate-y-6",
  down: "opacity-0 -translate-y-6",
  left: "opacity-0 -translate-x-6",
  right: "opacity-0 translate-x-6",
  scale: "opacity-0 scale-[0.96]",
};

export const Reveal: React.FC<RevealProps> = ({
  className,
  children,
  delay = 0,
  once = true,
  offset = 0,
  variant = "up",
  duration = 600,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: `0px 0px -${offset}px 0px`,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once, offset]);

  const baseVariant = variantClasses[variant] ?? variantClasses.up;

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(.4,0,.2,1), transform ${duration}ms cubic-bezier(.4,0,.2,1)`,
      }}
      className={cn(
        "will-change-transform will-change-opacity", // performance hint
        baseVariant,
        visible && "opacity-100 translate-x-0 translate-y-0 scale-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
