# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.3](https://github.com/tirthaguha/rapidcode/compare/v0.1.2...v0.1.3) (2021-06-28)

**Note:** Version bump only for package root





## [0.1.2](https://github.com/tirthaguha/rapidcode/compare/v0.1.1...v0.1.2) (2021-06-28)


### Bug Fixes

* **middleware:** changed to accomodate the new logger and changed how wrappedFunction is called ([77cc15d](https://github.com/tirthaguha/rapidcode/commit/77cc15d800b76316887ef99e83dd37cf82f6247c))





## [0.1.1](https://github.com/tirthaguha/rapidcode/compare/v0.1.0...v0.1.1) (2021-06-28)

**Note:** Version bump only for package root





# 0.1.0 (2021-06-28)


### Bug Fixes

* **middleware-factory:** fixed middleware factory issues with logging ([949f8c2](https://github.com/tirthaguha/rapidcode/commit/949f8c28a8167d31302e38f0335ce1462ac28dab))
* **middleware-factory:** removed logger from middleware ([1619f79](https://github.com/tirthaguha/rapidcode/commit/1619f791de4937018350fdb6e3c766f1e7432f35))
* changed from module to main in package.json ([3d32ee6](https://github.com/tirthaguha/rapidcode/commit/3d32ee6927079d840ea65dd827117a8cbe977425))
* **issue with levels, and es6 class:** issue with levels ([48c4a1a](https://github.com/tirthaguha/rapidcode/commit/48c4a1acadab7663c7a12f8ff944422b104de422))
* **logger:** configured winston and exported winston logger ([3ed1f3c](https://github.com/tirthaguha/rapidcode/commit/3ed1f3cc04422f54125d39d2e1a64414a157f0be))


### Code Refactoring

* **app-config:** removed body-parser, cookie-parser, helmet etc middlewares ([6a42008](https://github.com/tirthaguha/rapidcode/commit/6a420080e979ff44d29da77cd5bf1d652c3852a4))


### Features

* **app-config:** added routebuilder ([b9137c4](https://github.com/tirthaguha/rapidcode/commit/b9137c4438394193e59504cb111fb12f072119d8))
* **app-config:** app Config and Route Config Added ([446f741](https://github.com/tirthaguha/rapidcode/commit/446f741b3a813e403cbda58222c9b39b71d8870d))
* **logger:** added logger ([ca88773](https://github.com/tirthaguha/rapidcode/commit/ca887737c6bdac6bce216d02b200912e6fde4312))
* **logger:** added Logger Package ([c2a569c](https://github.com/tirthaguha/rapidcode/commit/c2a569c62e26410d1ed83631dd48112b3ffedb80))
* **middleware-factory:** Middleware Factory Added ([eaedbd2](https://github.com/tirthaguha/rapidcode/commit/eaedbd2857dfb0431ebf0e9947565d50baea58eb))


### BREAKING CHANGES

* **app-config:** Removed the middleware configuration option, and the middlewares will have to be
manually added now in the app. they will not come built in.
