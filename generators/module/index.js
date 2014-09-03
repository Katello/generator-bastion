var yeoman = require('yeoman-generator');
var BastionBase = require('../base.js');

module.exports = BastionBase.extend({
    constructor: function () {
        yeoman.generators.NamedBase.apply(this, arguments);

        this.module = this.name;
    },
    buildTemplate: function () {
        this.generateTemplate('module');
    }
});
