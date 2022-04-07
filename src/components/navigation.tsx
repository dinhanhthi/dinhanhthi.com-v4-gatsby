import { Link } from 'gatsby'
import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import cntl from 'cntl'
import Tippy from '@tippyjs/react'

import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { MdOutlineCloseFullscreen } from 'react-icons/md'
import { FaHamburger, FaGithub } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

import AvatarEmoji from '../img/avatar_memoji.webp'
import VnFlag from '../img/lang/vn.svg'
import EnFlag from '../img/lang/en.svg'
import FrFlag from '../img/lang/fr.svg'
import { author } from '../data/me'
import navigation from '../data/navs'
import { SiteTheme } from '../types/types'

const textClass = 'md:hover:text-white md:hover:bg-gray-700'
const iconSizeClass = 'w-6 h-6'
const groupSpaceClass = 'ml-2 md:ml-4'
export const navHeightClass = 'h-14'
export const navClasses =
  'bg-nav-dark-bg shadow-transparent text-slate-700 text-gray-300'

const langMenus = [
  {
    id: 'vn',
    name: 'Tiếng Việt',
    icon: VnFlag,
  },
  {
    id: 'en',
    name: 'English',
    icon: EnFlag,
  },
  {
    id: 'fr',
    name: 'Français',
    icon: FrFlag,
  },
]

export default function Navigation({
  theme,
  onUpdateTheme,
}: {
  theme: SiteTheme
  onUpdateTheme: any
}) {
  return (
    <div className={`fixed top-0 left-0 z-50 w-full ${navClasses}`}>
      <div className="container mx-auto flex flex-wrap items-center justify-items-stretch">
        <Disclosure as="nav" className="w-full">
          {({ open }) => (
            <>
              <div className="mx-auto px-2">
                <div
                  className={`relative flex items-center justify-between ${navHeightClass}`}
                >
                  <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button
                      className={`
                        fixed bottom-3 left-3 inline-flex items-center justify-center
                        rounded-full bg-gray-700 p-2 text-white ${textClass} shadow-md
                      `}
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <MdOutlineCloseFullscreen
                          className={`block ${iconSizeClass}`}
                          aria-hidden="true"
                        />
                      ) : (
                        <FaHamburger
                          className={`block ${iconSizeClass}`}
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center md:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <Link to="/" className="block h-10 w-auto">
                        <img
                          src={AvatarEmoji}
                          alt="Thi's avatar"
                          className="h-full"
                          width="auto"
                        />
                      </Link>
                    </div>
                    <div className={`hidden md:block ${groupSpaceClass}`}>
                      <div className="flex space-x-4">
                        {navigation
                          .filter(item => !item.hide && !item.hideOnDesktop)
                          .map(item => (
                            <Link
                              key={item.path.split('/')[1]}
                              to={item.path}
                              getProps={isActive}
                            >
                              {item.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                    <div
                      className={`
                        relative ${groupSpaceClass} flex h-10 w-full items-center
                        overflow-hidden rounded-lg bg-[#282a36]
                        focus-within:shadow-inner
                      `}
                    >
                      <div
                        className="
                          grid h-full w-12 place-items-center text-slate-500
                          dark:text-gray-500
                        "
                      >
                        <FiSearch className="h-5 w-5" />
                      </div>
                      <input
                        className="
                          peer h-full w-full text-ellipsis bg-transparent pr-2
                          text-slate-900 outline-none dark:text-gray-300
                        "
                        id="search"
                        type="search"
                        placeholder="search notes..."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div
                    className={`
                      inset-y-0 right-0 flex items-center md:static md:inset-auto
                      ${groupSpaceClass} md:pr-0
                    `}
                  >
                    {LangMenuRender()}
                    <Tippy
                      content={`${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                      placement="bottom"
                      arrow={false}
                      className="hidden md:block"
                    >
                      <button
                        className={`group rounded-lg p-2 ${textClass} focus:outline-none`}
                        onClick={onUpdateTheme}
                      >
                        {theme === 'light' && (
                          <RiMoonFill
                            className={`transition-transform group-active:scale-90 ${iconSizeClass}`}
                          />
                        )}
                        {theme === 'dark' && (
                          <RiSunFill
                            className={`transition-transform group-active:scale-90 ${iconSizeClass}`}
                          />
                        )}
                      </button>
                    </Tippy>
                    <Tippy
                      content="My Github"
                      placement="bottom"
                      arrow={false}
                      className="hidden md:block"
                    >
                      <a
                        className={`group hidden rounded-lg p-2 sm:block ${textClass} focus:outline-none
                      `}
                        href={author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub
                          className={`transition-transform group-active:scale-90 ${iconSizeClass}`}
                        />
                      </a>
                    </Tippy>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="shadow-lg md:hidden">
                <div className="grid grid-cols-4 gap-2 px-2 pt-2 pb-3 text-lg">
                  {navigation
                    .filter(item => !item.hide)
                    .map(item => (
                      <Disclosure.Button
                        as={Link}
                        key={item.path.split('/')[1]}
                        to={item.path}
                        getProps={isActive}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

function LangMenuRender() {
  const langBtnClass = `rounded-lg p-2 ${textClass} h-10 w-10`
  return (
    <Menu as="div" className="relative">
      <Menu.Button className={`${langBtnClass} group mx-auto`}>
        <img
          src={VnFlag}
          alt="Vietnamese"
          className="h-full transition-transform group-active:scale-90"
          width="auto"
        />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className={`
            absolute -left-full mx-auto -ml-1 flex rounded-md ${navClasses} p-1
            shadow-lg ring-black ring-opacity-5 focus:outline-none
          `}
        >
          {langMenus.map(item => (
            <button key={item.id} className={langBtnClass}>
              <img
                src={item.icon}
                alt="{item.name}"
                className="h-full"
                width="auto"
              />
            </button>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function isActive({ isCurrent }) {
  return {
    className: classNames(
      isCurrent ? 'bg-[#282a36] text-white' : textClass,
      cntl`block px-3 py-1.5 rounded-md text-base font-medium text-center
        h-14md:h-full flex items-center justify-center`
    ),
    'aria-current': isCurrent ? 'page' : undefined,
  }
}
