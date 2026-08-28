import React from "react";
import "./App.css"; /* Tailwind directives only */
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import WorkExperience from "./components/sections/WorkExperience";
import CertificateAndInvolvement from "./components/sections/CertificateAndInvolvement";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

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
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
