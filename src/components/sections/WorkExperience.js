import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { portfolioData } from "../../config/portfolioData";

const isActive = (years) =>
  typeof years === "string" && years.toLowerCase().includes("present");

const WorkExperience = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { experiences } = portfolioData;

  return (
    <section
      id="work-experience"
      ref={ref}
      className={`relative mx-auto my-section-my-sm bg-section px-0 py-section-py-sm text-center sm:my-section-my-md sm:py-section-py-md md:my-section-my md:py-section-py ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-all duration-500 ease-out`}
    >
      <h2 className="mb-8 text-[1.5rem] font-bold xs:text-[1.4rem] md:text-[1.6rem]">
        Work Experience
      </h2>

      {/* Timeline container */}
      <div className="mx-auto w-full max-w-[810px] px-container-px-sm sm:px-container-px-md md:px-container-px">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 hidden h-full w-[2px] bg-primary/30 md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex gap-6 text-left">
                {/* Timeline dot */}
                <div className="relative hidden flex-shrink-0 md:block">
                  <div className="mt-[6px] h-4 w-4 rounded-full border-2 border-primary bg-section" />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-[6px] bg-card p-[14px] shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[4.5px] hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] xs:rounded-card xs:p-[18px] md:rounded-card md:p-lg">
                  {/* Header row: left = title+company, right = date+location+badge */}
                  <div className="mb-sm flex flex-wrap items-start justify-between gap-2">
                    {/* Left */}
                    <div>
                      <h3 className="text-[1.15rem] font-bold leading-[1.3] text-heading xs:text-[1.35rem] md:text-[1.8rem]">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-[1.05rem] font-semibold text-primary xs:text-[1.15rem] md:text-[1.25rem]">
                        {exp.company}
                      </p>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-end gap-1">
                      {isActive(exp.years) && (
                        <span className="mb-0.5 inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 text-[0.75rem] font-semibold text-green-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                          Current
                        </span>
                      )}
                      <p className="text-right text-base text-text-muted xs:text-[0.95rem] md:text-[0.95rem]">
                        {exp.years}
                      </p>
                      {exp.location && (
                        <p className="text-right text-base text-text-muted xs:text-[0.95rem] md:text-[0.95rem]">
                          {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {Array.isArray(exp.description) && (
                    <div className="my-sm mt-md px-sm text-[1.1rem] leading-[1.8] text-text xs:px-md xs:text-[0.95rem] md:px-lg md:text-base">
                      <ul className="ml-auto mr-auto w-fit list-disc px-[16px] text-left xs:px-[12px] md:px-0">
                        {exp.description.map((item) => (
                          <li key={item} className="mb-sm leading-[1.5] xs:mb-[6px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(WorkExperience);
