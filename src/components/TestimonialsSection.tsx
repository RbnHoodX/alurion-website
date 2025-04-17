
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { Link } from 'react-router-dom';

interface TestimonialsSectionProps {
  id?: string;
}

export const allTestimonials = [
  {
    quote: "Alurion Talent Group truly understands the unique needs of our organization. Their team went above and beyond to find the perfect fit for our company culture and values.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "Tech Solutions Inc.",
    featured: true
  },
  {
    quote: "We were struggling to find top-tier talent in a competitive market. Alurion's strategic approach and extensive network delivered exceptional candidates that exceeded our expectations.",
    author: "Michael Davis",
    position: "VP of Engineering",
    company: "Innovatech Corp",
    featured: true
  },
  {
    quote: "The level of professionalism and dedication demonstrated by Alurion Talent Group is unmatched. They provided invaluable guidance throughout the entire recruitment process, ensuring a seamless experience.",
    author: "Emily White",
    position: "HR Director",
    company: "Global Enterprises Ltd.",
    featured: true
  }
];

const TestimonialsSection = ({ id }: TestimonialsSectionProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  
  const testimonial = allTestimonials[currentTestimonial];
  
  return <section id={id} className="section bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="section-title text-center">What Our Clients Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <TestimonialCard 
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
            company={testimonial.company}
          />
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/testimonials" className="inline-flex items-center bg-alurion-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all">
            View All Testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
