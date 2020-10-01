/* DESKTOP-TON - 01/10/2020 14:05:28 GMT */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

/**Funções base */
try {
	/* COMMON */
	var Common = {
  run: function () { },
  init: function () {
    Common.openSearchModal();
    Common.openModalLogin();
    Common.applyImageLoad();
    // Common.applyCoresPrateleira();
    Common.applyBackDrop();
    Common.applySlickSlider();
    Common.applyBoxBanner();
    Common.saveAmount();
    //Função de rolagem
    Common.setDataScrollToggle();

    // Common.vtexBindQuickViewDestroy();
    Common.applyAmazingMenu();
    Common.applyAmazingMenuMobile();
    // Common.qdOverlay();
    Common.smartCart();
    Common.openAmazingFooter();
    // Common.openSearchBox();
    Common.applySmartShootingStar();
    Common.checkLogin();
    Common.checkLoginMobile();
    Common.fixedBarActions();
    Common.specialAmazingMenu();
    Common.tipBar();
  },
  ready: function () {
    $('a[href="#"]').on("click", function (e) {
      e.preventDefault();
    });
  },
  openSearchModal: function () {
    var wrapper = $('.mz-modal-search');

    $('.mz-menu__link--search').click(function (e) {
      e.preventDefault();
      $(document.body).addClass('sm-open');
    });

    wrapper.click(function (e) {
      if ($(e.target).is(this)) {
        $(document.body).removeClass('sm-open');
      }
    });
  },
  openModalLogin: function () {
    var wrapper = $('.modal-login');

    $('.mz-menu__link--login').click(function (e) {
      e.preventDefault();
      $(document.body).addClass('sm-open-login');
    });

    wrapper.click(function (e) {
      if ($(e.target).is(this)) {
        $(document.body).removeClass('sm-open-login');
      }
    });
    $('.modal-container').click(function (e) {
      if (e.target !== (this))
        return;
      $(document.body).removeClass('sm-open-login');

    });
    var resize = function () {
      var left = $('.mz-menu__link--login').position().left - 196;
      $('.modal-login').attr('style', 'left:' + left + 'px;');
    }
    window.onresize = resize;
    window.onload = resize;
    window.addEventListener("wheel", function () {
      $(document.body).removeClass('sm-open-login');
    });
  },
  ajaxStop: function () {
    Common.applyImageLoad();
    // Common.openSearchBox();
    // Common.focusOnInputSearchMobile();
    Common.checkLogin();
    Common.applySmartShootingStar();
    Common.saveAmount();
    Common.applyCoresPrateleira();
    Common.fixSkuPopUp();
    Common.appendSkuPopUpCloseBtn();
  },
  windowOnload: function () {
    Common.setShippingProgressBar();
  },
  vtexBindQuickViewDestroy: function () {
    window.bindQuickView = function () { };
  },
  applyBackDrop: function () {
    var qdOverlayClass = "qd-cart-show qd-sn-on mz-sn-on mz-measure-guide-on";

    $(document.body).removeClass(qdOverlayClass);

    $(".mz-backdrop").click(function () {
      $(document.body).removeClass(qdOverlayClass);
    });
  },
  applyImageLoad: function () {
    $(".mz-search-result, .mz-shelf, .mz-amazing-menu").QD_smartImageLoad({
      sizes: {
        width: "275",
        height: "360",
      },
    });
    // Aplica Image Load no menu
    $(window).one("QuatroDigital.am.callback", function () {
      $(".mz-amazing-menu .qd-am-dropdown").one("mouseenter", function () {
        $(window).trigger("QD_SIL_individualChildRender", $(this));
      });
    });
  },
  applyBoxBanner: function () {
    var bannerSlide = $(".mz-box-banner--slide");

    if (!bannerSlide.length) return;

    bannerSlide
      .find(".box-banner")
      .wrapAll('<div class="mz-box-banner-wrapper"></div>');
  },
  saveAmount: function () {
    $(".mz-stamps__highlight-discount-percentage:not(.mz-on), .mz-product-summary__percent:not(.mz-on)")
      .addClass("mz-on")
      .each(function () {
        var $t = $(this);
        var text = $t.is('.mz-product-summary__percent') ? '%' : '% OFF';
        var negativeSymbol = $t.is('.mz-product-summary__percent') ? '-' : '';

        $t.text(negativeSymbol + ($t.text().trim().match(/[0-9]+/) || [""]).pop() + text);
      });
  },
  showWishesNumber: function (data) {
    var qtt = Object.keys(data).length;
    $("[data-wishlist-qtt]").attr("data-wishlist-qtt", qtt);
  },
  applySmartShootingStar: function () {
    $(".prateleira")
      .not(".qd-wishlist-started")
      .addClass("qd-wishlist-started")
      .QD_smartShootingStar({
        list: Common.showWishesNumber,
      });
  },
  applySlickSlider: function () {
    var wrapper = $(".mz-slider-js:visible");

    if (!wrapper.length) return;

    wrapper.slick({
      dots: true,
      fade: true,
      cssEase: "linear",
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 7000,
      draggable: false,
    });
    wrapper.each(function () {
      $(this).find(".slick-arrow").wrapAll('<div class="slick-nav" />');
    });
    wrapper.find("img").removeAttr("style");
  },
  applyAmazingMenu: function () {
    $(".mz-amazing-menu").QD_amazingMenu();
  },
  applyAmazingMenuMobile: function () {
    var wrapper = $('.mz-menu-mobile--amazing-menu');

    // Fechar Amazing Menu Mobile
    wrapper.click(function (e) {
      if ($(e.target).is(this)) {
        $(document.body).removeClass('am-qd-menu-opened');
      }
    });

    wrapper.QD_amazingMenu({
      callback: function () {
        // Abrir e Fechar dos Níveis do Menu
        var openM = $('<span class="qd-am-dropdown-trigger"><i class="fa icon-downarrows"></i></span>');
        openM.appendTo('.mz-amazing-menu-mobile .qd-am-has-ul');

        // Abrir e Fechar dos Níveis do Menu
        $('.qd-am-dropdown-trigger').click(function () {
          var $t = $(this);
          $t.toggleClass('qd-am-active');
          $t.prev('.qd-am-dropdown, ul.qd-am-level-2').slideToggle();

          $(document.body).toggleClass('am-qd-dropdown-opened');
        });
      }
    });
  },
  openAmazingFooter: function () {
    $(".mz-institucional-menu-footer>ul>li>*:not(ul), .mz-footer__title").click(function () {
      $(this)
        .next()
        .stop()
        .slideToggle(250)
        .prev()
        .toggleClass("active")
        .parent()
        .toggleClass("active");
    });
  },
  openSearchBox: function () {
    $(".mz-navigation-actions__search--btn")
      .off("click")
      .on("click", function (e) {
        e.preventDefault();

        $(".mz-navigation-actions__search").toggleClass("qd-on");

        $("#ftBox65eee4ef994c4d378e6d08578385cf4a").focus();
      });
  },
  focusOnInputSearchMobile: function () {
    $(".mz-fixed-bar__search").click(function (evt) {
      evt.preventDefault();
      $(document.body).toggleClass("qd-am-on");

      //MAKE FOCUS HERE
      $("#ftBox4fec277407c244afaea5748650d52317").focus().delay(2000);
    });
  },
  smartCart: function () {
    $(".mz-menu__item--cart, .mz-fixed-bar__link--cart").append(
      '<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>'
    );

    $(document.body).append(
      '<div class="smart-cart-qd-v2-wrapper"><div class="qd-sc-wrapper"></div></div>'
    );

    var wrapper = $(".qd-sc-wrapper");

    $.QD_smartCart({
      selector: wrapper,
      dropDown: {
        texts: {
          linkCart: "Finalizar Compra",
          cartTotal:
            '<span class="qd-infoTotalItems">Itens: #items</span><span class="qd-infoTotalValue">Total: #value</span>',
        },
        updateOnlyHover: false,
        smartCheckout: true,
        callback: function () {
          $(".qd-ddc-wrapper3").prepend(
            '<div class="qd-cartTitle"><h3>MINHA SACOLA</h3></div>',
            '<div class="mz-trocaGarantida"><span></span><h3>Produto Adicionado à Sacola!</h3></div>'
          );
          // $($('.qd-ddc-prodWrapper')[0]).append('<a href="/checkout" class="btn finish">Finalizar Compra</a>', '<button class="btn close">Continuar Comprando</button>');
          // $($('.qd-ddc-prodWrapper')[1]).append('<a href="/checkout" class="btn finish">Finalizar Compra</a>', '<button class="btn close">Continuar Comprando</button>');
          // $('body').addClass('visible');
          wrapper
            .find(".qd_ddc_continueShopping")
            .after(wrapper.find(".qd-ddc-viewCart"));
        },
        skuName: function (data) {
          return data.name + " - " + data.skuName.replace(data.name, "");
        },
        callbackProductsList: function () {
          wrapper.find(".qd-ddc-prodQtt").each(function () {
            var $t = $(this);
            $t.add($t.next(".qd-ddc-prodRemove")).wrapAll(
              '<div class="qd-ddc-prodAction"></div>'
            );
          });
          Common.setShippingProgressBar();
        },
      },
      buyButton: {
        buyButton: "body .mz-buy-button .buy-button",
      },
    });
    // wrapper.click(function () {
    //   $(this).fadeOut();
    //   $('.smart-cart-qd-v1-wrapper').fadeOut();
    //   $(body).removeClass('qd-cart-show')
    // });
    // Callback do Quick View
    window._QuatroDigital_prodBuyCallback = function (
      jqXHR,
      textStatus,
      prodLink,
      skus
    ) {
      $.fn.simpleCart(true);
      $(".shelf-qd-v1-buy-button-modal").modal("hide");
      $(window).trigger("QuatroDigital.qd_bb_prod_add", [
        new $(),
        skus[0] || 0,
      ]);
    };

    $(".mz-menu__item--cart, .mz-fixed-bar__link--cart").click(function (evt) {
      evt.preventDefault();
      $(document.body).toggleClass("qd-cart-show");

      wrapper.height($(window).height());
      wrapper
        .find(".qd-ddc-prodWrapper")
        .css("max-height", $(window).height() - 285);

      if (window.Tawk_API) window.Tawk_API.toggleVisibility();
    });

    $(".qd_ddc_lightBoxClose , .btn.close").click(function (evt) {
      $(document.body).removeClass(Common.qdOverlayClass);
      if (window.Tawk_API) window.Tawk_API.fadeOut();
    });

    $(".qd_ddc_continueShopping").click(function (evt) {
      $(document.body).removeClass(Common.qdOverlayClass);
      if (window.Tawk_API) window.Tawk_API.fadeOut();
    });
  },
  setShippingProgressBar: function () {
    try {
      if (!window.qd_ShippingTargetPrice || !window._QuatroDigital_DropDown.getOrderForm)
        return;

      var targetPrice = window.qd_ShippingTargetPrice;
      var wrapper = $(".qd-v1-shipping-progress-bar-cart");
      var currentPrice = window._QuatroDigital_DropDown.getOrderForm.value / 100;

      var percentage = (currentPrice / targetPrice) * 100;
      var difference = targetPrice - currentPrice;

      if (!wrapper.length)
        wrapper = $('<div class="qd-v1-shipping-progress-bar-cart"> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">  </div> </div><div class="progress-bar-text">Faltam só R$ ' + qd_number_format(difference, 2, ",", ".") + ' para seu <span>frete grátis!</span> </div><i class="fa fa-truck fa-flip-horizontal" aria-hidden="true"></i> </div>').prependTo(".qd-sc-wrapper .qd-ddc-info");

      wrapper.find('.progress-bar-text').html('Faltam só R$ ' + qd_number_format(difference, 2, ",", ".") + ' para seu <span>frete grátis!</span>');
      wrapper.find('.progress-bar').css('width', percentage + '%').attr('aria-valuenow', percentage);

      if (difference <= 0) {
        wrapper.remove();
        return;
      }
    } catch (e) {
      (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e));
    }

  },
  tipBar: function () {
    var wrapper = $('.mz-tipbar > ul');

    if (!wrapper.length)
      return;

    var options = {
      arrows: false,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      draggable: true,
      speed: 1000,
      responsive: [
        {
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
      // Se estiver dentro do mz-product-information, ele mostrará só 2 slides por vez, mantendo as outras propriedades da variável options
      if (wrapper.closest('.mz-product-information').length)
        return {
          slidesToShow: 2,
          slidesToScroll: 1,
        };
      return {};
    })()));
  },
  fixSkuPopUp: function () {

    $('.boxPopUp2-wrap').each(function () {
      if ($(this).find('.mzBoxPopupFooter').length) return;

      $(this).find('.vtexsc-skuProductPrice, .skuselector-price-range, .notifyme, .vtexsc-buttonWrap, .skuselector-warning')
        .wrapAll('<div class="mzBoxPopupFooter"/>');

      $(this).find('.skuSelectionWrapper').append($('.mzBoxPopupFooter'));
    })

  },
  appendSkuPopUpCloseBtn: function () {
    $('.mz-box-popup-close').remove();
    $('.boxPopUp2 .selectSkuTitle').append('<span class="mz-box-popup-close"><i class="icon-exes"></i></span>');

    $('.mz-box-popup-close').click(function () {
      $(window).trigger('vtex.modal.hide');
      return false;
    });
  },
  defaultCarroseulShelf: function (wrapper) {
    var target = wrapper === undefined
      ? $("main .prateleira:not(.slick-initialized)")
      : wrapper;

    if (!target.length) return;

    target.has("h2").each(function () {
      var $t = $(this);
      $t.find("h2").insertBefore($t);
    });

    target.each(function () {
      if ($(this).closest(".mz-product-accessories").length) return;

      $(this).slick({
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fas fa-angle-right" aria-hidden="true"></i></button>',
        arrows: true,
        autoplay: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        draggable: false,
        // centerMode: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      });
    });
  },
  setDataScrollToggle: function () {
    $(document.body).attr("data-qd-scroll-limit", "100, 800");
  },
  checkLogin: function () {
    // var wrapper = $(
    //   ".mz-menu__link--login"
    // );
    var urlLogin = "/login";
    $.qdAjax({
      url: "/no-cache/profileSystem/getProfile",
      dataType: "json",
      clearQueueDelay: null,
      success: function (data) {
        try {
          if (data.IsUserDefined) {
            var emailReceived = data.Email;
            var nameUser = emailReceived.match(/([^{0-9}|.|@|-]+)/).pop();
            wrapper.html(
              '<p class="logout"><i class="icon-user-11"></i><span>Olá</span> <span class="name-user">' +
              nameUser +
              '</span> <a id="logout" href="/no-cache/user/logout"> | Sair</a></p>'
            );
          } else {
            // wrapper.html(
            //   '<p class="welcome"><a id="login" href="' +
            //   urlLogin +
            //   '">login</a></p>'
            // );
            $(document.body).addClass("not-logged-user");
          }
        } catch (e) {
          if (
            typeof console !== "undefined" &&
            typeof console.info === "function"
          )
            console.info("Ops, algo saiu errado com o login.", e.message);
        }
      },
    });
  },
  checkLoginMobile: function () {
    var wrapper = $(
      ".mz-tipbar__mobile--link"
    );
    var urlLogin = "/login";
    $.qdAjax({
      url: "/no-cache/profileSystem/getProfile",
      dataType: "json",
      clearQueueDelay: null,
      success: function (data) {
        try {
          if (data.IsUserDefined) {
            var emailReceived = data.Email;
            var nameUser = emailReceived.match(/([^{0-9}|.|@|-]+)/).pop();
            wrapper.html(
              '<p class="logout"><i class="icon-user-11"></i><span>Olá</span> <span class="name-user">' +
              nameUser +
              '</span> <a id="logout" href="/no-cache/user/logout"> | Sair</a></p>' +
              '<span>Ganhe pontos e resgate prêmios!</span>'
            );
          } else {
            wrapper.html(
              '<p class="welcome"><a id="login" href="' +
              urlLogin +
              '">Cadastre-se</a></p>' +
              '<span>Ganhe pontos e resgate prêmios!</span>'
            );
            $(document.body).addClass("not-logged-user");
          }
        } catch (e) {
          if (
            typeof console !== "undefined" &&
            typeof console.info === "function"
          )
            console.info("Ops, algo saiu errado com o login.", e.message);
        }
      },
    });
  },

  fixedBarActions: function () {
    // Fechar Menu Mobile
    $('.mz-menu-mobile__close').click(function () {
      $(document.body).removeClass('am-qd-menu-opened mz-profile-menu-opened');
    });

    // Abrir Amazing Menu Mobile
    $('.mz-fixed-bar__link--categories').click(function (e) {
      e.preventDefault();
      $(document.body).addClass('am-qd-menu-opened');
    });

    // Ativar focus no input de busca
    $('.mz-fixed-bar__link--search').click(function (e) {
      e.preventDefault();
      $('.mz-search-box').fadeToggle();
      if ($('.mz-search-box').attr("style", "display: block;")) {
        $('.mz-header .fulltext-search-box').focus();
      }
    });

    // Abrir Menu Profile Mobile
    $('.mz-fixed-bar__link--account').click(function (e) {
      e.preventDefault();
      $(document.body).addClass('mz-profile-menu-opened');
    });
  },
  applyCoresPrateleira: function () {
    $('.prateleira').QD_coresPrateleira({
      // deixe isso como "false" caso as variações de SKU estejam no mesmo produto, ou seja não é um produto similar.
      checkDuplicateUri: false,
      groupSkuByDimension: true,
      checkIsAvaliable: true,
      groupSkuByDimension2: false,
      dimensions: ['Cor', 'COR'],
      minSkuQttShow: 0,
      thumbsQuantity: 4,
      imageSize: { width: 276, height: 362 }
    });
  },
  specialAmazingMenu: function () {
    var wrpSelector = 'ul.qd-amazing-menu .qd-am-has-ul';
    if (!$(wrpSelector).length)
      return;
    var wrapper = document.querySelectorAll(wrpSelector);
    // select each fathersItem
    $(wrapper).each(function () {
      // active the first item 
      this.addEventListener("mouseenter", function (event) {
        var father = event.target;
        //remove class
        $(father).find($('li strong.qd-am-level-2'), $('li .qd-am-level-2')).removeClass('active d-flex'); // grandchildItem
        //add class
        $(father).find($('li:first-child .qd-am-level-2')).addClass('d-flex'); // grandchildItem
        $(father).find($('li:first-child strong.qd-am-level-2')).addClass('active'); // grandchildItem
      });
      // change among items childItem
      var son = $(this).find($('li > strong'));
      $(son).each(function () {
        this.addEventListener("mouseenter", function (event) {
          //removing classes
          $(this).parent().parent().find('li .qd-am-level-2').removeClass('d-flex');//grandchildItem
          $(this).parent().parent().find($('li strong')).removeClass('active'); // grandchildItem
          //adding classes
          $(this).parent().find('> ul').addClass('d-flex');//grandchildItem
          $(this).addClass('active');
        });
      });
    });
  }
};


	/* HOME */
	var Home = {
  init: function () {
    Common.defaultCarroseulShelf();
    Home.newsletter();
  },
  ajaxStop: function () {
    Common.defaultCarroseulShelf();
  },
  windowOnload: function () {
  },
  newsletter: function () {

    // Opções do Plugin
    var options = {
      cookie: 'QdSn1', 			// Nome do Cookie
      cookieExpires: 30, 			// Expiração do Cookie tempo em dias
      cookiePath: '/', 			// Path do Cookie
      button: false, 				// Diz se vai ter um botão para chamar o modal na tela
      isOverflowHidden: true, 	// Diz se a tela vai ter overflow:hidden
      code: '',
      email: '',
      iframeCss: '{}',
      displayTimes: 2, 			// quantas vezes o popup será exibido até que o cookie diga para não exibir mais
      manual: false 				// Controla se o disparo será manual ou não
    }

    // Verifica se o valor do cookie é maior do que o número de vezes (displayTimes)
    var cookie = (parseInt($.cookie(options.cookie)) || 0); // Cookie
    if (cookie >= options.displayTimes)
      return;

    // if($('.qd-v1-modal-newsletter').length){
    // 	console.log('--------------------------------CARREGOU AQuI');
    // }

    /*
    PARA FUNCIONAR, DEVE-SE ADICIONAR O SUBTEMPLATE DE HTML DA NEWSLETTER
    NA PAGINA QUE DESEJA SE UTILIZAR A NEWSLETTER
    */

    // Modal
    var modal = $('.qd-v1-modal-newsletter');

    if (!$('.qd-v1-modal-newsletter').length)
      return;

    modal.addClass('in show').show();

    // Adiciona Body Class (Modal Aberto)
    $(document.body).addClass('modal-open');

    // Função de fechar o modal
    $('.qd-v1-modal-newsletter, .qd_news_success .qd_news_button').on('click', function (e) {
      if ($(e.target).is($(this))) {
        var currentCookie = (parseInt($.cookie(options.cookie)) || 0)
        $.cookie(options.cookie, (currentCookie + 1 || '0'), { expires: parseInt(options.cookieExpires), path: options.cookiePath });

        modal.removeClass('in show').hide();
        $(document.body).removeClass('modal-open');
      }
    });

    ///Envio do form
    $(function () {
      // Formulário
      var form = $('form');
      var entity = 'NL';
      var emailInput = form.find("[name=qd_email]");

      // Não alterar aqui
      form.validate({
        rules: {
          email: {
            email: true
          }
        },
        submitHandler: function (form) {
          var $form = $(form);
          if (!$form.valid()) return;
          var inputs = $form.find('[name]');
          emailInput = emailInput.filter(inputs);
          $form.addClass("qd-loading");
          var saveContact = function (userId) {
            $.ajax({
              url: "//api.ipify.org?format=jsonp",
              dataType: "jsonp",
              success: function (data) {
                sendData(data.ip);
              },
              error: function () {
                $.ajax({
                  url: "//www.telize.com/jsonip",
                  dataType: "jsonp",
                  success: function (data) {
                    sendData(data.ip);
                  },
                  error: function (data) {
                    sendData(null);
                  }
                });
              }
            });
            var formData = $form.serializeObject();
            var sendData = function (ip) {
              formData['userId'] = userId;
              formData['ip'] = ip;
              formData['id'] = (emailInput.val() || '').toLowerCase().replace(/[^a-z0-9]/ig, function (v) {
                return '-' + v.charCodeAt(0) + '-'
              });
              $.ajax({
                url: "/api/dataentities/"+ entity +"/documents",
                type: "PATCH",
                dataType: "json",
                headers: {
                  "Accept": "application/vnd.vtex.ds.v10+json",
                  "Content-Type": "application/json; charset=utf-8"
                },
                data: JSON.stringify(formData),
                success: function (data) {
                  $form.addClass("qd-form-success");
                  $form.trigger('QD.crmSuccess', [data]);
                },
                error: function (jqXHR) {
                  if (jqXHR.status == "0" || jqXHR.status == "304") {
                    alert("Este e-mail já está cadastrado na newsletter!");
                  } else {
                    alert("Desculpe, não foi possível enviar seu formulário!");
                  }
                },
                complete: function () {
                  $form.removeClass("qd-loading");
                }
              });
            }
          };
          $.ajax({
            url: "/api/dataentities/CL/search?_fields=id&email=" + (emailInput.val() || '---'),
            type: "GET",
            dataType: "json",
            headers: {
              Accept: "application/vnd.vtex.ds.v10+json"
            },
            success: function (data) {
              if (data.length) saveContact(data[0].id);
              else saveContact(null);
            },
            error: function () {
              saveContact(null);
            }
          });
          return false;
        },
        errorPlacement: function (error, element) { }
      });
    });

    // Adicionando o da entidade NL
    $(window).on('QD.crmSuccess', function (e, data) {
      $.cookie(options.cookie, options.displayTimes, { expires: parseInt(options.cookieExpires), path: options.cookiePath });
    });
  }
};

	/* SEARCH */
	var Search = {

  init: function () {
    // Search.setSubCategories();
    // Search.applySearchResult();
    // Search.openFiltersMenu();
    // Search.checkURLtoFindOrder();

    // Search.addOrderBySelect();
    Search.hideExtendedMenu();
    Search.removeSizeQtt();
    // Search.showNextProducts();
    // Search.searchResult();
    // Search.shelfLineFix();
    // Search.infinityScroll();
    Search.addFilterByButton();
    Search.openSearchNavigation();
    Search.adjustSearchTerms();
    Search.smartResearchInit();
    Search.callSliderFilterPrice();
  },
  ajaxStop: function () {
    Search.shelfLineFix();
    Search.checkURLtoFindOrder();
  },
  windowOnload: function () {
    // Search.setpageHeading();
  },
  shelfLineFix: function () {
    try {
      var exec = function () {
        var curTop;
        var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass('qd-fi-on');
        console.log(wrapper);
        var shelf = wrapper.children("ul").removeClass('qd-first-line');
        shelf.first().addClass("qd-first-line");

        var setFirst = function () {
          shelf.each(function () {
            var $t = $(this);

            if ($t.is(".qd-first-line")) {
              curTop = $t.offset().top;
              shelf = shelf.not($t);
              return;
            }

            var offsetTop = $t.offset().top;
            if (offsetTop >= curTop - 10 && offsetTop <= curTop + 10)
              shelf = shelf.not($t);
            else {
              $t.addClass("qd-first-line");
              return false;
            }
          });

          if (shelf.length)
            setFirst();
        };
        setFirst();
      };
      exec();

      // Olhando para o Smart Research
      if (!window.qd_shelf_line_fix_) {
        $(window).on("QuatroDigital.sr_shelfCallback", exec);
        window.qd_shelf_line_fix_ = true;
      }
      // Olhando tbm para o Infinity Scroll
      if (!window.qd_shelf_line_fix_is) {
        $(window).on("QuatroDigital.is_Callback", exec);
        window.qd_shelf_line_fix_is = true;
      }

      // Olhando para o evento window resize
      var resize = $._data(window).events.resize;
      var allowResize = true;
      if (resize)
        for (var i = 0; i < resize.length; i++) {
          if (resize[i].namespace == "qd") {
            allowResize = false;
            break;
          }
        }
      if (allowResize) {
        var timeOut = 0;
        $(window).on("resize.qd", function () {
          clearTimeout(timeOut);
          timeOut = setTimeout(function () {
            $(".qd-first-line").removeClass(".qd-first-line");
            exec();
          }, 20);
        });
      }
    }
    catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
  },
  hideExtendedMenu: function () {
    $(".mz-search-navigation ul").each(function () {
      var t, li, qtt, moreLink, moreLi, click, liHide;

      t = $(this);
      li = t.find(">li");
      qtt = 8;

      if (li.length <= qtt) return;

      liHide = li.filter(":gt(" + (qtt - 1) + ")").stop(true, true).hide();
      moreLink = $('<a class="mz-viewMoreMenu">Mostrar mais</a>');
      t.after(moreLink);
      moreLi = $('<li class="mz-viewMoreWrapper"><a class="mz-viewMoreMenu2">Mostrar mais filtros</a></li>');
      t.append(moreLi);

      click = function () {
        liHide.stop(true, true).slideToggle(0, function () {
          if (li.filter(":visible").length > qtt) {
            moreLink.addClass("minus").text("Mostrar menos filtros");
            moreLi.addClass("minus").find("a").text("Mostrar menos filtros");
          } else {
            moreLink.removeClass("minus").text("Mostrar mais filtros");
            moreLi.removeClass("minus").find("a").text("Mostrar mais filtros");
          }
        });
      };
      moreLi.bind("click.mz_viewMore", click);
      moreLink.bind("click.mz_viewMore", click);
    });

    var wrapper = $(".mz-search-navigation, .search-multiple-navigator");

    wrapper.find('h3, h4, h5').click(function (evt) {
      var $t = $(this);

      if ($(evt.target).is(wrapper.find('h3')) || $(evt.target).is(wrapper.find('h4')) || $(evt.target).is(wrapper.find('h5'))) {
        if (!$t.next('ul').find('li').length) {
          $t.addClass('empty');
        }

        $t.find("+ ul").stop(true, true).slideToggle(100, function () {
          $t.toggleClass('mz-search-active-menu');
        });
        $t.find("+ div").stop(true, true).slideToggle(100, function () {
          $t.toggleClass('mz-search-active-menu');
        });
      }
    });
  },
  removeSizeQtt: function () {
    $('ul.TAMANHO li a:not(.mz-viewMoreMenu2)').each(function () {
      var cleanText = $(this).text().split(" ")[0];
      $(this).text(cleanText);
    });

    $('h5.TAMANHO + ul, h5.HideTAMANHO + ul').show();
  },
  addOrderBySelect: function () {

    $('.mz-search__order-Filters a').click(function (e) {
      e.preventDefault();
      var $t = $(this);
      var value = $t.attr('data-order-parameter');
      location.search = (location.search.replace(/O=[^&]+/g, '') + '&' + value).replace('?&', '?').replace(/&{2,}/g, '&');
    });

    var orderBy = (location.search.match(/O=[^&]+/g, '') || ['']).pop();
    if (!orderBy.length)
      return;
  },
  checkURLtoFindOrder: function () {

    if (window.location.search.indexOf("OrderByReleaseDateDESC") != -1) {
      $('a.lancamentos:not(.active)').addClass('active');
    } else if (window.location.search.indexOf("OrderByTopSaleDESC") != -1) {
      $('a.maisvendidos:not(.active)').addClass('active');
    } else if (window.location.search.indexOf("OrderByPriceASC") != -1) {
      $('a.menorpreco:not(.active)').addClass('active');
    } else if (window.location.search.indexOf("OrderByPriceDESC") != -1) {
      $('a.maiorpreco:not(.active)').addClass('active');
    }
  },
  //mostra o tempo em que é feito a pesquisa
  setpageHeading: function () {
    var headingElement = $('.mz-search__result--title h2');
    var searchResult = $('.resultado-busca-termo .value').first().text();

    if (!$('h1').length)
      headingElement.replaceWith(function () {
        $t = $(this);
        return '<h1' + ($t.attr('class') ? ' class="' + $t.attr('class') + '"' : '') + '>' + $t.text() + '</h1>';
      });
  },
  searchResult: function () {
    //Abre o menu lateral
    $('.mz-search__navigation--trigger').click(function () {
      $('.mz-search__navigation .search-single-navigator').toggleClass("qd-sn-on");
    });

    //add o botão que fecha o menu
    $('.search-single-navigator').append('<span class="mz-search__navigation--close">X</span>');
    $('.search-single-navigator').prepend('<span class="mz-search__navigation--title">Filtrar Resultados</span>');
    $('.search-single-navigator').click(function () {
      $('.search-single-navigator').removeClass("qd-sn-on");
    });
  },
  adjustSearchTerms: function () {
    var $wrapper = $('<div class="resultInfoWrapper"></div>');
    var $resultInfo = $('.mz-search-result .main > *').not('.resultItemsWrapper, .resultItemsWrapper ~ *');

    $resultInfo.wrapAll($wrapper);
  },
  infinityScroll: function () {
    $(".prateleira[id*=ResultItems]").QD_infinityScroll();
  },
  addFilterByButton: function () {
    var target = $('.mz-search-result .sub:first');

    if (!target.length) return;

    var button = $('<button class="btnFilterBy">Filtrar por</button>');
    button.insertBefore(target);
  },
  openSearchNavigation: function () {
    $('.btnFilterBy , .mz-fixed-bar__item.filter').click(function () {
      $(document.body).toggleClass('mz-sn-on');
    });
  },
  smartResearchInit: function () {
    $('<label class="sr_mz-price-filter" title="Filtro de Preço" index="0" style="display: none;"><span class="sr_box"></span><input rel="fq=P:[0+TO+999]" class="multi-search-checkbox" type="checkbox" name="sr_mz-price-filter" value="[0+TO+999]">Filtro de Preço<span class="sr_box2"></span></label>').appendTo($(".search-qd-v1-sliderPrice"));

    $(".search-single-navigator input[type='checkbox'], .search-qd-v1-sliderPrice input[type='checkbox']").QD_SmartResearch({
      filterScrollTop: function (shelfOffset) {
        return (shelfOffset.top - 80);
      }
    });
    $('.search-single-navigator').css('display', 'block');
  },
  callSliderFilterPrice: function () {
    // SE NAO ENCONTRAR NENHUM PRECO NAO MONTA O PLUGIN SLIDER
    if (!$('.mz-search-navigation .filtro_faixa-de-preco').length)
      return;

    // Filters slide
    var filterPriceSlide = $('<div class="search-filters-qd-v1-price"></div>');
    var filterPrice = $('.mz-search-navigation input[rel*="fq=P:"]').last();
    var pricesInterval = (filterPrice.val() || '').match(/([0-9\.]+)[^0-9]+([0-9\.]+)/) || ['', ''];
    var maxPrice = Math.ceil(pricesInterval.pop() / 10) * 10;
    var minPrice = 0;
    var filterTitleMin = $('<span class="search-filters-qd-v1-title">R$ ' + minPrice + '</span>');
    var filterTitleMax = $('<span class="search-filters-qd-v1-title" id="search-filters-qd-v1-title-max">R$' + maxPrice + '</span>');
    var priceWrapper = $('.search-multiple-navigator .filtro_faixa-de-preco');
    var btnFilter = $('<a class="btn-filter" href="#">Filtrar</a>');
    var sliderWrapper = $('<div class="mz-slider-wrapper"></div>');
    var inputResearchWrapper = $(".search-qd-v1-sliderPrice input[type='checkbox']");
    priceWrapper.find('li').hide();
    priceWrapper.addClass('filtro_faixa-de-preco clearfix');
    priceWrapper.attr('data-qd-class', 'faixa-de-preco');
    var urlMatch = /\/de-(.)+\?/;

    filterPrice.parent().hide();
    filterPriceSlide.appendTo(priceWrapper).slider({
      range: true,
      min: minPrice,
      max: maxPrice,
      step: 10,
      values: [minPrice, maxPrice],
      slide: function (event, ui) {
        filterTitleMin.text("R$ " + ui.values[0] + ",00");
        filterTitleMax.text("R$ " + ui.values[1] + ",00");
      },
      change: function (event, ui) {
        var min = ui.values[0];
        var max = ui.values[1];

        var urlPrice = $('.filtro_faixa-de-preco li:first a').attr('href') ? $('.filtro_faixa-de-preco li:first a').attr('href').replace(urlMatch, '/de-' + ui.values[0] + '-a-' + ui.values[1] + '?') : '';

        btnFilter.attr('href', urlPrice);

        inputResearchWrapper.attr('data-sr-min', min);
        inputResearchWrapper.attr('data-sr-max', max);
      }
    }).slider("value", maxPrice);


    sliderWrapper.append(filterTitleMin, filterTitleMax, filterPriceSlide, btnFilter);
    sliderWrapper.insertAfter(priceWrapper.find('h5'));

    // filterPriceSlide.before(sliderWrapper)
    // filterPriceSlide.before(filterTitleMin);
    // filterPriceSlide.before(filterTitleMax);
    // filterPriceSlide.after(btnFilter);

    // Joga a funcionalidade na classe "QDs__sliderPrice", para seguir o grid corretamente
    var sliderBlock = $('.search-multiple-navigator').parent();
    // priceWrapper.appendTo(sliderBlock);
    // sliderBlockTitlePrices.insertBefore(filterPriceSlide);

    // btnFilter.appendTo(sliderBlock);

    btnFilter.click(function (e) {
      e.preventDefault();
      $('body').removeClass('qd-sn-on');


      var min = inputResearchWrapper.attr('data-sr-min');
      var max = inputResearchWrapper.attr('data-sr-max');

      inputResearchWrapper.prop('checked', false);
      inputResearchWrapper.attr("data-sr-exec-ajax", false);
      inputResearchWrapper.trigger('change.qd_sr_change');

      inputResearchWrapper.attr('rel', 'fq=P:[' + min + '+TO+' + max + ']');
      inputResearchWrapper.attr('value', '[' + min + '+TO+' + max + ']');
      inputResearchWrapper.prop('checked', true);
      inputResearchWrapper.attr("data-sr-exec-ajax", true);
      inputResearchWrapper.trigger('change.qd_sr_change');

      return false;
    });
  },
};


	/* PRODUCT */
	var Product = {
  run: function () { },
  init: function () {
    Product.setAvailableBodyClass();
    Product.infoTabs();
    Product.fixSkuInfo();
    Product.applyWishlist();
    Product.productThumbCarousel();

    Product.checkDescription();
    Product.checkSpecification();
    Product.openShipping();
    // Product.applyAffixSideProduct();
    Product.scrollToDescription();
    Product.scrollToBuyButton();
    Product.expandsDescription();
    Product.accessoriesFix();
    Product.accessoriesApplyCarousel();
    Product.specialBanner();
    Product.setAvailableQuantity();
    Product.measureGuide();
    Product.setAccordion();
    Product.setBuyUrl();
    Product.kitItemSelected();
    // Product.addThumbVideo();
    Common.defaultCarroseulShelf();
    Product.qdCallThumbVideo();
    Product.applyColorImages();
    Product.kitUnavailableCheck();
    Product.updatePrice();
    Product.videoThumbPosition();
    Product.labelOrder();
  },
  ajaxStop: function () {
    Product.dynamicDiscountFlag();
    Common.defaultCarroseulShelf();
    // Product.applyWishlist();

  },
  windowOnload: function () {
    Product.thumbSlick();
    Product.setPrice();
    Product.cepOnEnter();
  },
  setAvailableBodyClass: function () {
    function checkVisibleNotify(available) {
      if (available)
        $(document.body).addClass('qd-product-available').removeClass('qd-product-unavailable');
      else
        $(document.body).addClass('qd-product-unavailable').removeClass('qd-product-available');
    }

    $(document).on("skuSelected.vtex", function (e, id, sku) {
      checkVisibleNotify(sku.available);
    });

    checkVisibleNotify(skuJson.available);
  },
  kitUnavailableCheck: function () {
    $(".product-qd-v1-kit-item-row").each(function () {
      var $t = $(this);
      $t.find('input.notifyme-client-name').val('---');

      if (!$t.find(".product-qd-v1-price .skuBestPrice").text().length)
        $t.addClass("qd-item-unavailable d-none");
      else
        $t.removeClass("qd-item-unavailable  d-none");
    });
    // window.on('vtex.skuSelected', Product.kitUnavailableCheck());
  },
  setAvailableQuantity: function () {
    $(document).on("skuSelected.vtex", function (e, id, sku) {
      if (!!sku.available && sku.availablequantity <= 10) {
        var qtt = sku.availablequantity;
        var message = 'Resta' + (qtt > 1 ? 'm' : '') + ' apenas ' + qtt + ' unidade' + (qtt > 1 ? 's' : '');

        $('.mz-available-quantity').empty().html('<span><i class="icon-alert"></i>' + message + '</span>');
      }
    });
  },
  dynamicDiscountFlag: function () {
    var $de = $('.skuListPrice').first().text();
    if (!$de.length) return;

    $('.dynamic-discount-flag').remove();

    var $por = $('.skuBestPrice').first().text();
    var $porcentagemFinal;
    var $boxDynamicDiscountFlag = $('<div class="dynamic-discount-flag"></div>');
    var $highlightDiscount = $('<span class="product-highlight-discount"></span>');
    var $novoDe = $('<span class="produto-novo-de"></span>');
    var $productPrice = $('.productPrice').first();

    $boxDynamicDiscountFlag.appendTo($productPrice);
    $novoDe.appendTo($boxDynamicDiscountFlag);
    $highlightDiscount.appendTo($boxDynamicDiscountFlag);


    //---------REGEX PARA RETIRAR OS R$ DOS VALORES DE POR
    $de = $de.replace(/[R$ ]+/g, '');
    $de = $de.replace(/[,]+/g, '.');
    $de = parseFloat($de);

    $por = $por.replace(/[R$ ]+/g, '');
    $por = $por.replace(/[,]+/g, '.');
    $por = parseFloat($por);

    // console.log('POR: '+ $por);

    //---------REGEX PARA RETIRAR OS R$ DOS VALORES DE POR


    $porcentagemFinal = (100 - (($por * 100) / $de));
    // console.log('porcentagem: '+ parseInt($porcentagemFinal));

    $('.produto-novo-de').text($('.skuListPrice').first().text());
    $('.product-highlight-discount').text('' + Math.floor($porcentagemFinal) + '% OFF');

  },
  applyWishlist: function () {
    $('.mz-product__content').QD_smartShootingStar({
      "isProductPage": true,
      'list': Common.showWishesNumber
    });
  },
  updatePrice: function () {
    $(window).on('skuSelected.vtex QD_changeKitPrice', function () {
      var fullPrice = 0;
      $(".product-qd-v1-kit-item-row:not('.qd-state-not-selected, .qd-item-unavailable') a.buy-in-page-button").each(function () {
        var btn = $(this);
        var skus = window['skuJson_' + btn.attr('productindex')].skus
        var skuBestPrice;
        btnSku = btn.attr('href').match(/sku=(\d+)/i);
        if (btnSku) {
          for (k = 0; k < skus.length; k++) {
            if (skus[k].sku == btnSku[1]) {
              skuBestPrice = skus[k].bestPrice;
              break;
            }
          }
        }
        fullPrice += skuBestPrice || Product.skuAvailablePrice(window['skuJson_' + btn.attr('productindex')].skus);
      });
      $('.product-qd-kit-price span').text((fullPrice / 100).toFixed(2).toString().replace('.', ','));
      console.log('fullprice', fullPrice)
    });

    $(".product-qd-v1-kit-item-row:not('.qd-state-not-selected, .qd-item-unavailable') .kit-item-selects input").each(function () {
      $(this).on('click', function () {
        $(window).trigger('QD_changeKitPrice');
        // if ($(this).find('input').prop("checked", "checked")) {
        //   $(this).find('input').removeAttr("checked")
        // } else {
        //   $(this).find('input').prop("checked", "checked")
        // };
      });
    });



  },
  setPrice: function () {
    var fullPrice = 0;
    var i = 1;

    while (window['skuJson_' + i]) {
      var prod = window['skuJson_' + i];
      if (prod.available) {
        fullPrice += Product.skuAvailablePrice(prod.skus);
      }
      i++;
    }
    $('.product-qd-kit-price span').text((fullPrice / 100).toFixed(2).toString().replace('.', ','));

  },
  skuAvailablePrice: function (skus) {
    var ret = 0;
    for (j = 0; j < skus.length; j++) {
      if (skus[j].available) {
        ret = skus[j].bestPrice;
        break;
      }
    };
    return ret;
  },
  thumbSlick: function () {
    var wrapper = $('.mz-product__thumbs > div > div');
    if (!wrapper.length) {
      wrapper = $('.mz-product__thumbs');
    }
    $(wrapper).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      vertical: true
    });
  },
  productThumbCarouselKit: function () {
    var thumbs = $('.mz-product-image .thumbs li');
    var thumbcontainer = $('.mz-product__thumbs.thumbs');
    thumbcontainer.append(thumbs);

  },
  productThumbCarousel: function () {
    if ($('body.produto-Kit').length) {
      Product.productThumbCarouselKit();
      return;
    }
    var initialSku = (location.search.match(/idsku=([0-9]+)/i) || ['']).pop();
    // Verifica qual é o primeiro sku e coloca na variável initialSku para ser utilizada no plugin QD_smartPhotoCarousel
    if (!initialSku) {
      var color = $('li.item-dimension-Cor input[data-value]').first().attr('data-value');
      for (var k = 0; k < skuJson.skus.length; k++) {
        if (color == skuJson.skus[k].dimensions.COR && skuJson.skus[k].available) {
          initialSku = skuJson.skus[k].sku;
          break;
        }
      }
    }
    $('.mz-product__content').QD_smartPhotoCarousel({
      imageWrapper: '.mz-product-image',
      thumbsWrapper: '.mz-product__thumbs',
      sizes: {
        thumb: '88-106',
        image: '774-965',
        imagezoom: '1000-1312'
      },
      slickOptions: {
        images: {
          lazyLoad: 'ondemand',
          infinite: true,
          arrows: true,
        },
        thumbs: {
          vertical: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          focusOnSelect: true,
          responsive: [{
            breakpoint: 991,
            settings: {
              vertical: false,
              slidesToShow: 5,
              slidesToScroll: 1,
              arrows: true
            }
          }]
        }
      },
    }, initialSku); // Pega sku da url se houver [Cores Prateleira]

    // var initialColor = "";
    // for (var j = 0; j < skuJson.skus.length; j++) {
    //   if (skuJson.skus[j].sku == initialSku) {
    //     initialColor = skuJson.skus[j].dimensions.COR;
    //     break;
    //   }
    // }

    // if (initialColor)
    //   $('li.item-dimension-Cor input[data-value="' + initialColor + '"]').click();
    // else
    //   $('li.item-dimension-Cor input[data-value]').first().click();
  },
  checkDescription: function () {
    var wrapper = $(".mz-product-description");

    if (wrapper.find('.productDescription').text().trim().length <= 0) {
      $('.mz-product__description-link').addClass('d-none');
    }
  },
  checkSpecification: function () {
    var wrapper = $(".mz-product__specification");

    if (wrapper.find('#caracteristicas > *').text().trim().length <= 0) {
      wrapper.addClass('d-none');
    }
  },
  openShipping: function () {
    if (typeof window.ShippingValue === "function")
      window.ShippingValue();
  },
  // applyAffixSideProduct: function () {
  //   var imgBox = $('.MZfixed');
  //   var productInfo = $('.mz-product-information');

  //   if (!imgBox.length || !productInfo.length) return;

  //   if ($(window).width() >= 992 && productInfo.height() > imgBox.height()) {
  //     imgBox.QD_affix({
  //       topSpacing: 100,
  //       bottomSpacing: 1,
  //       bottomLimitSeletor: $('.mz-product-accessories'),
  //       css: {
  //         position: 'absolute',
  //         top: '0',
  //         left: '0',
  //         width: '100%',
  //         transition: 'all .2s',
  //         'margin-top': $('.mz-product__content').height() - 530 + 'px'
  //       }
  //     });

  //     $(window).resize(function () {
  //       imgBox.css('margin-top', $('.mz-product__content').height() - 530 + 'px');
  //     });
  //   }
  // },
  applyCarouselShelf: function () {
    var wrapper = $('.mz-product__related .prateleira').not('.slick-initialized');
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
      infinite: true,
      draggable: true,
      // centerPadding: '40px',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  },
  scrollToDescription: function () {
    $('.product-mz-v1-link-description').click(function (e) {
      e.preventDefault();

      $('html, body').stop().animate({
        'scrollTop': $('.product-mz-v1-description').offset().top - 100
      }, 900, 'swing');
    });
  },
  cepOnEnter: function () {
    $('#calculoFrete .contentWrapper:not(.qd-on)').addClass('qd-on').find('#txtCep').keypress(function (e) {
      var key = (e.keyCode ? e.keyCode : e.which);
      if (key == 13) {
        e.preventDefault();
        $('#btnFreteSimulacao').click();
      }
    });
  },
  scrollToBuyButton: function () {
    $('.mz-product-fixed-bar').click(function (e) {
      e.preventDefault();

      $('html, body').stop().animate({
        'scrollTop': $('#mz-product-information').offset().top - 75
      }, 900, 'swing');
    });
  },
  fixSkuInfo: function () {
    var sku_rich_selection = $('.mz-sku-rich-selection');

    if (!sku_rich_selection.length) return;

    // var measure_guide = sku_rich_selection.find('.mz-sku-rich-selection__measure-guide').detach();
    // var fitting_room = sku_rich_selection.find('.mz-sku-rich-selection__fitting-room').detach();

    // measure_guide.insertAfter($('li.specification:contains("TAMANHO")'));
    // $('mz-sku-rich-selection').append(fitting_room);
    // $('li.specification').append(measure_guide);
  },
  expandsDescription: function () {
    $('.mz-product__description-link a').on('click', function (e) {
      e.preventDefault();
      $(this).parent().toggleClass('active');
      $('.mz-product-description').stop().slideToggle();
    });
  },
  accessoriesFix: function () {
    $('fieldset >.buy-product-checkbox').parent().each(function () {
      var $t = $(this);
      $t.add($t.prev('ul')).wrapAll('<div class="accessories-qd-v1-item"/>');
    });
  },
  accessoriesApplyCarousel: function () {
    var item = $('.accessories-qd-v1-item');

    if (!item.length)
      return;

    item.wrapAll('<div class="accessories-qd-v1-carousel"></div>');

    var wrapper = $('.accessories-qd-v1-carousel');

    wrapper.slick({
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-angle-right" aria-hidden="true"></i></button>',
      arrows: true,
      autoplay: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      draggable: false,
      // centerMode: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  },
  specialBanner: function () {
    var container = $('.mz-special-banner__container');
    var viewMore = $('.mz-special-banner__view-more a');

    var maxHeight = 95;

    if (container.find('.mz-special-banner__content').height() < maxHeight) {
      container.removeClass('collapsed').addClass('non-collapsed');
      return;
    }

    var viewMoreText = viewMore.text();

    viewMore.on('click', function () {
      container.toggleClass('collapsed');

      var toogleText = container.hasClass('collapsed') ? viewMoreText : 'Ver Menos';

      $(this).text(toogleText);
    });
  },
  infoTabs: function () {
    var currentPage = window.location.href;
    var tabsLink = $('.mz-tabs__link');

    var productField = $('#caracteristicas .value-field.Tipo-de-Grade');

    if (!productField.length) return;

    var currentTab = $('<ul><li><div class="mz-tabs__item"><a href="' + currentPage + '" class="mz-tabs__link"><ul><li>' + productField.text() + '</li></ul></a></div></li></ul>');

    currentTab.addClass('active');

    $('.shelf-tabs h2').after(currentTab);

    if (!tabsLink.length) return;

    if (tabsLink.closest('ul').length <= 1) return;

    tabsLink.each(function (index, tabLink) {
      if (tabLink.href === currentPage) {
        $(tabLink).closest('ul').addClass('active');
      }
    })
  },
  measureGuide: function () {
    $('.mz-sku-rich-selection__measure-guide a').on('click', function () {
      $(document.body).addClass('mz-measure-guide-on');
    });

    $('.mz-measure-guide__close').on('click', function () {
      $(document.body).removeClass('mz-measure-guide-on');
    });
  },
  smartSkuColor: function () {
    if ($('.mz-colors').is(':empty'))
      return;

    var thumbCopy = $('.mz-product-image img').first().clone();
    var skuName = $('.productName');
    var skuLink = window.location.href;

    var currentSkuColor = $('<ul><li><div class="mz-colors__item"><a href="' + skuLink + '" class="mz-colors__link"><img src="' + thumbCopy.attr('src') + '" width="48" height="60" alt="' + skuName.text() + '"></a></div></li></ul>');
    currentSkuColor.addClass('active');

    $('.shelf-colors h2').after(currentSkuColor);
  },
  setAccordion: function () {
    $('.mz-product-information--accordionTitle').on('click', function () {
      $(this).toggleClass('active').siblings('.mz-product-information__accordion-content').slideToggle(200);
    });

    $('.name-field.Composicao,.name-field.Instrucao-de-Lavagem').on('click', function () {
      $(this).toggleClass('active').siblings('.value-field').slideToggle(200);
    });
  },
  qdCallThumbVideo: function () {

    if (!$('td.value-field.Video:first, td.value-field.URL-VIDEO:first').length)
      return;

    $('.product-qd-v1-call-video').removeClass('d-none');

    iframe = '<div class="embed-responsive embed-responsive-4by3"><iframe id="YTplayer" class="embed-responsive-item" src="' + $('td.value-field.Video:first, td.value-field.URL-VIDEO:first').text().replace('&feature=youtu.be', '').replace('youtu.be/', 'www.youtube.com/watch?v=').replace('?v=', '/').replace('watch', 'embed') + '?wmode=transparent&rel=0&enablejsapi=1&autoplay=0&mute=0"frameborder="0" allowfullscreen/></div>';
    videoUrl = $(iframe).find('#YTplayer').attr('src');

    $(window).on('QD_SPC_beforeImageSlick', function (e, wrapper) {
      $(wrapper).append($('<div>' + iframe + '</div>'));
    });

    // Exibe ou esconde botão para o vídeo
    $('.product-qd-v1-image').on('afterChange', function (e, slick, currentSlideIndex) {
      if (slick.slideCount == (currentSlideIndex + 1)) {
        // $('.product-qd-v1-call-video').hide();
        if (!$('#YTplayer').attr('src').length)
          $('#YTplayer').attr('src', videoUrl);
      }
      else {
        $('.product-qd-v1-call-video').show();
        $('#YTplayer').attr('src', '');
      }
    });

    $('.mz-product__video-link').on("click", function () {
      $('.mz-product__image.product-qd-v1-image .slick-slider').slick('slickGoTo', $('.slick-slide').index() - 1)
    });
  },
  applyColorImages: function () {
    //set image size
    if (width == undefined)
      var width = 40;
    if (height == undefined)
      var height = 40;

    //check if the page is product or kit
    if ($('body.produto-Kit').length) {
      for (i = 1; i < 10; i++) {
        try {
          fillSkus(window['skuJson_' + i].skus, i - 1)
        } catch (e) {
          return;
        }
      }
    }
    else {
      fillSkus(skuJson.skus)
    }


    function fillSkus(skusArray, kit) {
      var tempTarget = {};
      var regex = /(?<=\-)(.*)(?=\/)/gm;
      // Cria objeto com todas as opções de cores ex: nome-da-cor:[link,link],
      skusArray.forEach(function (sku) {
        tempTarget[sku.dimensions.Cor] = tempTarget[sku.dimensions.Cor] ? tempTarget[sku.dimensions.Cor] : [];
        tempTarget[sku.dimensions.Cor].push(sku.image);
      });
      // preenche os labels de cada cor com a sua respectiva imagem 
      for (color in tempTarget) {
        getSkuImage(color, tempTarget[color]);
      }
      function getSkuImage(color, imgArray) {
        // color = nome da cor
        // imgArray[0] = link
        if (0 >= imgArray.length)//valida se existem links
          return '';
        if (kit == undefined) {
          var label = document.getElementsByTagName("label");
        }
        else {
          var row = $('.product-qd-v1-kit-item-row')[kit];
          var label = $(row).find("label");
        }
        var imgResize = imgArray[0].replace(regex, width + "-" + height)// troca o tamanho que veio no link para um tamanho "thumb"
        var img = '<img src="' + imgResize + '"alt="' + color + '"></img>';
        for (var i = 0; i < label.length; i++) {
          if (label[i].textContent == color) {
            //apaga o conteúdo dos labels e insere as imagens
            $(label[i]).empty();
            $(label[i]).append(img);
          }
        }
      }
    }
  },
  kitItemSelected: function () {
    $(".kit-item-selects").bind("click", function () {
      $(this).parents(".product-qd-v1-kit-item-row").toggleClass("qd-state-not-selected");
    });
  },
  setBuyUrl: function () {
    var btnKit = $('.product-qd-kit2-buy-button a');
    var label = $('label, input');

    btnKit.on('click', function () {
      change(true);
    });
    label.on('change', function () {
      change(false);
    });
    function change(buyButton) {

      btnKit.attr('href', '/checkout/cart/add?')
      $(".product-qd-v1-kit-item-row:not('.qd-state-not-selected, .qd-item-unavailable')").each(function () {
        var btn = $(this).find('.buy-in-page-button');
        if (btn.attr('href').indexOf('javascript:') >= 0) {
          btnKit.attr('href', btn.attr('href'));
          if (buyButton) {
            alert('Por favor, selecione as numerações e/ou cores nos modelos desejados.');

          }
          return false;
        }

        var param = (btn.attr('href') || '').split('?')[1].split("&");
        var itemUri = uri = [];
        for (var k = 0; k < param.length; k++) {
          if (param[k].search(/^(sku|qty|seller)/i) != 0)
            continue;
          itemUri.push(param[k]);
        }
        uri.push(itemUri.join("&"));

        btnKit.attr('href', btnKit.attr('href') + '&' + uri.join("&"));
      });
      if (btnKit.attr('href').indexOf('javascript:') < 0)
        btnKit.attr('href', btnKit.attr('href') + '&sc=' + jssalesChannel);
    }

  },
  videoThumbPosition: function () {
    var reportWindowSize = function () {
      if ($(window).width() < 992) {
        $('.mz-product-image').append($('.mz-product__thumbs-left'));
        $('.mz-product__thumbs-left').fadeIn();
      }
      else {
        $('.mz-product__image').before($('.mz-product__thumbs-left'));
      }
    }
    window.onresize = reportWindowSize;
    window.onload = reportWindowSize;
  },
  labelOrder: function () {
    //validador
    if (!$('label.dimension-Tamanho').length > 0)
      return;
    //Ordenador de tamanhos por letra
    var library = [
      'pp',
      'p',
      // 'p/m',
      'm',
      'g',
      'gg',
      // 'xp',
      // 'xm',
      // 'xg',
      // 'xgg',
      // 'xxg',
      // 'eg',
      // 'egg',
      // 'g/g',
      'g1',
      'g2',
      'g3',
      'g4',
      'g5',
      'g6'
    ]
    var elements = [];
    var parent = $('label.dimension-Tamanho').parent();
    for (i = 0; i < library.length; i++) {
      $('label.dimension-Tamanho').each(function () {
        if ($(this).html().toLowerCase() == library[i]) {
          var element = $(this).clone();
          elements.push(element);
          $(this).remove();
        }
      });
    }
    //ordenador de tamanho por numero 
    for (i = 0; i < 101; i++) {
      var selector = 'label.dimension-Tamanho.skuespec_' + i;
      var element = $(selector).clone();
      elements.push(element);
      $(selector).remove();
    }
    //reinderiza na tela
    for (i = 0; i < elements.length; i++) {
      $(parent).append($(elements[i]));
    }
    $('label.dimension-Tamanho').fadeIn();
  },
};

	/* LIST */
	var List = {
    run: function() {},
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};

	/* INSTITUCIONAL */
	var Institutional = {
  init: function () {
    Institutional.sidemenuToggle();
    Institutional.storeLocator();
  },
  ajaxStop: function () {},
  windowOnload: function () {},

  sidemenuToggle: function () {
    $(".mz-institucional__navigation--menu-mobile").click(function (ev) {
      ev.preventDefault();
      $(document.body).addClass("mz-sn-on");
    });
    $(".mz-institucional__navigation--close").click(function () {
      $(document.body).removeClass("mz-sn-on");
    });
  },
  storeLocator: function() {
    if(!$(document.body).is(".nossas-lojas"))
    return;
    
    var store = {};
    var storesFull = {};
    
    $.getScript('/arquivos/stores.js', function(a,b,c) {
        var store = window.qdStoreLocator_jsStores.store;
        
        if (!store)
        return;
        
        for (var i = 0; i < store.length; i++) {
            storesFull[store[i].state] = (storesFull[store[i].state] || {"title": store[i].state, "cities": {}});
            storesFull[store[i].state].cities[store[i].city] = (storesFull[store[i].state].cities[store[i].city] || {"title": store[i].city, "stores": {}});
            storesFull[store[i].state].cities[store[i].city].stores[store[i].title] = {"title": store[i].title, "data": store[i]};
        }
        
        populateSelect();
        observeSelectChange();
    });
    
    function populateSelect() {
        var wrapper = $('.stores-selection-wrapper');
        var wrapperStates = wrapper.find('.select-wrapper .states');
        var wrapperCities = wrapper.find('.select-wrapper .cities');
        var wrapperStores = wrapper.find('.select-wrapper .stores');
        
        statesHtml = '<option>Estado</option>';
        citiesHtml = '<option>Região</option>';
        storesHtml = '<option>Bairro</option>';
        
        for (var i in storesFull) {
            statesHtml += '<option>' + storesFull[i].title + '</option>';
            
            for (var j in storesFull[i].cities) {
                citiesHtml += '<option>' + storesFull[i].cities[j].title + '</option>';
                
                for (var k in storesFull[i].cities[j].stores) {
                    storesHtml += '<option>' + storesFull[i].cities[j].stores[k].title + '</option>';
                }
            }
        }
        wrapperStates.html(statesHtml);
    }
    
    function observeSelectChange () {
        var wrapperStates = $('.stores-selection-wrapper .select-wrapper .states');
        var wrapperCities = $('.stores-selection-wrapper .select-wrapper .cities');
        var wrapperStores = $('.stores-selection-wrapper .select-wrapper .stores');
        
        wrapperStates.on('change', function(e) {
            $('.stores-map-wrapper').hide();
            
            var $t = $(this);
            var $val = $t.val();
            
            if ($val == "Estado" || !storesFull[$val]) {
                wrapperCities.html('<option>Região</option>');
                wrapperStores.html('<option>Bairro</option>');
                return;
            }
            
            var citiesHtml = '<option>Região</option>';
            
            for (var i in storesFull[$val].cities)
            citiesHtml += '<option>' + storesFull[$val].cities[i].title + '</option>';
            
            wrapperCities.html(citiesHtml);
            wrapperStores.html('<option>Bairro</option>');
        });
        
        wrapperCities.on('change', function(e) {
            $('.stores-map-wrapper').hide();
            
            var $t = $(this);
            var $stateVal = wrapperStates.val();
            var $val = $t.val();
            
            if ($stateVal == "Estado"  || $val == "Região" || !storesFull[$stateVal] || !storesFull[$stateVal].cities[$val]) {
                wrapperStores.html('<option>Bairro</option>');
                return;
            }
            
            var storesHtml = '<option>Bairro</option>';
            
            for (var i in storesFull[$stateVal].cities[$val].stores)
            storesHtml += '<option>' + storesFull[$stateVal].cities[$val].stores[i].title + '</option>';
            
            wrapperStores.html(storesHtml);
        });
        
        wrapperStores.on('change', function(e) {
            var $t = $(this);
            var stateVal = wrapperStates.val();
            var cityVal = wrapperCities.val();
            var $val = $t.val();
            var wrapper = $('.stores-map-wrapper');
            
            if (stateVal == "Estado"  || cityVal == "Região" || $val == "Bairro" || !storesFull[stateVal] || !storesFull[stateVal].cities[cityVal] || !storesFull[stateVal].cities[cityVal].stores[$val]) {
                $('.stores-map-wrapper').hide();
                return;
            }
            
            var data = storesFull[stateVal].cities[cityVal].stores[$val].data;
            var info = "<h3>"+data.title+"</h3>";
            info += "<p>"+data.address+" - "+data.city+" / "+data.state+"</p>";
            info += "<p>CEP "+data.cep+" - Tel. "+data.phone+"</p>";
            info += (data.whatsApp.length ? "<p>WhatsApp: "+data.whatsApp+"</p>" : "");
            info += "<h3>Horário de funcionamento:</h3>";
            info += "<p>"+data.businessHours+"</p>";
            info += (data.openOnHolidays ? "" : "<p>Não abrimos nos Feriados.</p>");
            info += "<p>"+data.email+"</p>";
            
            wrapper.show();
            wrapper.find(".store-locator-map").html('<iframe src="'+data.mapURL+'" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>')
            wrapper.find(".store-locator-info").html(info);
        });
    }
  },
  storeLocatorFirstVersion: function() {
    if(!$(document.body).is(".qd-v1-store-locator"))
    return;
    
    var mapWrapper = $('.qd-map-wrapper');
    var fieldWrapper = $(".qd-map-field-wrapper");
    var height = $(window).height() - ($(".header-qd-v1-top-bar").outerHeight(true) + $(".header-qd-v1").outerHeight(true) + $(".footer-qd-v1-extra-info").outerHeight(true)) + 40;
    var lat = -15.0345487; 
    var long = -48.9344937;
    var zoomLevel = 5.75;
    
    if (height < 460) {
        height = 400;
        lat = -11.6348328;
        long = -54.1805679;
        zoomLevel = 4.25;
    }
    
    mapWrapper.height(height);
    
    var map = new google.maps.Map(mapWrapper[0], {
        center: new google.maps.LatLng(lat,long),
        zoom: zoomLevel,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });;
    
    var storeFeatures = new storeLocator.FeatureSet( new storeLocator.Feature('store-YES', 'Lojas') );
    
    var dataFeed = new storeLocator.StaticDataFeed();
    var isRequested = false;
    var store = {};
    $.ajax({
        url: '//qd-cdn.github.io/abrakadabra-arquivos/store.json', // se for utilizar, verificar CORS
        dataType: "json",
        crossDomain: true,
        success: function(json) {store = json;},
        complete:function() {isRequested = true; setStores();}
    });
    
    function setStores() {
        if(!isRequested)
        return;
        
        var stores = [];
        setStoresPopulate(stores, store.store || {});
        dataFeed.setStores(stores);
    };
    
    function setStoresPopulate(stores, data) {
        for(var i in data){
            var features = new storeLocator.FeatureSet;
            features.add(storeFeatures.getById('store-YES'));
            
            stores.push(new storeLocator.Store(i + data[i].title + data[i].latitude + data[i].longitude, new google.maps.LatLng(data[i].latitude, data[i].longitude), features, {
                title: data[i].title,
                address: data[i].address,
                phone: '<strong>Tel.: </strong>' + data[i].phone,
                web: '<a href="https://maps.google.com/?q=' + (data[i].addressType == "Revendedor" ?'Revendedor ' :'') + 'Abrakadabra@' + data[i].latitude + ',' + data[i].longitude + '" target="_blank">Ver no Google Maps</a>'
            }));
        }
    };
    
    var iconStore = new google.maps.MarkerImage('/arquivos/marker.png', new google.maps.Size(36,52), null, new google.maps.Point(52,52));
    
    var getView = function(geolocation) {
        var icon;
        var view = new storeLocator.View(map, dataFeed, {geolocation: geolocation, features: storeFeatures});
        
        view.createMarker = function(store) {
            return new google.maps.Marker({
                position: store.getLocation(),
                icon: iconStore
            });
        }
        
        return view;
    };
    
    var setControl = function(){
        var inputs = $(".storelocator-panel .feature-filter input");
        inputs.each(function(ndx) {
            var $t = $(this);
            var input = $('<input type="radio" name="qd-store-locator-type" id="qd-store-locator-type' + ndx + '" />');
            $t.after(input).parent().attr("for", "qd-store-locator-type" + ndx);
            input.change(function() {
                if(!$(this).is(":checked"))
                return;
                inputs.filter(":checked").click();
                $t.click();
            });
        });
    };
    
    new storeLocator.Panel(fieldWrapper[0], {view: getView(false)});
    setControl();
    $(".qd-map-geo").click(function() {
        fieldWrapper.empty();
        new storeLocator.Panel(fieldWrapper[0], {view: getView(true)});
        setControl();
    });
    
    var hideBtn = $('<span class="qd-map-hide-panel"><span class="arrow-l"></span><span class="arrow-r"></span></span>');
    var sidePanel = $(".qd-map-side-panel").append(hideBtn);
    hideBtn.click(function() {
        sidePanel.toggleClass("qd-map-hidden");
    });
}
};


	/* ORDERS */
	var Orders = {
    init: function() {
        Orders.bootstrapCssFix();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    bootstrapCssFix: function() {
        var styleSheets = document.styleSheets;
        for (var i = 0; i < styleSheets.length; i++) {
            if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1 || (styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css') > -1) {
                styleSheets[i].disabled = true;
            }
        }
    }
};

	/* ACCOUNT */
	var Account = {
  init: function () {
    Account.bootstrapCssFix();
    Account.applyWishlist();
  },
  ajaxStop: function () { },
  windowOnload: function () { },
  bootstrapCssFix: function () {
    var styleSheets = document.styleSheets;
    for (var i = 0; i < styleSheets.length; i++) {
      if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1 || (styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css') > -1) {
        styleSheets[i].disabled = true;
      }
    }
  },
  applyWishlist: function () {
    $(window).on("hashchange", displayWishlist);
    displayWishlist();

    function displayWishlist() {
      if (window.location.href.indexOf('wishlist') > -1) {
        $('.mz-account-IO').hide();
        $('.mz-wishlist').closest('.container').show();
        $('.orders-qd-page-tabs a').removeClass('active');
        $('.orders-qd-page-tabs a[href="#/wishlist"]').addClass('active');
        Wishlist.getWishlist();
      }
      else {
        $('.mz-wishlist').closest('.container').hide();
        $('.mz-account-IO').show();
        $('.orders-qd-page-tabs a').removeClass('active');
        $('.orders-qd-page-tabs a[href="#/orders"]').addClass('active');
      }
    }
  }
};

	/* WISHLIST */
	var Wishlist = {
  init: function () {
    Wishlist.bootstrapCssFix();
    Wishlist.getWishlist();
  },
  ajaxStop: function () {
    Wishlist.bootstrapCssFix();
  },
  windowOnload: function () { },
  bootstrapCssFix: function () {
    var styleSheets = document.styleSheets;
    for (var i = 0; i < styleSheets.length; i++) {
      if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1 ||
        (styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css') > -1) {
        styleSheets[i].disabled = true;
      }
    }
  },
  getWishlist: function () {

    $('.mz-shelf').not('.qd-wishlist-started').addClass('qd-wishlist-started').QD_smartShootingStar({
      "list": showWishlist
    });

    function showEmptyListMessage() {
      var wrapper = $('.mz-shelf');
      wrapper.addClass('ready qd-empty');

      return wrapper.append($('<h3>Lista Vazia</h3><p>Navegue pela loja e adicione produtos</p>'));
    }

    function showWishlist(data) {
      var shelfLayout = '3d86ce4d-9efe-4462-b338-9aee5f6c3d1a';
      var productsIds = Object.keys(data);
      var qteItems = productsIds.length;

      var wrapper = $('.mz-shelf');

      if (!qteItems) {
        showEmptyListMessage();
        return;
      }

      while (productsIds.length) {
        var pack = productsIds.splice(0, 50);
        var url = '/buscapagina?fq=productId:' + pack.join('&fq=productId:') + '&PS=50&sl=' + shelfLayout + '&cc=1&sm=0';
        getProductPage(url, activateRemoveButtons);
      }

      function getProductPage(url, callback) {
        $.ajax({
          url: url,
          success: function (html) {
            wrapper.append(html);
            callback();
          },
          error: function () {
            getProductPage(url, callback);
          }
        });
      }

      function activateRemoveButtons() {
        wrapper.addClass('ready');
        Common.applySmartShootingStar();

        $('a.qd-sss-wishlist-delete-button').on("click", function () {
          $(this).closest('ul').hide('slow', function () {
            var items = $(this).closest('.prateleira').find(' > ul:not(".deleted")').length;
            if (!items)
              showEmptyListMessage()
          });
          $(this).closest('ul').addClass('deleted');
        });

        // Common.applyImageLoad();
      }
    }
  }
};
}
catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message)); }

try {
	(function () {
		var body, ajaxStop, windowLoad;

		windowLoad = function () {
			Common.windowOnload();
			if (body.is(".home")) Home.windowOnload();
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.windowOnload();
			else if (body.is(".produto")) Product.windowOnload();
			else if (body.is(".listas, .giftlist")) List.windowOnload();
			else if (body.is(".institucional")) Institutional.windowOnload();
			else if (body.is(".account, .orders")) Wishlist.windowOnload();
			else if (body.is(".wishlist")) Wishlist.windowOnload();
		};

		ajaxStop = function () {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.ajaxStop();
			else if (body.is(".produto")) Product.ajaxStop();
			else if (body.is(".listas, .giftlist")) List.ajaxStop();
			else if (body.is(".institucional")) Institutional.ajaxStop();
			else if (body.is(".account, .orders")) Account.ajaxStop();
			else if (body.is(".wishlist")) Wishlist.ajaxStop();
		};

		$(function () {
			body = $(document.body);
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".resultado-busca, .departamento, .categoria")) {
				Search.isSearch = $(document.body).is('.resultado-busca');
				Search.isDepartament = $(document.body).is('.departamento');
				Search.isCategory = $(document.body).is('.categoria');
				Search.init();
			}
			else if (body.is(".produto")) Product.init();
			else if (body.is(".listas, .giftlist")) List.init();
			else if (body.is(".institucional")) Institutional.init();
			else if (body.is(".account, .orders")) Account.init();
			else if (body.is(".wishlist")) Wishlist.init();

			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
			Common.ready();
		});

		Common.run();
		if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			Product.run();
		else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			List.run();
	})();
}
catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass('jsFullLoaded jsFullLoadedError') && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message)); }

/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).load(function () {
	var a = $(".fb-comments"); a.length && a.attr("data-href", document.location.href.split("#").shift().split("?").shift()); $("#fb-root").length || $("body").append('<div id="fb-root"></div>'); if (!$("script#facebook-jssdk").length) {
		a = $("meta[property='fb:app_id']").attr("content") || !1; var b, c = document.getElementsByTagName("script")[0]; document.getElementById("facebook-jssdk") || (b = document.createElement("script"), b.id = "facebook-jssdk", b.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3" +
			(a ? "&appId=" + a : ""), c.parentNode.insertBefore(b, c))
	} "undefined" !== typeof FB && "undefined" !== typeof FB.XFBML && FB.XFBML.parse()
});


// jQuery Mask Plugin v1.6.5
// github.com/igorescobar/jQuery-Mask-Plugin
(function(g){"function"===typeof define&&define.amd?define(["jquery"],g):g(window.jQuery||window.Zepto)})(function(g){var z=function(b,f,d){var l=this,x,y;b=g(b);f="function"===typeof f?f(b.val(),void 0,b,d):f;l.init=function(){d=d||{};l.byPassKeys=[9,16,17,18,36,37,38,39,40,91];l.translation={0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}};l.translation=g.extend({},l.translation,d.translation);l=g.extend(!0,{},l,d);y=
c.getRegexMask();b.each(function(){!1!==d.maxlength&&b.attr("maxlength",f.length);d.placeholder&&b.attr("placeholder",d.placeholder);b.attr("autocomplete","off");c.destroyEvents();c.events();var a=c.getCaret();c.val(c.getMasked());c.setCaret(a+c.getMaskCharactersBeforeCount(a,!0))})};var c={getCaret:function(){var a;a=0;var e=b.get(0),c=document.selection,e=e.selectionStart;if(c&&!~navigator.appVersion.indexOf("MSIE 10"))a=c.createRange(),a.moveStart("character",b.is("input")?-b.val().length:-b.text().length),
a=a.text.length;else if(e||"0"===e)a=e;return a},setCaret:function(a){if(b.is(":focus")){var e;e=b.get(0);e.setSelectionRange?e.setSelectionRange(a,a):e.createTextRange&&(e=e.createTextRange(),e.collapse(!0),e.moveEnd("character",a),e.moveStart("character",a),e.select())}},events:function(){b.on("keydown.mask",function(){x=c.val()});b.on("keyup.mask",c.behaviour);b.on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)});b.on("change.mask",function(){b.data("changeCalled",
!0)});b.on("blur.mask",function(a){a=g(a.target);a.prop("defaultValue")!==a.val()&&(a.prop("defaultValue",a.val()),a.data("changeCalled")||a.trigger("change"));a.data("changeCalled",!1)});b.on("focusout.mask",function(){d.clearIfNotMatch&&!y.test(c.val())&&c.val("")})},getRegexMask:function(){var a=[],e,b,c,d,k;for(k in f)(e=l.translation[f[k]])?(b=e.pattern.toString().replace(/.{1}$|^.{1}/g,""),c=e.optional,(e=e.recursive)?(a.push(f[k]),d={digit:f[k],pattern:b}):a.push(c||e?b+"?":b)):a.push("\\"+
f[k]);a=a.join("");d&&(a=a.replace(RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(RegExp(d.digit,"g"),d.pattern));return RegExp(a)},destroyEvents:function(){b.off("keydown.mask keyup.mask paste.mask drop.mask change.mask blur.mask focusout.mask").removeData("changeCalled")},val:function(a){var e=b.is("input");return 0<arguments.length?e?b.val(a):b.text(a):e?b.val():b.text()},getMaskCharactersBeforeCount:function(a,e){for(var b=0,c=0,d=f.length;c<d&&c<a;c++)l.translation[f.charAt(c)]||(a=
e?a+1:a,b++);return b},determineCaretPos:function(a,b,d,h){return l.translation[f.charAt(Math.min(a-1,f.length-1))]?Math.min(a+d-b-h,d):c.determineCaretPos(a+1,b,d,h)},behaviour:function(a){a=a||window.event;var b=a.keyCode||a.which;if(-1===g.inArray(b,l.byPassKeys)){var d=c.getCaret(),f=c.val(),n=f.length,k=d<n,p=c.getMasked(),m=p.length,q=c.getMaskCharactersBeforeCount(m-1)-c.getMaskCharactersBeforeCount(n-1);p!==f&&c.val(p);!k||65===b&&a.ctrlKey||(8!==b&&46!==b&&(d=c.determineCaretPos(d,n,m,q)),
c.setCaret(d));return c.callbacks(a)}},getMasked:function(a){var b=[],g=c.val(),h=0,n=f.length,k=0,p=g.length,m=1,q="push",s=-1,r,u;d.reverse?(q="unshift",m=-1,r=0,h=n-1,k=p-1,u=function(){return-1<h&&-1<k}):(r=n-1,u=function(){return h<n&&k<p});for(;u();){var v=f.charAt(h),w=g.charAt(k),t=l.translation[v];if(t)w.match(t.pattern)?(b[q](w),t.recursive&&(-1===s?s=h:h===r&&(h=s-m),r===s&&(h-=m)),h+=m):t.optional&&(h+=m,k-=m),k+=m;else{if(!a)b[q](v);w===v&&(k+=m);h+=m}}a=f.charAt(r);n!==p+1||l.translation[a]||
b.push(a);return b.join("")},callbacks:function(a){var e=c.val(),g=c.val()!==x;if(!0===g&&"function"===typeof d.onChange)d.onChange(e,a,b,d);if(!0===g&&"function"===typeof d.onKeyPress)d.onKeyPress(e,a,b,d);if("function"===typeof d.onComplete&&e.length===f.length)d.onComplete(e,a,b,d)}};l.remove=function(){var a=c.getCaret(),b=c.getMaskCharactersBeforeCount(a);c.destroyEvents();c.val(l.getCleanVal()).removeAttr("maxlength");c.setCaret(a-b)};l.getCleanVal=function(){return c.getMasked(!0)};l.init()};
g.fn.mask=function(b,f){this.unmask();return this.each(function(){g(this).data("mask",new z(this,b,f))})};g.fn.unmask=function(){return this.each(function(){try{g(this).data("mask").remove()}catch(b){}})};g.fn.cleanVal=function(){return g(this).data("mask").getCleanVal()};g("*[data-mask]").each(function(){var b=g(this),f={};"true"===b.attr("data-mask-reverse")&&(f.reverse=!0);"false"===b.attr("data-mask-maxlength")&&(f.maxlength=!1);"true"===b.attr("data-mask-clearifnotmatch")&&(f.clearIfNotMatch=
!0);b.mask(b.attr("data-mask"),f)})});

/*! jQuery Validation Plugin - v1.12.0 - 4/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",b).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=d.attr("type");return"radio"===e||"checkbox"===e?a("input[name='"+d.attr("name")+"']:checked").val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c[0].toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.html(c)):(d=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},errorsFor:function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c[0].toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."}}(jQuery),function(a){var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})}(jQuery),function(a){a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery);

// Customização do jQUery validate
$.validator.addMethod("cpf", function(value, element) {
	function valida_cpf(cpf){
		if(cpf.length < 11)
			return false;

		var numeros, digitos, soma, i, resultado;
		numeros = cpf.substring(0,9);
		digitos = cpf.substring(9);
		soma = 0;
		for (i = 10; i > 1; i--)
			soma += numeros.charAt(10 - i) * i;
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0))
			return false;
		numeros = cpf.substring(0,10);
		soma = 0;
		for (i = 11; i > 1; i--)
			soma += numeros.charAt(11 - i) * i;
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1))
			return false;
		return true;
	};
    return valida_cpf(value.replace(/[^0-9]/gi, ""));
}, "Informe um CPF válido.");
!function(e){function n(e){var n=e.value||"";return n.length||(n=null),n}e.fn.serializeObject=function(){"use strict";var a={},t=function(t,i){var o=a[i.name];"undefined"!=typeof o&&null!==o?e.isArray(o)?o.push(n(i)):a[i.name]=[o,n(i)]:a[i.name]=n(i)};return e.each(this.serializeArray(),t),a}}(jQuery);


// PLUGIN SLIDE PREÇO
/*!
 * jQuery UI Mouse 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function ($) {
    if(!$.widget) return;

    $.widget("ui.mouse", {
        options: {
            cancel: ':input,option',
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var self = this;

            this.element
                .bind('mousedown.' + this.widgetName, function (event) {
                    return self._mouseDown(event);
                })
                .bind('click.' + this.widgetName, function (event) {
                    if (self._preventClickEvent) {
                        self._preventClickEvent = false;
                        event.stopImmediatePropagation();
                        return false;
                    }
                });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function () {
            this.element.unbind('.' + this.widgetName);
        },

        _mouseDown: function (event) {
            // don't let more than one widget handle mouseStart
            // TODO: figure out why we have to use originalEvent
            event.originalEvent = event.originalEvent || {};
            if (event.originalEvent.mouseHandled) {
                return;
            }

            // we may have missed mouseup (out of window)
            (this._mouseStarted && this._mouseUp(event));

            this._mouseDownEvent = event;

            var self = this,
                btnIsLeft = (event.which == 1),
                elIsCancel = (typeof this.options.cancel == "string" ? $(event.target).parents().add(event.target).filter(this.options.cancel).length : false);
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function () {
                    self.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = (this._mouseStart(event) !== false);
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // these delegates are required to keep context
            this._mouseMoveDelegate = function (event) {
                return self._mouseMove(event);
            };
            this._mouseUpDelegate = function (event) {
                return self._mouseUp(event);
            };
            $(document)
                .bind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                .bind('mouseup.' + this.widgetName, this._mouseUpDelegate);

            // preventDefault() is used to prevent the selection of text here -
            // however, in Safari, this causes select boxes not to be selectable
            // anymore, so this fix is needed
            ($.browser.safari || event.preventDefault());

            event.originalEvent.mouseHandled = true;
            return true;
        },

        _mouseMove: function (event) {
            // IE mouseup check - mouseup happened when mouse was out of window
            if ($.browser.msie && !event.button) {
                return this._mouseUp(event);
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted =
                    (this._mouseStart(this._mouseDownEvent, event) !== false);
                (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
            }

            return !this._mouseStarted;
        },

        _mouseUp: function (event) {
            $(document)
                .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate);

            if (this._mouseStarted) {
                this._mouseStarted = false;
                this._preventClickEvent = (event.target == this._mouseDownEvent.target);
                this._mouseStop(event);
            }

            return false;
        },

        _mouseDistanceMet: function (event) {
            return (Math.max(
                Math.abs(this._mouseDownEvent.pageX - event.pageX),
                Math.abs(this._mouseDownEvent.pageY - event.pageY)
            ) >= this.options.distance);
        },

        _mouseDelayMet: function (event) {
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function (event) {},
        _mouseDrag: function (event) {},
        _mouseStop: function (event) {},
        _mouseCapture: function (event) {
            return true;
        }
    });

})(jQuery);

/*
 * jQuery UI Slider 1.8
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */

(function ($) {
    if(!$.widget) return;

    // number of pages in a slider
    // (how many times can you page up/down to go through the whole range)
    var numPages = 5;

    $.widget("ui.slider", $.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: 'horizontal',
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {

            var self = this,
                o = this.options;
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();

            this.element
                .addClass("ui-slider" +
                    " ui-slider-" + this.orientation +
                    " ui-widget" +
                    " ui-widget-content" +
                    " ui-corner-all");

            if (o.disabled) {
                this.element.addClass('ui-slider-disabled ui-disabled');
            }

            this.range = $([]);

            if (o.range) {

                if (o.range === true) {
                    this.range = $('<div></div>');
                    if (!o.values) o.values = [this._valueMin(), this._valueMin()];
                    if (o.values.length && o.values.length != 2) {
                        o.values = [o.values[0], o.values[0]];
                    }
                } else {
                    this.range = $('<div></div>');
                }

                this.range
                    .appendTo(this.element)
                    .addClass("ui-slider-range");

                if (o.range == "min" || o.range == "max") {
                    this.range.addClass("ui-slider-range-" + o.range);
                }

                // note: this isn't the most fittingly semantic framework class for this element,
                // but worked best visually with a variety of themes
                this.range.addClass("ui-widget-header");

            }

            if ($(".ui-slider-handle", this.element).length == 0)
                $('<a href="#"></a>')
                .appendTo(this.element)
                .addClass("ui-slider-handle");

            if (o.values && o.values.length) {
                while ($(".ui-slider-handle", this.element).length < o.values.length)
                    $('<a href="#"></a>')
                    .appendTo(this.element)
                    .addClass("ui-slider-handle");
            }

            this.handles = $(".ui-slider-handle", this.element)
                .addClass("ui-state-default" +
                    " ui-corner-all");

            this.handle = this.handles.eq(0);

            this.handles.add(this.range).filter("a")
                .click(function (event) {
                    event.preventDefault();
                })
                .hover(function () {
                    if (!o.disabled) {
                        $(this).addClass('ui-state-hover');
                    }
                }, function () {
                    $(this).removeClass('ui-state-hover');
                })
                .focus(function () {
                    if (!o.disabled) {
                        $(".ui-slider .ui-state-focus").removeClass('ui-state-focus');
                        $(this).addClass('ui-state-focus');
                    } else {
                        $(this).blur();
                    }
                })
                .blur(function () {
                    $(this).removeClass('ui-state-focus');
                });

            this.handles.each(function (i) {
                $(this).data("index.ui-slider-handle", i);
            });

            this.handles.keydown(function (event) {

                var ret = true;

                var index = $(this).data("index.ui-slider-handle");

                if (self.options.disabled)
                    return;

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        ret = false;
                        if (!self._keySliding) {
                            self._keySliding = true;
                            $(this).addClass("ui-state-active");
                            self._start(event, index);
                        }
                        break;
                }

                var curVal, newVal, step = self._step();
                if (self.options.values && self.options.values.length) {
                    curVal = newVal = self.values(index);
                } else {
                    curVal = newVal = self.value();
                }

                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                        newVal = self._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = self._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = curVal + ((self._valueMax() - self._valueMin()) / numPages);
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = curVal - ((self._valueMax() - self._valueMin()) / numPages);
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if (curVal == self._valueMax()) return;
                        newVal = curVal + step;
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if (curVal == self._valueMin()) return;
                        newVal = curVal - step;
                        break;
                }

                self._slide(event, index, newVal);

                return ret;

            }).keyup(function (event) {

                var index = $(this).data("index.ui-slider-handle");

                if (self._keySliding) {
                    self._keySliding = false;
                    self._stop(event, index);
                    self._change(event, index);
                    $(this).removeClass("ui-state-active");
                }

            });

            this._refreshValue();

            this._animateOff = false;

        },

        destroy: function () {

            this.handles.remove();
            this.range.remove();

            this.element
                .removeClass("ui-slider" +
                    " ui-slider-horizontal" +
                    " ui-slider-vertical" +
                    " ui-slider-disabled" +
                    " ui-widget" +
                    " ui-widget-content" +
                    " ui-corner-all")
                .removeData("slider")
                .unbind(".slider");

            this._mouseDestroy();

            return this;
        },

        _mouseCapture: function (event) {

            var o = this.options;

            if (o.disabled)
                return false;

            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();

            var position = {
                x: event.pageX,
                y: event.pageY
            };
            var normValue = this._normValueFromMouse(position);

            var distance = this._valueMax() - this._valueMin() + 1,
                closestHandle;
            var self = this,
                index;
            this.handles.each(function (i) {
                var thisDistance = Math.abs(normValue - self.values(i));
                if (distance > thisDistance) {
                    distance = thisDistance;
                    closestHandle = $(this);
                    index = i;
                }
            });

            // workaround for bug #3736 (if both handles of a range are at 0,
            // the first is always used as the one with least distance,
            // and moving it is obviously prevented by preventing negative ranges)
            if (o.range == true && this.values(1) == o.min) {
                closestHandle = $(this.handles[++index]);
            }

            this._start(event, index);
            this._mouseSliding = true;

            self._handleIndex = index;

            closestHandle
                .addClass("ui-state-active")
                .focus();

            var offset = closestHandle.offset();
            var mouseOverHandle = !$(event.target).parents().andSelf().is('.ui-slider-handle');
            this._clickOffset = mouseOverHandle ? {
                left: 0,
                top: 0
            } : {
                left: event.pageX - offset.left - (closestHandle.width() / 2),
                top: event.pageY - offset.top -
                    (closestHandle.height() / 2) -
                    (parseInt(closestHandle.css('borderTopWidth'), 10) || 0) -
                    (parseInt(closestHandle.css('borderBottomWidth'), 10) || 0) +
                    (parseInt(closestHandle.css('marginTop'), 10) || 0)
            };

            normValue = this._normValueFromMouse(position);
            this._slide(event, index, normValue);
            this._animateOff = true;
            return true;

        },

        _mouseStart: function (event) {
            return true;
        },

        _mouseDrag: function (event) {

            var position = {
                x: event.pageX,
                y: event.pageY
            };
            var normValue = this._normValueFromMouse(position);

            this._slide(event, this._handleIndex, normValue);

            return false;

        },

        _mouseStop: function (event) {

            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(event, this._handleIndex);
            this._change(event, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;

            this._animateOff = false;
            return false;

        },

        _detectOrientation: function () {
            this.orientation = this.options.orientation == 'vertical' ? 'vertical' : 'horizontal';
        },

        _normValueFromMouse: function (position) {

            var pixelTotal, pixelMouse;
            if ('horizontal' == this.orientation) {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            }

            var percentMouse = (pixelMouse / pixelTotal);
            if (percentMouse > 1) percentMouse = 1;
            if (percentMouse < 0) percentMouse = 0;
            if ('vertical' == this.orientation)
                percentMouse = 1 - percentMouse;

            var valueTotal = this._valueMax() - this._valueMin(),
                valueMouse = percentMouse * valueTotal,
                valueMouseModStep = valueMouse % this.options.step,
                normValue = this._valueMin() + valueMouse - valueMouseModStep;

            if (valueMouseModStep > (this.options.step / 2))
                normValue += this.options.step;

            // Since JavaScript has problems with large floats, round
            // the final value to 5 digits after the decimal point (see #4124)
            return parseFloat(normValue.toFixed(5));

        },

        _start: function (event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                uiHash.value = this.values(index);
                uiHash.values = this.values();
            }
            this._trigger("start", event, uiHash);
        },

        _slide: function (event, index, newVal) {

            var handle = this.handles[index];

            if (this.options.values && this.options.values.length) {

                var otherVal = this.values(index ? 0 : 1);

                if ((this.options.values.length == 2 && this.options.range === true) &&
                    ((index == 0 && newVal > otherVal) || (index == 1 && newVal < otherVal))) {
                    newVal = otherVal;
                }

                if (newVal != this.values(index)) {
                    var newValues = this.values();
                    newValues[index] = newVal;
                    // A slide can be canceled by returning false from the slide callback
                    var allowed = this._trigger("slide", event, {
                        handle: this.handles[index],
                        value: newVal,
                        values: newValues
                    });
                    var otherVal = this.values(index ? 0 : 1);
                    if (allowed !== false) {
                        this.values(index, newVal, true);
                    }
                }

            } else {

                if (newVal != this.value()) {
                    // A slide can be canceled by returning false from the slide callback
                    var allowed = this._trigger("slide", event, {
                        handle: this.handles[index],
                        value: newVal
                    });
                    if (allowed !== false) {
                        this.value(newVal);
                    }

                }

            }

        },

        _stop: function (event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                uiHash.value = this.values(index);
                uiHash.values = this.values();
            }
            this._trigger("stop", event, uiHash);
        },

        _change: function (event, index) {
            if (!this._keySliding && !this._mouseSliding) {
                var uiHash = {
                    handle: this.handles[index],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    uiHash.value = this.values(index);
                    uiHash.values = this.values();
                }
                this._trigger("change", event, uiHash);
            }
        },

        value: function (newValue) {

            if (arguments.length) {
                this.options.value = this._trimValue(newValue);
                this._refreshValue();
                this._change(null, 0);
            }

            return this._value();

        },

        values: function (index, newValue) {

            if (arguments.length > 1) {
                this.options.values[index] = this._trimValue(newValue);
                this._refreshValue();
                this._change(null, index);
            }

            if (arguments.length) {
                if ($.isArray(arguments[0])) {
                    var vals = this.options.values,
                        newValues = arguments[0];
                    for (var i = 0, l = vals.length; i < l; i++) {
                        vals[i] = this._trimValue(newValues[i]);
                        this._change(null, i);
                    }
                    this._refreshValue();
                } else {
                    if (this.options.values && this.options.values.length) {
                        return this._values(index);
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }

        },

        _setOption: function (key, value) {

            var i,
                valsLength = 0;
            if (jQuery.isArray(this.options.values)) {
                valsLength = this.options.values.length;
            };

            $.Widget.prototype._setOption.apply(this, arguments);

            switch (key) {
                case 'disabled':
                    if (value) {
                        this.handles.filter(".ui-state-focus").blur();
                        this.handles.removeClass("ui-state-hover");
                        this.handles.attr("disabled", "disabled");
                        this.element.addClass("ui-disabled");
                    } else {
                        this.handles.removeAttr("disabled");
                        this.element.removeClass("ui-disabled");
                    }
                    case 'orientation':

                        this._detectOrientation();

                        this.element
                            .removeClass("ui-slider-horizontal ui-slider-vertical")
                            .addClass("ui-slider-" + this.orientation);
                        this._refreshValue();
                        break;
                    case 'value':
                        this._animateOff = true;
                        this._refreshValue();
                        this._change(null, 0);
                        this._animateOff = false;
                        break;
                    case 'values':
                        this._animateOff = true;
                        this._refreshValue();
                        for (i = 0; i < valsLength; i++) {
                            this._change(null, i);
                        }
                        this._animateOff = false;
                        break;
            }

        },

        _step: function () {
            var step = this.options.step;
            return step;
        },

        _value: function () {
            //internal value getter
            // _value() returns value trimmed by min and max
            var val = this.options.value;
            val = this._trimValue(val);

            return val;
        },

        _values: function (index) {
            //internal values getter
            // _values() returns array of values trimmed by min and max
            // _values(index) returns single value trimmed by min and max

            if (arguments.length) {
                var val = this.options.values[index];
                val = this._trimValue(val);

                return val;
            } else {
                // .slice() creates a copy of the array
                // this copy gets trimmed by min and max and then returned
                var vals = this.options.values.slice();
                for (var i = 0, l = vals.length; i < l; i++) {
                    vals[i] = this._trimValue(vals[i]);
                }

                return vals;
            }

        },

        _trimValue: function (val) {
            if (val < this._valueMin()) val = this._valueMin();
            if (val > this._valueMax()) val = this._valueMax();

            return val;
        },

        _valueMin: function () {
            var valueMin = this.options.min;
            return valueMin;
        },

        _valueMax: function () {
            var valueMax = this.options.max;
            return valueMax;
        },

        _refreshValue: function () {

            var oRange = this.options.range,
                o = this.options,
                self = this;
            var animate = (!this._animateOff) ? o.animate : false;

            if (this.options.values && this.options.values.length) {
                var vp0, vp1;
                this.handles.each(function (i, j) {
                    var valPercent = (self.values(i) - self._valueMin()) / (self._valueMax() - self._valueMin()) * 100;
                    var _set = {};
                    _set[self.orientation == 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
                    $(this).stop(1, 1)[animate ? 'animate' : 'css'](_set, o.animate);
                    if (self.options.range === true) {
                        if (self.orientation == 'horizontal') {
                            (i == 0) && self.range.stop(1, 1)[animate ? 'animate' : 'css']({
                                left: valPercent + '%'
                            }, o.animate);
                            (i == 1) && self.range[animate ? 'animate' : 'css']({
                                width: (valPercent - lastValPercent) + '%'
                            }, {
                                queue: false,
                                duration: o.animate
                            });
                        } else {
                            (i == 0) && self.range.stop(1, 1)[animate ? 'animate' : 'css']({
                                bottom: (valPercent) + '%'
                            }, o.animate);
                            (i == 1) && self.range[animate ? 'animate' : 'css']({
                                height: (valPercent - lastValPercent) + '%'
                            }, {
                                queue: false,
                                duration: o.animate
                            });
                        }
                    }
                    lastValPercent = valPercent;
                });
            } else {
                var value = this.value(),
                    valueMin = this._valueMin(),
                    valueMax = this._valueMax(),
                    valPercent = valueMax != valueMin ?
                    (value - valueMin) / (valueMax - valueMin) * 100 :
                    0;
                var _set = {};
                _set[self.orientation == 'horizontal' ? 'left' : 'bottom'] = valPercent + '%';
                this.handle.stop(1, 1)[animate ? 'animate' : 'css'](_set, o.animate);

                (oRange == "min") && (this.orientation == "horizontal") && this.range.stop(1, 1)[animate ? 'animate' : 'css']({
                    width: valPercent + '%'
                }, o.animate);
                (oRange == "max") && (this.orientation == "horizontal") && this.range[animate ? 'animate' : 'css']({
                    width: (100 - valPercent) + '%'
                }, {
                    queue: false,
                    duration: o.animate
                });
                (oRange == "min") && (this.orientation == "vertical") && this.range.stop(1, 1)[animate ? 'animate' : 'css']({
                    height: valPercent + '%'
                }, o.animate);
                (oRange == "max") && (this.orientation == "vertical") && this.range[animate ? 'animate' : 'css']({
                    height: (100 - valPercent) + '%'
                }, {
                    queue: false,
                    duration: o.animate
                });
            }

        }

    });

    $.extend($.ui.slider, {
        version: "1.8"
    });

})(jQuery);
/* Quatro Digital - Smart Research // 4.7 // Carlos Vinicius // Todos os direitos reservados */
(function (b) {
    if ("function" !== typeof b.fn.QD_SmartResearch) {
        var g = function (b, d) {
            if ("object" === typeof console && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
                var f; "object" === typeof b ? (b.unshift("[Smart Research]\n"), f = b) : f = ["[Smart Research]\n" + b]; if ("undefined" === typeof d || "alerta" !== d.toLowerCase() && "aviso" !== d.toLowerCase()) if ("undefined" !== typeof d && "info" === d.toLowerCase()) try { console.info.apply(console, f) } catch (g) { try { console.info(f.join("\n")) } catch (h) { } } else try {
                    console.error.apply(console,
                        f)
                } catch (g) { try { console.error(f.join("\n")) } catch (h) { } } else try { console.warn.apply(console, f) } catch (g) { try { console.warn(f.join("\n")) } catch (h) { } }
            }
        }; window._QuatroDigital_InfinityScroll = window._QuatroDigital_InfinityScroll || {}; var d = window._QuatroDigital_InfinityScroll; window._QuatroDigital_SmartResearch = window._QuatroDigital_SmartResearch || {}; var F = window._QuatroDigital_SmartResearch, G = b(""); b(document); var H = b("html,body"), h = b("body"); b.fn.QD_SmartResearch = function (D) {
            function E() {
                if (!c.mergeMenu) return !1;
                var a = I; a.insertAfter(c.insertMenuAfter); x(a)
            } function f() { if (c.mergeMenuList) { var a = 0; l.find("h3,h4").each(function () { var e = r.find("h3,h4").eq(a).next("ul"); e.insertAfter(b(this)); x(e); a++ }) } } function x(a) { a.find("a").each(function () { var a = b(this); a.text(z(a.text())) }) } function y(a) { a = a.getParent("fieldset"); var b = a.parent(); a.find("input:checked").length ? (a.addClass("qd-sr-filtered"), b.addClass("qd-sr-on-" + a.attr("data-qd-class"))) : (a.removeClass("qd-sr-filtered"), b.removeClass("qd-sr-on-" + a.attr("data-qd-class"))) }
            function J() {
                n.fieldsetCount = 0; n.tmpCurrentLabel = {}; l.find("fieldset").each(function () {
                    var a = b(this), e = a.find("label"), d = (a.find("h5:first").text() || "").toLowerCase().replaceSpecialChars().replace(/\s/g, "-"), f = "filtro_" + d; n[f] = {}; 1 > e.length ? a.hide() : (a.find("a.ver-filtros").length && a.addClass("qd-sr-show-more-results"), a.addClass(f).attr("data-qd-class", d), e.each(function (e) {
                        var d = b(this), k = d.find("input").val() || d.siblings("input#" + (d.attr("for") || g("O label n\u00e3o tem 'for'", "alerta") || "_")).val() ||
                            "", h = "sr_" + k.toLowerCase().replaceSpecialChars().replace(/\s/g, "-"); n.tmpCurrentLabel = { fieldsetParent: [a, f], elem: d }; n[f][e.toString()] = { className: h, title: k }; d.addClass(h).attr({ title: k, index: e }); c.labelCallback(n)
                    }), n.fieldsetCount++)
                })
            } function A(a, c) {
                y(a); var k = c ? v : "&" + (a.attr("rel") || ""); q.fadeTo(300, .6); d.searchUrl += k; d.searchUrl = d.searchUrl.replace(/PageNumber=[0-9]*/, "PageNumber=1"); d.currentStatus = !1; "false" != (a.attr("data-sr-exec-ajax") || "") && (t = b.ajax({ url: d.searchUrl, success: B, error: C }));
                k = a.parent(); k.is("label") || (k = a.attr("id") || g("O input n\u00e3o possui ID") || "", k = a.siblings("[for='" + k + "']")); k.addClass("sr_selected"); a.addClass("qd_sr_selected")
            } function B(a) { q.fadeTo(300, 0, function () { b(this).hide() }); K(b(a)); m.requests++; c.ajaxCallback(m); H.animate({ scrollTop: c.filterScrollTop(L || { top: 0, left: 0 }) }, 500, function () { w || (d.currentStatus = !0) }) } function C(a, e) {
                "abort" !== e && (q.fadeTo(300, 0, function () { b(this).hide() }), alert(c.filterErrorMsg), g("Houve um erro ao tentar fazer a requisi\u00e7\u00e3o da p\u00e1gina com filtros."),
                    d.currentStatus = !0)
            } function K(a) {
                w = !0; if (!c.authorizeUpdate(m)) return !1; var e = a.filter(c.shelfClass); a = p.find(c.shelfClass); (0 < a.length ? a : c.emptySearchElem).slideUp(600, function () {
                    b(this).remove(); c.usePopup ? b(".boxPopUp2").vtexPopUp2() : c.emptySearchElem.remove(); 0 < e.length ? (e.hide(), p.append(e), c.shelfCallback(), b(window).trigger("QuatroDigital.sr_insertedCallback"), e.slideDown(600, function () { w = !1; d.currentStatus = !0; b(window).trigger("QuatroDigital.sr_shelfCallback") }), m.isEmpty = !1, h.removeClass("qd-sr-empty-search")) :
                        (m.isEmpty = !0, c.usePopup ? c.emptySearchElem.addClass("freeContent autoClose ac_" + c.popupAutoCloseSeconds).vtexPopUp2().stop(!0).show() : (p.append(c.emptySearchElem), c.emptySearchElem.show().css("height", "auto").fadeTo(300, .2, function () { c.emptySearchElem.fadeTo(300, 1) })), c.emptySearchCallback(m), h.addClass("qd-sr-empty-search"))
                })
            } function M(a) {
                var b, c, d; b = a.parent(); d = !1; b.is("label") || (b = a.attr("id") || "" + g("O input n\u00e3o possui ID"), b = a.siblings("[for='" + b + "']"), d = !0); c = b.text(); c = z(c); d ? b.text(c) :
                    b.text(c).prepend(a)
            } function z(a) { return a.replace(/\([0-9]+\)/ig, function (a) { return "" }) } var u = b(this), N = {
                loadContent: ".prateleira[id^=ResultItems]", shelfClass: ".prateleira", filtersMenu: ".search-multiple-navigator", linksMenu: ".search-single-navigator", menuDepartament: ".navigation-tabs .menu-departamento", mergeMenu: !0, insertMenuAfter: ".search-multiple-navigator h3:first", emptySearchElem: b('<div class="vtexsr-emptySearch"></div>'), elemLoading: '<div id="scrollLoading">Carregando ... </div>', emptySearchMsg: "<h3>Esta combina\u00e7\u00e3o de filtros n\u00e3o retornou nenhum resultado!</h3>",
                filterErrorMsg: "Houve um erro ao tentar filtrar a p\u00e1gina!", usePopup: !1, showLinks: !0, mergeMenuList: !0, popupAutoCloseSeconds: 3, isSmartCheckout: !0, invertOrder: !1, filterScrollTop: function (a) { return a.top - 20 }, callback: function () { }, shelfCallback: function () { }, ajaxCallback: function () { }, emptySearchCallback: function () { }, authorizeUpdate: function () { return !0 }, labelCallback: function (a) { }, initChangeCallback: function (a) { }, endChangeCallback: function (a) { }
            }, c = b.extend({}, N, D); b(c.elemLoading); var v = "", w = !1, p = b(c.loadContent),
                l = b(c.filtersMenu), n = {}, m = { requests: 0, filters: 0, isEmpty: !1 }; F.ajaxCallbackObj = m; d.searchUrl = d.searchUrl || function () { var a, c, d; b("script:not([src])").each(function () { c = b(this)[0].innerHTML; d = /\/buscapagina\?.+&PageNumber=/i; if (-1 < c.search(/\/buscapagina\?/i)) return a = d.exec(c), !1 }); if ("undefined" !== typeof a && "undefined" !== typeof a[0]) return a[0]; g("N\u00e3o foi poss\u00edvel localizar a url de busca da p\u00e1gina.\n Tente adicionar o .js ao final da p\u00e1gina. \n[M\u00e9todo: getSearchUrl]"); return "" }();
            if (1 > u.length) return g("Nenhuma op\u00e7\u00e3o de filtro encontrada", "Aviso"), c.showLinks && b(c.linksMenu).css("visibility", "visible").show(), "object" === typeof d.buttonToTop && d.buttonToTop instanceof b && d.buttonToTop.trigger("click"), u; if (1 > p.length) return g("Elemento para destino da requisi\u00e7\u00e3o n\u00e3o foi encontrado \n (" + p.selector + ")"), !1; 1 > l.length && g("O menu de filtros n\u00e3o foi encontrado \n (" + l.selector + ")"); var r = b(c.linksMenu), q = b('<div class="vtexSr-overlay"></div>'), I = b(c.menuDepartament),
                L = p.offset(), t = null; c.emptySearchElem.append(c.emptySearchMsg); p.before(q); c.isSmartCheckout ? c.mergeMenu && r.insertAfter(c.insertMenuAfter) : h.hasClass("departamento") ? E() : (h.hasClass("categoria") || h.hasClass("resultado-busca")) && f(); (function () {
                    l.length && (c.invertOrder ? r.insertBefore(l) : (r.hide(), l.show())); J(); u.each(function () {
                        var a = b(this), e = a.parent(); e.is("label") || (e = a.siblings("[for='" + (a.attr("id") || g("O input n\u00e3o possui ID") || "") + "']")); a.is(":checked") && (v += "&" + (a.attr("rel") || ""), e.addClass("sr_selected"),
                            a.addClass("qd_sr_selected")); M(a); e.append('<span class="sr_box"></span><span class="sr_box2"></span>'); a.bind("change.qd_sr_change", function (e) {
                                if (!1 === c.initChangeCallback.call(this, e)) return !1; null !== t && t.abort(); d.currentPage = 2; d.pages = 9999999999999; d.moreResults = !0; if (a.is(":checked")) A(a); else {
                                    y(a); var f = a.attr("rel") || ""; q.fadeTo(300, .6); d.searchUrl = d.searchUrl.replace("&" + f, ""); d.searchUrl = d.searchUrl.replace(/PageNumber=[0-9]*/, "PageNumber=1"); d.currentStatus = !1; "false" != (a.attr("data-sr-exec-ajax") ||
                                        "") && (t = b.ajax({ url: d.searchUrl, success: B, error: C })); a.parent().removeClass("sr_selected"); a.removeClass("qd_sr_selected")
                                } m.filters = u.filter(":checked").length; c.endChangeCallback.call(this, e)
                            })
                    }); "" !== v && A(G, !0)
                })(); c.callback(); l.css("visibility", "visible")
        }
    }
})(jQuery);

(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports!=="undefined"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){"use strict";var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3e3,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(slider,i){return $('<button type="button" />').text(i+1)},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1e3};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden="hidden";_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange="visibilitychange";_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data("slick")||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=="undefined"){_.hidden="mozHidden";_.visibilityChange="mozvisibilitychange"}else if(typeof document.webkitHidden!=="undefined"){_.hidden="webkitHidden";_.visibilityChange="webkitvisibilitychange"}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true)}return Slick}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==="boolean"){addBefore=index;index=null}else if(index<0||index>=_.slideCount){return false}_.unload();if(typeof index==="number"){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack)}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index))}else{$(markup).insertAfter(_.$slides.eq(index))}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack)}else{$(markup).appendTo(_.$slideTrack)}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr("data-slick-index",index)});_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed)}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback)}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback)}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]="translate("+now+"px, 0px)";_.$slideTrack.css(animProps)}else{animProps[_.animType]="translate(0px,"+now+"px)";_.$slideTrack.css(animProps)}},complete:function(){if(callback){callback.call()}}})}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]="translate3d("+targetLeft+"px, 0px, 0px)"}else{animProps[_.animType]="translate3d(0px,"+targetLeft+"px, 0px)"}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call()},_.options.speed)}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider)}return asNavFor};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&typeof asNavFor==="object"){asNavFor.each(function(){var target=$(this).slick("getSlick");if(!target.unslicked){target.slideHandler(index,true)}})}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+" "+_.options.speed+"ms "+_.options.cssEase}else{transition[_.transitionType]="opacity "+_.options.speed+"ms "+_.options.cssEase}if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed)}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer)}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1}}}_.slideHandler(slideTo)}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass("slick-arrow");_.$nextArrow=$(_.options.nextArrow).addClass("slick-arrow");if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");_.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows)}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows)}if(_.options.infinite!==true){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")}}else{_.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass("slick-dotted");dot=$("<ul />").addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($("<li />").append(_.options.customPaging.call(this,_,i)))}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find("li").first().addClass("slick-active")}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+":not(.slick-cloned)").addClass("slick-slide");_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr("data-slick-index",index).data("originalStyling",$(element).attr("style")||"")});_.$slider.addClass("slick-slider");_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css("opacity",0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1}$("img[data-lazy]",_.$slider).not("[src]").addClass("slick-loading");_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass("draggable")}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement("div");for(b=0;b<_.options.rows;b++){var row=document.createElement("div");for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target))}}slide.appendChild(row)}newSlides.appendChild(slide)}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({width:100/_.options.slidesPerRow+"%",display:"inline-block"})}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==="window"){respondToWidth=windowWidth}else if(_.respondTo==="slider"){respondToWidth=sliderWidth}else if(_.respondTo==="min"){respondToWidth=Math.min(windowWidth,sliderWidth)}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint]}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==="unslick"){_.unslick(targetBreakpoint)}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial)}triggerBreakpoint=targetBreakpoint}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide}_.refresh(initial);triggerBreakpoint=targetBreakpoint}}if(!initial&&triggerBreakpoint!==false){_.$slider.trigger("breakpoint",[_,triggerBreakpoint])}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;if($target.is("a")){event.preventDefault()}if(!$target.is("li")){$target=$target.closest("li")}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case"previous":slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate)}break;case"next":slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate)}break;case"index":var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger("focus");break;default:return}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1]}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}prevNavigable=navigables[n]}}return index};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$("li",_.$dots).off("click.slick",_.changeSlide).off("mouseenter.slick",$.proxy(_.interrupt,_,true)).off("mouseleave.slick",$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off("keydown.slick",_.keyHandler)}}_.$slider.off("focus.slick blur.slick");if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off("click.slick",_.changeSlide);_.$nextArrow&&_.$nextArrow.off("click.slick",_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off("keydown.slick",_.keyHandler);_.$nextArrow&&_.$nextArrow.off("keydown.slick",_.keyHandler)}}_.$list.off("touchstart.slick mousedown.slick",_.swipeHandler);_.$list.off("touchmove.slick mousemove.slick",_.swipeHandler);_.$list.off("touchend.slick mouseup.slick",_.swipeHandler);_.$list.off("touchcancel.slick mouseleave.slick",_.swipeHandler);_.$list.off("click.slick",_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off("click.slick",_.selectHandler)}$(window).off("orientationchange.slick.slick-"+_.instanceUid,_.orientationChange);$(window).off("resize.slick.slick-"+_.instanceUid,_.resize);$("[draggable!=true]",_.$slideTrack).off("dragstart",_.preventDefault);$(window).off("load.slick.slick-"+_.instanceUid,_.setPosition)};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.off("mouseleave.slick",$.proxy(_.interrupt,_,false))};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr("style");_.$slider.empty().append(originalSlides)}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault()}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$(".slick-cloned",_.$slider).detach();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}}if(_.$slides){_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){$(this).attr("style",$(this).data("originalStyling"))});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides)}_.cleanUpRows();_.$slider.removeClass("slick-slider");_.$slider.removeClass("slick-initialized");_.$slider.removeClass("slick-dotted");_.unslicked=true;if(!refresh){_.$slider.trigger("destroy",[_])}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]="";if(_.options.fade===false){_.$slideTrack.css(transition)}else{_.$slides.eq(slide).css(transition)}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call()},_.options.speed)}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing)}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2})}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.focusHandler=function(){var _=this;_.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(event){var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){if($sf.is(":focus")){_.focussed=true;_.autoPlay()}}},0)}).on("blur.slick","*",function(event){var $sf=$(this);if(_.options.pauseOnFocus){_.focussed=false;_.autoPlay()}})};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}}else if(_.options.centerMode===true){pagerQty=_.slideCount}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll)}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}}return pagerQty-1};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5}else if(_.options.slidesToShow===1){coef=-2}}verticalOffset=verticalHeight*_.options.slidesToShow*coef}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex)}else{targetSlide=_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow+1)}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1}else{targetLeft=0}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2}}return targetLeft};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option]};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow}return indexes};Slick.prototype.getSlick=function(){return this};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,swipeTarget,centerOffset;centerOffset=_.options.centerMode===true?Math.floor(_.$list.width()/2):0;swipeTarget=_.swipeLeft*-1+centerOffset;if(_.options.swipeToSlide===true){_.$slideTrack.find(".slick-slide").each(function(index,slide){var slideOuterWidth,slideOffset,slideRightBoundary;slideOuterWidth=$(slide).outerWidth();slideOffset=slide.offsetLeft;if(_.options.centerMode!==true){slideOffset+=slideOuterWidth/2}slideRightBoundary=slideOffset+slideOuterWidth;if(swipeTarget<slideRightBoundary){swipedSlide=slide;return false}});slidesTraversed=Math.abs($(swipedSlide).attr("data-slick-index")-_.currentSlide)||1;return slidesTraversed}else{return _.options.slidesToScroll}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:"index",index:parseInt(slide)}},dontAnimate)};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass("slick-initialized")){$(_.$slider).addClass("slick-initialized");_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler()}if(creation){_.$slider.trigger("init",[_])}if(_.options.accessibility===true){_.initADA()}if(_.options.autoplay){_.paused=false;_.autoPlay()}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount});_.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({role:"tabpanel",id:"slick-slide"+_.instanceUid+i,tabindex:-1});if(slideControlIndex!==-1){var ariaButtonControl="slick-slide-control"+_.instanceUid+slideControlIndex;if($("#"+ariaButtonControl).length){$(this).attr({"aria-describedby":ariaButtonControl})}}});_.$dots.attr("role","tablist").find("li").each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({role:"presentation"});$(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+_.instanceUid+i,"aria-controls":"slick-slide"+_.instanceUid+mappedSlideIndex,"aria-label":i+1+" of "+numDotGroups,"aria-selected":null,tabindex:"-1"})}).eq(_.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end()}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({tabindex:"0"})}else{_.$slides.eq(i).removeAttr("tabindex")}}_.activateADA()};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},_.changeSlide);_.$nextArrow.off("click.slick").on("click.slick",{message:"next"},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on("keydown.slick",_.keyHandler);_.$nextArrow.on("keydown.slick",_.keyHandler)}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("click.slick",{message:"index"},_.changeSlide);if(_.options.accessibility===true){_.$dots.on("keydown.slick",_.keyHandler)}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$("li",_.$dots).on("mouseenter.slick",$.proxy(_.interrupt,_,true)).on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on("mouseenter.slick",$.proxy(_.interrupt,_,true));_.$list.on("mouseleave.slick",$.proxy(_.interrupt,_,false))}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on("touchstart.slick mousedown.slick",{action:"start"},_.swipeHandler);_.$list.on("touchmove.slick mousemove.slick",{action:"move"},_.swipeHandler);_.$list.on("touchend.slick mouseup.slick",{action:"end"},_.swipeHandler);_.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},_.swipeHandler);_.$list.on("click.slick",_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on("keydown.slick",_.keyHandler)}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}$(window).on("orientationchange.slick.slick-"+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on("resize.slick.slick-"+_.instanceUid,$.proxy(_.resize,_));$("[draggable!=true]",_.$slideTrack).on("dragstart",_.preventDefault);$(window).on("load.slick.slick-"+_.instanceUid,_.setPosition);$(_.setPosition)};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show()}};Slick.prototype.keyHandler=function(event){var _=this;if(!event.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"next":"previous"}})}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?"previous":"next"}})}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$("img[data-lazy]",imagesScope).each(function(){var image=$(this),imageSource=$(this).attr("data-lazy"),imageSrcSet=$(this).attr("data-srcset"),imageSizes=$(this).attr("data-sizes")||_.$slider.attr("data-sizes"),imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).animate({opacity:1},200,function(){image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")});_.$slider.trigger("lazyLoaded",[_,image,imageSource])})};imageToLoad.onerror=function(){image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource])};imageToLoad.src=imageSource})}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++}}loadRange=_.$slider.find(".slick-slide").slice(rangeStart,rangeEnd);if(_.options.lazyLoad==="anticipated"){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find(".slick-slide");for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find(".slick-slide");loadImages(cloneRange)}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find(".slick-cloned").slice(0,_.options.slidesToShow);loadImages(cloneRange)}else if(_.currentSlide===0){cloneRange=_.$slider.find(".slick-cloned").slice(_.options.slidesToShow*-1);loadImages(cloneRange)}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass("slick-loading");_.initUI();if(_.options.lazyLoad==="progressive"){_.progressiveLazyLoad()}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:"next"}})};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition()};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger("afterChange",[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition()}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay()}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr("tabindex",0).focus()}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:"previous"}})};Slick.prototype.preventDefault=function(event){event.preventDefault()};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$("img[data-lazy]",_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr("data-lazy");imageSrcSet=image.attr("data-srcset");imageSizes=image.attr("data-sizes")||_.$slider.attr("data-sizes");imageToLoad=document.createElement("img");imageToLoad.onload=function(){if(imageSrcSet){image.attr("srcset",imageSrcSet);if(imageSizes){image.attr("sizes",imageSizes)}}image.attr("src",imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");if(_.options.adaptiveHeight===true){_.setPosition()}_.$slider.trigger("lazyLoaded",[_,image,imageSource]);_.progressiveLazyLoad()};imageToLoad.onerror=function(){if(tryCount<3){setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500)}else{image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");_.$slider.trigger("lazyLoadError",[_,image,imageSource]);_.progressiveLazyLoad()}};imageToLoad.src=imageSource}else{_.$slider.trigger("allImagesLoaded",[_])}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:"index",index:currentSlide}},false)}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==="array"&&responsiveSettings.length){_.respondTo=_.options.respondTo||"window";for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1)}l--}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a})}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass("slick-slide");_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on("click.slick",_.selectHandler)}_.setSlideClasses(typeof _.currentSlide==="number"?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger("reInit",[_])};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition()}},50)}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==="boolean"){removeBefore=index;index=removeBefore===true?0:_.slideCount-1}else{index=removeBefore===true?--index:index}if(_.slideCount<1||index<0||index>_.slideCount-1){return false}_.unload();if(removeAll===true){_.$slideTrack.children().remove()}else{_.$slideTrack.children(this.options.slide).eq(index).remove()}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit()};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position}x=_.positionProp=="left"?Math.ceil(position)+"px":"0px";y=_.positionProp=="top"?Math.ceil(position)+"px":"0px";positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps)}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]="translate("+x+", "+y+")";_.$slideTrack.css(positionProps)}else{positionProps[_.animType]="translate3d("+x+", "+y+", 0px)";_.$slideTrack.css(positionProps)}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:"0px "+_.options.centerPadding})}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+" 0px"})}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children(".slick-slide").length))}else if(_.options.variableWidth===true){_.$slideTrack.width(5e3*_.slideCount)}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children(".slick-slide").length))}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children(".slick-slide").width(_.slideWidth-offset)};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:"relative",right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}else{$(element).css({position:"relative",left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css("height",targetHeight)}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==="object"){option=arguments[0];refresh=arguments[1];type="multiple"}else if($.type(arguments[0])==="string"){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==="responsive"&&$.type(arguments[1])==="array"){type="responsive"}else if(typeof arguments[1]!=="undefined"){type="single"}}if(type==="single"){_.options[option]=value}else if(type==="multiple"){$.each(option,function(opt,val){_.options[opt]=val})}else if(type==="responsive"){for(item in value){if($.type(_.options.responsive)!=="array"){_.options.responsive=[value[item]]}else{l=_.options.responsive.length-1;while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1)}l--}_.options.responsive.push(value[item])}}}if(refresh){_.unload();_.reinit()}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide))}else{_.setFade()}_.$slider.trigger("setPosition",[_])};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?"top":"left";if(_.positionProp==="top"){_.$slider.addClass("slick-vertical")}else{_.$slider.removeClass("slick-vertical")}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true}}if(_.options.fade){if(typeof _.options.zIndex==="number"){if(_.options.zIndex<3){_.options.zIndex=3}}else{_.options.zIndex=_.defaults.zIndex}}if(bodyStyle.OTransform!==undefined){_.animType="OTransform";_.transformType="-o-transform";_.transitionType="OTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.MozTransform!==undefined){_.animType="MozTransform";_.transformType="-moz-transform";_.transitionType="MozTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false}if(bodyStyle.webkitTransform!==undefined){_.animType="webkitTransform";_.transformType="-webkit-transform";_.transitionType="webkitTransition";if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false}if(bodyStyle.msTransform!==undefined){_.animType="msTransform";_.transformType="-ms-transform";_.transitionType="msTransition";if(bodyStyle.msTransform===undefined)_.animType=false}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType="transform";_.transformType="transform";_.transitionType="transition"}_.transformsEnabled=_.options.useTransform&&(_.animType!==null&&_.animType!==false)};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");_.$slides.eq(index).addClass("slick-current");if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass("slick-active").attr("aria-hidden","false")}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass("slick-active").attr("aria-hidden","false")}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass("slick-center")}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass("slick-center")}}_.$slides.eq(index).addClass("slick-center")}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass("slick-active").attr("aria-hidden","false")}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass("slick-active").attr("aria-hidden","false")}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")}}}if(_.options.lazyLoad==="ondemand"||_.options.lazyLoad==="anticipated"){_.lazyLoad()}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1}else{infiniteCount=_.options.slidesToShow}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned")}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr("id","").attr("data-slick-index",slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned")}_.$slideTrack.find(".slick-cloned").find("[id]").each(function(){$(this).attr("id","")})}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay()}_.interrupted=toggle};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is(".slick-slide")?$(event.target):$(event.target).parents(".slick-slide");var index=parseInt(targetElement.attr("data-slick-index"));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return}_.slideHandler(index)};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return}if(_.options.fade===true&&_.currentSlide===index){return}if(sync===false){_.asNavFor(index)}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)})}else{_.postSlide(targetSlide)}}return}if(_.options.autoplay){clearInterval(_.autoPlayTimer)}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll}else{animSlide=_.slideCount+targetSlide}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0}else{animSlide=targetSlide-_.slideCount}}else{animSlide=targetSlide}_.animating=true;_.$slider.trigger("beforeChange",[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick("getSlick");if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide)}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}_.animateHeight();return}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide)})}else{_.postSlide(animSlide)}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide()}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide()}_.$slider.addClass("slick-loading")};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle)}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?"left":"right"}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?"left":"right"}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?"right":"left"}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return"down"}else{return"up"}}return"vertical"};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false}if(_.touchObject.edgeHit===true){_.$slider.trigger("edge",[_,_.swipeDirection()])}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case"left":case"down":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case"right":case"up":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!="vertical"){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger("swipe",[_,direction])}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={}}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||"ontouchend"in document&&_.options.swipe===false){return}else if(_.options.draggable===false&&event.type.indexOf("mouse")!==-1){return}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold}switch(event.data.action){case"start":_.swipeStart(event);break;case"move":_.swipeMove(event);break;case"end":_.swipeEnd(event);break}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault()}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==="right"||_.currentSlide>=_.getDotCount()&&swipeDirection==="left"){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset}if(_.options.fade===true||_.options.touchMove===false){return false}if(_.animating===true){_.swipeLeft=null;return false}_.setCSS(_.swipeLeft)};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0]}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit()}};Slick.prototype.unload=function(){var _=this;$(".slick-cloned",_.$slider).remove();if(_.$dots){_.$dots.remove()}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove()}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove()}_.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger("unslick",[_,fromBreakpoint]);_.destroy()};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");if(_.currentSlide===0){_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find("li").removeClass("slick-active").end();_.$dots.find("li").eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass("slick-active")}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true}else{_.interrupted=false}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(typeof opt=="object"||typeof opt=="undefined")_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!="undefined")return ret}return _}});

/* FUNÇÕES AUXILIARES */
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* Quatro Digital - sessionStorage // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(){var e=function(b,c){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var a;"object"===typeof b?(b.unshift("[Quatro Digital - sessionStorage]\n"),a=b):a=["[Quatro Digital - sessionStorage]\n"+b];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,a)}catch(d){console.info(a.join("\n"))}else try{console.error.apply(console,
a)}catch(e){console.error(a.join("\n"))}else try{console.warn.apply(console,a)}catch(f){console.warn(a.join("\n"))}}};window.qdSessionStorage=window.qdSessionStorage||{};var f="undefined"!==typeof sessionStorage&&"undefined"!==typeof sessionStorage.setItem&&"undefined"!==typeof sessionStorage.getItem;window.qdSessionStorage.setItem=function(b,c,a){try{if(!f)return!1;var d=new Date;sessionStorage.setItem(b,c);isNaN(parseInt(a))||(d.setTime(d.getTime()+6E4*a),sessionStorage.setItem(b+"_expiration",
d.getTime()))}catch(g){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar salvar os dados no armazenamento da sess\u00e3o. Detalhes: ",g.message],"alerta")}};window.qdSessionStorage.getItem=function(b){try{if(!f)return!1;var c=new Date,a=parseInt(sessionStorage.getItem(b+"_expiration")||0,10)||0;return c.getTime()>a?(sessionStorage.removeItem&&(sessionStorage.removeItem(b),sessionStorage.removeItem(b+"_expiration")),null):sessionStorage.getItem(b)}catch(d){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar obter os dados no armazenamento da sess\u00e3o. Detalhes: ",
d.message],"alerta")}}})();

/** Cores Na Prateleira // 13.0 // Carlos Vinicius [QUATRO DIGITAL] // Todos os direitos reservados */
/** Para debugar inclua na url: debugcp */
var _0x241a=['loadSku','action','prod','wnforfav%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe','similarProducts','speedFade','prepend','alerta','Não\x20foi\x20possível\x20obter\x20as\x20informações\x20deste\x20item.','call','toUpperCase','href','productShelf','[Título\x20não\x20encontrado]','productNameStopInLastWord','productsLi','<span\x20class=\x22vtex-cpProductTextWrap\x22></span>','checkDuplicateUri','.vtex_cpActiveSku','\x20qd_cpHide\x27\x20','init','message','a[href=\x27','children','addClass','text','pop','bestPrice','stop','erc','.vtex-cpOriginalImage','.qd-cpProductName','QuatroDigital.cp_thumbMouseenter','Ocorreu\x20um\x20problema\x20após\x20o\x20retorno\x20da\x20requisição\x20a\x20api\x20de\x20produto\x20da\x20VTEX.\x20Detalhes:\x20','primarySkuThumb','wrap','Images','numberFormat','getImageUrl','setThumbs','[data-sku=\x27','.helperComplement','class','number','background-image','shift','fromCharCode','callback','qd-cp-show-sku-availables','Erro\x20ao\x20tentar\x20obter\x20os\x20dados\x20de\x20SKU\x20do\x20produto','onHover','substring','html','Não\x20foi\x20possível\x20obter\x20a\x20URL\x20do\x20produto\x20no\x20campo\x20“qd_cpUri”.','vtex-cpProductImage','selector','O\x20campo\x20produto\x20não\x20esta\x20retornando\x20nenhum\x20valor.\x0a\x20Produto:\x20','ResultItems','attr','.vtex-cpSkuIds','skus','getProductInfo','.qd_cpProductUnavailable','formatInfo','<div\x20class=\x22vtex-cpImgOverlay\x22></div>','<img\x20src=\x22','QD_cp_prod_info_','.vtex-cpSkuImage[data-sku=\x27','QuatroDigital.cp_callback','.qd_cpViewMore','vtex-cp_','clone','parent','auto','qd_cpHide','split','.qd_cpProductInfo','info','search','.sku-selector[name=\x27espec_0\x27]','Não\x20foram\x20encontradas\x20imagens\x20para\x20o\x20SKU:\x20','productOriginalInfo','isSmartCheckout','\x20R$\x20#value','each','<a\x20href=\x22','setOriginalImg','productHtml','Name','setImgThumb','before','fadeTo','\x27\x20class=\x27qd-cpInnerLink\x27></a></span><span\x20class=\x27vtex-cpInner2\x27></span></span>','width','.vtex-cpProductImage\x20img','productNameLimiter','limitRequestSimilarProducts','parse','unshift','installmentsValue','saveCount','”\x20foi\x20ignorado\x20pois\x20não\x20possui\x20estoque.\x20Wrapper:\x20','setClass',':not(.vtex-cpOriginalImage)','setOriginalElements','fadeOut','aviso','.qd-cpInnerLink','height','Path','vtex-cpInfoFromSKU','join','imageSize','groupSkuByDimension','url','thumbSize','.qd_cpProductInfoWrap','\x20vtex-cpSkuId_','Não\x20foi\x20possível\x20obter\x20o\x20ID\x20do\x20produto\x20no\x20campo\x20“qd_cpProdId”.','vtex-cpOriginalImage','.qd_cpProductLink','.qd_cpFullRegularPrice','undefined','mouseenter.qd_cp_mouse','QuatroDigital.cp_thumbMouseleave','checkIsAvaliable','concat','replace','thumbsQuantity','minSkuQttShow','.qd-cp-sku-qtt','sku','.qd_cpNumbersOfInstallment','currency','bind','checkLinkEquals','idsku=','stringify','ajaxCallback','getItem','bwnforfav%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','Não\x20foi\x20possível\x20obter\x20a\x20imagem\x20padrão\x20do\x20SKU\x20pois\x20o\x20objeto\x20fornecido\x20no\x20ambiente\x20SmartCheckout\x20é\x20inexistente\x20ou\x20esta\x20em\x20um\x20formato\x20não\x20esperado.\x20SKU:','<div\x20class=\x22vtex-cpOverlay\x22></div>','qd_cpProductLink','R$\x20','qd_cpShow','.vtex-cpImgOverlay','/produto/sku/','css','skuname','indexOf','/api/catalog_system/pub/products/variations/','qdSessionStorage','json','qdAjax','img[src*=\x27','O\x20sku\x20“','QD_coresPrateleira','Ei\x20Psiuu!\x20Você\x20esta\x20selecionando\x20um\x20elemento\x20que\x20é\x20filho\x20de\x20“div[id*=ResultItems_]”,\x20tem\x20certeza\x20que\x20este\x20seletor\x20esta\x20correto?\x20Selecionar\x20um\x20filho\x20direto\x20desta\x20div\x20(ResultItems)\x20sem\x20especifica-la\x20no\x20seletor\x20pode\x20causar\x20comportamentos\x20bizarrooooos\x20do\x20Cores.\x20#fkdica','thumbImgId','productImgId','append','hide','productId','.qd_cpInstallmentValue','forceAvailable','\x20...','not','thumbRendered','uniqueSkuByDimension','image','Este\x20navegador\x20não\x20tem\x20suporte\x20a\x20JSON\x20functions','show','.qd_cpUri','setOriginalLink','mouseActions2','src','O\x20produto\x20id\x20','\x22\x20alt=\x22\x22/>','warn','addSkuIdInURL','Economize:\x20R$\x20#value','div[id*=\x22ResultItems_\x22]','hasClass','skuProduct','imageUrl','location','”\x20foi\x20ignorado\x20pois\x20já\x20existe\x20uma\x20thumb\x20na\x20vitrine\x20com\x20o\x20mesmo\x20link.\x0a\x20URI:\x20','mouseleave.qd_cp_mouse','available','toFixed','dimension','productName','Erro\x20no\x20callback\x20\x27imageUrl\x27.\x20','apply','setOriginalSaveText','Problemas\x20ao\x20executar\x20o\x20auto\x20setup.\x20Detalhes:\x20','.qd_cpProdId','productOriginalSave','\x20possui\x20','function','shelfSetup','\x22></a>','push','trim','qd-cp-sku-count','/cores-prateleira','.qd_cpListPriceWrap','><span\x20class=\x27vtex-cpInner\x27><a\x20href=\x27','QuatroDigital.cp_liAjaxCallback','qd-visible','data-sku-label','SkuDataCache','vtex_cpActiveSku','error','find','substr','dimensions','string','[Cores\x20Prateleira]\x0a','qd-cp-thumbs-count-','imageLabel','Problemas\x20ao\x20executar\x20o\x20QD\x20Cores\x20Prateleira,\x20detalhes:\x20','restoreOriginalDetails','\x22\x20alt=\x22\x22\x20class=\x22vtex-cpImgsThumb\x20vtex-cpThumb_','groupSkuByDimension2','setItem','naturalWidth','.qd_cpBestPrice','saveText','.vtex-cpProductImage','fullData','dimension2','.vtex-cpOverlay','.vtex-cpSkuImage','removeClass','val','trigger','Problemas\x20ao\x20usar\x20o\x20cache.\x20','object','productOriginalLink','exec','length','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','\x20SKUs\x20ao\x20total\x20mas\x20após\x20o\x20agrupamento\x20por\x20especificação\x20não\x20restou\x20nenhum\x20SKU\x20para\x20este\x20produto.\x20Certifique-se\x20de\x20ter\x20passado\x20o\x20parametro\x20correto\x20para\x20a\x20opçõão\x20\x22dimensions\x22.','.vtex-cpSave','vtex-cpLoadingData','.qd_cpSkuList','Prateleira\x20não\x20encontrada\x20\x0a\x20(','.qd_cpListPrice','url(\x27','forceImgList','img','thumbByLabel','toLowerCase','li[layout]'];(function(_0x45c9cb,_0x241a0a){var _0x554f43=function(_0x44cb00){while(--_0x44cb00){_0x45c9cb['push'](_0x45c9cb['shift']());}};_0x554f43(++_0x241a0a);}(_0x241a,0xd0));var _0x554f=function(_0x45c9cb,_0x241a0a){_0x45c9cb=_0x45c9cb-0x0;var _0x554f43=_0x241a[_0x45c9cb];return _0x554f43;};(function(_0x44cb00,_0x2b3050){var _0x5a1bbf=_0x554f;if('function'!==typeof _0x2b3050['fn'][_0x5a1bbf('0xcd')]){_0x2b3050['fn'][_0x5a1bbf('0xcd')]=function(){},_0x2b3050[_0x5a1bbf('0xcd')]={};var _0x3297ae,_0x43fd32,_0x267a77,_0x5e8403=-0x1<document[_0x5a1bbf('0xea')][_0x5a1bbf('0x3b')][_0x5a1bbf('0x2e')]()['indexOf']('debugcp'),_0x3d2db7=function(_0x42686c,_0x2f5b37){var _0x14513a=_0x5a1bbf;if(_0x14513a('0x1f')===typeof console){var _0x1aa2db;_0x14513a('0x1f')===typeof _0x42686c?(_0x42686c[_0x14513a('0x92')](_0x14513a('0xb')),_0x1aa2db=_0x42686c):_0x1aa2db=[_0x14513a('0xb')+_0x42686c],'undefined'===typeof _0x2f5b37||'alerta'!==_0x2f5b37[_0x14513a('0x2e')]()&&'aviso'!==_0x2f5b37[_0x14513a('0x2e')]()?'undefined'!==typeof _0x2f5b37&&_0x14513a('0x7d')===_0x2f5b37[_0x14513a('0x2e')]()?console['info'][_0x14513a('0xf2')](console,_0x1aa2db):console[_0x14513a('0x6')][_0x14513a('0xf2')](console,_0x1aa2db):console['warn']['apply'](console,_0x1aa2db);}},_0x5ef160=function(_0x3b6e2a,_0x115aeb){var _0x377345=_0x5a1bbf;if(_0x377345('0x1f')===typeof console&&_0x5e8403){var _0x31346e;_0x377345('0x1f')===typeof _0x3b6e2a?(_0x3b6e2a[_0x377345('0x92')](_0x377345('0xb')),_0x31346e=_0x3b6e2a):_0x31346e=[_0x377345('0xb')+_0x3b6e2a],_0x377345('0xaa')===typeof _0x115aeb||_0x377345('0x37')!==_0x115aeb[_0x377345('0x2e')]()&&_0x377345('0x9a')!==_0x115aeb[_0x377345('0x2e')]()?'undefined'!==typeof _0x115aeb&&_0x377345('0x7d')===_0x115aeb[_0x377345('0x2e')]()?console[_0x377345('0x7d')][_0x377345('0xf2')](console,_0x31346e):console[_0x377345('0x6')]['apply'](console,_0x31346e):console[_0x377345('0xe3')][_0x377345('0xf2')](console,_0x31346e);}},_0x263ead=!0x1;try{JSON[_0x5a1bbf('0x91')](JSON[_0x5a1bbf('0xb9')]({'a':'b'})),_0x263ead=!0x0;}catch(_0x277d3b){_0x3d2db7(_0x5a1bbf('0xdb'),_0x5a1bbf('0x37'));}var _0x49a1bb={'productsLi':_0x5a1bbf('0x2f'),'messageRequestFail':_0x5a1bbf('0x38'),'saveText':_0x5a1bbf('0xe5'),'currency':_0x5a1bbf('0xc0'),'skuGroupSelector':_0x5a1bbf('0x7f'),'restoreOriginalDetails':!0x1,'checkLinkEquals':!0x1,'forceAvailable':!0x1,'forceImgList':!0x1,'autoSetup':!0x0,'checkIsAvaliable':!0x1,'useProductField':!0x1,'checkDuplicateUri':!0x0,'replaceProductName':!0x1,'productNameLimiter':null,'productNameStopInLastWord':!0x1,'productName':function(_0x1e64e9,_0x56dad7){var _0x138387=_0x5a1bbf;return _0x1e64e9[_0x138387('0xc5')]||_0x1e64e9[_0x138387('0x88')];},'checkDuplicateSKUByDimenion':!0x0,'addSkuIdInURL':!0x0,'speedFade':0xc8,'thumbsQuantity':0x4,'minSkuQttShow':0x2,'thumbByLabel':null,'thumbSize':{'width':0x24,'height':0x24},'imageSize':_0x5a1bbf('0x79'),'groupSkuByDimension':!0x0,'groupSkuByDimension2':!0x0,'dimensions':['Cor'],'imageLabel':[null],'primarySkuThumb':null,'limitRequestSimilarProducts':!0x0,'ajaxCallback':function(){},'callback':function(){},'thumbRendered':function(_0x19edfc,_0x1eb8f6,_0x311255,_0x17e7ad,_0x52bde9){},'imageUrl':function(_0x132900,_0x3b753f,_0x438712){var _0x37b6dd=_0x5a1bbf;try{return _0x132900[_0x37b6dd('0xaf')](/(ids\/[0-9]+\-)([0-9]+\-[0-9]+)/i,'$1'+_0x3b753f+'-'+_0x438712);}catch(_0x552645){return _0x3d2db7([_0x37b6dd('0xf1'),_0x552645[_0x37b6dd('0x45')]],_0x37b6dd('0x37')),'';}},'similarProducts':function(_0x4184b7,_0xf91024,_0x239b47,_0x1c16e0){_0x1c16e0(!0x1);},'isSmartCheckout':!0x0,'action':0x2,'productImgId':0x1e,'thumbImgId':0x3,'productPageUrl':_0x5a1bbf('0xfe')},_0x23871e=function(_0x3e0467){var _0x4af700=_0x5a1bbf,_0x42c2ce={'y':_0x4af700('0xbc'),'yb':_0x4af700('0x33')};return function(_0x46dbbe){var _0x5b6c3f=_0x4af700,_0x3bb4f9=function(_0x1f6b27){return _0x1f6b27;},_0x3dc2a1=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x46dbbe=_0x46dbbe['d'+_0x3dc2a1[0x10]+'c'+_0x3dc2a1[0x11]+'m'+_0x3bb4f9(_0x3dc2a1[0x1])+'n'+_0x3dc2a1[0xd]]['l'+_0x3dc2a1[0x12]+'c'+_0x3dc2a1[0x0]+'ti'+_0x3bb4f9('o')+'n'];var _0x433b2d=function(_0x286766){var _0x113e8f=_0x554f;return escape(encodeURIComponent(_0x286766[_0x113e8f('0xaf')](/\./g,'¨')[_0x113e8f('0xaf')](/[a-zA-Z]/g,function(_0x4fec2a){var _0x566a6b=_0x113e8f;return String[_0x566a6b('0x5e')](('Z'>=_0x4fec2a?0x5a:0x7a)>=(_0x4fec2a=_0x4fec2a['charCodeAt'](0x0)+0xd)?_0x4fec2a:_0x4fec2a-0x1a);})));},_0x30acd6=_0x433b2d(_0x46dbbe[[_0x3dc2a1[0x9],_0x3bb4f9('o'),_0x3dc2a1[0xc],_0x3dc2a1[_0x3bb4f9(0xd)]][_0x5b6c3f('0x9f')]('')]);_0x433b2d=_0x433b2d((window[['js',_0x3bb4f9('no'),'m',_0x3dc2a1[0x1],_0x3dc2a1[0x4][_0x5b6c3f('0x3a')](),'ite'][_0x5b6c3f('0x9f')]('')]||'---')+['.v',_0x3dc2a1[0xd],'e',_0x3bb4f9('x'),'co',_0x3bb4f9('mm'),_0x5b6c3f('0x4d'),_0x3dc2a1[0x1],'.c',_0x3bb4f9('o'),'m.',_0x3dc2a1[0x13],'r']['join'](''));for(var _0xa7cd69 in _0x42c2ce){if(_0x433b2d===_0xa7cd69+_0x42c2ce[_0xa7cd69]||_0x30acd6===_0xa7cd69+_0x42c2ce[_0xa7cd69]){var _0x246297='tr'+_0x3dc2a1[0x11]+'e';break;}_0x246297='f'+_0x3dc2a1[0x0]+'ls'+_0x3bb4f9(_0x3dc2a1[0x1]);}return _0x3bb4f9=!0x1,-0x1<_0x46dbbe[[_0x3dc2a1[0xc],'e',_0x3dc2a1[0x0],'rc',_0x3dc2a1[0x9]][_0x5b6c3f('0x9f')]('')][_0x5b6c3f('0xc6')](_0x5b6c3f('0x23'))&&(_0x3bb4f9=!0x0),[_0x246297,_0x3bb4f9];}(_0x3e0467);}(window);if(!eval(_0x23871e[0x0]))return _0x23871e[0x1]?_0x3d2db7('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;_0x2b3050['fn']['QD_coresPrateleira']=function(_0xb974){var _0x34fd94=_0x5a1bbf;try{_0x2b3050('');var _0x4a807b=/https?:\/\/[^\/\?#]+/i,_0x33df16=_0x2b3050['extend'](!0x0,{},_0x49a1bb,_0xb974),_0x5a5421={'loadSkuJqxhr':null,'productOriginalInfo':null,'productOriginalLink':null,'productOriginalSave':null,'saveCount':0x0,'onHover':!0x1,'skuList':[],'skuQueue':[],'skuProduct':{},'productHtml':{},'productShelf':null,'productSkus':{},'init':function(){var _0x554bba=_0x554f;_0x5a5421[_0x554bba('0x3c')][_0x554bba('0x78')]()['is'](_0x554bba('0xe6'))&&0x0>_0x5a5421[_0x554bba('0x3c')][_0x554bba('0x67')][_0x554bba('0xc6')](_0x554bba('0x69'))&&_0x3d2db7(_0x554bba('0xce'),_0x554bba('0x37')),_0x5a5421[_0x554bba('0x3c')][_0x554bba('0x84')](function(_0x3e2a74){var _0x279d5e=_0x554bba,_0x33363a=_0x2b3050(this);_0x33363a['hasClass']('vtex-cpIsActivated')||_0x5a5421[_0x279d5e('0x21')](_0x33363a,_0x3e2a74);});},'exec':function(_0x3c9cdc,_0x42a667){var _0x141b61=_0x554f,_0x10a305=_0x3c9cdc['find'](_0x33df16[_0x141b61('0x3f')])[_0x141b61('0xd7')](_0x141b61('0x59'));if(0x1>_0x10a305[_0x141b61('0x22')])return _0x3d2db7(_0x141b61('0x28')+_0x10a305['selector']+')'),!0x1;_0x3c9cdc['addClass']('vtex-cpIsActivated'),_0x10a305[_0x141b61('0x84')](function(_0x2f536c){var _0x373b58=_0x141b61,_0x3088e2,_0x1660a5,_0x4010b7,_0x6a08a1,_0x4bc56c=_0x2b3050(this);!0x0===_0x33df16['autoSetup']&&_0x5a5421[_0x373b58('0xf9')](_0x4bc56c);var _0x100566=_0x4bc56c[_0x373b58('0x7')](_0x373b58('0x27')),_0x15b644=_0x4bc56c[_0x373b58('0x7')]('.vtex-cpProductField'),_0x53c91e=_0x42a667['toString']()+'_'+_0x2f536c['toString'](),_0x5cdc1b=function(_0x253ba4,_0x12cd8c){var _0x413869=_0x373b58;_0x1660a5=_0x5a5421['groupSku'](_0x253ba4,_0x53c91e),_0x3088e2=_0x33df16['groupSkuByDimension2']?_0x5a5421[_0x413869('0x11')](_0x1660a5,_0x12cd8c):_0x33df16[_0x413869('0xa1')]?_0x5a5421[_0x413869('0xa1')](_0x1660a5,_0x12cd8c):_0x1660a5,0x0<_0x1660a5[_0x413869('0x22')]&&0x0===_0x3088e2[_0x413869('0x22')]&&_0x5ef160(_0x413869('0xe1')+_0x12cd8c+_0x413869('0xf7')+_0x253ba4['length']+_0x413869('0x24'),_0x413869('0x37')),_0x4bc56c[_0x413869('0x7')](_0x413869('0x8e'))['addClass'](_0x413869('0xa7')),(_0x33df16[_0x413869('0xd5')]||_0x33df16[_0x413869('0x2b')])&&_0x100566[_0x413869('0x48')](_0x413869('0xc1'))[_0x413869('0x1b')](_0x413869('0x7a'));var _0x434d31=null;if('function'===typeof _0x33df16[_0x413869('0x52')]&&(_0x434d31=_0x33df16['primarySkuThumb'](_0x4bc56c),'string'===typeof _0x434d31&&''!==_0x434d31||_0x413869('0x5b')===typeof _0x434d31))for(var _0x19de3e=0x0;_0x19de3e<_0x3088e2['length'];_0x19de3e++)if(_0x3088e2[_0x19de3e][0x1]==_0x434d31){var _0x1183bd=_0x3088e2[_0x19de3e];_0x3088e2[_0x19de3e]=_0x3088e2[0x0],_0x3088e2[0x0]=_0x1183bd;break;}_0x6a08a1=_0x3088e2[_0x413869('0x22')];if(_0x6a08a1>=_0x33df16[_0x413869('0xb1')])for(_0x6a08a1>_0x33df16['thumbsQuantity']&&(_0x4bc56c['find'](_0x413869('0x75'))[_0x413869('0x48')](_0x413869('0xc1'))[_0x413869('0x1b')](_0x413869('0x7a')),_0x4bc56c['find'](_0x413869('0xb2'))[_0x413869('0x49')](_0x6a08a1)),_0x19de3e=0x0;_0x19de3e<_0x6a08a1;_0x19de3e++){_0x1183bd=_0x3088e2[_0x19de3e][0x1];var _0x7ebb3e=_0x3088e2[_0x19de3e][0x0][_0x413869('0xfc')](),_0x5af106=_0x7ebb3e[_0x413869('0xaf')](_0x4a807b,'');if(_0x33df16[_0x413869('0xad')]&&!_0x2b3050['QD_coresPrateleira'][_0x413869('0x4')][_0x413869('0xb3')][_0x1183bd][_0x413869('0xed')])_0x5ef160([_0x413869('0xcc')+_0x1183bd+_0x413869('0x95'),_0x4bc56c],_0x413869('0x7d'));else{if(_0x33df16[_0x413869('0xb7')]&&_0x5af106==(_0x4bc56c['find']('.qd_cpProductLink:first')[_0x413869('0x6a')](_0x413869('0x3b'))||'')['trim']()[_0x413869('0xaf')](_0x4a807b,''))_0x5ef160(_0x413869('0xcc')+_0x1183bd+'”\x20foi\x20ignorado\x20pois\x20tem\x20o\x20mesmo\x20link\x20que\x20o\x20produto\x20existente\x20na\x20vitrine.\x0a\x20URI:\x20'+_0x5af106,_0x413869('0x7d'));else{if(_0x33df16[_0x413869('0x41')]&&0x0<_0x4bc56c[_0x413869('0x7')]('.vtex-cpSkuIds[ref=\x27'+_0x5af106+'\x27]')['length'])_0x5ef160(_0x413869('0xcc')+_0x1183bd+_0x413869('0xeb')+_0x5af106,'info');else{var _0x1456d4=_0x4bc56c['data'](_0x413869('0xfd'))||0x0;_0x4bc56c['data'](_0x413869('0xfd'),_0x1456d4+0x1);if(_0x1456d4>=_0x33df16['thumbsQuantity']-0x1){_0x4bc56c[_0x413869('0x7')](_0x413869('0x75'))[_0x413869('0x48')](_0x413869('0x60'));break;}else{if(''!==_0x1183bd){var _0x3a6a98=_0x7ebb3e;_0x33df16[_0x413869('0xe4')]&&(_0x3a6a98=_0x2b3050(_0x413869('0x85')+_0x7ebb3e+_0x413869('0xfa'))[0x0],_0x3a6a98['search']+=(_0x3a6a98[_0x413869('0x7e')][_0x413869('0x22')]?'&':'')+_0x413869('0xb8')+_0x1183bd,_0x3a6a98=_0x3a6a98[_0x413869('0x3b')]),_0x1456d4=_0x2b3050('<span\x20class=\x27vtex-cpSkuIds\x20vtex-cpIndex_'+(_0x1456d4-0x1)+_0x413869('0xa5')+_0x1183bd+_0x413869('0x43')+(_0x434d31==_0x1183bd?'data-primary-sku=\x221\x22':'')+_0x413869('0x0')+_0x3a6a98+_0x413869('0x8c')),_0x1456d4[_0x413869('0x6a')]({'ref':_0x5af106,'id':_0x1183bd}),_0x100566[_0x413869('0xd1')](_0x5a5421[_0x413869('0x57')](_0x4bc56c,_0x1183bd,_0x1456d4,_0x7ebb3e,_0x53c91e));}}}}}}_0x100566[_0x413869('0x48')](_0x413869('0xc')+_0x100566[_0x413869('0x7')]('.vtex-cpSkuIds')[_0x413869('0x22')]),_0x4010b7=_0x4bc56c['find'](_0x413869('0x6b')),_0x4010b7[_0x413869('0x22')]>=_0x33df16[_0x413869('0xb1')]&&_0x4010b7['removeClass']('qd_cpHide'),_0x4010b7['first']()[_0x413869('0x48')]('vtex-cpFirst'),_0x2b3050(window)['trigger']('QuatroDigital.cp_thumbsWrapperAdd',{'li':_0x4bc56c,'wrapper':_0x100566,'data':_0x2b3050[_0x413869('0xcd')][_0x413869('0x4')]});};if(_0x33df16['useProductField'])_0x2f536c=_0x15b644['find']('li')['text']()['trim']()[_0x373b58('0x7b')]('|'),_0x5e8403&&''===_0x15b644['find']('li')['text']()['trim']()&&_0x5ef160(_0x373b58('0x68')+(_0x4bc56c[_0x373b58('0x7')]('.qd_cpProductLink[title]:first')[_0x373b58('0x6a')]('title')||_0x373b58('0x3d')),_0x373b58('0x7d')),_0x5cdc1b(_0x2f536c);else{var _0x2c6403=_0x4bc56c['find'](_0x373b58('0xf5'))['val']();_0x15b644=_0x4bc56c[_0x373b58('0x7')](_0x373b58('0xdd'))[_0x373b58('0x1c')](),_0x373b58('0xaa')===typeof _0x2c6403&&_0x3d2db7([_0x373b58('0xa6'),_0x4bc56c]),_0x373b58('0xaa')===typeof _0x15b644&&_0x3d2db7(_0x373b58('0x65')),_0x5a5421[_0x373b58('0x6d')](function(_0x2f023b,_0x2c49c1){var _0x328c82=_0x373b58;_0x5cdc1b(_0x2f023b,_0x2c6403),_0x2b3050(window)[_0x328c82('0x1d')](_0x328c82('0x1'),{'li':_0x4bc56c,'wrapper':_0x100566});},_0x2c6403,_0x15b644,_0x4bc56c);}});},'getProductInfo':function(_0x54faf1,_0x773985,_0x540191,_0x5dcdd7){var _0x520b3c=_0x554f;_0x33df16[_0x520b3c('0x82')]&&_0x3297ae[_0x520b3c('0x39')](this,_0x54faf1,_0x773985,_0x540191,_0x5dcdd7);},'getRelatedProductInfo':function(_0x2fec27){var _0x53cac2=_0x554f,_0x42ca2a=[_0x2fec27],_0x5664db=_0x2fec27[_0x53cac2('0x7')]('.qd_cpProdId')[_0x53cac2('0x1c')](),_0x4da949=_0x2fec27['find']('.qd_cpUri')[_0x53cac2('0x1c')]();return _0x53cac2('0xaa')!==typeof _0x5664db&&_0x53cac2('0xaa')!==typeof _0x4da949&&(_0x42ca2a=[_0x5664db,_0x4da949,_0x2fec27]),_0x42ca2a;},'groupSku':function(_0x482a26,_0x10370e){var _0x522f28=_0x554f,_0x58f4cc={},_0x5e6a9f=[],_0x32bc9a=_0x482a26[_0x522f28('0x22')];if(0x2>_0x32bc9a&&''===_0x482a26[0x0])return _0x5e6a9f;for(var _0x1428a2=0x0;_0x1428a2<_0x32bc9a;_0x1428a2++){var _0x928bea=_0x482a26[_0x1428a2][_0x522f28('0x7b')](';'),_0x3a8df3=_0x928bea[_0x522f28('0x4a')]();_0x928bea=_0x928bea[_0x522f28('0x5d')](),_0x522f28('0xaa')!=typeof _0x3a8df3&&(_0x522f28('0xaa')==typeof _0x58f4cc[_0x928bea]?_0x58f4cc[_0x928bea]=[_0x3a8df3]:_0x58f4cc[_0x928bea][_0x522f28('0xfb')](_0x3a8df3));}for(var _0x381646 in _0x58f4cc){_0x32bc9a=_0x58f4cc[_0x381646][_0x522f28('0x22')],_0x3a8df3=[];if(0x3<_0x32bc9a){_0x928bea=parseInt(_0x32bc9a/0x3,0xa);var _0x560636=_0x32bc9a%0x3,_0x2254a9=0x2*_0x928bea;for(_0x1428a2=0x0;_0x1428a2<_0x928bea;_0x1428a2++)_0x3a8df3[_0x522f28('0xfb')](_0x58f4cc[_0x381646][_0x1428a2]),_0x3a8df3[_0x522f28('0xfb')](_0x58f4cc[_0x381646][_0x1428a2+_0x928bea]),_0x3a8df3['push'](_0x58f4cc[_0x381646][_0x1428a2+_0x2254a9]);0x1==_0x560636?_0x3a8df3[_0x522f28('0xfb')](_0x58f4cc[_0x381646][_0x32bc9a-0x1]):0x2==_0x560636&&(_0x3a8df3[_0x522f28('0xfb')](_0x58f4cc[_0x381646][_0x32bc9a-0x1]),_0x3a8df3['push'](_0x58f4cc[_0x381646][_0x32bc9a-0x2]));}else _0x3a8df3=_0x58f4cc[_0x381646];_0x5e6a9f[_0x522f28('0xfb')]([_0x3a8df3[_0x522f28('0x5d')](),_0x381646]);}return _0x5e6a9f;},'groupSkuByDimension2':function(_0x4ad5f1,_0x4081e4){var _0x1487d7=_0x554f;_0x2b3050[_0x1487d7('0xcd')][_0x1487d7('0x4')][_0x1487d7('0x18')]=_0x2b3050[_0x1487d7('0xcd')]['SkuDataCache'][_0x1487d7('0x18')]||{};for(var _0x4df11b=0x0;_0x4df11b<_0x4ad5f1[_0x1487d7('0x22')];_0x4df11b++){var _0x266c5a=_0x4ad5f1[_0x4df11b][0x1];_0x266c5a=_0x2b3050['QD_coresPrateleira']['SkuDataCache'][_0x1487d7('0xb3')][_0x266c5a];var _0x827172=[];for(var _0x418f96=0x0;_0x418f96<_0x33df16[_0x1487d7('0x9')][_0x1487d7('0x22')];_0x418f96++)'string'===typeof _0x266c5a[_0x1487d7('0x9')][_0x33df16['dimensions'][_0x418f96]]&&_0x827172[_0x1487d7('0xfb')](_0x33df16['dimensions'][_0x418f96]);_0x2b3050[_0x1487d7('0xcd')][_0x1487d7('0x4')][_0x1487d7('0x18')][_0x266c5a[_0x1487d7('0xd3')]]=_0x2b3050[_0x1487d7('0xcd')][_0x1487d7('0x4')]['dimension2'][_0x266c5a[_0x1487d7('0xd3')]]||{};for(_0x418f96=0x0;_0x418f96<_0x827172['length'];_0x418f96++)_0x1487d7('0xaa')!=typeof _0x266c5a[_0x1487d7('0x9')][_0x827172[_0x418f96]]&&_0x1487d7('0xaa')==typeof _0x2b3050['QD_coresPrateleira'][_0x1487d7('0x4')][_0x1487d7('0x18')][_0x266c5a[_0x1487d7('0xd3')]][_0x266c5a[_0x1487d7('0x9')][_0x827172[_0x418f96]]]&&(_0x33df16[_0x1487d7('0xad')]?_0x2b3050['QD_coresPrateleira'][_0x1487d7('0x4')][_0x1487d7('0xb3')][_0x4ad5f1[_0x4df11b][0x1]][_0x1487d7('0xed')]&&(_0x2b3050[_0x1487d7('0xcd')][_0x1487d7('0x4')][_0x1487d7('0x18')][_0x266c5a[_0x1487d7('0xd3')]][_0x266c5a[_0x1487d7('0x9')][_0x827172[_0x418f96]]]=_0x4ad5f1[_0x4df11b]):_0x2b3050[_0x1487d7('0xcd')][_0x1487d7('0x4')][_0x1487d7('0x18')][_0x266c5a[_0x1487d7('0xd3')]][_0x266c5a['dimensions'][_0x827172[_0x418f96]]]=_0x4ad5f1[_0x4df11b]);}_0x4df11b=[];for(var _0x1b7462 in _0x2b3050[_0x1487d7('0xcd')]['SkuDataCache']['dimension2'][_0x266c5a[_0x1487d7('0xd3')]])_0x4df11b[_0x1487d7('0xfb')](_0x2b3050[_0x1487d7('0xcd')][_0x1487d7('0x4')]['dimension2'][_0x266c5a['productId']][_0x1b7462]);return _0x4df11b;},'groupSkuByDimension':function(_0x10f506,_0x4f4f98){var _0x15a675=_0x554f;if(!_0x33df16['checkDuplicateSKUByDimenion'])return _0x10f506;var _0x2dc5a1=[];_0x2b3050['QD_coresPrateleira'][_0x15a675('0x4')][_0x15a675('0xef')]=_0x2b3050[_0x15a675('0xcd')]['SkuDataCache'][_0x15a675('0xef')]||{};if(_0x15a675('0xaa')!==typeof _0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xef')][_0x4f4f98]&&_0x15a675('0x1f')===typeof _0x2b3050['QD_coresPrateleira']['SkuDataCache'][_0x15a675('0xef')][_0x4f4f98][_0x15a675('0xd9')]&&0x0<_0x2b3050['QD_coresPrateleira']['SkuDataCache']['dimension'][_0x4f4f98][_0x15a675('0xd9')][_0x15a675('0x22')])return _0x2dc5a1[_0x15a675('0xae')](_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')]['dimension'][_0x4f4f98][_0x15a675('0xd9')]);for(var _0x2be427=0x0;_0x2be427<_0x10f506[_0x15a675('0x22')];_0x2be427++){var _0xa394cb=_0x10f506[_0x2be427][0x1],_0x5a9e7b=_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xb3')][_0xa394cb],_0x36bbb0=[];for(var _0x29764b=0x0;_0x29764b<_0x33df16[_0x15a675('0x9')]['length'];_0x29764b++)_0x15a675('0xa')===typeof _0x5a9e7b[_0x15a675('0x9')][_0x33df16[_0x15a675('0x9')][_0x29764b]]&&_0x36bbb0[_0x15a675('0xfb')](_0x33df16[_0x15a675('0x9')][_0x29764b]);_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xef')][_0x5a9e7b['productId']]=_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')]['dimension'][_0x5a9e7b['productId']]||{};for(_0x29764b=0x0;_0x29764b<_0x36bbb0[_0x15a675('0x22')];_0x29764b++)_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xef')][_0x5a9e7b[_0x15a675('0xd3')]][_0x5a9e7b[_0x15a675('0x9')][_0x36bbb0[_0x29764b]]]=_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xef')][_0x5a9e7b['productId']][_0x5a9e7b[_0x15a675('0x9')][_0x36bbb0[_0x29764b]]]||[],_0x2b3050['QD_coresPrateleira'][_0x15a675('0x4')][_0x15a675('0xef')][_0x5a9e7b['productId']][_0x15a675('0xd9')]=_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xef')][_0x5a9e7b[_0x15a675('0xd3')]][_0x15a675('0xd9')]||[],_0x2b3050['QD_coresPrateleira'][_0x15a675('0x4')]['dimension'][_0x5a9e7b[_0x15a675('0xd3')]][_0x5a9e7b[_0x15a675('0x9')][_0x36bbb0[_0x29764b]]]['length']||(_0x2dc5a1['push'](_0x10f506[_0x2be427]),_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xef')][_0x5a9e7b['productId']][_0x15a675('0xd9')][_0x15a675('0xfb')](_0x10f506[_0x2be427])),_0x2b3050[_0x15a675('0xcd')][_0x15a675('0x4')][_0x15a675('0xef')][_0x5a9e7b[_0x15a675('0xd3')]][_0x5a9e7b[_0x15a675('0x9')][_0x36bbb0[_0x29764b]]][_0x15a675('0xfb')](_0xa394cb);}return _0x2dc5a1;},'setThumbs':function(_0x2edd08,_0x175a9a,_0x2ac432,_0x3e6c2d,_0x9ac07f){var _0x368de9=_0x554f;return _0x2ac432[_0x368de9('0x48')]('vtex-cpLoadingData'),_0x5a5421[_0x368de9('0x30')](_0x2edd08,_0x175a9a,_0x2edd08[_0x368de9('0x7')](_0x368de9('0x19')),_0x33df16[_0x368de9('0x31')],_0x2ac432,_0x3e6c2d,_0x9ac07f),_0x33df16[_0x368de9('0xd8')](_0x2edd08,_0x2ac432,_0x5a5421[_0x368de9('0x87')],_0x5a5421['skuProduct'],_0x175a9a),_0x2ac432;},'checkIsAvaliable':function(_0x2cd80e,_0x4a1506,_0x4192c8,_0xbbba12,_0x536142,_0x2c006c){var _0x136aa=_0x554f;_0x5a5421[_0x136aa('0xdf')](_0x2cd80e,_0x4a1506,_0x4192c8,_0xbbba12,_0x536142);},'mouseActions2':function(_0x40897b,_0x337e79,_0x3a7cee,_0x132419,_0x32ad96){var _0xbb2466=_0x554f;return _0x5a5421[_0xbb2466('0x89')](_0x3a7cee,_0x132419),_0x5a5421[_0xbb2466('0x96')](_0x3a7cee,_0x132419,_0x337e79),_0x3a7cee[_0xbb2466('0xb6')](_0xbb2466('0xab'),function(){var _0x2dd9ab=_0xbb2466;try{_0x40897b['find'](_0x2dd9ab('0x42'))[_0x2dd9ab('0x1b')](_0x2dd9ab('0x5')),_0x3a7cee['addClass']('vtex_cpActiveSku');if(_0x33df16['restoreOriginalDetails']){_0x5a5421[_0x2dd9ab('0x81')]=_0x40897b['find'](_0x2dd9ab('0xa4'))[_0x2dd9ab('0x47')]()[_0x2dd9ab('0x77')](),_0x5a5421[_0x2dd9ab('0x20')]=_0x40897b[_0x2dd9ab('0x7')]('.qd_cpProductLink:first')[_0x2dd9ab('0x6a')](_0x2dd9ab('0x3b'))||'';var _0x16d3f7=_0x40897b[_0x2dd9ab('0x7')](_0x2dd9ab('0x25'));_0x5a5421[_0x2dd9ab('0xf6')]=[_0x16d3f7[_0x2dd9ab('0x64')]()||'',_0x16d3f7[_0x2dd9ab('0x6a')](_0x2dd9ab('0x5a'))||''];}_0x5a5421[_0x2dd9ab('0x6f')](_0x132419,_0x40897b,_0x32ad96),_0x5a5421[_0x2dd9ab('0x62')]=!0x0,_0x2b3050(window)[_0x2dd9ab('0x1d')](_0x2dd9ab('0x50'),{'data':_0x132419[0x0],'li':_0x40897b,'link':_0x32ad96});}catch(_0x1522e4){_0x3d2db7(_0x1522e4[_0x2dd9ab('0x45')]);}}),_0x33df16[_0xbb2466('0xf')]&&_0x3a7cee[_0xbb2466('0xb6')](_0xbb2466('0xec'),function(){var _0x3b7df1=_0xbb2466;try{_0x40897b[_0x3b7df1('0x7')]('.vtex_cpActiveSku')['removeClass']('vtex_cpActiveSku'),_0x5a5421[_0x3b7df1('0x98')](_0x40897b),_0x5a5421[_0x3b7df1('0x62')]=!0x1,_0x2b3050(window)[_0x3b7df1('0x1d')](_0x3b7df1('0xac'),{'data':_0x132419[0x0],'li':_0x40897b,'link':_0x32ad96});}catch(_0xa5004b){_0x3d2db7(_0xa5004b['message']);}}),_0x3a7cee;},'formatInfo':function(_0x5882f5,_0x540319,_0x31c353){var _0x3429a0=_0x554f,_0x1dcca1,_0x139b59,_0x2d0c6d,_0x3750de;_0x540319[_0x3429a0('0x48')](_0x3429a0('0x9e')),_0x5882f5=_0x5882f5[0x0];if(_0x5882f5[_0x3429a0('0xed')]||_0x5882f5['Availability']||_0x33df16[_0x3429a0('0xd5')]){var _0x35955e=_0x540319['find'](_0x3429a0('0x7c')),_0x1ffa7f=_0x5882f5['installments']||_0x5882f5['BestInstallmentNumber'],_0x179216=_0x5882f5['listPrice']/0x64,_0x2c70ae=_0x5882f5[_0x3429a0('0x4b')]/0x64;_0x35955e[_0x3429a0('0x48')](_0x3429a0('0xc1'))[_0x3429a0('0x1b')](_0x3429a0('0x7a')),_0x540319[_0x3429a0('0x7')]('.qd_cpProductUnavailable')[_0x3429a0('0x48')]('qd_cpHide')[_0x3429a0('0x1b')]('qd_cpShow'),_0x35955e[_0x3429a0('0x7')](_0x3429a0('0x14'))[_0x3429a0('0x49')](_0x33df16['currency']+_0x5a5421['numberFormat'](_0x5882f5[_0x3429a0('0x4b')]/0x64)),_0x540319[_0x3429a0('0x7')](_0x3429a0('0x25'))[_0x3429a0('0x64')](_0x33df16[_0x3429a0('0x15')][_0x3429a0('0xaf')]('#value',_0x5a5421['numberFormat'](_0x179216-_0x2c70ae))),_0x2c70ae<_0x179216?(_0x35955e[_0x3429a0('0x7')](_0x3429a0('0xff'))['addClass'](_0x3429a0('0xc1'))['removeClass'](_0x3429a0('0x7a'))['find'](_0x3429a0('0x29'))['text'](_0x33df16['currency']+_0x5a5421[_0x3429a0('0x55')](_0x179216)),_0x540319[_0x3429a0('0x7')]('.vtex-cpSave')[_0x3429a0('0x48')]('qd_cpShow')[_0x3429a0('0x1b')](_0x3429a0('0x7a'))):(_0x35955e[_0x3429a0('0x7')](_0x3429a0('0xff'))[_0x3429a0('0x48')](_0x3429a0('0x7a'))[_0x3429a0('0x1b')](_0x3429a0('0xc1')),_0x540319[_0x3429a0('0x7')](_0x3429a0('0x25'))[_0x3429a0('0x48')](_0x3429a0('0x7a'))[_0x3429a0('0x1b')](_0x3429a0('0xc1'))),0x1<_0x1ffa7f?(_0x179216=_0x35955e[_0x3429a0('0x7')]('.qd_cpInstallment')['addClass'](_0x3429a0('0xc1'))['removeClass'](_0x3429a0('0x7a')),_0x179216['find'](_0x3429a0('0xb4'))[_0x3429a0('0x49')](_0x1ffa7f),_0x179216[_0x3429a0('0x7')](_0x3429a0('0xd4'))['text'](_0x33df16[_0x3429a0('0xb5')]+_0x5a5421[_0x3429a0('0x55')](_0x5882f5[_0x3429a0('0x93')]/0x64)),_0x35955e[_0x3429a0('0x7')](_0x3429a0('0xa9'))[_0x3429a0('0x48')](_0x3429a0('0x7a'))[_0x3429a0('0x1b')]('qd_cpShow')):(_0x35955e[_0x3429a0('0x7')]('.qd_cpInstallment')['addClass'](_0x3429a0('0x7a'))[_0x3429a0('0x1b')]('qd_cpShow'),_0x35955e[_0x3429a0('0x7')](_0x3429a0('0xa9'))[_0x3429a0('0x48')](_0x3429a0('0xc1'))['removeClass'](_0x3429a0('0x7a')));}else _0x540319['find'](_0x3429a0('0x7c'))[_0x3429a0('0x48')](_0x3429a0('0x7a'))[_0x3429a0('0x1b')]('qd_cpShow'),_0x540319[_0x3429a0('0x7')](_0x3429a0('0x6e'))[_0x3429a0('0x48')](_0x3429a0('0xc1'))['removeClass'](_0x3429a0('0x7a'));_0x33df16['replaceProductName']&&(_0x35955e=_0x33df16[_0x3429a0('0xf0')](_0x5882f5,_0x540319),isNaN(_0x33df16[_0x3429a0('0x8f')])||null===_0x33df16[_0x3429a0('0x8f')]?_0x540319[_0x3429a0('0x7')](_0x3429a0('0x4f'))[_0x3429a0('0x64')](_0x35955e):_0x33df16[_0x3429a0('0x3e')]&&(_0x35955e||'')[_0x3429a0('0x22')]>_0x33df16[_0x3429a0('0x8f')]?(_0x35955e=(_0x35955e||'')[_0x3429a0('0x63')](0x0,_0x33df16[_0x3429a0('0x8f')]+0x1)[_0x3429a0('0x7b')]('\x20'),_0x35955e[_0x3429a0('0x4a')](),_0x540319[_0x3429a0('0x7')](_0x3429a0('0x4f'))[_0x3429a0('0x64')](_0x35955e[_0x3429a0('0x9f')]('\x20')+_0x3429a0('0xd6'))):(_0x35955e||'')[_0x3429a0('0x22')]>_0x33df16[_0x3429a0('0x8f')]?_0x540319[_0x3429a0('0x7')](_0x3429a0('0x4f'))['html']((_0x35955e||'')[_0x3429a0('0x63')](0x0,_0x33df16[_0x3429a0('0x8f')])+_0x3429a0('0xd6')):_0x540319['find'](_0x3429a0('0x4f'))[_0x3429a0('0x64')](_0x35955e||'')),_0x35955e=_0x540319[_0x3429a0('0x7')](_0x3429a0('0xa8')),''!==_0x31c353&&_0x35955e[_0x3429a0('0x6a')]('href',_0x31c353[_0x3429a0('0xaf')](_0x4a807b,'')),_0x33df16[_0x3429a0('0xe4')]&&(_0x35955e[0x0][_0x3429a0('0x7e')]+=(_0x35955e[0x0]['search'][_0x3429a0('0x22')]?'&':'')+_0x3429a0('0xb8')+(_0x5882f5[_0x3429a0('0xb3')]||_0x5882f5['Id']));var _0x3a17a3=_0x540319['find']('.vtex-cpProductImage'),_0x43efe9=_0x540319['find'](_0x3429a0('0xc2')),_0x5c0d46=_0x3a17a3[_0x3429a0('0x7')](_0x3429a0('0x4e'));_0x35955e=_0x5c0d46[0x0],_0x31c353=_0x5c0d46[_0x3429a0('0x6a')](_0x3429a0('0x8d'))||_0x35955e[_0x3429a0('0x13')],_0x35955e=_0x5c0d46['attr']('height')||_0x35955e['naturalHeight'],_0x33df16[_0x3429a0('0x82')]&&_0x3429a0('0x79')==_0x33df16[_0x3429a0('0xa0')]&&(_0x33df16[_0x3429a0('0xa0')]={'width':_0x31c353,'height':_0x35955e});var _0x4b06fa=function(_0x31cd19,_0x43b826){var _0x195ede=_0x3429a0,_0xf92b96=_0x31cd19[_0x195ede('0xb3')]||_0x31cd19['Id'];_0x1dcca1=_0x5a5421[_0x195ede('0x56')](_0x31cd19,_0x33df16[_0x195ede('0xd0')],_0x33df16[_0x195ede('0x82')],_0x43b826);if(_0x195ede('0xa')!==typeof _0x43b826||''!==_0x1dcca1[0x0])_0x139b59=_0x540319[_0x195ede('0x7')](_0x195ede('0xcb')+(_0x1dcca1[0x0][_0x195ede('0x7b')]('?')['shift']()||_0x5c0d46['attr'](_0x195ede('0xe0')))+'\x27]:not(\x27.vtex-cpImgsThumb\x27)'),_0x2d0c6d=0x0<_0x139b59[_0x195ede('0x22')]?!0x0:!0x1,_0x43efe9[_0x195ede('0xdc')](),_0x2d0c6d?(_0x5c0d46[_0x195ede('0x4c')](!0x0)[_0x195ede('0x1b')](_0x195ede('0x2'))['fadeOut'](_0x33df16[_0x195ede('0x35')]),_0x43efe9[_0x195ede('0xd2')](),_0x540319[_0x195ede('0x7')](_0x195ede('0x1a'))[_0x195ede('0x4c')](!0x0)[_0x195ede('0x1b')]('qd-visible')[_0x195ede('0x99')](_0x33df16[_0x195ede('0x35')]),_0x139b59[_0x195ede('0x4c')](!0x0)[_0x195ede('0x48')]('qd-visible')[_0x195ede('0x8b')](_0x33df16[_0x195ede('0x35')],0x1),_0x139b59['attr']('data-sku',_0xf92b96),_0x195ede('0xa')===typeof _0x43b826&''!==_0x43b826&&_0x139b59['attr'](_0x195ede('0x3'),_0x43b826),_0x139b59['siblings'](_0x195ede('0x58')+_0xf92b96+'\x27]')['stop'](!0x0)[_0x195ede('0x48')](_0x195ede('0x2'))['fadeTo'](_0x33df16[_0x195ede('0x35')],0x1)):(_0x3750de=_0x2b3050(_0x195ede('0x71')+(_0x1dcca1[0x0]||_0x5c0d46[_0x195ede('0x6a')](_0x195ede('0xe0')))+'\x22\x20alt=\x22\x22\x20class=\x22vtex-cpSkuImage\x22\x20style=\x22display:none;\x22\x20data-sku=\x22'+_0xf92b96+'\x22\x20/>'),_0x195ede('0xa')===typeof _0x43b826&''!==_0x43b826&&_0x3750de['attr'](_0x195ede('0x3'),_0x43b826),_0x3750de['load'](function(){var _0x2e47ad=_0x195ede;_0x5a5421[_0x2e47ad('0x62')]?(_0x5c0d46[_0x2e47ad('0x4c')](!0x0)[_0x2e47ad('0x1b')](_0x2e47ad('0x2'))[_0x2e47ad('0x99')](_0x33df16[_0x2e47ad('0x35')]),_0x43efe9[_0x2e47ad('0xd2')](),_0x540319[_0x2e47ad('0x7')](_0x2e47ad('0x1a'))[_0x2e47ad('0x4c')](!0x0)['removeClass'](_0x2e47ad('0x2'))[_0x2e47ad('0x99')](_0x33df16['speedFade']),_0x3750de[_0x2e47ad('0x4c')](!0x0)[_0x2e47ad('0x48')](_0x2e47ad('0x2'))[_0x2e47ad('0x8b')](_0x33df16[_0x2e47ad('0x35')],0x1),_0x540319[_0x2e47ad('0x7')](_0x2e47ad('0x73')+_0xf92b96+'\x27]')['stop'](!0x0)[_0x2e47ad('0x48')]('qd-visible')[_0x2e47ad('0x8b')](_0x33df16['speedFade'],0x1)):(_0x43efe9['hide'](),_0x5a5421[_0x2e47ad('0x86')](_0x540319));}),_0x3a17a3[_0x195ede('0xd1')](_0x3750de));};for(var _0x3e6903 in _0x33df16[_0x3429a0('0xd')])_0x3429a0('0xf8')!==typeof _0x33df16['imageLabel'][_0x3e6903]&&_0x267a77(_0x5882f5[_0x3429a0('0xb3')],function(_0x1c701f){var _0x4dc436=_0x3429a0;_0x4b06fa(_0x1c701f[0x0],_0x33df16[_0x4dc436('0xd')][_0x3e6903]);},!0x0);},'setOriginalElements':function(_0x2fb62c){var _0x35106d=_0x554f;null!==_0x5a5421[_0x35106d('0x81')]&&_0x2fb62c[_0x35106d('0xe7')](_0x35106d('0x9e'))&&(_0x2fb62c['removeClass']('vtex-cpInfoFromSKU')['find'](_0x35106d('0xa4'))[_0x35106d('0x64')](_0x5a5421[_0x35106d('0x81')]),_0x5a5421['setOriginalImg'](_0x2fb62c),_0x5a5421[_0x35106d('0xde')](_0x2fb62c),_0x5a5421[_0x35106d('0xf3')](_0x2fb62c));},'setOriginalImg':function(_0x3c03da){var _0x143b72=_0x554f;_0x3c03da=_0x3c03da[_0x143b72('0x7')](_0x143b72('0x16')),_0x3c03da[_0x143b72('0x7')](_0x143b72('0x97'))[_0x143b72('0x4c')](!0x0)[_0x143b72('0x99')](_0x33df16[_0x143b72('0x35')]),_0x3c03da[_0x143b72('0x7')](_0x143b72('0x4e'))['stop'](!0x0)['fadeTo'](_0x33df16[_0x143b72('0x35')],0x1);},'setOriginalLink':function(_0x2ff81e){var _0x42ee09=_0x554f;_0x2ff81e[_0x42ee09('0x7')](_0x42ee09('0xa8'))[_0x42ee09('0x6a')]('href',_0x5a5421['productOriginalLink']);},'setOriginalSaveText':function(_0x598514){var _0x1fc1c7=_0x554f;_0x598514[_0x1fc1c7('0x7')](_0x1fc1c7('0x25'))['html'](_0x5a5421[_0x1fc1c7('0xf6')][0x0])[_0x1fc1c7('0x6a')](_0x1fc1c7('0x5a'),_0x5a5421[_0x1fc1c7('0xf6')][0x1]);},'setImgThumb':function(_0x152f72,_0x39ecff){var _0x11ffe0=_0x554f,_0x5dd91e=function(_0x34cc22,_0x481e66,_0x4d915a){var _0x334c60=_0x554f;_0x481e66=_0x5a5421[_0x334c60('0x56')](_0x34cc22[0x0],_0x33df16[_0x334c60('0xcf')],!0x1,_0x481e66,_0x4d915a),_0x152f72[_0x334c60('0x1b')](_0x334c60('0x26')),0x0<_0x481e66['length']&&(_0x152f72[_0x334c60('0xc4')](_0x334c60('0x5c'),_0x334c60('0x2a')+_0x481e66[0x0]+'\x27)'),_0x152f72[_0x334c60('0x7')](_0x334c60('0x9b'))['append'](_0x334c60('0x71')+_0x481e66[0x0]+_0x334c60('0x10')+(_0x34cc22[0x0][_0x334c60('0xb3')]||_0x34cc22[0x0]['Id'])+_0x334c60('0xe2')));};_0x33df16['isSmartCheckout']&&null!==_0x33df16[_0x11ffe0('0x2d')]?_0x267a77(_0x39ecff[0x0][_0x11ffe0('0xb3')]||_0x39ecff[0x0]['Id'],function(_0xf35864){_0x5dd91e(_0xf35864,_0x33df16['thumbByLabel'],_0x39ecff[0x0]);},!0x0):_0x5dd91e(_0x39ecff);},'loadSku':function(_0x4fd679,_0x11a384,_0x4eee24,_0x36ec28,_0x332966,_0x216e68,_0xe38c7c){var _0x337568=_0x554f;_0x43fd32[_0x337568('0x39')](this,_0x4fd679,_0x11a384,_0x4eee24,_0x36ec28,_0x332966,_0x216e68,_0xe38c7c);},'numberFormat':function(_0x4b7b36){var _0x1d19b3=_0x554f;for(var _0x21ec90='',_0x46a84c=_0x4b7b36[_0x1d19b3('0xee')](0x2)[_0x1d19b3('0x7b')]('.'),_0x4fa12d=0x0,_0x4026de=_0x46a84c[0x0][_0x1d19b3('0x7b')]('')['length'],_0x3b36e3=_0x46a84c[0x0][_0x1d19b3('0x22')];0x0<_0x3b36e3;_0x3b36e3--)_0x4b7b36=_0x46a84c[0x0][_0x1d19b3('0x8')](_0x3b36e3-0x1,0x1),_0x4fa12d++,0x0===_0x4fa12d%0x3&&_0x4026de>_0x4fa12d&&(_0x4b7b36='.'+_0x4b7b36),_0x21ec90=_0x4b7b36+_0x21ec90;return _0x21ec90+','+_0x46a84c[0x1];},'getImageUrl':function(_0x505551,_0x31c930,_0x399642,_0x27575b,_0x2dd227){var _0x36e0a6=_0x554f;_0x31c930=[];var _0x10f900=_0x505551[_0x36e0a6('0xda')]||_0x505551[_0x36e0a6('0x54')],_0x123c3e=function(_0x2312d4,_0xdd6b2e){var _0x1bf2f7=_0x36e0a6,_0xc728c1=[];if(0x1>_0x2312d4[_0x1bf2f7('0x22')])return _0x3d2db7(_0x1bf2f7('0x80')+_0xdd6b2e['Id']),_0xc728c1;for(var _0x1ebb97 in _0x2312d4)for(var _0x196638 in _0x2312d4[_0x1ebb97])if(null!==_0x27575b&&_0x1bf2f7('0xa')===typeof _0x27575b?_0x2312d4[_0x1ebb97][_0x196638][_0x1bf2f7('0x88')]&&_0x27575b[_0x1bf2f7('0x2e')]()==_0x2312d4[_0x1ebb97][_0x196638][_0x1bf2f7('0x88')][_0x1bf2f7('0x2e')]():_0x2312d4[_0x1ebb97][_0x196638]['IsMain']){_0xc728c1[_0x1bf2f7('0xfb')](_0x2312d4[_0x1ebb97][_0x196638][_0x1bf2f7('0x9d')]);break;}return _0xc728c1;};return _0x36e0a6('0xa')===typeof _0x27575b&&(_0x10f900=_0x123c3e(_0x10f900,_0x505551),_0x10f900[_0x36e0a6('0x22')]?_0x10f900=_0x10f900[0x0]:(_0x36e0a6('0xaa')!==typeof _0x2dd227&&_0x36e0a6('0xaa')!==typeof _0x2dd227['image']?_0x10f900=_0x2dd227[_0x36e0a6('0xda')]:(_0x10f900='',_0x5ef160(_0x36e0a6('0xbd')+_0x505551['Id'],_0x36e0a6('0x37'))),_0x5ef160('Não\x20foi\x20possível\x20obter\x20a\x20imagem\x20da\x20thumb\x20por\x20label.\x20SKU:'+_0x505551['Id'],_0x36e0a6('0x37')))),_0x399642?_0x31c930['push'](_0x33df16[_0x36e0a6('0xe9')](_0x36e0a6('0xa')===typeof _0x10f900?_0x10f900:_0x123c3e(_0x10f900,_0x505551)[0x0],_0x33df16[_0x36e0a6('0xa0')][_0x36e0a6('0x8d')],_0x33df16[_0x36e0a6('0xa0')][_0x36e0a6('0x9c')]),_0x10f900):_0x31c930[_0x36e0a6('0xfb')](_0x33df16[_0x36e0a6('0xe9')](_0x10f900,_0x33df16[_0x36e0a6('0xa3')][_0x36e0a6('0x8d')],_0x33df16[_0x36e0a6('0xa3')][_0x36e0a6('0x9c')]),_0x10f900),_0x31c930;},'setClass':function(_0x231798,_0x604869,_0x4fd396){var _0x216fd1=_0x554f;_0x231798['addClass'](_0x216fd1('0x76')+_0x604869[0x0][_0x216fd1('0xc5')][_0x216fd1('0xaf')](/[^a-zA-Z0-9\-_]/g,''));},'shelfSetup':function(_0x31e5dd){var _0x5a5d6a=_0x554f;try{_0x31e5dd['find'](_0x5a5d6a('0x46')+_0x31e5dd[_0x5a5d6a('0x7')](_0x5a5d6a('0xdd'))[_0x5a5d6a('0x1c')]()+'\x27]')[_0x5a5d6a('0x48')](_0x5a5d6a('0xbf'));var _0x30382f=null;_0x31e5dd['find'](_0x5a5d6a('0x2c'))[_0x5a5d6a('0x84')](function(){var _0x3b3fe7=_0x5a5d6a,_0x341c94=_0x2b3050(this);_0x30382f=null===_0x30382f?_0x341c94:_0x30382f,parseInt(_0x30382f[_0x3b3fe7('0x6a')](_0x3b3fe7('0x8d'))||0x0,0xa)<parseInt(_0x341c94[_0x3b3fe7('0x6a')](_0x3b3fe7('0x8d'))||0x0,0xa)&&(_0x30382f=_0x341c94);}),_0x30382f[_0x5a5d6a('0x8a')](_0x5a5d6a('0x70')),_0x30382f[_0x5a5d6a('0x78')]()['addClass'](_0x5a5d6a('0x66')),_0x5a5421['shelfHtmlWrappersSetup'](_0x31e5dd['find'](_0x5a5d6a('0x7c'))),_0x5a5421['shelfHtmlWrappersSetup'](_0x31e5dd['find'](_0x5a5d6a('0x6e')));if(0x1>_0x5a5421[_0x5a5d6a('0x94')]){var _0x504808=/\sR\$\s[0-9]+,[0-9]{1,2}/i,_0x4d68f2=_0x31e5dd['find'](_0x5a5d6a('0x25'))[_0x5a5d6a('0x49')]();-0x1<_0x4d68f2[_0x5a5d6a('0x7e')](_0x504808)&&(_0x33df16[_0x5a5d6a('0x15')]=_0x4d68f2['replace'](_0x504808,_0x5a5d6a('0x83'))),_0x5a5421[_0x5a5d6a('0x94')]++;}}catch(_0x41db86){_0x3d2db7([_0x5a5d6a('0xf4'),_0x41db86[_0x5a5d6a('0x45')]],_0x5a5d6a('0x37'));}},'shelfHtmlWrappersSetup':function(_0x297d54){var _0x54cdc8=_0x554f;_0x297d54[_0x54cdc8('0x7')](_0x54cdc8('0x7c'))[_0x54cdc8('0x53')]('<span\x20class=\x22qd_cpProductInfoWrap\x22></span>')[_0x54cdc8('0x78')]()['wrap'](_0x54cdc8('0x40'))[_0x54cdc8('0x78')]()[_0x54cdc8('0x36')](_0x54cdc8('0xbe'));}};return _0x3297ae=function(_0x2279ca,_0x551c3e,_0x1556e3,_0xf172a0){var _0x3b5036=_0x554f;function _0x258c64(_0x1edd5f,_0x592a8f,_0x6b06fe,_0x475f75){var _0x45acee=_0x554f;try{_0x2b3050[_0x45acee('0xcd')][_0x45acee('0x4')]=_0x2b3050['QD_coresPrateleira']['SkuDataCache']||{'prod':{},'sku':{}},_0x2b3050['QD_coresPrateleira']['SkuDataCache'][_0x45acee('0x32')][_0x6b06fe]=_0x1edd5f;for(var _0x104fe5 in _0x1edd5f[_0x45acee('0x6c')])_0x45acee('0xf8')!==typeof _0x1edd5f[_0x45acee('0x6c')][_0x104fe5]&&(_0x5923fd['push'](_0x1edd5f['skus'][_0x104fe5]['sku']+';'+_0x475f75),_0x5a5421[_0x45acee('0xe8')][_0x1edd5f[_0x45acee('0x6c')][_0x104fe5][_0x45acee('0xb3')]]=_0x6b06fe,_0x2b3050[_0x45acee('0xcd')]['SkuDataCache'][_0x45acee('0xb3')][_0x1edd5f[_0x45acee('0x6c')][_0x104fe5]['sku']]=_0x1edd5f['skus'][_0x104fe5],_0x2b3050[_0x45acee('0xcd')][_0x45acee('0x4')]['sku'][_0x1edd5f[_0x45acee('0x6c')][_0x104fe5][_0x45acee('0xb3')]][_0x45acee('0xd3')]=_0x6b06fe);_0x592a8f(_0x5923fd),_0x33df16[_0x45acee('0xba')](),_0x2b3050(window)[_0x45acee('0x1d')]('QuatroDigital.cp_ajaxCallback',this);}catch(_0x595404){_0x3d2db7([_0x45acee('0x51'),_0x595404['message']]);}}function _0x3a0cfe(_0x4c956b,_0x173587,_0x585c64){var _0x361de8=_0x554f,_0x1e7811=!0x1;if(_0x263ead)try{(_0x1e7811=JSON[_0x361de8('0x91')](window[_0x361de8('0xc8')][_0x361de8('0xbb')](_0x361de8('0x72')+_0x173587)))&&_0x258c64(_0x1e7811,_0x4c956b,_0x173587,_0x585c64);}catch(_0x4bd80e){_0x3d2db7(_0x361de8('0x1e')+_0x4bd80e['message'],_0x361de8('0x37'));}_0x1e7811||_0x2b3050[_0x361de8('0xca')]({'url':_0x361de8('0xc7')+_0x173587,'dataType':_0x361de8('0xc9'),'success':function(_0x8902d7){var _0x2bd21f=_0x361de8;_0x258c64(_0x8902d7,_0x4c956b,_0x173587,_0x585c64),_0x263ead&&window[_0x2bd21f('0xc8')][_0x2bd21f('0x12')](_0x2bd21f('0x72')+_0x173587,JSON[_0x2bd21f('0xb9')](_0x8902d7),0x78);},'error':function(){var _0x4988ee=_0x361de8;_0x3d2db7(_0x4988ee('0x61'));},'clearQueueDelay':null});}var _0x5923fd=[];_0x33df16[_0x3b5036('0x34')](_0xf172a0,_0x551c3e,_0x1556e3,function(_0x50fa24){var _0x54f955=_0x3b5036;if(_0x50fa24)try{var _0x33fdc1=0x1,_0x297c0d=0x0;_0x3a0cfe(function(_0x45b352){_0x297c0d+=0x1,_0x33fdc1===_0x297c0d&&_0x2279ca(_0x45b352);},_0x551c3e,_0x1556e3);for(var _0x54935f=0x0;_0x54935f<_0x50fa24['length']&&(!_0x33df16[_0x54f955('0x90')]||_0x54935f!==_0x33df16[_0x54f955('0xb0')]);_0x54935f++)_0x33fdc1+=0x1,_0x3a0cfe(function(_0x10bd95){_0x297c0d+=0x1,_0x33fdc1===_0x297c0d&&_0x2279ca(_0x10bd95);},_0x50fa24[_0x54935f]['id'],_0x50fa24[_0x54935f][_0x54f955('0xa2')]);}catch(_0x2741ef){_0x3d2db7(_0x2741ef[_0x54f955('0x45')]);}else _0x3a0cfe(function(_0x515fa1){_0x2279ca(_0x515fa1);},_0x551c3e,_0x1556e3);});},_0x43fd32=function(_0x3db5b7,_0x440ae6,_0x53a6b5,_0x38c817,_0x3ef99d,_0xe00ff4,_0x4c8f65){var _0x35fdcf=_0x554f;_0x5a5421['checkIsAvaliable'](_0x3db5b7,_0x440ae6,_0x3ef99d,[_0x2b3050[_0x35fdcf('0xcd')]['SkuDataCache'][_0x35fdcf('0xb3')][_0x440ae6]],_0xe00ff4,_0x4c8f65);},_0x267a77=function(_0x2333c3,_0x612063,_0x285f99){var _0x49a672=_0x554f;if(_0x49a672('0xaa')!==typeof _0x2b3050[_0x49a672('0xcd')][_0x49a672('0x4')][_0x49a672('0xb3')][_0x2333c3]&&_0x49a672('0xaa')!==typeof _0x2b3050[_0x49a672('0xcd')]['SkuDataCache'][_0x49a672('0xb3')][_0x2333c3]['fullData'])return _0x49a672('0xf8')===typeof _0x612063&&_0x612063(_0x2b3050[_0x49a672('0xcd')][_0x49a672('0x4')][_0x49a672('0xb3')][_0x2333c3]['fullData']),_0x2b3050[_0x49a672('0xcd')][_0x49a672('0x4')][_0x49a672('0xb3')][_0x2333c3][_0x49a672('0x17')];return _0x2b3050[_0x49a672('0xca')]({'url':_0x49a672('0xc3')+_0x2333c3,'data':_0x49a672('0xc9'),'success':function(_0x596352){var _0x4b58de=_0x49a672;_0x2b3050['QD_coresPrateleira']['SkuDataCache'][_0x4b58de('0xb3')][_0x2333c3][_0x4b58de('0x17')]=_0x596352,_0x4b58de('0xf8')===typeof _0x612063&&_0x612063(_0x2b3050[_0x4b58de('0xcd')][_0x4b58de('0x4')][_0x4b58de('0xb3')][_0x2333c3][_0x4b58de('0x17')]);},'error':function(){_0x3d2db7('Erro\x20ao\x20tentar\x20obter\x20todos\x20os\x20dados\x20do\x20SKU.');},'async':_0x49a672('0xaa')!==typeof _0x285f99?_0x285f99:!0x1,'clearQueueDelay':null}),_0x2b3050[_0x49a672('0xcd')][_0x49a672('0x4')][_0x49a672('0xb3')][_0x2333c3][_0x49a672('0x17')];},_0x5a5421[_0x34fd94('0x3c')]=jQuery(this),_0x5a5421[_0x34fd94('0x44')](),_0x33df16[_0x34fd94('0x5f')](),_0x2b3050(window)[_0x34fd94('0x1d')](_0x34fd94('0x74'),this),_0x5a5421[_0x34fd94('0x3c')];}catch(_0x2b349d){_0x3d2db7([_0x34fd94('0xe'),_0x2b349d[_0x34fd94('0x45')]],_0x34fd94('0x37'));}};}}(this,jQuery));
/* Quatro Digital Amazing Menu // 2.13 // Carlos Vinicius // Todos os direitos reservados */

/* FUNÇÕES AUXILIARES */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);

var _0xefd7=['.qd_amazing_menu_auto','toUpperCase','parent','last','length','exec','qd-am-dropdown-menu',':not(ul)','text','each','html','apply','call','getParent','attr','[QD\x20Amazing\x20Menu]\x0a','warn','QD_amazingMenu','qd-am-dropdown','qd-am-first','-li','qd-am-has-ul','hide','toLowerCase','>ul','insertBefore','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ul[itemscope]','children','url','addClass','wnforfav%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe','.qd_am_code','qd-am-li-','function','info','qd-amazing-menu','UL\x20do\x20menu\x20não\x20encontrada','first','qd-am-collection-wrapper','extend','qd-am-banner-wrapper','QuatroDigital.am.callback','trigger','replace','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','.box-banner','qdAjax','qd-am-last','li\x20>ul','object','filter','undefined','unshift','img[alt=\x27','error','>li','\x27\x20falho.','qd-am-level-','ajaxCallback','qd-am-elem-','qd-am-column','alerta','.qd-am-collection','trim','clone','fromCharCode','find','qd-am-content-loaded','/qd-amazing-menu','data-qdam-value','add','callback','qdAmAddNdx','join'];(function(_0x412f2d,_0xefd753){var _0x3efff1=function(_0x3c6a16){while(--_0x3c6a16){_0x412f2d['push'](_0x412f2d['shift']());}};_0x3efff1(++_0xefd753);}(_0xefd7,0x1ce));var _0x3eff=function(_0x412f2d,_0xefd753){_0x412f2d=_0x412f2d-0x0;var _0x3efff1=_0xefd7[_0x412f2d];return _0x3efff1;};(function(_0x3c6a16){var _0x5327a6=_0x3eff,_0x1a9628,_0x1cb40f=jQuery;if(_0x5327a6('0x16')!==typeof _0x1cb40f['fn']['QD_amazingMenu']){var _0x48e2ff={'url':_0x5327a6('0x39'),'callback':function(){},'ajaxCallback':function(){}},_0x228e84=function(_0x28be66,_0x48e41b){var _0x3d8907=_0x5327a6;if(_0x3d8907('0x26')===typeof console&&_0x3d8907('0x28')!==typeof console[_0x3d8907('0x2b')]&&'undefined'!==typeof console['info']&&_0x3d8907('0x28')!==typeof console[_0x3d8907('0x4')]){var _0x60ce67;_0x3d8907('0x26')===typeof _0x28be66?(_0x28be66[_0x3d8907('0x29')]('[QD\x20Amazing\x20Menu]\x0a'),_0x60ce67=_0x28be66):_0x60ce67=[_0x3d8907('0x3')+_0x28be66];if('undefined'===typeof _0x48e41b||'alerta'!==_0x48e41b[_0x3d8907('0xb')]()&&'aviso'!==_0x48e41b[_0x3d8907('0xb')]()){if('undefined'!==typeof _0x48e41b&&'info'===_0x48e41b['toLowerCase']())try{console[_0x3d8907('0x17')]['apply'](console,_0x60ce67);}catch(_0x2101e5){try{console[_0x3d8907('0x17')](_0x60ce67[_0x3d8907('0x3e')]('\x0a'));}catch(_0x4d789b){}}else try{console[_0x3d8907('0x2b')][_0x3d8907('0x4a')](console,_0x60ce67);}catch(_0x1e06a6){try{console['error'](_0x60ce67['join']('\x0a'));}catch(_0x5c0084){}}}else try{console[_0x3d8907('0x4')][_0x3d8907('0x4a')](console,_0x60ce67);}catch(_0x473726){try{console['warn'](_0x60ce67[_0x3d8907('0x3e')]('\x0a'));}catch(_0x3e1083){}}}};_0x1cb40f['fn'][_0x5327a6('0x3d')]=function(){var _0x4ea92a=_0x5327a6,_0x1ff285=_0x1cb40f(this);return _0x1ff285[_0x4ea92a('0x48')](function(_0x9acd9e){var _0x217dad=_0x4ea92a;_0x1cb40f(this)[_0x217dad('0x12')](_0x217dad('0x15')+_0x9acd9e);}),_0x1ff285[_0x4ea92a('0x1a')]()[_0x4ea92a('0x12')](_0x4ea92a('0x7')),_0x1ff285[_0x4ea92a('0x42')]()[_0x4ea92a('0x12')](_0x4ea92a('0x24')),_0x1ff285;},_0x1cb40f['fn'][_0x5327a6('0x5')]=function(){},_0x3c6a16=function(_0x4aff65){var _0x362b48=_0x5327a6,_0x309412={'y':'bwnforfav%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','yb':_0x362b48('0x13')};return function(_0x509069){var _0x3d964b=_0x362b48,_0x2b1d79=function(_0x34e3fc){return _0x34e3fc;},_0x5b6699=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x509069=_0x509069['d'+_0x5b6699[0x10]+'c'+_0x5b6699[0x11]+'m'+_0x2b1d79(_0x5b6699[0x1])+'n'+_0x5b6699[0xd]]['l'+_0x5b6699[0x12]+'c'+_0x5b6699[0x0]+'ti'+_0x2b1d79('o')+'n'];var _0x2e8efe=function(_0x1ed6c8){var _0x13a547=_0x3eff;return escape(encodeURIComponent(_0x1ed6c8[_0x13a547('0x20')](/\./g,'¨')[_0x13a547('0x20')](/[a-zA-Z]/g,function(_0x5b3a13){var _0x281515=_0x13a547;return String[_0x281515('0x36')](('Z'>=_0x5b3a13?0x5a:0x7a)>=(_0x5b3a13=_0x5b3a13['charCodeAt'](0x0)+0xd)?_0x5b3a13:_0x5b3a13-0x1a);})));},_0x2e219a=_0x2e8efe(_0x509069[[_0x5b6699[0x9],_0x2b1d79('o'),_0x5b6699[0xc],_0x5b6699[_0x2b1d79(0xd)]][_0x3d964b('0x3e')]('')]);_0x2e8efe=_0x2e8efe((window[['js',_0x2b1d79('no'),'m',_0x5b6699[0x1],_0x5b6699[0x4][_0x3d964b('0x40')](),'ite'][_0x3d964b('0x3e')]('')]||'---')+['.v',_0x5b6699[0xd],'e',_0x2b1d79('x'),'co',_0x2b1d79('mm'),'erc',_0x5b6699[0x1],'.c',_0x2b1d79('o'),'m.',_0x5b6699[0x13],'r'][_0x3d964b('0x3e')](''));for(var _0x34bee8 in _0x309412){if(_0x2e8efe===_0x34bee8+_0x309412[_0x34bee8]||_0x2e219a===_0x34bee8+_0x309412[_0x34bee8]){var _0x15cafc='tr'+_0x5b6699[0x11]+'e';break;}_0x15cafc='f'+_0x5b6699[0x0]+'ls'+_0x2b1d79(_0x5b6699[0x1])+'';}return _0x2b1d79=!0x1,-0x1<_0x509069[[_0x5b6699[0xc],'e',_0x5b6699[0x0],'rc',_0x5b6699[0x9]]['join']('')]['indexOf'](_0x3d964b('0xe'))&&(_0x2b1d79=!0x0),[_0x15cafc,_0x2b1d79];}(_0x4aff65);}(window);if(!eval(_0x3c6a16[0x0]))return _0x3c6a16[0x1]?_0x228e84('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;var _0x173a0d=function(_0x177857){var _0x3f4d1f=_0x5327a6,_0x89662b=_0x177857[_0x3f4d1f('0x37')](_0x3f4d1f('0x14')),_0x196ab4=_0x89662b[_0x3f4d1f('0x27')]('.qd-am-banner'),_0x3ad701=_0x89662b[_0x3f4d1f('0x27')](_0x3f4d1f('0x33'));if(_0x196ab4['length']||_0x3ad701[_0x3f4d1f('0x43')])_0x196ab4[_0x3f4d1f('0x41')]()['addClass'](_0x3f4d1f('0x1d')),_0x3ad701['parent']()['addClass'](_0x3f4d1f('0x1b')),_0x1cb40f[_0x3f4d1f('0x23')]({'url':_0x1a9628[_0x3f4d1f('0x11')],'dataType':_0x3f4d1f('0x49'),'success':function(_0x6f589f){var _0x194783=_0x3f4d1f,_0xd624c9=_0x1cb40f(_0x6f589f);_0x196ab4[_0x194783('0x48')](function(){var _0x8a64df=_0x194783,_0x1d1a55=_0x1cb40f(this),_0x3973d5=_0xd624c9[_0x8a64df('0x37')](_0x8a64df('0x2a')+_0x1d1a55[_0x8a64df('0x2')](_0x8a64df('0x3a'))+'\x27]');_0x3973d5['length']&&(_0x3973d5[_0x8a64df('0x48')](function(){var _0x3543b5=_0x8a64df;_0x1cb40f(this)[_0x3543b5('0x1')](_0x3543b5('0x22'))['clone']()[_0x3543b5('0xd')](_0x1d1a55);}),_0x1d1a55[_0x8a64df('0xa')]());})[_0x194783('0x12')](_0x194783('0x38')),_0x3ad701[_0x194783('0x48')](function(){var _0x247ac5=_0x194783,_0x36a0a3={},_0xcbc940=_0x1cb40f(this);_0xd624c9[_0x247ac5('0x37')]('h2')[_0x247ac5('0x48')](function(){var _0x291bad=_0x247ac5;if(_0x1cb40f(this)['text']()['trim']()[_0x291bad('0xb')]()==_0xcbc940[_0x291bad('0x2')](_0x291bad('0x3a'))[_0x291bad('0x34')]()['toLowerCase']())return _0x36a0a3=_0x1cb40f(this),!0x1;}),_0x36a0a3['length']&&(_0x36a0a3['each'](function(){var _0x40c240=_0x247ac5;_0x1cb40f(this)['getParent']('[class*=\x27colunas\x27]')[_0x40c240('0x35')]()['insertBefore'](_0xcbc940);}),_0xcbc940[_0x247ac5('0xa')]());})[_0x194783('0x12')](_0x194783('0x38'));},'error':function(){var _0x32ed75=_0x3f4d1f;_0x228e84(_0x32ed75('0x21')+_0x1a9628[_0x32ed75('0x11')]+_0x32ed75('0x2d'));},'complete':function(){var _0x4fedcd=_0x3f4d1f;_0x1a9628[_0x4fedcd('0x2f')][_0x4fedcd('0x0')](this),_0x1cb40f(window)[_0x4fedcd('0x1f')]('QuatroDigital.am.ajaxCallback',_0x177857);},'clearQueueDelay':0xbb8});};_0x1cb40f[_0x5327a6('0x5')]=function(_0xe95141){var _0x2f2b45=_0x5327a6,_0x304183=_0xe95141['find'](_0x2f2b45('0xf'))['each'](function(){var _0x2a2dd7=_0x2f2b45,_0x2d83d8=_0x1cb40f(this);if(!_0x2d83d8[_0x2a2dd7('0x43')])return _0x228e84([_0x2a2dd7('0x19'),_0xe95141],_0x2a2dd7('0x32'));_0x2d83d8[_0x2a2dd7('0x37')](_0x2a2dd7('0x25'))['parent']()[_0x2a2dd7('0x12')](_0x2a2dd7('0x9')),_0x2d83d8[_0x2a2dd7('0x37')]('li')[_0x2a2dd7('0x48')](function(){var _0x2c979c=_0x2a2dd7,_0x37b286=_0x1cb40f(this),_0x10c40f=_0x37b286[_0x2c979c('0x10')](_0x2c979c('0x46'));_0x10c40f[_0x2c979c('0x43')]&&_0x37b286[_0x2c979c('0x12')](_0x2c979c('0x30')+_0x10c40f['first']()[_0x2c979c('0x47')]()[_0x2c979c('0x34')]()['replaceSpecialChars']()[_0x2c979c('0x20')](/\./g,'')[_0x2c979c('0x20')](/\s/g,'-')[_0x2c979c('0xb')]());});var _0x587e02=_0x2d83d8[_0x2a2dd7('0x37')](_0x2a2dd7('0x2c'))[_0x2a2dd7('0x3d')]();_0x2d83d8[_0x2a2dd7('0x12')](_0x2a2dd7('0x18')),_0x587e02=_0x587e02['find'](_0x2a2dd7('0xc')),_0x587e02[_0x2a2dd7('0x48')](function(){var _0x3b232f=_0x2a2dd7,_0x26e8d0=_0x1cb40f(this);_0x26e8d0[_0x3b232f('0x37')](_0x3b232f('0x2c'))[_0x3b232f('0x3d')]()[_0x3b232f('0x12')](_0x3b232f('0x31')),_0x26e8d0[_0x3b232f('0x12')](_0x3b232f('0x45')),_0x26e8d0['parent']()[_0x3b232f('0x12')](_0x3b232f('0x6'));}),_0x587e02[_0x2a2dd7('0x12')](_0x2a2dd7('0x6'));var _0x32e999=0x0,_0x39fa38=function(_0x41fc99){var _0xf8e744=_0x2a2dd7;_0x32e999+=0x1,_0x41fc99=_0x41fc99['children']('li')[_0xf8e744('0x10')]('*'),_0x41fc99['length']&&(_0x41fc99['addClass'](_0xf8e744('0x2e')+_0x32e999),_0x39fa38(_0x41fc99));};_0x39fa38(_0x2d83d8),_0x2d83d8[_0x2a2dd7('0x3b')](_0x2d83d8[_0x2a2dd7('0x37')]('ul'))[_0x2a2dd7('0x48')](function(){var _0x10988f=_0x2a2dd7,_0x342e6f=_0x1cb40f(this);_0x342e6f[_0x10988f('0x12')]('qd-am-'+_0x342e6f[_0x10988f('0x10')]('li')[_0x10988f('0x43')]+_0x10988f('0x8'));});});_0x173a0d(_0x304183),_0x1a9628[_0x2f2b45('0x3c')]['call'](this),_0x1cb40f(window)['trigger'](_0x2f2b45('0x1e'),_0xe95141);},_0x1cb40f['fn']['QD_amazingMenu']=function(_0x58fefe){var _0x1c3e3d=_0x5327a6,_0x474745=_0x1cb40f(this);if(!_0x474745[_0x1c3e3d('0x43')])return _0x474745;return _0x1a9628=_0x1cb40f[_0x1c3e3d('0x1c')]({},_0x48e2ff,_0x58fefe),_0x474745[_0x1c3e3d('0x44')]=new _0x1cb40f[(_0x1c3e3d('0x5'))](_0x1cb40f(this)),_0x474745;},_0x1cb40f(function(){var _0x3d903b=_0x5327a6;_0x1cb40f(_0x3d903b('0x3f'))[_0x3d903b('0x5')]();});}}(this));
/* FUNÇÕES AUXILIARES */
	
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};


/* Quatro Digital Simple Cart // 4.15 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */


(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart){b(function(){var b=vtexjs.checkout.getOrderForm;vtexjs.checkout.getOrderForm=function(){return b.call()}});try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(c,p,g){var d,h,m,l,f,k,q,r,t,n;h=function(a,b){if("object"===typeof console){var e="object"===typeof a;"undefined"!==typeof b&&"alerta"===b.toLowerCase()?e?console.warn("[Simple Cart]\n",
a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?e?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):e?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};d=b(this);"object"===typeof c?p=c:(c=c||!1,d=d.add(b.QD_simpleCart.elements));if(!d.length)return d;b.QD_simpleCart.elements=b.QD_simpleCart.elements.add(d);
g="undefined"===typeof g?!1:g;m={cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:(b("meta[name=currency]").attr("content")||"R$")+" ",showQuantityByItems:!0,smartCheckout:!0,callback:function(){}};f=b.extend({},m,p);l=b("");d.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});n=function(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var b=0,e=0,c=0;c<a.totalizers.length;c++)"Shipping"==a.totalizers[c].id&&
(e+=a.totalizers[c].value),b+=a.totalizers[c].value;window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(b/100,2,",",".");window._QuatroDigital_CartData.shipping=f.currencySymbol+qd_number_format(e/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((b+e)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(c=0;c<a.items.length;c++)window._QuatroDigital_CartData.qtt+=a.items[c].quantity;else window._QuatroDigital_CartData.qtt=
a.items.length||0;try{window._QuatroDigital_CartData.callback&&window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(u){h("Problemas com o callback do Smart Cart")}t(l)};k=function(a,b){1===a?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};r=function(a){1>a?d.addClass("qd-emptyCart"):d.removeClass("qd-emptyCart")};q=function(a,b){var c;c=parseInt(window._QuatroDigital_CartData.qtt,10);b.$this.show();isNaN(c)&&(h("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero! O valor ser\u00e1 definido para 0.",
"alerta"),c=0);b.cartTotalE.html(window._QuatroDigital_CartData.total);b.cartQttE.html(c);k(c,b.itemsTextE);r(c)};t=function(a){d.each(function(){var d={},e;e=b(this);c&&e.data("qd_simpleCartOpts")&&b.extend(f,e.data("qd_simpleCartOpts"));d.$this=e;d.cartQttE=e.find(f.cartQtt)||l;d.cartTotalE=e.find(f.cartTotal)||l;d.itemsTextE=e.find(f.itemsText)||l;d.emptyElem=e.find(f.emptyCart)||l;q(a,d);e.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||
{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(g?g:!c))return n(window._QuatroDigital_DropDown.getOrderForm);if("object"!==typeof window.vtexjs||"undefined"===typeof window.vtexjs.checkout)if("object"===typeof vtex&&"object"===typeof vtex.checkout&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return h("N\u00e3o foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function(a){n(a);window._QuatroDigital_DropDown.getOrderForm=
a},fail:function(a){h(["N\u00e3o foi poss\u00edvel obter os dados para o carrinho.",a])}})}else alert("Esta \u00e9 uma fun\u00e7\u00e3o descontinuada =/")})();f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return d};b.QD_simpleCart={elements:b("")};b(function(){var c;"function"===typeof window.ajaxRequestbuyButtonAsynchronous&&(c=window.ajaxRequestbuyButtonAsynchronous,window.ajaxRequestbuyButtonAsynchronous=function(k,g,d,h,m){c.call(this,k,g,d,h,function(){"function"===typeof m&&
m();b.QD_simpleCart.elements.each(function(){var c;c=b(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})})});var k=window.ReloadItemsCart||void 0;window.ReloadItemsCart=function(c){b.fn.simpleCart(!0);"function"===typeof k?k.call(this,c):alert(c)};b(function(){var c=b(".qd_cart_auto");c.length&&c.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex cartProductAdded.vtex",function(){b.fn.simpleCart(!0)})})}catch(c){"undefined"!==typeof console&&"function"===typeof console.error&&
console.error("Oooops! ",c)}}})();
/*FUNÇÕES AUXILIARES*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* FUNÇÕES AUXILIARES */
	
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};


/* Quatro Digital Simple Cart // 4.15 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */


(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart){b(function(){var b=vtexjs.checkout.getOrderForm;vtexjs.checkout.getOrderForm=function(){return b.call()}});try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(c,p,g){var d,h,m,l,f,k,q,r,t,n;h=function(a,b){if("object"===typeof console){var e="object"===typeof a;"undefined"!==typeof b&&"alerta"===b.toLowerCase()?e?console.warn("[Simple Cart]\n",
a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?e?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):e?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};d=b(this);"object"===typeof c?p=c:(c=c||!1,d=d.add(b.QD_simpleCart.elements));if(!d.length)return d;b.QD_simpleCart.elements=b.QD_simpleCart.elements.add(d);
g="undefined"===typeof g?!1:g;m={cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:(b("meta[name=currency]").attr("content")||"R$")+" ",showQuantityByItems:!0,smartCheckout:!0,callback:function(){}};f=b.extend({},m,p);l=b("");d.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});n=function(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var b=0,e=0,c=0;c<a.totalizers.length;c++)"Shipping"==a.totalizers[c].id&&
(e+=a.totalizers[c].value),b+=a.totalizers[c].value;window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(b/100,2,",",".");window._QuatroDigital_CartData.shipping=f.currencySymbol+qd_number_format(e/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((b+e)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(c=0;c<a.items.length;c++)window._QuatroDigital_CartData.qtt+=a.items[c].quantity;else window._QuatroDigital_CartData.qtt=
a.items.length||0;try{window._QuatroDigital_CartData.callback&&window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(u){h("Problemas com o callback do Smart Cart")}t(l)};k=function(a,b){1===a?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};r=function(a){1>a?d.addClass("qd-emptyCart"):d.removeClass("qd-emptyCart")};q=function(a,b){var c;c=parseInt(window._QuatroDigital_CartData.qtt,10);b.$this.show();isNaN(c)&&(h("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero! O valor ser\u00e1 definido para 0.",
"alerta"),c=0);b.cartTotalE.html(window._QuatroDigital_CartData.total);b.cartQttE.html(c);k(c,b.itemsTextE);r(c)};t=function(a){d.each(function(){var d={},e;e=b(this);c&&e.data("qd_simpleCartOpts")&&b.extend(f,e.data("qd_simpleCartOpts"));d.$this=e;d.cartQttE=e.find(f.cartQtt)||l;d.cartTotalE=e.find(f.cartTotal)||l;d.itemsTextE=e.find(f.itemsText)||l;d.emptyElem=e.find(f.emptyCart)||l;q(a,d);e.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||
{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(g?g:!c))return n(window._QuatroDigital_DropDown.getOrderForm);if("object"!==typeof window.vtexjs||"undefined"===typeof window.vtexjs.checkout)if("object"===typeof vtex&&"object"===typeof vtex.checkout&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return h("N\u00e3o foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function(a){n(a);window._QuatroDigital_DropDown.getOrderForm=
a},fail:function(a){h(["N\u00e3o foi poss\u00edvel obter os dados para o carrinho.",a])}})}else alert("Esta \u00e9 uma fun\u00e7\u00e3o descontinuada =/")})();f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return d};b.QD_simpleCart={elements:b("")};b(function(){var c;"function"===typeof window.ajaxRequestbuyButtonAsynchronous&&(c=window.ajaxRequestbuyButtonAsynchronous,window.ajaxRequestbuyButtonAsynchronous=function(k,g,d,h,m){c.call(this,k,g,d,h,function(){"function"===typeof m&&
m();b.QD_simpleCart.elements.each(function(){var c;c=b(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})})});var k=window.ReloadItemsCart||void 0;window.ReloadItemsCart=function(c){b.fn.simpleCart(!0);"function"===typeof k?k.call(this,c):alert(c)};b(function(){var c=b(".qd_cart_auto");c.length&&c.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex cartProductAdded.vtex",function(){b.fn.simpleCart(!0)})})}catch(c){"undefined"!==typeof console&&"function"===typeof console.error&&
console.error("Oooops! ",c)}}})();
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/* Quatro Digital - Smart Buy Button // 2.1 // Carlos Vinicius // Todos os direitos reservados */
(function(u){try{var a=jQuery,r=a({}),n=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[Quatro Digital - Buy Button]\n"),b=a):b=["[Quatro Digital - Buy Button]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(h){try{console.info(b.join("\n"))}catch(k){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(h){try{console.warn(b.join("\n"))}catch(k){}}}},t={timeRemoveNewItemClass:5E3,isSmartCheckout:!0,buyButton:".productInformationWrapper  a.buy-button",buyQtt:"input.buy-in-page-quantity",selectSkuMsg:"javascript:",autoWatchBuyButton:!0,buyIfQuantityZeroed:!1,fakeRequest:!1,productPageCallback:function(g,d,b){a("body").is(".productQuickView")&&("success"===d?alert("Produto adicionado ao carrinho!"):(alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),
("object"===typeof parent?parent:document).location.href=b))},isProductPage:function(){return a("body").is("#produto, .produto")},execDefaultAction:function(a){return!1},allowBuyClick:function(){return!0},callback:function(){},asyncCallback:function(){}};a.QD_buyButton=function(g,d,b){function h(a){f.isSmartCheckout?a.data("qd-bb-click-active")||(a.data("qd-bb-click-active",1),a.on("click.qd_bb_buy_sc",function(a){if(!f.allowBuyClick())return!0;if(!0!==m.clickBuySmartCheckout.call(this))return a.preventDefault(),
!1})):alert("M\u00e9todo descontinuado!")}function k(e){e=e||a(f.buyButton);e.each(function(){var c=a(this);c.is(".qd-sbb-on")||(c.addClass("qd-sbb-on"),c.is(".btn-add-buy-button-asynchronous")&&!c.is(".remove-href")||c.data("qd-bb-active")||(c.data("qd-bb-active",1),c.children(".qd-bb-productAdded").length||c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'),c.is(".buy-in-page-button")&&f.isProductPage()&&l.call(c),h(c)))});f.isProductPage()&&
!e.length&&n("Oooops!\nAparentemente esta \u00e9 uma p\u00e1gina de produto por\u00e9m n\u00e3o encontrei nenhum bot\u00e3o comprar!\nVerifique se \u00e9 este mesmo o seletor: '"+e.selector+"'.","info")}var f=b||f,p=a(g),m=this;window._Quatro_Digital_dropDown=window._Quatro_Digital_dropDown||{};window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};m.prodAdd=function(e,c){p.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");a("body").addClass("qd-bb-lightBoxBodyProdAdd");var b=
a(f.buyButton).filter("[href='"+(e.attr("href")||"---")+"']").add(e);b.addClass("qd-bb-itemAddBuyButtonWrapper");setTimeout(function(){p.removeClass("qd-bb-itemAddCartWrapper");b.removeClass("qd-bb-itemAddBuyButtonWrapper")},f.timeRemoveNewItemClass);window._Quatro_Digital_dropDown.getOrderForm=void 0;if("undefined"!==typeof d&&"function"===typeof d.getCartInfoByUrl)return f.isSmartCheckout||(n("fun\u00e7\u00e3o descontinuada"),d.getCartInfoByUrl()),window._QuatroDigital_DropDown.getOrderForm=void 0,
d.getCartInfoByUrl(function(c){window._Quatro_Digital_dropDown.getOrderForm=c;a.fn.simpleCart(!0,void 0,!0)},{lastSku:c});window._Quatro_Digital_dropDown.allowUpdate=!0;a.fn.simpleCart(!0);a(window).trigger("QuatroDigital.qd_sc_prodAdd",[e,c,b])};(function(){if(f.isSmartCheckout&&f.autoWatchBuyButton){var e=a(".btn-add-buy-button-asynchronous");e.length&&k(e)}})();var l=function(){var e=a(this);"undefined"!==typeof e.data("buyButton")?(e.unbind("click"),h(e)):(e.bind("mouseenter.qd_bb_buy_sc",function(c){e.unbind("click");
h(e);a(this).unbind(c)}),a(window).load(function(){e.unbind("click");h(e);e.unbind("mouseenter.qd_bb_buy_sc")}))};m.clickBuySmartCheckout=function(){var e=a(this),c=e.attr("href")||"";if(-1<c.indexOf(f.selectSkuMsg))return!0;c=c.replace(/redirect=(false|true)/ig,"").replace("?","?redirect=false&").replace(/&&/ig,"&");if(f.execDefaultAction(e))return e.attr("href",c.replace("redirect=false","redirect=true")),!0;c=c.replace(/http.?:/i,"");r.queue(function(b){if(!f.buyIfQuantityZeroed&&!/(&|\?)qty=[1-9][0-9]*/ig.test(c))return b();
var d=function(b,d){var g=c.match(/sku=([0-9]+)/ig),h=[];if("object"===typeof g&&null!==g)for(var k=g.length-1;0<=k;k--){var l=parseInt(g[k].replace(/sku=/ig,""));isNaN(l)||h.push(l)}f.productPageCallback.call(this,b,d,c);m.buyButtonClickCallback.call(this,b,d,c,h);m.prodAdd(e,c.split("ku=").pop().split("&").shift());"function"===typeof f.asyncCallback&&f.asyncCallback.call(this);a(window).trigger("productAddedToCart");a(window).trigger("cartProductAdded.vtex")};f.fakeRequest?(d(null,"success"),b()):
a.ajax({url:c,complete:d,mimeType:"text/html"}).always(function(){b()})})};m.buyButtonClickCallback=function(a,c,b,d){try{"success"===c&&"object"===typeof window.parent&&"function"===typeof window.parent._QuatroDigital_prodBuyCallback&&window.parent._QuatroDigital_prodBuyCallback(a,c,b,d)}catch(v){n("Problemas ao tentar comunicar a p\u00e1gina que o produto foi aicionado ao carrinho.")}};k();"function"===typeof f.callback?f.callback.call(this):n("Callback n\u00e3o \u00e9 uma fun\u00e7\u00e3o")};var l=
a.Callbacks();a.fn.QD_buyButton=function(g,d){var b=a(this);"undefined"!==typeof d||"object"!==typeof g||g instanceof a||(d=g,g=void 0);var h;l.add(function(){b.children(".qd-bb-itemAddWrapper").length||b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');h=new a.QD_buyButton(b,g,a.extend({},t,d))});l.fire();a(window).on("QuatroDigital.qd_bb_prod_add",function(a,b,d){h.prodAdd(b,d)});return a.extend(b,h)};var q=0;a(document).ajaxSend(function(a,d,b){-1<b.url.toLowerCase().indexOf("/checkout/cart/add")&&
(q=(b.url.match(/sku=([0-9]+)/i)||[""]).pop())});a(window).bind("productAddedToCart.qdSbbVtex",function(){a(window).trigger("QuatroDigital.qd_bb_prod_add",[new a,q])});a(document).ajaxStop(function(){l.fire()})}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",g)}})(this);
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};



/* Quatro Digital Plus Smart Cart // 7.6 // Carlos Vinicius // Todos os direitos reservados */
var _0x4e80=['keyCode','productCategoryIds','join','.qdDdcContainer','.qd-ddc-prodPrice','indexOf','click.qd_ddc_scrollUp','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','getOrderForm','slas','_QuatroDigital_CartData','.qd-bap-item-added','insertBefore','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho','call','extend','.qd-ddc-infoTotal','prod_','outerHeight','html','.qd-ddc-cep-ok','Atenção,\x20este\x20método\x20esta\x20descontinuado.','click','message','<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>','renderProductsList','formatCepField','.qd-ddc-viewCart','qd-ddc-prodLoaded','qd-bb-lightBoxBodyProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2','data-sku','dataOptionsCache','bwnforfav%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','ajaxStop','#messageText','input.qd-productId[value=','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','add','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','getCartInfoByUrl','<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>','atenção\x20esta\x20método\x20esta\x20descontinuado','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','prepend','.qd-ddc-quantityMore','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','messages','.qd-ddc-infoTotalValue','linkCart','Oooops!\x20','Continuar\x20Comprando','each','#total','updateOnlyHover','selector','object','unshift','setOrderForm','notification','replace','.qd-ddc-infoTotalShipping','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','.qd-ddc-checkout','data-sku-index','error','.qd-ddc-cep-close','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20cItems[','.qd-bap-qtt','name','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','#shipping','click.qd_ddc_minus','.qd-ddc-cep-btn','append','postalCode','callback','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','cartIsEmpty','.qd-ddc-notification','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','Este\x20método\x20esta\x20descontinuado!','Callbacks','toUpperCase','address','\x20dias\x20útéis','qd-ddc-cart-empty','remove','charCodeAt','.qd-ddc-prodQttWrapper:not(.qd_on)','</div>','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','parent','qd-bap-item-added','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','</td><td>','addClass','buildNotification','clearMessages','aviso','.qd-ddc-scrollDown','qd-ddc-lastAdded','shippingCalculate','.qd-ddc-prodRow','continueShopping','.qd-bap-wrapper','click._QD_DDC_closeShipping','removeProduct','shippingEstimate','val','closest','height','qd_on','ajax','undefined','Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','items','linkCheckout','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#value','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','text','checkout','body','meta[name=currency]','apply','keyup.qd_ddc_closeFn','\x20dia\x20útil','mouseenter.qd_ddc_hover','.qd-ddc-remove','ProdAddTimeV2','qd-ddc-product-add-time-v2','<div\x20class=\x22qd-ddc-notification\x22>','preventDefault','http','qd-ddc-noItems','---','.qd-ddc-wrapper','.qd-ddc-scrollUp','seller','dropDown','QD_dropDownCart','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','availability','removeClass','imageUrl','off','attr','.qd-ddc-cep','$1-$2$3','calculateShipping','totalizers','erc','.qd-dd-cep-slas','_QuatroDigital_DropDown','src','Finalizar\x20Compra','toLowerCase','find','.qd-ddc-image','info','.qd-ddc-prodWrapper2','.qd-ddc-emptyCart\x20p','getParent','qd-bb-lightBoxProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2','buyButton','simpleCart','.qd-ddc-infoAllTotal','cartTotal','.qd-ddc-prodWrapper','qtt','click.qd_ddc_closeFn','qd-ddc-lastAddedFixed','shipping','.qd-ddc-quantity','smartCheckout','.qd-ddc-cep-tooltip','keyup.qd_ddc_cep','.qd-ddc-infoTotalItems','hide','clearNotification','script','length','fail','exec','appendTo','<td>\x20R$\x20','texts','QD_smartCart','animate','.qd_ddc_continueShopping','smartCart','sellingPrice','changeQantity','prodId','scrollCart','empty','qd-loading','_QuatroDigital_AmountProduct','cartContainer','stop','Ir\x20ao\x20Carrinho','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>',',\x20entrega\x20em\x20','insertProdImg','emptyCart','alerta','Grátis','quantity','thumbSize','shippingData','fromCharCode','removeItems','.qd_ddc_lightBoxOverlay','string','buyButtonClicked','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','wnforfav%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe','Não\x20foi\x20possível\x20calcular\x20o\x20frete','.qd-ddc-shipping\x20input','qd-ddc-cart-rendered','click.qd_ddc_scrollDown','clone','vtexjs','#items','actionButtons','qd-ddc-','warn','timeRemoveNewItemClass','QD_buyButton','.qd_bap_wrapper_content','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','.qd-ddc-cep-tooltip-text','allowUpdate','qd-loaded','function','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','skuName','.qd-ddc-prodName','done','shippingForm','ite','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','click.qd_ddc_remove','productId','.qd-ddc-notification-close','tbody','allowRecalculate','price','updateItems','boolean','<tr></tr>','avisso'];(function(_0x46fcb3,_0x4e8090){var _0x578273=function(_0x4087df){while(--_0x4087df){_0x46fcb3['push'](_0x46fcb3['shift']());}};_0x578273(++_0x4e8090);}(_0x4e80,0x18d));var _0x5782=function(_0x46fcb3,_0x4e8090){_0x46fcb3=_0x46fcb3-0x0;var _0x578273=_0x4e80[_0x46fcb3];return _0x578273;};(function(){var _0x5a5ba1=_0x5782;try{window[_0x5a5ba1('0x79')]=window[_0x5a5ba1('0x79')]||{},window[_0x5a5ba1('0x79')][_0x5a5ba1('0xba')]=window[_0x5a5ba1('0x79')][_0x5a5ba1('0xba')]||$[_0x5a5ba1('0xc0')]();}catch(_0x4087df){'undefined'!==typeof console&&_0x5a5ba1('0x5d')===typeof console[_0x5a5ba1('0xaf')]&&console[_0x5a5ba1('0xaf')](_0x5a5ba1('0xa0'),_0x4087df[_0x5a5ba1('0x86')]);}}(),function(_0x59064c){var _0x41e97a=_0x5782;try{var _0x4146f6=jQuery,_0x420f67=function(_0x50e0a4,_0x4ad95a){var _0x4c1f07=_0x5782;if(_0x4c1f07('0xa6')===typeof console&&_0x4c1f07('0xe1')!==typeof console['error']&&'undefined'!==typeof console[_0x4c1f07('0x11')]&&'undefined'!==typeof console[_0x4c1f07('0x55')]){var _0x561d68;'object'===typeof _0x50e0a4?(_0x50e0a4[_0x4c1f07('0xa7')](_0x4c1f07('0xb4')),_0x561d68=_0x50e0a4):_0x561d68=[_0x4c1f07('0xb4')+_0x50e0a4];if(_0x4c1f07('0xe1')===typeof _0x4ad95a||_0x4c1f07('0x40')!==_0x4ad95a[_0x4c1f07('0xe')]()&&_0x4c1f07('0xd2')!==_0x4ad95a[_0x4c1f07('0xe')]()){if('undefined'!==typeof _0x4ad95a&&'info'===_0x4ad95a[_0x4c1f07('0xe')]())try{console[_0x4c1f07('0x11')][_0x4c1f07('0xec')](console,_0x561d68);}catch(_0x234ca4){try{console[_0x4c1f07('0x11')](_0x561d68['join']('\x0a'));}catch(_0x5b6c50){}}else try{console[_0x4c1f07('0xaf')][_0x4c1f07('0xec')](console,_0x561d68);}catch(_0x3d7934){try{console[_0x4c1f07('0xaf')](_0x561d68[_0x4c1f07('0x71')]('\x0a'));}catch(_0xd3f911){}}}else try{console[_0x4c1f07('0x55')][_0x4c1f07('0xec')](console,_0x561d68);}catch(_0x396e33){try{console[_0x4c1f07('0x55')](_0x561d68['join']('\x0a'));}catch(_0x27e25d){}}}};window[_0x41e97a('0xb')]=window[_0x41e97a('0xb')]||{},window[_0x41e97a('0xb')][_0x41e97a('0x5b')]=!0x0,_0x4146f6[_0x41e97a('0xfc')]=function(){},_0x4146f6['fn'][_0x41e97a('0xfc')]=function(){return{'fn':new _0x4146f6()};};var _0x415a45=function(_0x5391da){var _0x251366=_0x41e97a,_0x4cda15={'y':_0x251366('0x8f'),'yb':_0x251366('0x4b')};return function(_0x35543a){var _0x5cc98d=_0x251366,_0x47f4f8=function(_0x428951){return _0x428951;},_0x478afb=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x35543a=_0x35543a['d'+_0x478afb[0x10]+'c'+_0x478afb[0x11]+'m'+_0x47f4f8(_0x478afb[0x1])+'n'+_0x478afb[0xd]]['l'+_0x478afb[0x12]+'c'+_0x478afb[0x0]+'ti'+_0x47f4f8('o')+'n'];var _0x4249b7=function(_0xf30b5e){var _0x1f5b6d=_0x5782;return escape(encodeURIComponent(_0xf30b5e[_0x1f5b6d('0xaa')](/\./g,'¨')[_0x1f5b6d('0xaa')](/[a-zA-Z]/g,function(_0x485ad3){var _0x194958=_0x1f5b6d;return String[_0x194958('0x45')](('Z'>=_0x485ad3?0x5a:0x7a)>=(_0x485ad3=_0x485ad3[_0x194958('0xc6')](0x0)+0xd)?_0x485ad3:_0x485ad3-0x1a);})));},_0x344c24=_0x4249b7(_0x35543a[[_0x478afb[0x9],_0x47f4f8('o'),_0x478afb[0xc],_0x478afb[_0x47f4f8(0xd)]][_0x5cc98d('0x71')]('')]);_0x4249b7=_0x4249b7((window[['js',_0x47f4f8('no'),'m',_0x478afb[0x1],_0x478afb[0x4][_0x5cc98d('0xc1')](),_0x5cc98d('0x63')][_0x5cc98d('0x71')]('')]||_0x5cc98d('0xf7'))+['.v',_0x478afb[0xd],'e',_0x47f4f8('x'),'co',_0x47f4f8('mm'),_0x5cc98d('0x9'),_0x478afb[0x1],'.c',_0x47f4f8('o'),'m.',_0x478afb[0x13],'r'][_0x5cc98d('0x71')](''));for(var _0x2b691e in _0x4cda15){if(_0x4249b7===_0x2b691e+_0x4cda15[_0x2b691e]||_0x344c24===_0x2b691e+_0x4cda15[_0x2b691e]){var _0x3c5282='tr'+_0x478afb[0x11]+'e';break;}_0x3c5282='f'+_0x478afb[0x0]+'ls'+_0x47f4f8(_0x478afb[0x1]);}return _0x47f4f8=!0x1,-0x1<_0x35543a[[_0x478afb[0xc],'e',_0x478afb[0x0],'rc',_0x478afb[0x9]][_0x5cc98d('0x71')]('')][_0x5cc98d('0x74')](_0x5cc98d('0x5e'))&&(_0x47f4f8=!0x0),[_0x3c5282,_0x47f4f8];}(_0x5391da);}(window);if(!eval(_0x415a45[0x0]))return _0x415a45[0x1]?_0x420f67('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;_0x4146f6[_0x41e97a('0xfc')]=function(_0x59b15d,_0x199828){var _0x27450e=_0x41e97a,_0x496d3e=_0x4146f6(_0x59b15d);if(!_0x496d3e['length'])return _0x496d3e;var _0x576791=_0x4146f6[_0x27450e('0x7e')](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0x27450e('0x3a'),'linkCheckout':_0x27450e('0xd'),'cartTotal':_0x27450e('0x95'),'emptyCart':_0x27450e('0xe2'),'continueShopping':_0x27450e('0xa1'),'shippingForm':_0x27450e('0x97'),'notification':'<span\x20class=\x22qd-ddc-notification-close\x22>X</span><p>#messageText</p>'},'timeRemoveNewItemClass':0x1388,'forceImageHTTPS':!0x1,'thumbSize':{'w':0x64,'h':0x64},'skuName':function(_0x3f6b4d){var _0x3f8ee5=_0x27450e;return _0x3f6b4d[_0x3f8ee5('0x5f')]||_0x3f6b4d[_0x3f8ee5('0xb3')];},'callback':function(){},'callbackProductsList':function(){},'enableNotification':!0x1,'clearNotification':!0x1,'smartCheckout':!0x0},_0x199828);_0x4146f6('');var _0x1733d6=this;if(_0x576791[_0x27450e('0x20')]){var _0x2b583c=!0x1;_0x27450e('0xe1')===typeof window['vtexjs']&&(_0x420f67('A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN'),_0x4146f6[_0x27450e('0xe0')]({'url':_0x27450e('0xc9'),'async':!0x1,'dataType':_0x27450e('0x26'),'error':function(){var _0x28f260=_0x27450e;_0x420f67(_0x28f260('0x4a')),_0x2b583c=!0x0;}}));if(_0x2b583c)return _0x420f67(_0x27450e('0x64'));}if(_0x27450e('0xa6')===typeof window[_0x27450e('0x51')]&&_0x27450e('0xe1')!==typeof window[_0x27450e('0x51')]['checkout'])var _0x1916db=window['vtexjs']['checkout'];else{if('object'===typeof vtex&&_0x27450e('0xa6')===typeof vtex[_0x27450e('0xe9')]&&'undefined'!==typeof vtex['checkout']['SDK'])_0x1916db=new vtex[(_0x27450e('0xe9'))]['SDK']();else return _0x420f67(_0x27450e('0x76'));}var _0x4f3ee8=/^\/|\/$/g,_0xda4d2b=/[^0-9]/g,_0x592d37=/([0-9]{5})([0-9])([0-9]{2})?/g,_0x5197e3=/(.{9}).*/g,_0x3e276d=/(ids\/[0-9]+)[^\/]+/i;_0x1733d6[_0x27450e('0x38')]=_0x27450e('0x87');var _0x1e7404=function(_0x2cef0d){var _0x51ccf5=_0x27450e;_0x4146f6(this)[_0x51ccf5('0xb8')](_0x2cef0d),_0x2cef0d[_0x51ccf5('0xf')]('.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose')[_0x51ccf5('0x94')](_0x4146f6(_0x51ccf5('0x47')))['on'](_0x51ccf5('0x1c'),function(){var _0x112231=_0x51ccf5;_0x496d3e[_0x112231('0x1')](_0x112231('0x15')),_0x4146f6(document[_0x112231('0xea')])[_0x112231('0x1')](_0x112231('0x8c'));}),_0x4146f6(document)[_0x51ccf5('0x3')](_0x51ccf5('0xed'))['on'](_0x51ccf5('0xed'),function(_0x1d3df5){var _0x21ad3b=_0x51ccf5;0x1b==_0x1d3df5['keyCode']&&(_0x496d3e[_0x21ad3b('0x1')](_0x21ad3b('0x15')),_0x4146f6(document[_0x21ad3b('0xea')])[_0x21ad3b('0x1')](_0x21ad3b('0x8c')));});var _0x5288d8=_0x2cef0d[_0x51ccf5('0xf')](_0x51ccf5('0x1a'));_0x2cef0d[_0x51ccf5('0xf')](_0x51ccf5('0xf9'))['on'](_0x51ccf5('0x75'),function(){var _0x37efd7=_0x51ccf5;return _0x1733d6[_0x37efd7('0x34')]('-',void 0x0,void 0x0,_0x5288d8),!0x1;}),_0x2cef0d[_0x51ccf5('0xf')](_0x51ccf5('0xd3'))['on'](_0x51ccf5('0x4f'),function(){var _0x79b58b=_0x51ccf5;return _0x1733d6[_0x79b58b('0x34')](void 0x0,void 0x0,void 0x0,_0x5288d8),!0x1;});var _0x54bfdc=_0x2cef0d[_0x51ccf5('0xf')]('.qd-ddc-cep-tooltip-text'),_0x4af34e=_0x2cef0d[_0x51ccf5('0xf')](_0x51ccf5('0x5')),_0x29d662=_0x2cef0d['find'](_0x51ccf5('0x83'));_0x4af34e['val']('')['on'](_0x51ccf5('0x22'),function(_0x4e28d2){var _0x2403ce=_0x51ccf5;_0x1733d6[_0x2403ce('0x89')](_0x4146f6(this)),0xd==_0x4e28d2[_0x2403ce('0x6f')]&&_0x29d662[_0x2403ce('0x85')]();}),_0x2cef0d[_0x51ccf5('0xf')](_0x51ccf5('0xb7'))[_0x51ccf5('0x85')](function(_0x3c4006){var _0xc7c7f6=_0x51ccf5;_0x3c4006['preventDefault'](),_0x2cef0d['find'](_0xc7c7f6('0xa'))[_0xc7c7f6('0x27')]&&_0x1733d6['shippingCalculate'](_0x4af34e),_0x54bfdc['toggle']();}),_0x2cef0d[_0x51ccf5('0xf')](_0x51ccf5('0xb0'))['click'](function(_0x2dc3d0){var _0x4053b5=_0x51ccf5;_0x2dc3d0[_0x4053b5('0xf4')](),_0x54bfdc['hide']();}),_0x4146f6(document)[_0x51ccf5('0x3')]('click._QD_DDC_closeShipping')['on'](_0x51ccf5('0xd9'),function(_0x355470){var _0x599bf8=_0x51ccf5;_0x4146f6(_0x355470['target'])[_0x599bf8('0xdd')](_0x2cef0d[_0x599bf8('0xf')](_0x599bf8('0x21')))[_0x599bf8('0x27')]||_0x54bfdc[_0x599bf8('0x24')]();}),_0x29d662[_0x51ccf5('0x85')](function(_0x19b0b8){var _0x14d6c7=_0x51ccf5;_0x19b0b8[_0x14d6c7('0xf4')](),_0x1733d6[_0x14d6c7('0xd5')](_0x4af34e);});if(_0x576791['updateOnlyHover']){var _0x253dcb=0x0;_0x4146f6(this)['on'](_0x51ccf5('0xef'),function(){var _0x2f3776=function(){var _0x280d77=_0x5782;window[_0x280d77('0xb')][_0x280d77('0x5b')]&&(_0x1733d6[_0x280d77('0x96')](),window[_0x280d77('0xb')]['allowUpdate']=!0x1,_0x4146f6['fn'][_0x280d77('0x17')](!0x0),_0x1733d6[_0x280d77('0xbc')]());};_0x253dcb=setInterval(function(){_0x2f3776();},0x258),_0x2f3776();}),_0x4146f6(this)['on']('mouseleave.qd_ddc_hover',function(){clearInterval(_0x253dcb);});}},_0x2d2fd0=function(_0x1d3f76){var _0x5ea38f=_0x27450e;return _0x1d3f76=_0x4146f6(_0x1d3f76),_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x19')]=_0x576791['texts'][_0x5ea38f('0x19')][_0x5ea38f('0xaa')](_0x5ea38f('0xe6'),_0x5ea38f('0xcd')),_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x19')]=_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x19')]['replace'](_0x5ea38f('0x52'),_0x5ea38f('0xe5')),_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x19')]=_0x576791['texts'][_0x5ea38f('0x19')][_0x5ea38f('0xaa')](_0x5ea38f('0xb5'),_0x5ea38f('0x59')),_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x19')]=_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x19')][_0x5ea38f('0xaa')](_0x5ea38f('0xa3'),_0x5ea38f('0x9c')),_0x1d3f76[_0x5ea38f('0xf')](_0x5ea38f('0x8a'))[_0x5ea38f('0x82')](_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x9f')]),_0x1d3f76['find'](_0x5ea38f('0x2f'))['html'](_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0xd7')]),_0x1d3f76[_0x5ea38f('0xf')](_0x5ea38f('0xad'))[_0x5ea38f('0x82')](_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0xe4')]),_0x1d3f76['find'](_0x5ea38f('0x7f'))[_0x5ea38f('0x82')](_0x576791['texts'][_0x5ea38f('0x19')]),_0x1d3f76[_0x5ea38f('0xf')]('.qd-ddc-shipping')[_0x5ea38f('0x82')](_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x62')]),_0x1d3f76[_0x5ea38f('0xf')](_0x5ea38f('0x13'))['html'](_0x576791[_0x5ea38f('0x2c')][_0x5ea38f('0x3f')]),_0x1d3f76;}(this[_0x27450e('0x38')]),_0x43ca0a=0x0;_0x496d3e[_0x27450e('0xa2')](function(){var _0x4f1d95=_0x27450e;0x0<_0x43ca0a?_0x1e7404[_0x4f1d95('0x7d')](this,_0x2d2fd0[_0x4f1d95('0x50')]()):_0x1e7404[_0x4f1d95('0x7d')](this,_0x2d2fd0),_0x43ca0a++;}),window['_QuatroDigital_CartData'][_0x27450e('0xba')]['add'](function(){var _0x24add4=_0x27450e;_0x4146f6(_0x24add4('0x9e'))[_0x24add4('0x82')](window['_QuatroDigital_CartData']['total']||'--'),_0x4146f6(_0x24add4('0x23'))[_0x24add4('0x82')](window[_0x24add4('0x79')][_0x24add4('0x1b')]||'0'),_0x4146f6(_0x24add4('0xab'))[_0x24add4('0x82')](window['_QuatroDigital_CartData'][_0x24add4('0x1e')]||'--'),_0x4146f6(_0x24add4('0x18'))[_0x24add4('0x82')](window[_0x24add4('0x79')]['allTotal']||'--');});var _0x23263a=function(_0x11f6b1,_0x331d19){var _0x5f205c=_0x27450e;if(_0x5f205c('0xe1')===typeof _0x11f6b1[_0x5f205c('0xe3')])return _0x420f67(_0x5f205c('0xbe'));_0x1733d6[_0x5f205c('0x88')]['call'](this,_0x331d19);};_0x1733d6[_0x27450e('0x96')]=function(_0x1311aa,_0x3eb03e){var _0x189b53=_0x27450e;_0x189b53('0xe1')!=typeof _0x3eb03e?window[_0x189b53('0xb')][_0x189b53('0x8e')]=_0x3eb03e:window[_0x189b53('0xb')]['dataOptionsCache']&&(_0x3eb03e=window[_0x189b53('0xb')][_0x189b53('0x8e')]),setTimeout(function(){var _0x46684e=_0x189b53;window[_0x46684e('0xb')][_0x46684e('0x8e')]=void 0x0;},_0x576791['timeRemoveNewItemClass']),_0x4146f6('.qd-ddc-wrapper')[_0x189b53('0x1')](_0x189b53('0x8b'));if(_0x576791[_0x189b53('0x20')]){var _0x4bee53=function(_0x123fb4){var _0x5c62a8=_0x189b53;_0x1733d6['setOrderForm'](_0x123fb4),_0x23263a(_0x123fb4,_0x3eb03e),_0x5c62a8('0xe1')!==typeof window[_0x5c62a8('0x37')]&&_0x5c62a8('0x5d')===typeof window[_0x5c62a8('0x37')][_0x5c62a8('0x29')]&&window[_0x5c62a8('0x37')]['exec'][_0x5c62a8('0x7d')](this),_0x4146f6(_0x5c62a8('0xf8'))[_0x5c62a8('0xcf')](_0x5c62a8('0x8b'));};'undefined'!==typeof window[_0x189b53('0xb')][_0x189b53('0x77')]?(_0x4bee53(window['_QuatroDigital_DropDown'][_0x189b53('0x77')]),_0x189b53('0x5d')===typeof _0x1311aa&&_0x1311aa(window[_0x189b53('0xb')]['getOrderForm'])):_0x4146f6['QD_checkoutQueue']([_0x189b53('0xe3'),'totalizers','shippingData'],{'done':function(_0x2d6108){var _0x47367f=_0x189b53;_0x4bee53['call'](this,_0x2d6108),_0x47367f('0x5d')===typeof _0x1311aa&&_0x1311aa(_0x2d6108);},'fail':function(_0x5e1048){var _0x464622=_0x189b53;_0x420f67([_0x464622('0x7c'),_0x5e1048]);}});}else alert(_0x189b53('0xbf'));},_0x1733d6[_0x27450e('0xbc')]=function(){var _0x171e01=_0x27450e,_0x468dde=_0x4146f6(_0x171e01('0xf8'));_0x468dde[_0x171e01('0xf')](_0x171e01('0xd6'))[_0x171e01('0x27')]?_0x468dde[_0x171e01('0x1')](_0x171e01('0xf6')):_0x468dde[_0x171e01('0xcf')](_0x171e01('0xf6'));},_0x1733d6[_0x27450e('0x88')]=function(_0x30c26c){var _0x444e7e=_0x27450e,_0x2d5b35=_0x4146f6(_0x444e7e('0x12'));_0x2d5b35[_0x444e7e('0x35')](),_0x2d5b35['each'](function(){var _0x1e59b0=_0x444e7e,_0x3a80a4=_0x4146f6(this),_0x3fda75,_0x1c5da9,_0x5a03c7=_0x4146f6(''),_0x310e7b;for(_0x310e7b in window['_QuatroDigital_DropDown']['getOrderForm'][_0x1e59b0('0xe3')])if('object'===typeof window[_0x1e59b0('0xb')]['getOrderForm']['items'][_0x310e7b]){var _0xc2ab0c=window[_0x1e59b0('0xb')]['getOrderForm'][_0x1e59b0('0xe3')][_0x310e7b],_0x2214ec=_0xc2ab0c[_0x1e59b0('0x70')]['replace'](_0x4f3ee8,'')['split']('/'),_0x5180f1=_0x4146f6(_0x1e59b0('0xfd'));_0x5180f1[_0x1e59b0('0x4')]({'data-sku':_0xc2ab0c['id'],'data-sku-index':_0x310e7b,'data-qd-departament':_0x2214ec[0x0],'data-qd-category':_0x2214ec[_0x2214ec[_0x1e59b0('0x27')]-0x1]}),_0x5180f1[_0x1e59b0('0xcf')](_0x1e59b0('0x54')+_0xc2ab0c[_0x1e59b0('0x0')]),_0x5180f1[_0x1e59b0('0xf')](_0x1e59b0('0x60'))[_0x1e59b0('0xb8')](_0x576791[_0x1e59b0('0x5f')](_0xc2ab0c)),_0x5180f1['find'](_0x1e59b0('0x73'))[_0x1e59b0('0xb8')](isNaN(_0xc2ab0c[_0x1e59b0('0x31')])?_0xc2ab0c[_0x1e59b0('0x31')]:0x0==_0xc2ab0c['sellingPrice']?_0x1e59b0('0x41'):(_0x4146f6(_0x1e59b0('0xeb'))[_0x1e59b0('0x4')]('content')||'R$')+'\x20'+qd_number_format(_0xc2ab0c[_0x1e59b0('0x31')]/0x64,0x2,',','.')),_0x5180f1['find'](_0x1e59b0('0x1f'))[_0x1e59b0('0x4')]({'data-sku':_0xc2ab0c['id'],'data-sku-index':_0x310e7b})[_0x1e59b0('0xdc')](_0xc2ab0c[_0x1e59b0('0x42')]),_0x5180f1[_0x1e59b0('0xf')](_0x1e59b0('0xf0'))[_0x1e59b0('0x4')]({'data-sku':_0xc2ab0c['id'],'data-sku-index':_0x310e7b}),_0x1733d6[_0x1e59b0('0x3e')](_0xc2ab0c['id'],_0x5180f1[_0x1e59b0('0xf')](_0x1e59b0('0x10')),_0xc2ab0c[_0x1e59b0('0x2')]),_0x5180f1['find'](_0x1e59b0('0xac'))[_0x1e59b0('0x4')]({'data-sku':_0xc2ab0c['id'],'data-sku-index':_0x310e7b}),_0x5180f1[_0x1e59b0('0x2a')](_0x3a80a4),_0x5a03c7=_0x5a03c7['add'](_0x5180f1);}try{var _0x14f85d=_0x3a80a4[_0x1e59b0('0x14')](_0x1e59b0('0xf8'))[_0x1e59b0('0xf')](_0x1e59b0('0x4d'));_0x14f85d[_0x1e59b0('0x27')]&&''==_0x14f85d[_0x1e59b0('0xdc')]()&&window[_0x1e59b0('0xb')]['getOrderForm']['shippingData'][_0x1e59b0('0xc2')]&&_0x14f85d[_0x1e59b0('0xdc')](window[_0x1e59b0('0xb')]['getOrderForm'][_0x1e59b0('0x44')][_0x1e59b0('0xc2')][_0x1e59b0('0xb9')]);}catch(_0x1ccb13){_0x420f67(_0x1e59b0('0x93')+_0x1ccb13[_0x1e59b0('0x86')],'aviso');}_0x1733d6[_0x1e59b0('0x53')](_0x3a80a4),_0x1733d6[_0x1e59b0('0xbc')](),_0x30c26c&&_0x30c26c['lastSku']&&function(){var _0x3cee62=_0x1e59b0;_0x1c5da9=_0x5a03c7['filter']('[data-sku=\x27'+_0x30c26c['lastSku']+'\x27]'),_0x1c5da9[_0x3cee62('0x27')]&&(_0x3fda75=0x0,_0x5a03c7['each'](function(){var _0x25815c=_0x3cee62,_0x5cd95a=_0x4146f6(this);if(_0x5cd95a['is'](_0x1c5da9))return!0x1;_0x3fda75+=_0x5cd95a[_0x25815c('0x81')]();}),_0x1733d6[_0x3cee62('0x34')](void 0x0,void 0x0,_0x3fda75,_0x3a80a4[_0x3cee62('0x94')](_0x3a80a4[_0x3cee62('0xcb')]())),_0x5a03c7['removeClass'](_0x3cee62('0x1d')),function(_0x4173fe){var _0x6305df=_0x3cee62;_0x4173fe[_0x6305df('0xcf')](_0x6305df('0xd4')),_0x4173fe[_0x6305df('0xcf')](_0x6305df('0x1d')),setTimeout(function(){var _0x1166c2=_0x6305df;_0x4173fe[_0x1166c2('0x1')](_0x1166c2('0xd4'));},_0x576791[_0x6305df('0x56')]);}(_0x1c5da9),_0x3cee62('0xe1')!==typeof window[_0x3cee62('0xb')]['ProdAddTimeV2']&&clearTimeout(window[_0x3cee62('0xb')][_0x3cee62('0xf1')]),_0x4146f6(document['body'])['addClass'](_0x3cee62('0xf2')),window[_0x3cee62('0xb')][_0x3cee62('0xf1')]=setTimeout(function(){var _0x14de4=_0x3cee62;_0x4146f6(document[_0x14de4('0xea')])[_0x14de4('0x1')](_0x14de4('0xf2'));},_0x576791[_0x3cee62('0x56')]));}();}),function(){var _0xbb6cdc=_0x444e7e;_QuatroDigital_DropDown['getOrderForm'][_0xbb6cdc('0xe3')]['length']?(_0x4146f6(_0xbb6cdc('0xea'))[_0xbb6cdc('0x1')](_0xbb6cdc('0xc4'))['addClass'](_0xbb6cdc('0x99')),setTimeout(function(){var _0x49bf4c=_0xbb6cdc;_0x4146f6(_0x49bf4c('0xea'))[_0x49bf4c('0x1')]('qd-ddc-product-add-time');},_0x576791['timeRemoveNewItemClass'])):_0x4146f6(_0xbb6cdc('0xea'))[_0xbb6cdc('0x1')](_0xbb6cdc('0x4e'))[_0xbb6cdc('0xcf')](_0xbb6cdc('0xc4'));}(),_0x444e7e('0x5d')===typeof _0x576791['callbackProductsList']?_0x576791['callbackProductsList'][_0x444e7e('0x7d')](this):_0x420f67('callbackProductsList\x20não\x20é\x20uma\x20função');},_0x1733d6[_0x27450e('0x3e')]=function(_0x53b3db,_0x2051d6,_0x30d812){var _0x3bb84e=_0x27450e;function _0x46846b(){var _0x4ae6b2=_0x5782;_0x30d812=_0x30d812[_0x4ae6b2('0xaa')](_0x3e276d,'$1-'+_0x576791['thumbSize']['w']+'-'+_0x576791[_0x4ae6b2('0x43')]['h']),_0x576791['forceImageHTTPS']&&_0x4ae6b2('0x48')==typeof _0x30d812&&(_0x30d812=_0x30d812[_0x4ae6b2('0xaa')](_0x4ae6b2('0xf5'),'https')),_0x2051d6['removeClass'](_0x4ae6b2('0x5c'))['load'](function(){var _0x441c78=_0x4ae6b2;_0x4146f6(this)[_0x441c78('0xcf')](_0x441c78('0x5c'));})[_0x4ae6b2('0x4')](_0x4ae6b2('0xc'),_0x30d812);}_0x30d812?_0x46846b():isNaN(_0x53b3db)?_0x420f67(_0x3bb84e('0xca'),_0x3bb84e('0x40')):alert(_0x3bb84e('0xbb'));},_0x1733d6[_0x27450e('0x53')]=function(_0x3da8d6){var _0x53afaf=_0x27450e,_0x3c7819=function(_0x610a3a,_0x2d79bc){var _0x47e64=_0x5782,_0xace607=_0x4146f6(_0x610a3a),_0x20b8ce=_0xace607[_0x47e64('0x4')](_0x47e64('0x8d')),_0x116c7c=_0xace607['attr']('data-sku-index');if(_0x20b8ce){var _0x1a6503=parseInt(_0xace607[_0x47e64('0xdc')]())||0x1;_0x1733d6['changeQantity']([_0x20b8ce,_0x116c7c],_0x1a6503,_0x1a6503+0x1,function(_0x450496){var _0x3e06ee=_0x47e64;_0xace607[_0x3e06ee('0xdc')](_0x450496),_0x3e06ee('0x5d')===typeof _0x2d79bc&&_0x2d79bc();});}},_0x1909f6=function(_0x1d0769,_0x47c69b){var _0x2b3cfe=_0x5782,_0x3e9c75=_0x4146f6(_0x1d0769),_0xc460c5=_0x3e9c75['attr'](_0x2b3cfe('0x8d')),_0x55782e=_0x3e9c75[_0x2b3cfe('0x4')](_0x2b3cfe('0xae'));if(_0xc460c5){var _0x708d8c=parseInt(_0x3e9c75['val']())||0x2;_0x1733d6[_0x2b3cfe('0x32')]([_0xc460c5,_0x55782e],_0x708d8c,_0x708d8c-0x1,function(_0x1a30f8){_0x3e9c75['val'](_0x1a30f8),'function'===typeof _0x47c69b&&_0x47c69b();});}},_0x882277=function(_0x5d3ad3,_0x4d7dcf){var _0x5acc2f=_0x5782,_0x306423=_0x4146f6(_0x5d3ad3),_0x142019=_0x306423[_0x5acc2f('0x4')](_0x5acc2f('0x8d')),_0x279d1c=_0x306423['attr']('data-sku-index');if(_0x142019){var _0x469f46=parseInt(_0x306423['val']())||0x1;_0x1733d6[_0x5acc2f('0x32')]([_0x142019,_0x279d1c],0x1,_0x469f46,function(_0x225cc6){var _0x2bb101=_0x5acc2f;_0x306423[_0x2bb101('0xdc')](_0x225cc6),_0x2bb101('0x5d')===typeof _0x4d7dcf&&_0x4d7dcf();});}},_0x3873f9=_0x3da8d6[_0x53afaf('0xf')](_0x53afaf('0xc7'));_0x3873f9[_0x53afaf('0xcf')](_0x53afaf('0xdf'))['each'](function(){var _0x5c4d00=_0x53afaf,_0x486dbf=_0x4146f6(this);_0x486dbf[_0x5c4d00('0xf')](_0x5c4d00('0x9b'))['on']('click.qd_ddc_more',function(_0x134004){var _0x4db079=_0x5c4d00;_0x134004[_0x4db079('0xf4')](),_0x3873f9[_0x4db079('0xcf')](_0x4db079('0x36')),_0x3c7819(_0x486dbf['find'](_0x4db079('0x1f')),function(){var _0x26c08a=_0x4db079;_0x3873f9[_0x26c08a('0x1')](_0x26c08a('0x36'));});}),_0x486dbf[_0x5c4d00('0xf')]('.qd-ddc-quantityMinus')['on'](_0x5c4d00('0xb6'),function(_0x4f5042){var _0x2434ca=_0x5c4d00;_0x4f5042[_0x2434ca('0xf4')](),_0x3873f9[_0x2434ca('0xcf')](_0x2434ca('0x36')),_0x1909f6(_0x486dbf[_0x2434ca('0xf')](_0x2434ca('0x1f')),function(){var _0x829271=_0x2434ca;_0x3873f9[_0x829271('0x1')](_0x829271('0x36'));});}),_0x486dbf['find'](_0x5c4d00('0x1f'))['on']('focusout.qd_ddc_change',function(){var _0x33e580=_0x5c4d00;_0x3873f9[_0x33e580('0xcf')]('qd-loading'),_0x882277(this,function(){_0x3873f9['removeClass']('qd-loading');});}),_0x486dbf[_0x5c4d00('0xf')]('.qd-ddc-quantity')['on']('keyup.qd_ddc_change',function(_0x463cef){var _0x1aa1a1=_0x5c4d00;0xd==_0x463cef['keyCode']&&(_0x3873f9['addClass'](_0x1aa1a1('0x36')),_0x882277(this,function(){var _0x23ac54=_0x1aa1a1;_0x3873f9[_0x23ac54('0x1')](_0x23ac54('0x36'));}));});}),_0x3da8d6[_0x53afaf('0xf')](_0x53afaf('0xd6'))[_0x53afaf('0xa2')](function(){var _0x2e982f=_0x53afaf,_0x38fdc7=_0x4146f6(this);_0x38fdc7[_0x2e982f('0xf')]('.qd-ddc-remove')['on'](_0x2e982f('0x65'),function(){var _0x400c23=_0x2e982f;return _0x38fdc7['addClass'](_0x400c23('0x36')),_0x1733d6['removeProduct'](_0x4146f6(this),function(_0x3a9452){var _0x4b445a=_0x400c23;_0x3a9452?_0x38fdc7[_0x4b445a('0x39')](!0x0)['slideUp'](function(){var _0x433d89=_0x4b445a;_0x38fdc7[_0x433d89('0xc5')](),_0x1733d6[_0x433d89('0xbc')](),window[_0x433d89('0xb')][_0x433d89('0x77')][_0x433d89('0xe3')][_0x433d89('0x27')]&&_0x1733d6[_0x433d89('0xd5')](_0x3da8d6[_0x433d89('0x14')](_0x433d89('0xf8'))[_0x433d89('0xf')](_0x433d89('0x5')));}):_0x38fdc7[_0x4b445a('0x1')](_0x4b445a('0x36'));}),!0x1;});});},_0x1733d6['formatCepField']=function(_0x13849e){var _0x4f4e2c=_0x27450e,_0xf872cd=_0x13849e['val']();_0xf872cd=_0xf872cd[_0x4f4e2c('0xaa')](_0xda4d2b,''),_0xf872cd=_0xf872cd['replace'](_0x592d37,_0x4f4e2c('0x6')),_0xf872cd=_0xf872cd[_0x4f4e2c('0xaa')](_0x5197e3,'$1'),_0x13849e[_0x4f4e2c('0xdc')](_0xf872cd);},_0x1733d6[_0x27450e('0xd5')]=function(_0x3419ad){var _0x417a81=_0x27450e,_0x563fd6=(_0x3419ad[_0x417a81('0xdc')]()||'')[_0x417a81('0xaa')](/[^0-9]/g,'');0x8<=_0x563fd6[_0x417a81('0x27')]&&_0x1916db[_0x417a81('0x7')]({'postalCode':_0x563fd6,'country':'BRA'})[_0x417a81('0x61')](function(_0x5b3961){var _0x2cfc2f=_0x417a81;_0x3419ad[_0x2cfc2f('0xdd')](_0x2cfc2f('0x5a'))[_0x2cfc2f('0xf')](_0x2cfc2f('0xa'))[_0x2cfc2f('0xc5')](),_0x1733d6[_0x2cfc2f('0xa8')](_0x5b3961),_0x1733d6[_0x2cfc2f('0x96')]();var _0x3cfd46=[],_0x41b4ea=_0x5b3961['shippingData']['logisticsInfo'];_0x5b3961=_0x4146f6(_0x2cfc2f('0x3c'));for(var _0x430d79=0x0;_0x430d79<_0x41b4ea['length'];_0x430d79++)for(var _0x40f54d=_0x41b4ea[_0x430d79][_0x2cfc2f('0x78')],_0x579157=0x0;_0x579157<_0x40f54d[_0x2cfc2f('0x27')];_0x579157++)_0x3cfd46[_0x579157]=_0x3cfd46[_0x579157]||{},_0x3cfd46[_0x579157][_0x2cfc2f('0x6a')]=(_0x3cfd46[_0x579157]['price']||0x0)+_0x40f54d[_0x579157][_0x2cfc2f('0x6a')],_0x3cfd46[_0x579157][_0x2cfc2f('0xdb')]=_0x40f54d[_0x579157][_0x2cfc2f('0xdb')],_0x3cfd46[_0x579157][_0x2cfc2f('0xb3')]=_0x40f54d[_0x579157][_0x2cfc2f('0xb3')];for(_0x41b4ea=0x0;_0x41b4ea<_0x3cfd46[_0x2cfc2f('0x27')];_0x41b4ea++)_0x430d79=_0x4146f6(_0x2cfc2f('0x6d')),_0x40f54d=0x1<_0x3cfd46[_0x41b4ea]['shippingEstimate']?_0x3cfd46[_0x41b4ea]['shippingEstimate'][_0x2cfc2f('0xaa')]('bd',_0x2cfc2f('0xee')):_0x3cfd46[_0x41b4ea][_0x2cfc2f('0xdb')][_0x2cfc2f('0xaa')]('bd',_0x2cfc2f('0xc3')),_0x430d79[_0x2cfc2f('0xb8')](_0x2cfc2f('0x2b')+qd_number_format(_0x3cfd46[_0x41b4ea][_0x2cfc2f('0x6a')]/0x64,0x2,',','.')+_0x2cfc2f('0xce')+_0x3cfd46[_0x41b4ea][_0x2cfc2f('0xb3')]+_0x2cfc2f('0x3d')+_0x40f54d+'\x20para\x20o\x20CEP\x20'+_0x563fd6+'</td>'),_0x430d79[_0x2cfc2f('0x2a')](_0x5b3961[_0x2cfc2f('0xf')](_0x2cfc2f('0x68')));_0x5b3961[_0x2cfc2f('0x7b')](_0x3419ad[_0x2cfc2f('0xdd')](_0x2cfc2f('0x5a'))['find'](_0x2cfc2f('0xb0')));})[_0x417a81('0x28')](function(_0x2a5d52){var _0x2ac30a=_0x417a81;_0x420f67([_0x2ac30a('0x4c'),_0x2a5d52]);});},_0x1733d6['changeQantity']=function(_0x4b1ca5,_0x457724,_0x9c8bfd,_0x5243da){var _0x5bf6ff=_0x27450e;function _0x39ba73(_0x3b24f6){var _0x371642=_0x5782;_0x3b24f6=_0x371642('0x6c')!==typeof _0x3b24f6?!0x1:_0x3b24f6,_0x1733d6[_0x371642('0x96')](),window[_0x371642('0xb')][_0x371642('0x5b')]=!0x1,_0x1733d6['cartIsEmpty'](),'undefined'!==typeof window[_0x371642('0x37')]&&_0x371642('0x5d')===typeof window[_0x371642('0x37')][_0x371642('0x29')]&&window['_QuatroDigital_AmountProduct']['exec'][_0x371642('0x7d')](this),_0x371642('0x5d')===typeof adminCart&&adminCart(),_0x4146f6['fn']['simpleCart'](!0x0,void 0x0,_0x3b24f6),_0x371642('0x5d')===typeof _0x5243da&&_0x5243da(_0x457724);}_0x9c8bfd=_0x9c8bfd||0x1;if(0x1>_0x9c8bfd)return _0x457724;if(_0x576791[_0x5bf6ff('0x20')]){var _0x52de3a=window[_0x5bf6ff('0xb')][_0x5bf6ff('0x77')]['items'];if(_0x5bf6ff('0xe1')===typeof _0x52de3a[_0x4b1ca5[0x1]])return _0x420f67(_0x5bf6ff('0xb1')+_0x4b1ca5[0x1]+']'),_0x457724;_0x1916db[_0x5bf6ff('0x6b')]([{'id':_0x52de3a[_0x4b1ca5[0x1]]['id'],'index':_0x4b1ca5[0x1],'quantity':_0x9c8bfd,'seller':_0x52de3a[_0x4b1ca5[0x1]][_0x5bf6ff('0xfa')]}],[_0x5bf6ff('0xe3'),_0x5bf6ff('0x8'),_0x5bf6ff('0x44')],!0x0)[_0x5bf6ff('0x61')](function(_0x535791){_0x1733d6['setOrderForm'](_0x535791),_0x39ba73(!0x0);})[_0x5bf6ff('0x28')](function(_0xa3f982){_0x420f67(['Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho',_0xa3f982]),_0x39ba73();});}else _0x420f67(_0x5bf6ff('0x98'));},_0x1733d6[_0x27450e('0xda')]=function(_0xe95151,_0x122567){var _0xa0765a=_0x27450e;function _0x406719(_0x2a2c16){var _0x1528be=_0x5782;_0x2a2c16=_0x1528be('0x6c')!==typeof _0x2a2c16?!0x1:_0x2a2c16,_0x1528be('0xe1')!==typeof window[_0x1528be('0x37')]&&_0x1528be('0x5d')===typeof window[_0x1528be('0x37')][_0x1528be('0x29')]&&window['_QuatroDigital_AmountProduct'][_0x1528be('0x29')][_0x1528be('0x7d')](this),_0x1528be('0x5d')===typeof adminCart&&adminCart(),_0x4146f6['fn'][_0x1528be('0x17')](!0x0,void 0x0,_0x2a2c16),_0x1528be('0x5d')===typeof _0x122567&&_0x122567(_0x5accb7);}var _0x5accb7=!0x1,_0x242851=_0x4146f6(_0xe95151)['attr'](_0xa0765a('0xae')),_0x47b3d9=window[_0xa0765a('0xb')]['getOrderForm'][_0xa0765a('0xe3')];_0x576791[_0xa0765a('0x20')]||alert(_0xa0765a('0x84'));if(_0xa0765a('0xe1')===typeof _0x47b3d9[_0x242851])return _0x420f67(_0xa0765a('0xb1')+_0x242851+']'),_0x5accb7;_0x1916db[_0xa0765a('0x46')]([{'index':_0x242851,'quantity':0x0}])['done'](function(_0x1bceee){var _0x50290d=_0xa0765a;_0x5accb7=!0x0,_0x1733d6[_0x50290d('0xa8')](_0x1bceee),_0x23263a(_0x1bceee),_0x406719(!0x0);})['fail'](function(_0x567f47){_0x420f67(['Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho',_0x567f47]),_0x406719();});},_0x1733d6[_0x27450e('0x34')]=function(_0xa4c4f5,_0x5d919d,_0x5b3e5d,_0x54a9d2){var _0x26c454=_0x27450e;_0x54a9d2=_0x54a9d2||_0x4146f6('.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2'),_0xa4c4f5=_0xa4c4f5||'+',_0x5d919d=_0x5d919d||0.9*_0x54a9d2[_0x26c454('0xde')](),_0x54a9d2[_0x26c454('0x39')](!0x0,!0x0)[_0x26c454('0x2e')]({'scrollTop':isNaN(_0x5b3e5d)?_0xa4c4f5+'='+_0x5d919d+'px':_0x5b3e5d});},_0x1733d6[_0x27450e('0xa8')]=function(_0x1db6eb){var _0x35c7cb=_0x27450e;window[_0x35c7cb('0xb')]['getOrderForm']=_0x1db6eb,_0x35c7cb('0xe1')!=typeof _0x1db6eb&&_0x576791['enableNotification']&&_0x1733d6[_0x35c7cb('0xd0')](_0x1db6eb[_0x35c7cb('0x9d')]||[]);},_0x1733d6['buildNotification']=function(_0x314a68){var _0x189d40=_0x27450e;_0x314a68[_0x189d40('0x27')]&&(_0x314a68=_0x576791[_0x189d40('0x2c')][_0x189d40('0xa9')]['replace'](_0x189d40('0x91'),_0x314a68[0x0][_0x189d40('0xe8')]),_0x496d3e['find'](_0x189d40('0xbd'))[_0x189d40('0x27')]?_0x496d3e['find'](_0x189d40('0xbd'))['html'](_0x314a68):_0x496d3e[_0x189d40('0x9a')](_0x4146f6(_0x189d40('0xf3')+_0x314a68+_0x189d40('0xc8'))),_0x496d3e[_0x189d40('0xf')](_0x189d40('0x67'))['on'](_0x189d40('0x85'),function(){var _0xeff891=_0x189d40;_0x496d3e[_0xeff891('0xf')]('.qd-ddc-notification')[_0xeff891('0xc5')](),_0x576791[_0xeff891('0x25')]&&_0xeff891('0x5d')==typeof vtexjs[_0xeff891('0xe9')][_0xeff891('0xd1')]&&vtexjs['checkout']['clearMessages']();}));},_0x576791[_0x27450e('0xa4')]||(_0x1733d6[_0x27450e('0x96')](),_0x4146f6['fn'][_0x27450e('0x17')](!0x0)),_0x4146f6(window)['on']('productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex',function(){var _0x20eda5=_0x27450e;try{_0x1733d6['setOrderForm'](void 0x0),_0x1733d6[_0x20eda5('0x96')]();}catch(_0x59043b){_0x420f67(_0x20eda5('0xe7')+_0x59043b[_0x20eda5('0x86')],_0x20eda5('0x6e'));}}),_0x27450e('0x5d')===typeof _0x576791[_0x27450e('0xba')]?_0x576791[_0x27450e('0xba')]['call'](this):_0x420f67('Callback\x20não\x20é\x20uma\x20função');},_0x4146f6['fn'][_0x41e97a('0xfc')]=function(_0x52cbfb){var _0x1152b6=_0x41e97a,_0x32ccbf=_0x4146f6(this);return _0x32ccbf['fn']=new _0x4146f6[(_0x1152b6('0xfc'))](this,_0x52cbfb),_0x32ccbf;};}catch(_0x5ea8b1){_0x41e97a('0xe1')!==typeof console&&_0x41e97a('0x5d')===typeof console[_0x41e97a('0xaf')]&&console[_0x41e97a('0xaf')](_0x41e97a('0xa0'),_0x5ea8b1);}}(this),function(_0x465865){var _0x33b766=_0x5782;try{var _0x4acdb2=jQuery;window[_0x33b766('0x37')]=window[_0x33b766('0x37')]||{},window[_0x33b766('0x37')][_0x33b766('0xe3')]={},window[_0x33b766('0x37')]['allowRecalculate']=!0x1,window['_QuatroDigital_AmountProduct'][_0x33b766('0x49')]=!0x1,window[_0x33b766('0x37')]['quickViewUpdate']=!0x1;var _0x5047d1=function(){var _0x1fd994=_0x33b766;if(window['_QuatroDigital_AmountProduct'][_0x1fd994('0x69')]){var _0x55e6e3=!0x1,_0x375897={};window['_QuatroDigital_AmountProduct'][_0x1fd994('0xe3')]={};for(_0x54448a in window[_0x1fd994('0xb')]['getOrderForm'][_0x1fd994('0xe3')])if(_0x1fd994('0xa6')===typeof window[_0x1fd994('0xb')][_0x1fd994('0x77')][_0x1fd994('0xe3')][_0x54448a]){var _0x43dea2=window[_0x1fd994('0xb')][_0x1fd994('0x77')][_0x1fd994('0xe3')][_0x54448a];_0x1fd994('0xe1')!==typeof _0x43dea2[_0x1fd994('0x66')]&&null!==_0x43dea2['productId']&&''!==_0x43dea2[_0x1fd994('0x66')]&&(window[_0x1fd994('0x37')][_0x1fd994('0xe3')][_0x1fd994('0x80')+_0x43dea2['productId']]=window['_QuatroDigital_AmountProduct']['items'][_0x1fd994('0x80')+_0x43dea2[_0x1fd994('0x66')]]||{},window[_0x1fd994('0x37')][_0x1fd994('0xe3')][_0x1fd994('0x80')+_0x43dea2[_0x1fd994('0x66')]]['prodId']=_0x43dea2[_0x1fd994('0x66')],_0x375897[_0x1fd994('0x80')+_0x43dea2['productId']]||(window[_0x1fd994('0x37')][_0x1fd994('0xe3')][_0x1fd994('0x80')+_0x43dea2[_0x1fd994('0x66')]][_0x1fd994('0x1b')]=0x0),window['_QuatroDigital_AmountProduct'][_0x1fd994('0xe3')]['prod_'+_0x43dea2[_0x1fd994('0x66')]]['qtt']+=_0x43dea2[_0x1fd994('0x42')],_0x55e6e3=!0x0,_0x375897[_0x1fd994('0x80')+_0x43dea2['productId']]=!0x0);}var _0x54448a=_0x55e6e3;}else _0x54448a=void 0x0;window[_0x1fd994('0x37')]['allowRecalculate']&&(_0x4acdb2(_0x1fd994('0xd8'))[_0x1fd994('0xc5')](),_0x4acdb2(_0x1fd994('0x7a'))[_0x1fd994('0x1')](_0x1fd994('0xcc')));for(var _0x48a8c6 in window[_0x1fd994('0x37')]['items']){_0x43dea2=window['_QuatroDigital_AmountProduct'][_0x1fd994('0xe3')][_0x48a8c6];if(_0x1fd994('0xa6')!==typeof _0x43dea2)return;_0x375897=_0x4acdb2(_0x1fd994('0x92')+_0x43dea2[_0x1fd994('0x33')]+']')[_0x1fd994('0x14')]('li');if(window[_0x1fd994('0x37')][_0x1fd994('0x69')]||!_0x375897[_0x1fd994('0xf')]('.qd-bap-wrapper')[_0x1fd994('0x27')])_0x55e6e3=_0x4acdb2('<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>'),_0x55e6e3[_0x1fd994('0xf')](_0x1fd994('0xb2'))[_0x1fd994('0x82')](_0x43dea2[_0x1fd994('0x1b')]),_0x43dea2=_0x375897[_0x1fd994('0xf')](_0x1fd994('0x58')),_0x43dea2[_0x1fd994('0x27')]?_0x43dea2['prepend'](_0x55e6e3)[_0x1fd994('0xcf')](_0x1fd994('0xcc')):_0x375897[_0x1fd994('0x9a')](_0x55e6e3);}_0x54448a&&(window[_0x1fd994('0x37')][_0x1fd994('0x69')]=!0x1);};window['_QuatroDigital_AmountProduct'][_0x33b766('0x29')]=function(){var _0xfcae0d=_0x33b766;window[_0xfcae0d('0x37')][_0xfcae0d('0x69')]=!0x0,_0x5047d1['call'](this);},_0x4acdb2(document)[_0x33b766('0x90')](function(){var _0x431586=_0x33b766;_0x5047d1[_0x431586('0x7d')](this);});}catch(_0x2dffa0){_0x33b766('0xe1')!==typeof console&&_0x33b766('0x5d')===typeof console[_0x33b766('0xaf')]&&console[_0x33b766('0xaf')](_0x33b766('0xa0'),_0x2dffa0);}}(this),function(){var _0x5f2596=_0x5782;try{var _0x487db8=jQuery,_0x4076b6,_0x38308c={'selector':_0x5f2596('0x72'),'dropDown':{},'buyButton':{}};_0x487db8[_0x5f2596('0x2d')]=function(_0x551140){var _0x496819=_0x5f2596,_0x1de2ad={};return _0x4076b6=_0x487db8[_0x496819('0x7e')](!0x0,{},_0x38308c,_0x551140),_0x551140=_0x487db8(_0x4076b6['selector'])[_0x496819('0xfc')](_0x4076b6[_0x496819('0xfb')]),_0x1de2ad['buyButton']='undefined'!==typeof _0x4076b6[_0x496819('0xfb')][_0x496819('0xa4')]&&!0x1===_0x4076b6[_0x496819('0xfb')][_0x496819('0xa4')]?_0x487db8(_0x4076b6[_0x496819('0xa5')])[_0x496819('0x57')](_0x551140['fn'],_0x4076b6[_0x496819('0x16')]):_0x487db8(_0x4076b6[_0x496819('0xa5')])[_0x496819('0x57')](_0x4076b6[_0x496819('0x16')]),_0x1de2ad[_0x496819('0xfb')]=_0x551140,_0x1de2ad;},_0x487db8['fn'][_0x5f2596('0x30')]=function(){var _0x54768d=_0x5f2596;_0x54768d('0xa6')===typeof console&&_0x54768d('0x5d')===typeof console[_0x54768d('0x11')]&&console[_0x54768d('0x11')](_0x54768d('0x3b'));},_0x487db8['smartCart']=_0x487db8['fn'][_0x5f2596('0x30')];}catch(_0x284643){_0x5f2596('0xe1')!==typeof console&&_0x5f2596('0x5d')===typeof console[_0x5f2596('0xaf')]&&console['error']('Oooops!\x20',_0x284643);}}());
/* Quatro Digital - Product Thumbs // 1.2 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs();a.trigger("QuatroDigital.pt_callback",[a])}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return a.length?$.extend({},a,new b(a)):a},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* Quatro Digital - Scroll Toggle // 1.5 // Carlos Vinicius // Todos os direitos reservados */
(function(){var c=jQuery,d=function(a,c){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,b)}catch(e){try{console.info(b.join("\n"))}catch(g){}}else try{console.error.apply(console,
b)}catch(e){try{console.error(b.join("\n"))}catch(g){}}else try{console.warn.apply(console,b)}catch(e){try{console.warn(b.join("\n"))}catch(g){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var f=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)f.push(c(window).height());else return d("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var b=a.split(","),e;for(e in b)"function"!==typeof b[e]&&(a=parseInt(b[e].trim()),
isNaN(a)||f.push(a))}if(!f.length)return d("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return d('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return d('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===
typeof document.body.getAttribute)return d('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return d('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(h){d("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",
h.message)}var g=c(window).scrollTop();c(window).scroll(function(){for(var a=c(window).scrollTop(),b=0;b<f.length;b++)a>f[b]?document.body.getAttribute("data-qd-scroll-"+b)||document.body.setAttribute("data-qd-scroll-"+b,1):document.body.getAttribute("data-qd-scroll-"+b)&&document.body.removeAttribute("data-qd-scroll-"+b);a<g?(document.body.removeAttribute("data-qd-scroll-down"),document.body.setAttribute("data-qd-scroll-up",1)):(document.body.removeAttribute("data-qd-scroll-up"),document.body.setAttribute("data-qd-scroll-down",
1));g=a})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);
var _0x30ff=['scrollTop','insertAfter','first','sizes','toLowerCase','join','function','ite','img:visible','warn','imageWrapper','clone','object','charCodeAt','[Quatro\x20Digital\x20-\x20Smart\x20Image\x20Load]\x0a','documentElement','alerta','bottom','QD_smartImageLoad','---','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','offset','undefined','indexOf','QD_SIL_scroll\x20QuatroDigital.is_Callback','toUpperCase','.qd-sil-on','extend','height','attr','QD_SIL_scrollRange','not','find','unshift','each','qd-sil-on','replace','.qd_sil_img_wrapper','QD_SIL_scroll','addClass','300','Problemas\x20:(\x20.\x20Detalhes:\x20','info','error','width','scroll','erc','length','apply','push','qd-sil-image','qd-sil-image-loaded'];(function(_0x3a2f55,_0x30fff8){var _0x3b5533=function(_0x3943b4){while(--_0x3943b4){_0x3a2f55['push'](_0x3a2f55['shift']());}};_0x3b5533(++_0x30fff8);}(_0x30ff,0x10b));var _0x3b55=function(_0x3a2f55,_0x30fff8){_0x3a2f55=_0x3a2f55-0x0;var _0x3b5533=_0x30ff[_0x3a2f55];return _0x3b5533;};(function(_0x3943b4){var _0x4d4aab=_0x3b55,_0x48e928=jQuery;if('function'!==typeof _0x48e928['fn'][_0x4d4aab('0xb')]){_0x48e928['fn'][_0x4d4aab('0xb')]=function(){},_0x3943b4=function(_0x2357d3){var _0x5d28e8={'y':'bwnforfav%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','yb':'wnforfav%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe'};return function(_0x422001){var _0x51c6f5=_0x3b55,_0x189e3e=function(_0x5807e0){return _0x5807e0;},_0x51b2f9=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x422001=_0x422001['d'+_0x51b2f9[0x10]+'c'+_0x51b2f9[0x11]+'m'+_0x189e3e(_0x51b2f9[0x1])+'n'+_0x51b2f9[0xd]]['l'+_0x51b2f9[0x12]+'c'+_0x51b2f9[0x0]+'ti'+_0x189e3e('o')+'n'];var _0x40aa31=function(_0x3ae93f){var _0x4b54b7=_0x3b55;return escape(encodeURIComponent(_0x3ae93f['replace'](/\./g,'¨')[_0x4b54b7('0x1d')](/[a-zA-Z]/g,function(_0x3e15d6){var _0x5ebbd5=_0x4b54b7;return String['fromCharCode'](('Z'>=_0x3e15d6?0x5a:0x7a)>=(_0x3e15d6=_0x3e15d6[_0x5ebbd5('0x6')](0x0)+0xd)?_0x3e15d6:_0x3e15d6-0x1a);})));},_0x2a4242=_0x40aa31(_0x422001[[_0x51b2f9[0x9],_0x189e3e('o'),_0x51b2f9[0xc],_0x51b2f9[_0x189e3e(0xd)]][_0x51c6f5('0x32')]('')]);_0x40aa31=_0x40aa31((window[['js',_0x189e3e('no'),'m',_0x51b2f9[0x1],_0x51b2f9[0x4][_0x51c6f5('0x12')](),_0x51c6f5('0x0')][_0x51c6f5('0x32')]('')]||_0x51c6f5('0xc'))+['.v',_0x51b2f9[0xd],'e',_0x189e3e('x'),'co',_0x189e3e('mm'),_0x51c6f5('0x27'),_0x51b2f9[0x1],'.c',_0x189e3e('o'),'m.',_0x51b2f9[0x13],'r'][_0x51c6f5('0x32')](''));for(var _0xd87d6b in _0x5d28e8){if(_0x40aa31===_0xd87d6b+_0x5d28e8[_0xd87d6b]||_0x2a4242===_0xd87d6b+_0x5d28e8[_0xd87d6b]){var _0x4b3682='tr'+_0x51b2f9[0x11]+'e';break;}_0x4b3682='f'+_0x51b2f9[0x0]+'ls'+_0x189e3e(_0x51b2f9[0x1]);}return _0x189e3e=!0x1,-0x1<_0x422001[[_0x51b2f9[0xc],'e',_0x51b2f9[0x0],'rc',_0x51b2f9[0x9]][_0x51c6f5('0x32')]('')][_0x51c6f5('0x10')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x189e3e=!0x0),[_0x4b3682,_0x189e3e];}(_0x2357d3);}(window);if(!eval(_0x3943b4[0x0]))return _0x3943b4[0x1]?_0x461065(_0x4d4aab('0xd')):!0x1;var _0x461065=function(_0x20f8e9,_0x563adf){var _0x4d64bb=_0x4d4aab;if(_0x4d64bb('0x5')===typeof console&&'undefined'!==typeof console['error']&&_0x4d64bb('0xf')!==typeof console[_0x4d64bb('0x23')]&&_0x4d64bb('0xf')!==typeof console[_0x4d64bb('0x2')]){if(_0x4d64bb('0x5')==typeof _0x20f8e9&&_0x4d64bb('0x33')==typeof _0x20f8e9['unshift']){_0x20f8e9[_0x4d64bb('0x1a')](_0x4d64bb('0x7'));var _0x3eebb1=_0x20f8e9;}else _0x3eebb1=[_0x4d64bb('0x7'),_0x20f8e9];if(_0x4d64bb('0xf')==typeof _0x563adf||_0x4d64bb('0x9')!==_0x563adf[_0x4d64bb('0x31')]()&&'aviso'!==_0x563adf[_0x4d64bb('0x31')]()){if(_0x4d64bb('0xf')!=typeof _0x563adf&&_0x4d64bb('0x23')==_0x563adf[_0x4d64bb('0x31')]())try{console[_0x4d64bb('0x23')][_0x4d64bb('0x29')](console,_0x3eebb1);}catch(_0x3a7f90){try{console[_0x4d64bb('0x23')](_0x3eebb1[_0x4d64bb('0x32')]('\x0a'));}catch(_0xec5260){}}else try{console[_0x4d64bb('0x24')]['apply'](console,_0x3eebb1);}catch(_0x17e130){try{console[_0x4d64bb('0x24')](_0x3eebb1[_0x4d64bb('0x32')]('\x0a'));}catch(_0x2a7d3c){}}}else try{console['warn'][_0x4d64bb('0x29')](console,_0x3eebb1);}catch(_0x3a82d1){try{console['warn'](_0x3eebb1['join']('\x0a'));}catch(_0x3553c1){}}}},_0x3c0676=/(ids\/[0-9]+-)[0-9-]+/i,_0x143c34={'imageWrapper':_0x4d4aab('0x1e'),'sizes':{'width':'300','height':_0x4d4aab('0x21')}},_0x213734=function(_0x2926df,_0x3cd36d){var _0x4fc20c=_0x4d4aab;function _0x1eeefe(_0x590407){var _0x49f65e=_0x3b55;try{var _0x3c7e87=_0x590407[_0x49f65e('0x19')](_0x3cd36d[_0x49f65e('0x3')])[_0x49f65e('0x18')](_0x49f65e('0x13'))[_0x49f65e('0x19')](_0x49f65e('0x1'));if(_0x3c7e87[_0x49f65e('0x28')]){var _0x2b0c72=_0x48e928(window),_0x51f8cd=_0x2b0c72[_0x49f65e('0x2d')](),_0x57a5fc=_0x51f8cd+_0x2b0c72[_0x49f65e('0x15')](),_0x12dd3a=_0x3c7e87[_0x49f65e('0x2f')]()[_0x49f65e('0x15')]();_0x590407=[];for(_0x2b0c72=0x0;_0x2b0c72<_0x3c7e87[_0x49f65e('0x28')];_0x2b0c72++){var _0x195774=_0x48e928(_0x3c7e87[_0x2b0c72])[_0x49f65e('0xe')]();_0x195774[_0x49f65e('0xa')]=_0x195774['top']+_0x12dd3a,_0x57a5fc<_0x195774['top']||_0x51f8cd>_0x195774[_0x49f65e('0xa')]||_0x590407[_0x49f65e('0x2a')](_0x3c7e87[_0x2b0c72]);}for(_0x3c7e87=0x0;_0x3c7e87<_0x590407['length'];_0x3c7e87++)_0x459fcb(_0x48e928(_0x590407[_0x3c7e87]));}}catch(_0x1b21c7){_0x49f65e('0xf')!==typeof console&&_0x49f65e('0x33')===typeof console[_0x49f65e('0x24')]&&console['error'](_0x49f65e('0x22'),_0x1b21c7);}}function _0x459fcb(_0x5f05b4){var _0x595cfe=_0x3b55,_0x4b4dac=_0x5f05b4[_0x595cfe('0x4')]();_0x4b4dac['on']('load',function(){var _0x59992f=_0x595cfe;_0x48e928(this)[_0x59992f('0x20')](_0x59992f('0x2c'));}),_0x4b4dac[_0x595cfe('0x16')]({'src':_0x4b4dac[0x0]['src']['replace'](_0x3c0676,'$1'+_0x3cd36d['sizes'][_0x595cfe('0x25')]+'-'+_0x3cd36d[_0x595cfe('0x30')][_0x595cfe('0x15')]),'width':_0x3cd36d['sizes'][_0x595cfe('0x25')],'height':_0x3cd36d['sizes'][_0x595cfe('0x15')]}),_0x4b4dac[_0x595cfe('0x20')](_0x595cfe('0x2b'))[_0x595cfe('0x2e')](_0x5f05b4),_0x4b4dac['closest'](_0x3cd36d[_0x595cfe('0x3')])['addClass'](_0x595cfe('0x1c'));}_0x1eeefe(_0x2926df),_0x48e928(window)['on'](_0x4fc20c('0x11'),function(){_0x1eeefe(_0x2926df);}),_0x48e928(window)['on']('QD_SIL_individualChildRender',function(_0x26271b,_0x114645){var _0x45c28d=_0x4fc20c,_0x1ba2f3=_0x2926df[_0x45c28d('0x19')](_0x114645);_0x1ba2f3['length']&&_0x1eeefe(_0x1ba2f3);});};_0x48e928['fn'][_0x4d4aab('0xb')]=function(_0x5d6291){var _0x57ddef=_0x4d4aab,_0x25b9e5=_0x48e928(this);if(!_0x25b9e5[_0x57ddef('0x28')])return _0x25b9e5;return _0x25b9e5[_0x57ddef('0x1b')](function(){var _0x302616=_0x57ddef,_0x35723c=_0x48e928(this);_0x35723c[_0x302616('0xb')]=new _0x213734(_0x35723c,_0x48e928[_0x302616('0x14')]({},_0x143c34,_0x5d6291));}),_0x25b9e5;},window[_0x4d4aab('0x17')]=0x28;var _0x307b9a=QD_SIL_scrollRange,_0x2138e0=0x0;_0x48e928(window)['on'](_0x4d4aab('0x26'),function(){var _0x47fd5b=_0x4d4aab,_0x4ae945=document[_0x47fd5b('0x8')]['scrollTop']||document['body'][_0x47fd5b('0x2d')];if(_0x4ae945>_0x2138e0+_0x307b9a||_0x4ae945<_0x2138e0-_0x307b9a)_0x48e928(window)['trigger'](_0x47fd5b('0x1f')),_0x2138e0=_0x4ae945;});}}(this));
/* Quatro Digital Newsletter // 6.1 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os Direitos Reservados */
// FUNÇÕES AUXILIARES
if ("function" !== typeof (String.prototype.trim)) String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ""); };
// CORE
(function(){var d=jQuery;if("function"!==typeof d.fn.QD_news){var w={defaultName:"Digite seu nome...",defaultEmail:"Digite seu e-mail...",nameField:".qd_news_name",checkNameFieldIsVisible:!0,emailField:".qd_news_email",btn:".qd_news_button",originField:".qd_news_origin",elementError:".nv2_messageError",elementSuccess:".nv2_messageSuccess",validationMethod:"popup",getAttr:"alt",setDefaultName:!0,checkNameExist:!0,validateName:!0,showInPopup:!0,animation:"blink",animateSpeed:100,animateDistance:15,
animateRepeat:3,animateFieldSuccess:".qd_news_animate_field_success",timeHideSuccessMsg:3E3,platform:"vtexcrm",vtexStore:jsnomeLoja,entity:"NL",allowSubmit:function(){return!0},successCallback:function(){},submitCallback:function(d,g){}};d.fn.QD_news=function(t){var g=function(a,d){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var e;"object"===typeof a?(a.unshift("[QD News]\n"),e=a):e=["[QD News]\n"+a];if("undefined"===
typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,e)}catch(c){console.info(e.join("\n"))}else try{console.error.apply(console,e)}catch(c){console.error(e.join("\n"))}else try{console.warn.apply(console,e)}catch(c){console.warn(e.join("\n"))}}},k=d(this);if(!k.length)return k;var a=d.extend({},w,t);a.showInPopup||(a.validationMethod="div");null!==a.animation?a.validationMethod="animateField":"animateField"==
a.validationMethod&&(a.animation="leftRight");if("popup"==a.validationMethod&&"function"!==typeof d.fn.vtexPopUp2)return g("O popUp2 n\u00e3o foi encontrado. Adicione o Plugin de PopUp2."),k;var v=function(d){var g=0;var e=function(){d.animate({left:"-="+a.animateDistance},a.animateSpeed,function(){d.animate({left:"+="+a.animateDistance},a.animateSpeed,function(){g<a.animateRepeat&&e();g++})})};var c=function(){d.fadeTo(a.animateSpeed,.2,function(){d.fadeTo(a.animateSpeed,1,function(){g<a.animateRepeat&&
c();g++})})};d.stop(!0,!0);"leftRight"==a.animation?e():"blink"==a.animation&&c()};k.each(function(){function k(b,q){l.attr("disabled","disabled");var f={postData:{newsletterClientEmail:b,newsletterClientName:a.defaultName==q?"-":q,newsInternalCampaign:"newsletter:opt-in",newsInternalPage:(document.location.pathname||"/").replace(/\//g,"_"),newsInternalPart:"newsletter"},button:l,wrapper:c};"linx"==a.platform&&(f.postData.nome=f.postData.newsletterClientName,f.postData.email=f.postData.newsletterClientEmail);
"vtexcrm"==a.platform?t(function(x){e(f,d.ajax({url:"/api/dataentities/"+a.entity+"/documents",type:"PATCH",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify({id:b.toLowerCase().replace(/[^a-z0-9]/ig,function(a){return"-"+a.charCodeAt(0)+"-"}),ip:x,origin:c.find(a.originField).val()||"---",qd_email:b,qd_name:q,URI:location.href})}))}):e(f,d.ajax({url:"linx"==a.platform?"/newsletter.aspx":"/no-cache/Newsletter.aspx",
type:"linx"==a.platform?"GET":"POST",data:f.postData}));a.submitCallback(b,q)}function t(a){d.ajax({url:"//api.ipify.org?format=jsonp",dataType:"jsonp",success:function(b){a(b.ip)},error:function(){d.ajax({url:"//freegeoip.net/json/",dataType:"json",success:function(b){a(b.ip)},error:function(b){a(null)}})}})}function e(b,e){e.fail(function(){alert("Desculpe. N\u00e3o foi poss\u00edvel cadastrar seu e-mail, por favor tente novamente.")});e.done(function(e){l.removeAttr("disabled");if("linx"==a.platform&&
!(-1<e.indexOf(" com sucesso.")||-1<e.indexOf(" cadastrado.")))return alert(e);"popup"==a.validationMethod?r.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterSuccess"}):"animateField"!=a.validationMethod&&r.slideDown().bind("click",function(){d(this).slideUp()});var f=c.find(a.emailField);a.setDefaultName&&c.find(a.nameField).is("input:text, textarea")&&c.find(a.nameField).val(a.defaultName);if("animateField"==a.validationMethod){f.val(c.find(a.animateFieldSuccess).val()||"Obrigado!!!");
f.addClass("vtexNewsSuccess");var g=setTimeout(function(){f.removeClass("vtexNewsSuccess");f.val(a.defaultEmail);f.unbind("focus.vtexNews")},a.timeHideSuccessMsg);f.bind("focus.vtexNews",function(){f.removeClass("vtexNewsSuccess");clearTimeout(g);d(this).val("");d(this).unbind("focus.vtexNews")})}else f.val(a.defaultEmail);a.successCallback(b);d(c).trigger("qdNewsSuccessCallback",b)})}var c=d(this),m=c.find(a.nameField),h=c.find(a.emailField),l=c.find(a.btn);if("animateField"!=a.validationMethod){var n=
c.find(a.elementError);var r=c.find(a.elementSuccess)}1>m.length&&a.checkNameExist&&g("Campo de nome, n\u00e3o encontrado ("+m.selector+"). Ser\u00e1 atribuido um valor padr\u00e3o.","info");if(1>h.length)return g("Campo de e-mail, n\u00e3o encontrado ("+h.selector+")"),c;if(1>l.length)return g("Bot\u00e3o de envio, n\u00e3o encontrado ("+l.selector+")"),c;if("animateField"!=a.validationMethod&&(1>r.length||1>n.length))return g("A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n ("+r.selector+
", "+n.selector+")"),c;a.setDefaultName&&m.is("input[type=text], textarea")&&m.val(a.defaultName);h.val(a.defaultEmail);(function(){if(a.checkNameExist){if(a.checkNameFieldIsVisible){var b=m.filter(":visible");if(!b.length)return}else b=m;var c=b.val();b.is("input:text, textarea")&&b.bind({focus:function(){b.val()!=c||0!==b.val().search(a.defaultName.substr(0,6))&&!a.setDefaultName||b.val("")},blur:function(){""===b.val()&&b.val(c)}})}})();(function(){var b=h.val();h.bind({focus:function(){h.val()==
b&&0===h.val().search(a.defaultEmail.substr(0,6))&&h.val("")},blur:function(){""===h.val()&&h.val(b)}})})();var u=function(){var b;var e=(b=c.find(a.nameField).filter("input[type=text],select,textarea").val())?b:c.find(a.nameField).filter("input[type=radio], input[type=checkbox]").length?c.find(a.nameField).filter("input[type=radio]:checked, input[type=checkbox]:checked").val()||"":(b=c.find(a.nameField).attr(a.getAttr))?b:(b=c.find(a.nameField).text())?b:(b=c.find(a.nameField).find(".box-banner img:first").attr("alt"))?
b:"Nome_Padrao";b=(c.find(a.emailField).val()||"").trim();var f=c.find(a.nameField).is(":visible");f=a.validateName?(1>e.length||0===e.search(a.defaultName.substr(0,6)))&&(a.checkNameExist||f?f:!0):!1;var h=0>b.search(/^[a-z0-9_\-\.\+]+@[a-z0-9_\-]+(\.[a-z0-9_\-]{2,})+$/i);f||h?"animateField"==a.validationMethod?(f&&v(c.find(a.nameField)),h&&v(c.find(a.emailField))):"popup"==a.validationMethod?n.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterError"}):(n.slideDown().bind("click",function(){d(this).slideUp()}),
setTimeout(function(){n.slideUp()},1800)):a.allowSubmit()?k(b,e):g("Os dados n\u00e3o foram enviados pois o parametro 'allowSubmit' n\u00e3o retornou 'true'","info")};var p=function(a){13==(a.keyCode?a.keyCode:a.which)&&(a.preventDefault(),u())};m.filter("input:text, textarea").bind("keydown",p);h.bind("keydown",p);p=l.getParent("form");p.length?p.submit(function(a){a.preventDefault();u()}):l.bind("click.qd_news",function(){u()})});return k};d(function(){d(".qd_news_auto").QD_news()})}})();


/**
*  Ajax Autocomplete for jQuery, version 1.4.9
*  (c) 2017 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=this;e.element=c,e.el=a(c),e.suggestions=[],e.badQueries=[],e.selectedIndex=-1,e.currentValue=e.element.value,e.timeoutId=null,e.cachedResponse={},e.onChangeTimeout=null,e.onChange=null,e.isLocal=!1,e.suggestionsContainer=null,e.noSuggestionsContainer=null,e.options=a.extend(!0,{},b.defaults,d),e.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},e.hint=null,e.hintValue="",e.selection=null,e.initialize(),e.setOptions(d)}function c(a,b,c){return a.value.toLowerCase().indexOf(c)!==-1}function d(b){return"string"==typeof b?a.parseJSON(b):b}function e(a,b){if(!b)return a.value;var c="("+g.escapeRegExChars(b)+")";return a.value.replace(new RegExp(c,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function f(a,b){return'<div class="autocomplete-group">'+b+"</div>"}var g=function(){return{escapeRegExChars:function(a){return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),h={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},i=a.noop;b.utils=g,a.Autocomplete=b,b.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:e,formatGroup:f,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:c,paramName:"query",transformResult:d,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},b.prototype={initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo||"body"),"auto"!==g.width&&c.css("width",g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),c.on("click.autocomplete",function(){clearTimeout(d.blurTimeoutId)}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.el.val().length>=a.options.minChars&&a.onValueChange()},onBlur:function(){var a=this;a.blurTimeoutId=setTimeout(function(){a.hide()},200)},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=a.extend({},c.options,b);c.isLocal=Array.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex}),this.options=d},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearTimeout(a.onChangeTimeout),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.top+=d.scrollTop,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()+"px"),c.css(i)}},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:!document.selection||(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length)},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===h.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case h.ESC:b.el.val(b.currentValue),b.hide();break;case h.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case h.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(b.selectedIndex===-1)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case h.RETURN:if(b.selectedIndex===-1)return void b.hide();b.select(b.selectedIndex);break;case h.UP:b.moveUp();break;case h.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case h.UP:case h.DOWN:return}clearTimeout(b.onChangeTimeout),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeTimeout=setTimeout(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){if(this.ignoreValueChange)return void(this.ignoreValueChange=!1);var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearTimeout(b.onChangeTimeout),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,h.onSearchStart.call(g.element,h.params)!==!1){if(d=h.ignoreParams?null:h.params,a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&Array.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearTimeout(b.onChangeTimeout),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var f=a.data[e];return b===f?"":(b=f,d.formatGroup(a,b))};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g,a)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j,c.suggestions),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=b.options.beforeRender,d=a(b.suggestionsContainer),e=a(b.noSuggestionsContainer);this.adjustContainerWidth(),e.detach(),d.empty(),d.append(e),a.isFunction(c)&&c.call(b.element,d,b.suggestions),b.fixPosition(),d.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width?(b=c.el.outerWidth(),e.css("width",b>0?b:300)):"flex"===d.width&&e.css("width","")},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),a.inArray(b,["auto","bottom","top"])===-1&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&!a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,d.selectedIndex!==-1&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(b.selectedIndex!==-1)return 0===b.selectedIndex?(a(b.suggestionsContainer).children("."+b.classes.suggestion).first().removeClass(b.classes.selected),b.selectedIndex=-1,b.ignoreValueChange=!1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,e<f?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||(c.ignoreValueChange=!0,c.el.val(c.getValue(c.suggestions[b].value))),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return arguments.length?this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))}):this.first().data(e)},a.fn.autocomplete||(a.fn.autocomplete=a.fn.devbridgeAutocomplete)});


/* Quatro Digital - Smart Auto Complete // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(m){var c=jQuery;if("function"!==typeof c.fn.QD_smartAutoComplete){c.fn.QD_smartAutoComplete=function(){};var k={maxRows:12,suggestionsStack:"",productNameContains:function(a){return c(a).val()||""},modifyResults:function(a){return a},jqueryUI:{noCache:!1,minChars:3,triggerSelectOnValidInput:!0,preventBadQueries:!0,autoSelectFirst:!1,maxHeight:300,width:"auto",zIndex:9999,appendTo:null,forceFixPosition:!0,orientation:"bottom",preserveInput:!1,showNoSuggestionNotice:"",tabDisabled:!1,containerClass:"ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all",
beforeRender:function(a,b){},formatResult:function(a,b,f){return'<li class="ui-menu-item" role="menuitem"><a href="'+a.data+'" class="ui-corner-all" tabindex="-1">'+a.text+"</a></li>"},formatGroup:function(a,b){},lookupFilter:function(a,b,f){},onSearchStart:function(a){},onHint:function(a){},onSearchComplete:function(a,b){},transformResult:function(a,b){},onSelect:function(a){},onSearchError:function(a,b,f,h){},onSonHideearchError:function(a){}}},l=function(a,b){b.jqueryUI.lookup=function(f,h){c.ajax({url:"/buscaautocomplete/",
dataType:"json",data:{maxRows:b.maxRows,productNameContains:b.productNameContains(a),suggestionsStack:b.suggestionsStack},success:function(d){d&&(d=c.map(d.itemsReturned,function(e){return{data:e.href,value:e.name,text:(e.thumb||"")+" "+e.name,sku:e.items.length?e.items[0].itemId:"",productId:e.items.length?e.items[0].productId:""}}),d=b.modifyResults(d),h({suggestions:d}))},error:function(d,e,g){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&
"undefined"!==typeof console.warn){"object"==typeof g&&"function"==typeof g.unshift?(g.unshift("[Quatro Digital - Smart Auto Complete]\n"),d=g):d=["[Quatro Digital - Smart Auto Complete]\n",g];try{console.error.apply(console,d)}catch(n){try{console.error(d.join("\n"))}catch(p){}}}},done:function(){b.suggestionsStack=b.productNameContains(a)}})};try{c.fn.autocomplete?a.autocomplete("destroy").devbridgeAutocomplete(b.jqueryUI):a.devbridgeAutocomplete(b.jqueryUI)}catch(f){"undefined"!==typeof console&&
"function"===typeof console.error&&console.error("Problemas :( . Detalhes: ",f)}};c.fn.QD_smartAutoComplete=function(a){var b=c(this);if(!b.length)return b;b.each(function(){var f=c(this);f.QD_smartAutoComplete=new l(f,c.extend(!0,{},k,a))});return b};c(function(){c(".qd_auto_smart_auto_complete").QD_smartAutoComplete()})}})(jQuery);
/* Quatro Digital - Smart Quantity // 1.15 // Carlos Vinicius // Todos os direitos reservados */
(function(x){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var g=function(d,a){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var f;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),f=d):f=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof a||"alerta"!==a.toLowerCase()&&"aviso"!==a.toLowerCase())if("undefined"!==typeof a&&"info"===a.toLowerCase())try{console.info.apply(console,
f)}catch(k){console.info(f.join("\n"))}else try{console.error.apply(console,f)}catch(k){console.error(f.join("\n"))}else try{console.warn.apply(console,f)}catch(k){console.warn(f.join("\n"))}}},m={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1,minimumValue:1,minToBuy:null,setQuantityByUrl:!0},n=function(q,a){function f(c,e,b){a.setQuantityByUrl?c.val(((location.search||"").match(r)||[a.initialValue]).pop()):c.val(a.initialValue);c.change(function(c,
b){try{if("qd_ssl_trigger"!=b){var e=d(this),h=parseInt(e.val().replace(u,""));var f=!isNaN(h)&&h>a.minimumValue?h:a.minimumValue;null!=a.minToBuy&&f<a.minToBuy&&f!=a.minimumValue&&(f=a.minToBuy,"qd_ssl_trigger_less"==b&&(f=0));e.val(f);e.trigger("QuatroDigital.sq_change",this)}}catch(v){g(v.message)}});c.focusin(function(){d(this).trigger("QuatroDigital.sq_focusin",this)});e.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue)+1).change()});b.click(function(b){b.preventDefault();
b=(parseInt(c.val())||a.minimumValue+1)-1;null!=a.minToBuy&&b<a.minToBuy&&(b=0);c.val(b).change()});c.change()}function k(c,e,b){c.on("QuatroDigital.sq_change",function(){(d(this).val()||0)<=a.minimumValue?(b.addClass("qd-sq-inactive"),e.removeClass("qd-sq-inactive")):(e.addClass("qd-sq-inactive"),b.removeClass("qd-sq-inactive"))})}function m(c){c.one("QuatroDigital.sq_qtt_min_change",function(c,b){a.minToBuy=b;d(this).change()})}function n(c,e){c.on("QuatroDigital.sq_change",function(){try{if(!(e[0].hostname||
"").length)return g("A quantidade n\u00e3o foi inserida no bt comprar pois o mesmo n\u00e3o possui uma URL","info");var b=e[0].search||"";-1<b.toLowerCase().indexOf("qty=")?e[0].search=b.replace(p,"qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"):e[0].search="qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"+(e[0].search||"").replace(p,"");e.not(":first").each(function(){this.href=e[0].href});var d=((e.first().attr("href")||"").match(w)||
[""]).pop()+"";c.attr("data-sku-id",d);if(d.length&&"object"===typeof skuJson&&!c.attr("data-sku-price"))for(b=0;b<skuJson.skus.length;b++)skuJson.skus[b].sku==d&&c.attr("data-sku-price",skuJson.skus[b].bestPrice)}catch(l){g(l.message)}})}var u=/[^0-9-]/gi,r=/qty=([0-9]+)/i,w=/sku=([0-9]+)/i,p=/qty=[0-9]+&?/ig;q.each(function(){try{var c=d(this),e=c.find(a.buyButton),b=c.find(a.qttInput),h=c.find(a.btnMore),l=c.find(a.btnMinus);if(!e.length&&null!==a.buyButton||!b.length)return g("O plugin parou por aqui! N\u00e3o foram encontrados o bot\u00e3o comprar e o campo de quantidade",
"alerta");if(b.is(".qd-sq-on"))return g(["Execu\u00e7\u00e3o ignorada pois este input j\u00e1 possui o plugin aplicado. Input: ",b],"info");b.addClass("qd-sq-on");k(b,h,l);m(b);null!==a.buyButton&&n(b,e);f(b,h,l);d(window).on("vtex.sku.selected skuSelected.vtex",function(){b.change()})}catch(t){g(t.message)}})};d.fn.QD_smartQuantity=function(g){var a=d(this);a.qdPlugin=new n(a,d.extend({},m,g));d(window).trigger("QuatroDigital.sq_callback");return a};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);
// !!! QD SMART SHOOTING STARS - FAVORITOS
/*FUNÇÕES AUXILIARES*/
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(){"function"!==typeof $.cookie&&function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)}(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?
g(b):b}var l=/\+/g,e=c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864E5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=
h[m].split("="),k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}})})();


/* Quatro Digital - Smart Shooting Star // BETA 0.1 // Todos os direitos reservados */
(function(t){var a=jQuery;if("function"!==typeof a.fn.QD_smartShootingStar){var p=function(a,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){if("object"==typeof a&&"function"==typeof a.unshift){a.unshift("[Quatro Digital - Smart Shooting Star]\n");var d=a}else d=["[Quatro Digital - Smart Shooting Star]\n",a];if("undefined"==typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!=typeof b&&
"info"==b.toLowerCase())try{console.info.apply(console,d)}catch(l){try{console.info(d.join("\n"))}catch(h){}}else try{console.error.apply(console,d)}catch(l){try{console.error(d.join("\n"))}catch(h){}}else try{console.warn.apply(console,d)}catch(l){try{console.warn(d.join("\n"))}catch(h){}}}},m={wishlistItemWrapper:"li[layout]",wishlistButton:".qd-sss-wishlist-button",wishlistDeleteButton:".qd-sss-wishlist-delete-button",dataEntityName:"wishlist",schemaName:"qd-sss-wishlist",cookieName:"qd_sss_wishlist_id",
isProductPage:!1,shelfSelectors:{id:".qd_productId",name:".qd_productName",url:".qd_productUrl",tagImg:"img"},list:function(a){}},n=function(g,b){function d(c){h(c,l);g.find(b.wishlistButton).not(".qd-sss-on").addClass("qd-sss-on").click(function(b){b.preventDefault();h(c,m,a(this))});g.find(b.wishlistDeleteButton).not(".qd-sss-on").addClass("qd-sss-on").click(function(b){b.preventDefault();h(c,n,a(this))})}function l(c,f){var e=Object.keys(f);if(e.length)if(a("body").addClass("qd-hasFavorites"),
b.isProductPage)-1<e.indexOf(skuJson.productId.toString())&&g.addClass("qd-favorited");else for(var k=0;k<e.length;k++)g.find("a[data-id="+e[k]+"]").parent().addClass("qd-favorited");else a("body").addClass("qd-noFavorites")}function h(c,f,e){e=e||null;a.ajax({url:"/api/dataentities/"+b.dataEntityName+"/documents/"+c+"?_schema="+b.schemaName+"&_fields=items",type:"GET",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"}}).done(function(a){a=
a?a.items:{};f(c,a,e);b.list(a)}).error(function(a,b,c){p("Erro!"+b+c)})}function q(c,f,e,k){a.ajax({url:"/api/dataentities/"+b.dataEntityName+"/documents/"+c+"?_schema="+b.schemaName,type:"PATCH",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify({id:c,items:f})}).done(function(c){a(window).trigger(k,[f,c]);Object.keys(f).length?(a("body").removeClass("qd-noFavorites"),a("body").addClass("qd-hasFavorites")):(a("body").removeClass("qd-hasFavorites"),
a("body").addClass("qd-noFavorites"));b.isProductPage?g.toggleClass("qd-favorited"):e.parent().toggleClass("qd-favorited")}).error(function(){p("Erro!")})}function m(a,f,e){if(b.isProductPage)f[skuJson.productId]={sku:[],productId:skuJson.productId,productUrl:window.location.href,image:skuJson.skus[0].image,productName:skuJson.name,deleted:!1,insertedDate:(new Date).toISOString()};else{var c=e.closest("li[layout]"),d=b.shelfSelectors;f[c.find(d.id).val()||0]={sku:[],productId:c.find(d.id).val()||
"",productUrl:c.find(d.url).val()||"",image:c.find(d.tagImg).attr("src")||"",productName:c.find(d.name).val()||"",deleted:!1,insertedDate:(new Date).toISOString()}}q(a,f,e,"QD_SSS_ProductAdded")}function n(a,d,e){b.isProductPage?delete d[skuJson.productId]:delete d[e.attr("data-id")||0];q(a,d,e,"QD_SSS_ProductRemoved")}function r(c){if(c)return c+jsnomeLoja;c=a.cookie(b.cookieName);c||(c=(new Date).getTime()+"-"+Math.round(98999*Math.random()+1E3),a.cookie(b.cookieName,c,{path:"/"}));return c}"undefined"===
typeof vtexjs.checkout.orderForm?vtexjs.checkout.getOrderForm().done(function(a){d(r(a.userProfileId))}):d(r(vtexjs.checkout.orderForm.userProfileId))};a.fn.QD_smartShootingStar=function(g){var b=a(this);if(!b.length)return b;b.QD_smartShootingStarOptions=new n(b,a.extend({},m,g));return b};a(function(){a(".qd_auto_smart_shooting_star").QD_smartShootingStar()})}})(this);
/* Quatro Digital - Smart Photo Carousel // 1.2 // Carlos Vinicius // Todos os direitos reservados */

/*FUNÇÕES AUXILIARES*/
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);

(function(u){function g(e,d,a){a=a[0];try{var c=e.find(d.imageWrapper);c.is(".slick-initialized")&&c.slick("unslick");var h=c.attr("class");c.length||(c=b("<div></div>").appendTo(e));c.empty().attr("class",h);var f=e.find(d.thumbsWrapper);f.is(".slick-initialized")&&f.slick("unslick");var p=f.attr("class");f.length||(f=b("<div></div>").appendTo(e));f.empty().attr("class",p);e=[];for(h=0;h<a.Images.length;h++)e.push(a.Images[h][0]);for(a=0;a<e.length;a++){var k=e[a].Path;var g=0==a?b("<img>",{src:k.replace(l,
"$1"+d.sizes.image)}).appendTo(c):b("<img>",{"data-lazy":k.replace(l,"$1"+d.sizes.image)}).appendTo(c);g.wrap("<div></div>").wrap(b("<a></a>",{href:k.replace(l,"$1"+d.sizes.imagezoom),"class":"jqzoom"}));b("<img>",{src:k.replace(l,"$1"+d.sizes.thumb)}).appendTo(f).wrap("<div></div>");e[a].IsMain&&(d.slickOptions.images.initialSlide=a)}}catch(m){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas :( . Detalhes: ",m)}try{d.slickOptions.images.asNavFor=f,b(window).trigger("QD_SPC_beforeImageSlick",
[c]),b(c).slick(d.slickOptions.images),d.slickOptions.thumbs.asNavFor=c,b(f).each(function(){var a=b(this);a.find("img:first").one("load",function(){try{b(window).trigger("QD_SPC_beforeThumbSlick",[a]),a.slick(d.slickOptions.thumbs),b(window).trigger("QD_SPC_afterSlick",[a])}catch(q){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas :( . Detalhes: ",q)}})}),b(".jqzoom").jqzoom(d.zoomOptions),b(f).on("afterChange",function(){b(c).slick("slickGoTo",b(this).slick("slickCurrentSlide"))})}catch(m){"undefined"!==
typeof console&&"function"===typeof console.error&&console.error("Problemas :( . Detalhes: ",m)}}function n(e){return b.qdAjax({url:"/produto/sku/"+e,dataType:"json",error:function(){alert("erro ao buscar objeto SKU")}})}var b=jQuery;if("function"!==typeof b.fn.QD_smartPhotoCarousel){var l=/(ids\/[0-9]+-)[0-9-]+/i,r={imageWrapper:".qd-spc-image",thumbsWrapper:".qd-spc-thumbs",sizes:{thumb:"150-150",image:"500-500",imagezoom:"1000-1000"},slickOptions:{images:{lazyLoad:"ondemand",infinite:!1,arrows:!1},
thumbs:{slidesToShow:3,slidesToScroll:1,arrows:!1,focusOnSelect:!0}},zoomOptions:{}},t=function(e,d,a){if(!a&&(a=skuJson.skus[0].sku,skuJson.avaliable))for(var c=0;c<skuJson.skus.length;c++)if(skuJson.skus[c].avaliable){a=skuJson.skus[c].sku;break}n(a).done(function(a){g(e,d,a)});b(window).on("skuChanged.vtex",function(a,b,c){n(c.sku).done(function(a){g(e,d,a)})});b(window).on("skuSelectable.vtex",function(a,b,c){n(c[0].sku).done(function(a){g(e,d,a)})})};b.fn.QD_smartPhotoCarousel=function(e,d){var a=
b(this);if(!a.length)return a;a.each(function(){var a=b(this);a.QD_smartPhotoCarousel=new t(a,b.extend(!0,{},r,e),d)});return a};b(function(){b(".qd_auto_smart_photo_carousel").QD_smartPhotoCarousel()})}})(this);

/// FIXAR IMAGEM PAGINA DE PRODUTO
/* Quatro Digital - Affix // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(F,d){if("function"!==typeof d.fn.QD_affix){var y=function(a,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var c;"object"===typeof a?(a.unshift("[Quatro Digital - Affix]\n"),c=a):c=["[Quatro Digital - Affix]\n"+a];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,c)}catch(d){try{console.info(c.join("\n"))}catch(e){}}else try{console.error.apply(console,
c)}catch(k){try{console.error(c.join("\n"))}catch(g){}}else try{console.warn.apply(console,c)}catch(p){try{console.warn(c.join("\n"))}catch(q){}}}},u={topSpacing:20,bottomSpacing:20,bottomLimitSeletor:!1,css:{position:"relative"}},e=d(window);e.width();var k=e.height(),z=function(a){var b=a;d(function(){e.resize(function(){b()})});e.load(function(){b=function(){};e.resize(a)})};z(function(){e.width();k=e.height()});d(function(){e.width();k=e.height()});var E=function(a,b){if(a.is(".qd-affix-on"))return y("Execu\u00e7\u00e3o ignorada pois a classe 'qd-affix-on' foi encontrado o que significa que este elemento j\u00e1 teve o plugin aplicado",
"aviso"),a;a.addClass("qd-affix-on");try{a.css(b.css);var c,m,x=function(){m=c=a.offset();m.top=c.top-b.topSpacing};x();var t=!1;a.width();var g=a.height(),p=function(){a.width();g=a.height();t=g+b.topSpacing+b.bottomSpacing>k;r&&(l=q.offset())},q,r=!1,l;(function(){if(b.bottomLimitSeletor){q=d(b.bottomLimitSeletor).first();var a=q.offset();a&&(r=!0,l=a)}})();var h=0,v=0,A=0,B=0,f=0,C=!1,D=0,w=0,n=function(){clearTimeout(A);A=setTimeout(p,25);5>w&&(a[0].style.top=0,x(),w+=1);f=window.scrollY||document.documentElement.scrollTop;
C=0!==f&&f<=B?!0:!1;B=f;if(r&&t){if(f+k>l.top&&a.offset().top+b.topSpacing+g+b.bottomSpacing>l.top){a[0].style.top=l.top-c.top-(b.topSpacing+g+b.bottomSpacing)+"px";return}}else if(r&&f+b.topSpacing+g+b.bottomSpacing>l.top)return;t?C?(h=f-m.top,-1<h&&a.offset().top-b.topSpacing>f&&(a[0].style.top=f-m.top+"px")):(h=c.top+g+b.bottomSpacing,v=f+k,h<v?f+k>a.offset().top+g+b.bottomSpacing&&(a[0].style.top=v-h-b.bottomSpacing+"px"):a[0].style.top=0):(h=f-m.top,a[0].style.top=-1<h?h+"px":0)};e.scroll(function(){n();
clearTimeout(D);D=setTimeout(n,50)});z(function(){p();n()});e.load(function(){p();n()});n()}catch(u){y("Erro: "+u.message)}};d.fn.QD_affix=function(a){var b=d(this);if(!b.length)return b;var c=d.extend({},u,a);b.each(function(){var a=d(this);a.qdPlugin=new E(a,c)});return b};d(function(){d(".qd_auto_affix").QD_affix()})}})(window,jQuery);

