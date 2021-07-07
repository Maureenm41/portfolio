const mainMenu = document.querySelector('#mainMenu');
const closeMenu = document.querySelector('#closeMenu');
const openMenu = document.querySelector('#openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show()
    {
        mainMenu.style.display = "flex";
        mainMenu.style.top = "0";
    }

function close()
    {
        mainMenu.style.top = "-100%";
    }


// script for the carroussel 

let slidePosition = 0 ;
const slides = document.getElementById('carroussel_item') ;
const totalSlides = slides.length ;

document.getElementById('carroussel_button--next')
.addEventListener("click", function()
{
    updateSlidesPoisition();
})