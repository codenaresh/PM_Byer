 var getPaginationsize = element.all(by.css("div > ngb-pagination > ul > li"));
      
      
      getPaginationsize.count().then(function (pagination) {
    	  
          if (pagination > 0) {

              for (var i = 2; i < pagination; i++) {
            	  
                getPaginationsize.get(i).click();
                
                
                browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
         	   
         	   browser.sleep(5000);
              }
          } else {
              console.log('Pagination not exists');
          }
      });

       
       
       
        	
        	
        	
       	
        	
    
        
        
       
       
       
      // below code is working fine...... 
       
     /*  for(var i=2; i<=7; i++){
    	   
    	   element(by.css(" div > ngb-pagination > ul > li:nth-child("+i+")")).click();
    	   
    	   browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
    	   
    	   browser.sleep(3000);
    	   
       }*/
       
      
       
      
	
 
