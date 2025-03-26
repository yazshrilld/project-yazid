import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageStore = [
  {
    pageTitle: "HomePage",
    pageUrl: "/",
    pageImage: "homeImage",
  },
  {
    pageTitle: "AboutUs",
    pageUrl: "/about",
    pageImage: "aboutImage",
  },
  {
    pageTitle: "Experience",
    pageUrl: "/experience",
    pageImage: "experienceImage",
  },
  {
    pageTitle: "Projects",
    pageUrl: "/project",
    pageImage: "projectImage",
  },
  {
    pageTitle: "ReachOut",
    pageUrl: "/contact",
    pageImage: "contactImage",
  },
];

const RecentPages = () => {
  const location = useLocation();
  const [myPages, setMyPages] = useState([]);

  const isHomePage = location.pathname === "/";

  const updatePageState = () => {};
  // console.log("From Recent Page: ", { isHomePage, myPages });

  return <div>My Recent Pages</div>;
};

export default RecentPages;
