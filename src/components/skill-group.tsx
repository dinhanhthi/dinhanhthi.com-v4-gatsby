import React from 'react'
import cntl from 'cntl'

import { SkillGroupType } from '../types/types'
import BadgeTech from '../components/badge-tech'

export default function SkillGroup({
  skillGroup,
  className,
}: {
  skillGroup: SkillGroupType
  className?: string
}) {
  return (
    <div className={`p-2 ${className}`}>
      <div
        className={cntl`
          relative mb-2 inline-block text-2xl
          after:absolute after:-bottom-0 after:-right-2
          after:h-3 after:w-7 after:bg-repeating-dots after:bg-[length:4px_4px]
          after:opacity-40
        `}
      >
        <h2 className="font-heading font-semibold text-main dark:text-main-dark">
          {skillGroup.name}
        </h2>
      </div>
      <div
        className={`
        flex flex-wrap gap-2 rounded-md border p-3
        dark:border-bd-dark dark:bg-bg-dark
      `}
      >
        {skillGroup.list.map((skill: string) => (
          <BadgeTech key={skill} id={skill}></BadgeTech>
        ))}
      </div>
    </div>
  )
}
