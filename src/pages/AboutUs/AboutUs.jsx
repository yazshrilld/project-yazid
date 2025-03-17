import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-[42px] font-bold mb-6 text-white mb-10">Motivation & Work Ethic</h1>
      <div className="text-gray-500 mt-4 h-[60vh] overflow-y-auto px-2 py-1 text-gray-300 text-left thin-scrollbar">
        <p className="text-gray-300">
          {`I'm a web developer passionate about crafting elegant and efficient digital experiences.`}
        </p>
        <br />
        <p>
          I strongly believe in continuous learning and improvement. Staying ahead in web development means keeping up
          with modern technologies and best practices. I follow industry leaders, contribute to open-source projects,
          and refine my skills to ensure I build impactful and future-proof applications.
        </p>
        <br />
        <p>
          Collaboration and effective communication are at the heart of my work ethic. I enjoy working with teams to
          bring ideas to life, ensuring every project meets both user expectations and business objectives. My attention
          to detail, problem-solving mindset, and passion for innovation drive me to deliver high-quality results.
        </p>
        <br />
        <p>
          Beyond coding, I have a deep passion for teaching and mentoring. I believe in sharing knowledge and empowering
          others to navigate the ever-evolving tech industry.
        </p>
      </div>

      <Link
        to="/experience"
        className="mt-4 bg-blue-600 max-w-[500px] px-6 py-2 rounded-full flex justify-between items-center shadow-md hover:bg-blue-700 transition-all"
      >
        <span className="text-lg"></span> {/* Empty span to push content to the right */}
        <span className="text-lg flex items-center gap-2">
          Experience
          <ArrowRight size={20} />
        </span>
      </Link>
    </div>
  );
};

export default AboutUs;
