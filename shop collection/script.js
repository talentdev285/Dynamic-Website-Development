var slideIndex = 0;
var slides = document.getElementsByClassName("new-arrival-card-details");
var visibleSlides = 3;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function showSlides(n) {
  var totalSlides = slides.length;

  if (n < 0) {
    slideIndex = totalSlides - visibleSlides;
  } else if (n >= totalSlides) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  for (var i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  var startIndex = slideIndex;
  var endIndex = slideIndex + visibleSlides;

  if (endIndex > totalSlides) {
    startIndex -= endIndex - totalSlides;
    endIndex = totalSlides;
  }

  var delay = 0;
  for (var j = startIndex; j < endIndex; j++) {
    var index = j >= totalSlides ? j - totalSlides : j;
    slides[index].style.display = "block";
    slides[index].style.animationDelay = delay + "s";
    delay += 0.3;
  }
}
