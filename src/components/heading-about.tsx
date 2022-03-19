import React from 'react'
import cntl from 'cntl'

export default function HeadingAbout({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  return (
    <div
      className={cntl`
        relative mb-2 inline-block
        after:absolute after:-bottom-0 after:-right-2
        after:h-3 after:w-7 after:bg-repeating-dots after:bg-[length:4px_4px]
        after:opacity-40 ${className}
      `}
    >
      <h2 className="thi-text-color font-heading text-2xl font-semibold">
        {content}
      </h2>
    </div>
  )
}
