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
  title: "Jyotiraditya Khatua — Generative AI Engineer Portfolio",
  description: "Portfolio of Jyotiraditya Khatua, Generative AI & AI/ML Engineer specializing in Python, FastAPI, LangChain, LangGraph, RAG pipelines, and Autonomous AI Agents. Pass-Out Batch 2022–2026.",
  keywords: [
    "Jyotiraditya Khatua",
    "Generative AI Engineer",
    "AI/ML Engineer",
    "LangGraph",
    "LangChain",
    "RAG Architecture",
    "FastAPI",
    "Python Developer",
    "Mobcoder AI Engineer",
    "B.Tech CSE AI ML"
  ],
  authors: [{ name: "Jyotiraditya Khatua" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
