import React from "react";
import AboutSection from "../Components/AboutSection";
import Testimonials from "../Components/Testimonial";
import ProjectShowcase from "../Components/Project";

const Home = () => {
  return (
   <>
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 md:px-16 py-12">
      {/* Left Content Section */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-400">Simon Piar</span>, <br /> 
          A Professional Frontend Developer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Crafting stunning and functional websites with modern web technologies.
        </p>
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
        >
          Hire Me
        </button>
      </div>

      {/* Right Image Section */}
      <div className="mt-6 md:mt-0 md:ml-12 flex justify-center">
        <img
          src="https://i.postimg.cc/9M3tc69s/IMG-3391.avif"
          alt="Web Developer"
          className="w-60 md:w-80 lg:w-96 rounded-lg shadow-xl"
        />
      </div>
    </section>
    <AboutSection/>
    <ProjectShowcase/>
    <Testimonials/>
   </>
  );
};

export default Home;
