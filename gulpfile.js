var gulp = require('gulp');
var concat = require('gulp-concat-sourcemap');

gulp.task('infra', function (){
    return gulp.src('../ui/app/js/modules/infra/**/*.js').pipe(concat('infra.js')).pipe(gulp.dest('dist/js'));
});

gulp.task('admin', function (){
    return gulp.src('../ui/app/js/modules/admin/**/*.js').pipe(concat('admin.js')).pipe(gulp.dest('dist/js'));
});

gulp.task('shared', function (){
    return gulp.src('../ui/app/js/modules/shared/**/*.js').pipe(concat('shared.js')).pipe(gulp.dest('dist/js'));
});

gulp.task('saw', function (){
    return gulp.src('../ui/app/js/modules/saw/**/*.js').pipe(concat('saw.js')).pipe(gulp.dest('dist/js'));
});

gulp.task('platform', function (){
    return gulp.src('../ui/app/js/modules/platform/**/*.js').pipe(concat('platform.js')).pipe(gulp.dest('dist/js'));
});
gulp.task('sap', function (){
    return gulp.src('../ui/app/js/modules/sap/**/*.js').pipe(concat('sap.js')).pipe(gulp.dest('dist/js'));
});


gulp.task('default', ['infra', 'admin','shared','saw','platform','sap']);

gulp.task('watch', function() {
    gulp.watch('../../modules/**/*.*', ['default']);
});
