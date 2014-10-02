var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
    constructor: function(args) {

        if (!/^([a-zA-Z]*\/[a-zA-Z]*)$/.test(args[0])) {
            console.log('The module and name must be specified separated by a slash (e.g. products/ProductBulk)');
            process.exit(1);
        } else {
            yeoman.generators.NamedBase.apply(this, arguments);

            this.module = this.name.split('/')[0];
            this.name = this.name.split('/')[1];
        }
    },
    generateTemplate: function (type, includeTestFile) {
        var filename, templateFilename, date, context, base,
            testTemplateFilename, testBase, testFilename;

        base = this.config.get('appRoot') || 'app/assets/javascripts/bastion/';
        testBase = 'test/';

        this.sourceRoot(this.sourceRoot() + '../../../' + type + '/templates');
        templateFilename = type + '.tpl.js';
        testTemplateFilename = type + '.test.tpl.js';

        filename = changeCase.paramCase(this.name);
        testFilename = testBase + this.module + '/' + filename + '.' + type + '.test.js';
        filename = base + '/' + this.module + '/' + filename + '.' + type + '.js';

        date = new Date();

        context = {
            name: this.name,
            year: date.getFullYear(),
            module: this.module,
            type: type
        };

        this.template(templateFilename, filename, context);

        if (includeTestFile) {
            this.template(testTemplateFilename, testFilename, context);
        }
    }
});
