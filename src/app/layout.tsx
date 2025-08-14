import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unemployment Journey - Sharing the Real Experience",
  description: "A personal blog about navigating unemployment, sharing struggles, growth, and hope during the job search journey.",
  keywords: ["unemployment", "job search", "career", "personal growth", "mental health"],
  authors: [{ name: "Unemployment Journey" }],
  openGraph: {
    title: "Unemployment Journey - Sharing the Real Experience",
    description: "A personal blog about navigating unemployment, sharing struggles, growth, and hope during the job search journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
