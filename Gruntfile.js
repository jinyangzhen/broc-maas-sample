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
            },

            watch: {
                saw: {
                    files: ['../ui/app/js/modules/saw/**/*.js'],
                    tasks: ['concat_sourcemap:saw'],
                    options: {
                        spawn: false
                    }
                },
                platform:{
                    files: ['../ui/app/js/modules/platform/**/*.js'],
                    tasks: ['concat_sourcemap:platform'],
                    options: {
                        spawn: false
                    }
                },
                infra:{
                    files: ['../ui/app/js/modules/infra/**/*.js'],
                    tasks: ['concat_sourcemap:infra'],
                    options: {
                        spawn: false
                    }
                },
                shared:{
                    files: ['../ui/app/js/modules/shared/**/*.js'],
                    tasks: ['concat_sourcemap:shared'],
                    options: {
                        spawn: false
                    }
                },
                sap: {
                    files: ['../ui/app/js/modules/sap/**/*.js'],
                    tasks: ['concat_sourcemap:sap'],
                    options: {
                        spawn: false
                    }
                },
                admin: {
                    files: ['../ui/app/js/modules/admin/**/*.js'],
                    tasks: ['concat_sourcemap:admin'],
                    options: {
                        spawn: false
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat_sourcemap:admin',
        'concat_sourcemap:infra',
        'concat_sourcemap:shared',
        'concat_sourcemap:saw',
        'concat_sourcemap:platform',
        'concat_sourcemap:sap'
    ]);
};
