"use strict";

import globals from "globals";
import defaultConfig from "./lib/default.mjs";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { fixupPluginRules } from "@eslint/compat";

export default [
  ...defaultConfig,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    plugins: {
      "react-hooks": fixupPluginRules(reactHooksPlugin),
    },
    rules: reactHooksPlugin.configs.recommended.rules,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.node,
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
];
