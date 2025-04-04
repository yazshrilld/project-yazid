import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { SiTypescript, SiReact } from "react-icons/si";
import { ArrowRight } from "lucide-react";
import profilePic from "../../assets/img/Yazid.jpeg";
import yazSign from "../../assets/svg/YazSign.svg";

const HomePage = () => {
  const [darkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 mt-5 px-4 sm:px-6 md:px-8 w-full">
      {/* Profile Image */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 group">
        <img
          src={profilePic}
          loading="lazy"
          alt="Profile"
          className="w-full h-full rounded-full border-4 border-gray-300 shadow-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.1] cursor-pointer group-hover:z-[10px]"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <img src={profilePic} loading="lazy" alt="Profile Full View" className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" />
          </div>
        )}
        <div className="absolute bottom-0 right-0">
          <button className="rounded-full bg-gray-200 dark:bg-gray-800 border-2 p-1">
            <img src={yazSign} loading="lazy" alt="Signature" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>

      {/* Name & Role */}
      <div>
        <h1 className={`text-xl sm:text-3xl font-light ${darkMode ? "text-white" : "text-white"}`}>Musa Yazid Topa</h1>
        <p className="text-[11px] sm:text-[14px] text-gray-400 font-bold tracking-wider leading-[2]">
          FRONTEND ENGINEER, PROVIDUS BANK
        </p>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-3 xsm:gap-2 sm:gap-0 xs:grid-cols-3 sm:grid-cols-3 xs:gap-1 text-gray-400 w-full max-w-xs sm:max-w-sm md:max-w-md text-[11px] sm:text-[14px]">
        <div className="flex items-center gap-2 justify-center">
          <SiReact className="text-gray-500 hover:text-blue-500 cursor-pointer xs:w-4 xs:h-4 sm:w-6 sm:h-6 xsm:w-6 xsm:h-6" />
          <span className="xsm:text-[9px] xs:text-[12px] sm:text-[16px] hidden xs:block">React</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <SiTypescript className="text-gray-500 hover:text-blue-500 cursor-pointer xs:w-4 xs:h-4 sm:w-6 sm:h-6 xsm:w-6 xsm:h-6" />
          <span className="sm:text-[16px] hidden sm:block">TypeScript</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <BsBrowserChrome className="text-gray-500 hover:text-blue-500 cursor-pointer xs:w-4 xs:h-4 sm:w-6 sm:h-6 xsm:w-6 xsm:h-6" />
          <span className="xsm:text-[9px] xs:text-[12px] sm:text-[16px] hidden xs:block">Chrome Ext.</span>
        </div>
      </div>

      {/* Quote Box */}
      <div className="relative bg-gray-800 px-6 py-4 rounded-lg shadow-md max-w-xs sm:max-w-md text-center quote-box">
        <p className="text-gray-300 text-[11px] sm:text-[16px]">
          “I am passionate about crafting seamless user experiences through elegant and responsive web design.”
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6 text-gray-400">
        <a href="https://www.linkedin.com/in/musa-yazid-b0b66ab5/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-gray-500 hover:text-blue-500 cursor-pointer" size={24} />
        </a>
        <a href="https://wa.me/2347061889992" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-gray-500 hover:text-green-500 cursor-pointer" size={24} />
        </a>
      </div>

      {/* Navigation Button */}
      <Link
        to="/about"
        className="bg-blue-600 w-full max-w-xs sm:max-w-sm md:max-w-md px-6 py-2 rounded-full flex justify-between items-center shadow-md hover:bg-blue-700 transition-all"
      >
        <span className="text-lg"></span> {/* Empty span to push content to the right */}
        <span className="text-lg flex items-center gap-2">
          Motivation
          <ArrowRight size={20} />
        </span>
      </Link>

      {/* Footer Navigation */}
    </div>
  );
};

export default HomePage;
