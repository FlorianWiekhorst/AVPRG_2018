$(document).ready(function() {
	
	
	/* function validate(){
	var error=document.getElementById("error");
	var firstName = document.forms["logInForm"]["firstName"].value;
	var lastName = document.forms["logInForm"]["lastName"].value;
	var x = document.createElement("INPUT");
		x.setAttribute("type", "text");
		x.setAttribute("value", " "+lastName);
		document.body.appendChild(x);
		if (firstName == "" || firstName == null || lastName == "" || lastName == null){
			error.innerHTML = "the info must be filled out";
			error.style.color = "red";
			return false;
		}
	}
	 */
	
	// Plain Javascript Example
	var $jsName = document.querySelector('.name');
	var $jsValue = document.querySelector('.jsValue');

	$jsName.addEventListener('input', function(event){
	  $jsValue.innerHTML = $jsName.value;
	}, false);	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	
	/* function hideMe() {
		document.getElementsByName("theInput").disabled;
	}
	
	
	
	function disable() {
    document.getElementById("mySelect").disabled=true;
	}
	function enable() {
		document.getElementById("mySelect").disabled=false;
	}
	
	function validateForm() {
		var x = document.forms["myForm"]["fname"].value;
		if (x == "") {
			alert("Name must be filled out");
			return false;
		}
	}
	
	
	
	 */
	
	
	/* // Make Music button nur zeigen, wenn alle Felder ausgefüllt sind
	$("input[type='text'], textarea").on("keyup", function(){
		if($(this).val() != "" && $("textarea").val() != "" && $("input[name='genderCheck']").is(":checked") == true){
			$("input[type='submit']").removeAttr("disabled");
			document.getElementById('makemusicbutton').style.visibility = 'visible';
		} else {
			$("input[type='submit']").attr("disabled", "disabled");
			document.getElementById('makemusicbutton').style.visibility = 'hidden';
		}
	});

	// Auch Änderungen in den Feldern überwachen
	$("input[name='genderCheck']").on("change", function(){
		if($(this).val() != "" && $("textarea").val() != "" && $("input[name='genderCheck']").is(":checked") == true){
			$("input[type='submit']").removeAttr("disabled");
			document.getElementById('makemusicbutton').style.visibility = 'visible';
		} else {
			$("input[type='submit']").attr("disabled", "disabled");
			document.getElementById('makemusicbutton').style.visibility = 'hidden';
		}
	}); */
});