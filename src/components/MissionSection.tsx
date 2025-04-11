import React from 'react';
const MissionSection = () => {
  return <section id="mission" className="section bg-white text-alurion-primary relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-fixed bg-center opacity-10" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80)'
    }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-alurion-primary mb-12 text-center">Our Mission</h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-xl">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-center">
              <span className="font-semibold text-alurion-secondary">Our mission</span> is to create lasting impact by forging meaningful connections between exceptional
              talent and visionary organizations.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-center">
              We elevate potential and empower organizations through
              tailored talent solutions that span recruitment, leadership development, and organizational
              effectiveness.
            </p>
            <p className="text-lg leading-relaxed italic border-l-4 border-alurion-accent pl-6 max-w-3xl mx-auto">
              "As trusted advisors, we partner with clients to cultivate resilient teams, unlock growth,
              and foster enduring excellence."
            </p>
          </div>
        </div>
      </div>
      
      {/* Abstract decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-alurion-accent/10 -z-10"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-alurion-accent/5 -z-10"></div>
    </section>;
};
export default MissionSection;