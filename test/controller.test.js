'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var runTest = require('./test_helper.js');

describe('bastion:controller', function () {
    var generator;

    before(function () {
        generator = helpers.createGenerator('bastion:controller', ['./generators/controller'], ['products/ProductWithHyphens']);
    });

    it('creates files', function (done) {
        var expected = [
            'app/assets/javascripts/bastion/products/product-with-hyphens.controller.js'
        ];

        runTest(generator, done, function () {
            assert.file(expected);
        });
    });

});
