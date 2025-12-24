import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', target: 'hero' },
    { name: 'SCHEDULE', target: 'schedule' },
    { name: 'PRICING', target: 'pricing' },
    { name: 'ABOUT', target: 'philosophy' },
    { name: 'CONTACT', target: 'footer' }
  ];

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#EBE4DC]/95 backdrop-blur-sm border-b border-[#6B5B52]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => smoothScroll('hero')}
          >
            <img 
              src={`${process.env.PUBLIC_URL}/brown_logo.png`}
              alt="Amal Pilates Logo" 
              className="h-16 sm:h-20 lg:h-24 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => smoothScroll(item.target)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-[#6B5B52] text-sm tracking-[0.15em] font-light hover:text-[#4A3F38] transition-colors duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block bg-[#6B5B52] text-[#EBE4DC] px-8 py-3 text-sm tracking-[0.1em] hover:bg-[#4A3F38] transition-all duration-300"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BOOK NOW
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#6B5B52]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#EBE4DC] border-t border-[#6B5B52]/10"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  smoothScroll(item.target);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-[#6B5B52] text-sm tracking-[0.15em] font-light hover:text-[#4A3F38]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.name}
              </button>
            ))}
            <button 
              className="w-full bg-[#6B5B52] text-[#EBE4DC] px-8 py-3 text-sm tracking-[0.1em]" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              BOOK NOW
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;