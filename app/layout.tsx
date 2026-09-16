import type { Metadata } from "next";
import { Marcellus, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Beautiful Shadcn UI Landing Page",
  description:
    "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
  keywords: [
    "Shadcn UI Landing Page",
    "Shadcn UI Blocks",
    "Shadcn UI",
    "Landing Page",
    "Tailwind CSS Landing Page",
    "Beautiful Shadcn UI Landing Page",
    "Next.js 15 Landing Page",
    "Simple Landing Page",
    "Landing Page Template",
    "Landing Page Design",
  ],
  openGraph: {
    type: "website",
    siteName: "Shadcn Landing Page",
    locale: "en_US",
    url: "https://shadcn-landing-page.vercel.app",
    title: "Shadcn Landing Page",
    description:
      "A beautiful landing page built with Shadcn UI, Next.js 15, Tailwind CSS, and Shadcn UI Blocks.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn UI Landing Page Preview",
      },
    ],
  },
  authors: [
    {
      name: "Akash Moradiya",
      url: "https://shadcnui-blocks.com",
    },
  ],
  creator: "Akash Moradiya",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
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
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className='antialiased'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
