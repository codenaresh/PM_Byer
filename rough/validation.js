it('should multiply two integers', function() {

multiplyNumbers(2, 2);

expect(element.all(by.repeater('result in memory')).count()).toEqual(2);

multiplyNumbers(3, 3);

expect(element.all(by.repeater('result in memory')).count()).toEqual(2);



});


//Get text from a web element and compare it with a certain value
element(by.locator('someLocator')).getText(text) .then(function() {

	expect(text).toEqual('someData');

	expect(text).not.toEqual('someData');

	expect(text).toContain('someOtherData');

	})
	
	//Verify if a web element is displayed on the page or not:
	
	expect(browser.driver.findElement(by.locator(someLocator)) .isDisplayed()).toBe(true);


//Handling multiple browsers/windows/tabs


browser.getAllWindowHandles().then(function(handles) {
	
	//Now switch the control to the newly opened window
	
	browser.switchTo().window(handles[1]).then(function() {
	
	//Write the code which needs to be executed in the new tab
	
	});
	
	});

//Opening an entirely new browser with new session


describe('Code to understand assertions/annotations', function() {
	
	//Create a new browser instance
	
	var newBrowser = browser.forkNewDriverInstance();

	it('should should open multiple browsers instances', function() {
	
	//Opens a URL in the 1st browser instance
	
	browser.get('http://juliemr.github.io/protractor-demo/');
	
	//Opens a URL in the 2nd browser instance
	
	newBrowser.get('https://www.madewithangular.com/#/');
	
	newBrowser.driver.quit();
	
	});
	
	});

//Running your test case in multiple browsers:

exports.config = {
		
		    framework: 'jasmine',
		
		specs: ['SomeSpec.js'],
		
		multiCapabilities: [{
		
		 browserName: 'firefox'
		
		}, {
		
		browserName: 'chrome'
		
		}]
		
		}


//Reporting

//npm install -g protractor-jasmine2-html-reporter
//view sourceprint?

//npm install protractor-jasmine2-screenshot-reporter --save-dev




