var gulp = require("gulp"),
    minCss = require("gulp-minify-css"),
    browserSync = require("browser-sync"),
    imagemin = require("gulp-imagemin"),
    autoprefixer = require("gulp-autoprefixer"),
    rename = require("gulp-rename"),
    cache = require("gulp-cache");

// gulp.src("") команда, которая берет какие либо файлы
// .pipe(plugin()) вызов команды, плагина
// .pipe(gulp.dest("папка назначения"))
//
// gulp.watch("папка или файл, где мониторим изменения"), ["в масиве пишем таск который выполняем при изменении папки или файла"];
// пример gulp.watch("app/css/style.css", [minifycss]);


gulp.task("serve", function() {
    browserSync({
        server: "app"
    });
    browserSync.watch("app/**/*.*").on("change", browserSync.reload);
});

gulp.task("img", function() {
    return gulp.src("app/img/**/*")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("dist/img"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("css", function() {
    return gulp.src("app/css/*.css")
    .pipe(autoprefixer())
    .pipe(minCss())
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("watch", function() {
    gulp.watch("app/css/*.css", ["css"], browserSync.reload);
    gulp.watch("app/*.html", browserSync.reload);
    gulp.watch("app/img/**/*", ["img"]);
});
