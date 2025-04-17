import React, { useState, useEffect } from 'react';
const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Blending advanced strategy with the art of human connection to deliver talent and HR solutions that shape the future of work";
  const typingSpeed = 40; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    return () => clearInterval(typingInterval);
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-alurion-primary">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1552581234-26160f608093)'
    }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white z-0"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-alurion-primary text-center">
          <div className="flex flex-col items-center text-center">
            {/* New SVG Logo */}
            <svg width="80" height="80" viewBox="0 0 520 501" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
              <path d="M76.995 45.6265H519.276V0.669922H32.0384H22.7299H0.255859V500.67H45.2039V77.409L468.473 500.67H519.276V152.571H280.127L329.061 197.519H474.319V442.951L76.995 45.6265Z" fill="#1C213C" />
            </svg>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-alurion-primary leading-tight fade-in">
              Alurion <span className="text-alurion-primary">Talent</span> Group
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-alurion-primary/90 leading-relaxed max-w-3xl fade-in delay-200 h-[3rem] md:h-[4rem]">
              {displayText}
              <span className="animate-pulse ml-0.5 inline-block border-l-2 border-gray-100 h-[1em] align-middle">|</span>
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center fade-in delay-400">
              <a href="/solutions" className="bg-alurion-primary text-alurion-secondary px-8 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Our Solutions
              </a>
              <a href="/contact" className="bg-transparent border border-alurion-primary text-alurion-primary px-8 py-4 rounded-md font-medium hover:bg-alurion-primary/20 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#mission" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>;
};
export default HeroSection;