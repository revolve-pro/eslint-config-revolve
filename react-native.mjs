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
  },
  { ignores: ["eslint.config.js"] },
]
