$(document).ready(function() {
	edNavigation.init();
});



function checkedBonusAnswer() {
    if (document.getElementById('Bonus1_math').checked) {
        document.getElementById('bonus_question_1').style.display = 'none';
				document.getElementById('bonus_question_2').style.display = 'block';
				// add audiochanges here!
    }
		else if (document.getElementById('Bonus1_sport').checked) {
        document.getElementById('bonus_question_1').style.display = 'none';
				document.getElementById('bonus_question_2').style.display = 'block';
				// add audiochanges here!
    }
		else if (document.getElementById('Bonus1_art').checked) {
        document.getElementById('bonus_question_1').style.display = 'none';
				document.getElementById('bonus_question_2').style.display = 'block';
				// add audiochanges here!
    }
		if (document.getElementById('Bonus1_german').checked) {
        document.getElementById('bonus_question_1').style.display = 'none';
				document.getElementById('bonus_question_2').style.display = 'block';
				// add audiochanges here!
    }
}


var validator = function(){
	var emailCheck = function(str) {
		var a = false;
		var res = false;
		if(typeof(RegExp) == 'function') {
			var b = new RegExp('abc');
			if(b.test('abc') == true){
				a = true;
			}
		}
		if(a == true) {
			reg = new RegExp('^([a-zA-Z0-9\\-\\.\\_]+)'+
				'(\\@)([a-zA-Z0-9\\-\\.]+)'+
				'(\\.)([a-zA-Z]{2,4})$');
			res = (reg.test(str));
		} else {
			res = (str.search('@') >= 1 &&
				str.lastIndexOf('.') > str.search('@') &&
				str.lastIndexOf('.') >= str.length-5);
		}
		return (res);
	};
	var checkPassword = function(){
		var input_pw01 = document.getElementById('password');
		var valid = true;

		if(input_pw01.value.length < 5)
			valid = false;

		var re = /(?=.\d)(?=.*[a-zA-Z])/
		if(!re.test(input_pw01.value))
			valid = false;

		return valid;
	};

	var showDialog = function(){
		document.getElementById('errors-overlay').style.display = "block";
		document.getElementById('errors').style.display = "block";
	};

	var hideDialog = function(){
		document.getElementById('errors-overlay').style.display = "none";
		document.getElementById('errors').style.display = "none";
	};

	var validate = function(){
		window.scroll(0,0);
		var valid = true;
		var email_input = document.getElementById("email");
		var agb = document.getElementById('legal');
		var error_agb = document.getElementById('error_agb');

		if (email_input.value == null || email_input.value == "" || emailCheck(email_input.value) == false){
			document.getElementById("error_email").style.display = 'list-item';
			valid = false;
		}else{
			document.getElementById("error_email").style.display = 'none';
		}

		if (!checkPassword()){
			document.getElementById("error_password").style.display = 'list-item';
			valid = false;
		}else{
			document.getElementById("error_password").style.display = 'none';
		}

		if(!agb.checked){
				error_agb.style.display = 'list-item';
				valid = false;
		}else{
				error_agb.style.display = 'none';
		}

		if(!valid){
			showDialog();
		}else{
			hideDialog();
		}
		$("#password_repeat").val($("#password").val());
		return valid;
	};
	return {
		validate: validate,
		hideDialog: hideDialog
	};
}();


var edNavigation = (function () {
	var setListener = function(){
		$('#cta-next').on('click', function() {
			if(validateStep()){
				showNextStep();
			}
		});
	};

	var validateStep = function(ele){
		var error_step = document.getElementById('error_step');
		var valid = true;
		if(!$(".current input[type='radio']").is(":checked")){
			valid = false;
			document.getElementById('errors-overlay').style.display = "block";
			document.getElementById('errors').style.display = "block";
			error_step.style.display = 'block';
		}
		else{
			document.getElementById('errors-overlay').style.display = "none";
			document.getElementById('errors').style.display = "none";
			error_step.style.display= 'none';
		}
		return valid;
	}

	var showNextStep = function(){
		$('.progress .active').addClass('done');
		$('.progress .done').html("");
		$('.progress .active').next().addClass('active');
		$('.progress .done').removeClass('active');

		if ($('.steps').hasClass('step-1')) {
			$('.steps .step.step-1').removeClass('current');
			$('.steps .step.step-1').next().addClass('current');
			$('.steps .step.step-1').fadeOut(function() {
				$('.steps').removeClass('step-1').addClass('step-2');
				$('.progress').removeClass('step-1').addClass('step-2');
		});
		} else if ($('.steps').hasClass('step-2')) {
			$('.steps .step.step-2').removeClass('current');
			$('.steps .step.step-2').next().addClass('current');
			$('.steps .step.step-2').fadeOut(function() {
				$('.steps').removeClass('step-2').addClass('step-3');
				$('.progress').removeClass('step-2').addClass('step-3');
			});

		} else if ($('.steps').hasClass('step-3')) {
			$('.steps .step.step-3').removeClass('current');
			$('.steps .step.step-3').next().addClass('current');
			$('.steps .step.step-3').fadeOut(function() {
				$('.steps').removeClass('step-3').addClass('step-4');
				$('.progress').removeClass('step-3').addClass('step-4');
			});

		} else if ($('.steps').hasClass('step-4')) {
			$('.steps .step.step-4').removeClass('current');
			$('.steps .step.step-4').next().addClass('current');

			$('.steps .step.step-4').fadeOut(function() {
				$('.steps').removeClass('step-4').addClass('step-5');
				$('.progress').removeClass('step-4').addClass('step-5');
			});

		}
	};
	return {
		init: function(){
			setListener();
		}
	};
})();
