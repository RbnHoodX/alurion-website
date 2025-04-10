
import React from 'react';
import Navigation from '../components/Navigation';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Testimonials;
