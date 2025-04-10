
import React from 'react';
import Navigation from '../components/Navigation';
import { allTestimonials } from '../components/TestimonialsSection';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-alurion-primary opacity-5"></div>
            <div 
              className="absolute inset-0 bg-gradient-to-b from-white via-alurion-accent/10 to-white" 
              style={{ 
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            ></div>
          </div>

          <div className="container mx-auto relative z-10 px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-alurion-primary">Client Testimonials</h1>
              <div className="h-1 w-24 bg-alurion-accent mx-auto"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                See what our clients have to say about their experience working with Alurion Talent Group.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.author}-${index}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                  delay={index % 3}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Testimonials;
