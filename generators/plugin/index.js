var yeoman = require('yeoman-generator');
var BastionBase = require('../base.js');
var changeCase = require('change-case');

module.exports = BastionBase.extend({
    constructor: function () {
        // TODO: NamedBase requires the name passed in in arguments; how to make optional
        //       and prompt?
        yeoman.generators.NamedBase.apply(this, arguments);
    },
    promptUser: function () {
        var done, prompts;

        if (this.name !== undefined) {
            return;
        }

        done = this.async();

        console.log(this.yeoman);

        prompts = [{
            name: 'name',
            message: 'What is the name of your plugin in words (e.g. Docker Plugin)?'
        }];

        this.prompt(prompts, function (props) {
            this.name = props.name;

            done();
        }.bind(this));
    },
    buildTemplate: function () {
        var context;

        this.sourceRoot(this.sourceRoot() + '../../../plugin/templates');

        this.model = "Docker Container";
        this.models = this.model + "s";

        context = {
            // Host Groups
            nameTitle: this.name,
            // host-groups
            nameParam: changeCase.paramCase(this.name),
            // HostGroups
            namePascal: changeCase.pascalCase(this.name),
            // HostGroups
            nameSentence: changeCase.sentenceCase(this.name),
            // hostGroups
            nameSnake: changeCase.snakeCase(this.name),

            // Host Groups
            modelTitle: this.model,
            // host-groups
            modelParam: changeCase.paramCase(this.model),
            // HostGroups
            modelPascal: changeCase.pascalCase(this.model),
            // host groups
            modelSentence: changeCase.sentenceCase(this.model),
            // host_groups
            modelSnake: changeCase.snakeCase(this.model),

            // Host Groups
            modelsTitle: this.model,
            // host-groups
            modelsParam: changeCase.paramCase(this.model),
            // HostGroups
            modelsPascal: changeCase.pascalCase(this.model),
            // host groups
            modelsSentence: changeCase.sentenceCase(this.model),
            // host_groups
            modelsSnake: changeCase.snakeCase(this.model)
        };

        //grunt.file.write('.yo-rc.json',
        //                 "{\"generator-bastion\": {\"appRoot\": \"app/assets/javascripts/" + this.nameParam + "\"}}");

        this.template('README.md', 'README.md', context);
    }
});
