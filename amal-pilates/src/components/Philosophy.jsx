import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-14 sm:py-22 lg:py-30 px-4 sm:px-4 lg:px-10 bg-[#473c38] text-[#EBE4DC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-8 lg:mb-0"
          >
            <div className="aspect-square w-full max-w-lg max-w-[300px] lg:max-w-[480px] bg-[#D9CFC3] relative overflow-hidden">
              <img 
                src="/IMG_6982.jpeg"
                alt="Studio Interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light mb-6 lg:mb-8 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Where Strength Begins With Hope
            </h2>
            <div className="space-y-4 lg:space-y-6 text-[#EBE4DC]/80 text-lg lg:text-xl leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <p>
                Derived from the word hope, Amal represents the journey of becoming stronger, clearer, and more grounded. Across languages, Amal carries meanings of hope, purity, effort, and love, and each reflects what we practice within our studio.
              </p>
              <p>
                Our boutique reformer studio is designed with warmth and intention, where thoughtful interiors meet high-quality equipment, expert instruction, and an atmosphere that feels calm, inviting, and motivating.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Philosophy;