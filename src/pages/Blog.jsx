import React, { useState } from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "কাপ্তােই লেক এ এক দিন",
      image: "https://i.postimg.cc/1Rkg2Ry0/IMG-2791.avif",
      shortDescription: `কাপ্তােই লেক এ এক দিন" একটি শান্তিপূর্ণ দিন কাটানোর অভিজ্ঞতা, যেখানে আপনি কাপ্তাই লেকের চারপাশে বিস্ময়কর প্রাকৃতিক সৌন্দর্যে মগ্ন হবেন। শান্ত জলরাশি এবং সুন্দর পাহাড়গুলি আপনাকে শহরের ব্যস্ততা থেকে দূরে নিয়ে যায়, যেন এক অনন্য স্বর্গ। এখানে আপনি শান্তির অনুভূতি লাভ করতে পারেন, নৌকা ভ্রমণ উপভোগ করতে পারেন এবং প্রকৃতির মাঝে হারিয়ে যেতে পারেন।`,
      fullDescription: `কাপ্তােই লেক এ এক দিন" একটি অসাধারণ অভিজ্ঞতা, যেখানে আপনি প্রাকৃতিক সৌন্দর্যে নিমজ্জিত হতে পারবেন। কাপ্তাই লেকটি চট্টগ্রাম পাহাড়ি অঞ্চলে অবস্থিত এবং এর শান্ত জলরাশি ও স্নিগ্ধ পরিবেশ মন মুগ্ধ করে। এখানকার প্রাকৃতিক দৃশ্য এবং পাহাড়ের সবুজ শোভা আপনাকে এক নতুন জীবনের স্বাদ দেয়। লেকের পানিতে নৌকা ভ্রমণ করতে করতে আপনি চারপাশের প্রকৃতির সৌন্দর্য উপভোগ করতে পারেন।

এছাড়া, এখানে অনেকগুলি স্থানীয় গ্রাম রয়েছে, যেগুলির জীবনযাত্রা ও সংস্কৃতি একে অপরের থেকে আলাদা এবং আকর্ষণীয়। আপনি স্থানীয় মানুষের সাথে কথা বলে তাদের সংস্কৃতি সম্পর্কে জানতে পারবেন। শান্তির এক অনুভূতি যেন ছড়িয়ে পড়ে এখানে, যেখানে আপনি প্রকৃতির কাছে হারিয়ে যেতে পারেন। কাপ্তাই লেকের এই অভিজ্ঞতা একদিনের জন্য হলেও আপনার মনকে শান্তি ও প্রশান্তি দেবে।`,
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      image: "https://i.postimg.cc/4N007RTS/IMG-3102.avif",
      shortDescription: "Discover how Tailwind CSS can help you create beautiful UIs efficiently.",
      fullDescription: "Tailwind CSS is a utility-first CSS framework that allows you to...",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features You Should Know",
      image: "https://i.postimg.cc/zBq2ZJnV/IMG-3331.avif",
      shortDescription: "Explore essential ES6 features that make JavaScript more powerful.",
      fullDescription: "ES6 introduced features like arrow functions, destructuring, and more...",
    },
  ];

  const [expandedBlog, setExpandedBlog] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gray-900 py-12 text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-teal-400">Blog</h2>
        <p className="mt-4 text-gray-300">Read my latest articles on web development.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-teal-400 transition hover:scale-105"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-teal-300">{blog.title}</h3>
                <p className="text-gray-400 mt-2">
                  {expandedBlog === blog.id ? blog.fullDescription : blog.shortDescription}
                </p>
                <button
                  className="mt-4 bg-teal-500 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300"
                  onClick={() => toggleReadMore(blog.id)}
                  onTouchStart={() => toggleReadMore(blog.id)} // Mobile-friendly touch event
                >
                  {expandedBlog === blog.id ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
