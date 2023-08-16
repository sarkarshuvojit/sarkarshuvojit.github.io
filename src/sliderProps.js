import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

export const portfolioSliderProps = {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
};
export const customersSliderProps = {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
};
