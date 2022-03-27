const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogTemplate = path.resolve('./src/templates/blog-template.tsx')

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              icon
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      'There was an error loading your blog posts',
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      const pageIcon = post.frontmatter.icon?.includes('header')
        ? post.frontmatter.icon
        : 'header/' + post.frontmatter.icon

      createPage({
        path: post.fields.slug,
        component: blogTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
          icon: pageIcon,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    let value = createFilePath({
      node,
      getNode,
    })

    /* For posts like "2022-01-01-name-of-post.md" */
    const re = /^\/20[0-9][0-9]-[0-1][0-9]-[0-3][0-9]-/g

    const createdDate = value.match(re)
      ? new Date(value.match(re)[0].slice(1, -1))
      : node.frontmatter.createdDate
      ? new Date(node.frontmatter.createdDate)
      : node.frontmatter.date
      ? new Date(node.frontmatter.date)
      : new Date('2020-04-26')
    createNodeField({
      name: 'createdDate',
      node,
      value: createdDate,
    })

    const date = node.frontmatter.date
      ? new Date(node.frontmatter.date)
      : value.match(re)
      ? new Date(value.match(re)[0].slice(1, -1))
      : new Date('2020-04-26')

    createNodeField({
      name: 'date',
      node,
      value: date,
    })

    value = value.replace(re, '/')
    const slug = node.fileAbsolutePath.includes('/blog/')
      ? `/blog${value}`
      : value
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "Mdx" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      subtitle: String
    }

    type Fields {
      slug: String
    }
  `)
}
