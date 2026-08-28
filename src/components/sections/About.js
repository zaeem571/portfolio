import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { portfolioData } from "../../config/portfolioData";

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { about } = portfolioData;

  return (
    <section
      id="about"
      ref={ref}
      className={`py-section-py-sm px-0 text-center bg-section relative mx-auto my-section-my-sm sm:py-section-py-md sm:my-section-my-md md:py-section-py md:my-section-my ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-5"} transition-all duration-1000 ease-out`}
    >
      <h2 className="text-[1.3rem] font-bold mb-5 h-[110px] flex items-center justify-center px-3 xs:min-h-[120px] xs:mb-2 xs:text-[1.4rem] xs:px-4 md:min-h-[120px] md:mb-2 md:text-[1.6rem] md:px-0">
        <TypeAnimation
          sequence={about.typeAnimationSequence}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </h2>
      <div className="max-w-[1100px] mx-auto px-[36px] flex flex-col text-center items-center gap-4 relative md:flex-row md:text-left md:items-end md:gap-[60px] xs:gap-3 xs:px-4">
        <div className="flex-shrink-0 self-center md:self-end md:-mb-5 xs:mb-0 xs:self-center xs:flex xs:justify-center">
          <img
            src={about.profilePic}
            alt={about.name}
            loading="lazy"
            width="250"
            height="250"
            className="w-[150px] h-[150px] rounded-full object-cover xs:w-[180px] xs:h-[180px] xs:mx-auto md:w-[200px] md:h-[200px]"
            style={{objectPosition: "60% top"}}
          />
        </div>
        <div className="leading-[1.8] flex-1 text-center md:text-left xs:text-center">
          <p className="mb-[14px] text-[1.1rem] text-text leading-[1.8] xs:text-[1rem] xs:mb-[12px] xs:leading-[1.6] md:text-[1rem] md:mb-[12px]">
            {about.bio}
          </p>

          <div className="mt-[30px] xs:mt-6 md:mt-6">
            <h3 className="text-[1.5rem] mb-[15px] text-text text-left font-semibold xs:text-center xs:text-[1.3rem] xs:mb-3 md:text-[1.3rem]">Skills</h3>
            <ul className="flex flex-wrap gap-[10px] list-none p-0 m-0 xs:justify-center xs:gap-2 md:justify-start md:gap-2">
              {about.skills.map((skill) => (
                <li key={skill} className="bg-primary text-white px-[16px] py-[8px] rounded-[20px] text-[0.9rem] font-medium transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 cursor-default xs:text-[0.85rem] xs:px-[14px] xs:py-[7px] md:text-[0.85rem] md:px-[14px] md:py-[7px]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
