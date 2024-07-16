'use strict';

// @TODO: this one needs more work
module.exports = {
  extends: ['@react-native', './react.js'],
  plugins: ['react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 1,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-single-element-style-arrays': 2,
    // 'react-native/no-raw-text': 2, https://github.com/Intellicode/eslint-plugin-react-native/issues/307
    'react-native/no-color-literals': 1,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      },
    ],
    'no-void': 0,
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
  },
};
