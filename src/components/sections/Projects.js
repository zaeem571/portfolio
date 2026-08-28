import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Card from "../ui/Card";
import { portfolioData } from "../../config/portfolioData";

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative mx-auto my-section-my-sm flex flex-col items-center bg-section px-0 py-section-py-sm sm:my-section-my-md sm:py-section-py-md md:my-section-my md:py-section-py ${isVisible ? "animate-fade-in" : "translate-y-5 opacity-0"} transition-all duration-1000 ease-out`}
    >
      <h2 className="mb-5 text-[1.5rem] font-bold xs:text-[1.4rem] md:text-[1.6rem]">Projects</h2>
      <div className="mx-auto flex w-full max-w-[810px] flex-col gap-sm px-container-px-sm sm:gap-md sm:px-container-px-md md:gap-lg md:px-container-px">
        {projects.map((project) => (
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
