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
      className={`py-section-py-sm px-0 flex flex-col items-center bg-section relative mx-auto my-section-my-sm sm:py-section-py-md sm:my-section-my-md md:py-section-py md:my-section-my ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-5"} transition-all duration-1000 ease-out`}
    >
      <h2 className="text-[1.5rem] font-bold mb-5 md:text-[1.6rem] xs:text-[1.4rem]">Projects</h2>
      <div className="flex flex-col gap-sm px-container-px-sm max-w-[810px] mx-auto w-full sm:gap-md sm:px-container-px-md md:gap-lg md:px-container-px">
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
