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

//--------------------------------questions-10---------------------------------------------------------------

let currentStep = 1;
let score = 0;

function nextStep(next) {
  const selectedOption = document.querySelector(`input[name=q${currentStep}]:checked`);

  if (!selectedOption) {
    alert('Please select an answer before moving on.');
    return;
  }

  // Check if the selected answer is correct
  const correctAnswer = getCorrectAnswer(currentStep);
  if (selectedOption.value === correctAnswer) {
    score++;
  }

  currentStep = next;

  // Hide current step, show next step
  document.getElementById(`step${currentStep - 1}`).classList.remove('active-step');
  document.getElementById(`step${currentStep}`).classList.add('active-step');

  // If it's the last step, show the result
  if (currentStep === 11) {
    showResult();
  }
}

function getCorrectAnswer(step) {
  const answers = ['a', 'b', 'b', 'b', 'a', 'b', 'c', 'c', 'a', 'a'];
  return answers[step - 1];
}


function showResult() {
  const resultContainer = document.getElementById('result');
  const scoreElement = document.getElementById('score');

  scoreElement.textContent = `You got ${score} out of 10 questions right.`;
  resultContainer.classList.add('active-step');
}


function showModal() {
  const modal = document.getElementById('congratsModal');
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('congratsModal');
  modal.style.display = 'none';
}

function stopPropagation(event) {
  event.stopPropagation();
}

//-----------------------------------------video--------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   var video = document.getElementById("fullscreen-video");
//   var fullscreenButton = document.getElementById("fullscreen-button");

//   // Function to open the video in fullscreen
//   function openFullscreen() {
//     if (video.requestFullscreen) {
//       video.requestFullscreen();
//     } else if (video.mozRequestFullScreen) {
//       video.mozRequestFullScreen();
//     } else if (video.webkitRequestFullscreen) {
//       video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) {
//       video.msRequestFullscreen();
//     }
//   }

//   // Attach the openFullscreen function to the button click event
//   fullscreenButton.addEventListener("click", openFullscreen);
// });
