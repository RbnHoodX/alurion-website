
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
      description: [
        "Recruiting Strategy Meeting between ImageIn Talent and Mondelez International", 
        "Align with Stakeholder on role responsibilities, requirements, skills and attributes", 
        "Develop search strategy and conduct market research", 
        "Conduct a competitive compensation analysis", 
        "Begin crafting interview plan (panelists and interview questions)"
      ],
      icon: FileText
    }, 
    {
      week: "Week 2",
      title: "Search & Assessment Phase",
      description: [
        "Send Mondelez our Market Research and Compensation Analysis for review (which includes calibration candidates for client to review and provide feedback)", 
        "Deep sourcing, pipelining and candidate outreach"
      ],
      icon: Search
    }, 
    {
      week: "Weeks 3-4",
      title: "Qualify Candidates and Finalize Interview Loop Phase",
      description: [
        "Lead Executive Recruiter to conduct interviews with potential prospects", 
        "Weekly Recruiting Status Meeting (includes top candidates from assessment for client review)", 
        "Finalize Interview Plan"
      ],
      icon: ClipboardCheck
    }, 
    {
      week: "Weeks 5-7",
      title: "Interview Phase",
      description: [
        "Schedule Top 3-5 candidates for Hiring Manager Interviews", 
        "Conduct Panel Prep call with Interview Panelists", 
        "Move to Panel Interviews", 
        "Conduct Candidate Debriefs with Panelists", 
        "Review feedback to determine finalists", 
        "Final Interview Round"
      ],
      icon: Users
    }, 
    {
      week: "Weeks 8-10",
      title: "Move to Offer",
      description: [
        "Conduct In-depth Referencing & Background checks", 
        "Offer Negotiations & Candidate Onboarding"
      ],
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4" ref={timelineRef}>
        <h2 className="text-4xl font-bold text-center mb-16 text-alurion-primary">Executive Search Timeline</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline steps navigation */}
          <div className="lg:col-span-3">
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {timelineSteps.map((step, index) => (
                  <div 
                    key={index}
                    ref={el => stepsRef.current[index] = el}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeStepIndex === index 
                        ? 'bg-alurion-primary text-white shadow-lg' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveStepIndex(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${
                        activeStepIndex === index ? 'bg-white text-alurion-primary' : 'bg-alurion-primary/10 text-alurion-primary'
                      }`}>
                        {React.createElement(step.icon, { size: 18 })}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{step.week}</p>
                        <h3 className="font-bold">{step.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Timeline content */}
          <div className="lg:col-span-9">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-alurion-primary text-white">
                  {React.createElement(timelineSteps[activeStepIndex].icon, { size: 24 })}
                </div>
                <div>
                  <p className="text-alurion-secondary font-medium">{timelineSteps[activeStepIndex].week}</p>
                  <h3 className="text-2xl font-bold text-alurion-primary">{timelineSteps[activeStepIndex].title}</h3>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                {timelineSteps[activeStepIndex].description.map((desc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-alurion-primary/20 text-alurion-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSearchTimeline;
