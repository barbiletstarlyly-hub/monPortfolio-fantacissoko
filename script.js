
// Initialiser AOS (animation au scroll)
AOS.init({
  duration: 1000,
  once: true
});

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.typed', {
        strings: document.querySelector('.typed').getAttribute('data-typed-items').split(','),
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
    });
});
// Effet navbar au scroll
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".custom-navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
