# eslint-config-revolve

--------------------------------------------------------------------------------

Owner: **Artur Wojnar** (<artur.wojnar@revolve.pro>)

--------------------------------------------------------------------------------

## Usage

1. Install `eslint-config-revolve` package
2. Edit `.eslintrc.js`

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

To see details look at the `lib/default.js` and `lib/react.js`. Commented rules are defined in `eslint:recommended`.
