
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
		
		
		
	
  framework: 'jasmine',
  
 directConnect: true,
 
// directConnect: true,
// chromeDriver: 'C:\\Users\\NareshS\\Downloads\\chromedriver.exe',
 //geckoDriver: 'path_to_geckodriver.exe',
  
  //iedriver_path="C:\\Users\\NareshS\\Desktop\\IE\\IEDriverServer.exe"
 


 // seleniumAddress: 'http://localhost:4444/wd/hub', 
  
//  capabilities: {
//      browserName: 'chrome'
  
    // browserName: 'internet explorer',
     
     
//      /*chromeoptions: {
//       args: ['headless', 'window-size=1920,1080']
//       }*/
//  },
  
/*multiCapabilities : [
	  {
	    'browserName' : 'chrome'
	  },
	  
	  {
		  'browserName' : 'firefox'
		  },
		  
	  
	 
	  
	],*/
	
	localSeleniumStandaloneOpts : {
		  jvmArgs : ["-Dwebdriver.ie.driver=C:\\Users\\NareshS\\Desktop\\IE\\IEDriverServer.exe"] // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe"
		},
	
	//seleniumArgs: ['-Dwebdriver.ie.driver=C:\\Users\\NareshS\\Desktop\\IE\\IEDriverServer.exe'],
  
allScriptsTimeout:2500000,
  
  jasmineNodeOpts: {defaultTimeoutInterval: 2500000},
  
 
  
  specs: ['./rough/loginValidation.js'],
  
  
  
  
	  
	 
 onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports1/screenshots'
      }).getJasmine2Reporter());
   },
  
  /*onPrepare: function () {
	    var AllureReporter = require('jasmine-allure-reporter');
	    jasmine.getEnv().addReporter(new AllureReporter());
	    jasmine.getEnv().afterEach(function(done){
	      browser.takeScreenshot().then(function (png) {
	        allure.createAttachment('Screenshot', function () {
	          return new Buffer(png, 'base64')
	        }, 'image/png')();
	        done();
	      })
	    });
	  },*/
   
  
 
  
 
  
  
};