import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Resume from "./components/Resume";
import Projects from "./components/Projects";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="about"
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
  return (
    <div>
      <section id="about">
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
