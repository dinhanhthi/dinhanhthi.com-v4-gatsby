import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Navigation from '../components/navigation'
import '../styles/main.scss'
import { HeaderOptions, HeaderTypes, SiteTheme } from '../types/types'
import siteConfig from '../data/settings'

export const toggleThemeTransition = 'transition duration-200 ease-in-out'

export default function Base({
  children,
  headerType,
  headerOptions,
}: {
  children: React.ReactNode
  headerType: HeaderTypes
  headerOptions?: HeaderOptions
}) {
  const [theme, setTheme] = useState(siteConfig.defaultTheme)
  const onUpdateTheme = (theme: SiteTheme) => {
    if (theme === 'dark') {
      setThemeTo(setTheme, 'light')
    } else if (theme === 'light') {
      setThemeTo(setTheme, 'dark')
    }
  }
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as SiteTheme
    if (savedTheme) {
      setThemeTo(setTheme, savedTheme)
    } else {
      setThemeTo(setTheme, siteConfig.defaultTheme)
    }
  }, [])
  const bgClass = 'bg-white dark:bg-[#282a36] ' + toggleThemeTransition
  return (
    <>
      <Navigation
        theme={theme as SiteTheme}
        onUpdateTheme={() => onUpdateTheme(theme as SiteTheme)}
      />
      <div className={bgClass}>
        <Header
          type={headerType}
          options={{
            ...headerOptions,
            customClasses: headerOptions?.customClasses
              ? headerOptions.customClasses + ' ' + bgClass
              : bgClass,
          }}
        />
      </div>
      <main className={bgClass} role="main">
        {children}
      </main>
    </>
  )
}

function setThemeTo(setTheme, theme: 'dark' | 'light') {
  localStorage.setItem('theme', theme)
  setTheme(theme)
  if (theme === 'dark') {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
  } else {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
  }
}
