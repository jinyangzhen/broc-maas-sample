module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        concat_sourcemap: {
            options: {},
            target: {
                files: {
                    'dest/js/admin.js': ['../ui/app/js/modules/admin/**/*.js'],
                    'dest/js/infra.js': ['../ui/app/js/modules/infra/**/*.js'],
                    'dest/js/shared.js': ['../ui/app/js/modules/shared/**/*.js'],
                    'dest/js/saw.js': ['../ui/app/js/modules/saw/**/*.js'],
                    'dest/js/platform.js': ['../ui/app/js/modules/platform/**/*.js'],
                    'dest/js/sap.js': ['../ui/app/js/modules/sap/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-concat-sourcemap');

    grunt.registerTask('default', ['concat:admin','concat:infra','concat:shared','concat:saw','concat:platform','concat:sap']);
};
