module.exports = function (grunt) {

    var watchInterval = 2000,  //avoid cpu spike in window
        fs = require('fs-extra');

    function cb(err) {
        if (err) return console.error(err);
        console.log('.....copy in success....');
    }

    fs.copy('html/css-files-include.html', '../ui/app/css-files-include.html', cb);
    fs.copy('html/js-files-include.html', '../ui/app/js-files-include.html', cb);

    grunt.initConfig({
            less:{
                dev:{
                    options: {
                        paths: ['../ui/app/resources','../ui/app/js/modules']//,
                       // sourceMap: true
                    },
                    files: {
                        '../ui/app/resources/css/theme.css': '../ui/app/resources/css/theme.less',
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
                        '../ui/app/devjs/admin.js': ['../ui/app/js/modules/admin/admin.js', '../ui/app/js/modules/admin/**/*.js']
                    }
                },
                infra: {
                    files: {
                        '../ui/app/devjs/infra.js': ['../ui/app/js/modules/infra/**/*-module.js', '../ui/app/js/modules/infra/**/*.js']
                    }
                },
                shared: {
                    files: {
                        '../ui/app/devjs/shared.js': ['../ui/app/js/modules/shared/shared.js', '../ui/app/js/modules/shared/**/*.js']
                    }
                },
                saw: {
                    files: {
                        '../ui/app/devjs/saw.js': ['../ui/app/js/modules/saw/saw.js', '../ui/app/js/modules/saw/**/*.js']
                    }
                },
                platform: {
                    files: {
                        '../ui/app/devjs/platform.js': ['../ui/app/js/modules/platform/**/*-module.js', '../ui/app/js/modules/platform/**/*.js']
                    }
                },
                sap: {
                    files: {
                        '../ui/app/devjs/sap.js': ['../ui/app/js/modules/sap/sap.js', '../ui/app/js/modules/sap/**/*.js']
                    }
                }
            },

            watch: {
                saw: {
                    files: ['../ui/app/js/modules/saw/**/*.js'],
                    tasks: ['concat_sourcemap:saw'],
                    options: {
                        interval:watchInterval,
                        spawn: false
                    }
                },
                platform:{
                    files: ['../ui/app/js/modules/platform/**/*.js'],
                    tasks: ['concat_sourcemap:platform'],
                    options: {
                        interval:watchInterval,
                        spawn: false
                    }
                },
                infra:{
                    files: ['../ui/app/js/modules/infra/**/*.js'],
                    tasks: ['concat_sourcemap:infra'],
                    options: {
                        interval:watchInterval,
                        spawn: false
                    }
                },
                shared:{
                    files: ['../ui/app/js/modules/shared/**/*.js'],
                    tasks: ['concat_sourcemap:shared'],
                    options: {
                        interval:watchInterval,
                        spawn: false
                    }
                },
                sap: {
                    files: ['../ui/app/js/modules/sap/**/*.js'],
                    tasks: ['concat_sourcemap:sap'],
                    options: {
                        interval:watchInterval,
                        spawn: false
                    }
                },
                admin: {
                    files: ['../ui/app/js/modules/admin/**/*.js'],
                    tasks: ['concat_sourcemap:admin'],
                    options: {
                        interval:watchInterval,
                        spawn: false
                    }
                },
                less:{
                    files: ['../ui/app/**/*.less'],
                    tasks: ['less:dev'],
                    options: {
                        interval:watchInterval,
                        spawn: false
                    }
                }

            }
        }
    );

    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:dev','concat_sourcemap:admin',
        'concat_sourcemap:infra',
        'concat_sourcemap:shared',
        'concat_sourcemap:saw',
        'concat_sourcemap:platform',
        'concat_sourcemap:sap',
        'watch'
    ]);
};
