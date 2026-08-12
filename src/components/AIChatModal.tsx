'use me';
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

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

const PORTFOLIO_KEYWORDS = [
  "jyotiraditya", "khatua", "pass-out", "pass out", "passing", "batch", "year", "2022", "2026",
  "b.tech", "aktu", "noida", "mobcoder", "appwars", "tanvika", "experience", "internship", "trainee",
  "medsync", "travel planner", "langgraph", "langchain", "rag", "fastapi", "python", "streamlit",
  "face recognition", "opencv", "knn", "iris", "sentiment", "project", "projects", "skill", "skills",
  "certif", "ibm", "intellipaat", "contact", "email", "phone", "resume", "github", "linkedin", "education",
  "cgpa", "ai engineer", "generative ai", "llm", "llms", "agent", "agents", "vector"
];

const GREETING_WORDS = ["hey", "hello", "hi", "hey there", "greetings", "good morning", "good evening", "hi there"];

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I am Jyotiraditya's AI Portfolio Assistant powered by FastAPI backend. Ask me about his projects, skills, Mobcoder experience, or 2022–2026 pass-out batch!`,
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
    "hey",
    "What is your B.Tech pass-out year?",
    "Tell me about your experience at Mobcoder",
    "What projects have you built?",
    "What is your core tech stack?"
  ];

  const processResponse = (userText: string): string => {
    const clean = userText.trim().toLowerCase();

    // Check greeting
    const words = clean.split(/\s+/);
    if (GREETING_WORDS.some(g => clean === g || clean.startsWith(g + ' ') || clean.endsWith(' ' + g))) {
      return "Hello! Welcome to Jyotiraditya Khatua's Generative AI Portfolio. How can I help you today?";
    }

    // Check portfolio context
    const isPortfolioRelated = PORTFOLIO_KEYWORDS.some(kw => clean.includes(kw));

    if (!isPortfolioRelated) {
      return "I only give data based on Jyotiraditya Khatua portfolio.";
    }

    // Portfolio answers
    if (["pass-out", "pass out", "graduation", "batch", "year"].some(k => clean.includes(k))) {
      return "Jyotiraditya Khatua's B.Tech (CSE - AI & ML) pass-out batch is 2022 – 2026 (Graduation Year: 2026) from Mahatma Gandhi Mission's College of Engineering & Technology, Noida (AKTU) with CGPA 7.5.";
    }
    if (["mobcoder", "experience", "work", "job", "appwars", "tanvika"].some(k => clean.includes(k))) {
      return "Jyotiraditya is currently working as an AI/ML Engineer Trainee at Mobcoder (Noida), building AI backend services with FastAPI, LLMs, RAG, and LangGraph. He previously worked as a Data Science Intern at Appwars Technologies and Data Analytics Intern at Tanvika Software.";
    }
    if (["project", "medsync", "travel", "langgraph", "sentiment"].some(k => clean.includes(k))) {
      return "Jyotiraditya has built several production-grade projects:\n1. MedSync (AI Healthcare Assistant using FastAPI, Medical RAG & Agentic scheduling)\n2. Multi-Agent AI Travel Planner (LangGraph state workflows)\n3. Streamlit AI Sentiment Analysis Suite\n4. OpenCV & CNN Real-Time Face Recognition Attendance System.";
    }
    if (["skill", "stack", "python", "fastapi", "rag", "langchain"].some(k => clean.includes(k))) {
      return "Core Skills & Stack:\n• Generative AI & Agents: LLMs, RAG, LangChain, LangGraph, FAISS, ChromaDB\n• Backend & ML: Python, FastAPI, PyTorch, Scikit-learn, OpenCV, MySQL\n• Analytics: Pandas, NumPy, Power BI, Streamlit.";
    }
    if (["contact", "email", "phone", "resume", "github", "linkedin"].some(k => clean.includes(k))) {
      return "Contact Details:\n• Email: jyotiraditya20122004@gmail.com\n• Phone: +91 9625188029\n• Location: Noida, UP\n• GitHub: github.com/Jyotir2004\n• Resume: PDF download available on the site!";
    }

    return "Jyotiraditya Khatua is a Generative AI Engineer specializing in Python, FastAPI, RAG architectures, and LangGraph multi-agent systems. He is a 2022–2026 B.Tech CSE (AI-ML) graduate from AKTU Noida.";
  };

  const handleSendMessage = async (textToSend?: string) => {
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

    let aiResponseText = "";
    try {
      // Call FastAPI backend endpoint
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      if (res.ok) {
        const data = await res.json();
        aiResponseText = data.response;
      } else {
        aiResponseText = processResponse(text);
      }
    } catch {
      aiResponseText = processResponse(text);
    }

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: aiResponseText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, aiMsg]);
    setIsTyping(false);
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
              <p className="text-xs text-slate-400">FastAPI Backend Portfolio Knowledge Assistant</p>
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
                <span className="ml-1">FastAPI Backend evaluating query...</span>
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
