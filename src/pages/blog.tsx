import * as React from 'react'

import Base from '../layouts/base'

export default function BlogPage() {
  const headerOptions = {
    pageTitle: 'Blog',
  }

  return (
    <Base headerType="blog" headerOptions={headerOptions}>
      <div className="bg-stone-100 dark:bg-transparent">
        <div className={'container mx-auto py-4 px-3'}>Content of blog.</div>
      </div>
    </Base>
  )
}
