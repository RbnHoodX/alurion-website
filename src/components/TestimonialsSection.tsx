
import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  executive: 'monica' | 'melanie';
}

const TestimonialsSection = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'monica' | 'melanie'>('all');

  const testimonials: Testimonial[] = [
    {
      quote: "Monica is a true subject matter expert across all areas of talent acquisition strategy, policy, compliance, organizational design, and candidate experience. In addition, she is a strong mentor and develops her team members. She brings passion, integrity and a high bar for building sustainable thoughtful results that serve her business and its mission.",
      author: "Jessica Elders",
      position: "Vice President, Head of Human Resources",
      company: "The New York Times",
      executive: "monica"
    },
    {
      quote: "For employers: if you are looking to build a new division and invest in talent acquisition instead of company acquisitions you should schedule some time with Monica. She worked with us handpicking our All inclusive talent and delivered the right people to accelerate our growth plans in record time. Right People selection and retention is more valuable and provides much better ROI.",
      author: "Juan Corvinos Solans",
      position: "Senior Vice President Development, Architecture, Design and Construction Latin America & Caribbean",
      company: "Hilton",
      executive: "monica"
    },
    {
      quote: "Monica is an outstanding talent in the Executive Recruiting space. She has worked on incredibly complex requisitions and successfully and consistently brings in outstanding talent. Not only is Monica able to 'close the deal', but she leads with a level of humanity and grace. She is an outstanding representative of and for Hilton. And, if that isn't enough, she is a pleasure to partner with – you definitely want Monica by your side!",
      author: "Jani Wilson, Ph.D.",
      position: "Global VP of HR Consulting",
      company: "Hilton",
      executive: "monica"
    },
    {
      quote: "Melanie is a true leader! She has a gift for connecting with associates, colleagues and clients. She has successfully led a team through extreme organizational transition while delivering exceptional results. Melanie is also a \"change agent\" and not afraid to challenge common belief to try new and different approaches to better current processes or partnerships.",
      author: "Jana R Smyth",
      position: "VP Global Talent Acquisition",
      company: "ICF",
      executive: "melanie"
    },
    {
      quote: "Melanie has been an exceptional business partner. She has gone beyond the scope of her role to ensure a win-win for our mutual organizations. Her ability to step back and see the strategic picture and communicate with a diverse community of stakeholders up and down the management chain is a rare and powerful asset to any organization. I would highly recommend Melanie as a pro-active business leader and true team player.",
      author: "Ira Grossman",
      position: "Software Entrepreneur & Investor",
      company: "",
      executive: "melanie"
    },
    {
      quote: "Melanie is an excellent business partner. She is an astute listener and able to transcend content to action. I would strongly recommend Melanie for her knowledge, skill and attitude. Definitely someone you want on your team.",
      author: "Jeff Vandiver",
      position: "EVP Managing Director of Growth - Americas",
      company: "AMS",
      executive: "melanie"
    }
  ];

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(testimonial => testimonial.executive === activeFilter);

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Testimonials</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'all'
                  ? 'bg-alurion-secondary text-white'
                  : 'bg-white text-alurion-secondary hover:bg-gray-100'
              } border border-gray-200 rounded-l-lg`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('monica')}
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'monica'
                  ? 'bg-alurion-secondary text-white'
                  : 'bg-white text-alurion-secondary hover:bg-gray-100'
              } border-t border-b border-r border-gray-200`}
            >
              Monica's Testimonials
            </button>
            <button
              onClick={() => setActiveFilter('melanie')}
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'melanie'
                  ? 'bg-alurion-secondary text-white'
                  : 'bg-white text-alurion-secondary hover:bg-gray-100'
              } border-t border-b border-r border-gray-200 rounded-r-md`}
            >
              Melanie's Testimonials
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="italic text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-bold text-alurion-secondary">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                {testimonial.company && <p className="text-sm text-gray-600">{testimonial.company}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
