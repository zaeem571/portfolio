import React from "react";
import "./WorkExperience.css";
import { useIntersectionObserver } from "./useIntersectionObserver";
import Card from "./Card";

function WorkExperience() {
  const [ref, isVisible] = useIntersectionObserver();

  const experiences = [
    {
      title: "International Student Services Assistant",
      company: "Penn State Global",
      location: "University Park, PA",
      years: "September 2024 - Present",
      description: [
        "Provided front-desk assistance to Penn State's over 9,000 international students and scholars",
        "Worked closely with International Student Advisors to coordinate appointments and handle emergencies",
        "Utilized LLMs to filter and organize common student queries into an FAQ page for Penn State Global's website",
      ],
    },
  ];

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
        {experiences.map((exp, index) => (
          <Card
            key={index}
            title={`${exp.title} @ ${exp.company}`}
            years={exp.years}
            location={exp.location}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
}

export default React.memo(WorkExperience);
