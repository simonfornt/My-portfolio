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
      "HTML & Css",
      "JS",
      "Tailwind CSS & SASS",
      
      
    ]
  };

  // Custom SVG Icons
  const AcademicCapIcon = () => (
    <svg className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg className="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const CodeBracketIcon = () => (
    <svg className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

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
                  <AcademicCapIcon />
                  <div>
                    <p className="text-lg font-semibold">Education</p>
                    <p className="text-gray-300">{aboutInfo.education}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <BriefcaseIcon />
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
                  <CodeBracketIcon />
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