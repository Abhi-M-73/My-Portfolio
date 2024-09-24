// import React from 'react';

// const About = () => {
//   return (
//     <section className="min-h-screen bg-[#2C3E50] text-white py-16" id='about'>
//       <div className="container mx-auto px-6 lg:px-12">
//         <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-indigo-500">
//           About Me
//         </h2>

//         <div className="flex flex-col md:flex-row items-center">
//           {/* Profile Image */}
//           <div className="w-52 h-52 md:w-72 md:h-72 mb-8 md:mb-0 mx-auto md:mx-0 relative">
//             <img
//               src="https://i.pinimg.com/736x/46/51/fe/4651feff0ccd56050dcbcee60813118a.jpg"
//               alt="Profile"
//               className="rounded-full shadow-xl w-full h-full object-cover border-4 border-indigo-600"
//             />
//             <div className="absolute inset-0 rounded-full border-2 border-indigo-300 opacity-60"></div>
//           </div>

//           {/* Text Content */}
//           <div className="md:w-3/5 md:pl-12 text-center md:text-left">
//             <h3 className="text-3xl font-semibold mb-6">
//               Hello, My name is <span className='text-indigo-600'>Abhishek Maddheshiya</span>
//             </h3>
//             <p className="text-lg sm:text-xl leading-relaxed mb-5 text-gray-300">
//               I’m a passionate developer who enjoys building beautiful and
//               functional web applications. With a strong background in frontend
//               technologies like HTML , CSS, React, JavaScript, and Tailwind CSS, GSAP , Framer Motion And backend technologies like Node, Express, MongoDB. I strive to
//               create seamless user experiences.
//             </p>
//             <p className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-300">
//               My journey into web development started with curiosity about how
//               websites are made, and since then, I've been continuously learning
//               and improving my skills. I enjoy collaborating with teams, solving
//               complex problems, and turning ideas into reality through code.
//             </p>

//             {/* Button */}
//             <div className="mt-8">
//               <a
//                 href="#"
//                 className="bg-indigo-600 text-white py-3 px-8 rounded-full font-medium hover:bg-indigo-500 transition duration-300 shadow-md text-base sm:text-lg"
//               >
//                 Download My Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen flex bg-gray-900 text-white font-sans py-12" id='about'>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">
        {/* Image Section */}
        <div className="w-full lg:w-[25vw] w-[70vw] lg:h-[60vh] mb-8 lg:mb-0">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="rounded-lg shadow-lg h-full w-full"
          />
        </div>
        {/* Text Section */}
        <div className="w-full lg:w-2/3 lg:pl-12">
          <h1 className="text-indigo-500 text-2xl md:text-3xl font-bold mb-4 ">Who am I?</h1>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
            I'm Abhishek, <br/> a visual UX/UI Designer <br/> Web Developer
          </h2>
          <p className="text-gray-400 mb-6"> I’m a passionate developer who enjoys building beautiful and
                          functional web applications. With a strong background in frontend
                          technologies like HTML , CSS, React, JavaScript, and Tailwind CSS, GSAP , Framer Motion And backend technologies like Node, Express, MongoDB. I strive to
                        create seamless user experiences.  <br/><br/>

            My journey into web development started with curiosity about how
                       websites are made, and since then, I've been continuously learning
                    and improving my skills. I enjoy collaborating with teams, solving
                        complex problems, and turning ideas into reality through code.
          </p>
          <div className="flex flex-col md:flex-row md:items-center text-sm md:text-base">
            <div className="mb-4 md:mb-0 md:mr-6">
              <p><strong>Name: </strong> Abhishek Maddheshiya</p>
              <p><strong>DOB: </strong> June 04, 2003</p>
              <p><strong>Contact: </strong> 7390046636</p>
            </div>
            <div className="mb-4 md:mb-0 md:mr-6">
              <p><strong>From:</strong> Gorakhpur, Uttar Pradesh</p>
              <p><strong>Email:</strong> abhishekmaddheshiya623@gmail.com</p>
              <p><strong>Other:</strong></p>
            </div>
            <div className='mt-5'>
              <a
                href="#"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 md:ml-40 rounded shadow-lg"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

