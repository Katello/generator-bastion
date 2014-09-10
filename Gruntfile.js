'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: require('./package.json'),
        eslint: {
            target: [
                'generators/**/*.js',
                'test/**/*.js',
                '!generators/**/*.tpl.js'
            ]
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.test.js']
            }
        }
    });

    grunt.registerTask('default', ['eslint', 'mochaTest']);

};
