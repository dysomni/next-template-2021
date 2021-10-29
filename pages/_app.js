import '../styles/main.scss'
import useTheme from '../lib/hooks/useTheme'
import { useEffect } from 'react'
import _ from 'lodash'

const MyApp = ({ Component, pageProps }) => {
  const ThemeProvider = useTheme()

  const bodyClasses = [
    'bg-background-light',
    'dark:bg-background-dark',
    'text-foreground-light',
    'dark:text-foreground-dark'
  ]

  useEffect(() => {
    document.querySelector("body").classList.add(...bodyClasses)
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp