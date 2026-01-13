import React from "react";
import "./Projects.css";
import { useIntersectionObserver } from "./useIntersectionObserver";
import Card from "./Card";

function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      title: "Punjab Judicial Academy Management System",
      description: (
        <>
          Designed and implemented a management system for the PJA, optimizing
          learning, hostel, and mess management. The system enables participant
          enrollment, schedules training, administers tests, tracks attendance,
          and oversees hostel and mess.
          <ul>
            <li key="requirement-gathering">
              Contributed to requirement gathering and designing the system
              architecture
            </li>
            <li key="ui-ux">Designed the UI/UX</li>
            <li key="frontend">
              Implemented front-end development using Next.js
            </li>
          </ul>
        </>
      ),
      technologies: ["Figma", "Next.js", "Git", "GitHub"],
      link: null,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects-section fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            linkText="View Project"
          />
        ))}
      </div>
    </section>
  );
}

export default React.memo(Projects);
