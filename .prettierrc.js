"use strict";

module.exports = {
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: "consistent",
  arrowParens: "always",
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  bracketSameLine: false,
  jsxSingleQuote: false,
  singleQuote: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};
