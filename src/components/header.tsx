import * as React from 'react'
import parse from 'html-react-parser'
import cntl from 'cntl'

import { HeaderOptions, HeaderTypes } from '../types/types'

import AvatarEmoji from '../img/avatar_memoji.webp'
import WavingHand from '../img/waving_hand.webp'
import { author } from '../data/settings'
import { socials, inforLinks } from '../data/refs'
import BadgeSocial from './badge-social'
import BadgeInfos from './badge-infos'
import { toggleThemeTransition } from '../layouts/base'

export default function Header({
  type,
  options,
}: {
  type: HeaderTypes
  options?: HeaderOptions
}) {
  return (
    <header className={`bg-white dark:bg-gray-900 ${toggleThemeTransition}`}>
      <div className="container mx-auto pt-14">
        {getHeaderStyle(type, options)}
      </div>
    </header>
  )
}

function getHeaderStyle(type: HeaderTypes, options?: HeaderOptions) {
  const ySpacingClass = 'mt-6 md:mt-4'
  const titleClass = cntl`text-3xl text-slate-800 dark:text-white
    font-[Recoleta,Arial,Helvetica,sans-serif] font-semibold`
  switch (type) {
    case 'index':
      return (
        <div
          className="mx-auto flex flex-col flex-wrap items-center justify-items-stretch
          px-4 pt-4 pb-8 md:flex-row xl:max-w-6xl"
        >
          <div className="h-28 md:order-2 md:h-60">
            <img
              src={AvatarEmoji}
              alt="Thi's avatar"
              className="h-full"
              width="auto"
            />
          </div>
          <div className="md:order-1 md:flex-1">
            {options?.pageTitle && (
              <h1
                className={`flex ${ySpacingClass} ${titleClass} justify-center md:justify-start`}
              >
                <span
                  className="mr-2 inline-flex h-9 origin-[70%_70%] animate-wave
                    items-center justify-center"
                >
                  <img
                    src={WavingHand}
                    alt="Waving hand"
                    className="h-full"
                    width="auto"
                  />
                </span>
                {options.pageTitle}
              </h1>
            )}
            <p
              className={`max-w-full ${ySpacingClass} text-center
                text-slate-700 dark:text-slate-200 md:text-left`}
            >
              {parse(author.intro)}
            </p>
            <div
              className={`flex flex-wrap items-center justify-center gap-3 md:justify-start ${ySpacingClass}`}
            >
              {socials.map(item => (
                <BadgeSocial key={item.id} options={item} />
              ))}
            </div>
          </div>
          <div
            className={
              'mt-10 flex w-full flex-wrap items-center justify-center gap-3 md:order-3'
            }
          >
            {inforLinks.map(item => (
              <BadgeInfos key={item.id} options={item} />
            ))}
          </div>
        </div>
      )
    default:
      return null
  }
}
