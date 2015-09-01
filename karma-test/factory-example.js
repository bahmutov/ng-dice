function foo() {
  return bar();
}
function bar() {
  return 'bar';
}
angular.module('FactoryExample', [])
  .factory('factory-example', function factoryExample() {
    return {
      foo: foo
    };
  });
