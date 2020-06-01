 var addressobj = require('./../pageobjects/Address/EditAddress.js');

var usermenuobj = require('./../pageobjects/UserMenu/UserMenu.js');

var OR = require('./../json/objects.json');

var logger = require('./../log');

var usermenuobj = require('./../pageobjects/UserMenu/UserMenu.js');

var selectwraper = require('./../Select-Wrapper.js');

var myselect = new selectwraper(by.xpath("//select[@id='Country']"));

var myselect1 = new selectwraper(by.xpath("//select[@id='State']"));

var homepageobj = require('./../pageobjects/HomePage/HomePage.js');

var username="QA_Admin";

var pwd="Welcome1*";

describe("login", function() {
	
	 beforeEach(function() {
		 
		 browser.get("https://archway-premiernutrition-qa.azurewebsites.net/login");
	        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
	        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
	    });

	    afterEach(function() {
	      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
	    });
	    
	    browser.ignoreSynchronization = true;
	    
	    
	    
	    it("table", function() {
	    	
	    	
	    	
	    	 browser.ignoreSynchronization = true;
	 	    
	 	    browser.get("https://archway-premiernutrition-qa.azurewebsites.net/login");
	 	    
	 	    browser.driver.manage().window().maximize();
	 	    
	 	    
	 	 element(by.xpath("//input[@id='username']")).sendKeys("QA_Admin");
	 	    
	 	//    browser.sleep(4000);
	 	    
	 	   
	 	    
	 	 element(by.xpath("//input[@id='password']")).sendKeys("Welcome1*");
	 	 
	 	  // browser.sleep(4000);
	 	    
	 	   element(by.xpath("//button[@id='submitBtn']")).click();
	 	   
	 	  browser.sleep(4000);
	 	   
	 	 element(by.xpath('//a[contains(text(),"My Orders")]')).click();
	 	  
	 	 browser.sleep(4000);
	    	
	    	
	    });
	    
	    
	    
	    
	    
	  
			   
			   
		  });