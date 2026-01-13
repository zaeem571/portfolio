import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const SCROLL_THRESHOLD = 100;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThin, setIsThin] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Only update if scroll passes threshold
          if (currentScrollY > SCROLL_THRESHOLD) {
            if (!isThin) setIsThin(true);
          } else {
            if (isThin) setIsThin(false);
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isThin]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isThin ? "navbar-thin" : ""}`}>
      <div className="navbar-container">
        <a href="/portfolio/" className="navbar-logo" onClick={closeMenu}>
          Zaeem Mahmood
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`nav-menu ${isOpen ? "active" : ""} ${
            isThin ? "navbar-menu-thin" : ""
          }`}
        >
          <a href="#about" className="nav-item" onClick={closeMenu}>
            About
          </a>
          <a href="#work-experience" className="nav-item" onClick={closeMenu}>
            Work Experience
          </a>
          <a href="#projects" className="nav-item" onClick={closeMenu}>
            Projects
          </a>
          <a
            href="#certificate-involvement"
            className="nav-item"
            onClick={closeMenu}
          >
            Certificates & Involvement
          </a>
          <a href="#contact" className="nav-item" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
