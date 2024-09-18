import React from 'react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Developed a fully responsive e-commerce platform using React, Redux, and Tailwind CSS.",
    techStack: ["React", "Redux", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/yourusername/ecommerce",
    liveDemoLink: "https://ecommerce-demo.com",
    image: "https://via.placeholder.com/400x200?text=E-Commerce+Platform"
  },
  {
    title: "Social Media App",
    description: "Built a social media application with real-time messaging and post-sharing.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/yourusername/social-media",
    liveDemoLink: "https://social-media-demo.com",
    image: "https://via.placeholder.com/400x200?text=Social+Media+App"
  },
  // Add more projects with images as needed
];

const Projects = () => {
  return (
    <section className="min-h-screen py-16 bg-[url(https://i.pinimg.com/736x/90/fc/20/90fc20c585d6f1c28b92f53d0282e915.jpg)] bg-no-repeat bg-cover bg-fixed bg-center"  id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-400">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-62 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>


                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-200 transition duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
