import React, { useState } from 'react';
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
  Download,
  Database,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export default function Projects() {
  // 1. DCF State (Infosys Calibration)
  const [revGrowth, setRevGrowth] = useState<number>(8); // Range: 4 - 15%
  const [wacc, setWacc] = useState<number>(10); // Range: 8 - 15%
  const [termGrowth, setTermGrowth] = useState<number>(4); // Range: 2 - 6%

  // Expanded consulting report states
  const [expandedReports, setExpandedReports] = useState<Record<string, boolean>>({
    infosys: false,
    wipro: false,
    portfolio: false,
    meredian: false,
    outreach: false,
  });

  const toggleReport = (id: string) => {
    setExpandedReports(prev => ({ ...prev, [id]: !prev[id] }));
  };

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

  const [activeToast, setActiveToast] = useState<string | null>(null);

  const handleActionClick = (actionName: string) => {
    setActiveToast(actionName);
    setTimeout(() => {
      setActiveToast(null);
    }, 3500);
  };

  return (
    <div className="section-padding space-y-20 pb-28 text-stone-900 font-sans">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {activeToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#1c1917] text-stone-100 p-4 border border-stone-800 shadow-xl max-w-sm font-mono text-xs flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
            <div>
              <p className="font-bold text-amber-500 uppercase">ACCESSING SECURE VAULT</p>
              <p className="text-stone-300 mt-0.5">{activeToast}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Page Header */}
      <header className="mb-16 text-left max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-sm text-amber-850 text-[10px] font-mono font-bold tracking-wider uppercase">
          <Layers size={12} />
          FINANCIAL MODELLING & ANALYSIS
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900">
          Projects & Case Studies
        </h1>
        <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-serif italic">
          Dynamic equity research models, DuPont deconstructions, and quantitative investment simulators structured for professional review.
        </p>
      </header>

      {/* Project 1: Equity Valuation - Infosys Ltd. */}
      <div className="bg-white rounded-none border border-stone-300 shadow-sm overflow-hidden p-1 grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10">
        
        {/* Interactive Lab Panel */}
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
                <span className={`font-bold font-mono text-xs ${intrinsicPrice > marketPrice ? 'text-emerald-850' : 'text-stone-650'}`}>
                  {intrinsicPrice > marketPrice ? 'Undervalued' : 'Overvalued'} ({variance}%)
                </span>
              </div>
            </div>

            {/* Interactive Sliders */}
            <div className="space-y-5 pt-6 border-t border-stone-200">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-stone-500 font-bold">Revenue Growth Forecast:</span>
                  <span className="text-amber-850 font-bold">{revGrowth}%</span>
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
                  <span className="text-amber-850 font-bold">{wacc}%</span>
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
                  <span className="text-amber-850 font-bold">{termGrowth}%</span>
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
            <p>Model recalculates fair value by matching cash-flows with discounting horizons. Toggle sliders to stress-test.</p>
          </div>
        </div>

        {/* Written Project Description */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white border border-stone-100 text-left">
          <div className="space-y-5">
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">PROJECT INDEX I</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-1">
                  Equity Valuation – Infosys Ltd.
                </h2>
                <p className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider mt-1">
                  Integrated Three-Statement DCF Model
                </p>
              </div>
            </div>

            {/* Tags strip */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['DCF', 'Excel', 'Financial Modelling', 'Valuation', 'Equity Research', 'Financial Analysis'].map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold tracking-wide">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-stone-650 text-sm leading-relaxed font-serif">
              Built a comprehensive, integrated three-statement corporate valuation model to project free cash flows to the firm (FCFF) and deconstruct cash generation capacities.
            </p>

            {/* Custom Expandable Consulting Report */}
            <div className="pt-2">
              <button 
                onClick={() => toggleReport('infosys')}
                className="inline-flex items-center text-xs font-mono font-bold text-amber-800 hover:text-stone-900 transition-colors uppercase gap-1.5 border-b border-amber-800/20 pb-0.5"
              >
                {expandedReports.infosys ? 'HIDE EXECUTIVE BRIEF' : 'VIEW CONSULTING MEMORANDUM'} 
                <ChevronRight size={13} className={`transition-transform duration-200 ${expandedReports.infosys ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedReports.infosys && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-6 bg-stone-50 border border-stone-200 p-6 space-y-6 text-xs font-serif"
                  >
                    <div className="border-b border-stone-200 pb-3">
                      <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold block">CONFIDENTIAL MEMORANDUM</span>
                      <h4 className="text-sm font-serif font-bold text-stone-900 font-serif">Infosys Ltd: Intrinsic Capital Allocation Report</h4>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Overview</span>
                        <p className="text-stone-600 leading-relaxed font-serif">
                          This study evaluates the intrinsic valuation of Infosys Ltd. utilizing a dynamically linked 10-year three-statement financial model to project long-term cash generation margins and test capital resilience.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Problem</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Public equity markets frequently misprice enterprise assets due to transient macro sector head-winds. Analysts require a rigorous capital-discounting model to isolate underlying cash efficiency.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Approach</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Synthesized an integrated 10-year model linking P&L, Balance Sheet, and Cash Flow Statements. Derived WACC indicators using CAPM based on beta trends from the National Stock Exchange (NSE).
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Tools Used</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Microsoft Excel, Analysis ToolPak, CAPM forecasting spreadsheets, and DuPont breakdown matrices.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Key Findings</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Discount rates act as the primary model sensitivity pivot. A slight 2% rise in WACC cuts the intrinsic valuation by ₹190/share, confirming that terminal value is highly dependent on discount assumptions.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Skills Demonstrated</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            10-Year Free Cash Flow (FCFF) forecasting, multi-scenario sensitivity modeling, and cost of capital (WACC) calculation.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Business Takeaways</span>
                          <p className="text-stone-600 leading-relaxed font-serif font-bold">
                            Derived an intrinsic share price of ₹1,319 vs. market spot price of ₹1,297, confirming a balanced +1.7% valuation gap that supports a stable, defendable investment margin of safety.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Technologies</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Excel VBA, Financial Analysis ToolPak, NSE Market Feeds.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Files</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            • Infosys_10Yr_DCF_Model.xlsx <br />
                            • Infosys_Valuation_Report.pdf
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Enhancements Strip */}
          <div className="border-t border-stone-200 pt-6 flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => handleActionClick('Infosys DCF Live Simulation')}
                className="px-3.5 py-2 bg-stone-900 text-white text-[10px] font-mono font-bold tracking-wider hover:bg-amber-800 transition-colors"
              >
                LIVE DEMO
              </button>
              <button 
                onClick={() => handleActionClick('Infosys Valuation Report PDF')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                DOWNLOAD REPORT
              </button>
              <button 
                onClick={() => handleActionClick('Infosys Valuation Model PDF')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                VIEW PDF
              </button>
              <button 
                onClick={() => handleActionClick('Infosys Excel Model Spreadsheet')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                VIEW EXCEL MODEL
              </button>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-stone-400">
              <span>APPROVED BY FACULTY</span>
              <span>NSE DYNAMIC FEED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2: Financial Statement Analysis - Wipro Ltd. */}
      <div className="bg-white rounded-none border border-stone-300 shadow-sm overflow-hidden p-1 grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10">
        
        {/* Written Project Description */}
        <div className="lg:col-span-7 p-8 md:p-12 order-2 lg:order-1 flex flex-col justify-between space-y-8 bg-white border border-stone-100 text-left">
          <div className="space-y-5">
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">PROJECT INDEX II</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-1">
                  Statement Analysis – Wipro Ltd.
                </h2>
                <p className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider mt-1">
                  DuPont Decomposition & Sector Benchmarking
                </p>
              </div>
            </div>

            {/* Tags strip */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Ratio Analysis', 'Financial Analysis', 'DuPont Decomposition', 'Excel', 'Corporate Finance'].map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold tracking-wide">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-stone-650 text-sm leading-relaxed font-serif">
              Conducted an in-depth financial investigation of Wipro Ltd's FY21–FY23 statement reports, decomposing business ROE into operational drivers to analyze margins, asset turnover velocity, and structural debt usage.
            </p>

            {/* Custom Expandable Consulting Report */}
            <div className="pt-2">
              <button 
                onClick={() => toggleReport('wipro')}
                className="inline-flex items-center text-xs font-mono font-bold text-amber-800 hover:text-stone-900 transition-colors uppercase gap-1.5 border-b border-amber-800/20 pb-0.5"
              >
                {expandedReports.wipro ? 'HIDE EXECUTIVE BRIEF' : 'VIEW CONSULTING MEMORANDUM'} 
                <ChevronRight size={13} className={`transition-transform duration-200 ${expandedReports.wipro ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedReports.wipro && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-6 bg-stone-50 border border-stone-200 p-6 space-y-6 text-xs font-serif"
                  >
                    <div className="border-b border-stone-200 pb-3">
                      <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold block">AUDITING BRIEF</span>
                      <h4 className="text-sm font-serif font-bold text-stone-900">Wipro Ltd: DuPont Capital Structure Deconstruction</h4>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Overview</span>
                        <p className="text-stone-600 leading-relaxed font-serif">
                          This case study deconstructs Wipro Ltd's financial statements for FY21–FY23, isolating operational efficiency from leverage multipliers through a systematic three-stage DuPont mathematical decomposition.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Problem</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            High return-on-equity (ROE) scores can mask underlying credit risk, excessive operational leverage, or aggressive stock buyback schemes. Asset managers require absolute transparency before deploying capital.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Approach</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Decomposed historical ROE into Operational Net Margin, Asset Turnover Velocity, and Equity Multipliers. Audited liquidity margins, working capital cycles, and debt coverage profiles.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Tools Used</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            DuPont Calculation Sheet, Horizontal and Vertical common-size analysis templates, and sector-wide indexing ratios.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Key Findings</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Wipro's peak 29.0% ROE structure is supported by organic net margin production (18%) and solid asset conversion velocity (1.48x) rather than speculative financial debt.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Skills Demonstrated</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Three-stage DuPont calculations, balance sheet structural audit, working capital velocity analysis, and benchmarking.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Business Takeaways</span>
                          <p className="text-stone-600 leading-relaxed font-serif font-bold">
                            Identified conservative leverage boundaries (1.09x) paired with deep short-term liquidity safeguards (current ratio: 2.4x). Supports an extremely low-risk investment thesis for buy-side allocators.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Technologies</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Advanced Excel Formulas, Pivot Tables, Sector Ratio Trackers.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Files</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            • Wipro_DuPont_Analysis.xlsx <br />
                            • Wipro_FY21_FY23_Audited_Ratios.pdf
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Enhancements Strip */}
          <div className="border-t border-stone-200 pt-6 flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => handleActionClick('Wipro DuPont Live Simulation')}
                className="px-3.5 py-2 bg-stone-900 text-white text-[10px] font-mono font-bold tracking-wider hover:bg-amber-800 transition-colors"
              >
                LIVE DEMO
              </button>
              <button 
                onClick={() => handleActionClick('Wipro Audited Report PDF')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                DOWNLOAD REPORT
              </button>
              <button 
                onClick={() => handleActionClick('Wipro DuPont Analysis PDF')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                VIEW PDF
              </button>
              <button 
                onClick={() => handleActionClick('Wipro DuPont Excel Model Spreadsheet')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                VIEW EXCEL MODEL
              </button>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-stone-400">
              <span>NSE RATIO COMPLIANCE</span>
              <span>COMMON-SIZE STANDARDS</span>
            </div>
          </div>
        </div>

        {/* Interactive Lab Panel */}
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
              <p className="text-[10px] text-stone-450 font-mono pt-1 leading-relaxed">
                Net Margin ({netMargin}%) × Asset Turnover ({assetTurnover}x) × Leverage Multiplier ({leverage}x)
              </p>
            </div>

            {/* Interactive Sliders */}
            <div className="space-y-5 pt-6 border-t border-stone-200">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-stone-500 font-bold">Net Profit Margin:</span>
                  <span className="text-amber-850 font-bold">{netMargin}%</span>
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
                  <span className="text-amber-850 font-bold">{assetTurnover}x</span>
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
                  <span className="text-stone-500 font-bold">Leverage Factor (Equity Multiplier):</span>
                  <span className="text-amber-850 font-bold">{leverage}x</span>
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
            <p>DuPont deconstruction measures true profitability by isolating asset turnover and balance multipliers.</p>
          </div>
        </div>
      </div>

      {/* Project 3: Portfolio Analytics Dashboard - Excel */}
      <div className="bg-white rounded-none border border-stone-300 shadow-sm overflow-hidden p-1 grid grid-cols-1 lg:grid-cols-12 gap-1 relative z-10">
        
        {/* Interactive Lab Panel */}
        <div className="lg:col-span-5 bg-[#faf9f6] border border-stone-200 p-8 flex flex-col justify-between">
          <div className="space-y-6 text-left">
            <div className="flex justify-between items-center border-b border-stone-200 pb-3">
              <span className="text-[9px] font-mono text-stone-500 tracking-wider uppercase font-bold">PORTFOLIO CONSTITUENTS</span>
              <span className="px-2 py-0.5 border border-amber-800/40 text-amber-800 bg-amber-50 rounded-none font-mono text-[8px] uppercase font-bold">15 EQUITIES</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-stone-400 tracking-widest block uppercase">SIMULATED PERFORMANCE</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif font-bold text-amber-900">12.4%</span>
                <span className="text-[10px] text-stone-400 font-mono">PORTFOLIO CAGR</span>
              </div>
              <p className="text-[10px] text-stone-500 font-serif italic pt-1 leading-relaxed">
                Secured positive alpha variance of +2.2% against reference NIFTY 50 (10.2%).
              </p>
            </div>

            {/* Custom Curated Table with premium classic borders */}
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
                  <span className="col-span-3 text-right text-amber-850 font-bold">{h.weight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex items-center gap-2 text-[10px] text-stone-400 font-mono leading-relaxed">
            <Info size={12} className="text-stone-400 shrink-0" />
            <p>Weightings represent optimized sector concentrations targeted to limit benchmark-covariance risks.</p>
          </div>
        </div>

        {/* Written Project Description */}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-8 bg-white border border-stone-100 text-left">
          <div className="space-y-5">
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">PROJECT INDEX III</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mt-1">
                  Portfolio Analytics Ledger – Excel
                </h2>
                <p className="text-xs font-mono font-semibold text-amber-800 uppercase tracking-wider mt-1">
                  Alpha Modeling & Position Sizing Framework
                </p>
              </div>
            </div>

            {/* Tags strip */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Portfolio Strategy', 'Excel', 'Dashboard', 'Financial Analysis', 'Power BI'].map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[10px] font-mono font-bold tracking-wide">
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>

            <p className="text-stone-650 text-sm leading-relaxed font-serif">
              Engineered a highly dynamic Excel simulation suite tracking asset performance indices, sector concentrations, and capital weights for a 15-stock simulated Indian equity portfolio over 6 active months.
            </p>

            {/* Custom Expandable Consulting Report */}
            <div className="pt-2">
              <button 
                onClick={() => toggleReport('portfolio')}
                className="inline-flex items-center text-xs font-mono font-bold text-amber-800 hover:text-stone-900 transition-colors uppercase gap-1.5 border-b border-amber-800/20 pb-0.5"
              >
                {expandedReports.portfolio ? 'HIDE EXECUTIVE BRIEF' : 'VIEW CONSULTING MEMORANDUM'} 
                <ChevronRight size={13} className={`transition-transform duration-200 ${expandedReports.portfolio ? 'rotate-90' : ''}`} />
              </button>

              <AnimatePresence>
                {expandedReports.portfolio && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-6 bg-stone-50 border border-stone-200 p-6 space-y-6 text-xs font-serif"
                  >
                    <div className="border-b border-stone-200 pb-3">
                      <span className="text-[9px] font-mono tracking-widest text-stone-400 font-bold block">PORTFOLIO CASE STUDY</span>
                      <h4 className="text-sm font-serif font-bold text-stone-900 font-serif">Active Alpha: Indian Equities Risk Optimization Ledger</h4>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Overview</span>
                        <p className="text-stone-600 leading-relaxed font-serif">
                          This portfolio optimization project models return variance, historical beta indicators, and optimized sector asset allocations for a 15-stock Indian equity basket over 6 dynamic months.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Problem</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Indian equity markets exhibit high sector covariance. Passive indexing offers no down-side hedge, making active sector adjustments and position weighting crucial to beat the index.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Approach</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Created a covariance matrix modeling asset returns. Maintained dynamically updating sector weightings in Excel utilizing clean data power queries and responsive pivot charts.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Tools Used</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Microsoft Excel, Power Queries, Solver Add-in, and CAPM valuation matrices.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Key Findings</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Consistently overweighting defensive, high-cash sectors (IT, Banking) while scaling back materials shielded asset value from key rate corrections.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Skills Demonstrated</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Covariance and beta calculation, active sector sizing, risk benchmarking, and data curation.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Business Takeaways</span>
                          <p className="text-stone-600 leading-relaxed font-serif font-bold">
                            Secured an optimized portfolio CAGR of 12.4% vs NIFTY 50's 10.2%, representing solid active alpha outperformance of +2.2% with a defendable Sharpe ratio setup.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Technologies</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            Excel Power Query, Solver optimization, NSE sector indices.
                          </p>
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-1">Files</span>
                          <p className="text-stone-600 leading-relaxed font-serif">
                            • Portfolio_Risk_Model.xlsx <br />
                            • Active_Alpha_Optimization_Report.pdf
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Enhancements Strip */}
          <div className="border-t border-stone-200 pt-6 flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => handleActionClick('Active Alpha Portfolio Live View')}
                className="px-3.5 py-2 bg-stone-900 text-white text-[10px] font-mono font-bold tracking-wider hover:bg-amber-800 transition-colors"
              >
                LIVE DEMO
              </button>
              <button 
                onClick={() => handleActionClick('Active Alpha Report PDF')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                DOWNLOAD REPORT
              </button>
              <button 
                onClick={() => handleActionClick('Portfolio Analysis Ledger PDF')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                VIEW PDF
              </button>
              <button 
                onClick={() => handleActionClick('Portfolio Excel Model Spreadsheet')}
                className="px-3.5 py-2 border border-stone-300 text-stone-700 text-[10px] font-mono font-bold tracking-wider hover:bg-stone-50 transition-colors"
              >
                VIEW EXCEL MODEL
              </button>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-stone-400">
              <span>Optimized via Excel CAPM</span>
              <span>15 CONSTITUENTS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4: AI-Powered Outreach Automation & Meredian */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        
        {/* Project 4a: Meredian */}
        <div className="bg-white rounded-none border border-stone-300 p-1 flex flex-col justify-between">
          <div className="border border-stone-200 p-8 space-y-6 flex flex-col justify-between h-full bg-white">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-stone-150 pb-3">
                <span className="text-[9px] font-mono text-stone-450 tracking-widest uppercase font-bold">ACADEMIC INITIATIVE</span>
                <span className="px-2 py-0.5 border border-stone-250 bg-stone-50 font-mono text-[8px] uppercase font-bold text-stone-650">PLATFORM ENG</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900">
                Meredian – Equity Research Platform
              </h3>

              {/* Tags strip */}
              <div className="flex flex-wrap gap-1">
                {['Dashboard', 'Valuation', 'Financial Modelling', 'React'].map(tag => (
                  <span key={tag} className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[9px] font-mono font-bold">
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <p className="text-stone-650 text-xs leading-relaxed font-serif">
                Designed a customized investor portal delivering financial reports, valuation tools, and clear charts to make research accessible for retail investors.
              </p>

              {/* Expandable Consulting Brief */}
              <div className="pt-2">
                <button 
                  onClick={() => toggleReport('meredian')}
                  className="inline-flex items-center text-[10px] font-mono font-bold text-amber-800 hover:text-stone-900 transition-colors uppercase gap-1"
                >
                  {expandedReports.meredian ? 'HIDE DETAILS' : 'VIEW DESIGN CASE'} 
                  <ChevronRight size={11} className={`transition-transform duration-200 ${expandedReports.meredian ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedReports.meredian && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 bg-stone-50 border border-stone-150 p-4 space-y-3 text-[11px] font-serif"
                    >
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Overview</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Designed a customized investor portal delivering clean corporate report visualizations, DCF simulators, and portfolio matrices to simplify complex financial models.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Problem</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Retail investment markets are saturated with fragmented information, rendering standard financial analysis obscure to lay users.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Approach</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Built a reactive frontend framework connecting dynamic sliders with real-time math engines for DuPont decomposition and DCF calculations.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Tools Used</span>
                        <p className="text-stone-600 font-serif leading-relaxed">React, Vite, Tailwind CSS, Recharts for clean visual data streams.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Key Findings</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Providing responsive interfaces with immediate visual recalculations significantly boosts user modeling confidence and retention.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Skills Demonstrated</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Frontend state synchronization, financial chart engineering, and UX/UI layout structure.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Business Takeaways</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Created a highly scalable UI blueprint capable of handling raw corporate APIs, establishing a clean benchmark for portfolio web tools.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-stone-200">
                        <div>
                          <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Technologies</span>
                          <p className="text-stone-500 font-mono text-[9px]">React, Vite, Tailwind</p>
                        </div>
                        <div>
                          <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Files</span>
                          <p className="text-stone-500 font-mono text-[9px]">Meredian_UI_Spec.pdf</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="border-t border-stone-100 pt-5 flex flex-col gap-3 mt-6">
              <div className="flex flex-wrap gap-1.5">
                <button 
                  onClick={() => handleActionClick('Meredian Platform Live Preview')}
                  className="px-2.5 py-1.5 bg-stone-900 text-white text-[9px] font-mono font-bold tracking-wider hover:bg-amber-800 transition-colors"
                >
                  LIVE DEMO
                </button>
                <button 
                  onClick={() => handleActionClick('Meredian Design Brief')}
                  className="px-2.5 py-1.5 border border-stone-300 text-stone-700 text-[9px] font-mono font-bold hover:bg-stone-50 transition-colors"
                >
                  DOWNLOAD REPORT
                </button>
                <button 
                  onClick={() => handleActionClick('Meredian Specification PDF')}
                  className="px-2.5 py-1.5 border border-stone-300 text-stone-700 text-[9px] font-mono font-bold hover:bg-stone-50 transition-colors"
                >
                  VIEW PDF
                </button>
                <button 
                  onClick={() => handleActionClick('Meredian Financial Ratios Ledger')}
                  className="px-2.5 py-1.5 border border-stone-300 text-stone-700 text-[9px] font-mono font-bold hover:bg-stone-50 transition-colors"
                >
                  VIEW EXCEL MODEL
                </button>
              </div>
              <span className="text-[8px] font-mono text-stone-400 font-bold uppercase">STACK: REACT / TAILWIND / VITE</span>
            </div>
          </div>
        </div>

        {/* Project 4b: Outreach Automation */}
        <div className="bg-white rounded-none border border-stone-300 p-1 flex flex-col justify-between">
          <div className="border border-stone-200 p-8 space-y-6 flex flex-col justify-between h-full bg-white">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-stone-150 pb-3">
                <span className="text-[9px] font-mono text-stone-450 tracking-widest uppercase font-bold">WORKFLOW PIPELINE</span>
                <span className="px-2 py-0.5 border border-stone-250 bg-stone-50 font-mono text-[8px] uppercase font-bold text-stone-650">SYSTEMS</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900">
                AI-Powered Recruiter Placement System
              </h3>

              {/* Tags strip */}
              <div className="flex flex-wrap gap-1">
                {['Workflow Automation', 'Gemini API', 'Excel'].map(tag => (
                  <span key={tag} className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 text-stone-600 text-[9px] font-mono font-bold">
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <p className="text-stone-650 text-xs leading-relaxed font-serif">
                Built and automated a recruiter communication workflow using customized semantic prompts and scheduled actions to run placements efficiently.
              </p>

              {/* Expandable Consulting Brief */}
              <div className="pt-2">
                <button 
                  onClick={() => toggleReport('outreach')}
                  className="inline-flex items-center text-[10px] font-mono font-bold text-amber-800 hover:text-stone-900 transition-colors uppercase gap-1"
                >
                  {expandedReports.outreach ? 'HIDE DETAILS' : 'VIEW PROCESS CASE'} 
                  <ChevronRight size={11} className={`transition-transform duration-200 ${expandedReports.outreach ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedReports.outreach && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 bg-stone-50 border border-stone-150 p-4 space-y-3 text-[11px] font-serif"
                    >
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Overview</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Developed a scheduled background workflow matching recruiter mandates with current student portfolios to personalize corporate outreach briefs.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Problem</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Traditional student placement workflows rely heavily on manual tracking and templated copy, yielding very low response rates.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Approach</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Configured custom semantic prompting layers via the Gemini API to analyze recruiters' LinkedIn tags and cross-reference them with portfolio models.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Tools Used</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Gemini API, Node.js scripts, Scheduled cron schedules, Excel contact sheets.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Key Findings</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Highlighting concrete analytical achievements (such as DCF or DuPont modeling) within personalized briefs doubles recruiter engagement.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Skills Demonstrated</span>
                        <p className="text-stone-600 font-serif leading-relaxed">Semantic query optimization, scheduled chron-job infrastructure, system design, and communication flow.</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Business Takeaways</span>
                        <p className="text-stone-600 font-serif leading-relaxed font-bold">Successfully compressed campaign setup intervals by 85% and generated high-relevance direct introductory calls with top-tier partners.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-stone-200">
                        <div>
                          <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Technologies</span>
                          <p className="text-stone-500 font-mono text-[9px]">Gemini API, Git Automation</p>
                        </div>
                        <div>
                          <span className="text-[8px] font-mono text-amber-850 font-bold tracking-wider block uppercase mb-0.5">Files</span>
                          <p className="text-stone-500 font-mono text-[9px]">Pipeline_Automation_Spec.pdf</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-5 flex flex-col gap-3 mt-6">
              <div className="flex flex-wrap gap-1.5">
                <button 
                  onClick={() => handleActionClick('Placement Automation Live Tracker')}
                  className="px-2.5 py-1.5 bg-stone-900 text-white text-[9px] font-mono font-bold tracking-wider hover:bg-amber-800 transition-colors"
                >
                  LIVE DEMO
                </button>
                <button 
                  onClick={() => handleActionClick('Placement Campaign Report')}
                  className="px-2.5 py-1.5 border border-stone-300 text-stone-700 text-[9px] font-mono font-bold hover:bg-stone-50 transition-colors"
                >
                  DOWNLOAD REPORT
                </button>
                <button 
                  onClick={() => handleActionClick('Pipeline Automation Spec PDF')}
                  className="px-2.5 py-1.5 border border-stone-300 text-stone-700 text-[9px] font-mono font-bold hover:bg-stone-50 transition-colors"
                >
                  VIEW PDF
                </button>
                <button 
                  onClick={() => handleActionClick('Recruiter Contacts excel tracker')}
                  className="px-2.5 py-1.5 border border-stone-300 text-stone-700 text-[9px] font-mono font-bold hover:bg-stone-50 transition-colors"
                >
                  VIEW EXCEL MODEL
                </button>
              </div>
              <span className="text-[8px] font-mono text-stone-400 font-bold uppercase">STACK: GEMINI API / AUTOMATION SYSTEM</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
