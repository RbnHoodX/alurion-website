
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Mission = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="bg-alurion-secondary text-white py-20 relative">
          <div className="absolute inset-0 pattern-bg-dark opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Our Mission</h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Our mission is to create lasting impact by forging meaningful connections
                between exceptional talent and visionary organizations. We go beyond
                placement; we are dedicated partners in shaping careers and building
                teams that drive long-term success.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                With a deep commitment to both the candidate's growth and the company's strategic goals, 
                we ensure every match is not just a hire, but a transformative partnership that fosters
                innovation, leadership, and sustainable excellence.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-white py-20 relative">
          <div className="absolute inset-0 pattern-bg-light opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-alurion-secondary text-center">About Us</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a team of high-powered female executives with decades of experience leading
                organizations across a diverse portfolio—from Fortune 5 companies to startups—and navigating
                high-stakes challenges like M&A, global expansions, and technology transformations. Having
                walked in the shoes of our clients, we bring a unique, insider perspective to deliver tailored,
                results-driven talent solutions that directly impact business performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine the power of technology with the art of human connection to
                redefine talent acquisition. By leveraging AI-driven efficiencies to streamline
                processes, we create a seamless and data-informed hiring experience
                while ensuring that every candidate interaction is personal, strategic, and
                impactful. Our expertise lies in not only identifying top talent but also in
                engaging, guiding, and closing candidates with a tailored, human-first
                approach. In a world full of automation, we bring the critical balance of
                precision and persuasion, ensuring that businesses secure the right talent
                with both speed and substance.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
