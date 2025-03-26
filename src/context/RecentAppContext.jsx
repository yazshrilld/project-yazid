import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const RecentAppsContext = createContext();

export const RecentAppsProvider = ({ children }) => {
  const [recentApps, setRecentApps] = useState([]);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("recentApps")) || [];
    setRecentApps(storedApps);
  }, []);

  useEffect(() => {
    localStorage.setItem("recentApps", JSON.stringify(recentApps));
  }, [recentApps]);

  const addRecentApp = (app) => {
    setRecentApps((prevApps) => {
      const updatedApps = [...prevApps.filter((item) => item.path !== app.path), app];

      // Save to localStorage
      localStorage.setItem("recentApps", JSON.stringify(updatedApps));

      return updatedApps;
    });
  };

  const removeRecentApp = (appPath) => {
    setRecentApps((prev) => {
      const updatedApps = prev.filter((app) => app.path !== appPath);

      // Update localStorage
      localStorage.setItem("recentApps", JSON.stringify(recentApps.filter((app) => app.path !== appPath)));

      return updatedApps;
    });
  };

  return (
    <RecentAppsContext.Provider value={{ recentApps, addRecentApp, removeRecentApp }}>
      {children}
    </RecentAppsContext.Provider>
  );
};

RecentAppsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useRecentApps = () => useContext(RecentAppsContext);
