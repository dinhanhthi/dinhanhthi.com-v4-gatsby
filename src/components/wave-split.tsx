import * as React from 'react'

export default function WaveSplit({
  footer,
  splitBgStone,
}: {
  footer?: boolean
  splitBgStone?: boolean
}) {
  return (
    <>
      <div
        className={`h-8 ${
          !footer
            ? 'bg-bg-nav-dark'
            : !splitBgStone
            ? 'bg-white dark:bg-bg-main-dark'
            : 'thi-bg-stone dark:bg-bg-main-dark'
        }`}
      ></div>
      <div
        className={`after:block after:h-8 after:w-full ${
          !footer
            ? !splitBgStone
              ? 'after:bg-wave dark:after:bg-wave-dark'
              : 'after:bg-wave-stone dark:after:bg-wave-dark'
            : !splitBgStone
            ? 'after:bg-wave-footer dark:after:bg-wave-footer-dark'
            : 'after:bg-wave-footer-stone dark:after:bg-wave-footer-dark'
        }
      `}
      ></div>
      <div
        className={`${
          !footer
            ? !splitBgStone
              ? 'h-8 bg-white dark:bg-bg-main-dark'
              : 'thi-bg-stone h-8 dark:bg-bg-main-dark'
            : 'h-4 bg-bg-nav-dark'
        }`}
      ></div>
    </>
  )
}
