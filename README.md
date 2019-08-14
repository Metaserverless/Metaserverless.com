# Metaserverless.com

Website of Metaserverless project.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## Dependencies installation

To install all required dependencies:

```bash
yarn install
```

## Development

To start development server at [localhost:8080](http://localhost:8080):

```bash
yarn start
```

## Production

To create production build (`dist` folder):

```bash
yarn build
```

## Formatting and linting

To lint `.html` and `.js` files accordingly with [ESLint](https://eslint.org/docs/user-guide/command-line-interface):

```bash
yarn lint:html
yarn lint:js
```

To lint `.scss` files with [Stylelint](https://stylelint.io/user-guide/cli):

```bash
yarn lint:styles
```

To check `.json` or `.*rc`, `.md` files accordingly with [Prettier](https://prettier.io/docs/en/cli.html#check):

```bash
yarn lint:json
yarn lint:md
```

To lint all files:

```bash
yarn lint
```

To format code with [Prettier](https://prettier.io/docs/en/cli.html#write):

```bash
yarn format
```

To format code and lint files fixing problems automatically:

```bash
yarn fix
```

## License

Licensed under the MIT license. Copyright (c) 2019 Metarhia contributors
