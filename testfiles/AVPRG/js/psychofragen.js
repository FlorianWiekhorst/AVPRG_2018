// Testpage
$(document).ready(function(){

 psycho_frage1.init();

 var psycho_frage1 = function(){
   $("#psycho_fragen1").on("click", function(){
       var psychofrage1 = $(this).find("input").attr("value");
   }

  var stepOn = function(){
          $("#psycho_fragen1").on("click", function(){
              $("#box_frage1").hide();
              $("#box_frage2").show();
          });
      }
});
