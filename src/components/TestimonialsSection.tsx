
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
  const [showAll, setShowAll] = useState(false);

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
      quote: "I wish I could take Monica with me into every difficult search! I have worked closely with Monica for 2 years, and can confidently say that she is a great recruiting partner and does an exceptional job understanding her candidates - what they're looking for, what drives them, and ultimately, whether or not they would be a best fit for the company. We have hired great talent because of Monica's strong recruiting skill, and you would be lucky to have her exceptional talent behind any search.",
      author: "Theresa Graff",
      position: "Chief HR Officer",
      company: "MDVIP: Personalized Healthcare",
      executive: "monica"
    },
    {
      quote: "Throughout my career I have worked with and for some of the best Talent Acquisition Leaders in the business. Without question, Monica Parodi is at the top of the list. The passion and care in which she leads is evident in everything that she does. Customers love how incredibly talented she is at identifying and delivering the very best candidates each and every time while managing searches with meticulous detail. Her teams love her for the unwavering support and understanding while building incredible teams and processes that help everyone to operate as efficiently as possible. Any organization who hires or partners with Monica will certainly benefit from her talent expertise, leadership and amazing poise. I have learned a tremendous amount from her and look forward to watching her continued success.",
      author: "Ray Inman",
      position: "Vice President | Technology Recruitment Program Mgmt",
      company: "Deutsche Bank via Robert Walters",
      executive: "monica"
    },
    {
      quote: "In a business environment packed with recruiters, Monica Parodi distinguishes herself and her company as head and shoulders above the rest. I've worked with Monica a few times over the last few years in filling consultative sales positions and I've been extremely pleased with the results every time. There are many traits Monica has that you can rely on. First, she won't waste your time. None of her candidates ever left my office with me scratching my head lamenting the lost hour I just spent on an interview. Monica hones right in on qualifications, talents and corporate cultural fit to put the best folks in front of you, without exception! Secondly, you will never question her professionalism. If Monica says she is going to do something, you can rely on it. She is an excellent communicator and has superb follow up skills. She never over promises and always exceeds expectations. Lastly, and what really matters, Monica gets results. Many of my colleagues have also partnered with Monica over the years and we all keep coming back. There is no better recommendation I can give that trumps the fact that I am a repeat customer. Whether you have hiring needs or are looking for the right career opportunity, look no further than Monica Parodi.",
      author: "Brian Michaud",
      position: "President, ADP HRO and Smart Compliance",
      company: "",
      executive: "monica"
    },
    {
      quote: "Monica has single-handedly shaped our National Sales Force. I had absolutely no doubt that she would rise to the challenge because she has been impressing me for the last 8 years placing amazing candidates in the Fortune 500 Corporate World. Perhaps what impresses me the most is her ability to utilize creativity in enticing 'thoroughbreds' and 'athletes' to simply listen to her pitch when they would be otherwise content in their current environment. Well, when the 'pitch' is on, her personal credibility and integrity have a chance to shine. Her passion for her client's company is obvious to all candidates, which prepares them immensely for their very first meeting with me. Monica is a highly selective and discerning individual that makes my job easier as my face-to-face interviews are always with A+ candidates. Monica is probably going to shoot me for this one, but she knows no time zone restrictions! She sacrifices her personal time on a very regular basis with clients and candidates alike in an attempt to meet many demanding schedules across the country. It is a pleasure to recommend Monica as a results-driven All-Star.",
      author: "Glynn Frechette",
      position: "Head of Paychex, PEO",
      company: "",
      executive: "monica"
    },
    {
      quote: "Monica is an experienced professional who gets results. She is very talented at sourcing into firms, versus the more common vetting of just posted information on candidates via the boards. However, the key attribute that she possesses beyond these is her ability to articulate what you wish to be known to the candidate; Being convincing and creative while attracting the best isn't an easy task and she's highly competent in explaining what your company's attributes are, matching them with the right person and moving a prospective person along the process effectively. An intelligent and resourceful partner who is exemplary at follow-up, she gets the job done right in a very timely manner. The final point I'll make is the retention of the employee and overall performance of those individuals--> notably better than most.",
      author: "James Sheridan",
      position: "Outsourced Vice President of Sales",
      company: "Xceleration",
      executive: "monica"
    },
    {
      quote: "Monica is a great resource that takes the time to understand your needs and match your needs with a prospect's needs and talent! She is thorough, reliable, responsible, understanding and values matching the right talent with the right Company.",
      author: "Wendy Boyd",
      position: "Chief Distribution Officer",
      company: "World Financial Group",
      executive: "monica"
    },
    {
      quote: "Monica has an incredible eye for talent and has served as a sage advisor and partner. She has been absolutely clutch in identifying and delivering candidates to fill key roles. The war for talent is real and Monica is a great ally to have!",
      author: "Oral Muir",
      position: "Vice President, Partnerships, Experiences, & Distribution",
      company: "Hilton",
      executive: "monica"
    },
    {
      quote: "There are skilled people in our industry, no doubt. But when your level of humanity is immense then you fall into another category. Monica falls under the later one. Increíble use of empathy and a great professional. I have loved working with Monica as she brings the (so much needed) application of heart and brain to everything she does. Monica is a truly unique human being and incredibly talented. I had the pleasure of working with her and there is not one thing I would recommend for her to change.",
      author: "Alvaro Valeriani",
      position: "Chief Commercial Officer",
      company: "Awasi Experiences",
      executive: "monica"
    },
    {
      quote: "Monica is exactly the type of person you want on your side as an ally and mentor. She has strength, incredible grace, and exceptional recruiting experience that isn't typically found in one person. What a pleasure and honor to watch her in action, soaking up every minute like a sponge! She was able to turn around sensitive situations that no one else could seem to master with her excellent influencing and relationship management prowess. Monica is the first to step-up when you need an extra person on your side or just to lend a sympathetic ear. We partnered together on many challenging executive roles where she inspired me to dig deep and to stick with it, even when the outcome was hard to see. It's been a delight partnering and reporting to Monica over the last couple of years. I have learned a tremendous amount from her and look forward to learning more!",
      author: "Erin Reilly Peneschi",
      position: "Sr. Manager, Executive Talent Research Recruitment",
      company: "Hilton",
      executive: "monica"
    },
    {
      quote: "Impossible to capture with words the value and positive experience it is to work with Monica. In short, regardless of the challenge or goal you want Monica on your team. As a practitioner, I haven't come across many, if any, recruiters that are as respected and valued as Monica is. Clients and candidates alike sing her praises, seek her counsel and rely on her judgement. She leads searches with unrivaled care, passion and integrity and the results time and time again yield both immediate and long term value. Everyone should be so lucky as I have been to work with her.",
      author: "Soheil Saeed",
      position: "Manager, Diversity & Strategic Search",
      company: "General Mills",
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

  // Show only 6 testimonials initially
  const displayedTestimonials = showAll ? filteredTestimonials : filteredTestimonials.slice(0, 6);
  const hasMoreToShow = filteredTestimonials.length > 6 && !showAll;

  return (
    <section id="testimonials" className="section bg-gray-50 pattern-bg-light">
      <div className="container mx-auto">
        <h2 className="section-title">Testimonials</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => {
                setActiveFilter('all');
                setShowAll(false);
              }}
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'all'
                  ? 'bg-alurion-secondary text-white'
                  : 'bg-white text-alurion-secondary hover:bg-gray-100'
              } border border-gray-200 rounded-l-lg`}
            >
              All
            </button>
            <button
              onClick={() => {
                setActiveFilter('monica');
                setShowAll(false);
              }}
              className={`px-4 py-2 text-sm font-medium ${
                activeFilter === 'monica'
                  ? 'bg-alurion-secondary text-white'
                  : 'bg-white text-alurion-secondary hover:bg-gray-100'
              } border-t border-b border-r border-gray-200`}
            >
              Monica's Testimonials
            </button>
            <button
              onClick={() => {
                setActiveFilter('melanie');
                setShowAll(false);
              }}
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
          {displayedTestimonials.map((testimonial, index) => (
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

        {hasMoreToShow && (
          <div className="mt-10 text-center">
            <button 
              onClick={() => setShowAll(true)} 
              className="primary-btn inline-flex items-center"
            >
              Show More Testimonials
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
