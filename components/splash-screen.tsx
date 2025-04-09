"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import LoaderPage from "./loader"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const { theme, resolvedTheme, systemTheme } = useTheme()

  useEffect(() => { 
    const handleLoad = () => {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 500)
      return () => clearTimeout(timer)
    }

    window.addEventListener('load', handleLoad) 
    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => { 
    if (theme === "system" ? systemTheme : theme) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [theme, resolvedTheme, systemTheme])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <LoaderPage />
    </div>
  )
}
