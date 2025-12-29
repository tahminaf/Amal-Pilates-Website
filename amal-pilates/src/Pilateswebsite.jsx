import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

// Home page component with all sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <Philosophy />
      <Pricing />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};

const PilatesWebsite = () => {
  return (
    <Router>
      <div className="bg-[#EBE4DC] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default PilatesWebsite;