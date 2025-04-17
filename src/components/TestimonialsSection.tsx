
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { allTestimonials } from './TestimonialsSection';

interface TestimonialsSectionProps {
  id?: string;
}

const TestimonialsSection = ({ id }: TestimonialsSectionProps) => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const featuredTestimonials = allTestimonials.filter(t => t.featured);
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id={id} className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-alurion-primary">
          What Our Clients Say
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={previousTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Display */}
          <div className="transition-all duration-300 ease-in-out">
            <TestimonialCard 
              quote={featuredTestimonials[currentTestimonial].quote}
              author={featuredTestimonials[currentTestimonial].author}
              position={featuredTestimonials[currentTestimonial].position}
              company={featuredTestimonials[currentTestimonial].company}
            />
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-alurion-primary w-4' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/testimonials">
            <Button variant="default" className="bg-alurion-primary hover:bg-alurion-primary/90">
              View All Testimonials
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
