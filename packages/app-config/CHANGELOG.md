# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.1.0 (2021-06-28)


### Code Refactoring

* **app-config:** removed body-parser, cookie-parser, helmet etc middlewares ([6a42008](https://github.com/tirthaguha/rapidcode/commit/6a420080e979ff44d29da77cd5bf1d652c3852a4))


### Features

* **app-config:** added routebuilder ([b9137c4](https://github.com/tirthaguha/rapidcode/commit/b9137c4438394193e59504cb111fb12f072119d8))
* **app-config:** app Config and Route Config Added ([446f741](https://github.com/tirthaguha/rapidcode/commit/446f741b3a813e403cbda58222c9b39b71d8870d))


### BREAKING CHANGES

* **app-config:** Removed the middleware configuration option, and the middlewares will have to be
manually added now in the app. they will not come built in.
