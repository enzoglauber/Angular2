// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    proxies: {
      '/static': 'http://gstatic.com',
      '/web': 'http://localhost:9000',
      '/img/': '/base/test/images/',
      '/proxyfied': {
        'target': 'http://myserver.localhost',
        'changeOrigin': true
      }
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    browserNoActivityTimeout: 360000,
    hostname:'localhost',
    singleRun: false
  });
};
