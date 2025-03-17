import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, ArrowLeft, List } from "lucide-react";
import sunIcon from "../assets/svg/sun.svg";
import moonIcon from "../assets/svg/moon.svg";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  const isHomePage = location.pathname === "/";
  // const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    // if (darkMode)
    //    {
    //   document.documentElement.classList.add("dark");
    //   localStorage.setItem("theme", "dark");
    // }
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`relative flex flex-col min-h-screen w-full transition-all duration-300 ${
        darkMode ? "bg-gradient-dark" : "bg-gray-400"
      }`}
    >
      <div className="absolute top-4 right-4 hidden md:block">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
          <img src={darkMode ? sunIcon : moonIcon} alt="Theme Toggle Icon" className="w-8 h-8" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <main
          className={`max-w-sm md:max-w-xl transition-all duration-300 w-full ${
            !darkMode ? "bg-white" : ""
          } shadow-lg px-8 py-[30px] rounded-10px md:rounded-[30px]`}
        >
          {children}
        </main>
        <footer className="w-full max-w-[400px] mt-auto  px-4 text-gray-400 pb-6">
          <div className="mt-4 flex gap-x-[30px] justify-between items-center">
            <ArrowLeft
              size={28}
              className={`cursor-pointer ${isHomePage ? "opacity-50 cursor-text" : "hover:text-white"}`}
              onClick={() => {
                if (!isHomePage) navigate(-1);
              }}
            />
            <Home
              size={28}
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/")} // Navigate to homepage
            />
            <List size={28} className="hover:text-white cursor-pointer" />
          </div>
        </footer>

        {/* <div className="w-full max-w-[400px] fixed bottom-6 flex gap-x-[30px] justify-between items-center px-4 text-gray-400">
          <ArrowLeft
            size={28}
            className={`cursor-pointer ${isHomePage ? "opacity-50 cursor-text" : "hover:text-white"}`}
            onClick={() => {
              if (!isHomePage) navigate(-1);
            }}
          />
          <Home
            size={28}
            className="hover:text-white cursor-pointer"
            onClick={() => navigate("/")} // Navigate to homepage
          />
          <ArrowRight
            size={28}
            className={`cursor-pointer ${isContactPage ? "opacity-50 cursor-text" : "hover:text-white"}`}
            onClick={() => {
              if (!isContactPage) navigate(+1);
            }}
          /> 
          <List size={28} className="hover:text-white cursor-pointer" />
        </div> */}
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node, // `children` should be a React node
};

export default AppLayout;
