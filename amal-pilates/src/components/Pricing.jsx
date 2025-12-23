import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const Pricing = () => {
  const pricingPlans = [
    {
      title: '3 Classes',
      price: '$95',
      description: 'A curated way to experience amal.',
      features: ['Reformer classes', 'Valid for 2 weeks', 'New clients only']
    },
    {
      title: '2 Weeks Unlimited',
      price: '$140',
      description: 'Unlimited access for 14 days.',
      features: ['All class formats', 'Fastest way to discover', 'New clients only'],
      featured: true
    },
    {
      title: 'Private Session',
      price: '$150',
      description: '1:1 personalized experience.',
      features: ['Focused attention', 'Custom programming', 'All experience levels']
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#6B5B52] mb-4 lg:mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Join Our Founder's Member Waitlist
          </h2>
          <p className="text-[#6B5B52]/70 text-base lg:text-lg tracking-wide px-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Be the first to book classes, unlock pre-opening pricing,<br className="hidden sm:block" />and claim limited founder perks
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.title} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;