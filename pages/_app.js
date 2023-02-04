import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes/themes'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

import { SSRProvider } from "@react-aria/ssr";
import { useRouter } from 'next/router';
import LoadingScreen from '@/components/LoadingScreen';
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Loading />
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </SSRProvider>
  )
}

function Loading(){
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  
  React.useEffect(() => {
    /* if router contains /search, do not show */
    
    const handleStart = (url) => url !== router.asPath && !url.includes('/search') && setLoading(true)
    const handleComplete = (url) => url === router.asPath && setLoading(false)


    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (
    <LoadingScreen />
  )

}
