import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  category: 'managing-partner' | 'team';
  image: string;
}

const HomeTeamSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'managing-partner' | 'team'>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  
  const teamMembers: TeamMember[] = [{
    name: "Melanie \"Mel\" Smith",
    position: "Founder & CEO, Human Capital Strategy Consultant",
    bio: "Melanie Smith is a transformative Human Capital strategist with a proven track record of unlocking the full potential of an organization's most valuable asset—its people. With deep expertise in diagnosing systemic talent challenges, Mel designs and implements people-first strategies that accelerate performance, empower leadership, and align seamlessly with business objectives. Her work is especially impactful during periods of high-stakes change, including mergers and acquisitions, global expansion, and digital transformation driven by AI.",
    category: "managing-partner",
    image: "/lovable-uploads/melanieheadshot.jpg"
  }, {
    name: "Monica Parodi",
    position: "Managing Partner, Chief Talent Officer",
    bio: "Monica Parodi is a globally recognized authority in talent acquisition and human capital strategy, known for building high-performance recruitment engines that scale with business growth. As Managing Partner, Monica leads the development of Alurion's next-generation recruitment services and consults across the full talent lifecycle—from workforce planning to executive search.",
    category: "managing-partner",
    image: "/lovable-uploads/MParodi.jpeg"
  }, {
    name: "Steve Palek",
    position: "Chief Revenue Officer",
    bio: "Steve Palek is a growth strategist and revenue architect with over two decades of experience driving transformational business development. As Chief Revenue Officer at Alurion, Steve leads go-to-market strategy, sales transformation consulting, and client growth initiatives that deliver measurable ROI.",
    category: "team",
    image: "/lovable-uploads/Palek headshot.jpeg"
  }, {
    name: "Chessa Keimig",
    position: "Director, Talent Operations & Delivery",
    bio: "Chessa Keimig brings operational excellence to the forefront of talent strategy. With a strong background in project management and talent operations, Chessa ensures seamless execution of complex initiatives that drive scalable, sustainable results.",
    category: "team",
    image: "/lovable-uploads/Chessa.png"
  }, {
    name: "Neetu Khosla",
    position: "Director, Sourcing & Market Research",
    bio: "Neetu Khosla is a trusted executive search leader with a sharp instinct for identifying transformative talent. With 18 years of experience across industries and geographies, Neetu has built high-performing leadership teams for startups, mid-market firms, and global enterprises.",
    category: "team",
    image: "/lovable-uploads/Neetu.png"
  }];

  const filteredMembers = activeTab === 'all' ? teamMembers : teamMembers.filter(member => member.category === activeTab);

  return (
    <section id="team" className="section bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="section-title text-center">Meet the Team</h2>
        
        <div className="flex justify-center mb-8">
          <Tabs value={activeTab} onValueChange={value => setActiveTab(value as 'all' | 'managing-partner' | 'team')} className="w-full max-w-md">
            <TabsList className="w-full rounded-full bg-alurion-secondary/20 p-1 h-12">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-alurion-primary flex-1">
                All
              </TabsTrigger>
              <TabsTrigger value="managing-partner" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-alurion-primary flex-1">
                Managing Partners
              </TabsTrigger>
              <TabsTrigger value="team" className="rounded-full data-[state=active]:bg-white data-[state=active]:text-alurion-primary flex-1">
                Team Members
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1 text-alurion-primary">{member.name}</h3>
                <p className="text-gray-600 mb-4 min-h-[50px]">{member.position}</p>
                <button onClick={() => setSelectedMember(member)} className="px-4 py-2 rounded-full bg-alurion-primary/10 text-alurion-primary text-sm font-medium hover:bg-alurion-primary hover:text-white transition-colors">
                  Read Bio
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/team" className="primary-btn inline-flex items-center">
            View Full Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-4xl">
            {selectedMember && (
              <div className="grid md:grid-cols-[300px,1fr] gap-6">
                <div>
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-alurion-primary mb-2">{selectedMember.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedMember.position}</p>
                  <p className="text-gray-700">{selectedMember.bio}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default HomeTeamSection;
