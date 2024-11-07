# eslint-config-revolve

---

Owner: Revolve Healthcare sp. z o.o.
Maintainer: **Przemysław Nowak** (<przemek.nowak@revolve.pro>)

---

## Usage: Prettier

- Copy `prettierrc.js` file into your project's root directory.
- Adjust settings if necessary (e.g. 'semi' or 'printWidth').
- Install prettier (`npm install --save-dev prettier`)
- Run `npx prettier . --write` to apply changes to whole project
- Configure IDE to use prettier as default formatter
- Configure IDE to use format files on save

---

## Installation (eslint.config.js)

Run `npm install git+ssh://git@github.com/revolve-pro/eslint-config-revolve.git#semver:^5.0.0 --save`

## Usage: Eslint

1. Install `eslint`
1. Install `eslint-config-revolve` package
1. Create `eslint.config.js`

For generic **browser**:

```JavaScript
import revolveBrowserConfig from "eslint-config-revolve/browser.mjs";

export default [
  ...revolveBrowserConfig,
  { yourOverrides }
];
```

When using **React**:

```JavaScript
import revolveReactConfig from "eslint-config-revolve/react.mjs";

export default [
  ...revolveReactConfig,
  { yourOverrides }
];
```

When using **React Native**:

```JavaScript
import revolveReactNativeConfig from "eslint-config-revolve/react-native.mjs";

export default [
  ...revolveReactNativeConfig,
  { yourOverrides }
];
```

When using **node** in **browser** projects add the following key:

```JavaScript
// ...
import globals from "globals";
import revolveBrowserConfig from "eslint-config-revolve/browser.mjs";

export default [
  ...revolveBrowserConfig,
  {
    languageOptions: {
      // ...
      globals: {
        ...globals.node
      }
    }
  }
]
```

For **node-only** projects (includes `prefer-await` rules):

```JavaScript
import revolveNodeConfig from "eslint-config-revolve/node.mjs";

export default [
  ...revolveNodeConfig,
  { yourOverrides }
];
```

When using **Typescript**:
Requires Eslint > 7.0.0 !

install packages: `npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint`

add to eslintrc.js:

```JS
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import revolveReactConfig from 'eslint-config-revolve/react.js';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...revolveReactConfig,
);
```

---

## LEGACY: Installation (.eslintrc.js)

Run `npm install git+ssh://git@github.com/revolve-pro/eslint-config-revolve.git#semver:^4.0.0 --save` (or older)

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
