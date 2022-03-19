import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Seo from '../components/seo'
import Base from '../layouts/base'
import { HeaderOptions } from '../types/types'
import { get } from 'lodash'

const BlogPostTemplate = ({ data }) => {
  const post = data.mdx
  const { previous, next } = data
  const postIcon = data.icon.childImageSharp.gatsbyImageData

  const headerOptions: HeaderOptions = {
    pageTitle: post.frontmatter.title,
    pageSubtitle: get(post, 'frontmatter.subtitle'),
    pageDate: post.frontmatter.date,
    pageIcon: postIcon,
    pageTags: post.frontmatter.tags,
    editLink: `https://github.com/dinhanhthi/content/edit/main/${
      post.fileAbsolutePath.split('/content/')[1]
    }`,
  }

  return (
    <Base headerType="blog" headerOptions={headerOptions}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.subtitle || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />
        <footer></footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} 👉
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
