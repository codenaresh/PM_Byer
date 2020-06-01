var loginPageObj = require('./../pageobjects/LoginPage/LoginPage.js');

var page = require('./../pageobjects/BasePage/BasePage.js');

var homepageobj = require('./../pageobjects/HomePage/HomePage.js');

var OR = require('./../json/objects.json');

//var xl=require('./../../util/ReadExcel.js');

var dataReaderObj=require('./../utils/DataReader.js');

var logger= require('./../log');

describe("Verify display", function() {
	
	var url1, url2;
	
beforeEach(function() {
		
		
		setTimeout(function() {
			
		}, 100000);
		        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
		        
		        browser.get("https://archway-premiernutrition-qa.azurewebsites.net/login");
				
				element(by.xpath("//input[@id='username']")).sendKeys("QA_Admin");
				
				element(by.xpath("//input[@id='password']")).sendKeys("Welcome1*");
				
				element(by.xpath("//button[@id='submitBtn']")).click();
				
				browser.manage().window().maximize();
				
				browser.sleep(8000);
				
				homepageobj.browseProducts();
				 
				 browser.sleep(8000);
		        
		        
		     });

		    
		     
		     browser.ignoreSynchronization = true;
	
	
	
	it("First time verify url", function() {
		
		
		
		
      url1=browser.getCurrentUrl();
	        
	     browser.getCurrentUrl().then(function(val){
		  
		  console.log("first time:"+val);
		  
		
	     });
	     
	     element(by.xpath('//*[@class="svg-inline--fa fa-user-circle fa-w-16"]')).click();
	   	 
	  	  browser.sleep(4000);
	  	 
	  	 element(by.xpath('//a[contains(text(),"Logout")]')).click();
	  	 
	  	browser.sleep(4000);
		
	});
	
	
	
	it("second time verify ulr", function() {
		

		   browser.executeScript("history.go(0)");
	
			
			homepageobj.browseProducts();
			
			browser.sleep(8000);
			
			 url2=browser.getCurrentUrl();
	        
		        
		     browser.getCurrentUrl().then(function(val){
			  
			  console.log("second time:"+val);
			  
			
		     });
		     
		     browser.close();
		
		
		
		
	});
	
	
	
	
		
	
	
	
	




});


