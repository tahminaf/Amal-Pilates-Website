import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ plan, index }) => {
  const { title, price, description, features, featured } = plan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`relative p-6 sm:p-8 lg:p-10 ${
        featured 
          ? 'bg-[#6B5B52] text-[#EBE4DC]' 
          : 'bg-white border-2 border-[#D9CFC3]'
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-[#EBE4DC] text-[#6B5B52] px-6 py-2 text-xs tracking-[0.2em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            MOST POPULAR
          </span>
        </div>
      )}
      
      <div className="text-center space-y-6">
        <h3 className={`text-2xl tracking-[0.1em] font-light ${
          featured ? 'text-[#EBE4DC]' : 'text-[#6B5B52]'
        }`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {title}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-5xl font-light ${
            featured ? 'text-[#EBE4DC]' : 'text-[#6B5B52]'
          }`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {price}
          </span>
        </div>
        <p className={`text-sm ${
          featured ? 'text-[#EBE4DC]/80' : 'text-[#6B5B52]/70'
        }`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {description}
        </p>
        <div className="pt-6 space-y-3">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`text-sm ${
                featured ? 'text-[#EBE4DC]/90' : 'text-[#6B5B52]/80'
              }`}
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {feature}
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-4 text-sm tracking-[0.15em] transition-all duration-300 mt-8 ${
            featured
              ? 'bg-[#EBE4DC] text-[#6B5B52] hover:bg-white'
              : 'bg-[#6B5B52] text-[#EBE4DC] hover:bg-[#4A3F38]'
          }`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          JOIN
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PricingCard;