require('lazy-ass');
var check = require('check-more-types');
var filename = __dirname + '/factory-example.js';

var ngDice = require('..');
la(check.fn(ngDice), 'missing ng-dice function');

ngDice({
  name: 'a suite with 1 test',
  tests: function () {
    it('is a dummy test', function () {});
  }
});

ngDice({
  name: 'loading a file',
  file: filename,
  extract: 'bar()',
  tests: function () {
    it('is a dummy test', function () {});
  }
});
