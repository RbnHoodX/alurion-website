
import React, { useState, useEffect } from 'react';

interface Solution {
  id: string;
  title: string;
  description: string;
}

const SolutionsSection = () => {
  const [activeSolution, setActiveSolution] = useState<string>("retained-search");

  // Expose setActiveSolution to the window so Navigation component can access it
  useEffect(() => {
    // @ts-ignore - Exposing to window object for cross-component communication
    window.setActiveSolution = setActiveSolution;

    return () => {
      // Clean up when component unmounts
      // @ts-ignore
      delete window.setActiveSolution;
    };
  }, []);

  const solutions: Solution[] = [
    {
      id: "retained-search",
      title: "Retained Search",
      description: "Our retained search solution is a dedicated, high-touch approach to securing top-tier talent for mission-critical roles. We partner closely with our clients, investing the time and expertise needed to deeply understand their business, culture, and business goals. Through a rigorous and confidential search process, we identify and engage exceptional candidates who not only meet the technical requirements but also align with the organization's vision and values. With a commitment to precision, discretion, and long-term success, our retained search service ensures that every hire is a transformative leader poised to drive meaningful impact."
    },
    {
      id: "rpo",
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Our RPO solution provides businesses with a seamless, scalable, and fully integrated talent acquisition strategy. Acting as an extension of your team, we manage all or part of your recruitment process- optimizing hiring efficiency, enhancing candidate quality, and reducing time-to-fill. Whether scaling rapidly, entering new markets, or refining your employer brand, our RPO experts bring deep industry knowledge and data-driven strategies to attract and retain top talent. With a focus on agility and precision, we deliver customized recruitment solutions that align with your business objectives and drive long-term success."
    },
    {
      id: "fractional-hr",
      title: "Fractional Human Resource and Talent Officer",
      description: "Our Fractional Human Resource and Talent Officer solution provides businesses with executive-level talent expertise precisely when and where they need it. Designed for organizations seeking strategic leadership without the commitment of a full-time hire, this solution offers seasoned talent executives that span recruitment, retention, compensation, benefits and professional development, these executives ensure their organizations attract and support top talent. The foremost architects of workplace culture, they align human capital initiatives with their organizations' values and business goals, fostering a thriving and engaged workforce on a flexible basis. Whether navigating rapid growth, transformation, or leadership transitions, our Fractional Talent Officers bring deep industry insights and tailored solutions to build, scale, and optimize talent functions for sustained success."
    },
    {
      id: "consulting",
      title: "Talent Acquisition Consulting",
      description: "Our Talent Acquisition Consulting services provide businesses with strategic expertise to build, optimize, and elevate their recruitment functions. Whether developing internal hiring teams, designing structured processes for ATS implementation, doing a deep tech stack analysis or creating inclusive hiring practices, we offer tailored, project-based solutions that drive efficiency and long-term success. With deep industry knowledge and a data-driven approach, we equip organizations with the tools, frameworks, and best practices needed to attract and retain top talent while fostering a seamless and equitable hiring experience."
    },
    {
      id: "talent-mapping",
      title: "Talent Mapping & Pipelining",
      description: "Our Candidate Mapping & Pipelining solution provides businesses with a proactive, research-driven approach to identifying and engaging top talent ahead of demand. Through in-depth market mapping, we deliver insights into candidate availability, competitor talent, and key hiring trends- equipping you with the data to make informed workforce decisions. We build and nurture talent pipelines tailored to your future hiring needs, ensuring you are ready to move quickly when the right opportunity arises. This solution empowers long-term planning and gives your organization a competitive edge in securing high-impact talent."
    },
    {
      id: "board-advisory",
      title: "Board Advisory",
      description: "We provide strategic Board advisory services designed to empower organizations with the insights and tools needed to achieve sustainable success. Our expertise includes conducting comprehensive assessments of governance practices, leadership effectiveness, and organizational alignment. We deliver actionable recommendations that enhance decision-making, strengthen leadership accountability, and align organizational goals with long-term growth strategies. We partner with Boards to deliver tailored consulting services, including governance optimization, leadership evaluation, and strategic alignment. By leveraging data-driven insights and industry best practices, we help Boards make informed decisions that elevate organizational performance, foster innovation, and drive employee engagement. Our recommendations ensure the organization remains competitive in a rapidly evolving business landscape, creating a foundation for long-term success."
    },
    {
      id: "coaching",
      title: "Coaching & Development",
      description: "Unlock your organization's full potential by empowering your new leaders from day one. Our comprehensive Executive Onboarding Plan ensures a seamless integration for executives, fostering alignment with strategic goals and driving long-term success. Through tailored assimilation activities and a 360-degree review at the 6-month mark, we provide clarity, build relationships, and deliver actionable feedback—setting your leaders and your organization on the path to excellence. Investing in an Executive Onboarding Plan is an investment in your organization's future. Studies show that effective onboarding reduces turnover by up to 82% and accelerates time-to-productivity for new leaders. By providing structured support, aligning leaders with your strategic vision, and fostering team collaboration, our onboarding approach minimizes costly missteps and maximizes leadership impact. Experience tangible results through stronger engagement, heightened team performance, and measurable progress toward your organizational goals."
    }
  ];

  // Handle direct URL access with hash
  useEffect(() => {
    // Check if there's a hash in the URL that matches a solution ID
    const hash = window.location.hash;
    if (hash && hash.includes('#solutions')) {
      // If there's a solution ID in the URL after a dash, use it
      const solutionId = hash.split('-')[1];
      if (solutionId && solutions.some(s => s.id === solutionId)) {
        setActiveSolution(solutionId);
      }
    }
  }, []);

  return (
    <section id="solutions" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Our Solutions</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
          At Alurion Talent Group, we don't just fill roles—we architect transformation. As strategic partners
          and fractional leaders, we help organizations attract, develop, and retain top talent that fuels
          innovation and drives business growth.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Solutions Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-alurion-secondary">Services</h3>
              <ul className="space-y-2">
                {solutions.map((solution) => (
                  <li key={solution.id} id={solution.id}>
                    <button
                      onClick={() => setActiveSolution(solution.id)}
                      className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                        activeSolution === solution.id 
                          ? 'bg-alurion-secondary text-white' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {solution.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Content */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 p-8 rounded-lg">
              {solutions.map((solution) => (
                <div 
                  key={solution.id}
                  className={`${activeSolution === solution.id ? 'block' : 'hidden'}`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-alurion-secondary">{solution.title}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
