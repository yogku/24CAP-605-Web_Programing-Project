'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}



/**
 * Form validation
 */


const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

// validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Form submission
form.addEventListener('submit', function(event) {
  let isValid = true;


  clearErrors();

  // Validate name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate phone
  if (phoneInput.value.trim() === '') {
    showError(phoneInput, 'Phone number is required');
    isValid = false;
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Message is required');
    isValid = false;
  }

  // Prevent form submission if validation fails
  if (!isValid) {
    event.preventDefault();
  }
});

// Function to show an error message
function showError(input, message) {
  const wrapper = input.parentElement;
  const error = document.createElement('small');
  error.className = 'error-message';
  error.textContent = message;
  wrapper.appendChild(error);
}

// Function to clear all error messages
function clearErrors() {
  const errors = document.querySelectorAll('.error-message');
  errors.forEach(error => error.remove());
}
