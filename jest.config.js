module.exports = {
  roots: ['<rootDir>/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '<rootDir>/test/**/*.{ts,tsx}', '!**/*.d.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/test/cypress'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    "\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    "\\.(png|jpg)$": "<rootDir>/test/__mocks__/fileMock.js"
  }
}