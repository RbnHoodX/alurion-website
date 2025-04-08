
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pattern-bg-light"
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-alurion-secondary">
            Alurion Talent Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed">
            Blending advanced strategy with the art of human connection to deliver
            talent and HR solutions that shape the future of work
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#solutions" className="primary-btn">
              Our Solutions
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#mission" className="text-alurion-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
