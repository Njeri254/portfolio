const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    hamburger.classList.toggle("toggle");
});
var slider = new tns ({
    container: '.home-slider',
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    items: 1,
    nav: true,
    controls: false,
    controlsText: [
        '<i class="lni lni-arrow-left prev"></i>',
        '<i class="lni lni-arrow-right next"></i>',
    ],
    responsive: {
        1200: {
            items: 1,
        },
        992: {
            items: 1,
        },
        0: {
            items: 1,
        }
    }
});