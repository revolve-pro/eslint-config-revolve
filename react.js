'use strict';

module.exports = {
  extends: [
    './lib/default.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-unknown-property': [2, { ignore: ['class', 'for'] }],
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-curly-spacing': ['error'],
    'react/jsx-equals-spacing': ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
