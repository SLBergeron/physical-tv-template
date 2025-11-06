import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  metadataBase: new URL('https://physical.tv'),
  title: {
    default: "PhysicalTV Studios | Creative Intelligence for Media & Wellness Brands",
    template: "%s | PhysicalTV Studios"
  },
  description:
    "PhysicalTV Studios is a creative intelligence company led by Frederick Light, shaping media ecosystems across fitness, wellness, and medical storytelling. Two decades of expertise in digital growth, brand architecture, and creator economy.",
  keywords: [
    "creative intelligence",
    "media production",
    "brand strategy",
    "content creation",
    "fitness media",
    "wellness storytelling",
    "medical content",
    "creator economy",
    "digital growth",
    "Frederick Light",
    "PhysicalTV",
    "media architecture",
    "brand frameworks",
    "strategic consulting"
  ],
  authors: [{ name: "Frederick Light" }, { name: "PhysicalTV Studios" }],
  creator: "PhysicalTV Studios",
  publisher: "PhysicalTV Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://physical.tv",
    siteName: "PhysicalTV Studios",
    title: "PhysicalTV Studios | Creative Intelligence for Media & Wellness Brands",
    description:
      "Creative media studio focused on how ideas take shape, move through culture, and create impact. Led by Frederick Light with two decades in digital growth and media architecture.",
    images: [
      {
        url: "/Image-Profile-Frederick.jpeg",
        width: 1200,
        height: 630,
        alt: "Frederick Light - PhysicalTV Studios Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhysicalTV Studios | Creative Intelligence for Media & Wellness Brands",
    description:
      "Creative media studio focused on how ideas take shape, move through culture, and create impact.",
    images: ["/Image-Profile-Frederick.jpeg"],
    creator: "@physicaltv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            GeistSans.className,
            "bg-white dark:bg-black antialiased h-full w-full"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="light"
          >
            {children}
            <Toaster />
            <CookieConsent />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
