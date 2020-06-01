var loginPageObj = require('./../../pageobjects/LoginPage/LoginPage.js');

var page = require('./../../pageobjects/BasePage/BasePage.js');

var homepageobj = require('./../../pageobjects/HomePage/HomePage.js');

var OR = require('./../../json/objects.json');

var tdata = require('./../../json/login.json');

//var xl=require('./../../util/ReadExcel.js');

var dataReaderObj=require('./../../utils/DataReader.js');

var logger= require('./../../log');



browser.manage().timeouts().implicitlyWait(4000);

describe(' Verifying the Login Page - ', function () {
	
	beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     
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
     

   
   
    

    it('Verify the Title of the Page', function () {
        dataReadPromise.then(function () {

              page.OpenUrl(url[0]);
        	
        	//loginPageObj.OpenUrl(tdata.testdata.testsiteurl)
            
            logger.log('info','Launch the Core Buyer URL');
            
            browser.driver.manage().window().maximize();
            
            logger.log('info','maxmize the window');
            
            expect(browser.getTitle()).toContain(tdata.testdata.title);
            
            console.log("Tile of the page is :"+tdata.testdata.title);


        });
    });
    
    
it("should find all links", function() {
		
		var  allLinks = element.all(by.tagName('a'));
		
		allLinks.count().then(function(link_tally){
			
			allLinks.getAttribute("href").then(function(result){
				
				console.log(result);
				
			});
			
		      console.log('There are a total of ' + link_tally + " links on this page with proper tags.")
		    });
		 browser.sleep(2000);
		
		
		
		
		
		
	});


    
    
  it("Forgot password link present on the Login page", function() {
    	
    var forgotbtn=loginPageObj.getforpwd();
    
    expect(forgotbtn.isDisplayed()).toBeTruthy();
    
    expect(forgotbtn.isDisplayed()).toBeTruthy();
    
    forgotbtn.getAttribute("href").getText().then(function(text){
    	
    	console.log("Forgot password :"+text);
    	
    	expect(text).toBe(tdata.testdata.forgotpwd);
    	
    });
    
    	
    	});
    	
    
    	

    
 it("Contact Us  link present on the Login Page", function() {
    	
    	
	 var contactbtn=loginPageObj.getcontatus();
	    
	    expect(contactbtn.isDisplayed()).toBeTruthy();
	    
	    contactbtn.getAttribute("href").getText().then(function(text){
	    	
	    	console.log("Contact Us :"+text);
	    	
	    	expect(text).toBe(tdata.testdata.contactus);
	    	
	    });
    	
    
    	
    });
 
 
 it("Verify Account Login Text present on login screen", function() {
	 
	 var accountlabel=loginPageObj.getaccounttext();
	
	 accountlabel.getText().then(function(text){
		
		console.log(text);
		
		expect(text).toBeTruthy();
		
		expect(text).toBe(tdata.testdata.accountLoginText);
		
	});
	
	
	it("Verify Presence of Image  on Login page", function() {
		
	var imglogo=	loginPageObj.getimglogo();
	
	expect(imglogo.isDisplayed()).toBeTruthy();
	
	expect(imglogo.isPresent()).toBeTruthy();
		
	});
	
	
	 
	 
 	
 });
 
 
 it("Verify comapny copyright text at the footer of the login page", function() {
	 
	var company= loginPageObj.getcompanycopyrightlable();
	 
	 
	company.isPresent().then(function(result){
	    	
	    	if(result){
	    		
	    		
	    		company.getText().then(function(text){
	    			
	    			
	    			console.log("company policy text is"+text);
	    			
	    			expect(text).toBeTruthy();
	    			
	    			
	    			
	    		});
	    		
	    		
	    		
	    		
	    	}
	    	
	    	
	    	
	    	
	    });
	    
	    
	 
 	
 });
    
    
    it("Verify Username labeling is preseet", function() {
    	
    var usernamelabel=	loginPageObj.getUsernameLabel();
    
    
    usernamelabel.isPresent().then(function(result){
    	
    	if(result){
    		
    		
    		usernamelabel.getText().then(function(text){
    			
    			
    			console.log("Username label is"+text);
    			
    			expect(text).toBeTruthy();
    			
    			expect(text).toContain(tdata.testdata.userlabel);
    			
    		});
    		
    		
    		
    		
    	}
    	
    	
    	
    	
    });
    
    
 	
    	
    	
    });
    
    
  it("Verify password label is present", function() {
    	
    var pawdlabl=loginPageObj.getpasswordlabel();
    
    
    pawdlabl.isPresent().then(function(result){
    	
    	if(result){
    		
    		
    		pawdlabl.getText().then(function(text){
    			
    			
    			console.log("password label is"+text);
    			
    			expect(text).toBeTruthy();
    			
    			
    			
    		});
    		
    		
    		
    		
    	}
    	
    	
    	
    	
    });
      
    
  
    	
    	
    });
    
    
  it("Verify Remember Me check box", function() {
    	
    var chkboxlbl=loginPageObj.getchkboxlbl();
    
    expect(chkboxlbl.isPresent()).toBeTruthy();
    
    chkboxlbl.getText().then(function(text){
    	
    	console.log("Remember check is "+text);
    	
    	expect(text).toContain(tdata.testdata.rememberme);
    	
    	
    	
    });
    
    
  	
    
    	
    });
    
    
 it("Verify  if chekcbox is selected", function() {
    	
    	 var chkboxlbl=loginPageObj.getchkboxlbl();
    	
    	 expect($('[id="rememberMeId"]').isSelected()).toBeFalsy();
    	
    		
    		
    		
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
    	    	
    	    	  browser.sleep(8000);
    	    	
    	  //  expect(browser.getCurrentUrl()).toContain(tdata.testdata.urltext);
    	    	
    	    	//verify here
    	        
    	    	}
    	    	
    	    	
    	    	else if (username[0]==null && password[0]==null){
    	    		
    	    	
    	            loginPageObj.EnterUsername(username[0]);
    	            
    	            logger.log('info','Enter username');
    	         
    	            loginPageObj.EnterPassword(password[0]);
    	            
    	            logger.log('info','Enter Password');
    	            
    	       

    	            loginPageObj.ClickLoginButton();
    	            	
    	  
    	            browser.sleep(5000);
    	            
    	            console.log("Both field blank");
    	            
    	            
//    	            element(by.xpath("//div[@id='toast-container']")).getText().then(function(text){
//    	            	
//    	            	console.log("err msg is:"+text);
//    	            	
//    	            	expect(text).toContain("User not found.");
//    	            	
//    	            });
    	            
    	            
    	            
    	            
    	            
    	    		
    	    		
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
    
    
    
    it("Verify User has logged successfuly", function() {
    	
    	
    	var url=browser.getCurrentUrl();
    	
    	expect(url).toContain("home");
    	
    });
    	        	
         
         
 

    
    
       


});