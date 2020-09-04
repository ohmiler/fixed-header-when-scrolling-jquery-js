// jQuery 

// $(window).scroll(function() {
//     if ($(window).scrollTop() >= 300) {
//         $('nav').addClass('fixed-header');
//         $('nav div').addClass('visible-title');
//     } else {
//         $('nav').removeClass('fixed-header');
//         $('nav div').removeClass('visible-title');
//     }
// })

// JavaScript - VanillaJS

let navBar = document.querySelector('nav');
let myTitle = document.querySelector('nav div');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 300) {
        navBar.classList.add('fixed-header');
        myTitle.classList.add('visible-title');
    } else {
        navBar.classList.remove('fixed-header');
        myTitle.classList.remove('visible-title');
    }
});


