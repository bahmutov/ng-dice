require('lazy-ass');
var check = require('check-more-types');
var benv = require('benv');

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

    if (check.fn(options.tests)) {
      options.tests();
    }

    afterEach(function destroySyntheticBrowser() {
      benv.teardown(true);
    });

  });
}

module.exports = ngDice;
