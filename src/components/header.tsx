import * as React from 'react'
import parse from 'html-react-parser'
import cntl from 'cntl'

import { HeaderOptions, HeaderTypes } from '../types/types'

import AvatarEmoji from '../img/avatar_memoji.webp'
import WavingHand from '../img/waving_hand.webp'
import VictoryHand from '../img/victory_hand.webp'
import { author } from '../data/me'
import { socials, inforLinks, coordinate } from '../data/me'
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

const ySpacingClass = 'mt-6 md:mt-4'
const titleClass = cntl`text-3xl text-slate-800 dark:text-white
  font-[Recoleta,Arial,Helvetica,sans-serif] font-semibold`

function getHeaderStyle(type: HeaderTypes, options?: HeaderOptions) {
  switch (type) {
    case 'index':
      return headerIndex(options)
    case 'about':
      return headerAbout(options)
    default:
      return null
  }
}

function headerAbout(options?: HeaderOptions) {
  return (
    <div
      className="mx-auto flex flex-col flex-wrap items-center justify-items-stretch
      px-4 pt-4 pb-8 md:flex-row xl:max-w-6xl"
    >
      {options?.pageTitle && (
        <h1
          className={`flex ${ySpacingClass} ${titleClass} w-full justify-center md:justify-start`}
        >
          <span
            className="mr-2 inline-flex h-9 origin-[70%_70%] animate-wave
                items-center justify-center"
          >
            <img
              src={VictoryHand}
              alt="Waving hand"
              className="h-full"
              width="auto"
            />
          </span>
          {options.pageTitle}
        </h1>
      )}
      <div className="flex w-full flex-col gap-4 md:flex-row md:gap-5">
        <p
          className={`flex-1 ${ySpacingClass} text-left text-slate-700 dark:text-slate-200`}
        >
          {parse(author.longIntro)}
        </p>
        <div className="w-auto">
          <ul>
            {Object.keys(coordinate).map(key => (
              <li key={key}>
                <span className="mr-3 font-semibold capitalize text-sky-700">
                  {key}
                </span>
                <span className="text-slate-700">{coordinate[key]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={
          'mt-6 flex w-full flex-wrap items-center justify-center gap-3 md:order-3 md:mt-5'
        }
      >
        {inforLinks.map(item => (
          <BadgeInfos key={item.id} options={item} />
        ))}
      </div>
    </div>
  )
}

function headerIndex(options?: HeaderOptions) {
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
          {parse(author.shortIntro)}
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
}
