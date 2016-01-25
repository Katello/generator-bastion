var yeoman = require('yeoman-generator');
var BastionBase = require('../base.js');

module.exports = BastionBase.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);
    },
    promptUser: function () {
        var done, prompts;

        done = this.async();

        console.log(this.yeoman);

        prompts = [{
            type: 'list',
            name: 'type',
            message: 'What type of component are you adding?',
            choices: ['controller', 'service', 'factory', 'module', 'directive', 'plugin']
        },{
            name: 'module',
            message: 'What module are you adding this component to?',
            when: function (response) {
                return response.type !== 'module' && response.type !== 'plugin';
            }
        },{
            name: 'module',
            message: 'What is the name of the new module you are adding?',
            when: function (response) {
                return response.type === 'module';
            }
        },{
            name: 'name',
            message: 'What is the name of your component (e.g. ProductBulkAction)?',
            when: function (response) {
                return response.type !== 'module' && response.type !== 'plugin';
            }
        },{
            name: 'plugin',
            message: 'What is the name of your plugin in words (e.g. Docker Plugin)?',
            when: function (response) {
                return response.type === 'plugin';
            }
        }];

        this.prompt(prompts, function (props) {
            this.name = props.name;
            this.type = props.type;
            this.module = props.module;

            if (this.name === undefined && this.module) {
                this.name = this.module;
            } else if (this.name === undefined && this.plugin) {
                this.name = this.plugin;
            }

            done();
        }.bind(this));
    },
    buildComponent: function () {
        if (this.type === 'module' || this.type === 'plugin') {
            this.generateTemplate(this.type, false);
        } else {
            this.generateTemplate(this.type, true);
        }
    }
});
