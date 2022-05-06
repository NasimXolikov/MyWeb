const swiper = new Swiper('.slider_main', {
    // Optional parameters
    freeMode: true,
    centeredSlides: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        600: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }

    }


});
const swiperBg = new Swiper('.slider_bg', {
    // Optional parameters
    centeredSlides: true,
    parallax: true,
    slidesPerView: 3.5,
    spaceBetween: 60


});
swiper.controller.control = swiperBg;

document.querySelectorAll('.slider__item').forEach(item =>
    item.addEventListener('click', event => item.classList.toggle('opened'))
);

let desc = document.querySelector('.description');
swiper.on('slideChange', e => {
    swiper.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})