import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { useTheme, ThemeProvider } from 'next-themes'
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig'
import ThemeSwitcher from '../components/ThemeSwitcher'

interface themedAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { theme: string | undefined }
}

export default function App({ Component, pageProps }: themedAppProps) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Component {...pageProps} />
      <ThemeSwitcher/>
    </ThemeProvider>
  )
}
