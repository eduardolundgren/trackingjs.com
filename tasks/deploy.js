'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
var util = require('./util');

gulp.task('install-bower', function (cb) {
  spawn('bower', ['install'], {
    stdio: 'inherit'
  }).on('exit', cb);
});

gulp.task('install-npm', function (cb) {
  spawn('npm', ['install'], {
    cwd: 'bower_components/tracking.js',
    stdio: 'inherit'
  }).on('exit', cb);
});

gulp.task('run-api', function (cb) {
  spawn('gulp', ['docs'], {
    cwd: 'bower_components/tracking.js/',
    stdio: 'inherit'
  }).on('exit', cb);
});

gulp.task('copy-api', function () {
  return gulp.src('bower_components/tracking.js/docs/**')
    .pipe(gulp.dest('dist/api'));
});

gulp.task('copy-cname', function () {
  return gulp.src("src/CNAME")
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-bower', function () {
  return gulp.src('bower_components/**')
    .pipe(gulp.dest('dist/bower'));
});

gulp.task('clean-tracking', function() {
  var files = [
    'dist/bower/tracking.js/docs',
    'dist/bower/tracking.js/node_modules',
    'dist/bower/tracking.js/src',
    'dist/bower/tracking.js/test'
  ];

  return gulp.src(files)
    .pipe(plugins.rimraf());
});

gulp.task('replace-bower', function () {
  return gulp.src('dist/**/*.html')
    .pipe(plugins.replace('../bower_components', 'bower'))
    .pipe(gulp.dest('dist'));
});

gulp.task('gh-pages', function () {
  return gulp.src("dist/**/*")
    .pipe(plugins.ghPages());
});

gulp.task('deploy', ['clean'], function(cb) {
  runSequence('build', 'install-bower', 'install-npm', 'run-api', 'copy-api',
    'copy-cname', 'copy-bower', 'clean-tracking', 'replace-bower', 'gh-pages', cb);
});
