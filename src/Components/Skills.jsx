import React from 'react';

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "90%" },
      { name: "HTML", level: "95%" },
      { name: "CSS", level: "90%" },
      { name: "JavaScript", level: "85%" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "80%" },
      { name: "Express", level: "75%" },
      { name: "MongoDB", level: "70%" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: "85%" },
      { name: "Webpack", level: "70%" },
      { name: "Docker", level: "60%" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black py-16" id='skills'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-600">
          My Skills
        </h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                {skillCategory.category}
              </h3>

              {/* Skills in Each Category */}
              {skillCategory.skills.map((skill, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-700">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
