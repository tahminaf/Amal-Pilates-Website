import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const WhatWeOffer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offerings = [
    {
      title: 'Reformer Pilates',
      description: 'Small group reformer classes that sculpt, lengthen, strengthen, and remind you your core exists. Curated playlists set the vibe, intentional movement does the rest.'
    },
    {
      title: 'Private Bookings',
      description: 'Your own Pilates moment. Perfect for birthdays, bachelorettes, wellness weekends, team outings, or simply gathering your favorite people to move together in style.'
    },
    {
      title: 'Workshops + Events',
      description: 'Technique sessions, community hangs, guest instructors, mindfulness pop ups. Come for the movement, stay for the energy.'
    },
    {
      title: 'Wellness Amenities',
      description: 'Locker rooms, showers, and thoughtful touches that let you slow down, reset, and head back into the world feeling centered and refreshed.'
    },
    {
      title: 'Infrared Sauna',
      description: 'Warm up, wind down, or do both. A cozy recovery ritual that supports circulation, relaxation, and that deep exhale your body has been waiting for.'
    },
    {
      title: 'Milk & Honey Café Partnership',
      description: 'Fuel your glow. Enjoy access to coffee, juices, and snacks next door through our partnership with Milk & Honey Café, making your pre or post class ritual even sweeter.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#EBE4DC]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 lg:px-12 bg-[#EBE4DC]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#473c38] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            What We Offer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#473c38]/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            More than movement. A space designed for intention, connection, and the kind of wellness that stays with you.
          </motion.p>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 
                  className="text-2xl sm:text-3xl font-light text-[#473c38] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {offering.title}
                </h3>
                <p 
                  className="text-[#473c38]/70 text-base sm:text-lg leading-relaxed"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeOffer;