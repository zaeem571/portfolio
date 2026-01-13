import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WorkExperience from "./components/WorkExperience";
import CertificateAndInvolvement from "./components/CertificateAndInvolvement";

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
