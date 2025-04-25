import { useState } from "react";
import ProjectCard from "../../components/Projects/ProjectCard";
import { motion } from "framer-motion";
import YazDashboard from "../../assets/img/yaz-dashboard.png";
import Notifications from "../../assets/img/notifications-design.png";
import GitFinder from "../../assets/img/github-finder.png";
import { SiSass, SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const projects = [
  {
    name: "Yaz Bank Dashboard",
    techStack: [SiNextdotjs, SiTypescript, SiSass],
    image: YazDashboard,
    description:
      "Yaz Bank Admin Dashboard is a fully responsive, production-grade interface designed for financial management at scale. Built with Next.js, TypeScript, and TailwindCSS, it empowers bank administrators to efficiently manage accounts, transactions, cards, documentation, and customer support.",
    codeLink: "https://github.com/another-repo",
    liveLink: "https://profile-dashboard-git-main-yazid-musas-projects.vercel.app/",
  },
  {
    name: "Notifications",
    techStack: [SiReact, IoLogoJavascript, RiTailwindCssFill],
    image: Notifications,
    description:
      "Notifications Center is a real-time, user-friendly interface that keeps users updated on important activities. Built with React, JavaScript, and TailwindCSS, the page dynamically categorizes unread and read notifications, providing quick access to relevant updates.",
    codeLink: "https://github.com/your-repo",
    liveLink: "https://notifications-page-git-main-yazid-musas-projects.vercel.app/",
  },
  {
    name: "Github finder",
    techStack: [SiReact, IoLogoJavascript, RiTailwindCssFill],
    image: GitFinder,
    description:
      "GitHub Finder is a responsive application that allows users to search for GitHub profiles and view essential user information like repositories, followers, bio, and social links.",
    codeLink: "https://github.com/your-repo",
    liveLink: "https://github-finder-eta-pied.vercel.app/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % projects.length;
      // console.log("Next Project Index:", newIndex);
      return newIndex;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      // console.log("Previous Project Index:", newIndex);
      return newIndex;
    });
  };

  // console.log("Current Project:", projects[currentIndex]);

  return (
    <div className="text-white">
      <motion.h1
        className="text-[42px] font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Projects
      </motion.h1>

      <ProjectCard project={projects[currentIndex]} nextProject={nextProject} prevProject={prevProject} />
    </div>
  );
};

export default Projects;
