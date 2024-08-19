// src/components/Button.js
import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  type = "button",
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) {
  // Define base classes for the button
  const baseClasses =
    "inline-flex items-center border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Size-specific classes
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  // Variant-specific classes
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    secondary: "bg-secondary text-primary hover:bg-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-500",
    outline: "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
