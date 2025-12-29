import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      title: 'Reformer Classes',
      description: 'Small-group sessions focused on precision, control, and progressive challenge.'
    },
    {
      title: 'Private Training',
      description: 'Personalized 1:1 sessions tailored to your specific goals and movement patterns.'
    },
    {
      title: 'Expert Instructors',
      description: 'Certified professionals with deep knowledge of biomechanics and classical Pilates.'
    },
    {
      title: 'Premium Studio',
      description: 'A refined space designed for focus, equipped with professional-grade reformers.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#473c38] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Experience
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;