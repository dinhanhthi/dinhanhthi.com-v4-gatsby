import { graphql, Link } from 'gatsby'
import * as React from 'react'

import Base from '../layouts/base'
import { HeaderOptions } from '../types/types'
import { getDisplayDate } from '../utils/helpers'

export default function NotesPage({ data }) {
  const headerOptions: HeaderOptions = {
    pageTitle: 'Notes',
    postType: 'note',
  }

  return (
    <Base headerType="note" headerOptions={headerOptions}>
      <div className={'container mx-auto py-4 px-3'}>
        <ol className="list-decimal">
          {data.allMdx.nodes.map(node => (
            <li key={node.fields.slug}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link> —{' '}
              <span>{getDisplayDate(node.fields.date)}</span>
            </li>
          ))}
        </ol>
      </div>
    </Base>
  )
}

// fields.slug doesn't contain "blog"
export const noteList = graphql`
  query {
    allMdx(
      sort: { fields: fields___date, order: DESC }
      filter: { fields: { slug: { regex: "/^((?!blog).)*$/" } } }
    ) {
      nodes {
        fields {
          slug
          date(formatString: "YYYY/MM/DD")
          createdDate(formatString: "YYYY/MM/DD")
        }
        frontmatter {
          title
        }
      }
    }
  }
`
