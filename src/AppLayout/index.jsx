import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, ArrowLeft, List } from "lucide-react";
import sunIcon from "../assets/svg/sun.svg";
import moonIcon from "../assets/svg/moon.svg";
import PropTypes from "prop-types";
import html2canvas from "html2canvas";
import RecentAppsModal from "../components/Animations/RecentAppModal";
import { useRecentApps } from "../context/RecentAppContext";
import HomePage from "../assets/img/homePage.png";
import AboutUsImage from "../assets/img/aboutUs.png";
import ExperienceImage from "../assets/img/experience.png";
import ProjectImage from "../assets/img/projects.png";
import ContactImage from "../assets/img/contactMe.png";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showRecentApps, setShowRecentApps] = useState(false);
  const [visitedPages, setVisitedPages] = useState([]);
  const { addRecentApp } = useRecentApps();
  const pageRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  const initialPages = [
    { id: "1", title: "HomePage", path: "/", thumbnail: HomePage },
    { id: "2", title: "About Us", path: "/about", thumbnail: AboutUsImage },
    { id: "3", title: "Experience", path: "/experience", thumbnail: ExperienceImage },
    { id: "4", title: "Projects", path: "/project", thumbnail: ProjectImage },
    { id: "5", title: "Reach Out", path: "/contact", thumbnail: ContactImage },
  ];

  useEffect(() => {
    // Find the current page object from `initialPages`
    const currentPage = initialPages.find((page) => page.path === location.pathname);

    if (currentPage) {
      setVisitedPages((prevVisited) => {
        // Remove the page if it already exists to prevent duplicates
        const filteredPages = prevVisited.filter((page) => page.id !== currentPage.id);
        return [currentPage, ...filteredPages]; // Add the page to the beginning
      });
    }
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";
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

  //Capture screenshot
  useEffect(() => {
    // console.log("📌 Capturing Screenshot for:", location.pathname);

    // Wait a bit to ensure everything is rendered
    setTimeout(() => {
      html2canvas(document.body).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        // console.log("📌 Adding Recent App:", { path: location.pathname, img: imgData });

        addRecentApp({ path: location.pathname, img: imgData });
      });
    }, 1000); // Wait 1 second to ensure everything is fully loaded
  }, [location.pathname]);
  

  return (
    <div
      className={`relative flex flex-col min-h-screen w-full transition-all duration-300 ${
        darkMode ? "bg-gradient-dark" : "bg-gray-400"
      }`}
      ref={pageRef}
    >
      {showRecentApps && (
        <RecentAppsModal
          isOpen={showRecentApps}
          setIsOpen={() => setShowRecentApps(false)}
          visitedPages={visitedPages}
        />
      )}

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
          {!showRecentApps && children}
        </main>
        <footer className="w-full max-w-[400px] mt-auto px-4 text-gray-400 pb-6">
          {!showRecentApps && (
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
              {visitedPages?.length >= 3 && (
                <List
                  size={28}
                  className="cursor-pointer hover:text-white"
                  onClick={() => setShowRecentApps(!showRecentApps)}
                />
              )}
            </div>
          )}
        </footer>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node, // `children` should be a React node
};

export default AppLayout;
