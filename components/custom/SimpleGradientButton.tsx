"use client";

import React from 'react';
import classNames from 'classnames';

interface SimpleGradientButtonProps {
  fromColor?: string;
  toColor?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const SimpleGradientButton: React.FC<SimpleGradientButtonProps> = ({
  fromColor = '#34D399',
  toColor = '#059669',
  onClick,
  children = 'Gradient Button',
  className,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
      }}
      className={classNames(
        "flex justify-center items-center shrink-0 text-white ring-1 shadow-xl rounded-xl w-48 h-12 font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
        "font-hopesans", // Ensure this font is defined in your Tailwind config
        className
      )}
      aria-label={typeof children === 'string' ? children : 'Gradient Button'}
    >
      {children}
    </button>
  );
};

export default SimpleGradientButton;
