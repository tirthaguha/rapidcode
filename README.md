# rapidcode

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A collection of utility functions that is intended to make writing express based _microservices_ easy for the developers.

## Setting up this repo

Step 1: Install lerna

```
npm install lerna -g
```

or use lerna with npx

Step 2: Run the following on the root of the project

```bash=
npm install
lerna bootstrap --hoist
```

### Adding npm packages to one or more modules

Use the standard lerna command to install dependencies for the packages.
https://github.com/lerna/lerna/tree/main/commands/add

## Creating a new package

```
lerna create @rapidcode/<package_name>
```

## Building Versioning and Publishing
