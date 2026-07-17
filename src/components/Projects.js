import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Card from "./Card";

const PROJECT_DATA = [
  {
    id: "pja-system",
    title: "Punjab Judicial Academy Management System",
    description: [
      "Developed a management system including learning, hostel, and mess management",
      "Enabled participant enrollment, schedules training, administers tests, tracks attendance",
      "Designed system documentation, including requirement gathering, use cases, workflows,",
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
      className={`py-section-py-sm px-0 flex flex-col items-center bg-section relative mx-auto my-section-my-sm sm:py-section-py-md sm:my-section-my-md md:py-section-py md:my-section-my ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-5"} transition-all duration-1000 ease-out`}
    >
      <h2 className="text-[1.5rem] font-bold mb-5 md:text-[1.6rem] xs:text-[1.4rem]">Projects</h2>
      <div className="flex flex-col gap-sm px-container-px-sm max-w-[810px] mx-auto w-full sm:gap-md sm:px-container-px-md md:gap-lg md:px-container-px">
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
