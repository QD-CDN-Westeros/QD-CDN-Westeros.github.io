// qd-include ../qd-quatro-lib-plugins/String Extender/StringExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Array Extender/ArrayExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Tabs/qd-smartTabs.min.js

/**Funções base */
try {
  /* COMMON */
  // qd-include ./web/JS/components/JS.irn.lim.functions.common.js
  /* HOME */
  // qd-include ./web/JS/components/JS.irn.lim.functions.home.js
  /* SEARCH */
  // qd-include ./web/JS/components/JS.irn.lim.functions.search.js
  /* PRODUCT */
  // qd-include ./web/JS/components/JS.irn.lim.functions.product.js
  /* LIST */
  // qd-include ./web/JS/components/JS.irn.lim.functions.list.js
  /* INSTITUCIONAL */
  // qd-include ./web/JS/components/JS.irn.lim.functions.institucional.js
  /* ORDERS */
  // qd-include ./web/JS/components/JS.irn.lim.functions.orders.js
  /* ACCOUNT */
  // qd-include ./web/JS/components/JS.irn.lim.functions.account.js
  /* WISHLIST */
  // qd-include ./web/JS/components/JS.irn.lim.functions.wishlist.js
  /* HOTSITE */
  // qd-include ./web/JS/components/JS.irn.lim.functions.hotsite.js
} catch (e) {
  typeof console !== 'undefined' &&
    typeof console.error === 'function' &&
    console.error('Houve um erro nos objetos. Detalhes: ' + e.message);
}

try {
  (function () {
    var body, ajaxStop, windowLoad;

    windowLoad = function () {
      Common.windowOnload();
      if (body.is('.home')) Home.windowOnload();
      else if (body.is('.resultado-busca, .departamento, .categoria, .seller'))
        Search.windowOnload();
      else if (body.is('.produto')) Product.windowOnload();
      else if (body.is('.listas, .giftlist')) List.windowOnload();
      else if (body.is('.institucional')) Institutional.windowOnload();
      else if (body.is('.orders')) Orders.windowOnload();
      else if (body.is('.wishlist')) Wishlist.windowOnload();
      else if (body.is('.hotsite')) Hotsite.windowOnload();
    };

    ajaxStop = function () {
      Common.ajaxStop();
      if (body.is('.home')) Home.ajaxStop();
      else if (body.is('.resultado-busca, .departamento, .categoria, .seller'))
        Search.ajaxStop();
      else if (body.is('.produto')) Product.ajaxStop();
      else if (body.is('.listas, .giftlist')) List.ajaxStop();
      else if (body.is('.institucional')) Institutional.ajaxStop();
      else if (body.is('.orders')) Orders.ajaxStop();
      else if (body.is('.wishlist')) Wishlist.ajaxStop();
      else if (body.is('.hotsite')) Hotsite.ajaxStop();
    };

    $(function () {
      body = $(document.body);
      Common.init();
      if (body.is('.home')) Home.init();
      else if (
        body.is('.resultado-busca, .departamento, .categoria, .seller')
      ) {
        Search.isSearch = $(document.body).is('.resultado-busca');
        Search.isDepartament = $(document.body).is('.departamento');
        Search.isCategory = $(document.body).is('.categoria');
        Search.init();
      } else if (body.is('.produto') || body.is('.Produto-Kit')) Product.init();
      else if (body.is('.listas, .giftlist')) List.init();
      else if (body.is('.institucional')) Institutional.init();
      else if (body.is('.orders')) Orders.init();
      else if (body.is('.wishlist')) Wishlist.init();
      else if (body.is('.hotsite')) Hotsite.init();

      $(document).ajaxStop(ajaxStop);
      $(window).load(windowLoad);
      body.addClass('jsFullLoaded');
      Common.ready();
    });

    Common.run();
    if (
      location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() ==
      '/p'
    )
      Product.run();
    else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
      List.run();
  })();
} catch (e) {
  typeof console !== 'undefined' &&
    typeof console.error === 'function' &&
    $('body').addClass('jsFullLoaded jsFullLoadedError') &&
    console.error(
      'Houve um erro ao iniciar os objetos. Detalhes: ' + e.message
    );
}
/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).load(function () {
  var a = $('.fb-comments');
  a.length &&
    a.attr(
      'data-href',
      document.location.href.split('#').shift().split('?').shift()
    );
  $('#fb-root').length || $('body').append('<div id="fb-root"></div>');
  if (!$('script#facebook-jssdk').length) {
    a = $("meta[property='fb:app_id']").attr('content') || !1;
    var b,
      c = document.getElementsByTagName('script')[0];
    document.getElementById('facebook-jssdk') ||
      ((b = document.createElement('script')),
      (b.id = 'facebook-jssdk'),
      (b.src =
        '//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3' +
        (a ? '&appId=' + a : '')),
      c.parentNode.insertBefore(b, c));
  }
  'undefined' !== typeof FB &&
    'undefined' !== typeof FB.XFBML &&
    FB.XFBML.parse();
});

// qd-include ../qd-quatro-lib-plugins/_assets/jquery.mask.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.validate.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.serializeObject.min.js

// qd-include ../qd-quatro-lib-plugins/_assets/jquery.slider-bar.js

// qd-include web/JS/JS.jquery.slick.min.js
// qd-include ../qd-amazing-menu/VTEX/QD_amazingMenu.js
// qd-include ../qd-smart-cart/QD_smartCart.min.js
// qd-include ../qd-product-thumbs/QD_productThumbs.min.js
// qd-include ../qd-quatro-lib-plugins/Scroll Toggle/QD_scrollToggle.min.js
// qd-include ../qd-quatro-lib-plugins/Mosaic Banners/QD_mosaicBanners.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Image Load/QD_smartImageLoad.min.js
// qd-include ../qd-quatro-lib-plugins/Newsletter/QD_news.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.cookie-1.4.1.js
// qd-include ../qd-quatro-lib-plugins/Smart Auto Complete/QD_smartAutoComplete.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Quantity/QD_smartQuantity.min.js
// qd-include ../VTEX-Count-Down/vtex-countdown.min.js
// qd-include ../qd-quatro-lib-plugins/Newsletter/QD_news.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Photo Carousel/QD_smartPhotoCarousel.min.js
