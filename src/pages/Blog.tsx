
import React from 'react';
import Navigation from '../components/Navigation';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
