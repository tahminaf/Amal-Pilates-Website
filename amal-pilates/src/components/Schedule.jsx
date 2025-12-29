import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#EBE4DC] pt-20">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-24"
      >
        <div className="text-center space-y-6">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl text-[#473c38] tracking-[0.1em] font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            CLASS SCHEDULE
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-[#4A3F38] font-light leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our schedule is currently pending.
            </p>
            
            <p 
              className="text-base sm:text-lg text-[#473c38]/80 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              We're finalizing our class offerings to bring you the best possible experience. 
              Check back soon or join our waitlist to be notified when classes become available.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#473c38] text-[#EBE4DC] px-12 py-4 text-sm tracking-[0.15em] hover:bg-[#4A3F38] transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                JOIN WAITLIST
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16"
      >
        <div className="bg-[#D9CFC3]/30 rounded-lg p-8 sm:p-12 text-center">
          <p 
            className="text-sm sm:text-base text-[#473c38]/70 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Movement, refined. Coming soon to Brooklyn."
          </p>
        </div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default Schedule;