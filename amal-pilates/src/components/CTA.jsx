import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#D9CFC3]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-light text-[#473c38] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Ready to transform<br />your practice?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#473c38]/80 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Join us and discover movement, refined. Book your intro offer today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 lg:pt-8">
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#473c38] text-[#473c38] px-12 py-5 text-sm tracking-[0.15em] hover:bg-[#473c38] transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                BOOK YOUR INTRO
              </motion.button>
            </Link>
            <a href="mailto:hello@amalpilates.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-[#473c38] text-[#473c38] px-12 py-5 text-sm tracking-[0.15em] hover:bg-[#473c38] hover:text-[#473c38] transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                CONTACT US
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;