require('lazy-ass');
var filename = __dirname + '/lodash-example.js';

var ngDice = require('..');

ngDice({
  name: 'lodash example',
  file: filename,
  extract: 'var lodashVersion',
  tests: function (getVersion) {
    it('has _ version', function () {
      var version = getVersion();
      la(version, 'has version');
    });
  }
});
