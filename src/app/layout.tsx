import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geist = Geist_Mono({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sapanca Dağaltı Suite Bungalov | 2026 Experience",
  description: "Sapanca'da lüksün ve doğanın sessiz buluşması. 2026 tasarımı trendleriyle yeniden kurgulanan butik bir kaçış.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} ${geist.variable} antialiased selection:bg-earth-luxe selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
