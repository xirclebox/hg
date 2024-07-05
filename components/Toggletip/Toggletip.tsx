import React, { useState, useRef, useEffect } from "react";
import "./Toggletip.css";

interface ToggletipProps {
  content: string;
  children: React.ReactNode;
}

const Toggletip: React.FC<ToggletipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggletipRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      toggletipRef.current &&
      !toggletipRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="toggletip-container" ref={toggletipRef}>
      <button
        className="toggletip-trigger"
        onClick={handleToggle}
        aria-expanded={isVisible}
        aria-describedby="toggletip-content"
      >
        {children}
      </button>
      {isVisible && (
        <div
          id="toggletip-content"
          className="toggletip-content"
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Toggletip;
