'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var runTest = require('./test_helper.js');

describe('bastion', function () {
    var generator;

    before(function () {
        generator = helpers.createGenerator('bastion:app', ['./generators/app']);
    });

    it('creates controller files', function (done) {
        var expected, mockPrompt;

        expected = [
            'app/assets/javascripts/bastion/products/product-with-hyphens.controller.js'
        ];

        mockPrompt = {
            module: 'products',
            type: 'controller',
            name: 'ProductWithHyphens'
        };

        helpers.mockPrompt(generator, mockPrompt);

        runTest(generator, done, function () {
            assert.file(expected);
        });
    });

    it('creates module files', function (done) {
        var expected, mockPrompt;

        expected = [
            'app/assets/javascripts/bastion/products/products.module.js'
        ];

        mockPrompt = {
            module: 'products',
            type: 'module'
        };

        helpers.mockPrompt(generator, mockPrompt);

        runTest(generator, done, function () {
            assert.file(expected);
        });
    });

});
