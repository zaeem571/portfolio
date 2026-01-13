import React from "react";
import "./CertificateAndInvolvement.css";
import { useIntersectionObserver } from "./useIntersectionObserver";
import Card from "./Card";

function CertificateAndInvolvement() {
  const [ref, isVisible] = useIntersectionObserver();

  const involvements = [
    {
      title: "Executive Director of Finance & Pittsburgh Regional Director",
      company: "Steel City Codes",
      location: "Pittsburgh, PA",
      years: "May 2023 - June 2024",
      description: [
        "Wrote grant applications to support nationwide computer science education/diversity programs and hackathons",
        "Organized and taught Python and Java computer science summer camp reaching 200+ students and volunteers",
        "Managed and coordinated 17 after-school chapters throughout the Greater Pittsburgh region",
      ],
    },
  ];

  return (
    <section
      id="certificate-involvement"
      ref={ref}
      className={`certificate-involvement-section fade-in ${
        isVisible ? "visible" : ""
      }`}
    >
      <h2>Certificates & Involvement</h2>
      <div className="certificate-container">
        {involvements.map((inv, index) => (
          <Card
            key={index}
            title={`${inv.title} @ ${inv.company}`}
            years={inv.years}
            location={inv.location}
            description={inv.description}
          />
        ))}
      </div>
    </section>
  );
}

export default React.memo(CertificateAndInvolvement);
