import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Base from '../layouts/base'
import { HeaderOptions } from '../types/types'
import { get } from 'lodash'

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx
  // const { previous, next } = data
  const postIcon = data.icon?.childImageSharp?.gatsbyImageData

  const headerOptions: HeaderOptions = {
    pageTitle: post.frontmatter.title,
    pageSubtitle: get(post, 'frontmatter.subtitle'),
    pageDate: post.fields.date,
    pageIcon: postIcon,
    pageTags: post.frontmatter.tags,
    editLink: `https://github.com/dinhanhthi/content/edit/main/${
      post.fileAbsolutePath.split('/content/')[1]
    }`,
    postType: post.fileAbsolutePath.includes('/blog/') ? 'blog' : 'note',
  }

  return (
    <Base headerType="blog" headerOptions={headerOptions}>
      <article itemScope itemType="http://schema.org/Article">
        <div className={'prose mx-auto max-w-4xl px-6'}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <footer></footer>
      </article>
    </Base>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $icon: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    icon: file(relativePath: { eq: $icon }) {
      childImageSharp {
        gatsbyImageData(quality: 90, width: 55, layout: FIXED)
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        date(formatString: "MMMM DD, YYYY")
      }
      frontmatter {
        title
        subtitle
        icon
        tags
      }
      fileAbsolutePath
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
