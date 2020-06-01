

var XLSX=require('xlsx');

var fs= require('fs');

var csvModule= require('papaparse');

describe(' Verifying the Login Page - ', function () {
	
	
	
	
	it("test1", function() {
		
	
		var strsome= fs.readFileSync('C:/Users/NareshS/Desktop/OrderSummary.csv', 'utf8');
		
		
		
		csvModule.parse(strsome,{
			
			complete:(csValues)=>{
				
				
		      var val=csValues.data;// returns an array
		      
		    // console.log(val);
		      
		    //  console.log(val[0]);
		      
		    var arr=  val[0];// storing first colum array value
		    
		    //console.log(arr[1]);
		      
		     // console.log(val.length);
		    
		    for(var i=0; i<val.length-1; i++){
		    	
		    	console.log(csValues.data[i][1]);
		    	
		    }
			
				
			}
			
		});
		

		
		
	});
	
	
	
	it("login", function() {
		
		browser.get("https://archway-premiernutrition-qa.azurewebsites.net/login");
	    
		browser.driver.manage().window().maximize();
		    
		    
	element(by.xpath("//input[@id='username']")).sendKeys("QA_Admin");
		    
	 element(by.xpath("//input[@id='password']")).sendKeys("Welcome1*");
		 
	 element(by.xpath("//button[@id='submitBtn']")).click();
	 
		
		
			
		});
		   
		


});