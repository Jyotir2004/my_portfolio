'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Bot, Brain, BarChart3, Code2, CheckCircle2 } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export const CertificatesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code2 className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Award className="w-4 h-4 text-purple-400" />
            <span>CREDENTIALS & ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text-cyan-purple">Specializations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Verified professional certificates from IBM & Intellipaat in AI Agents, ML, and Data Science.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 flex items-start gap-5 hover:border-cyan-500/40"
            >
              <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shrink-0">
                {getIcon(cert.icon)}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 text-[11px] font-bold">
                    {cert.issuer}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
