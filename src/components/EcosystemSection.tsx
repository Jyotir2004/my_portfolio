'use me';
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Cpu, 
  Database, 
  Server, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  Activity,
  ShieldCheck,
  Globe
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  glowColor: string;
  badge: string;
  techs: string[];
  description: string;
  keyFeatures: string[];
  sampleFlow: string;
  projectsUsed: string[];
}

export const EcosystemSection: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('agentic');

  const nodes: EcosystemNode[] = [
    {
      id: 'input',
      number: '01',
      title: 'User Interface & Ingestion',
      subtitle: 'Client Touchpoints & API Gateways',
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/40',
      glowColor: 'shadow-cyan-500/20',
      badge: 'Frontend & Gateway',
      techs: ['Next.js (React)', 'Streamlit UI', 'REST API Endpoints', 'Async WebSockets'],
      description: 'The entrance layer handling multi-modal user queries, text prompts, file uploads (PDF/CSV), and interactive client UI components with real-time SSE streaming.',
      keyFeatures: [
        'Responsive glassmorphic UI with dynamic state feedback',
        'Asynchronous client-side state management with Framer Motion',
        'Streamlit interactive analytics & batch document submission',
        'Strict payload validation via Pydantic schemas'
      ],
      sampleFlow: 'User Query → Input Sanitization → Pydantic Schema Validation → FastAPI Router',
      projectsUsed: ['MedSync AI Assistant', 'Multi-Agent Travel Planner', 'Sentiment Analysis Suite']
    },
    {
      id: 'backend',
      number: '02',
      title: 'API Server & Microservices',
      subtitle: 'High-Performance Python Backend',
      icon: <Server className="w-6 h-6 text-purple-400" />,
      color: 'from-purple-500/20 to-indigo-500/10',
      borderColor: 'border-purple-500/40',
      glowColor: 'shadow-purple-500/20',
      badge: 'Core Runtime',
      techs: ['FastAPI', 'Uvicorn ASGI', 'Python 3.11+', 'Vercel Serverless'],
      description: 'Ultra-fast asynchronous Python backend built with FastAPI, executing non-blocking request handlers, authentication routing, and session state persistence.',
      keyFeatures: [
        'Asynchronous event loop for concurrent agent execution',
        'Automatic OpenAPI / Swagger documentation generation',
        'Serverless execution on Vercel Python runtime',
        'CORS security middleware and strict error handling'
      ],
      sampleFlow: 'FastAPI Router → Middleware Auth → Agent Controller → Async Worker Loop',
      projectsUsed: ['MedSync Healthcare Backend', 'Portfolio AI Chat API', 'Library System API']
    },
    {
      id: 'agentic',
      number: '03',
      title: 'Orchestration & Agentic Core',
      subtitle: 'Stateful Autonomous Multi-Agent Graphs',
      icon: <Workflow className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/40',
      glowColor: 'shadow-emerald-500/20',
      badge: 'Agentic Intelligence',
      techs: ['LangGraph', 'LangChain', 'Autonomous Tool Calling', 'State Graphs'],
      description: 'The brain of the ecosystem where specialized AI Agents collaborate using LangGraph state graph workflows. Supports sub-agent delegation, feedback loops, and dynamic tool execution.',
      keyFeatures: [
        'LangGraph stateful node transitions and conditional branching',
        'Autonomous agent function/tool calling for external APIs',
        'Multi-agent consensus and iterative output refinement',
        'Built-in memory persistence and conversation checkpointers'
      ],
      sampleFlow: 'User Intent → Master Orchestrator → Specialized Agents → Tool Execution → Synthesis',
      projectsUsed: ['Multi-Agent Travel Planner (LangGraph)', 'MedSync Autonomous Triage Agent']
    },
    {
      id: 'llm',
      number: '04',
      title: 'LLM & Model Inference',
      subtitle: 'Frontier LLM APIs & Neural Networks',
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      color: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'border-amber-500/40',
      glowColor: 'shadow-amber-500/20',
      badge: 'Inference Layer',
      techs: ['OpenAI GPT-4o', 'Google Gemini 1.5', 'GROQ Hardware LPUs', 'PyTorch / OpenCV'],
      description: 'Multi-provider Large Language Model integration layer leveraging frontier APIs and local neural models for high-accuracy reasoning, summarization, and vision tasks.',
      keyFeatures: [
        'Multi-model fallback logic (OpenAI → Gemini → GROQ)',
        'Prompt engineering & structured JSON mode enforcement',
        'GROQ ultra-low latency token generation (<100ms)',
        'Custom PyTorch CNN & OpenCV computer vision inference'
      ],
      sampleFlow: 'Agent Prompt → Structured System Prompt → LLM API Call → JSON Parsing',
      projectsUsed: ['MedSync Clinical RAG', 'Multi-Agent Travel Planner', 'Face Recognition CNN']
    },
    {
      id: 'memory',
      number: '05',
      title: 'RAG & Vector Knowledge',
      subtitle: 'Semantic Vector Stores & Relational DBs',
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      color: 'from-cyan-500/20 to-teal-500/10',
      borderColor: 'border-cyan-500/40',
      glowColor: 'shadow-cyan-500/20',
      badge: 'Context & Memory',
      techs: ['ChromaDB', 'FAISS Vector Index', 'Text Embeddings', 'MySQL Relational'],
      description: 'High-density knowledge store powering Retrieval-Augmented Generation (RAG). Transforms unstructured medical/domain documents into vector embeddings for instant cosine similarity lookup.',
      keyFeatures: [
        'FAISS & ChromaDB vector indexing for million-doc search',
        'OpenAI / HuggingFace embedding vector creation',
        'Semantic chunking, overlap tuning, and MMR re-ranking',
        'Relational MySQL storage for transactional user data'
      ],
      sampleFlow: 'Document → Chunking → Vector Embeddings → ChromaDB Store → Cosine RAG Search',
      projectsUsed: ['MedSync Medical RAG Search', 'E-Commerce Insights DB', 'Library Management DB']
    }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[2];

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-800/60 bg-slate-950/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Network className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>AI SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Generative AI <span className="gradient-text-cyan-purple">Tech Ecosystem</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Interactive breakdown of how my AI Agents, RAG pipelines, FastAPI backends, and Vector Databases interconnect to build scalable end-to-end applications.
          </p>
        </div>

        {/* Pipeline Visual Node Grid Selector */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
          {nodes.map((node) => {
            const isActive = node.id === activeNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`relative rounded-2xl p-4 text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive 
                    ? `bg-slate-900/90 ${node.borderColor} shadow-lg ${node.glowColor} scale-[1.03]` 
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -top-1 left-4 right-4 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" 
                  />
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${isActive ? 'scale-110' : ''} transition-transform`}>
                    {node.icon}
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-500">
                    NODE {node.number}
                  </span>
                </div>

                <div>
                  <h3 className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {node.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    {node.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {node.badge}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Detailed Architecture Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`glass-card rounded-3xl p-6 sm:p-8 border ${activeNode.borderColor} bg-gradient-to-br ${activeNode.color} shadow-2xl relative overflow-hidden`}
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner">
                  {activeNode.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
                      STAGE {activeNode.number} ARCHITECTURE
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {activeNode.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {activeNode.techs.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-xl bg-slate-900/90 text-slate-200 border border-slate-700/80 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Left Column: Description & Key Features */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Layer Overview
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeNode.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Key Architectural Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeNode.keyFeatures.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Flow & Projects */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                
                {/* Data Flow Trace */}
                <div className="bg-slate-950/90 p-5 rounded-2xl border border-slate-800/90 font-mono text-xs">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                    <Terminal className="w-4 h-4" />
                    <span>DATA EXECUTION PIPELINE</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 text-emerald-300 border border-slate-800 text-[11px] leading-relaxed break-words">
                    {activeNode.sampleFlow}
                  </div>
                </div>

                {/* Applied Projects */}
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800/90">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5" />
                    Production Applications Utilizing This Node
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.projectsUsed.map((proj, pIdx) => (
                      <span key={pIdx} className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        <span>{proj}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
