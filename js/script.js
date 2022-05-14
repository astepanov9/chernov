
// Форма обратной связи input range
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

// Calculator
// Итог
function finishCalc () {
    let priceCalc = document.querySelector('.priceCalc');
    priceCalc.innerHTML = Number(priceVideo2.innerHTML) + Number(priceZvuk.innerHTML) + Number(priceVideo.innerHTML) + Number(pricePhoto.innerHTML) + Number(priceDj.innerHTML) + Number(priceVed.innerHTML) - Number(priceSale.innerHTML);
}
// Скидка
function finishSale () {
    let priceSale = document.querySelector('.priceSale');
    let sale = Number(priceVideo2.innerHTML) + Number(priceZvuk.innerHTML) + Number(priceVideo.innerHTML) + Number(pricePhoto.innerHTML) + Number(priceDj.innerHTML) + Number(priceVed.innerHTML);
    let saleCalc = (sale / 100) * 20;
    if (checkSale.checked) {
        priceSale.innerHTML = saleCalc;
    } else {
        priceSale.innerHTML = '0';
    }
}
// Ведущий
let rangeVed = document.querySelector('.rangeVed');
let hourVedNumb = document.querySelector('.hourVedNumb');
let priceVed = document.querySelector('.priceVed');
let hourVed = document.querySelector('.hourVed');
rangeVed.oninput = function () {
    hourVedNumb.innerHTML = rangeVed.value;
    priceVed.innerHTML = hourVedNumb.innerHTML * 5000;
    if (rangeVed.value < 2) {
        hourVed.innerHTML = 'час';
    } else if (rangeVed.value >= 2 && rangeVed.value <= 4) {
        hourVed.innerHTML = 'часа';
    } else {
        hourVed.innerHTML = 'часов';
    }
    finishSale();
    finishCalc();
}
// DJ
let rangeDj = document.querySelector('.rangeDj');
let hourDjNumb = document.querySelector('.hourDjNumb');
let priceDj = document.querySelector('.priceDj');
let hourDj = document.querySelector('.hourDj');
rangeDj.oninput = function () {
    hourDjNumb.innerHTML = rangeDj.value;
    priceDj.innerHTML = hourDjNumb.innerHTML * 3000;
    if (rangeDj.value < 2 && rangeDj.value > 0) {
        hourDj.innerHTML = 'час';
    } else if (rangeDj.value >= 2 && rangeDj.value <= 4) {
        hourDj.innerHTML = 'часа';
    } else {
        hourDj.innerHTML = 'часов';
    }
    finishSale();
    finishCalc();
}
// Фотограф
let rangePhoto = document.querySelector('.rangePhoto');
let hourPhotoNumb = document.querySelector('.hourPhotoNumb');
let pricePhoto = document.querySelector('.pricePhoto');
let hourPhoto = document.querySelector('.hourPhoto');
rangePhoto.oninput = function () {
    hourPhotoNumb.innerHTML = rangePhoto.value;
    pricePhoto.innerHTML = hourPhotoNumb.innerHTML * 5000;
    if (rangePhoto.value < 2 && rangePhoto.value > 0) {
        hourPhoto.innerHTML = 'час';
    } else if (rangePhoto.value >= 2 && rangePhoto.value <= 4) {
        hourPhoto.innerHTML = 'часа';
    } else {
        hourPhoto.innerHTML = 'часов';
    }
    finishSale();
    finishCalc();
}
// Видеограф
let rangeVideo = document.querySelector('.rangeVideo');
let hourVideoNumb = document.querySelector('.hourVideoNumb');
let priceVideo = document.querySelector('.priceVideo');
let hourVideo = document.querySelector('.hourVideo');
rangeVideo.oninput = function () {
    hourVideoNumb.innerHTML = rangeVideo.value;
    priceVideo.innerHTML = hourVideoNumb.innerHTML * 5000;
    if (rangeVideo.value < 2 && rangeVideo.value > 0) {
        hourVideo.innerHTML = 'час';
    } else if (rangeVideo.value >= 2 && rangeVideo.value <= 4) {
        hourVideo.innerHTML = 'часа';
    } else {
        hourVideo.innerHTML = 'часов';
    }
    finishSale();
    finishCalc();
}
// Звуковое оборудование
let checkZvuk = document.querySelector('.checkZvuk');
let priceZvuk = document.querySelector('.priceZvuk');
checkZvuk.oninput = function () {
    if (checkZvuk.checked) {
        priceZvuk.innerHTML = '6000';
    } else {
        priceZvuk.innerHTML = '0';
    }
    finishSale();
    finishCalc();
}
// Видео оборудование
let checkVideo = document.querySelector('.checkVideo');
let priceVideo2 = document.querySelector('.priceVideo2');
checkVideo.oninput = function () {
    if (checkVideo.checked) {
        priceVideo2.innerHTML = '5000';
    } else {
        priceVideo2.innerHTML = '0';
    }
    finishSale();
    finishCalc();
}
// Скидка
let checkSale = document.querySelector('.checkSale');
let priceSale = document.querySelector('.priceSale');
checkSale.oninput = function () {
    let sale = Number(priceVideo2.innerHTML) + Number(priceZvuk.innerHTML) + Number(priceVideo.innerHTML) + Number(pricePhoto.innerHTML) + Number(priceDj.innerHTML) + Number(priceVed.innerHTML);
    let saleCalc = (sale / 100) * 20;
    if (checkSale.checked) {
        priceSale.innerHTML = saleCalc;
    } else {
        priceSale.innerHTML = '0';
    }
    finishCalc();
}

// Портфолио
let pBtn = document.querySelector('.portfolio__button button');
let pBtnSpan = document.querySelector('.portfolio__button-span');
let p3 = document.querySelector('.portfolio-3');
let p4 = document.querySelector('.portfolio-4');
let p8 = document.querySelector('.portfolio-8');
let p9 = document.querySelector('.portfolio-9');
let p10 = document.querySelector('.portfolio-10');
let p13 = document.querySelector('.portfolio-13');
let p14 = document.querySelector('.portfolio-14');

pBtn.addEventListener('click', function () {
    p3.classList.toggle('none');
    p4.classList.toggle('none');
    p8.classList.toggle('none');
    p9.classList.toggle('none');
    p10.classList.toggle('none');
    p13.classList.toggle('none');
    p14.classList.toggle('none');
    if (pBtnSpan.innerHTML == 'Показать еще') {
        pBtnSpan.innerHTML = 'Скрыть';
    } else {
        pBtnSpan.innerHTML = 'Показать еще';
    }
});

// Всплывающие подсказки
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Parallax button
let bg = document.querySelector('.mouse-parallax-bg');
let bg1 = document.querySelector('.mouse-parallax-bg1');
let bg2 = document.querySelector('.mouse-parallax-bg2');
let bg3 = document.querySelector('.mouse-parallax-bg3');
let bg4 = document.querySelector('.mouse-parallax-bg4');
let bg5 = document.querySelector('.mouse-parallax-bg5');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
    bg1.style.transform = 'translate(+' + x * 90 + 'px, +' + y * 50 + 'px)';
    bg2.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 40 + 'px)';
    bg3.style.transform = 'translate(+' + x * 60 + 'px, +' + y * 20 + 'px)';
    bg4.style.transform = 'translate(+' + x * 80 + 'px, +' + y * 40 + 'px)';
    bg5.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 40 + 'px)';
});

// WOW js
new WOW().init();
 
$(document).ready(function () {
    // Карусель с отзывами
    $(".reviews-carousel").owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 20, //Отступ от картино если выводите больше 1
        dots: false,
        nav: false,
        autoplay: false, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            769: {
                items: 2
            },
            991: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // Go to the next item
    $('.customNextBtn').click(function () {
        $('.owl-carousel').trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $('.owl-carousel').trigger('prev.owl.carousel', [300]);
    })

    // Карусель с партнерами
    $(".partners-carousel").owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 20, //Отступ от картино если выводите больше 1
        dots: false,
        nav: false,
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 2000, //Время смены слайда
        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            767: {
                items: 4
            },
            991: {
                items: 5
            },
            1200: {
                items: 7
            }
        }
    });

    // Видео
    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")
    };

    var video = controls.video[0];

    controls.playpause.click(function () {
        if (video.paused) {
            video.play();
            playpause.style.opacity = '0.2';
            $("#playpause").addClass('stoppause');
        } else {
            video.pause();
            playpause.style.opacity = '1';
            $("#playpause").removeClass('stoppause');
        }
        $(this).toggleClass("paused");
    });

    //Отправка формы
    $("form").submit(function(event) {
        event.preventDefault();
        $('#thnx').fadeIn(100);
		$('#wrapper').fadeIn(100);
        $("#form")[0].reset();

        setTimeout(function() {
            $('#thnx').fadeOut(0);
            $('#wrapper').fadeOut(0);
            }, 3000);
	});

    // input date
    new AirDatepicker('.dataPick');

    // burger-menu
    $('.header__burger-logo').click(function () {      
        $('.header__burger').slideToggle(700, function () {
            $('.header__burger-logo').toggleClass('active-burger');
            $('.header__burger-logo').toggleClass('bounceIn');
        });
        $('.header__burger-menu ol li a').click(function () {
            $('.header__burger').css("display", "none");
            $('.header__burger-logo').removeClass('active-burger');
        });
    });

    // Header sticky
    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

        const header = $('.header__top'); // находим header и записываем в константу

        let prevScroll = $(window).scrollTop() // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

        $(window).scroll(() => { // при прокрутке страницы

            currentScroll = $(window).scrollTop() // узнаем на сколько прокрутили страницу

            const headerHidden = () => header.hasClass('header_hidden'); // узнаем скрыт header или нет

            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.addClass('header_hidden'); // то скрываем header
                header.removeClass('header-sticky');
                header.removeClass('header_hidden-two');
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.removeClass('header_hidden'); // то отображаем header
                header.addClass('header-sticky');
                $('.header__top-body').css("padding-bottom", "30px");
                header.removeClass('header_hidden-two');
            }
            if (currentScroll <= 0 ) {
                // header.removeClass('header_hidden');
                header.removeClass('header-sticky'); 
                header.addClass('header_hidden-two');
            }

            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

        })

    }

    onScrollHeader() // вызываем основную функцию onScrollHeader

    // Летающие точки вариант 1
    /* $('#Shocked').imgExplosion({
        start: 'left',
        angle: false,
        alternate: true,
        inPlace: false,
        rot: false,
        interval: 500,
        explode: false,
        num: 20000
    });
 */
    // Tooltips
    $('label[data-toggle="tooltip"]').tooltip({
        title : 'Открыть календарь',
        animated: 'fade',
        placement: 'top',
        html: true
    });
    
    // Google календарь
    $('label[data-toggle="tooltip"]').click(function(e){
        e.preventDefault();
        $('#wrapper-calendar').fadeIn(100);
        $('#googleCal').fadeIn(100);
    })
    $('#wrapper-calendar').click(function (){
        $('#wrapper-calendar').fadeOut(0);
        $('#googleCal').fadeOut(0);
    })

    // Портфолио before
    $( ".portfolio-1 img" ).before( "<div id='p1b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-2 img" ).before( "<div id='p2b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-3 img" ).before( "<div id='p3b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-4 img" ).before( "<div id='p4b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-5 img" ).before( "<div id='p5b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-6 img" ).before( "<div id='p6b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-7 img" ).before( "<div id='p7b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-8 img" ).before( "<div id='p8b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-9 img" ).before( "<div id='p9b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-10 img" ).before( "<div id='p10b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-11 img" ).before( "<div id='p11b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-12 img" ).before( "<div id='p12b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-13 img" ).before( "<div id='p13b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );
    $( ".portfolio-14 img" ).before( "<div id='p14b'><p id='ptitle'>Ведущий <br> IMOMS 1 игра</p><p id='pdesc'>26.09.2021</p></div>" );

});

