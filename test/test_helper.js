'use strict';

var helpers = require('yeoman-generator').test;
var path = require('path');

module.exports = function runTest(generator, done, callback) {

    helpers.testDirectory(path.join(__dirname, '.yeoman-test'), function () {
        generator.run({}, function () {
            callback();
            process.chdir(path.join(__dirname, '/..'));
            done();
        });
    });

};
