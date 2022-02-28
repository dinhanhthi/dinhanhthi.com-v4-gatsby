import * as React from 'react'

import Base from '../layouts/base'
import Skills from '../data/skills.json'
import SkillGroup from '../components/skill-group'

export default function AboutPage() {
  const headerOptions = {
    pageTitle: 'About me',
  }
  return (
    <Base headerType="about" headerOptions={headerOptions}>
      <div className="container mx-auto flex flex-wrap py-4">
        {Skills.map((skill: any) => (
          <SkillGroup
            className="flex-auto md:flex-1"
            key={skill.id}
            skillGroup={skill}
          />
        ))}
      </div>
    </Base>
  )
}
