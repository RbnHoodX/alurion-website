import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [{
    title: "The Future of Work: AI and Human Connection",
    excerpt: "Exploring how artificial intelligence is transforming talent acquisition while maintaining the human touch.",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "April 2, 2025",
    author: "Melanie Smith"
  }, {
    title: "Building Resilient Teams in Uncertain Times",
    excerpt: "Strategies for developing adaptable and high-performing teams that thrive amidst change and disruption.",
    image: "/lovable-uploads/53a345c5-e456-4c61-94d3-b53e144af85f.png",
    date: "March 25, 2025",
    author: "Monica Parodi"
  }, {
    title: "The Strategic Value of Talent Mapping",
    excerpt: "How proactive talent intelligence gives organizations a competitive edge in securing top performers.",
    image: "https://iili.io/3MFDXxn.jpg",
    date: "March 18, 2025",
    author: "Steve Palek"
  }];

  return <section id="blog" className="section bg-white">
      <div className="container mx-auto text-center">
        <h2 className="section-title text-center">Latest Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span className="text-alurion-secondary font-medium">{post.date}</span>
                  <span className="text-alurion-secondary font-normal">By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-alurion-primary text-center">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{post.excerpt}</p>
                <div className="text-center">
                  <a href="#" className="text-alurion-primary font-medium hover:underline">Read More</a>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/blog" className="secondary-btn inline-flex items-center">
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>;
};

export default BlogSection;
