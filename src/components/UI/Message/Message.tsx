import React from "react";

type MessageType = "error" | "success" | "info";

interface MessageProps {
  text: string;
  type?: MessageType;
  className?: string;
}

const Message: React.FC<MessageProps> = ({
  text,
  type = "info",
  className = "",
}) => {
  const baseStyles = "text-md font-medium";

  const typeStyles: Record<MessageType, string> = {
    error: "text-red-600",
    success: "text-green-600",
    info: "text-blue-600",
  };

  return (
    <p className={`${baseStyles} ${typeStyles[type]} ${className}`}>{text}</p>
  );
};

export default Message;
