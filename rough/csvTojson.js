


describe("test", function() {
	
	
	
	var csvToJson = require('convert-csv-to-json');
	 
	var fileInputName = 'C:/Users\NareshS\Desktop\Order.csv'; 
	
	var fileOutputName = 'myOutputFile.json';
	 
	
	
	
	
	it("test", function() {
		
		
		csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
		
		
	});
	
	it("tc2", function() {
		
		
		let csvToJson = require('convert-csv-to-json');
		 
		let json = csvToJson.getJsonFromCsv("C:/Users/NareshS/Desktop/OrderSummary.csv");
		
		for(let i=0; i<json.length;i++){
			
		    console.log(json[i]);
		}
		
	});
	
	xit("tc3", function() {
		
		
		console.log(csvToJson.formatValueByType().getJsonFromCsv('C:/Users/NareshS/Desktop/OrderSummary.csv'));
		
	});
	
	
	
	
	
	
	
	
});