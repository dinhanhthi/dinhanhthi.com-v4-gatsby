import { IconType } from 'react-icons/lib'

export type NavigationItem = {
  name: string
  path: string
  icon?: IconType
  external?: boolean
  hideOnDesktop?: boolean
  hide?: boolean // always hide
}

export type HeaderTypes = 'index' | 'blog' | 'post'

export type HeaderOptions = {
  pageTitle?: string
}

export type SocialBadge = {
  id?: string
  icon: any
  url: string
  title: string
  imgClass?: string
}

export type InfoBadge = {
  id?: string
  url: string
  title: string
  external?: boolean
  icon?: any
  customClasses?: string
  targetSelf?: boolean
}

export type SiteTheme = 'dark' | 'light'
