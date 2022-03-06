import * as React from 'react'

import Base from '../layouts/base'

export default function NotesPage() {
  const headerOptions = {
    pageTitle: 'Blog',
  }

  return (
    <Base headerType="notes" headerOptions={headerOptions}>
      <div className="bg-stone-100 dark:bg-transparent">
        <div className={'container mx-auto py-4 px-3'}>Content of notes.</div>
      </div>
    </Base>
  )
}
