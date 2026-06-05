import React from "react";
import "./About.css";
import { TypeAnimation } from "react-type-animation";
import { useIntersectionObserver } from "./useIntersectionObserver";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skills = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
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
            "My name is Zaeem Mahmood and I'm a Front-end Developer",
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
            src="/portfolio/profilepic.webp"
            alt="Zaeem Mahmood"
            loading="lazy"
            width="250"
            height="250"
          />
        </div>
        <div className="about-text">
          <p>
            I'm a Computer Science student! I'm looking to specialize in AI and
            machine learning engineering.
          </p>

          <div className="skills-inline">
            <h3>Skills</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={`skill-${index}`} className="skill-item">
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
