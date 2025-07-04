import React from "react";
import { Button } from "./button";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

// Enhanced CTA button with #F20C1F theme
export function CTAButton({ children, className, ...props }: CTAButtonProps) {
  return (
    <Button
      className={`bg-[#F20C1F] hover:bg-[#D10A1A] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#F20C1F] hover:border-white/20 ${className || ""}`}
      {...props}
    >
      {children}
    </Button>
  );
} 