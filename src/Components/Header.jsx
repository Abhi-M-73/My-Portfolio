import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="py-5 bg-[#333] text-white fixed w-full top-0 z-50 shadow-2xl">
        <nav className="flex justify-between items-center md:px-10 px-5">
          <h1 className="text-xl font-bold">Visual Designer</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            <a href="#home" className="hover:text-red-500 hover:font-semibold border-b-2 pb-1 border-transparent hover:border-red-500 transition-all">Home</a>
            <a href="#about" className="hover:text-red-500 hover:font-semibold border-b-2 pb-1 border-transparent hover:border-red-500 transition-all">About</a>
            <a href="#projects" className="hover:text-red-500 hover:font-semibold border-b-2 pb-1 border-transparent hover:border-red-500 transition-all">Projects</a>
            <a href="#skills" className="hover:text-red-500 hover:font-semibold border-b-2 pb-1 border-transparent hover:border-red-500 transition-all">Skills</a>
            <a href="#experience" className="hover:text-red-500 hover:font-semibold border-b-2 pb-1 border-transparent hover:border-red-500 transition-all">Experience</a>
            <a href="#contact" className="hover:text-red-500 hover:font-semibold border-b-2 pb-1 border-transparent hover:border-red-500 transition-all">Contact</a>
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a href="#resume" className="px-4 py-2 bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all">Download Resume</a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
            {isSidebarOpen ? <AiOutlineClose size={30} /> : <TiThMenu size={30} />}
          </div>
        </nav>
      </header>

      {/* Sidebar for Mobile Devices */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#333] text-white p-4 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Visual Designer</h2>
          <AiOutlineClose
            size={30}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex flex-col space-y-6">
          <a href="#home" className="hover:text-red-500 hover:font-semibold transition-all" onClick={() => setIsSidebarOpen(false)}>Home</a>
          <a href="#about" className="hover:text-red-500 hover:font-semibold transition-all" onClick={() => setIsSidebarOpen(false)}>About</a>
          <a href="#projects" className="hover:text-red-500 hover:font-semibold transition-all" onClick={() => setIsSidebarOpen(false)}>Projects</a>
          <a href="#skills" className="hover:text-red-500 hover:font-semibold transition-all" onClick={() => setIsSidebarOpen(false)}>Skills</a>
          <a href="#experience" className="hover:text-red-500 hover:font-semibold transition-all" onClick={() => setIsSidebarOpen(false)}>Experience</a>
          <a href="#contact" className="hover:text-red-500 hover:font-semibold transition-all" onClick={() => setIsSidebarOpen(false)}>Contact</a>
          <a href="#resume" className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 transition-all text-center" onClick={() => setIsSidebarOpen(false)}>Download Resume</a>
        </div>
      </div>
    </>
  );
}
