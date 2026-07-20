import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-YEE440LSF1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital experience consultant | Charlotte Aldred",
  description: "Digital experience and UX researcher specialist helping businesses move from opinion led to evidence based digital optimisations. I can help with UX research, Conversion rate optimisation, ecommerce audits one off projects or support fractionally / part time. For when you need expert help part time",
   authors: [
    {
      name: "Charlotte Aldred",
    },
  ],

  creator: "Charlotte Aldred",

  metadataBase: new URL("https://charlottealdred.com"),

  openGraph: {
    title: "Charlotte Aldred | Digital Experience & Optimisation Consultant",

    description:
      "Helping businesses improve customer experience, conversion and digital performance through research, experimentation and strategy.",

    url: "https://charlottealdred.com",

    siteName: "Charlotte Aldred",

    locale: "en_GB",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Charlotte Aldred",

    description:
      "Digital Experience, UX Research & Optimisation Consultant",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YEE440LSF1`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
