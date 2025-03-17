import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import PropTypes from "prop-types";

const MAX_VISIBILITY = 3;

const Caraousel3D = ({ pages }) => {
  const [active, setActive] = useState(0);
  const count = pages.length;

  return (
    <div className="perspective-five">
      {active > 0 && (
        <button
          className="text-white text-5xl z-10"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}

      {pages.map(({ id, component }, i) => (
        <div
          key={id} // Use the unique id as the key instead of `i`
          className="absolute w-full h-full transition-all ease-out"
          style={{
            transform: `
        rotateY(${(active - i) * 50}deg)
        scaleY(${1 - Math.abs(active - i) * 0.4})
        translateZ(${Math.abs(active - i) * -30}rem)
        translateX(${(active - i) * -5}rem)
      `,
            filter: `blur(${Math.abs(active - i) * 1}rem)`,
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            pointerEvents: active === i ? "auto" : "none",
          }}
        >
          <div className="w-full h-full p-8 bg-white shadow-lg rounded-xl">
            {component} {/* Use component instead of page */}
          </div>
        </div>
      ))}

      {active < count - 1 && (
        <button
          className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 text-white text-5xl z-10"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

Caraousel3D.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Caraousel3D;
