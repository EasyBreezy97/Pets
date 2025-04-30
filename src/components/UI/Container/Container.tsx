import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`px-4 py-6 max-w-7xl mx-auto min-h-[calc(100vh-80px)] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
