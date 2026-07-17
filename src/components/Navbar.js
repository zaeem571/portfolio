import React, { useState, useEffect, useRef, useCallback } from "react";
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

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className={`sticky top-0 z-[999] flex justify-center items-center backdrop-blur-[7.2px] transition-all duration-300 ease-in-out ${
      isThin
        ? "h-[54px] bg-nav-thin shadow-[0_1.8px_4.5px_rgba(0,0,0,0.15)] backdrop-blur-[10.8px]"
        : "h-[72px] bg-nav shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)]"
    }`}>
      <div className="flex justify-between items-center w-full max-w-[1080px] px-[21.6px]">
        <a href="/portfolio/" className="text-heading text-[1.35rem] font-bold no-underline transition-colors duration-300 hover:text-primary rounded-[4px] focus:outline-2 focus:outline-offset-2 focus:outline-primary" onClick={closeMenu}>
          Zaeem Mahmood
        </a>
        <div className="block md2:hidden text-[1.62rem] cursor-pointer text-heading p-2 rounded-[4px] transition-all duration-300 hover:text-primary hover:bg-primary-light focus:outline-2 focus:outline-offset-2 focus:outline-primary" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`items-center text-center md2:flex md2:flex-row md2:gap-1 md2:justify-end md2:opacity-100 transition-all duration-300 ease-in-out ${
            isOpen ? "flex flex-col w-full h-[calc(100vh-72px)] fixed top-[72px] left-0 opacity-100 bg-nav-mobile backdrop-blur-[10px] pt-5 overflow-y-auto z-[998] translate-y-0" : "hidden opacity-0 -translate-y-2"
          } ${
            isThin ? "h-[calc(100vh-54px)] top-[54px]" : ""
          }`}
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-heading flex items-center no-underline px-[0.35rem] h-[72px] cursor-pointer transition-all duration-300 ease-in-out relative hover:text-primary whitespace-nowrap md:h-auto md:py-5 md:px-3 md:flex md:border-l-[3px] md:border-l-transparent md:min-h-[54px] group ${
                isThin ? "md:h-[54px]" : ""
              } ${
                activeId === id ? "text-primary md:bg-gradient-to-r md:from-transparent md:via-primary-lighter md:to-transparent md:border-l-primary" : ""
              }`}
              aria-current={activeId === id ? "true" : undefined}
              onClick={closeMenu}
            >
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 md:hidden group-hover:w-4/5" style={{width: activeId === id ? "80%" : "0"}}></span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
