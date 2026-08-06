import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Card from "./Card";

const INVOLVEMENTS = [
  {
    title: "Finance Executive",
    company: "IEEE GCU Student Branch",
    location: "GCU, Lahore",
    years: "Nov 2024 - May 2025",
    description: [
      "Led a finance team, owning financial planning, budgeting, and expense tracking across student-led events and activities.",
      "Managed financial operations, documentation, and records, ensuring accurate tracking and smooth execution of organizational activities.",
    ],
  },
  {
    title: "HEC GEN AI Program",
    company: "Aspire Pakistan",
    location: "Remote",
    years: "Oct 2025 - Nov 2025",
    description: [
      "Completed the HEC Generative AI program covering LLMs, prompt engineering, RAG systems, AI agents, and AI application development and deployment workflows.",
      "Built AI-powered solutions using API integrations, vector databases, and AI-assisted prototyping, applying real-world AI development workflows.",
    ],
  },
];

const CertificateAndInvolvement = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section
      id="certificate-involvement"
      ref={ref}
      className={`py-section-py-sm px-0 text-center bg-section relative mx-auto my-section-my-sm sm:py-section-py-md sm:my-section-my-md md:py-section-py md:my-section-my ${isVisible ? "animate-fade-in" : "opacity-0 translate-y-5"} transition-all duration-1000 ease-out`}
    >
      <h2 className="text-[1.5rem] font-bold mb-5 md:text-[1.6rem] xs:text-[1.4rem]">Certificates & Involvement</h2>
      <div className="flex flex-col gap-sm px-container-px-sm max-w-[810px] mx-auto w-full sm:gap-md sm:px-container-px-md md:gap-lg md:px-container-px">
        {INVOLVEMENTS.map((inv) => (
          <Card
            key={inv.id}
            title={`${inv.title} @ ${inv.company}`}
            years={inv.years}
            location={inv.location}
            description={inv.description}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(CertificateAndInvolvement);
