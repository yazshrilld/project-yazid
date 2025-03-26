import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./RecentAppsModal.css";
const MAX_VISIBILITY = 3;

const RecentAppsModal = ({ isOpen, setIsOpen, visitedPages }) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  console.log("From Recent Apps Page: ", visitedPages);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 w-[50%] mx-auto">
        <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center border-4 border-red-500">
          {active > 0 && (
            <button className="nav left text-3xl z-[90] mr-4" onClick={() => setActive((i) => i - 1)}>
              <TiChevronLeftOutline />
            </button>
          )}
          {(visitedPages || [])?.map((page, index) => (
            <div
              key={page.id}
              className="absolute carousel w-full h-full p-4 rounded-lg cursor-pointer flex flex-col items-center"
              onClick={() => {
                setIsOpen(false);
                navigate(page.path);
              }}
            >
              <div
                className="card-container"
                style={{
                  "--active": index === active ? 1 : 0,
                  "--offset": (active - index) / 3,
                  "--direction": Math.sign(active - index),
                  "--abs-offset": Math.abs(active - index) / 3,
                  "pointer-events": active === index ? "auto" : "none",
                  opacity: Math.abs(active - index) >= MAX_VISIBILITY ? "0" : "1",
                  display: Math.abs(active - index) > MAX_VISIBILITY ? "none" : "block",
                }}
              >
                {/* <p className="card text-white text-sm text-center">{page.title}</p> */}
                <img src={page.thumbnail} alt={page.title} className="w-40 h-40 object-cover rounded-md mt-2" />
              </div>
            </div>
          ))}
          {active < visitedPages?.length - 1 && (
            <button className="nav right text-3xl z-[90]" onClick={() => setActive((i) => i + 1)}>
              <TiChevronRightOutline />
            </button>
          )}
        </div>

        <button
          className="absolute top-5 right-[50%] text-white text-lg hover:text-red-500 hover:text-2xl transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
      </div>
    )
  );
};

RecentAppsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  visitedPages: PropTypes.array.isRequired,
};

export default React.memo(RecentAppsModal);
