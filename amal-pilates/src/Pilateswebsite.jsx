import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import InstagramGallery from './components/InstagramGallery';
import Pricing from './components/Pricing';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import Schedule from './components/Schedule';
import WhatWeOffer from './components/WhatWeOffer';

// Home page component with all sections
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Philosophy />
      <InstagramGallery />
      <Footer />
    </>
  );
};

const PilatesWebsite = () => {
  return (
    <Router>
      <div className="bg-[#EBE4DC] min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default PilatesWebsite;