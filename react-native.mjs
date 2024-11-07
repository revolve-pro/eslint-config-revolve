"use strict";

import reactConfig from "./react.mjs";

// @TODO: this one needs more work
// React native linting configs and plugins are outdated
export default [
  ...reactConfig,
  {
    rules: {
      "no-console": 1,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        },
      ],
      "no-void": 0,
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
    },
  }
]
