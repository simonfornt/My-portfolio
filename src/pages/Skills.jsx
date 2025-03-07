import React from "react";

const skills = [
  { name: "HTML", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "JavaScript", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "React", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MS Word", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/word/word-original.svg" },
  { name: "MS PowerPoint", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerpoint/powerpoint-original.svg" },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-teal-400">My Skills</h2>
        <p className="mt-4 text-gray-300">Here are some of the skills I have acquired over the years.</p>

        <div className="mt-8 max-w-2xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-teal-500 h-full transition-all duration-700 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
