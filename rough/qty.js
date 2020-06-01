var loginPageObj = require('./../pageobjects/LoginPage/LoginPage.js');

var page = require('./../pageobjects/BasePage/BasePage.js');

var Additemobj = require('./../pageobjects/AddItem/AddItem.js');

var homepageobj = require('./../pageobjects/HomePage/HomePage.js');

var tdata = require('./../json/AddItem.json');

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
    
    

    it('Verify Add item and Quantity and click on checkout', function () {
    	
    	
        dataReadPromise.then(function () {

            page.OpenUrl(url[0]);
            
            browser.driver.manage().window().maximize();
            
            loginPageObj.EnterUsername(username[0]);
            
            loginPageObj.EnterPassword(password[0]);
            
            loginPageObj.ClickLoginButton();
            
            browser.sleep(4000);
            
            homepageobj.browseProducts();
       	 
     
   		       browser.sleep(7000);
   		       
   		       // case 1: when item and qty both missing
   		       
   		       
   		       if(tdata.testdataforquickAdd.item=="" && tdata.testdataforquickAdd.qty==""){
   		    	   
   		    	 Additemobj.enterItem(tdata.testdataforquickAdd.item);
   		    	 
   		      Additemobj.enterqty(tdata.testdataforquickAdd.qty);
   		    	   
   		          Additemobj.clickOnAddtoCart();
   		          
   		          
   		    var errormsg= element(by.xpath("//div[@id='toast-container']"));
   		    
   		 errormsg.getText().then(function(text){
   			 
   			console.log("error msg is:"+text);
   			
   			//expect(text.ispr).toBeTruthy();
   			
   			expect(text).toContain("Item not found");
   			 
   		 });
   		 
   		 
   		    	   
   		    	  
   		   console.log("error prodct not found, both item and qty is missing");
   		    	   
   		    	   
   		    	    
   		    	   
   		       }
   		       
   		    // case 2: when item is there  and qty is missing
   		       
   		       else if(tdata.testdataforquickAdd.item!="" && tdata.testdataforquickAdd.qty==""){
   		    	   
   		    	 Additemobj.enterItem(tdata.testdataforquickAdd.item);
   		    	 
   		    	browser.sleep(3000);
   		    	 
   		    	Additemobj.clickonfirstHighlightItem();
   		    	
   		    	browser.sleep(3000);
    			
   		    	Additemobj.enterqty(tdata.testdataforquickAdd.qty);
   		    	
   		     Additemobj.clickOnAddtoCart();
   		     
   		       browser.sleep(8000);
   		    	
   		    	
   		    var qtyerrormsg=element(by.xpath("//section[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/span[1]"));
   		    	   
   		 qtyerrormsg.getText().then(function(text){
   			 
   			 console.log("qty error msg is :"+text);
   			 
   			 expect(text).toContain("Qty is required");
   			 
   		 });
   		 
   		    	   
   		    	   console.log("qty is required");
   		    	   
   		    	   
   		       }
   		       
   		    // case 3: when qty is missing or less than 1
   		       
   		       else if( tdata.testdataforquickAdd.qty=="" || tdata.testdataforquickAdd.qty<1){
   		    	   
   		    	 Additemobj.enterItem(tdata.testdataforquickAdd.item);
   		    	 
    		    	browser.sleep(3000);
    		    	 
    		    	Additemobj.clickonfirstHighlightItem();
    		    	
    		    	browser.sleep(3000);
     			
    		    	Additemobj.enterqty(tdata.testdataforquickAdd.qty);
    		    	
    		    	   Additemobj.clickOnAddtoCart();
    		    	   
    		    	   browser.sleep(8000);
    	   		   		
    		    	   var minqtyerrormsg=element(by.xpath("//section[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/span[1]"));
    	   		   
    		    	
    		    	   minqtyerrormsg.getText().then(function(text){
    		    		   
    		    		   console.log("min qty ordered error msg:"+text);
    		    		   
    		    		   expect(text).toContain("At least 1 must be ordered.");
    		    		   
    		    	   });
    		    	   
    		    	   
    		    	   
    		    	   
   		    	   
   		    	   console.log("please enter quantity, its less than 1");
   		    	   
   		    	   
   		       }
   		       
   		       else{
   		    	   
   		    	   // case 4 : when item and qty both present
   		    	   
   		    	   
   		    	 Additemobj.enterItem(tdata.testdataforquickAdd.item);
   		    	 
 		    	browser.sleep(3000);
 		    	 
   		    	  
       			Additemobj.clickonfirstHighlightItem();
       			
       			browser.sleep(3000);
           		
           		Additemobj.enterqty(tdata.testdataforquickAdd.qty);
           		
           		browser.sleep(3000);
   		    	     
   		    	 
   		    	 Additemobj.clickOnAddtoCart();
   		   		
   		   		browser.sleep(5000);
   		   		
   		   	    Additemobj.clickOnCartIcon();
   		   
   		   	    browser.sleep(5000);
   		   		
   		   		 Additemobj.clickOnCheckout();
   		   		
   		   	     browser.sleep(5000);
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     

   		   	 it("verify Items text on Add To Cart screen", function() {
   		   			
   		   			
   		   			var items=Additemobj.getitemstext();
   		   			
   		   			items.getText().then(function(text){
   		   				
   		   				console.log("item text lable is:"+text);
   		   				
   		   				expect(text).toContain(tdata.testdataforquickAdd.itemstext);
   		   				
   		   				
   		   				
   		   				
   		   			});
   		   			
   		   			
   		   			
   		   		});
   		   		
   		   		
   		   		it("verify Order Summary text on Add To Cart screen", function() {
   		   			
   		   			
   		   	var ordersummry= Additemobj.getordersummry();


   		   	ordersummry.getText().then(function(text){

   		   	console.log("order summary text is:"+text);

   		   	expect(text).toContain(tdata.testdataforquickAdd.ordersummrytext);

   		   	});


   		   		 
   		   		
   		   	});
   		   		
   		   		
   		   	it("verify Remove Item text on Add To Cart screen", function() {

   		   	var removeitem=Additemobj.getremoveitem();

   		   	removeitem.getText().then(function(text){
   		   		
   		   		console.log("link text value is:"+text);
   		   		
   		   		expect(text).toContain(tdata.testdataforquickAdd.removetext);
   		   		
   		   	});


   		   		
   		   		
   		   	});

   		   	it("verify Status Item text on Add To Cart screen", function() {

   		   	var Status= Additemobj.getStatustext();

   		   	Status.getText().then(function(text){
   		   		
   		   		console.log("Status text value is:"+text);
   		   		
   		   		expect(text).toContain(tdata.testdataforquickAdd.statustext);
   		   		
   		   	});
   		   		
   		   		
   		   		
   		   	});


   		   	it("verify Price text on Add To Cart screen", function() {


   		   	var Price= Additemobj.getpricetext();
   		   		
   		   	Price.getText().then(function(text){
   		   				
   		   				console.log("Price text value is:"+text);
   		   				
   		   				expect(text).toContain(tdata.testdataforquickAdd.Priceext);
   		   				
   		   			});

   		   		
   		   		
   		   		
   		   	});


   		   	it("verify Qty text on checkout screen", function() {

   		   	var Qty= Additemobj.getQty();
   		   		
   		   	Qty.getText().then(function(text){
   		   				
   		   				console.log("Qty text value is:"+text);
   		   				
   		   				expect(text).toContain(tdata.testdataforquickAdd.Qtytext);
   		   				
   		   			});



   		   		
   		   	});



   		   	 
   		   	 it("Verify total item text  present in cart", function() {
   		   		 
   		   		 
   		   		 var countericon= Additemobj.getcountericon();
   		   		 
   		   		 // priting in console total count of item
   		   		 
   		   		 countericon.getText().then(function(text){
   		   			 
   		   			 console.log("countericon count is:"+text);
   		   			 
   		   		 });
   		   		 
   		   		 
   		   		 // total item present in order history 
   		   		 
   		   		 var itemsincart= Additemobj.getitemsincart();
   		   		
   		   			
   		   			itemsincart.getText().then(function(text){
   		   				
   		   				// using the reg expression to fetch the value from string
   		   				
   		   				console.log("count is:"+text.replace(/[^0-9\.]+/g,""));
   		   				 
   		   				expect(text.replace(/[^0-9\.]+/g,"")).toBe(countericon.getText());
   		   				
   		   			});
   		   		 
   		   		 

   		   			
   		   		 
   		   		
   		   	 	
   		   	 });
   		   	 
   		   	 it("verify presence of continue shopping button", function() {
   		   			 
   		   			
   		   			
   		   			var contniueshop=Additemobj.getcontniueshopbtn();
   		   			
   		   			expect(contniueshop.isDisplayed()).toBeTruthy();// verify presence of button
   		   			
   		   			contniueshop.getText().then(function(text){
   		   				
   		   				console.log("button value is"+text);
   		   				
   		   				expect(text).toContain(tdata.testdataforquickAdd.continueshppintext);
   		   				
   		   				
   		   			})
   		   			
   		   			
   		   			
   		   			});
   		   	 
   		   	 
   		   		it(" Verify presence of clear cart button", function() {
   		   			
   		   			var clearcart=Additemobj.getclearcart();
   		   			
   		   			expect(clearcart.isDisplayed()).toBeTruthy();
   		   			
   		   			expect(clearcart.isPresent()).toBeTruthy();
   		   			
   		   			clearcart.getText().then(function(text){
   		   				
   		   				console.log("clear cart value is"+text);
   		   				
   		   				expect(text).toContain(tdata.testdataforquickAdd.clearcarttext);
   		   				
   		   			});
   		   			
   		   			
   		   		});
   		   		
   		   		
   		   		it(" Verify presence of Subtotal", function() {
   		   			
   		   			var subtotal=Additemobj.getsubtotal();
   		   			
   		   			expect(subtotal.isDisplayed()).toBeTruthy();
   		   			
   		   			expect(subtotal.isPresent()).toBeTruthy();
   		   			
   		   			subtotal.getText().then(function(text){
   		   				
   		   				console.log("subtotal value is:"+text);
   		   				
   		   				expect(text).toContain(tdata.testdataforquickAdd.Subtotaltext);
   		   				
   		   			});
   		   			
   		   			
   		   			
   		   			
   		   			
   		   		});
   		   		
   		   		
   		   		
   		   	it(" Verify presence of Total text", function() {
   		   			
   		   			var Total=Additemobj.getTotal();
   		   			
   		   			expect(Total.isDisplayed()).toBeTruthy();
   		   			
   		   			expect(Total.isPresent()).toBeTruthy();
   		   			
   		   			Total.getText().then(function(text){
   		   				
   		   				console.log("Total"+text);
   		   				
   		   				expect(text).toContain(tdata.testdataforquickAdd.Totaltext);
   		   				
   		   			});
   		   			
   		   			
   		   			
   		   			
   		   			
   		   		});
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		   	     
   		    	   
   		    	   
   		       }
   		       
   		      
    		
    		

            
            
          


        });
    });
    
    
    
    
    
    
    
    
    
   
    

 
});

