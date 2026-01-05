import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import CertificateAndInvolvement from "./components/CertificateAndInvolvement";

function App() {
  const aboutSectionRef = useRef(null);

  return (
    <div className="App">
      <Navbar aboutSectionRef={aboutSectionRef} />
      <main>
        <About ref={aboutSectionRef} />
        <WorkExperience />
        <Projects />
        <CertificateAndInvolvement />
        <Contact />
      </main>
    </div>
  );
}

export default App;
