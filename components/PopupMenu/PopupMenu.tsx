import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import "./PopupMenu.scss";

interface PopupMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

const PopupMenu: React.FC<PopupMenuProps> = ({
  trigger,
  children,
  position = "bottom-left",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const getMenuItems = () => {
    if (!menuRef.current) return [];

    return Array.from(
      menuRef.current.querySelectorAll('[role="menuitem"]')
    ) as HTMLAnchorElement[];
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      setActiveIndex(0);

      setTimeout(() => {
        const menuItems = getMenuItems();
        if (menuItems.length > 0) {
          menuItems[0].focus();
        }
      }, 0);
    } else {
      setActiveIndex(-1);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveIndex(-1);

    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };
  }, [isOpen]);

  const handleKeyNavigation = (event: KeyboardEvent<HTMLUListElement>) => {
    if (!isOpen) return;

    const menuItems = getMenuItems();
    if (menuItems.length === 0) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((prevIndex) => {
          const newIndex = prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0;
          menuItems[newIndex]?.focus();
          return newIndex;
        });
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((prevIndex) => {
          const newIndex = prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1;
          menuItems[newIndex]?.focus();
          return newIndex;
        });
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (activeIndex >= 0 && menuItems[activeIndex]) {
          menuItems[activeIndex].click();
        }
        break;
    }
  };

  const handleFocus = (index: number) => {
    setActiveIndex(index);
  };

  const processedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;

    return React.cloneElement(child, {
      ...child.props,
      ref: (el: HTMLAnchorElement | null) => {
        if (menuItemsRef.current.length <= index) {
          menuItemsRef.current = [
            ...menuItemsRef.current,
            ...Array(index - menuItemsRef.current.length + 1).fill(null),
          ];
        }
        menuItemsRef.current[index] = el;
      },
      className: `menu-item ${index === activeIndex ? "active" : ""}`,
      onFocus: () => handleFocus(index),
      onClick: (e: React.MouseEvent) => {
        if (child.props.onClick) child.props.onClick(e);
        closeMenu();
      },
    });
  });

  return (
    <div className="popup-menu-container" ref={menuRef}>
      <button
        className="popup-menu-trigger"
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        ref={triggerRef}
      >
        {trigger}
      </button>

      {isOpen && (
        <ul
          className={`popup-menu ${position}`}
          role="menu"
          onKeyDown={handleKeyNavigation}
          aria-orientation="vertical"
        >
          {processedChildren}
        </ul>
      )}
    </div>
  );
};

export default PopupMenu;
