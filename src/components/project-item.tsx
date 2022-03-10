import React from 'react'

import { Project } from '../types/types'
import BadgeTech from '../components/badge-tech'

export default function ProjectItem({
  content,
  className,
}: {
  content: Project
  className?: string
}) {
  return (
    <div
      className={`${
        className ? className : ''
      } thi-box-code flex flex-col p-4`}
    >
      <h3 className="font-semibold dark:text-white">
        {content.icon && <span className="mr-2">{content.icon}</span>}
        {(content.source || content.url) && (
          <a
            className={'thi-link'}
            href={content.source ? content.source : content.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.title}
          </a>
        )}
        {!content.source && !content.url && <span>{content.title}</span>}
      </h3>
      <p className="opacity-85 mt-2 flex-1 text-sm">{content.description}</p>
      {(content.tech || content.techText) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {content.tech &&
            content.tech.map((item: string) => (
              <BadgeTech key={item} id={item} hideText={true}></BadgeTech>
            ))}
          {content.techText &&
            content.techText.map((item: string, index: number) => (
              <span
                key={index}
                className={
                  'thi-badge-code block h-full px-2 font-mono text-[0.8rem]'
                }
              >
                {item}
              </span>
            ))}
        </div>
      )}
    </div>
  )
}
