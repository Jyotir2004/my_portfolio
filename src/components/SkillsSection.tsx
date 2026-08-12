'use me';
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Search, Sparkles, Code2, Database, Brain, Terminal, Layers } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-cyan-purple">Expertise Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Specialized competencies across AI engineering, LLM orchestration, backend development, and analytics.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills (e.g. LangChain, RAG, FastAPI, Python)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((catGroup, idx) => {
            const filteredItems = catGroup.items.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-6 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-slate-800/80 flex items-center justify-between">
                    <span>{catGroup.category}</span>
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </h3>

                  <div className="space-y-4">
                    {filteredItems.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <span className={`font-semibold ${skill.highlight ? 'text-cyan-300' : 'text-slate-300'}`}>
                            {skill.name}
                          </span>
                          <span className="text-slate-500 text-xs font-mono">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              skill.highlight
                                ? 'bg-gradient-to-r from-cyan-500 to-purple-500'
                                : 'bg-slate-700'
                            }`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
