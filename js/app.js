const delay = 3000;

const slides= document.querySelector(".slider");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount -1)* 100 * -1;
let current = 0;

function changeSlide(next = true){
    if(next){
        current += current > maxLeft ?-100: current * -1;
    }else{
        current = current <0 ? current +100: maxLeft;
    }

    slides.style.left = current + "%"

}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});


// Hamburger button
const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
});

// Back to top

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}