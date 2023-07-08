import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ART-ificial",
  description:
    "Built with Next.js, React.js, TailwindCSS, TypeScript, Microsoft Azure and ChatGPT",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />

        {/* Prompt Input */}
        {children}
      </body>
    </html>
  );
}
