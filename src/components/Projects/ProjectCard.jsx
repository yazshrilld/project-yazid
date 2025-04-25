import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import PropTypes from "prop-types";

const ProjectCard = ({ project, nextProject, prevProject }) => {
  const linearRotate = {
    hover: {
      x: [0, 3, -3, 0],
      transition: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        key={project.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
        className="text-white"
      >
        {/* Tech Stack */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="flex items-center gap-x-2">
              <h2 className="text-2xl font-semibold mr-[40px]">{project.name}</h2>
              {project.techStack.map((TechIcon, idx) => (
                <span key={idx} className="rounded text-sm">
                  <TechIcon className="text-gray-500 hover:text-blue-500 cursor-pointer" size={16} />
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-4">
              <button
                // onClick={prevProject}
                onClick={() => {
                  // console.log("Prev button clicked");
                  prevProject();
                }}
                className="text-gray-500 text-[12px] hover:text-[16px] hover:text-white transition-all duration-300"
              >
                <FaChevronLeft />
              </button>
              <button
                // onClick={nextProject}
                onClick={() => {
                  // console.log("Next button clicked");
                  nextProject();
                }}
                className="text-gray-500 text-[12px] hover:text-[16px] hover:text-white transition-all duration-300"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Project Image */}
        {/* <div className="mt-4">
          <img
            src={project.image}
            loading="lazy"
            alt={project.name}
            className="rounded-lg w-full h-[250px] object-contain"
          />
        </div> */}
        <div className="mt-4">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              loading="lazy"
              alt={project.name}
              className="rounded-lg w-full h-[250px] object-contain"
            />
          </a>
        </div>

        {/* Description */}
        <p className="mt-3 text-gray-300">{project.description}</p>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          {/* <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Code
          </a> */}
          {/* <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            View App
          </a> */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            View App
          </a>
        </div>
      </motion.div>

      <Link
        to="/contact"
        className="mt-8 bg-blue-600 max-w-[500px] px-6 py-2 rounded-full flex justify-between items-center shadow-md hover:bg-blue-700 transition-all"
      >
        <span className="text-lg"></span> {/* Empty span to push content to the right */}
        <motion.span className="text-lg flex items-center gap-2" initial="rest" whileHover="hover" animate="rest">
          Contact
          <motion.div className="inline-block" variants={linearRotate}>
            <ArrowRight size={20} />
          </motion.div>
        </motion.span>
      </Link>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.element).isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
  }).isRequired,
  nextProject: PropTypes.func.isRequired,
  prevProject: PropTypes.func.isRequired,
};

export default ProjectCard;
