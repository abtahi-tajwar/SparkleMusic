import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

type ThemeContextProps = {
    theme: Config.Theme,
    children: React.ReactNode
}

export const ThemeContext = createContext<Config.Theme | null>(null);

export const useTheme = () : Config.Theme => {
    return useContext(ThemeContext) as Config.Theme;
}

export function ThemeProvider({ theme, children } : ThemeContextProps) {
  return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
  )
}