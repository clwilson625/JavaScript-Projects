function countdown () {  //function for a stopwatch basically - 
    var seconds = document.getElementById("seconds").value;
function tick () {
    seconds = seconds -1;
    timer.innerHTML = seconds;
    setTimeout(tick, 1000); //this is for 1 second
    if (seconds == -1) {
        alert ("Time's up!");  //pop-up alert
    }
}
tick();
}
//This is the animation for the slideshow - still trying to figure out how to have the first picture display when opened
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// This is for images and how they react
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//This is for the automatic part - still cant get 1st picture to show on screen before clicking button
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;  //This tells the slides how often to change
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 6 seconds
}
