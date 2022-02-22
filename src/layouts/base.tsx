import * as React from 'react'
import Header from '../components/header'
import Navigation from '../components/navigation'
import '../styles/main.scss'
import { HeaderOptions, HeaderTypes } from '../types/types'

export default function Base({
  children,
  headerType,
  headerOptions,
}: {
  children: React.ReactNode
  headerType: HeaderTypes
  headerOptions?: HeaderOptions
}) {
  return (
    <>
      <Navigation />
      <Header type={headerType} options={headerOptions} />
      <main role="main">{children}</main>
    </>
  )
}
