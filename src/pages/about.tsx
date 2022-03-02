import * as React from 'react'

import Base from '../layouts/base'
import Skills from '../data/skills.json'
import SkillGroup from '../components/skill-group'
import CVs from '../data/cv'
import CVGroup from '../components/cv-group'

export default function AboutPage() {
  const headerOptions = {
    pageTitle: 'About me',
  }
  const sectionSpacing = 'pt-10'

  return (
    <Base headerType="about" headerOptions={headerOptions}>
      <div className="bg-stone-100 dark:bg-transparent">
        <div className={`container mx-auto flex flex-wrap ${sectionSpacing}`}>
          {Skills.map((skill: any) => (
            <SkillGroup
              className="flex-auto md:flex-1"
              key={skill.id}
              skillGroup={skill}
            />
          ))}
        </div>

        <div
          className={`container mx-auto flex flex-wrap gap-10 lg:gap-4 ${sectionSpacing}`}
        >
          {CVs.map((cv: any) => (
            <CVGroup className="flex-auto lg:flex-1" key={cv.id} cvGroup={cv} />
          ))}
        </div>
      </div>
    </Base>
  )
}
