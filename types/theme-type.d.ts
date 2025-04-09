import type React from "react"
export type Theme = "light" | "dark" | "system"

export interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  attribute?: string
}

export interface UseThemeProps {
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
}

export interface UseThemeReturn {
  theme: Theme | undefined
  setTheme: (theme: Theme) => void
  systemTheme?: "light" | "dark"
}
