import React from "react";
import "./Card.css";

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
    <div className="card">
      {title && <h3>{title}</h3>}

      {years && <p className="card-years">{years}</p>}

      {location && <p className="card-location">{location}</p>}

      {description && (
        <div className="card-description">
          {Array.isArray(description) ? (
            <ul>
              {description.map((desc, i) => (
                <li key={`desc-${i}`}>{desc}</li>
              ))}
            </ul>
          ) : (
            description
          )}
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div className="card-technologies">
          {technologies.map((tech, i) => (
            <span key={`tech-${i}`} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      {link && (
        <a
          href={link}
          className="card-link"
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
