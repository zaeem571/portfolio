import React from "react";
import "./WorkExperience.css";
import { useIntersectionObserver } from "./useIntersectionObserver";
import Card from "./Card";

const EXPERIENCES = [
  {
    id: "arzen-inc",
    title: "Development Intern",
    company: "Arzen Inc.",
    location: "Lahore, Pakistan.",
    years: "March 2026 - Present",
    description: [
      "Working on production-level projects implementing industry’s best practices",
      "Built front-end features using Next.js with SSR and SSG for live production websites",
      "Implemented CMS (Strapi) on websites to allow non-technical content management",
      "Developed REST APIs to connect front-end with backend systems",
    ],
  },
];

const WorkExperience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="work-experience"
      ref={ref}
      className={`work-experience-section fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <h2>Work Experience</h2>
      <div className="experiences-container">
        {EXPERIENCES.map((exp) => (
          <Card
            key={exp.id}
            title={`${exp.title} @ ${exp.company}`}
            years={exp.years}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(WorkExperience);
