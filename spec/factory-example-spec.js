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
  tests: function (getBar) {
    it('is a dummy test', function () {});

    it('has an extract callback', function () {
      la(check.fn(getBar));
    });

    it('returns function with name bar', function () {
      var fn = getBar();
      la(check.fn(fn), 'returns a function', fn);
      console.log('returned function', fn.toString());
      la(fn.name === 'bar');
    });
  }
});
