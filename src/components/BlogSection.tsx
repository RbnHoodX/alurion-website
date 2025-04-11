import React from 'react';
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "March 25, 2025",
    author: "Monica Parodi"
  }, {
    title: "The Strategic Value of Talent Mapping",
    excerpt: "How proactive talent intelligence gives organizations a competitive edge in securing top performers.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "March 18, 2025",
    author: "Steve Palek"
  }];
  return <section id="blog" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Latest Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span className="text-alurion-secondary">{post.date}</span>
                  <span className="text-alurion-secondary">By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-alurion-primary">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-alurion-primary font-medium hover:underline">Read More</a>
              </div>
            </div>)}
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="secondary-btn">View All Articles</a>
        </div>
      </div>
    </section>;
};
export default BlogSection;