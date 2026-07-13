import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Compass, 
  MapPin, 
  Building2, 
  Calendar,
  Sparkles,
  ChevronDown,
  Briefcase
} from 'lucide-react';

export default function About() {
  const [activeCourse, setActiveCourse] = useState<string | null>('corp-finance');

  const timelineData = [
    {
      id: 'scaps',
      type: 'LEADERSHIP & SERVICE',
      role: 'Business Development Team Representative',
      organization: 'SAMARTHYA 2026 – Placement & Internship Forum (SCAPS), Jain University',
      period: '2025 - Present',
      location: 'Bengaluru, India',
      details: [
        'Sourced and managed cold-outreach to premium finance organizations for Jain University\'s flagship intra-college internship fair, directly pitching strategic candidate profiles to hiring managers.',
        'Successfully onboarded and coordinated communication with 60+ partner corporations, aligning schedules with ~1,000 candidate registrants across a 2-day on-site event.',
        'Led floor logistics, student registrations, and on-spot interview cycles, ensuring flawless professional compliance.'
      ],
      icon: <Briefcase size={12} className="text-amber-800" />
    },
    {
      id: 'jain',
      type: 'ACADEMICS',
      role: 'Bachelor of Commerce (Honours) – Strategic Finance',
      organization: 'Jain Deemed-to-be University',
      period: '2025 - Present',
      location: 'Bengaluru, India',
      details: [
        'Advanced strategic curriculum covering corporate financial forecasting, mathematical modeling, statement analysis, capital budgeting, and market structures.',
        'Active competitor in institutional valuation challenges and strategic case workshops.'
      ],
      icon: <GraduationCap size={12} className="text-stone-800" />
    }
  ];

  const courses = [
    {
      id: 'corp-finance',
      title: 'Corporate Finance & Budgeting',
      description: 'Understanding optimal capital structure decisions, leverage cost dynamics, weighted average cost of capital (WACC), and enterprise valuation.'
    },
    {
      id: 'accounting',
      title: 'Financial Accounting & Reporting',
      description: 'Analyzing double-entry mechanics, consolidating corporate balances, interpreting regulatory accounts, and mapping cash flow schedules.'
    },
    {
      id: 'investments',
      title: 'Investment & Equity Analysis',
      description: 'Evaluating equity structures, benchmarking assets, modeling portfolios against benchmarks (NIFTY 50), and implementing DCF valuation techniques.'
    },
    {
      id: 'economics',
      title: 'Business & Managerial Economics',
      description: 'Studying microeconomic demand functions, price elasticity coefficients, corporate cost models, and macro market cycle impacts.'
    }
  ];

  const skills = [
    { 
      category: 'FINANCIAL SPECIALIZATIONS', 
      items: [
        'Financial Modelling', 
        'DCF Valuation', 
        'Financial Statement Analysis', 
        'Ratio Analysis', 
        'DuPont Analysis', 
        'Scenario Analysis', 
        'Sensitivity Analysis'
      ] 
    },
    { 
      category: 'CORE TOOLS & PLATFORMS', 
      items: [
        'Microsoft Excel (Pivots, Analysis ToolPak)', 
        'Microsoft PowerPoint', 
        'Version Control',
        'Web Design Layouts'
      ] 
    },
    {
      category: 'PRODUCTIVITY & AI SUPPORT',
      items: [
        'Gemini API Integrations', 
        'Prompt Optimization', 
        'Workflow Automation'
      ]
    }
  ];

  return (
    <div className="section-padding space-y-16 pb-28 text-stone-900 font-sans">
      {/* Header */}
      <header className="mb-16 text-left max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-sm text-amber-850 text-[10px] font-mono font-bold tracking-wider uppercase">
          <Compass size={12} />
          FINANCE PROFILE
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-serif italic">
          BCom (Hons) Strategic Finance student at Jain University, Bengaluru.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Biography, Timeline, and Coursework */}
        <div className="lg:col-span-8 space-y-16 text-left">
          {/* Biography */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-3">
              <span className="w-6 h-px bg-stone-300" />
              I. Professional Background
            </h2>
            <div className="text-stone-700 space-y-5 text-sm leading-relaxed font-serif">
              <p>
                I am a final-year <strong className="text-stone-900 font-bold">B.Com (Honours) Strategic Finance</strong> undergraduate at Jain University, Bengaluru. I have always been fascinated by how businesses are valued and how capital is allocated. My focus is on understanding the real drivers behind a company's financial performance by analyzing corporate reports and building practical financial models.
              </p>
              <p>
                <strong>What Motivates Me:</strong> Rather than just looking at surface-level numbers, I enjoy diving into corporate financial statements to find the story behind them. I am particularly interested in how operational decisions impact a company's profitability, and how we can use quantitative models like Discounted Cash Flow (DCF) and DuPont analysis to uncover its true intrinsic value.
              </p>
              <p>
                <strong>Skills & Focus:</strong> I focus on building structured, reliable three-statement financial models, performing sensitivity analysis, and breaking down return on equity. To support this work, I make extensive use of Microsoft Excel for calculations and data organization, ensuring my models are clear, functional, and easy for teams to interpret.
              </p>
              <p>
                <strong>Career Goals:</strong> I am actively seeking a summer internship or placement within <strong className="text-stone-900 font-bold">Equity Research, Investment Banking</strong>, or <strong className="text-stone-900 font-bold">Corporate Finance</strong> teams. I want to bring my analytical mindset and modelling skills to a team where I can contribute directly to company valuations, industry briefings, and investment analysis.
              </p>
            </div>
          </section>

          {/* Academic Timeline */}
          <section className="space-y-8">
            <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-3">
              <span className="w-6 h-px bg-stone-300" />
              II. Experience & Professional Chronology
            </h2>

            <div className="relative border-l border-stone-200 ml-3 pl-8 space-y-10">
              {timelineData.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline Node */}
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-white border border-stone-300 rounded-sm flex items-center justify-center shadow-sm">
                    {item.icon}
                  </span>

                  <div className="space-y-4 bg-white p-6 border border-stone-200 shadow-sm rounded-none p-1">
                    <div className="border border-stone-100 p-5 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[9px] font-mono">
                        <span className="px-2 py-0.5 border border-stone-200 bg-stone-50 text-stone-600 font-bold tracking-wider">
                          {item.type}
                        </span>
                        <span className="text-stone-400 font-bold flex items-center gap-1">
                          <Calendar size={10} />
                          {item.period}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-serif font-bold text-stone-900 leading-tight">{item.role}</h3>
                        <p className="text-amber-800 text-xs font-mono font-bold mt-1">{item.organization}</p>
                      </div>

                      <div className="text-[10px] text-stone-400 font-mono flex items-center gap-1 pb-1">
                        <MapPin size={10} />
                        {item.location}
                      </div>

                      <ul className="space-y-2 text-xs text-stone-650 list-disc list-outside ml-4 border-t border-stone-100 pt-3 font-serif leading-relaxed">
                        {item.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coursework Explander */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-3">
              <span className="w-6 h-px bg-stone-300" />
              III. Strategic Coursework Areas
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((course) => (
                <div 
                  key={course.id} 
                  onClick={() => setActiveCourse(activeCourse === course.id ? null : course.id)}
                  className={`p-1 border transition-all cursor-pointer rounded-none text-left flex flex-col justify-between ${
                    activeCourse === course.id 
                      ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-md' 
                      : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300 shadow-sm'
                  }`}
                >
                  <div className={`p-5 space-y-2 border ${activeCourse === course.id ? 'border-stone-800' : 'border-stone-50'}`}>
                    <h3 className="font-serif font-bold text-base flex justify-between items-center">
                      {course.title}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${activeCourse === course.id ? 'rotate-180' : ''}`} 
                      />
                    </h3>
                    <div className="h-px bg-current opacity-10" />
                    <p className={`text-xs leading-relaxed font-serif ${
                      activeCourse === course.id ? 'text-stone-300' : 'text-stone-500'
                    }`}>
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Key Skills & Principles */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 text-left">
          {/* Key Skills */}
          <div className="bg-white rounded-none border border-stone-300 p-1 shadow-sm">
            <div className="border border-stone-200 p-6 space-y-6">
              <h3 className="text-md font-serif font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center gap-2">
                <Award size={16} className="text-amber-800" />
                Core Qualifications
              </h3>

              <div className="space-y-6">
                {skills.map((group) => (
                  <div key={group.category} className="space-y-2.5">
                    <h4 className="text-[9px] font-mono font-bold text-stone-400 uppercase tracking-widest">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-2 py-1 bg-stone-50 border border-stone-200 text-stone-700 text-[10px] font-mono tracking-wide font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Ethos Card */}
          <div className="bg-[#faf9f6] border border-stone-300 p-1 shadow-sm rounded-none">
            <div className="border border-stone-200 p-6 space-y-4">
              <Sparkles size={18} className="text-amber-800" />
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-amber-850 uppercase">Core Philosophy</h4>
              <p className="text-xs text-stone-700 leading-relaxed font-serif italic">
                "Rigorous fundamental analysis and mathematical precision must always precede investment decisions. By analyzing historical cash conversions and decomposing DuPont ratios, we isolate the true, sustainable drivers of corporate value."
              </p>
              <div className="h-px bg-stone-200" />
              <span className="text-[9px] font-mono text-stone-400 tracking-wider block font-bold">
                SAMARTHYA COMMITTEE REPRESENTATIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
