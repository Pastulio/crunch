module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuration for the LESS task
        less: {
            main: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "css/main.min.css": "less/main.less"
                }
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bower-task');

    // Tasks
    grunt.registerTask('default', ['less']);

};
