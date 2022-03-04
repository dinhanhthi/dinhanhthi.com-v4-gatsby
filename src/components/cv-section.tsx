import React from 'react'

import { CVItem } from '../types/types'
import BadgeTech from '../components/badge-tech'
import parse from 'html-react-parser'
import { aLinkClass } from '../styles/common'

export default function CVSection({
  cv,
  className,
}: {
  cv: CVItem
  className?: string
}) {
  return (
    <div
      className={`${className ? className : ''} flex flex-wrap items-center`}
    >
      <div className={'hidden w-1/4 flex-col items-center py-4 px-2 md:flex'}>
        {logo(cv)}
        <h4 className="mt-2 text-center text-base font-semibold  dark:text-white ">
          {cv.url && (
            <a
              className={`${aLinkClass}`}
              href={cv.url}
              rel="noopener noreferrer"
            >
              {cv.where}
            </a>
          )}
          {!cv.url && <span>{cv.where}</span>}
        </h4>
        <div className="mt-1 text-center text-sm opacity-70">{cv.date}</div>
      </div>
      <div className="flex-1 px-4 py-6">
        <div className="flex items-center gap-4">
          <div className="md:hidden">{logo(cv)}</div>
          <div>
            <h3 className="text-lg font-semibold dark:text-white ">
              {cv.title}
            </h3>
            <h4 className="text-base  md:hidden">
              {cv.url && (
                <a className={`${aLinkClass}`} href={cv.url}>
                  {cv.where}
                </a>
              )}
              {!cv.url && <span>{cv.where}</span>}
            </h4>
            <div className="mt-1 text-sm opacity-70 md:hidden">{cv.date}</div>
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-2">
          {cv.activity.map((activity: string, index: number) => (
            <div key={index} className="opacity-95 dark:opacity-80">
              {parse(activity)}
            </div>
          ))}
        </div>
        {cv.tech && (
          <div className="mt-4 flex flex-wrap gap-2">
            {cv.tech.map((item: string) => (
              <BadgeTech key={item} id={item} hideText={true}></BadgeTech>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function logo(cv: CVItem) {
  return (
    <div
      className={`h-auto w-20${
        cv.bgWhite ? ' p-2 dark:w-24 dark:rounded-lg dark:bg-white' : ' p-1'
      }`}
    >
      <img
        src={cv.logo}
        alt={cv.where}
        className="h-auto w-full"
        width="auto"
      />
    </div>
  )
}
