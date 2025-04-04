import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./RecentAppsModal.css";
const MAX_VISIBILITY = 3;

const RecentAppsModal = ({ isOpen, setIsOpen, visitedPages }) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (visitedPages.length > 0) {
      setActive(0); // Reset to the latest visited page when modal opens
    }
  }, [visitedPages]);

  // console.log("From Recent Apps Page: ", visitedPages);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 mx-auto">
        <div className="relative w-full max-w-lg h-[500px] flex items-center justify-center">
          {active > 0 && (
            <button className="hidden sm:block nav left text-3xl z-[90] mr-4" onClick={() => setActive((i) => i - 1)}>
              <TiChevronLeftOutline />
            </button>
          )}
          {(visitedPages || [])?.map((page, index) => (
            <div
              key={page.id}
              className="absolute carousel w-full h-full p-4 rounded-lg cursor-pointer flex flex-col items-center"
              onClick={() => {
                setTimeout(() => {
                  navigate(visitedPages[active]?.path);
                }, 100);
                setIsOpen(false);
              }}
            >
              <div
                className="card-container"
                style={{
                  "--active": index === active ? 1 : 0,
                  "--offset": active - index + 0.5 / 3,
                  "--direction": Math.sign(active - index),
                  "--abs-offset": Math.abs(active - index) / 3,
                  "pointer-events": index !== active ? "auto" : "none",
                  opacity: Math.abs(active - index) >= MAX_VISIBILITY ? "0" : "1",
                  display: Math.abs(active - index) > MAX_VISIBILITY ? "none" : "block",
                }}
              >
                {/* <p className="card text-white text-sm text-center">{page.title/path}</p> */}

                <img
                  src={page.thumbnail}
                  loading="lazy"
                  alt={page.title}
                  className="w-70 h-60 object-cover rounded-md mt-2"
                />
              </div>
            </div>
          ))}
          {active < visitedPages?.length - 1 && (
            <button className="hidden smd:block nav right text-3xl z-[90]" onClick={() => setActive((i) => i + 1)}>
              <TiChevronRightOutline />
            </button>
          )}
        </div>

        <div className="absolute bottom-20 flex justify-center gap-10 smd:hidden smd:border-4 smd:border-red-500">
          {active > 0 && (
            <button className="nav-mobile text-2xl" onClick={() => setActive((i) => i - 1)}>
              <TiChevronLeftOutline />
            </button>
          )}
          {active < visitedPages?.length - 1 && (
            <button className="nav-mobile text-2xl" onClick={() => setActive((i) => i + 1)}>
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
