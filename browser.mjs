"use strict";

import globals from "globals";
import defaultConfig from "./lib/default.mjs";

export default [
  ...defaultConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
]
