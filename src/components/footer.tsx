import Tippy from '@tippyjs/react'
import * as React from 'react'

import CoffeeIcon from '../img/coffee.svg'
import { navClasses } from './navigation'

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`${
        className ? className : ''
      } ${navClasses} flex flex-wrap items-center justify-center gap-2 p-4 pb-7`}
    >
      <a className={'thi-link-about'} href="{{ '/' | url }}" target="_blank">
        Thi &nbsp;&copy;&nbsp;
        {currentYear()}
      </a>
      &nbsp;&bull;&nbsp;
      <a className={'thi-link-about'} href="/about-the-notes/">
        About this site
      </a>
      &nbsp;&bull;&nbsp;
      <a
        className={'thi-link-about'}
        href="https://photos.app.goo.gl/9OVEkdTjmtRPg7vC3"
        target="_blank"
        rel="noopener noreferrer"
      >
        My sketches
      </a>
      &nbsp;&bull;&nbsp;
      <a
        className={'thi-link-about'}
        href="https://goo.gl/photos/yQXdQws1LLS16x5v5"
        target="_blank"
        rel="noopener noreferrer"
      >
        I cook
      </a>
      &nbsp;&bull;&nbsp;
      <Tippy content="Support Thi" placement="top" arrow={true}>
        <a className="inline-flex h-5 items-center" href="/support-thi/">
          <img
            className="h-full w-fit transition-transform duration-300 hover:scale-125"
            src={CoffeeIcon}
            alt="Support Thi"
            height="16"
            width="auto"
          />{' '}
        </a>
      </Tippy>
    </footer>
  )
}

function currentYear() {
  const today = new Date()
  return today.getFullYear()
}
