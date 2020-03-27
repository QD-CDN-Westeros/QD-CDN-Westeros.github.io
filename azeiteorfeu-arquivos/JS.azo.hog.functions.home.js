var Home = {
    init: function () {
        Home.slick();
        Home.homeContentCarousel();
        Home.brandCarousel();
        Home.carouselShelfSpecial();
        Home.parallax();
        Home.videoPlay();
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    slick: function () {
        var wrapper = $('.slider-qd-v1-full');

        wrapper.slick({
            fade: true,
            cssEase: 'linear',
            infinite: true,
            speed: 500,
            dots: true,
            autoplay: true,
            autoplaySpeed: 7000,
            draggable: true
        });
    },
    homeContentCarousel: function () {
        $(".home-qd-v1-content-carousel").QD_amazingMenu();

        var wrapper = $('.home-qd-v1-content-carousel >ul');

        if (!wrapper.length)
            return;

        var options = {
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            draggable: true,
            speed: 1000,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        wrapper.slick($.extend(true, options, (function () {
            // Se estiver dentro do product-qd-v1-sku-selection-box, ele mostrará só 2 slides por vez, mantendo as outras propriedades da variável options
            if (wrapper.closest('.product-qd-v1-sku-selection-box').length)
                return {
                    slidesToShow: 3
                };
            return {};
        })()));

    },
    brandCarousel: function () {
        var wrapper = $('.brand-carousel-qd-v1-carousel');

        if (!wrapper.length)
            return false;

        wrapper.has('h2,h1,h3,h4').each(function () {
            var $t = $(this);
            $t.find('h2,h1,h3,h4').insertBefore($t);
        });

        wrapper.slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            speed: 700,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },

                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        infinite: true,
                        centerPadding: '100px'
                    }
                },

                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        infinite: true,
                        centerPadding: '80px'

                    }
                }
            ]
        });
    },
    parallax: function () {

    },
    videoPlay: function () {
        console.log('nsao sodaodi');
        
        var $div1 = $('.header-qd-v1');
        var $player = $('#mz-player');
        
        function collision($div1, $player) {
            var topoBanner = 150; /*margin topo em px*/

            var y1 = $div1.offset().top ;
            var h1 = $div1.outerHeight(true);
            var b1 = y1 + h1 + topoBanner; //100px de margin-top
            var y2 = $player.offset().top;
            var h2 = $player.outerHeight(true);
            var b2 = y2 + h2 + topoBanner; //100px de margin-top

            if (b1 < y2 || y1 > b2) return false;
            return true;
          }
      
      
      window.setInterval(function() {
        if(collision( $div1,  $player)){  
            $('#mz-player:not(.playing)')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            $player.addClass('playing');      
               
        } else {
            $player.removeClass('playing');
            $('#mz-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
      }, 200);

    },
    carouselShelfSpecial: function () {
        var wrapper = $('.categories-special-qd-v1-banners .prateleira').not('.slick-initialized');

        if (!wrapper.length)
            return false;

        wrapper.has('h2').each(function () {
            var $t = $(this);
            $t.find('h2').remove();
        });

        wrapper.slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            draggable: true,
            speed: 700,
            responsive: [

                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
};