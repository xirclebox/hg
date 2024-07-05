import React, { useState, useRef, useEffect } from "react";
import "./Popup.css";

interface PopupProps {
  trigger: React.ReactElement;
  content: React.ReactNode;
  title: string;
  onClose?: () => void;
}

const Popup: React.FC<PopupProps> = ({ trigger, content, title, onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: openPopup })}
      {isOpen && (
        <div
          className="popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className="popup" ref={popupRef}>
            <h2 id="popup-title" className="popup-title">
              {title}
            </h2>
            <div className="popup-content">{content}</div>
            <button
              onClick={closePopup}
              aria-label="Close popup"
              className="popup-close"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
