import React from "react";
import "./ComponentList.scss";

interface Component {
  id: number;
  name: string;
  url: string;
}

interface ComponentListProps {
  components: Component[];
}

const ComponentList = ({ components }: ComponentListProps) => {
  return (
    <div className="ComponentList-grid">
      {components.map((component) => (
        <a
          href={component.url}
          key={component.id}
          className="ComponentList-card"
        >
          <p>{component.name}</p>
        </a>
      ))}
    </div>
  );
};

export default ComponentList;
