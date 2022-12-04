import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import About from '../components/About'

import '@fortawesome/fontawesome-svg-core/styles.css'
import Experience from '../components/Experience'
import Projects from '../components/Projects'

interface themedAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { theme: string | undefined }
}

/*
Ideas for animations:
fade in my name first, then the subtitle, then left to right fade in of header and opacity 0 to 100 on the bouncing arrow
*/

export default function App({ Component, pageProps }: themedAppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header/>
      <Component {...pageProps} />
      <div className='min-h-screen'>
        <About/>
        <Experience/>
        <Projects/>
      </div>
      
    </ThemeProvider>
  )
}
