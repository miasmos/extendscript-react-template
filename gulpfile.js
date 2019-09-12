const gulp = require('gulp');
const config = require('./package.json');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

gulp.task('default', function() {
    gulp.src('src/extendscript/Premiere.jsx').pipe(
        gulp.dest('plugin/jsx/PPRO')
    );

    gulp.src('src/extendscript/CSInterface.js').pipe(gulp.dest('plugin/lib'));

    return gulp
        .src('plugin/CSXS/template.xml')
        .pipe(replace(/\{id\}/g, config.name))
        .pipe(replace(/\{title\}/g, config.extendscript.title))
        .pipe(replace(/\{width\}/g, config.extendscript.width))
        .pipe(replace(/\{height\}/g, config.extendscript.height))
        .pipe(rename({ basename: 'manifest' }))
        .pipe(gulp.dest('plugin/CSXS'));
});
