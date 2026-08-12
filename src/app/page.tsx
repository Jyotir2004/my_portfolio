'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { RectifiedPassoutBanner } from '../components/RectifiedPassoutBanner';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { CertificatesSection } from '../components/CertificatesSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { AIChatModal } from '../components/AIChatModal';

export default function Home() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Header & Navigation */}
      <Navbar onOpenAIChat={() => setIsAIChatOpen(true)} />

      {/* Top Rectified Passout Notice */}
      <div className="pt-20">
        <RectifiedPassoutBanner />
      </div>

      {/* Hero Intro */}
      <HeroSection onOpenAIChat={() => setIsAIChatOpen(true)} />

      {/* About & Rectified Education */}
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

      {/* Interactive AI Chat Assistant Drawer */}
      <AIChatModal isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </main>
  );
}
