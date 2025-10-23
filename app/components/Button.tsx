import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary";
}

const Button = ({
  children,
  onClick,
  className,
  disabled,
  type,
  size = "medium",
  variant = "primary",
}: ButtonProps) => {
  const variantClasses = {
    primary:
      "bg-evergreen text-ivory hover:bg-ivory hover:text-evergreen transition-colors duration-300",
    secondary:
      "bg-sand text-evergreen hover:bg-evergreen hover:text-ivory transition-colors duration-300",
    tertiary:
      "bg-transparent text-evergreen border border-evergreen hover:bg-evergreen hover:text-ivory transition-colors duration-300",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-1 text-base",
    large: "px-4 py-2 text-lg",
  };

  return (
    <button
      className={`rounded-full cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
