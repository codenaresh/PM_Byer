

var XLSX=require('xlsx');

var loginPageObj = require('./../pageobjects/LoginPage/LoginPage.js');

var page = require('./../pageobjects/BasePage/BasePage.js');

var homepageobj = require('./../pageobjects/HomePage/HomePage.js');

var OR = require('./../json/objects.json');

var tdata = require('./../json/login.json');

//var xl=require('./../../util/ReadExcel.js');

var dataReaderObj=require('./../utils/DataReader.js');

var logger= require('./../log');






describe(' Verifying the Login Page - ', function () {
	
	
	
	
	// browser.get("https://archway-premiernutrition-qa.azurewebsites.net/login");
	    
	  //  browser.driver.manage().window().maximize();
	    
	    
	 //element(by.xpath("//input[@id='username']")).sendKeys("QA_Admin");
	    
	// element(by.xpath("//input[@id='password']")).sendKeys("Welcome1*");
	 
	 //  element(by.xpath("//button[@id='submitBtn']")).click();
	   
	  //browser.sleep(7000);
	
	var ExcelJS = require('exceljs');

	var workbook=XLSX.readFile('C:/Users/NareshS/Desktop/Order.xls');

	var first_sheet_name = workbook.SheetNames[0];
	var address_of_cell1 = 'A1';
	var address_of_cell2 = 'A2';
	var address_of_cell3 = 'A3';
	var address_of_cell4 = 'A4';
	var address_of_cell5 = 'A5';
	var address_of_cell6 = 'A6';
	 
	/* Get worksheet */
	var worksheet = workbook.Sheets[first_sheet_name];
	 
	/* Find desired cell */
	var desired_cell1 = worksheet[address_of_cell1];
	var desired_cell2 = worksheet[address_of_cell2];
	var desired_cell3 = worksheet[address_of_cell3];
	var desired_cell4 = worksheet[address_of_cell4];

	var desired_cell5 = worksheet[address_of_cell5];

	var desired_cell6 = worksheet[address_of_cell6];

	 
	/* Get the value */
	var desired_value1 = desired_cell1.v;
	var desired_value2 = desired_cell2.v;
	var desired_value3 = desired_cell3.v;
	var desired_value4 = desired_cell4.v;
	var desired_value5 = desired_cell5.v;
	var desired_value6 = desired_cell6.v;
	
	
	

    it('excel sheet value', function () {
    	
    	  console.log(desired_value1.replace(/[^0-9\.]+/g,""));
    	    
    	    console.log(desired_value2.replace(/[^0-9\.]+/g,""));	
    	    
    	    console.log(desired_value3.replace(/[^0-9\.]+/g,""));	
    	    
    	    console.log(desired_value4.replace(/[^0-9\.]+/g,""));	
    	    
    	    console.log(desired_value5.replace(/[^0-9\.]+/g,""));	
    	    
    	    console.log(desired_value6.replace(/[^0-9\.]+/g,""));	
    	
    	
   
			
		});
    	
    
    	
  
    
    browser.close();
    	
    	
    	
    	
   
    

});