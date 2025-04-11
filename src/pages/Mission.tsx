import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const Mission = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero section with background image */}
        <section className="bg-alurion-primary text-white py-24 relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80)'
        }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/65"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-alurion-secondary">Our Mission</h1>
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
        
        {/* About section with image */}
        <section className="bg-white py-20 relative">
          <div className="absolute inset-0 pattern-bg-light opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2 md:order-2">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80" alt="Professional team meeting" className="w-full h-auto" />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-alurion-primary">About Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We are a team of high-powered female executives with decades of experience leading
                  organizations across a diverse portfolio—from Fortune 5 companies to startups—and navigating
                  high-stakes challenges like M&A, global expansions, and technology transformations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We combine the power of technology with the art of human connection to
                  redefine talent acquisition. By leveraging AI-driven efficiencies to streamline
                  processes, we create a seamless and data-informed hiring experience
                  while ensuring that every candidate interaction is personal, strategic, and
                  impactful.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Mission;