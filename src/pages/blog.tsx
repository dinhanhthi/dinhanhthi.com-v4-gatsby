import { graphql, Link } from 'gatsby'
import * as React from 'react'

import Base from '../layouts/base'
import { HeaderOptions } from '../types/types'
import { getDisplayDate } from '../utils/helpers'

export default function BlogPage({ data }) {
  const headerOptions: HeaderOptions = {
    pageTitle: 'Blog',
    postType: 'blog',
  }

  return (
    <Base headerType="blog" headerOptions={headerOptions}>
      <div className="bg-stone-100 dark:bg-transparent">
        <div className={'container mx-auto py-4 px-3'}>
          <ol className="list-decimal">
            {data.allMdx.nodes.map(node => {
              const createdDate = node.fields.createdDate
              const updatedDate = node.fields.date
              const recentUpdate =
                createdDate !== updatedDate &&
                (new Date().getTime() - new Date(updatedDate).getTime()) /
                  (1000 * 60 * 60 * 24) <
                  7
              return (
                <li key={node.fields.slug}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link> —{' '}
                  {recentUpdate && (
                    <span className="font-semibold">updated</span>
                  )}
                  <span className="italic">
                    {' '}
                    {getDisplayDate(node.fields.date)}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </Base>
  )
}

// fields.slug must contain "blog"
export const blogList = graphql`
  query {
    allMdx(
      sort: { fields: fields___date, order: DESC }
      filter: { fields: { slug: { regex: "/^/blog//" } } }
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
