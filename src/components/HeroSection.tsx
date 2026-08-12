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
  FileText,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroSectionProps {
  onOpenAIChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAIChat }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow & grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Intro & Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
          >
            {/* Availability Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.status}</span>
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
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask AI Assistant</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - User Photo & Floating Tech Chips */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl transform scale-95"></div>

            {/* Card Container */}
            <div className="relative w-full aspect-[4/5] max-w-md rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl p-2 group">
              <Image
                src="/profile_suit.png"
                alt={PERSONAL_INFO.name}
                fill
                className="object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-x-2 bottom-2 p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent rounded-b-2xl flex flex-col justify-end">
                <div className="inline-block self-start px-2.5 py-0.5 rounded-md bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                  AI Engineer Trainee @ Mobcoder
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-slate-300">
                  B.Tech CSE (AI & ML)
                </p>
              </div>

              {/* Floating Tech Badge 1 */}
              <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full border border-cyan-500/30 flex items-center gap-1.5 shadow-lg animate-float">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">LangGraph & LangChain</span>
              </div>

              {/* Floating Tech Badge 2 */}
              <div className="absolute top-1/2 right-4 glass-card px-3 py-1.5 rounded-full border border-purple-500/30 flex items-center gap-1.5 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-semibold text-slate-200">FastAPI Backend</span>
              </div>

              {/* Floating Tech Badge 3 */}
              <div className="absolute bottom-20 left-4 glass-card px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5 shadow-lg animate-float" style={{ animationDelay: '2.5s' }}>
                <Brain className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">RAG & Vector Search</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Quick Stats Grid Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-slate-800/80">
          <div className="glass-card rounded-2xl p-4 text-center border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">Generative AI</div>
            <div className="text-xs text-slate-400 font-medium">Agents, RAG & FastAPI</div>
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

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center mt-10 cursor-pointer group"
          onClick={() => {
            const element = document.getElementById('ecosystem');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-cyan-400 animate-spin" />
            Scroll Down To Explore Portfolio
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 group-hover:border-cyan-400 flex items-start justify-center p-1.5 transition-colors shadow-lg">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80"
            />
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 mt-1 transition-colors animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
};
