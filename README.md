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

## Fake dark

Open dev tool > ctrl + shift + p > Emulate CSS prefers-color-scheme: dark / light.

Or go to 3 dots (next to settings) > More tools > Rendering > search for "prefers-color-scheme"

## Custom CSS?

Just add them to `src/main.scss`.

## References

- [Working with images in Gatsby](https://dnlytras.com/blog/gatsby-images/)
