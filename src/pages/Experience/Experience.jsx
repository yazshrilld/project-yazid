import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import EmployeeCard from "../../components/Employee/EmployeeCard";
import ProvidusLogo from "../../assets/img/download.png";
import BossbusLogo from "../../assets/img/bossbus.png";
import RetaniLogo from "../../assets/img/retani.jpg";
import VoguepayLogo from "../../assets/img/voguepay.jpg";

const Experience = () => {
  const experiences = [
    {
      company: "PROVIDUS BANK",
      role: "Frontend Engineer",
      duration: "2022 - PRESENT",
      description:
        "Designed and built a corporate account portal that automated the previously manual and paper-intensive process of corporate account search requests.",
      logo: ProvidusLogo,
      link: "https://www.providusbank.com/home",
    },
    {
      company: "BOSSBUS TECHNOLOGIES",
      role: "Frontend Web Developer",
      duration: "2022 - 2022",
      description:
        "Contributed and implemented loading skeletons on critical views like the Customer Dashboard and Dispute Screen on a Third-Party whitelabelling solution, ensuring a smooth user experience during data fetch operations.",
      logo: BossbusLogo,
      link: "https://www.linkedin.com/company/bossbusworld/about/",
    },
    {
      company: "RETANI CONSULTS",
      role: "Chrome Extension/Shopify Developer",
      duration: "2021 - 2022",
      description:
        "Chrome Extension Enhancement with Custom Budget Controller: Integrated a custom budget controller, giving users real-time visibility and control over their spending limits.",
      logo: RetaniLogo,
      link: "https://retaniconsults.com/",
    },
    {
      company: "VOGUEPAY",
      role: "Frontend Web Developer",
      duration: "2020 - 2022",
      description:
        "Contributed to the frontend development of a payment gateway system with ReactJS, including UI design, logic optimization, and marketing website development.",
      logo: VoguepayLogo,
      link: "https://vpd.money/",
    },
    // Add more experiences here...
  ];

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
    <div className="px-2 py-1">
      <motion.div
        className="flex flex-col items-start space-y-2 md:flex-row md:items-center justify-between md:mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.h1 className="text-[30px] md:text-[42px] font-bold text-white">Experience</motion.h1>
        <motion.button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1qh_yT60nzrkoLJvuCeSNn2LYzgzU_6ZW/view?usp=drive_link",
              "_blank"
            )
          }
          className="flex items-center gap-2 text-[#C2C2C2] border border-[#C2C2C2] px-2 py-1 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-all hover:bg-[#C2C2C2] hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FaDownload className="text-md md:text-lg" /> {/* Download icon */}
          Resume
        </motion.button>
      </motion.div>

      <motion.div
        className="mt-4 "
        initial={{ opacity: 0, x: 40 }} // Start invisible & slightly lower
        animate={{ opacity: 1, x: 0 }} // Fade in & move up
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <p className="text-[#C2C2C2] text-[12px] md:text-sm">
          {`Frontend Engineer with 5+ years of experience in crafting visually engaging and high-performance web applications. Adept at working independently and collaboratively to deliver exceptional user experiences while ensuring efficiency and attention to detail.`}
        </p>
        <br />
      </motion.div>

      <motion.div
        className="space-y-6 h-[40vh] overflow-y-auto thin-scrollbar"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {experiences.map((exp, index) => (
          <EmployeeCard key={index} {...exp} />
        ))}
      </motion.div>

      <Link
        to="/project"
        className="mt-8 bg-blue-600 max-w-[500px] px-6 py-2 rounded-full flex justify-between items-center shadow-md hover:bg-blue-700 transition-all"
      >
        <span className="text-lg"></span> {/* Empty span to push content to the right */}
        <motion.span className="text-lg flex items-center gap-2" initial="rest" whileHover="hover" animate="rest">
          Projects
          <motion.div className="inline-block" variants={linearRotate}>
            <ArrowRight size={20} />
          </motion.div>
        </motion.span>
      </Link>
    </div>
  );
};

export default Experience;
