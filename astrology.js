//---------------------show-hide------------------------------


$(document).ready(function() {
    // Click event handler for the "Show/Hide" button
    $('#togglePassword').click(function() {
        // Get the password input field
        var passwordField = $('#passwordField');

        // Check if the input type is password
        if (passwordField.attr('type') === 'password') {
            // Change the input type to text to show the password
            passwordField.attr('type', 'text');
        } else {
            // Change the input type back to password to hide the password
            passwordField.attr('type', 'password');
        }
    });
});


//-------------------------agree-button------------------------------

$(document).ready(function() {
    $('#agreeCheckbox').click(function() {
        var submitButton = $('#submitButton');
        submitButton.prop('disabled', !this.checked);
    });

    $('#myForm').submit(function(e) {
        if (!$('#agreeCheckbox').is(':checked')) {
            e.preventDefault();
            alert("Please agree to the terms and conditions to submit the form.");
        }
    });
});


//------------------------to-the-top-----------------------------------------------

$(document).ready(function() {
    $('#top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, "slow"); 
    });
});

//-----------------------------image-----------------------------------------------

$(document).ready(function() {
    $('#changeBackgroundButton').click(function() {
        var imageUrl = 'url("sky1.jpeg")'; // Replace with the URL of your image

        // Set the background image using the css() method
        $('#myDiv').css('background-image', imageUrl);
    });
});

//---------------------------max-size---------------------------------------------
$(document).ready(function() {
    $('#textarea').on('input', function() {
        var maxLength = parseInt($(this).attr('maxlength'));
        var currentLength = $(this).val().length;
        var remainingCharacters = maxLength - currentLength;

        if (remainingCharacters < 0) {
            $(this).val($(this).val().substring(0, maxLength));
            remainingCharacters = 0;
        }

        $('#characterCount').text(remainingCharacters + ' characters remaining');
    });
});


//-----------------------------------fade------------------------------------------

$(document).ready(function() {
    $('#fadeParagraph').click(function() {
        // Specify the target opacity (0 for fully transparent)
        var targetOpacity = 0;

        // Specify the animation duration in milliseconds (e.g., 1000ms for 1 second)
        var animationDuration = 1000;

        // Animate the paragraph's opacity using CSS
        $(this).css('transition', 'opacity ' + animationDuration + 'ms');
        $(this).css('opacity', targetOpacity);
    });
});

//--------------------------------

$(document).ready(function() {
    $('#btn1').click(function() {
        
        $('#box').animate({
            height: '200px',
            width: '200px'
        }, 1000); 
    });

    $('#btn2').click(function() {
        
        $('#box').animate({
            height: '100px',
            width: '100px'
        }, 1000); 
    });
});
