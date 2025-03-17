import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const ReachOut = () => {
  return (
    <div className="flex items-center justify-center space-y-4">
      <div className="py-6">
        <h2 className="text-[42px] font-bold mb-6 text-white ">Reach Out</h2>
        <p className="text-gray-400 py-2">Feel free to drop me a line using the form or any of my socials.</p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full h-28 bg-gray-800 text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition-all"
          >
            Send
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-6 text-gray-400 py-2">
          <a href="https://x.com" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com" className="hover:text-white">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
