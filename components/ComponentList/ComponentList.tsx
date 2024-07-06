import React, { useState } from "react";
import "./ComponentList.scss";
import { TextInput } from "../TextInput/TextInput";

interface Component {
  id: number;
  name: string;
  url: string;
}

interface ComponentListProps {
  components: Component[];
}

const ComponentList = ({ components }: ComponentListProps) => {
  // input test
  const [inputValue, setInputValue] = useState("");

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

      <TextInput
        id="my-input"
        label="Enter your name"
        placeholder="John Doe"
        value={inputValue}
        onChange={setInputValue}
        required
      />
    </div>
  );
};

export default ComponentList;
