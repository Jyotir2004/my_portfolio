'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Brain, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  BookOpen, 
  Building2,
  Code
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <User className="w-4 h-4 text-cyan-400" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & <span className="gradient-text-cyan-purple">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Combining robust computer science fundamentals with hands-on Generative AI, RAG, and AI Agent development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary & Technical Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Generative AI Specialist</h3>
                  <p className="text-xs text-slate-400">LLMs, LangChain, LangGraph, RAG & Agents</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                I am a Generative AI Engineer specializing in Python backend engineering, Large Language Models (LLMs), 
                Retrieval-Augmented Generation (RAG), and autonomous AI Agents. My goal is building high-availability AI services 
                that solve complex enterprise workflows efficiently.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Core Strengths & Focus:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>LangGraph & LangChain Agents</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>FastAPI & Async Backends</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>RAG & Vector Search (FAISS/Chroma)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Machine Learning & PyTorch/CV</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education Timeline */}
          <motion.div 
            id="education"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education & Qualifications</h3>
            </div>

            <div className="space-y-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="glass-card rounded-2xl p-6 relative border border-slate-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white leading-snug">
                      {edu.degree}
                    </h4>
                    <span className="px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 text-xs font-semibold shrink-0 border border-slate-800">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-cyan-400 mb-1">
                    {edu.institution}
                  </p>

                  {edu.affiliation && (
                    <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.affiliation}</span>
                    </p>
                  )}

                  {edu.cgpa && (
                    <div className="inline-block px-2.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-bold mb-3">
                      CGPA: {edu.cgpa}
                    </div>
                  )}

                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
