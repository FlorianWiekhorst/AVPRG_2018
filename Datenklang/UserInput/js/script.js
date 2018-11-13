$(document).ready(function() {

	//Color Picker Change Watcher
	var colorWell;
	var defaultColor = "#0000ff";

	window.addEventListener("load", startup, false);
	function startup() {
		  colorWell = document.querySelector("#colorWell");
		  colorWell.value = defaultColor;
		  colorWell.addEventListener("change", updateAll, false);
		  colorWell.select();
	}
	
	}function updateAll(event) {
		  var colorTitle = document.querySelector("colorTitle");
		  document.querySelectorAll("colorTitle").forEach(function(p) {
			h3.style.color = event.target.value;
		  });
	}



  //Mobile Footer visibility
  /*
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
  }  */
});
