'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { EcosystemSection } from '../components/EcosystemSection';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { CertificatesSection } from '../components/CertificatesSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { AIChatModal } from '../components/AIChatModal';
import { Bot, Sparkles } from 'lucide-react';

export default function Home() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Header & Navigation */}
      <Navbar onOpenAIChat={() => setIsAIChatOpen(true)} />

      {/* Hero Intro */}
      <HeroSection onOpenAIChat={() => setIsAIChatOpen(true)} />

      {/* Interactive AI Architecture Ecosystem */}
      <EcosystemSection />

      {/* About & Education */}
      <AboutSection />

      {/* Industry Work Experience Timeline */}
      <ExperienceSection />

      {/* Filterable AI Projects Showcase */}
      <ProjectsSection />

      {/* Skills Matrix & Proficiency */}
      <SkillsSection />

      {/* IBM & Intellipaat Certifications */}
      <CertificatesSection />

      {/* Contact Form & Direct Links */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating AI Assistant Chatbot Widget Button */}
      {!isAIChatOpen && (
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-4 py-3 bg-slate-900/90 border border-cyan-500/50 hover:border-cyan-400 rounded-full shadow-2xl backdrop-blur-md hover:bg-slate-800 transition-all duration-300 hover:scale-105"
          title="Ask Jyotiraditya's AI Assistant"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-slate-950"></span>
            </span>
          </div>
          <div className="flex flex-col text-left pr-1 hidden sm:flex">
            <span className="text-xs font-bold text-white flex items-center gap-1">
              Ask AI Assistant
              <Sparkles className="w-3 h-3 text-cyan-400" />
            </span>
            <span className="text-[10px] text-slate-400">Groq GPT OSS 120B • RAG</span>
          </div>
        </button>
      )}

      {/* Interactive AI Chat Assistant Drawer */}
      <AIChatModal isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </main>
  );
}
