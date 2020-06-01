
var Additemobj = require('./../pageobjects/AddItem/AddItem.js');

describe("counter verify", function() {
	
	it("counter ", function() {
		
		
  browser.get("https://archway-premiernutrition-qa.azurewebsites.net/login");
	    
		browser.driver.manage().window().maximize();
		    
		    
	element(by.xpath("//input[@id='username']")).sendKeys("QA_Admin");
		    
	 element(by.xpath("//input[@id='password']")).sendKeys("Welcome1*");
		 
	 element(by.xpath("//button[@id='submitBtn']")).click();
	 
	 browser.sleep(4000);
	 
	 
	 var countericon= element(by.xpath("//span[@class='fa-layers-counter']"));
	 
	 
	 var expitem= countericon.getText();
	 
	 expitem.getText().then(function(text){
		 
		 console.log("expitem count is:"+text);
		 
	 });
	 
	 
	   Additemobj.clickOnCartIcon();
	 
	var itemsincart= element(by.xpath("//h6[@class='card-title']"));
	
	
	itemsincart.getText().then(function(text){
		
		console.log("count is:"+text.replace(/[^0-9\.]+/g,""));
		
		expect(text.replace(/[^0-9\.]+/g,"")).toBe(expitem);
		
	});
	
	
	
	
	browser.close();
	
	
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
});