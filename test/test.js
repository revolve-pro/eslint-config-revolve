'use strict';

const assert = require('assert');
const eslint = require('eslint');
const confBrowser = require('../browser');
const confNode = require('../node');

// The source files to lint.
const repoFiles = [
  '../lib/default',
  '../react',
  '../browser',
  '../node',
  './test'
];

// Use the rules defined in this repo to test against.
const eslintOptsBrowser = {
  envs: ['browser', 'es6'],
  useEslintrc: false,
  rules: confBrowser.rules,
  plugins: ['react', 'promise']
};
const eslintOptsNode = {
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: confNode.rules,
  plugins: ['promise']
};

// Runs the linter on the repo files and asserts no errors were found.
const reportBrowser = new eslint.CLIEngine(eslintOptsBrowser).executeOnFiles(repoFiles);
console.log(JSON.stringify(reportBrowser))
assert.equal(reportBrowser.errorCount, 0);
assert.equal(reportBrowser.warningCount, 0);

const reportNode = new eslint.CLIEngine(eslintOptsNode).executeOnFiles(repoFiles);
console.log(JSON.stringify(reportNode))
assert.equal(reportNode.errorCount, 0);
assert.equal(reportNode.warningCount, 0);
