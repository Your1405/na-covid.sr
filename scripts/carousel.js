const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//buttons 
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
let size = carouselImages[0].clientWidth;

window.addEventListener('resize', () => {
          carouselSlide.style.transition = "none";
          size = carouselImages[0].clientWidth;
          carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener("click", () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () =>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.8s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
    if(carouselImages[counter].id === 'last-slide'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if(carouselImages[counter].id === 'first-slide'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});