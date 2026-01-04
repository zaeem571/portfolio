import React, { forwardRef } from "react";
import "./About.css";
import "./animations.css";
import { TypeAnimation } from "react-type-animation";
import { useIntersectionObserver } from "./useIntersectionObserver";

const About = forwardRef((props, ref) => {
  const [internalRef, isVisible] = useIntersectionObserver();

  // Combine the internal ref with the forwarded ref
  const setRefs = (node) => {
    internalRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <section
      id="about"
      ref={setRefs}
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
        />
      </h2>
      <div className="profile-picture">
        <img src="/portfolio/profilepic.png" alt="Leona Chen" />
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! My name is Zaeem and I'm a Computer Science student at
            Government College University, Lahore! I'm looking to specialize in
            AI and machine learning engineering.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
