# ng-dice

> AngularJS (NG) unit testing with dependency injection (DI) and code extraction (CE) tricks

Imagine you want to unit test your Angular code, but with two conditions

1. Run unit tests directly from Node without using a browser (too slow and flaky)
2. Test code fragments that are *not publicly exported*, like functions inside a closure

Here is an example: how can we unit test the function `nextName()` in the following application?

```js
// app.js
(function () {
  function nextName() {
    return 'World';
  }
  angular.module('HelloApp', [])
    .controller('HelloController', function ($scope) {
      $scope.names = ['John', 'Mary'];
      $scope.addName = function () {
        $scope.names.push(nextName());
      };
    });
}());
```

We can not directly access the function, right? We can using `ng-dice`!

```js
var ngDice = require('ng-dice');
ngDice({
  name: 'app',
  file: __dirname + '/app.js',
  extract: 'nextName()',
  tests: function (codeExtract) {
    it('returns next name', function () {
      var nextName = codeExtract();
      console.assert(nextName() === 'World');
    });
  }
});
```

We provide the path to the file we want to test ('app.js'), and the function signature to *extract* - `nextName()`,
and the `ngDice` will return a reference to this function when we call `codeExtract()` function.

For more information, see 
[Unit testing Angular like a boss](http://glebbahmutov.com/blog/unit-testing-angular-from-node-like-a-boss/)
and the [slides](http://slides.com/bahmutov/bend-the-rules).

[![NPM][ng-dice-icon] ][ng-dice-url]

[![Build status][ng-dice-ci-image] ][ng-dice-ci-url]

[ng-dice-icon]: https://nodei.co/npm/ng-dice.png?downloads=true
[ng-dice-url]: https://npmjs.org/package/ng-dice
[ng-dice-ci-image]: https://travis-ci.org/bahmutov/ng-dice.png?branch=master
[ng-dice-ci-url]: https://travis-ci.org/bahmutov/ng-dice

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/ng-dice/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
