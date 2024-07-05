import React, { useState, useRef, useEffect } from "react";
import "./PopoverMenu.css";

interface PopoverMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const PopoverMenu: React.FC<PopoverMenuProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popover-container">
      <button
        ref={triggerRef}
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="popover-trigger"
      >
        {trigger}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="popover-menu"
          role="menu"
          aria-label="Popover Menu"
          onKeyDown={handleKeyDown}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default PopoverMenu;
