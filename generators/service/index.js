var BastionBase = require('../base.js');

module.exports = BastionBase.extend({
    buildTemplate: function () {
        this.generateTemplate('service');
    }
});
