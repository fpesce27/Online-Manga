import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes/themes'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

import { SSRProvider } from "@react-aria/ssr";

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
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </SSRProvider>
  )
}
