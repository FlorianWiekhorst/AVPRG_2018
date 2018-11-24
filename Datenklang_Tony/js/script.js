$(document).ready(function() {

  //Mobile Footer visibility
  var x = window.matchMedia("(max-width: 700px)");
  if (x.matches){
    $(window).on("scroll",function(){
      document.body.style.backgroundColor = "green";
      if($(window).scrollTop() + $(window).height() == $(document).height()){
        if($(".mobile-footer").height() == 72){
          $(".mobile-footer").animate({
            "height":"100px"
          },100);
        }
      }else if($(window).scrollTop() + $(window).height() != $(document).height()){
        if($(".mobile-footer").height() == 100){
          $(".mobile-footer").animate({
            "height":"72px"
          },100);
        }
      }
    });
  };
  else{
    document.body.style.backgroundColor = "yellow";
  }
});
