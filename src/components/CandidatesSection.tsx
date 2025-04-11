import React from 'react';
const CandidatesSection = () => {
  return <section id="candidates" className="section bg-alurion-primary text-white pattern-bg-dark">
      <div className="absolute inset-0 bg-alurion-secondary"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-alurion-secondary">For Candidates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div id="submit-resume">
            <h3 className="text-2xl font-bold mb-4 text-alurion-secondary">Submit Your Resume</h3>
            <p className="mb-6 text-alurion-secondary">
              We're always looking for exceptional talent to join our network. Submit your resume and our team will reach out if there's a potential match with current or future opportunities.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-alurion-secondary">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alurion-primary text-alurion-primary bg-transparent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-alurion-secondary">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alurion-primary text-alurion-primary bg-transparent" />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-1 text-alurion-secondary">Resume/CV</label>
                <input type="file" id="resume" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alurion-primary text-alurion-primary  bg-transparent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-alurion-secondary">Additional Information</label>
                <textarea id="message" rows={3} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alurion-primary primary bg-transparent"></textarea>
              </div>
              <button type="submit" className="primary-btn">Submit Resume</button>
            </form>
          </div>
          
          <div id="open-roles">
            <h3 className="text-2xl font-bold mb-4 text-alurion-primary">Open Roles</h3>
            <p className="mb-6 text-alurion-primary">
              Explore our current job openings across various industries and functions. We're connecting exceptional talent with transformative opportunities at leading organizations.
            </p>
            <div className="space-y-6">
              <div className="bg-alurion-primary p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-2 text-white">Senior Product Manager</h4>
                <div className="flex gap-4 mb-3">
                  <span className="text-sm bg-alurion-secondary text-alurion-primary px-2 py-1 rounded font-medium">Technology</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Remote</span>
                </div>
                <p className="text-gray-100 mb-4">Lead product strategy and execution for a growing SaaS company, driving innovation and customer-centered solutions.</p>
                <a href="#" className="text-alurion-secondary hover:underline font-medium">View Details</a>
              </div>
              
              <div className="bg-alurion-primary p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-2 text-white">Director of Marketing</h4>
                <div className="flex gap-4 mb-3">
                  <span className="text-sm bg-alurion-secondary text-alurion-primary px-2 py-1 rounded font-medium">Marketing</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">New York</span>
                </div>
                <p className="text-gray-100 mb-4">Develop and implement comprehensive marketing strategies to drive brand awareness and customer acquisition.</p>
                <a href="#" className="text-alurion-secondary hover:underline font-medium">View Details</a>
              </div>
              
              <div className="bg-alurion-primary p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-2 text-white">HR Business Partner</h4>
                <div className="flex gap-4 mb-3">
                  <span className="text-sm bg-alurion-secondary text-alurion-primary px-2 py-1 rounded font-medium">Human Resources</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Chicago</span>
                </div>
                <p className="text-gray-100 mb-4">Partner with leadership to develop and implement human resource initiatives aligned with business objectives.</p>
                <a href="#" className="text-alurion-secondary hover:underline font-medium">View Details</a>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#" className="inline-flex items-center text-alurion-primary hover:underline font-medium">
                View All Open Positions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CandidatesSection;