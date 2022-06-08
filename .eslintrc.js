module.exports = {
env: {
    es2021: true,
    node: true,
    browser: true,
    jest: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': ['error', { enforceInMethodNames: true }],
    'react/jsx-child-element-spacing': 2,
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/jsx-max-props-per-line': [1, { maximum: 2 }],
    'react/no-typos': 1,
    'react/prop-types': ['error', { ignore: ['navigation', 'route'] }],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
  ignorePatterns: [],
}
