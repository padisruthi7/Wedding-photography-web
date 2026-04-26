import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gowri Wedding Photography | Capturing Love Forever",
    template: "%s | Gowri Wedding Photography",
  },
  description:
    "Premium wedding photography & videography in Andhra Pradesh, Telangana & Odisha. Cinematic films, candid moments, drone coverage & more. Book your dream wedding photographer today!",
  keywords: [
    "wedding photographer Andhra Pradesh",
    "best wedding photography Srikakulam",
    "pre wedding shoot Telangana",
    "wedding videographer Odisha",
    "cinematic wedding films",
    "candid wedding photography",
    "drone wedding coverage",
    "wedding photographer near me",
    "Gowri Wedding Photography",
    "wedding photography Vizag",
    "wedding photography Hyderabad",
  ],
  authors: [{ name: "Gowri Wedding Photography" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Gowri Wedding Photography",
    title: "Gowri Wedding Photography | Capturing Love Forever",
    description:
      "Premium wedding photography & videography. Capturing your love story with cinematic excellence across Andhra Pradesh, Telangana & Odisha.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gowri Wedding Photography | Capturing Love Forever",
    description:
      "Premium wedding photography & videography across Andhra Pradesh, Telangana & Odisha.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gowri Wedding Photography",
    image: "/og-image.jpg",
    description:
      "Premium wedding photography & videography services in Andhra Pradesh, Telangana & Odisha.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Billumada, Bhamini",
      addressLocality: "Srikakulam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    telephone: "+917842506290",
    email: "sriashish3226@gmail.com",
    url: "https://gowriweddingphotography.com",
    priceRange: "$$",
    areaServed: [
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Odisha" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[var(--font-inter)] bg-cream text-charcoal antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
