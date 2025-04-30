import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 24,
  color = "text-green-600",
  className = "",
}) => {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color} ${className}`}
      style={{ width: size, height: size }}
      role="status"
      aria-label="loading"
    />
  );
};

export default Spinner;
