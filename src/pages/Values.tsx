
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ValueProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold mb-4 text-alurion-secondary">{title}</h3>
      <p className="text-gray-700 text-lg">{description}</p>
    </div>
  );
};

const Values = () => {
  const values = [
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards, delivering exceptional results with precision and purpose. Our commitment to excellence ensures that every connection we make drives meaningful impact and long-term success."
    },
    {
      title: "Integrity",
      description: "Trust is the foundation of everything we do. We act with transparency, honesty, and accountability, fostering relationships built on mutual respect and ethical decision-making."
    },
    {
      title: "Grit",
      description: "Success requires resilience. We embrace challenges with determination and persistence, pushing beyond obstacles to achieve transformative outcomes for our clients and candidates."
    },
    {
      title: "Now",
      description: "Momentum drives success. We act with urgency and precision, ensuring that businesses and talent connect at the right moment to seize opportunities and create lasting impact."
    },
    {
      title: "Curiosity",
      description: "We thrive on discovery. By asking the right questions and challenging conventional thinking, we uncover new possibilities that drive growth, innovation, and strategic advantage."
    },
    {
      title: "Adaptability",
      description: "We embrace change with agility, adjusting strategies to meet evolving business needs and market shifts. By staying ahead of trends, we ensure our solutions remain effective, timely and impactful."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="bg-alurion-secondary text-white py-20 relative">
          <div className="absolute inset-0 pattern-bg-dark opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Our Values</h1>
            <p className="text-lg md:text-xl text-center max-w-4xl mx-auto">
              At Alurion Talent Group, our values guide everything we do. They shape our approach to talent acquisition, 
              inform our partnerships, and drive our commitment to excellence.
            </p>
          </div>
        </section>
        
        <section className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 pattern-bg-light opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} title={value.title} description={value.description} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Values;
