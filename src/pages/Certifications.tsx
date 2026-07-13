import React from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, Building2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const certifications = [
  {
    name: 'Basics of Stock Market',
    issuer: 'Varsity by Zerodha',
    date: '2025',
    description: 'Comprehensive certification covering fundamental and technical analysis, market mechanics, and investment strategies.',
    link: '/certificate',
    isExternal: false
  },
  {
    name: 'Trading in Stocks and Currencies',
    issuer: 'Coursera',
    date: '2025',
    description: 'Advanced training in technical analysis, risk management, and trading strategies for equity and forex markets.',
    link: '/certificate/coursera',
    isExternal: false
  },
  {
    name: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: '2026',
    description: 'An intensive virtual learning journey focusing on core leadership, business, digital, and analytical skills, including structured problem-solving.',
    link: '/Forward20260629-31-e8jc2e.pdf',
    isExternal: true
  },
  {
    name: 'Corporate Financial Statement Analysis (2023)',
    issuer: 'Professional Coursework',
    date: '2023',
    description: 'Advanced techniques in modeling three-statement financial models, ratio calculations, and valuation drivers.',
    link: '/Corporate Financial Statement Analysis 2023.pdf',
    isExternal: true
  },
  {
    name: 'Financial Accounting Foundations',
    issuer: 'Foundational Series',
    date: '2023',
    description: 'Core mechanics of corporate accounting: income statements, balances sheets, cash flow statements, and double entries.',
    link: '/Financial Accounting Foundations.pdf',
    isExternal: true
  },
  {
    name: 'Reading Corporate Financial Statements',
    issuer: 'Analytical Series',
    date: '2023',
    description: 'Practical methodologies for interpreting footnotes, management notes, and evaluating the quality of earnings.',
    link: '/Reading Corporate Financial Statements.pdf',
    isExternal: true
  },
  {
    name: 'Guide to Understanding Financial Statements',
    issuer: 'Valuation Frameworks',
    date: '2023',
    description: 'A comprehensive, structured study of analyzing business operations, dissecting margins, and assessing leverage.',
    link: '/Guide to Understanding Financial Statements.pdf',
    isExternal: true
  }
];

export default function Certifications() {
  return (
    <div className="section-padding pb-28 text-stone-900 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 text-left max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-sm text-amber-850 text-[10px] font-mono font-bold tracking-wider uppercase">
            <Award size={12} />
            ACCREDITATIONS
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
            Professional Credentials
          </h1>
          <p className="text-stone-600 text-sm font-serif italic">
            Academic certifications and technical credentials verifying structural accounting proficiency and market analysis.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-white border border-stone-300 p-1 shadow-sm flex flex-col justify-between"
            >
              <div className="border border-stone-150 p-6 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-stone-50 border border-stone-200 text-stone-850 flex items-center justify-center">
                    <Award size={14} />
                  </div>
                  
                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-tight min-h-[50px]">
                    {cert.name}
                  </h3>
                  
                  <div className="space-y-1.5 font-mono text-[9px] text-stone-450 uppercase font-bold tracking-wider pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-2">
                      <Building2 size={10} className="text-amber-800" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={10} className="text-amber-800" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-stone-600 text-xs font-serif leading-relaxed min-h-[70px]">
                    {cert.description}
                  </p>
                </div>
                
                {cert.isExternal ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 transition-all font-mono text-[10px] font-bold tracking-wider"
                  >
                    VIEW PDF DOCUMENT
                    <ExternalLink size={11} className="ml-2" />
                  </a>
                ) : (
                  <Link
                    to={cert.link}
                    className="inline-flex items-center justify-center w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 transition-all font-mono text-[10px] font-bold tracking-wider"
                  >
                    VIEW CERTIFICATE
                    <ExternalLink size={11} className="ml-2" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
