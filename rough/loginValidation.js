var loginPageObj = require('./../pageobjects/LoginPage/LoginPage.js');

var page = require('./../pageobjects/BasePage/BasePage.js');

var homepageobj = require('./../pageobjects/HomePage/HomePage.js');

var OR = require('./../json/objects.json');

var tdata = require('./../json/login.json');

//var xl=require('./../../util/ReadExcel.js');

var dataReaderObj=require('./../utils/DataReader.js');

var logger= require('./../log');



browser.manage().timeouts().implicitlyWait(4000);

describe(' Verifying the Login Page - ', function () {
	
	beforeEach(function() {
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
              if (typeof url[i] == 'string' ||typeof url[i] == '' ) {
                   url[i] = url[i];
               }
              else {
                    url[i] = url[i].text;
                }
            }
        });
    });
    
    
   
   
    

    it('Verify the Title of the Page', function () {
        dataReadPromise.then(function () {

            page.OpenUrl(url[0]);
            
            browser.driver.manage().window().maximize();
            
 

       
    });
        
    });
    
   
    
    it("Verify if user is logeed in successfully to the  application", function() {
    	
    	
    	if(username[0]=="QA_Admin" && password[0]=="Welcome1*"){
    		
  
   
       loginPageObj.EnterUsername(username[0]);
        
        logger.log('info','Enter username');
     
       loginPageObj.EnterPassword(password[0]);
        
        logger.log('info','Enter Password');
        
        browser.sleep(3000);

        loginPageObj.ClickLoginButton();
        
    	console.log("success");
    	
    	//verify here
        
    	}
    	
    	
    	else if (username[0]==null && password[0]==null){
    		
    	
            loginPageObj.EnterUsername(username[0]);
            
            logger.log('info','Enter username');
         
            loginPageObj.EnterPassword(password[0]);
            
            logger.log('info','Enter Password');
            
       

            loginPageObj.ClickLoginButton();
            	
  
            browser.sleep(5000);
            
            console.log("both field blank");
            
            
//            element(by.xpath("//div[@id='toast-container']")).getText().then(function(text){
//            	
//            	console.log("err msg is:"+text);
//            	
//            	expect(text).toContain("User not found.");
//            	
//            });
            
            
            
            
            
    		
    		
    	}
    	else if (username[0]!="QA_Admin" && password[0]!="Welcome1*"){
    		
    		
    		
    	      loginPageObj.EnterUsername(username[0]);
              
              logger.log('info','Enter username');
           
              loginPageObj.EnterPassword(password[0]);
              
              logger.log('info','Enter Password');
              
            
              loginPageObj.ClickLoginButton();
              
              browser.sleep(5000);
              
              console.log("username is invalid and password is invalid ");
              
              
              element(by.xpath("//div[@id='toast-container']")).getText().then(function(text){
              	
              	console.log("err msg is:"+text);
              	
              	expect(text).toContain("User not found.");
              	
              });
    		
    		
    		
    		
    		
    		
    		
    	}
    	
    	else if (username[0]!="QA_Admin" && password[0]=="Welcome1*"){
    		
    		
    		
  	      loginPageObj.EnterUsername(username[0]);
            
            logger.log('info','Enter username');
         
            loginPageObj.EnterPassword(password[0]);
            
            logger.log('info','Enter Password');
            
       

            loginPageObj.ClickLoginButton();
            
            browser.sleep(5000);
            
            console.log("username is valid and password is wrong ");
            
            
            element(by.xpath("//div[@id='toast-container']")).getText().then(function(text){
            	
            	console.log("err msg is:"+text);
            	
            	expect(text).toContain("User not found.");
            	
            });
  		
  		
  		
  		
  		
  		
  		
  	}
    	
    	
    	
    	else if (username[0]=="QA_Admin" && password[0]!="Welcome1*"){
    		
    		
    		
    	      loginPageObj.EnterUsername(username[0]);
              
              logger.log('info','Enter username');
           
              loginPageObj.EnterPassword(password[0]);
              
              logger.log('info','Enter Password');
              
         

              loginPageObj.ClickLoginButton();
              
              browser.sleep(5000);
              
              
              element(by.xpath("//div[@id='toast-container']")).getText().then(function(text){
              	
              	console.log("err msg is:"+text);
              	
              	expect(text).toContain("User not found.");
              	
              });
    		
    		
    		
    		
    		
    		
    		
    	}
      		
    	
    		
    		
    		
    		
        	
        	
        });
        	
        	
        	
        	

       
        
 

        	
      
         
       
         
         
         
         
        
 
  


});