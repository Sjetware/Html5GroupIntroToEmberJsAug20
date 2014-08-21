module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        emberTemplates: {
            compile: {
                files: {
                    'scripts/compiled.js': 'templates/**/*.hbs'
                },
                options: {
                    templateName: function (name) {
                        return name.replace('templates/', '');
                    }
                }
            }
        },
        concat: {
            dist: {
                src: ['scripts/startup/*.js', 'scripts/routes/*.js', 'scripts/controllers/*.js', 'scripts/models/*.js'],
                dest: 'scripts/app.js'
            }
        },
        jslint: {
            client: {
                src: ['scripts/app.js']
            },
            directives: {
                browser: true,
                predef: ['jQuery', 'Ember', 'Handlebars']
            }
        }
    });

    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['emberTemplates', 'concat']);

};