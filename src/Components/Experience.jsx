import React from 'react';

const projects = [
  {
    title: "E-Commerce Platform",
    role: "Frontend Developer",
    duration: "Jan 2023 - Present",
    description:
      "Developed a fully responsive e-commerce platform using React, Redux, and Tailwind CSS. Implemented product filtering, sorting, and a shopping cart with seamless user experience.",
    technologies: ["React", "Redux", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Social Media App",
    role: "Full Stack Developer",
    duration: "Jun 2021 - Dec 2022",
    description:
      "Built a social media application with real-time messaging, post-sharing, and user authentication. Utilized Node.js and MongoDB for backend services, and React for frontend development.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Portfolio Website",
    role: "Web Developer",
    duration: "Jan 2021 - May 2021",
    description:
      "Created a personal portfolio website to showcase projects and skills. Designed a modern and clean user interface using HTML, CSS, and JavaScript. Integrated contact form with backend services.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-black py-16" id='experience'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-600">
          Project Experience
        </h2>

        <div className="relative">
          <div className="border-l-4 border-indigo-600 absolute h-full left-8 md:left-1/2"></div>

          {/* Project Items */}
          {projects.map((project, index) => (
            <div key={index} className={`mb-12 flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}>
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'} flex justify-end`}>
                <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-9/12">
                  <h3 className="text-xl font-semibold text-indigo-600">{project.title}</h3>
                  <p className="text-gray-700 font-semibold">{project.role}</p>
                  <span className="block text-sm text-gray-500 mb-4">{project.duration}</span>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap space-x-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="w-0 md:w-1/12 relative">
                <span className="absolute w-6 h-6 bg-indigo-600 rounded-full left-2 md:left-1/2 -ml-3 mt-2 md:ml-0"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
