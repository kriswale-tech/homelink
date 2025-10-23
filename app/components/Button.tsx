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
    primary: "bg-evergreen text-ivory",
    secondary: "bg-sand text-evergreen",
    tertiary: "bg-transparent text-evergreen border border-evergreen",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-1 text-base",
    large: "px-4 py-2 text-lg",
  };

  return (
    <button
      className={`rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
