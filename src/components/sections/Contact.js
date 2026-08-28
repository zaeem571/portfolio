import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { portfolioData } from "../../config/portfolioData";
import Button from "../ui/Button";

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const { contact } = portfolioData;

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative mx-auto my-section-my-sm bg-section px-0 py-section-py-sm sm:my-section-my-md sm:py-section-py-md md:my-section-my md:py-section-py ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-all duration-1000 ease-out`}
    >
      <div className="mx-auto max-w-[720px] px-container-px-sm sm:px-container-px-md md:px-container-px">
        <div className="text-center">
          <h2 className="mb-5 text-[1.5rem] font-bold xs:text-[1.4rem] md:text-[1.6rem]">
            Contact
          </h2>
          <p className="mb-5 text-[1.1rem] leading-[1.8] text-text xs:text-[0.95rem] md:text-base">
            Feel free to reach out to me through any of these channels:
          </p>
          <div className="mt-lg flex flex-row flex-wrap items-center justify-center gap-sm xs:mt-lg xs:gap-md md:gap-lg">
            <Button
              href={`mailto:${contact.email}`}
              icon={FaEnvelope}
              className="px-4 py-2 text-sm xs:px-6 xs:py-3 xs:text-base md:px-6 md:py-[10px] md:text-[0.95rem]"
            >
              Email
            </Button>
            <Button
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              icon={FaLinkedin}
              className="px-4 py-2 text-sm xs:px-6 xs:py-3 xs:text-base md:px-6 md:py-[10px] md:text-[0.95rem]"
            >
              LinkedIn
            </Button>
            <Button
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              icon={FaGithub}
              className="px-4 py-2 text-sm xs:px-6 xs:py-3 xs:text-base md:px-6 md:py-[10px] md:text-[0.95rem]"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
