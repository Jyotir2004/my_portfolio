'use me';
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Brain, 
  Bot, 
  Layers, 
  X,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Generative AI', 'Machine Learning', 'Data Analytics', 'Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/60 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-cyan-purple">AI & Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Real-world applications built with Python, FastAPI, LangGraph, RAG, OpenCV, and Machine Learning algorithms.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 group"
              >
                <div>
                  {/* Image Header if present */}
                  {project.image ? (
                    <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 text-[10px] font-bold uppercase tracking-wider border border-cyan-500/40">
                        {project.category}
                      </span>
                    </div>
                  ) : (
                    <div className="p-6 pb-0 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-slate-900 text-cyan-300 text-[10px] font-bold uppercase tracking-wider border border-slate-800">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                          <Sparkles className="w-3.5 h-3.5" /> Featured
                        </span>
                      )}
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tech Stack & Buttons */}
                <div className="p-6 pt-0 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 text-[11px] font-medium border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                        title="View Source on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase border border-cyan-500/40">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3 mb-1">{selectedProject.title}</h3>
            <p className="text-sm font-semibold text-cyan-400 mb-4">{selectedProject.subtitle}</p>

            {selectedProject.image && (
              <div className="relative w-full h-56 bg-slate-950 rounded-2xl overflow-hidden mb-5">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
            )}

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Key Architecture & Capabilities:</h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
              >
                Close
              </button>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
};
