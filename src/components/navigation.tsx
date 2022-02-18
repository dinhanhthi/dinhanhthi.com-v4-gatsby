import { Link } from 'gatsby'
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { RiMoonFill } from 'react-icons/ri'
import { MdOutlineCloseFullscreen } from 'react-icons/md'
import { FaHamburger, FaGithub } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import AvatarEmoji from '../images/avatar_memoji.webp'
import { author } from '../data/config'
import navigation from '../data/navigation'

const textClass =
  'text-gray-300 md:text-gray-300 md:bg-transparent md:hover:text-white md:hover:bg-gray-700'
const textClassActive = 'bg-gray-700 text-white'
const iconSizeClass = 'w-6 h-6'
const groupSpaceClass = 'ml-2 md:ml-4'

export default function Navigation() {
  return (
    <div className={'shadow-md fixed top-0 left-0 w-full z-50 bg-gray-800'}>
      <div className="container mx-auto flex flex-wrap justify-items-stretch items-center">
        <Disclosure as="nav" className="w-full">
          {({ open }) => (
            <>
              <div className="mx-auto px-2 md:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-14">
                  <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button
                      className={`fixed bottom-2 left-2 inline-flex items-center justify-center p-2 rounded-md ${textClass} bg-gray-700 rounded-full text-white`}
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
                  <div className="flex-1 flex items-center justify-center md:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <Link to="/" className="block w-auto h-10">
                        <img
                          src={AvatarEmoji}
                          alt="TEXmath logo"
                          className="h-full"
                          height="35"
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
                      className={`relative ${groupSpaceClass} flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-gray-900 overflow-hidden`}
                    >
                      <div className="grid place-items-center h-full w-12 text-gray-500">
                        <FiSearch className="h-5 w-5" />
                      </div>
                      <input
                        className="peer h-full w-full outline-none text-gray-300 pr-2 bg-transparent text-ellipsis"
                        id="search"
                        type="search"
                        placeholder="search notes..."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div
                    className={`inset-y-0 right-0 flex items-center md:static md:inset-auto ${groupSpaceClass} md:pr-0`}
                  >
                    <button
                      className={`p-2 rounded-lg ${textClass} focus:outline-none`}
                    >
                      <RiMoonFill className={iconSizeClass} />
                    </button>
                    <a
                      className={`hidden sm:block p-2 rounded-lg ${textClass} focus:outline-none`}
                      href={author.github}
                    >
                      <FaGithub className={iconSizeClass} />
                    </a>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 grid grid-cols-4 gap-2 text-lg">
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function isActive({ isCurrent }) {
  return {
    className: classNames(
      isCurrent ? 'bg-sky-900 text-white' : textClass + ' ' + textClassActive,
      'block px-3 py-1.5 rounded-md text-base font-medium text-center h-14 md:h-full flex items-center justify-center'
    ),
    'aria-current': isCurrent ? 'page' : undefined,
  }
}
