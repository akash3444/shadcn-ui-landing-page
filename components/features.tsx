import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Reveal from "./ui/reveal";
import { Box, Droplet, Flame, Leaf, Sparkles, Wind } from "lucide-react";
import Image from "next/image";

const offerings = [
  {
    icon: Leaf,
    title: "Delta 8 & THC-O",
    description:
      "Potent blends and trusted brands ready to deliver the elevated experience you&apos;re searching for.",
    image: "/grid/Delta-8.webp",
  },
  {
    icon: Droplet,
    title: "CBD Essentials",
    description:
      "From tinctures to topicals, explore calming options that balance body and mind.",
    image: "/grid/1718793274-choosing-the-ideal-strength-of-cbd-oil-for-fibromyalgia.avif",
  },
  {
    icon: Sparkles,
    title: "HHC & Novelty",
    description:
      "Stay ahead of the curve with emerging cannabinoids and specialty products curated by our staff.",
    image: "/grid/hexahydrocannabinol-1449460159.avif",

  },
  {
    icon: Wind,
    title: "Hookah & Glass",
    description:
      "Bowls, bases, hoses, and artful glass that keep sessions smooth, flavorful, and stylish.",
    image: "/grid/dreamstime_xxl_176376572-scaled-2-scaled.webp"
  },
  {
    icon: Flame,
    title: "Vape & Disposables",
    description:
      "Quality vape gear, coils, and disposables in the flavors you love, ready when you are.",
    image: "/grid/hand-holding-vape-smoke-in-background.avif"
  },
  {
    icon: Box,
    title: "Tobacco & Accessories",
    description:
      "Premium tobacco, wraps, and all the accessories needed to complete your ritual.",
    image: "/grid/tobacco-cigarettes-1500-1280x640.jpg"
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto uppercase">
        What We Offer
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground sm:text-center sm:mx-auto">
        We&apos;ve got the smoke and all of the supplies that go with it. Our
        knowledgeable staff is ready to help you elevate your smoking
        experience.
      </p>
      <div className="mt-10 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {offerings.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <Card
              className="flex flex-col border border-border/70 rounded-xl overflow-hidden shadow-none bg-background/80 backdrop-blur-sm h-full"
            >
              <CardHeader>
                <item.icon className="h-9 w-9 text-primary" />
                <h4 className="mt-3! text-xl font-bold tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-2 text-muted-foreground text-sm xs:text-[17px] leading-relaxed">
                  {item.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                {item.image && (
                  <div className="relative w-full aspect-[2/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Features;
