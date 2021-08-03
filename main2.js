/*import data from './pokemon2.js';*/
/*console.log(JSON.Stringify(data));*/

//Codigo para carrousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
img1=document.getElementById("img1");
img1.addEventListener("click",function(){
    showSlides(1);
});

img2=document.getElementById("img2");
img2.addEventListener("click",function(){
    showSlides(2);
});

img3=document.getElementById("img3");
img3.addEventListener("click",showSlides(3));

img4=document.getElementById("img4");
img4.addEventListener("click",showSlides(4));

img5=document.getElementById("img5");
img5.addEventListener("click",showSlides(5));

img6=document.getElementById("img6");
img6.addEventListener("click",showSlides(6));