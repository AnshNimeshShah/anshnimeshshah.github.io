import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, AlertCircle, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  const [showToast, setShowToast] = useState(false);

  const handlePrint = () => {
    window.focus();
    const isInIframe = (() => {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    })();

    if (isInIframe) {
      setShowToast(true);
      try { window.print(); } catch (e) {}
    } else {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 relative text-stone-900 font-sans">
      {/* Controls - Hidden on Print */}
      <div className="max-w-[800px] mx-auto mb-8 flex flex-wrap justify-between items-center print:hidden gap-4">
        <Link to="/" className="flex items-center text-stone-600 hover:text-amber-800 transition-colors font-mono text-xs font-bold tracking-wider">
          <ArrowLeft size={14} className="mr-2 animate-pulse" />
          RETURN TO HOME
        </Link>
        <div className="flex items-center gap-2">
          <a 
            href="/Ansh Nimesh Shah CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download="Ansh Nimesh Shah CV.pdf"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition-all font-mono text-[11px] font-bold tracking-wider"
          >
            <Download size={12} /> VIEW CV (PDF)
          </a>
          <button 
            onClick={handlePrint} 
            className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 transition-all font-mono text-[11px] font-bold tracking-wider"
          >
            <Printer size={12} /> PRINT / SAVE PDF
          </button>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-stone-900 border border-stone-800 text-stone-100 px-6 py-5 rounded-none shadow-2xl flex flex-col gap-2 z-50 text-xs max-w-sm transition-all no-print animate-bounce">
          <div className="flex items-center gap-2 font-bold text-amber-500 font-mono tracking-wider">
            <AlertCircle size={14} />
            <span>PREVIEW NOTICE</span>
          </div>
          <p className="text-stone-300 font-serif leading-relaxed">
            Websites cannot trigger direct print functions inside sandboxed frames. Please <strong>open this portfolio in a new tab</strong> (using the arrow icon at the top-right of your screen), then click "Save PDF / Print" to save smoothly!
          </p>
          <button 
            onClick={() => setShowToast(false)} 
            className="mt-1 font-mono text-[10px] text-amber-500 hover:text-amber-400 font-bold self-end focus:outline-none cursor-pointer"
          >
            CONFIRM
          </button>
        </div>
      )}

      {/* Resume Paper - Styled like a premium Harvard / Ivy League financial memo */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[800px] mx-auto bg-white border border-stone-300 shadow-xl p-12 md:p-16 print:shadow-none print:border-none print:p-0 text-left rounded-none relative"
      >
        <div className="border border-stone-100 p-2 print:border-none">
          {/* Header */}
          <header className="text-center border-b border-stone-900 pb-6 mb-8">
            <h1 className="text-3xl font-serif font-bold text-stone-900 uppercase tracking-tight mb-2">Ansh Nimesh Shah</h1>
            <p className="text-xs font-serif text-stone-600 mb-3">
              Electronic City Phase 1, Bengaluru, Karnataka 560100 • +91 7338425285
            </p>
            <div className="flex justify-center gap-4 text-[10px] font-mono font-bold text-amber-900 flex-wrap">
              <a href="mailto:anshnshah1007@gmail.com" className="hover:underline">anshnshah1007@gmail.com</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/ansh-shah1/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/ansh-shah1/</a>
            </div>
          </header>

          {/* Profile */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Professional Summary</h2>
            <p className="text-xs text-stone-700 font-serif leading-relaxed leading-6">
              I am a second-year B.Com (Honours) in Strategic Finance student pursuing internship opportunities in Equity Research, Investment Banking, and Corporate Finance. Built an integrated three-statement DCF valuation model and a DuPont-based financial statement analysis, translating raw financials into actionable investment recommendations. Proficient in Excel-based financial modelling, ratio analysis, and portfolio benchmarking against the NIFTY 50 — most recently applied through Meredian, a self-built equity research platform.
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Education</h2>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xs font-mono font-bold text-stone-900 uppercase">Jain (Deemed-to-be University), Bengaluru</h3>
                <p className="text-xs text-stone-600 font-serif italic">Bachelor of Commerce (Honours) – Strategic Finance</p>
              </div>
              <div className="text-right font-mono text-xs">
                <p className="font-bold text-stone-900">2025 – PRESENT</p>
              </div>
            </div>
            <div className="mt-1">
              <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">RELEVANT DISCIPLINES:</span>
              <p className="text-xs text-stone-700 font-serif leading-relaxed">Corporate Finance, Financial Accounting, Business Economics, Investment Analysis</p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Academic & Applied Projects</h2>
            
            <div className="mb-4">
              <h3 className="text-xs font-serif font-bold text-stone-900 flex justify-between items-center flex-wrap gap-2">
                <span>1. Meredian – AI-Assisted Equity Research Platform</span>
                <span className="text-[10px] font-mono font-bold text-amber-800 uppercase">FLAGSHIP WORKSPACE</span>
              </h3>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1 mt-1 leading-relaxed">
                <li>Defined the product concept, finance logic, architecture, feature decisions, workflow design, testing, validation, and deployment direction for an equity research workspace.</li>
                <li>Designed modules for financial statement analysis, DuPont breakdown, valuation parameters, and structured reports; AI-assisted development tools were utilized for implementation.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xs font-serif font-bold text-stone-900">2. Infosys Ltd. – Financial Model & Three-Statement DCF Valuation</h3>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1 mt-1 leading-relaxed">
                <li>Constructed an integrated three-statement financial model linking P&L, balance sheet, and cash flow statement schedules to project performance through FY29E.</li>
                <li>Conducted DCF valuation and two-way sensitivity analysis testing 6–10% revenue growth, 10% WACC, and 4% terminal growth; calculated an estimated intrinsic value of ₹1,319 per share vs. market price of ₹1,297 (~1.7% variance parameter), establishing a fair value range of ₹1,200–₹1,500.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xs font-serif font-bold text-stone-900">3. Wipro Ltd. – Financial Statement Analysis & Investment Memo (FY22–FY24)</h3>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1 mt-1 leading-relaxed">
                <li>Conducted a comprehensive 3-year financial analysis across FY22–FY24 utilizing financial ratios, three-stage DuPont decomposition, and common-size trend statements.</li>
                <li>Benchmarked profitability, liquidity, and leverage against Indian IT peers (TCS, Infosys, and HCLTech); authored an investment memo formulating a Hold recommendation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-serif font-bold text-stone-900">4. Indian Equity Portfolio Analytics Dashboard</h3>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1 mt-1 leading-relaxed">
                <li>Constructed a formula-driven Excel dashboard tracking 15 Indian equities across 5 sectors with NIFTY 50 benchmarking and sector allocation distributions.</li>
                <li>Built all spreadsheet logic, calculations, and Excel modelling directly in Excel; AI was utilized only for visual formatting and presentation aesthetics.</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Skills & Competencies</h2>
            <div className="space-y-1.5 font-serif text-xs text-stone-700">
              <p>
                <strong className="font-sans text-stone-900 text-xs">Financial:</strong> Financial Modelling, Three-Statement Modelling, DCF Valuation, Scenario & Sensitivity Analysis, Financial Statement Analysis, Ratio Analysis, Equity Research, Investment Analysis, Forecasting, Risk Assessment.
              </p>
              <p>
                <strong className="font-sans text-stone-900 text-xs">Technical:</strong> Microsoft Excel (Sensitivity Analysis, Data Visualization), Basic Python.
              </p>
            </div>
          </section>

          {/* Leadership & Extracurriculars */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Leadership & Extracurricular Achievements</h2>
            <div className="mb-3">
              <h3 className="text-xs font-serif font-bold text-stone-900">Business Development Team Member, SAMARTHYA 2026 – Placement Forum (SCAPS)</h3>
              <p className="text-[10px] font-mono text-stone-500 font-bold uppercase mt-0.5 mb-1.5">2025 – PRESENT</p>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1 mt-1 leading-relaxed">
                <li>Conducted outreach to 100+ companies while supporting internship and placement initiatives at Jain University.</li>
                <li>Supported on-spot registration and floor coordination throughout the event.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-serif font-bold text-stone-900">2nd Runner-Up – Jain University Entrepreneurship Week</h3>
              <p className="text-xs text-stone-700 font-serif mt-1 leading-relaxed">
                Recognized for entrepreneurial pitching and business strategy at the annual university-wide competition.
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="border-t border-stone-300 pt-5">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-200 pb-1 mb-3">Certifications & Credentials</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 ml-4 list-disc list-outside text-xs text-stone-700 font-serif">
              <li>Basics of Stock Market – Varsity by Zerodha</li>
              <li>Trading in Stocks and Currencies – Coursera</li>
              <li>McKinsey Forward Program – McKinsey & Company</li>
              <li>Corporate Financial Statement Analysis (2023 course) – LinkedIn Learning</li>
              <li>Financial Accounting Foundations – LinkedIn Learning</li>
              <li>Reading Corporate Financial Statements – LinkedIn Learning</li>
              <li>Guide to Understanding Financial Statements – LinkedIn Learning</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
