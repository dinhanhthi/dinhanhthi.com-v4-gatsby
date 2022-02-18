import { NavigationItem } from '../types/types'

import { RiHome2Line } from 'react-icons/ri'
import { GrCircleInformation } from 'react-icons/gr'
import { FaGithub, FaPenNib } from 'react-icons/fa'
import { ImPencil2 } from 'react-icons/im'
import { GiCoffeeCup } from 'react-icons/gi'

const siteConfig = {
  siteName: 'Anh-Thi Dinh',
  siteDescription: 'I failed my way to success!',
}

export const postConfig = {
  outdatedTime: 365, // days
}

export const author = {
  name: 'Anh-Thi Dinh',
  email: 'dinhanhthi@gmail.com',
  github: 'https://github.com/dinhanhthi',
  linkedin: 'https://www.linkedin.com/in/dinhanhthi/',
  twitter: 'https://twitter.com/dinhanhthi',
  goodreads: 'https://www.goodreads.com/user/show/19630622-thi-dinh',
  stackexchange:
    'https://stackexchange.com/users/1344291/anh-thi-dinh?tab=accounts',
  lookForJob: false,
}

export const navigation: NavigationItem[] = [
  {
    name: 'Home',
    path: '/',
    icon: RiHome2Line,
  },
  {
    name: 'About',
    path: '/about/',
    icon: GrCircleInformation,
  },
  {
    name: 'Blog',
    path: '/blog/',
    icon: FaPenNib,
  },
  {
    name: 'Notes',
    path: '/notes/',
    icon: ImPencil2,
  },
  {
    name: 'Github',
    path: author.github,
    icon: FaGithub,
    external: true,
    hideOnDesktop: true,
    hide: true,
  },
  {
    name: 'Buy Thi a coffee',
    path: '/support-thi/',
    icon: GiCoffeeCup,
    hideOnDesktop: true,
    hide: true,
  },
]

export default siteConfig
