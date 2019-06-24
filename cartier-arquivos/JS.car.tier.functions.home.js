var Home = {
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {
        Home.applySlickSlider();
        Home.applyMosaicBanners();
    },
    applySlickSlider: function () {
        var wrapper = $('.QDho__slider--full');
        
        wrapper.slick({
            dots: true,
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 7000,
            draggable: false
        });
    },
    applyMosaicBanners: function () {
        $('.QDho__b--mosaic > .box-banner').QD_mosaicBanners();
    }
};