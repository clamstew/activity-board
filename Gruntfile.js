'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/style/main.css': 'public/style/main.sass'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};