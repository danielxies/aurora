import SimpleButton from "@/components/custom/SimpleButton"
import SimpleIconButton from "@/components/custom/SimpleIconButton";
import SimpleGradientButton from "@/components/custom/SimpleGradientButton";
import SimpleToggle from "@/components/custom/SimpleToggle";

import { ComponentGrid } from "@/components/custom/ComponentGrid";
import { Zap } from 'lucide-react';

export default function Home() {

  const dataArray = [
    { 
      component: <SimpleButton color="apollo"/>, 
      title: "Lamp Button", 
      description: "A glowing button with a satisfying click animation." 
    },
    { 
      component: <SimpleGradientButton fromColor="#10b981" toColor="#be123c"/>, 
      title: "Gradient Button", 
      description: "Double the fun with a soft, smooth, gradient." 
    },
    { 
      component: <SimpleToggle color="amber" />, 
      title: "Switch Button", 
      description: "Good for turning off something. " 
    },
    { 
      component: <SimpleIconButton icon={Zap} color="emerald" />, 
      title: "Lamp Icon", 
      description: "A glowing button that displays an icon." 
    },
  ]
  

  return (
    <div className="min-h-screen overflow-y-auto" style={{ backgroundColor: 'tan' }}>
      <div className="w-full">
        <ComponentGrid data={dataArray}/>
      </div>
    </div>
  );
}
