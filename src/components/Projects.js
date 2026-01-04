import React from "react";
import "./Projects.css";
import "./animations.css";
import { useIntersectionObserver } from "./useIntersectionObserver";
import Card from "./Card";

function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  const projects = [
    {
      title: "Punjab Judicial Academy Management System",
      description: (
        <>
          Designed and implemented a management system for the Punjab Judicial
          Academy, optimizing learning, hostel, and mess management. The system
          enables participant enrollment, schedules training, administers tests,
          tracks attendance, and oversees hostel and mess.
          <br />
          <br />I contributed to requirement gathering, designing the system
          architecture, UI/UX design, and front-end development using Next.js.
        </>
      ),
      technologies: ["Figma", "Next.js"],
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

export default Projects;
