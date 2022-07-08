'use strict';

module.exports = {
  extends: [
    './lib/default.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
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
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
