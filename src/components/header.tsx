import * as React from 'react'
import parse from 'html-react-parser'
import { GatsbyImage } from 'gatsby-plugin-image'

import { HeaderOptions, HeaderTypes } from '../types/types'

import AvatarEmoji from '../img/avatar_memoji.webp'
import WavingHand from '../img/waving_hand.webp'
import VictoryHand from '../img/victory_hand.webp'
import BlogDefaultIcon from '../img/blog-default.svg'
import NoteDefaultIcon from '../img/note-default.svg'

import { author } from '../data/me'
import { socials, inforLinks, coordinate } from '../data/me'
import BadgeSocial from './badge-social'
import BadgeInfos from './badge-infos'
import { Link } from 'gatsby'
import { getLastModified, slugify } from '../utils/helpers'

export default function Header({
  type,
  options,
}: {
  type?: HeaderTypes
  options?: HeaderOptions
}) {
  const headerDefaultClass = 'bg-gradient-to-b from-main-dark-bg to-nav-dark-bg'

  return (
    <header
      className={`${headerDefaultClass} ${
        options?.customClasses ? options.customClasses : ''
      }`}
    >
      <div className="container mx-auto pt-14 lg:w-5/6 xl:w-4/6">
        {getHeaderStyle(type, options)}
      </div>
    </header>
  )
}

const ySpacingClass = 'mt-6 md:mt-4'

function getHeaderStyle(type: HeaderTypes, options?: HeaderOptions) {
  switch (type) {
    case 'index':
      return headerIndex(options)
    case 'about':
      return headerAbout(options)
    case 'blog':
      return headerBlog(options)
    case 'note':
      return headerBlog(options)
    default:
      return <div>This is a default header</div>
  }
}

function headerBlog(options?: HeaderOptions) {
  const DefaultIcon =
    options.postType === 'note' ? NoteDefaultIcon : BlogDefaultIcon
  return (
    <div className="mx-auto flex flex-col flex-wrap items-center justify-center p-4">
      {options.pageIcon && (
        <GatsbyImage
          class="mt-5"
          alt={options.pageTitle}
          image={options.pageIcon}
        />
      )}
      {!options.pageIcon && (
        <img
          src={DefaultIcon}
          alt="Default icon"
          className="mt-5 h-[55px]"
          width="auto"
        />
      )}
      <h1 className="thi-title mt-4">{options.pageTitle}</h1>
      {options.pageSubtitle && (
        <h3 className="mt-1 text-lg">{options.pageSubtitle}</h3>
      )}
      {options.pageTags && (
        <div className="border-1 mt-3 border-b px-4 pb-2 text-center dark:border-stone-500">
          {options.pageTags.map(tag => (
            <Link
              className="thi-link-always-dark mr-2"
              key={tag}
              to={`/tag/${slugify(tag)}/`}
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
      {options.pageDate && (
        <div className="mt-1 pt-2 text-center italic text-main-dark">
          <span className="mr-1">
            Last modified {getLastModified(options.pageDate)}
          </span>
          /
          <a className="thi-link-always-dark ml-1" href={options.editLink}>
            Edit on Github
          </a>
        </div>
      )}
    </div>
  )
}

function headerAbout(options?: HeaderOptions) {
  return (
    <div
      className="mx-auto flex flex-col flex-wrap items-center justify-items-stretch
      p-4 md:flex-row xl:max-w-6xl"
    >
      <div
        className={
          'mb-7 mt-10 flex w-full flex-col items-center gap-4 md:flex-row md:gap-5'
        }
      >
        <div>
          {options?.pageTitle && (
            <h1
              className={
                'thi-title flex w-full justify-center md:justify-start'
              }
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
          <p className={'mt-4 flex-1 text-left text-main-dark'}>
            {parse(author.longIntro)}
          </p>
        </div>
        <div className="w-full rounded-lg border border-slate-600 p-4 md:w-auto">
          <ul>
            {Object.keys(coordinate).map(key => (
              <li key={key}>
                <span className="mr-3 font-semibold capitalize text-sky-300">
                  {key}
                </span>
                <span className="text-slate-200">{coordinate[key]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={
          'flex w-full flex-wrap items-center justify-center gap-3 md:order-3 md:mt-8'
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
            className={`flex ${ySpacingClass} thi-title justify-center md:justify-start`}
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
          className={`max-w-full ${ySpacingClass} text-center text-main-dark md:text-left`}
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
