
import React from 'react';

const IndustriesSection = () => {
  const industries = [
    "Life Sciences & Healthcare", 
    "Technology & AI", 
    "Genetics", 
    "Manufacturing", 
    "Software / SAAS",
    "Hospitality & Tourism", 
    "Retail", 
    "Journalism", 
    "Professional Services", 
    "Finance", 
    "Sales", 
    "Real Estate",
    "Consumer Packaged Goods", 
    "Media", 
    "Advertising", 
    "HR Services", 
    "Games", 
    "Insurance"
  ];

  const functions = [
    "Sales", 
    "Technology", 
    "Product", 
    "Design", 
    "Marketing", 
    "Advertising", 
    "Strategy", 
    "HR", 
    "Finance", 
    "Legal",
    "Operations", 
    "Clinician", 
    "Real Estate Development", 
    "Commercial", 
    "Communications", 
    "Governance", 
    "Journalism", 
    "Food & Beverage"
  ];
  
  return (
    <section id="industries" className="section bg-alurion-primary">
      <div className="container mx-auto">
        <h2 className="section-title text-alurion-secondary">Industries & Functions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-alurion-secondary">Industry Experience</h3>
            <p className="text-gray-700 mb-6">
              Within these industries, we are able to prepare your workforce for a change in control, for AI and
              technology enabled systems, as well as transformation of cultural work involved with globalization.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white px-4 py-3 rounded-md shadow-sm">
                  <p className="text-alurion-secondary">{industry}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-alurion-secondary">Functions We've Recruited For</h3>
            <p className="text-gray-700 mb-6">
              Our expertise spans across various functional areas, ensuring we find the right talent for specialized roles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {functions.map((func, index) => (
                <div key={index} className="bg-white px-4 py-3 rounded-md shadow-sm">
                  <p className="text-alurion-secondary">{func}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
