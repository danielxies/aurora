import React from 'react';

// Define the color options for this component
type ColorOption = 'amber' | 'indigo' | 'crimson' | 'gray' | 'superdarkgray' | 'emerald' | 'apollo';

// Define the styles object
const colorStyles: Record<ColorOption, {
  from: string;
  to: string;
  text: string;
  ring: string;
  shadow: string;
}> = {
  amber: {
    from: 'from-yellow-200/75',
    to: 'to-orange-200/75',
    text: 'text-white',
    ring: 'ring-amber-400/60',
    shadow: 'shadow-amber-500/30',
  },
  indigo: {
    from: 'from-indigo-400/75',
    to: 'to-blue-600/75',
    text: 'text-white',
    ring: 'ring-indigo-500/60',
    shadow: 'shadow-indigo-500/30',
  },
  crimson: {
    from: 'from-red-500/75',
    to: 'to-red-700/75',
    text: 'text-white',
    ring: 'ring-red-600/60',
    shadow: 'shadow-red-600/30',
  },
  gray: {
    from: 'from-gray-200/75',
    to: 'to-gray-400/75',
    text: 'text-black',
    ring: 'ring-gray-400/60',
    shadow: 'shadow-gray-400/30',
  },
  superdarkgray: {
    from: 'from-gray-900/75',
    to: 'to-black/75',
    text: 'text-white',
    ring: 'ring-black/60',
    shadow: 'shadow-black/30',
  },
  emerald: {
    from: 'from-emerald-400/75',
    to: 'to-emerald-600/75',
    text: 'text-white',
    ring: 'ring-emerald-500/60',
    shadow: 'shadow-emerald-500/30',
  },
  apollo: {
    from: 'from-indigo-500/75', // #6366f1 maps to indigo-500
    to: 'to-blue-700/75',       // A complementary deeper shade for gradient effect
    text: 'text-white',         // Keep the text white for good contrast
    ring: 'ring-indigo-500/60', // Use the base indigo color for the ring
    shadow: 'shadow-indigo-500/30', // A lighter shadow with indigo tone
  }

};

interface SimpleButtonProps {
  color?: ColorOption; // Define the color prop as optional, defaulting to 'amber'
  buttonText?: string; // Define the buttonText prop as optional, defaulting to 'Hello Button'
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ color = 'amber', buttonText = 'Hello Button' }) => {
  const styles = colorStyles[color]; // Get the style for the selected color
  
  return (
    <button
      className={`flex justify-center items-center shrink-0 bg-gradient-to-br ${styles.from} ${styles.to} ${styles.text} ${styles.ring} ${styles.shadow} ring-1 shadow-xl rounded-xl w-48 h-12 font-semibold transition-all duration-150 ease-in-out transform hover:brightness-105 active:scale-95 font-hopesans`}
    >
      {buttonText}
    </button>
  );
};

export default SimpleButton;