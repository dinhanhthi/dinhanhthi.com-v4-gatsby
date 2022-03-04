import * as React from 'react'

export default function WaveSplit({ footer }: { footer?: boolean }) {
  return (
    <>
      <div
        className={`h-8 ${
          !footer
            ? 'bg-white dark:bg-bg-nav-dark'
            : 'bg-stone-100 dark:bg-bg-main-dark'
        }`}
      ></div>
      <div
        className={`after:block after:h-8 after:w-full ${
          !footer
            ? 'after:bg-wave dark:after:bg-wave-dark'
            : 'after:bg-wave-footer dark:after:bg-wave-footer-dark'
        }
      `}
      ></div>
      <div
        className={`${
          !footer
            ? 'h-8 bg-stone-100 dark:bg-bg-main-dark'
            : 'h-4 bg-white dark:bg-bg-nav-dark'
        }`}
      ></div>
    </>
  )
}
