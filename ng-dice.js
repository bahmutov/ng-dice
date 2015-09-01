require('lazy-ass');
var check = require('check-more-types');
var benv = require('benv');
var log = require('debug')('dice');
var describeIt = require('describe-it');

var exists = require('fs').existsSync;
var path = require('path');
var angularAt = path.join(path.dirname(require.resolve('angular')), 'angular.js');
log('path to the Angular library', angularAt);

function ngDice(options) {
  options = options || {};

  describe(options.name, function () {

    beforeEach(function setupEnvironment(done) {
      benv.setup(function () {
        var browserLibs = {
          angular: benv.require(angularAt, 'angular')
        };

        if (check.object(options.load)) {
          Object.keys(options.load).forEach(function (name) {
            var libraryPath = options.load[name];
            la(exists(libraryPath), 'cannot find library', name, 'at', libraryPath);
            browserLibs[name] = benv.require(libraryPath);
          });
        }

        benv.expose(browserLibs);
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
