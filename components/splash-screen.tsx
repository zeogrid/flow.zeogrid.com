"use client"

import { useEffect, useState } from "react"
import LoaderPage from "./loader"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleDomReady = () => {
      
      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        
        setTimeout(() => {
          setIsVisible(false)
        }, 500)  
      }
    }

    handleDomReady()
    document.addEventListener('readystatechange', handleDomReady) 
    return () => {
      document.removeEventListener('readystatechange', handleDomReady)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <LoaderPage />
    </div>
  )
}
