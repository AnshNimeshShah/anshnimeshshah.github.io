import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart as PieIcon, 
  ExternalLink, 
  Percent, 
  Sliders, 
  Coins, 
  Info,
  Layers,
  ArrowUpRight,
  ChevronRight,
  Award,
  BookOpen,
  Database,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Filter,
  ShieldAlert,
  Globe,
  Landmark,
  Scale
} from 'lucide-react';
import { 
  FEATURED_PROJECTS, 
  ADDITIONAL_ACADEMIC_PROJECTS,
  CATEGORIES, 
  ProjectCategory, 
  ProjectDetail 
} from '../data/projectsData';
import ProjectDetailModal from '../components/ProjectDetailModal';

export default function Projects() {
  // Category Filter State
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  
  // Modal State
  const [selectedModalProject, setSelectedModalProject] = useState<ProjectDetail | null>(null);

  // 1. DCF State (Infosys Calibration)
  const [revGrowth, setRevGrowth] = useState<number>(8); // Range: 4 - 15%
  const [wacc, setWacc] = useState<number>(10); // Range: 8 - 15%
  const [termGrowth, setTermGrowth] = useState<number>(4); // Range: 2 - 6%

  // Calibrated DCF Intrinsic Price Formula
  const calculateDCF = (growth: number, discount: number, terminal: number) => {
    const baseValue = 1319; // Base intrinsic price
    const growthEffect = (growth - 8) * 42; 
    const waccEffect = (discount - 10) * -95; 
    const terminalEffect = (terminal - 4) * 65; 
    const finalVal = baseValue + growthEffect + waccEffect + terminalEffect;
    return Math.round(Math.max(750, Math.min(2300, finalVal)));
  };

  const intrinsicPrice = calculateDCF(revGrowth, wacc, termGrowth);
  const marketPrice = 1297;
  const variance = (((intrinsicPrice - marketPrice) / marketPrice) * 100).toFixed(1);

  // 2. DuPont State (Wipro Calibration)
  const [netMargin, setNetMargin] = useState<number>(18.0); // Range: 10 - 25%
  const [assetTurnover, setAssetTurnover] = useState<number>(1.48); // Range: 0.5 - 2.5
  const [leverage, setLeverage] = useState<number>(1.09); // Range: 1.0 - 2.5

  const calculateROE = (margin: number, turnover: number, lev: number) => {
    return (margin * turnover * lev).toFixed(1);
  };

  const roe = calculateROE(netMargin, assetTurnover, leverage);

  // 3. Simulated Portfolio Data
  const portfolioHoldings = [
    { ticker: 'TCS', company: 'Tata Consultancy Services', sector: 'Technology', weight: '12%' },
    { ticker: 'RELIANCE', company: 'Reliance Industries Ltd', sector: 'Energy', weight: '11%' },
    { ticker: 'HDFCBANK', company: 'HDFC Bank Ltd', sector: 'Financials', weight: '10%' },
    { ticker: 'INFY', company: 'Infosys Ltd', sector: 'Technology', weight: '9%' },
    { ticker: 'ICICIBANK', company: 'ICICI Bank Ltd', sector: 'Financials', weight: '8%' },
    { ticker: 'ITC', company: 'ITC Ltd', sector: 'Consumer Goods', weight: '8%' },
    { ticker: 'HINDUNILVR', company: 'Hindustan Unilever Ltd', sector: 'Consumer Goods', weight: '7%' },
    { ticker: 'LTIM', company: 'LTIMindtree Ltd', sector: 'Technology', weight: '6%' },
    { ticker: 'AXISBANK', company: 'Axis Bank Ltd', sector: 'Financials', weight: '5%' },
    { ticker: 'SUNPHARMA', company: 'Sun Pharmaceutical Industries', sector: 'Pharmaceuticals', weight: '5%' },
    { ticker: 'SBIN', company: 'State Bank of India', sector: 'Financials', weight: '4%' },
    { ticker: 'COALINDIA', company: 'Coal India Ltd', sector: 'Energy', weight: '4%' },
    { ticker: 'BHARTIARTL', company: 'Bharti Airtel Ltd', sector: 'Telecom', weight: '4%' },
    { ticker: 'M&M', company: 'Mahindra & Mahindra Ltd', sector: 'Auto', weight: '4%' },
    { ticker: 'WIPRO', company: 'Wipro Ltd', sector: 'Technology', weight: '3%' },
  ];

  // Filtered lists based on category
  const filteredFeatured = useMemo(() => {
    if (selectedCategory === 'All') return FEATURED_PROJECTS;
    return FEATURED_PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const filteredAcademic = useMemo(() => {
    if (selectedCategory === 'All') return ADDITIONAL_ACADEMIC_PROJECTS;
    return ADDITIONAL_ACADEMIC_PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const openProjectModal = (project: ProjectDetail) => {
    setSelectedModalProject(project);
  };

  return (
    <div className="section-padding space-y-20 pb-28 text-stone-900 font-sans">
      
      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedModalProject}
        isOpen={!!selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />

      {/* Page Header */}
      <header className="mb-12 text-left max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-sm text-amber-800 text-[10px] font-mono font-bold tracking-wider uppercase">
          <Layers size={12} />
          FINANCIAL MODELLING & RESEARCH PORTFOLIO
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900">
          Projects & Case Studies
        </h1>
        <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-serif italic">
          Dynamic equity research models, DCF valuation workbooks, portfolio analytics, and academic research structured for institutional review.
        </p>
      </header>

      {/* Category Filter Tabs */}
      <div className="border-b border-stone-200 pb-4">
        <div className="flex items-center gap-2 mb-3 text-stone-400 text-[10px] font-mono font-bold uppercase tracking-wider">
          <Filter size={11} />
          <span>FILTER BY DISCIPLINE</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map(category => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-mono transition-all border ${
                  isSelected 
                    ? 'bg-stone-900 text-white border-stone-900 font-bold shadow-sm' 
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: FEATURED PROJECTS */}
      {/* ========================================================================= */}
      {filteredFeatured.length > 0 && (
        <section className="space-y-12 text-left">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                CORE WORKSPACES & RESEARCH
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
                Featured Projects
              </h2>
            </div>
            <span className="text-[10px] font-mono text-stone-400 font-bold">
              {filteredFeatured.length} OF {FEATURED_PROJECTS.length} FEATURED
            </span>
          </div>

          <div className="space-y-12">
            
            {/* 1. Meredian - AI-Assisted Equity Research Platform */}
            {filteredFeatured.some(p => p.id === 'meredian') && (
              <div className="bg-white rounded-none border border-stone-300 shadow-sm overflow-hidden p-1 grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10">
                
                {/* Platform Spec Panel */}
                <div className="lg:col-span-5 bg-[#faf9f6] border border-stone-200 p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                      <span className="text-[9px] font-mono text-stone-500 tracking-wider uppercase font-bold">RESEARCH WORKSPACE</span>
                      <span className="px-2 py-0.5 border border-emerald-800/40 text-emerald-800 bg-emerald-50 font-mono text-[8px] uppercase font-bold">LIVE PLATFORM</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-stone-400 tracking-widest block uppercase">PRODUCT ARCHITECTURE</span>
                      <div className="text-2xl font-serif font-bold text-stone-900">
                        Meredian Equity Workspace
                      </div>
                      <p className="text-xs font-serif italic text-stone-600 leading-relaxed">
                        An integrated workspace unifying company metrics, valuation models, financial statements, and context-aware research assistants.
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-stone-200 text-xs font-serif">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className="text-amber-800 shrink-0 mt-0.5" />
                        <span className="text-stone-700 leading-snug">
                          <strong>Product & Finance Ownership:</strong> Led product concept, finance logic, feature set, user workflow, validation, and deployment.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className="text-amber-800 shrink-0 mt-0.5" />
                        <span className="text-stone-700 leading-snug">
                          <strong>AI-Assisted Development:</strong> Accelerated implementation via AI-assisted dev tools while retaining complete ownership of financial decisions.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className="text-amber-800 shrink-0 mt-0.5" />
                        <span className="text-stone-700 leading-snug">
                          <strong>Analytical Workflows:</strong> Annual report synthesis, sensitivity/scenario thinking, structured reports, and AI query assistance.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span>AI-ASSISTED DEVELOPMENT</span>
                    <span>REACT / VITE / TAILWIND</span>
                  </div>
                </div>

                {/* Narrative & Action Panel */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white border border-stone-100 text-left">
                  <div className="space-y-5">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">FEATURED I • EQUITY RESEARCH & VALUATION</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-1">
                        Meredian – AI-Assisted Equity Research Platform
                      </h3>
                      <p className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider mt-1">
                        Web-Based Fundamental Research & Valuation Workspace
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Equity Research', 'Valuation', 'Financial Modelling', 'AI Tools', 'Web Platform'].map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold tracking-wide uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed font-serif">
                      A web-based equity research workspace designed to bring company research, financial metrics, valuation workflows, structured reports, and an AI research assistant into one place. Designed the product concept, finance logic, feature set, user workflow, testing, and deployment.
                    </p>

                    <div className="bg-[#faf9f6] border-l-2 border-stone-800 p-4 space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-500 block">
                        Development Disclosure
                      </span>
                      <p className="text-stone-700 text-xs font-serif leading-relaxed italic">
                        Built utilizing AI-assisted development tools to accelerate prototyping and code delivery. All underlying valuation mechanics, research logic, prompt definitions, and UI workflows were structured, audited, and directed by me.
                      </p>
                    </div>
                  </div>

                  {/* Actions Strip */}
                  <div className="border-t border-stone-200 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href="https://meredian-equityanalyzer.lovable.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 text-white hover:bg-amber-800 text-xs font-mono font-bold tracking-wider transition-colors"
                      >
                        <ExternalLink size={13} />
                        OPEN LIVE DEMO
                      </a>
                      <button 
                        onClick={() => openProjectModal(FEATURED_PROJECTS.find(p => p.id === 'meredian')!)}
                        className="px-4 py-2.5 border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-mono font-bold tracking-wider transition-colors"
                      >
                        VIEW PROJECT DETAILS
                      </button>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">
                      LIVE ON LOVABLE
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* 2. Infosys Ltd. - Financial Model & DCF Valuation */}
            {filteredFeatured.some(p => p.id === 'infosys') && (
              <div className="bg-white rounded-none border border-stone-300 shadow-sm overflow-hidden p-1 grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10">
                
                {/* Interactive DCF Lab Panel */}
                <div className="lg:col-span-5 bg-[#faf9f6] border border-stone-200 p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                      <span className="text-[9px] font-mono text-stone-500 tracking-wider uppercase font-bold">DCF VALUATION MATRIX</span>
                      <span className="px-2 py-0.5 border border-amber-800/40 text-amber-800 bg-amber-50 rounded-none font-mono text-[8px] uppercase font-bold">LIVE STRESS-TEST</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-stone-400 tracking-widest block uppercase">ESTIMATED INTRINSIC PRICE</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-serif font-bold text-amber-900">₹{intrinsicPrice}</span>
                        <span className="text-[10px] text-stone-400 font-mono">/ SHARE</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-serif italic text-stone-600">
                        <span>Spot Price: ₹1,297</span>
                        <span>•</span>
                        <span className={`font-bold font-mono text-xs ${intrinsicPrice > marketPrice ? 'text-emerald-700' : 'text-stone-600'}`}>
                          {intrinsicPrice > marketPrice ? 'Undervalued' : 'Overvalued'} ({variance}%)
                        </span>
                      </div>
                    </div>

                    {/* Interactive Sliders */}
                    <div className="space-y-5 pt-6 border-t border-stone-200">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-stone-500 font-bold">Revenue Growth Forecast:</span>
                          <span className="text-amber-800 font-bold">{revGrowth}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="4" 
                          max="15" 
                          value={revGrowth} 
                          onChange={(e) => setRevGrowth(Number(e.target.value))}
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
                          <span className="text-amber-800 font-bold">{wacc}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="8" 
                          max="15" 
                          value={wacc} 
                          onChange={(e) => setWacc(Number(e.target.value))}
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
                          <span className="text-amber-800 font-bold">{termGrowth}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="2" 
                          max="6" 
                          value={termGrowth} 
                          onChange={(e) => setTermGrowth(Number(e.target.value))}
                          className="w-full accent-amber-800 bg-stone-200 rounded-lg appearance-none h-1 cursor-pointer" 
                        />
                        <div className="flex justify-between text-[9px] text-stone-400 font-mono">
                          <span>Inflationary (2%)</span>
                          <span>Aggressive (6%)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-200 flex items-center gap-2 text-[10px] text-stone-400 font-mono leading-relaxed">
                    <Info size={12} className="text-stone-400 shrink-0" />
                    <p>Stress-test valuation sensitivity by matching cash flow projections with discounting horizons.</p>
                  </div>
                </div>

                {/* Written Project Description */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white border border-stone-100 text-left">
                  <div className="space-y-5">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">FEATURED II • EQUITY RESEARCH & VALUATION</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-1">
                        Infosys Ltd. – Financial Model & DCF Valuation
                      </h3>
                      <p className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider mt-1">
                        Integrated Three-Statement Forecasting & Scenario Sensitivity
                      </p>
                    </div>

                    {/* Tags strip */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['DCF', 'Financial Modelling', 'Excel', 'Valuation', 'Equity Research'].map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold tracking-wide uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed font-serif">
                      Excel-based company model combining historical analysis, projections, linked financial statements, and DCF valuation work. Built an integrated three-statement DCF valuation model with scenario and sensitivity analysis. Supporting workbook models Infosys historical performance and projections through FY29E. Forecast revenue, margins, balance-sheet items, and key financial ratios using linked assumptions and formula-driven projections.
                    </p>

                    <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#faf9f6] border border-stone-200 text-xs font-serif">
                      <div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-800 block mb-0.5">FORECAST HORIZON</span>
                        <p className="text-stone-700">Historical performance projected through FY29E</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-800 block mb-0.5">THREE-STATEMENT LINK</span>
                        <p className="text-stone-700">Fully connected P&L, Balance Sheet, and Cash Flows</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions Strip */}
                  <div className="border-t border-stone-200 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => openProjectModal(FEATURED_PROJECTS.find(p => p.id === 'infosys')!)}
                        className="px-4 py-2.5 bg-stone-900 text-white hover:bg-amber-800 text-xs font-mono font-bold tracking-wider transition-colors"
                      >
                        VIEW PROJECT DETAILS
                      </button>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">
                      FORMULA-DRIVEN WORKBOOK
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* 3. Wipro Ltd. - Financial Statement Analysis & Memo */}
            {filteredFeatured.some(p => p.id === 'wipro') && (
              <div className="bg-white rounded-none border border-stone-300 shadow-sm overflow-hidden p-1 grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10">
                
                {/* Written Project Description */}
                <div className="lg:col-span-7 p-8 md:p-12 order-2 lg:order-1 flex flex-col justify-between space-y-8 bg-white border border-stone-100 text-left">
                  <div className="space-y-5">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">FEATURED III • EQUITY RESEARCH & VALUATION</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-1">
                        Wipro Ltd. – Financial Statement Analysis & Investment Memo
                      </h3>
                      <p className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider mt-1">
                        FY22–FY24 DuPont Decomposition & Sector Benchmarking
                      </p>
                    </div>

                    {/* Tags strip */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Financial Statement Analysis', 'DuPont', 'Ratio Analysis', 'Equity Research', 'Excel'].map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold tracking-wide uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed font-serif">
                      A FY22–FY24 financial analysis of Wipro using ratios, DuPont decomposition, trend analysis, peer benchmarking, and an investment memo. Analysed profitability, liquidity, leverage, efficiency, and shareholder-return drivers. Benchmarked Wipro against TCS, Infosys, and HCLTech, developing a Hold view based on strong financial stability and liquidity alongside weaker profitability and shareholder returns.
                    </p>

                    <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#faf9f6] border border-stone-200 text-xs font-serif">
                      <div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-800 block mb-0.5">INVESTMENT VIEW</span>
                        <p className="text-stone-700 font-bold">Hold (Strong solvency, compressed margins)</p>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-800 block mb-0.5">PEER PEERS</span>
                        <p className="text-stone-700">TCS, Infosys, HCLTech</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions Strip */}
                  <div className="border-t border-stone-200 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => openProjectModal(FEATURED_PROJECTS.find(p => p.id === 'wipro')!)}
                        className="px-4 py-2.5 bg-stone-900 text-white hover:bg-amber-800 text-xs font-mono font-bold tracking-wider transition-colors"
                      >
                        VIEW PROJECT DETAILS
                      </button>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">
                      DUPONT DECOMPOSITION
                    </span>
                  </div>
                </div>

                {/* Interactive DuPont Lab Panel */}
                <div className="lg:col-span-5 bg-[#faf9f6] border border-stone-200 p-8 flex flex-col justify-between order-1 lg:order-2">
                  <div className="space-y-6 text-left">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                      <span className="text-[9px] font-mono text-stone-500 tracking-wider uppercase font-bold">DUPONT MULTIPLIER ENGINE</span>
                      <span className="px-2 py-0.5 border border-amber-800/40 text-amber-800 bg-amber-50 rounded-none font-mono text-[8px] uppercase font-bold">CALIBRATING</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-stone-400 tracking-widest block uppercase">CALCULATED RETURN ON EQUITY (ROE)</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-serif font-bold text-amber-900">{roe}%</span>
                      </div>
                      <p className="text-[10px] text-stone-500 font-mono pt-1 leading-relaxed">
                        Net Margin ({netMargin}%) × Asset Turnover ({assetTurnover}x) × Leverage ({leverage}x)
                      </p>
                    </div>

                    {/* Interactive Sliders */}
                    <div className="space-y-5 pt-6 border-t border-stone-200">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-stone-500 font-bold">Net Profit Margin:</span>
                          <span className="text-amber-800 font-bold">{netMargin}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="10" 
                          max="25" 
                          step="0.5"
                          value={netMargin} 
                          onChange={(e) => setNetMargin(Number(e.target.value))}
                          className="w-full accent-amber-800 bg-stone-200 rounded-lg appearance-none h-1 cursor-pointer" 
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-stone-500 font-bold">Asset Turnover (Velocity):</span>
                          <span className="text-amber-800 font-bold">{assetTurnover}x</span>
                        </div>
                        <input 
                          type="range" 
                          min="0.5" 
                          max="2.5" 
                          step="0.05"
                          value={assetTurnover} 
                          onChange={(e) => setAssetTurnover(Number(e.target.value))}
                          className="w-full accent-amber-800 bg-stone-200 rounded-lg appearance-none h-1 cursor-pointer" 
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-stone-500 font-bold">Leverage Multiplier:</span>
                          <span className="text-amber-800 font-bold">{leverage}x</span>
                        </div>
                        <input 
                          type="range" 
                          min="1.0" 
                          max="2.5" 
                          step="0.05"
                          value={leverage} 
                          onChange={(e) => setLeverage(Number(e.target.value))}
                          className="w-full accent-amber-800 bg-stone-200 rounded-lg appearance-none h-1 cursor-pointer" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-200 flex items-center gap-2 text-[10px] text-stone-400 font-mono leading-relaxed">
                    <Info size={12} className="text-stone-400 shrink-0" />
                    <p>DuPont deconstruction measures operational profitability by separating margin conversion from leverage factors.</p>
                  </div>
                </div>

              </div>
            )}

            {/* 4. Indian Equity Portfolio Analytics Dashboard */}
            {filteredFeatured.some(p => p.id === 'portfolio-analytics') && (
              <div className="bg-white rounded-none border border-stone-300 shadow-sm overflow-hidden p-1 grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10">
                
                {/* Portfolio Holdings Panel */}
                <div className="lg:col-span-5 bg-[#faf9f6] border border-stone-200 p-8 flex flex-col justify-between">
                  <div className="space-y-6 text-left">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                      <span className="text-[9px] font-mono text-stone-500 tracking-wider uppercase font-bold">PORTFOLIO CONSTITUENTS</span>
                      <span className="px-2 py-0.5 border border-amber-800/40 text-amber-800 bg-amber-50 rounded-none font-mono text-[8px] uppercase font-bold">15 EQUITIES</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-stone-400 tracking-widest block uppercase">BENCHMARK BENCHMARKING</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-serif font-bold text-amber-900">12.4%</span>
                        <span className="text-[10px] text-stone-400 font-mono">PORTFOLIO CAGR</span>
                      </div>
                      <p className="text-[10px] text-stone-500 font-serif italic pt-1 leading-relaxed">
                        Illustrative portfolio analytics demonstration using simulated display data to showcase monthly tracking and sector attribution against a NIFTY 50 reference.
                      </p>
                    </div>

                    {/* Table */}
                    <div className="space-y-2 pt-4 border-t border-stone-200 text-[10px] font-mono max-h-56 overflow-y-auto scrollbar-thin">
                      <div className="grid grid-cols-12 text-stone-400 font-bold border-b border-stone-200 pb-1 text-[8px] tracking-wider">
                        <span className="col-span-4">TICKER</span>
                        <span className="col-span-5">SECTOR</span>
                        <span className="col-span-3 text-right">WEIGHT</span>
                      </div>
                      {portfolioHoldings.map((h, i) => (
                        <div key={i} className="grid grid-cols-12 text-stone-700 py-1.5 border-b border-stone-100 hover:bg-stone-50 transition-colors">
                          <span className="col-span-4 font-bold text-stone-900">{h.ticker}</span>
                          <span className="col-span-5 text-stone-500 truncate">{h.sector}</span>
                          <span className="col-span-3 text-right text-amber-800 font-bold">{h.weight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-200 flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span>EXCEL FORMULAS & LOGIC</span>
                    <span>AI USED ONLY FOR FORMATTING</span>
                  </div>
                </div>

                {/* Narrative & Action Panel */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white border border-stone-100 text-left">
                  <div className="space-y-5">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">FEATURED IV • INVESTMENT & PORTFOLIO ANALYSIS</span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-1">
                        Indian Equity Portfolio Analytics Dashboard
                      </h3>
                      <p className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider mt-1">
                        Formula-Driven 15-Stock Indian Equity Tracker with NIFTY 50 Benchmarking
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Portfolio Analytics', 'Excel', 'Financial Modelling', 'Risk Management'].map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold tracking-wide uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed font-serif">
                      Formula-driven Excel portfolio dashboard for a 15-stock Indian equity portfolio with NIFTY 50 benchmarking. The website visualization uses illustrative simulated values to demonstrate the workflow; the spreadsheet logic and calculations were built in Excel, with AI used only for visual polish.
                    </p>

                    <div className="bg-[#faf9f6] border-l-2 border-stone-800 p-4 space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-stone-500 block">
                        Technical Execution Note
                      </span>
                      <p className="text-stone-700 text-xs font-serif leading-relaxed italic">
                        All financial calculations, dynamic portfolio return models, sector weighting formulas, and monthly tracking matrices were designed and built by me in Excel. AI tooling was strictly applied to assist with visual layout refinement and table formatting.
                      </p>
                    </div>
                  </div>

                  {/* Actions Strip */}
                  <div className="border-t border-stone-200 pt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => openProjectModal(FEATURED_PROJECTS.find(p => p.id === 'portfolio-analytics')!)}
                        className="px-4 py-2.5 bg-stone-900 text-white hover:bg-amber-800 text-xs font-mono font-bold tracking-wider transition-colors"
                      >
                        VIEW PROJECT DETAILS
                      </button>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">
                      15 DIVERSIFIED HOLDINGS
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* Grid for Projects 5, 6, 7 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* 5. Behavioural Biases Research */}
              {filteredFeatured.some(p => p.id === 'behavioural-finance') && (
                <div className="bg-white border border-stone-300 p-6 flex flex-col justify-between space-y-6 text-left hover:border-stone-400 transition-all">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-2.5">
                      <span className="text-[9px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                        INVESTMENT & PORTFOLIO
                      </span>
                      <span className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 text-stone-600 font-mono text-[8px] font-bold uppercase">
                        ACADEMIC GROUP
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                      Behavioural Biases in Young Indian Investors
                    </h4>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {['Behavioural Finance', 'Equity Research', 'Risk Management'].map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[9px] font-mono font-bold uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-stone-600 text-xs leading-relaxed font-serif">
                      A longitudinal behavioural-finance research project examining how investor biases change with experience. Focuses on overconfidence, herding, loss aversion, anchoring, and confirmation bias.
                    </p>

                    <div className="bg-stone-50 p-3 border border-stone-200 text-[11px] font-serif text-stone-700 space-y-1">
                      <p><strong>Fieldwork:</strong> 18 semi-structured interviews across retail investors, finance students, and market professionals.</p>
                      <p><strong>Methodology:</strong> Thematic analysis connecting behavioural theory with digitally-native Indian retail investing.</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-4 flex justify-between items-center">
                    <button
                      onClick={() => openProjectModal(FEATURED_PROJECTS.find(p => p.id === 'behavioural-finance')!)}
                      className="text-xs font-mono font-bold text-amber-800 hover:text-stone-900 inline-flex items-center gap-1 uppercase"
                    >
                      VIEW DETAILS <ChevronRight size={13} />
                    </button>
                    <span className="text-[9px] font-mono text-stone-400">18 INTERVIEWS</span>
                  </div>
                </div>
              )}

              {/* 6. Monaco Fixed Income */}
              {filteredFeatured.some(p => p.id === 'monaco-fixed-income') && (
                <div className="bg-white border border-stone-300 p-6 flex flex-col justify-between space-y-6 text-left hover:border-stone-400 transition-all">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-2.5">
                      <span className="text-[9px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                        MARKETS & RISK
                      </span>
                      <span className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 text-stone-600 font-mono text-[8px] font-bold uppercase">
                        ACADEMIC PROJECT
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                      Bond Valuation & Fixed-Income Risk – Monaco
                    </h4>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {['Fixed Income', 'Risk Management', 'Financial Modelling'].map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[9px] font-mono font-bold uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-stone-600 text-xs leading-relaxed font-serif">
                      Country-focused fixed-income analysis covering Euro-linked bond markets, pricing, yield curves, and risk. Analysed Monaco's integration with the Eurozone debt ecosystem.
                    </p>

                    <div className="bg-stone-50 p-3 border border-stone-200 text-[11px] font-serif text-stone-700 space-y-1">
                      <p><strong>Core Analytics:</strong> Bond pricing, yield-curve, duration, convexity, and credit-risk concepts.</p>
                      <p><strong>Securitisation:</strong> Reviewed instruments including ABS, MBS, and covered bonds.</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-4 flex justify-between items-center">
                    <button
                      onClick={() => openProjectModal(FEATURED_PROJECTS.find(p => p.id === 'monaco-fixed-income')!)}
                      className="text-xs font-mono font-bold text-amber-800 hover:text-stone-900 inline-flex items-center gap-1 uppercase"
                    >
                      VIEW DETAILS <ChevronRight size={13} />
                    </button>
                    <span className="text-[9px] font-mono text-stone-400">EUROZONE ECOSYSTEM</span>
                  </div>
                </div>
              )}

              {/* 7. Derivatives in the Real World */}
              {filteredFeatured.some(p => p.id === 'derivatives-real-world') && (
                <div className="bg-white border border-stone-300 p-6 flex flex-col justify-between space-y-6 text-left hover:border-stone-400 transition-all">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-2.5">
                      <span className="text-[9px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                        MARKETS & RISK
                      </span>
                      <span className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 text-stone-600 font-mono text-[8px] font-bold uppercase">
                        ACADEMIC GROUP
                      </span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                      Derivatives in the Real World
                    </h4>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {['Derivatives', 'Risk Management', 'Financial Modelling'].map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[9px] font-mono font-bold uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-stone-600 text-xs leading-relaxed font-serif">
                      Five real-world derivative applications across currency, rates, commodities, credit, and equity. Connected hedging mechanics to real corporate and market cases.
                    </p>

                    <div className="bg-stone-50 p-3 border border-stone-200 text-[11px] font-serif text-stone-700 space-y-1">
                      <p><strong>Corporate Cases:</strong> TCS currency exposure hedges, Reliance Industries interest-rate swaps.</p>
                      <p><strong>Numerical Models:</strong> Modeled cash-flow payoff profiles across futures, swaps, options, and CDS.</p>
                    </div>
                  </div>

                  <div className="border-t border-stone-200 pt-4 flex justify-between items-center">
                    <button
                      onClick={() => openProjectModal(FEATURED_PROJECTS.find(p => p.id === 'derivatives-real-world')!)}
                      className="text-xs font-mono font-bold text-amber-800 hover:text-stone-900 inline-flex items-center gap-1 uppercase"
                    >
                      VIEW DETAILS <ChevronRight size={13} />
                    </button>
                    <span className="text-[9px] font-mono text-stone-400">5 REAL-WORLD CASES</span>
                  </div>
                </div>
              )}

            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: ACADEMIC CASE STUDIES & RESEARCH PAPERS */}
      {/* ========================================================================= */}
      {filteredAcademic.length > 0 && (
        <section className="space-y-8 text-left">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                CURRICULAR RESEARCH & CASE ANALYSES
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
                Academic Research & Case Studies
              </h2>
            </div>
            <span className="text-[10px] font-mono text-stone-400 font-bold">
              {filteredAcademic.length} OF {ADDITIONAL_ACADEMIC_PROJECTS.length} STUDIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAcademic.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-stone-300 p-6 flex flex-col justify-between space-y-6 text-left hover:border-stone-400 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2.5">
                    <span className="text-[9px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-1.5 py-0.5 bg-stone-100 border border-stone-200 text-stone-600 font-mono text-[8px] font-bold uppercase">
                      {project.label}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                    {project.title}
                  </h4>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[9px] font-mono font-bold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed font-serif">
                    {project.shortDescription}
                  </p>

                  <div className="bg-stone-50 p-3 border border-stone-200 text-[11px] font-serif text-stone-700 space-y-1">
                    {[project.problemObjective, project.keyTakeaway].map((h, i) => (
                      <p key={i}><strong>•</strong> {h}</p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-4 flex justify-between items-center">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-xs font-mono font-bold text-amber-800 hover:text-stone-900 inline-flex items-center gap-1 uppercase"
                  >
                    VIEW DETAILS <ChevronRight size={13} />
                  </button>
                  <span className="text-[9px] font-mono text-stone-400">{project.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State when no results match selected filter */}
      {filteredFeatured.length === 0 && filteredAcademic.length === 0 && (
        <div className="text-center py-16 bg-[#faf9f6] border border-stone-200 p-8 space-y-3 max-w-xl mx-auto">
          <p className="font-serif text-stone-600 text-sm italic">No projects found matching the selected category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="px-4 py-2 bg-stone-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-amber-800 transition-colors"
          >
            RESET FILTER
          </button>
        </div>
      )}

      {/* Recruiter / Collaboration Note */}
      <div className="bg-[#faf9f6] border border-stone-200 p-8 text-center max-w-3xl mx-auto space-y-3">
        <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-widest block">
          FINANCIAL WORKFLOW ARCHIVE
        </span>
        <h3 className="text-xl font-serif font-bold text-stone-900">
          Interested in detailed analytical workbooks or research memoranda?
        </h3>
        <p className="text-xs text-stone-600 font-serif leading-relaxed max-w-xl mx-auto">
          Project summaries are presented here without publishing private academic source files. Connect directly if you would like to discuss the work in more detail.
        </p>
        <div className="pt-2">
          <a
            href="/Ansh Nimesh Shah CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Ansh Nimesh Shah CV.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-amber-800 transition-colors"
          >
            <FileText size={13} />
            VIEW CV (PDF)
          </a>
        </div>
      </div>

    </div>
  );
}
