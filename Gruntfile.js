module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
            concat_sourcemap: {

                options: {},
                admin: {
                    files: {
                        'dest/js/admin.js': ['../ui/app/js/modules/admin/**/*.js']
                    }
                },
                infra: {
                    files: {
                        'dest/js/infra.js': ['../ui/app/js/modules/infra/**/*.js']
                    }
                },
                shared: {
                    files: {
                        'dest/js/shared.js': ['../ui/app/js/modules/shared/**/*.js']
                    }
                },
                saw: {
                    files: {
                        'dest/js/saw.js': ['../ui/app/js/modules/saw/**/*.js']
                    }
                },
                platform: {
                    files: {
                        'dest/js/platform.js': ['../ui/app/js/modules/platform/**/*.js']
                    }
                },
                sap: {
                    files: {
                        'dest/js/sap.js': ['../ui/app/js/modules/sap/**/*.js']
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-concat-sourcemap');

    grunt.registerTask('default', ['concat_sourcemap:admin',
        'concat_sourcemap:infra',
        'concat_sourcemap:shared',
        'concat_sourcemap:saw',
        'concat_sourcemap:platform',
        'concat_sourcemap:sap'
    ]);
};
