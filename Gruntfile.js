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
                    src: ['.tmp']
                        }]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: ['Gruntfile.js', 'lib/{,*/}*.js']
            }
        }
        
    });

    grunt.registerTask('default', ['clean', 'jshint']);
    
    console.log('----------------------------------');
    console.log('JSResource');
    console.log('App version: '+ appConfig.version);
    console.log('----------------------------------');
    console.log('');
    
};