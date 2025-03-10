import React from "react";
import CTASection from "../Components/Cta";

const About = () => {
  const aboutInfo = {
    name: "Simon Piar",
    education: "BA (Honours) in English Literature",
    experience: "Web Developer since 2020",
    description:
      "I am a passionate full-stack developer specializing in creating modern web applications. My technical arsenal includes:",
    skills: [
      "React.js",
      "HTML & CSS",
      "JavaScript",
      "Tailwind CSS & SASS",
    ]
  };

  return (
   <>
    <section className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                About Me
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <i className="fas fa-graduation-cap text-3xl text-teal-400"></i>
                  <div>
                    <p className="text-lg font-semibold">Education</p>
                    <p className="text-gray-300">{aboutInfo.education}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <i className="fas fa-briefcase text-3xl text-teal-400"></i>
                  <div>
                    <p className="text-lg font-semibold">Experience</p>
                    <p className="text-gray-300">{aboutInfo.experience}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {aboutInfo.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {aboutInfo.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-md"
                >
                  <i className="fas fa-code text-sm text-teal-400"></i>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold hover:scale-105 transition-transform">
              Download CV
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative group hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 blur-xl opacity-30 group-hover:opacity-40 transition-opacity rounded-2xl"></div>
            <div className="relative h-96 bg-gray-800 rounded-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTASection/>
   </>
  );
};

export default About;