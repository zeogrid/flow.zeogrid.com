"use client";

import * as React from "react";
import { LucideMoon, LucideSun, MonitorSmartphoneIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false); 

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);  
  };

  if (!mounted) {
    return null; 
  }

   
  const getButtonClasses = (currentTheme: string) => 
    `${theme === currentTheme ? "bg-secondary border-r-0" : "border-r-0"} transition-all ease-in-out duration-300`;

  return (
    <div className="flex items-center justify-center">
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleThemeChange("system")}
        className={getButtonClasses("system")}
      >
        <MonitorSmartphoneIcon />
      </Button>
 
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleThemeChange("light")}
        className={getButtonClasses("light")}
      >
        <LucideSun />
      </Button>
 
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleThemeChange("dark")}
        className={`${getButtonClasses("dark")} border-r`}
      >
        <LucideMoon />
      </Button>
    </div>
  );
}
