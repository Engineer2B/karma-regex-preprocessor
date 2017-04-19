karma-regex-preprocessor
========================

A karma preprocessor which does one or more regular expression substitutions on the file contents. It effectively just calls `String.prototype.replace()` with the parameters specified in the configuration.

Historically, the main motivation for this was that https://github.com/mode needed something to quickly simulate the nginx [HttpSubModule](http://wiki.nginx.org/HttpSubModule).


Installation
------------

Install from npm:

```powershell
npm install karma-regex-preprocessor --save-dev
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
        {
          // Replacements for File1.
          fileName: "File1.js", replacement: [
            // Simple string replace of 'foo' with 'bar'.
            { replace: "foo", with: "bar" },
            // Prefix all numbers with '-'.
            { replace: /[\d]+/g, with: "-$1" },
            // Use a function to calculate replacement.
            { replace: "%rand%", with: function (match) { return Math.random() } }
          ]
        },
        {
          // Replacements for File2.
          fileName: "File2.js", replacement: [
            // Simple string replace of 'foo' with 'baz'.
            { replace: "foo", with: "baz" },
            // Prefix all numbers with '€'.
            { replace: /[\d]+/g, with: "€$1" },
            // Use a function to calculate replacement.
            { replace: "%rand%", with: function (match) { return Math.random()*5 } }
          ]
        }
      ]
    }
  });
};
```


License
-------

The MIT License (MIT)
