import type { Metadata } from "next";
import { Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";
import SiteMotion from "./_components/SiteMotion";
import { SITE } from "./_lib/theme";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Main Street Compass — Get Found. Get Customers. Grow.",
    template: "%s | Main Street Compass",
  },
  description:
    "Affordable digital marketing for small-town independent restaurants. Website, Google Ads, and local search — all done for you, starting at $200/month.",
  applicationName: SITE.name,
  keywords: [
    "restaurant marketing",
    "local SEO for restaurants",
    "Google Business Profile management",
    "restaurant Google Ads",
    "small-town restaurant website",
    "Mississippi restaurant marketing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "Main Street Compass — Get Found. Get Customers. Grow.",
    description:
      "Done-for-you digital marketing for small-town restaurants. Website, Google Ads, and local search — from $200/month.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Street Compass — Get Found. Get Customers. Grow.",
    description:
      "Done-for-you digital marketing for small-town restaurants. From $200/month.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
      className={`${sourceSerif.variable} ${workSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Mark JS-enabled before paint so `.reveal` only hides when JS can un-hide it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
        <SiteMotion />
      </body>
    </html>
  );
}
