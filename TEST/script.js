$(document).ready(function() {
    var targetDiv = document.getElementById('content');
        var htmlContent = '';

        function populateData(event){
          switch(event.target.value){
            case 'A':{
             htmlContent = 'Content for A';
              break;
            }
            case 'B':{
              htmlContent = "content for B";
    break;
            }
          }
          targetDiv.innerHTML = htmlContent;
        }

});
