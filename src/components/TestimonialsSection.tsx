import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Alurion Talent Group revolutionized our executive hiring process. Their strategic approach and deep understanding of our industry allowed us to secure transformative leaders who have driven measurable impact across our organization.",
      author: "Sarah Johnson",
      position: "Chief Human Resources Officer",
      company: "Global Tech Innovations",
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Working with Alurion has been a game-changer for our talent strategy. Their consultative approach and commitment to understanding our unique culture has resulted in exceptional hires that align perfectly with our values and vision.",
      author: "Michael Chen",
      position: "CEO",
      company: "Nexus Health Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The Alurion team's expertise in talent acquisition and development has been invaluable to our organization's growth. Their ability to identify candidates who bring both technical excellence and cultural alignment has strengthened our leadership team immeasurably.",
      author: "Jennifer Rodriguez",
      position: "COO",
      company: "Momentum Financial",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Alurion doesn't just fill positions—they build foundations for success. Their holistic approach to talent strategy has empowered our team with the right leaders at the right time, driving innovation and sustainable growth.",
      author: "David Patterson",
      position: "Founder",
      company: "Elevate Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "What sets Alurion apart is their genuine partnership approach. They took the time to deeply understand our challenges, culture, and aspirations, then delivered talent solutions that have transformed our organization's capabilities.",
      author: "Priya Sharma",
      position: "VP of Talent",
      company: "Catalyst Innovations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-alurion-primary mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-24 bg-alurion-accent mx-auto"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            We pride ourselves on the strong relationships we build with our clients.
            Here's what they have to say about working with Alurion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <p className="text-gray-700 italic text-lg">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-alurion-primary">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
