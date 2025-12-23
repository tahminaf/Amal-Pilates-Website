import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

const PilatesWebsite = () => {
  return (
    <div className="bg-[#EBE4DC] min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Pricing />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default PilatesWebsite;