const package = require('./package.json'),
  gulp = require('gulp'),
  del = require('del'),
  tsc = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps'),
  gulpMocha = require('gulp-mocha'),
  merge = require('merge2'),
  plumber = require('gulp-plumber'),
  rollup = require('gulp-better-rollup'),
  typescript = require('rollup-plugin-typescript'),
  nodeResolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs'),
  babel = require('gulp-babel')

const env = process.env.NODE_ENV || 'development'

const name = 'system-h2'
const src = 'src'
const dest = env !== 'production' ? 'build' : 'dist'
const testsFolder = 'tests'

const srcFiles = `${src}/${name}/**/*.ts`
const testSrcFiles = `${src}/**/*.spec.ts`
const testFiles = `${dest}/**/*.spec.js`

const config = {
  production: {
    main: `${dest}/es6/index.js`,
    bundle: dest,
    tsConfig: {
      isolatedModules: false,
      declaration: true,
      module: 'es2015',
    },
  },
  development: {
    main: `${dest}/${name}/index.js`,
    bundle: `${dest}/${name}/`,
    tsConfig: {
      isolatedModules: true,
    },
  },
  tests: {
    tsConfig: {
      isolatedModules: true,
    },
    dest: `${dest}/${testsFolder}`,
  },
}

gulp.task('clean', callback => {
  return del([dest], callback)
})

gulp.task('build:tests', () => {
  const tsProject = tsc.createProject('tsconfig.json', config.tests.tsConfig)
  const tsResult = gulp
    .src(srcFiles, { base: src })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return tsResult.js
    .pipe(plumber())
    .pipe(
      babel({
        presets: [
          [
            'env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ],
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest))
})

gulp.task('build:development', () => {
  const tsProject = tsc.createProject('tsconfig.json', config.development.tsConfig)
  const tsResult = gulp
    .src(srcFiles, { base: src })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return tsResult.js
    .pipe(plumber())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dest))
})

gulp.task('build:production', () => {
  const tsProject = tsc.createProject('tsconfig.json', config.production.tsConfig)
  const tsResult = gulp
    .src(srcFiles)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return merge([
    tsResult.js
      .pipe(plumber())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(`${dest}/es6`)),
    tsResult.dts
      .pipe(plumber())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(`${dest}/dts`)),
  ])
})

gulp.task('build:bundle', () => {
  return gulp
    .src(config[env].main)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      rollup(
        {
          external: Object.keys(package.dependencies),
          plugins: [
            nodeResolve({
              jsnext: true,
              main: true,
              skip: Object.keys(package.dependencies),
            }),
            commonjs(),
          ],
        },
        'umd'
      )
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config[env].bundle))
})

gulp.task('build:dts', () => {
  const tsProject = tsc.createProject('tsconfig.json', config.production.tsConfig)
  const tsResult = gulp
    .src(srcFiles)
    .pipe(plumber())
    .pipe(tsProject())
  return tsResult.dts.pipe(plumber()).pipe(gulp.dest(dest))
})

gulp.task('start:tests', () => {
  return gulp
    .src(testFiles)
    .pipe(plumber())
    .pipe(gulpMocha({ reporter: 'spec' }))
})

gulp.task('watch:tests', () => {
  gulp.watch(['src/**/*.ts'], gulp.series('test')).on('change', event => {
    console.log(`File '${event.path}' changed. Restarting unit tests`)
  })
})

gulp.task('build', gulp.series('clean', `build:${env}`, 'build:bundle'))
gulp.task('test', gulp.series('clean', 'build:tests', 'start:tests'))
gulp.task('default', gulp.series('test', 'watch:tests'))
