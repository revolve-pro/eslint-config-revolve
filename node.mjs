"use strict";

import globals from "globals";
import nodePlugin from "eslint-plugin-n";
import defaultConfig from "./lib/default.mjs";

export default [
  nodePlugin.configs["flat/recommended-script"],
  ...defaultConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
]
