var page = require('./../../pageobjects/BasePage/BasePage.js');

var Additemobj = require('./../../pageobjects/AddItem/AddItem.js');

var homepageobj = require('./../../pageobjects/HomePage/HomePage.js');

var tdata = require('./../../json/AddItem.json');

var logger = require('./../../log');


describe("Add Item by List", function() {
	
	
	
beforeEach(function() {
		

        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 200000;
     });

     afterEach(function() {
    	 
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
     });
     
     browser.ignoreSynchronization = true;
	
	
	
	
    it("Item should add successfully", function() {
    	
    	
       homepageobj.browseProducts();
       
       browser.sleep(8000);
       
       logger.log('info','Click on Browse Product');
 		 
       // Additemobj.clickonallProducts();
       
      // Additemobj.clickonveiwallProduct();
        
        logger.log('info','Click view all product');
  		
        browser.sleep(5000);
       
  
       //clicking on List icon  
        
        
         Additemobj.clickOnList();
         
         logger.log('info','Click on list');
   		
         
        // element(by.css("label.btn.btn-primary.p-2:nth-child(1)")).click();
         
         browser.sleep(6000);
         
         
        	 
         });
    
    
    
    
    it("verify presence list icon ", function() {
   	 
   	 
   	 var listicon=Additemobj.getlisticontext();
    	
    	expect(listicon.isDisplayed()).toBeTruthy();
    	
    	expect(listicon.isPresent()).toBeTruthy();
    	
    	listicon.getText().then(function(text){
    		
    		
    	console.log("List text is :"+text);
    	
    	expect(text).toContain("List");
    		
    	});
     	
     });
    
    it("verify Display option is present ", function() {
   	 
   	 
   	 var display=Additemobj.getdisplaytext();
     	
     	expect(display.isDisplayed()).toBeTruthy();
     	
     	expect(display.isPresent()).toBeTruthy();
     	
     	display.getText().then(function(text){
     		
     		
     	console.log("display text is :"+text);
     	
     	expect(text).toContain(tdata.AddItemByList.DisplayText);
     		
     	}).catch(function(err){
     		
     		console.log(err);
     		
     	});
     	
      	
      });
    
    
  
      
    
    
    
    //Pagination logic and verify items count on per page

    it("Verify pagination feature", function() {
    	
    	

        //getting the size of the pagination
          
        var getPaginationsize =Additemobj.getpagesize();
        
        
        getPaginationsize.count().then(function (pagination) {
      	  
            if (pagination > 0) {

                for (var i = 1; i < pagination-1; i++) {
              	  
              	  browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
              	  
              	  browser.sleep(5000);
              	  
              	  
                    getPaginationsize.get(i).click();
                  
                     element.all(by.css(" img.card-img-top.img-fluid.flex-shrink-0.listImage")).count().then(function(text){
                  	
                  	console.log("total count:"+text);
                  	
                  	
                  });
                  
                  browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
           	   
           	   browser.sleep(5000);
           	   
           	   
                }
            } else {
                console.log('Pagination not exists');
            }
        });
        
        
     
        
        // capturing the latest url when click on last page
        browser.getCurrentUrl().then(function(text){
  		  
  		   console.log(text);
  		   
  		   expect(text).toBeTruthy();
  		   
  		  browser.sleep(5000);
  		  
  		  element(by.xpath("//div[@class='m-0 mt-1 text-center']")).getText().then(function(text){
  			  
  			 console.log("total count is:"+text);
  			  
  		  });
     	   
  		       
      
  		  
        });
        
    });
        
         
         
         
    	
 

xit("Click on Product/veryFirstImage Icon", function() {
	

	Additemobj.clickOnFirstImage();
	
	browser.sleep(10000);

   
});

xdescribe("Verify Item/product specification", function() {
	
	
	
	it("all items", function() {
		
element.all(by.css(" p.card-text.text-muted")).each(function(val) {
			
			val.getText().then(function(text){
				
				var obj=text.split(":");
			
				console.log(obj[0]);
				
			});
			
			
		});

	});

	
	
		
	});
	
	
	
 
xit("Enter Quantity and click to add to cart button", function() {
	

		
		Additemobj.qtyfield(tdata.AddItemByList.qtyforlist) ;	// dummy data
		
		// click on Add to Cart
		
		 browser.sleep(2000);
		
		 Additemobj.clickaddtocarticon();
		 
		 browser.sleep(6000);
		 
				
	

});


	
	

});

xit("Validate Error Message if out of stock or any other reson", function() {
	
	
	
	var errmsg= element(by.xpath("//div[@id='toast-container']"));
	
	errmsg.isPresent().then(function(status){
		
		if(status){
			
			errmsg.getText().then(function(text){
				
				console.log("text is :"+text);
				
				//expect(text).toContain("Out of stock");
				
				
				
			});
		
		}
		
		else{
			
			
  
				   // click on cart i   
			   Additemobj.clickOnCartIcon();
				   
				   logger.log('info','Click on Cart Icon');
				   
			  	    browser.sleep(5000);
				 
			  	 
	
		}
		
	});
	
	
	
	 
	 


});	 

	
