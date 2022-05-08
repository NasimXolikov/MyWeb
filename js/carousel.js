$(document).ready(function() {


    let carouselSlidersImg = ['img/first.jpg', 'img/second.jpg', 'img/1.png', 'img/third.jpg', 'img/fourth.jpg'];

    let itemWrapperFirst = document.querySelector('.slier__wrapper_first');
    let itemWrapperSecond = document.querySelector('.slier__wrapper_second');


    function createCarouselItems(someImgArr) {
        let counter = 1;
        for (i = 0; i < someImgArr.length; i++, counter++) {
            if (counter % 2 == 0) {
                itemWrapperFirst.innerHTML += `
                <div class="swiper-slide slider__item">
                    <div class="slider__img" data-numerationOfsliders=${counter} data-swiper-parallax="20%" style="background-image: url(${someImgArr[i]}"> </div>
                </div>
                `;
            } else {
                itemWrapperFirst.innerHTML += `
                <div class="swiper-slide slider__item">
                    <div class="slider__img" data-numerationOfsliders=${counter} data-swiper-parallax="30%" style="background-image: url(${someImgArr[i]}"> </div>
                </div>
                `;
            }

        }

        for (i = 0; i < someImgArr.length; i++) {
            itemWrapperSecond.innerHTML += `
            <div class="swiper-slide slider__item">
                <div class="slider__img" data-swiper-parallax="30%" style="background-image: url(${someImgArr[i]}"> </div>
            </div>
            `;
        }

    }

    createCarouselItems(carouselSlidersImg)
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
        item.addEventListener('click', (event) => {
            let attr;
            if (item.classList.contains('opened')) {
                item.classList.remove('opened')
                $('.slider__img').css({
                    'left': '-25%',
                })


                ;
            } else {
                item.classList.add(`opened`)
                $('.slider__img').css({
                    'left': '0%',
                    'width': '100%',
                });



            }

        })
    );

    let desc = document.querySelector('.description');
    swiper.on('slideChange', e => {
        swiper.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
    });



});