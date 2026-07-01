const fadeScaleSwiper = (name, options = {}) => {
  return new Swiper(name, {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    speed: 700,
    watchSlidesProgress: true,

    ...options,

    on: {
      progress(swiper) {
        swiper.slides.forEach((slide) => {
          const p = slide.progress;

          if (p > 0) {
            const scale = Math.max(0.65, 1 - p * 0.5);
            const opacity = Math.max(0, 1 - p);

            slide.style.transform = `scale(${scale})`;
            slide.style.opacity = opacity;
          } else {
            slide.style.transform = "scale(1)";
            slide.style.opacity = "1";
          }
        });
      },

      setTransition(swiper, duration) {
        swiper.slides.forEach((slide) => {
          slide.style.transition = `${duration}ms`;
        });
      },
    },
  });
};

const researchSwiper = fadeScaleSwiper(".researchSwiper");

const productSwiper = fadeScaleSwiper(".productSwiper", {
  slidesOffsetBefore: 200,
  slidesOffsetAfter: 200,
});

const newsSwiper = new Swiper(".newsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  slidesOffsetBefore: 200,
  slidesOffsetAfter: 200,
  grabCursor: true,
  speed: 700,
});
