import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Subtle Background Decorative Line */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path 
            d="M0,800 L100,750 L200,780 L300,650 L400,680 L500,500 L600,550 L700,400 L800,450 L900,200 L1000,250" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-slate-900"
          />
        </svg>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-white border-t border-stone-200 py-12 px-6 md:px-12 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-500 text-xs font-mono tracking-wider uppercase">
            © {new Date().getFullYear()} ANSH NIMESH SHAH • PORTFOLIO
          </div>
          <div className="flex space-x-8">
            <a
              href="https://www.linkedin.com/in/ansh-shah1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-850 transition-colors font-mono text-xs font-bold tracking-wider uppercase"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
