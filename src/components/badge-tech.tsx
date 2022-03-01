import React from 'react'
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
    <a href={techItem.url}>
      <div
        className={`
        flex h-6 w-fit items-center justify-center rounded-md
        border bg-slate-50 px-1 py-3 align-baseline text-base
        shadow-sm transition-transform duration-200 hover:-translate-y-0.5
        dark:border-bd-dark dark:bg-[#343642] dark:text-main-dark
      `}
      >
        <img
          className={`mr-1 h-5 w-5 ${
            techItem.imgClass ? techItem.imgClass : ''
          }`}
          src={techItem.icon}
          alt={techItem.name}
          width="20"
          height="20"
        />
        {!hideText && (
          <span className="whitespace-nowrap text-[80%] uppercase tracking-wide">
            {techItem.name}
          </span>
        )}
      </div>
    </a>
  )
}
