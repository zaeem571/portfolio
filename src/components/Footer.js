import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../config/portfolioData";

const Footer = () => {
  const { contact, about } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#1a1d23] px-6 py-8 text-center">
      {/* Social links */}
      <div className="mb-4 flex items-center justify-center gap-6">
        <a
          href={`mailto:${contact.email}`}
          aria-label="Email"
          className="text-text-muted transition-colors duration-200 hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-text-muted transition-colors duration-200 hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-text-muted transition-colors duration-200 hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          <FaGithub size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[0.85rem] text-text-muted">
        © {year} {about.name}. Built with React.
      </p>
    </footer>
  );
};

export default React.memo(Footer);
