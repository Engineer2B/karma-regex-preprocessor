
var createRegexPreprocessor = function (config, helper, logger) {

    var log = logger.create('preprocessor.regex');
    var regexConfig = config.regexPreprocessor || {};

    var rules = regexConfig.rules || [];

    return function (content, file, done) {
        log.debug('Processing "%s".', file.originalPath);

        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            content = content.replace(rule[0], rule[1]);
        }

        done(content);
    }
};

createRegexPreprocessor.$inject = ['config', 'helper', 'logger'];

module.exports = {
  'preprocessor:regex': ['type', createRegexPreprocessor]
};