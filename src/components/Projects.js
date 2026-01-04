import React from "react";
import "./Projects.css";
import "./animations.css";
import { useIntersectionObserver } from "./useIntersectionObserver";

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
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                className="project-link highlight-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
