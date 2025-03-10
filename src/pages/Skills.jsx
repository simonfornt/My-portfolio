import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { id: 1, name: "HTML5", level: 98, color: "from-orange-500 to-orange-400" },
    { id: 2, name: "CSS3", level: 95, color: "from-blue-500 to-blue-400" },
    { id: 3, name: "JavaScript", level: 92, color: "from-yellow-500 to-yellow-400" },
    { id: 4, name: "React", level: 90, color: "from-cyan-500 to-cyan-400" },
    { id: 5, name: "Tailwind CSS", level: 95, color: "from-teal-500 to-teal-400" },
    { id: 6, name: "Node.js", level: 85, color: "from-green-500 to-green-400" },
  ];

  // Improved scroll animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const CodeIcon = () => (
    <svg
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );

  return (
    <section ref={skillsRef} className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-12 text-white text-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`relative bg-gray-800 rounded-xl p-6 transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="mb-4">
                  <CodeIcon />
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Proficiency</span>
                  <span className="text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
