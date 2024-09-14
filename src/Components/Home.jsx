import React from 'react';

const Home = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Text */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm <span className='text-red-500'>Abhishek</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          A Passionate Developer Creating Impactful Digital Experiences
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition duration-300 text-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg transition duration-300 text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
