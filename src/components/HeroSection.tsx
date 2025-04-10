
import React from 'react';
import P5Background from './P5Background';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-alurion-primary"
    >
      <P5Background className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-alurion-primary/80 to-alurion-primary/95 z-0"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo Mark */}
            <svg width="80" height="80" viewBox="0 0 640.01 616.56" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
              <g>
                <polygon className="fill-alurion-secondary" points="94.63 55.43 640.01 55.43 640.01 0 39.2 0 27.71 0 0 0 0 616.56 55.43 616.56 55.43 94.63 577.36 616.56 640.01 616.56 640.01 187.3 345.11 187.3 405.45 242.73 584.58 242.73 584.58 545.37 94.63 55.43" />
              </g>
            </svg>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight fade-in">
              Alurion <span className="text-alurion-secondary">Talent</span> Group
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl fade-in delay-200">
              A beacon of sophistication and trusted excellence in executive recruiting 
              and workforce planning.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center fade-in delay-400">
              <a href="/solutions" className="bg-alurion-secondary text-alurion-primary px-8 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Our Solutions
              </a>
              <a href="/contact" className="bg-transparent border border-alurion-secondary text-alurion-secondary px-8 py-4 rounded-md font-medium hover:bg-alurion-secondary/10 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#mission" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
