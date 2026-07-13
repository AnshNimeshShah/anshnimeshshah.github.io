import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'CERTIFICATIONS', path: '/certifications' },
  { name: 'ACHIEVEMENTS', path: '/achievements' },
  { name: 'RESUME', path: '/resume' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex flex-col text-left">
          <span className="text-lg font-serif font-bold tracking-tight text-stone-900">
            ANSH NIMESH SHAH
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-amber-700 font-bold -mt-1">
            STRATEGIC FINANCE PORTFOLIO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center md:space-x-3 lg:space-x-4 xl:space-x-6 shrink-0 whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-2 text-[11px] lg:text-[12px] xl:text-[13px] font-mono tracking-wider font-semibold transition-colors hover:text-amber-700 whitespace-nowrap"
              >
                <span className={isActive ? 'text-amber-800' : 'text-stone-600'}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.span 
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-700"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-stone-600 hover:text-amber-800 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-6 space-y-4"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-xs font-mono tracking-wider font-semibold py-1.5 ${
                  isActive ? 'text-amber-800 border-l-2 border-amber-700 pl-2' : 'text-stone-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
