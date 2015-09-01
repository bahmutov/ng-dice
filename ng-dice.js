require('lazy-ass');
var check = require('check-more-types');
var benv = require('benv');
var log = require('debug')('dice');
var describeIt = require('describe-it');

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
      la(check.fn(options.tests), 'missing tests callback');

      var useBeforeEach = true;
      describeIt(options.file, options.extract, useBeforeEach, options.tests);
    }

    afterEach(function destroySyntheticBrowser() {
      benv.teardown(true);
    });

  });
}

module.exports = ngDice;
