var MyProfile;

MyProfile = function() {

	var username = element(by.xpath("//label[@class='form-control disabledLook']"));

	var fname = element(by.xpath("//input[@id='FirstName']"));

	var lname = element(by.xpath("//input[@id='LastName']"));

	var email = element(by.xpath("//input[@id='Email']"));

	var phonenumber = element(by.xpath("//input[@id='Phone']"));

	var changepassword = element(by.xpath("//button[@class='btn btn-outline-primary btn-block ng-star-inserted']"));

	var saveChnage = element(by.xpath("//button[@class='btn btn-primary btn-lg btn-block mt-4']"));

	
	
	this.getfirsname= function(){
		
		return fname;
		
	};
	
	this.getlname= function(){
		
		return lname;
		
	};
	
	
	this.enterusername = function(value) {
		
		

		username.sendKeys(value);

	};

	this.enterfname = function(value) {
		
		fname.clear();

		fname.sendKeys(value);

	};

	this.entersname = function(value) {
		
		lname.clear();

		lname.sendKeys(value);

	};

	this.enteremail = function(value) {
		
		email.clear();

		email.sendKeys(value);

	};
	
	this.enteremPhonenumber = function(value) {
		
		phonenumber.clear();

		phonenumber.sendKeys(value);

	};
	
	this.clickOnChangePassword = function(value) {

		changepassword.click();

	};
	
	this.clickOnSave = function() {

		saveChnage.click();

	};
	

	
	
	

};

module.exports = new MyProfile();