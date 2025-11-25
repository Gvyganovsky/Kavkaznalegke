/*  
    ----------------------------------
    1. Photos-slider
    ----------------------------------
*/

const sliderPhotos = document.querySelector("[data-slider-photos]");
const slidesPhotos = sliderPhotos.querySelectorAll("[data-image-photos]");
const prevPhotos = document.querySelector("[data-prev-photos]");
const nextPhotos = document.querySelector("[data-next-photos]");

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = slidesPhotos.length - 1;
  if (index == slidesPhotos.length) index = 0;

  currentIndex = index;

  slidesPhotos.forEach((item) => {
    const img = item.querySelector(".photos__image");
    if (parseInt(item.dataset.indexPhotos, 10) === currentIndex + 1) {
      img.classList.add("photos__image_top");
    } else {
      img.classList.remove("photos__image_top");
    }
  });

  slidesPhotos[currentIndex].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}

prevPhotos.addEventListener("click", () => showSlide(currentIndex - 1));
nextPhotos.addEventListener("click", () => showSlide(currentIndex + 1));

showSlide(0);

/*  
    ----------------------------------
    2. Questions
    ----------------------------------
*/

const questions = document.querySelectorAll(".questions__item");

questions.forEach((item) => {
  item.addEventListener("click", function () {
    const icon = this.querySelector(".questions__icon");
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      icon.textContent = "−";
    } else {
      icon.textContent = "+";
    }
  });
});
