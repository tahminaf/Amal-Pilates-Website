import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const BookingPage = () => {
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8"
      >
        <h1 
          className="text-4xl md:text-5xl text-[#473c38] tracking-[0.1em] font-light text-center mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          BOOK YOUR SESSION
        </h1>
      </motion.div>

      {/* Iframe Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://amalpilates.marianaiframes.com/iframe/buy/48717"
            title="Book Pilates Session"
            className="w-full h-[800px] md:h-[900px] border-0"
            style={{ minHeight: '600px' }}
          />
        </div>
      </motion.div>
    </div>
    <Footer />
    </>
  );
};

export default BookingPage;