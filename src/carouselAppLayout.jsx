import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, ArrowLeft, List } from "lucide-react";
import sunIcon from "../assets/svg/sun.svg";
import moonIcon from "../assets/svg/moon.svg";
import PropTypes from "prop-types";
import Caraousel3D from "../pages/Carousel/Caraousel3D";
import HomePage from "../pages/HomePage/HomePage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Experience from "../pages/Experience/Experience";
import Projects from "../pages/Projects/Projects";
import ReachOut from "../pages/ReachOut/ReachOut";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  const [carouselMode, setCarouselMode] = useState(false);

  const isHomePage = location.pathname === "/";

  const pages = [
    { id: "home", component: <HomePage /> },
    { id: "about", component: <AboutUs /> },
    { id: "experience", component: <Experience /> },
    { id: "projects", component: <Projects /> },
    { id: "reachOut", component: <ReachOut /> },
  ];

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
    <div className={`h-screen w-full transition-all duration-300 ${darkMode ? "bg-gradient-dark" : "bg-gray-400"}`}>
      <div className="absolute top-4 right-4 hidden md:block">
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
          <img src={darkMode ? sunIcon : moonIcon} alt="Theme Toggle Icon" className="w-8 h-8" />
        </button>
      </div>

      <div className="flex items-center justify-center h-full">
        <main
          className={`max-w-xl w-full ${
            !darkMode ? "bg-white" : "bg-[#161A23]"
          } shadow-lg min-h-screen p-8 rounded-[30px] relative overflow-hidden`}
        >
          {carouselMode ? <Caraousel3D pages={pages} /> : children}
        </main>
        <div className="w-full max-w-[400px] fixed bottom-6 flex gap-x-[30px] justify-between items-center px-4 text-gray-400">
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
          <List
            size={28}
            className="hover:text-white cursor-pointer"
            onClick={() => setCarouselMode((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
};

const FooterNavigation = ({ setCarouselMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-full max-w-[400px] fixed bottom-6 flex gap-x-[30px] justify-between items-center px-4 text-gray-400">
      <ArrowLeft
        size={28}
        className={`cursor-pointer ${isHomePage ? "opacity-50 cursor-text" : "hover:text-white"}`}
        onClick={() => {
          if (!isHomePage) navigate(-1);
        }}
      />
      <Home size={28} className="hover:text-white cursor-pointer" onClick={() => navigate("/")} />
      <List size={28} className="hover:text-white cursor-pointer" onClick={() => setCarouselMode((prev) => !prev)} />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node, // `children` should be a React node
};

FooterNavigation.propTypes = {
  setCarouselMode: PropTypes.func.isRequired, // `children` should be a React node
};

export { AppLayout, FooterNavigation };
