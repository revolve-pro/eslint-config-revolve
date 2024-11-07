"use strict";

import eslintJs from "@eslint/js";
import pluginPromise from "eslint-plugin-promise";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  pluginPromise.configs["flat/recommended"],
  eslintJs.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    }
  }
]
