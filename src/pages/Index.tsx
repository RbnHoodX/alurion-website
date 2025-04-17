
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';
import TeamSection from '../components/TeamSection';
import SolutionsSection from '../components/SolutionsSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <MissionSection id="mission" />
        <AboutSection />
        <ValuesSection id="values" />
        <TeamSection />
        <SolutionsSection />
        <IndustriesSection />
        <TestimonialsSection id="testimonials" />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
