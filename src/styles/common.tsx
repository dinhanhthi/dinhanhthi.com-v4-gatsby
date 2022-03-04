import cntl from 'cntl'

/**
 * For smooth transition between dark/light mode
 */
export const toggleThemeTransition = cntl`
 transition-colors duration-200 ease-in-out`

/**
 * For urls
 */
export const aLinkClass = cntl`
  w-fit border-b border-link dark:border-link-dark md:border-none
  md:hover:text-link md:dark:hover:text-link-dark`

/**
 * For boxes with code-color background
 */
export const codeSectionClass = cntl`
  shadow-lg dark:border dark:border-bd-dark dark:bg-bg-code-dark rounded-lg border bg-white
  text-main dark:text-main-dark ${toggleThemeTransition}`
