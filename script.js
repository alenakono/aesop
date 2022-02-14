function ibg() {
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0){
            $(this).css('background-image', 'url(" ' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();
new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    breakpoints: {
        900: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
        200: {
            slidesPerView: 1,
        },
    },
});


