// ----------------- swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "cards",
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
});

// ---------------------- play button

const playButton = document.querySelector(".software__play-button");
playButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".software__video").play();
  playButton.style.display = "none";
})

// --------------------- burger menu

const burger = document.querySelector(".header__burger");
const rightSide = document.querySelector(".header__right-side");
const links = document.querySelectorAll(".header__link");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  rightSide.classList.toggle("active");
})

links.forEach( link => {
  link.addEventListener("click", (e)  => {
    e.preventDefault();
    burger.classList.remove("active");
    rightSide.classList.remove("active");
  })
})

// ----------------------- accordion 

const accordionBox = document.querySelectorAll(".accordion__box");

accordionBox.forEach(box => {
  box.addEventListener("click", (e) => {
    e.preventDefault();
    box.classList.toggle("active");
  })
})


// --------------------------- 


