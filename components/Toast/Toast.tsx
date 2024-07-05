import React, { useState, useEffect } from "react";
import "./Toast.css";

interface ToastProps {
  message: string;
  duration?: number;
  type?: "info" | "success" | "warning" | "error";
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  duration = 20000,
  type = "info",
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div role="alert" aria-live="polite" className={`toast ${type}`}>
      <p>{message}</p>
      <button
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        aria-label="Close toast"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
