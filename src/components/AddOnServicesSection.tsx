
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AddOnServicesSection = () => {
  const services = [
    "Customized programs designed to meet your unique needs and goals",
    "Seamless onboarding support to ensure smooth transitions and rapid integration",
    "New leader assimilation to build confidence, team unity and drive early impact",
    "Comprehensive 360-reviews for actionable insights and growth planning",
    "TalentTelligent AI-powered services backed by scientifically validated knowledge, skill, and attribute libraries—not just traditional psychometric tools",
    "Regular check-ins to maintain focus, accountability, and progress",
    "Clear ROI with measurable outcomes aligned to organizational priorities"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-alurion-primary mb-4">Add On Services for Executive Search</h2>
          <div className="h-1 w-24 bg-alurion-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-alurion-secondary mb-6 text-center">
              Accelerate Success with Tailored Talent Coaching & Development
            </h3>
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-2 bg-alurion-primary/10 text-alurion-primary rounded-full font-medium mx-2 mb-2">3 month</span>
              <span className="inline-block px-4 py-2 bg-alurion-primary/10 text-alurion-primary rounded-full font-medium mx-2 mb-2">6 month</span>
              <span className="inline-block px-4 py-2 bg-alurion-primary/10 text-alurion-primary rounded-full font-medium mx-2 mb-2">9 month</span>
              <span className="inline-block px-4 py-2 bg-alurion-primary/10 text-alurion-primary rounded-full font-medium mx-2 mb-2">12 month</span>
              <p className="text-gray-600 mt-2">packages available</p>
            </div>

            <ul className="space-y-4 mt-8">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-alurion-accent flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-gray-700">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-alurion-primary text-white rounded-md font-medium hover:bg-alurion-primary/90 transition-all"
            >
              Learn More About Our Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOnServicesSection;
