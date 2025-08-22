let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let timer = null;

function showSlide(n) {
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".next").addEventListener("click", ()=>{
    nextSlide();
    resetTimer();
  });

  document.querySelector(".prev").addEventListener("click", ()=>{
    prevSlide();
    resetTimer();
  });

  showSlide(slideIndex);
  startTimer();
});

function startTimer() {
  timer = setInterval(nextSlide, 4000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}
