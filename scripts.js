/*  
    ----------------------------------
    1. Images-slider
    ----------------------------------
*/

const images = [
  "./images/gallery-photo-img-01_580x746_802.webp",
  "./images/gallery-photo-img-02_580x746_802.webp",
  "./images/gallery-photo-img-03_580x746_802.webp",
  "./images/gallery-photo-img-04_580x746_802.webp",
  "./images/gallery-photo-img-05_580x746_802.webp",
  "./images/gallery-photo-img-06_580x746_802.webp",
  "./images/gallery-photo-img-09_580x746_802.webp",
  "./images/gallery-photo-img-10_580x746_802.webp",
  "./images/gallery-photo-img-11_580x746_802.webp",
  "./images/gallery-photo-img-12_580x746_802.webp",
  "./images/gallery-photo-img-13_580x746_802.webp",
  "./images/gallery-photo-img-14_580x746_802.webp",
  "./images/gallery-photo-img-15_580x746_802.webp",
  "./images/gallery-photo-img-16_580x746_802.webp",
  "./images/gallery-photo-img-17_580x746_802.webp",
  "./images/gallery-photo-img-18_580x746_802.webp",
  "./images/gallery-photo-img-19_580x746_802.webp",
  "./images/gallery-photo-img-07_580x746_802.webp",
  "./images/gallery-photo-img-08_580x746_802.webp",
];

const slider = document.querySelector("[data-slider]");
const prevBtn = document.querySelector("[data-btn-prev]");
const nextBtn = document.querySelector("[data-btn-next]");

const sliderFunc = () => {
  images.forEach((imageUrl, index) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("slider__image");
    img.width = 280;
    img.height = 350;
    img.dataset.index = index;
    img.alt = `image + ${index + 1}`;

    slider.appendChild(img);
  });
};

sliderFunc();

/*  
    ----------------------------------
    2. Questions
    ----------------------------------
*/

const questionsItems = [];