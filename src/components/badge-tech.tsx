import React from 'react'
import Tippy from '@tippyjs/react'

import { TechItem } from '../types/types'
import techs from '../data/techs'

export default function BadgeTech({
  id,
  hideText,
}: {
  id: string
  hideText?: boolean
}) {
  const techItem = techs.find((item: TechItem) => item.id === id)
  return (
    <Tippy
      content={`${techItem.name}`}
      placement="bottom"
      arrow={false}
      disabled={!hideText}
    >
      <a href={techItem.url}>
        <div className={'thi-badge-code'}>
          <img
            className={`h-5 w-5 ${techItem.imgClass ? techItem.imgClass : ''}`}
            src={techItem.icon}
            alt={techItem.name}
            width="20"
            height="20"
          />
          {!hideText && (
            <span className="ml-1 whitespace-nowrap text-[80%] uppercase tracking-wide">
              {techItem.name}
            </span>
          )}
        </div>
      </a>
    </Tippy>
  )
}
