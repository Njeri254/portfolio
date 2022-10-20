var navLinks = document.getElementsByClassName("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
var navLinks = document.getElementsByClassName("navLinks");
function hideMenu() {
    navLinks.style.right = "-200";
}
window.onscroll = function()
{myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");
}
}