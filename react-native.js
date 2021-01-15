'use strict';

// @TODO: this one needs more work
module.exports = {
  extends: ['@react-native-community', './react.js'],
  plugins: ['react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
  },
};
