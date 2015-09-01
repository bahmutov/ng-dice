angular.module('FactoryExample', [])
  .factory('factory-example', function factoryExample() {
    function foo() {
      return bar();
    }
    function bar() {
      return 'bar';
    }
    return {
      foo: foo
    };
  });
