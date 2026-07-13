import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Linkedin, 
  Mail, 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  PieChart as PieIcon, 
  Award, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Percent, 
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Compass,
  Sliders,
  FileText,
  CheckCircle2,
  Database,
  AlertCircle,
  Info,
  Download
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

// Elegant editorial trend data
const portfolioTrendData = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 105 },
  { month: 'Mar', value: 104 },
  { month: 'Apr', value: 112 },
  { month: 'May', value: 118 },
  { month: 'Jun', value: 124 },
];

const portfolioAllocation = [
  { name: 'Technology', value: 35, color: '#1e3a8a' }, // Deep Blue
  { name: 'Financials', value: 25, color: '#b45309' }, // Classic Amber
  { name: 'Consumer Goods', value: 20, color: '#064e3b' }, // Forest Green
  { name: 'Energy', value: 15, color: '#451a03' }, // Warm Brown
  { name: 'Pharmaceuticals', value: 5, color: '#312e81' }, // Indigo
];

export default function Home() {
  const [activeMetricTab, setActiveMetricTab] = useState<'portfolio' | 'dupont' | 'dcf'>('portfolio');
  const [homeRevGrowth, setHomeRevGrowth] = useState<number>(8); // Range: 4 - 15%
  const [homeWacc, setHomeWacc] = useState<number>(10); // Range: 8 - 15%
  const [homeTermGrowth, setHomeTermGrowth] = useState<number>(4); // Range: 2 - 6%

  const calculateHomeDCF = (growth: number, discount: number, terminal: number) => {
    const baseValue = 1319; // Base intrinsic price
    const growthEffect = (growth - 8) * 42; 
    const waccEffect = (discount - 10) * -95; 
    const terminalEffect = (terminal - 4) * 65; 
    const finalVal = baseValue + growthEffect + waccEffect + terminalEffect;
    return Math.round(Math.max(750, Math.min(2300, finalVal)));
  };

  const homeIntrinsicPrice = calculateHomeDCF(homeRevGrowth, homeWacc, homeTermGrowth);
  const homeMarketPrice = 1297;
  const homeVariance = (((homeIntrinsicPrice - homeMarketPrice) / homeMarketPrice) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-stone-50 pb-24 text-stone-900 font-sans">
      {/* Editorial Header Bar (Classic Press Style) */}
      <div className="bg-[#1c1917] text-[#f5f5f4] py-3.5 px-6 md:px-12 border-b border-stone-800 text-[10px] font-mono tracking-wider z-20 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-stone-300">
            <span className="flex items-center gap-1.5 font-bold text-amber-500">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              INVESTMENT ANALYSIS:
            </span>
            <span>JAIN UNIVERSITY HONOURS PROJECT</span>
            <span className="text-stone-700">|</span>
            <span>ACTIVE INTERNSHIP CANDIDATE</span>
          </div>
          <div className="flex items-center gap-6 text-[9px] text-stone-400">
            <span>BENGALURU, INDIA</span>
            <span>GMT +5:30</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-12 md:pt-20">
        <div className="lg:col-span-7 space-y-6 text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-sm text-amber-850 text-[11px] font-mono font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            SEEKING FINANCE INTERNSHIP
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-stone-900 tracking-tight leading-none">
              ANSH NIMESH SHAH
            </h1>
            <p className="text-xl md:text-2xl font-serif text-amber-800 tracking-tight font-medium">
              BCom (Hons) Strategic Finance
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 py-2 font-mono text-xs text-stone-500 font-bold tracking-wider uppercase border-y border-stone-200/60 max-w-xl">
            <span>Financial Modelling</span>
            <span className="text-stone-300">•</span>
            <span>Valuation</span>
            <span className="text-stone-300">•</span>
            <span>Equity Research</span>
          </div>

          <p className="text-base text-stone-750 leading-relaxed max-w-2xl font-serif">
            Ambitious strategic finance student and CFA Aspirant. Specializing in integrated three-statement corporate forecasting, multi-scenario discounted cash flow (DCF) sensitivity models, and DuPont profitability deconstruction.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              to="/projects"
              className="inline-flex items-center px-5 py-3 bg-stone-900 text-stone-100 hover:bg-stone-800 transition-all font-mono text-xs font-bold tracking-wider border border-transparent"
            >
              VIEW PROJECTS
              <ArrowRight size={13} className="ml-2" />
            </Link>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="inline-flex items-center px-5 py-3 bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition-all font-mono text-xs font-bold tracking-wider"
            >
              DOWNLOAD RESUME
            </a>
            <a
              href="#contact-section"
              className="inline-flex items-center px-5 py-3 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 transition-all font-mono text-xs font-bold tracking-wider"
            >
              CONTACT
            </a>
            <a
              href="https://www.linkedin.com/in/ansh-shah1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition-all font-mono text-xs font-bold tracking-wider gap-1.5"
            >
              <Linkedin size={13} className="text-[#0077b5]" />
              LINKEDIN
            </a>
          </div>

          {/* Core Institutional Stats Bar */}
          <div className="grid grid-cols-3 gap-8 pt-6 border-t border-stone-200/80 max-w-lg">
            <div>
              <div className="text-2xl font-serif font-bold text-stone-900">5</div>
              <div className="text-[10px] text-stone-500 font-mono font-bold tracking-wider uppercase mt-1">Finance Projects</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-stone-900">12.4%</div>
              <div className="text-[10px] text-stone-500 font-mono font-bold tracking-wider uppercase mt-1">Portfolio CAGR</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-stone-900">7</div>
              <div className="text-[10px] text-stone-500 font-mono font-bold tracking-wider uppercase mt-1">Credentials</div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Panel - Styled like a premium leather-bound ledger/academic journal */}
        <div className="lg:col-span-5 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-none border border-stone-300 shadow-xl overflow-hidden p-1 relative"
          >
            {/* Double Border Detail */}
            <div className="border border-stone-200 p-6 space-y-6">
              
              {/* Journal Title */}
              <div className="flex justify-between items-start border-b border-stone-300 pb-4">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-stone-400 uppercase block font-bold">MODEL AUDIT SERIES</span>
                  <h3 className="text-lg font-serif font-bold text-stone-900">Strategic Valuation Models</h3>
                </div>
                <span className="px-2 py-0.5 border border-amber-800/40 text-amber-800 bg-amber-50 font-mono text-[9px] uppercase font-bold">
                  INTERACTIVE
                </span>
              </div>

              {/* Classic Book-Style Tabs */}
              <div className="flex border-b border-stone-200 text-[10px] font-mono tracking-wider">
                <button 
                  onClick={() => setActiveMetricTab('portfolio')}
                  className={`flex-1 py-2.5 text-center transition-all ${activeMetricTab === 'portfolio' ? 'border-b-2 border-stone-950 text-stone-950 font-bold' : 'text-stone-400 hover:text-stone-700'}`}
                >
                  I. ALLOCATION
                </button>
                <button 
                  onClick={() => setActiveMetricTab('dupont')}
                  className={`flex-1 py-2.5 text-center transition-all ${activeMetricTab === 'dupont' ? 'border-b-2 border-stone-950 text-stone-950 font-bold' : 'text-stone-400 hover:text-stone-700'}`}
                >
                  II. DUPONT RATIOS
                </button>
                <button 
                  onClick={() => setActiveMetricTab('dcf')}
                  className={`flex-1 py-2.5 text-center transition-all ${activeMetricTab === 'dcf' ? 'border-b-2 border-stone-950 text-stone-950 font-bold' : 'text-stone-400 hover:text-stone-700'}`}
                >
                  III. DCF METRIC
                </button>
              </div>

              {/* Dynamic Inner Ledger Board */}
              <div className="min-h-[220px] flex flex-col justify-between">
                
                {activeMetricTab === 'portfolio' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[9px] font-mono text-stone-400 tracking-wider uppercase block">SIMULATED DEPLOYED CAPITAL</span>
                        <p className="text-xl font-serif font-bold text-stone-900">₹15,00,000 Equities</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-800">
                        +12.4% Annualized
                      </span>
                    </div>

                    <div className="h-36 flex items-center justify-between gap-4">
                      <div className="w-1/2 h-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={portfolioAllocation}
                              cx="50%"
                              cy="50%"
                              innerRadius={30}
                              outerRadius={48}
                              paddingAngle={3}
                              dataKey="value"
                            >
                              {portfolioAllocation.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="w-1/2 space-y-1.5 text-[9px] font-mono text-stone-500">
                        {portfolioAllocation.map((item, i) => (
                          <div key={i} className="flex items-center justify-between border-b border-stone-100 pb-0.5">
                            <span className="flex items-center gap-1.5 truncate min-w-0 flex-1 mr-1">
                              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                              {item.name}
                            </span>
                            <span className="font-bold text-stone-800 shrink-0">{item.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeMetricTab === 'dupont' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[9px] font-mono text-stone-400 tracking-wider uppercase block">DECOMPOSED ROE STRUCTURE</span>
                        <p className="text-xl font-serif font-bold text-stone-900">ROE: 29.0%</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-stone-500">Wipro Limited</span>
                    </div>

                    {/* Classic Scholarly Fraction Stack */}
                    <div className="grid grid-cols-3 gap-2 text-center pt-3 text-[10px] font-mono">
                      <div className="bg-stone-50 p-2.5 border border-stone-200">
                        <span className="text-stone-400 block text-[8px] tracking-wider mb-1">NET MARGIN</span>
                        <span className="font-bold text-stone-800">18.0%</span>
                      </div>
                      <div className="bg-stone-50 p-2.5 border border-stone-200">
                        <span className="text-stone-400 block text-[8px] tracking-wider mb-1">ASSET VELOCITY</span>
                        <span className="font-bold text-stone-800">1.48x</span>
                      </div>
                      <div className="bg-stone-50 p-2.5 border border-stone-200">
                        <span className="text-stone-400 block text-[8px] tracking-wider mb-1">LEVERAGE MULTIPLIER</span>
                        <span className="font-bold text-stone-800">1.09x</span>
                      </div>
                    </div>
                    <p className="text-[9px] text-stone-400 font-serif italic text-center">
                      "Demonstrates high operational profit conversion as the anchor of asset efficiency."
                    </p>
                  </div>
                )}

                {activeMetricTab === 'dcf' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[9px] font-mono text-stone-400 tracking-wider uppercase block">INTRINSIC VALUE INDEX</span>
                        <p className="text-xl font-serif font-bold text-amber-900">₹1,319 / Share</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-stone-500">Infosys Limited</span>
                    </div>

                    <div className="h-24 pt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={portfolioTrendData}>
                          <defs>
                            <linearGradient id="colorValueClassic" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#b45309" stopOpacity={0.15}/>
                              <stop offset="95%" stopColor="#b45309" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="month" hide />
                          <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                          <Tooltip contentStyle={{ fontSize: '9px', fontFamily: 'monospace', backgroundColor: '#faf9f6', borderColor: '#d6d3d1' }} />
                          <Area type="monotone" dataKey="value" stroke="#b45309" strokeWidth={1.5} fillOpacity={1} fill="url(#colorValueClassic)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex justify-between text-[8px] text-stone-400 font-mono border-t border-stone-100 pt-2">
                      <span>WACC DISC.: 10%</span>
                      <span>FCF GROWTH: 8%</span>
                      <span>TERMINAL: 4%</span>
                    </div>
                  </div>
                )}

                {/* Classic Footer Signature */}
                <div className="border-t border-stone-200 pt-4 mt-4 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-stone-400 font-bold uppercase tracking-wider">MODEL DASHBOARD</span>
                  <Link 
                    to="/projects" 
                    className="text-stone-800 font-bold hover:text-amber-800 flex items-center gap-1 transition-colors"
                  >
                    CALIBRATE MODEL <ChevronRight size={12} />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section / Institutional Credentials Strip */}
      <section className="bg-white border-y border-stone-200/80 py-8 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y-0 md:divide-x divide-stone-200 text-left">
            
            {/* Item 1 */}
            <div className="flex items-center gap-4.5 p-2 md:px-6">
              <div className="w-10 h-10 bg-amber-50 border border-amber-200/50 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-amber-850" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-stone-400 tracking-wider uppercase leading-tight">ACADEMICS</p>
                <h4 className="text-xs font-serif font-bold text-stone-900 leading-snug mt-0.5">BCom (Hons)</h4>
                <p className="text-[10px] text-stone-500 font-sans">Strategic Finance</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4.5 p-2 md:px-6">
              <div className="w-10 h-10 bg-amber-50 border border-amber-200/50 flex items-center justify-center shrink-0">
                <Award size={18} className="text-amber-850" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-stone-400 tracking-wider uppercase leading-tight">GLOBAL PROSPECT</p>
                <h4 className="text-xs font-serif font-bold text-stone-900 leading-snug mt-0.5">CFA Level I Aspirant</h4>
                <p className="text-[10px] text-stone-500 font-sans">May 2027</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4.5 p-2 md:px-6">
              <div className="w-10 h-10 bg-amber-50 border border-amber-200/50 flex items-center justify-center shrink-0">
                <TrendingUp size={18} className="text-amber-850" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-stone-400 tracking-wider uppercase leading-tight">GLOBAL PROGRAM</p>
                <h4 className="text-xs font-serif font-bold text-stone-900 leading-snug mt-0.5">McKinsey Forward Graduate</h4>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4.5 p-2 md:px-6">
              <div className="w-10 h-10 bg-amber-50 border border-amber-200/50 flex items-center justify-center shrink-0">
                <BarChart3 size={18} className="text-amber-850" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-stone-400 tracking-wider uppercase leading-tight">FINANCIAL ANALYTICS</p>
                <h4 className="text-xs font-serif font-bold text-stone-900 leading-snug mt-0.5">Finance Projects</h4>
                <p className="text-[10px] text-stone-500 font-sans">7+ Case Studies</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-4.5 p-2 md:px-6">
              <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                <Briefcase size={18} className="text-emerald-800" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-emerald-800 tracking-wider uppercase leading-tight">AVAILABILITY</p>
                <h4 className="text-xs font-serif font-bold text-stone-900 leading-snug mt-0.5">Open to Internships</h4>
                <p className="text-[10px] text-stone-500 font-sans">Seeking Placement</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Profile / Classic Investment Thesis Block */}
      <section className="bg-[#fcfbf9] border-y border-stone-200 py-20 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-amber-800" />
            <h2 className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-850">The Core Investment Thesis</h2>
          </div>
          
          <div className="relative">
            <span className="absolute -top-6 -left-3 md:-left-6 text-stone-200/60 text-5xl md:text-7xl font-serif select-none pointer-events-none font-bold leading-none z-0">“</span>
            <p className="text-xl sm:text-2xl text-stone-800 leading-relaxed font-serif italic relative z-10 pl-2">
              I view financial statement analysis not merely as a compilation of reports, but as an operational blueprint of capital efficiency. Decomposing profitability through DuPont, estimating fair value ranges using integrated models, and studying free cash conversions allows us to isolate sustainable, intrinsic business strength. That analytical focus is my professional anchor.
            </p>
          </div>
          
          <div className="flex items-center gap-4 pt-6 border-t border-stone-200">
            <div className="w-9 h-9 bg-stone-900 text-stone-100 rounded-sm flex items-center justify-center font-mono font-bold text-xs">
              AS
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-stone-900 tracking-wide uppercase">Ansh Nimesh Shah</p>
              <p className="text-[11px] text-stone-500 font-serif italic">B.Com (Honours) Strategic Finance  •  SAMARTHYA Placement Team Representative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Section */}
      <section className="bg-stone-50 border-b border-stone-200 py-20 px-6 md:px-12 relative z-10 text-left">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-widest block">FEATURED EQUITY RESEARCH</span>
              <h3 className="text-3xl font-serif font-bold text-stone-900">Infosys Ltd. Valuation Case Study</h3>
              <p className="text-stone-650 text-xs font-serif italic">
                A rigorous, multi-scenario Discounted Cash Flow (DCF) model and corporate statement analysis.
              </p>
            </div>
            <Link 
              to="/projects"
              className="inline-flex items-center px-5 py-3 bg-stone-900 text-stone-100 hover:bg-stone-800 text-[11px] font-mono font-bold tracking-wider transition-colors shrink-0"
            >
              READ FULL CASE STUDY
              <ArrowRight size={13} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive Valuation Panel (Large Preview) */}
            <div className="lg:col-span-5 bg-[#faf9f6] border border-stone-200 p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-[9px] font-mono text-stone-500 tracking-wider uppercase font-bold">DCF VALUATION SIMULATOR</span>
                  <span className="px-2 py-0.5 border border-amber-800/40 text-amber-800 bg-amber-50 rounded-none font-mono text-[8px] uppercase font-bold">LIVE CALIBRATION</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-stone-400 tracking-widest block uppercase">ESTIMATED INTRINSIC PRICE</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-serif font-bold text-amber-900">₹{homeIntrinsicPrice}</span>
                    <span className="text-[10px] text-stone-400 font-mono">/ SHARE</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-serif italic text-stone-600">
                    <span>Spot Price: ₹1,297</span>
                    <span>•</span>
                    <span className={`font-bold font-mono text-xs ${homeIntrinsicPrice > homeMarketPrice ? 'text-emerald-850 font-semibold' : 'text-stone-650'}`}>
                      {homeIntrinsicPrice > homeMarketPrice ? 'Undervalued' : 'Overvalued'} ({homeVariance}%)
                    </span>
                  </div>
                </div>

                {/* Interactive Sliders */}
                <div className="space-y-5 pt-6 border-t border-stone-200">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-500 font-bold">Revenue Growth Forecast:</span>
                      <span className="text-amber-850 font-bold">{homeRevGrowth}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="4" 
                      max="15" 
                      value={homeRevGrowth} 
                      onChange={(e) => setHomeRevGrowth(Number(e.target.value))}
                      className="w-full accent-amber-800 bg-stone-200 rounded-lg appearance-none h-1 cursor-pointer" 
                    />
                    <div className="flex justify-between text-[9px] text-stone-400 font-mono">
                      <span>Conservative (4%)</span>
                      <span>Optimistic (15%)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-500 font-bold">Capital Discount (WACC):</span>
                      <span className="text-amber-850 font-bold">{homeWacc}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="8" 
                      max="15" 
                      value={homeWacc} 
                      onChange={(e) => setHomeWacc(Number(e.target.value))}
                      className="w-full accent-amber-800 bg-stone-200 rounded-lg appearance-none h-1 cursor-pointer" 
                    />
                    <div className="flex justify-between text-[9px] text-stone-400 font-mono">
                      <span>Low Risk (8%)</span>
                      <span>High Premium (15%)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-500 font-bold">Terminal Growth Multiplier:</span>
                      <span className="text-amber-850 font-bold">{homeTermGrowth}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="6" 
                      value={homeTermGrowth} 
                      onChange={(e) => setHomeTermGrowth(Number(e.target.value))}
                      className="w-full accent-amber-800 bg-stone-200 rounded-lg appearance-none h-1 cursor-pointer" 
                    />
                    <div className="flex justify-between text-[9px] text-stone-400 font-mono">
                      <span>Inflationary (2%)</span>
                      <span>Aggressive (6%)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200 flex items-center gap-2 text-[10px] text-stone-400 font-mono leading-relaxed mt-6">
                <Info size={12} className="text-stone-400 shrink-0" />
                <p>Recalculates intrinsic value using discount rate sensitivity. Use sliders to stress-test.</p>
              </div>
            </div>

            {/* Strategic Details & Key Findings */}
            <div className="lg:col-span-7 border border-stone-200 p-8 flex flex-col justify-between bg-white text-stone-900">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                  <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold block">CASE SYNOPSIS</span>
                  <span className="text-[9px] font-mono font-bold text-stone-400">INDEX I</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-serif">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase">Overview</span>
                    <p className="text-stone-600 leading-relaxed">
                      Evaluates the intrinsic valuation of Infosys Ltd. utilizing a dynamically linked 10-year three-statement financial model to project long-term cash generation margins and test capital resilience.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase">Problem Statement</span>
                    <p className="text-stone-600 leading-relaxed">
                      Public equity markets frequently misprice enterprise assets due to transient macro sector head-winds. Analysts require a rigorous capital-discounting model to isolate underlying cash efficiency.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase">Methodology</span>
                    <p className="text-stone-600 leading-relaxed">
                      Synthesized an integrated 10-year model linking P&L, Balance Sheet, and Cash Flow Statements. Derived WACC indicators using CAPM based on beta trends from the National Stock Exchange (NSE).
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase">Key Findings</span>
                    <p className="text-stone-600 leading-relaxed">
                      Discount rates act as the primary model sensitivity pivot. A slight 2% rise in WACC cuts the intrinsic valuation by ₹190/share, confirming that terminal value is highly dependent on discount assumptions.
                    </p>
                  </div>

                  <div className="space-y-1 md:col-span-2 border-t border-stone-100 pt-3">
                    <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Skills Demonstrated</span>
                    <div className="flex flex-wrap gap-1">
                      {['10-Year FCFF Forecasting', 'Sensitivity Analysis', 'CAPM & WACC', 'Three-Statement Modeling', 'DuPont Decomposition'].map((skill) => (
                        <span key={skill} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold uppercase">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  <Link 
                    to="/projects"
                    className="px-4 py-2 bg-stone-900 hover:bg-amber-800 text-stone-100 transition-colors font-mono text-[9px] font-bold tracking-wider uppercase"
                  >
                    READ ENTIRE CASE STUDY
                  </Link>
                  <a 
                    href="/Infosys_Valuation_Report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-stone-300 hover:bg-stone-50 text-stone-700 transition-all font-mono text-[9px] font-bold tracking-wider uppercase flex items-center gap-1.5"
                  >
                    <Download size={10} />
                    Valuation Report (PDF)
                  </a>
                  <a 
                    href="/Infosys_10Yr_DCF_Model.xlsx"
                    download
                    className="px-4 py-2 border border-stone-300 hover:bg-stone-50 text-stone-700 transition-all font-mono text-[9px] font-bold tracking-wider uppercase flex items-center gap-1.5"
                  >
                    <Download size={10} />
                    Excel DCF Model (.xlsx)
                  </a>
                </div>
                <div className="text-[9px] font-mono text-stone-400 font-bold uppercase text-right shrink-0">
                  VERIFIED BY FACULTY
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Classic Curated Three Columns (Disciplines) */}
      <section className="section-padding relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-widest block">ACADEMIC & ANALYTICAL DOMAIN</span>
          <h3 className="text-3xl font-serif font-bold text-stone-900">Fields of Strategic Focus</h3>
          <div className="h-0.5 bg-stone-200 w-12 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Column 1: Equity Research */}
          <Link 
            to="/projects" 
            className="group bg-white p-8 rounded-none border border-stone-200 hover:border-amber-800/40 transition-all flex flex-col justify-between hover:shadow-md text-left"
          >
            <div>
              <div className="w-10 h-10 bg-stone-50 border border-stone-200 text-stone-800 flex items-center justify-center mb-6 group-hover:bg-stone-950 group-hover:text-stone-100 transition-colors">
                <BarChart3 size={18} />
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">I. Equity Research & DCF</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-serif">
                Evaluating corporate intrinsic value through multi-stage discounted cash flow (DCF) models, comprehensive balance projections, and margin sensitivity scenarios.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 flex justify-between items-center text-[10px] font-mono font-bold tracking-wider text-amber-800">
              <span>EXPLORE MODELS</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          {/* Column 2: Portfolio Analytics */}
          <Link 
            to="/projects" 
            className="group bg-white p-8 rounded-none border border-stone-200 hover:border-amber-800/40 transition-all flex flex-col justify-between hover:shadow-md text-left"
          >
            <div>
              <div className="w-10 h-10 bg-stone-50 border border-stone-200 text-stone-800 flex items-center justify-center mb-6 group-hover:bg-stone-950 group-hover:text-stone-100 transition-colors">
                <PieIcon size={18} />
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">II. Portfolio Allocations</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-serif">
                Benchmarking returns, assessing risk profiles, and automating periodic calculation workflows through advanced Excel indices and dynamic trackers.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 flex justify-between items-center text-[10px] font-mono font-bold tracking-wider text-amber-800">
              <span>VIEW PORTFOLIO</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>

          {/* Column 3: Corporate Finance */}
          <Link 
            to="/about" 
            className="group bg-white p-8 rounded-none border border-stone-200 hover:border-amber-800/40 transition-all flex flex-col justify-between hover:shadow-md text-left"
          >
            <div>
              <div className="w-10 h-10 bg-stone-50 border border-stone-200 text-stone-800 flex items-center justify-center mb-6 group-hover:bg-stone-950 group-hover:text-stone-100 transition-colors">
                <GraduationCap size={18} />
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">III. Strategic Finance</h4>
              <p className="text-stone-600 text-xs leading-relaxed font-serif">
                B.Com Honours coursework at Jain University. Heavy focus on asset management, capital budgeting constraints, macroeconomics, and micro cost models.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-stone-100 flex justify-between items-center text-[10px] font-mono font-bold tracking-wider text-amber-800">
              <span>EXPLORE COURSEWORK</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Certifications Block */}
      <section className="bg-stone-100 py-16 px-6 md:px-12 relative z-10 border-t border-stone-200 text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-md space-y-2">
            <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest block">VERIFIED STATUS</span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">Professional Auditing Credentials</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Academic and strategic accreditations awarded by McKinsey & Company, Varsity, and premium financial institutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/certifications" 
              className="px-5 py-3.5 bg-white border border-stone-300 hover:border-stone-400 text-[10px] font-mono font-bold tracking-wider text-stone-800 flex items-center gap-2 transition-all"
            >
              <Award size={12} className="text-amber-800" />
              MCKINSEY FORWARD PROGRAM
            </Link>
            <Link 
              to="/certifications" 
              className="px-5 py-3.5 bg-white border border-stone-300 hover:border-stone-400 text-[10px] font-mono font-bold tracking-wider text-stone-800 flex items-center gap-2 transition-all"
            >
              <Award size={12} className="text-amber-800" />
              VARSITY EQUITY SCHOLAR
            </Link>
            <Link 
              to="/certifications" 
              className="px-5 py-3.5 bg-white border border-stone-300 hover:border-stone-400 text-[10px] font-mono font-bold tracking-wider text-stone-800 flex items-center gap-2 transition-all"
            >
              <Award size={12} className="text-amber-800" />
              THREE-STATEMENT DECOMPOSITION
            </Link>
          </div>
        </div>
      </section>


      {/* Recruiter Contact Section */}
      <section id="contact-section" className="bg-white py-24 px-6 md:px-12 relative z-10 scroll-mt-20 border-t border-stone-200">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 rounded-sm text-stone-800 text-[10px] font-mono font-bold tracking-wider uppercase">
            <Mail size={11} className="text-amber-800" />
            RECRUITER PORTAL
          </div>
          
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight animate-fade-in">
            Open to Finance Internship Opportunities
          </h3>
          
          <p className="text-stone-600 text-sm sm:text-base font-serif max-w-3xl mx-auto leading-relaxed italic">
            "I am actively seeking a summer internship or placement within Equity Research, Investment Banking, or Corporate Finance teams. Let's connect to discuss how my financial modelling skills and analytical mindset can support your team."
          </p>

          <div className="h-px bg-stone-200 w-32 mx-auto"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 text-left font-mono">
            {/* 1. Download Resume */}
            <a 
              href="/resume.pdf"
              download="resume.pdf"
              className="bg-stone-50 border border-stone-200 p-5 hover:border-amber-850 hover:bg-amber-50/25 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest block">DOWNLOAD PORTFOLIO RESUME</span>
                <span className="text-xs font-bold text-stone-800 group-hover:text-amber-900 block">portfolio resume</span>
              </div>
              <span className="text-[9px] font-bold text-amber-800 tracking-wider flex items-center gap-1 uppercase">
                Download PDF <Download size={10} />
              </span>
            </a>

            {/* 2. Email Card */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anshnshah1007@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-50 border border-stone-200 p-5 hover:border-amber-850 hover:bg-amber-50/25 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest block">DIRECT EMAIL INQUIRY</span>
                <span className="text-xs font-bold text-stone-800 group-hover:text-amber-900 block truncate">anshnshah1007@gmail.com</span>
              </div>
              <span className="text-[9px] font-bold text-amber-800 tracking-wider flex items-center gap-1 uppercase">
                Compose Email <Mail size={10} />
              </span>
            </a>

            {/* 3. LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/ansh-shah1/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-50 border border-stone-200 p-5 hover:border-amber-850 hover:bg-amber-50/25 transition-all flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest block">PROFESSIONAL NETWORK</span>
                <span className="text-xs font-bold text-stone-800 group-hover:text-amber-900 block">LinkedIn Profile</span>
              </div>
              <span className="text-[9px] font-bold text-amber-800 tracking-wider flex items-center gap-1 uppercase">
                Connect on LinkedIn <Linkedin size={10} />
              </span>
            </a>
          </div>

          <div className="pt-6">
            <Link 
              to="/resume"
              className="inline-flex items-center px-8 py-4 bg-stone-900 text-stone-100 hover:bg-stone-800 transition-colors font-mono text-xs font-bold tracking-wider uppercase"
            >
              VIEW COMPREHENSIVE ACADEMIC CV
              <ArrowRight size={14} className="ml-2.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
