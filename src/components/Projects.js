import React from "react";
import "./Projects.css";
import { useIntersectionObserver } from "./useIntersectionObserver";
import Card from "./Card";

const PROJECT_DATA = [
  {
    id: "pja-system",
    title: "Punjab Judicial Academy Management System",
    description: [
      "Developed a management system including learning, hostel, and mess management",
      "Enabled participant enrollment, schedules training, administers tests, tracks attendance",
      "Designed system documentation, including requirement gathering, use cases, workflows, ER diagrams, and other design-related tasks",
      "Designed the UI/UX in Figma and implemented the front-end using Next.js",
    ],
    technologies: ["Figma", "Next.js", "TypeScript"],
  },
];

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects-section fade-in ${isVisible ? "visible" : ""}`}
    >
      <h2>Projects</h2>
      <div className="projects-grid">
        {PROJECT_DATA.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Projects);
