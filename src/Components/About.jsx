import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-indigo-600">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0 mx-auto md:mx-0">
            <img
              src="https://i.pinimg.com/736x/46/51/fe/4651feff0ccd56050dcbcee60813118a.jpg"
              alt="Profile"
              className="rounded-full shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 md:pl-10 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm [Your Name]</h3>
            <p className="text-lg sm:text-xl mb-4 leading-relaxed">
              I’m a passionate developer who enjoys building beautiful and
              functional web applications. With a strong background in frontend
              technologies like React, JavaScript, and Tailwind CSS, I always
              strive to create seamless user experiences.
            </p>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              My journey into web development started with curiosity about how
              websites are made, and since then, I've been continuously learning
              and improving my skills. I enjoy collaborating with teams, solving
              complex problems, and turning ideas into reality through code.
            </p>

            {/* Button */}
            <div className="mt-6">
              <a
                href="#"
                className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-500 transition duration-300 inline-block text-sm sm:text-base"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
