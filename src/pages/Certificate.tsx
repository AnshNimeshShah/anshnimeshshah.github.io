import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Award, Landmark } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function Certificate() {
  const { id } = useParams();
  const isCoursera = id === 'coursera';

  const certData = {
    title: isCoursera ? 'Trading in Stocks and Currencies' : 'Basics of Stock Market',
    issuer: isCoursera ? 'Coursera' : 'Varsity by Zerodha',
    logo: isCoursera ? 'C' : 'V',
    verificationId: isCoursera ? 'COUR-2025-ANS-002' : 'VAR-2025-ANS-001',
    sign1: isCoursera ? 'COURSERA INSTRUCTOR' : 'NITHIN KAMATH',
    sign1Title: isCoursera ? 'Verified Professional' : 'Founder @Zerodha',
    sign2: isCoursera ? 'UNIVERSITY PARTNER' : 'KARTHIK RANGAPPA',
    sign2Title: isCoursera ? 'Academic Lead' : 'Chief of Education @Zerodha',
    platform: isCoursera ? 'Coursera' : 'Zerodha Varsity Live'
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 text-stone-900 font-sans">
      {/* Controls */}
      <div className="max-w-[1000px] mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link to="/certifications" className="flex items-center text-stone-600 hover:text-amber-800 transition-colors font-mono text-xs font-bold tracking-wider">
          <ArrowLeft size={14} className="mr-2" />
          RETURN TO CERTIFICATIONS
        </Link>
      </div>

      {/* Certificate Container - Styled like a premium ivory academic diploma */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[1000px] mx-auto bg-[#faf9f6] border border-stone-300 p-1 shadow-2xl relative overflow-hidden print:shadow-none print:m-0 w-full md:aspect-[1.414/1] flex flex-col"
      >
        {/* Double Border Frame Detail */}
        <div className="border border-stone-200 flex-grow p-6 sm:p-12 flex flex-col justify-between gap-8 md:gap-4">
          
          {/* Header Logos and Title */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-left space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-amber-800 uppercase block font-bold">ACADEMIC ATTESTATION</span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Certificate of Completion</h1>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-100 font-mono font-bold text-sm mb-1">{certData.logo}</div>
                <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-stone-400">{certData.issuer}</span>
              </div>
              <div className="h-10 w-px bg-stone-300 hidden sm:block" />
              <div className="flex items-center gap-2 text-left">
                <div className="w-8 h-8 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-850 font-serif font-bold text-xs">AS</div>
                <div className="flex flex-col">
                  <span className="text-xs font-serif font-bold leading-none">ANSH SHAH</span>
                  <span className="text-[7px] font-mono font-bold tracking-wider text-stone-400">RESEARCH PORTFOLIO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Central Statement */}
          <div className="flex-grow flex flex-col justify-center text-center space-y-4 my-4">
            <p className="text-[10px] sm:text-xs font-mono tracking-wider text-stone-400 uppercase font-bold">THIS CREDENTIAL IS PROUDLY CONFERRED UPON</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 tracking-tight">ANSH NIMESH SHAH</h3>
            <div className="w-1/3 h-px bg-stone-300 mx-auto" />
            <p className="text-sm sm:text-base md:text-lg text-stone-700 font-serif italic max-w-2xl mx-auto leading-relaxed">
              for successfully completing all rigorous course guidelines and benchmarking assignments under the <span className="font-bold text-stone-900 not-italic">{certData.title}</span> curriculum through {certData.platform}.
            </p>
          </div>

          {/* Signatures */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-left pt-6 border-t border-stone-200">
            <div className="space-y-2 w-full sm:w-auto">
              <div className="w-40 h-px bg-stone-900" />
              <div>
                <p className="text-xs font-serif font-bold text-stone-900">{certData.sign1}</p>
                <p className="text-[10px] font-mono text-stone-500 font-medium">{certData.sign1Title}</p>
              </div>
            </div>
            <div className="space-y-2 w-full sm:w-auto">
              <div className="w-40 h-px bg-stone-900" />
              <div>
                <p className="text-xs font-serif font-bold text-stone-900">{certData.sign2}</p>
                <p className="text-[10px] font-mono text-stone-500 font-medium">{certData.sign2Title}</p>
              </div>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto">
              <p className="text-[8px] font-mono font-bold text-stone-400 uppercase tracking-widest">VERIFICATION SERIAL: {certData.verificationId}</p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
