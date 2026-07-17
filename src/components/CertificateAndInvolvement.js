import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Card from "./Card";

const INVOLVEMENTS = [
  {
    id: "steel-city-codes",
    title: "Finance Executive",
    company: "IEEE GCU Branch",
    location: "Pittsburgh, PA",
    years: "May 2023 - June 2024",
    description: [
      "Wrote grant applications to support nationwide computer science education/d",
      "Organized and taught Python and Java computer science summer camp reaching",
      "Managed and coordinated 17 after-school chapters throughout the",
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
