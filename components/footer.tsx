import { Logo } from "@/components/navbar/logo";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, Mail } from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Shop",
    links: [
      {
        title: "Delta 8 & THC-O",
        href: "#features",
      },
      {
        title: "CBD & Wellness",
        href: "#features",
      },
      {
        title: "Hookah & Glass",
        href: "#features",
      },
      {
        title: "Vape Bar",
        href: "#features",
      },
    ],
  },
  {
    title: "Plan Your Visit",
    links: [
      {
        title: "Location & Directions",
        href: "#",
      },
      {
        title: "Store Hours",
        href: "#",
      },
      {
        title: "Events & Tastings",
        href: "#",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        title: "Contact Smokeez",
        href: "mailto:info@smokeezvb.com",
      },
      {
        title: "FAQ",
        href: "#faq",
      },
      {
        title: "Returns & Exchanges",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 px-6">
        <div className="space-y-4">
          <Logo />

          <p className="text-muted-foreground">
            Smokeez is Virginia Beach&apos;s quality-first smoke shop, curating cannabinoids,
            glass, and accessories for every kind of session.
          </p>

          <div className="space-y-1 text-sm text-muted-foreground">
            <p>3590 Holland Road, Suite 109, Virginia Beach VA</p>
            <p>Daily 9am - 9pm</p>
            <p>(757) 657-8155</p>
          </div>
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-4">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()} Smokeez Smoke Shop. All rights
          reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank" aria-label="Follow Smokeez on Instagram">
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank" aria-label="Connect with Smokeez on Facebook">
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link href="mailto:info@smokeezvb.com" aria-label="Email Smokeez">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
