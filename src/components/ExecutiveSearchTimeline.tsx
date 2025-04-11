
import React, { useEffect, useRef, useState } from 'react';
import { 
  ScrollArea 
} from "@/components/ui/scroll-area";
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-alurion-primary mb-6">Executive Search Overview</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ImageIn Talent follows industry-leading practices to ensure an exceptional candidate
            and hiring manager experience. This process outlines executive level engagement for
            retained searches.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <ScrollArea className="h-[600px] rounded-md border p-4 bg-gray-50/50">
            <div className="relative pb-10">
              {/* Timeline line */}
              <div className="absolute left-9 top-0 bottom-0 w-1 bg-gray-200" />
              
              {/* Active line (animated) */}
              <div 
                className="absolute left-9 top-0 w-1 bg-alurion-secondary transition-all duration-300" 
                style={{ 
                  height: `${(activeStepIndex + 1) * 100 / timelineSteps.length}%`,
                }}
              />
              
              {/* Timeline steps */}
              {timelineSteps.map((step, index) => (
                <div 
                  key={index}
                  ref={el => stepsRef.current[index] = el}
                  className={`relative pl-20 py-10 transition-opacity duration-500 ${
                    index <= activeStepIndex ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  {/* Circle indicator */}
                  <div 
                    className={`absolute left-7 top-10 w-6 h-6 rounded-full border-2 z-10 transition-all duration-300 ${
                      index <= activeStepIndex 
                        ? 'border-alurion-secondary bg-white' 
                        : 'border-gray-300 bg-gray-100'
                    }`}
                  >
                    {/* Inner dot */}
                    <div 
                      className={`absolute inset-1 rounded-full transition-all duration-300 ${
                        index === activeStepIndex ? 'bg-alurion-secondary' : 'bg-transparent'
                      }`} 
                    />
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute left-16 top-8 rounded-full bg-alurion-primary/10 p-2">
                    <step.icon className="h-5 w-5 text-alurion-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-xl shadow-sm p-6 transform transition-transform duration-500 hover:shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-alurion-secondary/10 text-alurion-secondary">
                        {step.week}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-alurion-primary mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 block h-1.5 w-1.5 rounded-full bg-alurion-secondary"></span>
                          <span className="text-gray-700">{item}</span>
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
