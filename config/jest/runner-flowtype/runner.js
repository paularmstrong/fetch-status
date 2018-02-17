const { exec } = require('child_process');
const { pass, fail } = require('create-jest-runner');

module.exports = ({ testPath }) =>
  new Promise((resolve, reject) => {
    const start = new Date();
    exec(`flow check-contents ${testPath} < ${testPath}`, (err, stdout) => {
      if (err) {
        resolve(
          fail({
            start,
            end: new Date(),
            test: { path: testPath, errorMessage: stdout }
          })
        );
      }
      resolve(pass({ start, end: new Date(), test: { path: testPath } }));
    });
  });
