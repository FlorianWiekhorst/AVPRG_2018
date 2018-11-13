$(document).ready(function() {
	
	// Make Music button nur zeigen, wenn alle Felder ausgefüllt sind
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
	});
});