"use client"

import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define the type for each card data
interface ComponentCardData {
  component: React.ReactNode;
  title: string;
  description: string;
}

export function ComponentGrid({ data }: { data: ComponentCardData[] }) {
  const [isDarkMode, setIsDarkMode] = useState(true) // Default theme is dark

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-[#FAEDCE]'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'} font-hopesansregular`}>Components</h1>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleDarkMode} 
            className={`rounded-full ${isDarkMode ? 'border-white text-white hover:text-black hover:bg-white' : 'border-black text-black hover:text-white hover:bg-black'}`}
          >
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <div 
          className="grid gap-8" 
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Use auto-fill to fill available space
            justifyItems: 'start', // Start items from the left
            gridAutoFlow: 'row', // Make sure it flows in rows
          }}
        >
          {data.map((item, index) => (
            <Card 
              key={index} 
              className={`rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 ${isDarkMode ? 'bg-[#18181b] border border-gray-700' : 'bg-[#FEFAE0] border border-gray-200'}`}
              style={{ minHeight: '200px', width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} // Center all elements, with maxWidth to prevent stretching
            >
              <CardHeader className="w-full text-center">
                <CardTitle className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {item.title}  {/* Render title */}
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full text-center">
                {/* Render component above description */}
                <div className="flex justify-center mb-4">
                  {item.component}
                </div>
                <div className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} p-1 font-hopesans`}>
                  {item.description}  {/* Render description */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
