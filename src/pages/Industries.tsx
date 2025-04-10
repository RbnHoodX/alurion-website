
import React from 'react';
import Navigation from '../components/Navigation';
import IndustriesSection from '../components/IndustriesSection';
import Footer from '../components/Footer';

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <IndustriesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Industries;
