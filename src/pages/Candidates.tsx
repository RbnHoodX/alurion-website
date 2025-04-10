
import React from 'react';
import Navigation from '../components/Navigation';
import CandidatesSection from '../components/CandidatesSection';
import Footer from '../components/Footer';

const Candidates = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CandidatesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Candidates;
