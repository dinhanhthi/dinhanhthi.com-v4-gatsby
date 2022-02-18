import { IconType } from 'react-icons/lib'

export type NavigationItem = {
  name: string
  path: string
  icon?: IconType
  external?: boolean
  hideOnDesktop?: boolean
  hide?: boolean // always hide
}
