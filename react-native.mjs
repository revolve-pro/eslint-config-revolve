"use strict";

import globals from "globals";
import reactConfig from "./react.mjs";
import migratedRules from "./react-native-eslint.config.mjs";

// @TODO: this one needs more work
// React native linting configs and plugins are outdated
export default [
  ...reactConfig,
  ...migratedRules,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": 1,
      "react-native/no-unused-styles": 1,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-single-element-style-arrays": 2,
      "react-native/no-color-literals": 1,
      "no-void": 0,
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
    }
  },
]
