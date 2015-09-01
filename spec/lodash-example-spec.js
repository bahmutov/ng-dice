require('lazy-ass');
var filename = __dirname + '/lodash-example.js';

var ngDice = require('..');

ngDice({
  name: 'lodash example',
  file: filename,
  extract: 'var lodashVersion',
  load: {
    _: __dirname + '/../node_modules/lodash/index.js'
  },
  tests: function (getVersion) {
    it('is a dummy unit test', function () {});

    it('has _ version', function () {
      var version = getVersion();
      la(version, 'has version');
    });
  }
});
