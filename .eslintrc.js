module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: [
    '@nuxtjs',
    'eslint-config-prettier',
    // 'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-ddebugger': process.env.PRE_COMMIT ? 'error' : 'off',
    'no-console': process.env.PRE_COMMIT ? ['error', { arrow: ['warn', 'error']}] : 'off',
    'vue/html-self-closing': 'off',
    'vue/html-indent': 'off',
  },
}
