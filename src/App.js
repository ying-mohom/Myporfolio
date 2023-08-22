import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { useTheme } from "./Theme/ThemeProvider";
import "./App.css";


function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <BrowserRouter>
      <Navbar className={` ${isDarkMode ? 'dark-theme' : ''}`} />
      <Routes>
        <Route
          path="/"
          element={<MainContainer />}
        />
        <Route path="resume" element={<MainContainer />} />
        <Route path="projects" element={<MainContainer />} />
        <Route path="contact" element={<MainContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainContainer() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={` ${isDarkMode ? 'dark-theme' : ''}`}>
      <section id="#">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
