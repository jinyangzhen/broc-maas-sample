'use strict';

var fs = require('fs-extra'),
    mergeTree = require('broccoli-merge-trees'),
    concatAndSourceMap = require('broccoli-sourcemap-concat'),
    compileLess = require('broccoli-less-single'),
    pickFiles = require ('broccoli-static-compiler');

var infra, platform, shared, admin, sap, saw;
var adminCss, sawCss, sapCss;

function cb(err) {
    if (err) return console.error(err);
    console.log('Succeed');
}

fs.copy('broccoli/css-files-include.html', '../ui/app/css-files-include.html', cb);
fs.copy('broccoli/js-files-include.html', '../ui/app/js-files-include.html', cb);


adminCss = compileLess ('../ui/app/js/modules/admin', 'resources/css/theme.less', 'style/admin/theme.css');
sawCss = compileLess ('../ui/app/js/modules/saw', 'resources/css/theme.less', 'style/saw/theme.css');
sapCss = compileLess ('../ui/app/js/modules/sap', 'resources/css/theme.less', 'style/sap/theme.css');

infra = concatAndSourceMap('../ui/app/js/modules/infra', {
    inputFiles: ['../../modules/infra/**/*-module.js', '../../modules/infra/**/*.js'],
    outputFile: '/infra.js'
});

platform = concatAndSourceMap('../ui/app/js/modules/platform', {
    inputFiles: ['../../modules/platform/**/*-module.js', '../../modules/platform/**/*.js'],
    outputFile: '/platform.js'
});

shared = concatAndSourceMap('../ui/app/js/modules/shared', {
    inputFiles: ['../../modules/shared/shared.js', '../../modules/shared/**/*.js'],
    outputFile: '/shared.js'
});

admin = concatAndSourceMap('../ui/app/js/modules/admin', {
    inputFiles: ['../../modules/admin/admin.js', '../../modules/admin/**/*.js'],
    outputFile: '/admin.js'
});

sap = concatAndSourceMap('../ui/app/js/modules/sap', {
    inputFiles: ['../../modules/sap/sap.js', '../../modules/sap/**/*.js'],
    outputFile: '/sap.js'
});

saw = concatAndSourceMap('../ui/app/js/modules/saw', {
    inputFiles: ['../../modules/saw/saw.js', '../../modules/saw/**/*.js'],
    outputFile: '/saw.js'
});

module.exports = mergeTree([infra, platform, shared, admin, sap, saw, adminCss, sawCss, sapCss]);   //
