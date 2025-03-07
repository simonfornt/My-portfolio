import React from "react";

const Home = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white px-6">
      
      {/* Left Text Section with Animation */}
      <div className="max-w-2xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
           Hi, I'm Simon Piar a professional forntend Web Developer <br />  
          <span className="text-yellow-300">Building Dynamic & Responsive Websites</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 animate-slide-in">
          I specialize in modern web technologies, crafting beautiful and functional web experiences.
        </p>
        <button 
          className="mt-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:scale-105 transition duration-300"
        >
          Hire Me
        </button>
      </div>

      {/* Right Image Section with Animation */}
      <div className="mt-6 md:mt-0 md:ml-12">
        <img
          src="https://i.postimg.cc/9M3tc69s/IMG-3391.avif"
          alt="Web Developer"
          className="w-72 md:w-96"
        />
      </div>
      
    </section>
  );
};

export default Home;
