import React from 'react';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of what the project does and what problem it solves.",
    techStack: ["React", "TailwindCSS", "API"],
    githubLink: "https://github.com/yourusername/project1",
    liveDemoLink: "https://project1demo.com",
  },
  {
    title: "Project 2",
    description: "A brief description of another project showcasing more of your skills.",
    techStack: ["Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/yourusername/project2",
    liveDemoLink: "https://project2demo.com",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black py-16" id='projecs'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-600">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-indigo-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-600">Tech Stack:</h4>
                <ul className="flex flex-wrap mt-2">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md text-sm mr-2 mb-2"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
