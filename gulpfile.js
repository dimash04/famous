const {src, dest} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const sync = require('.browser-sync').create()

function scss() {
  return src('src/assets/**.scss')
    .pipe(saas())
    .pipe(autoprefixes({
      browsers: ['last 2 versions']
    }))
    .pipe(csso)
}