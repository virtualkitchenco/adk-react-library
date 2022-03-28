# adk-react-library

## Local Development

### Getting Started

In order to run the adk-react-library example app, each package must have its dependancies installed. Use the following steps to get started.

```
git clone https://github.com/virtualkitchenco/adk-react-library.git
```

1. `yarn install` from root directory.
2. cd into each target package directory and run `yarn install`
3. Run `yarn start` from target package directory to live rebuild updates or `yarn build` if you plan for statically built package
4. after installing and building all package dependencies, run CRA example app

```
cd ../example
yarn install
yarn start
```

## Adding a Package

1. Create a new directory at the project root with the intended name of the package
2. Copy, paste and adapt the files from `/poc-package-1` directory

## Publishing a Package

1. cd into target package directory
2. Build package files
3. Login to NPM `npm login`
4. Publish to NPM `npm publish`

Note: all packages currently published under free private account, [jpdaprato](https://www.npmjs.com/~jpdaprato). Please reach out to jon@alldaykitchens.com to publish packages as and when needed until a paid ADK organization account is established.

## Storybook

Storybook is a UI development tool we are using to help us build All Day Kitchen's react component library. With Storybook we can build UI components in isolation and save component UI states as stories to revisit during development, testing, or QA.

Further reading and Storybook documentation [here](https://storybook.js.org/docs/react/get-started/introduction).

To view component stories `cd example/` and run `yarn storybook`

MIT © [virtualkitchenco](https://github.com/virtualkitchenco)
