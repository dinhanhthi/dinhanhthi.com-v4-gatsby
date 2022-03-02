import React from 'react'
import cntl from 'cntl'

import { SkillGroupType } from '../types/types'
import BadgeTech from '../components/badge-tech'
import HeadingAbout from './heading-about'

export const codeSectionClass = cntl`
  shadow-lg dark:border dark:border-bd-dark dark:bg-bg-code-dark rounded-md border bg-white`

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
      <div className={`flex flex-wrap gap-2 p-3 ${codeSectionClass}`}>
        {skillGroup.list.map((skill: string) => (
          <BadgeTech key={skill} id={skill}></BadgeTech>
        ))}
      </div>
    </div>
  )
}
