import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { portfolioData } from "../../config/portfolioData";
import Badge from "../ui/Badge";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { about } = portfolioData;

  return (
    <section
      id="about"
      ref={ref}
      className={`relative mx-auto my-section-my-sm bg-section px-0 py-section-py-sm text-center sm:my-section-my-md sm:py-section-py-md md:my-section-my md:py-section-py ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-all duration-1000 ease-out`}
    >
      <h2 className="mb-5 flex h-[110px] items-center justify-center px-3 text-[1.3rem] font-bold xs:mb-2 xs:min-h-[120px] xs:px-4 xs:text-[1.4rem] md:mb-2 md:min-h-[120px] md:px-0 md:text-[1.6rem]">
        <TypeAnimation
          sequence={about.typeAnimationSequence}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </h2>
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-[36px] text-center xs:gap-3 xs:px-4 md:flex-row md:items-end md:gap-[60px] md:text-left">
        <div className="flex-shrink-0 self-center xs:mb-0 xs:flex xs:justify-center xs:self-center md:-mb-5 md:self-end">
          <img
            src={about.profilePic}
            alt={about.name}
            fetchPriority="high"
            width="250"
            height="250"
            className="h-[150px] w-[150px] rounded-full object-cover xs:mx-auto xs:h-[180px] xs:w-[180px] md:h-[200px] md:w-[200px]"
            style={{ objectPosition: "60% top" }}
          />
        </div>
        <div className="flex-1 text-center leading-[1.8] xs:text-center md:text-left">
          <p className="mb-[14px] text-[1.1rem] leading-[1.8] text-text xs:mb-[12px] xs:text-[1rem] xs:leading-[1.6] md:mb-[12px] md:text-[1rem]">
            {about.bio}
          </p>

          <div className="mt-[30px] xs:mt-6 md:mt-6">
            <h3 className="mb-[15px] text-left text-[1.5rem] font-semibold text-text xs:mb-3 xs:text-center xs:text-[1.3rem] md:text-[1.3rem]">
              Skills
            </h3>
            <ul className="m-0 flex list-none flex-wrap gap-[10px] p-0 xs:justify-center xs:gap-2 md:justify-start md:gap-2">
              {about.skills.map((skill) => (
                <Badge key={skill} as="li" variant="primary">
                  {skill}
                </Badge>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
