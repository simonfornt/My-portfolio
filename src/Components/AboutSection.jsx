import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group flex justify-center md:justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 blur-2xl opacity-30 group-hover:opacity-40 rounded-full transform group-hover:scale-110 transition-all"></div>
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-teal-400/20 hover:border-teal-400/30 transition-all shadow-2xl">
              <img
                src="https://i.postimg.cc/XJpfmYSb/DSC-0867.jpg"
                alt="About Me"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg">
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm a passionate <strong className="text-teal-400">Web Developer</strong> specializing in modern web technologies. My expertise spans across <strong className="text-teal-400">React</strong>, <strong className="text-teal-400">Tailwind CSS</strong>, and <strong className="text-teal-400">JavaScript</strong> ecosystem.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                  <i className="fas fa-clock text-2xl mr-2 text-teal-400"></i>
                  <span className="text-gray-300">3+ Years Experience</span>
                </div>
                
                <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
                  <i className="fas fa-briefcase text-2xl mr-2 text-teal-400"></i>
                  <span className="text-gray-300">50+ Projects Completed</span>
                </div>
              </div>

              <p className="text-gray-400 text-base leading-relaxed">
                Focused on crafting clean, performant, and accessible web experiences. I thrive on turning complex problems into elegant, user-friendly solutions.
              </p>
            </div>

            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 rounded-xl text-white font-semibold hover:scale-[1.02] transition-transform shadow-lg"
            >
              <i className="fas fa-envelope text-xl mr-2"></i>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;