module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      //
	  'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      
      //test framework(n. 框架，骨架；结构，构架)
	  'app/bower_components/karma-read-json/karma-read-json.js',
      'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
	  
      //src and test file
      'app/js/**/*.js',
      'test/unit/**/*.js',
	  
      // fixtures  n. 固定装置（fixture的复数形式）；卡具；固定附物，固定附着物；固定财产
      {pattern: 'test/mock/*.json',  included: false},
      {pattern: 'test/mock/*.html',  included: false}
    ],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    frameworks: ['jasmine','jquery-1.8.3'],

    browsers : ['Chrome'/*, 'Firefox'*/],
    // web server port
    port: 9090,
    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
			'karma-jquery'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
	 singleRun: false

  });
};