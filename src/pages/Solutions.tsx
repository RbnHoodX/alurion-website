
import React from 'react';
import Navigation from '../components/Navigation';
import SolutionsSection from '../components/SolutionsSection';
import Footer from '../components/Footer';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <SolutionsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Solutions;
