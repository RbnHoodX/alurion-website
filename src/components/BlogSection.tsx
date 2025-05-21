import React, { useState } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Fractional Human Resources",
      excerpt:
        "After 20+ years in Corporate America and human resources, I refused to accept the binary choice between burnout and stepping away.",
      content: `After 20+ years in Corporate America and human resources, I refused to accept the binary choice between burnout and stepping away. Additionally, I’ve observed leaders who reach retirement age but still have so much to offer and are ushered out far ahead of their time. 

That's why I went fractional, and I encourage others to consider it too.

Here's what companies don't get about fractional leadership:

1. This isn't gig work. We're experienced C-suite executives who choose to serve multiple organizations strategically.

2. As a fractional Chief Human Resource Officer, I deliver $500K/year expertise for a fraction of the cost and only for the time they need it - depending on size and needs of the client and with no long-term commitments or benefit costs.

3. Companies access top-tier leadership exactly when they need it, paying only for the value they use.

4. People of retirement age may want to slow down but why does a company have to completely lose their institutional knowledge, incredible talent and wisdom when they could still be leveraged in a fractional engagement.

The old model is broken and should be challenged if it is so rigid around full-time, long-term employment structures.

Watching seasoned executives leave the workforce because they can't find flexibility at their level isn't just a personal loss. It's a massive waste of expertise that businesses desperately need.

That's why I joined the Fractional community and have created a portfolio career I am proud of. We're not just changing how we work. We're transforming how companies access executive talent.

The future of leadership isn't about choosing between all or nothing.

It's about precision, flexibility, and sustainable excellence.`,
      image: "https://iili.io/3MKHYiX.jpg",
      date: "April 2, 2025",
      author: "Melanie Smith",
    },
    {
      title: "360 Review Example",
      excerpt: `When a startup scales, the hardest transitions often happen at the top.
Here's a recent case that transformed how I think about leadership development:`,
      image: "/lovable-uploads/53a345c5-e456-4c61-94d3-b53e144af85f.png",
      date: "March 25, 2025",
      content: `When a startup scales, the hardest transitions often happen at the top.

Here's a recent case that transformed how I think about leadership development:

𝑻𝒉𝒆 𝑪𝒉𝒂𝒍𝒍𝒆𝒏𝒈𝒆:
The company was growing fast.

The CEO knew they needed a strong 360-review process, but implementing one is tricky when you're scaling rapidly.

𝑶𝒖𝒓 𝑨𝒑𝒑𝒓𝒐𝒂𝒄𝒉:
My journey with them began as their Fractional CHRO.

This gave me a real window into how the team worked.

By the time we suggested doing 360 reviews, everyone knew and trusted us.

𝑾𝒉𝒂𝒕 𝑾𝒆 𝑫𝒊𝒅:
• Implemented TalentTelligent™ 360 assessments
• Ran educational sessions for the whole leadership team
• Provided 6 months of intensive coaching for the CEO
• Built a custom framework for measuring leadership effectiveness

The Real Impact:

We created more than a feedback system.

We established a shared leadership language that transformed team dynamics.

The AI-powered Career Architect tool ensures this development continues long after our engagement.

𝑲𝒆𝒚 𝑳𝒆𝒂𝒓𝒏𝒊𝒏𝒈:
Most startups wait too long to invest in leadership development.

This team proved that starting early makes all the difference.

This project reminded me why I do this work.

When a leadership team commits to growing together, the whole company wins.`,
      author: "Monica Parodi",
    },
    {
      title: "Merger & Acquisitions",
      excerpt: `I've led 17 M&A integrations.
Here are the 5 critical lessons I've learned:`,
      image: "https://iili.io/3MFDXxn.jpg",
      content: `I've led 17 M&A integrations.

Here are the 5 critical lessons I've learned:

1. 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩 𝐚𝐭 𝐭𝐡𝐞 𝐓𝐨𝐩 𝐑𝐞𝐪𝐮𝐢𝐫𝐞𝐬 𝐚 𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐭 𝐌𝐢𝐧𝐝𝐬𝐞𝐭

Traditional leadership development fails during integration. Why? Because uncertainty demands a different kind of leader. Through these integrations, I learned to identify leaders who:
• Thrive in ambiguity
• Adapt their style instantly
• Read situations before they escalate
• Drive change without losing people

2. 𝐋𝐢𝐬𝐭𝐞𝐧 𝐚𝐧𝐝 𝐋𝐞𝐚𝐫𝐧 𝐁𝐞𝐲𝐨𝐧𝐝 𝐭𝐡𝐞 𝐍𝐮𝐦𝐛𝐞𝐫𝐬

The true value isn't just in products and revenue. Some of the best discoveries can come from understanding what made the acquired company exceptional in their:
• Human resource strategies
• Cultural dynamics
• Inclusion practices

These are often the hidden gems that should reshape the acquiring company, not just the other way around.

3. 𝐈𝐧𝐭𝐞𝐠𝐫𝐚𝐭𝐞 𝐰𝐢𝐭𝐡 𝐇𝐞𝐚𝐫𝐭 𝐚𝐧𝐝 𝐌𝐢𝐧𝐝

Success isn't just about systems integration. It's about:
• Seeing the faces behind the spreadsheets
• Understanding transferable skills
• Creating meaningful roles that honor expertise
• Walking in their shoes through the transition

4. 𝐁𝐞 𝐚 𝐒𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐜 𝐏𝐚𝐫𝐭𝐧𝐞𝐫 𝐭𝐨 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩

I've watched great managers crumble during integration. And seen unexpected leaders emerge from the chaos. Here’s what differentiates:
• Challenge assumptions constructively with market intelligence
• Balance short-term wins with long-term strategic goals
• Support decision-making with clear risk/benefit analysis
• Act as a bridge between acquired and acquiring leadership teams

5. 𝐋𝐢𝐦𝐢𝐭 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐃𝐢𝐬𝐫𝐮𝐩𝐭𝐢𝐨𝐧

While integration is complex, maintaining business momentum is critical. Focus on:
• Preserving customer relationships
• Maintaining operational excellence
• Protecting revenue streams
• Keeping top talent engaged

Through these integrations, I've learned that success isn't written in manuals.

It's carved out in moments of uncertainty.

The best strategies emerge when we dare to look beyond traditional playbooks.

And see the full picture: products, people, and possibilities.`,
      date: "March 18, 2025",
      author: "Steve Palek",
    },
  ];

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="section bg-white">
      <div className="container mx-auto text-center">
        <h2 className="section-title text-center">Latest Blogs</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full w-100 lg:h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span className="text-alurion-secondary font-medium">
                    {post.date}
                  </span>
                  <span className="text-alurion-secondary font-normal">
                    By {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-alurion-primary text-center">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">{post.excerpt}</p>
                <div className="text-center">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-alurion-primary font-medium hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/blog" className="secondary-btn inline-flex items-center">
            View All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* Modal for displaying full blog content */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] my-8 overflow-y-auto p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Blog Title */}
            <h3 className="text-2xl font-bold mb-4 text-alurion-primary">
              {selectedPost.title}
            </h3>

            {/* Blog Image */}
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-100 object-cover rounded-lg mb-4"
            />

            {/* Blog Content */}
            <div className="prose prose-lg text-gray-700 max-w-none scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {selectedPost.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Close Button at the Bottom */}
            <div className="text-right mt-6">
              <button
                onClick={() => setSelectedPost(null)}
                className="text-alurion-primary font-medium hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
