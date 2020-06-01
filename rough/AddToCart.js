var loginPageObj = require('./../pageobjects/LoginPage/LoginPage.js');

var page = require('./../pageobjects/BasePage/BasePage.js');

var Additemobj = require('./../pageobjects/AddItem/AddItem.js');

var homepageobj = require('./../pageobjects/HomePage/HomePage.js');

var OR = require('./../json/objects.json');

//var xl=require('./../../util/ReadExcel.js');

var dataReaderObj=require('./../utils/DataReader.js');

var logger= require('./../log');

var selectwraper = require('./../Select-Wrapper.js');

var myselect = new selectwraper(by.xpath("//select[@class='form-control btn-primary ng-pristine ng-valid ng-touched']"));



browser.manage().timeouts().implicitlyWait(4000);

describe(' Verifying the Login Page - ', function () {
	

	beforeEach(function() {
		
		
		setTimeout(function() {
			
		}, 100000);
		        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
		     });

		     afterEach(function() {
		      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		     });
		     
		     browser.ignoreSynchronization = true;
	
    var dataReadPromise = dataReaderObj.ReadDataFromFile('testdata', 'login');
    var username = [];
    var password = [];
    var url = [];

    beforeEach(function () {
        dataReadPromise.then(function (results) {
            for (var i = 0, len = results.length; i < len; i++) {
                url[i] = results[i].url;
                username[i] = results[i].username;
                password[i] = results[i].password;
                if (typeof url[i] == 'string') {
                    url[i] = url[i];
                }
                else {
                    url[i] = url[i].text;
                }
            }
        });
    });
    
    

    it('Verify the title of the Page', function () {
        dataReadPromise.then(function () {

            page.OpenUrl(url[0]);
            
            browser.driver.manage().window().maximize();
            
            loginPageObj.EnterUsername(username[0]);
         
            loginPageObj.EnterPassword(password[0]);
            
            loginPageObj.ClickLoginButton();
            
            browser.sleep(4000);
            
        	
            homepageobj.browseProducts();
             
             browser.sleep(8000);
             
            element(by.partialLinkText("View All Pro")).click();
             
              browser.sleep(5000);
              
           
              element(by.css("label.btn.btn-primary.p-2:nth-child(1)")).click();
              
              browser.sleep(6000);
              
              var listfirstimg= element(by.xpath("//product-card-list[1]//div[1]//div[1]//div[1]//img[1]"));
              
    	      listfirstimg.click();
    	      
    	      browser.sleep(6000);
    	      
    	    var status=  element(by.xpath("//p[contains(text(),' Available/Item requires approval')]"));
    	    
    	    
    	    status.getText().then(function(text){
    	    	
    	    	if(text=="Out of Stock/Back"||"Available/Item requires approval"||"Available	"){
    	    		
    	    		
    	    		element(by.xpath("//button[@class='btn btn-primary ml-2']")).click();
    	    		
    	    		
    	    		
    	    		
    	    	}
    	    	
    	    	else{
    	    		
    	    		 console.log("Not allowed");
    	    		
    	    	}
    	    	
    	    	
    	    });
    	    
    	    
    	    
    	      
    	      
    	      
              


        });
    });
    
});
   
  