import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, GraduationCap, Calendar } from 'lucide-react';

const achievements = [
  {
    title: '2nd Runner Up - Jain University Entrepreneurship Week',
    category: 'Competitive Strategy',
    date: '2025',
    description: 'Recognized for innovative business modeling, market sizing forecasts, and pitching structural startup viability under the annual university-wide entrepreneurship competition.',
    icon: <Trophy size={14} className="text-amber-800" />
  },
  {
    title: 'Portfolio Performance Benchmark Outperformance',
    category: 'Asset Allocation',
    date: '2025',
    description: 'Successfully benchmarked a personal equity simulation, delivering an annualized return of 12.4% (generating active alpha +2.2% against benchmark NIFTY 50 metrics of 10.2%).',
    icon: <Award size={14} className="text-amber-800" />
  },
  {
    title: 'Academic Honors & Corporate Finance Specialization',
    category: 'Academic Portfolio',
    date: '2025 - Present',
    description: 'Recognized for excellent performance in advanced corporate valuation, financial statement analysis, and mathematical modelling modules at Jain University.',
    icon: <GraduationCap size={14} className="text-amber-800" />
  }
];

export default function Achievements() {
  return (
    <div className="section-padding pb-28 text-stone-900 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-left max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-sm text-amber-850 text-[10px] font-mono font-bold tracking-wider uppercase">
            <Trophy size={12} />
            DISTINCTIONS
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
            Professional Achievements
          </h1>
          <p className="text-stone-600 text-sm font-serif italic">
            Honors, case competition victories, and quantitative performance milestones.
          </p>
        </header>

        <div className="relative border-l border-stone-200 ml-3 pl-8 space-y-10 text-left">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-4.5 h-4.5 bg-white border border-stone-300 rounded-sm"></div>
              
              <div className="bg-white border border-stone-300 p-1 shadow-sm">
                <div className="border border-stone-150 p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <span className="px-2 py-0.5 border border-stone-200 bg-stone-50 text-stone-600 font-mono text-[9px] font-bold uppercase tracking-wider">
                      {achievement.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-stone-400 font-bold">
                      <Calendar size={10} className="text-amber-800" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
                    <span className="shrink-0 p-1 bg-stone-50 border border-stone-200">
                      {achievement.icon}
                    </span>
                    {achievement.title}
                  </h3>
                  
                  <p className="text-stone-650 text-xs font-serif leading-relaxed leading-6">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
