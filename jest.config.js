module.exports = {
  testEnvironment: '<rootDir>/client/test/custom-test-env.js',
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
};