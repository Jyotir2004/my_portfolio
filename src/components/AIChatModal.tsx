'use me';
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, RECTIFIED_PASSOUT_NOTICE, EXPERIENCES, PROJECTS } from '../data/portfolioData';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I am Jyotiraditya's AI Portfolio Assistant. You can ask me about his Generative AI projects, experience at Mobcoder, skills, or his rectified pass-out batch (2022–2026). How can I assist you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickPrompts = [
    "What is your rectified pass-out year?",
    "Tell me about your experience at Mobcoder",
    "What projects have you built?",
    "What is your core tech stack?",
    "How can I contact Jyotiraditya?"
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI reasoning response
    setTimeout(() => {
      let aiResponseText = "";
      const lower = text.toLowerCase();

      if (lower.includes('pass-out') || lower.includes('pass out') || lower.includes('graduation') || lower.includes('rectify') || lower.includes('year') || lower.includes('batch')) {
        aiResponseText = `Jyotiraditya's graduation pass-out batch is 2022 – 2026 (Passing Year: 2026). He completed his B.Tech in CSE with specialization in AI & ML from Mahatma Gandhi Mission's College of Engineering & Technology, Noida (affiliated with AKTU) with a CGPA of 7.5. (Note: Any prior reference to 2026-27 has been rectified and updated).`;
      } else if (lower.includes('mobcoder') || lower.includes('experience') || lower.includes('work') || lower.includes('job')) {
        aiResponseText = `Jyotiraditya currently works as an AI/ML Engineer Trainee at Mobcoder (Noida, since March 2026). He develops AI-powered backend applications using Python, FastAPI, LLMs, RAG, and LangGraph/LangChain multi-agent workflows. Previously, he was a Data Science Intern at Appwars Technologies and Data Analytics Intern at Tanvika Software.`;
      } else if (lower.includes('project') || lower.includes('medsync') || lower.includes('travel') || lower.includes('langgraph')) {
        aiResponseText = `Jyotiraditya has engineered several high-impact projects:
1. MedSync (AI Healthcare Assistant) — Medical RAG, clinical triage & autonomous agent scheduling.
2. Multi-Agent AI Travel Planner — State-graph itinerary orchestration built with LangGraph.
3. Streamlit AI Sentiment Analysis Suite — NLP model for text & dataset sentiment classification.
4. Real-time Face Recognition Attendance System — OpenCV & CNN deep learning pipeline.`;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('python') || lower.includes('fastapi')) {
        aiResponseText = `His technical stack includes:
• Generative AI & Agents: LLMs (OpenAI, Gemini, GROQ), RAG, Autonomous Agents, Prompt Engineering.
• AI Frameworks: LangChain, LangGraph, LangFlow, FAISS, ChromaDB.
• Backend & ML: Python, FastAPI, PyTorch, Scikit-learn, OpenCV, MySQL.
• Data & BI: Pandas, NumPy, Power BI, Streamlit.`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire') || lower.includes('phone')) {
        aiResponseText = `You can reach Jyotiraditya directly at:
• Email: jyotiraditya20122004@gmail.com
• Phone: +91 9625188029
• Location: Hoshiyarpur, Sector 51, Noida, Uttar Pradesh
• LinkedIn: linkedin.com/in/Jyotiraditya-Khatua
• GitHub: github.com/Jyotir2004`;
      } else {
        aiResponseText = `Jyotiraditya Khatua is a Generative AI Engineer specializing in Python, FastAPI, RAG architectures, and LangGraph multi-agent systems. He is a 2022–2026 B.Tech CSE (AI-ML) graduate. Feel free to ask about his Mobcoder experience, MedSync project, or contact details!`;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl h-[650px] flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Ask Jyotiraditya AI</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </h3>
              <p className="text-xs text-slate-400">RAG-powered Portfolio Knowledge Assistant</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-purple-600/90 text-white font-medium rounded-tr-none'
                    : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-line'
                }`}
              >
                {msg.text}
                <div
                  className={`text-[10px] mt-1.5 font-mono ${
                    msg.sender === 'user' ? 'text-purple-200 text-right' : 'text-slate-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                <span className="ml-1">Synthesizing portfolio facts...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts Chip Carousel */}
        <div className="p-3 border-t border-slate-800/60 bg-slate-950/40 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 text-xs font-medium border border-slate-800 shrink-0 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Jyotiraditya's experience or skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold disabled:opacity-40 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
