
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider .slides img");
  const prevBtn = document.querySelector(".slider .prev");
  const nextBtn = document.querySelector(".slider .next");
  let currentSlide = 0;

  function showSlide(n) {

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }


    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  showSlide(currentSlide);


  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

 
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});



document.addEventListener("DOMContentLoaded", function() {
  const exploreButton = document.getElementById('exploreButton');

  exploreButton.addEventListener('click', function() {
   
    window.location.href = 'https://hourofcode.com/az';
  });
});
