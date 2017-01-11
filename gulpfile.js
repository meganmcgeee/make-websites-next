const gulp = require(`gulp`);
const livereload = require(`gulp-livereload`);
const sass = require(`gulp-sass`);

const sassProcessor = () => sass().on(`error`, sass.logError);
const compileSass = file =>
  gulp.src(`src/sass/${file}.scss`)
    .pipe(sassProcessor())
    .pipe(gulp.dest(`static/css`))
    .pipe(livereload());

gulp.task(`sass`, () => {
  compileSass(`apps`);
  compileSass(`bots`);
});

gulp.task(`default`, [`sass`], () => {
  livereload.listen();
  gulp.watch(`src/sass/*.scss`, [`sass`]);
});
