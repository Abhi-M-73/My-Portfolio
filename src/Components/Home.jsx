import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="bg-[url(https://i.pinimg.com/736x/d8/8c/53/d88c53387bdf35e5a4cad228f1a5d2bd.jpg)] bg-no-repeat bg-cover bg-fixed bg-center text-white min-h-screen flex items-center justify-center py-20" id='home'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Text */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm <span className='text-red-500'>Abhishek</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-6">
          A Passionate Developer Creating Impactful Digital Experiences
        </p>

        {/* social media icon */}
        <div className='flex gap-5 items-center justify-center text-3xl mt-5 mb-6'>
          <a href='https://github.com/Abhi-M-73/'><FaSquareGithub className='hover:scale-110 transition-all ease-in' /></a>
          <a href="https://www.linkedin.com/in/abhishek-maddheshiya-a041752b7/"><FaLinkedin className='hover:scale-110 transition-all ease-in'/></a>
          <a href="https://www.instagram.com/theonly.abhiii_/"><FaInstagramSquare className='hover:scale-110 transition-all ease-in' /></a>
          <a href="https://www.facebook.com/abhishek.madheshiya.90/"><FaFacebookSquare className='hover:scale-110 transition-all ease-in' /></a>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white hover:bg-transparent border-indigo-600 hover:text-indigo-600 hover:border px-5 py-2 rounded-lg transition duration-300 text-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-5 py-2 rounded-lg transition duration-300 text-lg"
          >
            Contact Me
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default Home;
