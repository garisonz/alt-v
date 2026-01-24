import React from 'react';

const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-mono text-xs uppercase tracking-widest transition-all focus:outline-none disabled:opacity-50 active:scale-95";

  const variants = {
    // High-impact blue against the deep black background
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.2)]",
    // Outline matches the terminal border color
    outline: "border border-[#262626] bg-transparent hover:bg-[#262626] text-[#e5e5e5]",
    // Subtle ghost variant for low-priority nav
    ghost: "bg-transparent hover:bg-[#0a0a0a] text-[#525252] hover:text-[#e5e5e5]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;