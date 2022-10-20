function saySubmit (){
    alert("Submitted Successfully!");
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
var slideShows = 
document.querySelectorAll('[data-component="slideshow"]');
slideShows.forEach(initSlideshow); 
function initSlideshow(slideshow) {
    var slides = 
    document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
    var index = 0, time = 5000;
    slides[index].classList.add('active');
    setInterval( () => {
        slides[index].classList.remove('active');
        index++;
        if (index === slides.length)
        index = 0;
        slides[index].classList.add('active');
    }, time);
}