var spacialSwiper = new Swiper(".special-swiper", {
    direction: "horizontal",
    spaceBetween: 26,
    slidesPerGroup: 1,
    loop: true,

    grid: {
      rows: 1,
    },

    navigation: {
      nextEl: ".special-button-next",
      prevEl: ".special-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
        },
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 1,
        grid: {
          rows: 1,
        },
      },
  },

  keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});