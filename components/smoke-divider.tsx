import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type SmokeDividerProps = {
  className?: string;
};

const SmokeDivider = ({ className }: SmokeDividerProps) => (
  <div
    aria-hidden="true"
    className={cn(
      "relative h-32 md:h-40 overflow-visible pointer-events-none",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/0 to-background/95 z-0 pointer-events-none" />
    <span
      className="smoke-cloud z-10"
      style={
        {
          "--smoke-duration": "16s",
          "--smoke-delay": "0s",
          "--smoke-start": "20%",
          "--smoke-end": "-12%",
        } as CSSProperties
      }
    />
    <span
      className="smoke-cloud z-10"
      data-variant="wide"
      style={
        {
          "--smoke-duration": "20s",
          "--smoke-delay": "2.4s",
          "--smoke-start": "24%",
          "--smoke-end": "-18%",
        } as CSSProperties
      }
    />
    <span
      className="smoke-cloud z-10"
      data-variant="narrow"
      style={
        {
          "--smoke-duration": "14s",
          "--smoke-delay": "1.2s",
          "--smoke-start": "16%",
          "--smoke-end": "-10%",
        } as CSSProperties
      }
    />
  </div>
);

export default SmokeDivider;
