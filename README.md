# dinhanhthi.com-v5

Version 5 of dinhanhthi.com using GatbsyJS &amp; TailwindCSS.

```bash
gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
# Then copy all contents inside gatsby-starter-blog/ to ../
```

```bash
gatsby develop
# http://localhost:8000/
# http://localhost:8000/___graphql

# For a production build
gatsby build
```

```bash
# Note that: @react-icons/all-files lacks some icons
npm install react-icons --save
```

## TailwindCSS

👉 [Official guide](https://tailwindcss.com/docs/guides/gatsby).

## eslint + ts

👉 [Official guide](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/).

```bash
npm install --save-dev eslint-config-react-app
touch .eslintrc.js
# Copy the content like it's now.

npm i -D eslint-plugin-prettier @types/node @types/react @types/react-dom

touch tsconfig.json
# Content like it is now.
```

## Custom CSS?

Just add them to `src/main.scss`.

## References

- [Working with images in Gatsby](https://dnlytras.com/blog/gatsby-images/)
