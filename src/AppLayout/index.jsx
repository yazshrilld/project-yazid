import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, ArrowLeft, List } from "lucide-react";
import PropTypes from "prop-types";
import RecentAppsModal from "../components/Animations/RecentAppModal";
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
  const pageRef = useRef(null);

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

  return (
    <div
      className="relative flex flex-col min-h-screen w-full transition-all duration-300 bg-gradient-dark"
      ref={pageRef}
    >
      {showRecentApps && (
        <RecentAppsModal
          isOpen={showRecentApps}
          setIsOpen={() => setShowRecentApps(false)}
          visitedPages={visitedPages}
        />
      )}

      <div className="flex flex-col items-center justify-center">
        <main
          className={`max-w-sm md:max-w-xl transition-all duration-300 w-full shadow-lg px-8 py-[30px] rounded-10px md:rounded-[30px]`}
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
