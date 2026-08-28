import React from "react";
import "./App.css"; /* Tailwind directives only */
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import WorkExperience from "./components/sections/WorkExperience";
import CertificateAndInvolvement from "./components/sections/CertificateAndInvolvement";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <About />
        <WorkExperience />
        <Projects />
        <CertificateAndInvolvement />
        <Contact />
      </main>
    </div>
  );
}

export default App;
