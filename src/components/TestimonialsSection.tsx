
import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  featured?: boolean;
}

export const allTestimonials: Testimonial[] = [
  {
    quote: "Monica is a true subject matter expert across all areas of talent acquisition strategy, policy, compliance, organizational design, and candidate experience. In addition, she is a strong mentor and develops her team members. She brings passion, integrity and a high bar for building sustainable thoughtful results that serve her business and its mission.",
    author: "Jessica Elders",
    position: "Vice President, Head of Human Resources",
    company: "The New York Times",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    featured: true
  },
  {
    quote: "For employers: if you are looking to build a new division and invest in talent acquisition instead of company acquisitions you should schedule some time with Monica. She worked with us handpicking our All inclusive talent and delivered the right people to accelerate our growth plans in record time. Right People selection and retention is more valuable and provides much better ROI.",
    author: "Juan Corvinos Solans",
    position: "Senior Vice President Development, Architecture, Design and Construction Latin America & Caribbean",
    company: "Hilton",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    featured: true
  },
  {
    quote: "Monica is an outstanding talent in the Executive Recruiting space. She has worked on incredibly complex requisitions and successfully and consistently brings in outstanding talent. Not only is Monica able to 'close the deal', but she leads with a level of humanity and grace. She is an outstanding representative of and for Hilton. And, if that isn't enough, she is a pleasure to partner with – you definitely want Monica by your side!",
    author: "Jani Wilson, Ph.D.",
    position: "Global VP of HR Consulting",
    company: "Hilton",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    featured: true
  },
  {
    quote: "I wish I could take Monica with me into every difficult search! I have worked closely with Monica for 2 years, and can confidently say that she is a great recruiting partner and does an exceptional job understanding her candidates - what they're looking for, what drives them, and ultimately, whether or not they would be a best fit for the company. We have hired great talent because of Monica's strong recruiting skill, and you would be lucky to have her exceptional talent behind any search.",
    author: "Theresa Graff",
    position: "Chief HR Officer",
    company: "MDVIP: Personalized Healthcare",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    featured: true
  },
  {
    quote: "Throughout my career I have worked with and for some of the best Talent Acquisition Leaders in the business. Without question, Monica Parodi is at the top of the list. The passion and care in which she leads is evident in everything that she does. Customers love how incredibly talented she is at identifying and delivering the very best candidates each and every time while managing searches with meticulous detail. Her teams love her for the unwavering support and understanding while building incredible teams and processes that help everyone to operate as efficiently as possible. Any organization who hires or partners with Monica will certainly benefit from her talent expertise, leadership and amazing poise.",
    author: "Ray Inman",
    position: "Vice President | Technology Recruitment Program Mgmt",
    company: "Deutsche Bank via Robert Walters",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    featured: true
  },
  {
    quote: "In a business environment packed with recruiters, Monica Parodi distinguishes herself and her company as head and shoulders above the rest. I've worked with Monica a few times over the last few years in filling consultative sales positions and I've been extremely pleased with the results every time. There are many traits Monica has that you can rely on. First, she won't waste your time. None of her candidates ever left my office with me scratching my head lamenting the lost hour I just spent on an interview. Monica hones right in on qualifications, talents and corporate cultural fit to put the best folks in front of you, without exception!",
    author: "Brian Michaud",
    position: "President, ADP HRO and Smart Compliance",
    company: "ADP",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Monica has single-handedly shaped our National Sales Force. I had absolutely no doubt that she would rise to the challenge because she has been impressing me for the last 8 years placing amazing candidates in the Fortune 500 Corporate World. Perhaps what impresses me the most is her ability to utilize creativity in enticing 'thoroughbreds' and 'athletes' to simply listen to her pitch when they would be otherwise content in their current environment.",
    author: "Glynn Frechette",
    position: "Head of Paychex, PEO",
    company: "Paychex",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Monica is an experienced professional who gets results. She is very talented at sourcing into firms, versus the more common vetting of just posted information on candidates via the boards. However, the key attribute that she possesses beyond these is her ability to articulate what you wish to be known to the candidate; Being convincing and creative while attracting the best isn't an easy task.",
    author: "James Sheridan",
    position: "Outsourced Vice President of Sales",
    company: "Xceleration",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Monica is a great resource that takes the time to understand your needs and match your needs with a prospect's needs and talent! She is thorough, reliable, responsible, understanding and values matching the right talent with the right Company.",
    author: "Wendy Boyd",
    position: "Chief Distribution Officer",
    company: "World Financial Group",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Monica has an incredible eye for talent and has served as a sage advisor and partner. She has been absolutely clutch in identifying and delivering candidates to fill key roles. The war for talent is real and Monica is a great ally to have!",
    author: "Oral Muir",
    position: "Vice President, Partnerships, Experiences, & Distribution",
    company: "Hilton",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "There are skilled people in our industry, no doubt. But when your level of humanity is immense then you fall into another category. Monica falls under the later one. Increíble use of empathy and a great professional. I have loved working with Monica as she brings the (so much needed) application of heart and brain to everything she does. Monica is a truly unique human being and incredibly talented.",
    author: "Alvaro Valeriani",
    position: "Chief Commercial Officer",
    company: "Awasi Experiences",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Monica is exactly the type of person you want on your side as an ally and mentor. She has strength, incredible grace, and exceptional recruiting experience that isn't typically found in one person. What a pleasure and honor to watch her in action, soaking up every minute like a sponge! She was able to turn around sensitive situations that no one else could seem to master with her excellent influencing and relationship management prowess.",
    author: "Erin Reilly Peneschi",
    position: "Sr. Manager, Executive Talent Research Recruitment",
    company: "Hilton",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Impossible to capture with words the value and positive experience it is to work with Monica. In short, regardless of the challenge or goal you want Monica on your team. As a practitioner, I haven't come across many, if any, recruiters that are as respected and valued as Monica is. Clients and candidates alike sing her praises, seek her counsel and rely on her judgement.",
    author: "Soheil Saeed",
    position: "Manager, Diversity & Strategic Search",
    company: "General Mills",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Melanie is a true leader! She has a gift for connecting with associates, colleagues and clients. She has successfully led a team through extreme organizational transition while delivering exceptional results. Melanie is also a 'change agent' and not afraid to challenge common belief to try new and different approaches to better current processes or partnerships.",
    author: "Jana R Smyth",
    position: "VP Global Talent Acquisition",
    company: "ICF",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Melanie has been an exceptional business partner. She has gone beyond the scope of her role to ensure a win-win for our mutual organizations. Her ability to step back and see the strategic picture and communicate with a diverse community of stakeholders up and down the management chain is a rare and powerful asset to any organization.",
    author: "Ira Grossman",
    position: "Software Entrepreneur & Investor",
    company: "Technology Investment",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Melanie is an excellent business partner. She is an astute listener and able to transcend content to action. I would strongly recommend Melanie for her knowledge, skill and attitude. Definitely someone you want on your team.",
    author: "Jeff Vandiver",
    position: "EVP Managing Director of Growth - Americas",
    company: "AMS",
    image: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  // Display only the first 3 testimonials on the home page
  const displayedTestimonials = allTestimonials.slice(0, 3);

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
          {displayedTestimonials.map((testimonial, index) => (
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
