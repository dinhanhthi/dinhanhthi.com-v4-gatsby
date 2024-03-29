# v4.dinhanhthi.com

Version 4 of dinhanhthi.com using GatbsyJS & TailwindCSS.

🚸 **UPDATE on May 01, 2022**: I DISCONTINUE THIS PROJECT because Gatbsy doesn't support flexibility for sizes, positions,... for images in markdown files (I know we can use mdx with a custom component but I'd rather use markdown syntax with additional customizations). It's less flexible than 11ty. For this reason, [I continue to use 11ty](https://github.com/dinhanhthi/dinhanhthi.com).

👉 A [demo](https://dinhanhthi-com-v4-gatsby.netlify.app/) of what I did.

## It's not complete but useful anyway

If you want to know how I migrate the styles from 11ty the [current version](https://github.com/dinhanhthi/dinhanhthi.com) to Gatsby.

🎉 **What I've done so far**:

- [x] Gatsby 4
- [x] General layout, navigation with full buttons, search bar (search function isn't implemented yet).
- [x] Dark / light mode.
- [x] Fully integrated TailwindCSS + how to create custom classes, groups,....
- [x] Page generation (without styles): custom page (about, index,...), categories, tags, single-post blog, single-post notes,...
- [x] Integrated KaTeX for math equations.
- [x] Code syntax highlighting.
- [x] Eslint.
- [x] Finish styling About page like [the actual version](https://dinhanhthi.com/about/).

## Dev

```
gatsby develop # or `npm run dev`
# http://localhost:5555/
# http://localhost:5555/___graphql

# For a production build
gatsby build
```

```bash
# Note that: @react-icons/all-files lacks some icons
npm install react-icons --save
```

## First install

```bash
npm i

# Error:  Cannot find module 'eslint'?
npm link eslint
```

## Ipsum

Check [the examples](https://github.com/fatihtelis/react-lorem-ipsum).

```
---
title: "All-in-One Components"
tags: [mlops, ml, thu nghiem]
---

import { LoremIpsum } from 'react-lorem-ipsum';

<LoremIpsum p={2} />
```

## Notes for writing

1. Tag: `tags: [mlops, Thu Nghiem]` => slugs: `mlops`, `thu-nghiem`
2. Post icon: `icon: airflow.svg` or `icon: header/airflow.svg` (all icons must be stored in `/src/img/header/`)

## Using Mdx

- [Migrate remark to mdx](https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/)
- [gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)
- Create and using shortcode like `<Youtube />`: [read this](https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/).
- [Mdx components](https://mdxjs.com/table-of-components/)

### Create a new field / node in mdx

Read [this](https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNodeField) using `createNodeField`.

## Fake dark

Open dev tool > ctrl + shift + p > Emulate CSS prefers-color-scheme: dark / light.

Or go to 3 dots (next to settings) > More tools > Rendering > search for "prefers-color-scheme"

## Custom CSS?

Just add them to `src/main.scss`.

## Markdown things

http://localhost:5555/blog/blog-test/

Change default url of markdown `/blog/` ([read more](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=files#createfilepath))

```js
// gatsby-node.js
const value = createFilePath({ node, getNode })
createNodeField({
  name: 'slug',
  node,
  value: `/blog${value}`,
})
```

### KaTeX

How to install **KaTeX** with new version of Gatsby? The versions are important. If you are using Gatbsy v4, [follow this](https://github.com/gatsbyjs/gatsby/issues/21866#issuecomment-1063668178).


### `gatsby-remark-images` problems with `mdx`

❗ **Before continuing**: If we wanna use markdown in caption of the image (bold text, link,...), we have to disable `showCaptions` in the below option and customize the css rule.

```
![Alt that will be used as caption.](./img/home.jpg)
_This is a caption with **bold text** and `code`._
```

**If we don't use markdown inside caption**: Things in `gatsby-config.js` (The order is important, I don't know why!).

```js
module.exports = {
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images', // We need this to overcome the err <figcaption> cannot inside <p>
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900, // Tip to get by default 100% width of the container
              linkImagesToOriginal: false,
              showCaptions: ['title', 'alt'],
              // markdownCaptions: true, // if "true" => parsing error, I don't know why???
              loading: 'lazy',
            },
          },
        ]
      }
    }
  ]
}
```

```
# Alt as caption
![Example image description](./img/home.jpg)

# Title as caption
![Example image description](./img/home.jpg "This is the caption.")
```


## Tailwind things

### Markdown styles with `prose`

Custom elements [here](https://tailwindcss.com/docs/typography-plugin#adapting-to-dark-mode).

### Important
Using `!important` like `!transition` or `sm:hover:!tw-font-bold` ([ref](https://v2.tailwindcss.com/docs/just-in-time-mode#built-in-important-modifier))

### Custom classes

Using `@apply` for a group of classes, [ref](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply).

Also a custom class like

```css
@tailwind base;

@layer base {
  /* Paragraphs should have a bottom margin to separate them, by default. */
  p {
    @apply mb-3;
  }
}
```

### Understanding `@layer`

👉 [Read more](https://tailwindcss.com/docs/functions-and-directives#layer).

Difference between `base`, `components` and `utilities`, [read here](https://darkghosthunter.medium.com/tailwind-the-base-the-components-and-the-utilities-a81137c52534).

- `base`: override browser default styles, eg: `p`, `html`,...
- `components`: container's classes, eg: `container`, `mx-auto`, `px-2`,... We can add some custom things like `btn` with `@apply`.
- `utilities`: the meat of tailwind.
- There are other layers too.

## References

- [Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog).
- [Working with images in Gatsby](https://dnlytras.com/blog/gatsby-images/)
