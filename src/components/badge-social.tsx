import React from 'react'
import Tippy from '@tippyjs/react'

import { SocialBadge } from '../types/types'

export default function BadgeSocial({ options }: { options: SocialBadge }) {
  return (
    <Tippy content={options.title} placement="bottom" arrow={false}>
      <a
        className={`
          group block h-12 w-12 rounded-2xl bg-gray-700 p-2
          shadow-none md:h-10 md:w-10 md:p-1.5
        `}
        href={options.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={`${
            options.imgClass ? options.imgClass + ' ' : ''
          }h-full w-auto transition-transform duration-200 group-hover:-translate-y-0.5`}
          src={options.icon}
          alt={options.title}
          height="40"
          width="40"
        />
      </a>
    </Tippy>
  )
}
