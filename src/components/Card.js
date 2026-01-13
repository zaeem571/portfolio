import React from "react";
import "./Card.css";

const Card = ({
  title,
  subtitle,
  years,
  location,
  description,
  technologies,
  link,
  linkText = "View More",
  children,
  className = "",
}) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3>{title}</h3>}

      {subtitle && <p className="card-subtitle">{subtitle}</p>}

      {years && <p className="card-years">{years}</p>}

      {location && <p className="card-location">{location}</p>}

      {description && (
        <div className="card-description">
          {Array.isArray(description) ? (
            <ul>
              {description.map((desc, i) => (
                <li key={i}>{desc}</li>
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
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      {children}

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
