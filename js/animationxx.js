// Start Change Color Header
const mobileHeader = document.querySelector(".header-mobile");
const webHeader = document.querySelector(".header-web");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        mobileHeader.classList.add("header-white-bg");
        webHeader.classList.add("header-white-bg");
    } else {
        mobileHeader.classList.remove("header-white-bg");
        webHeader.classList.remove("header-white-bg");
    }
});
// End Change Color Header

// toggle icon Navbar for header-mobile ////////////////////////////////////////////////
let menuIconMobile = document.querySelector(".header-mobile #menu-icon");
let navlistMobile = document.querySelector(".header-mobile .navlist");

menuIconMobile.onclick = () => {
    menuIconMobile.classList.toggle("bx-x");
    navlistMobile.classList.toggle("open");
}

// toggle icon Navbar for header-web ////////////////////////////////////////////////
let menuIconWeb = document.querySelector(".header-web #menu-icon");
let navlistWeb = document.querySelector(".header-web .navlist");

menuIconWeb.onclick = () => {
    menuIconWeb.classList.toggle("bx-x");
    navlistWeb.classList.toggle("open");
}



// Start parallax ////////////////////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollButton = document.querySelectorAll(".scroll-bottom");
scrollButton.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el) => observer.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el) => observer.observe(el));

// End parallax ////////////////////












