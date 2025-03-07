import React from "react";

const About = () => {
  const aboutInfo = {
    name: "Your Name",
    education: "BA (Honours) in English Literature",
    experience: "Web Developer since 2020",
    description:
      "I am a passionate web developer with a strong foundation in front-end and back-end technologies. My journey in web development started in 2020, and since then, I have been continuously learning and improving my skills. I love building interactive, user-friendly, and efficient web applications.",
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-12 px-6">
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-4xl font-bold text-teal-400">About Me</h2>
        <p className="text-lg font-semibold">{aboutInfo.education}</p>
        <p className="text-lg">{aboutInfo.experience}</p>
        <p className="text-gray-300">{aboutInfo.description}</p>
      </div>
    </section>
  );
};

export default About;
