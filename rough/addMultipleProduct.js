var loginPageObj = require('./../pageobjects/LoginPage/LoginPage.js');

var page = require('./../pageobjects/BasePage/BasePage.js');

var homepageobj = require('./../pageobjects/HomePage/HomePage.js');

var tdata = require('./../json/AddItem.json');

var Additemobj = require('./../pageobjects/AddItem/AddItem.js');



// var xl=require('./../../util/ReadExcel.js');

var dataReaderObj = require('./../utils/DataReader.js');

var logger = require('./../log');

browser.manage().timeouts().implicitlyWait(4000);

describe(' Verifying the Login Page - ', function() {

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

	beforeEach(function() {
		dataReadPromise.then(function(results) {
			for (var i = 0, len = results.length; i < len; i++) {
				url[i] = results[i].url;
				username[i] = results[i].username;
				password[i] = results[i].password;
				if (typeof url[i] == 'string' || typeof url[i] == '') {
					url[i] = url[i];
				} else {
					url[i] = url[i].text;
				}
			}
		});
	});

	it('Verify the Title of the Page', function() {
		dataReadPromise.then(function() {

			page.OpenUrl(url[0]);
			
		
			browser.driver.manage().window().maximize();
		
			loginPageObj.EnterUsername(username[0]);

			logger.log('info', 'Enter username');

			loginPageObj.EnterPassword(password[0]);

			logger.log('info', 'Enter Password');

			loginPageObj.ClickLoginButton();
			
			browser.sleep(7000)

			//homepageobj.browseProducts();

			logger.log('info', 'Click on Browse Product');

			browser.sleep(7000);
			
			for(var i=0; i<tdata.testdataforquickAdd.product.length; i++){
				
				homepageobj.browseProducts();
				
				browser.sleep(3000);

				Additemobj.enterItem(tdata.testdataforquickAdd.product[i].item);
				
				browser.sleep(3000);

				Additemobj.clickonfirstHighlightItem();
			
				Additemobj.enterqty(tdata.testdataforquickAdd.product[i].qty);

				browser.sleep(3000);

				Additemobj.clickOnAddtoCart();
				
				
			}
			
			 Additemobj.clickOnCartIcon();
			   
		   	    browser.sleep(5000);
		   	    
		   	  Additemobj.clickOnCartIcon();
			   
		   	    browser.sleep(5000);
			
			
		

		});

	});

});