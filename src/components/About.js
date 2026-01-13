import React from "react";
import "./About.css";
import { TypeAnimation } from "react-type-animation";
import { useIntersectionObserver } from "./useIntersectionObserver";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skills = [
    "Python",
    "SQL",
    "Kotlin",
    "HTML/CSS",
    "Next.js",
    "Git",
    "GitHub",
    "Figma",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2>
        <TypeAnimation
          sequence={[
            "My name is Zaeem Mahmood and I'm a Computer Science Student",
            1000,
            "My name is Zaeem Mahmood and I'll be a future Android Developer",
            2000,
            "My name is Zaeem Mahmood and I'm a Problem Solver",
            2000,
            "My name is Zaeem Mahmood and I'm an AI Enthusiast",
            2000,
            "My name is Zaeem Mahmood and I'm a Lifelong Learner",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </h2>
      <div className="about-content">
        <div className="profile-picture">
          <img
            src="/portfolio/profilepic.png"
            alt="Zaeem Mahmood"
            loading="lazy"
            width="250"
            height="250"
          />
        </div>
        <div className="about-text">
          <p>
            Hi! My name is Zaeem and I'm a Computer Science student at
            Government College University, Lahore! I'm looking to specialize in
            AI and machine learning engineering.
          </p>

          <div className="skills-inline">
            <h3>Skills</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={skill} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
