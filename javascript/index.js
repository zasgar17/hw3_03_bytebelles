

document.addEventListener("DOMContentLoaded", function () {
  
    var logo = document.getElementById("logo");

   
    logo.addEventListener("click", function () {
  
        logo.style.color = "red"; 
    });

  
    logo.addEventListener("mouseover", function () {
      
        logo.style.color = "blue"; 
    });

   
    logo.addEventListener("mouseout", function () {
        logo.style.color = ""; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
  
    var teamPhotos = document.querySelector('.team-photos');
    var images = teamPhotos.getElementsByTagName('img');


    var currentIndex = 0;
    showImages();

    function showImages() {
        for (var i = 0; i < images.length; i++) {
            if (i >= currentIndex && i < currentIndex + 3) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }
        }
    }

   
    var nextButton = document.createElement('button');
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener('click', next);

    var prevButton = document.createElement('button');
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener('click', prev);

  
    nextButton.style.position = 'absolute';
    nextButton.style.top = '50%';
    nextButton.style.right = '10px';

    prevButton.style.position = 'absolute';
    prevButton.style.top = '50%';
    prevButton.style.left = '10px';

   
    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);

   
    function next() {
        if (currentIndex + 3 < images.length) {
            currentIndex++;
            showImages();
        }
    }

   
    function prev() {
        if (currentIndex > 0) {
            currentIndex--;
            showImages();
        }
    }
});
document.getElementById("exploreButton").addEventListener("click", function() {
    window.location.href = "member.html";
});
