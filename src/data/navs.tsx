import { NavigationItem } from '../types/types'

import { RiHome2Line } from 'react-icons/ri'
import { GrCircleInformation } from 'react-icons/gr'
import { FaGithub, FaPenNib } from 'react-icons/fa'
import { ImPencil2 } from 'react-icons/im'
import { GiCoffeeCup } from 'react-icons/gi'
import { author } from './me'

const navigation: NavigationItem[] = [
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

export default navigation
