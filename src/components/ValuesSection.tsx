
import React from 'react';

const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      <h3 className="text-xl font-bold mb-3 text-alurion-secondary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ValuesSection = () => {
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
    <section id="values" className="section pattern-bg-dark">
      <div className="absolute inset-0 bg-alurion-primary/40"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
