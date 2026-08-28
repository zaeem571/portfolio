import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import Card from "../ui/Card";
import { portfolioData } from "../../config/portfolioData";

const WorkExperience = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { experiences } = portfolioData;

  return (
    <section
      id="work-experience"
      ref={ref}
      className={`relative mx-auto my-section-my-sm bg-section px-0 py-section-py-sm text-center sm:my-section-my-md sm:py-section-py-md md:my-section-my md:py-section-py ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-all duration-500 ease-out`}
    >
      <h2 className="mb-5 text-[1.5rem] font-bold xs:text-[1.4rem] md:text-[1.6rem]">
        Work Experience
      </h2>
      <div className="mx-auto flex w-full max-w-[810px] flex-col gap-sm px-container-px-sm sm:gap-md sm:px-container-px-md md:gap-lg md:px-container-px">
        {experiences.map((exp) => (
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
