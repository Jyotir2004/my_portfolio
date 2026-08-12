'use me';
'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Bot, Menu, X, CheckCircle2, FileText, Code, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenAIChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAIChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Generative AI Engineer</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Jyotiraditya_Khatua_Resume.pdf"
              download="Jyotiraditya_Khatua_Resume.pdf"
              className="px-3.5 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-semibold transition-all duration-300 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={onOpenAIChat}
              className="group relative px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/10"
            >
              <Bot className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>Ask AI Assistant</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all duration-300 shadow-md shadow-cyan-500/20"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAIChat}
              className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400"
              title="AI Assistant"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/Jyotiraditya_Khatua_Resume.pdf"
                download="Jyotiraditya_Khatua_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAIChat();
                }}
                className="w-full py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4" />
                Ask Portfolio AI Assistant
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
