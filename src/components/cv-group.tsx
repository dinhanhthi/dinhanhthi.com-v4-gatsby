import React from 'react'
import { codeSectionClass } from '../styles/common'

import { CVGroupType, CVItem } from '../types/types'
import CVSection from './cv-section'
import HeadingAbout from './heading-about'

export default function CVGroup({
  cvGroup,
  className,
}: {
  cvGroup: CVGroupType
  className?: string
}) {
  return (
    <div className={className ? className : ''}>
      <HeadingAbout className="mb-4" content={cvGroup.name} />
      <div
        className={`${codeSectionClass} divide-y px-4 dark:divide-slate-600`}
      >
        {cvGroup.list.map((item: CVItem) => (
          <CVSection key={item.id} cv={item} />
        ))}
      </div>
    </div>
  )
}
