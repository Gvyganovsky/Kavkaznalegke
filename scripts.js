/*  
    ----------------------------------
    1. Burger
    ----------------------------------
*/

const burger = document.querySelector("[data-burger]");
const burgerNav = document.querySelector("[data-burger-nav]");
const burgerLinks = burgerNav.querySelectorAll("a");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_active");
  burgerNav.classList.toggle("burger-nav_active");

  if (burger.classList.contains("burger_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("burger_active");
    burgerNav.classList.remove("burger-nav_active");
    document.body.style.overflow = "";
  });
});

/*  
    ----------------------------------
    2. Photos
    ----------------------------------
*/

const sliderPhotos = document.querySelector("[data-slider-photos]");
const prevPhotos = document.querySelector("[data-prev-photos]");
const nextPhotos = document.querySelector("[data-next-photos]");
const dataPhotos = [
  {
    src: "./images/gallery-photo-img-01_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 0,
  },
  {
    src: "./images/gallery-photo-img-02_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 1,
  },
  {
    src: "./images/gallery-photo-img-03_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 2,
  },
  {
    src: "./images/gallery-photo-img-04_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 3,
  },
  {
    src: "./images/gallery-photo-img-05_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 4,
  },
  {
    src: "./images/gallery-photo-img-06_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 5,
  },
  {
    src: "./images/gallery-photo-img-07_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 6,
  },
  {
    src: "./images/gallery-photo-img-08_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 7,
  },
  {
    src: "./images/gallery-photo-img-09_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 8,
  },
  {
    src: "./images/gallery-photo-img-10_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 9,
  },
  {
    src: "./images/gallery-photo-img-11_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 10,
  },
  {
    src: "./images/gallery-photo-img-12_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 11,
  },
  {
    src: "./images/gallery-photo-img-13_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 12,
  },
  {
    src: "./images/gallery-photo-img-14_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 13,
  },
  {
    src: "./images/gallery-photo-img-15_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 14,
  },
  {
    src: "./images/gallery-photo-img-16_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 15,
  },
  {
    src: "./images/gallery-photo-img-17_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 16,
  },
  {
    src: "./images/gallery-photo-img-18_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 17,
  },
  {
    src: "./images/gallery-photo-img-19_580x746_802.webp",
    alt: "Человек смотрит в даль",
    width: 270,
    height: 350,
    index: 18,
  },
];

let currentIndexPhotos = 0;
const slideWidthPhotos = 300;

const createPhotos = () => {
  dataPhotos.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.width = item.width;
    img.height = item.height;
    img.dataset.index = item.index;
    img.classList.add("photos__image");
    sliderPhotos.appendChild(img);
  });
  for (let i = 0; i < 3; i++) {
    const clone = sliderPhotos.children[i].cloneNode(true);
    sliderPhotos.appendChild(clone);
  }
  const clone =
    sliderPhotos.children[sliderPhotos.children.length - 4].cloneNode(true);
  sliderPhotos.insertBefore(clone, sliderPhotos.firstChild);
};

const updateTopClass = () => {
  const images = sliderPhotos.querySelectorAll(".photos__image");
  images.forEach((img) => img.classList.remove("photos__image_top"));
  const domIndex = currentIndexPhotos + 2;
  const targetImage = sliderPhotos.children[domIndex];
  if (targetImage) {
    targetImage.classList.add("photos__image_top");
  }
};

const initPhotos = () => {
  sliderPhotos.style.transition = "none";
  sliderPhotos.style.transform = `translateX(-${
    slideWidthPhotos * (currentIndexPhotos + 1)
  }px)`;
  updateTopClass();
};

const prevPhotosSlide = () => {
  currentIndexPhotos--;
  sliderPhotos.style.transition = "transform 0.5s ease-in-out";
  sliderPhotos.style.transform = `translateX(-${
    slideWidthPhotos * (currentIndexPhotos + 1)
  }px)`;
  sliderPhotos.addEventListener(
    "transitionend",
    () => {
      if (currentIndexPhotos < 0) {
        currentIndexPhotos = dataPhotos.length - 1;
        sliderPhotos.style.transition = "none";
        sliderPhotos.style.transform = `translateX(-${
          slideWidthPhotos * (currentIndexPhotos + 1)
        }px)`;
      }
      updateTopClass();
    },
    { once: true }
  );
};

const nextPhotosSlide = () => {
  currentIndexPhotos++;
  sliderPhotos.style.transition = "transform 0.5s ease-in-out";
  sliderPhotos.style.transform = `translateX(-${
    slideWidthPhotos * (currentIndexPhotos + 1)
  }px)`;
  sliderPhotos.addEventListener(
    "transitionend",
    () => {
      if (currentIndexPhotos >= dataPhotos.length) {
        currentIndexPhotos = 0;
        sliderPhotos.style.transition = "none";
        sliderPhotos.style.transform = `translateX(-${
          slideWidthPhotos * (currentIndexPhotos + 1)
        }px)`;
      }
      updateTopClass();
    },
    { once: true }
  );
};

prevPhotos.addEventListener("click", prevPhotosSlide);
nextPhotos.addEventListener("click", nextPhotosSlide);

createPhotos();
initPhotos();

/*  
    ----------------------------------
    3. Reviews
    ----------------------------------
*/

const reviews = [
  {
    rating: 5,
    name: "Юлия",
    date: "26.08.2024",
    text: `Это было здорово! Все, абсолютно все, до мелочей. Отпуск
    удался на славу, масса впечатлений останется надолго в
    памяти и сердце. Инструкторы Андрей и Анечка-мастера
    своего дела, душевные ребята, заботились о каждом из нас,
    как о родных. Гостиница Альпина-персонал отзывчивый,
    номера чистые, есть все необходимое, кормят вкусно и
    сытно. Потрясающие виды, чистый воздух, реки, леса, ручьи,
    горы, ГОРЫ… Без сомнений буду рекомендовать друзьям данный
    вид отдыха.`,
    images: [
      "./images/ulia1.webp",
      "./images/ulia2.webp",
      "./images/ulia3.webp",
      "./images/ulia4.webp",
    ],
  },
  {
    rating: 5,
    name: "Максим",
    date: "05.08.2024",
    text: `Поход очень понравился! Не скажу, что это была лёгкая
    прогулка, но со всем справился и чудесные, незабываемые
    виды, которые открывались после подьемов и спусков стояли
    всех моих усилий! Телефон забит кучей классных фото и
    видео. Увидел воочию Приют 11 на Эльбрусе, о котором
    раньше только читал. Сам Эльбрус нам тоже показался)) Гора
    Чегет, ущелье Терскол, водопады, все прошли и сами
    увидели. Физическую форму точно улучшил и уже не хочется
    останавливаться, хочется движения и познавать новое! Поеду
    ли ещё? Однозначно - ДА!!!`,
    images: [
      "./images/maxim1.webp",
      "./images/maxim2.webp",
      "./images/maxim3.webp",
      "./images/maxim4.webp",
      "./images/maxim5.webp",
    ],
  },
  {
    rating: 5,
    name: "Адела",
    date: "27.08.2024",
    text: `Ходили с Ильей) Все ожидания оправданны! Комфортное
    проживание в отдельных комнатах с видом на горы,
    интересные радиалки с шикарными видами). С Ильей было
    надежно покорять горы, очень внимательный, настоящий
    профессионал. Были грамотно спланированы походы,
    разнообразное питание и вечерний досуг. Мы в восторге!
    Пойдем ещё с Ильей.`,
    images: ["./images/adeal.webp"],
  },
  {
    rating: 5,
    name: "Екатерина",
    date: "30.07.2024",
    text: `Впервые пошла в поход с Клубом приключений!) Безумно
    понравилось, понравились маршруты. Безумно красивая
    природа, глаз не оторвать, сами маршруты местами не
    простые, но тут отдельную благодарность хочется выразить
    инструкторам и их поддержке, помощи!) С ними не страшно
    ничего, очень грамотные, при необходимости строгие (в
    горах иначе никак), понимающие и поддерживающие, очень
    внимательные к каждому участнику похода. При этом
    атмосфера, что в группе, что с инструкторами царила очень
    дружественная и семейная. Спасибо большое :)`,
    images: ["./images/ekaterina1.webp", "./images/ekaterina2.webp"],
  },
  {
    rating: 5,
    name: "Татьяна",
    date: "27.08.2024",
    text: `Благодарю за исполнение моей мечты!! Все было потрясающе!
    Илья чуткий, ответственный, весёлый и добрый! Чувствовали
    себя отлично в надёжных его руках) Благодарю за доп.
    маршруты, без них было бы слишком легко и не так
    интересно! До новых встреч!`,
    images: ["./images/tatyana.webp"],
  },
];

const sliderReviews = document.querySelector("[data-reviews-slider]");
const prevReviews = document.querySelector("[data-reviews-prev]");
const nextReviews = document.querySelector("[data-reviews-next]");

let reviewsIndex = 0;

function createReviews() {
  reviews.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("reviews__slide");

    slide.innerHTML = `
      <div class="reviews__star">
        <img src="./images/star.svg" alt="Звезда" width="18" height="18" class="reviews__icon" />
        <p class="reviews__rating">${item.rating}</p>
      </div>
      <h3 class="reviews__name">${item.name}</h3>
      <p class="reviews__date">${item.date}</p>
      <p class="reviews__text">${item.text}</p>
      <ul class="reviews__list list">
        ${item.images
          .map(
            (imgSrc) => `
          <li class="reviews__item">
            <a href="${imgSrc}" data-fancybox="gallery">
              <img src="${imgSrc}" alt="" width="80" height="80" />
            </a>
          </li>`
          )
          .join("")}
      </ul>
    `;
    sliderReviews.appendChild(slide);
  });

  slidesReview = document.querySelectorAll(".reviews__slide");
}

let slidesReview = sliderReviews.querySelectorAll(".reviews__slide");

function showReviews() {
  const slideWidth = slidesReview[0].offsetWidth;
  sliderReviews.style.transform = `translateX(-${
    reviewsIndex * (slideWidth + 24)
  }px)`;
}

prevReviews.addEventListener("click", () => {
  reviewsIndex--;
  if (reviewsIndex < 0) reviewsIndex = reviews.length - 3;

  showReviews();
});

nextReviews.addEventListener("click", () => {
  reviewsIndex++;
  if (reviewsIndex >= reviews.length - 2) reviewsIndex = 0;

  showReviews();
});

createReviews();
showReviews();

/*  
    ----------------------------------
    4. Routes
    ----------------------------------
*/

const routesSlider = document.querySelector("[data-routes-slider]");
const prevRoutes = document.querySelector("[data-prev-slider]");
const nextRoutes = document.querySelector("[data-next-slider]");

const routesData = [
  {
    image: { src: "./images/dombai.webp", alt: "dombai.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "70 км (пешком)",
    duration: "7 дней",
    title: "ГОРНЫЙ ЛАГЕРЬ В ДОМБАЕ",
    difficultyActive: 1,
    price: "от 33 400 ₽",
    description: `Добро пожаловать в Домбай – волшебный уголок Кавказа, о котором с восхищением пел Юрий Визбор! Здесь царят неприступные вершины, изумрудные реки и мощные водопады, которые словно оживают под ярким солнцем. Бадукские озёра удивляют своей необыкновенной красотой: невероятные оттенки синего и зелёного сверкают, как драгоценные камни. Завораживающий шум мощного водопада Алибек воплощает силу горной природы. А гора Мусса Ачитара манит альпинистов и любителей приключений своими шикарными видами, от которых замирает сердце. Этот маршрут – настоящая находка для первых шагов на Кавказе: побывав здесь однажды, вы будете возвращаться снова и снова!    `,
    places: [
      "посёлок Домбай",
      "водопад Чучхур",
      "водопад Алибек",
      "река Теберда",
      "Бадукские озёра",
      "Тебердинский заповедник",
      "водопад Шумка",
      "гора Мусса-Ачитара",
    ],
  },
  {
    image: { src: "./images/arhyz.webp", alt: "arhyz.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "100 км (пешком)",
    duration: "7 дней",
    title: "ГОРНЫЙ ЛАГЕРЬ В АРХЫЗЕ",
    difficultyActive: 2,
    price: "от 41 900 ₽",
    description: `Отдых в Архызе – идеальный выбор для тех, кто хочет насладиться красотой Кавказских гор, проживая в уютных номерах на турбазе. База расположена в посёлке Архыз, где сохранились древние храмы, открытые для посещения. Вас ждут разнообразные экскурсии и восхождения: подъём к отрогу хребта Абишира-Ахуба, откуда открывается великолепный вид на Главный Кавказский хребет; прогулка к Софийским водопадам и перевалу Софийское седло; конная экскурсия, посещение заповедника и сплав по реке; экскурсия к Дуккинским озёрам с обедом на берегу и возможностью искупаться; прогулка к Баритовому водопаду; экскурсия к Казачьему водопаду с посещением термальных источников; вечерние посиделки с инструктором.`,
    places: [
      "отрог хребта Абишира Ахуба",
      "Софийские водопады",
      "перевал Софийское седло",
      "река Большой Зеленчук",
      "Дуккинские озёра",
      "Баритовый водопад",
      "Казачий водопад",
      "термальные источники",
    ],
  },
  {
    image: { src: "./images/lago-naki.webp", alt: "lago-naki.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "80 км (пешком)",
    duration: "7 дней",
    title: "ГОРНЫЙ ЛАГЕРЬ В ЛАГО-НАКИ",
    difficultyActive: 1,
    price: "от 50 200 ₽",
    description: `Добро пожаловать на волшебное плато Лаго-Наки! За 7 дней в горном лагере мы насладимся нетронутой природой Кавказского заповедника и его окрестностей. Побываем в девственных лесах и альпийских лугах, посетим Большую Азишскую пещеру, совершим конную прогулку, погуляем в долине реки Курджипс, пройдём по хребту Каменное море и поднимемся на гору Оштен. Все походы пройдут легко, без тяжёлых рюкзаков, в удобном для неподготовленных людей темпе. Перед отъездом искупаемся в термальных источниках, чтобы снять усталость и расслабиться после насыщенной недели.`,
    places: [
      "плато Лаго-Наки",
      "хребет Каменное Море",
      "гора Нагай-Кош",
      "пещера Мезмайская",
      "пещера Красивая",
      "Инструкторская щель",
      "гора Блям",
      "гора Оштен",
      "Большая Азишская пещера",
      "река Курджипс",
      "водопад Каскадный",
      "пещера Овечья",
      "Солнечный грот",
      "термальные источники",
    ],
  },
  {
    image: { src: "./images/digorii.webp", alt: "digorii.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "70 км (пешком)",
    duration: "7 дней",
    title: "ГОРНЫЙ ЛАГЕРЬ В ДИГОРИИ",
    difficultyActive: 2,
    price: "от 44 400 ₽",
    description: `Добро пожаловать в высокогорную Дигорию, жемчужину Северной Осетии! Дигория – это живописный горный край с зелёными лугами, великолепными лесами, сверкающими ледниками и древними крепостями. Здесь вас ждут незабываемые экскурсии, знакомство с историей и культурой древних аланов, а также посещение уникальных достопримечательностей. Вы увидите величественный пятикаскадный водопад Галдоридон, гору Кубус, окутанную таинственной дымкой, водопады Три сестры, на фоне которых сделаете прекрасные фотографии, а также освежитесь в нарзанных источниках на реке Урух. Любители истории смогут познакомиться с историей древних аланов и прикоснуться к загадочным петроглифам. Древний край легенд и прекрасных гор ждёт вас!`,
    places: [
      "гора Кубус",
      "водопад Галдоридон",
      "ледники вдоль хребта Танадор",
      "Суганский хребет",
      "руины древних крепостей",
      "нарзанные источники у реки Урух",
    ],
  },
  {
    image: { src: "./images/adygeya.webp", alt: "adygeya.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "90 км (пешком)",
    duration: "7 дней",
    title: "ГОРНЫЙ ЛАГЕРЬ В АДЫГЕЕ",
    difficultyActive: 1,
    price: "от 37 900 ₽",
    description: `                        Отправляемся в самые красивые, самые высокие, самые
                        родные горы у нас на Кавказе! Приэльбрусье - край
                        величественных вершин, покрытых вечными снегами,
                        высотные леденящие душу перевалы, бурные реки,
                        гремящие водопады, сосновые и буковые леса,
                        минеральные источники.`,
    places: [
      "Посёлок Каменномостский",
      "озеро Красное",
      "Свято-Михайловский монастырь",
      "ущелье реки Фарс",
      "гора Физиабго",
      "ручей Руфабго",
      "хребет Унакоз",
      "скала Чёртов палец",
      "гора Монах",
    ],
  },
  {
    image: { src: "./images/lazozero.webp", alt: "lazozero.png" },
    daysInfo: { start: "Воскресенье", end: "Суббота" },
    distance: "110 км (пешком)",
    duration: "7 дней",
    title: "В КРАЮ ЛАЗОРЕВЫХ ОЗЁР",
    difficultyActive: 3,
    price: "от 46 900 ₽",
    description: `                        Отдых в Архызе для тех, кто хочет посмотреть красоты
                        Кавказских гор, проживая только в уютных номерах на
                        турбазе в горах. Радиальные выходы к озёрам и
                        перевалам. Все выходы без рюкзаков!`,
    places: [
      "Скала Карчи",
      "Озеро Любви",
      "Дуккинские озёра",
      "Софийские озёра",
      "озеро Айматлы-Джагалы",
      "озеро Кашха-Эчкичат",
      "долина реки Кизгыч",
      "водопад Чигордали",
      "озеро Семицветному",
    ],
  },
  {
    image: { src: "./images/mezmay.webp", alt: "mexmay-zima.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "90 км (пешком)",
    duration: "7 дней",
    title: "ГОРНЫЙ ЛАГЕРЬ В МЕЗМАЕ",
    difficultyActive: 1,
    price: "от 34 400 ₽",
    description: ` Клуб Приключений приглашает вас в незабываемое
                        семидневное путешествие по самым живописным уголкам
                        Мезмая! Название посёлка переводится как лес диких
                        яблок. Местная природа поражает своим колоритом, а
                        Мезмай кажется окружённым горами со всех сторон. Здесь
                        вы увидите водопады Университетский и Чинарёв,
                        посетите Гуамское и Курджипское ущелья, прогуляетесь к
                        Монаховой пещере и подниметесь на гору Зауда. Поездка
                        предназначена для тех, кто хочет насладиться
                        непревзойдёнными пейзажами Кавказских гор без тяжёлых
                        походных рюкзаков. Вы остановитесь в уютной гостинице
                        горного посёлка и сможете отправиться к Чёрному морю
                        после завершения похода.`,
    places: [
      "посёлок Мезмай",
      "Курджипское ущелье",
      "водопад Университетский",
      "водопад Чинарёв",
      "Монахова пещера",
      "Гуамское ущелье",
      "гора Зауда",
      "Лунный водопад",
      "Мезмай-камень",
      "река Мезмайка",
    ],
  },
  {
    image: {
      src: "./images/golubie-prostory-sudaka-2.webp",
      alt: "golubie-prostory-sudaka-2.webp",
    },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "50 км (пешком)",
    duration: "7 дней",
    title: "ГОЛУБЫЕ ПРОСТОРЫ СУДАКА",
    difficultyActive: 1,
    price: "от 34 900 ₽",
    description: `Маршрут по Крыму: вершины, гроты, тропы и крепости, с проживанием в отелях. Походный опыт не требуется.`,
    places: [
      "гора Алчак",
      "гора Сындык-Кая",
      "Голицынская тропа",
      "пик Космос",
      "мыс Капчик",
      "грот Голицына",
      "завод шампанских вин",
      "хребет Эчки-Даг",
      "Лисья бухта",
      "хребет Токлук",
      "гора Манджил",
      "гора Куш-Кая",
      "Феодосия",
      "хребет Таракташ",
      "Голубиный грот",
      "Генуэзская крепость",
      "Краеведческий музей",
    ],
  },
  {
    image: { src: "./images/mexmay-zima.webp", alt: "mezmay.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "70 км (пешком)",
    duration: "7 дней",
    title: "ГОРНЫЙ ЛАГЕРЬ В МЕЗМАЕ (ЗИМНЯЯ ПРОГРАММА)",
    difficultyActive: 2,
    price: "от 36 900 ₽",
    description: `Зимний Мезмай: орлиные скалы, пещеры, ущелья и плато, комфортная погода для насыщенных прогулок.`,
    places: [
      "Орлиные скалы",
      "Азишская пещера",
      "Гуамское ущелье",
      "Курджипское ущелье",
      "Лунный водопад",
      "Каменный ручей",
      "Плато Лаго-Наки",
      "скала Полгоры",
      "гора Зауда",
    ],
  },
  {
    image: { src: "./images/adygeya-zima.webp", alt: "adygeya-zima.webp" },
    daysInfo: { start: "воскресенье", end: "суббота" },
    distance: "55 км (пешком)",
    duration: "7 дней",
    title: "ЗИМНЯЯ АДЫГЕЯ",
    difficultyActive: 1,
    price: "от 42 400 ₽",
    description: `Заснеженные ландшафты, ледяные водопады и мистические пещеры. В финале — горячие источники Адыгеи.`,
    places: [
      "озеро Красное",
      "Кудыкина гора",
      "смотровая Танковый люк",
      "скала Молоток",
      "водопады Руфабго",
      "пещера Сквозная (Кошачий глаз)",
      "Азишская пещера",
      "плато Утюг",
      "Солнечный грот",
      "ущелье Мишоко",
      "Гранитный каньон",
      "смотровые площадки горы Трезубец",
      "Хаджохская теснина",
    ],
  },
];

let routeIndex = 0;

const createRoute = () => {
  routesData.forEach((item) => {
    const route = document.createElement("div");
    route.className = "routes__slide";

    route.innerHTML = `
      <img src="${item.image.src}" alt="${
      item.image.alt
    }" class="route__image" />
 <div class="routes__content">
        <ul class="route__info list">
        <li class="route__info-item">
          <p class="route__info-text">${item.daysInfo.start}</p>
          <img src="./images/arrow.svg" alt="Стрелка вправо" class="route__icon" />
          <p class="route__info-text">${item.daysInfo.end}</p>
        </li>
        <li class="route__info-item">
          <img src="./images/mark.svg" alt="Иконка метки" class="route__icon" />
          <p class="route__info-text">${item.distance}</p>
        </li>
        <li class="route__info-item">
          <img src="./images/date.svg" alt="иконка времени" class="routes__icon" />
          <p class="route__info-text">${item.duration}</p>
        </li>
      </ul>

      <h3 class="route__title title">${item.title}</h3>

      <div class="route__difficulty">
        <p class="route__difficulty-text">сложность</p>
        <ul class="route__difficulty-list list">
          ${Array.from(
            { length: 5 },
            (_, i) =>
              `<li class="route__difficulty-item ${
                i < item.difficultyActive ? "route__difficulty-item_active" : ""
              }"></li>`
          ).join("")}
        </ul>
      </div>

      <div class="route__price">
        <span class="route__price-cost">стоимость</span>
        <span class="route__price-number">${item.price}</span>
      </div>

      <p class="route__description">${item.description}</p>

      <img src="${item.image.src}" alt="${
      item.image.alt
    }" class="route__image_adapt" />

      <ul class="route__places-list list">
        ${item.places
          .map(
            (place) => `
          <li class="route__places-item">
            <img src="./images/markOrange.svg" alt="иконка места" class="routes__icon" />
            <p class="route__place" itemprop="areaServed">${place}</p>
          </li>
        `
          )
          .join("")}
      </ul>
      </div>
    `;

    routesSlider.appendChild(route);
  });
};

createRoute();

const showRoute = () => {
  routesSlider.style.transform = `translateX(-${routeIndex * 100}%)`;
};

prevRoutes.addEventListener("click", () => {
  routeIndex--;
  if (routeIndex < 0) routeIndex = routesData.length - 1;

  showRoute();
});

nextRoutes.addEventListener("click", () => {
  routeIndex++;
  if (routeIndex >= routesData.length) routeIndex = 0;
  showRoute();
});

/*  
    ----------------------------------
    5. Questions
    ----------------------------------
*/

const questions = document.querySelectorAll(".questions__item");

questions.forEach((item) => {
  item.addEventListener("click", () => {
    const icon = item.querySelector(".questions__icon");
    item.classList.toggle("questions__item_active");
    icon.textContent = item.classList.contains("questions__item_active")
      ? "−"
      : "+";
  });
});
