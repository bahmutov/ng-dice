module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../node_modules/ng-describe/dist/ng-describe.js',
      '../spec/*.js',
      '*.js'
    ],
    port: 9876,
    browsers: ['Chrome'],
    singleRun: true
  });
};
