import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactDetails = [
  {
    label: "Visit Us",
    value: "3590 Holland Road, Suite 109, Virginia Beach VA",
  },
  {
    label: "Call",
    value: "(757) 657-8155",
    href: "tel:17576578155",
  },
  {
    label: "Email",
    value: "info@smokeezvb.com",
    href: "mailto:info@smokeezvb.com",
  },
  {
    label: "Hours",
    value: "Daily · 9:00 AM – 9:00 PM",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-(--breakpoint-xl) mx-auto w-full py-16 xs:py-20 px-6"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
        <div className="space-y-6">
          <Badge className="rounded-full border-none bg-primary text-primary-foreground">
            Let&apos;s Connect
          </Badge>
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold tracking-tight uppercase">
            Contact Smokeez
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Whether you&apos;re planning your first visit or have a question about
            our latest drops, the Smokeez crew is here to help. Reach out or
            drop by and we&apos;ll get you set up.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {contactDetails.map(({ label, value, href }) => (
              <div
                key={label}
                className="rounded-2xl border border-border/70 bg-background/80 p-5 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {label}
                </p>
                {href ? (
                  <Link
                    href={href}
                    className="mt-3 block text-lg font-semibold hover:text-primary"
                  >
                    {value}
                  </Link>
                ) : (
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="tel:15125550123">Call The Shop</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="mailto:info@smokeezvb.com">Email Us</Link>
            </Button>
          </div>
        </div>

        <form className="rounded-[2rem] border border-border/70 bg-background/80 p-8 shadow-lg shadow-black/5 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-primary/60"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-primary/60"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="How can our team help you?"
              rows={5}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-primary/60"
            />
          </div>
          <Button type="submit" className="w-full rounded-full text-base">
            Send Message
          </Button>
          <p className="text-xs text-muted-foreground">
            We typically respond within the same day during shop hours.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
