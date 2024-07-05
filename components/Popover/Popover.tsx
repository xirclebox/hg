import React, { useState, useRef, useEffect } from "react";
import "./Popover.css";

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && contentRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = triggerRect.bottom + window.scrollY;
      let left = triggerRect.left + window.scrollX;

      if (left + contentRect.width > viewportWidth) {
        left = viewportWidth - contentRect.width - 10;
      }

      if (top + contentRect.height > viewportHeight) {
        top = triggerRect.top - contentRect.height + window.scrollY;
      }

      contentRef.current.style.top = `${top}px`;
      contentRef.current.style.left = `${left}px`;
    }
  }, [isOpen]);

  return (
    <div className="popover-container">
      <div
        ref={triggerRef}
        onClick={handleToggle}
        onKeyDown={(e) => e.key === "Enter" && handleToggle()}
        tabIndex={0}
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={contentRef}
          className="popover-content"
          role="dialog"
          aria-label="Popover content"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
