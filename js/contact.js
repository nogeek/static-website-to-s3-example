$(function() {
	'use strict';
    $('#signup').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address"
            }
        },
        submitHandler: function(form) {
            $.post(
              "http://signup.aware.io/signup", 
              $(form).serialize(), 
              $('#signup').fadeTo( "slow", 0.15, function() {
                $('#signup :input').attr('disabled', 'disabled');
                $(this).find(':input').attr('disabled', 'disabled');
                $(this).find('label').css('cursor','default');
                $('#success').fadeIn();
              })
            )
        }
    });
});
    	
