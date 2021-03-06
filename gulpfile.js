const gulp = require('gulp')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const serve = require('gulp-serve')
const shell = require('gulp-shell')
const uglify = require('gulp-uglify-es').default

const { buildSrc, buildDest } = require('./paths')

gulp.task('setup', function() {
  return gulp
    .src('*.*', {
      read: false,
    })
    .pipe(gulp.dest(`./${buildDest}`))
})

gulp.task('clean', function() {
  return gulp
    .src(buildDest, {
      read: false,
    })
    .pipe(clean())
})

gulp.task('javascript', function() {
  return gulp
    .src([
      'node_modules/govuk-frontend/all.js',
      'node_modules/cookieconsent/build/cookieconsent.min.js',
      buildSrc + '/assets/js/main.js',
    ])
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(buildDest + '/assets/js/'))
})

gulp.task(
  'serve',
  serve({
    root: [buildDest],
    port: 8000,
  })
)

gulp.task('generate', shell.task('eleventy'))

gulp.task('scss', function() {
  return gulp
    .src(buildSrc + '/assets/scss/main.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest(buildDest + '/assets/css'))
})

gulp.task('watch', function() {
  gulp.watch(buildSrc + '/**/*', gulp.parallel('build'))
})

gulp.task(
  'build',
  gulp.series('setup', 'clean', 'generate', 'javascript', 'scss')
)
