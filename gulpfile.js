// 引入 gulp 工具
var gulp = require('gulp');
// 引入 gulp-webserver 模块
var webserver = require('gulp-webserver');
// 引入 fs url 模块
var fs = require('fs');
var url = require('url');
// 引入 css 预处理 压缩 模块
var sass = require('gulp-sass');
// 启动 webserver
gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',
      port: 80,
      directoryListing: {
        enable: true,
        path: './'
      },
      livereload: true
      //mock数据
      // middleware: function (req, res, next) {
      //   var urlObj = url.parse(req.url, true);
      //   switch (urlObj.pathname) {
      //     case '/api/meet.php':
      //       res.setHeader('Content-Type', 'application/json');
      //       fs.readFile('./mock/meeting.json', function (err, data) {
      //         fs.readFile('./mock/mock1.json', function (err, data) {
      //           res.end(data);
      //         });
      //         return;
      //       })
      //       next();
      //   }
      // }
    }))
});


  // css 预处理 和 压缩
  gulp.task('scss', function () {
    gulp.src('./src/css/*.scss')
      .pipe(sass().on('error', sass.logError))
      // .pipe(minifyCSS())
      .pipe(gulp.dest('./build/prd/css/'));
  });

  // 拷贝 index.html 到 build 文件夹
  gulp.task('copy-index', function () {
    gulp.src('./*.html')
      .pipe(gulp.dest('./build/'));
  });
  //拷贝 引用的css库 到build
  gulp.task('copy-css',function() {
    gulp.src('./src/css/*.css')
      .pipe(gulp.dest('./build/prd/css/'));
  });
  //拷贝 引用的js库 到build
  gulp.task('copy-js',function() {
    gulp.src('./src/libs/**/*')
      .pipe(gulp.dest('./build/prd/libs/'));
    gulp.src('./src/js/**/*')
      .pipe(gulp.dest('./build/prd/js/'));
  });
  // 侦测 文件变化， 执行相应任务
  gulp.task('watch', function () {
    gulp.watch('./*.html', ['copy-index']);
    gulp.watch('./src/css/*.scss', ['scss']);
  });

  // 配置 default 任务，执行任务队列
  gulp.task('default', ['watch', 'webserver','copy-css','copy-js'], function () {
    console.log('任务队列执行完毕~');
  });