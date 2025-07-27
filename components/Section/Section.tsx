import React from "react";
import "./Section.scss";

interface SectionProps {
  heading?: string;
  children?: React.ReactNode;
}

const Section = ({ heading, children }: SectionProps) => {
  return (
    <section className="container">
      {heading && <h2 className="Section__heading">{heading}</h2>}
      {children}
    </section>
  );
};

export default Section;
