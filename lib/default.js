module.exports = {
  plugins: ['promise'],
  extends: ['eslint:recommended', 'plugin:promise/recommended', 'prettier'],
  env: {
    es2022: true,
  },
};
