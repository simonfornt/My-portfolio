import React, { useState } from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "কাপ্তাই লেক এ এক দিন",
      image: "https://i.postimg.cc/1Rkg2Ry0/IMG-2791.avif",
      shortDescription: `কাপ্তাই লেক এ এক দিন" একটি শান্তিপূর্ণ দিন কাটানোর অভিজ্ঞতা...`,
      fullDescription: `কাপ্তাই লেক এ এক দিন" একটি অসাধারণ অভিজ্ঞতা, যেখানে আপনি...`,
    },
    {
      id: 2,
      title: "কাপ্তাই লেক এ এক দিন",
      image: "https://i.postimg.cc/1Rkg2Ry0/IMG-2791.avif",
      shortDescription: `কাপ্তাই লেক এ এক দিন" একটি শান্তিপূর্ণ দিন কাটানোর অভিজ্ঞতা...`,
      fullDescription: `কাপ্তাই লেক এ এক দিন" একটি অসাধারণ অভিজ্ঞতা, যেখানে আপনি...`,
    },
    {
      id: 3,
      title: "কাপ্তাই লেক এ এক দিন",
      image: "https://i.postimg.cc/1Rkg2Ry0/IMG-2791.avif",
      shortDescription: `কাপ্তাই লেক এ এক দিন" একটি শান্তিপূর্ণ দিন কাটানোর অভিজ্ঞতা...`,
      fullDescription: `কাপ্তাই লেক এ এক দিন" একটি অসাধারণ অভিজ্ঞতা, যেখানে আপনি...`,
    }
    // Other blog items...
  ];

  const [expandedBlog, setExpandedBlog] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
            My Blog
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Explore my thoughts, experiences, and technical insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-teal-400 line-clamp-2">
                  {blog.title}
                </h3>
                
                <div className="prose prose-invert">
                  <p className="text-gray-300 line-clamp-3">
                    {expandedBlog === blog.id
                      ? blog.fullDescription
                      : blog.shortDescription}
                  </p>
                </div>

                <button
                  onClick={() => toggleReadMore(blog.id)}
                  className="inline-flex items-center font-medium text-teal-400 hover:text-teal-300 transition-colors"
                >
                  {expandedBlog === blog.id ? "Show less" : "Continue reading"}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        expandedBlog === blog.id
                          ? "M5 15l7-7 7 7"
                          : "M19 9l-7 7-7-7"
                      }
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog