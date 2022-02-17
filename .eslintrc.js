module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'eslint:recommended'],
  plugins: ['prettier'],
  /*
  More: https://eslint.org/docs/rules/
  0: "off",
  1: "warn",
  2: "error",
  */
  rules: {
    'import/no-unresolved': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/iframe-has-title': 0,
    'no-const-assign': 1,
    'no-extra-boolean-cast': 1,
    'no-irregular-whitespace': 1,
    'no-unused-vars': 1,
    'prettier/prettier': 1,
    quotes: [1, 'single'],
    'spaced-comment': [1, 'always'],
  },
}
