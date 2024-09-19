import SimpleButton from "@/components/custom/SimpleButton"
import SimpleIconButton from "@/components/custom/SimpleIconButton";
import { ComponentGrid } from "@/components/custom/ComponentGrid";
import { Component, Zap } from 'lucide-react';

export default function Home() {

  const dataArray = [
    { 
      component: <SimpleButton color="indigo" />, 
      title: "Lamp Button", 
      description: "A glowing button with a satisfying click animation." 
    },
    { 
      component: <SimpleIconButton icon={Zap} color="indigo" />, 
      title: "Lamp Icon", 
      description: "A glowing button that displays an icon." 
    }
  ]
  

  return (
    <div className="min-h-screen overflow-y-auto" style={{ backgroundColor: 'tan' }}>
      <div className="w-full">
        <ComponentGrid data={dataArray}/>
      </div>
    </div>
  );
}
