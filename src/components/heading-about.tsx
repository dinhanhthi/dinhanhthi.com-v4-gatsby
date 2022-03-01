import React from 'react'
import cntl from 'cntl'

export default function HeadingAbout({ content }) {
  return (
    <div
      className={cntl`
        relative mb-2 inline-block text-2xl
        after:absolute after:-bottom-0 after:-right-2
        after:h-3 after:w-7 after:bg-repeating-dots after:bg-[length:4px_4px]
        after:opacity-40
      `}
    >
      <h2 className="font-heading font-semibold text-main dark:text-main-dark">
        {content}
      </h2>
    </div>
  )
}
