
import React, { useState, useRef, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const testimonialImages = {
  jessica: '/public/lovable-uploads/48f14cff-408d-43b5-9fe3-635f773e0bef.png',
  juan: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  jani: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  theresa: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  ray: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  brian: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
};

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Select 6 featured testimonials for the homepage
  const testimonials: Testimonial[] = [
    {
      quote: "Monica is a true subject matter expert across all areas of talent acquisition strategy, policy, compliance, organizational design, and candidate experience. In addition, she is a strong mentor and develops her team members. She brings passion, integrity and a high bar for building sustainable thoughtful results that serve her business and its mission.",
      author: "Jessica Elders",
      position: "Vice President, Head of Human Resources",
      company: "The New York Times",
      image: testimonialImages.jessica
    },
    {
      quote: "For employers: if you are looking to build a new division and invest in talent acquisition instead of company acquisitions you should schedule some time with Monica. She worked with us handpicking our All inclusive talent and delivered the right people to accelerate our growth plans in record time. Right People selection and retention is more valuable and provides much better ROI.",
      author: "Juan Corvinos Solans",
      position: "Senior Vice President Development, Architecture, Design and Construction Latin America & Caribbean",
      company: "Hilton",
      image: testimonialImages.juan
    },
    {
      quote: "Monica is an outstanding talent in the Executive Recruiting space. She has worked on incredibly complex requisitions and successfully and consistently brings in outstanding talent. Not only is Monica able to 'close the deal', but she leads with a level of humanity and grace. She is an outstanding representative of and for Hilton. And, if that isn't enough, she is a pleasure to partner with – you definitely want Monica by your side!",
      author: "Jani Wilson, Ph.D.",
      position: "Global VP of HR Consulting",
      company: "Hilton",
      image: testimonialImages.jani
    },
    {
      quote: "I wish I could take Monica with me into every difficult search! I have worked closely with Monica for 2 years, and can confidently say that she is a great recruiting partner and does an exceptional job understanding her candidates - what they're looking for, what drives them, and ultimately, whether or not they would be a best fit for the company. We have hired great talent because of Monica's strong recruiting skill, and you would be lucky to have her exceptional talent behind any search.",
      author: "Theresa Graff",
      position: "Chief HR Officer",
      company: "MDVIP: Personalized Healthcare",
      image: testimonialImages.theresa
    },
    {
      quote: "Throughout my career I have worked with and for some of the best Talent Acquisition Leaders in the business. Without question, Monica Parodi is at the top of the list. The passion and care in which she leads is evident in everything that she does. Customers love how incredibly talented she is at identifying and delivering the very best candidates each and every time while managing searches with meticulous detail. Her teams love her for the unwavering support and understanding while building incredible teams and processes that help everyone to operate as efficiently as possible. Any organization who hires or partners with Monica will certainly benefit from her talent expertise, leadership and amazing poise. I have learned a tremendous amount from her and look forward to watching her continued success.",
      author: "Ray Inman",
      position: "Vice President | Technology Recruitment Program Mgmt",
      company: "Deutsche Bank via Robert Walters",
      image: testimonialImages.ray
    },
    {
      quote: "Melanie is a true leader! She has a gift for connecting with associates, colleagues and clients. She has successfully led a team through extreme organizational transition while delivering exceptional results. Melanie is also a \"change agent\" and not afraid to challenge common belief to try new and different approaches to better current processes or partnerships.",
      author: "Jana R Smyth",
      position: "VP Global Talent Acquisition",
      company: "ICF",
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const paginatedTestimonials = testimonials.slice(
    page * itemsPerPage, 
    (page * itemsPerPage) + itemsPerPage
  );

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextPage();
    }, 8000);

    return () => clearInterval(timer);
  }, [page, totalPages]);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-alurion-primary">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-alurion-accent mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why leading companies trust Alurion Talent Group to solve their most challenging talent acquisition needs.
          </p>
        </motion.div>
        
        <div 
          className="relative overflow-hidden"
          ref={scrollContainerRef}
        >
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {paginatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.author}-${page}-${index}`}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                delay={index}
              />
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-white border border-alurion-accent/30 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-alurion-accent hover:text-white"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    page === i 
                      ? 'bg-alurion-accent w-6' 
                      : 'bg-gray-300 hover:bg-alurion-accent/50'
                  }`}
                  aria-label={`Go to testimonial page ${i + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-white border border-alurion-accent/30 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-alurion-accent hover:text-white"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/testimonials"
            className="bg-alurion-primary text-white px-8 py-3 rounded-md font-medium hover:bg-alurion-primary/90 transition-all flex items-center gap-2"
          >
            View All Testimonials
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
