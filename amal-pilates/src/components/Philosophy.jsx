import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#473c38] text-[#EBE4DC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 lg:mb-8 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              This isn't just Pilates.<br />
              This is <span className="italic">amal</span>.
            </h2>
            <div className="space-y-4 lg:space-y-6 text-[#EBE4DC]/80 text-base lg:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <p>
                1:1 private sessions offer focused attention, personal programming, and a tailored experience 
                designed entirely for your goals.
              </p>
              <p>
                Our boutique reformer Pilates studio in the heart of the city combines classical technique 
                with contemporary movement science. Every session is an opportunity to refine your practice, 
                challenge your limits, and discover what your body is truly capable of.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="aspect-square w-full max-w-sm lg:max-w-md bg-[#D9CFC3] relative overflow-hidden">
              <img 
                src="/leg_pic.jpg"
                alt="Studio Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;