
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
}

const RetainedSearchSection = () => {
  const teamMembers = [
    {
      name: "Melanie Smith",
      title: "Founder & President",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: [
        "As a seasoned Human Resource professional, I specialize in diagnosing and resolving core challenges that hinder a company's people investment. I craft strategies that elevate team performance, empower leaders, and drive high-impact results aligned with the company's culture and pace. My expertise is particularly valuable for organizations navigating M&A, globalization, or preparing their workforce for an AI-driven future.",
        "I have held executive HR roles across diverse industries, including R&D with Savvy Sherpa/Optum Labs, biotech/life sciences with DiaMedica, and large-scale organizations such as UnitedHealth Group, ADP, 3M, and Target. My HR Generalist background enables me to adapt seamlessly across broad strategies, always centered on human-focused design.",
        "In 2023, I launched a Human Resource consulting firm, offering Fractional CHRO services, strategic initiative retainers, and recruitment solutions. My firm specializes in executive and board-level recruitment, fractional placements, and Recruitment Process Outsourcing (RPO) solutions, supported by a dedicated team in Delhi, India.",
        "I am an expert in designing, transforming, and elevating HR functions through tech enablement, data-driven insights, and people strategies. My work has earned multiple industry and company-driven awards. I hold a bachelor's degree from the University of Wisconsin, am certified in the full suite of TalentTelligent solutions, and am a certified Talent Strategist and Coach from the Human Capital Institute."
      ]
    },
    {
      name: "Monica Parodi",
      title: "Managing Partner & Talent Acquisition Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: [
        "With over 20 years of talent acquisition experience spanning both agency and in-house roles, Monica Parodi has built a career on the foundation of excellence, strategy, and human connection. She has successfully led talent acquisition initiatives across the Americas, EMEA, APAC, and CALA, working with organizations at every stage- from high-growth startups to some of the world's most recognized brands, including Hilton, The New York Times, ADP, First Data, and Build-A-Bear Workshop, where she played a pivotal role in scaling the company from just two stores to an international brand.",
        "Monica's expertise lies in the art of the pitch and the science of the close- a unique blend of persuasive storytelling and data-driven decision-making that ensures companies secure the right talent at the right time. She is an empathetic yet results-driven leader who prioritizes fiscal responsibility, efficiency, and the human element of recruitment. By leveraging advanced AI technologies, she streamlines processes, allowing for more meaningful candidate engagement and strategic hiring.",
        "A true architect of inclusive, high impact hiring strategies, Monica designs recruitment processes that inspire, attract, and retain top talent while driving measurable business outcomes. Whether building internal talent teams, implementing cutting-edge recruitment technologies, or leading executive searches, she is widely recognized as one of the best in the craft of recruitment- a trusted partner who delivers not just hires, but transformative talent solutions."
      ]
    },
    {
      name: "Chessa Keimig",
      title: "Project Manager & TA Operations",
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: [
        "Chessa is a project manager with nearly 10 years of experience delivering value for medium and large clients across multiple industries. She helps businesses implement organization and rigor to core business processes. She has garnered trust with clients by building relationships and being approachable. She has experience in project management with a background in talent acquisition, where she supported executive level employees while leading a team of peers.",
        "Chessa holds a bachelor's degree in communications from the College of Saint Benedict and Saint John's University. She is originally from Minnesota and currently resides in Arizona with her husband and two daughters."
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-alurion-primary mb-4">Retained Search</h2>
              <div className="h-1 w-24 bg-alurion-accent mx-auto mb-8"></div>
              <h3 className="text-2xl font-medium text-alurion-secondary mb-6">
                A Strategic Approach to Executive Talent Acquisition
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
              <p className="text-gray-700 leading-relaxed text-lg">
                Our retained search solution is a dedicated, high-touch approach to
                securing top-tier talent for mission-critical roles. We partner closely with our
                clients, investing the time and expertise needed to deeply understand their
                business, culture, and business goals. Through a rigorous and confidential
                search process, we identify and engage exceptional candidates who not
                only meet the technical requirements but also align with the organization's
                vision and values. With a commitment to precision, discretion, and
                long-term success, our retained search service ensures that every hire is a
                transformative leader poised to drive meaningful impact.
              </p>
            </div>
          </motion.div>

          <div className="mt-12">
            <Tabs defaultValue="melanie" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 rounded-full bg-alurion-primary/5 p-1">
                  <TabsTrigger 
                    value="melanie" 
                    className="data-[state=active]:bg-white data-[state=active]:text-alurion-primary rounded-full px-6 py-2"
                  >
                    Melanie
                  </TabsTrigger>
                  <TabsTrigger 
                    value="monica" 
                    className="data-[state=active]:bg-white data-[state=active]:text-alurion-primary rounded-full px-6 py-2"
                  >
                    Monica
                  </TabsTrigger>
                  <TabsTrigger 
                    value="chessa" 
                    className="data-[state=active]:bg-white data-[state=active]:text-alurion-primary rounded-full px-6 py-2"
                  >
                    Chessa
                  </TabsTrigger>
                </TabsList>
              </div>

              {teamMembers.map((member, index) => (
                <TabsContent key={index} value={member.name.split(" ")[0].toLowerCase()}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-0 shadow-md overflow-hidden bg-white">
                      <CardContent className="p-8 pt-6">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          <div className="flex-shrink-0">
                            <Avatar className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-alurion-secondary/20">
                              <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-full h-full"
                              />
                            </Avatar>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-alurion-primary">{member.name} | {member.title}</h3>
                            <div className="mt-6 space-y-4 text-gray-700 prose max-w-none">
                              {member.bio.map((paragraph, idx) => (
                                <p key={idx} className="leading-relaxed">{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetainedSearchSection;
