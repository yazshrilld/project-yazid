import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
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
    <div>
      <motion.h1
        className="text-[42px] font-bold mb-6 text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Motivation & Work Ethic
      </motion.h1>
      <motion.div
        className="text-gray-500 mt-4 h-[60vh] overflow-y-auto px-2 py-1 text-gray-300 text-left thin-scrollbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {`I'm a web developer passionate about crafting elegant and efficient digital experiences.`}
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I strongly believe in continuous learning and improvement. Staying ahead in web development means keeping up
          with modern technologies and best practices. I follow industry leaders, contribute to open-source projects,
          and refine my skills to ensure I build impactful and future-proof applications.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Collaboration and effective communication are at the heart of my work ethic. I enjoy working with teams to
          bring ideas to life, ensuring every project meets both user expectations and business objectives. My attention
          to detail, problem-solving mindset, and passion for innovation drive me to deliver high-quality results.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Beyond coding, I have a deep passion for teaching and mentoring. I believe in sharing knowledge and empowering
          others to navigate the ever-evolving tech industry.
        </motion.p>
      </motion.div>
      <Link
        to="/experience"
        className="mt-4 bg-blue-600 max-w-[500px] px-6 py-2 rounded-full flex justify-between items-center shadow-md hover:bg-blue-700 transition-all"
      >
        <span className="text-lg"></span> {/* Empty span to push content to the right */}
        <motion.span className="text-lg flex items-center gap-2" initial="rest" whileHover="hover" animate="rest">
          Experience
          <motion.div className="inline-block" variants={linearRotate}>
            <ArrowRight size={20} />
          </motion.div>
        </motion.span>
      </Link>
    </div>
  );
};

export default AboutUs;
