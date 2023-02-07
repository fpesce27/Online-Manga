import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes/themes'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

import { SSRProvider } from "@react-aria/ssr";
import { useRouter } from 'next/router';
import LoadingScreen from '@/components/LoadingScreen';
import React from 'react';
import ErrorScreen from '@/components/ErrorScreen';

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
          <Error />
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
    
    const handleStart = (url) => url !== router.asPath && setLoading(true)
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

function Error(){
  const router = useRouter()
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    const handleError = (err, url) => {
      if (url === router.asPath) {
        setError(err)
      }
    }

    router.events.on('routeChangeError', handleError)

    return () => {
      router.events.off('routeChangeError', handleError)
    }
  })

  return error && (
    <ErrorScreen />
  )
}