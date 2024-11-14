

console.log("سبحان ربي الاعلي");
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

// Change Words
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("/\s+/");
    word.textContent="";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    
    Array.from(currentWord.children).forEach((letter,i) => {
        setTimeout(()=> {
            letter.className = "letter out";
        }, i * 80)
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=> {
        letter.className = "letter behind"
        setTimeout(()=> {
            letter.className = "letter in"
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// parallax ////////////////////

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




// Function to set the active link based on the current page location
function setActiveLink() {
    const currentLocation = window.location.href;
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const blogLink = document.getElementById("blog-link");
    const contactLink = document.getElementById("contact-link");

    // Check the current page URL and set the active link accordingly
    if (currentLocation.includes("blog.html")) {
        blogLink.classList.add("active");
        homeLink.classList.remove("active");
        aboutLink.classList.remove("active");
        contactLink.classList.remove("active");
    } else if (currentLocation.includes("#about")) {
        aboutLink.classList.add("active");
        homeLink.classList.remove("active");
        blogLink.classList.remove("active");
        contactLink.classList.remove("active");
    } else if (currentLocation.includes("#skills")) {
        contactLink.classList.add("active");
        homeLink.classList.remove("active");
        aboutLink.classList.remove("active");
        blogLink.classList.remove("active");
    } else {
        homeLink.classList.add("active");
        blogLink.classList.remove("active");
        aboutLink.classList.remove("active");
        contactLink.classList.remove("active");
    }
}

// Call the setActiveLink function when the page loads
document.addEventListener("DOMContentLoaded", setActiveLink);

