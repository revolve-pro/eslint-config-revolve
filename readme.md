# eslint-config-revolve

--------------------------------------------------------------------------------

Owner: **Artur Wojnar** (<artur.wojnar@revolve.pro>)

--------------------------------------------------------------------------------

## Usage

1. Install `eslint-config-revolve` package
2. Edit `.eslintrc.js`

For browser projects:

```JavaScript
module.exports = {
  root: true,
  extends: [
    'revolve/browser'
  ]
};
```

For node projects (experimental):

```JavaScript
module.exports = {
  root: true,
  extends: [
    'revolve/node'
  ]
};
```

To see details look at the `index.js`. Commented rules are defined in `eslint:recommended`.