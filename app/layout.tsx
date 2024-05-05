'use client'
import Header from '@/components/Globals/Header';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className
          }}
        >
          <NextUIProvider>
            <Header />
            {children}
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  )
}

const lightTheme = createTheme({
  type: 'light',
  theme: {
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
  }
})
