'use me';
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Bot, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Brain, 
  Terminal, 
  CheckCircle2, 
  GraduationCap, 
  Zap,
  Code2,
  Database,
  Download,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroSectionProps {
  onOpenAIChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAIChat }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow & grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Intro & Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
          >
            {/* Availability & Rectified Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pass-Out Batch: <strong>{PERSONAL_INFO.rectifiedPassout}</strong></span>
              </div>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-3 leading-tight">
                Hi, I'm <span className="gradient-text-cyan-purple">{PERSONAL_INFO.name}</span>
              </h1>
              <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-slate-300">
                <Brain className="w-6 h-6 text-cyan-400 animate-bounce" />
                <span className="text-cyan-400">Generative AI Engineer</span>
                <span className="text-slate-600">|</span>
                <span className="text-purple-400 font-semibold text-lg sm:text-xl">AI/ML Specialist</span>
              </div>
            </div>

            {/* Summary sentence */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Jyotiraditya_Khatua_Resume.pdf"
                download="Jyotiraditya_Khatua_Resume.pdf"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenAIChat}
                className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 shadow-md hover:border-cyan-400"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask AI Assistant</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image & Animated AI Orbit Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[420px]">
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-emerald-400 p-1 blur-xl opacity-60 animate-pulse"></div>
              
              {/* Card Container */}
              <div className="relative w-full h-full rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl p-2 group">
                <Image
                  src="/profile_suit.png"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Overlaid Bottom Gradient & Status */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-12 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/40">
                      AI Engineer Trainee @ Mobcoder
                    </span>
                  </div>
                  <span className="text-white font-bold text-sm">{PERSONAL_INFO.name}</span>
                  <span className="text-slate-400 text-xs">B.Tech CSE (AI & ML) • 2022–2026</span>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-2 shadow-lg animate-float">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>LangGraph & LangChain</span>
              </div>

              <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl glass-panel border border-purple-500/40 text-purple-300 text-xs font-semibold flex items-center gap-2 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <Brain className="w-4 h-4 text-purple-400" />
                <span>RAG & Vector Search</span>
              </div>

              <div className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-xl glass-panel border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 shadow-lg animate-float" style={{ animationDelay: '3s' }}>
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>FastAPI Backend</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Quick Stats Grid Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">2022 – 2026</div>
            <div className="text-xs text-slate-400 font-medium">Rectified Graduation Batch</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 mb-1">3 Roles</div>
            <div className="text-xs text-slate-400 font-medium">Mobcoder, Appwars & Tanvika</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">7+ Projects</div>
            <div className="text-xs text-slate-400 font-medium">AI Healthcare, Agents, NLP & CV</div>
          </div>
          <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1">4 IBM / ML</div>
            <div className="text-xs text-slate-400 font-medium">Professional Certifications</div>
          </div>
        </div>

      </div>
    </section>
  );
};
