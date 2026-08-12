'use me';
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, Download, FileText, Smartphone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const constructFormattedMessage = () => {
    const nameStr = formState.name ? `Name: ${formState.name}` : '';
    const emailStr = formState.email ? `Email: ${formState.email}` : '';
    const subjectStr = formState.subject ? `Subject: ${formState.subject}` : '';
    const msgStr = formState.message ? `Message: ${formState.message}` : '';

    return `Hello Jyotiraditya,\n\n${[nameStr, emailStr, subjectStr, msgStr].filter(Boolean).join('\n')}`;
  };

  const handleSendSMS = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullMessage = constructFormattedMessage();
    const smsNumber = "9625188029";
    const smsUrl = `sms:+91${smsNumber}?body=${encodeURIComponent(fullMessage)}`;

    // Trigger device SMS application directly
    window.location.href = smsUrl;

    // Send fallback / background email via FormSubmit API to ensure reachability to owner's inbox as well
    try {
      await fetch("https://formsubmit.co/ajax/jyotiraditya20122004@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          _subject: `Portfolio Message from ${formState.name} (${formState.email})`
        })
      });
    } catch (error) {
      console.log('Form submit backup trigger:', error);
    }

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const getWhatsAppLink = () => {
    const rawNumber = "9625188029";
    if (formState.name || formState.message) {
      const text = constructFormattedMessage();
      return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
    }
    return `https://wa.me/${rawNumber}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>CONNECT WITH ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text-cyan-purple">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Interested in collaboration, Generative AI engineering roles, or consulting? Send me a message via SMS or chat on WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Download Resume Button Card */}
            <a
              href="/Jyotiraditya_Khatua_Resume.pdf"
              download="Jyotiraditya_Khatua_Resume.pdf"
              className="glass-card rounded-3xl p-6 border border-purple-500/40 hover:border-purple-400 bg-gradient-to-r from-purple-950/40 via-slate-900 to-cyan-950/40 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 group-hover:scale-110 transition-transform">
                  <Download className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="text-xs text-purple-300 font-bold uppercase tracking-wider">Verified Resume PDF</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    Download Resume Document
                  </div>
                </div>
              </div>
              <FileText className="w-5 h-5 text-purple-400" />
            </a>

            {/* WhatsApp Direct Chat Card */}
            <a
              href="https://wa.me/9625188029"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-3xl p-6 border border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-900 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider">WhatsApp Direct Chat</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 9625188029
                  </div>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 font-semibold text-xs flex items-center gap-1 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <span>Chat Now</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Email Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone & SMS Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Phone / SMS Number</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm sm:text-base font-bold text-white hover:text-purple-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Current Location</div>
                <div className="text-sm font-bold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800">
              <div className="text-xs text-slate-400 font-medium mb-3">Online Profiles</div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  Reaches via SMS & Email
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Enter your Gmail / Email and message details below. Clicking send delivers the message as an SMS directly to <strong>+91 9625188029</strong>!
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Message dispatched! SMS app opened & email delivered to Jyotiraditya.</span>
                </div>
              )}

              <form onSubmit={handleSendSMS} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Gmail / Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex.smith@gmail.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Generative AI Project Inquiry / Job Role"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                  ></textarea>
                </div>

                {/* Send & WhatsApp Action Bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  {/* Send SMS Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Opening SMS...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message (SMS)</span>
                      </>
                    )}
                  </button>

                  {/* WhatsApp Chat Button next to Send */}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 border border-emerald-400/30 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

