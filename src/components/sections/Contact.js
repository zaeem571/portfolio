import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { portfolioData } from "../../config/portfolioData";

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { contact } = portfolioData;

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-section-py-sm px-0 bg-section relative mx-auto my-section-my-sm sm:py-section-py-md sm:my-section-my-md md:py-section-py md:my-section-my ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-5"} transition-all duration-1000 ease-out`}
    >
      <div className="max-w-[720px] mx-auto px-container-px-sm sm:px-container-px-md md:px-container-px">
        <div className="text-center">
          <h2 className="text-[1.5rem] font-bold mb-5 md:text-[1.6rem] xs:text-[1.4rem]">Contact</h2>
          <p className="text-[1.1rem] text-text leading-[1.8] mb-5 md:text-base xs:text-[0.95rem]">Feel free to reach out to me through any of these channels:</p>
          <div className="flex flex-row flex-wrap gap-sm justify-center items-center mt-lg xs:gap-md xs:mt-lg md:gap-lg">
            <a
              href={`mailto:${contact.email}`}
              className="text-white no-underline px-4 py-2 text-sm bg-primary rounded-[5px] flex items-center gap-[7px] shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] font-semibold transition-all duration-300 hover:bg-primary-hover hover:-translate-y-[2.7px] hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] focus:outline-2 focus:outline-offset-2 focus:outline-primary xs:py-3 xs:px-6 xs:text-base md:px-6 md:py-[10px] md:text-[0.95rem]"
            >
              <FaEnvelope className="text-sm xs:text-base" />
              Email
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline px-4 py-2 text-sm bg-primary rounded-[5px] flex items-center gap-[7px] shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] font-semibold transition-all duration-300 hover:bg-primary-hover hover:-translate-y-[2.7px] hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] focus:outline-2 focus:outline-offset-2 focus:outline-primary xs:py-3 xs:px-6 xs:text-base md:px-6 md:py-[10px] md:text-[0.95rem]"
            >
              <FaLinkedin className="text-sm xs:text-base" />
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline px-4 py-2 text-sm bg-primary rounded-[5px] flex items-center gap-[7px] shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] font-semibold transition-all duration-300 hover:bg-primary-hover hover:-translate-y-[2.7px] hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] focus:outline-2 focus:outline-offset-2 focus:outline-primary xs:py-3 xs:px-6 xs:text-base md:px-6 md:py-[10px] md:text-[0.95rem]"
            >
              <FaGithub className="text-sm xs:text-base" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
