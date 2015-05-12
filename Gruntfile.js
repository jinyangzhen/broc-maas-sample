module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
            less:{
                dev:{
                    options: {
                        paths: ['../ui/app/resources','../ui/app/js/modules'],
                        sourceMap: true
                    },
                    files: {
                        '../ui/app/devcss/style/plat/theme.css': '../ui/app/resources/css/theme.less',
                        '../ui/app/devcss/style/admin/theme.css': '../ui/app/js/modules/admin/resources/css/theme.less',
                        '../ui/app/devcss/style/sap/theme.css': '../ui/app/js/modules/sap/resources/css/theme.less',
                        '../ui/app/devcss/style/saw/theme.css': '../ui/app/js/modules/saw/resources/css/theme.less'
                    }
                }
            },
            concat_sourcemap: {
                options: {
                    sourcesContent: true
                },
                admin: {
                    files: {
                        '../ui/app/devjs/admin.js': ['../ui/app/js/modules/admin/admin.js', '../ui/app/modules/admin/**/*.js']
                    }
                },
                infra: {
                    files: {
                        '../ui/app/devjs/infra.js': ['../ui/app/modules/infra/**/*-module.js', '../ui/app/modules/infra/**/*.js']
                    }
                },
                shared: {
                    files: {
                        '../ui/app/devjs/shared.js': ['../ui/app/modules/shared/shared.js', '../ui/app/modules/shared/**/*.js']
                    }
                },
                saw: {
                    files: {
                        '../ui/app/devjs/saw.js': ['../ui/app/modules/saw/saw.js', '../ui/app/modules/saw/**/*.js']
                    }
                },
                platform: {
                    files: {
                        '../ui/app/devjs/platform.js': ['../ui/app/modules/platform/**/*-module.js', '../ui/app/modules/platform/**/*.js']
                    }
                },
                sap: {
                    files: {
                        '../ui/app/devjs/sap.js': ['../ui/app/modules/sap/sap.js', '../ui/app/modules/sap/**/*.js']
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
                },
                less:{
                    files: ['../ui/app/**/*.less'],
                    tasks: ['less:dev'],
                    options: {
                        spawn: false
                    }
                }

            }
        }
    );

    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['concat_sourcemap:admin',
        'concat_sourcemap:infra',
        'concat_sourcemap:shared',
        'concat_sourcemap:saw',
        'concat_sourcemap:platform',
        'concat_sourcemap:sap'
    ]);
};
