
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
  featured?: boolean;
}

const testimonialImages = {
  jessica: '/public/lovable-uploads/48f14cff-408d-43b5-9fe3-635f773e0bef.png',
  juan: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  jani: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  theresa: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  ray: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  brian: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  monica: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  melanie: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  oral: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  alvaro: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  erin: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  soheil: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  jana: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  ira: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  jeff: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
};

// This is the list of all testimonials - we'll export it for use in the Testimonials page
export const allTestimonials: Testimonial[] = [
  {
    quote: "Monica is a true subject matter expert across all areas of talent acquisition strategy, policy, compliance, organizational design, and candidate experience. In addition, she is a strong mentor and develops her team members. She brings passion, integrity and a high bar for building sustainable thoughtful results that serve her business and its mission.",
    author: "Jessica Elders",
    position: "Vice President, Head of Human Resources",
    company: "The New York Times",
    image: testimonialImages.jessica,
    featured: true
  },
  {
    quote: "For employers: if you are looking to build a new division and invest in talent acquisition instead of company acquisitions you should schedule some time with Monica. She worked with us handpicking our All inclusive talent and delivered the right people to accelerate our growth plans in record time. Right People selection and retention is more valuable and provides much better ROI.",
    author: "Juan Corvinos Solans",
    position: "Senior Vice President Development, Architecture, Design and Construction Latin America & Caribbean",
    company: "Hilton",
    image: testimonialImages.juan,
    featured: true
  },
  {
    quote: "Monica is an outstanding talent in the Executive Recruiting space. She has worked on incredibly complex requisitions and successfully and consistently brings in outstanding talent. Not only is Monica able to 'close the deal', but she leads with a level of humanity and grace. She is an outstanding representative of and for Hilton. And, if that isn't enough, she is a pleasure to partner with – you definitely want Monica by your side!",
    author: "Jani Wilson, Ph.D.",
    position: "Global VP of HR Consulting",
    company: "Hilton",
    image: testimonialImages.jani,
    featured: true
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
    quote: "Monica holds herself to the highest standard of integrity in all that she does. In my 20 years of executive recruiting, I have had the privilege of working with several thousand recruiters across the globe, and I can say without equivocation, Monica is one of the best. Her unique combination of recruiting expertise, business savvy, and understanding of the nuances of organizations in general make her one of the best talent acquisition leaders I have worked with, period.",
    author: "Brian Morace",
    position: "Managing Director",
    company: "Russell Reynolds Associates",
    image: testimonialImages.brian
  },
  {
    quote: "Monica is one of the best recruiting professionals I've had the pleasure to work with. She has a keen sense of identifying talent and matching that talent with the appropriate opportunity. She's adept at working with hiring managers to understand their requirements and advising them on realistic expectations in the marketplace. I would jump at the chance to work with Monica again!",
    author: "Michael Brown",
    position: "Senior Director, Human Resources",
    company: "Hilton",
    image: testimonialImages.monica
  },
  {
    quote: "In a business environment packed with recruiters, Monica Parodi distinguishes herself and her company as head and shoulders above the rest. I've worked with Monica a few times over the last few years in filling consultative sales positions and I've been extremely pleased with the results every time. There are many traits Monica has that you can rely on. First, she won't waste your time. None of her candidates ever left my office with me scratching my head lamenting the lost hour I just spent on an interview. Monica hones right in on qualifications, talents and corporate cultural fit to put the best folks in front of you, without exception! Secondly, you will never question her professionalism. If Monica says she is going to do something, you can rely on it. She is an excellent communicator and has superb follow up skills. She never over promises and always exceeds expectations. Lastly, and what really matters, Monica gets results. Many of my colleagues have also partnered with Monica over the years and we all keep coming back. There is no better recommendation I can give that trumps the fact that I am a repeat customer. Whether you have hiring needs or are looking for the right career opportunity, look no further than Monica Parodi.",
    author: "Brian Michaud",
    position: "President",
    company: "ADP HRO and Smart Compliance"
  },
  {
    quote: "Monica has single-handedly shaped our National Sales Force. I had absolutely no doubt that she would rise to the challenge because she has been impressing me for the last 8 years placing amazing candidates in the Fortune 500 Corporate World. Perhaps what impresses me the most is her ability to utilize creativity in enticing \"thoroughbreds\" and \"athletes\" to simply listen to her pitch when they would be otherwise content in their current environment. Well, when the \"pitch\" is on, her personal credibility and integrity have a chance to shine. Her passion for her client's company is obvious to all candidates, which prepares them immensely for their very first meeting with me. Monica is a highly selective and discerning individual that makes my job easier as my face-to-face interviews are always with A+ candidates. Monica is probably going to shoot me for this one, but she knows no time zone restrictions!!!! She sacrifices her personal time on a very regular basis with clients and candidates alike in an attempt to meet many demanding schedules across the country. It is a pleasure to recommend Monica as a results-driven All-Star.",
    author: "Glynn Frechette",
    position: "Head of Paychex",
    company: "PEO"
  },
  {
    quote: "Monica is an experienced professional who gets results. She is very talented at sourcing into firms, versus the more common vetting of just posted information on candidates via the boards. However, the key attribute that she possesses beyond these is her ability to articulate what you wish to be known to the candidate; Being convincing and creative while attracting the best isn't an easy task and she's highly competent in explaining what your company's attributes are, matching them with the right person and moving a prospective person along the process effectively. An intelligent and resourceful partner who is exemplary at follow-up, she gets the job done right in a very timely manner. The final point I'll make is the retention of the employee and overall performance of those individuals--> notably better than most.",
    author: "James Sheridan",
    position: "Outsourced Vice President of Sales",
    company: "Xceleration"
  },
  {
    quote: "Monica is a great resource that takes the time to understand your needs and match your needs with a prospect's needs and talent! She is thorough, reliable, responsible, understanding and values matching the right talent with the right Company.",
    author: "Wendy Boyd",
    position: "Chief Distribution Officer",
    company: "World Financial Group"
  },
  {
    quote: "Monica has an incredible eye for talent and has served as a sage advisor and partner. She has been absolutely clutch in identifying and delivering candidates to fill key roles. The war for talent is real and Monica is a great ally to have!",
    author: "Oral Muir",
    position: "Vice President, Partnerships, Experiences, & Distribution",
    company: "Hilton",
    image: testimonialImages.oral
  },
  {
    quote: "There are skilled people in our industry, no doubt. But when your level of humanity is immense then you fall into another category. Monica falls under the later one. Increíble use of empathy and a great professional. I have loved working with Monica as she brings the (so much needed) application of heart and brain to everything she does. Monica is a truly unique human being and incredibly talented. I had the pleasure of working with her and there is not one thing I would recommend for her to change.",
    author: "Alvaro Valeriani",
    position: "Chief Commercial Officer",
    company: "Awasi Experiences",
    image: testimonialImages.alvaro
  },
  {
    quote: "Monica is exactly the type of person you want on your side as an ally and mentor. She has strength, incredible grace, and exceptional recruiting experience that isn't typically found in one person. What a pleasure and honor to watch her in action, soaking up every minute like a sponge! She was able to turn around sensitive situations that no one else could seem to master with her excellent influencing and relationship management prowess. Monica is the first to step-up when you need an extra person on your side or just to lend a sympathetic ear. We partnered together on many challenging executive roles where she inspired me to dig deep and to stick with it, even when the outcome was hard to see. It's been a delight partnering and reporting to Monica over the last couple of years. I have learned a tremendous amount from her and look forward to learning more!",
    author: "Erin Reilly Peneschi",
    position: "Sr. Manager, Executive Talent Research Recruitment",
    company: "Hilton",
    image: testimonialImages.erin
  },
  {
    quote: "Impossible to capture with words the value and positive experience it is to work with Monica. In short, regardless of the challenge or goal you want Monica on your team. As a practitioner, I haven't come across many, if any, recruiters that are as respected and valued as Monica is. Clients and candidates alike sing her praises, seek her counsel and rely on her judgement. She leads searches with unrivaled care, passion and integrity and the results time and time again yield both immediate and long term value. Everyone should be so lucky as I have been to work with her.",
    author: "Soheil Saeed",
    position: "Manager, Diversity & Strategic Search",
    company: "General Mills",
    image: testimonialImages.soheil
  },
  {
    quote: "Melanie is a true leader! She has a gift for connecting with associates, colleagues and clients. She has successfully led a team through extreme organizational transition while delivering exceptional results. Melanie is also a \"change agent\" and not afraid to challenge common belief to try new and different approaches to better current processes or partnerships.",
    author: "Jana R Smyth",
    position: "VP Global Talent Acquisition",
    company: "ICF",
    image: testimonialImages.jana
  }
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Use all testimonials but display only 3 at a time on homepage
  const testimonials = allTestimonials;
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
