
import React from 'react';

const MissionSection = () => {
  return (
    <section id="mission" className="section bg-white text-alurion-primary relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-fixed bg-center opacity-10" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80)'
      }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-alurion-primary mb-12 text-center">Our Mission</h2>
          
          <div className="bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-sm p-10 md:p-14 rounded-xl shadow-xl border border-alurion-secondary/10">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-center">
              <span className="font-semibold text-alurion-secondary">Our mission</span> is to create lasting impact by forging meaningful connections between exceptional
              talent and visionary organizations.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <div className="flex-1 p-6 bg-white/50 rounded-lg border-t border-l border-white">
                <h3 className="text-lg font-medium text-alurion-primary mb-3">Elevating Potential</h3>
                <p className="text-alurion-primary/90">
                  We elevate potential and empower organizations through
                  tailored talent solutions that span recruitment, leadership development, and organizational
                  effectiveness.
                </p>
              </div>
              
              <div className="flex-1 p-6 bg-white/50 rounded-lg border-t border-l border-white">
                <h3 className="text-lg font-medium text-alurion-primary mb-3">Building Excellence</h3>
                <p className="text-alurion-primary/90">
                  As trusted advisors, we partner with clients to cultivate resilient teams, unlock growth,
                  and foster enduring excellence across industries and markets.
                </p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed italic border-l-4 border-alurion-accent pl-6 max-w-3xl mx-auto">
              "We don't just fill positions—we forge meaningful connections that transform organizations 
              and elevate careers to new heights."
            </p>
          </div>
        </div>
      </div>
      
      {/* Abstract decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-alurion-accent/10 -z-10"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-alurion-accent/5 -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full border border-alurion-secondary/20 -z-10"></div>
    </section>
  );
};

export default MissionSection;
