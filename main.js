const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");
const menuCloseIcon = document.getElementById("menuCloseIcon");
const navLinks = document.querySelectorAll('.navLink');

hamburger.addEventListener("click", ()=>{
    navList.classList.remove("hidden")
});

menuCloseIcon.addEventListener("click", ()=>{
    navList.classList.add("hidden")
});

navLinks.forEach(link =>
    link.addEventListener("click", ()=>{
        navList.classList.add("hidden")
    })
);

// Dark Theme
const html = document.querySelector("html");
const themeToggleBtn = document.getElementById("themeToggle");

if(localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    lightMode();
}

themeToggleBtn.addEventListener('click',(e) =>{
    if(localStorage.getItem("mode") == "light") {
        darkMode();
    } else {
        lightMode();
    }
    
})

function darkMode() {
    html.classList.add("dark");
    themeToggleBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themeToggleBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}

// Scroll Up 
const scrollUp  = () =>{
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener('scroll', scrollUp)

//Scroll sections active links
const activeLink = () =>{
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navLink");

    let current = "home";

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;

        if(this.scrollY >=sectionTop - 60) {
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach(item =>{
        item.classList.remove("text-secondaryColor");
        if(item.href.includes(current)){
            item.classList.add("text-secondaryColor");
        }
    });
};

window.addEventListener("scroll", activeLink)

//Scroll Reveal Animation

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 1500,
    delay: 400
})

sr.reveal(".home__content")
sr.reveal(".home__image", {origin:"bottom"});
sr.reveal(".line", {origin:"bottom"});
sr.reveal(".heading");
sr.reveal(".booking__card", {interval:"200"});
sr.reveal(".about__content");
sr.reveal(".about__image", {origin:"bottom"});
sr.reveal(".rsg__content", {origin:"bottom"});
sr.reveal(".rr__cards", {interval:"200"});
sr.reveal(".services__image",{origin:"left"});
sr.reveal(".services__cards", {origin:"right",interval:"200"});
sr.reveal(".stats__card1",{origin:"left",interval:"200"});
sr.reveal(".stats__card2",{origin:"bottom",interval:"200"});
sr.reveal(".stats__card3",{origin:"right",interval:"200"});
sr.reveal(".gallery__cardL", {origin:"left",interval:"200"});
sr.reveal(".gallery__cardR", {origin:"right",interval:"200"});
sr.reveal(".gallery__cardT", {origin:"top",interval:"200"});
sr.reveal(".gallery__cardB", {origin:"bottom",interval:"200"});
sr.reveal(".contact__iframe", {origin:"left"});
sr.reveal(".contact__card", {origin:"bottom"});
sr.reveal(".contact__form", {origin:"right"});
sr.reveal(".footer__items", {interval:"200"});



