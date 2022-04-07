import * as React from 'react'

import Base from '../layouts/base'
import Skills from '../data/skills.json'
import SkillGroup from '../components/skill-group'
import CVs from '../data/cv'
import projects from '../data/projects'
import CVGroup from '../components/cv-group'
import HeadingAbout from '../components/heading-about'
import { Project } from '../types/types'
import ProjectItem from '../components/project-item'

export default function AboutPage() {
  const headerOptions = {
    pageTitle: 'About me',
  }
  const sectionSpacing = 'pt-12'

  return (
    <Base
      headerType="about"
      headerOptions={headerOptions}
      className="thi-bg-stone"
      splitBgStone={true}
    >
      <div className={'container mx-auto py-4 px-3'}>
        <div className={'flex flex-wrap gap-4'}>
          {Skills.map((skill: any) => (
            <SkillGroup
              className="min-w-[200px] flex-auto md:flex-1"
              key={skill.id}
              skillGroup={skill}
            />
          ))}
        </div>
        <div className={`flex flex-wrap gap-10 lg:gap-4 ${sectionSpacing}`}>
          {CVs.map((cv: any) => (
            <CVGroup className="flex-auto lg:flex-1" key={cv.id} cvGroup={cv} />
          ))}
        </div>
        <div className={`${sectionSpacing}`}>
          <HeadingAbout className="mb-4" content="Projects" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4">
            {projects.map((project: Project) => (
              <ProjectItem key={project.id} content={project} />
            ))}
          </div>
        </div>
      </div>
    </Base>
  )
}
