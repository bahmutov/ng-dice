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
      la(fn.name === 'bar');
    });

    it('returned function works', function () {
      var fn = getBar();
      var result = fn();
      la(result === 'bar', 'returns string "bar"', result);
    });

    it('has the factory', function () {
      var injector = angular.injector(['FactoryExample']);
      la(injector.has('factory-example'), 'injector has factory-example');
    });

    it('can grab the factory', function () {
      var injector = angular.injector(['FactoryExample']);
      var f = injector.get('factory-example');
      la(check.object(f), 'factory is an object');
      la(check.fn(f.foo), 'has foo method');
      var result = f.foo();
      la(result === 'bar', 'returns "bar"', result);
    });
  }
});
