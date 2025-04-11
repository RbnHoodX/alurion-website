
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { motion, AnimatePresence } from 'framer-motion';
import ExecutiveSearchTimeline from '../components/ExecutiveSearchTimeline';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const initials = member.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();
  
  const openModal = () => {
    setIsModalOpen(true);
    // Don't set flipped state immediately - let the modal open first
    setIsFlipped(false);
  };

  const closeModal = () => {
    // First reset flip state
    setIsFlipped(false);
    // Then close the modal after animation completes
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <>
      <div className="group relative transition-all duration-300 hover:translate-y-[-8px]">
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
          <div className="p-6 pb-0 flex justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-alurion-secondary/30 shadow-lg">
              <img 
                src={member.image} 
                alt={member.name} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          <CardContent className="p-6">
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-bold text-alurion-primary">{member.name}</h3>
              <p className="text-alurion-secondary font-medium">{member.title}</p>
              
              <div className="min-h-[130px] overflow-hidden"> {/* Increased minimum height here */}
                <div className="prose-sm text-gray-600 space-y-3 pt-2">
                  <p className="text-left font-light leading-relaxed line-clamp-4">{member.bio[0]}</p> {/* Changed from line-clamp-3 to line-clamp-4 */}
                </div>
              </div>
              
              <button 
                onClick={openModal} 
                className="mt-3 px-4 py-2 rounded-full bg-alurion-primary/10 text-alurion-primary text-sm font-medium hover:bg-alurion-primary hover:text-white transition-colors"
              >
                Read More
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bio Modal with Flip Animation */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              className="w-full max-w-3xl perspective-1000"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div 
                className="relative w-full preserve-3d"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ minHeight: "500px" }} // Set minimum height for the card
              >
                {/* Front of card - always visible initially */}
                <motion.div 
                  className={`absolute w-full h-full backface-hidden bg-white rounded-xl shadow-2xl p-8 ${
                    isFlipped ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={{ 
                    backfaceVisibility: "hidden",
                    minHeight: "500px" // Ensure consistent height
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-6 items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-alurion-secondary/30">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-alurion-primary">{member.name}</h3>
                        <p className="text-alurion-secondary">{member.title}</p>
                      </div>
                    </div>
                    <button 
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="mt-6 flex flex-col justify-between" style={{ minHeight: "360px" }}> {/* Added min-height and flex to push button to bottom */}
                    <div className="flex-grow">
                      <p className="text-gray-600 text-lg">{member.bio[0].substring(0, 600)}...</p> {/* Increased text content from 300 to 600 characters */}
                    </div>
                    <div className="mt-6 flex justify-center">
                      <button 
                        onClick={() => setIsFlipped(true)}
                        className="px-4 py-2 bg-alurion-primary text-white rounded-full flex items-center gap-2"
                      >
                        Continue Reading
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
                
                {/* Back of card - full bio */}
                <motion.div 
                  className="absolute w-full bg-white rounded-xl shadow-2xl p-8 overflow-y-auto"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    minHeight: "500px", // Ensure consistent height
                    maxHeight: "70vh" // Set maximum height with scrolling
                  }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-alurion-primary">About {member.name}</h3>
                    <button 
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="prose max-w-none text-gray-700">
                    {member.bio.map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button 
                      onClick={() => setIsFlipped(false)}
                      className="px-4 py-2 bg-alurion-secondary/10 text-alurion-secondary rounded-full flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Summary
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Melanie Smith",
      title: "Founder & President",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: ["As a seasoned Human Resource professional, I specialize in diagnosing and resolving core challenges that hinder a company's people investment. I craft strategies that elevate team performance, empower leaders, and drive high-impact results aligned with the company's culture and pace. My expertise is particularly valuable for organizations navigating M&A, globalization, or preparing their workforce for an AI-driven future.", "I have held executive HR roles across diverse industries, including R&D with Savvy Sherpa/Optum Labs, biotech/life sciences with DiaMedica, and large-scale organizations such as UnitedHealth Group, ADP, 3M, and Target. My HR Generalist background enables me to adapt seamlessly across broad strategies, always centered on human-focused design.", "In 2023, I launched a Human Resource consulting firm, offering Fractional CHRO services, strategic initiative retainers, and recruitment solutions. My firm specializes in executive and board-level recruitment, fractional placements, and Recruitment Process Outsourcing (RPO) solutions, supported by a dedicated team in Delhi, India.", "I am an expert in designing, transforming, and elevating HR functions through tech enablement, data-driven insights, and people strategies. My work has earned multiple industry and company-driven awards. I hold a bachelor's degree from the University of Wisconsin, am certified in the full suite of TalentTelligent solutions, and am a certified Talent Strategist and Coach from the Human Capital Institute."]
    },
    {
      name: "Monica Parodi",
      title: "Managing Partner & Talent Acquisition Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: ["With over 20 years of talent acquisition experience spanning both agency and in-house roles, Monica Parodi has built a career on the foundation of excellence, strategy, and human connection. She has successfully led talent acquisition initiatives across the Americas, EMEA, APAC, and CALA, working with organizations at every stage- from high-growth startups to some of the world's most recognized brands, including Hilton, The New York Times, ADP, First Data, and Build-A-Bear Workshop, where she played a pivotal role in scaling the company from just two stores to an international brand.", "Monica's expertise lies in the art of the pitch and the science of the close- a unique blend of persuasive storytelling and data-driven decision-making that ensures companies secure the right talent at the right time. She is an empathetic yet results-driven leader who prioritizes fiscal responsibility, efficiency, and the human element of recruitment. By leveraging advanced AI technologies, she streamlines processes, allowing for more meaningful candidate engagement and strategic hiring.", "A true architect of inclusive, high impact hiring strategies, Monica designs recruitment processes that inspire, attract, and retain top talent while driving measurable business outcomes. Whether building internal talent teams, implementing cutting-edge recruitment technologies, or leading executive searches, she is widely recognized as one of the best in the craft of recruitment- a trusted partner who delivers not just hires, but transformative talent solutions."]
    },
    {
      name: "Chessa Keimig",
      title: "Project Manager & TA Operations",
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: ["Chessa is a project manager with nearly 10 years of experience delivering value for medium and large clients across multiple industries. She helps businesses implement organization and rigor to core business processes. She has garnered trust with clients by building relationships and being approachable. She has experience in project management with a background in talent acquisition, where she supported executive level employees while leading a team of peers.", "Chessa holds a bachelor's degree in communications from the College of Saint Benedict and Saint John's University. She is originally from Minnesota and currently resides in Arizona with her husband and two daughters."]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-alurion-primary to-alurion-primary/90">
      <Navigation />
      <main>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 800 800">
              <defs>
                <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="800" height="800" fill="url(#pattern)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Meet Our Team</h1>
              <p className="text-lg md:text-xl text-alurion-secondary/80 max-w-2xl mx-auto font-light">
                The brilliant minds behind Alurion's talent solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Approach Section - MOVED TO BEFORE Executive Search Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-alurion-primary text-center">Our Approach</h2>
              <div className="bg-alurion-primary/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-medium mb-6 text-alurion-primary">A Strategic Approach to Executive Talent Acquisition</h3>
                <div className="space-y-6 text-gray-700 font-light">
                  <p className="leading-relaxed">
                    Our retained search solution is a dedicated, high-touch approach to
                    securing top-tier talent for mission-critical roles. We partner closely with our
                    clients, investing the time and expertise needed to deeply understand their
                    business, culture, and business goals.
                  </p>
                  <p className="leading-relaxed">
                    Through a rigorous and confidential search process, we identify and engage exceptional candidates who not
                    only meet the technical requirements but also align with the organization's
                    vision and values. With a commitment to precision, discretion, and
                    long-term success, our retained search service ensures that every hire is a
                    transformative leader poised to drive meaningful impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Executive Search Timeline Section - NOW AFTER Our Approach */}
        <ExecutiveSearchTimeline />
      </main>
      <Footer />

      {/* Add perspective CSS for flip animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}} />
    </div>
  );
};

export default Team;
