karma-regex-preprocessor
========================

A karma preprocessor which does one or more regular expression substitutions on the file contents. It effectively just calls `String.prototype.replace()` with the parameters specified in the configuration.

The main motivation for this was that I needed something to quickly simulate the nginx [HttpSubModule](http://wiki.nginx.org/HttpSubModule).


Installation
------------

For the time being install from Github:

```sh
$ npm install 'git+https://github.com/Engineer2B/karma-regex-preprocessor.git' --save-dev
```


Configuration
-------------

Example configuration:

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['regex']
    },

    regexPreprocessor: {
      rules: [
        // Simple string replace of 'foo' with 'bar'
        [ 'foo', 'bar' ],
        // Prefix all numbers with '-'
        [ /[\d]+/g, '-$1'],
        // Use a function to calculate replacement
        [ '%rand%', function(match) { return Math.random() } ]
      ]
    }
  });
};
```


License
-------

The MIT License (MIT)
