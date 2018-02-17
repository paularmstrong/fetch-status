module.exports = {
  displayName: 'lint',
  rootDir: '../../',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/!(dist)/**/*.js']
};
