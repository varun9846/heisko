import React from "react";
import { Button } from "./button";

interface CTAButtonProps {
  children: React.ReactNode;
  // Accept any other button props
  [key: string]: any;
}

// Reusable red-themed CTA button
export function CTAButton({ children, ...props }: CTAButtonProps) {
  return (
    <Button
      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors"
      {...props}
    >
      {children}
    </Button>
  );
} 