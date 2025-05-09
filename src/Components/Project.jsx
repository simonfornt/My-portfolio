import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "A Management app",
    category: "Web Development",
    description: "A small management platform with secure payments.",
    image: "https://i.postimg.cc/pdpFg0Wx/Screenshot-2025-04-03-075738.png",
    liveLink: "https://taupe-ganache-6333cb.netlify.app/?",
    github: "https://github.com/simonfornt/small-management-app.git",
    caseStudy: "This project was built using React, Tailwind CSS, and Firebase for authentication. The biggest challenge was ensuring seamless UI/UX across devices.",
  },
  {
    id: 2,
    title: "Wizia Landing page",
    category: "Web Development",
    description:  "Wizia Landing page  showcasing skills and projects.",
    image: "https://i.postimg.cc/7hSCD6Qn/Screenshot-2025-04-03-083057.png",
    liveLink: "https://wizia-assignment-gamma.vercel.app/",
    github: "https://github.com/simonfornt/wizia-assignment.git",
    caseStudy: "I focused on accessibility and performance, optimizing images and using lazy loading techniques.",
  },
  {
    id: 3,
    title: "Branding & Logo Design",
    category: "Design",
    description: "A minimalistic and modern branding project.",
    image: "https://graphicdesignjunction.com/wp-content/uploads/2020/11/colorful_logo_design_1.jpg",
    liveLink: "https://your-branding.com",
    github: null,
    caseStudy: "The goal was to create a sleek logo that aligns with the brand's values and attracts the right audience.",
  },
  {
    id: 4,
    title: "Foodiland",
    category: "Web Development",
    description: "Developed a fronted for online food resturant",
    image: "https://i.postimg.cc/rs44mgzW/Screenshot-2025-04-03-082623.png",
    liveLink: "https://foodiland.netlify.app/",
    github: "https://github.com/simonfornt/foodiland.git",
    caseStudy: "The goal was to create a sleek frontend design that aligns with the brand's values and attracts the right audience.",
  },
];

const categories = ["All", "Web Development", "Design"];

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-teal-400 text-center mb-8">
          My Projects
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button   key={category}   className={`px-4 py-2 rounded-lg font-semibold transition
               ${  selectedCategory === category    ? "bg-teal-500 text-white"   : "bg-gray-700 text-gray-300 hover:bg-gray-600"  }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                >
                  Live Demo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-4 text-teal-400 underline"
              >
                View Case Study
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-2xl font-bold text-teal-400">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mt-4">{selectedProject.caseStudy}</p>
            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
