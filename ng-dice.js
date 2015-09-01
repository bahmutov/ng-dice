require('lazy-ass');
var check = require('check-more-types');
var benv = require('benv');
var log = require('debug')('dice');

function ngDice(options) {
  options = options || {};

  describe(options.name, function () {

    beforeEach(function setupEnvironment(done) {
      benv.setup(function () {
        benv.expose({
          angular: benv.require('./node_modules/angular/angular.js', 'angular')
        });
        done();
      });
    });

    if (options.file && options.extract) {
      log('extracting', options.extract, 'from', options.file);
    }

    if (check.fn(options.tests)) {
      options.tests();
    }

    afterEach(function destroySyntheticBrowser() {
      benv.teardown(true);
    });

  });
}

module.exports = ngDice;
