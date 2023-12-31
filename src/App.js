import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useTheme } from "./Theme/ThemeProvider";
import "./App.css";
import Footer from "./components/Footer";



function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <BrowserRouter>
      <Navbar className={` ${isDarkMode ? 'dark-theme' : ''}`} />
      <Routes>
        <Route
          path="about"
          element={<MainContainer />}
        />
        <Route path="skills" element={<MainContainer />} />
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
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
