'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var runTest = require('./test_helper.js');

describe('bastion:module', function () {
    var generator;

    before(function () {
        generator = helpers.createGenerator('bastion:module', ['./generators/module'], ['products']);
    });

    it('creates files', function (done) {
        var expected = [
            'app/assets/javascripts/bastion/products/products.module.js'
        ];

        runTest(generator, done, function () {
            assert.file(expected);
        });
    });

});
