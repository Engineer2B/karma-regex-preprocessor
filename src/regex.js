
var createRegexPreprocessor = function (config, helper, logger) {

    var log = logger.create('preprocessor.regex');
    var regexConfig = config.regexPreprocessor || {};

    var rules = regexConfig.rules || [];

    return function (content, file, done) {
        var fileName = file.originalPath.substring(file.originalPath.lastIndexOf('/') + 1);
        log.debug('Processing "%s".', file.originalPath);
        var relevantRules = rules.filter(ruleItem =>
            ruleItem.fileName === fileName);
        relevantRules.forEach(
            relevantRule => {
                relevantRule.replacement.forEach(replacementItem => {
                    content = content.replace(replacementItem.replace, replacementItem.with);
                    log.debug(`In file "${fileName}" replacing ${replacementItem.replace} with ${replacementItem.with}`);
                });
            });
        done(content);
    }
};

createRegexPreprocessor.$inject = ['config', 'helper', 'logger'];

module.exports = createRegexPreprocessor;