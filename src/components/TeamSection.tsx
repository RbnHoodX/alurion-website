
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  category: 'managing-partner' | 'team';
}

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'managing-partner' | 'team'>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Melanie \"Mel\" Smith",
      position: "Founder & CEO, Human Capital Strategy Consultant",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "Melanie Smith is a transformative Human Capital strategist with a proven track record of unlocking the full potential of an organization's most valuable asset—its people. With deep expertise in diagnosing systemic talent challenges, Mel designs and implements people-first strategies that accelerate performance, empower leadership, and align seamlessly with business objectives. Her work is especially impactful during periods of high-stakes change, including mergers and acquisitions, global expansion, and digital transformation driven by AI. Mel's executive HR leadership spans Fortune 500 companies and high-growth innovators alike, including UnitedHealth Group, ADP, 3M, Target, Savvy Sherpa/Optum Labs, and DiaMedica. Her ability to adapt across industries is rooted in a strong HR Generalist foundation and a commitment to human-centered design. Mel is a certified Talent Strategist and Coach through the Human Capital Institute and holds certifications in the full suite of TalentTelligent solutions. Her work has earned multiple industry accolades for driving measurable, sustainable impact.",
      category: "managing-partner"
    },
    {
      name: "Monica Parodi",
      position: "Managing Partner, Chief Talent Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "Monica Parodi is a globally recognized authority in talent acquisition and human capital strategy, known for building high-performance recruitment engines that scale with business growth. As Managing Partner, Monica leads the development of Alurion's next-generation recruitment services and consults across the full talent lifecycle—from workforce planning to executive search. With over two decades of experience, Monica has led transformative talent initiatives at iconic brands including The New York Times and Hilton, where she served as Vice President of Talent Acquisition and Head of Global Executive Recruitment, respectively. She also founded and scaled her own search firm, helping clients like Build-A-Bear Workshop grow from startup to global brand. Monica's leadership is defined by innovation, agility, and a relentless focus on aligning talent strategies with business outcomes.",
      category: "managing-partner"
    },
    {
      name: "Steve Palek",
      position: "Chief Revenue Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "Steve Palek is a growth strategist and revenue architect with over two decades of experience driving transformational business development. As Chief Revenue Officer at Alurion, Steve leads go-to-market strategy, sales transformation consulting, and client growth initiatives that deliver measurable ROI. Steve's leadership has fueled sustained growth across multiple industries. As Chief Sales Officer and Partner at Asurint, he led the company through eight consecutive years of 25%+ growth and played a pivotal role in securing private equity investment. At ADP, he revitalized underperforming markets and expanded national operations, while at USIS, he contributed to the $250M acquisition of HireRight. Steve is also the founder of Auxilia, a donor management platform for nonprofits, where he drives innovation and impact through technology. His work consistently bridges strategy and execution to accelerate business success.",
      category: "team"
    },
    {
      name: "Chessa Keimig",
      position: "Director, Talent Operations & Delivery",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "Chessa Keimig brings operational excellence to the forefront of talent strategy. With a strong background in project management and talent operations, Chessa ensures seamless execution of complex initiatives that drive scalable, sustainable results. Her ability to translate vision into action enables Alurion to deliver high-impact solutions with precision and consistency. Chessa's work is instrumental in helping clients achieve operational alignment and long-term success.",
      category: "team"
    },
    {
      name: "Neetu Khosla",
      position: "Director, Sourcing & Market Research",
      image: "https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      bio: "Neetu Khosla is a trusted executive search leader with a sharp instinct for identifying transformative talent. With 18 years of experience across industries and geographies, Neetu has built high-performing leadership teams for startups, mid-market firms, and global enterprises. Her approach is defined by strategic insight, agility, and a deep commitment to integrity. A valued advisor to C-suite leaders and boards, Neetu delivers more than candidates—she delivers business catalysts. Her placements consistently drive innovation, cultural alignment, and long-term value creation. Neetu's reputation as a strategic partner is built on her ability to match top-tier talent with mission-critical roles that shape the future of organizations.",
      category: "team"
    }
  ];

  const filteredMembers = activeTab === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === activeTab);

  return (
    <section id="team" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Meet the Team</h2>
        
        {/* Apple-style Tab Bar */}
        <div className="flex justify-center mb-8">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'all' | 'managing-partner' | 'team')} className="w-full max-w-md">
            <TabsList className="w-full rounded-full bg-alurion-secondary/20 p-1 h-12">
              <TabsTrigger 
                value="all" 
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-alurion-primary flex-1"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="managing-partner" 
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-alurion-primary flex-1"
              >
                Managing Partners
              </TabsTrigger>
              <TabsTrigger 
                value="team" 
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-alurion-primary flex-1"
              >
                Team Members
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
              <div className="p-6 pb-0 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-alurion-secondary/30 shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-alurion-secondary">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="px-4 py-2 rounded-full bg-alurion-primary/10 text-alurion-primary text-sm font-medium hover:bg-alurion-primary hover:text-white transition-colors"
                >
                  Read Bio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-alurion-secondary">{selectedMember.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedMember.position}</p>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 whitespace-pre-line">{selectedMember.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
