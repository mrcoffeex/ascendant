import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import brandIcon from "./icon.png";
import { MotionReadout } from "./components/MotionReadout";
import { PageLoader } from "./components/PageLoader";
import { ScrollEffects } from "./components/ScrollEffects";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascendant Software Development Services",
  description:
    "Ascendant offers software development, SaaS, website, and ecommerce services.",
  icons: {
    icon: [{ url: brandIcon.src, type: "image/png" }],
    apple: [{ url: brandIcon.src, type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageLoader />
        <ScrollEffects />
        <MotionReadout />
        <div className="site-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
