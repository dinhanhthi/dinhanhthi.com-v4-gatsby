/**
 * Convert tags, categories, etc. to a slug-friendly format (eg. this-is-a-tag)
 */
export function slugify(string: string): string {
  return (
    string &&
    string
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map(x => x.toLowerCase())
      .join('-')
  )
}

/**
 * Find the last modified date of a post
 */
export function getLastModified(date: string): string {
  const dateObj = new Date(date)
  const durationInDays =
    (new Date().getTime() - dateObj.getTime()) / (1000 * 60 * 60 * 24)
  if (durationInDays < 1) {
    return 'today'
  } else if (durationInDays < 2) {
    return 'yesterday'
  } else if (durationInDays < 30) {
    return Math.round(durationInDays) + ' days ago'
  } else if (durationInDays < 365) {
    return Math.round(durationInDays / 30) + ' months ago'
  } else {
    return Math.round(durationInDays / 365) + ' years ago'
  }
}

/**
 * Find the display date for posts
 */
export function getDisplayDate(date: string): string {
  const dateObj = new Date(date)
  const durationInDays =
    (new Date().getTime() - dateObj.getTime()) / (1000 * 60 * 60 * 24)
  if (durationInDays < 1) {
    return 'today'
  } else if (durationInDays < 2) {
    return 'yesterday'
  } else if (durationInDays < 7) {
    return 'this week'
  } else {
    const join = function (t, a, s) {
      function format(m) {
        let f = new Intl.DateTimeFormat('en', m)
        return f.format(t)
      }
      return a.map(format).join(s)
    }
    let a = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }]
    let s = join(new Date(date), a, '/')
    return s
  }
}
