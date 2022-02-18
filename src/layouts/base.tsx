import * as React from 'react'
import Navigation from '../components/navigation'
import '../styles/main.scss'

export default function Base({ children }) {
  return (
    <>
      <Navigation />
      <main role="main">{children}</main>
    </>
  )
}
