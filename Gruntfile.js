'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths for the application
    var appConfig = {
        version: require('./package.json').version
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp']}]
            }
        }
    });

    grunt.registerTask('default', [
    'clean'
  ]);
};