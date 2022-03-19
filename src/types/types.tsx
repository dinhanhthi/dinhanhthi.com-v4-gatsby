import { IconType } from 'react-icons/lib'

export type NavigationItem = {
  name: string
  path: string
  icon?: IconType
  external?: boolean
  hideOnDesktop?: boolean
  hide?: boolean // always hide
}

export type HeaderTypes = 'index' | 'about' | 'blog' | 'post' | 'notes'

export type HeaderOptions = {
  pageTitle?: string
  customClasses?: string
  pageSubtitle?: string
  pageIcon?: any
  pageDate?: string
  pageTags?: string[]
  pageCategory?: Category
  editLink?: string
}

export type Tag = {
  name?: string
  slug: string
}

export type Category = {
  name: string
  slug: string
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

export type TechItem = {
  id: string
  name: string
  icon: any
  url: string
  imgClass?: string
}

export type SkillGroupType = {
  id: string
  name: string
  list: string[]
}

export type CVItem = {
  id?: string
  where: string
  bgWhite?: boolean
  logo: any
  url?: string
  title: string
  date: string
  activity: string[]
  tech?: string[]
}

export type CVGroupType = {
  id?: string
  name: string
  list: CVItem[]
}

export type SiteTheme = 'dark' | 'light'

export type Project = {
  id?: string
  title: string
  icon?: string
  description: string
  source?: string
  url?: string
  tech?: string[]
  techText?: string[]
}
