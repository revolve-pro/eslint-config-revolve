# eslint-config-revolve

---

Owner: **Revolve Healthcare sp. z o.o.** (<https://revolve.healthcare/>)

Maintainer: **Przemysław Nowak** (<przemek.nowak@revolve.pro>)

---

## React Native & Expo

For React Native I recommend using version **v4.0.0** (look at section below - .eslintrc)
While version **v5.1.0** supports react-native, it's experimental due to lack of support for plugins and configs. (Most of them are unmaintained)
Expo does not have support for flat config at the time of writing (07.11.2024), once it updates you can use **v5.1.0** instead.

**Why use v5.1.0?** [Version support policy and ESLint v8.x end of life](https://eslint.org/blog/2024/09/eslint-v8-eol-version-support/) (EoL: October 5, 2024)

## Usage: Prettier

- Copy `prettierrc.js` file into your project's root directory.
- Adjust settings if necessary (e.g. 'semi' or 'printWidth').
- Install prettier (`npm install --save-dev prettier`)
- Run `npx prettier . --write` to apply changes to whole project
- Configure IDE to use prettier as default formatter
- Configure IDE to use format files on save

---

## Installation (eslint.config.js; eslint >= 9.0.0)
> Recommended for React and Node projects (Look below for RN and Expo)

Run `npm install git+ssh://git@github.com/revolve-pro/eslint-config-revolve.git#semver:^5.1.0 --save-dev`

## Usage: Eslint

1. Install `eslint`
1. Install `eslint-config-revolve` package
1. Create `eslint.config.mjs`

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

install packages: `npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint`

add to eslintrc.js:

```JS
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import revolveReactConfig from 'eslint-config-revolve/react.mjs';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...revolveReactConfig,
);
```

---

## LEGACY: Installation (.eslintrc.js; eslint < 9.0.0)

> recommended for React Native and Expo

Run `npm install git+ssh://git@github.com/revolve-pro/eslint-config-revolve.git#semver:^4.0.0 --save-dev` (or older)

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
