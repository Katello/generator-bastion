'use strict';

var runTest = require('./test_helper.js');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('bastion:factory', function () {
    var generator;

    before(function () {
        generator = helpers.createGenerator('bastion:factory', ['./generators/factory'], ['products/ProductWithHyphens']);
    });

    it('creates files', function (done) {
        var expected = [
            'app/assets/javascripts/bastion/products/product-with-hyphens.factory.js'
        ];

        runTest(generator, done, function () {
            assert.file(expected);
        });
    });

});
