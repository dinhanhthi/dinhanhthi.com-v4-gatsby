import React from 'react'

import { SkillGroupType } from '../types/types'
import BadgeTech from '../components/badge-tech'
import HeadingAbout from './heading-about'

export default function SkillGroup({
  skillGroup,
  className,
}: {
  skillGroup: SkillGroupType
  className?: string
}) {
  return (
    <div className={`p-2 ${className}`}>
      <HeadingAbout content={skillGroup.name} />
      <div
        className={`
        flex flex-wrap gap-2 rounded-md border bg-white p-3
        shadow-lg dark:border dark:border-bd-dark dark:bg-bg-code-dark
      `}
      >
        {skillGroup.list.map((skill: string) => (
          <BadgeTech key={skill} id={skill}></BadgeTech>
        ))}
      </div>
    </div>
  )
}
