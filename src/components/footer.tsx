import Tippy from '@tippyjs/react'
import * as React from 'react'

import CoffeeIcon from '../img/coffee.svg'
import { aLinkClass } from '../styles/common'
import { navClasses } from './navigation'

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`${
        className ? className : ''
      } ${navClasses} flex items-center justify-center gap-2 p-4 pb-7`}
    >
      <a className={aLinkClass} href="{{ '/' | url }}" target="_blank">
        Thi &nbsp;&copy;&nbsp;
        {currentYear()}
      </a>
      &nbsp;&bull;&nbsp;
      <a className={aLinkClass} href="/about-the-notes/">
        About this site
      </a>
      &nbsp;&bull;&nbsp;
      <a
        className={aLinkClass}
        href="https://photos.app.goo.gl/9OVEkdTjmtRPg7vC3"
        target="_blank"
        rel="noopener noreferrer"
      >
        My sketches
      </a>
      &nbsp;&bull;&nbsp;
      <a
        className={aLinkClass}
        href="https://goo.gl/photos/yQXdQws1LLS16x5v5"
        target="_blank"
        rel="noopener noreferrer"
      >
        I cook
      </a>
      &nbsp;&bull;&nbsp;
      <Tippy content="Support Thi" placement="top" arrow={true}>
        <a className="inline-flex h-4 items-center" href="/support-thi/">
          <img
            className="h-full w-fit"
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
