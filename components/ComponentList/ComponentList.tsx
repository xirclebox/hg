import React from "react";
import "./ComponentList.scss";
import Button from "../Button/Button";

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
      <Button disabled onClick={() => {}}>
        Test
      </Button>
    </div>
  );
};

export default ComponentList;
