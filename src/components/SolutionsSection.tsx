import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
interface Solution {
  id: string;
  title: string;
  description: string;
}
const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState<string>("retained-search");

  // Expose setActiveSolution to the window so Navigation component can access it
  useEffect(() => {
    window.setActiveSolution = setActiveSolution;
    return () => {
      delete window.setActiveSolution;
    };
  }, []);
  const solutions: Solution[] = [{
    id: "retained-search",
    title: "Retained Search",
    description: "Our retained search solution is a dedicated, high-touch approach to securing top-tier talent for mission-critical roles. We partner closely with our clients, investing the time and expertise needed to deeply understand their business, culture, and business goals. Through a rigorous and confidential search process, we identify and engage exceptional candidates who not only meet the technical requirements but also align with the organization's vision and values. With a commitment to precision, discretion, and long-term success, our retained search service ensures that every hire is a transformative leader poised to drive meaningful impact."
  }, {
    id: "rpo",
    title: "Recruitment Process Outsourcing (RPO)",
    description: "Our RPO solution provides businesses with a seamless, scalable, and fully integrated talent acquisition strategy. Acting as an extension of your team, we manage all or part of your recruitment process- optimizing hiring efficiency, enhancing candidate quality, and reducing time-to-fill. Whether scaling rapidly, entering new markets, or refining your employer brand, our RPO experts bring deep industry knowledge and data-driven strategies to attract and retain top talent. With a focus on agility and precision, we deliver customized recruitment solutions that align with your business objectives and drive long-term success."
  }, {
    id: "fractional-hr",
    title: "Fractional Human Resource and Talent Officer",
    description: "Our Fractional Human Resource and Talent Officer solution provides businesses with executive-level talent expertise precisely when and where they need it. Designed for organizations seeking strategic leadership without the commitment of a full-time hire, this solution offers seasoned talent executives that span recruitment, retention, compensation, benefits and professional development, these executives ensure their organizations attract and support top talent. The foremost architects of workplace culture, they align human capital initiatives with their organizations' values and business goals, fostering a thriving and engaged workforce on a flexible basis. Whether navigating rapid growth, transformation, or leadership transitions, our Fractional Talent Officers bring deep industry insights and tailored solutions to build, scale, and optimize talent functions for sustained success."
  }, {
    id: "consulting",
    title: "Talent Acquisition Consulting",
    description: "Our Talent Acquisition Consulting services provide businesses with strategic expertise to build, optimize, and elevate their recruitment functions. Whether developing internal hiring teams, designing structured processes for ATS implementation, doing a deep tech stack analysis or creating inclusive hiring practices, we offer tailored, project-based solutions that drive efficiency and long-term success. With deep industry knowledge and a data-driven approach, we equip organizations with the tools, frameworks, and best practices needed to attract and retain top talent while fostering a seamless and equitable hiring experience."
  }, {
    id: "talent-mapping",
    title: "Candidate Mapping & Pipelining",
    description: "Our Candidate Mapping & Pipelining solution provides businesses with a proactive, research-driven approach to identifying and engaging top talent ahead of demand. Through in-depth market mapping, we deliver insights into candidate availability, competitor talent, and key hiring trends- equipping you with the data to make informed workforce decisions. We build and nurture talent pipelines tailored to your future hiring needs, ensuring you are ready to move quickly when the right opportunity arises. This solution empowers long-term planning and gives your organization a competitive edge in securing high-impact talent."
  }, {
    id: "board-advisory",
    title: "Board Advisory",
    description: "We provide strategic Board advisory services designed to empower organizations with the insights and tools needed to achieve sustainable success. Our expertise includes conducting comprehensive assessments of governance practices, leadership effectiveness, and organizational alignment. We deliver actionable recommendations that enhance decision-making, strengthen leadership accountability, and align organizational goals with long-term growth strategies. We partner with Boards to deliver tailored consulting services, including governance optimization, leadership evaluation, and strategic alignment. By leveraging data-driven insights and industry best practices, we help Boards make informed decisions that elevate organizational performance, foster innovation, and drive employee engagement. Our recommendations ensure the organization remains competitive in a rapidly evolving business landscape, creating a foundation for long-term success."
  }, {
    id: "coaching",
    title: "Coaching & Development",
    description: "Unlock your organization's full potential by empowering your new leaders from day one. Our comprehensive Executive Onboarding Plan ensures a seamless integration for executives, fostering alignment with strategic goals and driving long-term success. Through tailored assimilation activities and a 360-degree review at the 6-month mark, we provide clarity, build relationships, and deliver actionable feedback—setting your leaders and your organization on the path to excellence. Investing in an Executive Onboarding Plan is an investment in your organization's future. Studies show that effective onboarding reduces turnover by up to 82% and accelerates time-to-productivity for new leaders. By providing structured support, aligning leaders with your strategic vision, and fostering team collaboration, our onboarding approach minimizes costly missteps and maximizes leadership impact. Experience tangible results through stronger engagement, heightened team performance, and measurable progress toward your organizational goals."
  }];

  // Handle direct URL access with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('#solutions')) {
      const solutionId = hash.split('-')[1];
      if (solutionId && solutions.some(s => s.id === solutionId)) {
        setActiveSolution(solutionId);
      }
    }
  }, []);
  return <section id="solutions" className="section py-24 px-4 relative bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-alurion-primary text-center">Our Solutions</h2>
        <p className="text-lg text-gray-700 mb-16 max-w-3xl">
          At Alurion Talent Group, we don't just fill roles—we architect transformation. As strategic partners
          and fractional leaders, we help organizations attract, develop, and retain top talent that fuels
          innovation and drives business growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map(solution => <div key={solution.id} onClick={() => setActiveSolution(solution.id)} className="group relative rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer">
              <div className="p-8 h-full flex flex-col bg-gray-50">
                <h3 className="text-xl font-semibold text-alurion-primary mb-4">{solution.title}</h3>
                <div className="mt-2 flex-grow">
                  <p className="text-gray-600 line-clamp-3 text-sm">{solution.description.substring(0, 120)}...</p>
                </div>
                <Link to={`/solutions#${solution.id}`} className="mt-6 flex items-center text-alurion-primary font-medium text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SolutionsSection;