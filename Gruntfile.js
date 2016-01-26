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
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '../sample-bastion-plugin/',
                        src: ['**'],
                        dest: 'generators/plugin/templates/',
                    },
                    {
                        expand: true,
                        cwd: '../sample-bastion-plugin/',
                        src: ['.gitignore', '.rubocop.yml', '.travis.yml'],
                        dest: 'generators/plugin/templates/',
                        rename: function (dest, src) {
                            return dest + "dot_" + src.substring(1);
                        }
                    },
                ],
                options: {
                    process: function (content, srcpath) {
                        return content
                            .replace(/sample_bastion_plugin/g,"<%= nameSnake %>")
                            .replace(/sample-bastion-plugin/g,"<%= nameParam %>")
                            .replace(/SampleBastionPlugin/g,"<%= namePascal %>")
                            .replace(/Sample Bastion Plugin/g,"<%= nameTitle %>")

                            .replace(/sample_models/g,"<%= modelsSnake %>")
                            .replace(/sample-models/g,"<%= modelsParam %>")
                            .replace(/SampleModels/g,"<%= modelsPascal %>")
                            .replace(/Sample Models/g,"<%= modelsTitle %>")
                            .replace(/sample models/g,"<%= modelsSentence %>")
                            .replace(/sampleModels/g,"<%= modelsCamel %>")

                            .replace(/sample_model/g,"<%= modelSnake %>")
                            .replace(/sample-model/g,"<%= modelParam %>")
                            .replace(/SampleModel/g,"<%= modelPascal %>")
                            .replace(/Sample Model/g,"<%= modelTitle %>")
                            .replace(/sample model/g,"<%= modelSentence %>")
                            .replace(/sampleModel/g,"<%= modelCamel %>");
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['eslint', 'mochaTest', 'updatePlugin']);

};
