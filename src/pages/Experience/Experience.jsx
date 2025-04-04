import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import EmployeeCard from "../../components/Employee/EmployeeCard";
import ProvidusLogo from "../../assets/img/download.png";
import BossbusLogo from "../../assets/img/bossbus.png";
import RetaniLogo from "../../assets/img/retani.jpg";
import VoguepayLogo from "../../assets/img/voguepay.jpg";

const Experience = () => {
  const [userEmail, setUserEmail] = useState(null);

  const experiences = [
    {
      company: "PROVIDUS BANK",
      role: "Frontend Engineer",
      duration: "2022 - PRESENT",
      description:
        "Migrated an event management system, serving over 25k customers from Vue2 to Vue3 with TypeScript support and Tailwind.",
      logo: ProvidusLogo,
      link: "https://www.providusbank.com/home",
    },
    {
      company: "BOSSBUS TECHNOLOGIES",
      role: "Frontend Web Developer",
      duration: "2022 - 2022",
      description:
        "Contributed to the frontend development of a payment gateway system with ReactJS and NextJS, including UI design, logic optimization, and marketing website development.",
      logo: BossbusLogo,
      link: "https://www.linkedin.com/company/bossbusworld/about/",
    },
    {
      company: "RETANI CONSULTS",
      role: "Chrome Extension/Shopify Developer",
      duration: "2021 - 2022",
      description:
        "Contributed to the frontend development of a payment gateway system with ReactJS and NextJS, including UI design, logic optimization, and marketing website development.",
      logo: RetaniLogo,
      link: "https://retaniconsults.com/",
    },
    {
      company: "VOGUEPAY",
      role: "Frontend Web Developer",
      duration: "2020 - 2022",
      description:
        "Contributed to the frontend development of a payment gateway system with ReactJS and NextJS, including UI design, logic optimization, and marketing website development.",
      logo: VoguepayLogo,
      link: "https://vpd.money/",
    },
    // Add more experiences here...
  ];

  const handleResumeRequest = async () => {
    try {
      const response = await fetch("https://your-api.com/request-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }), // userEmail should be obtained from the form or authentication system
      });

      if (response.ok) {
        alert("Resume sent to your email!");
      } else {
        alert("Failed to send resume. Try again.");
      }
    } catch (error) {
      // console.error("Error requesting resume:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="px-2 py-1">
      <div className="flex flex-col items-start space-y-2 md:flex-row md:items-center justify-between md:mb-4">
        <h1 className="text-[30px] md:text-[42px] font-bold text-white">Experience</h1>
        <button
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
        </button>
      </div>

      <div className="mt-4 ">
        <p className="text-[#C2C2C2] text-[12px] md:text-sm">
          {`Frontend Engineer with 5+ years of experience in crafting visually engaging and high-performance web applications. Adept at working independently and collaboratively to deliver exceptional user experiences while ensuring efficiency and attention to detail.`}
        </p>
        <br />
      </div>

      <div className="space-y-6 h-[40vh] overflow-y-auto thin-scrollbar">
        {experiences.map((exp, index) => (
          <EmployeeCard key={index} {...exp} />
        ))}
      </div>

      <Link
        to="/project"
        className="mt-8 bg-blue-600 max-w-[500px] px-6 py-2 rounded-full flex justify-between items-center shadow-md hover:bg-blue-700 transition-all"
      >
        <span className="text-lg"></span> {/* Empty span to push content to the right */}
        <span className="text-lg flex items-center gap-2">
          Projects
          <ArrowRight size={20} />
        </span>
      </Link>
    </div>
  );
};

export default Experience;
