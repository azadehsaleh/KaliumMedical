$(document).ready(function(){
    $("#photo1").mouseover(function(){
        $("#photo1").css("cursor","pointer");
        $("#test").fadeIn();
        $(".gif-gif").fadeIn();    });
    $("#photo1").mouseleave(function(){
        $("#test").fadeOut();
        $(".gif-gif").fadeOut(); 
      });
      $("#photo2").mouseover(function(){
        $("#photo2").css("cursor","pointer");
        $("#test1").fadeIn();
        $(".gif-gif").fadeIn();    });
    $("#photo2").mouseleave(function(){
        $("#test1").fadeOut();
        $(".gif-gif").fadeOut(); 
      });
      $("#photo3").mouseover(function(){
        $("#photo3").css("cursor","pointer");
        $("#test2").fadeIn();
        $(".gif-gif").fadeIn();    });
    $("#photo3").mouseleave(function(){
        $("#photo1").css("cursor","pointer");
        $("#test2").fadeOut();
        $(".gif-gif").fadeOut(); 
      });
      $("#photo4").mouseover(function(){
        $("#photo4").css("cursor","pointer");
        $("#test3").fadeIn();
        $(".gif-gif").fadeIn();    });
    $("#photo4").mouseleave(function(){
        $("#test3").fadeOut();
        $(".gif-gif").fadeOut(); 
      });
    
 
        
      
      
  });
  
  
 