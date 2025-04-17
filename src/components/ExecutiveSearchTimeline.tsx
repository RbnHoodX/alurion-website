
import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Calendar, Users, Search, ClipboardCheck, FileText, Handshake } from 'lucide-react';

interface TimelineStep {
  week: string;
  title: string;
  description: string[];
  icon: React.ElementType;
}

const ExecutiveSearchTimeline = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineSteps: TimelineStep[] = [
    {
      week: "Week 1",
      title: "Develop Recruiting Strategy and Start Research Phase",
      description: ["Recruiting Strategy Meeting between ImageIn Talent and Mondelez International", "Align with Stakeholder on role responsibilities, requirements, skills and attributes", "Develop search strategy and conduct market research", "Conduct a competitive compensation analysis", "Begin crafting interview plan (panelists and interview questions)"],
      icon: FileText
    },
    {
      week: "Week 2",
      title: "Search & Assessment Phase",
      description: ["Send Mondelez our Market Research and Compensation Analysis for review (which includes calibration candidates for client to review and provide feedback)", "Deep sourcing, pipelining and candidate outreach"],
      icon: Search
    },
    {
      week: "Weeks 3-4",
      title: "Qualify Candidates and Finalize Interview Loop Phase",
      description: ["Lead Executive Recruiter to conduct interviews with potential prospects", "Weekly Recruiting Status Meeting (includes top candidates from assessment for client review)", "Finalize Interview Plan"],
      icon: ClipboardCheck
    },
    {
      week: "Weeks 5-7",
      title: "Interview Phase",
      description: ["Schedule Top 3-5 candidates for Hiring Manager Interviews", "Conduct Panel Prep call with Interview Panelists", "Move to Panel Interviews", "Conduct Candidate Debriefs with Panelists", "Review feedback to determine finalists", "Final Interview Round"],
      icon: Users
    },
    {
      week: "Weeks 8-10",
      title: "Move to Offer",
      description: ["Conduct In-depth Referencing & Background checks", "Offer Negotiations & Candidate Onboarding"],
      icon: Handshake
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Check if timeline is in view
      if (timelineTop < viewportHeight && timelineTop > -timelineRef.current.offsetHeight) {
        stepsRef.current.forEach((step, index) => {
          if (!step) return;
          const stepTop = step.getBoundingClientRect().top;
          const stepBottom = step.getBoundingClientRect().bottom;

          // If step is in viewport
          if (stepTop < viewportHeight * 0.7 && stepBottom > 0) {
            setActiveStepIndex(index);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add the JSX return statement that was missing
  return (
    <section className="py-20 bg-white" ref={timelineRef}>
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold text-alurion-primary">Executive Search Timeline</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our structured approach ensures efficient and effective executive search processes
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          <ScrollArea className="h-[500px] w-full pr-6">
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div 
                  key={index}
                  ref={el => stepsRef.current[index] = el}
                  className={`relative pl-12 transition-all duration-500 ${
                    activeStepIndex === index ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {/* Timeline line */}
                  {index < timelineSteps.length - 1 && (
                    <div className="absolute left-5 top-8 w-0.5 h-[calc(100%+3rem)] bg-alurion-primary/20"></div>
                  )}
                  
                  {/* Timeline circle/icon */}
                  <div className={`absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full ${
                    activeStepIndex === index 
                    ? "bg-alurion-primary text-white" 
                    : "bg-alurion-primary/10 text-alurion-primary"
                  } transition-all duration-300`}>
                    {React.createElement(step.icon, { className: "h-5 w-5" })}
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-alurion-primary/10 text-alurion-primary mb-3">
                      {step.week}
                    </span>
                    <h3 className="text-xl font-bold mb-4 text-alurion-primary">{step.title}</h3>
                    <ul className="space-y-2 text-gray-600">
                      {step.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-alurion-secondary/20 text-alurion-secondary mr-3 mt-0.5 flex-shrink-0">
                            {itemIndex + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSearchTimeline;
