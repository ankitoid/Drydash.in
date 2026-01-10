import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DryDash – Premium Laundry & Dry Cleaning Services in Delhi",
    template: "%s | DryDash",
  },
  description:
    "Premium laundry & dry cleaning services in Delhi with 24-hour doorstep delivery. DryDash provides expert garment care, eco-friendly cleaning, fast pickup, and reliable service for busy professionals and modern families.",
  keywords: [
    "laundry service in Delhi",
    "dry cleaning Delhi",
    "premium laundry Delhi",
    "24 hour laundry service",
    "eco friendly dry cleaning",
    "doorstep laundry pickup",
    "DryDash laundry",
  ],
  authors: [{ name: "DryDash" }],
  creator: "DryDash",
  publisher: "DryDash",
  metadataBase: new URL("https://drydash.in"),
  openGraph: {
    title: "DryDash – Premium Laundry & Dry Cleaning Services in Delhi",
    description:
      "Get premium laundry & dry cleaning in Delhi with 24-hour delivery. Expert care, eco-friendly cleaning, fast pickup & doorstep delivery.",
    url: "https://drydash.in",
    siteName: "DryDash",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DryDash Premium Laundry & Dry Cleaning",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DryDash – Premium Laundry & Dry Cleaning Services in Delhi",
    description:
      "Premium laundry & dry cleaning in Delhi with fast 24-hour delivery. Doorstep pickup, eco-friendly care & expert cleaning.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
