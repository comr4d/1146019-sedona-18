"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
<<<<<<< HEAD
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
=======
>>>>>>> 660305ae19f6f7454a04e858803f41f6439827a3

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
})

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("source/img"));
})

gulp.task("sprite", function(){
  return gulp.src("source/img/icon-*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
<<<<<<< HEAD
=======

>>>>>>> 660305ae19f6f7454a04e858803f41f6439827a3
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
})

gulp.task("html", function () {
  return gulp.src("source/*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"));
})

<<<<<<< HEAD
gulp.task('scripts', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

gulp.task('pages', function() {
  return gulp.src(['source/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('build'));
});

=======
>>>>>>> 660305ae19f6f7454a04e858803f41f6439827a3
gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.ico"
  ], {base: "source"
})
.pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("server", function () {
  server.init({
    server: "build/",
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
<<<<<<< HEAD
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

=======
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

>>>>>>> 660305ae19f6f7454a04e858803f41f6439827a3
gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "sprite",
<<<<<<< HEAD
  "scripts",
  "html",
  "pages"));
=======
  "html"));
>>>>>>> 660305ae19f6f7454a04e858803f41f6439827a3

gulp.task("start", gulp.series(
  "build",
  "server"));
