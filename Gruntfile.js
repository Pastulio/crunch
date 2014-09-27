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

    // Tasks
    grunt.registerTask('default', ['less']);

};
