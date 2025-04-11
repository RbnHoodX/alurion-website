
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const [expanded, setExpanded] = useState(false);
  
  const initials = member.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();
  
  return (
    <div className="group relative">
      <Card className="backdrop-blur-xl bg-alurion-primary/5 border-0 shadow-lg overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-xl">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
          <img 
            src={member.image} 
            alt={member.name} 
            className="object-cover w-full h-[300px] transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6 bg-white/95 backdrop-blur-sm">
          <div className="space-y-2">
            <h3 className="text-2xl font-medium text-alurion-primary">{member.name}</h3>
            <p className="text-alurion-secondary font-light">{member.title}</p>
            
            <div className={`transition-all duration-500 ${expanded ? 'max-h-[1000px]' : 'max-h-24 overflow-hidden'}`}>
              <div className="prose-sm text-gray-600 space-y-2">
                {member.bio.map((paragraph, i) => (
                  <p key={i} className="font-light leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setExpanded(!expanded)} 
              className="text-sm text-alurion-primary mt-2 font-medium hover:text-alurion-secondary transition-colors"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
      </main>
      <Footer />
    </div>
  );
};

export default Team;
