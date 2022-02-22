import { author } from './settings'
import cntl from 'cntl'

import GithubIcon from '../img/social/github.svg'
import LinkedInIcon from '../img/social/linkedin.svg'
import TwitterIcon from '../img/social/twitter.svg'
import GoodreadsIcon from '../img/social/goodreads.svg'
import SOIcon from '../img/social/so.svg'
import CouseraIcon from '../img/social/coursera.png'
import Math2ITIcon from '../img/social/math2it.png'
import { InfoBadge, SocialBadge } from '../types/types'

export const socials: SocialBadge[] = [
  {
    id: 'github',
    title: 'Github',
    icon: GithubIcon,
    url: 'https://github.com/dinhanhthi',
    imgClass: 'dark:invert',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/dinhanhthi/',
  },
  {
    id: 'twitter',
    title: 'Twitter',
    icon: TwitterIcon,
    url: 'https://twitter.com/dinhanhthi',
  },
  {
    id: 'goodreads',
    title: 'Goodreads',
    icon: GoodreadsIcon,
    url: 'https://www.goodreads.com/user/show/19630622-thi-dinh',
  },
  {
    id: 'stackexchange',
    title: 'StackExchange',
    icon: SOIcon,
    url: 'https://stackexchange.com/users/1344291/anh-thi-dinh',
  },
  {
    id: 'coursera',
    title: 'Coursera',
    icon: CouseraIcon,
    url: 'https://www.coursera.org/user/47f27dde0ecab9a78e2c93632d78a556',
  },
  {
    id: 'math2it',
    title: 'Math2IT',
    icon: Math2ITIcon,
    url: 'https://math2it.com',
  },
]

export const inforLinks: InfoBadge[] = [
  {
    id: 'contact',
    url: `mailto:${author.email}`,
    title: 'Contact',
    external: true,
    customClasses: cntl`
      bg-sky-100 px-7 font-semibold md:shadow-sky-100 dark:font-normal
      hover:bg-sky-200 dark:bg-sky-600 border-none dark:hover:bg-sky-700
      text-sky-700
    `,
    targetSelf: true,
  },
  {
    id: 'cv',
    url: '/about/',
    title: 'My CV',
    icon: '📋',
  },
  {
    id: 'sketches',
    url: 'https://photos.app.goo.gl/9OVEkdTjmtRPg7vC3',
    title: 'My Sketches',
    icon: '🎨',
    external: true,
  },
  {
    id: 'reading',
    url: '/reading/',
    title: 'Reading list',
    icon: '📚',
  },
  {
    id: 'cook',
    url: 'https://goo.gl/photos/yQXdQws1LLS16x5v5',
    title: 'I cook',
    icon: '🍲',
    external: true,
  },
]

export default socials
