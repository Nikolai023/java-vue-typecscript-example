module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'vue/script-indent': ['error', 2, { 'baseIndent': 1 }],
    'vue/max-len': [{ 'ignoreHTMLTextContents': true }],
    'import/extensions': ['error', 'always', {
      'vue': 'never',
      'js': 'never'
    }],
    'linebreak-style': ['error', 'windows']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
