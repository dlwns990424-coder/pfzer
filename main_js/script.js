const fadeScaleSwiper = (name) => {
  return new Swiper(name, {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    speed: 700,
    watchSlidesProgress: true,

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
const productSwiper = fadeScaleSwiper(".productSwiper");
