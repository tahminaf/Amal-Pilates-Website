import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookingClick = () => {
    window.open('https://amalpilates.marianaiframes.com/iframe/buy/48717', '_blank');
  };

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

        {/* Booking Redirect Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 pb-12"
        >
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="mb-8">
              <svg 
                className="w-20 h-20 mx-auto text-[#473c38] mb-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <h2 
                className="text-2xl md:text-3xl text-[#473c38] tracking-[0.08em] font-light mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Ready to Book?
              </h2>
              <p className="text-[#6b5f5a] text-lg mb-8 max-w-md mx-auto">
                Click below to access our secure booking system and schedule your Pilates session.
              </p>
            </div>
            
            <button
              onClick={handleBookingClick}
              className="bg-[#473c38] text-white px-8 py-4 rounded-md hover:bg-[#5a4f4a] transition-colors duration-300 text-lg tracking-wider font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              PROCEED TO BOOKING
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;