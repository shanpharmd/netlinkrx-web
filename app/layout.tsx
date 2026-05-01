import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NetLinkRx | Clinical Telepharmacy for Critical Access & Rural Hospitals",
  description:
    "Board-certified clinical pharmacists inside your Critical Access or Rural Hospital. On demand, overnight, or around the clock. Zero staffing gaps. Zero compromises on patient safety.",
  keywords: [
    "telepharmacy",
    "remote pharmacy",
    "critical access hospital",
    "rural hospital pharmacy",
    "clinical pharmacist",
    "medication order verification",
    "24/7 pharmacist",
  ],
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
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
