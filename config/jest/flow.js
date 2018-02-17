const path = require('path');

module.exports = {
  displayName: 'flow',
  rootDir: '../../',
  runner: '<rootDir>/config/jest/runner-flowtype',
  testMatch: ['<rootDir>/!(dist)/**/*.js']
};
