import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const SCROLL_THRESHOLD = 300;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#282c34]/90 text-heading border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(124,58,237,0.4)] focus:outline-2 focus:outline-offset-2 focus:outline-primary ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
};

export default React.memo(BackToTop);
