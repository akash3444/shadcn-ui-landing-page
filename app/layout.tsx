import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smokeezvb.com"),
  title: {
    default: "Smokeez Virginia Beach | Smoke Shop",
    template: "%s | Smokeez Virginia Beach",
  },
  description:
    "Smokeez is Virginia Beach's quality-first smoke shop, curating cannabinoids, glass, hookah supplies, and smoking accessories with a relaxed, knowledgeable vibe.",
  keywords: [
    "Smokeez Virginia Beach",
    "smoke shop Virginia Beach",
    "Delta 8",
    "CBD",
    "hookah",
    "vape",
    "glass pipes",
    "cannabis accessories",
  ],
  openGraph: {
    type: "website",
    siteName: "Smokeez Virginia Beach",
    locale: "en_US",
    url: "https://smokeezvb.com",
    title: "Smokeez Virginia Beach | Quality Smoke Shop",
    description:
      "Explore Smokeez Virginia Beach for curated cannabinoids, hookah gear, vape essentials, and accessories with knowledgeable guidance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smokeez Virginia Beach smoke shop preview",
      },
    ],
  },
  authors: [
    {
      name: "Smokeez Virginia Beach",
      url: "https://smokeezvb.com",
    },
  ],
  creator: "Smokeez Virginia Beach",
  publisher: "Smokeez Virginia Beach",
  category: "Retail",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/icons/1-cropped.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icons/1-cropped.png",
        type: "image/png",
      },
    ],

  },
  twitter: {
    card: "summary_large_image",
    title: "Smokeez Virginia Beach | Quality Smoke Shop",
    description:
      "Visit Smokeez Virginia Beach for curated cannabinoids, hookah gear, vape essentials, and accessories.",
    images: ["/og-image.png"],
  },
  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
