import cntl from 'cntl'

import GithubIcon from '../img/social/github.svg'
import LinkedInIcon from '../img/social/linkedin.svg'
import TwitterIcon from '../img/social/twitter.svg'
import GoodreadsIcon from '../img/social/goodreads.svg'
import SOIcon from '../img/social/so.svg'
import CouseraIcon from '../img/social/coursera.png'
import Math2ITIcon from '../img/social/math2it.png'

import { InfoBadge, SocialBadge } from '../types/types'

export const author = {
  name: 'Anh-Thi Dinh',
  email: 'dinhanhthi@gmail.com',
  github: 'https://github.com/dinhanhthi',
  linkedin: 'https://www.linkedin.com/in/dinhanhthi',
  twitter: 'https://twitter.com/dinhanhthi',
  goodreads: 'https://www.goodreads.com/user/show/19630622-thi-dinh',
  coursera: 'https://www.coursera.org/user/47f27dde0ecab9a78e2c93632d78a556',
  stackexchange:
    'https://stackexchange.com/users/1344291/anh-thi-dinh?tab=accounts',
  shortIntro:
    'I am a Vietnamese with a curious mind. I would like to learn something new every day. I also have a PhD in Applied Mathematics and currently work as a <span class=" font-normal text-amber-200">Data Scientist</span>. On this page, you can find the notes I made when I discovered something new in the fields of <span class=" font-normal text-amber-200">Data Science</span> and <span class=" font-normal text-amber-200">Web Development</span>.',
  longIntro:
    'I am <span class="font-normal text-amber-200">Thi</span>, a Vietnamese <span class=" font-normal text-amber-200">Data Scientist</span> with a curious mind. As an ever-learning worm, I am interested in researching and sharing content about <span class=" font-normal text-amber-200">Applied Mathematics</span>, <span class=" font-normal text-amber-200">Web Dev</span> and <span class=" font-normal text-amber-200">Data Science</span>. I have a PhD in Applied Mathematics from U. Sorbonne Paris Nord and am an avid self-learner in Data Science.',
  lookingForJob: false,
}

export const coordinate = {
  from: 'Ben Tre, Vietnam',
  location: 'Île-de-France, France',
  github: 'dinhanhthi',
  linkedin: 'dinhanhthi',
  email: author.email,
}

export const socials: SocialBadge[] = [
  {
    id: 'github',
    title: 'Github',
    icon: GithubIcon,
    url: 'https://github.com/dinhanhthi',
    imgClass: 'invert',
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
    className: cntl`
      px-7 md:shadow-sky-100 font-normal bg-sky-600 border-none hover:bg-sky-700
      text-white`,
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
