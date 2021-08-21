const config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/test/**",
    "!**/coverage/**",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  rootDir: ".",
  roots: ["lib", "__tests__"],
  testEnvironment: "node",
};

module.exports = config;
