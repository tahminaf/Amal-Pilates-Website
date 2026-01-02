import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <motion.section 
      id="hero"
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-12 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-3 sm:mb-4"
            >
              <p className="text-base sm:text-lg text-[#473c38] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Move with Purpose.
              </p>
              <p className="text-base sm:text-lg text-[#473c38]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Reform with Hope.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6 sm:mb-8 lg:-ml-16"
            >
              <img 
                src="/brown_logo.png" 
                alt="Amal Pilates Logo" 
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-3 sm:space-y-4 w-full"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#4A3F38] font-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Be among the first to<br />
                experience Amal Pilates.
              </h2>
              <p className="text-sm sm:text-base text-[#473c38] leading-relaxed font-light max-w-xl mx-auto lg:mx-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Secure your spot before our official opening and become part of something special. As a member, you'll enjoy exclusive pre-opening pricing, priority access to class bookings, complimentary guest passes, and special perks designed just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
                <Link to="/booking" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-[#473c38] text-[#EBE4DC] px-14 py-4 text-sm tracking-[0.30em] hover:bg-[#4A3F38] transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    JOIN NOW
                  </motion.button>
                </Link>
                <Link to="/schedule" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border-2 border-[#473c38] text-[#473c38] px-8 py-3 text-sm tracking-[0.15em] hover:bg-[#473c38] hover:text-[#EBE4DC] transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    VIEW SCHEDULE
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[3/4] bg-[#D9CFC3] relative overflow-hidden">
              <img 
                src="/full_body.jpg"
                alt="Pilates Practice" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-[-4rem] sm:bottom-[-4rem] lg:bottom-[-2rem] left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#473c38] text-xs tracking-[0.2em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            SCROLL
          </span>
          <div className="w-px h-16 bg-[#473c38]/30"></div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;