ngDescribe({
  module: 'FactoryExample',
  name: 'factory example using ng-describe',
  inject: 'factory-example',
  tests: function (deps) {
    var example;
    beforeEach(function () {
      example = deps['factory-example'];
    });

    it('is an object', function () {
      la(check.object(example));
      la(check.fn(example.foo), 'has foo method');
    });
  }
});
