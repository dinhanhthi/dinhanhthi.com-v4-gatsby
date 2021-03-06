import { graphql } from 'gatsby'
import * as React from 'react'

import Base from '../layouts/base'
import Seo from '../components/seo'

export default function IndexPage({ data }) {
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Base headerType="index">
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Base>
    )
  }

  const headerOptions = {
    // eslint-disable-next-line quotes
    pageTitle: "Hi! I'm Thi",
  }

  return (
    <Base
      headerType="index"
      headerOptions={headerOptions}
      splitBgStone={true}
      className="thi-bg-stone"
    >
      <Seo title="Index page" />
      {/*
      <ol style={{ listStyle: 'none' }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Base>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
