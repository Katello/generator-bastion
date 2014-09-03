'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var runTest = require('./test_helper.js');

describe('bastion:directive', function () {
    var generator;

    before(function () {
        generator = helpers.createGenerator('bastion:directive', ['./generators/directive'], ['products/ProductWithHyphens']);
    });

    it('creates files', function (done) {
        var expected = [
            'app/assets/javascripts/bastion/products/product-with-hyphens.directive.js'
        ];

        runTest(generator, done, function () {
            assert.file(expected);
        });
    });

});
