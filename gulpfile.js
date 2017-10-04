var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var path = {
    source: {
        less: 'src/styles/less/*.less'
        // scripts: 'src/scripts'
    },

    build: {
        css: 'src/styles/css'
        // scripts: 'src/scripts'
    }
};

gulp.task('styles', function () {
    gulp.src(path.source.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css));
});


gulp.task('default', function () {
    gulp.watch(path.source.less, ['styles']);
});
