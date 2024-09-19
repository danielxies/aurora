import React from 'react';
import { LucideIcon } from 'lucide-react';

// Define the color options as a union type
type ColorOption = 'amber' | 'indigo' | 'crimson' | 'gray' | 'superdarkgray';

// Define the styles object with a properly typed key and higher transparency values
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
};

interface SimpleIconButtonProps {
  icon: LucideIcon;
  color?: ColorOption; // Define the color prop as optional, defaulting to 'amber'
}

const SimpleIconButton: React.FC<SimpleIconButtonProps> = ({ icon: Icon, color = 'amber' }) => {
  const styles = colorStyles[color]; // TypeScript now knows `color` is one of the valid keys

  return (
    <button
      className={`flex justify-center items-center shrink-0 bg-gradient-to-br ${styles.from} ${styles.to} ${styles.text} ${styles.ring} ${styles.shadow} ring-1 shadow-xl rounded-xl w-12 h-12 transition-all duration-150 ease-in-out transform hover:brightness-105 active:scale-95`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

export default SimpleIconButton;