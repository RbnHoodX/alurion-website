import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
  category: 'managing-partner' | 'team';
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:-translate-y-2">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-alurion-primary">{member.name}</h3>
            <p className="text-alurion-secondary font-medium">{member.title}</p>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            {member.bio.map((paragraph, i) => (
              <p key={i} className="mb-4 text-sm leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'managing-partner' | 'team'>('all');
  const teamMembers: TeamMember[] = [{
    name: "Melanie \"Mel\" Smith",
    title: "Founder & CEO, Human Capital Strategy Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: ["Melanie Smith is a transformative Human Capital strategist with a proven track record of unlocking the full potential of an organization's most valuable asset—its people. With deep expertise in diagnosing systemic talent challenges, Mel designs and implements people-first strategies that accelerate performance, empower leadership, and align seamlessly with business objectives. Her work is especially impactful during periods of high-stakes change, including mergers and acquisitions, global expansion, and digital transformation driven by AI.", "Mel's executive HR leadership spans Fortune 500 companies and high-growth innovators alike, including UnitedHealth Group, ADP, 3M, Target, Savvy Sherpa/Optum Labs, and DiaMedica. Her ability to adapt across industries is rooted in a strong HR Generalist foundation and a commitment to human-centered design.", "Mel is a certified Talent Strategist and Coach through the Human Capital Institute and holds certifications in the full suite of TalentTelligent solutions. Her work has earned multiple industry accolades for driving measurable, sustainable impact."],
    category: "managing-partner"
  }, {
    name: "Monica Parodi",
    title: "Managing Partner, Chief Talent Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: ["Monica Parodi is a globally recognized authority in talent acquisition and human capital strategy, known for building high-performance recruitment engines that scale with business growth. As Managing Partner, Monica leads the development of Alurion's next-generation recruitment services and consults across the full talent lifecycle—from workforce planning to executive search.", "With over two decades of experience, Monica has led transformative talent initiatives at iconic brands including The New York Times and Hilton, where she served as Vice President of Talent Acquisition and Head of Global Executive Recruitment, respectively. She also founded and scaled her own search firm, helping clients like Build-A-Bear Workshop grow from startup to global brand.", "Monica's leadership is defined by innovation, agility, and a relentless focus on aligning talent strategies with business outcomes."],
    category: "managing-partner"
  }, {
    name: "Steve Palek",
    title: "Chief Revenue Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: ["Steve Palek is a growth strategist and revenue architect with over two decades of experience driving transformational business development. As Chief Revenue Officer at Alurion, Steve leads go-to-market strategy, sales transformation consulting, and client growth initiatives that deliver measurable ROI.", "Steve's leadership has fueled sustained growth across multiple industries. As Chief Sales Officer and Partner at Asurint, he led the company through eight consecutive years of 25%+ growth and played a pivotal role in securing private equity investment. At ADP, he revitalized underperforming markets and expanded national operations, while at USIS, he contributed to the $250M acquisition of HireRight.", "Steve is also the founder of Auxilia, a donor management platform for nonprofits, where he drives innovation and impact through technology. His work consistently bridges strategy and execution to accelerate business success."],
    category: "team"
  }, {
    name: "Chessa Keimig",
    title: "Director, Talent Operations & Delivery",
    image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: ["Chessa Keimig brings operational excellence to the forefront of talent strategy. With a strong background in project management and talent operations, Chessa ensures seamless execution of complex initiatives that drive scalable, sustainable results.", "Her ability to translate vision into action enables Alurion to deliver high-impact solutions with precision and consistency. Chessa's work is instrumental in helping clients achieve operational alignment and long-term success."],
    category: "team"
  }, {
    name: "Neetu Khosla",
    title: "Director, Sourcing & Market Research",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: ["Neetu Khosla is a trusted executive search leader with a sharp instinct for identifying transformative talent. With 18 years of experience across industries and geographies, Neetu has built high-performing leadership teams for startups, mid-market firms, and global enterprises. Her approach is defined by strategic insight, agility, and a deep commitment to integrity.", "A valued advisor to C-suite leaders and boards, Neetu delivers more than candidates—she delivers business catalysts. Her placements consistently drive innovation, cultural alignment, and long-term value creation.", "Neetu's reputation as a strategic partner is built on her ability to match top-tier talent with mission-critical roles that shape the future of organizations."],
    category: "team"
  }];
  const filteredMembers = activeTab === 'all' ? teamMembers : teamMembers.filter(member => member.category === activeTab);
  return <div className="min-h-screen bg-gradient-to-b from-alurion-primary to-alurion-primary/90">
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
            
            <div className="mx-auto max-w-md mb-12">
              <Tabs defaultValue="all" onValueChange={value => setActiveTab(value as 'all' | 'managing-partner' | 'team')}>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredMembers.map((member, index) => (
                <div key={member.name} className="animate-fade-in" style={{
                  animationDelay: `${index * 150}ms`
                }}>
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};

export default Team;
