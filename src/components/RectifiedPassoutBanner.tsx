'use client';

import React from 'react';
import { CheckCircle2, GraduationCap, AlertCircle, Sparkles } from 'lucide-react';
import { RECTIFIED_PASSOUT_NOTICE } from '../data/portfolioData';

export const RectifiedPassoutBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-purple-950/40 border-y border-emerald-500/30 py-3 px-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] tracking-wider uppercase border border-emerald-500/40">
                {RECTIFIED_PASSOUT_NOTICE.status}
              </span>
              <span className="text-white font-semibold">
                Pass-Out Batch: <strong className="text-cyan-300">{RECTIFIED_PASSOUT_NOTICE.correctedBatch}</strong>
              </span>
            </div>
            <p className="text-slate-300 text-xs mt-0.5">
              {RECTIFIED_PASSOUT_NOTICE.degree} • {RECTIFIED_PASSOUT_NOTICE.institution} ({RECTIFIED_PASSOUT_NOTICE.university})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300 shrink-0">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span>Graduation Year: <strong className="text-white">2026</strong></span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-medium">CGPA 7.5</span>
        </div>
      </div>
    </div>
  );
};
