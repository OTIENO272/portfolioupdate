// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
	    behavior: 'smooth'
	  });
	});
   });
   
   // Form submission handling
   document.getElementById('contact-form').addEventListener('submit', function (e) {
	e.preventDefault();
	alert('Thank you for your message!🖐');
	this.reset();
   });
     // Function to check if an element is in the viewport
	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
		    rect.top >= 0 &&
		    rect.left >= 0 &&
		    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	 }

	 // Function to add animations when elements are in the viewport
	 function addAnimationsOnScroll() {
		const sections = document.querySelectorAll('section');
		sections.forEach((section) => {
		    if (isInViewport(section)) {
			   section.classList.add('animate__animated', 'animate__fadeInUp');
		    }
		});
	 }

	 // Add event listener for scroll
	 window.addEventListener('scroll', addAnimationsOnScroll);

	 // Trigger animations on page load
	 document.addEventListener('DOMContentLoaded', addAnimationsOnScroll);
	 // Function to check if an element is in the viewport
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
	    rect.top >= 0 &&
	    rect.left >= 0 &&
	    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
// Function to add animations when elements are in the viewport
function addAnimationsOnScroll() {
	const sections = document.querySelectorAll('section');
	sections.forEach((section) => {
	    if (isInViewport(section)) {
		   section.classList.add('animate__animated', 'animate__fadeInUp');
	    }
	});
}
// Add event listener for scroll
window.addEventListener('scroll', addAnimationsOnScroll);
// Trigger animations on page load
document.addEventListener('DOMContentLoaded', addAnimationsOnScroll);
// Function to check if an element is in the viewport
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
//Function to animate the whole page oncklicking a button
function animatePage() {
	const sections = document.querySelectorAll('section');
	sections.forEach((section) => {
		section.classList.add('animate__animated', 'animate__fadeInUp');
	});
}
// Simulate a delay (e.g., fetching data or waiting for something)
setTimeout(function () {
	// Hide the loader
	document.getElementById('loader').style.display = 'none';
 
	// Show the content
	document.getElementById('content').classList.remove('hidden');
 }, 3000); // 3 seconds delay for demonstration
 import {Spinner} from 'spin.js';

var opts = {
  lines: 20, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 35, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#c01c28', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

var target = document.getElementById('foo');
var spinner = new Spinner(opts).spin(target);

