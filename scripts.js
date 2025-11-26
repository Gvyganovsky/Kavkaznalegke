/*  
    ----------------------------------
    1. Photos-slider
    ----------------------------------
*/

// const sliderPhotos = document.querySelector("[data-slider-photos]");
// const slidesPhotos = sliderPhotos.querySelectorAll("[data-image-photos]");
// const prevPhotos = document.querySelector("[data-prev-photos]");
// const nextPhotos = document.querySelector("[data-next-photos]");

// let currentIndex = 0;

// function showSlide(index) {
//   if (index < 0) index = slidesPhotos.length - 1;
//   if (index == slidesPhotos.length) index = 0;

//   currentIndex = index;

//   slidesPhotos.forEach((item) => {
//     const img = item.querySelector(".photos__image");
//     if (parseInt(item.dataset.indexPhotos, 10) === currentIndex + 1) {
//       img.classList.add("photos__image_top");
//     } else {
//       img.classList.remove("photos__image_top");
//     }
//   });

//   slidesPhotos[currentIndex].scrollIntoView({
//     behavior: "smooth",
//     block: "nearest",
//   });
// }

// prevPhotos.addEventListener("click", () => showSlide(currentIndex - 1));
// nextPhotos.addEventListener("click", () => showSlide(currentIndex + 1));

// showSlide(0);

/*  
    ----------------------------------
    2. Reviews
    ----------------------------------
*/

// const reviews = [
//   {
//     rating: 5,
//     name: "Юлия",
//     date: "26.08.2024",
//     text: `Это было здорово! Все, абсолютно все, до мелочей. Отпуск
//     удался на славу, масса впечатлений останется надолго в
//     памяти и сердце. Инструкторы Андрей и Анечка-мастера
//     своего дела, душевные ребята, заботились о каждом из нас,
//     как о родных. Гостиница Альпина-персонал отзывчивый,
//     номера чистые, есть все необходимое, кормят вкусно и
//     сытно. Потрясающие виды, чистый воздух, реки, леса, ручьи,
//     горы, ГОРЫ… Без сомнений буду рекомендовать друзьям данный
//     вид отдыха.`,
//     images: [
//       "./images/ulia5.webp",
//       "./images/ulia6.webp",
//       "./images/ulia1.webp",
//       "./images/ulia2.webp",
//       "./images/ulia3.webp",
//     ],
//   },
//   {
//     rating: 5,
//     name: "Максим",
//     date: "05.08.2024",
//     text: `Поход очень понравился! Не скажу, что это была лёгкая
//     прогулка, но со всем справился и чудесные, незабываемые
//     виды, которые открывались после подьемов и спусков стояли
//     всех моих усилий! Телефон забит кучей классных фото и
//     видео. Увидел воочию Приют 11 на Эльбрусе, о котором
//     раньше только читал. Сам Эльбрус нам тоже показался)) Гора
//     Чегет, ущелье Терскол, водопады, все прошли и сами
//     увидели. Физическую форму точно улучшил и уже не хочется
//     останавливаться, хочется движения и познавать новое! Поеду
//     ли ещё? Однозначно - ДА!!!`,
//     images: [
//       "./images/maxim1.webp",
//       "./images/maxim2.webp",
//       "./images/maxim3.webp",
//       "./images/maxim4.webp",
//       "./images/maxim5.webp",
//     ],
//   },
//   {
//     rating: 5,
//     name: "Адела",
//     date: "27.08.2024",
//     text: `Ходили с Ильей) Все ожидания оправданны! Комфортное
//     проживание в отдельных комнатах с видом на горы,
//     интересные радиалки с шикарными видами). С Ильей было
//     надежно покорять горы, очень внимательный, настоящий
//     профессионал. Были грамотно спланированы походы,
//     разнообразное питание и вечерний досуг. Мы в восторге!
//     Пойдем ещё с Ильей.`,
//     images: ["./images/adeal.jpeg"],
//   },
//   {
//     rating: 5,
//     name: "Екатерина",
//     date: "30.07.2024",
//     text: `Впервые пошла в поход с Клубом приключений!) Безумно
//     понравилось, понравились маршруты. Безумно красивая
//     природа, глаз не оторвать, сами маршруты местами не
//     простые, но тут отдельную благодарность хочется выразить
//     инструкторам и их поддержке, помощи!) С ними не страшно
//     ничего, очень грамотные, при необходимости строгие (в
//     горах иначе никак), понимающие и поддерживающие, очень
//     внимательные к каждому участнику похода. При этом
//     атмосфера, что в группе, что с инструкторами царила очень
//     дружественная и семейная. Спасибо большое :)`,
//     images: ["./images/ekaterina1.jpg", "./images/ekaterina2.jpg"],
//   },
//   {
//     rating: 5,
//     name: "Татьяна",
//     date: "27.08.2024",
//     text: `Благодарю за исполнение моей мечты!! Все было потрясающе!
//     Илья чуткий, ответственный, весёлый и добрый! Чувствовали
//     себя отлично в надёжных его руках) Благодарю за доп.
//     маршруты, без них было бы слишком легко и не так
//     интересно! До новых встреч!`,
//     images: ["./images/tatyana.jpg"],
//   },
// ];

// const sliderReviews = document.querySelector("[data-reviews-slider]");
// const prevReviews = document.querySelector("[data-reviews-prev]");
// const nextReviews = document.querySelector("[data-reviews-next]");

// let reviewsIndex = 0;
// let slidesReview;

// function createReviews() {
//   reviews.forEach((item) => {
//     const slide = document.createElement("div");
//     slide.classList.add("reviews__slide");

//     slide.innerHTML = `
//       <div class="reviews__star">
//         <img src="./images/star.svg" alt="Звезда" width="18" height="18" class="reviews__icon" />
//         <p class="reviews__rating">${item.rating}</p>
//       </div>
//       <h3 class="reviews__name">${item.name}</h3>
//       <p class="reviews__date">${item.date}</p>
//       <p class="reviews__text">${item.text}</p>
//       <ul class="reviews__list list">
//         ${item.images
//           .map(
//             (imgSrc) => `
//           <li class="reviews__item">
//             <a href="${imgSrc}" data-fancybox="gallery">
//               <img src="${imgSrc}" alt="" width="80" height="80" />
//             </a>
//           </li>`
//           )
//           .join("")}
//       </ul>
//     `;
//     sliderReviews.appendChild(slide);
//   });

//   slidesReview = document.querySelectorAll(".reviews__slide");
// }

// function showReviews(index) {
//   if (index < 0) index = slidesReview.length - 1;
//   if (index >= slidesReview.length) index = 0;

//   reviewsIndex = index;

//   const offset = -reviewsIndex * slidesReview[0].offsetWidth;
//   sliderReviews.style.transform = `translateX(${offset}px)`;
//   sliderReviews.style.transition = "transform 0.5s ease";
// }

// prevReviews.addEventListener("click", () => showReviews(reviewsIndex - 1));
// nextReviews.addEventListener("click", () => showReviews(reviewsIndex + 1));

// createReviews();
// showReviews(reviewsIndex);

/*  
    ----------------------------------
    3. Questions
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
