import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScrollSpy } from "../hooks/useScrollSpy";

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
  const ticking = useRef(false);

  const sectionIds = useMemo(() => NAV_ITEMS.map(({ id }) => id), []);
  const activeId = useScrollSpy(sectionIds) || "about";

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

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[999] flex items-center justify-center backdrop-blur-[7.2px] transition-all duration-300 ease-in-out ${
        isThin
          ? "h-[54px] bg-nav-thin shadow-[0_1.8px_4.5px_rgba(0,0,0,0.15)] backdrop-blur-[10.8px]"
          : "h-[72px] bg-nav shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)]"
      }`}
    >
      <div className="flex w-full max-w-[1080px] items-center justify-between px-[21.6px]">
        <a
          href="/portfolio/"
          className="rounded-[4px] text-[1.35rem] font-bold text-heading no-underline transition-colors duration-300 hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary"
          onClick={closeMenu}
        >
          Zaeem Mahmood
        </a>
        <button
          className="block cursor-pointer rounded-[4px] p-2 text-[1.62rem] text-heading transition-all duration-300 hover:bg-primary-light hover:text-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary md2:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          id="primary-navigation"
          className={`items-center text-center transition-all duration-300 ease-in-out md2:flex md2:flex-row md2:justify-end md2:gap-1 md2:opacity-100 ${
            isOpen
              ? "fixed left-0 top-[72px] z-[998] flex h-[calc(100vh-72px)] w-full translate-y-0 flex-col overflow-y-auto bg-nav-mobile pt-5 opacity-100 backdrop-blur-[10px]"
              : "hidden -translate-y-2 opacity-0"
          } ${isThin ? "top-[54px] h-[calc(100vh-54px)]" : ""}`}
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative flex h-[72px] cursor-pointer items-center whitespace-nowrap px-[0.35rem] text-heading no-underline transition-all duration-300 ease-in-out hover:text-primary md:flex md:h-auto md:min-h-[54px] md:px-3 md:py-5 ${
                isThin ? "md:h-[54px]" : ""
              } ${activeId === id ? "text-primary" : ""}`}
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
