/* eslint-disable no-console */
'use strict';

const assert = require('assert');
const eslint = require('eslint');
const confBrowser = require('../browser');
const confNode = require('../node');

// The source files to lint.
const repoFiles = [
  './lib/default.js',
  './react.js',
  './browser.js',
  './node.js',
  './test/test.js',
];

// Use the rules defined in this repo to test against.
const reactOpts = {
  useEslintrc: false,
  overrideConfig: {
    env: { browser: true, es2020: true },
    rules: confBrowser,
  },
};

const eslintOptsNode = {
  useEslintrc: false,
  overrideConfig: {
    plugins: ['promise'],
    env: { node: true, es2020: true },
    rules: confNode.rules,
  },
};

async function test(name, opts, files) {
  // Runs the linter on the repo files and asserts no errors were found.
  const report = await new eslint.ESLint(opts).lintFiles(files);
  const errors = report.filter((a) => a.errorCount > 0);
  const warnings = report.filter((a) => a.warningCount > 0);

  if (errors.length > 0) {
    errors.forEach((e) => console.log(e.messages));
    assert.fail(`[${name}] found ${errors.length} errors`);
  }

  if (warnings.length > 0) {
    warnings.forEach((e) => console.log(e.messages));
    assert.fail(`[${name}] found ${warnings.length} warnings`);
  }
}

test('react', reactOpts, repoFiles);
test('node', eslintOptsNode, repoFiles);
