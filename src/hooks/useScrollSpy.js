import { useEffect, useState, useMemo } from "react";

export const useScrollSpy = (sectionIds, rootMargin = "-40% 0px -55% 0px") => {
  const [activeId, setActiveId] = useState("");

  const sectionIdsString = useMemo(() => sectionIds.join(","), [sectionIds]);

  useEffect(() => {
    const ids = sectionIdsString.split(",");
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIdsString, rootMargin]);

  return activeId;
};

export default useScrollSpy;
