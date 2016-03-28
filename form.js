 $(document).ready(function(){
    	 $('#input1').keyup(function(){
    	  var x=$(this).val();// input field value id=#input1
    	   if((x.length==3))
	         {
	          $(this).next('#input2').focus();
	         }
	    });
    	 $('#input2').keyup(function(){
       	  var x=$(this).val();// input field value id=#input2
       	   if((x.length==3))
   	         {
   	          $(this).next('#input3').focus();
   	         }
   	    });   	 
    	  $("#input3").keyup(function(e){ 
    		  var x=$(this).val();// input field value id=#input3
    		   if((e.keyCode==46)||(e.keyCode==8))
    			   {
    			    if((x.length==0))
    			    	{
    		               $(this).prev('#input2').focus();
    			    	}
    		   }
    	  }); 
                    $("#input2").keyup(function(e){
    		            var x=$(this).val();
    		               if((e.keyCode==46)||(e.keyCode==8))
    			                {
    			                if((x.length==0))
    			    	          {
    		                        $(this).prev('#input1').focus();
    			    	          }
    		                  }
    	  });  
     });