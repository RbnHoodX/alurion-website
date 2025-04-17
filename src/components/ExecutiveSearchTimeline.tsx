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

  return (
    <section id="execution-timeline" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4" ref={timelineRef}>
        <h2 className="text-3xl font-bold mb-8 text-center">Executive Search Timeline</h2>
        <div className="max-w-4xl mx-auto">
          {timelineSteps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className={`relative mb-12 transition-all duration-500 ${
                index === activeStepIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className={`p-3 rounded-full ${
                    index === activeStepIndex
                      ? "bg-alurion-primary text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}>
                    <step.icon size={24} />
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className={`h-full w-0.5 my-2 ${
                      index === activeStepIndex
                        ? "bg-alurion-primary"
                        : "bg-gray-200"
                    }`}></div>
                  )}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-alurion-secondary/20 text-alurion-secondary rounded-full">
                      {step.week}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {step.description.map((desc, i) => (
                      <li key={i} className="text-gray-600">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSearchTimeline;
