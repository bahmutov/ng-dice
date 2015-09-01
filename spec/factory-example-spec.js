require('lazy-ass');
var check = require('check-more-types');
var filename = __dirname + '/factory-example.js';

var ngDice = require('..');
la(check.fn(ngDice), 'missing ng-dice function');

ngDice({
  name: 'factory example using ng-dice'
});
