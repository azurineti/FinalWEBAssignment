 //-----------------scroll button-----------------------------------
 // Get a reference to the button element
 const scrollButton = document.getElementById("scrollToBottom");

 // Add an event listener to the button to scroll to the bottom
 scrollButton.addEventListener("click", function() {
     // Calculate the height of the page
     const pageHeight = Math.max(
         document.body.scrollHeight,
         document.body.offsetHeight,
         document.documentElement.clientHeight,
         document.documentElement.scrollHeight,
         document.documentElement.offsetHeight
     );

     // Scroll to the bottom of the page
     window.scrollTo({
         top: pageHeight,
         behavior: "smooth", // Use smooth scrolling
     });
 });

 // Show the scroll button when the user scrolls down
 window.addEventListener("scroll", function() {
     if (window.scrollY > 100) { // You can adjust the threshold
         scrollButton.style.display = "block";
     } else {
         scrollButton.style.display = "none";
     }
 });


 //--------------------------------puzzle--------------------------------------------
// Function called whenever user tab on any bo★ 
function myfunc() { 

	// Setting DOM to all bo★es or input field 
	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("b1").value; 
	b2 = document.getElementById("b2").value; 
	b3 = document.getElementById("b3").value; 
	b4 = document.getElementById("b4").value; 
	b5 = document.getElementById("b5").value; 
	b6 = document.getElementById("b6").value; 
	b7 = document.getElementById("b7").value; 
	b8 = document.getElementById("b8").value; 
	b9 = document.getElementById("b9").value; 

	var b1btn, b2btn, b3btn, b4btn, b5btn, 
		b6btn, b7btn, b8btn, b9btn; 
		
	b1btn = document.getElementById("b1"); 
	b2btn = document.getElementById("b2"); 
	b3btn = document.getElementById("b3"); 
	b4btn = document.getElementById("b4"); 
	b5btn = document.getElementById("b5"); 
	b6btn = document.getElementById("b6"); 
	b7btn = document.getElementById("b7"); 
	b8btn = document.getElementById("b8"); 
	b9btn = document.getElementById("b9"); 

	// Checking if Player ★ won or not and after 
	// that disabled all the other fields 
	if ((b1 == '★' || b1 == '★') && (b2 == '★' || 
		b2 == '★') && (b3 == '★' || b3 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "white"; 
		b2btn.style.color = "white"; 
		b3btn.style.color = "white"; 
	} 
	else if ((b1 == '★' || b1 == '★') && (b4 == '★' || 
		b4 == '★') && (b7 == '★' || b7 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "white"; 
		b4btn.style.color = "white"; 
		b7btn.style.color = "white"; 
	} 
	else if ((b7 == '★' || b7 == '★') && (b8 == '★' || 
		b8 == '★') && (b9 == '★' || b9 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "white"; 
		b8btn.style.color = "white"; 
		b9btn.style.color = "white"; 
	} 
	else if ((b3 == '★' || b3 == '★') && (b6 == '★' || 
		b6 == '★') && (b9 == '★' || b9 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b3btn.style.color = "white"; 
		b6btn.style.color = "white"; 
		b9btn.style.color = "white"; 
	} 
	else if ((b1 == '★' || b1 == '★') && (b5 == '★' || 
		b5 == '★') && (b9 == '★' || b9 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b9btn.style.color = "white"; 
	} 
	else if ((b3 == '★' || b3 == '★') && (b5 == '★' || 
		b5 == '★') && (b7 == '★' || b7 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b7btn.style.color = "white"; 
	} 
	else if ((b2 == '★' || b2 == '★') && (b5 == '★' || 
		b5 == '★') && (b8 == '★' || b8 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b8btn.style.color = "white"; 
	} 
	else if ((b4 == '★' || b4 == '★') && (b5 == '★' || 
		b5 == '★') && (b6 == '★' || b6 == '★')) { 
		document.getElementById('print') 
			.innerHTML = "Player ★ won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b6btn.style.color = "white"; 
	} 

	// Checking of Player ★ finish 
	// Checking for Player 0 starts, Is player 0 won or 
	// not and after that disabled all the other fields 
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' || 
		b2 == '0') && (b3 == '0' || b3 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "white"; 
		b2btn.style.color = "white"; 
		b3btn.style.color = "white"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || 
		b4 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "white"; 
		b4btn.style.color = "white"; 
		b7btn.style.color = "white"; 
	} 
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || 
		b8 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "white"; 
		b8btn.style.color = "white"; 
		b9btn.style.color = "white"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || 
		b6 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b3btn.style.color = "white"; 
		b6btn.style.color = "white"; 
		b9btn.style.color = "white"; 
	} 
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || 
		b5 == '0') && (b9 == '0' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b9btn.style.color = "white"; 
	} 
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || 
		b5 == '0') && (b7 == '0' || b7 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b7btn.style.color = "white"; 
	} 
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || 
		b5 == '0') && (b8 == '0' || b8 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b8btn.style.color = "white"; 
	} 
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || 
		b5 == '0') && (b6 == '0' || b6 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "white"; 
		b5btn.style.color = "white"; 
		b6btn.style.color = "white"; 
	} 

	// Checking of Player 0 finish 
	// Here, Checking about Tie 
	else if ((b1 == '★' || b1 == '0') && (b2 == '★'
		|| b2 == '0') && (b3 == '★' || b3 == '0') && 
		(b4 == '★' || b4 == '0') && (b5 == '★' || 
			b5 == '0') && (b6 == '★' || b6 == '0') && 
		(b7 == '★' || b7 == '0') && (b8 == '★' || 
			b8 == '0') && (b9 == '★' || b9 == '0')) { 
		document.getElementById('print') 
			.innerHTML = "Match Tie"; 
	} 
	else { 

		// Here, Printing Result 
		if (flag == 1) { 
			document.getElementById('print') 
				.innerHTML = "Player ★ Turn"; 
		} 
		else { 
			document.getElementById('print') 
				.innerHTML = "Player 0 Turn"; 
		} 
	} 
} 

// Function to reset game 
function myfunc_2() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 

// Here onwards, functions check turn of the player 
// and put accordingly value ★ or 0 
flag = 1; 
function myfunc_3() { 
	if (flag == 1) { 
		document.getElementById("b1").value = "★"; 
		document.getElementById("b1").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b1").value = "0"; 
		document.getElementById("b1").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_4() { 
	if (flag == 1) { 
		document.getElementById("b2").value = "★"; 
		document.getElementById("b2").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b2").value = "0"; 
		document.getElementById("b2").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_5() { 
	if (flag == 1) { 
		document.getElementById("b3").value = "★"; 
		document.getElementById("b3").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b3").value = "0"; 
		document.getElementById("b3").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_6() { 
	if (flag == 1) { 
		document.getElementById("b4").value = "★"; 
		document.getElementById("b4").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b4").value = "0"; 
		document.getElementById("b4").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_7() { 
	if (flag == 1) { 
		document.getElementById("b5").value = "★"; 
		document.getElementById("b5").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b5").value = "0"; 
		document.getElementById("b5").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_8() { 
	if (flag == 1) { 
		document.getElementById("b6").value = "★"; 
		document.getElementById("b6").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b6").value = "0"; 
		document.getElementById("b6").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_9() { 
	if (flag == 1) { 
		document.getElementById("b7").value = "★"; 
		document.getElementById("b7").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b7").value = "0"; 
		document.getElementById("b7").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_10() { 
	if (flag == 1) { 
		document.getElementById("b8").value = "★"; 
		document.getElementById("b8").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b8").value = "0"; 
		document.getElementById("b8").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_11() { 
	if (flag == 1) { 
		document.getElementById("b9").value = "★"; 
		document.getElementById("b9").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b9").value = "0"; 
		document.getElementById("b9").disabled = true; 
		flag = 1; 
	} 
} 

 
 //-------------------------------------------list-----------------------------------------------



 const courses = document.querySelectorAll('.course');

courses.forEach(course => {
    course.addEventListener('click', () => {
        // Toggle the active class to show/hide the content
        course.classList.toggle('active');
    });
});
//-----------------------------form and object---------------------------------------------------


// Enable Bootstrap tooltips
$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
});

document.addEventListener('DOMContentLoaded', function() {
	const registrationForm = document.getElementById('registrationForm');
	const registerButton = document.getElementById('registerButton');
	
	// Create an audio element for the click sound
	const clickSound = new Audio('sound.mp3');

	registrationForm.addEventListener('submit', function(event) {
		event.preventDefault();

		// Get user input values
		const name = document.getElementById('name').value;
		const phoneNumber = document.getElementById('phoneNumber').value;

		// Create an object to store the user's information
		const user = {
			name: name,
			phoneNumber: phoneNumber
		};

		// Play the click sound
		clickSound.play();

		// You can now do something with the user object, like sending it to a server for registration.

		// For this example, let's log the user object to the console.
		console.log(user);

		// Clear the form fields
		registrationForm.reset();
	});
});

//----------------------------------------------------------------------------------------------------------
