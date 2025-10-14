import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { Smoke } from "@/components/ui/shadcn-io/smoke";

const heroHighlights = [
  "Delta 8",
  "THC-O",
  "CBD",
  "HHC",
  "Hookah",
  "Vape",
  "Tobacco",
  "More",
];

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <Smoke 
        opacity={0.5} 
        density={40} 
        color="hsl(var(--smoke-color))"
        className="absolute inset-0 z-0"
        enableWind={true}
        windStrength={[0.005, 0.005, 0.005]}
      />
      <div className="relative z-10 max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
          <div className="max-w-xl">
            <span className="relative flex h-25 w-full items-center ">
              <Image
                src="/icons/2-cropped.svg"
                alt="Smoke shop wordmark"
                width={700}
                height={200}
                className="w-full mb-8"
                priority
              />
            </span>

            <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight uppercase">
              A Smoke Shop for Those Who Enjoy Quality
            </h1>
            <p className="mt-6 max-w-[60ch] xs:text-lg text-muted-foreground">
              Smokeez is not your average smoke shop. We take pride in creating a
              relaxed atmosphere and delivering quality products. Whether you&apos;re
              an experienced smoker or looking for something new, Smokeez welcomes
              you.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base"
              >
                Explore Our Selection <ArrowUpRight className="h-5! w-5!" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full text-base shadow-none"
              >
                <CirclePlay className="h-5! w-5!" /> Visit Smokeez
              </Button>
            </div>
          </div>
          <div className="relative lg:max-w-lg xl:max-w-xl w-full rounded-[2rem] border border-border/70 bg-gradient-to-br from-muted via-background to-accent/80 shadow-lg shadow-black/5">
            <div className="absolute -top-14 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-6 h-32 w-32 rounded-full bg-accent/70 blur-3xl" />
            <div className="relative grid gap-6 p-8 sm:p-10">
              <div className="rounded-2xl border border-border/70 bg-background/90 p-6 shadow-md shadow-black/10 backdrop-blur-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  In-Store Atmosphere
                </span>
                <p className="mt-4 text-lg font-semibold leading-relaxed">
                  Relaxed vibes, welcoming faces, and shelves curated for smokers
                  who appreciate quality.
                </p>
              </div>

              <div className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-primary text-primary-foreground p-6 shadow-md shadow-black/15">
                <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/80">
                  What We Offer
                </span>
                <div className="grid grid-cols-2 gap-3 text-sm text-primary-foreground/90">
                  {heroHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-primary-foreground/20 bg-background/10 px-3 py-2 text-center uppercase tracking-[0.2em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-primary-foreground/85">
                  Our knowledgeable staff looks forward to helping you elevate
                  your smoking experience.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10"
            />
          </div>
        </div>
      </div>
  );
};

export default Hero;
