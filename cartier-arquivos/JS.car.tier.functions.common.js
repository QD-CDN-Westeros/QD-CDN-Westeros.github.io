var Common = {
    run: function() {},
    init: function() {
        Common.applyImageLoad();
        Common.applyAmazingMenu();
        Common.applyAmazingMenuMobile();
        Common.smartAutoComplete();
        Common.searchFloatTrigger();
        Common.applyCarouselShelf();
        Common.QDNews();
        Common.setDataScrollToggle();
        Common.smartCartTom();
        Common.topBannerCookie();
        Common.vtexBindQuickViewDestroy();
    },
    ready: function() {},
    ajaxStop: function() {},
    windowOnload: function() {},
    vtexBindQuickViewDestroy: function() {
        window.bindQuickView = function() {};
    },
    applyImageLoad: function () {
        var size= '590';

        // if ($(document.body).is('.hotsite'))
        //     size= '240';

        $('.QD__c--shelf, .QDs__result').QD_smartImageLoad({
            sizes: {
                width: size,
                height: size
            }
        });
    },    
    smartCartTom: function () {
        var wrapper = $('.smart-cart-qd-v4-wrapper');
        var scWrapper = wrapper.find(".qd-sc-content");

        // Abrir carrinho
        $('.header-qd-v1-cart-link-trigger').click(function(e) {
            e.preventDefault();
            $(document.body).addClass('sc-qd-cart-opened');
        });

        // Fechar carrinho
        wrapper.click(function(e){
            if($(e.target).is(this)){
                $(document.body).removeClass('sc-qd-cart-opened qd-ddc-product-add-time-v2');
            }
        });

        $.QD_smartCart({
            selector: scWrapper,
            dropDown: {
                updateOnlyHover: false,
                texts: {
                    // Mensagem que é exibida quando o carrinho esta vazio
                    cartTotal: '<div class="col-xs-12"><span>SubTotal: #value</span></div>',
                    linkCart: "Finalizar Compra"
                },
                enableNotification: true,
                clearNotification: true,
                thumbSize: {w: 150, h: 150},
                callback: function() {
                    // Fechar o carrinho
                    wrapper.find('.qd_ddc_lightBoxClose, .qd_ddc_continueShopping').click(function(){
                        $(document.body).removeClass('sc-qd-cart-opened qd-ddc-product-add-time-v2');
                    });
                },
                callbackProductsList: function() {
                    // Ajustando os wrappers dos itens do carrinho
                    scWrapper.find('.qd-ddc-prodRow').each(function() {
                        var $t = $(this);
                        $t.find('.qd-ddc-prodImg').wrap('<div class="col-xs-4"></div>');
                        $t.find('.qd-ddc-prodName, .qd-ddc-prodPrice, .qd-ddc-prodQtt').wrapAll('<div class="col-xs-7"></div>');
                        $t.find('.qd-ddc-prodRemove').wrapAll('<div class="col-xs-1"></div>');
                        $t.find('.qd-ddc-prodPrice').before('<div class="qd-ddc-prodUnid"> Quanti.: ' + $t.find('input.qd-ddc-quantity').val() + '</div>');
                    });
                }
            }
        });
    },
    smartAutoComplete: function () {
        // Desktop
        $('.QDh__navigation .fulltext-search-box').QD_smartAutoComplete({
            jqueryUI: {
                appendTo: '.QDh__navigation .QDh__n--search'
            }
        });

        // Mobile
        $('.QDh__floatBar .fulltext-search-box').QD_smartAutoComplete({
            jqueryUI: {
                appendTo: '.QDh__floatBar .QDh__n--search fieldset'
            }
        });

        // Busca Vazia
        $('.QDs_error .fulltext-search-box').QD_smartAutoComplete({
            jqueryUI: {
                appendTo: '.QDs_error fieldset'
            }
        });
    },
    QDNews:function(){
        $('.QDf__n--form').QD_news({
            defaultEmail: "Seu e-mail"
        });
    },
    applyAmazingMenu: function () {
        $('.QDh__amazingMenu').QD_amazingMenu({
            callback: function() {
                $('ul.qd-am-dropdown-menu').each(function() {
                    $(this).wrapInner('<li class="container"><ul></ul></li>');
                });

                $('.QDh__navigation + nav .QDh__amazingMenu > ul.qd-amazing-menu').addClass('container');
            }
        });
    },
    setDataScrollToggle: function () {
        $(document.body).attr('data-qd-scroll-limit', '100, 800, 1300');
    },
    applyAmazingMenuMobile: function () {
        var wrapper = $('.QDh__amazingMenuMob');

        // Abrir Amazing Menu Mobile
        $('.QDh__fb--amTrigger').click(function (e) {
            e.preventDefault();
            wrapper.fadeIn();
            $(document.body).addClass('am-qd-menu-opened');
        });

        // Fechar Amazing Menu Mobile
        wrapper.click(function(e){
            if($(e.target).is(this)){
                wrapper.fadeOut();
                $(document.body).removeClass('am-qd-menu-opened');
            }
        });

        wrapper.QD_amazingMenu({
            callback: function() {
                // Fechar Amazing Menu Mobile
                wrapper.find('.QDh__amm--close').click(function(){
                    wrapper.fadeOut();
                    $(document.body).removeClass('am-qd-menu-opened');
                });

                // Abrir e Fechar dos Níveis do Menu
                var openM = $('<span class="qd-am-dropdown-trigger"></span>');
                openM.appendTo('.qd-am-has-ul');

                $('.qd-am-dropdown-trigger').click(function () {
                    var $t = $(this);
                    $t.toggleClass('qd-am-active');
                    $t.parent('.qd-am-dropdown').toggleClass('qd-am-sub-open');
                    $t.prev('ul.qd-am-level-2').slideToggle();

                    $(document.body).toggleClass('am-qd-dropdown-opened');
                });
            }
        });
    },
    searchFloatTrigger: function() {
        $('.QDh__a--search').click(function(e) {
            e.preventDefault();
            $('.QDh__n--search').toggleClass('open');
        });
    },
    applyCarouselShelf: function () {
        if ($(document.body).is('.hotsite'))
            return false;

        var wrapper = $('.QD__c--shelf .prateleira').not('.slick-initialized');

        if (!wrapper.length)
            return false;

        wrapper.has('h2').each(function () {
            var $t = $(this);
            $t.find('h2').insertBefore($t);
        });


        wrapper.slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            draggable: false,
            speed: 700,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },

                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    },
    topBannerCookie: function () {
        if ($.cookie("QD-topbar") != 1 || !$.cookie("QD-topbar")) {
            $('.QDh__messageBar').show();
        }
        
        $('.QDh__mb--close').click(function(){
            $.cookie("QD-topbar", 1, {expires: 7, path: "/"});
            $(this).closest('.QDh__messageBar').slideToggle();
        });
    }
};