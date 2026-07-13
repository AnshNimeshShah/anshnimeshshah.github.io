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
            href="/ Ansh Nimesh Shahe.pdf" 
            download=" Ansh Nimesh Shahe.pdf"
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 transition-all font-mono text-[11px] font-bold tracking-wider"
          >
            <Download size={12} /> DOWNLOAD PDF
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
              I am a B.Com (Honours) in Strategic Finance student pursuing placement and internship opportunities in Equity Research, Investment Banking, and Corporate Finance. Highly experienced in generating integrated three-statement DCF models and DuPont-based statement analysis, converting raw financial balance sheets into clear investment recommendations. Proficient in Advanced Excel pipelines and portfolio performance tracking against NIFTY 50 metrics — actively demonstrated through Meredian, an automated equity analysis and visualization interface.
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Education</h2>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xs font-mono font-bold text-stone-900 uppercase">Jain Deemed-to-be University, Bengaluru</h3>
                <p className="text-xs text-stone-600 font-serif italic">Bachelor of Commerce (Honours) – Strategic Finance</p>
              </div>
              <div className="text-right font-mono text-xs">
                <p className="font-bold text-stone-900">2025 - PRESENT</p>
              </div>
            </div>
            <div className="mt-1">
              <span className="text-[10px] font-mono font-bold text-stone-400 uppercase tracking-wider block">RELEVANT WORKFLOWS:</span>
              <p className="text-xs text-stone-700 font-serif leading-relaxed">Corporate Finance Theory, Advanced Financial Accounting, Business Economics, Portfolio Management</p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Academic Projects & Lab Work</h2>
            
            <div className="mb-4">
              <h3 className="text-xs font-serif font-bold text-stone-900 flex justify-between items-center flex-wrap gap-2">
                <span>1. Meredian – AI-Assisted Equity Research Platform</span>
                <span className="text-[10px] font-mono font-bold text-amber-850 uppercase">LIVE PREVIEW ENABLED</span>
              </h3>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1.5 mt-1.5 leading-relaxed">
                <li>Designed and deployed a modern equity analytics dashboard providing corporate statement updates, DuPont metrics, and valuation indexes for retail analysts.</li>
                <li>Directed end-to-end framework layout, styling models, dynamic variables, and automated deployment pipelines.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xs font-serif font-bold text-stone-900">2. Equity Valuation – Infosys Ltd. (Three-Statement DCF Model)</h3>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1.5 mt-1.5 leading-relaxed">
                <li>Built an integrated, dynamically linked three-statement Excel model projecting cash streams across a 5-year forecast horizon to calculate fair enterprise value.</li>
                <li>Conducted multi-scenario sensitivity models (WACC, terminal growth, revenue multipliers), verifying an intrinsic share price of ₹1,319 against market price of ₹1,297 (~1.7% variance parameter).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-serif font-bold text-stone-900">3. Financial Statement Analysis – Wipro Ltd.</h3>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1.5 mt-1.5 leading-relaxed">
                <li>Deconstructed historical performance indicators via DuPont metrics, tracing a strong 29% ROE directly to 18% net margins and sound debt leverage (0.09x D/E ratios).</li>
                <li>Benchmarked ratios against sector averages and structured findings into a client-ready memorandum with stable Hold recommendations.</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Technical & Strategic Competence</h2>
            <div className="space-y-1.5 font-serif text-xs text-stone-700">
              <p>
                <strong className="font-sans text-stone-900 text-xs">Financial Disciplines:</strong> Financial Modelling, DCF Valuation, Financial Statement Analysis, Ratio Analysis, DuPont Analysis, Scenario Analysis, Sensitivity Analysis, Capital Asset Pricing (CAPM).
              </p>
              <p>
                <strong className="font-sans text-stone-900 text-xs">Tools & Platforms:</strong> Microsoft Excel (Pivot Tables, Advanced Financial Analysis ToolPak), Microsoft PowerPoint, Version Control, Web Technologies.
              </p>
              <p>
                <strong className="font-sans text-stone-900 text-xs">Productivity & AI Support:</strong> Gemini API Integration, Prompt Optimization, Workflow Automation.
              </p>
            </div>
          </section>

          {/* Leadership & Extracurriculars */}
          <section className="mb-6">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-300 pb-1 mb-3">Leadership & Extracurricular Achievements</h2>
            <div className="mb-3">
              <h3 className="text-xs font-serif font-bold text-stone-900">Business Development Team representative, SAMARTHYA 2026 – Placement Forum (SCAPS)</h3>
              <p className="text-[10px] font-mono text-stone-500 font-bold uppercase mt-0.5 mb-1.5">2025 – PRESENT</p>
              <ul className="list-disc list-outside ml-4 text-xs text-stone-700 font-serif space-y-1 mt-1 leading-relaxed">
                <li>Sourced corporate leads and pitched partnerships for the campus placement fair — coordinating on-site with 60+ organizations and ~1,000 registrants.</li>
                <li>Directed on-spot registrations, coordinated interviews, and managed hospitality logs.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-serif font-bold text-stone-900">2nd Runner-Up – Jain University Entrepreneurship Week</h3>
              <p className="text-xs text-stone-700 font-serif mt-1 leading-relaxed">
                Awarded secondary runner-up distinction for innovative business pitching, quantitative market scoping, and pitch deck presentations during the annual university-wide entrepreneurship competition.
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="border-t border-stone-300 pt-5">
            <h2 className="text-xs font-mono font-bold text-stone-900 uppercase tracking-widest border-b border-stone-200 pb-1 mb-3">Professional Certifications</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 ml-4 list-disc list-outside text-xs text-stone-700 font-serif">
              <li>BASICS OF STOCK MARKET – VARSITY BY ZERODHA</li>
              <li>TRADING IN STOCKS AND CURRENCIES – COURSERA</li>
              <li>MCKINSEY FORWARD PROGRAM – MCKINSEY & COMPANY</li>
              <li>CORPORATE STATEMENT ANALYSIS (2023) – PROFESSIONAL COURSEWORK</li>
              <li>FINANCIAL ACCOUNTING FOUNDATIONS – FOUNDATIONAL SERIES</li>
              <li>READING CORPORATE STATEMENT FOOTNOTES – ANALYTICAL SERIES</li>
              <li>UNDERSTANDING CORPORATE FINANCIALS – VALUATION FRAMEWORKS</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
