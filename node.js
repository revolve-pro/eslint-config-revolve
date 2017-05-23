module.exports = {
  'extends': [
    './lib/default.js'
  ],
  'env': {
    'es6': true,
    'node': true
  },
  'rules': {
    'promise/prefer-await-to-then': 2,
    'promise/prefer-await-to-callbacks': 2
  }
}
