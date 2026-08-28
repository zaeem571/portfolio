import React from "react";

const Card = ({
  title,
  years,
  location,
  description,
  technologies,
  link,
  linkText = "View More",
}) => {
  return (
    <div className="bg-card rounded-[6px] p-[14px] shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] hover:-translate-y-[4.5px] xs:p-[18px] xs:rounded-card md:p-lg md:rounded-card">
      {title && <h3 className="text-heading text-[1.15rem] leading-[1.3] mb-sm text-center font-bold xs:text-[1.35rem] md:text-[1.8rem]">{title}</h3>}

      {years && <p className="text-text-muted text-base mb-1 text-left xs:text-[0.95rem] md:text-[0.95rem]">{years}</p>}

      {location && <p className="text-text-muted text-base mb-sm text-left xs:text-[0.95rem] md:text-[0.95rem]">{location}</p>}

      {description && (
        <div className="text-text text-[1.1rem] leading-[1.8] mt-md my-sm px-sm xs:px-md xs:text-[0.95rem] md:px-lg md:text-base">
          {Array.isArray(description) ? (
            <ul className="list-disc ml-auto mr-auto w-fit text-left px-[16px] xs:px-[12px] md:px-0">
              {description.map((desc) => (
                <li key={desc} className="mb-sm leading-[1.5] xs:mb-[6px]">{desc}</li>
              ))}
            </ul>
          ) : (
            description
          )}
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-sm justify-center my-md xs:gap-[6px] xs:my-3 md:gap-[6px] md:my-3">
          {technologies.map((tech) => (
            <span key={tech} className="bg-section px-sm py-[4.5px] rounded-full text-[0.9rem] text-text transition-all duration-300 hover:bg-card-hover hover:-translate-y-[1.8px] xs:text-[0.85rem] xs:px-2 xs:py-1 md:text-[0.85rem] md:px-2 md:py-1">
              {tech}
            </span>
          ))}
        </div>
      )}

      {link && (
        <a
          href={link}
          className="inline-block mt-lg px-[29px] py-[11px] bg-primary text-white no-underline rounded-[5px] font-semibold shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer hover:bg-primary-hover hover:-translate-y-[2.7px] hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] focus:outline-2 focus:outline-offset-2 focus:outline-primary xs:w-full xs:text-center xs:px-0 xs:py-3 xs:text-[0.95rem] xs:mt-md md:px-6 md:py-[10px] md:text-[0.95rem] md:mt-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default React.memo(Card);
