import { useState, useEffect, useContext, useMemo, createContext } from 'react'
import { createTheme as createMaterialUiTheme, ThemeProvider as MaterialUiThemeProvider } from '@material-ui/core/styles';
import tailwindConfig from '../../tailwind.config.js'
const tailwindColors = tailwindConfig.theme.extend.colors

export const ThemeContext = createContext({
  theme: 'light',
  mutateTheme: () => {},
})

const useTheme = () => {
  const [theme, updateTheme] = useState('light')

  const mutateTheme = x => {
    localStorage.theme = x
    x === 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
    updateTheme(x)
  }

  useEffect(() => {
    const browserPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const storedTheme = localStorage.theme
    if (storedTheme === 'dark' || (storedTheme === undefined && browserPreferDark)) {
      mutateTheme('dark')
    } else {
      mutateTheme('light')
    }
  }, [])

  // ********************************
  // CUSTOMIZE MATERIAL UI THEME HERE
  // ********************************
  const materialUiTheme = useMemo(() => createMaterialUiTheme({
    palette: {
      type: theme,
      primary: {
        main: tailwindColors.primary[theme],
      },
      secondary: {
        main: tailwindColors.secondary[theme],
      },
    },
    typography: {
      fontFamily: [
        'Poppins',
      ].join(','),
    },
  }),[theme]);

  const ThemeProvider = ({ children }) => {
    return (
      <MaterialUiThemeProvider theme={materialUiTheme}>
        <ThemeContext.Provider value={{theme, mutateTheme}}>
          {children}
        </ThemeContext.Provider>
      </MaterialUiThemeProvider>
    )
  }

  return ThemeProvider
}

export default useTheme
