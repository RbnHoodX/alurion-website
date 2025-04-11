
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-80"></div>
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-alurion-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-alurion-secondary/10 blur-3xl"></div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">About Us</h2>
        
        {/* Card with backdrop blur */}
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/70 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are a female owned team of high-powered executives, with decades of experience leading 
            organizations across a diverse portfolio—from Fortune 5 companies to startups—and navigating 
            high-stakes challenges like M&A, global expansions, and technology transformations. Having 
            walked in the shoes of our clients, we bring a unique, insider perspective to deliver tailored, 
            results-driven talent solutions that directly impact business performance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We combine the power of technology with the art of human connection to redefine talent 
            strategies. By leveraging AI-driven efficiencies to streamline processes, we create a seamless 
            and data-informed hiring experience while ensuring that every candidate interaction is personal, 
            strategic, and impactful. Our expertise lies in not only identifying top talent but also in engaging, 
            guiding, and closing candidates with a tailored, human-first approach. In a world full of 
            automation, we bring the critical balance of precision and persuasion, ensuring that businesses 
            secure the right talent with both speed and substance.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border border-alurion-secondary/20 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full border-2 border-alurion-primary/10 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default AboutSection;
