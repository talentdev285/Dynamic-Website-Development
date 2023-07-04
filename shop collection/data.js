const data = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/61evyk6INrL._AC_SX466_.jpg",
    title: "Amazfit Bip 3 Pro Smart Watch for Women",
    description:
      " Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/811A6SzPDyL._AC_UL600_FMwebp_QL65_.jpg",
    title: "Invicta Women's Pro Diver Collection Watch",
    description:
      "Stainless steel case 24.5mm diameter x 11mm thick; Black dial; Luminous hands and hour markers",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/61ng0LQ9bNL._AC_SS450_.jpg",
    title: "Timex Women's Easy Reader Leather Strap 30mm Watch",
    description:
      "Adjustable brown Croco 14 millimeter genuine leather strap fits up to 7.5-inch wrist circumference",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/61rRFmzxt2L._AC_SS450_.jpg",
    title:
      "Armitron Women's Rectangular Genuine Diamond Dial Bracelet Watch, 75/5769",
    description:
      "Scratch resistant mineral crystal lens and Japanese quartz movement.",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/615Md3ehEhL._AC_SX679_.jpg",
    title: "mazfit GTR Mini Smart Watch for Women",
    description:
      "Amazfit GTR Mini Smart Watch for Women,14-Day Battery Life, Sports Watch with GPS, 5 Satellite Positioning Systems, Fitness Health Tracker with Heart Rate, SPO₂ Monitoring,5 ATM Water Resistance,Pink",
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/61f4Ox9sojL._AC_SX679_.jpg",
    title: "Amazfit GTS 4 Smart Watch for Women",
    description:
      "Dual-Band GPS, Alexa Built-in, Bluetooth Calls, 150+ Sports Modes, Heart Rate SPO₂ Monitor, 1.75” AMOLED Display, Health Fitness Watch for Android iPhone, White",
  },
  {
    id: 7,
    image: "https://m.media-amazon.com/images/I/71hlIT17z5L._AC_SX679_.jpg",
    title: "Amazfit GTR 4 Smart Watch for Men Android iPhone",
    description:
      "Dual-Band GPS, Alexa Built-in, Bluetooth Calls, 150+ Sports Modes, 14-Day Battery Life, Heart Rate Blood Oxygen Monitor, 1.43”AMOLED Display,Brown",
  },
];

// Displayed the cards
const swiperWrapper = document.querySelector(".swiper-wrapper");
data.forEach((element) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h3");
  let desc = document.createElement("p");

  div.classList.add("swiper-slide");
  img.src = element.image;
  title.textContent = element.title;
  desc.textContent = element.description;

  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(desc);
  swiperWrapper.appendChild(div);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document.querySelector(".append-slide").addEventListener("click", function (e) {
  e.preventDefault();
  swiper.appendSlide(
    '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
  );
});
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });
