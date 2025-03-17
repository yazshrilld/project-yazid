// import { createContext, useState, useEffect, useContext } from "react";
// import PropTypes from "prop-types";

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("theme") === "dark";
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
// };

// DarkModeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export const useDarkMode = () => useContext(DarkModeContext);
