/*Password Strength validation based on there length and characters*/

$(document).ready(function(){
    	 $('#in_pass').keyup(function(){
    		 
    		 var x=$(this).val();// input field value
    		 if(x.length==0)
    			 {
    			   $('#message_area').hide();
    			   $('#erer_msg').text(""); 
    			   $('#pass_title').css("color","black");
    			}
    		 else
    		      {
    			 $('#message_area').show();
    			 }
    		if((x.length>=1)&&(x.length<=8))//comparing input field value 
    		{
    		  $('#pass_title').css("color","red");	//label text color changes to red 
    		  $('#erer_msg').text("Please Enter atleast 9 characters").css("color","red");
    		  $('#msg_img').attr("src","images/wrong.png");//according to the input field value the image will change
    		}
    		else
    			{
    			 $('#pass_title').css("color","black");
    			 $('#msg_img').attr("src","images/right.png");
    			 $('#erer_msg').text("");
    			}
    	     if((x.match(/[A-Z]/))&&(x.match(/[0-9]/))&&(x.match(/[^:space]/))/*&&(x.match($[:space]))*/)
    		   {
    	    	 $('#msg_img1').attr("src","images/right.png");//
    		   }
    	     else
    	    	 {
    	    	 $('#msg_img1').attr("src","images/wrong.png");
    	    	 }
    	 }); 
     });