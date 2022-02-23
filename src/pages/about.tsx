import * as React from 'react'

import Base from '../layouts/base'
import Seo from '../components/seo'

export default function AboutPage() {
  const headerOptions = {
    pageTitle: 'About me',
  }
  return (
    <Base headerType="about" headerOptions={headerOptions}>
      <Seo title="Index page" />
    </Base>
  )
}
