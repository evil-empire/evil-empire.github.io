var gulp = require('gulp');
// var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy_vendor_files', function() {
  // COPY Bootstrap -> /vendor
  gulp.src([
      'node_modules/bootstrap/dist/**/*',
      '!**/npm.js',
      '!**/bootstrap-theme.*',
      '!**/*.map'
    ])
    .pipe(gulp.dest('vendor/bootstrap'))

  // COPY jQuery -> /vendor
  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('vendor/jquery'));

  // COPY Angular -> /vendor
  gulp.src([
      'node_modules/angular/angular.js',
      'node_modules/angular/angular.min.js',
    ])
    .pipe(gulp.dest('vendor/angular'))

  // COPY Popper.JS -> /vendor
  gulp.src([
      'node_modules/popper.js/**/*'
    ])
    .pipe(gulp.dest('vendor/popper.js'))
})


gulp.task('default', ['copy_vendor_files']);
