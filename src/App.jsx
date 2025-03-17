import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import ReachOut from "./pages/ReachOut/ReachOut";
// import { DarkModeProvider } from "./context/DarkModeCOntext";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<ReachOut />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;