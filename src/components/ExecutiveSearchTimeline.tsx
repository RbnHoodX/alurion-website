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
  const timelineSteps: TimelineStep[] = [{
    week: "Week 1",
    title: "Develop Recruiting Strategy and Start Research Phase",
    description: ["Recruiting Strategy Meeting between ImageIn Talent and Mondelez International", "Align with Stakeholder on role responsibilities, requirements, skills and attributes", "Develop search strategy and conduct market research", "Conduct a competitive compensation analysis", "Begin crafting interview plan (panelists and interview questions)"],
    icon: FileText
  }, {
    week: "Week 2",
    title: "Search & Assessment Phase",
    description: ["Send Mondelez our Market Research and Compensation Analysis for review (which includes calibration candidates for client to review and provide feedback)", "Deep sourcing, pipelining and candidate outreach"],
    icon: Search
  }, {
    week: "Weeks 3-4",
    title: "Qualify Candidates and Finalize Interview Loop Phase",
    description: ["Lead Executive Recruiter to conduct interviews with potential prospects", "Weekly Recruiting Status Meeting (includes top candidates from assessment for client review)", "Finalize Interview Plan"],
    icon: ClipboardCheck
  }, {
    week: "Weeks 5-7",
    title: "Interview Phase",
    description: ["Schedule Top 3-5 candidates for Hiring Manager Interviews", "Conduct Panel Prep call with Interview Panelists", "Move to Panel Interviews", "Conduct Candidate Debriefs with Panelists", "Review feedback to determine finalists", "Final Interview Round"],
    icon: Users
  }, {
    week: "Weeks 8-10",
    title: "Move to Offer",
    description: ["Conduct In-depth Referencing & Background checks", "Offer Negotiations & Candidate Onboarding"],
    icon: Handshake
  }];
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
  return;
};
export default ExecutiveSearchTimeline;