module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuration for the LESS task
        less: {
            main: {
                options: {
                    paths: ['css'],
                    cleancss: true
                },
                files: {
                    'css/main.min.css': 'less/main.less'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
            },
            all: [
                'Gruntfile.js',
                'js/**/*.js',
                '!js/**/*.concat.js',
                '!js/**/*.min.js'
            ],
            dev: [
                'js/**/*.js',
                '!js/**/*.concat.js',
                '!js/**/*.min.js'
            ]
        },
        concat: {
            'js/<%= pkg.name %>.concat.js': [
                'js/**/*.js',
                '!js/**/*.concat.js',
                '!js/**/*.min.js'
            ]
        },
        uglify: {
            compile: {
                options: {
                    compress: true,
                    verbose: true
                },
                files: [{
                    src: 'js/<%= pkg.name %>.concat.js',
                    dest: 'js/<%= pkg.name %>.min.js'
                }]
            }
        },
        clean: {
            options: {
                'no-write': false
            },
            dev: {
                src: [
                    'css/*.min.css',
                    'js/<%= pkg.name %>.min.js',
                    'js/<%= pkg.name %>.concat.js'
                ]
            }
        },

        // Bower Configuration - Installs Bower components into the lib directory
        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
            }
        },

        // Configuration for the watch task
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            },
        }

    });

    // Load Tasks
    //grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-bower-task');

    // Tasks
    grunt.registerTask('build:dev', ['clean:dev', 'less', 'jshint:dev', 'concat']);
    grunt.registerTask('build:prod', ['clean:dev', 'less', 'jshint:all', 'concat', 'uglify']);

    grunt.registerTask('default', ['build:dev']);
};
