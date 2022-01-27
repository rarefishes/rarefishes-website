module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '<rootDir>/test/*.{ts,tsx}', '!**/*.d.ts', '!<rootDir>/src/styles/**/*.ts', '!<rootDir>/src/index.tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/cypress/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    "\\.(png|jpg|gif)$": "<rootDir>/test/__mocks__/fileMock.js"
  }
}