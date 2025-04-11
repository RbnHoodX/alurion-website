
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';
import SolutionsSection from '../components/SolutionsSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ExecutiveSearchTimeline from '../components/ExecutiveSearchTimeline';
import AddOnServicesSection from '../components/AddOnServicesSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <MissionSection />
        <AboutSection />
        <ValuesSection />
        <SolutionsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <ExecutiveSearchTimeline />
        <AddOnServicesSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
