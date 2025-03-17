import { useState } from "react";
import ProjectCard from "../../components/Projects/ProjectCard";
import ImageNar from "../../assets/img/bg-image-2.png";
import ImageYaz from "../../assets/img/Yazid.jpeg";
import { SiSass, SiTypescript, SiReact } from "react-icons/si";

const projects = [
  {
    name: "REPUB",
    techStack: [SiReact, SiTypescript, SiSass],
    image: ImageYaz,
    description: "A proof of concept application that shows an overview of active branches on a GitHub repository.",
    codeLink: "https://github.com/your-repo",
    liveLink: "https://your-live-app.com",
  },
  {
    name: "Another Project",
    techStack: [SiReact, SiTypescript, SiSass],
    image: ImageNar,
    description: "Another amazing project description here.",
    codeLink: "https://github.com/another-repo",
    liveLink: "https://another-live-app.com",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % projects.length;
      console.log("Next Project Index:", newIndex);
      return newIndex;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      console.log("Previous Project Index:", newIndex);
      return newIndex;
    });
  };

  console.log("Current Project:", projects[currentIndex]);

  return (
    <div className="text-white">
      <h1 className="text-[42px] font-bold mb-6">Projects</h1>

      <ProjectCard project={projects[currentIndex]} nextProject={nextProject} prevProject={prevProject} />
    </div>
  );
};

export default Projects;
