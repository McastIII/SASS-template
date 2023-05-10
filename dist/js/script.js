// toggle menu
const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header__nav");
const blurr = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    mobileNav.classList.toggle("open");
    blurr.classList.toggle("open");
});

// dropdown
const links = document.querySelectorAll(".links__drop__item h4");

links.forEach((baba) => {
    baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
    });
});


// // header scroll
// const header = document.querySelector(".header");
// const brandimg = document.querySelector(".branding img");
// window.addEventListener("scroll", () => {
//     console.log(window.pageYOffset);
//     if (window.pageYOffset >= 100) {
//     header.classList.add("blue");
//     brandimg.style = "background-color:red";
//     } else {
//     header.classList.remove("blue");}

// });

