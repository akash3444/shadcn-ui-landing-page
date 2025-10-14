import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Testimonial from "@/components/testimonial";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Reveal variant="fade" once>
        <Hero />
      </Reveal>
      <Reveal variant="up" delay={100} once>
        <Features />
      </Reveal>
      <Reveal variant="up" delay={150} once>
        <FAQ />
      </Reveal>
      <Reveal variant="up" delay={200} once>
        <Testimonial />
      </Reveal>
      <Reveal variant="up" delay={250} once>
        <Contact />
      </Reveal>
      <Reveal variant="fade" delay={300} once>
        <Footer />
      </Reveal>
    </>
  );
}
