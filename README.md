# dinhanhthi.com-v5

Version 5 of dinhanhthi.com using GatbsyJS &amp; TailwindCSS.

```bash
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

## Notes for writing

1. Tag: `tags: [mlops, Thu Nghiem]` => slugs: `mlops`, `thu-nghiem`
2. Post icon: `icon: airflow.svg` or `icon: header/airflow.svg` (all icons must be stored in `/src/img/header/`)

## Using Mdx

- [Migrate remark to mdx](https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/)
- [gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)
- Create and using shortcode like `<Youtube />`: [read this](https://www.gatsbyjs.com/docs/how-to/routing/migrate-remark-to-mdx/).
- [Mdx components](https://mdxjs.com/table-of-components/)

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

---



## Tailwind things

Using `!important` like `!transition` or `sm:hover:!tw-font-bold` ([ref](https://v2.tailwindcss.com/docs/just-in-time-mode#built-in-important-modifier))

---

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

---

Understanding `@layer`: [ref](https://tailwindcss.com/docs/functions-and-directives#layer).

Difference between `base`, `components` and `utilities`, [read here](https://darkghosthunter.medium.com/tailwind-the-base-the-components-and-the-utilities-a81137c52534).

- `base`: override browser default styles, eg: `p`, `html`,...
- `components`: container's classes, eg: `container`, `mx-auto`, `px-2`,... We can add some custom things like `btn` with `@apply`.
- `utilities`: the meat of tailwind.
- There are other layers too.

## References

- [Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog).
- [Working with images in Gatsby](https://dnlytras.com/blog/gatsby-images/)
