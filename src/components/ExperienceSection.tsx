'use me';
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span>WORK & INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-cyan-purple">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Hands-on industry experience building Generative AI backends, multi-agent systems, and predictive models.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                  </div>

                  {/* Card Content Block */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="glass-card rounded-2xl p-6 sm:p-7 relative border border-slate-800 hover:border-cyan-500/40">
                      
                      {/* Current Role Badge */}
                      {exp.current && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>ACTIVE ROLE</span>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <span className="px-3 py-1 rounded-md bg-slate-900 text-cyan-300 text-xs font-semibold border border-slate-800">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-cyan-400 mb-4">
                        <span className="font-bold text-white text-base">{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-5">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-medium border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
