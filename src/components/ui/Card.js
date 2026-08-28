import React from "react";
import Badge from "./Badge";
import Button from "./Button";

const Card = ({
  title,
  years,
  location,
  description,
  technologies,
  link,
  linkText = "View More",
  image,
  imageAlt,
}) => {
  return (
    <div className="rounded-[6px] bg-card p-[14px] shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-[4.5px] hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] xs:rounded-card xs:p-[18px] md:rounded-card md:p-lg">
      {image && (
        <div className="mb-md overflow-hidden rounded-[4px] border border-white/10">
          <img
            src={image}
            alt={imageAlt || title || "Project preview"}
            loading="lazy"
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 xs:h-56 md:h-64"
          />
        </div>
      )}
      {title && (
        <h3 className="mb-sm text-center text-[1.15rem] font-bold leading-[1.3] text-heading xs:text-[1.35rem] md:text-[1.8rem]">
          {title}
        </h3>
      )}

      {years && (
        <p className="mb-1 text-left text-base text-text-muted xs:text-[0.95rem] md:text-[0.95rem]">
          {years}
        </p>
      )}

      {location && (
        <p className="mb-sm text-left text-base text-text-muted xs:text-[0.95rem] md:text-[0.95rem]">
          {location}
        </p>
      )}

      {description && (
        <div className="my-sm mt-md px-sm text-[1.1rem] leading-[1.8] text-text xs:px-md xs:text-[0.95rem] md:px-lg md:text-base">
          {Array.isArray(description) ? (
            <ul className="ml-auto mr-auto w-fit list-disc px-[16px] text-left xs:px-[12px] md:px-0">
              {description.map((desc) => (
                <li key={desc} className="mb-sm leading-[1.5] xs:mb-[6px]">
                  {desc}
                </li>
              ))}
            </ul>
          ) : (
            description
          )}
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div className="my-md flex flex-wrap justify-center gap-sm xs:my-3 xs:gap-[6px] md:my-3 md:gap-[6px]">
          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      )}

      {link && (
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-lg px-[29px] py-[11px] text-sm xs:mt-md xs:w-full xs:px-0 xs:py-3 xs:text-[0.95rem] md:mt-md md:px-6 md:py-[10px] md:text-[0.95rem]"
        >
          {linkText}
        </Button>
      )}
    </div>
  );
};

export default React.memo(Card);
