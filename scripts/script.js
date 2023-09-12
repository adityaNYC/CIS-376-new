$( document ).ready(function() {
   
  $('#dogeMemePic').click( 
    function(
    ){
      //code goes here
      console.log("position: ", $('#dogeMemePic').position() );
    }
  ); 
  
 
  $( "#dogeMemePic" ).draggable({
      stop: function() {
        if(  $('#dogeMemePic').position().left > 500){
        //  alert("you haswss wowzazzz ");
          
           $('#dogeMemePic').attr('src','./images/funny-guy.jpg');
    }
     
        else if( $('#dogeMemePic').position().left > 300 && $('#dogeMemePic').position().left < 500){
          $("#dogmemePic").text("keep going");
        }    
        else {
          $("#dogmemePic").text("get going");
        }
    }
    
    
  
    
    
  });
  
  
  
  
  
});
