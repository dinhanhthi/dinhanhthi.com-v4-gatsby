/*
  Source: https://divyanshu013.dev/blog/gatsby-dark-mode/
*/

import { useState, useEffect } from 'react'

export const useTheme = () => {
  const storedTheme =
    typeof window !== 'undefined' && window.localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'light')
  const toggleTheme = () =>
    setTheme(prevTheme => {
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])
  return [theme, toggleTheme]
}

// export const getTheme = theme =>
//   theme === 'light'
//     ? {
//         background: '#fff',
//         color: 'hsla(0, 0%, 0%, 0.8)',
//         secondary: 'hsla(0, 0%, 0%, 0.7)',
//         muted: 'hsla(0, 0%, 0%, 0.6)',
//         borderColor: '#eee',
//         borderHoverColor: 'transparent',
//       }
//     : {
//         background: '#121212',
//         color: 'hsla(0, 0%, 100%, 0.87)',
//         secondary: 'hsla(0, 0%, 100%, 0.75)',
//         muted: 'hsla(0, 0%, 100%, 0.60)',
//         borderColor: 'hsla(0, 0%, 100%, 0.60)',
//         borderHoverColor: COLOR_PRIMARY,
//       }
