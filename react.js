module.exports = {
  'extends': [
    './lib/default.js'
  ],
  'env': {
    'browser': true,
    'es6': true
  },
  'plugins': [
    'react'
  ],
  'parserOptions': {
    'sourceType': 'module'
  },
  'ecmaFeatures': {
    'jsx': true,
  },
  'rules': {
    /* React */
    'jsx-quotes': [2, 'prefer-double'],
    'react/jsx-sort-props': 0,
    'react/display-name': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    // 'react/no-unknown-property': 2,
    'react/no-unknown-property': [2, { 'ignore': ['class', 'for'] }],
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/jsx-wrap-multilines': 2,
  }
}
