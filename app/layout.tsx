import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "./_lib/theme";

// Self-hosted + preloaded via next/font (no runtime Google-Fonts fetch, no FOUT).
// Exposed as --font-jakarta, consumed by the .kk design scope.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Main Street Compass: Get Found. Get Customers. Grow.",
    template: "%s | Main Street Compass",
  },
  description:
    "Affordable digital marketing for small-town independent restaurants. Website, Google Ads, and local search, all done for you, starting at $200/month.",
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
    title: "Main Street Compass: Get Found. Get Customers. Grow.",
    description:
      "Done-for-you digital marketing for small-town restaurants. Website, Google Ads, and local search, from $200/month.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Street Compass: Get Found. Get Customers. Grow.",
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
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Mark JS-enabled before paint so reveal effects only hide when JS can un-hide them. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
