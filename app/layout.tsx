import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LuontoAI — Turning Waste Into Sustainable Possibilities",
  description:
    "LuontoAI discovers sustainable resource and product possibilities hidden inside everyday waste. AI-powered circular resource discovery.",
  keywords: [
    "sustainability",
    "circular economy",
    "waste upcycling",
    "resource discovery",
    "Nordic innovation",
    "Finland circularity",
    "sustainable tourism"
  ],
  authors: [{ name: "LuontoAI Team" }],
  openGraph: {
    title: "LuontoAI — Turning Waste Into Sustainable Possibilities",
    description:
      "LuontoAI explores how everyday waste can become useful resources, sustainable products and new circular possibilities.",
    url: "https://luontoai.vercel.app",
    siteName: "LuontoAI",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LuontoAI — Turning Waste Into Sustainable Possibilities",
    description:
      "LuontoAI discovers sustainable resource and product possibilities hidden inside everyday waste."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fbfbf9] text-[#1c211f] selection:bg-[#1e3a2b] selection:text-white antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
