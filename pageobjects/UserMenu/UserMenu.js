
var page = require('./../BasePage/BasePage.js');

var UserMenu;

UserMenu= function(){
	
	 var userCircle =   element(by.xpath('//*[@class="svg-inline--fa fa-user-circle fa-w-16"]'));  
	
  
    var myProfile = element(by.xpath('//a[contains(text(),"My Profile")]')); 
    
    var logout = element(by.xpath('//a[contains(text(),"Logout")]'));  
    
    var myOrders = element(by.xpath('//a[contains(text(),"My Orders")]'));
    
  var addresses = element(by.xpath("//a[@class='dropdown-item'][contains(text(),'Addresses')]"));
  
  
  this.getuserCircleElement= function(){
	  
	  return userCircle;
	  
  };
  
  this.getaddressesElement= function(){
	  
	  return addresses;
	  
  };
  
this.getprofileElement= function(){
	  
	  return myProfile;
	  
  };
  
this.getlogoutElement= function(){
	  
	  return logout;
	  
  };
    
    
    
    this.clickOnUserCircle= function(){
    	
    	page.highlightElement(userCircle);
    	
    	userCircle.click();
    	
    	
    };
    
    
 this.clickOnmyProfile= function(){
	 
	 page.highlightElement(myProfile);
    	
	 myProfile.click();
    	
    	
    };
    
 this.clickOnlogout= function(){
	 
	 page.highlightElement(logout);
    	
	 logout.click();
    	
    	
    };
    
    
 this.clickOnaddresses= function(){
	 
	 page.highlightElement(addresses);
 	
    	
	 addresses.click();
    	
    	
    };
    
    
    this.clickOnmyOrders= function(){
    	
    	 page.highlightElement(myOrders);
    	
   	 myOrders.click();
       	
       	
       };
    
    
   

	
	
	
	
	
	
	
	
	
	
	
	
	
};

module.exports= new UserMenu();