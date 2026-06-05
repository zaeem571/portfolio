import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const SCROLL_THRESHOLD = 100;

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work-experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificate-involvement", label: "Certificates & Involvement" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThin, setIsThin] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const shouldBeThin = currentScrollY > SCROLL_THRESHOLD;

          setIsThin(shouldBeThin);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll-spy: highlight the nav item whose section is in view
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      Boolean,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-item ${activeId === id ? "active" : ""}`}
              aria-current={activeId === id ? "true" : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
