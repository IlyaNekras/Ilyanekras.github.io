let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

gulp.task('scss', function(){
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function(){
    return gulp.src('src/*.html')
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', gulp.parallel('scss'))
    gulp.watch('src/*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch', 'html', 'scss'))