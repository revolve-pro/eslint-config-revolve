# eslint-config-revolve

---

Owner: **Artur Wojnar** (<artur.wojnar@revolve.pro>)

---

## Installation

Run `npm install git+ssh://git@github.com/revolve-pro/eslint-config-revolve.git#semver:^3.0.0 --save`

## Usage: Prettier

- Copy `prettierrc.js` file into your project's root directory.
- Adjust settings if necessary (e.g. 'semi' or 'printWidth').
- Install prettier (`npm install --save-dev prettier`)
- Run `$(npm bin)/prettier . --write` to apply changes to whole project
- Configure IDE to use prettier as default formatter
- Configure IDE to use format files on save

## Usage: Eslint

1. Install `eslint`
1. Install `eslint-config-revolve` package
1. Create `.eslintrc.js`

For generic **browser**:

```JavaScript
module.exports = {
  root: true,
  extends: [
    'revolve/browser'
  ]
};
```

When using **React**:

```JavaScript
module.exports = {
  root: true,
  extends: [
    'revolve/react'
  ]
};
```

When using **React Native**:

```JavaScript
module.exports = {
  root: true,
  extends: [
    'revolve/react-native'
  ]
};
```

When using **node** in **browser** projects add the following key:

```JavaScript
module.exports = {
  //...
  env: {
    node: true
  }
  //...
};
```

For **node-only** projects (includes `prefer-await` rules):

```JavaScript
module.exports = {
  root: true,
  extends: [
    'revolve/node'
  ]
};
```

When using **Typescript**:
Requires Eslint > 7.0.0 !
add to eslintrc.js:

```JS
  // ...
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  // ...
```
