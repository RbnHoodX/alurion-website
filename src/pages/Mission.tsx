import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';
const Mission = () => {
  // Text generation effect states
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const missionText = "Our mission is to create lasting impact by forging meaningful connections between exceptional talent and visionary organizations. We go beyond placement; we are dedicated partners in shaping careers and building teams that drive long-term success.";
  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 30; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex <= missionText.length) {
        setDisplayedText(missionText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);
    return () => clearInterval(typingInterval);
  }, []);
  return <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero section with text generation effect */}
        <section className="bg-alurion-primary text-white py-24 relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80)'
        }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/85"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-alurion-primary">Our Mission</h1>
            <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/30">
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-alurion-primary relative min-h-[120px]">
                {displayedText}
                <span className={`inline-block border-l-2 border-alurion-primary ml-0.5 h-[1em] align-middle animate-pulse ${isTypingComplete ? 'opacity-0' : 'opacity-100'}`}>|</span>
              </p>
              
              <div className={`transition-opacity duration-700 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-lg md:text-xl leading-relaxed mb-6 text-alurion-primary">
                  With a deep commitment to both the candidate's growth and the company's strategic goals, 
                  we ensure every match is not just a hire, but a transformative partnership that fosters
                  innovation, leadership, and sustainable excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About section with elegant design */}
        <section className="bg-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 pattern-bg-light opacity-10"></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-alurion-secondary/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-alurion-primary/5 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-alurion-primary text-center">About Us</h2>
              
              <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-xl border border-alurion-secondary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-5">
                    <h3 className="text-xl text-alurion-primary font-medium">Executive Experience</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We are a team of high-powered female executives with decades of experience leading
                      organizations across a diverse portfolio—from Fortune 5 companies to startups—and navigating
                      high-stakes challenges like M&A, global expansions, and technology transformations.
                    </p>
                  </div>
                  
                  <div className="space-y-5">
                    <h3 className="text-xl text-alurion-primary font-medium">Technology + Human Touch</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We combine the power of technology with the art of human connection to
                      redefine talent acquisition. By leveraging AI-driven efficiencies to streamline
                      processes, we create a seamless and data-informed hiring experience
                      while ensuring that every candidate interaction is personal, strategic, and
                      impactful.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 border-t border-gray-200 pt-8">
                  <blockquote className="italic text-lg text-gray-700 border-l-4 border-alurion-accent pl-6">
                    "Having walked in the shoes of our clients, we bring a unique, insider perspective to deliver tailored, 
                    results-driven talent solutions that directly impact business performance."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Members Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-alurion-primary text-center">Our Leadership Team</h2>
            <div className="max-w-6xl mx-auto">
              <TeamSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Mission;