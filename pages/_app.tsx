import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider } from 'next-themes'
import { lightTheme, darkTheme, GlobalStyles } from '../ThemeConfig'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Header from '../components/Header'
import About from '../components/about'

import '@fortawesome/fontawesome-svg-core/styles.css'

interface themedAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { theme: string | undefined }
}

export default function App({ Component, pageProps }: themedAppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header/>
      <Component {...pageProps} />
      <About/>
    </ThemeProvider>
  )
}
