import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-600/20 blur-3xl rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-6">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you have a project in mind or just want to connect, I'm always excited to hear about new opportunities and creative ideas.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="#projects" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 rounded-xl text-white font-semibold hover:scale-[1.02] transition-transform shadow-lg group"
            >
              <i className="fas fa-briefcase mr-3 group-hover:rotate-12 transition-transform text-xl"></i>
              See My Work
            </a>

            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-teal-400/30 hover:border-teal-400/50 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl text-teal-400 font-semibold hover:scale-[1.02] transition-transform shadow-lg group"
            >
              <i className="fas fa-paper-plane mr-3 group-hover:-rotate-12 transition-transform text-xl"></i>
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <a 
              href="#about" 
              className="text-gray-400 hover:text-teal-400 transition-colors text-sm font-medium"
            >
              Learn More About Me →
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="#skills" 
              className="text-gray-400 hover:text-teal-400 transition-colors text-sm font-medium"
            >
              View My Skills →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;