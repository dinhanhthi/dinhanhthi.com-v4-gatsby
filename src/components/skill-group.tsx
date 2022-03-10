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
    <div className={`${className ? className : ''}`}>
      <HeadingAbout content={skillGroup.name} className="text-3xl" />
      <div className={'thi-box-code flex flex-wrap gap-2 p-3'}>
        {skillGroup.list.map((skill: string) => (
          <BadgeTech key={skill} id={skill}></BadgeTech>
        ))}
      </div>
    </div>
  )
}
