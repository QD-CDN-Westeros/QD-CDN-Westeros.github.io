"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* LAPTOP-KBFKB1T5 - 17/11/2021 14:15:55 GMT */
"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
});
"function" != typeof String.prototype.capitalize && (String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
});
"function" !== typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function () {
  var b = {
    "\xE7": "c",
    "\xE6": "ae",
    "\u0153": "oe",
    "\xE1": "a",
    "\xE9": "e",
    "\xED": "i",
    "\xF3": "o",
    "\xFA": "u",
    "\xE0": "a",
    "\xE8": "e",
    "\xEC": "i",
    "\xF2": "o",
    "\xF9": "u",
    "\xE4": "a",
    "\xEB": "e",
    "\xEF": "i",
    "\xF6": "o",
    "\xFC": "u",
    "\xFF": "y",
    "\xE2": "a",
    "\xEA": "e",
    "\xEE": "i",
    "\xF4": "o",
    "\xFB": "u",
    "\xE5": "a",
    "\xE3": "a",
    "\xF8": "o",
    "\xF5": "o",
    u: "u",
    "\xC1": "A",
    "\xC9": "E",
    "\xCD": "I",
    "\xD3": "O",
    "\xDA": "U",
    "\xCA": "E",
    "\xD4": "O",
    "\xDC": "U",
    "\xC3": "A",
    "\xD5": "O",
    "\xC0": "A",
    "\xC7": "C"
  };
  return this.replace(/[\u00e0-\u00fa]/ig, function (a) {
    return "undefined" != typeof b[a] ? b[a] : a;
  });
});
Array.prototype.indexOf || (Array.prototype.indexOf = function (d, e) {
  var a;
  if (null == this) throw new TypeError('"this" is null or not defined');
  var c = Object(this),
      b = c.length >>> 0;
  if (0 === b) return -1;
  a = +e || 0;
  Infinity === Math.abs(a) && (a = 0);
  if (a >= b) return -1;

  for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
    if (a in c && c[a] === d) return a;
    a++;
  }

  return -1;
});
/**Funções base */

try {
  /* COMMON */
  var Common = {
    run: function run() {},
    init: function init() {
      Common.topbarSlick();
      Common.applyAmazingMenu();
      Common.applyAmazingMenuMobile();
      Common.modalLoginClick();
      Common.smartCart();
      Common.qdOverlay();
      Common.applyOpenSearchBar();
      Common.applySlickSlider();
      Common.applyCarouselShelf();
      Common.applySmartShootingStar();
      Common.floatMenu();
    },
    ready: function ready() {},
    ajaxStop: function ajaxStop() {
      Common.applyImageLoad();
      Common.applyBuyButton();
      Common.verificaFlagExclusive();
      Common.applySmartShootingStar();
    },
    windowOnload: function windowOnload() {
      Common.applyFooterCollapse();
      Common.newsletter();
    },
    floatMenu: function floatMenu() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || screen.width <= 767) {
        $(window).on('scroll', function () {
          var scroll = $(window).scrollTop(),
              topbarHeight = 39;

          if (scroll >= topbarHeight) {
            $('header').addClass('mz-header__fixed');
            $('.mz-menu').addClass('mz-menu__fixed');
          } else {
            $('header').removeClass('mz-header__fixed');
            $('.mz-menu').removeClass('mz-menu__fixed');
          }
        });
      }
    },
    applySmartShootingStar: function applySmartShootingStar() {
      $(".prateleira").not(".qd-wishlist-started").addClass("qd-wishlist-started").QD_smartShootingStar({
        list: Common.showWishesNumber
      });
    },
    applyLinkOnImageShelf: function applyLinkOnImageShelf() {
      $(".mz-storefront").each(function () {
        $(this).find(".mz-storefront__image--link").attr("href", $(this).find(".mz-storefront__name a").attr("href"));
      });
    },
    applyOpenSearchBar: function applyOpenSearchBar() {
      $(".mz-search-bar-icon__mobile, .mz-fixed-bar__search").on("click", function (event) {
        event.preventDefault();
        $(".mz-search-bar").removeClass("hide");
        $(".mz-search-bar .fulltext-search-box").focus();
        $(document.body).addClass("qd-searchbar-show");
      });
      $(".modal-backdrop").on("click", function () {
        $(".mz-search-bar").addClass("hide");
        $(document.body).removeClass("qd-searchbar-show");
      });
    },
    setDataScrollToggle: function setDataScrollToggle() {
      $(document.body).attr("data-qd-scroll-limit", "200, 510");
    },
    vtexBindQuickViewDestroy: function vtexBindQuickViewDestroy() {
      window.bindQuickView = function () {};
    },
    qdOverlayClass: "mz-measure-guide-on qd-am-on qd-cart-show mz-sn-on thumb-video-on orders-on",
    qdOverlay: function qdOverlay() {
      $(".mz-components-overlay, .close-menu-mobile").click(function () {
        $(document.body).removeClass(Common.qdOverlayClass);
        $(document.body).removeClass("overflow-hidden");
      });
    },
    applyImageLoad: function applyImageLoad() {
      $(".mz-shelf, .mz-box, .mz-wishlist__shelf, .mz-amazing-menu").QD_smartImageLoad({
        sizes: {
          width: "255",
          height: "296"
        }
      }); // Aplica Image Load no menu

      $(window).one("QuatroDigital.am.callback", function () {
        $(".mz-amazing-menu .qd-am-dropdown").one("mouseenter", function () {
          $(window).trigger("QD_SIL_individualChildRender", $(this));
        });
      });
    },
    applyCarouselShelf: function applyCarouselShelf() {
      if ($("body").is(".resultado-busca")) return;
      if ($("body").is(".categoria")) return;
      if ($("body").is(".departamento")) return;
      if ($("body").is(".hotsite")) return;
      var wrapper = $(".mz-shelf .prateleira").not(".slick-initialized, .mz-shelf.custom .prateleira");
      if (!wrapper.length) return false;
      wrapper.has("h2").each(function () {
        var $t = $(this);
        $t.find("h2").insertBefore($t);
      });
      wrapper.slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: true,
        draggable: false,
        speed: 700,
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      });
    },
    applySlickSlider: function applySlickSlider() {
      var wrapper = $(".mz-slider > ul, .mz-slider");
      if (!wrapper.length) return;
      wrapper.slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: false
      });
      wrapper.each(function () {
        $(this).find(".slick-arrow").wrapAll('<div class="slick-nav" />');
      });
      wrapper.find("img").removeAttr("style");
    },
    applyAmazingMenu: function applyAmazingMenu() {
      $(".mz-amazing-menu__desktop").QD_amazingMenu();
    },
    applyAmazingMenuMobile: function applyAmazingMenuMobile() {
      var wrapper = $(".mz-amazing-menu__mobile");
      wrapper.find("> ul > li > ul").prepend(function () {
        return $(this).prev().clone().wrap("<li></li>").parent();
      });
      wrapper.QD_amazingMenu({
        callback: function callback() {
          //FECHA TODOS ITENS
          wrapper.find("li.qd-am-has-ul .qd-am-dropdown-menu").slideUp();
          $('<span class="qd-am-dropdown-trigger"></span>').appendTo(wrapper.find(".qd-am-has-ul"));
          $(".qd-am-dropdown-trigger").click(function () {
            var $t = $(this);
            $t.parent().toggleClass("qd-am-is-active");
            $t.prev(".qd-am-dropdown, ul.qd-am-level-2").slideToggle();
            $(document.body).toggleClass("am-qd-dropdown-opened");
          });
        }
      });
      $(".mz-menu__mobile").click(function (evt) {
        evt.preventDefault();
        $(document.body).toggleClass("qd-am-on");
        $(document.body).toggleClass("overflow-hidden");
      });
      $(".mz-navigation-actions__login--message").on("click", "a#login", function () {
        $(document.body).removeClass("qd-am-on");
      });
      $(".mz-components-overlay").append('<span class="mz-amazing-menu__mobile-close"></span>');
      $(".mz-amazing-menu__mobile-close > i").click(function (evt) {
        $(document.body).removeClass(Common.qdOverlayClass);
      });
    },
    applyFooterCollapse: function applyFooterCollapse() {
      //APLICAR FOOTER COLLAPSE APENAS NO MOBILE
      if ($(window).width() < 992) {
        $(".mz-footer-institucional__links ul ul li").slideUp().addClass("menu-collapsing").parents("li").append('<span class="qd-am-dropdown-trigger"></span>').addClass("collapsed"); // FUNCIONAMENTO DO BOTAO TRIGGER

        $(".qd-am-dropdown-trigger").click(function () {
          if ($(this).closest("li").is(".collapsed")) {
            $(this).closest("li").removeClass("collapsed").find(".menu-collapsing").slideDown();
          } else {
            $(this).closest("li").addClass("collapsed").find(".menu-collapsing").slideUp();
          }
        });
      }
    },
    tipBarCarousel: function tipBarCarousel() {
      if ($(window).width() < 992) {
        var wrapper = $(".mz-tipbar > ul").not(".slick-initialized");
        if (!wrapper.length) return;
        wrapper.slick({
          arrows: false,
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          draggable: true,
          centerPadding: false,
          responsive: [{
            breakpoint: 648,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }]
        });
      }
    },
    smartQuantityShelf: function smartQuantityShelf() {
      $(".shelf-qd-v1:not(.qd-on)").addClass("qd-on").QD_smartQuantity({
        buyButton: ".btn-add-buy-button-asynchronous",
        setQuantityByUrl: false
      });
    },
    smartCart: function smartCart() {
      $(".mz-menu-actions__cart").append('<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>');
      $(document.body).append('<div class="smart-cart-qd-v2-wrapper"><div class="qd-sc-wrapper"></div></div>');
      var wrapper = $(".qd-sc-wrapper");
      $.QD_smartCart({
        selector: wrapper,
        dropDown: {
          texts: {
            linkCart: "Finalizar Compra",
            cartTotal: '<div class="qd-ddc-box-item"><div class="pull-left"><span>Subtotal:</span></div><div class="pull-right"><span>#value</span></div></div>                  <div class="qd-ddc-box-item qd-ddc-box-shipping"><div class="pull-left"><span>Frete:</span></div><div class="pull-right"><span>#shipping</span></div></div>                     <div class="qd-ddc-box-item"><div class="pull-left"><span>Itens: #items</span></div><div class="pull-right"><span>Total: #total</span></div></div>'
          },
          updateOnlyHover: false,
          smartCheckout: true,
          callback: function callback() {
            $(".qd-ddc-wrapper3").prepend('<div class="qd-cartTitle"><h3>Minha Sacola</h3></div>');
            wrapper.find(".qd_ddc_continueShopping").after(wrapper.find(".qd-ddc-viewCart"));
          },
          skuName: function skuName(data) {
            return data.name;
          },
          callbackProductsList: function callbackProductsList() {
            wrapper.find(".qd-ddc-prodQtt").each(function () {
              var $t = $(this);
              $t.add($t.next(".qd-ddc-prodRemove")).wrapAll('<div class="qd-ddc-prodAction"></div>');
            });
          }
        }
      }); // Callback do Quick View

      window._QuatroDigital_prodBuyCallback = function (jqXHR, textStatus, prodLink, skus) {
        $.fn.simpleCart(true);
        $(".mz-storefront__buy-button-modal").modal("hide");
        $(window).trigger("QuatroDigital.qd_bb_prod_add", [new $(), skus[0] || 0]);
      };

      $(".mz-fixed-bar__cart, .mz-menu-actions__cart").click(function (evt) {
        evt.preventDefault();
        $(document.body).toggleClass("qd-cart-show");
        wrapper.height($(window).height());
        wrapper.find(".qd-ddc-prodWrapper").css("max-height", $(window).height() - 232);
        if (window.Tawk_API) window.Tawk_API.toggleVisibility();
      });
      $(".qd_ddc_lightBoxClose, .qd_ddc_continueShopping").click(function (evt) {
        $(document.body).removeClass(Common.qdOverlayClass);
        if (window.Tawk_API) window.Tawk_API.toggleVisibility();
      });
    },
    newsletter: function newsletter() {
      // Opções do Plugin
      var options = {
        cookie: "QdSn1",
        // Nome do Cookie
        cookieExpires: 30,
        // Expiração do Cookie tempo em dias
        cookiePath: "/",
        // Path do Cookie
        button: false,
        // Diz se vai ter um botão para chamar o modal na tela
        isOverflowHidden: true,
        // Diz se a tela vai ter overflow:hidden
        code: "",
        email: "",
        iframeCss: "{}",
        displayTimes: 2,
        // quantas vezes o popup será exibido até que o cookie diga para não exibir mais
        manual: false // Controla se o disparo será manual ou não

      }; // Verifica se o valor do cookie é maior do que o número de vezes (displayTimes)

      var cookie = parseInt($.cookie(options.cookie)) || 0; // Cookie

      if (cookie >= options.displayTimes) return;
      /*
      PARA FUNCIONAR, DEVE-SE ADICIONAR O SUBTEMPLATE DE HTML DA NEWSLETTER
      NA PAGINA QUE DESEJA SE UTILIZAR A NEWSLETTER
      */
      // Modal

      var modal = $(".qd-v1-modal-newsletter");
      if (!$(".qd-v1-modal-newsletter").length) return;
      modal.addClass("in show").show(); // Adiciona Body Class (Modal Aberto)

      $(document.body).addClass("modal-open"); // Função de fechar o modal

      $(".qd-v1-modal-newsletter, .qd_news_success .qd_news_button").on("click", function (e) {
        if ($(e.target).is($(this))) {
          var currentCookie = parseInt($.cookie(options.cookie)) || 0;
          $.cookie(options.cookie, currentCookie + 1 || "0", {
            expires: parseInt(options.cookieExpires),
            path: options.cookiePath
          });
          modal.removeClass("in show").hide();
          $(document.body).removeClass("modal-open");
        }
      }); ///Envio do form

      $(function () {
        // Formulário
        var form = $("#mz-newsletter-form");
        var entity = "NL";
        var emailInput = form.find("[name=qd_email]"); // Não alterar aqui

        form.validate({
          rules: {
            email: {
              email: true
            }
          },
          submitHandler: function submitHandler(form) {
            var $form = $(form);
            if (!$form.valid()) return;
            var inputs = $form.find("[name]");
            emailInput = emailInput.filter(inputs);
            $form.addClass("qd-loading");

            var saveContact = function saveContact(userId) {
              $.ajax({
                url: "//api.ipify.org?format=jsonp",
                dataType: "jsonp",
                success: function success(data) {
                  sendData(data.ip);
                },
                error: function error() {
                  $.ajax({
                    url: "//www.telize.com/jsonip",
                    dataType: "jsonp",
                    success: function success(data) {
                      sendData(data.ip);
                    },
                    error: function error(data) {
                      sendData(null);
                    }
                  });
                }
              });
              var formData = $form.serializeObject();

              var sendData = function sendData(ip) {
                formData["userId"] = userId;
                formData["ip"] = ip;
                formData["id"] = (emailInput.val() || "").toLowerCase().replace(/[^a-z0-9]/gi, function (v) {
                  return "-" + v.charCodeAt(0) + "-";
                });
                $.ajax({
                  url: "/api/dataentities/" + entity + "/documents",
                  type: "PATCH",
                  dataType: "json",
                  headers: {
                    Accept: "application/vnd.vtex.ds.v10+json",
                    "Content-Type": "application/json; charset=utf-8"
                  },
                  data: JSON.stringify(formData),
                  success: function success(data) {
                    $form.addClass("qd-form-success");
                    $form.trigger("QD.crmSuccess", [data]);
                  },
                  error: function error(jqXHR) {
                    if (jqXHR.status == "0" || jqXHR.status == "304") {
                      alert("Este e-mail já está cadastrado na newsletter!");
                    } else {
                      alert("Desculpe, não foi possível enviar seu formulário!");
                    }
                  },
                  complete: function complete() {
                    $form.removeClass("qd-loading");
                  }
                });
              };
            };

            $.ajax({
              url: "/api/dataentities/CL/search?_fields=id&email=" + (emailInput.val() || "---"),
              type: "GET",
              dataType: "json",
              headers: {
                Accept: "application/vnd.vtex.ds.v10+json"
              },
              success: function success(data) {
                if (data.length) saveContact(data[0].id);else saveContact(null);
              },
              error: function error() {
                saveContact(null);
              }
            });
            return false;
          },
          errorPlacement: function errorPlacement(error, element) {}
        });
      }); // Adicionando o da entidade NL

      $(window).on("QD.crmSuccess", function (e, data) {
        $.cookie(options.cookie, options.displayTimes, {
          expires: parseInt(options.cookieExpires),
          path: options.cookiePath
        });
      });
    },
    applyBuyButton: function applyBuyButton() {
      $(document.body).QD_buyButton({
        buyButton: ".mz-storefront__buy-button .btn-add-buy-button-asynchronous"
      });
    },
    verificaFlagExclusive: function verificaFlagExclusive() {
      $(".mz-storefront").each(function () {
        if ($(this).find(".store-exclusive").is(":visible")) {
          $(this).find(".mz-storefront__buy-button").remove();
        }
      });
    },
    topbarSlick: function topbarSlick() {
      var $topbar = $(".header .mz-topbar__links");

      if (window.innerWidth < 1023) {
        $topbar.slick({
          infinite: false,
          dots: false,
          arrows: false,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        });
      }
    },
    modalLoginClick: function modalLoginClick() {
      $.ajax({
        type: "GET",
        cache: !1,
        url: "/no-cache/profileSystem/getProfile",
        success: function success(i) {
          if (!i.IsUserDefined) {
            $(".mz-menu-actions__login #login").on("click", function (e) {
              e.preventDefault();
              vtexid.start({
                returnUrl: "",
                userEmail: "",
                locale: "pt-BR",
                forceReload: false
              });
            });
          } else {
            $(".mz-menu-actions__login #login").attr("href", "/account");
          }
        }
      });
    }
  };
  /* HOME */

  var Home = {
    init: function init() {
      Home.brandsCarousel();
      Home.tabShelfCarousel();
      Home.applyCarouselShelfCustom();
    },
    ajaxStop: function ajaxStop() {},
    windowOnload: function windowOnload() {
      Home.countContentOnGridSection();
      Home.loadProductSpecification();
    },
    countContentOnGridSection: function countContentOnGridSection() {
      var grid = $(".grid-section");
      if (!grid) return;
      grid.each(function () {
        var qtd = $(this).children().length;

        if (qtd > 0) {
          $(this).addClass("grid-section-items-".concat(qtd));
        }
      });
    },
    slickOnfakeCollection: function slickOnfakeCollection() {
      var wrapper = $(".mz-fake-collection ul").not(".slick-initialized");
      if (!wrapper.length) return;
      wrapper.slick({
        arrows: true,
        autoplay: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        draggable: true,
        centerPadding: false,
        responsive: [{
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 701,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 648,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    },
    brandsCarousel: function brandsCarousel() {
      var wrapper = $(".mz-brands-carousel").not(".slick-initialized");
      if (!wrapper.length) return;
      wrapper.slick({
        arrows: true,
        // autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        draggable: true,
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }, {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }, {
          breakpoint: 648,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerPadding: "50px"
          }
        }]
      });
    },
    tabShelfCarousel: function tabShelfCarousel() {
      var wrapper = $(".mz-shelf-tabs");
      var shelves = wrapper.find(".prateleira");
      wrapper.find("h2").each(function () {
        var $t = $(this);
        var text = $t.text().toLowerCase().replace(/ /g, "-");
        $t.wrap('<a class="mz-shelf-tabs__item" href="#' + text + '" />');
        $t.parent().nextAll(".prateleira").first().attr("id", text).addClass("tab-pane");
      }).parent().appendTo(wrapper.find(".mz-shelf-tabs__links")).click(function (e) {
        e.preventDefault();
        var $t = $(this).addClass("active");
        $t.siblings("a").removeClass("active");
        var idVitrine = e.currentTarget.hash;
        $(".mz-shelf.tab-content .prateleira").removeClass("active");
        $(idVitrine).addClass("active");
        shelves.filter(".slick-initialized").slick("slickGoTo", 0);
      }).first().click();
      wrapper.find(".mz-shelf").addClass("tab-content");
    },
    applyCarouselShelfCustom: function applyCarouselShelfCustom() {
      var wrapper = $(".mz-shelf.custom .prateleira").not(".slick-initialized");
      if (!wrapper.length) return false;
      wrapper.has("h2").each(function () {
        var $t = $(this);
        $t.find("h2").insertBefore($t);
      });
      wrapper.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        draggable: false,
        speed: 700
      });
    },
    loadProductSpecification: function loadProductSpecification() {
      var autentico = "\n    <div class=\"specificationProd\">\n      <div class=\"icon\">\n        <svg width=\"30\" height=\"33\" viewBox=\"0 0 30 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5172 0V0.77234C4.70208 0.758298 4.89045 0.751277 5.07883 0.751277C8.72766 0.751277 11.6858 3.77745 11.6858 7.50574C11.6858 9.11713 11.1346 10.5916 10.2172 11.7536V29.6824L4.56952 26.1121L4.5172 26.1543V33H29.9998V0H4.5172ZM12.7009 28.2989H25.7645C26.2323 28.2989 26.6125 28.6854 26.6125 29.1629C26.6125 29.6435 26.2323 30.03 25.7645 30.03H12.7009C12.2335 30.03 11.8532 29.6435 11.8532 29.1629C11.8532 28.6854 12.2335 28.2989 12.7009 28.2989ZM12.7009 23.6754H25.7645C26.2323 23.6754 26.6125 24.0651 26.6125 24.5429C26.6125 25.0235 26.2323 25.41 25.7645 25.41H12.7009C12.2335 25.41 11.8532 25.0235 11.8532 24.5429C11.8532 24.0654 12.2335 23.6754 12.7009 23.6754ZM12.7009 19.0554H25.7645C26.2323 19.0554 26.6125 19.4454 26.6125 19.9229C26.6125 20.4038 26.2323 20.7903 25.7645 20.7903H12.7009C12.2335 20.7903 11.8532 20.4038 11.8532 19.9229C11.8532 19.4458 12.2335 19.0554 12.7009 19.0554ZM-0.000244141 7.50574C-0.000244141 8.745 0.421849 9.88245 1.12999 10.7777V27.72L4.82766 24.255L9.03115 27.72V10.7777C9.73929 9.88245 10.1614 8.745 10.1614 7.50574C10.1614 4.63755 7.88696 2.31 5.07883 2.31C2.27417 2.31 -0.000244141 4.63755 -0.000244141 7.50574ZM2.09278 7.19681C2.09278 5.55032 3.42185 4.21277 5.0579 4.21277C6.69394 4.21277 8.02301 5.55032 8.02301 7.19681C8.02301 8.8433 6.69394 10.1809 5.0579 10.1809C3.42185 10.1809 2.09278 8.8433 2.09278 7.19681Z\" fill=\"#ED1B23\"/>\n          </svg>\n          \n      </div>\n      <div class=\"text\">\n        <p>\n          Possui <strong>certificado <br>de autenticidade</strong>\n        </p>\n      </div>\n    </div>\n    ";
      var articulado = "\n    <div class=\"specificationProd\">\n      <div class=\"icon\">\n        <svg width=\"46\" height=\"33\" viewBox=\"0 0 46 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M20.3046 30.1523L9.13397 24.97C10.5038 23.5134 11.3551 21.2052 11.0092 18.8479L23.0682 22.1663C20.5506 24.1662 19.4773 27.3877 20.3046 30.1523Z\" fill=\"#ED1B23\"/>\n          <path d=\"M25.7545 20.5998L39.468 0L43.7378 15.935L33.5534 25.5879C32.4867 22.1809 29.1717 20.1457 25.7545 20.5998Z\" fill=\"#ED1B23\"/>\n          <path d=\"M27.8547 31.8846C25.5578 32.5 23.1915 31.1338 22.576 28.8369C21.9605 26.5399 23.3267 24.1736 25.6237 23.5582C27.9206 22.9427 30.2869 24.3089 30.9024 26.6058C31.3743 28.9412 30.0081 31.3076 27.8547 31.8846Z\" fill=\"#ED1B23\"/>\n          <path d=\"M6.42197 23.8084C5.13845 24.512 3.50927 24.648 2.23787 23.7102C0.349309 22.5256 -0.305177 20.0448 1.02755 18.1439C2.21217 16.2553 4.69291 15.6009 6.59383 16.9336C8.95144 18.3773 9.11239 22.0924 6.42197 23.8084Z\" fill=\"#ED1B23\"/>\n          </svg>\n      </div>\n      <div class=\"text\">\n        <p>\n          100% <br>\n          <strong>Articulado</strong>\n        </p>\n      </div>\n    </div>\n    ";
      var removivel = "\n    <div class=\"specificationProd\">\n      <div class=\"icon\">\n        <svg width=\"23\" height=\"36\" viewBox=\"0 0 23 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M14.5916 32.857C14.5916 32.5166 14.5539 32.2141 14.4407 31.8737C14.3276 31.4577 14.2145 31.0795 14.1014 30.6634C13.9506 30.0583 14.403 29.491 15.0063 29.491H20.926C22.0571 29.491 22.9998 28.5833 22.9998 27.4109V21.5866C22.9998 20.9815 22.4342 20.5276 21.8309 20.6789C21.4539 20.7546 21.1145 20.868 20.7752 20.9815C20.4735 21.0949 20.1342 21.1328 19.7948 21.1328C17.8342 21.1328 16.2883 19.2796 16.7784 17.1995C17.0424 16.1027 17.8719 15.2706 18.9653 15.0059C19.6063 14.8546 20.2096 14.8924 20.7752 15.0437C21.1145 15.1572 21.4916 15.2706 21.8309 15.3463C22.4342 15.4975 22.9621 15.0437 22.9621 14.4386V8.53862C22.9621 7.40402 22.0571 6.45851 20.8883 6.45851H15.044C14.4407 6.45851 13.9883 5.89121 14.1391 5.3239C14.2145 4.90788 14.3276 4.52968 14.4784 4.11366C14.667 3.58417 14.7047 2.94123 14.5161 2.29829C14.2522 1.2015 13.385 0.369456 12.2916 0.104714C10.2178 -0.424769 8.40795 1.12586 8.40795 3.13033C8.40795 3.47071 8.44566 3.77328 8.55877 4.11366C8.67189 4.52968 8.785 4.90788 8.89812 5.3239C9.04894 5.92903 8.59648 6.49633 7.9932 6.49633H2.07353C0.942379 6.49633 -0.000244141 7.40402 -0.000244141 8.57644V27.4865C-0.000244141 28.6212 0.904674 29.5667 2.07353 29.5667H7.95549C8.55877 29.5667 9.01123 30.134 8.86041 30.7013C8.785 31.1173 8.67189 31.4955 8.52107 31.9115C8.33254 32.441 8.29484 33.0839 8.48336 33.7269C8.7473 34.8237 9.61451 35.6557 10.708 35.9205C12.7817 36.3743 14.5916 34.8237 14.5916 32.857Z\" fill=\"#ED1B23\"/>\n          </svg>\n      </div>\n      <div class=\"text\">\n        <p>\n          Possui <strong>pe\xE7as <br>removiveis</strong>\n        </p>\n      </div>\n    </div>\n    ";
      $('.mz-home__shelf.custom .slick-slide').each(function () {
        var $this = $(this);
        var prodId = $this.find('.mz-storefront').attr('data-id');
        Product.searchProductWithId(prodId).then(function (retorno) {
          console.log(retorno);

          if (retorno && retorno.length > 0) {
            var specification = retorno[0].allSpecifications;
            $this.find('.mz-storefront__buy-button').after('<div class="specificationProd_box"></div>');
            specification.map(function (especificacao) {
              switch (especificacao) {
                case 'Certificado':
                  $this.find('.specificationProd_box').append(autentico);
                  break;

                case 'Articulado':
                  $this.find('.specificationProd_box').append(articulado);
                  break;

                case 'Peças Removíveis':
                  $this.find('.specificationProd_box').append(removivel);
                  break;
              }
            });
          }
        });
      });
    }
  };
  /* SEARCH */

  var Search = {
    init: function init() {
      Search.searchResultInfo();
      Search.addOrderBySelect();
      Search.checkURLtoFindOrder();
      Search.hideExtendedMenu();
      Search.searchResult();
      Search.shelfLineFix();
      Search.wrapperOrderMobile();
      Search.categoriesCarouselBanners();
      Search.concatPagesPrateleira();
      Search.changeShelfLayout();
      Search.fixPaginaEmBreve(); //FUNCIONA JUNTO DO INFINITY SCROLL // Esconde botao de carregar mais itens

      Search.checkShelfsNoMoreResults();
      Search.closeMenu();
      Search.preVendaToProduct();
      Search.fixTitlePage();
      Search.seoDropdown();
      Search;
    },
    ajaxStop: function ajaxStop() {
      Search.shelfLineFix();
      Search.checkURLtoFindOrder();
      Search.preVendaToProduct();
    },
    windowOnload: function windowOnload() {},
    checkShelfsNoMoreResults: function checkShelfsNoMoreResults() {
      var qtdShelfDynamic = $(".filterBy:eq(0)").find("option[selected]").attr("value"); //PRIMEIRA VERIFICACAO

      if ($(".mz-search__result .prateleira:last .mz-storefront").length < qtdShelfDynamic) {
        $(".btn-LoadMore").remove();
      } //VERIFICACAO SEMPRE DPS DO CALLBACK DO INFINITY SCROLL


      $(window).on("QuatroDigital.is_Callback", function () {
        if ($(".mz-search__result .prateleira:last .mz-storefront").length < qtdShelfDynamic) {
          $(".btn-LoadMore").remove();
        }
      });
    },
    changeShelfLayout: function changeShelfLayout() {
      if ($(window).width() < 992) {
        //mover pra baixo do searchresultstime
        $(".mz-search__layout-change").insertAfter(".searchResultsTime"); //setar estado inicial no mobile

        $(".mz-search__layout-change .layout-grid").addClass("active");
        $(".mz-search__result").addClass("layout-grid");
      }

      $(".mz-search__layout-change div").on("click", function () {
        //removemos todas as classes ativas dos blocos de escolha de layout
        $(".mz-search__layout-change div").removeClass("active"); //capturamos a classe do bloco

        var text = $(this).attr("class"); //setamos esse bloco como ativo

        $(this).addClass("active"); //No pai das prateleiras resetamos as classes e adicionamos as que queremos

        $(".mz-search__result").attr("class", "").addClass("mz-search__result").addClass(text);
      });
    },
    categoriesCarouselBanners: function categoriesCarouselBanners() {
      var _wrapper$slick;

      var wrapper = $(".mz-search__category-bar-banners > ul").not(".slick-initialized");

      if (!wrapper.length) {
        $(".mz-search__category-bar").remove();
        return;
      }

      wrapper.slick((_wrapper$slick = {
        arrows: true,
        dots: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: true,
        draggable: true,
        centerMode: true,
        centerPadding: "60px",
        variableWidth: false
      }, _defineProperty(_wrapper$slick, "infinite", true), _defineProperty(_wrapper$slick, "speed", 600), _defineProperty(_wrapper$slick, "responsive", [{
        breakpoint: 992,
        settings: "unslick"
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 501,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "40px"
        }
      }]), _wrapper$slick));
    },
    searchResultInfo: function searchResultInfo() {
      if (window.innerWidth < 768) {
        if ($(".mz-breadcrumb li.last").length) {
          var title = document.querySelector(".mz-breadcrumb li.last").innerText;
          $("<h3>" + title + "</h3>").appendTo(".mz-search__result-info");
          $(".main .searchResultsTime:first-child").appendTo(".mz-search__result-info");
        }
      }
    },
    wrapperOrderMobile: function wrapperOrderMobile() {
      //remover termos de busca duplicado
      $(".searchResultsTime:eq(1)").remove(); //No desktop leva orders pra dentro do search result

      if ($(window).width() > 991) {
        $(".mz-search__orderFilters").appendTo(".searchResultsTime"); //   var termoPesquisado = `<div class="mz-search__title">${$(
        //     ".resultado-busca-termo .value"
        //   ).text()}</div>`;

        var termo = $(".resultado-busca-termo .value").text();
        var termoPesquisado = "\n                    <li class=\"last\">\n                    <a\n                            href=\"https://devlojatamashii.myvtex.com/".concat(termo, "\">\n                            <span>").concat(termo, "</span>\n                            </a>");
        $(".mz-breadcrumb ul").append(termoPesquisado);
      }

      $(".mz-search__orderFilters-trigger").on("click", function () {
        $(".mz-search__orderFilters").toggleClass("orders-on");
        $("body").toggleClass("orders-on");
      });
      $(".mz-search__orderFilters, .mz-components-overlay").click(function () {
        $(".mz-search__orderFilters").removeClass("orders-on");
        $("body").removeClass("orders-on");
      });
    },
    shelfLineFix: function shelfLineFix() {
      try {
        var exec = function exec() {
          var curTop;
          var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass("qd-fi-on");
          var shelf = wrapper.children("ul").removeClass("qd-first-line");
          shelf.first().addClass("qd-first-line");

          var setFirst = function setFirst() {
            shelf.each(function () {
              var $t = $(this);

              if ($t.is(".qd-first-line")) {
                curTop = $t.offset().top;
                shelf = shelf.not($t);
                return;
              }

              var offsetTop = $t.offset().top;
              if (offsetTop >= curTop - 10 && offsetTop <= curTop + 10) shelf = shelf.not($t);else {
                $t.addClass("qd-first-line");
                return false;
              }
            });
            if (shelf.length) setFirst();
          };

          setFirst();
        };

        exec();
        this.concatPagesPrateleira(); // Olhando para o Smart Research

        if (!window.qd_shelf_line_fix_) {
          $(window).on("QuatroDigital.sr_shelfCallback", exec);
          window.qd_shelf_line_fix_ = true;
        } // Olhando tbm para o Infinity Scroll


        if (!window.qd_shelf_line_fix_is) {
          $(window).on("QuatroDigital.is_Callback", exec);
          window.qd_shelf_line_fix_is = true;
        } // Olhando para o evento window resize


        var resize = $._data(window).events.resize;

        var allowResize = true;
        if (resize) for (var i = 0; i < resize.length; i++) {
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
      } catch (e) {
        typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message);
      }
    },
    hideExtendedMenu: function hideExtendedMenu() {
      $(".mz-search__navigation ul").each(function () {
        var t, li, qtt, moreLink, moreLi, click, liHide;
        t = $(this);
        li = t.find(">li");
        qtt = 10;
        if (li.length <= qtt) return;
        liHide = li.filter(":gt(" + (qtt - 1) + ")").stop(true, true).hide();
        moreLink = $('<a class="qd-viewMoreMenu">Mostrar mais</a>');
        t.after(moreLink);
        moreLi = $('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais filtros</a></li>');
        t.append(moreLi);

        click = function click() {
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

        moreLi.bind("click.qd_viewMore", click);
        moreLink.bind("click.qd_viewMore", click);
      });
      var wrapper = $(".mz-search__navigation, .search-multiple-navigator");
      wrapper.find("h3, h4, h5").click(function (evt) {
        var $t = $(this);

        if ($(evt.target).is(wrapper.find("h3")) || $(evt.target).is(wrapper.find("h4")) || $(evt.target).is(wrapper.find("h5"))) {
          $t.find("+ ul").stop(true, true).slideToggle(0, function () {
            $t.toggleClass("qd-seach-active-menu");
          });
          $t.find("+ div").stop(true, true).slideToggle(0, function () {
            $t.toggleClass("qd-seach-active-menu");
          });
        }
      });
    },
    addOrderBySelect: function addOrderBySelect() {
      $(".title-orderby").click(function (e) {
        $(".mz-search__order-options").toggleClass("active");
      });
      $(".mz-search__orderFilters a").click(function (e) {
        e.preventDefault();
        var $t = $(this);
        var value = $t.attr("data-order-parameter");
        location.search = (location.search.replace(/O=[^&]+/g, "") + "&" + value).replace("?&", "?").replace(/&{2,}/g, "&");
      });
      var orderBy = (location.search.match(/O=[^&]+/g, "") || [""]).pop();
      if (!orderBy.length) return;
    },
    checkURLtoFindOrder: function checkURLtoFindOrder() {
      var ordenadoPor = $(".title-orderby");

      if (window.location.search.indexOf("OrderByReleaseDateDESC") != -1) {
        ordenadoPor.text($(".mz-search__order-options a.lancamentos").html());
      } else if (window.location.search.indexOf("OrderByTopSaleDESC") != -1) {
        ordenadoPor.text($(".mz-search__order-options a.maisvendidos").html());
      } else if (window.location.search.indexOf("OrderByPriceASC") != -1) {
        ordenadoPor.text($(".mz-search__order-options a.menorpreco").html());
      } else if (window.location.search.indexOf("OrderByPriceDESC") != -1) {
        ordenadoPor.text($(".mz-search__order-options a.maiorpreco").html());
      }
    },
    searchResult: function searchResult() {
      //Abre o menu lateral
      if ($(window).width() < 991) {
        $(".mz-search__navigation-trigger").on("click", function () {
          $(".mz-search__navigation .search-single-navigator").toggleClass("mz-sn-on");
          $("body").toggleClass("mz-sn-on");
        });
        $(".search-single-navigator").prepend('<span class="mz-search__navigation--title">Filtrar Resultados</span>');
      } else {
        $(".search-single-navigator").before('<span class="mz-search__navigation--title">Filtrar Resultados</span>');
      } //add o botão que fecha o menu


      $(".search-single-navigator").append('<span class="mz-search__navigation--close">X</span>');
      $(".mz-components-overlay, .mz-search__navigation--close").on("click", function () {
        $(".search-single-navigator").removeClass("mz-sn-on");
        $("body").removeClass("mz-sn-on");
      });
    },
    concatPagesPrateleira: function concatPagesPrateleira() {
      // concatena as páginas da prateleira para não conter espaços em branco
      if ($(".prateleira > .prateleira").length > 1) {
        var newHtml = "";
        $(".prateleira > .prateleira").each(function (i, e) {
          newHtml += $(e).html();
          if (i != 0) setTimeout(function () {
            $(e).remove();
          }, 100);

          if (i == $(".prateleira > .prateleira").length - 1) {
            setTimeout(function () {
              $($(".prateleira > .prateleira")[0]).html(newHtml);
            }, 100);
          }
        });
      }
    },
    closeMenu: function closeMenu() {
      // $(".search-single-navigator h5").each((index, element) => {
      //   $(element).addClass("qd-seach-active-menu");
      // });
      // $(".search-single-navigator ul").each((index, element) => {
      //   $(element).hide();
      // });
      $(".search-single-navigator").addClass("loaded");
    },
    fixPaginaEmBreve: function fixPaginaEmBreve() {
      var linkPage = window.location.href;

      if (linkPage.indexOf("em-breve") > 0) {
        $("body").addClass("em-breve");
      }
    },
    preVendaToProduct: function preVendaToProduct() {
      $(".prateleira ul").each(function (index, element) {
        var _$, _$2;

        var link = (_$ = $(element)) === null || _$ === void 0 ? void 0 : _$.find(".mz-storefront__name a").attr("href");
        (_$2 = $(element)) === null || _$2 === void 0 ? void 0 : _$2.find(".btn-add-buy-button-asynchronous").attr("href", link);
      });
      $(".btn-add-buy-button-asynchronous").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = e.target.href;
      });
    },
    fixTitlePage: function fixTitlePage() {
      var titleText = $(".mz-titlePage").text();

      if (titleText.length > 0) {
        $("title").text(titleText);
      }
    },
    seoDropdown: function seoDropdown() {
      $(".mz-search__seo__dropdown a").on("click", function (e) {
        e.preventDefault();
        $(e.currentTarget).toggleClass("qd-seach-active-menu");
        $(".mz-search__seo__dropdown__box").toggleClass("closed");
      });
    }
  };
  /* PRODUCT */

  /*! Select2 4.1.0-beta.1 | https://github.com/select2/select2/blob/master/LICENSE.md */

  !function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = function (e, t) {
      return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), n(t), t;
    } : n(jQuery);
  }(function (u) {
    var e = function () {
      if (u && u.fn && u.fn.select2 && u.fn.select2.amd) var e = u.fn.select2.amd;

      var t, n, i, h, s, _o, f, g, m, v, y, _, r, a, b;

      function w(e, t) {
        return r.call(e, t);
      }

      function l(e, t) {
        var n,
            i,
            r,
            s,
            o,
            a,
            l,
            c,
            u,
            d,
            p,
            h = t && t.split("/"),
            f = y.map,
            g = f && f["*"] || {};

        if (e) {
          for (o = (e = e.split("/")).length - 1, y.nodeIdCompat && b.test(e[o]) && (e[o] = e[o].replace(b, "")), "." === e[0].charAt(0) && h && (e = h.slice(0, h.length - 1).concat(e)), u = 0; u < e.length; u++) {
            if ("." === (p = e[u])) e.splice(u, 1), --u;else if (".." === p) {
              if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
              0 < u && (e.splice(u - 1, 2), u -= 2);
            }
          }

          e = e.join("/");
        }

        if ((h || g) && f) {
          for (u = (n = e.split("/")).length; 0 < u; --u) {
            if (i = n.slice(0, u).join("/"), h) for (d = h.length; 0 < d; --d) {
              if (r = (r = f[h.slice(0, d).join("/")]) && r[i]) {
                s = r, a = u;
                break;
              }
            }
            if (s) break;
            !l && g && g[i] && (l = g[i], c = u);
          }

          !s && l && (s = l, a = c), s && (n.splice(0, a, s), e = n.join("/"));
        }

        return e;
      }

      function x(t, n) {
        return function () {
          var e = a.call(arguments, 0);
          return "string" != typeof e[0] && 1 === e.length && e.push(null), _o.apply(h, e.concat([t, n]));
        };
      }

      function A(t) {
        return function (e) {
          m[t] = e;
        };
      }

      function D(e) {
        if (w(v, e)) {
          var t = v[e];
          delete v[e], _[e] = !0, s.apply(h, t);
        }

        if (!w(m, e) && !w(_, e)) throw new Error("No " + e);
        return m[e];
      }

      function c(e) {
        var t,
            n = e ? e.indexOf("!") : -1;
        return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e];
      }

      function S(e) {
        return e ? c(e) : [];
      }

      return e && e.requirejs || (e ? n = e : e = {}, m = {}, v = {}, y = {}, _ = {}, r = Object.prototype.hasOwnProperty, a = [].slice, b = /\.js$/, f = function f(e, t) {
        var n,
            i,
            r = c(e),
            s = r[0],
            o = t[1];
        return e = r[1], s && (n = D(s = l(s, o))), s ? e = n && n.normalize ? n.normalize(e, (i = o, function (e) {
          return l(e, i);
        })) : l(e, o) : (s = (r = c(e = l(e, o)))[0], e = r[1], s && (n = D(s))), {
          f: s ? s + "!" + e : e,
          n: e,
          pr: s,
          p: n
        };
      }, g = {
        require: function require(e) {
          return x(e);
        },
        exports: function exports(e) {
          var t = m[e];
          return void 0 !== t ? t : m[e] = {};
        },
        module: function module(e) {
          return {
            id: e,
            uri: "",
            exports: m[e],
            config: (t = e, function () {
              return y && y.config && y.config[t] || {};
            })
          };
          var t;
        }
      }, s = function s(e, t, n, i) {
        var r,
            s,
            o,
            a,
            l,
            c,
            u,
            d = [],
            p = _typeof(n);

        if (c = S(i = i || e), "undefined" == p || "function" == p) {
          for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1) {
            if ("require" === (s = (a = f(t[l], c)).f)) d[l] = g.require(e);else if ("exports" === s) d[l] = g.exports(e), u = !0;else if ("module" === s) r = d[l] = g.module(e);else if (w(m, s) || w(v, s) || w(_, s)) d[l] = D(s);else {
              if (!a.p) throw new Error(e + " missing " + s);
              a.p.load(a.n, x(i, !0), A(s), {}), d[l] = m[s];
            }
          }

          o = n ? n.apply(m[e], d) : void 0, e && (r && r.exports !== h && r.exports !== m[e] ? m[e] = r.exports : o === h && u || (m[e] = o));
        } else e && (m[e] = n);
      }, t = n = _o = function o(e, t, n, i, r) {
        if ("string" == typeof e) return g[e] ? g[e](t) : D(f(e, S(t)).f);

        if (!e.splice) {
          if ((y = e).deps && _o(y.deps, y.callback), !t) return;
          t.splice ? (e = t, t = n, n = null) : e = h;
        }

        return t = t || function () {}, "function" == typeof n && (n = i, i = r), i ? s(h, e, t, n) : setTimeout(function () {
          s(h, e, t, n);
        }, 4), _o;
      }, _o.config = function (e) {
        return _o(e);
      }, t._defined = m, (i = function i(e, t, n) {
        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
        t.splice || (n = t, t = []), w(m, e) || w(v, e) || (v[e] = [e, t, n]);
      }).amd = {
        jQuery: !0
      }, e.requirejs = t, e.require = n, e.define = i), e.define("almond", function () {}), e.define("jquery", [], function () {
        var e = u || $;
        return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e;
      }), e.define("select2/utils", ["jquery"], function (s) {
        var r = {};

        function u(e) {
          var t = e.prototype,
              n = [];

          for (var i in t) {
            "function" == typeof t[i] && "constructor" !== i && n.push(i);
          }

          return n;
        }

        r.Extend = function (e, t) {
          var n = {}.hasOwnProperty;

          function i() {
            this.constructor = e;
          }

          for (var r in t) {
            n.call(t, r) && (e[r] = t[r]);
          }

          return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, e;
        }, r.Decorate = function (i, r) {
          var e = u(r),
              t = u(i);

          function s() {
            var e = Array.prototype.unshift,
                t = r.prototype.constructor.length,
                n = i.prototype.constructor;
            0 < t && (e.call(arguments, i.prototype.constructor), n = r.prototype.constructor), n.apply(this, arguments);
          }

          r.displayName = i.displayName, s.prototype = new function () {
            this.constructor = s;
          }();

          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            s.prototype[o] = i.prototype[o];
          }

          function a(e) {
            var t = function t() {};

            e in s.prototype && (t = s.prototype[e]);
            var n = r.prototype[e];
            return function () {
              return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments);
            };
          }

          for (var l = 0; l < e.length; l++) {
            var c = e[l];
            s.prototype[c] = a(c);
          }

          return s;
        };

        function e() {
          this.listeners = {};
        }

        e.prototype.on = function (e, t) {
          this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t];
        }, e.prototype.trigger = function (e) {
          var t = Array.prototype.slice,
              n = t.call(arguments, 1);
          this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
        }, e.prototype.invoke = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) {
            e[n].apply(this, t);
          }
        }, r.Observable = e, r.generateChars = function (e) {
          for (var t = "", n = 0; n < e; n++) {
            t += Math.floor(36 * Math.random()).toString(36);
          }

          return t;
        }, r.bind = function (e, t) {
          return function () {
            e.apply(t, arguments);
          };
        }, r._convertData = function (e) {
          for (var t in e) {
            var n = t.split("-"),
                i = e;

            if (1 !== n.length) {
              for (var r = 0; r < n.length; r++) {
                var s = n[r];
                (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), r == n.length - 1 && (i[s] = e[t]), i = i[s];
              }

              delete e[t];
            }
          }

          return e;
        }, r.hasScroll = function (e, t) {
          var n = s(t),
              i = t.style.overflowX,
              r = t.style.overflowY;
          return (i !== r || "hidden" !== r && "visible" !== r) && ("scroll" === i || "scroll" === r || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth);
        }, r.escapeMarkup = function (e) {
          var t = {
            "\\": "&#92;",
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#47;"
          };
          return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
            return t[e];
          });
        }, r.__cache = {};
        var n = 0;
        return r.GetUniqueElementId = function (e) {
          var t = e.getAttribute("data-select2-id");
          return null != t || (t = e.id ? "select2-data-" + e.id : "select2-data-" + (++n).toString() + "-" + r.generateChars(4), e.setAttribute("data-select2-id", t)), t;
        }, r.StoreData = function (e, t, n) {
          var i = r.GetUniqueElementId(e);
          r.__cache[i] || (r.__cache[i] = {}), r.__cache[i][t] = n;
        }, r.GetData = function (e, t) {
          var n = r.GetUniqueElementId(e);
          return t ? r.__cache[n] && null != r.__cache[n][t] ? r.__cache[n][t] : s(e).data(t) : r.__cache[n];
        }, r.RemoveData = function (e) {
          var t = r.GetUniqueElementId(e);
          null != r.__cache[t] && delete r.__cache[t], e.removeAttribute("data-select2-id");
        }, r.copyNonInternalCssClasses = function (e, t) {
          var n = e.getAttribute("class").trim().split(/\s+/);
          n = n.filter(function (e) {
            return 0 === e.indexOf("select2-");
          });
          var i = t.getAttribute("class").trim().split(/\s+/);
          i = i.filter(function (e) {
            return 0 !== e.indexOf("select2-");
          });
          var r = n.concat(i);
          e.setAttribute("class", r.join(" "));
        }, r;
      }), e.define("select2/results", ["jquery", "./utils"], function (h, f) {
        function i(e, t, n) {
          this.$element = e, this.data = n, this.options = t, i.__super__.constructor.call(this);
        }

        return f.Extend(i, f.Observable), i.prototype.render = function () {
          var e = h('<ul class="select2-results__options" role="listbox"></ul>');
          return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e;
        }, i.prototype.clear = function () {
          this.$results.empty();
        }, i.prototype.displayMessage = function (e) {
          var t = this.options.get("escapeMarkup");
          this.clear(), this.hideLoading();
          var n = h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
              i = this.options.get("translations").get(e.message);
          n.append(t(i(e.args))), n[0].className += " select2-results__message", this.$results.append(n);
        }, i.prototype.hideMessages = function () {
          this.$results.find(".select2-results__message").remove();
        }, i.prototype.append = function (e) {
          this.hideLoading();
          var t = [];

          if (null != e.results && 0 !== e.results.length) {
            e.results = this.sort(e.results);

            for (var n = 0; n < e.results.length; n++) {
              var i = e.results[n],
                  r = this.option(i);
              t.push(r);
            }

            this.$results.append(t);
          } else 0 === this.$results.children().length && this.trigger("results:message", {
            message: "noResults"
          });
        }, i.prototype.position = function (e, t) {
          t.find(".select2-results").append(e);
        }, i.prototype.sort = function (e) {
          return this.options.get("sorter")(e);
        }, i.prototype.highlightFirstItem = function () {
          var e = this.$results.find(".select2-results__option--selectable"),
              t = e.filter(".select2-results__option--selected");
          0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible();
        }, i.prototype.setClasses = function () {
          var t = this;
          this.data.current(function (e) {
            var i = e.map(function (e) {
              return e.id.toString();
            });
            t.$results.find(".select2-results__option--selectable").each(function () {
              var e = h(this),
                  t = f.GetData(this, "data"),
                  n = "" + t.id;
              null != t.element && t.element.selected || null == t.element && -1 < i.indexOf(n) ? (this.classList.add("select2-results__option--selected"), e.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"), e.attr("aria-selected", "false"));
            });
          });
        }, i.prototype.showLoading = function (e) {
          this.hideLoading();
          var t = {
            disabled: !0,
            loading: !0,
            text: this.options.get("translations").get("searching")(e)
          },
              n = this.option(t);
          n.className += " loading-results", this.$results.prepend(n);
        }, i.prototype.hideLoading = function () {
          this.$results.find(".loading-results").remove();
        }, i.prototype.option = function (e) {
          var t = document.createElement("li");
          t.classList.add("select2-results__option"), t.classList.add("select2-results__option--selectable");
          var n = {
            role: "option"
          },
              i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;

          for (var r in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (n["aria-disabled"] = "true", t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--disabled")), null == e.id && t.classList.remove("select2-results__option--selectable"), null != e._resultId && (t.id = e._resultId), e.title && (t.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, t.classList.remove("select2-results__option--selectable"), t.classList.add("select2-results__option--group")), n) {
            var s = n[r];
            t.setAttribute(r, s);
          }

          if (e.children) {
            var o = h(t),
                a = document.createElement("strong");
            a.className = "select2-results__group", this.template(e, a);

            for (var l = [], c = 0; c < e.children.length; c++) {
              var u = e.children[c],
                  d = this.option(u);
              l.push(d);
            }

            var p = h("<ul></ul>", {
              "class": "select2-results__options select2-results__options--nested"
            });
            p.append(l), o.append(a), o.append(p);
          } else this.template(e, t);

          return f.StoreData(t, "data", e), t;
        }, i.prototype.bind = function (t, e) {
          var l = this,
              n = t.id + "-results";
          this.$results.attr("id", n), t.on("results:all", function (e) {
            l.clear(), l.append(e.data), t.isOpen() && (l.setClasses(), l.highlightFirstItem());
          }), t.on("results:append", function (e) {
            l.append(e.data), t.isOpen() && l.setClasses();
          }), t.on("query", function (e) {
            l.hideMessages(), l.showLoading(e);
          }), t.on("select", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("unselect", function () {
            t.isOpen() && (l.setClasses(), l.options.get("scrollAfterSelect") && l.highlightFirstItem());
          }), t.on("open", function () {
            l.$results.attr("aria-expanded", "true"), l.$results.attr("aria-hidden", "false"), l.setClasses(), l.ensureHighlightVisible();
          }), t.on("close", function () {
            l.$results.attr("aria-expanded", "false"), l.$results.attr("aria-hidden", "true"), l.$results.removeAttr("aria-activedescendant");
          }), t.on("results:toggle", function () {
            var e = l.getHighlightedResults();
            0 !== e.length && e.trigger("mouseup");
          }), t.on("results:select", function () {
            var e = l.getHighlightedResults();

            if (0 !== e.length) {
              var t = f.GetData(e[0], "data");
              e.hasClass("select2-results__option--selected") ? l.trigger("close", {}) : l.trigger("select", {
                data: t
              });
            }
          }), t.on("results:previous", function () {
            var e = l.getHighlightedResults(),
                t = l.$results.find(".select2-results__option--selectable"),
                n = t.index(e);

            if (!(n <= 0)) {
              var i = n - 1;
              0 === e.length && (i = 0);
              var r = t.eq(i);
              r.trigger("mouseenter");
              var s = l.$results.offset().top,
                  o = r.offset().top,
                  a = l.$results.scrollTop() + (o - s);
              0 === i ? l.$results.scrollTop(0) : o - s < 0 && l.$results.scrollTop(a);
            }
          }), t.on("results:next", function () {
            var e = l.getHighlightedResults(),
                t = l.$results.find(".select2-results__option--selectable"),
                n = t.index(e) + 1;

            if (!(n >= t.length)) {
              var i = t.eq(n);
              i.trigger("mouseenter");
              var r = l.$results.offset().top + l.$results.outerHeight(!1),
                  s = i.offset().top + i.outerHeight(!1),
                  o = l.$results.scrollTop() + s - r;
              0 === n ? l.$results.scrollTop(0) : r < s && l.$results.scrollTop(o);
            }
          }), t.on("results:focus", function (e) {
            e.element[0].classList.add("select2-results__option--highlighted"), e.element[0].setAttribute("aria-selected", "true");
          }), t.on("results:message", function (e) {
            l.displayMessage(e);
          }), h.fn.mousewheel && this.$results.on("mousewheel", function (e) {
            var t = l.$results.scrollTop(),
                n = l.$results.get(0).scrollHeight - t + e.deltaY,
                i = 0 < e.deltaY && t - e.deltaY <= 0,
                r = e.deltaY < 0 && n <= l.$results.height();
            i ? (l.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : r && (l.$results.scrollTop(l.$results.get(0).scrollHeight - l.$results.height()), e.preventDefault(), e.stopPropagation());
          }), this.$results.on("mouseup", ".select2-results__option--selectable", function (e) {
            var t = h(this),
                n = f.GetData(this, "data");
            t.hasClass("select2-results__option--selected") ? l.options.get("multiple") ? l.trigger("unselect", {
              originalEvent: e,
              data: n
            }) : l.trigger("close", {}) : l.trigger("select", {
              originalEvent: e,
              data: n
            });
          }), this.$results.on("mouseenter", ".select2-results__option--selectable", function (e) {
            var t = f.GetData(this, "data");
            l.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"), l.trigger("results:focus", {
              data: t,
              element: h(this)
            });
          });
        }, i.prototype.getHighlightedResults = function () {
          return this.$results.find(".select2-results__option--highlighted");
        }, i.prototype.destroy = function () {
          this.$results.remove();
        }, i.prototype.ensureHighlightVisible = function () {
          var e = this.getHighlightedResults();

          if (0 !== e.length) {
            var t = this.$results.find(".select2-results__option--selectable").index(e),
                n = this.$results.offset().top,
                i = e.offset().top,
                r = this.$results.scrollTop() + (i - n),
                s = i - n;
            r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r);
          }
        }, i.prototype.template = function (e, t) {
          var n = this.options.get("templateResult"),
              i = this.options.get("escapeMarkup"),
              r = n(e, t);
          null == r ? t.style.display = "none" : "string" == typeof r ? t.innerHTML = i(r) : h(t).append(r);
        }, i;
      }), e.define("select2/keys", [], function () {
        return {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          DELETE: 46
        };
      }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (n, i, r) {
        function s(e, t) {
          this.$element = e, this.options = t, s.__super__.constructor.call(this);
        }

        return i.Extend(s, i.Observable), s.prototype.render = function () {
          var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
          return this._tabindex = 0, null != i.GetData(this.$element[0], "old-tabindex") ? this._tabindex = i.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), e.attr("aria-disabled", "false"), this.$selection = e;
        }, s.prototype.bind = function (e, t) {
          var n = this,
              i = e.id + "-results";
          this.container = e, this.$selection.on("focus", function (e) {
            n.trigger("focus", e);
          }), this.$selection.on("blur", function (e) {
            n._handleBlur(e);
          }), this.$selection.on("keydown", function (e) {
            n.trigger("keypress", e), e.which === r.SPACE && e.preventDefault();
          }), e.on("results:focus", function (e) {
            n.$selection.attr("aria-activedescendant", e.data._resultId);
          }), e.on("selection:update", function (e) {
            n.update(e.data);
          }), e.on("open", function () {
            n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", i), n._attachCloseHandler(e);
          }), e.on("close", function () {
            n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.trigger("focus"), n._detachCloseHandler(e);
          }), e.on("enable", function () {
            n.$selection.attr("tabindex", n._tabindex), n.$selection.attr("aria-disabled", "false");
          }), e.on("disable", function () {
            n.$selection.attr("tabindex", "-1"), n.$selection.attr("aria-disabled", "true");
          });
        }, s.prototype._handleBlur = function (e) {
          var t = this;
          window.setTimeout(function () {
            document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e);
          }, 1);
        }, s.prototype._attachCloseHandler = function (e) {
          n(document.body).on("mousedown.select2." + e.id, function (e) {
            var t = n(e.target).closest(".select2");
            n(".select2.select2-container--open").each(function () {
              this != t[0] && i.GetData(this, "element").select2("close");
            });
          });
        }, s.prototype._detachCloseHandler = function (e) {
          n(document.body).off("mousedown.select2." + e.id);
        }, s.prototype.position = function (e, t) {
          t.find(".selection").append(e);
        }, s.prototype.destroy = function () {
          this._detachCloseHandler(this.container);
        }, s.prototype.update = function (e) {
          throw new Error("The `update` method must be defined in child classes.");
        }, s.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, s.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, s;
      }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
        function r() {
          r.__super__.constructor.apply(this, arguments);
        }

        return n.Extend(r, t), r.prototype.render = function () {
          var e = r.__super__.render.call(this);

          return e[0].classList.add("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e;
        }, r.prototype.bind = function (t, e) {
          var n = this;

          r.__super__.bind.apply(this, arguments);

          var i = t.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
            1 === e.which && n.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), t.on("focus", function (e) {
            t.isOpen() || n.$selection.trigger("focus");
          });
        }, r.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, r.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, r.prototype.selectionContainer = function () {
          return e("<span></span>");
        }, r.prototype.update = function (e) {
          if (0 !== e.length) {
            var t = e[0],
                n = this.$selection.find(".select2-selection__rendered"),
                i = this.display(t, n);
            n.empty().append(i);
            var r = t.title || t.text;
            r ? n.attr("title", r) : n.removeAttr("title");
          } else this.clear();
        }, r;
      }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (r, e, d) {
        function s(e, t) {
          s.__super__.constructor.apply(this, arguments);
        }

        return d.Extend(s, e), s.prototype.render = function () {
          var e = s.__super__.render.call(this);

          return e[0].classList.add("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e;
        }, s.prototype.bind = function (e, t) {
          var i = this;

          s.__super__.bind.apply(this, arguments);

          var n = e.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.on("click", function (e) {
            i.trigger("toggle", {
              originalEvent: e
            });
          }), this.$selection.on("click", ".select2-selection__choice__remove", function (e) {
            if (!i.isDisabled()) {
              var t = r(this).parent(),
                  n = d.GetData(t[0], "data");
              i.trigger("unselect", {
                originalEvent: e,
                data: n
              });
            }
          }), this.$selection.on("keydown", ".select2-selection__choice__remove", function (e) {
            i.isDisabled() || e.stopPropagation();
          });
        }, s.prototype.clear = function () {
          var e = this.$selection.find(".select2-selection__rendered");
          e.empty(), e.removeAttr("title");
        }, s.prototype.display = function (e, t) {
          var n = this.options.get("templateSelection");
          return this.options.get("escapeMarkup")(n(e, t));
        }, s.prototype.selectionContainer = function () {
          return r('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');
        }, s.prototype.update = function (e) {
          if (this.clear(), 0 !== e.length) {
            for (var t = [], n = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", i = 0; i < e.length; i++) {
              var r = e[i],
                  s = this.selectionContainer(),
                  o = this.display(r, s),
                  a = n + d.generateChars(4) + "-";
              r.id ? a += r.id : a += d.generateChars(4), s.find(".select2-selection__choice__display").append(o).attr("id", a);
              var l = r.title || r.text;
              l && s.attr("title", l);
              var c = this.options.get("translations").get("removeItem"),
                  u = s.find(".select2-selection__choice__remove");
              u.attr("title", c()), u.attr("aria-label", c()), u.attr("aria-describedby", a), d.StoreData(s[0], "data", r), t.push(s);
            }

            this.$selection.find(".select2-selection__rendered").append(t);
          }
        }, s;
      }), e.define("select2/selection/placeholder", [], function () {
        function e(e, t, n) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n);
        }

        return e.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, e.prototype.createPlaceholder = function (e, t) {
          var n = this.selectionContainer();
          return n.html(this.display(t)), n[0].classList.add("select2-selection__placeholder"), n[0].classList.remove("select2-selection__choice"), n;
        }, e.prototype.update = function (e, t) {
          var n = 1 == t.length && t[0].id != this.placeholder.id;
          if (1 < t.length || n) return e.call(this, t);
          this.clear();
          var i = this.createPlaceholder(this.placeholder);
          this.$selection.find(".select2-selection__rendered").append(i);
        }, e;
      }), e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (s, i, a) {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
            i._handleClear(e);
          }), t.on("keypress", function (e) {
            i._handleKeyboardClear(e, t);
          });
        }, e.prototype._handleClear = function (e, t) {
          if (!this.isDisabled()) {
            var n = this.$selection.find(".select2-selection__clear");

            if (0 !== n.length) {
              t.stopPropagation();
              var i = a.GetData(n[0], "data"),
                  r = this.$element.val();
              this.$element.val(this.placeholder.id);
              var s = {
                data: i
              };
              if (this.trigger("clear", s), s.prevented) this.$element.val(r);else {
                for (var o = 0; o < i.length; o++) {
                  if (s = {
                    data: i[o]
                  }, this.trigger("unselect", s), s.prevented) return void this.$element.val(r);
                }

                this.$element.trigger("input").trigger("change"), this.trigger("toggle", {});
              }
            }
          }
        }, e.prototype._handleKeyboardClear = function (e, t, n) {
          n.isOpen() || t.which != i.DELETE && t.which != i.BACKSPACE || this._handleClear(t);
        }, e.prototype.update = function (e, t) {
          if (e.call(this, t), this.$selection.find(".select2-selection__clear").remove(), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length)) {
            var n = this.$selection.find(".select2-selection__rendered").attr("id"),
                i = this.options.get("translations").get("removeAllItems"),
                r = s('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');
            r.attr("title", i()), r.attr("aria-label", i()), r.attr("aria-describedby", n), a.StoreData(r[0], "data", t), this.$selection.prepend(r);
          }
        }, e;
      }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (i, l, c) {
        function e(e, t, n) {
          e.call(this, t, n);
        }

        return e.prototype.render = function (e) {
          var t = i('<span class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          this.$searchContainer = t, this.$search = t.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete"));
          var n = e.call(this);
          return this._transferTabIndex(), n.append(this.$searchContainer), n;
        }, e.prototype.bind = function (e, t, n) {
          var i = this,
              r = t.id + "-results",
              s = t.id + "-container";
          e.call(this, t, n), i.$search.attr("aria-describedby", s), t.on("open", function () {
            i.$search.attr("aria-controls", r), i.$search.trigger("focus");
          }), t.on("close", function () {
            i.$search.val(""), i.resizeSearch(), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.trigger("focus");
          }), t.on("enable", function () {
            i.$search.prop("disabled", !1), i._transferTabIndex();
          }), t.on("disable", function () {
            i.$search.prop("disabled", !0);
          }), t.on("focus", function (e) {
            i.$search.trigger("focus");
          }), t.on("results:focus", function (e) {
            e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
          }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
            i.trigger("focus", e);
          }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
            i._handleBlur(e);
          }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
            if (e.stopPropagation(), i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented(), e.which === c.BACKSPACE && "" === i.$search.val()) {
              var t = i.$selection.find(".select2-selection__choice").last();

              if (0 < t.length) {
                var n = l.GetData(t[0], "data");
                i.searchRemoveChoice(n), e.preventDefault();
              }
            }
          }), this.$selection.on("click", ".select2-search--inline", function (e) {
            i.$search.val() && e.stopPropagation();
          });
          var o = document.documentMode,
              a = o && o <= 11;
          this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
            a ? i.$selection.off("input.search input.searchcheck") : i.$selection.off("keyup.search");
          }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
            if (a && "input" === e.type) i.$selection.off("input.search input.searchcheck");else {
              var t = e.which;
              t != c.SHIFT && t != c.CTRL && t != c.ALT && t != c.TAB && i.handleSearch(e);
            }
          });
        }, e.prototype._transferTabIndex = function (e) {
          this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
        }, e.prototype.createPlaceholder = function (e, t) {
          this.$search.attr("placeholder", t.text);
        }, e.prototype.update = function (e, t) {
          var n = this.$search[0] == document.activeElement;
          this.$search.attr("placeholder", ""), e.call(this, t), this.resizeSearch(), n && this.$search.trigger("focus");
        }, e.prototype.handleSearch = function () {
          if (this.resizeSearch(), !this._keyUpPrevented) {
            var e = this.$search.val();
            this.trigger("query", {
              term: e
            });
          }

          this._keyUpPrevented = !1;
        }, e.prototype.searchRemoveChoice = function (e, t) {
          this.trigger("unselect", {
            data: t
          }), this.$search.val(t.text), this.handleSearch();
        }, e.prototype.resizeSearch = function () {
          this.$search.css("width", "25px");
          var e = "100%";
          "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em");
          this.$search.css("width", e);
        }, e;
      }), e.define("select2/selection/selectionCss", ["../utils"], function (i) {
        function e() {}

        return e.prototype.render = function (e) {
          var t = e.call(this),
              n = this.options.get("selectionCssClass") || "";
          return -1 !== n.indexOf(":all:") && (n = n.replace(":all:", ""), i.copyNonInternalCssClasses(t[0], this.$element[0])), t.addClass(n), t;
        }, e;
      }), e.define("select2/selection/eventRelay", ["jquery"], function (o) {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this,
              r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
              s = ["opening", "closing", "selecting", "unselecting", "clearing"];
          e.call(this, t, n), t.on("*", function (e, t) {
            if (-1 !== r.indexOf(e)) {
              t = t || {};
              var n = o.Event("select2:" + e, {
                params: t
              });
              i.$element.trigger(n), -1 !== s.indexOf(e) && (t.prevented = n.isDefaultPrevented());
            }
          });
        }, e;
      }), e.define("select2/translation", ["jquery", "require"], function (t, n) {
        function i(e) {
          this.dict = e || {};
        }

        return i.prototype.all = function () {
          return this.dict;
        }, i.prototype.get = function (e) {
          return this.dict[e];
        }, i.prototype.extend = function (e) {
          this.dict = t.extend({}, e.all(), this.dict);
        }, i._cache = {}, i.loadPath = function (e) {
          if (!(e in i._cache)) {
            var t = n(e);
            i._cache[e] = t;
          }

          return new i(i._cache[e]);
        }, i;
      }), e.define("select2/diacritics", [], function () {
        return {
          "Ⓐ": "A",
          "Ａ": "A",
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ầ": "A",
          "Ấ": "A",
          "Ẫ": "A",
          "Ẩ": "A",
          "Ã": "A",
          "Ā": "A",
          "Ă": "A",
          "Ằ": "A",
          "Ắ": "A",
          "Ẵ": "A",
          "Ẳ": "A",
          "Ȧ": "A",
          "Ǡ": "A",
          "Ä": "A",
          "Ǟ": "A",
          "Ả": "A",
          "Å": "A",
          "Ǻ": "A",
          "Ǎ": "A",
          "Ȁ": "A",
          "Ȃ": "A",
          "Ạ": "A",
          "Ậ": "A",
          "Ặ": "A",
          "Ḁ": "A",
          "Ą": "A",
          "Ⱥ": "A",
          "Ɐ": "A",
          "Ꜳ": "AA",
          "Æ": "AE",
          "Ǽ": "AE",
          "Ǣ": "AE",
          "Ꜵ": "AO",
          "Ꜷ": "AU",
          "Ꜹ": "AV",
          "Ꜻ": "AV",
          "Ꜽ": "AY",
          "Ⓑ": "B",
          "Ｂ": "B",
          "Ḃ": "B",
          "Ḅ": "B",
          "Ḇ": "B",
          "Ƀ": "B",
          "Ƃ": "B",
          "Ɓ": "B",
          "Ⓒ": "C",
          "Ｃ": "C",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "Ç": "C",
          "Ḉ": "C",
          "Ƈ": "C",
          "Ȼ": "C",
          "Ꜿ": "C",
          "Ⓓ": "D",
          "Ｄ": "D",
          "Ḋ": "D",
          "Ď": "D",
          "Ḍ": "D",
          "Ḑ": "D",
          "Ḓ": "D",
          "Ḏ": "D",
          "Đ": "D",
          "Ƌ": "D",
          "Ɗ": "D",
          "Ɖ": "D",
          "Ꝺ": "D",
          "Ǳ": "DZ",
          "Ǆ": "DZ",
          "ǲ": "Dz",
          "ǅ": "Dz",
          "Ⓔ": "E",
          "Ｅ": "E",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ề": "E",
          "Ế": "E",
          "Ễ": "E",
          "Ể": "E",
          "Ẽ": "E",
          "Ē": "E",
          "Ḕ": "E",
          "Ḗ": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ë": "E",
          "Ẻ": "E",
          "Ě": "E",
          "Ȅ": "E",
          "Ȇ": "E",
          "Ẹ": "E",
          "Ệ": "E",
          "Ȩ": "E",
          "Ḝ": "E",
          "Ę": "E",
          "Ḙ": "E",
          "Ḛ": "E",
          "Ɛ": "E",
          "Ǝ": "E",
          "Ⓕ": "F",
          "Ｆ": "F",
          "Ḟ": "F",
          "Ƒ": "F",
          "Ꝼ": "F",
          "Ⓖ": "G",
          "Ｇ": "G",
          "Ǵ": "G",
          "Ĝ": "G",
          "Ḡ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ǧ": "G",
          "Ģ": "G",
          "Ǥ": "G",
          "Ɠ": "G",
          "Ꞡ": "G",
          "Ᵹ": "G",
          "Ꝿ": "G",
          "Ⓗ": "H",
          "Ｈ": "H",
          "Ĥ": "H",
          "Ḣ": "H",
          "Ḧ": "H",
          "Ȟ": "H",
          "Ḥ": "H",
          "Ḩ": "H",
          "Ḫ": "H",
          "Ħ": "H",
          "Ⱨ": "H",
          "Ⱶ": "H",
          "Ɥ": "H",
          "Ⓘ": "I",
          "Ｉ": "I",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "İ": "I",
          "Ï": "I",
          "Ḯ": "I",
          "Ỉ": "I",
          "Ǐ": "I",
          "Ȉ": "I",
          "Ȋ": "I",
          "Ị": "I",
          "Į": "I",
          "Ḭ": "I",
          "Ɨ": "I",
          "Ⓙ": "J",
          "Ｊ": "J",
          "Ĵ": "J",
          "Ɉ": "J",
          "Ⓚ": "K",
          "Ｋ": "K",
          "Ḱ": "K",
          "Ǩ": "K",
          "Ḳ": "K",
          "Ķ": "K",
          "Ḵ": "K",
          "Ƙ": "K",
          "Ⱪ": "K",
          "Ꝁ": "K",
          "Ꝃ": "K",
          "Ꝅ": "K",
          "Ꞣ": "K",
          "Ⓛ": "L",
          "Ｌ": "L",
          "Ŀ": "L",
          "Ĺ": "L",
          "Ľ": "L",
          "Ḷ": "L",
          "Ḹ": "L",
          "Ļ": "L",
          "Ḽ": "L",
          "Ḻ": "L",
          "Ł": "L",
          "Ƚ": "L",
          "Ɫ": "L",
          "Ⱡ": "L",
          "Ꝉ": "L",
          "Ꝇ": "L",
          "Ꞁ": "L",
          "Ǉ": "LJ",
          "ǈ": "Lj",
          "Ⓜ": "M",
          "Ｍ": "M",
          "Ḿ": "M",
          "Ṁ": "M",
          "Ṃ": "M",
          "Ɱ": "M",
          "Ɯ": "M",
          "Ⓝ": "N",
          "Ｎ": "N",
          "Ǹ": "N",
          "Ń": "N",
          "Ñ": "N",
          "Ṅ": "N",
          "Ň": "N",
          "Ṇ": "N",
          "Ņ": "N",
          "Ṋ": "N",
          "Ṉ": "N",
          "Ƞ": "N",
          "Ɲ": "N",
          "Ꞑ": "N",
          "Ꞥ": "N",
          "Ǌ": "NJ",
          "ǋ": "Nj",
          "Ⓞ": "O",
          "Ｏ": "O",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Ồ": "O",
          "Ố": "O",
          "Ỗ": "O",
          "Ổ": "O",
          "Õ": "O",
          "Ṍ": "O",
          "Ȭ": "O",
          "Ṏ": "O",
          "Ō": "O",
          "Ṑ": "O",
          "Ṓ": "O",
          "Ŏ": "O",
          "Ȯ": "O",
          "Ȱ": "O",
          "Ö": "O",
          "Ȫ": "O",
          "Ỏ": "O",
          "Ő": "O",
          "Ǒ": "O",
          "Ȍ": "O",
          "Ȏ": "O",
          "Ơ": "O",
          "Ờ": "O",
          "Ớ": "O",
          "Ỡ": "O",
          "Ở": "O",
          "Ợ": "O",
          "Ọ": "O",
          "Ộ": "O",
          "Ǫ": "O",
          "Ǭ": "O",
          "Ø": "O",
          "Ǿ": "O",
          "Ɔ": "O",
          "Ɵ": "O",
          "Ꝋ": "O",
          "Ꝍ": "O",
          "Œ": "OE",
          "Ƣ": "OI",
          "Ꝏ": "OO",
          "Ȣ": "OU",
          "Ⓟ": "P",
          "Ｐ": "P",
          "Ṕ": "P",
          "Ṗ": "P",
          "Ƥ": "P",
          "Ᵽ": "P",
          "Ꝑ": "P",
          "Ꝓ": "P",
          "Ꝕ": "P",
          "Ⓠ": "Q",
          "Ｑ": "Q",
          "Ꝗ": "Q",
          "Ꝙ": "Q",
          "Ɋ": "Q",
          "Ⓡ": "R",
          "Ｒ": "R",
          "Ŕ": "R",
          "Ṙ": "R",
          "Ř": "R",
          "Ȑ": "R",
          "Ȓ": "R",
          "Ṛ": "R",
          "Ṝ": "R",
          "Ŗ": "R",
          "Ṟ": "R",
          "Ɍ": "R",
          "Ɽ": "R",
          "Ꝛ": "R",
          "Ꞧ": "R",
          "Ꞃ": "R",
          "Ⓢ": "S",
          "Ｓ": "S",
          "ẞ": "S",
          "Ś": "S",
          "Ṥ": "S",
          "Ŝ": "S",
          "Ṡ": "S",
          "Š": "S",
          "Ṧ": "S",
          "Ṣ": "S",
          "Ṩ": "S",
          "Ș": "S",
          "Ş": "S",
          "Ȿ": "S",
          "Ꞩ": "S",
          "Ꞅ": "S",
          "Ⓣ": "T",
          "Ｔ": "T",
          "Ṫ": "T",
          "Ť": "T",
          "Ṭ": "T",
          "Ț": "T",
          "Ţ": "T",
          "Ṱ": "T",
          "Ṯ": "T",
          "Ŧ": "T",
          "Ƭ": "T",
          "Ʈ": "T",
          "Ⱦ": "T",
          "Ꞇ": "T",
          "Ꜩ": "TZ",
          "Ⓤ": "U",
          "Ｕ": "U",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ũ": "U",
          "Ṹ": "U",
          "Ū": "U",
          "Ṻ": "U",
          "Ŭ": "U",
          "Ü": "U",
          "Ǜ": "U",
          "Ǘ": "U",
          "Ǖ": "U",
          "Ǚ": "U",
          "Ủ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ǔ": "U",
          "Ȕ": "U",
          "Ȗ": "U",
          "Ư": "U",
          "Ừ": "U",
          "Ứ": "U",
          "Ữ": "U",
          "Ử": "U",
          "Ự": "U",
          "Ụ": "U",
          "Ṳ": "U",
          "Ų": "U",
          "Ṷ": "U",
          "Ṵ": "U",
          "Ʉ": "U",
          "Ⓥ": "V",
          "Ｖ": "V",
          "Ṽ": "V",
          "Ṿ": "V",
          "Ʋ": "V",
          "Ꝟ": "V",
          "Ʌ": "V",
          "Ꝡ": "VY",
          "Ⓦ": "W",
          "Ｗ": "W",
          "Ẁ": "W",
          "Ẃ": "W",
          "Ŵ": "W",
          "Ẇ": "W",
          "Ẅ": "W",
          "Ẉ": "W",
          "Ⱳ": "W",
          "Ⓧ": "X",
          "Ｘ": "X",
          "Ẋ": "X",
          "Ẍ": "X",
          "Ⓨ": "Y",
          "Ｙ": "Y",
          "Ỳ": "Y",
          "Ý": "Y",
          "Ŷ": "Y",
          "Ỹ": "Y",
          "Ȳ": "Y",
          "Ẏ": "Y",
          "Ÿ": "Y",
          "Ỷ": "Y",
          "Ỵ": "Y",
          "Ƴ": "Y",
          "Ɏ": "Y",
          "Ỿ": "Y",
          "Ⓩ": "Z",
          "Ｚ": "Z",
          "Ź": "Z",
          "Ẑ": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "Ẓ": "Z",
          "Ẕ": "Z",
          "Ƶ": "Z",
          "Ȥ": "Z",
          "Ɀ": "Z",
          "Ⱬ": "Z",
          "Ꝣ": "Z",
          "ⓐ": "a",
          "ａ": "a",
          "ẚ": "a",
          "à": "a",
          "á": "a",
          "â": "a",
          "ầ": "a",
          "ấ": "a",
          "ẫ": "a",
          "ẩ": "a",
          "ã": "a",
          "ā": "a",
          "ă": "a",
          "ằ": "a",
          "ắ": "a",
          "ẵ": "a",
          "ẳ": "a",
          "ȧ": "a",
          "ǡ": "a",
          "ä": "a",
          "ǟ": "a",
          "ả": "a",
          "å": "a",
          "ǻ": "a",
          "ǎ": "a",
          "ȁ": "a",
          "ȃ": "a",
          "ạ": "a",
          "ậ": "a",
          "ặ": "a",
          "ḁ": "a",
          "ą": "a",
          "ⱥ": "a",
          "ɐ": "a",
          "ꜳ": "aa",
          "æ": "ae",
          "ǽ": "ae",
          "ǣ": "ae",
          "ꜵ": "ao",
          "ꜷ": "au",
          "ꜹ": "av",
          "ꜻ": "av",
          "ꜽ": "ay",
          "ⓑ": "b",
          "ｂ": "b",
          "ḃ": "b",
          "ḅ": "b",
          "ḇ": "b",
          "ƀ": "b",
          "ƃ": "b",
          "ɓ": "b",
          "ⓒ": "c",
          "ｃ": "c",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "ç": "c",
          "ḉ": "c",
          "ƈ": "c",
          "ȼ": "c",
          "ꜿ": "c",
          "ↄ": "c",
          "ⓓ": "d",
          "ｄ": "d",
          "ḋ": "d",
          "ď": "d",
          "ḍ": "d",
          "ḑ": "d",
          "ḓ": "d",
          "ḏ": "d",
          "đ": "d",
          "ƌ": "d",
          "ɖ": "d",
          "ɗ": "d",
          "ꝺ": "d",
          "ǳ": "dz",
          "ǆ": "dz",
          "ⓔ": "e",
          "ｅ": "e",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ề": "e",
          "ế": "e",
          "ễ": "e",
          "ể": "e",
          "ẽ": "e",
          "ē": "e",
          "ḕ": "e",
          "ḗ": "e",
          "ĕ": "e",
          "ė": "e",
          "ë": "e",
          "ẻ": "e",
          "ě": "e",
          "ȅ": "e",
          "ȇ": "e",
          "ẹ": "e",
          "ệ": "e",
          "ȩ": "e",
          "ḝ": "e",
          "ę": "e",
          "ḙ": "e",
          "ḛ": "e",
          "ɇ": "e",
          "ɛ": "e",
          "ǝ": "e",
          "ⓕ": "f",
          "ｆ": "f",
          "ḟ": "f",
          "ƒ": "f",
          "ꝼ": "f",
          "ⓖ": "g",
          "ｇ": "g",
          "ǵ": "g",
          "ĝ": "g",
          "ḡ": "g",
          "ğ": "g",
          "ġ": "g",
          "ǧ": "g",
          "ģ": "g",
          "ǥ": "g",
          "ɠ": "g",
          "ꞡ": "g",
          "ᵹ": "g",
          "ꝿ": "g",
          "ⓗ": "h",
          "ｈ": "h",
          "ĥ": "h",
          "ḣ": "h",
          "ḧ": "h",
          "ȟ": "h",
          "ḥ": "h",
          "ḩ": "h",
          "ḫ": "h",
          "ẖ": "h",
          "ħ": "h",
          "ⱨ": "h",
          "ⱶ": "h",
          "ɥ": "h",
          "ƕ": "hv",
          "ⓘ": "i",
          "ｉ": "i",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "ï": "i",
          "ḯ": "i",
          "ỉ": "i",
          "ǐ": "i",
          "ȉ": "i",
          "ȋ": "i",
          "ị": "i",
          "į": "i",
          "ḭ": "i",
          "ɨ": "i",
          "ı": "i",
          "ⓙ": "j",
          "ｊ": "j",
          "ĵ": "j",
          "ǰ": "j",
          "ɉ": "j",
          "ⓚ": "k",
          "ｋ": "k",
          "ḱ": "k",
          "ǩ": "k",
          "ḳ": "k",
          "ķ": "k",
          "ḵ": "k",
          "ƙ": "k",
          "ⱪ": "k",
          "ꝁ": "k",
          "ꝃ": "k",
          "ꝅ": "k",
          "ꞣ": "k",
          "ⓛ": "l",
          "ｌ": "l",
          "ŀ": "l",
          "ĺ": "l",
          "ľ": "l",
          "ḷ": "l",
          "ḹ": "l",
          "ļ": "l",
          "ḽ": "l",
          "ḻ": "l",
          "ſ": "l",
          "ł": "l",
          "ƚ": "l",
          "ɫ": "l",
          "ⱡ": "l",
          "ꝉ": "l",
          "ꞁ": "l",
          "ꝇ": "l",
          "ǉ": "lj",
          "ⓜ": "m",
          "ｍ": "m",
          "ḿ": "m",
          "ṁ": "m",
          "ṃ": "m",
          "ɱ": "m",
          "ɯ": "m",
          "ⓝ": "n",
          "ｎ": "n",
          "ǹ": "n",
          "ń": "n",
          "ñ": "n",
          "ṅ": "n",
          "ň": "n",
          "ṇ": "n",
          "ņ": "n",
          "ṋ": "n",
          "ṉ": "n",
          "ƞ": "n",
          "ɲ": "n",
          "ŉ": "n",
          "ꞑ": "n",
          "ꞥ": "n",
          "ǌ": "nj",
          "ⓞ": "o",
          "ｏ": "o",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "ồ": "o",
          "ố": "o",
          "ỗ": "o",
          "ổ": "o",
          "õ": "o",
          "ṍ": "o",
          "ȭ": "o",
          "ṏ": "o",
          "ō": "o",
          "ṑ": "o",
          "ṓ": "o",
          "ŏ": "o",
          "ȯ": "o",
          "ȱ": "o",
          "ö": "o",
          "ȫ": "o",
          "ỏ": "o",
          "ő": "o",
          "ǒ": "o",
          "ȍ": "o",
          "ȏ": "o",
          "ơ": "o",
          "ờ": "o",
          "ớ": "o",
          "ỡ": "o",
          "ở": "o",
          "ợ": "o",
          "ọ": "o",
          "ộ": "o",
          "ǫ": "o",
          "ǭ": "o",
          "ø": "o",
          "ǿ": "o",
          "ɔ": "o",
          "ꝋ": "o",
          "ꝍ": "o",
          "ɵ": "o",
          "œ": "oe",
          "ƣ": "oi",
          "ȣ": "ou",
          "ꝏ": "oo",
          "ⓟ": "p",
          "ｐ": "p",
          "ṕ": "p",
          "ṗ": "p",
          "ƥ": "p",
          "ᵽ": "p",
          "ꝑ": "p",
          "ꝓ": "p",
          "ꝕ": "p",
          "ⓠ": "q",
          "ｑ": "q",
          "ɋ": "q",
          "ꝗ": "q",
          "ꝙ": "q",
          "ⓡ": "r",
          "ｒ": "r",
          "ŕ": "r",
          "ṙ": "r",
          "ř": "r",
          "ȑ": "r",
          "ȓ": "r",
          "ṛ": "r",
          "ṝ": "r",
          "ŗ": "r",
          "ṟ": "r",
          "ɍ": "r",
          "ɽ": "r",
          "ꝛ": "r",
          "ꞧ": "r",
          "ꞃ": "r",
          "ⓢ": "s",
          "ｓ": "s",
          "ß": "s",
          "ś": "s",
          "ṥ": "s",
          "ŝ": "s",
          "ṡ": "s",
          "š": "s",
          "ṧ": "s",
          "ṣ": "s",
          "ṩ": "s",
          "ș": "s",
          "ş": "s",
          "ȿ": "s",
          "ꞩ": "s",
          "ꞅ": "s",
          "ẛ": "s",
          "ⓣ": "t",
          "ｔ": "t",
          "ṫ": "t",
          "ẗ": "t",
          "ť": "t",
          "ṭ": "t",
          "ț": "t",
          "ţ": "t",
          "ṱ": "t",
          "ṯ": "t",
          "ŧ": "t",
          "ƭ": "t",
          "ʈ": "t",
          "ⱦ": "t",
          "ꞇ": "t",
          "ꜩ": "tz",
          "ⓤ": "u",
          "ｕ": "u",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ũ": "u",
          "ṹ": "u",
          "ū": "u",
          "ṻ": "u",
          "ŭ": "u",
          "ü": "u",
          "ǜ": "u",
          "ǘ": "u",
          "ǖ": "u",
          "ǚ": "u",
          "ủ": "u",
          "ů": "u",
          "ű": "u",
          "ǔ": "u",
          "ȕ": "u",
          "ȗ": "u",
          "ư": "u",
          "ừ": "u",
          "ứ": "u",
          "ữ": "u",
          "ử": "u",
          "ự": "u",
          "ụ": "u",
          "ṳ": "u",
          "ų": "u",
          "ṷ": "u",
          "ṵ": "u",
          "ʉ": "u",
          "ⓥ": "v",
          "ｖ": "v",
          "ṽ": "v",
          "ṿ": "v",
          "ʋ": "v",
          "ꝟ": "v",
          "ʌ": "v",
          "ꝡ": "vy",
          "ⓦ": "w",
          "ｗ": "w",
          "ẁ": "w",
          "ẃ": "w",
          "ŵ": "w",
          "ẇ": "w",
          "ẅ": "w",
          "ẘ": "w",
          "ẉ": "w",
          "ⱳ": "w",
          "ⓧ": "x",
          "ｘ": "x",
          "ẋ": "x",
          "ẍ": "x",
          "ⓨ": "y",
          "ｙ": "y",
          "ỳ": "y",
          "ý": "y",
          "ŷ": "y",
          "ỹ": "y",
          "ȳ": "y",
          "ẏ": "y",
          "ÿ": "y",
          "ỷ": "y",
          "ẙ": "y",
          "ỵ": "y",
          "ƴ": "y",
          "ɏ": "y",
          "ỿ": "y",
          "ⓩ": "z",
          "ｚ": "z",
          "ź": "z",
          "ẑ": "z",
          "ż": "z",
          "ž": "z",
          "ẓ": "z",
          "ẕ": "z",
          "ƶ": "z",
          "ȥ": "z",
          "ɀ": "z",
          "ⱬ": "z",
          "ꝣ": "z",
          "Ά": "Α",
          "Έ": "Ε",
          "Ή": "Η",
          "Ί": "Ι",
          "Ϊ": "Ι",
          "Ό": "Ο",
          "Ύ": "Υ",
          "Ϋ": "Υ",
          "Ώ": "Ω",
          "ά": "α",
          "έ": "ε",
          "ή": "η",
          "ί": "ι",
          "ϊ": "ι",
          "ΐ": "ι",
          "ό": "ο",
          "ύ": "υ",
          "ϋ": "υ",
          "ΰ": "υ",
          "ώ": "ω",
          "ς": "σ",
          "’": "'"
        };
      }), e.define("select2/data/base", ["../utils"], function (i) {
        function n(e, t) {
          n.__super__.constructor.call(this);
        }

        return i.Extend(n, i.Observable), n.prototype.current = function (e) {
          throw new Error("The `current` method must be defined in child classes.");
        }, n.prototype.query = function (e, t) {
          throw new Error("The `query` method must be defined in child classes.");
        }, n.prototype.bind = function (e, t) {}, n.prototype.destroy = function () {}, n.prototype.generateResultId = function (e, t) {
          var n = e.id + "-result-";
          return n += i.generateChars(4), null != t.id ? n += "-" + t.id.toString() : n += "-" + i.generateChars(4), n;
        }, n;
      }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, l, c) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }

        return l.Extend(n, e), n.prototype.current = function (e) {
          var t = this;
          e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function (e) {
            return t.item(c(e));
          }));
        }, n.prototype.select = function (r) {
          var s = this;
          if (r.selected = !0, null != r.element && "option" === r.element.tagName.toLowerCase()) return r.element.selected = !0, void this.$element.trigger("input").trigger("change");
          if (this.$element.prop("multiple")) this.current(function (e) {
            var t = [];
            (r = [r]).push.apply(r, e);

            for (var n = 0; n < r.length; n++) {
              var i = r[n].id;
              -1 === t.indexOf(i) && t.push(i);
            }

            s.$element.val(t), s.$element.trigger("input").trigger("change");
          });else {
            var e = r.id;
            this.$element.val(e), this.$element.trigger("input").trigger("change");
          }
        }, n.prototype.unselect = function (r) {
          var s = this;

          if (this.$element.prop("multiple")) {
            if (r.selected = !1, null != r.element && "option" === r.element.tagName.toLowerCase()) return r.element.selected = !1, void this.$element.trigger("input").trigger("change");
            this.current(function (e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var i = e[n].id;
                i !== r.id && -1 === t.indexOf(i) && t.push(i);
              }

              s.$element.val(t), s.$element.trigger("input").trigger("change");
            });
          }
        }, n.prototype.bind = function (e, t) {
          var n = this;
          (this.container = e).on("select", function (e) {
            n.select(e.data);
          }), e.on("unselect", function (e) {
            n.unselect(e.data);
          });
        }, n.prototype.destroy = function () {
          this.$element.find("*").each(function () {
            l.RemoveData(this);
          });
        }, n.prototype.query = function (i, e) {
          var r = [],
              s = this;
          this.$element.children().each(function () {
            if ("option" === this.tagName.toLowerCase() || "optgroup" === this.tagName.toLowerCase()) {
              var e = c(this),
                  t = s.item(e),
                  n = s.matches(i, t);
              null !== n && r.push(n);
            }
          }), e({
            results: r
          });
        }, n.prototype.addOptions = function (e) {
          this.$element.append(e);
        }, n.prototype.option = function (e) {
          var t;
          e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, void 0 !== e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);

          var n = this._normalizeItem(e);

          return n.element = t, l.StoreData(t, "data", n), c(t);
        }, n.prototype.item = function (e) {
          var t = {};
          if (null != (t = l.GetData(e[0], "data"))) return t;
          var n = e[0];
          if ("option" === n.tagName.toLowerCase()) t = {
            id: e.val(),
            text: e.text(),
            disabled: e.prop("disabled"),
            selected: e.prop("selected"),
            title: e.prop("title")
          };else if ("optgroup" === n.tagName.toLowerCase()) {
            t = {
              text: e.prop("label"),
              children: [],
              title: e.prop("title")
            };

            for (var i = e.children("option"), r = [], s = 0; s < i.length; s++) {
              var o = c(i[s]),
                  a = this.item(o);
              r.push(a);
            }

            t.children = r;
          }
          return (t = this._normalizeItem(t)).element = e[0], l.StoreData(e[0], "data", t), t;
        }, n.prototype._normalizeItem = function (e) {
          e !== Object(e) && (e = {
            id: e,
            text: e
          });
          return null != (e = c.extend({}, {
            text: ""
          }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), c.extend({}, {
            selected: !1,
            disabled: !1
          }, e);
        }, n.prototype.matches = function (e, t) {
          return this.options.get("matcher")(e, t);
        }, n;
      }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, f) {
        function i(e, t) {
          this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t);
        }

        return t.Extend(i, e), i.prototype.bind = function (e, t) {
          i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert));
        }, i.prototype.select = function (n) {
          var e = this.$element.find("option").filter(function (e, t) {
            return t.value == n.id.toString();
          });
          0 === e.length && (e = this.option(n), this.addOptions(e)), i.__super__.select.call(this, n);
        }, i.prototype.convertToOptions = function (e) {
          var t = this,
              n = this.$element.find("option"),
              i = n.map(function () {
            return t.item(f(this)).id;
          }).get(),
              r = [];

          function s(e) {
            return function () {
              return f(this).val() == e.id;
            };
          }

          for (var o = 0; o < e.length; o++) {
            var a = this._normalizeItem(e[o]);

            if (0 <= i.indexOf(a.id)) {
              var l = n.filter(s(a)),
                  c = this.item(l),
                  u = f.extend(!0, {}, a, c),
                  d = this.option(u);
              l.replaceWith(d);
            } else {
              var p = this.option(a);

              if (a.children) {
                var h = this.convertToOptions(a.children);
                p.append(h);
              }

              r.push(p);
            }
          }

          return r;
        }, i;
      }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, s) {
        function n(e, t) {
          this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t);
        }

        return t.Extend(n, e), n.prototype._applyDefaults = function (e) {
          var t = {
            data: function data(e) {
              return s.extend({}, e, {
                q: e.term
              });
            },
            transport: function transport(e, t, n) {
              var i = s.ajax(e);
              return i.then(t), i.fail(n), i;
            }
          };
          return s.extend({}, t, e, !0);
        }, n.prototype.processResults = function (e) {
          return e;
        }, n.prototype.query = function (n, i) {
          var r = this;
          null != this._request && (s.isFunction(this._request.abort) && this._request.abort(), this._request = null);
          var t = s.extend({
            type: "GET"
          }, this.ajaxOptions);

          function e() {
            var e = t.transport(t, function (e) {
              var t = r.processResults(e, n);
              r.options.get("debug") && window.console && console.error && (t && t.results && Array.isArray(t.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), i(t);
            }, function () {
              "status" in e && (0 === e.status || "0" === e.status) || r.trigger("results:message", {
                message: "errorLoading"
              });
            });
            r._request = e;
          }

          "function" == typeof t.url && (t.url = t.url.call(this.$element, n)), "function" == typeof t.data && (t.data = t.data.call(this.$element, n)), this.ajaxOptions.delay && null != n.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e();
        }, n;
      }), e.define("select2/data/tags", ["jquery"], function (t) {
        function e(e, t, n) {
          var i = n.get("tags"),
              r = n.get("createTag");
          void 0 !== r && (this.createTag = r);
          var s = n.get("insertTag");
          if (void 0 !== s && (this.insertTag = s), e.call(this, t, n), Array.isArray(i)) for (var o = 0; o < i.length; o++) {
            var a = i[o],
                l = this._normalizeItem(a),
                c = this.option(l);

            this.$element.append(c);
          }
        }

        return e.prototype.query = function (e, c, u) {
          var d = this;
          this._removeOldTags(), null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
            for (var i = t.results, r = 0; r < i.length; r++) {
              var s = i[r],
                  o = null != s.children && !e({
                results: s.children
              }, !0);
              if ((s.text || "").toUpperCase() === (c.term || "").toUpperCase() || o) return !n && (t.data = i, void u(t));
            }

            if (n) return !0;
            var a = d.createTag(c);

            if (null != a) {
              var l = d.option(a);
              l.attr("data-select2-tag", !0), d.addOptions([l]), d.insertTag(i, a);
            }

            t.results = i, u(t);
          }) : e.call(this, c, u);
        }, e.prototype.createTag = function (e, t) {
          if (null == t.term) return null;
          var n = t.term.trim();
          return "" === n ? null : {
            id: n,
            text: n
          };
        }, e.prototype.insertTag = function (e, t, n) {
          t.unshift(n);
        }, e.prototype._removeOldTags = function (e) {
          this.$element.find("option[data-select2-tag]").each(function () {
            this.selected || t(this).remove();
          });
        }, e;
      }), e.define("select2/data/tokenizer", ["jquery"], function (d) {
        function e(e, t, n) {
          var i = n.get("tokenizer");
          void 0 !== i && (this.tokenizer = i), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field");
        }, e.prototype.query = function (e, t, n) {
          var r = this;
          t.term = t.term || "";
          var i = this.tokenizer(t, this.options, function (e) {
            var t,
                n = r._normalizeItem(e);

            if (!r.$element.find("option").filter(function () {
              return d(this).val() === n.id;
            }).length) {
              var i = r.option(n);
              i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i]);
            }

            t = n, r.trigger("select", {
              data: t
            });
          });
          i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.trigger("focus")), t.term = i.term), e.call(this, t, n);
        }, e.prototype.tokenizer = function (e, t, n, i) {
          for (var r = n.get("tokenSeparators") || [], s = t.term, o = 0, a = this.createTag || function (e) {
            return {
              id: e.term,
              text: e.term
            };
          }; o < s.length;) {
            var l = s[o];

            if (-1 !== r.indexOf(l)) {
              var c = s.substr(0, o),
                  u = a(d.extend({}, t, {
                term: c
              }));
              null != u ? (i(u), s = s.substr(o + 1) || "", o = 0) : o++;
            } else o++;
          }

          return {
            term: s
          };
        }, e;
      }), e.define("select2/data/minimumInputLength", [], function () {
        function e(e, t, n) {
          this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
            message: "inputTooShort",
            args: {
              minimum: this.minimumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), e.define("select2/data/maximumInputLength", [], function () {
        function e(e, t, n) {
          this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n);
        }

        return e.prototype.query = function (e, t, n) {
          t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
            message: "inputTooLong",
            args: {
              maximum: this.maximumInputLength,
              input: t.term,
              params: t
            }
          }) : e.call(this, t, n);
        }, e;
      }), e.define("select2/data/maximumSelectionLength", [], function () {
        function e(e, t, n) {
          this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function () {
            i._checkIfMaximumSelected();
          });
        }, e.prototype.query = function (e, t, n) {
          var i = this;

          this._checkIfMaximumSelected(function () {
            e.call(i, t, n);
          });
        }, e.prototype._checkIfMaximumSelected = function (e, n) {
          var i = this;
          this.current(function (e) {
            var t = null != e ? e.length : 0;
            0 < i.maximumSelectionLength && t >= i.maximumSelectionLength ? i.trigger("results:message", {
              message: "maximumSelected",
              args: {
                maximum: i.maximumSelectionLength
              }
            }) : n && n();
          });
        }, e;
      }), e.define("select2/dropdown", ["jquery", "./utils"], function (t, e) {
        function n(e, t) {
          this.$element = e, this.options = t, n.__super__.constructor.call(this);
        }

        return e.Extend(n, e.Observable), n.prototype.render = function () {
          var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
          return e.attr("dir", this.options.get("dir")), this.$dropdown = e;
        }, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function () {
          this.$dropdown.remove();
        }, n;
      }), e.define("select2/dropdown/search", ["jquery"], function (s) {
        function e() {}

        return e.prototype.render = function (e) {
          var t = e.call(this),
              n = s('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
          return this.$searchContainer = n, this.$search = n.find("input"), this.$search.prop("autocomplete", this.options.get("autocomplete")), t.prepend(n), t;
        }, e.prototype.bind = function (e, t, n) {
          var i = this,
              r = t.id + "-results";
          e.call(this, t, n), this.$search.on("keydown", function (e) {
            i.trigger("keypress", e), i._keyUpPrevented = e.isDefaultPrevented();
          }), this.$search.on("input", function (e) {
            s(this).off("keyup");
          }), this.$search.on("keyup input", function (e) {
            i.handleSearch(e);
          }), t.on("open", function () {
            i.$search.attr("tabindex", 0), i.$search.attr("aria-controls", r), i.$search.trigger("focus"), window.setTimeout(function () {
              i.$search.trigger("focus");
            }, 0);
          }), t.on("close", function () {
            i.$search.attr("tabindex", -1), i.$search.removeAttr("aria-controls"), i.$search.removeAttr("aria-activedescendant"), i.$search.val(""), i.$search.trigger("blur");
          }), t.on("focus", function () {
            t.isOpen() || i.$search.trigger("focus");
          }), t.on("results:all", function (e) {
            null != e.query.term && "" !== e.query.term || (i.showSearch(e) ? i.$searchContainer[0].classList.remove("select2-search--hide") : i.$searchContainer[0].classList.add("select2-search--hide"));
          }), t.on("results:focus", function (e) {
            e.data._resultId ? i.$search.attr("aria-activedescendant", e.data._resultId) : i.$search.removeAttr("aria-activedescendant");
          });
        }, e.prototype.handleSearch = function (e) {
          if (!this._keyUpPrevented) {
            var t = this.$search.val();
            this.trigger("query", {
              term: t
            });
          }

          this._keyUpPrevented = !1;
        }, e.prototype.showSearch = function (e, t) {
          return !0;
        }, e;
      }), e.define("select2/dropdown/hidePlaceholder", [], function () {
        function e(e, t, n, i) {
          this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i);
        }

        return e.prototype.append = function (e, t) {
          t.results = this.removePlaceholder(t.results), e.call(this, t);
        }, e.prototype.normalizePlaceholder = function (e, t) {
          return "string" == typeof t && (t = {
            id: "",
            text: t
          }), t;
        }, e.prototype.removePlaceholder = function (e, t) {
          for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
            var r = t[i];
            this.placeholder.id === r.id && n.splice(i, 1);
          }

          return n;
        }, e;
      }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
        function e(e, t, n, i) {
          this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
        }

        return e.prototype.append = function (e, t) {
          this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded());
        }, e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("query", function (e) {
            i.lastParams = e, i.loading = !0;
          }), t.on("query:append", function (e) {
            i.lastParams = e, i.loading = !0;
          }), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
        }, e.prototype.loadMoreIfNeeded = function () {
          var e = n.contains(document.documentElement, this.$loadingMore[0]);

          if (!this.loading && e) {
            var t = this.$results.offset().top + this.$results.outerHeight(!1);
            this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= t + 50 && this.loadMore();
          }
        }, e.prototype.loadMore = function () {
          this.loading = !0;
          var e = n.extend({}, {
            page: 1
          }, this.lastParams);
          e.page++, this.trigger("query:append", e);
        }, e.prototype.showLoadingMore = function (e, t) {
          return t.pagination && t.pagination.more;
        }, e.prototype.createLoadingMore = function () {
          var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
              t = this.options.get("translations").get("loadingMore");
          return e.html(t(this.lastParams)), e;
        }, e;
      }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (f, a) {
        function e(e, t, n) {
          this.$dropdownParent = f(n.get("dropdownParent") || document.body), e.call(this, t, n);
        }

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("open", function () {
            i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t);
          }), t.on("close", function () {
            i._hideDropdown(), i._detachPositioningHandler(t);
          }), this.$dropdownContainer.on("mousedown", function (e) {
            e.stopPropagation();
          });
        }, e.prototype.destroy = function (e) {
          e.call(this), this.$dropdownContainer.remove();
        }, e.prototype.position = function (e, t, n) {
          t.attr("class", n.attr("class")), t[0].classList.remove("select2"), t[0].classList.add("select2-container--open"), t.css({
            position: "absolute",
            top: -999999
          }), this.$container = n;
        }, e.prototype.render = function (e) {
          var t = f("<span></span>"),
              n = e.call(this);
          return t.append(n), this.$dropdownContainer = t;
        }, e.prototype._hideDropdown = function (e) {
          this.$dropdownContainer.detach();
        }, e.prototype._bindContainerResultHandlers = function (e, t) {
          if (!this._containerResultsHandlersBound) {
            var n = this;
            t.on("results:all", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:append", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("results:message", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("select", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), t.on("unselect", function () {
              n._positionDropdown(), n._resizeDropdown();
            }), this._containerResultsHandlersBound = !0;
          }
        }, e.prototype._attachPositioningHandler = function (e, t) {
          var n = this,
              i = "scroll.select2." + t.id,
              r = "resize.select2." + t.id,
              s = "orientationchange.select2." + t.id,
              o = this.$container.parents().filter(a.hasScroll);
          o.each(function () {
            a.StoreData(this, "select2-scroll-position", {
              x: f(this).scrollLeft(),
              y: f(this).scrollTop()
            });
          }), o.on(i, function (e) {
            var t = a.GetData(this, "select2-scroll-position");
            f(this).scrollTop(t.y);
          }), f(window).on(i + " " + r + " " + s, function (e) {
            n._positionDropdown(), n._resizeDropdown();
          });
        }, e.prototype._detachPositioningHandler = function (e, t) {
          var n = "scroll.select2." + t.id,
              i = "resize.select2." + t.id,
              r = "orientationchange.select2." + t.id;
          this.$container.parents().filter(a.hasScroll).off(n), f(window).off(n + " " + i + " " + r);
        }, e.prototype._positionDropdown = function () {
          var e = f(window),
              t = this.$dropdown[0].classList.contains("select2-dropdown--above"),
              n = this.$dropdown[0].classList.contains("select2-dropdown--below"),
              i = null,
              r = this.$container.offset();
          r.bottom = r.top + this.$container.outerHeight(!1);
          var s = {
            height: this.$container.outerHeight(!1)
          };
          s.top = r.top, s.bottom = r.top + s.height;
          var o = this.$dropdown.outerHeight(!1),
              a = e.scrollTop(),
              l = e.scrollTop() + e.height(),
              c = a < r.top - o,
              u = l > r.bottom + o,
              d = {
            left: r.left,
            top: s.bottom
          },
              p = this.$dropdownParent;
          "static" === p.css("position") && (p = p.offsetParent());
          var h = {
            top: 0,
            left: 0
          };
          (f.contains(document.body, p[0]) || p[0].isConnected) && (h = p.offset()), d.top -= h.top, d.left -= h.left, t || n || (i = "below"), u || !c || t ? !c && u && t && (i = "below") : i = "above", ("above" == i || t && "below" !== i) && (d.top = s.top - h.top - o), null != i && (this.$dropdown[0].classList.remove("select2-dropdown--below"), this.$dropdown[0].classList.remove("select2-dropdown--above"), this.$dropdown[0].classList.add("select2-dropdown--" + i), this.$container[0].classList.remove("select2-container--below"), this.$container[0].classList.remove("select2-container--above"), this.$container[0].classList.add("select2-container--" + i)), this.$dropdownContainer.css(d);
        }, e.prototype._resizeDropdown = function () {
          var e = {
            width: this.$container.outerWidth(!1) + "px"
          };
          this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e);
        }, e.prototype._showDropdown = function (e) {
          this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
        }, e;
      }), e.define("select2/dropdown/minimumResultsForSearch", [], function () {
        function e(e, t, n, i) {
          this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i);
        }

        return e.prototype.showSearch = function (e, t) {
          return !(function e(t) {
            for (var n = 0, i = 0; i < t.length; i++) {
              var r = t[i];
              r.children ? n += e(r.children) : n++;
            }

            return n;
          }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t);
        }, e;
      }), e.define("select2/dropdown/selectOnClose", ["../utils"], function (s) {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("close", function (e) {
            i._handleSelectOnClose(e);
          });
        }, e.prototype._handleSelectOnClose = function (e, t) {
          if (t && null != t.originalSelect2Event) {
            var n = t.originalSelect2Event;
            if ("select" === n._type || "unselect" === n._type) return;
          }

          var i = this.getHighlightedResults();

          if (!(i.length < 1)) {
            var r = s.GetData(i[0], "data");
            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
              data: r
            });
          }
        }, e;
      }), e.define("select2/dropdown/closeOnSelect", [], function () {
        function e() {}

        return e.prototype.bind = function (e, t, n) {
          var i = this;
          e.call(this, t, n), t.on("select", function (e) {
            i._selectTriggered(e);
          }), t.on("unselect", function (e) {
            i._selectTriggered(e);
          });
        }, e.prototype._selectTriggered = function (e, t) {
          var n = t.originalEvent;
          n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
            originalEvent: n,
            originalSelect2Event: t
          });
        }, e;
      }), e.define("select2/dropdown/dropdownCss", ["../utils"], function (i) {
        function e() {}

        return e.prototype.render = function (e) {
          var t = e.call(this),
              n = this.options.get("dropdownCssClass") || "";
          return -1 !== n.indexOf(":all:") && (n = n.replace(":all:", ""), i.copyNonInternalCssClasses(t[0], this.$element[0])), t.addClass(n), t;
        }, e;
      }), e.define("select2/i18n/en", [], function () {
        return {
          errorLoading: function errorLoading() {
            return "The results could not be loaded.";
          },
          inputTooLong: function inputTooLong(e) {
            var t = e.input.length - e.maximum,
                n = "Please delete " + t + " character";
            return 1 != t && (n += "s"), n;
          },
          inputTooShort: function inputTooShort(e) {
            return "Please enter " + (e.minimum - e.input.length) + " or more characters";
          },
          loadingMore: function loadingMore() {
            return "Loading more results…";
          },
          maximumSelected: function maximumSelected(e) {
            var t = "You can only select " + e.maximum + " item";
            return 1 != e.maximum && (t += "s"), t;
          },
          noResults: function noResults() {
            return "No results found";
          },
          searching: function searching() {
            return "Searching…";
          },
          removeAllItems: function removeAllItems() {
            return "Remove all items";
          },
          removeItem: function removeItem() {
            return "Remove item";
          }
        };
      }), e.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./i18n/en"], function (l, s, o, a, c, u, d, p, h, f, g, t, m, v, y, _, b, $, w, x, A, D, S, E, O, C, L, T, q, e) {
        function n() {
          this.reset();
        }

        return n.prototype.apply = function (e) {
          if (null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter && (null != e.ajax ? e.dataAdapter = y : null != e.data ? e.dataAdapter = v : e.dataAdapter = m, 0 < e.minimumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, $)), 0 < e.maximumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, w)), 0 < e.maximumSelectionLength && (e.dataAdapter = f.Decorate(e.dataAdapter, x)), e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)), null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = f.Decorate(e.dataAdapter, b))), null == e.resultsAdapter && (e.resultsAdapter = s, null != e.ajax && (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)), null != e.placeholder && (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)), e.selectOnClose && (e.resultsAdapter = f.Decorate(e.resultsAdapter, L))), null == e.dropdownAdapter) {
            if (e.multiple) e.dropdownAdapter = A;else {
              var t = f.Decorate(A, D);
              e.dropdownAdapter = t;
            }
            0 !== e.minimumResultsForSearch && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)), e.closeOnSelect && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)), null != e.dropdownCssClass && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)), e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O);
          }

          null == e.selectionAdapter && (e.multiple ? e.selectionAdapter = a : e.selectionAdapter = o, null != e.placeholder && (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)), e.allowClear && (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)), e.multiple && (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)), null != e.selectionCssClass && (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)), e.selectionAdapter = f.Decorate(e.selectionAdapter, h)), e.language = this._resolveLanguage(e.language), e.language.push("en");

          for (var n = [], i = 0; i < e.language.length; i++) {
            var r = e.language[i];
            -1 === n.indexOf(r) && n.push(r);
          }

          return e.language = n, e.translations = this._processTranslations(e.language, e.debug), e;
        }, n.prototype.reset = function () {
          function a(e) {
            return e.replace(/[^\u0000-\u007E]/g, function (e) {
              return t[e] || e;
            });
          }

          this.defaults = {
            amdLanguageBase: "./i18n/",
            autocomplete: "off",
            closeOnSelect: !0,
            debug: !1,
            dropdownAutoWidth: !1,
            escapeMarkup: f.escapeMarkup,
            language: {},
            matcher: function e(t, n) {
              if (null == t.term || "" === t.term.trim()) return n;

              if (n.children && 0 < n.children.length) {
                for (var i = l.extend(!0, {}, n), r = n.children.length - 1; 0 <= r; r--) {
                  null == e(t, n.children[r]) && i.children.splice(r, 1);
                }

                return 0 < i.children.length ? i : e(t, i);
              }

              var s = a(n.text).toUpperCase(),
                  o = a(t.term).toUpperCase();
              return -1 < s.indexOf(o) ? n : null;
            },
            minimumInputLength: 0,
            maximumInputLength: 0,
            maximumSelectionLength: 0,
            minimumResultsForSearch: 0,
            selectOnClose: !1,
            scrollAfterSelect: !1,
            sorter: function sorter(e) {
              return e;
            },
            templateResult: function templateResult(e) {
              return e.text;
            },
            templateSelection: function templateSelection(e) {
              return e.text;
            },
            theme: "default",
            width: "resolve"
          };
        }, n.prototype.applyFromElement = function (e, t) {
          var n = e.language,
              i = this.defaults.language,
              r = t.prop("lang"),
              s = t.closest("[lang]").prop("lang"),
              o = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(s));
          return e.language = o, e;
        }, n.prototype._resolveLanguage = function (e) {
          if (!e) return [];
          if (l.isEmptyObject(e)) return [];
          if (l.isPlainObject(e)) return [e];
          var t;
          t = Array.isArray(e) ? e : [e];

          for (var n = [], i = 0; i < t.length; i++) {
            if (n.push(t[i]), "string" == typeof t[i] && 0 < t[i].indexOf("-")) {
              var r = t[i].split("-")[0];
              n.push(r);
            }
          }

          return n;
        }, n.prototype._processTranslations = function (e, t) {
          for (var n = new g(), i = 0; i < e.length; i++) {
            var r = new g(),
                s = e[i];
            if ("string" == typeof s) try {
              r = g.loadPath(s);
            } catch (e) {
              try {
                s = this.defaults.amdLanguageBase + s, r = g.loadPath(s);
              } catch (e) {
                t && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.');
              }
            } else r = l.isPlainObject(s) ? new g(s) : s;
            n.extend(r);
          }

          return n;
        }, n.prototype.set = function (e, t) {
          var n = {};
          n[l.camelCase(e)] = t;

          var i = f._convertData(n);

          l.extend(!0, this.defaults, i);
        }, new n();
      }), e.define("select2/options", ["jquery", "./defaults", "./utils"], function (d, n, p) {
        function e(e, t) {
          this.options = e, null != t && this.fromElement(t), null != t && (this.options = n.applyFromElement(this.options, t)), this.options = n.apply(this.options);
        }

        return e.prototype.fromElement = function (e) {
          var t = ["select2"];
          null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.autocomplete && e.prop("autocomplete") && (this.options.autocomplete = e.prop("autocomplete")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), p.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), p.StoreData(e[0], "data", p.GetData(e[0], "select2Tags")), p.StoreData(e[0], "tags", !0)), p.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", p.GetData(e[0], "ajaxUrl")), p.StoreData(e[0], "ajax-Url", p.GetData(e[0], "ajaxUrl")));
          var n = {};

          function i(e, t) {
            return t.toUpperCase();
          }

          for (var r = 0; r < e[0].attributes.length; r++) {
            var s = e[0].attributes[r].name,
                o = "data-";

            if (s.substr(0, o.length) == o) {
              var a = s.substring(o.length),
                  l = p.GetData(e[0], a);
              n[a.replace(/-([a-z])/g, i)] = l;
            }
          }

          d.fn.jquery && "1." == d.fn.jquery.substr(0, 2) && e[0].dataset && (n = d.extend(!0, {}, e[0].dataset, n));
          var c = d.extend(!0, {}, p.GetData(e[0]), n);

          for (var u in c = p._convertData(c)) {
            -1 < t.indexOf(u) || (d.isPlainObject(this.options[u]) ? d.extend(this.options[u], c[u]) : this.options[u] = c[u]);
          }

          return this;
        }, e.prototype.get = function (e) {
          return this.options[e];
        }, e.prototype.set = function (e, t) {
          this.options[e] = t;
        }, e;
      }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (t, c, u, i) {
        var d = function d(e, t) {
          null != u.GetData(e[0], "select2") && u.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), t = t || {}, this.options = new c(t, e), d.__super__.constructor.call(this);
          var n = e.attr("tabindex") || 0;
          u.StoreData(e[0], "old-tabindex", n), e.attr("tabindex", "-1");
          var i = this.options.get("dataAdapter");
          this.dataAdapter = new i(e, this.options);
          var r = this.render();

          this._placeContainer(r);

          var s = this.options.get("selectionAdapter");
          this.selection = new s(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
          var o = this.options.get("dropdownAdapter");
          this.dropdown = new o(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
          var a = this.options.get("resultsAdapter");
          this.results = new a(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
          var l = this;
          this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
            l.trigger("selection:update", {
              data: e
            });
          }), e[0].classList.add("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), u.StoreData(e[0], "select2", this), e.data("select2", this);
        };

        return u.Extend(d, u.Observable), d.prototype._generateId = function (e) {
          return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + u.generateChars(2) : u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
        }, d.prototype._placeContainer = function (e) {
          e.insertAfter(this.$element);

          var t = this._resolveWidth(this.$element, this.options.get("width"));

          null != t && e.css("width", t);
        }, d.prototype._resolveWidth = function (e, t) {
          var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

          if ("resolve" == t) {
            var i = this._resolveWidth(e, "style");

            return null != i ? i : this._resolveWidth(e, "element");
          }

          if ("element" == t) {
            var r = e.outerWidth(!1);
            return r <= 0 ? "auto" : r + "px";
          }

          if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
          var s = e.attr("style");
          if ("string" != typeof s) return null;

          for (var o = s.split(";"), a = 0, l = o.length; a < l; a += 1) {
            var c = o[a].replace(/\s/g, "").match(n);
            if (null !== c && 1 <= c.length) return c[1];
          }

          return null;
        }, d.prototype._bindAdapters = function () {
          this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
        }, d.prototype._registerDomEvents = function () {
          var t = this;
          this.$element.on("change.select2", function () {
            t.dataAdapter.current(function (e) {
              t.trigger("selection:update", {
                data: e
              });
            });
          }), this.$element.on("focus.select2", function (e) {
            t.trigger("focus", e);
          }), this._syncA = u.bind(this._syncAttributes, this), this._syncS = u.bind(this._syncSubtree, this), this._observer = new window.MutationObserver(function (e) {
            t._syncA(), t._syncS(e);
          }), this._observer.observe(this.$element[0], {
            attributes: !0,
            childList: !0,
            subtree: !1
          });
        }, d.prototype._registerDataEvents = function () {
          var n = this;
          this.dataAdapter.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerSelectionEvents = function () {
          var n = this,
              i = ["toggle", "focus"];
          this.selection.on("toggle", function () {
            n.toggleDropdown();
          }), this.selection.on("focus", function (e) {
            n.focus(e);
          }), this.selection.on("*", function (e, t) {
            -1 === i.indexOf(e) && n.trigger(e, t);
          });
        }, d.prototype._registerDropdownEvents = function () {
          var n = this;
          this.dropdown.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerResultsEvents = function () {
          var n = this;
          this.results.on("*", function (e, t) {
            n.trigger(e, t);
          });
        }, d.prototype._registerEvents = function () {
          var n = this;
          this.on("open", function () {
            n.$container[0].classList.add("select2-container--open");
          }), this.on("close", function () {
            n.$container[0].classList.remove("select2-container--open");
          }), this.on("enable", function () {
            n.$container[0].classList.remove("select2-container--disabled");
          }), this.on("disable", function () {
            n.$container[0].classList.add("select2-container--disabled");
          }), this.on("blur", function () {
            n.$container[0].classList.remove("select2-container--focus");
          }), this.on("query", function (t) {
            n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function (e) {
              n.trigger("results:all", {
                data: e,
                query: t
              });
            });
          }), this.on("query:append", function (t) {
            this.dataAdapter.query(t, function (e) {
              n.trigger("results:append", {
                data: e,
                query: t
              });
            });
          }), this.on("keypress", function (e) {
            var t = e.which;
            n.isOpen() ? t === i.ESC || t === i.TAB || t === i.UP && e.altKey ? (n.close(e), e.preventDefault()) : t === i.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === i.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === i.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === i.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === i.ENTER || t === i.SPACE || t === i.DOWN && e.altKey) && (n.open(), e.preventDefault());
          });
        }, d.prototype._syncAttributes = function () {
          this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
        }, d.prototype._isChangeMutation = function (e) {
          var t = this;
          if (e.addedNodes && 0 < e.addedNodes.length) for (var n = 0; n < e.addedNodes.length; n++) {
            if (e.addedNodes[n].selected) return !0;
          } else {
            if (e.removedNodes && 0 < e.removedNodes.length) return !0;
            if (Array.isArray(e)) return e.some(function (e) {
              return t._isChangeMutation(e);
            });
          }
          return !1;
        }, d.prototype._syncSubtree = function (e) {
          var t = this._isChangeMutation(e),
              n = this;

          t && this.dataAdapter.current(function (e) {
            n.trigger("selection:update", {
              data: e
            });
          });
        }, d.prototype.trigger = function (e, t) {
          var n = d.__super__.trigger,
              i = {
            open: "opening",
            close: "closing",
            select: "selecting",
            unselect: "unselecting",
            clear: "clearing"
          };

          if (void 0 === t && (t = {}), e in i) {
            var r = i[e],
                s = {
              prevented: !1,
              name: e,
              args: t
            };
            if (n.call(this, r, s), s.prevented) return void (t.prevented = !0);
          }

          n.call(this, e, t);
        }, d.prototype.toggleDropdown = function () {
          this.isDisabled() || (this.isOpen() ? this.close() : this.open());
        }, d.prototype.open = function () {
          this.isOpen() || this.isDisabled() || this.trigger("query", {});
        }, d.prototype.close = function (e) {
          this.isOpen() && this.trigger("close", {
            originalEvent: e
          });
        }, d.prototype.isEnabled = function () {
          return !this.isDisabled();
        }, d.prototype.isDisabled = function () {
          return this.options.get("disabled");
        }, d.prototype.isOpen = function () {
          return this.$container[0].classList.contains("select2-container--open");
        }, d.prototype.hasFocus = function () {
          return this.$container[0].classList.contains("select2-container--focus");
        }, d.prototype.focus = function (e) {
          this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"), this.trigger("focus", {}));
        }, d.prototype.enable = function (e) {
          this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
          var t = !e[0];
          this.$element.prop("disabled", t);
        }, d.prototype.data = function () {
          this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
          var t = [];
          return this.dataAdapter.current(function (e) {
            t = e;
          }), t;
        }, d.prototype.val = function (e) {
          if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
          var t = e[0];
          Array.isArray(t) && (t = t.map(function (e) {
            return e.toString();
          })), this.$element.val(t).trigger("input").trigger("change");
        }, d.prototype.destroy = function () {
          this.$container.remove(), this._observer.disconnect(), this._observer = null, this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", u.GetData(this.$element[0], "old-tabindex")), this.$element[0].classList.remove("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), u.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
        }, d.prototype.render = function () {
          var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
          return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container[0].classList.add("select2-container--" + this.options.get("theme")), u.StoreData(e[0], "element", this.$element), e;
        }, d;
      }), e.define("jquery-mousewheel", ["jquery"], function (e) {
        return e;
      }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (r, e, s, t, o) {
        if (null == r.fn.select2) {
          var a = ["open", "close", "destroy"];

          r.fn.select2 = function (t) {
            if ("object" == _typeof(t = t || {})) return this.each(function () {
              var e = r.extend(!0, {}, t);
              new s(r(this), e);
            }), this;
            if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
            var n,
                i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var e = o.GetData(this, "select2");
              null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, i);
            }), -1 < a.indexOf(t) ? this : n;
          };
        }

        return null == r.fn.select2.defaults && (r.fn.select2.defaults = t), s;
      }), {
        define: e.define,
        require: e.require
      };
    }(),
        t = e.require("jquery.select2");

    return u.fn.select2.amd = e, t;
  });
  var Product = {
    run: function run() {},
    init: function init() {
      Product.setAvailableBodyClass();
      Product.removeBuyButtonAlert();
      Product.smartQuantity();
      Product.applyBuyButton();
      Product.verifySkuVariationExists();
      Product.checkDescription();
      Product.openShipping();
      Common.applySlickSlider();
      Product.applyCarouselShelf();
      Product.fixSkuInfo();
      Product.loadAllImages();
      Product.prodSpecificationCustom();
      Product.loadProductSpecification();
      Product.makeLinkShareFacebook();
      Product.applyWishlist();
      Product.showIncludedItems();
      Product.addScrolledClass();
      Product.floatingButtonClick(); //validacao CPF -  LEGADO
      // Product.loadProductImages();
      //validacao CPF -  LEGADO
      //validacao VIP

      if ($("body").is(".VIP")) {
        Product.checkLogin();
      } //validacao VIP

    },
    ajaxStop: function ajaxStop() {
      Product.applyWishlist();
      Product.smartQuantity();
      Product.prodSpecificationCustom();
      Product.loadProductSpecification();
    },
    windowOnload: function windowOnload() {
      Product.checkSpecification();
      Product.trustvox();
      Product.addFreightButton();
      Product.fillShortSpecifications();
      Product.mountCustomizedSections();
      Product.mountVideoSection();
      Product.customizedNotifyme();
      Product.moveComponentsOnMobile();
      Product.acordeonSpecification(); //checagem voucher -  LEGADO

      if ($("body").is(".voucher")) {
        Product.showVoucherContent();
      }
    },
    applyWishlist: function applyWishlist() {
      $(".add-wishlist").not(".qd-wishlist-started").addClass("qd-wishlist-started").QD_smartShootingStar({
        isProductPage: true,
        wishlistButton: ".qd-sss-wishlist-button",
        list: Common.showWishesNumber
      });
    },
    acordeonSpecification: function acordeonSpecification() {
      $(".mz-product__details-content h4").on("click", function () {
        $(".mz-product__details-content").toggleClass("open");
      });

      if (window.innerWidth > 768) {
        $(".mz-product__details-content").addClass("open");
      }
    },
    loadProductSpecification: function loadProductSpecification() {
      var autentico = "\n    <div class=\"specificationProd\">\n      <div class=\"icon\">\n        <svg width=\"37\" height=\"42\" viewBox=\"0 0 37 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.55993 0.769043V1.71962C5.78748 1.70233 6.01932 1.69369 6.25116 1.69369C10.742 1.69369 14.3828 5.41821 14.3828 10.0069C14.3828 11.9901 13.7045 13.8049 12.5753 15.235V37.3013L5.62433 32.907L5.55993 32.9589V41.3844H36.9231V0.769043H5.55993ZM15.6322 35.5985H31.7105C32.2862 35.5985 32.7542 36.0742 32.7542 36.6618C32.7542 37.2533 32.2862 37.729 31.7105 37.729H15.6322C15.0569 37.729 14.5889 37.2533 14.5889 36.6618C14.5889 36.0742 15.0569 35.5985 15.6322 35.5985ZM15.6322 29.908H31.7105C32.2862 29.908 32.7542 30.3876 32.7542 30.9757C32.7542 31.5672 32.2862 32.0429 31.7105 32.0429H15.6322C15.0569 32.0429 14.5889 31.5672 14.5889 30.9757C14.5889 30.388 15.0569 29.908 15.6322 29.908ZM15.6322 24.2218H31.7105C32.2862 24.2218 32.7542 24.7019 32.7542 25.2895C32.7542 25.8814 32.2862 26.3572 31.7105 26.3572H15.6322C15.0569 26.3572 14.5889 25.8814 14.5889 25.2895C14.5889 24.7023 15.0569 24.2218 15.6322 24.2218ZM0 10.0069C0 11.5321 0.519499 12.9321 1.39106 14.0339V34.886L5.94204 30.6213L11.1156 34.886V14.0339C11.9871 12.9321 12.5066 11.5321 12.5066 10.0069C12.5066 6.4768 9.70733 3.61212 6.25116 3.61212C2.79928 3.61212 0 6.4768 0 10.0069ZM2.57603 9.62665C2.57603 7.6002 4.21181 5.95399 6.2254 5.95399C8.239 5.95399 9.87478 7.6002 9.87478 9.62665C9.87478 11.6531 8.239 13.2993 6.2254 13.2993C4.21181 13.2993 2.57603 11.6531 2.57603 9.62665Z\" fill=\"white\"/>\n        </svg>\n      </div>\n      <div class=\"text\">\n        <p>\n          Possui <strong>certificado <br>de autenticidade</strong>\n        </p>\n      </div>\n    </div>\n    ";
      var articulado = "\n    <div class=\"specificationProd\">\n      <div class=\"icon\">\n        <svg width=\"57\" height=\"42\" viewBox=\"0 0 57 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M25.6829 37.5717L11.9345 31.1935C13.6204 29.4007 14.6682 26.5599 14.2424 23.6586L29.0843 27.7429C25.9857 30.2042 24.6647 34.1691 25.6829 37.5717Z\" fill=\"white\"/>\n          <path d=\"M32.3904 25.815L49.2686 0.461426L54.5237 20.0737L41.989 31.9542C40.6761 27.761 36.5962 25.2561 32.3904 25.815Z\" fill=\"white\"/>\n          <path d=\"M34.9755 39.7038C32.1485 40.4613 29.2361 38.7799 28.4786 35.9529C27.7211 33.1259 29.4026 30.2135 32.2296 29.456C35.0566 28.6985 37.969 30.3799 38.7265 33.207C39.3073 36.0813 37.6258 38.9937 34.9755 39.7038Z\" fill=\"white\"/>\n          <path d=\"M8.59653 29.7639C7.01682 30.63 5.01167 30.7974 3.44687 29.6431C1.12249 28.1851 0.316968 25.1319 1.95725 22.7923C3.41524 20.4679 6.46847 19.6624 8.80806 21.3026C11.7097 23.0796 11.9078 27.6519 8.59653 29.7639Z\" fill=\"white\"/>\n        </svg>\n      </div>\n      <div class=\"text\">\n        <p>\n          100% <br>\n          <strong>Articulado</strong>\n        </p>\n      </div>\n    </div>\n    ";
      var removivel = "\n    <div class=\"specificationProd\">\n      <div class=\"icon\">\n        <svg width=\"29\" height=\"46\" viewBox=\"0 0 29 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M18.6515 41.2085C18.6515 40.7895 18.6051 40.4171 18.4659 39.9982C18.3267 39.4862 18.1875 39.0207 18.0482 38.5087C17.8626 37.7639 18.4195 37.0657 19.162 37.0657H26.4477C27.8399 37.0657 29.0001 35.9485 29.0001 34.5055V27.3372C29.0001 26.5924 28.304 26.0338 27.5615 26.22C27.0974 26.3131 26.6798 26.4527 26.2621 26.5924C25.8909 26.732 25.4732 26.7786 25.0556 26.7786C22.6424 26.7786 20.7398 24.4977 21.3431 21.9376C21.6679 20.5877 22.6889 19.5637 24.0346 19.2378C24.8235 19.0516 25.566 19.0982 26.2621 19.2844C26.6798 19.424 27.1438 19.5637 27.5615 19.6567C28.304 19.8429 28.9537 19.2844 28.9537 18.5396V11.2781C28.9537 9.88168 27.8399 8.71798 26.4013 8.71798H19.2084C18.4659 8.71798 17.909 8.01976 18.0947 7.32154C18.1875 6.80951 18.3267 6.34403 18.5123 5.83201C18.7443 5.18033 18.7907 4.38902 18.5587 3.5977C18.2339 2.24781 17.1665 1.22376 15.8208 0.897922C13.2684 0.246251 11.0409 2.15472 11.0409 4.62176C11.0409 5.04069 11.0873 5.41307 11.2266 5.83201C11.3658 6.34403 11.505 6.80951 11.6442 7.32154C11.8298 8.06631 11.273 8.76453 10.5305 8.76453H3.24472C1.85253 8.76453 0.692383 9.88168 0.692383 11.3247V34.5986C0.692383 35.9951 1.80613 37.1588 3.24472 37.1588H10.4841C11.2266 37.1588 11.7834 37.857 11.5978 38.5552C11.505 39.0672 11.3658 39.5327 11.1802 40.0448C10.9481 40.6964 10.9017 41.4877 11.1337 42.2791C11.4586 43.6289 12.5259 44.653 13.8717 44.9788C16.424 45.5374 18.6515 43.6289 18.6515 41.2085Z\" fill=\"white\"/>\n        </svg>\n      </div>\n      <div class=\"text\">\n        <p>\n          Possui <strong>pe\xE7as <br>removiveis</strong>\n        </p>\n      </div>\n    </div>\n    ";

      if ($(".specificationProd_box").length === 0) {
        $(".mz-product__description").before('<div class="specificationProd_box"></div>');

        if ($(".mz-product__details-content .name-field.Certificado").length > 0) {
          $(".specificationProd_box").append(autentico);
        }

        if ($(".mz-product__details-content .name-field.Articulado").length > 0) {
          $(".specificationProd_box").append(articulado);
        }

        if ($(".mz-product__details-content .name-field.Pecas-Removiveis").length > 0) {
          $(".specificationProd_box").append(removivel);
        }
      }

      if (window.innerWidth < 768) {
        $(".specificationProd_box").slick({
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false
        });
      }
    },
    prodSpecificationCustom: function prodSpecificationCustom() {
      if (!$(".mz-product__info-linha").hasClass("load")) {
        if ($(".value-field.Linha").length > 0) {
          var lineName = $(".value-field.Linha").text();
          $(".mz-product__info-linha").text(lineName);
          $(".mz-product__info-linha").addClass("load");
        } else {
          $(".mz-product__info-linha").remove();
        }
      }

      if (!$(".mz-product__info-Escala").hasClass("load")) {
        if ($(".value-field.Escala").length > 0) {
          var EscalaName = "Escala: <strong>" + $(".value-field.Escala").text() + "</strong>";
          $(".mz-product__info-Escala").html(EscalaName);
          $(".mz-product__info-Escala").addClass("load");
        } else {
          $(".mz-product__info-Escala").remove();
        }
      }
    },
    loadAllImages: function loadAllImages() {
      var produtoSku = skuJson.skus[0].sku;
      $.ajax({
        type: "GET",
        url: "/produto/sku/" + produtoSku,
        dataType: "json",
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8"
        }
      }).done(function (retornoRequisicao) {
        var imagens = retornoRequisicao[0].Images;
        imagens.map(function (imagem, index) {
          var urlImagem = imagem[3].Path;
          var makeTagImg = "<img src=\"".concat(urlImagem, "\" alt=\"\">");
          $(".mz-product-allImages__box").append(makeTagImg);

          if (!(index >= 6)) {
            var _urlImagem = imagem[3].Path;

            var _makeTagImg = "<img src=\"".concat(_urlImagem, "\" alt=\"\">");

            $(".mz-product__image").append(_makeTagImg);
          }
        });
        $(".mz-product-allImages__box").slick({
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          arrows: true,
          dots: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              infinite: true,
              dots: true
            }
          }]
        });

        if (window.innerWidth < 768) {
          $(".mz-product__image").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true
          });
        }
      });
    },
    smartQuantity: function smartQuantity() {
      $(".mz-product__buy-qtd:not(.qd-on)").addClass("qd-on").QD_smartQuantity({
        buyButton: ".buy-button"
      });
    },
    // VIP INFO
    checkLogin: function checkLogin() {
      var e = Product.getUserInfo();
    },
    getUserInfo: function getUserInfo() {
      var e,
          t = localStorage.getItem("cbyUserInfo"),
          n = null,
          o = null;
      return vtexjs.catalog.getCurrentProductWithVariations().done(function (t) {
        e = t.productId.toString(), console.log("pid", e);
      }), $.ajax({
        type: "GET",
        cache: !1,
        url: "/no-cache/profileSystem/getProfile",
        success: function success(i) {
          i.IsUserDefined ? (n = i.UserId, o = "/api/dataentities/CL/search?userId=" + n + "&_fields=profilePicture,clientevip,vipclient,firstName,userId,vipclientids&an=ironstudios", $.ajax({
            type: "GET",
            url: o,
            dataType: "json",
            cache: !1,
            headers: {
              Accept: "application/json; charset=utf-8",
              "Content-Type": "application/json; charset=utf-8"
            }
          }).done(function (n) {
            if (n.length > 0) {
              var o = n[0].vipclientids;
              var i = null != o ? o.split(",") : [];
              console.log(i), 1 == n[0].vipclient && i.includes(e) || ($(".mz-product__vip-info").html("<h3>Este produto está disponí­vel somente para clientes que fizeram a reserva antecipadamente :(</h3>"), $(".mz-product__sku-buy .buy-button").remove());
            }

            return JSON.parse(t);
          })) : window.location.href = "/login?ReturnUrl=" + encodeURIComponent(location.pathname + location.search);
        }
      }), !1;
    },
    // VIP INFO
    //validacao LEGADO -----------------------------
    loadProductImages: function loadProductImages() {
      var t = $("#___rc-p-id").val();
      var e = null;
      Product.searchProductWithId(t).then(function (i) {
        if (i) {
          var o = !1;
          (e = i[0]).especiais && (o = "yes" === e.especiais[0]), o && ($('<h5 class="cpfUnit" >Máximo de 1 unidade por CPF</h5>').insertBefore(".mz-product__brand-name"), $(".mz-product__sku-buy").css("flex-direction", "column"), vtexjs.checkout.getOrderForm().done(function (e) {
            try {
              var _i = e.loggedIn,
                  _o2 = e.clientProfileData.document,
                  n = e.clientProfileData;
              _i ? $(".mz-product__sku-buy a").on("click", function (e) {
                e.preventDefault(), localStorage.setItem("userData", JSON.stringify(n)), $.ajax({
                  url: "/api/dataentities/OC/search?cpf=".concat(Number(_o2), "&_fields=cpf,product&an=ironstudios"),
                  type: "GET",
                  headers: {
                    Accept: "application/json; charset=utf-8",
                    "Content-Type": "application/json; charset=utf-8"
                  },
                  success: function success(e) {
                    if (!e.length) return 0;

                    if (!e.filter(function (e, i, o) {
                      return e.product == t;
                    }).length) {
                      var _t = $(".mz-product__sku-buy a").attr("href");

                      return window.location.href = _t, 0;
                    }
                  }
                });
              }) : $(".mz-product__sku-buy a").on("click", function (t) {
                t.preventDefault(), alert("Esse produto é exclusivo, por favor faça login antes de comprar!");
                var e = window.location.pathname;
                localStorage.setItem("lastLocation", e);
                var i = {},
                    o = vtexid.getQSParams(window.location.href);
                i.userEmail = o.email || null, i.flow = o.flow || null, i.canClose = !1, i.scope = "49a2af7b-5371-4152-bcea-e86ea9dd9e3a", i.scopeName = "ironstudios", i.locale = "pt-BR", i.returnUrl = e, vtexid.start(i);
              });
            } catch (t) {
              console.log("error: ", t);
              $(".mz-product__sku-buy a").on("click", function (t) {
                t.preventDefault(), alert("Esse produto é exclusivo, por favor faça login antes de comprar!"), console.log("data: ", e);
                var e = window.location.pathname;
                localStorage.setItem("lastLocation", e);
                var i = {},
                    o = vtexid.getQSParams(window.location.href);
                i.userEmail = o.email || null, i.flow = o.flow || null, i.canClose = !1, i.scope = "49a2af7b-5371-4152-bcea-e86ea9dd9e3a", i.scopeName = "ironstudios", i.locale = "pt-BR", i.returnUrl = e, vtexid.start(i);
              });
            }
          })), console.log("");
          var variations = e.items;
          variations.forEach(function (t) {
            var e = $("<ul style='display:none;visibility:hidden;opacity:0;' class='image-holder-main' data-id='" + t.itemId + "' data-productskuid='" + t.itemId + "'/>"),
                i = $("<div class='image-holder-thumb' style='display:none;visibility:hidden;opacity:0;' data-id='" + t.itemId + "' data-productskuid='" + t.itemId + "'><ul class='image-holder-thumb-items' /></div>"),
                o = Product.productVariables.productSizeMain,
                n = t.isKit ? o.kit : o.thumb,
                s = t.isKit ? o.kit : o.xextra,
                a = t.isKit ? o.kit : o.large,
                r = t.isKit ? o.kit : o.medium,
                l = t.isKit ? o.kit : o.small,
                c = t.isKit ? o.kit : o.xsmall,
                d = t.isKit ? o.kit : o.zoom; // if (((hasfilter = !0), !0 === hasfilter))

            var p = t.images.filter(function (t) {
              return "Swatch" !== t.imageLabel;
            }); // else p = t.images;

            p.forEach(function (o) {
              if (o.imageLabel !== Product.productVariables.thumb) {
                var p = o.imageUrl.match(new RegExp("/ids/[^/]*"))[0],
                    u = o.imageUrl.match(new RegExp("/ids/[^/]*")),
                    f = o.imageUrl.replace(p, u + n),
                    h = o.imageUrl.replace(p, u + s),
                    g = o.imageUrl.replace(p, u + a),
                    m = o.imageUrl.replace(p, u + r),
                    v = o.imageUrl.replace(p, u + l),
                    b = o.imageUrl.replace(p, u + c);
                o.imageUrl.replace(p, u + d);
                i.find("ul").append('<li data-id="' + o.imageId + '">' + (!0 !== Product.isMobileWidth() ? '<img class="lazyImage thumbImage" data-src="' + f + '" label="' + t.images.imageLabel + '" />' : "") + "</li>"), "sizetable" === o.imageLabel && $("._sizetable-wrapper").append('<div style="display: none"><picture id="tabela_de_medida"><center><h4>Dimensões do Produto</h4></center><img  src="' + h + '" alt="" /></picture></div>'), e.append('<li class="lazyImage" data-id="' + o.imageId + '"><a href="' + h + '" data-fancybox="images"><picture><source data-srcset="' + h + '" media="(min-width: 1920px)" /><source data-srcset="' + g + '" media="(min-width: 1600px)" /><source data-srcset="' + m + '" media="(min-width: 1440px)" /><source data-srcset="' + g + '" media="(min-width: 961px)" /><source data-srcset="' + m + '" media="(min-width: 540px)" /><source data-srcset="' + v + '" media="(min-width: 480px)" /><source data-srcset="' + b + '" /><img class="lazyImage mainImage" data-src="' + h + '" alt="' + skuJson.name + '" label="' + skuJson.name + '" /></picture></a></li>');
              } else {
                var y = t.Cor[0];
                $('.item-dimension-Cor label[title="' + y + '"]').css("background-image", "url(" + o.imageUrl + ")");
              }
            }), Product.isMobileWidth(), $("._images_slider").append(i, e);
          });
        }
      });
    },
    searchProductWithId: function searchProductWithId(id) {
      return $.ajax({
        url: "/api/catalog_system/pub/products/search?fq=productId:" + id + "&an=ironstudios",
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8"
        },
        dataType: "json",
        method: "GET"
      });
    },
    isMobileWidth: function isMobileWidth() {
      return window.matchMedia("(max-width: 959px)").matches;
    },
    productVariables: {
      frete: 0,
      thumb: "020",
      thumbSize: "-290-365",
      searchThumb: "-100-100",
      shelfSize: "-450-675",
      productSizeMain: {
        kit: "-650-650",
        zoom: "-1460-2190",
        xextra: "-1140-1710",
        large: "-960-1440",
        medium: "-760-1140",
        small: "-560-840",
        xsmall: "-480-720",
        thumb: "-100-150"
      },
      colorSelect: "-50-60"
    },
    //checagem voucher -  LEGADO --------------------
    disableBuyButton: function disableBuyButton() {
      $(".buy-button.buy-button-ref").css("pointer-events", "none"), $(".buy-button.buy-button-ref").css("background-color", "gray");
    },
    enableBuyButtonChecker: function enableBuyButtonChecker() {
      $("#voucher-accept-checkbox").change(function () {
        this.checked ? ($(".buy-button.buy-button-ref").css("pointer-events", "auto"), $(".buy-button.buy-button-ref").css("background", "#79c300 0 0 no-repeat padding-box")) : Product.disableBuyButton();
      });
    },
    showVoucherContent: function showVoucherContent() {
      //trocar o nome do botao
      $(".mz-product__sku-buy > a").text("Reservar");
      var url = "/api/catalog_system/pub/products/search?fq=productId:" + skuJson.productId + "&an=ironstudios";
      $.ajax({
        url: url,
        type: "GET",
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8"
        },
        success: function success() {
          var text = '<div class="wrapper">' + $(".value-field.Descricao-Voucher-Se-produto-for-voucher-").html() + "</div>";

          if (text) {
            $("#voucher_text").append(text);
            $("#voucher_text").css("display", "block");
            Product.enableBuyButtonChecker();
            Product.disableBuyButton();
          }
        }
      });
    },
    //--------------------- checagem voucher -  LEGADO
    mountCustomizedSections: function mountCustomizedSections() {
      //Se nao tiver conteudo em descricao nem faz mais nada
      if ($(".productDescription").is(":empty")) {
        $(".mz-product__description").remove();
      } //Captura nome reduzido do produto


      var productTitle = $(".mz-product__sku-name .productName").text().split("-"); //...joga no h2 e coloca no description

      if (!productTitle[1]) {
        $(".productDescription").prepend("<h2>".concat(productTitle[0], " - ").concat(productTitle[1], "</h2>"));
      } else {
        $(".productDescription").prepend("<h2>".concat(productTitle[0], "</h2>"));
      } //COLOCAR IMAGEM NA SECAO DESCRICAO, PEGANDO DO CAMPO PRODUTO ----------


      var descriptionImage = $(".value-field.Imagem-descricao").text();

      if (descriptionImage) {
        //caso tenha campo produto preenchido
        $(".mz-product__description-image").append("<img src=\"".concat(descriptionImage, "\"/>"));
      } else {
        $(".mz-product__description-image").parent().remove();
        $(".mz-product__description .col-lg-8").removeClass("col-lg-8");
        $(".mz-product__description-content").addClass("noPaddingTop").parents(".mz-product__description").addClass("lessMargin");
      } //COLOCAR IMAGEM NA ESPECIFICACAO, PEGANDO DO CAMPO PRODUTO ----------


      var specificationImage = $(".value-field.Imagem-detalhes").text();

      if (specificationImage) {
        //caso tenha campo produto preenchido
        $(".mz-product__details-image").prepend("<img src=\"".concat(specificationImage, "\"/>")); //adiciona tbm no href do botao de abrir imagem completa

        $(".mz-product__details-image-btn").attr("href", specificationImage).attr("target", "_blank");
      } else {
        $(".mz-product__details-image").parent().remove();
        $(".mz-product__details .col-lg-6").removeClass("col-lg-6");
      } //remover secao detalhes se nao conter conteudo


      $("#caracteristicas:empty").parents(".mz-product__details").remove();
    },
    mountVideoSection: function mountVideoSection() {
      //Colocar seção de vídeo com campo produto .Video em Especificacoes
      var urlVideo = $(".value-field.Video").text();

      if (urlVideo) {
        var iframe = "<iframe width=\"560\" height=\"315\" src=\"".concat(urlVideo, "?showinfo=0&modestbranding=1&rel=0\" title=\"Product Detail Video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
        $(".mz-product__video").append(iframe);
      } else {
        $(".mz-product__video").remove();
      }
    },
    customizedNotifyme: function customizedNotifyme() {
      if ($("body").is(".qd-product-unavailable")) {
        var comingSoon = "<h4>Produto disponível em breve</h4><p>Oba!!! Esse produto vai chegar em breve no nosso site!</p><p>Gostou? Então deixe seu Nome e Email que te avisamos assim que colocarmos à venda!</p><p>Temos produtos que costumam esgotar muito rápido e não queremos que você corra o risco de ficar sem :)</p>";
        var noStock = "<p>Produto esgotado</p><p>Para ser avisado da disponibilidade do produto, basta preencher os campos abaixo</p>"; //Remove parágrafo padrão pq a loja ta no ar e não podemos modificar o conteúdo nativo

        $(".sku-notifyme-form.notifyme-form p").remove(); //Primeiro checamos se há a flag de 'em breve'

        var flagPrometida = $(".flag.em-breve");

        if (flagPrometida.length === 1) {
          //Agora adicionamos os nossos próprios parágrafos
          $(".sku-notifyme-form.notifyme-form").prepend(comingSoon);
          $("body").addClass("produto-em-breve");
          flagPrometida.remove();
        } else {
          //Agora adicionamos os nossos próprios parágrafos
          $(".sku-notifyme-form.notifyme-form").prepend(noStock);
        }

        $("#notifymeButtonOK").val("Avise-me"); //Troca nome do botão
      } else {
        $(".flag.em-breve").remove();
      }
    },
    fillShortSpecifications: function fillShortSpecifications() {
      var wrapper = $(".mz-product__short-specifications");
      var table = $("table.group.Especificacoes");

      if (!table) {
        wrapper.remove();
        return;
      }

      var lista = '<ul class="list"><li class="franquia"><b>Franquia: </b><span></span></li><li class="Peso"><b>Peso: </b><span></span></li><li class="Escala"><b>Escala: </b><span></span></li></ul>';
      wrapper.append(lista);
      var arr = [$(".value-field.Franquia").text(), $(".value-field.Peso").text(), $(".value-field.Escala").text()]; //joga conteudo no lugar certo

      for (var i = 0; i < arr.length; i++) {
        wrapper.find(".list li:nth-child(".concat(i + 1, ") span")).html(arr[i]);
      }

      var wrapper = $(".mz-product__short-specifications"); //remove campos que nao tem conteudo

      wrapper.find(".list li span").each(function () {
        if ($(this).is("*:empty")) $(this).parent().remove();
      });
      if (wrapper.find(".list").is(":empty")) wrapper.remove(); //remove campos que nao tem conteudo
    },
    addFreightButton: function addFreightButton() {
      $("#txtCep").attr("placeholder", "00000-000");
      $("#btnFreteSimulacao").attr("value", "Calcular");
      var botao = '<div class="fake-freight-button"><i class="fa fa-truck"></i> Calcular</div>';
      $(".mz-product__sku-ship-result fieldset .frete-calcular").append(botao);
    },
    trustvox: function trustvox() {
      $(".trustvox-fluid-jump").on("click", function (event) {
        event.preventDefault();
        var offset = $($(this).attr("href")).offset().top;
        $("html, body").animate({
          scrollTop: offset
        }, 500);
      });
    },
    moveComponentsOnMobile: function moveComponentsOnMobile() {
      if ($(window).width() < 992) {
        //MOVER TIPBAR
        $(".mz-tipbar-product").appendTo("#mz-product__sku");
        $(".mz-product-fav-share").appendTo(".mz-product__content");
      }
    },
    removeBuyButtonAlert: function removeBuyButtonAlert() {
      var data = $(".buy-in-page-button[productindex=0]").data("buyButton");
      if (!data) return;
      data.options.addMessage = "";
    },
    setAvailableBodyClass: function setAvailableBodyClass() {
      function checkVisibleNotify(available) {
        if (available) $(document.body).addClass("qd-product-available").removeClass("qd-product-unavailable");else $(document.body).addClass("qd-product-unavailable").removeClass("qd-product-available");
      }

      $(document).on("skuSelected.vtex", function (e, id, sku) {
        checkVisibleNotify(sku.available);
      });
      checkVisibleNotify(skuJson.available);
    },
    applyBuyButton: function applyBuyButton() {
      $(".qd_cart_auto").QD_buyButton({
        buyButton: ".mz-product__sku-buy .buy-button"
      });
    },
    checkDescription: function checkDescription() {
      var wrapper = $(".mz-product__description");

      if (wrapper.find(".productDescription").text().trim().length <= 0) {
        wrapper.addClass("hidden");
      }
    },
    checkSpecification: function checkSpecification() {
      var wrapper = $(".mz-product__specification");
      wrapper.find("th.name-field.Video").parent("tr").addClass("Video");

      if (wrapper.find("#caracteristicas > *").text().trim().length <= 0) {
        wrapper.addClass("hidden");
      }

      if (wrapper.find("tr:not(.Video)").text().trim().length <= 0) {
        wrapper.addClass("hidden");
      }
    },
    openShipping: function openShipping() {
      if (typeof window.ShippingValue === "function") window.ShippingValue();
    },
    verifySkuVariationExists: function verifySkuVariationExists() {
      var wrapperSku = $(".mz-product__sku .sku-selector-container-0 > ul");

      if (!wrapperSku.length) {
        $(".mz-product__sku .product-qd-v1-sku-selection").hide();
      } else {}
    },
    applyCarouselShelf: function applyCarouselShelf() {
      var _wrapper$slick2;

      var wrapper = $(".mz-product__similar-vitrine .prateleira").not(".slick-initialized");
      if (!wrapper.length) return false;
      wrapper.has("h2").each(function () {
        var $t = $(this);
        $t.find("h2").insertBefore($t);
      });
      wrapper.slick((_wrapper$slick2 = {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        draggable: false,
        speed: 700
      }, _defineProperty(_wrapper$slick2, "infinite", true), _defineProperty(_wrapper$slick2, "draggable", true), _defineProperty(_wrapper$slick2, "responsive", [{
        breakpoint: 1366,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]), _wrapper$slick2));
    },
    fixSkuInfo: function fixSkuInfo() {
      var sku_rich_selection = $("#mz-product__sku");
      if (!sku_rich_selection.length) return;
    },
    skuAvailablePrice: function skuAvailablePrice(skus) {
      var ret = 0;
      var j;

      for (j = 0; j < skus.length; j++) {
        if (skus[j].available) {
          ret = skus[j].bestPrice;
          break;
        }
      }

      return ret;
    },
    makeLinkShareFacebook: function makeLinkShareFacebook() {
      var link = window.location.href;
      $(".mz-product-fav-share__facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + link);
    },
    showIncludedItems: function showIncludedItems() {
      try {
        var productId = skuJson.productId;
        if (!productId) return;
        $.ajax("/api/catalog_system/pub/products/search?fq=productId:".concat(productId)).then(function (resp) {
          if (resp.length && resp[0]['Itens Inclusos']) {
            var includedItems = resp[0]['Itens Inclusos'][0];
            var html = "\n                    <div class=\"mz-included-parts-container\">\n                            <h5>Itens inclusos</h5>\n                            <div class=\"mz-included-parts-body\">\n                            ".concat(includedItems, "\n                            </div>    \n                        </div>");
            $('.mz-product__sku-ship').after(html);
          }
        });
      } catch (e) {}
    },
    addScrolledClass: function addScrolledClass() {
      var throttle;
      $(window).on('scroll', function () {
        if (throttle) return;
        throttle = true;
        setTimeout(function () {
          if (window.scrollY > 900) {
            $('body').addClass('scrolled');
          } else {
            $('body').removeClass('scrolled');
          }

          throttle = false;
        }, 100);
      });
    },
    floatingButtonClick: function floatingButtonClick() {
      var btn = $('.mz-floating__buy-button .mz-floating__button');

      if (btn.length) {
        btn.on('click', function () {
          var el = $('.mz-product__sku .mz-product__buy-qtd .mz-product__sku-buy')[0];
          var yOffset = 80;
          var y = el.getBoundingClientRect().top + window.pageYOffset + yOffset - window.outerHeight;
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        });
      }
    }
  };
  /* PRODUCT EXCLUSIVE*/

  var ProductExclusive = {
    init: function init() {
      Product.setAvailableBodyClass();
      Product.applyBuyButton();
      Product.verifySkuVariationExists();
      Product.openShipping();
      Product.fixSkuInfo();
      ProductExclusive.tipBarCarousel();
      ProductExclusive.productThumbCarousel(); //validacao CPF -  LEGADO

      Product.loadProductImages(); //validacao CPF -  LEGADO
      // MONTAGEM DE ELEMENTOS POR CAMPO PRODUTO

      ProductExclusive.putMainImages();
      ProductExclusive.mountComponentsBanners();
      ProductExclusive.mountComponentVideos(); // MONTAGEM DE ELEMENTOS POR CAMPO PRODUTO

      ProductExclusive.collectorsMuralGetImages();
      ProductExclusive.collectorsMuralSendForm(); //animate main image

      ProductExclusive.movingMouseImage();
    },
    ajaxStop: function ajaxStop() {},
    windowOnload: function windowOnload() {
      Product.fillShortSpecifications();
      Product.addFreightButton();
      ProductExclusive.checkEmptyElements();
    },
    tipBarCarousel: function tipBarCarousel() {
      var wrapper = $('.mz-tipbar > ul').not('.slick-initialized');
      if (!wrapper.length) return;
      wrapper.slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        draggable: true,
        centerPadding: false
      });
    },
    productThumbCarousel: function productThumbCarousel() {
      var initialSku = (location.search.match(/idsku=([0-9]+)/i) || ['']).pop();

      if ($(document.body).is('.produto-kit')) {
        initialSku = vtxctx.skus;
      } // Verifica qual é o primeiro sku e coloca na variável initialSku para ser utilizada no plugin


      $('.mz-product__content').QD_smartPhotoCarousel({
        imageWrapper: '.mz-product__image',
        thumbsWrapper: '.mz-product__thumbs',
        sizes: {
          thumb: '90-90',
          image: '625-625',
          imagezoom: '800-800'
        },
        slickOptions: {
          images: {
            lazyLoad: 'ondemand',
            infinite: false,
            arrows: true
          },
          thumbs: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            arrows: true,
            focusOnSelect: true
          }
        }
      }, initialSku); // Pega sku da url se houver [Cores Prateleira]
    },
    putMainImages: function putMainImages() {
      // popular background img
      var urlBackgroundImg = $('.value-field.Exclusivos-Imagem-de-Fundo-1920x660').text();
      var backImg = '';

      if (urlBackgroundImg) {
        // se existir
        backImg = "<img src =\"".concat(urlBackgroundImg, "\"/>");
      } else {
        // se nao existir seta uma img padrao
        backImg = "<img src =\"https://ironstudios.vteximg.com.br/arquivos/background-main-image.png\"/>";
      }

      $('.mz-exclusive__background-image').append(backImg); // popular background img
      // popular main image

      var urlMainImg = $('.value-field.Imagem-descricao').text();

      if (urlMainImg) {
        var mainImg = "<img src =".concat(urlMainImg, "/>");
        $('.mz-exclusive__main-image').append(mainImg);
      } // popular main image

    },
    checkEmptyElements: function checkEmptyElements() {
      if ($('.mz-product__flags').text() === '') $('.mz-product__flags').remove();
    },
    mountComponentsBanners: function mountComponentsBanners() {
      // SECTION MOSAIC BANNERS
      var urlMosaicImg = $('.value-field.Exclusivos-mosaicoDeImagens-1330x830').text();

      if (urlMosaicImg) {
        var mosaicImg = "<img src=".concat(urlMosaicImg, " />");
        $('.mz-exclusive__mosaic').append(mosaicImg);
      } // SECTION MOSAIC BANNERS


      var urlHighlightImg = $('.value-field.Exclusivos-imagemDestaque-1920x500').text();

      if (urlHighlightImg) {
        var highlightImg = "<img src=".concat(urlHighlightImg, " />");
        $('.mz-exclusive__highlight-banner').append(highlightImg);
      }
    },
    mountComponentVideos: function mountComponentVideos() {
      var urlVideos = []; // SECTION VIDEOS

      $('.Especificacoes').find('td[class*="video"]').each(function () {
        urlVideos.push($(this).text());
      });

      if (urlVideos) {
        //DA CLASSE PRA SECAO QUE SETARÁ QUANTOS VIDEOS TERÁ
        $('.mz-exclusive__videos').addClass("grid-".concat(urlVideos.length)); //loop que traz a qtd de videos distribuindo na secao

        for (var i = 0; i < urlVideos.length; i++) {
          var urlImage = urlVideos[i].split('/'); //split pra capturar id do current video
          //cria elemento imagem com recurso do youtube passando a id do video

          var boxImage = "<img src=\"https://img.youtube.com/vi/".concat(urlImage[urlImage.length - 1], "/maxresdefault.jpg\"/>"); //joga imagem dentro da secao

          $('.mz-exclusive__videos').append(boxImage);
        } //loop apenas pra trazer os botoes de play


        for (var i = 0; i < urlVideos.length; i++) {
          var urlImage = urlVideos[i].split('/'); //split pra capturar id do current video

          var spanPlay = "<div class=\"play-btn play-btn-".concat(i + 1, "\" data-id-video=").concat(urlImage[urlImage.length - 1], ">\u25B6</div>"); //joga eles dentro da secao

          $('.mz-exclusive__videos').append(spanPlay);
        } //lida com modal


        $('.play-btn').on('click', function () {
          var idVideo = $(this).attr('data-id-video');
          $('.modal-video iframe').attr('src', "https://www.youtube.com/embed/".concat(idVideo));
          $('.modal-video').addClass('active');
          $('body').addClass('modal-video-on');
        });
        $('.btn-video-close').on('click', function () {
          $('.modal-video').removeClass('active');
          $('body').removeClass('modal-video-on');
        });
      }
    },
    collectorsMuralGetImages: function collectorsMuralGetImages() {
      var arrayImgSrc = ['https://via.placeholder.com/380x380', 'https://via.placeholder.com/380x380', 'https://via.placeholder.com/380x380', 'https://via.placeholder.com/380x380', 'https://via.placeholder.com/380x380'];

      for (var i = 0; i < arrayImgSrc.length; i++) {
        var image = "<img src=".concat(arrayImgSrc[i], "/>");
        $('.mz-exclusive__collectors-mural').append(image);
      }
    },
    collectorsMuralSendForm: function collectorsMuralSendForm() {
      // $('.mz-exclusive__collectors-form .btn').on('click', function (e) {
      // e.preventDefault();
      $(function () {
        // Formulário
        var form = $('#mural-form');
        var entity = 'CO';
        var emailInput = form.find('[name=qd_email]'); // Não alterar aqui

        form.validate({
          rules: {
            email: {
              email: true
            }
          },
          submitHandler: function submitHandler(form) {
            var $form = $(form);
            if (!$form.valid()) return;
            $form.addClass('qd-loading');
            var inputs = $form.find('[name]');
            var skuId = skuJson.skus[0].sku;
            var formBodyData = {
              qd_name: inputs.filter("[name='qd_name']").val() || '',
              qd_cellphone: inputs.filter("[name='qd_cellphone']").val() || '',
              qd_socialnet: inputs.filter("[name='qd_socialnet']").val() || '',
              skuId: skuId,
              imagem_1: inputs.filter("[name='imagem_1']")[0].files[0],
              imagem_2: inputs.filter("[name='imagem_2']")[0].files[0],
              imagem_3: inputs.filter("[name='imagem_3']")[0].files[0]
            };
            $.ajax({
              url: "/api/dataentities/".concat(entity, "/search?an=ironstudios&qd_email=").concat(emailInput, "&_fields=").concat(skuId),
              type: 'GET',
              dataType: 'json',
              headers: {
                Accept: 'application/vnd.vtex.ds.v10+json',
                'Content-Type': 'application/json; charset=utf-8'
              }
            }).done(function (data) {
              var dados = data;
              var method = ''; //se usuario ja subiu imagens nesse produto
              // if ((dados[0].skuId = skuJson.skus[0].sku)) {
              //   method = 'PATCH';
              // } else {
              //   method = 'POST';
              // }

              $.ajax({
                url: "/api/dataentities/".concat(entity, "/documents?an=ironstudios"),
                type: 'POST',
                dataType: 'json',
                headers: {
                  Accept: 'application/vnd.vtex.ds.v10+json',
                  'Content-Type': 'application/json; charset=utf-8'
                },
                data: JSON.stringify(formBodyData)
              }).done(function (data) {
                if (data.status == 'erro') {
                  var fHtml = '<div class="qd-form-resseler-msg col-xs-12"><div class="bg-danger" style="margin-top: 15px;padding: 15px;"><center>Ops, ocorreu um erro e não foi possível enviar sua mensagem!<br/>Detalhes: <strong></strong></center></div></div>';
                  $(fHtml).appendTo($form).find('strong').text(data.message);
                } else {
                  var sHtml = '<div class="qd-form-resseler-msg bg-success col-xs-12" style="margin-top: 15px;"><center style="padding: 15px;"> Obrigado por mandar para gente! Iremos avaliar as fotos e conforme for ficarão disponíveis no mural de colecionadores do site.</center></div>';
                  $form.append(sHtml);
                  form.reset();
                  $form.removeClass('qd-loading');
                }
              }).fail(function () {
                return alert('Não foi possível enviar seu formulário, por favor tente novamente ou entre em contato com nossa Central de Atendimento.');
              });
            }).fail(function () {
              return alert('deu barba');
            });
            return false;
          },
          errorPlacement: function errorPlacement(error, element) {}
        });
      }); // });
    },
    movingMouseImage: function movingMouseImage() {
      //'Exclusivo' para desktops
      if ($(window).width() > 991) {
        var wrapper = $('.mz-exclusive__main-image');
        var back = $('.mz-exclusive__background-image img');
        wrapper.hover( //hovered
        function () {
          wrapper.on('mousemove', function (e) {
            back.css({
              transform: "translateY(-".concat(e.clientY / 20, "px) translateX(-").concat(e.clientX / 30, "px)")
            });
            wrapper.find('img').css({
              transform: "translateY(".concat(e.clientY / 10, "px) translateX(").concat(e.clientX / 30, "px)")
            });
          });
        }, //NOT hovered
        function () {
          back.css({
            transform: "initial"
          });
          wrapper.find('img').css({
            transform: "initial"
          });
        });
      }
    }
  };
  /* LIST */

  var List = {
    run: function run() {},
    init: function init() {},
    ajaxStop: function ajaxStop() {},
    windowOnload: function windowOnload() {}
  };
  /* INSTITUCIONAL */

  var Institutional = {
    init: function init() {
      Institutional.sideMenuToggle();
    },
    ajaxStop: function ajaxStop() {},
    windowOnload: function windowOnload() {},
    sideMenuToggle: function sideMenuToggle() {
      if ($(window).width() < 992) {
        $('.mz-institucional__navigation-title + ul').slideUp();
        $('.mz-institucional__navigation-title').click(function () {
          $(this).toggleClass('active');
          $(this).find(' + ul').slideToggle();
        });
      }
    }
  };
  /* ORDERS */

  var Orders = {
    init: function init() {
      Orders.bootstrapCssFix();
    },
    ajaxStop: function ajaxStop() {},
    windowOnload: function windowOnload() {},
    bootstrapCssFix: function bootstrapCssFix() {
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
    init: function init() {
      Account.bootstrapCssFix();
      Account.applyWishlist();
    },
    ajaxStop: function ajaxStop() {},
    windowOnload: function windowOnload() {},
    bootstrapCssFix: function bootstrapCssFix() {
      var styleSheets = document.styleSheets;

      for (var i = 0; i < styleSheets.length; i++) {
        if ((styleSheets[i].href || "").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css") > -1 || (styleSheets[i].href || "").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css") > -1) {
          styleSheets[i].disabled = true;
        }
      }
    },
    applyWishlist: function applyWishlist() {
      $('a[href="#/orders"]').after("<a href='/favoritos' target='_blank' class='vtex-account_menu-link f6 no-underline db hover-near-black pv5 mv3 pl5 bl bw2 nowrap c-muted-1 b--transparent'>Favoritos</a>");
    }
  };
  /* WISHLIST */

  var Wishlist = {
    init: function init() {
      Wishlist.bootstrapCssFix();
      Wishlist.getWishlist();
    },
    ajaxStop: function ajaxStop() {
      Wishlist.bootstrapCssFix();
    },
    windowOnload: function windowOnload() {},
    bootstrapCssFix: function bootstrapCssFix() {
      var styleSheets = document.styleSheets;

      for (var i = 0; i < styleSheets.length; i++) {
        if ((styleSheets[i].href || "").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css") > -1 || (styleSheets[i].href || "").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css") > -1) {
          styleSheets[i].disabled = true;
        }
      }
    },
    getWishlist: function getWishlist() {
      $(".mz-wishlist__shelf").not(".qd-wishlist-started").addClass("qd-wishlist-started").QD_smartShootingStar({
        list: showWishlist
      });

      function showEmptyListMessage() {
        var wrapper = $(".mz-wishlist__shelf");
        wrapper.addClass("ready qd-empty");
        return wrapper.append($("<h3>Lista Vazia</h3><p>Navegue pela loja e adicione produtos</p>"));
      }

      function showWishlist(data) {
        var shelfLayout = "9117c209-54e4-4799-90c4-a2bd7a24d417";
        var productsIds = Object.keys(data);
        var qteItems = productsIds.length;
        var wrapper = $(".mz-wishlist__shelf");

        if (!qteItems) {
          showEmptyListMessage();
          return;
        } // $('.mz-wishlist__title h2').append('<span data-qtt="' + qteItems + '"> (' + qteItems + ')</span>');


        while (productsIds.length) {
          var pack = productsIds.splice(0, 50);
          var url = "/buscapagina?fq=productId:" + pack.join("&fq=productId:") + "&PS=50&sl=" + shelfLayout + "&cc=1&sm=0";
          getProductPage(url, activateRemoveButtons);
        }

        function getProductPage(url, callback) {
          $.ajax({
            url: url,
            success: function success(html) {
              wrapper.append(html);
              callback();
            },
            error: function error() {
              getProductPage(url, callback);
            }
          });
        }

        function activateRemoveButtons() {
          wrapper.addClass("ready");
          Common.applySmartShootingStar();
          $("a.qd-sss-wishlist-delete-button").on("click", function () {
            $(this).closest("ul").hide("slow", function () {
              var items = $(this).closest(".prateleira").find(' > ul:not(".deleted")').length;
              if (!items) showEmptyListMessage();
            });
            $(this).closest("ul").addClass("deleted");
          });
          Common.applyImageLoad();
        }
      }
    }
  };
  /* HOTSITE */

  var Hotsite = {
    init: function init() {
      Search.checkShelfsNoMoreResults();
    },
    ajaxStop: function ajaxStop() {},
    windowOnload: function windowOnload() {}
  };
} catch (e) {
  typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message);
}

try {
  (function () {
    var body, ajaxStop, windowLoad;

    windowLoad = function windowLoad() {
      Common.windowOnload();
      if (body.is(".home")) Home.windowOnload();else if (body.is(".resultado-busca, .departamento, .categoria")) Search.windowOnload();else if (body.is(".produto")) Product.windowOnload();else if (body.is(".exclusivo")) ProductExclusive.windowOnload();else if (body.is(".listas, .giftlist")) List.windowOnload();else if (body.is(".institucional")) Institutional.windowOnload();else if (body.is(".orders")) Orders.windowOnload();else if (body.is(".wishlist")) Wishlist.windowOnload();else if (body.is(".hotsite")) Hotsite.windowOnload();else if (body.is(".account")) Account.windowOnload();
    };

    ajaxStop = function ajaxStop() {
      Common.ajaxStop();
      if (body.is(".home")) Home.ajaxStop();else if (body.is(".resultado-busca, .departamento, .categoria")) Search.ajaxStop();else if (body.is(".produto")) Product.ajaxStop();else if (body.is(".exclusivo")) ProductExclusive.ajaxStop();else if (body.is(".listas, .giftlist")) List.ajaxStop();else if (body.is(".institucional")) Institutional.ajaxStop();else if (body.is(".orders")) Orders.ajaxStop();else if (body.is(".wishlist")) Wishlist.ajaxStop();else if (body.is(".hotsite")) Hotsite.ajaxStop();else if (body.is(".account")) Account.ajaxStop();
    };

    $(function () {
      body = $(document.body);
      Common.init();
      if (body.is(".home")) Home.init();else if (body.is(".resultado-busca, .departamento, .categoria")) {
        Search.isSearch = $(document.body).is(".resultado-busca");
        Search.isDepartament = $(document.body).is(".departamento");
        Search.isCategory = $(document.body).is(".categoria");
        Search.init();
      } else if (body.is(".produto") || body.is(".Produto-Kit")) Product.init();else if (body.is(".exclusivo")) ProductExclusive.init();else if (body.is(".listas, .giftlist")) List.init();else if (body.is(".institucional")) Institutional.init();else if (body.is(".orders")) Orders.init();else if (body.is(".wishlist")) Wishlist.init();else if (body.is(".hotsite")) Hotsite.init();else if (body.is(".account")) Account.init();
      $(document).ajaxStop(ajaxStop);
      $(window).load(windowLoad);
      body.addClass("jsFullLoaded");
      Common.ready();
    });
    Common.run();
    if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p") Product.run();else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0) List.run();
  })();
} catch (e) {
  typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass("jsFullLoaded jsFullLoadedError") && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message);
} // jQuery Mask Plugin v1.6.5
// github.com/igorescobar/jQuery-Mask-Plugin


(function (g) {
  "function" === typeof define && define.amd ? define(["jquery"], g) : g(window.jQuery || window.Zepto);
})(function (g) {
  var z = function z(b, f, d) {
    var l = this,
        x,
        y;
    b = g(b);
    f = "function" === typeof f ? f(b.val(), void 0, b, d) : f;

    l.init = function () {
      d = d || {};
      l.byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91];
      l.translation = {
        0: {
          pattern: /\d/
        },
        9: {
          pattern: /\d/,
          optional: !0
        },
        "#": {
          pattern: /\d/,
          recursive: !0
        },
        A: {
          pattern: /[a-zA-Z0-9]/
        },
        S: {
          pattern: /[a-zA-Z]/
        }
      };
      l.translation = g.extend({}, l.translation, d.translation);
      l = g.extend(!0, {}, l, d);
      y = c.getRegexMask();
      b.each(function () {
        !1 !== d.maxlength && b.attr("maxlength", f.length);
        d.placeholder && b.attr("placeholder", d.placeholder);
        b.attr("autocomplete", "off");
        c.destroyEvents();
        c.events();
        var a = c.getCaret();
        c.val(c.getMasked());
        c.setCaret(a + c.getMaskCharactersBeforeCount(a, !0));
      });
    };

    var c = {
      getCaret: function getCaret() {
        var a;
        a = 0;
        var e = b.get(0),
            c = document.selection,
            e = e.selectionStart;
        if (c && !~navigator.appVersion.indexOf("MSIE 10")) a = c.createRange(), a.moveStart("character", b.is("input") ? -b.val().length : -b.text().length), a = a.text.length;else if (e || "0" === e) a = e;
        return a;
      },
      setCaret: function setCaret(a) {
        if (b.is(":focus")) {
          var e;
          e = b.get(0);
          e.setSelectionRange ? e.setSelectionRange(a, a) : e.createTextRange && (e = e.createTextRange(), e.collapse(!0), e.moveEnd("character", a), e.moveStart("character", a), e.select());
        }
      },
      events: function events() {
        b.on("keydown.mask", function () {
          x = c.val();
        });
        b.on("keyup.mask", c.behaviour);
        b.on("paste.mask drop.mask", function () {
          setTimeout(function () {
            b.keydown().keyup();
          }, 100);
        });
        b.on("change.mask", function () {
          b.data("changeCalled", !0);
        });
        b.on("blur.mask", function (a) {
          a = g(a.target);
          a.prop("defaultValue") !== a.val() && (a.prop("defaultValue", a.val()), a.data("changeCalled") || a.trigger("change"));
          a.data("changeCalled", !1);
        });
        b.on("focusout.mask", function () {
          d.clearIfNotMatch && !y.test(c.val()) && c.val("");
        });
      },
      getRegexMask: function getRegexMask() {
        var a = [],
            e,
            b,
            c,
            d,
            k;

        for (k in f) {
          (e = l.translation[f[k]]) ? (b = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), c = e.optional, (e = e.recursive) ? (a.push(f[k]), d = {
            digit: f[k],
            pattern: b
          }) : a.push(c || e ? b + "?" : b)) : a.push("\\" + f[k]);
        }

        a = a.join("");
        d && (a = a.replace(RegExp("(" + d.digit + "(.*" + d.digit + ")?)"), "($1)?").replace(RegExp(d.digit, "g"), d.pattern));
        return RegExp(a);
      },
      destroyEvents: function destroyEvents() {
        b.off("keydown.mask keyup.mask paste.mask drop.mask change.mask blur.mask focusout.mask").removeData("changeCalled");
      },
      val: function val(a) {
        var e = b.is("input");
        return 0 < arguments.length ? e ? b.val(a) : b.text(a) : e ? b.val() : b.text();
      },
      getMaskCharactersBeforeCount: function getMaskCharactersBeforeCount(a, e) {
        for (var b = 0, c = 0, d = f.length; c < d && c < a; c++) {
          l.translation[f.charAt(c)] || (a = e ? a + 1 : a, b++);
        }

        return b;
      },
      determineCaretPos: function determineCaretPos(a, b, d, h) {
        return l.translation[f.charAt(Math.min(a - 1, f.length - 1))] ? Math.min(a + d - b - h, d) : c.determineCaretPos(a + 1, b, d, h);
      },
      behaviour: function behaviour(a) {
        a = a || window.event;
        var b = a.keyCode || a.which;

        if (-1 === g.inArray(b, l.byPassKeys)) {
          var d = c.getCaret(),
              f = c.val(),
              n = f.length,
              k = d < n,
              p = c.getMasked(),
              m = p.length,
              q = c.getMaskCharactersBeforeCount(m - 1) - c.getMaskCharactersBeforeCount(n - 1);
          p !== f && c.val(p);
          !k || 65 === b && a.ctrlKey || (8 !== b && 46 !== b && (d = c.determineCaretPos(d, n, m, q)), c.setCaret(d));
          return c.callbacks(a);
        }
      },
      getMasked: function getMasked(a) {
        var b = [],
            g = c.val(),
            h = 0,
            n = f.length,
            k = 0,
            p = g.length,
            m = 1,
            q = "push",
            s = -1,
            r,
            u;
        d.reverse ? (q = "unshift", m = -1, r = 0, h = n - 1, k = p - 1, u = function u() {
          return -1 < h && -1 < k;
        }) : (r = n - 1, u = function u() {
          return h < n && k < p;
        });

        for (; u();) {
          var v = f.charAt(h),
              w = g.charAt(k),
              t = l.translation[v];
          if (t) w.match(t.pattern) ? (b[q](w), t.recursive && (-1 === s ? s = h : h === r && (h = s - m), r === s && (h -= m)), h += m) : t.optional && (h += m, k -= m), k += m;else {
            if (!a) b[q](v);
            w === v && (k += m);
            h += m;
          }
        }

        a = f.charAt(r);
        n !== p + 1 || l.translation[a] || b.push(a);
        return b.join("");
      },
      callbacks: function callbacks(a) {
        var e = c.val(),
            g = c.val() !== x;
        if (!0 === g && "function" === typeof d.onChange) d.onChange(e, a, b, d);
        if (!0 === g && "function" === typeof d.onKeyPress) d.onKeyPress(e, a, b, d);
        if ("function" === typeof d.onComplete && e.length === f.length) d.onComplete(e, a, b, d);
      }
    };

    l.remove = function () {
      var a = c.getCaret(),
          b = c.getMaskCharactersBeforeCount(a);
      c.destroyEvents();
      c.val(l.getCleanVal()).removeAttr("maxlength");
      c.setCaret(a - b);
    };

    l.getCleanVal = function () {
      return c.getMasked(!0);
    };

    l.init();
  };

  g.fn.mask = function (b, f) {
    this.unmask();
    return this.each(function () {
      g(this).data("mask", new z(this, b, f));
    });
  };

  g.fn.unmask = function () {
    return this.each(function () {
      try {
        g(this).data("mask").remove();
      } catch (b) {}
    });
  };

  g.fn.cleanVal = function () {
    return g(this).data("mask").getCleanVal();
  };

  g("*[data-mask]").each(function () {
    var b = g(this),
        f = {};
    "true" === b.attr("data-mask-reverse") && (f.reverse = !0);
    "false" === b.attr("data-mask-maxlength") && (f.maxlength = !1);
    "true" === b.attr("data-mask-clearifnotmatch") && (f.clearIfNotMatch = !0);
    b.mask(b.attr("data-mask"), f);
  });
});
/*! jQuery Validation Plugin - v1.12.0 - 4/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */


!function (a) {
  a.extend(a.fn, {
    validate: function validate(b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0);
      }), this.submit(function (b) {
        function d() {
          var d;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0;
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1);
      })), c);
    },
    valid: function valid() {
      var b, c;
      return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b;
      })), b;
    },
    removeAttrs: function removeAttrs(b) {
      var c = {},
          d = this;
      return a.each(b.split(/\s/), function (a, b) {
        c[b] = d.attr(b), d.removeAttr(b);
      }), c;
    },
    rules: function rules(b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j = this[0];
      if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
        case "add":
          a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
          break;

        case "remove":
          return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required");
          }), i) : (delete e[j.name], f);
      }
      return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
        required: h
      }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
        remote: h
      })), g;
    }
  }), a.extend(a.expr[":"], {
    blank: function blank(b) {
      return !a.trim("" + a(b).val());
    },
    filled: function filled(b) {
      return !!a.trim("" + a(b).val());
    },
    unchecked: function unchecked(b) {
      return !a(b).prop("checked");
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init();
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c);
    } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c;
      });
    }), b);
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(a) {
        this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide());
      },
      onfocusout: function onfocusout(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a);
      },
      onkeyup: function onkeyup(a, b) {
        (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a);
      },
      onclick: function onclick(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
      },
      highlight: function highlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
      },
      unhighlight: function unhighlight(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
      }
    },
    setDefaults: function setDefaults(b) {
      a.extend(a.validator.defaults, b);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        function b(b) {
          var c = a.data(this[0].form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
          e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c,
            d = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b;
          });
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d);
        }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
      },
      form: function form() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) {
          this.check(b[a]);
        }

        return this.valid();
      },
      element: function element(b) {
        var c = this.clean(b),
            d = this.validationTargetFor(c),
            e = !0;
        return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e;
      },
      showErrors: function showErrors(b) {
        if (b) {
          a.extend(this.errorMap, b), this.errorList = [];

          for (var c in b) {
            this.errorList.push({
              message: b[c],
              element: this.findByName(c)[0]
            });
          }

          this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b);
          });
        }

        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid");
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(a) {
        var b,
            c = 0;

        for (b in a) {
          c++;
        }

        return c;
      },
      hideErrors: function hideErrors() {
        this.addWrapper(this.toHide).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (b) {}
      },
      findLastActive: function findLastActive() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name;
        }).length && b;
      },
      elements: function elements() {
        var b = this,
            c = {};
        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0);
        });
      },
      clean: function clean(b) {
        return a(b)[0];
      },
      errors: function errors() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext);
      },
      reset: function reset() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(a) {
        this.reset(), this.toHide = this.errorsFor(a);
      },
      elementValue: function elementValue(b) {
        var c,
            d = a(b),
            e = d.attr("type");
        return "radio" === e || "checkbox" === e ? a("input[name='" + d.attr("name") + "']:checked").val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c);
      },
      check: function check(b) {
        b = this.validationTargetFor(this.clean(b));
        var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function (a, b) {
          return b;
        }).length,
            h = !1,
            i = this.elementValue(b);

        for (d in f) {
          e = {
            method: d,
            parameters: f[d]
          };

          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue;
            }

            if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1;
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j;
          }
        }

        if (!h) return this.objectLength(f) && this.successList.push(b), !0;
      },
      customDataMessage: function customDataMessage(b, c) {
        return a(b).data("msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
      },
      customMessage: function customMessage(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b]);
      },
      findDefined: function findDefined() {
        for (var a = 0; a < arguments.length; a++) {
          if (void 0 !== arguments[a]) return arguments[a];
        }

        return void 0;
      },
      defaultMessage: function defaultMessage(b, c) {
        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>");
      },
      formatAndAdd: function formatAndAdd(b, c) {
        var d = this.defaultMessage(b, c.method),
            e = /\$?\{(\d+)\}/g;
        "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
          message: d,
          element: b,
          method: c.method
        }), this.errorMap[b.name] = d, this.submitted[b.name] = d;
      },
      addWrapper: function addWrapper(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
      },
      defaultShowErrors: function defaultShowErrors() {
        var a, b, c;

        for (a = 0; this.errorList[a]; a++) {
          c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) {
          this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return a(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(b, c) {
        var d = this.errorsFor(b);
        d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d);
      },
      errorsFor: function errorsFor(b) {
        var c = this.idOrName(b);
        return this.errors().filter(function () {
          return a(this).attr("for") === c;
        });
      },
      idOrName: function idOrName(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
      },
      validationTargetFor: function validationTargetFor(a) {
        return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a;
      },
      checkable: function checkable(a) {
        return /radio|checkbox/i.test(a.type);
      },
      findByName: function findByName(b) {
        return a(this.currentForm).find("[name='" + b + "']");
      },
      getLength: function getLength(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;

          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
        }

        return b.length;
      },
      depend: function depend(a, b) {
        return this.dependTypes[_typeof(a)] ? this.dependTypes[_typeof(a)](a, b) : !0;
      },
      dependTypes: {
        "boolean": function boolean(a) {
          return a;
        },
        string: function string(b, c) {
          return !!a(b, c.form).length;
        },
        "function": function _function(a, b) {
          return a(b);
        }
      },
      optional: function optional(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
      },
      startRequest: function startRequest(a) {
        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0);
      },
      stopRequest: function stopRequest(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(b) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, "remote")
        });
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
    },
    classRules: function classRules(b) {
      var c = {},
          d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
      }), c;
    },
    attributeRules: function attributeRules(b) {
      var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");

      for (c in a.validator.methods) {
        "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
      }

      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e;
    },
    dataRules: function dataRules(b) {
      var c,
          d,
          e = {},
          f = a(b);

      for (c in a.validator.methods) {
        d = f.data("rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
      }

      return e;
    },
    staticRules: function staticRules(b) {
      var c = {},
          d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c;
    },
    normalizeRules: function normalizeRules(b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];

        if (e.param || e.depends) {
          var f = !0;

          switch (_typeof(e.depends)) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;

            case "function":
              f = e.depends.call(c, c);
          }

          f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d];
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) ? e(c) : e;
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]));
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]));
      }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b;
    },
    normalizeRule: function normalizeRule(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0;
        }), b = c;
      }

      return b;
    },
    addMethod: function addMethod(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
    },
    methods: {
      required: function required(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";

        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0;
        }

        return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0;
      },
      email: function email(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
      },
      url: function url(a, b) {
        return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
      },
      date: function date(a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
      },
      dateISO: function dateISO(a, b) {
        return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a);
      },
      number: function number(a, b) {
        return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
      },
      digits: function digits(a, b) {
        return this.optional(b) || /^\d+$/.test(a);
      },
      creditcard: function creditcard(a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c,
            d,
            e = 0,
            f = 0,
            g = !1;
        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;

        for (c = a.length - 1; c >= 0; c--) {
          d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
        }

        return e % 10 === 0;
      },
      minlength: function minlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || e >= d;
      },
      maxlength: function maxlength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || d >= e;
      },
      rangelength: function rangelength(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
        return this.optional(c) || e >= d[0] && e <= d[1];
      },
      min: function min(a, b, c) {
        return this.optional(b) || a >= c;
      },
      max: function max(a, b, c) {
        return this.optional(b) || c >= a;
      },
      range: function range(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1];
      },
      equalTo: function equalTo(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          a(c).valid();
        }), b === e.val();
      },
      remote: function remote(b, c, d) {
        if (this.optional(c)) return "dependency-mismatch";
        var e,
            f,
            g = this.previousValue(c);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
          url: d
        } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
          url: d,
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: f,
          context: e.currentForm,
          success: function success(d) {
            var f,
                h,
                i,
                j = d === !0 || "true" === d;
            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j);
          }
        }, d)), "pending");
      }
    }
  }), a.format = function () {
    throw "$.format has been deprecated. Please use $.validator.format instead.";
  };
}(jQuery), function (a) {
  var b,
      c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
        f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
  });
}(jQuery), function (a) {
  a.extend(a.fn, {
    validateDelegate: function validateDelegate(b, c, d) {
      return this.bind(c, function (c) {
        var e = a(c.target);
        return e.is(b) ? d.apply(e, arguments) : void 0;
      });
    }
  });
}(jQuery); // Customização do jQUery validate

$.validator.addMethod("cpf", function (value, element) {
  function valida_cpf(cpf) {
    if (cpf.length < 11) return false;
    var numeros, digitos, soma, i, resultado;
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;

    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;
    numeros = cpf.substring(0, 10);
    soma = 0;

    for (i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) return false;
    return true;
  }

  ;
  return valida_cpf(value.replace(/[^0-9]/gi, ""));
}, "Informe um CPF válido.");

(function (factory) {
  "use strict";

  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports !== "undefined") {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  "use strict";

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3e3,
        centerMode: false,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: "slick-dots",
        draggable: true,
        easing: "linear",
        edgeFriction: .35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: false,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1e3
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = "hidden";
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = "visibilitychange";
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data("slick") || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== "undefined") {
        _.hidden = "mozHidden";
        _.visibilityChange = "mozvisibilitychange";
      } else if (typeof document.webkitHidden !== "undefined") {
        _.hidden = "webkitHidden";
        _.visibilityChange = "webkitvisibilitychange";
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++;
      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === "boolean") {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === "number") {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = "translate(" + now + "px, 0px)";

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = "translate(0px," + now + "px)";

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
        } else {
          animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === "object") {
      asNavFor.each(function () {
        var target = $(this).slick("getSlick");

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
    } else {
      transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
      _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");

        _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass("slick-dotted");

      dot = $("<ul />").addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find("li").first().addClass("slick-active");
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "");
    });

    _.$slider.addClass("slick-slider");

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css("opacity", 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass("draggable");
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement("div");

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement("div");

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        width: 100 / _.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === "window") {
      respondToWidth = windowWidth;
    } else if (_.respondTo === "slider") {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === "min") {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === "unslick") {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === "unslick") {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      }

      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset;

    if ($target.is("a")) {
      event.preventDefault();
    }

    if (!$target.is("li")) {
      $target = $target.closest("li");
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case "previous":
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case "next":
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case "index":
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger("focus");
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off("keydown.slick", _.keyHandler);
      }
    }

    _.$slider.off("focus.slick blur.slick");

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
      _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
        _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
      }
    }

    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);

    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);

    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);

    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);

    _.$list.off("click.slick", _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off("keydown.slick", _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off("click.slick", _.selectHandler);
    }

    $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));

    _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr("style");

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $(".slick-cloned", _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
        $(this).attr("style", $(this).data("originalStyling"));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass("slick-slider");

    _.$slider.removeClass("slick-initialized");

    _.$slider.removeClass("slick-dotted");

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger("destroy", [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = "";

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (event) {
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          if ($sf.is(":focus")) {
            _.focussed = true;

            _.autoPlay();
          }
        }
      }, 0);
    }).on("blur.slick", "*", function (event) {
      var $sf = $(this);

      if (_.options.pauseOnFocus) {
        _.focussed = false;

        _.autoPlay();
      }
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        swipeTarget,
        centerOffset;

    centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
    swipeTarget = _.swipeLeft * -1 + centerOffset;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find(".slick-slide").each(function (index, slide) {
        var slideOuterWidth, slideOffset, slideRightBoundary;
        slideOuterWidth = $(slide).outerWidth();
        slideOffset = slide.offsetLeft;

        if (_.options.centerMode !== true) {
          slideOffset += slideOuterWidth / 2;
        }

        slideRightBoundary = slideOffset + slideOuterWidth;

        if (swipeTarget < slideRightBoundary) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: "index",
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass("slick-initialized")) {
      $(_.$slider).addClass("slick-initialized");

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger("init", [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          role: "tabpanel",
          id: "slick-slide" + _.instanceUid + i,
          tabindex: -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;

          if ($("#" + ariaButtonControl).length) {
            $(this).attr({
              "aria-describedby": ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr("role", "tablist").find("li").each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          role: "presentation"
        });
        $(this).find("button").first().attr({
          role: "tab",
          id: "slick-slide-control" + _.instanceUid + i,
          "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
          "aria-label": i + 1 + " of " + numDotGroups,
          "aria-selected": null,
          tabindex: "-1"
        });
      }).eq(_.currentSlide).find("button").attr({
        "aria-selected": "true",
        tabindex: "0"
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          tabindex: "0"
        });
      } else {
        _.$slides.eq(i).removeAttr("tabindex");
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
      }, _.changeSlide);

      _.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on("keydown.slick", _.keyHandler);

        _.$nextArrow.on("keydown.slick", _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("click.slick", {
        message: "index"
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on("keydown.slick", _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));

      _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, _.swipeHandler);

    _.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, _.swipeHandler);

    _.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, _.swipeHandler);

    _.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, _.swipeHandler);

    _.$list.on("click.slick", _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on("keydown.slick", _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }

    $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this;

    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? "next" : "previous"
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? "previous" : "next"
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $("img[data-lazy]", imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr("data-lazy"),
            imageSrcSet = $(this).attr("data-srcset"),
            imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"),
            imageToLoad = document.createElement("img");

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr("srcset", imageSrcSet);

              if (imageSizes) {
                image.attr("sizes", imageSizes);
              }
            }

            image.attr("src", imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            });

            _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");

          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === "anticipated") {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find(".slick-slide");

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-slide");
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass("slick-loading");

    _.initUI();

    if (_.options.lazyLoad === "progressive") {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: "next"
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger("afterChange", [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr("tabindex", 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: "previous"
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $("img[data-lazy]", _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr("data-lazy");
      imageSrcSet = image.attr("data-srcset");
      imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
      imageToLoad = document.createElement("img");

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr("srcset", imageSrcSet);

          if (imageSizes) {
            image.attr("sizes", imageSizes);
          }
        }

        image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger("lazyLoaded", [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");

          _.$slider.trigger("lazyLoadError", [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger("allImagesLoaded", [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow;

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: "index",
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === "array" && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || "window";

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on("click.slick", _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger("reInit", [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === "boolean") {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
    y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = "translate(" + x + ", " + y + ")";

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: "0px " + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + " 0px"
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5e3 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: "relative",
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: "relative",
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css("height", targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === "object") {
      option = arguments[0];
      refresh = arguments[1];
      type = "multiple";
    } else if ($.type(arguments[0]) === "string") {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === "responsive" && $.type(arguments[1]) === "array") {
        type = "responsive";
      } else if (typeof arguments[1] !== "undefined") {
        type = "single";
      }
    }

    if (type === "single") {
      _.options[option] = value;
    } else if (type === "multiple") {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === "responsive") {
      for (item in value) {
        if ($.type(_.options.responsive) !== "array") {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1;

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger("setPosition", [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? "top" : "left";

    if (_.positionProp === "top") {
      _.$slider.addClass("slick-vertical");
    } else {
      _.$slider.removeClass("slick-vertical");
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === "number") {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = "OTransform";
      _.transformType = "-o-transform";
      _.transitionType = "OTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = "MozTransform";
      _.transformType = "-moz-transform";
      _.transitionType = "MozTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = "webkitTransform";
      _.transformType = "-webkit-transform";
      _.transitionType = "webkitTransition";
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = "msTransform";
      _.transformType = "-ms-transform";
      _.transitionType = "msTransition";
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = "transform";
      _.transformType = "transform";
      _.transitionType = "transition";
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");

    _.$slides.eq(index).addClass("slick-current");

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false");
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false");
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center");
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass("slick-center");
        }
      }

      _.$slides.eq(index).addClass("slick-center");
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass("slick-active").attr("aria-hidden", "false");
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false");
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
        }
      }
    }

    if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
        }

        _.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
          $(this).attr("id", "");
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");
    var index = parseInt(targetElement.attr("data-slick-index"));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick("getSlick");

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass("slick-loading");
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? "left" : "right";
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? "left" : "right";
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? "right" : "left";
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "down";
      } else {
        return "up";
      }
    }

    return "vertical";
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger("edge", [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case "left":
        case "down":
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case "right":
        case "up":
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != "vertical") {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger("swipe", [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case "start":
        _.swipeStart(event);

        break;

      case "move":
        _.swipeMove(event);

        break;

      case "end":
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $(".slick-cloned", _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger("unslick", [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");

      _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");

        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");

        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");

        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find("li").removeClass("slick-active").end();

      _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active");
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == "object" || typeof opt == "undefined") _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != "undefined") return ret;
    }

    return _;
  };
});
/* Quatro Digital Amazing Menu // 2.13 // Carlos Vinicius // Todos os direitos reservados */

/* FUNÇÕES AUXILIARES */


"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
});
"function" != typeof String.prototype.capitalize && (String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
});
"function" !== typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function () {
  var b = {
    "\xE7": "c",
    "\xE6": "ae",
    "\u0153": "oe",
    "\xE1": "a",
    "\xE9": "e",
    "\xED": "i",
    "\xF3": "o",
    "\xFA": "u",
    "\xE0": "a",
    "\xE8": "e",
    "\xEC": "i",
    "\xF2": "o",
    "\xF9": "u",
    "\xE4": "a",
    "\xEB": "e",
    "\xEF": "i",
    "\xF6": "o",
    "\xFC": "u",
    "\xFF": "y",
    "\xE2": "a",
    "\xEA": "e",
    "\xEE": "i",
    "\xF4": "o",
    "\xFB": "u",
    "\xE5": "a",
    "\xE3": "a",
    "\xF8": "o",
    "\xF5": "o",
    u: "u",
    "\xC1": "A",
    "\xC9": "E",
    "\xCD": "I",
    "\xD3": "O",
    "\xDA": "U",
    "\xCA": "E",
    "\xD4": "O",
    "\xDC": "U",
    "\xC3": "A",
    "\xD5": "O",
    "\xC0": "A",
    "\xC7": "C"
  };
  return this.replace(/[\u00e0-\u00fa]/ig, function (a) {
    return "undefined" != typeof b[a] ? b[a] : a;
  });
});
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */

(function (a) {
  a.fn.getParent = a.fn.closest;
})(jQuery);
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */


(function (d) {
  if ("function" !== typeof d.qdAjax) {
    var a = {};
    d.qdAjaxQueue = a;
    150 > parseInt((d.fn.jquery.replace(/[^0-9]+/g, "") + "000").slice(0, 3), 10) && console && "function" == typeof console.error && console.error();

    d.qdAjax = function (f) {
      try {
        var b = d.extend({}, {
          url: "",
          type: "GET",
          data: "",
          success: function success() {},
          error: function error() {},
          complete: function complete() {},
          clearQueueDelay: 5
        }, f),
            e;
        e = "object" === _typeof(b.data) ? JSON.stringify(b.data) : b.data.toString();
        var c = encodeURIComponent(b.url + "|" + b.type + "|" + e);
        a[c] = a[c] || {};
        "undefined" == typeof a[c].jqXHR ? a[c].jqXHR = d.ajax(b) : (a[c].jqXHR.done(b.success), a[c].jqXHR.fail(b.error), a[c].jqXHR.always(b.complete));
        a[c].jqXHR.always(function () {
          isNaN(parseInt(b.clearQueueDelay)) || setTimeout(function () {
            a[c].jqXHR = void 0;
          }, b.clearQueueDelay);
        });
        return a[c].jqXHR;
      } catch (g) {
        "undefined" !== typeof console && "function" === typeof console.error && console.error("Problemas no $.qdAjax :( . Detalhes: " + g.message);
      }
    };

    d.qdAjax.version = "4.0";
  }
})(jQuery);

function _0x2be0(_0xd04dd4, _0x114f15) {
  var _0x270d24 = _0x270d();

  return _0x2be0 = function _0x2be0(_0x2be02a, _0x45b0da) {
    _0x2be02a = _0x2be02a - 0x1b1;
    var _0x4b6b37 = _0x270d24[_0x2be02a];
    return _0x4b6b37;
  }, _0x2be0(_0xd04dd4, _0x114f15);
}

function _0x270d() {
  var _0x11e660 = ['insertBefore', 'ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!', 'object', 'text', 'qd-am-dropdown-menu', 'qd-amazing-menu', '24YmVjIJ', 'hide', '.qd-am-banner', 'qd-am-', 'add', ':not(ul)', '2086740EBQUmd', 'qd-am-has-ul', '4ymatQR', '.qd_am_code', 'last', '3833900IJuzRx', 'ngnznfuvv%25C2%25A8zligrk%25C2%25A8pbz', 'QuatroDigital.am.ajaxCallback', 'call', 'qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82', 'trim', 'j%25C2%25A8ybwngnznfuvv%25C2%25A8pbz%25C2%25A8oe', 'qd-am-content-loaded', '[QD\x20Amazing\x20Menu]\x0a', '/qd-amazing-menu', 'error', 'qdAjax', 'find', 'toUpperCase', 'replace', '-li', 'toLowerCase', 'qd-am-level-', '49692MeFDEw', 'ite', 'parent', 'QD_amazingMenu', 'bwngnznfuvv%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe', 'data-qdam-value', 'aviso', '.qd_amazing_menu_auto', 'trigger', 'getParent', 'first', 'undefined', 'alerta', '900096GZGODc', 'replaceSpecialChars', 'url', 'fromCharCode', 'attr', 'function', '527319DVryLP', '25JDlnCS', '56NuHRqM', '[class*=\x27colunas\x27]', 'children', 'each', 'qd-am-elem-', '>ul', 'QuatroDigital.am.callback', 'warn', 'addClass', 'extend', 'clone', 'qd-am-dropdown', '11ZDMsaq', '107734geekga', 'length', 'exec', 'apply', '216864xiPDvO', 'unshift', 'qd-am-column', 'Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27', 'join', 'qd-am-collection-wrapper', 'ul[itemscope]', '.box-banner', 'info', 'qdAmAddNdx', 'callback', 'charCodeAt', 'filter'];

  _0x270d = function _0x270d() {
    return _0x11e660;
  };

  return _0x270d();
}

(function (_0x44a797, _0x1c088f) {
  var _0x333c5f = _0x2be0,
      _0x1c8616 = _0x44a797();

  while (!![]) {
    try {
      var _0x4d07ab = parseInt(_0x333c5f(0x1d3)) / 0x1 * (-parseInt(_0x333c5f(0x1b4)) / 0x2) + -parseInt(_0x333c5f(0x1cb)) / 0x3 * (parseInt(_0x333c5f(0x1b8)) / 0x4) + parseInt(_0x333c5f(0x1fc)) / 0x5 * (parseInt(_0x333c5f(0x1f5)) / 0x6) + parseInt(_0x333c5f(0x1d6)) / 0x7 + parseInt(_0x333c5f(0x1fd)) / 0x8 * (-parseInt(_0x333c5f(0x1fb)) / 0x9) + parseInt(_0x333c5f(0x1d1)) / 0xa + -parseInt(_0x333c5f(0x1b3)) / 0xb * (-parseInt(_0x333c5f(0x1e8)) / 0xc);

      if (_0x4d07ab === _0x1c088f) break;else _0x1c8616['push'](_0x1c8616['shift']());
    } catch (_0x1987ae) {
      _0x1c8616['push'](_0x1c8616['shift']());
    }
  }
})(_0x270d, 0x6e2be), function (_0x1d517e) {
  var _0x25ad2d = _0x2be0,
      _0x520c75,
      _0x25b9b6 = jQuery;

  if (_0x25ad2d(0x1fa) !== _typeof(_0x25b9b6['fn'][_0x25ad2d(0x1eb)])) {
    var _0x206c05 = {
      'url': _0x25ad2d(0x1df),
      'callback': function callback() {},
      'ajaxCallback': function ajaxCallback() {}
    },
        _0x1de47c = function _0x1de47c(_0x3f8a3b, _0x4921be) {
      var _0x65290d = _0x25ad2d;

      if (_0x65290d(0x1c7) === (typeof console === "undefined" ? "undefined" : _typeof(console)) && 'undefined' !== typeof console[_0x65290d(0x1e0)] && 'undefined' !== typeof console[_0x65290d(0x1c0)] && _0x65290d(0x1f3) !== _typeof(console[_0x65290d(0x204)])) {
        var _0x1d519b;

        _0x65290d(0x1c7) === _typeof(_0x3f8a3b) ? (_0x3f8a3b[_0x65290d(0x1b9)](_0x65290d(0x1de)), _0x1d519b = _0x3f8a3b) : _0x1d519b = [_0x65290d(0x1de) + _0x3f8a3b];

        if (_0x65290d(0x1f3) === _typeof(_0x4921be) || _0x65290d(0x1f4) !== _0x4921be[_0x65290d(0x1e6)]() && _0x65290d(0x1ee) !== _0x4921be[_0x65290d(0x1e6)]()) {
          if (_0x65290d(0x1f3) !== _typeof(_0x4921be) && 'info' === _0x4921be[_0x65290d(0x1e6)]()) try {
            console['info']['apply'](console, _0x1d519b);
          } catch (_0x37771c) {
            try {
              console[_0x65290d(0x1c0)](_0x1d519b[_0x65290d(0x1bc)]('\x0a'));
            } catch (_0x54b5ec) {}
          } else try {
            console[_0x65290d(0x1e0)][_0x65290d(0x1b7)](console, _0x1d519b);
          } catch (_0x1e1688) {
            try {
              console[_0x65290d(0x1e0)](_0x1d519b['join']('\x0a'));
            } catch (_0x43fdee) {}
          }
        } else try {
          console['warn'][_0x65290d(0x1b7)](console, _0x1d519b);
        } catch (_0x4f6b75) {
          try {
            console[_0x65290d(0x204)](_0x1d519b[_0x65290d(0x1bc)]('\x0a'));
          } catch (_0x470866) {}
        }
      }
    };

    _0x25b9b6['fn'][_0x25ad2d(0x1c1)] = function () {
      var _0x1d224c = _0x25ad2d,
          _0x3f51c6 = _0x25b9b6(this);

      return _0x3f51c6[_0x1d224c(0x200)](function (_0x18be27) {
        var _0x4ef3ac = _0x1d224c;

        _0x25b9b6(this)[_0x4ef3ac(0x205)]('qd-am-li-' + _0x18be27);
      }), _0x3f51c6[_0x1d224c(0x1f2)]()[_0x1d224c(0x205)]('qd-am-first'), _0x3f51c6[_0x1d224c(0x1d5)]()[_0x1d224c(0x205)]('qd-am-last'), _0x3f51c6;
    }, _0x25b9b6['fn'][_0x25ad2d(0x1eb)] = function () {}, _0x1d517e = function (_0x4e69db) {
      var _0x2a350f = _0x25ad2d,
          _0x1cfdad = {
        'y': _0x2a350f(0x1ec),
        'jj': _0x2a350f(0x1dc),
        'ybw': _0x2a350f(0x1d7),
        'ybwn': 'gnznfuvv%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe'
      };
      return function (_0x5545d3) {
        var _0x26ab69 = _0x2a350f,
            _0x3bebb8 = function _0x3bebb8(_0x50db66) {
          return _0x50db66;
        },
            _0x761ca6 = ['a', 'e', 0x12, 'm', 's', 'k', 'd', 'u', 'g', 'h', 'a', 'g', 's', 't', 'z', 'y', 'o', 'u', 'o', 'b'];

        _0x5545d3 = _0x5545d3['d' + _0x761ca6[0x10] + 'c' + _0x761ca6[0x11] + 'm' + _0x3bebb8(_0x761ca6[0x1]) + 'n' + _0x761ca6[0xd]]['l' + _0x761ca6[0x12] + 'c' + _0x761ca6[0x0] + 'ti' + _0x3bebb8('o') + 'n'];

        var _0x1008af = function _0x1008af(_0x29cf2f) {
          var _0x4b5c1d = _0x2be0;
          return escape(encodeURIComponent(_0x29cf2f['replace'](/\./g, '¨')[_0x4b5c1d(0x1e4)](/[a-zA-Z]/g, function (_0x463272) {
            var _0x46641b = _0x4b5c1d;
            return String[_0x46641b(0x1f8)](('Z' >= _0x463272 ? 0x5a : 0x7a) >= (_0x463272 = _0x463272[_0x46641b(0x1c3)](0x0) + 0xd) ? _0x463272 : _0x463272 - 0x1a);
          })));
        },
            _0x22054a = _0x1008af(_0x5545d3[[_0x761ca6[0x9], _0x3bebb8('o'), _0x761ca6[0xc], _0x761ca6[_0x3bebb8(0xd)]][_0x26ab69(0x1bc)]('')]);

        _0x1008af = _0x1008af((window[['js', _0x3bebb8('no'), 'm', _0x761ca6[0x1], _0x761ca6[0x4][_0x26ab69(0x1e3)](), _0x26ab69(0x1e9)][_0x26ab69(0x1bc)]('')] || '---') + ['.v', _0x761ca6[0xd], 'e', _0x3bebb8('x'), 'co', _0x3bebb8('mm'), 'erc', _0x761ca6[0x1], '.c', _0x3bebb8('o'), 'm.', _0x761ca6[0x13], 'r'][_0x26ab69(0x1bc)](''));

        for (var _0x208988 in _0x1cfdad) {
          if (_0x1008af === _0x208988 + _0x1cfdad[_0x208988] || _0x22054a === _0x208988 + _0x1cfdad[_0x208988]) {
            var _0x16a0db = 'tr' + _0x761ca6[0x11] + 'e';

            break;
          }

          _0x16a0db = 'f' + _0x761ca6[0x0] + 'ls' + _0x3bebb8(_0x761ca6[0x1]) + '';
        }

        return _0x3bebb8 = !0x1, -0x1 < _0x5545d3[[_0x761ca6[0xc], 'e', _0x761ca6[0x0], 'rc', _0x761ca6[0x9]][_0x26ab69(0x1bc)]('')]['indexOf'](_0x26ab69(0x1da)) && (_0x3bebb8 = !0x0), [_0x16a0db, _0x3bebb8];
      }(_0x4e69db);
    }(window);
    if (!eval(_0x1d517e[0x0])) return _0x1d517e[0x1] ? _0x1de47c(_0x25ad2d(0x1c6)) : !0x1;

    var _0x15f66b = function _0x15f66b(_0xb255fd) {
      var _0x195fda = _0x25ad2d,
          _0x11faea = _0xb255fd[_0x195fda(0x1e2)](_0x195fda(0x1d4)),
          _0x32855f = _0x11faea[_0x195fda(0x1c4)](_0x195fda(0x1cd)),
          _0x13a033 = _0x11faea[_0x195fda(0x1c4)]('.qd-am-collection');

      if (_0x32855f[_0x195fda(0x1b5)] || _0x13a033[_0x195fda(0x1b5)]) _0x32855f[_0x195fda(0x1ea)]()['addClass']('qd-am-banner-wrapper'), _0x13a033['parent']()['addClass'](_0x195fda(0x1bd)), _0x25b9b6[_0x195fda(0x1e1)]({
        'url': _0x520c75[_0x195fda(0x1f7)],
        'dataType': 'html',
        'success': function success(_0x4b14c5) {
          var _0x1c1d77 = _0x195fda,
              _0x503750 = _0x25b9b6(_0x4b14c5);

          _0x32855f['each'](function () {
            var _0x3e2bc5 = _0x2be0,
                _0x54ce45 = _0x25b9b6(this),
                _0x3107ae = _0x503750[_0x3e2bc5(0x1e2)]('img[alt=\x27' + _0x54ce45[_0x3e2bc5(0x1f9)](_0x3e2bc5(0x1ed)) + '\x27]');

            _0x3107ae[_0x3e2bc5(0x1b5)] && (_0x3107ae[_0x3e2bc5(0x200)](function () {
              var _0x3ca853 = _0x3e2bc5;

              _0x25b9b6(this)[_0x3ca853(0x1f1)](_0x3ca853(0x1bf))[_0x3ca853(0x1b1)]()['insertBefore'](_0x54ce45);
            }), _0x54ce45['hide']());
          })[_0x1c1d77(0x205)](_0x1c1d77(0x1dd)), _0x13a033[_0x1c1d77(0x200)](function () {
            var _0x1ee624 = _0x1c1d77,
                _0x454d3d = {},
                _0x343b45 = _0x25b9b6(this);

            _0x503750[_0x1ee624(0x1e2)]('h2')[_0x1ee624(0x200)](function () {
              var _0x4fb9e2 = _0x1ee624;
              if (_0x25b9b6(this)[_0x4fb9e2(0x1c8)]()[_0x4fb9e2(0x1db)]()[_0x4fb9e2(0x1e6)]() == _0x343b45[_0x4fb9e2(0x1f9)]('data-qdam-value')[_0x4fb9e2(0x1db)]()[_0x4fb9e2(0x1e6)]()) return _0x454d3d = _0x25b9b6(this), !0x1;
            }), _0x454d3d[_0x1ee624(0x1b5)] && (_0x454d3d[_0x1ee624(0x200)](function () {
              var _0x464f95 = _0x1ee624;

              _0x25b9b6(this)[_0x464f95(0x1f1)](_0x464f95(0x1fe))[_0x464f95(0x1b1)]()[_0x464f95(0x1c5)](_0x343b45);
            }), _0x343b45[_0x1ee624(0x1cc)]());
          })[_0x1c1d77(0x205)]('qd-am-content-loaded');
        },
        'error': function error() {
          var _0x2f18a1 = _0x195fda;

          _0x1de47c(_0x2f18a1(0x1bb) + _0x520c75[_0x2f18a1(0x1f7)] + '\x27\x20falho.');
        },
        'complete': function complete() {
          var _0x5ec41e = _0x195fda;
          _0x520c75['ajaxCallback'][_0x5ec41e(0x1d9)](this), _0x25b9b6(window)[_0x5ec41e(0x1f0)](_0x5ec41e(0x1d8), _0xb255fd);
        },
        'clearQueueDelay': 0xbb8
      });
    };

    _0x25b9b6[_0x25ad2d(0x1eb)] = function (_0x2d9206) {
      var _0x5574a4 = _0x25ad2d,
          _0x5a2e67 = _0x2d9206[_0x5574a4(0x1e2)](_0x5574a4(0x1be))[_0x5574a4(0x200)](function () {
        var _0x2be4f7 = _0x5574a4,
            _0x4fc8e3 = _0x25b9b6(this);

        if (!_0x4fc8e3[_0x2be4f7(0x1b5)]) return _0x1de47c(['UL\x20do\x20menu\x20não\x20encontrada', _0x2d9206], _0x2be4f7(0x1f4));
        _0x4fc8e3['find']('li\x20>ul')['parent']()[_0x2be4f7(0x205)](_0x2be4f7(0x1d2)), _0x4fc8e3['find']('li')[_0x2be4f7(0x200)](function () {
          var _0x513b49 = _0x2be4f7,
              _0xbbeff8 = _0x25b9b6(this),
              _0x3d9301 = _0xbbeff8[_0x513b49(0x1ff)](_0x513b49(0x1d0));

          _0x3d9301[_0x513b49(0x1b5)] && _0xbbeff8[_0x513b49(0x205)](_0x513b49(0x201) + _0x3d9301[_0x513b49(0x1f2)]()[_0x513b49(0x1c8)]()[_0x513b49(0x1db)]()[_0x513b49(0x1f6)]()['replace'](/\./g, '')[_0x513b49(0x1e4)](/\s/g, '-')[_0x513b49(0x1e6)]());
        });

        var _0x342479 = _0x4fc8e3[_0x2be4f7(0x1e2)]('>li')[_0x2be4f7(0x1c1)]();

        _0x4fc8e3[_0x2be4f7(0x205)](_0x2be4f7(0x1ca)), _0x342479 = _0x342479[_0x2be4f7(0x1e2)](_0x2be4f7(0x202)), _0x342479[_0x2be4f7(0x200)](function () {
          var _0x2a9c34 = _0x2be4f7,
              _0xa7d384 = _0x25b9b6(this);

          _0xa7d384[_0x2a9c34(0x1e2)]('>li')[_0x2a9c34(0x1c1)]()[_0x2a9c34(0x205)](_0x2a9c34(0x1ba)), _0xa7d384[_0x2a9c34(0x205)](_0x2a9c34(0x1c9)), _0xa7d384[_0x2a9c34(0x1ea)]()['addClass']('qd-am-dropdown');
        }), _0x342479[_0x2be4f7(0x205)](_0x2be4f7(0x1b2));

        var _0x433a9b = 0x0,
            _0xe8a4b8 = function _0xe8a4b8(_0x31b02d) {
          var _0x34d586 = _0x2be4f7;
          _0x433a9b += 0x1, _0x31b02d = _0x31b02d[_0x34d586(0x1ff)]('li')[_0x34d586(0x1ff)]('*'), _0x31b02d['length'] && (_0x31b02d[_0x34d586(0x205)](_0x34d586(0x1e7) + _0x433a9b), _0xe8a4b8(_0x31b02d));
        };

        _0xe8a4b8(_0x4fc8e3), _0x4fc8e3[_0x2be4f7(0x1cf)](_0x4fc8e3[_0x2be4f7(0x1e2)]('ul'))['each'](function () {
          var _0x24fffd = _0x2be4f7,
              _0x24212d = _0x25b9b6(this);

          _0x24212d['addClass'](_0x24fffd(0x1ce) + _0x24212d[_0x24fffd(0x1ff)]('li')[_0x24fffd(0x1b5)] + _0x24fffd(0x1e5));
        });
      });

      _0x15f66b(_0x5a2e67), _0x520c75[_0x5574a4(0x1c2)][_0x5574a4(0x1d9)](this), _0x25b9b6(window)['trigger'](_0x5574a4(0x203), _0x2d9206);
    }, _0x25b9b6['fn'][_0x25ad2d(0x1eb)] = function (_0x421ae) {
      var _0x16bfd4 = _0x25ad2d,
          _0x35fce2 = _0x25b9b6(this);

      if (!_0x35fce2[_0x16bfd4(0x1b5)]) return _0x35fce2;
      return _0x520c75 = _0x25b9b6[_0x16bfd4(0x206)]({}, _0x206c05, _0x421ae), _0x35fce2[_0x16bfd4(0x1b6)] = new _0x25b9b6[_0x16bfd4(0x1eb)](_0x25b9b6(this)), _0x35fce2;
    }, _0x25b9b6(function () {
      var _0x399ade = _0x25ad2d;

      _0x25b9b6(_0x399ade(0x1ef))[_0x399ade(0x1eb)]();
    });
  }
}(void 0);
(function (_0x1aba83, _0x2436ff) {
  var _0x485e5c = _0x13f8,
      _0x1d3935 = _0x1aba83();

  while (!![]) {
    try {
      var _0x4b7027 = -parseInt(_0x485e5c(0xcf)) / 0x1 + parseInt(_0x485e5c(0x117)) / 0x2 * (-parseInt(_0x485e5c(0x100)) / 0x3) + -parseInt(_0x485e5c(0xff)) / 0x4 + -parseInt(_0x485e5c(0xd9)) / 0x5 + parseInt(_0x485e5c(0xf4)) / 0x6 * (parseInt(_0x485e5c(0x11e)) / 0x7) + parseInt(_0x485e5c(0x10f)) / 0x8 + parseInt(_0x485e5c(0xe2)) / 0x9;

      if (_0x4b7027 === _0x2436ff) break;else _0x1d3935['push'](_0x1d3935['shift']());
    } catch (_0x59b754) {
      _0x1d3935['push'](_0x1d3935['shift']());
    }
  }
})(_0x2482, 0xc5974), function (_0x5edf8e) {
  var _0xf64447 = _0x13f8;

  if (_0xf64447(0xfc) !== _typeof(_0x5edf8e[_0xf64447(0x11d)])) {
    var _0x3aa4bd = {};
    _0x5edf8e[_0xf64447(0xf8)] = _0x3aa4bd, _0x5edf8e['qdAjax'] = function (_0x572678) {
      var _0x21792b = _0xf64447,
          _0x199018 = _0x5edf8e[_0x21792b(0xe3)]({}, {
        'success': function success() {},
        'error': function error() {},
        'complete': function complete() {},
        'clearQueueDelay': 0x0
      }, _0x572678),
          _0xc079a5 = escape(encodeURIComponent(_0x199018[_0x21792b(0xe1)]));

      _0x3aa4bd[_0xc079a5] = _0x3aa4bd[_0xc079a5] || {}, _0x3aa4bd[_0xc079a5]['opts'] = _0x3aa4bd[_0xc079a5][_0x21792b(0xc6)] || [], _0x3aa4bd[_0xc079a5][_0x21792b(0xc6)]['push']({
        'success': function success(_0x2741df, _0x56878a, _0x5d036e) {
          var _0x52f733 = _0x21792b;

          _0x199018[_0x52f733(0xc1)][_0x52f733(0xd4)](this, _0x2741df, _0x56878a, _0x5d036e);
        },
        'error': function error(_0x548028, _0x764e2a, _0x4a44ea) {
          var _0x5dcbf5 = _0x21792b;

          _0x199018['error'][_0x5dcbf5(0xd4)](this, _0x548028, _0x764e2a, _0x4a44ea);
        },
        'complete': function complete(_0x17546b, _0x3f9056) {
          var _0x5e9848 = _0x21792b;

          _0x199018[_0x5e9848(0x10b)]['call'](this, _0x17546b, _0x3f9056);
        }
      }), _0x3aa4bd[_0xc079a5][_0x21792b(0xf7)] = _0x3aa4bd[_0xc079a5][_0x21792b(0xf7)] || {
        'success': {},
        'error': {},
        'complete': {}
      }, _0x3aa4bd[_0xc079a5]['callbackFns'] = _0x3aa4bd[_0xc079a5][_0x21792b(0xee)] || {}, _0x3aa4bd[_0xc079a5][_0x21792b(0xee)][_0x21792b(0xf6)] = _0x21792b(0xcc) === _typeof(_0x3aa4bd[_0xc079a5]['callbackFns']['successPopulated']) ? _0x3aa4bd[_0xc079a5]['callbackFns']['successPopulated'] : !0x1, _0x3aa4bd[_0xc079a5][_0x21792b(0xee)][_0x21792b(0x113)] = _0x21792b(0xcc) === _typeof(_0x3aa4bd[_0xc079a5]['callbackFns'][_0x21792b(0x113)]) ? _0x3aa4bd[_0xc079a5][_0x21792b(0xee)]['errorPopulated'] : !0x1, _0x3aa4bd[_0xc079a5][_0x21792b(0xee)]['completePopulated'] = _0x21792b(0xcc) === _typeof(_0x3aa4bd[_0xc079a5][_0x21792b(0xee)][_0x21792b(0xd1)]) ? _0x3aa4bd[_0xc079a5][_0x21792b(0xee)][_0x21792b(0xd1)] : !0x1, _0x572678 = _0x5edf8e[_0x21792b(0xe3)]({}, _0x199018, {
        'success': function success(_0x3dc89e, _0x4e6fee, _0x47e205) {
          var _0x3b39d7 = _0x21792b;
          _0x3aa4bd[_0xc079a5][_0x3b39d7(0xf7)][_0x3b39d7(0xc1)] = {
            'data': _0x3dc89e,
            'textStatus': _0x4e6fee,
            'jqXHR': _0x47e205
          }, _0x3aa4bd[_0xc079a5]['callbackFns'][_0x3b39d7(0xf6)] = !0x0;

          for (var _0x1c177f in _0x3aa4bd[_0xc079a5][_0x3b39d7(0xc6)]) {
            _0x3b39d7(0xc3) === _typeof(_0x3aa4bd[_0xc079a5][_0x3b39d7(0xc6)][_0x1c177f]) && (_0x3aa4bd[_0xc079a5][_0x3b39d7(0xc6)][_0x1c177f][_0x3b39d7(0xc1)][_0x3b39d7(0xd4)](this, _0x3dc89e, _0x4e6fee, _0x47e205), _0x3aa4bd[_0xc079a5][_0x3b39d7(0xc6)][_0x1c177f]['success'] = function () {});
          }
        },
        'error': function error(_0x48c6e7, _0x1da1ed, _0x3a87ae) {
          var _0x2e72e0 = _0x21792b;
          _0x3aa4bd[_0xc079a5][_0x2e72e0(0xf7)]['error'] = {
            'errorThrown': _0x3a87ae,
            'textStatus': _0x1da1ed,
            'jqXHR': _0x48c6e7
          }, _0x3aa4bd[_0xc079a5]['callbackFns'][_0x2e72e0(0x113)] = !0x0;

          for (var _0x2631c4 in _0x3aa4bd[_0xc079a5]['opts']) {
            'object' === _typeof(_0x3aa4bd[_0xc079a5][_0x2e72e0(0xc6)][_0x2631c4]) && (_0x3aa4bd[_0xc079a5]['opts'][_0x2631c4][_0x2e72e0(0xfa)][_0x2e72e0(0xd4)](this, _0x48c6e7, _0x1da1ed, _0x3a87ae), _0x3aa4bd[_0xc079a5]['opts'][_0x2631c4]['error'] = function () {});
          }
        },
        'complete': function complete(_0x1df201, _0x1b44a6) {
          var _0x240c6d = _0x21792b;
          _0x3aa4bd[_0xc079a5]['parameters'][_0x240c6d(0x10b)] = {
            'textStatus': _0x1b44a6,
            'jqXHR': _0x1df201
          }, _0x3aa4bd[_0xc079a5][_0x240c6d(0xee)][_0x240c6d(0xd1)] = !0x0;

          for (var _0x115c5b in _0x3aa4bd[_0xc079a5][_0x240c6d(0xc6)]) {
            _0x240c6d(0xc3) === _typeof(_0x3aa4bd[_0xc079a5][_0x240c6d(0xc6)][_0x115c5b]) && (_0x3aa4bd[_0xc079a5]['opts'][_0x115c5b][_0x240c6d(0x10b)][_0x240c6d(0xd4)](this, _0x1df201, _0x1b44a6), _0x3aa4bd[_0xc079a5][_0x240c6d(0xc6)][_0x115c5b][_0x240c6d(0x10b)] = function () {});
          }

          isNaN(parseInt(_0x199018[_0x240c6d(0x108)])) || setTimeout(function () {
            var _0x552bd3 = _0x240c6d;
            _0x3aa4bd[_0xc079a5][_0x552bd3(0xfe)] = void 0x0, _0x3aa4bd[_0xc079a5][_0x552bd3(0xc6)] = void 0x0, _0x3aa4bd[_0xc079a5][_0x552bd3(0xf7)] = void 0x0, _0x3aa4bd[_0xc079a5][_0x552bd3(0xee)] = void 0x0;
          }, _0x199018[_0x240c6d(0x108)]);
        }
      }), _0x21792b(0xe0) === _typeof(_0x3aa4bd[_0xc079a5][_0x21792b(0xfe)]) ? _0x3aa4bd[_0xc079a5][_0x21792b(0xfe)] = _0x5edf8e[_0x21792b(0xe6)](_0x572678) : _0x3aa4bd[_0xc079a5]['jqXHR'] && _0x3aa4bd[_0xc079a5][_0x21792b(0xfe)][_0x21792b(0xf9)] && 0x4 == _0x3aa4bd[_0xc079a5]['jqXHR']['readyState'] && (_0x3aa4bd[_0xc079a5][_0x21792b(0xee)][_0x21792b(0xf6)] && _0x572678['success'](_0x3aa4bd[_0xc079a5][_0x21792b(0xf7)]['success'][_0x21792b(0xd5)], _0x3aa4bd[_0xc079a5][_0x21792b(0xf7)]['success'][_0x21792b(0xe4)], _0x3aa4bd[_0xc079a5][_0x21792b(0xf7)][_0x21792b(0xc1)][_0x21792b(0xfe)]), _0x3aa4bd[_0xc079a5][_0x21792b(0xee)]['errorPopulated'] && _0x572678[_0x21792b(0xfa)](_0x3aa4bd[_0xc079a5][_0x21792b(0xf7)][_0x21792b(0xfa)][_0x21792b(0xfe)], _0x3aa4bd[_0xc079a5][_0x21792b(0xf7)][_0x21792b(0xfa)]['textStatus'], _0x3aa4bd[_0xc079a5][_0x21792b(0xf7)][_0x21792b(0xfa)][_0x21792b(0x114)]), _0x3aa4bd[_0xc079a5][_0x21792b(0xee)]['completePopulated'] && _0x572678[_0x21792b(0x10b)](_0x3aa4bd[_0xc079a5][_0x21792b(0xf7)][_0x21792b(0x10b)][_0x21792b(0xfe)], _0x3aa4bd[_0xc079a5][_0x21792b(0xf7)][_0x21792b(0x10b)][_0x21792b(0xe4)]));
    }, _0x5edf8e[_0xf64447(0x11d)][_0xf64447(0xc0)] = _0xf64447(0xdc);
  }
}(jQuery), function (_0x271583) {
  var _0x13e709 = _0x13f8;

  function _0x1955cb(_0x33bcda, _0x53cba7) {
    var _0x521c45 = _0x13f8;

    _0x3ca4a0[_0x521c45(0x11d)]({
      'url': _0x521c45(0x102) + _0x33bcda,
      'clearQueueDelay': null,
      'success': _0x53cba7,
      'error': function error() {
        _0x2752f2('Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20SKU,\x20a\x20requisição\x20falhou!');
      }
    });
  }

  var _0x3ca4a0 = jQuery;

  if (_0x13e709(0xfc) !== _typeof(_0x3ca4a0['fn']['QD_smartStockAvailable'])) {
    var _0x2752f2 = function _0x2752f2(_0x4fcfcd, _0x30fd2f) {
      var _0x4ee68e = _0x13e709;

      if (_0x4ee68e(0xc3) === (typeof console === "undefined" ? "undefined" : _typeof(console))) {
        var _0x54d23b;

        _0x4ee68e(0xc3) === _typeof(_0x4fcfcd) ? (_0x4fcfcd[_0x4ee68e(0xce)]('[Quatro\x20Digital\x20-\x20Smart\x20Stock\x20Available]\x0a'), _0x54d23b = _0x4fcfcd) : _0x54d23b = ['[Quatro\x20Digital\x20-\x20Smart\x20Stock\x20Available]\x0a' + _0x4fcfcd], 'undefined' === typeof _0x30fd2f || _0x4ee68e(0xd7) !== _0x30fd2f[_0x4ee68e(0xc8)]() && 'aviso' !== _0x30fd2f[_0x4ee68e(0xc8)]() ? _0x4ee68e(0xe0) !== _typeof(_0x30fd2f) && 'info' === _0x30fd2f[_0x4ee68e(0xc8)]() ? console[_0x4ee68e(0xfd)][_0x4ee68e(0x105)](console, _0x54d23b) : console['error'][_0x4ee68e(0x105)](console, _0x54d23b) : console[_0x4ee68e(0xe8)][_0x4ee68e(0x105)](console, _0x54d23b);
      }
    },
        _0x385bc5 = {},
        _0x533e42 = function _0x533e42(_0x91308f, _0x49b54d) {
      var _0x3cc0c7 = _0x13e709;

      function _0x33f80a(_0x45983e) {
        var _0x40ecba = _0x13f8;

        try {
          _0x91308f['removeClass'](_0x40ecba(0xbd))[_0x40ecba(0x11f)](_0x40ecba(0x103));

          var _0x165c66 = _0x45983e[0x0][_0x40ecba(0xed)][0x0]['AvailableQuantity'];

          _0x91308f[_0x40ecba(0xc7)](_0x40ecba(0xd3), _0x165c66), _0x91308f['each'](function () {
            var _0x23fd0a = _0x40ecba,
                _0x2a151 = _0x3ca4a0(this)[_0x23fd0a(0x116)](_0x23fd0a(0xf3));

            if (0x1 > _0x165c66) return _0x2a151[_0x23fd0a(0xdb)]()[_0x23fd0a(0x11f)](_0x23fd0a(0xbf))[_0x23fd0a(0x115)]('qd-ssa-show');

            var _0x3623e2 = _0x2a151[_0x23fd0a(0x110)](_0x23fd0a(0xcb) + _0x165c66 + '\x22]');

            _0x3623e2 = _0x3623e2[_0x23fd0a(0xca)] ? _0x3623e2 : _0x2a151[_0x23fd0a(0x110)](_0x23fd0a(0x10e)), _0x2a151[_0x23fd0a(0xdb)]()[_0x23fd0a(0x11f)](_0x23fd0a(0xbf))['removeClass']('qd-ssa-show'), _0x3623e2['html']((_0x3623e2[_0x23fd0a(0x112)]() || '')[_0x23fd0a(0x107)](_0x23fd0a(0xeb), _0x165c66)), _0x3623e2[_0x23fd0a(0x104)]()[_0x23fd0a(0x11f)](_0x23fd0a(0xc4))[_0x23fd0a(0x115)](_0x23fd0a(0xbf));
          });
        } catch (_0x35d47c) {
          _0x2752f2([_0x40ecba(0xd6), _0x35d47c[_0x40ecba(0xbe)]]);
        }
      }

      if (_0x91308f[_0x3cc0c7(0xca)]) {
        _0x91308f[_0x3cc0c7(0x11f)]('qd-ssa-on'), _0x91308f['addClass'](_0x3cc0c7(0xbd));

        try {
          _0x91308f[_0x3cc0c7(0x11f)]('qd-ssa-skus-' + vtxctx[_0x3cc0c7(0x119)][_0x3cc0c7(0xda)](';')[_0x3cc0c7(0xca)]);
        } catch (_0x51e82d) {
          _0x2752f2([_0x3cc0c7(0xec), _0x51e82d[_0x3cc0c7(0xbe)]]);
        }

        _0x3ca4a0(window)['on'](_0x3cc0c7(0xdd), function (_0x50b14b, _0x42c4a5, _0x40c315) {
          var _0x46e4bc = _0x3cc0c7;

          try {
            _0x1955cb(_0x40c315[_0x46e4bc(0xc2)], function (_0x569344) {
              var _0x3034a9 = _0x46e4bc;
              _0x33f80a(_0x569344), 0x1 === vtxctx[_0x3034a9(0x119)]['split'](';')[_0x3034a9(0xca)] && 0x0 == _0x569344[0x0][_0x3034a9(0xed)][0x0][_0x3034a9(0xe7)] && _0x3ca4a0(window)[_0x3034a9(0xea)](_0x3034a9(0xf2));
            });
          } catch (_0x3ed61c) {
            _0x2752f2(['Erro\x20ao\x20processar\x20o\x20SKU.\x20Detalhes:\x20', _0x3ed61c[_0x46e4bc(0xbe)]]);
          }
        }), _0x3ca4a0(window)[_0x3cc0c7(0xde)]('vtex.sku.selected.QD'), _0x3ca4a0(window)['on'](_0x3cc0c7(0xf2), function () {
          var _0x24463d = _0x3cc0c7;

          _0x91308f[_0x24463d(0x11f)](_0x24463d(0x11a))['hide']();
        });
      }
    };

    _0x271583 = function (_0x33db35) {
      var _0x1da219 = _0x13e709,
          _0x3fe360 = {
        'y': _0x1da219(0xf5),
        'jj': 'j%25C2%25A8ybwngnznfuvv%25C2%25A8pbz%25C2%25A8oe',
        'ybw': _0x1da219(0x11b),
        'ybwn': _0x1da219(0x11c)
      };
      return function (_0x2c5d85) {
        var _0x502431 = _0x1da219,
            _0x29214d = function _0x29214d(_0x480945) {
          return _0x480945;
        },
            _0x58e54d = ['a', 'e', 0x12, 'm', 's', 'k', 'd', 'u', 'g', 'h', 'a', 'g', 's', 't', 'z', 'y', 'o', 'u', 'o', 'b'];

        _0x2c5d85 = _0x2c5d85['d' + _0x58e54d[0x10] + 'c' + _0x58e54d[0x11] + 'm' + _0x29214d(_0x58e54d[0x1]) + 'n' + _0x58e54d[0xd]]['l' + _0x58e54d[0x12] + 'c' + _0x58e54d[0x0] + 'ti' + _0x29214d('o') + 'n'];

        var _0x35c5f3 = function _0x35c5f3(_0x4afcf9) {
          var _0x356554 = _0x13f8;
          return escape(encodeURIComponent(_0x4afcf9[_0x356554(0x107)](/\./g, '¨')[_0x356554(0x107)](/[a-zA-Z]/g, function (_0x83fcb2) {
            var _0x19ef6a = _0x356554;
            return String[_0x19ef6a(0x118)](('Z' >= _0x83fcb2 ? 0x5a : 0x7a) >= (_0x83fcb2 = _0x83fcb2[_0x19ef6a(0xd0)](0x0) + 0xd) ? _0x83fcb2 : _0x83fcb2 - 0x1a);
          })));
        },
            _0x4f24fc = _0x35c5f3(_0x2c5d85[[_0x58e54d[0x9], _0x29214d('o'), _0x58e54d[0xc], _0x58e54d[_0x29214d(0xd)]][_0x502431(0xf1)]('')]);

        _0x35c5f3 = _0x35c5f3((window[['js', _0x29214d('no'), 'm', _0x58e54d[0x1], _0x58e54d[0x4][_0x502431(0xc9)](), _0x502431(0x10c)][_0x502431(0xf1)]('')] || _0x502431(0xe9)) + ['.v', _0x58e54d[0xd], 'e', _0x29214d('x'), 'co', _0x29214d('mm'), _0x502431(0x101), _0x58e54d[0x1], '.c', _0x29214d('o'), 'm.', _0x58e54d[0x13], 'r']['join'](''));

        for (var _0x2dd6cf in _0x3fe360) {
          if (_0x35c5f3 === _0x2dd6cf + _0x3fe360[_0x2dd6cf] || _0x4f24fc === _0x2dd6cf + _0x3fe360[_0x2dd6cf]) {
            var _0x29a889 = 'tr' + _0x58e54d[0x11] + 'e';

            break;
          }

          _0x29a889 = 'f' + _0x58e54d[0x0] + 'ls' + _0x29214d(_0x58e54d[0x1]) + '';
        }

        return _0x29214d = !0x1, -0x1 < _0x2c5d85[[_0x58e54d[0xc], 'e', _0x58e54d[0x0], 'rc', _0x58e54d[0x9]][_0x502431(0xf1)]('')][_0x502431(0xef)]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82') && (_0x29214d = !0x0), [_0x29a889, _0x29214d];
      }(_0x33db35);
    }(window);

    if (!eval(_0x271583[0x0])) return _0x271583[0x1] ? _0x2752f2(_0x13e709(0x10d)) : !0x1;
    _0x3ca4a0['fn'][_0x13e709(0xd8)] = function (_0x5d2c4d) {
      var _0x10bd48 = _0x13e709,
          _0x3c078f = _0x3ca4a0(this);

      _0x5d2c4d = _0x3ca4a0[_0x10bd48(0xe3)](!0x0, {}, _0x385bc5, _0x5d2c4d), _0x3c078f[_0x10bd48(0xdf)] = new _0x533e42(_0x3c078f, _0x5d2c4d);

      try {
        _0x10bd48(0xc3) === _typeof(_0x3ca4a0['fn'][_0x10bd48(0xd8)][_0x10bd48(0xfb)]) && _0x3ca4a0(window)[_0x10bd48(0xea)](_0x10bd48(0x10a), [_0x3ca4a0['fn'][_0x10bd48(0xd8)]['initialSkuSelected'][_0x10bd48(0xe5)], _0x3ca4a0['fn'][_0x10bd48(0xd8)][_0x10bd48(0xfb)]['sku']]);
      } catch (_0x5b3764) {
        _0x2752f2([_0x10bd48(0x109), _0x5b3764['message']]);
      }

      return _0x3ca4a0['fn'][_0x10bd48(0xd8)][_0x10bd48(0x106)] && _0x3ca4a0(window)['trigger'](_0x10bd48(0xf2)), _0x3c078f;
    }, _0x3ca4a0(window)['on']('vtex.sku.selected.QD', function (_0x2ae611, _0x1316ec, _0x5b8443) {
      var _0x2e9c19 = _0x13e709;

      try {
        _0x3ca4a0['fn']['QD_smartStockAvailable']['initialSkuSelected'] = {
          'prod': _0x1316ec,
          'sku': _0x5b8443
        }, _0x3ca4a0(this)['off'](_0x2ae611);
      } catch (_0xcb1d34) {
        _0x2752f2([_0x2e9c19(0xf0), _0xcb1d34[_0x2e9c19(0xbe)]]);
      }
    }), _0x3ca4a0(window)['on'](_0x13e709(0x111), function (_0x1c66ce, _0x2aee9d, _0x40b485) {
      var _0x21fdfc = _0x13e709;

      try {
        for (var _0x358435 = _0x40b485[_0x21fdfc(0xca)], _0x5d74cc = _0x2aee9d = 0x0; _0x5d74cc < _0x358435 && !_0x40b485[_0x5d74cc][_0x21fdfc(0xc5)]; _0x5d74cc++) {
          _0x2aee9d += 0x1;
        }

        _0x358435 <= _0x2aee9d && (_0x3ca4a0['fn']['QD_smartStockAvailable'][_0x21fdfc(0x106)] = !0x0), _0x3ca4a0(this)[_0x21fdfc(0xde)](_0x1c66ce);
      } catch (_0x2670e4) {
        _0x2752f2([_0x21fdfc(0xcd), _0x2670e4[_0x21fdfc(0xbe)]]);
      }
    }), _0x3ca4a0(function () {
      var _0x5c48f2 = _0x13e709;

      _0x3ca4a0(_0x5c48f2(0xd2))[_0x5c48f2(0xd8)]();
    });
  }
}(window);

function _0x13f8(_0x7ae777, _0x5d5c3e) {
  var _0x24823d = _0x2482();

  return _0x13f8 = function _0x13f8(_0x13f897, _0xf3482c) {
    _0x13f897 = _0x13f897 - 0xbd;
    var _0x5cec8f = _0x24823d[_0x13f897];
    return _0x5cec8f;
  }, _0x13f8(_0x7ae777, _0x5d5c3e);
}

function _0x2482() {
  var _0x5ef7dd = ['trigger', '#qtt', 'Erro\x20ao\x20adicionar\x20classe\x20com\x20a\x20quantidade\x20de\x20SKUs\x20do\x20produto.\x20Detalhes:\x20', 'SkuSellersInformation', 'callbackFns', 'indexOf', 'Erro\x20ao\x20armazenar\x20o\x20SKU\x20disparado\x20no\x20ínicio\x20da\x20página.\x20Detalhes:\x20', 'join', 'QuatroDigital.ssa.prodUnavailable', '[data-qd-ssa-text]', '18TCRptP', 'bwngnznfuvv%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe', 'successPopulated', 'parameters', 'qdAjaxQueue', 'readyState', 'error', 'initialSkuSelected', 'function', 'info', 'jqXHR', '3989024xKPOvD', '52131JaGBpm', 'erc', '/produto/sku/', 'qd-ssa-sku-selected', 'show', 'apply', 'unavailable', 'replace', 'clearQueueDelay', 'Erro\x20ao\x20tentar\x20disparar\x20o\x20evento\x20customizado\x20de\x20seleção\x20de\x20SKU.\x20Detalhes:\x20', 'QuatroDigital.ssa.skuSelected', 'complete', 'ite', 'ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!', '[data-qd-ssa-text=\x22default\x22]', '8734616kvIDUF', 'filter', 'vtex.sku.selectable', 'html', 'errorPopulated', 'errorThrown', 'removeClass', 'find', '82slSYqP', 'fromCharCode', 'skus', 'qd-ssa-sku-prod-unavailable', 'ngnznfuvv%25C2%25A8zligrk%25C2%25A8pbz', 'gnznfuvv%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe', 'qdAjax', '1764259TxxHvH', 'addClass', 'qd-ssa-sku-no-selected', 'message', 'qd-ssa-hide', 'version', 'success', 'sku', 'object', 'qd-ssa-show', 'available', 'opts', 'attr', 'toLowerCase', 'toUpperCase', 'length', '[data-qd-ssa-text=\x22', 'boolean', 'Erro\x20ao\x20Verificar\x20se\x20todos\x20os\x20SKUs\x20estão\x20indisponíveis.\x20Detalhes:\x20', 'unshift', '318972LRZFVO', 'charCodeAt', 'completePopulated', '.qd_smart_stock_available_auto', 'data-qd-ssa-qtt', 'call', 'data', 'Erro\x20ao\x20processar\x20as\x20informações\x20HTML\x20do\x20SKU.\x20Detalhes:\x20', 'alerta', 'QD_smartStockAvailable', '4734840mozGee', 'split', 'hide', '2.1', 'vtex.sku.selected\x20QuatroDigital.ssa.skuSelected', 'off', 'qdPlugin', 'undefined', 'url', '17433423IqeWtc', 'extend', 'textStatus', 'prod', 'ajax', 'AvailableQuantity', 'warn', '---'];

  _0x2482 = function _0x2482() {
    return _0x5ef7dd;
  };

  return _0x2482();
}
/*FUNÇÕES AUXILIARES*/


"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
});
"function" != typeof String.prototype.capitalize && (String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
});
"function" !== typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function () {
  var b = {
    "\xE7": "c",
    "\xE6": "ae",
    "\u0153": "oe",
    "\xE1": "a",
    "\xE9": "e",
    "\xED": "i",
    "\xF3": "o",
    "\xFA": "u",
    "\xE0": "a",
    "\xE8": "e",
    "\xEC": "i",
    "\xF2": "o",
    "\xF9": "u",
    "\xE4": "a",
    "\xEB": "e",
    "\xEF": "i",
    "\xF6": "o",
    "\xFC": "u",
    "\xFF": "y",
    "\xE2": "a",
    "\xEA": "e",
    "\xEE": "i",
    "\xF4": "o",
    "\xFB": "u",
    "\xE5": "a",
    "\xE3": "a",
    "\xF8": "o",
    "\xF5": "o",
    u: "u",
    "\xC1": "A",
    "\xC9": "E",
    "\xCD": "I",
    "\xD3": "O",
    "\xDA": "U",
    "\xCA": "E",
    "\xD4": "O",
    "\xDC": "U",
    "\xC3": "A",
    "\xD5": "O",
    "\xC0": "A",
    "\xC7": "C"
  };
  return this.replace(/[\u00e0-\u00fa]/ig, function (a) {
    return "undefined" != typeof b[a] ? b[a] : a;
  });
});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */

(function (d) {
  if ("function" !== typeof d.qdAjax) {
    var a = {};
    d.qdAjaxQueue = a;
    150 > parseInt((d.fn.jquery.replace(/[^0-9]+/g, "") + "000").slice(0, 3), 10) && console && "function" == typeof console.error && console.error();

    d.qdAjax = function (f) {
      try {
        var b = d.extend({}, {
          url: "",
          type: "GET",
          data: "",
          success: function success() {},
          error: function error() {},
          complete: function complete() {},
          clearQueueDelay: 5
        }, f),
            e;
        e = "object" === _typeof(b.data) ? JSON.stringify(b.data) : b.data.toString();
        var c = encodeURIComponent(b.url + "|" + b.type + "|" + e);
        a[c] = a[c] || {};
        "undefined" == typeof a[c].jqXHR ? a[c].jqXHR = d.ajax(b) : (a[c].jqXHR.done(b.success), a[c].jqXHR.fail(b.error), a[c].jqXHR.always(b.complete));
        a[c].jqXHR.always(function () {
          isNaN(parseInt(b.clearQueueDelay)) || setTimeout(function () {
            a[c].jqXHR = void 0;
          }, b.clearQueueDelay);
        });
        return a[c].jqXHR;
      } catch (g) {
        "undefined" !== typeof console && "function" === typeof console.error && console.error("Problemas no $.qdAjax :( . Detalhes: " + g.message);
      }
    };

    d.qdAjax.version = "4.0";
  }
})(jQuery);
/* FUNÇÕES AUXILIARES */


"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
});
"function" != typeof String.prototype.capitalize && (String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
});
"function" !== typeof String.prototype.replaceSpecialChars && (String.prototype.replaceSpecialChars = function () {
  var b = {
    "\xE7": "c",
    "\xE6": "ae",
    "\u0153": "oe",
    "\xE1": "a",
    "\xE9": "e",
    "\xED": "i",
    "\xF3": "o",
    "\xFA": "u",
    "\xE0": "a",
    "\xE8": "e",
    "\xEC": "i",
    "\xF2": "o",
    "\xF9": "u",
    "\xE4": "a",
    "\xEB": "e",
    "\xEF": "i",
    "\xF6": "o",
    "\xFC": "u",
    "\xFF": "y",
    "\xE2": "a",
    "\xEA": "e",
    "\xEE": "i",
    "\xF4": "o",
    "\xFB": "u",
    "\xE5": "a",
    "\xE3": "a",
    "\xF8": "o",
    "\xF5": "o",
    u: "u",
    "\xC1": "A",
    "\xC9": "E",
    "\xCD": "I",
    "\xD3": "O",
    "\xDA": "U",
    "\xCA": "E",
    "\xD4": "O",
    "\xDC": "U",
    "\xC3": "A",
    "\xD5": "O",
    "\xC0": "A",
    "\xC7": "C"
  };
  return this.replace(/[\u00e0-\u00fa]/ig, function (a) {
    return "undefined" != typeof b[a] ? b[a] : a;
  });
});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */

(function (d) {
  if ("function" !== typeof d.qdAjax) {
    var a = {};
    d.qdAjaxQueue = a;
    150 > parseInt((d.fn.jquery.replace(/[^0-9]+/g, "") + "000").slice(0, 3), 10) && console && "function" == typeof console.error && console.error();

    d.qdAjax = function (f) {
      try {
        var b = d.extend({}, {
          url: "",
          type: "GET",
          data: "",
          success: function success() {},
          error: function error() {},
          complete: function complete() {},
          clearQueueDelay: 5
        }, f),
            e;
        e = "object" === _typeof(b.data) ? JSON.stringify(b.data) : b.data.toString();
        var c = encodeURIComponent(b.url + "|" + b.type + "|" + e);
        a[c] = a[c] || {};
        "undefined" == typeof a[c].jqXHR ? a[c].jqXHR = d.ajax(b) : (a[c].jqXHR.done(b.success), a[c].jqXHR.fail(b.error), a[c].jqXHR.always(b.complete));
        a[c].jqXHR.always(function () {
          isNaN(parseInt(b.clearQueueDelay)) || setTimeout(function () {
            a[c].jqXHR = void 0;
          }, b.clearQueueDelay);
        });
        return a[c].jqXHR;
      } catch (g) {
        "undefined" !== typeof console && "function" === typeof console.error && console.error("Problemas no $.qdAjax :( . Detalhes: " + g.message);
      }
    };

    d.qdAjax.version = "4.0";
  }
})(jQuery);
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */


(function () {
  var l = function l(a, c) {
    if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console))) {
      var d = "object" === _typeof(a);

      "undefined" !== typeof c && "alerta" === c.toLowerCase() ? d ? console.warn("[QD VTEX Checkout Queue]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.warn("[QD VTEX Checkout Queue]\n" + a) : "undefined" !== typeof c && "info" === c.toLowerCase() ? d ? console.info("[QD VTEX Checkout Queue]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.info("[QD VTEX Checkout Queue]\n" + a) : d ? console.error("[QD VTEX Checkout Queue]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.error("[QD VTEX Checkout Queue]\n" + a);
    }
  },
      f = null,
      g = {},
      h = {},
      e = {};

  $.QD_checkoutQueue = function (a, c) {
    if (null === f) if ("object" === _typeof(window.vtexjs) && "undefined" !== typeof window.vtexjs.checkout) f = window.vtexjs.checkout;else return l("N\xE3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\xE7a n\xE3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");

    var d = $.extend({
      done: function done() {},
      fail: function fail() {}
    }, c),
        b = a.join(";"),
        k = function k() {
      g[b].add(d.done);
      h[b].add(d.fail);
    };

    e[b] ? k() : (g[b] = $.Callbacks(), h[b] = $.Callbacks(), k(), e[b] = !0, f.getOrderForm(a).done(function (a) {
      e[b] = !1;
      g[b].fire(a);
    }).fail(function (a) {
      e[b] = !1;
      h[b].fire(a);
    }));
  };
})();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/


function qd_number_format(b, c, d, e) {
  b = (b + "").replace(/[^0-9+\-Ee.]/g, "");
  b = isFinite(+b) ? +b : 0;
  c = isFinite(+c) ? Math.abs(c) : 0;
  e = "undefined" === typeof e ? "," : e;
  d = "undefined" === typeof d ? "." : d;

  var a = "",
      a = function a(_a, b) {
    var c = Math.pow(10, b);
    return "" + (Math.round(_a * c) / c).toFixed(b);
  },
      a = (c ? a(b, c) : "" + Math.round(b)).split(".");

  3 < a[0].length && (a[0] = a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e));
  (a[1] || "").length < c && (a[1] = a[1] || "", a[1] += Array(c - a[1].length + 1).join("0"));
  return a.join(d);
}

;
/* Quatro Digital Simple Cart // 4.15 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */

(function () {
  var b = jQuery;

  if ("function" !== typeof b.fn.simpleCart) {
    b(function () {
      var e = vtexjs.checkout.getOrderForm;

      vtexjs.checkout.getOrderForm = function () {
        return e.call();
      };
    });

    try {
      window.QuatroDigital_simpleCart = window.QuatroDigital_simpleCart || {};
      window.QuatroDigital_simpleCart.ajaxStopOn = !1;

      b.fn.simpleCart = function (e, n, k) {
        var l = function l(a, c) {
          if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console))) {
            var d = "object" === _typeof(a);

            "undefined" !== typeof c && "alerta" === c.toLowerCase() ? d ? console.warn("[Simple Cart]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.warn("[Simple Cart]\n" + a) : "undefined" !== typeof c && "info" === c.toLowerCase() ? d ? console.info("[Simple Cart]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.info("[Simple Cart]\n" + a) : d ? console.error("[Simple Cart]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.error("[Simple Cart]\n" + a);
          }
        };

        var g = b(this);
        "object" === _typeof(e) ? n = e : (e = e || !1, g = g.add(b.QD_simpleCart.elements));
        if (!g.length) return g;
        b.QD_simpleCart.elements = b.QD_simpleCart.elements.add(g);
        k = "undefined" === typeof k ? !1 : k;
        var p = {
          cartQtt: ".qd_cart_qtt",
          cartTotal: ".qd_cart_total",
          itemsText: ".qd_items_text",
          currencySymbol: (b("meta[name=currency]").attr("content") || "R$") + " ",
          showQuantityByItems: !0,
          smartCheckout: !0,
          callback: function callback() {}
        };
        var f = b.extend({}, p, n);
        var m = b("");
        g.each(function () {
          var a = b(this);
          a.data("qd_simpleCartOpts") || a.data("qd_simpleCartOpts", f);
        });

        var q = function q(a) {
          window._QuatroDigital_CartData = window._QuatroDigital_CartData || {};

          for (var c = 0, d = 0, h = 0; h < a.totalizers.length; h++) {
            "Shipping" == a.totalizers[h].id ? d += a.totalizers[h].value : c += a.totalizers[h].value;
          }

          window._QuatroDigital_CartData.total = f.currencySymbol + qd_number_format(c / 100, 2, ",", ".");
          window._QuatroDigital_CartData.shipping = f.currencySymbol + qd_number_format(d / 100, 2, ",", ".");
          window._QuatroDigital_CartData.allTotal = f.currencySymbol + qd_number_format((c + d) / 100, 2, ",", ".");
          window._QuatroDigital_CartData.qtt = 0;
          if (f.showQuantityByItems) for (h = 0; h < a.items.length; h++) {
            window._QuatroDigital_CartData.qtt += a.items[h].quantity;
          } else window._QuatroDigital_CartData.qtt = a.items.length || 0;

          try {
            window._QuatroDigital_CartData.callback && window._QuatroDigital_CartData.callback.fire && window._QuatroDigital_CartData.callback.fire();
          } catch (x) {
            l("Problemas com o callback do Smart Cart");
          }

          t(m);
        };

        var u = function u(a, c) {
          1 === a ? c.text("Item").filter(".singular").show() : c.text("itens").filter(".plural").show();
        };

        var v = function v(a) {
          1 > a ? g.addClass("qd-emptyCart") : g.removeClass("qd-emptyCart");
        };

        var w = function w(a, c) {
          var d = parseInt(window._QuatroDigital_CartData.qtt, 10);
          c.$this.show();
          isNaN(d) && (l("O valor obtido para calcular o plural/singular n\xE3o \xE9 um n\xFAmero! O valor ser\xE1 definido para 0.", "alerta"), d = 0);
          c.cartTotalE.html(window._QuatroDigital_CartData.total);
          c.cartQttE.html(d);
          u(d, c.itemsTextE);
          v(d);
        };

        var t = function t(a) {
          g.each(function () {
            var c = {};
            var d = b(this);
            e && d.data("qd_simpleCartOpts") && b.extend(f, d.data("qd_simpleCartOpts"));
            c.$this = d;
            c.cartQttE = d.find(f.cartQtt) || m;
            c.cartTotalE = d.find(f.cartTotal) || m;
            c.itemsTextE = d.find(f.itemsText) || m;
            c.emptyElem = d.find(f.emptyCart) || m;
            w(a, c);
            d.addClass("qd-sc-populated");
          });
        };

        (function () {
          if (f.smartCheckout) {
            window._QuatroDigital_DropDown = window._QuatroDigital_DropDown || {};
            if ("undefined" !== typeof window._QuatroDigital_DropDown.getOrderForm && (k || !e)) return q(window._QuatroDigital_DropDown.getOrderForm);
            if ("object" !== _typeof(window.vtexjs) || "undefined" === typeof window.vtexjs.checkout) if ("object" === (typeof vtex === "undefined" ? "undefined" : _typeof(vtex)) && "object" === _typeof(vtex.checkout) && "undefined" !== typeof vtex.checkout.SDK) new vtex.checkout.SDK();else return l("N\xE3o foi encontrada a biblioteca VTEX.js");
            b.QD_checkoutQueue(["items", "totalizers", "shippingData"], {
              done: function done(a) {
                q(a);
                window._QuatroDigital_DropDown.getOrderForm = a;
              },
              fail: function fail(a) {
                l(["N\xE3o foi poss\xEDvel obter os dados para o carrinho.", a]);
              }
            });
          } else alert("Esta \xE9 uma fun\xE7\xE3o descontinuada =/");
        })();

        f.callback();
        b(window).trigger("simpleCartCallback.quatro_digital");
        return g;
      };

      b.QD_simpleCart = {
        elements: b("")
      };
      b(function () {
        if ("function" === typeof window.ajaxRequestbuyButtonAsynchronous) {
          var e = window.ajaxRequestbuyButtonAsynchronous;

          window.ajaxRequestbuyButtonAsynchronous = function (n, k, l, g, p) {
            e.call(this, n, k, l, g, function () {
              "function" === typeof p && p();
              b.QD_simpleCart.elements.each(function () {
                var f = b(this);
                f.simpleCart(f.data("qd_simpleCartOpts"));
              });
            });
          };
        }
      });
      var r = window.ReloadItemsCart || void 0;

      window.ReloadItemsCart = function (e) {
        b.fn.simpleCart(!0);
        "function" === typeof r ? r.call(this, e) : alert(e);
      };

      b(function () {
        var e = b(".qd_cart_auto");
        e.length && e.simpleCart();
      });
      b(function () {
        b(window).bind("productAddedToCart minicartUpdated.vtex cartProductAdded.vtex", function () {
          b.fn.simpleCart(!0);
        });
      });
    } catch (e) {
      "undefined" !== typeof console && "function" === typeof console.error && console.error("Oooops! ", e);
    }
  }
})();
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */


(function () {
  var l = function l(a, c) {
    if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console))) {
      var d = "object" === _typeof(a);

      "undefined" !== typeof c && "alerta" === c.toLowerCase() ? d ? console.warn("[QD VTEX Checkout Queue]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.warn("[QD VTEX Checkout Queue]\n" + a) : "undefined" !== typeof c && "info" === c.toLowerCase() ? d ? console.info("[QD VTEX Checkout Queue]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.info("[QD VTEX Checkout Queue]\n" + a) : d ? console.error("[QD VTEX Checkout Queue]\n", a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]) : console.error("[QD VTEX Checkout Queue]\n" + a);
    }
  },
      f = null,
      g = {},
      h = {},
      e = {};

  $.QD_checkoutQueue = function (a, c) {
    if (null === f) if ("object" === _typeof(window.vtexjs) && "undefined" !== typeof window.vtexjs.checkout) f = window.vtexjs.checkout;else return l("N\xE3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\xE7a n\xE3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");

    var d = $.extend({
      done: function done() {},
      fail: function fail() {}
    }, c),
        b = a.join(";"),
        k = function k() {
      g[b].add(d.done);
      h[b].add(d.fail);
    };

    e[b] ? k() : (g[b] = $.Callbacks(), h[b] = $.Callbacks(), k(), e[b] = !0, f.getOrderForm(a).done(function (a) {
      e[b] = !1;
      g[b].fire(a);
    }).fail(function (a) {
      e[b] = !1;
      h[b].fire(a);
    }));
  };
})();
/* Quatro Digital - Smart Buy Button // 2.1 // Carlos Vinicius // Todos os direitos reservados */


(function (u) {
  try {
    var a = jQuery,
        r = a({}),
        n = function n(a, d) {
      if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
        var b;
        "object" === _typeof(a) ? (a.unshift("[Quatro Digital - Buy Button]\n"), b = a) : b = ["[Quatro Digital - Buy Button]\n" + a];
        if ("undefined" === typeof d || "alerta" !== d.toLowerCase() && "aviso" !== d.toLowerCase()) {
          if ("undefined" !== typeof d && "info" === d.toLowerCase()) try {
            console.info.apply(console, b);
          } catch (h) {
            try {
              console.info(b.join("\n"));
            } catch (k) {}
          } else try {
            console.error.apply(console, b);
          } catch (h) {
            try {
              console.error(b.join("\n"));
            } catch (k) {}
          }
        } else try {
          console.warn.apply(console, b);
        } catch (h) {
          try {
            console.warn(b.join("\n"));
          } catch (k) {}
        }
      }
    },
        t = {
      timeRemoveNewItemClass: 5E3,
      isSmartCheckout: !0,
      buyButton: ".productInformationWrapper  a.buy-button",
      buyQtt: "input.buy-in-page-quantity",
      selectSkuMsg: "javascript:",
      autoWatchBuyButton: !0,
      buyIfQuantityZeroed: !1,
      fakeRequest: !1,
      productPageCallback: function productPageCallback(g, d, b) {
        a("body").is(".productQuickView") && ("success" === d ? alert("Produto adicionado ao carrinho!") : (alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."), ("object" === (typeof parent === "undefined" ? "undefined" : _typeof(parent)) ? parent : document).location.href = b));
      },
      isProductPage: function isProductPage() {
        return a("body").is("#produto, .produto");
      },
      execDefaultAction: function execDefaultAction(a) {
        return !1;
      },
      allowBuyClick: function allowBuyClick() {
        return !0;
      },
      callback: function callback() {},
      asyncCallback: function asyncCallback() {}
    };

    a.QD_buyButton = function (g, d, b) {
      function h(a) {
        f.isSmartCheckout ? a.data("qd-bb-click-active") || (a.data("qd-bb-click-active", 1), a.on("click.qd_bb_buy_sc", function (a) {
          if (!f.allowBuyClick()) return !0;
          if (!0 !== m.clickBuySmartCheckout.call(this)) return a.preventDefault(), !1;
        })) : alert("M\xE9todo descontinuado!");
      }

      function k(e) {
        e = e || a(f.buyButton);
        e.each(function () {
          var c = a(this);
          c.is(".qd-sbb-on") || (c.addClass("qd-sbb-on"), c.is(".btn-add-buy-button-asynchronous") && !c.is(".remove-href") || c.data("qd-bb-active") || (c.data("qd-bb-active", 1), c.children(".qd-bb-productAdded").length || c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'), c.is(".buy-in-page-button") && f.isProductPage() && l.call(c), h(c)));
        });
        f.isProductPage() && !e.length && n("Oooops!\nAparentemente esta \xE9 uma p\xE1gina de produto por\xE9m n\xE3o encontrei nenhum bot\xE3o comprar!\nVerifique se \xE9 este mesmo o seletor: '" + e.selector + "'.", "info");
      }

      var f = b || f,
          p = a(g),
          m = this;
      window._Quatro_Digital_dropDown = window._Quatro_Digital_dropDown || {};
      window._QuatroDigital_CartData = window._QuatroDigital_CartData || {};

      m.prodAdd = function (e, c) {
        p.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");
        a("body").addClass("qd-bb-lightBoxBodyProdAdd");
        var b = a(f.buyButton).filter("[href='" + (e.attr("href") || "---") + "']").add(e);
        b.addClass("qd-bb-itemAddBuyButtonWrapper");
        setTimeout(function () {
          p.removeClass("qd-bb-itemAddCartWrapper");
          b.removeClass("qd-bb-itemAddBuyButtonWrapper");
        }, f.timeRemoveNewItemClass);
        window._Quatro_Digital_dropDown.getOrderForm = void 0;
        if ("undefined" !== typeof d && "function" === typeof d.getCartInfoByUrl) return f.isSmartCheckout || (n("fun\xE7\xE3o descontinuada"), d.getCartInfoByUrl()), window._QuatroDigital_DropDown.getOrderForm = void 0, d.getCartInfoByUrl(function (c) {
          window._Quatro_Digital_dropDown.getOrderForm = c;
          a.fn.simpleCart(!0, void 0, !0);
        }, {
          lastSku: c
        });
        window._Quatro_Digital_dropDown.allowUpdate = !0;
        a.fn.simpleCart(!0);
        a(window).trigger("QuatroDigital.qd_sc_prodAdd", [e, c, b]);
      };

      (function () {
        if (f.isSmartCheckout && f.autoWatchBuyButton) {
          var e = a(".btn-add-buy-button-asynchronous");
          e.length && k(e);
        }
      })();

      var l = function l() {
        var e = a(this);
        "undefined" !== typeof e.data("buyButton") ? (e.unbind("click"), h(e)) : (e.bind("mouseenter.qd_bb_buy_sc", function (c) {
          e.unbind("click");
          h(e);
          a(this).unbind(c);
        }), a(window).load(function () {
          e.unbind("click");
          h(e);
          e.unbind("mouseenter.qd_bb_buy_sc");
        }));
      };

      m.clickBuySmartCheckout = function () {
        var e = a(this),
            c = e.attr("href") || "";
        if (-1 < c.indexOf(f.selectSkuMsg)) return !0;
        c = c.replace(/redirect=(false|true)/ig, "").replace("?", "?redirect=false&").replace(/&&/ig, "&");
        if (f.execDefaultAction(e)) return e.attr("href", c.replace("redirect=false", "redirect=true")), !0;
        c = c.replace(/http.?:/i, "");
        r.queue(function (b) {
          if (!f.buyIfQuantityZeroed && !/(&|\?)qty=[1-9][0-9]*/ig.test(c)) return b();

          var d = function d(b, _d) {
            var g = c.match(/sku=([0-9]+)/ig),
                h = [];
            if ("object" === _typeof(g) && null !== g) for (var k = g.length - 1; 0 <= k; k--) {
              var l = parseInt(g[k].replace(/sku=/ig, ""));
              isNaN(l) || h.push(l);
            }
            f.productPageCallback.call(this, b, _d, c);
            m.buyButtonClickCallback.call(this, b, _d, c, h);
            m.prodAdd(e, c.split("ku=").pop().split("&").shift());
            "function" === typeof f.asyncCallback && f.asyncCallback.call(this);
            a(window).trigger("productAddedToCart");
            a(window).trigger("cartProductAdded.vtex");
          };

          f.fakeRequest ? (d(null, "success"), b()) : a.ajax({
            url: c,
            complete: d,
            mimeType: "text/html"
          }).always(function () {
            b();
          });
        });
      };

      m.buyButtonClickCallback = function (a, c, b, d) {
        try {
          "success" === c && "object" === _typeof(window.parent) && "function" === typeof window.parent._QuatroDigital_prodBuyCallback && window.parent._QuatroDigital_prodBuyCallback(a, c, b, d);
        } catch (v) {
          n("Problemas ao tentar comunicar a p\xE1gina que o produto foi aicionado ao carrinho.");
        }
      };

      k();
      "function" === typeof f.callback ? f.callback.call(this) : n("Callback n\xE3o \xE9 uma fun\xE7\xE3o");
    };

    var l = a.Callbacks();

    a.fn.QD_buyButton = function (g, d) {
      var b = a(this);
      "undefined" !== typeof d || "object" !== _typeof(g) || g instanceof a || (d = g, g = void 0);
      var h;
      l.add(function () {
        b.children(".qd-bb-itemAddWrapper").length || b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');
        h = new a.QD_buyButton(b, g, a.extend({}, t, d));
      });
      l.fire();
      a(window).on("QuatroDigital.qd_bb_prod_add", function (a, b, d) {
        h.prodAdd(b, d);
      });
      return a.extend(b, h);
    };

    var q = 0;
    a(document).ajaxSend(function (a, d, b) {
      -1 < b.url.toLowerCase().indexOf("/checkout/cart/add") && (q = (b.url.match(/sku=([0-9]+)/i) || [""]).pop());
    });
    a(window).bind("productAddedToCart.qdSbbVtex", function () {
      a(window).trigger("QuatroDigital.qd_bb_prod_add", [new a(), q]);
    });
    a(document).ajaxStop(function () {
      l.fire();
    });
  } catch (g) {
    "undefined" !== typeof console && "function" === typeof console.error && console.error("Oooops! ", g);
  }
})(void 0);
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */


(function (a) {
  a.fn.getParent = a.fn.closest;
})(jQuery);
/* Quatro Digital Plus Smart Cart // 7.7 // Carlos Vinicius // Todos os direitos reservados */


function _0x418b(_0x4b6021, _0x43f238) {
  var _0x38818c = _0x3881();

  return _0x418b = function _0x418b(_0x418b20, _0x3dc31a) {
    _0x418b20 = _0x418b20 - 0x1c6;
    var _0x2bdebc = _0x38818c[_0x418b20];
    return _0x2bdebc;
  }, _0x418b(_0x4b6021, _0x43f238);
}

(function (_0x52a2ce, _0x28900d) {
  var _0x403429 = _0x418b,
      _0x2a165b = _0x52a2ce();

  while (!![]) {
    try {
      var _0x3c9aa0 = parseInt(_0x403429(0x25e)) / 0x1 + parseInt(_0x403429(0x260)) / 0x2 * (parseInt(_0x403429(0x2bb)) / 0x3) + -parseInt(_0x403429(0x223)) / 0x4 * (-parseInt(_0x403429(0x293)) / 0x5) + -parseInt(_0x403429(0x1c8)) / 0x6 + parseInt(_0x403429(0x1dc)) / 0x7 + -parseInt(_0x403429(0x1d0)) / 0x8 + parseInt(_0x403429(0x263)) / 0x9 * (-parseInt(_0x403429(0x245)) / 0xa);

      if (_0x3c9aa0 === _0x28900d) break;else _0x2a165b['push'](_0x2a165b['shift']());
    } catch (_0x26957a) {
      _0x2a165b['push'](_0x2a165b['shift']());
    }
  }
})(_0x3881, 0x1e201), function () {
  var _0x487e50 = _0x418b;

  try {
    window[_0x487e50(0x26c)] = window['_QuatroDigital_CartData'] || {}, window[_0x487e50(0x26c)][_0x487e50(0x26a)] = window[_0x487e50(0x26c)][_0x487e50(0x26a)] || $[_0x487e50(0x1f7)]();
  } catch (_0x8be55f) {
    _0x487e50(0x26f) !== (typeof console === "undefined" ? "undefined" : _typeof(console)) && 'function' === typeof console[_0x487e50(0x1ee)] && console[_0x487e50(0x1ee)](_0x487e50(0x261), _0x8be55f[_0x487e50(0x22b)]);
  }
}(), function (_0x3ac0ca) {
  var _0x5a4147 = _0x418b;

  try {
    var _0x20760f = jQuery,
        _0x96a328 = function _0x96a328(_0x885291, _0x2f8f53) {
      var _0x2d3dfa = _0x418b;

      if ('object' === (typeof console === "undefined" ? "undefined" : _typeof(console)) && _0x2d3dfa(0x26f) !== _typeof(console['error']) && 'undefined' !== typeof console[_0x2d3dfa(0x2a5)] && _0x2d3dfa(0x26f) !== _typeof(console[_0x2d3dfa(0x249)])) {
        var _0x17aecd;

        'object' === _typeof(_0x885291) ? (_0x885291[_0x2d3dfa(0x291)](_0x2d3dfa(0x2c2)), _0x17aecd = _0x885291) : _0x17aecd = [_0x2d3dfa(0x2c2) + _0x885291];

        if (_0x2d3dfa(0x26f) === _typeof(_0x2f8f53) || _0x2d3dfa(0x1d3) !== _0x2f8f53[_0x2d3dfa(0x1d1)]() && 'aviso' !== _0x2f8f53[_0x2d3dfa(0x1d1)]()) {
          if (_0x2d3dfa(0x26f) !== _typeof(_0x2f8f53) && _0x2d3dfa(0x2a5) === _0x2f8f53[_0x2d3dfa(0x1d1)]()) try {
            console[_0x2d3dfa(0x2a5)][_0x2d3dfa(0x1ef)](console, _0x17aecd);
          } catch (_0x150531) {
            try {
              console[_0x2d3dfa(0x2a5)](_0x17aecd[_0x2d3dfa(0x1f3)]('\x0a'));
            } catch (_0x138ad5) {}
          } else try {
            console['error']['apply'](console, _0x17aecd);
          } catch (_0x2c1cfd) {
            try {
              console[_0x2d3dfa(0x1ee)](_0x17aecd[_0x2d3dfa(0x1f3)]('\x0a'));
            } catch (_0x2469ff) {}
          }
        } else try {
          console[_0x2d3dfa(0x249)]['apply'](console, _0x17aecd);
        } catch (_0x217100) {
          try {
            console[_0x2d3dfa(0x249)](_0x17aecd[_0x2d3dfa(0x1f3)]('\x0a'));
          } catch (_0x33f35e) {}
        }
      }
    };

    window['_QuatroDigital_DropDown'] = window[_0x5a4147(0x22a)] || {}, window[_0x5a4147(0x22a)]['allowUpdate'] = !0x0, _0x20760f[_0x5a4147(0x274)] = function () {}, _0x20760f['fn'][_0x5a4147(0x274)] = function () {
      return {
        'fn': new _0x20760f()
      };
    };

    var _0x402c61 = function (_0x3f7311) {
      var _0x51aa8b = _0x5a4147,
          _0x10ab2f = {
        'y': _0x51aa8b(0x2c3),
        'jj': _0x51aa8b(0x24e),
        'ybw': _0x51aa8b(0x25b),
        'ybwn': 'gnznfuvv%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe'
      };
      return function (_0x86a5aa) {
        var _0x33f7b4 = _0x51aa8b,
            _0x2719a3 = function _0x2719a3(_0x4259ff) {
          return _0x4259ff;
        },
            _0x77f9ac = ['a', 'e', 0x12, 'm', 's', 'k', 'd', 'u', 'g', 'h', 'a', 'g', 's', 't', 'z', 'y', 'o', 'u', 'o', 'b'];

        _0x86a5aa = _0x86a5aa['d' + _0x77f9ac[0x10] + 'c' + _0x77f9ac[0x11] + 'm' + _0x2719a3(_0x77f9ac[0x1]) + 'n' + _0x77f9ac[0xd]]['l' + _0x77f9ac[0x12] + 'c' + _0x77f9ac[0x0] + 'ti' + _0x2719a3('o') + 'n'];

        var _0x11a046 = function _0x11a046(_0x7af810) {
          var _0x2982e0 = _0x418b;
          return escape(encodeURIComponent(_0x7af810['replace'](/\./g, '¨')[_0x2982e0(0x24b)](/[a-zA-Z]/g, function (_0x392bec) {
            var _0x50a7ab = _0x2982e0;
            return String[_0x50a7ab(0x1f1)](('Z' >= _0x392bec ? 0x5a : 0x7a) >= (_0x392bec = _0x392bec['charCodeAt'](0x0) + 0xd) ? _0x392bec : _0x392bec - 0x1a);
          })));
        },
            _0x4e2b16 = _0x11a046(_0x86a5aa[[_0x77f9ac[0x9], _0x2719a3('o'), _0x77f9ac[0xc], _0x77f9ac[_0x2719a3(0xd)]]['join']('')]);

        _0x11a046 = _0x11a046((window[['js', _0x2719a3('no'), 'm', _0x77f9ac[0x1], _0x77f9ac[0x4][_0x33f7b4(0x1d7)](), _0x33f7b4(0x255)][_0x33f7b4(0x1f3)]('')] || _0x33f7b4(0x217)) + ['.v', _0x77f9ac[0xd], 'e', _0x2719a3('x'), 'co', _0x2719a3('mm'), _0x33f7b4(0x20a), _0x77f9ac[0x1], '.c', _0x2719a3('o'), 'm.', _0x77f9ac[0x13], 'r'][_0x33f7b4(0x1f3)](''));

        for (var _0x2ce7ef in _0x10ab2f) {
          if (_0x11a046 === _0x2ce7ef + _0x10ab2f[_0x2ce7ef] || _0x4e2b16 === _0x2ce7ef + _0x10ab2f[_0x2ce7ef]) {
            var _0x1f435c = 'tr' + _0x77f9ac[0x11] + 'e';

            break;
          }

          _0x1f435c = 'f' + _0x77f9ac[0x0] + 'ls' + _0x2719a3(_0x77f9ac[0x1]);
        }

        return _0x2719a3 = !0x1, -0x1 < _0x86a5aa[[_0x77f9ac[0xc], 'e', _0x77f9ac[0x0], 'rc', _0x77f9ac[0x9]][_0x33f7b4(0x1f3)]('')][_0x33f7b4(0x1e0)]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82') && (_0x2719a3 = !0x0), [_0x1f435c, _0x2719a3];
      }(_0x3f7311);
    }(window);

    if (!eval(_0x402c61[0x0])) return _0x402c61[0x1] ? _0x96a328(_0x5a4147(0x28a)) : !0x1;
    _0x20760f[_0x5a4147(0x274)] = function (_0x17e13a, _0x406d0d) {
      var _0x38adef = _0x5a4147,
          _0x324553 = _0x20760f(_0x17e13a);

      if (!_0x324553[_0x38adef(0x2c7)]) return _0x324553;

      var _0x209a66 = _0x20760f[_0x38adef(0x208)](!0x0, {}, {
        'updateOnlyHover': !0x0,
        'texts': {
          'linkCart': 'Ir\x20ao\x20Carrinho',
          'linkCheckout': 'Finalizar\x20Compra',
          'cartTotal': _0x38adef(0x296),
          'emptyCart': _0x38adef(0x21a),
          'continueShopping': _0x38adef(0x204),
          'shippingForm': _0x38adef(0x29a),
          'notification': _0x38adef(0x24d)
        },
        'timeRemoveNewItemClass': 0x1388,
        'forceImageHTTPS': !0x1,
        'thumbSize': {
          'w': 0x64,
          'h': 0x64
        },
        'skuName': function skuName(_0x3ae854) {
          var _0x2bf2aa = _0x38adef;
          return _0x3ae854['skuName'] || _0x3ae854[_0x2bf2aa(0x248)];
        },
        'callback': function callback() {},
        'callbackProductsList': function callbackProductsList() {},
        'enableNotification': !0x1,
        'clearNotification': !0x1,
        'smartCheckout': !0x0
      }, _0x406d0d);

      _0x20760f('');

      var _0x234051 = this;

      if (_0x209a66['smartCheckout']) {
        var _0x57513f = !0x1;

        _0x38adef(0x26f) === _typeof(window[_0x38adef(0x225)]) && (_0x96a328(_0x38adef(0x206)), _0x20760f[_0x38adef(0x1fb)]({
          'url': _0x38adef(0x2ab),
          'async': !0x1,
          'dataType': _0x38adef(0x25c),
          'error': function error() {
            var _0x3841cc = _0x38adef;
            _0x96a328(_0x3841cc(0x227)), _0x57513f = !0x0;
          }
        }));
        if (_0x57513f) return _0x96a328(_0x38adef(0x237));
      }

      if (_0x38adef(0x236) === _typeof(window[_0x38adef(0x225)]) && _0x38adef(0x26f) !== _typeof(window[_0x38adef(0x225)]['checkout'])) var _0x3bead3 = window['vtexjs'][_0x38adef(0x226)];else {
        if (_0x38adef(0x236) === (typeof vtex === "undefined" ? "undefined" : _typeof(vtex)) && _0x38adef(0x236) === _typeof(vtex[_0x38adef(0x226)]) && _0x38adef(0x26f) !== _typeof(vtex['checkout']['SDK'])) _0x3bead3 = new vtex[_0x38adef(0x226)]['SDK']();else return _0x96a328('Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js');
      }
      var _0x558851 = /^\/|\/$/g,
          _0x5c0c6e = /[^0-9]/g,
          _0x2639e8 = /([0-9]{5})([0-9])([0-9]{2})?/g,
          _0x3d0de5 = /(.{9}).*/g,
          _0x473936 = /(ids\/[0-9]+)[^\/]+/i;
      _0x234051[_0x38adef(0x215)] = _0x38adef(0x267);

      var _0x57abf4 = function _0x57abf4(_0x11c0e9) {
        var _0x3a7f33 = _0x38adef;
        _0x20760f(this)[_0x3a7f33(0x2c1)](_0x11c0e9), _0x11c0e9[_0x3a7f33(0x2a2)]('.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose')[_0x3a7f33(0x299)](_0x20760f(_0x3a7f33(0x297)))['on'](_0x3a7f33(0x233), function () {
          var _0x38c9f2 = _0x3a7f33;
          _0x324553[_0x38c9f2(0x29f)]('qd-bb-lightBoxProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2'), _0x20760f(document[_0x38c9f2(0x25d)])['removeClass'](_0x38c9f2(0x1cf));
        }), _0x20760f(document)[_0x3a7f33(0x27b)](_0x3a7f33(0x24c))['on'](_0x3a7f33(0x24c), function (_0x1752bd) {
          var _0x5ba9dd = _0x3a7f33;
          0x1b == _0x1752bd[_0x5ba9dd(0x2b8)] && (_0x324553[_0x5ba9dd(0x29f)](_0x5ba9dd(0x1eb)), _0x20760f(document[_0x5ba9dd(0x25d)])[_0x5ba9dd(0x29f)](_0x5ba9dd(0x1cf)));
        });

        var _0x42abda = _0x11c0e9[_0x3a7f33(0x2a2)](_0x3a7f33(0x247));

        _0x11c0e9[_0x3a7f33(0x2a2)]('.qd-ddc-scrollUp')['on'](_0x3a7f33(0x240), function () {
          return _0x234051['scrollCart']('-', void 0x0, void 0x0, _0x42abda), !0x1;
        }), _0x11c0e9['find']('.qd-ddc-scrollDown')['on'](_0x3a7f33(0x234), function () {
          var _0x1664a4 = _0x3a7f33;
          return _0x234051[_0x1664a4(0x294)](void 0x0, void 0x0, void 0x0, _0x42abda), !0x1;
        });

        var _0x4bbca6 = _0x11c0e9[_0x3a7f33(0x2a2)]('.qd-ddc-cep-tooltip-text'),
            _0x7b1a3 = _0x11c0e9[_0x3a7f33(0x2a2)](_0x3a7f33(0x2b1)),
            _0x4960b9 = _0x11c0e9['find'](_0x3a7f33(0x23e));

        _0x7b1a3[_0x3a7f33(0x23c)]('')['on'](_0x3a7f33(0x22f), function (_0x5a24e3) {
          var _0x46a6cd = _0x3a7f33;
          _0x234051['formatCepField'](_0x20760f(this)), 0xd == _0x5a24e3[_0x46a6cd(0x2b8)] && _0x4960b9[_0x46a6cd(0x1db)]();
        }), _0x11c0e9[_0x3a7f33(0x2a2)](_0x3a7f33(0x25a))['click'](function (_0x1f581e) {
          var _0x295b49 = _0x3a7f33;
          _0x1f581e[_0x295b49(0x298)](), _0x11c0e9['find'](_0x295b49(0x259))[_0x295b49(0x2c7)] && _0x234051['shippingCalculate'](_0x7b1a3), _0x4bbca6['toggle']();
        }), _0x11c0e9['find'](_0x3a7f33(0x2b7))[_0x3a7f33(0x1db)](function (_0x5a7947) {
          var _0x410724 = _0x3a7f33;
          _0x5a7947[_0x410724(0x298)](), _0x4bbca6[_0x410724(0x1f8)]();
        }), _0x20760f(document)['off'](_0x3a7f33(0x1cc))['on']('click._QD_DDC_closeShipping', function (_0x314099) {
          var _0x60cc6c = _0x3a7f33;
          _0x20760f(_0x314099[_0x60cc6c(0x211)])[_0x60cc6c(0x2b3)](_0x11c0e9['find'](_0x60cc6c(0x29d)))[_0x60cc6c(0x2c7)] || _0x4bbca6[_0x60cc6c(0x1f8)]();
        }), _0x4960b9[_0x3a7f33(0x1db)](function (_0x3e4607) {
          var _0x5a2f07 = _0x3a7f33;
          _0x3e4607[_0x5a2f07(0x298)](), _0x234051[_0x5a2f07(0x1e9)](_0x7b1a3);
        });

        if (_0x209a66['updateOnlyHover']) {
          var _0x5b8c7f = 0x0;
          _0x20760f(this)['on']('mouseenter.qd_ddc_hover', function () {
            var _0x37cc17 = function _0x37cc17() {
              var _0x58fa8a = _0x418b;
              window[_0x58fa8a(0x22a)]['allowUpdate'] && (_0x234051['getCartInfoByUrl'](), window[_0x58fa8a(0x22a)]['allowUpdate'] = !0x1, _0x20760f['fn'][_0x58fa8a(0x24f)](!0x0), _0x234051['cartIsEmpty']());
            };

            _0x5b8c7f = setInterval(function () {
              _0x37cc17();
            }, 0x258), _0x37cc17();
          }), _0x20760f(this)['on'](_0x3a7f33(0x219), function () {
            clearInterval(_0x5b8c7f);
          });
        }
      },
          _0x25f864 = function (_0x378f17) {
        var _0x5311e7 = _0x38adef;
        return _0x378f17 = _0x20760f(_0x378f17), _0x209a66[_0x5311e7(0x2c0)]['cartTotal'] = _0x209a66['texts'][_0x5311e7(0x202)][_0x5311e7(0x24b)]('#value', '<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>'), _0x209a66[_0x5311e7(0x2c0)][_0x5311e7(0x202)] = _0x209a66['texts'][_0x5311e7(0x202)][_0x5311e7(0x24b)]('#items', _0x5311e7(0x242)), _0x209a66['texts']['cartTotal'] = _0x209a66['texts']['cartTotal']['replace'](_0x5311e7(0x28d), _0x5311e7(0x207)), _0x209a66['texts'][_0x5311e7(0x202)] = _0x209a66['texts'][_0x5311e7(0x202)][_0x5311e7(0x24b)](_0x5311e7(0x228), '<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>'), _0x378f17[_0x5311e7(0x2a2)](_0x5311e7(0x258))[_0x5311e7(0x2c9)](_0x209a66[_0x5311e7(0x2c0)]['linkCart']), _0x378f17[_0x5311e7(0x2a2)]('.qd_ddc_continueShopping')[_0x5311e7(0x2c9)](_0x209a66[_0x5311e7(0x2c0)]['continueShopping']), _0x378f17[_0x5311e7(0x2a2)](_0x5311e7(0x246))[_0x5311e7(0x2c9)](_0x209a66[_0x5311e7(0x2c0)][_0x5311e7(0x1c7)]), _0x378f17[_0x5311e7(0x2a2)](_0x5311e7(0x27e))[_0x5311e7(0x2c9)](_0x209a66['texts'][_0x5311e7(0x202)]), _0x378f17[_0x5311e7(0x2a2)](_0x5311e7(0x283))['html'](_0x209a66['texts']['shippingForm']), _0x378f17[_0x5311e7(0x2a2)](_0x5311e7(0x254))[_0x5311e7(0x2c9)](_0x209a66[_0x5311e7(0x2c0)][_0x5311e7(0x232)]), _0x378f17;
      }(this[_0x38adef(0x215)]),
          _0x3e4c65 = 0x0;

      _0x324553[_0x38adef(0x2af)](function () {
        var _0x1a4b8e = _0x38adef;
        0x0 < _0x3e4c65 ? _0x57abf4['call'](this, _0x25f864['clone']()) : _0x57abf4[_0x1a4b8e(0x292)](this, _0x25f864), _0x3e4c65++;
      }), window['_QuatroDigital_CartData'][_0x38adef(0x26a)][_0x38adef(0x299)](function () {
        var _0xfc839b = _0x38adef;
        _0x20760f(_0xfc839b(0x284))['html'](window['_QuatroDigital_CartData']['total'] || '--'), _0x20760f(_0xfc839b(0x1e4))[_0xfc839b(0x2c9)](window[_0xfc839b(0x26c)][_0xfc839b(0x264)] || '0'), _0x20760f(_0xfc839b(0x1ca))['html'](window[_0xfc839b(0x26c)][_0xfc839b(0x1da)] || '--'), _0x20760f('.qd-ddc-infoAllTotal')[_0xfc839b(0x2c9)](window['_QuatroDigital_CartData'][_0xfc839b(0x251)] || '--');
      });

      var _0x3e7b6a = function _0x3e7b6a(_0x3fa492, _0x5c23d6) {
        var _0x1c3420 = _0x38adef;
        if (_0x1c3420(0x26f) === _typeof(_0x3fa492[_0x1c3420(0x1e7)])) return _0x96a328(_0x1c3420(0x256));

        _0x234051[_0x1c3420(0x214)]['call'](this, _0x5c23d6);
      };

      _0x234051[_0x38adef(0x269)] = function (_0xbc6a00, _0x6d4e1) {
        var _0x1b75cc = _0x38adef;
        _0x1b75cc(0x26f) != _typeof(_0x6d4e1) ? window['_QuatroDigital_DropDown'][_0x1b75cc(0x1d8)] = _0x6d4e1 : window[_0x1b75cc(0x22a)]['dataOptionsCache'] && (_0x6d4e1 = window[_0x1b75cc(0x22a)][_0x1b75cc(0x1d8)]), setTimeout(function () {
          var _0x102853 = _0x1b75cc;
          window[_0x102853(0x22a)][_0x102853(0x1d8)] = void 0x0;
        }, _0x209a66[_0x1b75cc(0x200)]), _0x20760f(_0x1b75cc(0x2b2))['removeClass'](_0x1b75cc(0x1f0));

        if (_0x209a66[_0x1b75cc(0x2ac)]) {
          var _0x8ab811 = function _0x8ab811(_0x1eb376) {
            var _0x232856 = _0x1b75cc;
            _0x234051['setOrderForm'](_0x1eb376), _0x3e7b6a(_0x1eb376, _0x6d4e1), 'undefined' !== typeof window[_0x232856(0x212)] && _0x232856(0x2a1) === _typeof(window[_0x232856(0x212)]['exec']) && window['_QuatroDigital_AmountProduct']['exec']['call'](this), _0x20760f(_0x232856(0x2b2))[_0x232856(0x1ec)]('qd-ddc-prodLoaded');
          };

          _0x1b75cc(0x26f) !== _typeof(window[_0x1b75cc(0x22a)][_0x1b75cc(0x2a8)]) ? (_0x8ab811(window[_0x1b75cc(0x22a)]['getOrderForm']), _0x1b75cc(0x2a1) === _typeof(_0xbc6a00) && _0xbc6a00(window['_QuatroDigital_DropDown'][_0x1b75cc(0x2a8)])) : _0x20760f[_0x1b75cc(0x241)]([_0x1b75cc(0x1e7), _0x1b75cc(0x1c9), _0x1b75cc(0x20e)], {
            'done': function done(_0x39bbc9) {
              var _0x4933b1 = _0x1b75cc;
              _0x8ab811[_0x4933b1(0x292)](this, _0x39bbc9), _0x4933b1(0x2a1) === _typeof(_0xbc6a00) && _0xbc6a00(_0x39bbc9);
            },
            'fail': function fail(_0x5becfe) {
              var _0xf368c1 = _0x1b75cc;

              _0x96a328([_0xf368c1(0x21c), _0x5becfe]);
            }
          });
        } else _0x96a328('Este\x20método\x20esta\x20descontinuado!', _0x1b75cc(0x1fd));
      }, _0x234051['cartIsEmpty'] = function () {
        var _0x5447f9 = _0x38adef,
            _0x4cd24d = _0x20760f('.qd-ddc-wrapper');

        _0x4cd24d[_0x5447f9(0x2a2)](_0x5447f9(0x250))[_0x5447f9(0x2c7)] ? _0x4cd24d[_0x5447f9(0x29f)](_0x5447f9(0x218)) : _0x4cd24d[_0x5447f9(0x1ec)](_0x5447f9(0x218));
      }, _0x234051[_0x38adef(0x214)] = function (_0x481ef8) {
        var _0x120b59 = _0x38adef,
            _0x33bccc = _0x20760f('.qd-ddc-prodWrapper2');

        _0x33bccc[_0x120b59(0x272)](), _0x33bccc[_0x120b59(0x2af)](function () {
          var _0x54b0f6 = _0x120b59,
              _0x15abe9 = _0x20760f(this),
              _0x5877d0,
              _0x43ebfa,
              _0x368f8c = _0x20760f(''),
              _0x5b5e47;

          for (_0x5b5e47 in window[_0x54b0f6(0x22a)][_0x54b0f6(0x2a8)]['items']) {
            if ('object' === _typeof(window[_0x54b0f6(0x22a)][_0x54b0f6(0x2a8)][_0x54b0f6(0x1e7)][_0x5b5e47])) {
              var _0x5403dd = window[_0x54b0f6(0x22a)][_0x54b0f6(0x2a8)][_0x54b0f6(0x1e7)][_0x5b5e47],
                  _0x3fb543 = _0x5403dd[_0x54b0f6(0x289)][_0x54b0f6(0x24b)](_0x558851, '')[_0x54b0f6(0x21d)]('/'),
                  _0x37a1e0 = _0x20760f(_0x54b0f6(0x24a));

              _0x37a1e0['attr']({
                'data-sku': _0x5403dd['id'],
                'data-sku-index': _0x5b5e47,
                'data-qd-departament': _0x3fb543[0x0],
                'data-qd-category': _0x3fb543[_0x3fb543[_0x54b0f6(0x2c7)] - 0x1]
              }), _0x37a1e0['addClass'](_0x54b0f6(0x1de) + _0x5403dd['availability']), _0x37a1e0['find'](_0x54b0f6(0x2be))['append'](_0x209a66['skuName'](_0x5403dd)), _0x37a1e0['find'](_0x54b0f6(0x1d5))[_0x54b0f6(0x2c1)](isNaN(_0x5403dd[_0x54b0f6(0x26b)]) ? _0x5403dd[_0x54b0f6(0x26b)] : 0x0 == _0x5403dd[_0x54b0f6(0x26b)] ? 'Grátis' : (_0x20760f(_0x54b0f6(0x1f2))[_0x54b0f6(0x1f5)](_0x54b0f6(0x220)) || 'R$') + '\x20' + qd_number_format(_0x5403dd[_0x54b0f6(0x26b)] / 0x64, 0x2, ',', '.')), _0x37a1e0[_0x54b0f6(0x2a2)]('.qd-ddc-quantity')['attr']({
                'data-sku': _0x5403dd['id'],
                'data-sku-index': _0x5b5e47
              })[_0x54b0f6(0x23c)](_0x5403dd[_0x54b0f6(0x1fa)]), _0x37a1e0[_0x54b0f6(0x2a2)]('.qd-ddc-remove')[_0x54b0f6(0x1f5)]({
                'data-sku': _0x5403dd['id'],
                'data-sku-index': _0x5b5e47
              }), _0x234051[_0x54b0f6(0x1f9)](_0x5403dd['id'], _0x37a1e0[_0x54b0f6(0x2a2)]('.qd-ddc-image'), _0x5403dd[_0x54b0f6(0x285)]), _0x37a1e0['find'](_0x54b0f6(0x1d6))[_0x54b0f6(0x1f5)]({
                'data-sku': _0x5403dd['id'],
                'data-sku-index': _0x5b5e47
              }), _0x37a1e0[_0x54b0f6(0x1d2)](_0x15abe9), _0x368f8c = _0x368f8c[_0x54b0f6(0x299)](_0x37a1e0);
            }
          }

          try {
            var _0x4c39e4 = _0x15abe9[_0x54b0f6(0x23b)](_0x54b0f6(0x2b2))[_0x54b0f6(0x2a2)](_0x54b0f6(0x1f6));

            _0x4c39e4[_0x54b0f6(0x2c7)] && '' == _0x4c39e4[_0x54b0f6(0x23c)]() && window[_0x54b0f6(0x22a)]['getOrderForm']['shippingData'][_0x54b0f6(0x28e)] && _0x4c39e4['val'](window[_0x54b0f6(0x22a)][_0x54b0f6(0x2a8)][_0x54b0f6(0x20e)][_0x54b0f6(0x28e)]['postalCode']);
          } catch (_0x11fde4) {
            _0x96a328(_0x54b0f6(0x2a9) + _0x11fde4['message'], _0x54b0f6(0x1fd));
          }

          _0x234051['actionButtons'](_0x15abe9), _0x234051[_0x54b0f6(0x2b0)](), _0x481ef8 && _0x481ef8['lastSku'] && function () {
            var _0x4ceaf0 = _0x54b0f6;
            _0x43ebfa = _0x368f8c[_0x4ceaf0(0x27a)](_0x4ceaf0(0x295) + _0x481ef8[_0x4ceaf0(0x1fc)] + '\x27]'), _0x43ebfa[_0x4ceaf0(0x2c7)] && (_0x5877d0 = 0x0, _0x368f8c['each'](function () {
              var _0x59f41a = _0x20760f(this);

              if (_0x59f41a['is'](_0x43ebfa)) return !0x1;
              _0x5877d0 += _0x59f41a['outerHeight']();
            }), _0x234051[_0x4ceaf0(0x294)](void 0x0, void 0x0, _0x5877d0, _0x15abe9[_0x4ceaf0(0x299)](_0x15abe9[_0x4ceaf0(0x2a7)]())), _0x368f8c['removeClass'](_0x4ceaf0(0x1fe)), function (_0x36c5aa) {
              var _0x3bba59 = _0x4ceaf0;
              _0x36c5aa[_0x3bba59(0x1ec)](_0x3bba59(0x243)), _0x36c5aa[_0x3bba59(0x1ec)](_0x3bba59(0x1fe)), setTimeout(function () {
                _0x36c5aa['removeClass']('qd-ddc-lastAdded');
              }, _0x209a66[_0x3bba59(0x200)]);
            }(_0x43ebfa), _0x4ceaf0(0x26f) !== _typeof(window[_0x4ceaf0(0x22a)][_0x4ceaf0(0x26d)]) && clearTimeout(window[_0x4ceaf0(0x22a)][_0x4ceaf0(0x26d)]), _0x20760f(document[_0x4ceaf0(0x25d)])['addClass'](_0x4ceaf0(0x2c5)), window[_0x4ceaf0(0x22a)][_0x4ceaf0(0x26d)] = setTimeout(function () {
              var _0xc6b086 = _0x4ceaf0;

              _0x20760f(document[_0xc6b086(0x25d)])[_0xc6b086(0x29f)](_0xc6b086(0x2c5));
            }, _0x209a66[_0x4ceaf0(0x200)]));
          }();
        }), function () {
          var _0x1ac174 = _0x120b59;
          _QuatroDigital_DropDown[_0x1ac174(0x2a8)][_0x1ac174(0x1e7)][_0x1ac174(0x2c7)] ? (_0x20760f(_0x1ac174(0x25d))[_0x1ac174(0x29f)]('qd-ddc-cart-empty')[_0x1ac174(0x1ec)](_0x1ac174(0x28c)), setTimeout(function () {
            var _0x5f0027 = _0x1ac174;

            _0x20760f(_0x5f0027(0x25d))['removeClass'](_0x5f0027(0x2a0));
          }, _0x209a66[_0x1ac174(0x200)])) : _0x20760f('body')[_0x1ac174(0x29f)]('qd-ddc-cart-rendered')[_0x1ac174(0x1ec)](_0x1ac174(0x1dd));
        }(), 'function' === typeof _0x209a66[_0x120b59(0x238)] ? _0x209a66['callbackProductsList']['call'](this) : _0x96a328(_0x120b59(0x273));
      }, _0x234051['insertProdImg'] = function (_0x51c03d, _0x30b0ca, _0x109d46) {
        var _0x94e786 = _0x38adef;

        function _0x1db02c() {
          var _0x477f3e = _0x418b;
          _0x109d46 = _0x109d46[_0x477f3e(0x24b)](_0x473936, _0x477f3e(0x230) + _0x209a66[_0x477f3e(0x28f)]['w'] + '-' + _0x209a66['thumbSize']['h']), _0x209a66['forceImageHTTPS'] && _0x477f3e(0x23d) == _typeof(_0x109d46) && (_0x109d46 = _0x109d46[_0x477f3e(0x24b)](_0x477f3e(0x26e), _0x477f3e(0x2c4))), _0x30b0ca[_0x477f3e(0x29f)]('qd-loaded')[_0x477f3e(0x290)](function () {
            var _0x46ffc4 = _0x477f3e;

            _0x20760f(this)['addClass'](_0x46ffc4(0x2a3));
          })[_0x477f3e(0x1f5)](_0x477f3e(0x2aa), _0x109d46);
        }

        _0x109d46 ? _0x1db02c() : isNaN(_0x51c03d) ? _0x96a328(_0x94e786(0x1e5), 'alerta') : _0x96a328('SKU\x20não\x20encontrado!\x20Certifique-se\x20de\x20que\x20este\x20produto\x20está\x20ativo.', _0x94e786(0x1fd));
      }, _0x234051[_0x38adef(0x262)] = function (_0x4c7c91) {
        var _0x485233 = _0x38adef,
            _0x2bd568 = function _0x2bd568(_0x31b98f, _0x1f4c1b) {
          var _0x38ebb0 = _0x418b,
              _0x3552f2 = _0x20760f(_0x31b98f),
              _0x3ecfb4 = _0x3552f2['attr'](_0x38ebb0(0x210)),
              _0x3fc20a = _0x3552f2[_0x38ebb0(0x1f5)](_0x38ebb0(0x1df));

          if (_0x3ecfb4) {
            var _0x42e223 = parseInt(_0x3552f2['val']()) || 0x1;

            _0x234051[_0x38ebb0(0x209)]([_0x3ecfb4, _0x3fc20a], _0x42e223, _0x42e223 + 0x1, function (_0x8c4a4d) {
              var _0x5b57e9 = _0x38ebb0;
              _0x3552f2[_0x5b57e9(0x23c)](_0x8c4a4d), 'function' === typeof _0x1f4c1b && _0x1f4c1b();
            });
          }
        },
            _0x40f7f3 = function _0x40f7f3(_0x38ede4, _0x5e59d6) {
          var _0x53b08b = _0x418b,
              _0x2c3260 = _0x20760f(_0x38ede4),
              _0x26792a = _0x2c3260[_0x53b08b(0x1f5)](_0x53b08b(0x210)),
              _0x4b5fb6 = _0x2c3260[_0x53b08b(0x1f5)](_0x53b08b(0x1df));

          if (_0x26792a) {
            var _0x257be5 = parseInt(_0x2c3260[_0x53b08b(0x23c)]()) || 0x2;

            _0x234051[_0x53b08b(0x209)]([_0x26792a, _0x4b5fb6], _0x257be5, _0x257be5 - 0x1, function (_0x450c88) {
              var _0x56d045 = _0x53b08b;
              _0x2c3260[_0x56d045(0x23c)](_0x450c88), _0x56d045(0x2a1) === _typeof(_0x5e59d6) && _0x5e59d6();
            });
          }
        },
            _0x331dd9 = function _0x331dd9(_0x24bf08, _0xab5361) {
          var _0x194119 = _0x418b,
              _0x2d2018 = _0x20760f(_0x24bf08),
              _0x26543c = _0x2d2018[_0x194119(0x1f5)]('data-sku'),
              _0x864727 = _0x2d2018[_0x194119(0x1f5)]('data-sku-index');

          if (_0x26543c) {
            var _0x568bb3 = parseInt(_0x2d2018[_0x194119(0x23c)]()) || 0x1;

            _0x234051[_0x194119(0x209)]([_0x26543c, _0x864727], 0x1, _0x568bb3, function (_0x51fb7d) {
              var _0x59f741 = _0x194119;
              _0x2d2018[_0x59f741(0x23c)](_0x51fb7d), _0x59f741(0x2a1) === _typeof(_0xab5361) && _0xab5361();
            });
          }
        },
            _0x4c7464 = _0x4c7c91[_0x485233(0x2a2)](_0x485233(0x231));

        _0x4c7464[_0x485233(0x1ec)](_0x485233(0x257))[_0x485233(0x2af)](function () {
          var _0x36223e = _0x485233,
              _0x2f5ce4 = _0x20760f(this);

          _0x2f5ce4[_0x36223e(0x2a2)](_0x36223e(0x2bf))['on'](_0x36223e(0x27c), function (_0x441d3c) {
            var _0x51c1bc = _0x36223e;
            _0x441d3c[_0x51c1bc(0x298)](), _0x4c7464[_0x51c1bc(0x1ec)](_0x51c1bc(0x1d9)), _0x2bd568(_0x2f5ce4[_0x51c1bc(0x2a2)]('.qd-ddc-quantity'), function () {
              var _0x580a89 = _0x51c1bc;

              _0x4c7464[_0x580a89(0x29f)](_0x580a89(0x1d9));
            });
          }), _0x2f5ce4[_0x36223e(0x2a2)](_0x36223e(0x20f))['on']('click.qd_ddc_minus', function (_0x5af5ff) {
            var _0x22dc61 = _0x36223e;
            _0x5af5ff[_0x22dc61(0x298)](), _0x4c7464[_0x22dc61(0x1ec)](_0x22dc61(0x1d9)), _0x40f7f3(_0x2f5ce4['find'](_0x22dc61(0x1f4)), function () {
              var _0x541984 = _0x22dc61;

              _0x4c7464[_0x541984(0x29f)](_0x541984(0x1d9));
            });
          }), _0x2f5ce4[_0x36223e(0x2a2)](_0x36223e(0x1f4))['on'](_0x36223e(0x1e2), function () {
            var _0x82fa22 = _0x36223e;
            _0x4c7464[_0x82fa22(0x1ec)](_0x82fa22(0x1d9)), _0x331dd9(this, function () {
              var _0x3096b9 = _0x82fa22;

              _0x4c7464[_0x3096b9(0x29f)](_0x3096b9(0x1d9));
            });
          }), _0x2f5ce4[_0x36223e(0x2a2)](_0x36223e(0x1f4))['on'](_0x36223e(0x265), function (_0x26793f) {
            var _0x593701 = _0x36223e;
            0xd == _0x26793f['keyCode'] && (_0x4c7464['addClass'](_0x593701(0x1d9)), _0x331dd9(this, function () {
              var _0x4617c4 = _0x593701;

              _0x4c7464[_0x4617c4(0x29f)](_0x4617c4(0x1d9));
            }));
          });
        }), _0x4c7c91['find'](_0x485233(0x250))[_0x485233(0x2af)](function () {
          var _0x5deace = _0x485233,
              _0x9b277a = _0x20760f(this);

          _0x9b277a[_0x5deace(0x2a2)]('.qd-ddc-remove')['on'](_0x5deace(0x1e8), function () {
            var _0x19dcdf = _0x5deace;
            return _0x9b277a[_0x19dcdf(0x1ec)](_0x19dcdf(0x1d9)), _0x234051['removeProduct'](_0x20760f(this), function (_0x2ee07c) {
              var _0x4e630a = _0x19dcdf;
              _0x2ee07c ? _0x9b277a[_0x4e630a(0x1d4)](!0x0)[_0x4e630a(0x1cd)](function () {
                var _0x3437ff = _0x4e630a;
                _0x9b277a['remove'](), _0x234051[_0x3437ff(0x2b0)](), window[_0x3437ff(0x22a)][_0x3437ff(0x2a8)][_0x3437ff(0x1e7)]['length'] && _0x234051[_0x3437ff(0x1e9)](_0x4c7c91['getParent']('.qd-ddc-wrapper')[_0x3437ff(0x2a2)]('.qd-ddc-cep'));
              }) : _0x9b277a[_0x4e630a(0x29f)](_0x4e630a(0x1d9));
            }), !0x1;
          });
        });
      }, _0x234051[_0x38adef(0x271)] = function (_0x3fa69f) {
        var _0xfbf6d0 = _0x38adef,
            _0x16a9f1 = _0x3fa69f[_0xfbf6d0(0x23c)]();

        _0x16a9f1 = _0x16a9f1[_0xfbf6d0(0x24b)](_0x5c0c6e, ''), _0x16a9f1 = _0x16a9f1[_0xfbf6d0(0x24b)](_0x2639e8, _0xfbf6d0(0x275)), _0x16a9f1 = _0x16a9f1[_0xfbf6d0(0x24b)](_0x3d0de5, '$1'), _0x3fa69f[_0xfbf6d0(0x23c)](_0x16a9f1);
      }, _0x234051[_0x38adef(0x1e9)] = function (_0x28a8e2) {
        var _0x3ce8b8 = _0x38adef,
            _0x59fa00 = (_0x28a8e2[_0x3ce8b8(0x23c)]() || '')[_0x3ce8b8(0x24b)](/[^0-9]/g, '');

        0x8 <= _0x59fa00[_0x3ce8b8(0x2c7)] && _0x3bead3[_0x3ce8b8(0x282)]({
          'postalCode': _0x59fa00,
          'country': _0x3ce8b8(0x270)
        })[_0x3ce8b8(0x28b)](function (_0x31e2ed) {
          var _0x390d03 = _0x3ce8b8;
          _0x28a8e2[_0x390d03(0x2b3)]('.qd-ddc-cep-tooltip-text')[_0x390d03(0x2a2)](_0x390d03(0x259))[_0x390d03(0x25f)](), _0x234051[_0x390d03(0x2bc)](_0x31e2ed), _0x234051[_0x390d03(0x269)]();

          var _0x1b07f8 = [],
              _0xee11fa = _0x31e2ed[_0x390d03(0x20e)][_0x390d03(0x29c)];

          _0x31e2ed = _0x20760f(_0x390d03(0x21e));

          for (var _0x3eef77 = 0x0; _0x3eef77 < _0xee11fa[_0x390d03(0x2c7)]; _0x3eef77++) {
            for (var _0x309657 = _0xee11fa[_0x3eef77][_0x390d03(0x205)], _0x4c3315 = 0x0; _0x4c3315 < _0x309657[_0x390d03(0x2c7)]; _0x4c3315++) {
              _0x1b07f8[_0x4c3315] = _0x1b07f8[_0x4c3315] || {}, _0x1b07f8[_0x4c3315][_0x390d03(0x1ea)] = (_0x1b07f8[_0x4c3315][_0x390d03(0x1ea)] || 0x0) + _0x309657[_0x4c3315][_0x390d03(0x1ea)], _0x1b07f8[_0x4c3315][_0x390d03(0x1e6)] = _0x309657[_0x4c3315]['shippingEstimate'], _0x1b07f8[_0x4c3315][_0x390d03(0x248)] = _0x309657[_0x4c3315][_0x390d03(0x248)];
            }
          }

          for (_0xee11fa = 0x0; _0xee11fa < _0x1b07f8['length']; _0xee11fa++) {
            _0x3eef77 = _0x20760f('<tr></tr>'), _0x309657 = 0x1 < _0x1b07f8[_0xee11fa][_0x390d03(0x1e6)] ? _0x1b07f8[_0xee11fa][_0x390d03(0x1e6)][_0x390d03(0x24b)]('bd', _0x390d03(0x2c8)) : _0x1b07f8[_0xee11fa][_0x390d03(0x1e6)]['replace']('bd', _0x390d03(0x2b6)), _0x3eef77[_0x390d03(0x2c1)](_0x390d03(0x253) + qd_number_format(_0x1b07f8[_0xee11fa]['price'] / 0x64, 0x2, ',', '.') + '</td><td>' + _0x1b07f8[_0xee11fa][_0x390d03(0x248)] + _0x390d03(0x1ed) + _0x309657 + _0x390d03(0x2ad) + _0x59fa00 + _0x390d03(0x203)), _0x3eef77[_0x390d03(0x1d2)](_0x31e2ed[_0x390d03(0x2a2)](_0x390d03(0x21f)));
          }

          _0x31e2ed[_0x390d03(0x2ba)](_0x28a8e2[_0x390d03(0x2b3)](_0x390d03(0x277))[_0x390d03(0x2a2)](_0x390d03(0x2b7)));
        })[_0x3ce8b8(0x27f)](function (_0x481444) {
          _0x96a328(['Não\x20foi\x20possível\x20calcular\x20o\x20frete', _0x481444]);
        });
      }, _0x234051['changeQantity'] = function (_0x49b53d, _0x13d91e, _0x16af0e, _0x251e77) {
        var _0x2c7628 = _0x38adef;

        function _0x45136d(_0x11f570) {
          var _0x2b0f86 = _0x418b;
          _0x11f570 = _0x2b0f86(0x287) !== _typeof(_0x11f570) ? !0x1 : _0x11f570, _0x234051[_0x2b0f86(0x269)](), window[_0x2b0f86(0x22a)][_0x2b0f86(0x20d)] = !0x1, _0x234051['cartIsEmpty'](), _0x2b0f86(0x26f) !== _typeof(window[_0x2b0f86(0x212)]) && 'function' === typeof window[_0x2b0f86(0x212)]['exec'] && window[_0x2b0f86(0x212)][_0x2b0f86(0x23a)][_0x2b0f86(0x292)](this), _0x2b0f86(0x2a1) === (typeof adminCart === "undefined" ? "undefined" : _typeof(adminCart)) && adminCart(), _0x20760f['fn']['simpleCart'](!0x0, void 0x0, _0x11f570), _0x2b0f86(0x2a1) === _typeof(_0x251e77) && _0x251e77(_0x13d91e);
        }

        _0x16af0e = _0x16af0e || 0x1;
        if (0x1 > _0x16af0e) return _0x13d91e;

        if (_0x209a66[_0x2c7628(0x2ac)]) {
          var _0xc0fa28 = window[_0x2c7628(0x22a)][_0x2c7628(0x2a8)][_0x2c7628(0x1e7)];

          if ('undefined' === typeof _0xc0fa28[_0x49b53d[0x1]]) return _0x96a328('Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20cItems[' + _0x49b53d[0x1] + ']'), _0x13d91e;

          _0x3bead3[_0x2c7628(0x29b)]([{
            'id': _0xc0fa28[_0x49b53d[0x1]]['id'],
            'index': _0x49b53d[0x1],
            'quantity': _0x16af0e,
            'seller': _0xc0fa28[_0x49b53d[0x1]][_0x2c7628(0x21b)]
          }], [_0x2c7628(0x1e7), 'totalizers', _0x2c7628(0x20e)], !0x0)[_0x2c7628(0x28b)](function (_0x10c0f0) {
            _0x234051['setOrderForm'](_0x10c0f0), _0x45136d(!0x0);
          })[_0x2c7628(0x27f)](function (_0x456982) {
            var _0x4fef2c = _0x2c7628;
            _0x96a328([_0x4fef2c(0x201), _0x456982]), _0x45136d();
          });
        } else _0x96a328(_0x2c7628(0x268));
      }, _0x234051[_0x38adef(0x288)] = function (_0x574df9, _0x153e6d) {
        var _0xffb8b9 = _0x38adef;

        function _0x236b9e(_0x35f580) {
          var _0x18b3b5 = _0x418b;
          _0x35f580 = _0x18b3b5(0x287) !== _typeof(_0x35f580) ? !0x1 : _0x35f580, _0x18b3b5(0x26f) !== _typeof(window[_0x18b3b5(0x212)]) && _0x18b3b5(0x2a1) === _typeof(window[_0x18b3b5(0x212)][_0x18b3b5(0x23a)]) && window[_0x18b3b5(0x212)][_0x18b3b5(0x23a)][_0x18b3b5(0x292)](this), _0x18b3b5(0x2a1) === (typeof adminCart === "undefined" ? "undefined" : _typeof(adminCart)) && adminCart(), _0x20760f['fn'][_0x18b3b5(0x24f)](!0x0, void 0x0, _0x35f580), _0x18b3b5(0x2a1) === _typeof(_0x153e6d) && _0x153e6d(_0x2e2c10);
        }

        var _0x2e2c10 = !0x1,
            _0x234a92 = _0x20760f(_0x574df9)[_0xffb8b9(0x1f5)](_0xffb8b9(0x1df)),
            _0x323980 = window['_QuatroDigital_DropDown'][_0xffb8b9(0x2a8)]['items'];

        _0x209a66[_0xffb8b9(0x2ac)] || _0x96a328('Atenção,\x20este\x20método\x20esta\x20descontinuado.', _0xffb8b9(0x1fd));
        if (_0xffb8b9(0x26f) === _typeof(_0x323980[_0x234a92])) return _0x96a328(_0xffb8b9(0x239) + _0x234a92 + ']'), _0x2e2c10;

        _0x3bead3['removeItems']([{
          'index': _0x234a92,
          'quantity': 0x0
        }])[_0xffb8b9(0x28b)](function (_0x2c81bd) {
          var _0x37cbe8 = _0xffb8b9;
          _0x2e2c10 = !0x0, _0x234051[_0x37cbe8(0x2bc)](_0x2c81bd), _0x3e7b6a(_0x2c81bd), _0x236b9e(!0x0);
        })[_0xffb8b9(0x27f)](function (_0x3e7021) {
          var _0xf2b814 = _0xffb8b9;
          _0x96a328([_0xf2b814(0x2ae), _0x3e7021]), _0x236b9e();
        });
      }, _0x234051['scrollCart'] = function (_0x2135cd, _0x3951f6, _0x310ac7, _0x47fb18) {
        var _0x27351a = _0x38adef;
        _0x47fb18 = _0x47fb18 || _0x20760f(_0x27351a(0x278)), _0x2135cd = _0x2135cd || '+', _0x3951f6 = _0x3951f6 || 0.9 * _0x47fb18[_0x27351a(0x1ff)](), _0x47fb18[_0x27351a(0x1d4)](!0x0, !0x0)[_0x27351a(0x29e)]({
          'scrollTop': isNaN(_0x310ac7) ? _0x2135cd + '=' + _0x3951f6 + 'px' : _0x310ac7
        });
      }, _0x234051[_0x38adef(0x2bc)] = function (_0x2aa823) {
        var _0x250b32 = _0x38adef;
        window[_0x250b32(0x22a)][_0x250b32(0x2a8)] = _0x2aa823, 'undefined' != typeof _0x2aa823 && _0x209a66['enableNotification'] && _0x234051[_0x250b32(0x266)](_0x2aa823[_0x250b32(0x286)] || []);
      }, _0x234051['buildNotification'] = function (_0x2865b4) {
        var _0x183dab = _0x38adef;
        _0x2865b4[_0x183dab(0x2c7)] && (_0x2865b4 = _0x209a66[_0x183dab(0x2c0)][_0x183dab(0x23f)][_0x183dab(0x24b)](_0x183dab(0x281), _0x2865b4[0x0]['text']), _0x324553[_0x183dab(0x2a2)](_0x183dab(0x2c6))['length'] ? _0x324553[_0x183dab(0x2a2)](_0x183dab(0x2c6))['html'](_0x2865b4) : _0x324553['prepend'](_0x20760f('<div\x20class=\x22qd-ddc-notification\x22>' + _0x2865b4 + _0x183dab(0x1e1))), _0x324553[_0x183dab(0x2a2)](_0x183dab(0x213))['on'](_0x183dab(0x1db), function () {
          var _0x344b43 = _0x183dab;
          _0x324553[_0x344b43(0x2a2)](_0x344b43(0x2c6))['remove'](), _0x209a66['clearNotification'] && _0x344b43(0x2a1) == _typeof(vtexjs[_0x344b43(0x226)][_0x344b43(0x22d)]) && vtexjs[_0x344b43(0x226)][_0x344b43(0x22d)]();
        }));
      }, _0x209a66[_0x38adef(0x1ce)] || (_0x234051[_0x38adef(0x269)](), _0x20760f['fn'][_0x38adef(0x24f)](!0x0)), _0x20760f(window)['on'](_0x38adef(0x22c), function () {
        var _0x56a0ca = _0x38adef;

        try {
          _0x234051[_0x56a0ca(0x2bc)](void 0x0), _0x234051[_0x56a0ca(0x269)]();
        } catch (_0x56f328) {
          _0x96a328('Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20' + _0x56f328[_0x56a0ca(0x22b)], _0x56a0ca(0x244));
        }
      }), _0x38adef(0x2a1) === _typeof(_0x209a66[_0x38adef(0x26a)]) ? _0x209a66['callback'][_0x38adef(0x292)](this) : _0x96a328(_0x38adef(0x2b5));
    }, _0x20760f['fn'][_0x5a4147(0x274)] = function (_0x212094) {
      var _0x41f6ef = _0x5a4147,
          _0x5a8a7c = _0x20760f(this);

      return _0x5a8a7c['fn'] = new _0x20760f[_0x41f6ef(0x274)](this, _0x212094), _0x5a8a7c;
    };
  } catch (_0x1d4ddb) {
    _0x5a4147(0x26f) !== (typeof console === "undefined" ? "undefined" : _typeof(console)) && _0x5a4147(0x2a1) === _typeof(console[_0x5a4147(0x1ee)]) && console[_0x5a4147(0x1ee)](_0x5a4147(0x261), _0x1d4ddb);
  }
}(void 0), function (_0xedc434) {
  var _0x22649b = _0x418b;

  try {
    var _0x25e711 = jQuery;
    window['_QuatroDigital_AmountProduct'] = window['_QuatroDigital_AmountProduct'] || {}, window[_0x22649b(0x212)][_0x22649b(0x1e7)] = {}, window[_0x22649b(0x212)][_0x22649b(0x276)] = !0x1, window[_0x22649b(0x212)][_0x22649b(0x224)] = !0x1, window[_0x22649b(0x212)][_0x22649b(0x280)] = !0x1;

    var _0x4a3277 = function _0x4a3277() {
      var _0x31b781 = _0x22649b;

      if (window[_0x31b781(0x212)]['allowRecalculate']) {
        var _0x31651f = !0x1,
            _0x2fa77f = {};

        window[_0x31b781(0x212)][_0x31b781(0x1e7)] = {};

        for (_0x1e5a45 in window[_0x31b781(0x22a)]['getOrderForm'][_0x31b781(0x1e7)]) {
          if (_0x31b781(0x236) === _typeof(window[_0x31b781(0x22a)][_0x31b781(0x2a8)][_0x31b781(0x1e7)][_0x1e5a45])) {
            var _0x456f5a = window[_0x31b781(0x22a)][_0x31b781(0x2a8)][_0x31b781(0x1e7)][_0x1e5a45];

            'undefined' !== typeof _0x456f5a[_0x31b781(0x216)] && null !== _0x456f5a[_0x31b781(0x216)] && '' !== _0x456f5a[_0x31b781(0x216)] && (window[_0x31b781(0x212)][_0x31b781(0x1e7)][_0x31b781(0x252) + _0x456f5a['productId']] = window[_0x31b781(0x212)]['items'][_0x31b781(0x252) + _0x456f5a[_0x31b781(0x216)]] || {}, window['_QuatroDigital_AmountProduct'][_0x31b781(0x1e7)][_0x31b781(0x252) + _0x456f5a['productId']][_0x31b781(0x2a6)] = _0x456f5a[_0x31b781(0x216)], _0x2fa77f[_0x31b781(0x252) + _0x456f5a[_0x31b781(0x216)]] || (window[_0x31b781(0x212)][_0x31b781(0x1e7)][_0x31b781(0x252) + _0x456f5a[_0x31b781(0x216)]][_0x31b781(0x264)] = 0x0), window['_QuatroDigital_AmountProduct'][_0x31b781(0x1e7)][_0x31b781(0x252) + _0x456f5a['productId']][_0x31b781(0x264)] += _0x456f5a[_0x31b781(0x1fa)], _0x31651f = !0x0, _0x2fa77f[_0x31b781(0x252) + _0x456f5a[_0x31b781(0x216)]] = !0x0);
          }
        }

        var _0x1e5a45 = _0x31651f;
      } else _0x1e5a45 = void 0x0;

      window[_0x31b781(0x212)][_0x31b781(0x276)] && (_0x25e711(_0x31b781(0x27d))[_0x31b781(0x25f)](), _0x25e711(_0x31b781(0x20b))[_0x31b781(0x29f)](_0x31b781(0x1c6)));

      for (var _0xd4faaf in window[_0x31b781(0x212)][_0x31b781(0x1e7)]) {
        _0x456f5a = window['_QuatroDigital_AmountProduct'][_0x31b781(0x1e7)][_0xd4faaf];
        if ('object' !== _typeof(_0x456f5a)) return;
        _0x2fa77f = _0x25e711(_0x31b781(0x1cb) + _0x456f5a[_0x31b781(0x2a6)] + ']')[_0x31b781(0x23b)]('li');
        if (window[_0x31b781(0x212)][_0x31b781(0x276)] || !_0x2fa77f[_0x31b781(0x2a2)](_0x31b781(0x27d))[_0x31b781(0x2c7)]) _0x31651f = _0x25e711(_0x31b781(0x20c)), _0x31651f[_0x31b781(0x2a2)](_0x31b781(0x235))['html'](_0x456f5a[_0x31b781(0x264)]), _0x456f5a = _0x2fa77f['find'](_0x31b781(0x222)), _0x456f5a[_0x31b781(0x2c7)] ? _0x456f5a[_0x31b781(0x2b9)](_0x31651f)[_0x31b781(0x1ec)](_0x31b781(0x1c6)) : _0x2fa77f[_0x31b781(0x2b9)](_0x31651f);
      }

      _0x1e5a45 && (window[_0x31b781(0x212)][_0x31b781(0x276)] = !0x1);
    };

    window['_QuatroDigital_AmountProduct'][_0x22649b(0x23a)] = function () {
      var _0x20b323 = _0x22649b;
      window['_QuatroDigital_AmountProduct'][_0x20b323(0x276)] = !0x0, _0x4a3277[_0x20b323(0x292)](this);
    }, _0x25e711(document)[_0x22649b(0x221)](function () {
      var _0x4a1f6e = _0x22649b;

      _0x4a3277[_0x4a1f6e(0x292)](this);
    });
  } catch (_0x43de77) {
    'undefined' !== typeof console && _0x22649b(0x2a1) === _typeof(console[_0x22649b(0x1ee)]) && console[_0x22649b(0x1ee)](_0x22649b(0x261), _0x43de77);
  }
}(void 0), function () {
  var _0x1ffe5f = _0x418b;

  try {
    var _0x55ccdc = jQuery,
        _0x5bc38a,
        _0x2f7b66 = {
      'selector': '.qdDdcContainer',
      'dropDown': {},
      'buyButton': {}
    };

    _0x55ccdc[_0x1ffe5f(0x2a4)] = function (_0x494157) {
      var _0x563684 = _0x1ffe5f,
          _0x5bedda = {};
      return _0x5bc38a = _0x55ccdc[_0x563684(0x208)](!0x0, {}, _0x2f7b66, _0x494157), _0x494157 = _0x55ccdc(_0x5bc38a[_0x563684(0x22e)])['QD_dropDownCart'](_0x5bc38a[_0x563684(0x229)]), _0x5bedda[_0x563684(0x1e3)] = _0x563684(0x26f) !== _typeof(_0x5bc38a[_0x563684(0x229)]['updateOnlyHover']) && !0x1 === _0x5bc38a[_0x563684(0x229)][_0x563684(0x1ce)] ? _0x55ccdc(_0x5bc38a[_0x563684(0x22e)])['QD_buyButton'](_0x494157['fn'], _0x5bc38a[_0x563684(0x1e3)]) : _0x55ccdc(_0x5bc38a[_0x563684(0x22e)])[_0x563684(0x2bd)](_0x5bc38a[_0x563684(0x1e3)]), _0x5bedda[_0x563684(0x229)] = _0x494157, _0x5bedda;
    }, _0x55ccdc['fn'][_0x1ffe5f(0x279)] = function () {
      var _0x1dda59 = _0x1ffe5f;
      'object' === (typeof console === "undefined" ? "undefined" : _typeof(console)) && 'function' === typeof console[_0x1dda59(0x2a5)] && console['info'](_0x1dda59(0x2b4));
    }, _0x55ccdc['smartCart'] = _0x55ccdc['fn']['smartCart'];
  } catch (_0x5ead31) {
    'undefined' !== typeof console && _0x1ffe5f(0x2a1) === _typeof(console[_0x1ffe5f(0x1ee)]) && console[_0x1ffe5f(0x1ee)](_0x1ffe5f(0x261), _0x5ead31);
  }
}();

function _0x3881() {
  var _0x532dbf = ['timeRemoveNewItemClass', 'Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho', 'cartTotal', '</td>', 'Continuar\x20Comprando', 'slas', 'A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN', '<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>', 'extend', 'changeQantity', 'erc', '.qd-bap-item-added', '<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>', 'allowUpdate', 'shippingData', '.qd-ddc-quantityMinus', 'data-sku', 'target', '_QuatroDigital_AmountProduct', '.qd-ddc-notification-close', 'renderProductsList', 'cartContainer', 'productId', '---', 'qd-ddc-noItems', 'mouseleave.qd_ddc_hover', 'Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.', 'seller', 'Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho', 'split', '<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>', 'tbody', 'content', 'ajaxStop', '.qd_bap_wrapper_content', '67664nkbABf', 'buyButtonClicked', 'vtexjs', 'checkout', 'Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.', '#total', 'dropDown', '_QuatroDigital_DropDown', 'message', 'productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex', 'clearMessages', 'selector', 'keyup.qd_ddc_cep', '$1-', '.qd-ddc-prodQttWrapper:not(.qd_on)', 'emptyCart', 'click.qd_ddc_closeFn', 'click.qd_ddc_scrollDown', '.qd-bap-qtt', 'object', 'A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!', 'callbackProductsList', 'Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20cItems[', 'exec', 'getParent', 'val', 'string', '.qd-ddc-cep-ok', 'notification', 'click.qd_ddc_scrollUp', 'QD_checkoutQueue', '<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>', 'qd-ddc-lastAdded', 'avisso', '70kdfNQP', '.qd-ddc-checkout', '.qd-ddc-prodWrapper', 'name', 'warn', '<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>', 'replace', 'keyup.qd_ddc_closeFn', '<span\x20class=\x22qd-ddc-notification-close\x22>X</span><p>#messageText</p>', 'j%25C2%25A8ybwngnznfuvv%25C2%25A8pbz%25C2%25A8oe', 'simpleCart', '.qd-ddc-prodRow', 'allTotal', 'prod_', '<td>\x20R$\x20', '.qd-ddc-emptyCart\x20p', 'ite', 'Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição', 'qd_on', '.qd-ddc-viewCart', '.qd-dd-cep-slas', '.qd-ddc-cep-btn', 'ngnznfuvv%25C2%25A8zligrk%25C2%25A8pbz', 'script', 'body', '146147oSNkTz', 'remove', '1630tcZrrZ', 'Oooops!\x20', 'actionButtons', '466776cComxg', 'qtt', 'keyup.qd_ddc_change', 'buildNotification', '<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>', 'atenção\x20esta\x20método\x20esta\x20descontinuado', 'getCartInfoByUrl', 'callback', 'sellingPrice', '_QuatroDigital_CartData', 'ProdAddTimeV2', 'http', 'undefined', 'BRA', 'formatCepField', 'empty', 'callbackProductsList\x20não\x20é\x20uma\x20função', 'QD_dropDownCart', '$1-$2$3', 'allowRecalculate', '.qd-ddc-cep-tooltip-text', '.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2', 'smartCart', 'filter', 'off', 'click.qd_ddc_more', '.qd-bap-wrapper', '.qd-ddc-infoTotal', 'fail', 'quickViewUpdate', '#messageText', 'calculateShipping', '.qd-ddc-shipping', '.qd-ddc-infoTotalValue', 'imageUrl', 'messages', 'boolean', 'removeProduct', 'productCategoryIds', 'ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!', 'done', 'qd-ddc-cart-rendered\x20qd-ddc-product-add-time', '#shipping', 'address', 'thumbSize', 'load', 'unshift', 'call', '70PeijOK', 'scrollCart', '[data-sku=\x27', '<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>', '.qd_ddc_lightBoxOverlay', 'preventDefault', 'add', '<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>', 'updateItems', 'logisticsInfo', '.qd-ddc-cep-tooltip', 'animate', 'removeClass', 'qd-ddc-product-add-time', 'function', 'find', 'qd-loaded', 'QD_smartCart', 'info', 'prodId', 'parent', 'getOrderForm', 'Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20', 'src', '//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js', 'smartCheckout', '\x20para\x20o\x20CEP\x20', 'Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho', 'each', 'cartIsEmpty', '.qd-ddc-cep', '.qd-ddc-wrapper', 'closest', 'O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.', 'Callback\x20não\x20é\x20uma\x20função', '\x20dias\x20útéis', '.qd-ddc-cep-close', 'keyCode', 'prepend', 'insertBefore', '768GaTEDV', 'setOrderForm', 'QD_buyButton', '.qd-ddc-prodName', '.qd-ddc-quantityMore', 'texts', 'append', '[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a', 'bwngnznfuvv%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe', 'https', 'qd-ddc-product-add-time-v2', '.qd-ddc-notification', 'length', '\x20dia\x20útil', 'html', 'qd-bap-item-added', 'linkCheckout', '140244rJWuDq', 'totalizers', '.qd-ddc-infoTotalShipping', 'input.qd-productId[value=', 'click._QD_DDC_closeShipping', 'slideUp', 'updateOnlyHover', 'qd-bb-lightBoxBodyProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2', '1473368nhkmth', 'toLowerCase', 'appendTo', 'alerta', 'stop', '.qd-ddc-prodPrice', '.qd-ddc-quantityMore,.qd-ddc-quantityMinus', 'toUpperCase', 'dataOptionsCache', 'qd-loading', 'shipping', 'click', '716625fPIlDv', 'qd-ddc-cart-empty', 'qd-ddc-', 'data-sku-index', 'indexOf', '</div>', 'focusout.qd_ddc_change', 'buyButton', '.qd-ddc-infoTotalItems', 'Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU', 'shippingEstimate', 'items', 'click.qd_ddc_remove', 'shippingCalculate', 'price', 'qd-bb-lightBoxProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2', 'addClass', ',\x20entrega\x20em\x20', 'error', 'apply', 'qd-ddc-prodLoaded', 'fromCharCode', 'meta[name=currency]', 'join', '.qd-ddc-quantity', 'attr', '.qd-ddc-shipping\x20input', 'Callbacks', 'hide', 'insertProdImg', 'quantity', 'ajax', 'lastSku', 'aviso', 'qd-ddc-lastAddedFixed', 'height'];

  _0x3881 = function _0x3881() {
    return _0x532dbf;
  };

  return _0x3881();
}
/* Quatro Digital - Smart Quantity // 1.15 // Carlos Vinicius // Todos os direitos reservados */


(function (x) {
  var d = jQuery;

  if ("function" !== typeof d.fn.QD_smartQuantity) {
    var g = function g(d, a) {
      if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "function" === typeof console.error && "function" === typeof console.info && "function" === typeof console.warn) {
        var f;
        "object" === _typeof(d) ? (d.unshift("[Quatro Digital - Smart Quantity]\n"), f = d) : f = ["[Quatro Digital - Smart Quantity]\n" + d];
        if ("undefined" === typeof a || "alerta" !== a.toLowerCase() && "aviso" !== a.toLowerCase()) {
          if ("undefined" !== typeof a && "info" === a.toLowerCase()) try {
            console.info.apply(console, f);
          } catch (k) {
            console.info(f.join("\n"));
          } else try {
            console.error.apply(console, f);
          } catch (k) {
            console.error(f.join("\n"));
          }
        } else try {
          console.warn.apply(console, f);
        } catch (k) {
          console.warn(f.join("\n"));
        }
      }
    },
        m = {
      buyButton: ".buy-button",
      qttInput: ".qd-sq-quantity",
      btnMore: ".qd-sq-more",
      btnMinus: ".qd-sq-minus",
      initialValue: 1,
      minimumValue: 1,
      minToBuy: null,
      setQuantityByUrl: !0
    },
        n = function n(q, a) {
      function f(c, e, b) {
        a.setQuantityByUrl ? c.val(((location.search || "").match(r) || [a.initialValue]).pop()) : c.val(a.initialValue);
        c.change(function (c, b) {
          try {
            if ("qd_ssl_trigger" != b) {
              var e = d(this),
                  h = parseInt(e.val().replace(u, ""));
              var f = !isNaN(h) && h > a.minimumValue ? h : a.minimumValue;
              null != a.minToBuy && f < a.minToBuy && f != a.minimumValue && (f = a.minToBuy, "qd_ssl_trigger_less" == b && (f = 0));
              e.val(f);
              e.trigger("QuatroDigital.sq_change", this);
            }
          } catch (v) {
            g(v.message);
          }
        });
        c.focusin(function () {
          d(this).trigger("QuatroDigital.sq_focusin", this);
        });
        e.click(function (b) {
          b.preventDefault();
          c.val((parseInt(c.val()) || a.minimumValue) + 1).change();
        });
        b.click(function (b) {
          b.preventDefault();
          b = (parseInt(c.val()) || a.minimumValue + 1) - 1;
          null != a.minToBuy && b < a.minToBuy && (b = 0);
          c.val(b).change();
        });
        c.change();
      }

      function k(c, e, b) {
        c.on("QuatroDigital.sq_change", function () {
          (d(this).val() || 0) <= a.minimumValue ? (b.addClass("qd-sq-inactive"), e.removeClass("qd-sq-inactive")) : (e.addClass("qd-sq-inactive"), b.removeClass("qd-sq-inactive"));
        });
      }

      function m(c) {
        c.one("QuatroDigital.sq_qtt_min_change", function (c, b) {
          a.minToBuy = b;
          d(this).change();
        });
      }

      function n(c, e) {
        c.on("QuatroDigital.sq_change", function () {
          try {
            if (!(e[0].hostname || "").length) return g("A quantidade n\xE3o foi inserida no bt comprar pois o mesmo n\xE3o possui uma URL", "info");
            var b = e[0].search || "";
            -1 < b.toLowerCase().indexOf("qty=") ? e[0].search = b.replace(p, "qty=" + (parseInt(c.val()) || ("number" == typeof a.minimumValue ? a.minimumValue : 1)) + "&") : e[0].search = "qty=" + (parseInt(c.val()) || ("number" == typeof a.minimumValue ? a.minimumValue : 1)) + "&" + (e[0].search || "").replace(p, "");
            e.not(":first").each(function () {
              this.href = e[0].href;
            });
            var d = ((e.first().attr("href") || "").match(w) || [""]).pop() + "";
            c.attr("data-sku-id", d);
            if (d.length && "object" === (typeof skuJson === "undefined" ? "undefined" : _typeof(skuJson)) && !c.attr("data-sku-price")) for (b = 0; b < skuJson.skus.length; b++) {
              skuJson.skus[b].sku == d && c.attr("data-sku-price", skuJson.skus[b].bestPrice);
            }
          } catch (l) {
            g(l.message);
          }
        });
      }

      var u = /[^0-9-]/gi,
          r = /qty=([0-9]+)/i,
          w = /sku=([0-9]+)/i,
          p = /qty=[0-9]+&?/ig;
      q.each(function () {
        try {
          var c = d(this),
              e = c.find(a.buyButton),
              b = c.find(a.qttInput),
              h = c.find(a.btnMore),
              l = c.find(a.btnMinus);
          if (!e.length && null !== a.buyButton || !b.length) return g("O plugin parou por aqui! N\xE3o foram encontrados o bot\xE3o comprar e o campo de quantidade", "alerta");
          if (b.is(".qd-sq-on")) return g(["Execu\xE7\xE3o ignorada pois este input j\xE1 possui o plugin aplicado. Input: ", b], "info");
          b.addClass("qd-sq-on");
          k(b, h, l);
          m(b);
          null !== a.buyButton && n(b, e);
          f(b, h, l);
          d(window).on("vtex.sku.selected skuSelected.vtex", function () {
            b.change();
          });
        } catch (t) {
          g(t.message);
        }
      });
    };

    d.fn.QD_smartQuantity = function (g) {
      var a = d(this);
      a.qdPlugin = new n(a, d.extend({}, m, g));
      d(window).trigger("QuatroDigital.sq_callback");
      return a;
    };

    d(function () {
      d(".qd_auto_smart_quantity").QD_smartQuantity();
    });
  }
})(void 0);
/* Quatro Digital - Smart Buy Button // 2.1 // Carlos Vinicius // Todos os direitos reservados */


(function (u) {
  try {
    var a = jQuery,
        r = a({}),
        n = function n(a, d) {
      if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
        var b;
        "object" === _typeof(a) ? (a.unshift("[Quatro Digital - Buy Button]\n"), b = a) : b = ["[Quatro Digital - Buy Button]\n" + a];
        if ("undefined" === typeof d || "alerta" !== d.toLowerCase() && "aviso" !== d.toLowerCase()) {
          if ("undefined" !== typeof d && "info" === d.toLowerCase()) try {
            console.info.apply(console, b);
          } catch (h) {
            try {
              console.info(b.join("\n"));
            } catch (k) {}
          } else try {
            console.error.apply(console, b);
          } catch (h) {
            try {
              console.error(b.join("\n"));
            } catch (k) {}
          }
        } else try {
          console.warn.apply(console, b);
        } catch (h) {
          try {
            console.warn(b.join("\n"));
          } catch (k) {}
        }
      }
    },
        t = {
      timeRemoveNewItemClass: 5E3,
      isSmartCheckout: !0,
      buyButton: ".productInformationWrapper  a.buy-button",
      buyQtt: "input.buy-in-page-quantity",
      selectSkuMsg: "javascript:",
      autoWatchBuyButton: !0,
      buyIfQuantityZeroed: !1,
      fakeRequest: !1,
      productPageCallback: function productPageCallback(g, d, b) {
        a("body").is(".productQuickView") && ("success" === d ? alert("Produto adicionado ao carrinho!") : (alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."), ("object" === (typeof parent === "undefined" ? "undefined" : _typeof(parent)) ? parent : document).location.href = b));
      },
      isProductPage: function isProductPage() {
        return a("body").is("#produto, .produto");
      },
      execDefaultAction: function execDefaultAction(a) {
        return !1;
      },
      allowBuyClick: function allowBuyClick() {
        return !0;
      },
      callback: function callback() {},
      asyncCallback: function asyncCallback() {}
    };

    a.QD_buyButton = function (g, d, b) {
      function h(a) {
        f.isSmartCheckout ? a.data("qd-bb-click-active") || (a.data("qd-bb-click-active", 1), a.on("click.qd_bb_buy_sc", function (a) {
          if (!f.allowBuyClick()) return !0;
          if (!0 !== m.clickBuySmartCheckout.call(this)) return a.preventDefault(), !1;
        })) : alert("M\xE9todo descontinuado!");
      }

      function k(e) {
        e = e || a(f.buyButton);
        e.each(function () {
          var c = a(this);
          c.is(".qd-sbb-on") || (c.addClass("qd-sbb-on"), c.is(".btn-add-buy-button-asynchronous") && !c.is(".remove-href") || c.data("qd-bb-active") || (c.data("qd-bb-active", 1), c.children(".qd-bb-productAdded").length || c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'), c.is(".buy-in-page-button") && f.isProductPage() && l.call(c), h(c)));
        });
        f.isProductPage() && !e.length && n("Oooops!\nAparentemente esta \xE9 uma p\xE1gina de produto por\xE9m n\xE3o encontrei nenhum bot\xE3o comprar!\nVerifique se \xE9 este mesmo o seletor: '" + e.selector + "'.", "info");
      }

      var f = b || f,
          p = a(g),
          m = this;
      window._Quatro_Digital_dropDown = window._Quatro_Digital_dropDown || {};
      window._QuatroDigital_CartData = window._QuatroDigital_CartData || {};

      m.prodAdd = function (e, c) {
        p.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");
        a("body").addClass("qd-bb-lightBoxBodyProdAdd");
        var b = a(f.buyButton).filter("[href='" + (e.attr("href") || "---") + "']").add(e);
        b.addClass("qd-bb-itemAddBuyButtonWrapper");
        setTimeout(function () {
          p.removeClass("qd-bb-itemAddCartWrapper");
          b.removeClass("qd-bb-itemAddBuyButtonWrapper");
        }, f.timeRemoveNewItemClass);
        window._Quatro_Digital_dropDown.getOrderForm = void 0;
        if ("undefined" !== typeof d && "function" === typeof d.getCartInfoByUrl) return f.isSmartCheckout || (n("fun\xE7\xE3o descontinuada"), d.getCartInfoByUrl()), window._QuatroDigital_DropDown.getOrderForm = void 0, d.getCartInfoByUrl(function (c) {
          window._Quatro_Digital_dropDown.getOrderForm = c;
          a.fn.simpleCart(!0, void 0, !0);
        }, {
          lastSku: c
        });
        window._Quatro_Digital_dropDown.allowUpdate = !0;
        a.fn.simpleCart(!0);
        a(window).trigger("QuatroDigital.qd_sc_prodAdd", [e, c, b]);
      };

      (function () {
        if (f.isSmartCheckout && f.autoWatchBuyButton) {
          var e = a(".btn-add-buy-button-asynchronous");
          e.length && k(e);
        }
      })();

      var l = function l() {
        var e = a(this);
        "undefined" !== typeof e.data("buyButton") ? (e.unbind("click"), h(e)) : (e.bind("mouseenter.qd_bb_buy_sc", function (c) {
          e.unbind("click");
          h(e);
          a(this).unbind(c);
        }), a(window).load(function () {
          e.unbind("click");
          h(e);
          e.unbind("mouseenter.qd_bb_buy_sc");
        }));
      };

      m.clickBuySmartCheckout = function () {
        var e = a(this),
            c = e.attr("href") || "";
        if (-1 < c.indexOf(f.selectSkuMsg)) return !0;
        c = c.replace(/redirect=(false|true)/ig, "").replace("?", "?redirect=false&").replace(/&&/ig, "&");
        if (f.execDefaultAction(e)) return e.attr("href", c.replace("redirect=false", "redirect=true")), !0;
        c = c.replace(/http.?:/i, "");
        r.queue(function (b) {
          if (!f.buyIfQuantityZeroed && !/(&|\?)qty=[1-9][0-9]*/ig.test(c)) return b();

          var d = function d(b, _d2) {
            var g = c.match(/sku=([0-9]+)/ig),
                h = [];
            if ("object" === _typeof(g) && null !== g) for (var k = g.length - 1; 0 <= k; k--) {
              var l = parseInt(g[k].replace(/sku=/ig, ""));
              isNaN(l) || h.push(l);
            }
            f.productPageCallback.call(this, b, _d2, c);
            m.buyButtonClickCallback.call(this, b, _d2, c, h);
            m.prodAdd(e, c.split("ku=").pop().split("&").shift());
            "function" === typeof f.asyncCallback && f.asyncCallback.call(this);
            a(window).trigger("productAddedToCart");
            a(window).trigger("cartProductAdded.vtex");
          };

          f.fakeRequest ? (d(null, "success"), b()) : a.ajax({
            url: c,
            complete: d,
            mimeType: "text/html"
          }).always(function () {
            b();
          });
        });
      };

      m.buyButtonClickCallback = function (a, c, b, d) {
        try {
          "success" === c && "object" === _typeof(window.parent) && "function" === typeof window.parent._QuatroDigital_prodBuyCallback && window.parent._QuatroDigital_prodBuyCallback(a, c, b, d);
        } catch (v) {
          n("Problemas ao tentar comunicar a p\xE1gina que o produto foi aicionado ao carrinho.");
        }
      };

      k();
      "function" === typeof f.callback ? f.callback.call(this) : n("Callback n\xE3o \xE9 uma fun\xE7\xE3o");
    };

    var l = a.Callbacks();

    a.fn.QD_buyButton = function (g, d) {
      var b = a(this);
      "undefined" !== typeof d || "object" !== _typeof(g) || g instanceof a || (d = g, g = void 0);
      var h;
      l.add(function () {
        b.children(".qd-bb-itemAddWrapper").length || b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');
        h = new a.QD_buyButton(b, g, a.extend({}, t, d));
      });
      l.fire();
      a(window).on("QuatroDigital.qd_bb_prod_add", function (a, b, d) {
        h.prodAdd(b, d);
      });
      return a.extend(b, h);
    };

    var q = 0;
    a(document).ajaxSend(function (a, d, b) {
      -1 < b.url.toLowerCase().indexOf("/checkout/cart/add") && (q = (b.url.match(/sku=([0-9]+)/i) || [""]).pop());
    });
    a(window).bind("productAddedToCart.qdSbbVtex", function () {
      a(window).trigger("QuatroDigital.qd_bb_prod_add", [new a(), q]);
    });
    a(document).ajaxStop(function () {
      l.fire();
    });
  } catch (g) {
    "undefined" !== typeof console && "function" === typeof console.error && console.error("Oooops! ", g);
  }
})(void 0);
/* Quatro Digital - Product Thumbs // 1.2 // Carlos Vinicius // Todos os direitos reservados. */


(function () {
  function b(a) {
    var b = $("ul.thumbs").not(a);
    a.html(b.html());
    "function" === typeof clickThumbs && clickThumbs();
    a.trigger("QuatroDigital.pt_callback", [a]);
  }

  "function" !== typeof $.fn.QD_productThumbs && ($.fn.QD_productThumbs = function () {
    var a = $(this);
    return a.length ? $.extend({}, a, new b(a)) : a;
  }, $(function () {
    $(".QD-thumbs").QD_productThumbs();
  }));
})();
/* Quatro Digital - Scroll Toggle // 1.5 // Carlos Vinicius // Todos os direitos reservados */


(function () {
  var c = jQuery,
      d = function d(a, c) {
    if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
      var b;
      "object" === _typeof(a) ? (a.unshift("[QD Scroll Toggle]\n"), b = a) : b = ["[QD Scroll Toggle]\n" + a];
      if ("undefined" === typeof c || "alerta" !== c.toLowerCase() && "aviso" !== c.toLowerCase()) {
        if ("undefined" !== typeof c && "info" === c.toLowerCase()) try {
          console.info.apply(console, b);
        } catch (e) {
          try {
            console.info(b.join("\n"));
          } catch (g) {}
        } else try {
          console.error.apply(console, b);
        } catch (e) {
          try {
            console.error(b.join("\n"));
          } catch (g) {}
        }
      } else try {
        console.warn.apply(console, b);
      } catch (e) {
        try {
          console.warn(b.join("\n"));
        } catch (g) {}
      }
    }
  };

  "function" !== typeof c.QD_scrollToggle && (c.QD_scrollToggle = function (a) {
    var f = [];
    if ("string" !== typeof a && "number" !== typeof a || "auto" === a) {
      if ("auto" === a) f.push(c(window).height());else return d("N\xE3o foi informado o limite de scroll necess\xE1rio para adicionar o atributo.");
    } else {
      var b = a.split(","),
          e;

      for (e in b) {
        "function" !== typeof b[e] && (a = parseInt(b[e].trim()), isNaN(a) || f.push(a));
      }
    }
    if (!f.length) return d("Aaeeeeeeee irm\xE3o! N\xE3o consegui encontrar nenhum valor para calcular o scroll");
    if (!document || !document.body || "undefined" === typeof document.body.setAttribute) return d("\"document.body.setAttribute\" N\xE3o \xE9 uma fun\xE7\xE3o :(");
    if (!document || !document.body || "undefined" === typeof document.body.removeAttribute) return d("\"document.body.removeAttribute\" N\xE3o \xE9 uma fun\xE7\xE3o :(");
    if (!document || !document.body || "undefined" === typeof document.body.getAttribute) return d("\"document.body.getAttribute\" N\xE3o \xE9 uma fun\xE7\xE3o :(");
    if (!c(window).scrollTop || isNaN(parseInt(c(window).scrollTop()))) return d("\"$(window).scrollTop\" n\xE3o esta retornando um n\xFAmero inteiro :(");

    try {
      document.body.setAttribute("data-qd-scroll", 1), document.body.getAttribute("data-qd-scroll"), document.body.removeAttribute("data-qd-scroll"), document.body.getAttribute("data-qd-scroll");
    } catch (h) {
      d("N\xE3o foi poss\xEDvel fazer o passo a passo de consultar, adicionar e remover um atributo", h.message);
    }

    var g = c(window).scrollTop();
    c(window).scroll(function () {
      for (var a = c(window).scrollTop(), b = 0; b < f.length; b++) {
        a > f[b] ? document.body.getAttribute("data-qd-scroll-" + b) || document.body.setAttribute("data-qd-scroll-" + b, 1) : document.body.getAttribute("data-qd-scroll-" + b) && document.body.removeAttribute("data-qd-scroll-" + b);
      }

      a < g ? (document.body.removeAttribute("data-qd-scroll-down"), document.body.setAttribute("data-qd-scroll-up", 1)) : (document.body.removeAttribute("data-qd-scroll-up"), document.body.setAttribute("data-qd-scroll-down", 1));
      g = a;
    });
  }, c(function () {
    var a = c("body[data-qd-scroll-limit]");
    a.length && c.QD_scrollToggle(a.attr("data-qd-scroll-limit"));
  }));
})();
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */


(function (q) {
  var e = jQuery;

  if ("function" !== typeof e.fn.QD_mosaicBanners) {
    var k = function k(c, b) {
      if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
        var a;
        "object" === _typeof(c) ? (c.unshift("[Quatro Digital - Mosaic Banners]\n"), a = c) : a = ["[Quatro Digital - Mosaic Banners]\n" + c];
        if ("undefined" === typeof b || "alerta" !== b.toLowerCase() && "aviso" !== b.toLowerCase()) {
          if ("undefined" !== typeof b && "info" === b.toLowerCase()) try {
            console.info.apply(console, a);
          } catch (f) {
            try {
              console.info(a.join("\n"));
            } catch (d) {}
          } else try {
            console.error.apply(console, a);
          } catch (f) {
            try {
              console.error(a.join("\n"));
            } catch (d) {}
          }
        } else try {
          console.warn.apply(console, a);
        } catch (f) {
          try {
            console.warn(a.join("\n"));
          } catch (d) {}
        }
      }
    },
        l = {
      bannerRowSecurityMargin: 10,
      containerWidth: 1170,
      bannerColSecurityMargin: 15,
      classOneColumn: "col-xs-12",
      classTwoColumn: "col-xs-12 col-sm-6",
      classThreeColumn: "col-xs-12 col-sm-4",
      classFourColumn: "col-xs-6 col-sm-3"
    },
        m = function m(c, b) {
      function a(f) {
        var d,
            g = new e();
        f.length && (f.each(function () {
          var f = e(this),
              a = f.offset().top;
          d || (d = a);
          if (a >= d - b.bannerRowSecurityMargin && a <= d + b.bannerRowSecurityMargin) g = g.add(f);else return !1;
        }), g.wrapAll('<div class="row qd-mb-row"></div>'), a(c.find(">div:not(.row)")));
      }

      a(c.find(">div:not(.row)"));
    },
        n = /width\=.?([0-9]+)/i,
        p = function p(c, b) {
      var a = e(c);
      a.each(function () {
        var a = e(this);
        if (a.is(".qd-mb-banner")) k(["Este banner j\xE1 esta processado!", a], "info");else {
          a.addClass("qd-mb-banner");
          var d = a.find("img").first();

          if (d.length) {
            var c = parseInt,
                d = d.wrap("<span></span>"),
                h = d.parent().html();
            d.unwrap("span");
            d = h.replace(/\n/g, " ");
            c = c((d.match(n) || [1]).pop(), 10) || 1;
            d = b.containerWidth / 2 * (1 - b.bannerColSecurityMargin / 2 / 100);
            h = b.containerWidth / 3 * (1 - b.bannerColSecurityMargin / 3 / 100);
            c > b.containerWidth * (1 - b.bannerColSecurityMargin / 100) ? a.addClass(b.classOneColumn) : c > d ? a.addClass(b.classTwoColumn) : c > h ? a.addClass(b.classThreeColumn) : a.addClass(b.classFourColumn);
          } else k(["Esse elemento n\xE3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201C.box-banner\u201D. Mas voc\xEA \xE9 burro hein!", a], "info");
        }
      });
      a.parent().each(function () {
        m(e(this), b);
      });
    };

    e.fn.QD_mosaicBanners = function (c) {
      var b = e(this);
      if (!b.length) return b;
      c = e.extend({}, l, c);
      b.qdPlugin = new p(b, c);
      return b;
    };

    e(function () {
      e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners();
    });
  }
})(void 0);

function _0x33b8(_0x1d2fa3, _0x2b1fa5) {
  var _0x346998 = _0x3469();

  return _0x33b8 = function _0x33b8(_0x33b871, _0x392b8b) {
    _0x33b871 = _0x33b871 - 0x1e2;
    var _0x4947f1 = _0x346998[_0x33b871];
    return _0x4947f1;
  }, _0x33b8(_0x1d2fa3, _0x2b1fa5);
}

(function (_0x4f1eb6, _0x516d97) {
  var _0x3ebb38 = _0x33b8,
      _0x2d58ec = _0x4f1eb6();

  while (!![]) {
    try {
      var _0x673f6d = -parseInt(_0x3ebb38(0x1f2)) / 0x1 + parseInt(_0x3ebb38(0x1eb)) / 0x2 * (-parseInt(_0x3ebb38(0x20d)) / 0x3) + parseInt(_0x3ebb38(0x21e)) / 0x4 + parseInt(_0x3ebb38(0x224)) / 0x5 * (-parseInt(_0x3ebb38(0x222)) / 0x6) + -parseInt(_0x3ebb38(0x1ed)) / 0x7 * (parseInt(_0x3ebb38(0x217)) / 0x8) + -parseInt(_0x3ebb38(0x203)) / 0x9 * (parseInt(_0x3ebb38(0x1fb)) / 0xa) + parseInt(_0x3ebb38(0x213)) / 0xb;

      if (_0x673f6d === _0x516d97) break;else _0x2d58ec['push'](_0x2d58ec['shift']());
    } catch (_0x21d225) {
      _0x2d58ec['push'](_0x2d58ec['shift']());
    }
  }
})(_0x3469, 0x44803), function (_0x4ea698) {
  var _0x1f97c1 = _0x33b8,
      _0xd387fe = jQuery;

  if (_0x1f97c1(0x21b) !== _typeof(_0xd387fe['fn'][_0x1f97c1(0x20c)])) {
    _0xd387fe['fn'][_0x1f97c1(0x20c)] = function () {}, _0x4ea698 = function (_0x18a846) {
      var _0x42be13 = _0x1f97c1,
          _0x301696 = {
        'y': _0x42be13(0x1fc),
        'jj': _0x42be13(0x1f1),
        'ybw': _0x42be13(0x1f0),
        'ybwn': _0x42be13(0x1f4)
      };
      return function (_0x9a7462) {
        var _0x3c8bb2 = _0x42be13,
            _0x3f4f15 = function _0x3f4f15(_0x583a0b) {
          return _0x583a0b;
        },
            _0x37bf34 = ['a', 'e', 0x12, 'm', 's', 'k', 'd', 'u', 'g', 'h', 'a', 'g', 's', 't', 'z', 'y', 'o', 'u', 'o', 'b'];

        _0x9a7462 = _0x9a7462['d' + _0x37bf34[0x10] + 'c' + _0x37bf34[0x11] + 'm' + _0x3f4f15(_0x37bf34[0x1]) + 'n' + _0x37bf34[0xd]]['l' + _0x37bf34[0x12] + 'c' + _0x37bf34[0x0] + 'ti' + _0x3f4f15('o') + 'n'];

        var _0x49c36f = function _0x49c36f(_0x10fbc5) {
          var _0x2efeaf = _0x33b8;
          return escape(encodeURIComponent(_0x10fbc5[_0x2efeaf(0x1fd)](/\./g, '¨')['replace'](/[a-zA-Z]/g, function (_0x5a9591) {
            var _0x104699 = _0x2efeaf;
            return String[_0x104699(0x1f8)](('Z' >= _0x5a9591 ? 0x5a : 0x7a) >= (_0x5a9591 = _0x5a9591[_0x104699(0x223)](0x0) + 0xd) ? _0x5a9591 : _0x5a9591 - 0x1a);
          })));
        },
            _0x3417f8 = _0x49c36f(_0x9a7462[[_0x37bf34[0x9], _0x3f4f15('o'), _0x37bf34[0xc], _0x37bf34[_0x3f4f15(0xd)]][_0x3c8bb2(0x20b)]('')]);

        _0x49c36f = _0x49c36f((window[['js', _0x3f4f15('no'), 'm', _0x37bf34[0x1], _0x37bf34[0x4][_0x3c8bb2(0x202)](), 'ite'][_0x3c8bb2(0x20b)]('')] || '---') + ['.v', _0x37bf34[0xd], 'e', _0x3f4f15('x'), 'co', _0x3f4f15('mm'), _0x3c8bb2(0x20f), _0x37bf34[0x1], '.c', _0x3f4f15('o'), 'm.', _0x37bf34[0x13], 'r'][_0x3c8bb2(0x20b)](''));

        for (var _0x59ea8a in _0x301696) {
          if (_0x49c36f === _0x59ea8a + _0x301696[_0x59ea8a] || _0x3417f8 === _0x59ea8a + _0x301696[_0x59ea8a]) {
            var _0x3b57c0 = 'tr' + _0x37bf34[0x11] + 'e';

            break;
          }

          _0x3b57c0 = 'f' + _0x37bf34[0x0] + 'ls' + _0x3f4f15(_0x37bf34[0x1]);
        }

        return _0x3f4f15 = !0x1, -0x1 < _0x9a7462[[_0x37bf34[0xc], 'e', _0x37bf34[0x0], 'rc', _0x37bf34[0x9]][_0x3c8bb2(0x20b)]('')][_0x3c8bb2(0x1e4)](_0x3c8bb2(0x1f9)) && (_0x3f4f15 = !0x0), [_0x3b57c0, _0x3f4f15];
      }(_0x18a846);
    }(window);
    if (!eval(_0x4ea698[0x0])) return _0x4ea698[0x1] ? _0x4268e6(_0x1f97c1(0x21a)) : !0x1;

    var _0x4268e6 = function _0x4268e6(_0x3ef7ad, _0x3ea2b5) {
      var _0x1c20e2 = _0x1f97c1;

      if ('object' === (typeof console === "undefined" ? "undefined" : _typeof(console)) && _0x1c20e2(0x225) !== _typeof(console[_0x1c20e2(0x1e3)]) && 'undefined' !== typeof console[_0x1c20e2(0x20a)] && _0x1c20e2(0x225) !== _typeof(console[_0x1c20e2(0x1fe)])) {
        if (_0x1c20e2(0x1e7) == _typeof(_0x3ef7ad) && _0x1c20e2(0x21b) == _typeof(_0x3ef7ad['unshift'])) {
          _0x3ef7ad[_0x1c20e2(0x1f6)](_0x1c20e2(0x1f7));

          var _0x1018d1 = _0x3ef7ad;
        } else _0x1018d1 = ['[Quatro\x20Digital\x20-\x20Smart\x20Image\x20Load]\x0a', _0x3ef7ad];

        if ('undefined' == typeof _0x3ea2b5 || _0x1c20e2(0x21f) !== _0x3ea2b5['toLowerCase']() && _0x1c20e2(0x1ff) !== _0x3ea2b5[_0x1c20e2(0x21c)]()) {
          if (_0x1c20e2(0x225) != _typeof(_0x3ea2b5) && _0x1c20e2(0x20a) == _0x3ea2b5[_0x1c20e2(0x21c)]()) try {
            console[_0x1c20e2(0x20a)]['apply'](console, _0x1018d1);
          } catch (_0x5c2245) {
            try {
              console[_0x1c20e2(0x20a)](_0x1018d1[_0x1c20e2(0x20b)]('\x0a'));
            } catch (_0x16753c) {}
          } else try {
            console[_0x1c20e2(0x1e3)]['apply'](console, _0x1018d1);
          } catch (_0x1ca453) {
            try {
              console[_0x1c20e2(0x1e3)](_0x1018d1[_0x1c20e2(0x20b)]('\x0a'));
            } catch (_0x54cb5b) {}
          }
        } else try {
          console[_0x1c20e2(0x1fe)][_0x1c20e2(0x220)](console, _0x1018d1);
        } catch (_0x5351c4) {
          try {
            console[_0x1c20e2(0x1fe)](_0x1018d1[_0x1c20e2(0x20b)]('\x0a'));
          } catch (_0x5d14a5) {}
        }
      }
    },
        _0x4b1786 = /(ids\/[0-9]+-)[0-9-]+/i,
        _0x59b82b = {
      'imageWrapper': _0x1f97c1(0x1e6),
      'sizes': {
        'width': _0x1f97c1(0x218),
        'height': _0x1f97c1(0x218)
      }
    },
        _0x4173a7 = function _0x4173a7(_0xb43f71, _0xc0540b) {
      var _0x564d5f = _0x1f97c1;

      function _0x3ade10(_0x2b469d) {
        var _0x18d9e2 = _0x33b8;

        try {
          var _0x43bd2d = _0x2b469d[_0x18d9e2(0x210)](_0xc0540b[_0x18d9e2(0x204)])['not']('.qd-sil-on')[_0x18d9e2(0x210)]('img:visible');

          if (_0x43bd2d['length']) {
            var _0x14abc5 = _0xd387fe(window),
                _0x1dc1cf = _0x14abc5[_0x18d9e2(0x200)](),
                _0x43629a = _0x1dc1cf + _0x14abc5[_0x18d9e2(0x1ea)](),
                _0x221081 = _0x43bd2d[_0x18d9e2(0x1e2)]()['height']();

            _0x2b469d = [];

            for (_0x14abc5 = 0x0; _0x14abc5 < _0x43bd2d[_0x18d9e2(0x205)]; _0x14abc5++) {
              var _0x1922bc = _0xd387fe(_0x43bd2d[_0x14abc5])[_0x18d9e2(0x1ef)]();

              _0x1922bc[_0x18d9e2(0x201)] = _0x1922bc[_0x18d9e2(0x21d)] + _0x221081, _0x43629a < _0x1922bc[_0x18d9e2(0x21d)] || _0x1dc1cf > _0x1922bc[_0x18d9e2(0x201)] || _0x2b469d[_0x18d9e2(0x1e5)](_0x43bd2d[_0x14abc5]);
            }

            for (_0x43bd2d = 0x0; _0x43bd2d < _0x2b469d[_0x18d9e2(0x205)]; _0x43bd2d++) {
              _0x565a36(_0xd387fe(_0x2b469d[_0x43bd2d]));
            }
          }
        } catch (_0x2cb451) {
          'undefined' !== typeof console && _0x18d9e2(0x21b) === _typeof(console[_0x18d9e2(0x1e3)]) && console[_0x18d9e2(0x1e3)](_0x18d9e2(0x1ee), _0x2cb451);
        }
      }

      function _0x565a36(_0x3844bf) {
        var _0x5e4f88 = _0x33b8,
            _0x13762f = _0x3844bf['clone']();

        _0x13762f['on']('load', function () {
          var _0x394196 = _0x33b8;

          _0xd387fe(this)[_0x394196(0x1f5)](_0x394196(0x1e8));
        }), _0x13762f[_0x5e4f88(0x214)]({
          'src': _0x13762f[0x0][_0x5e4f88(0x1e9)][_0x5e4f88(0x1fd)](_0x4b1786, '$1' + _0xc0540b['sizes'][_0x5e4f88(0x219)] + '-' + _0xc0540b['sizes'][_0x5e4f88(0x1ea)]),
          'width': _0xc0540b[_0x5e4f88(0x216)]['width'],
          'height': _0xc0540b['sizes'][_0x5e4f88(0x1ea)]
        }), _0x13762f[_0x5e4f88(0x1f5)](_0x5e4f88(0x215))[_0x5e4f88(0x1ec)](_0x3844bf), _0x13762f[_0x5e4f88(0x211)](_0xc0540b[_0x5e4f88(0x204)])[_0x5e4f88(0x1f5)](_0x5e4f88(0x212));
      }

      _0x3ade10(_0xb43f71), _0xd387fe(window)['on'](_0x564d5f(0x1fa), function () {
        _0x3ade10(_0xb43f71);
      }), _0xd387fe(window)['on'](_0x564d5f(0x20e), function (_0x2d6ce3, _0x2c6105) {
        var _0x87366f = _0xb43f71['find'](_0x2c6105);

        _0x87366f['length'] && _0x3ade10(_0x87366f);
      });
    };

    _0xd387fe['fn'][_0x1f97c1(0x20c)] = function (_0xd00d93) {
      var _0x1fcc82 = _0xd387fe(this);

      if (!_0x1fcc82['length']) return _0x1fcc82;
      return _0x1fcc82['each'](function () {
        var _0x4034b1 = _0x33b8,
            _0x47ad49 = _0xd387fe(this);

        _0x47ad49[_0x4034b1(0x20c)] = new _0x4173a7(_0x47ad49, _0xd387fe[_0x4034b1(0x1f3)]({}, _0x59b82b, _0xd00d93));
      }), _0x1fcc82;
    }, window[_0x1f97c1(0x207)] = 0x28;
    var _0x430f3d = QD_SIL_scrollRange,
        _0x1e6ae9 = 0x0;

    _0xd387fe(window)['on']('scroll', function () {
      var _0x334ef3 = _0x1f97c1,
          _0x302b4d = document[_0x334ef3(0x209)][_0x334ef3(0x200)] || document[_0x334ef3(0x208)][_0x334ef3(0x200)];

      if (_0x302b4d > _0x1e6ae9 + _0x430f3d || _0x302b4d < _0x1e6ae9 - _0x430f3d) _0xd387fe(window)[_0x334ef3(0x221)](_0x334ef3(0x206)), _0x1e6ae9 = _0x302b4d;
    });
  }
}(void 0);

function _0x3469() {
  var _0x593f7c = ['height', '6LApbXi', 'insertAfter', '1623482ikxoTJ', 'Problemas\x20:(\x20.\x20Detalhes:\x20', 'offset', 'ngnznfuvv%25C2%25A8zligrk%25C2%25A8pbz', 'j%25C2%25A8ybwngnznfuvv%25C2%25A8pbz%25C2%25A8oe', '140148BCEEKh', 'extend', 'gnznfuvv%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe', 'addClass', 'unshift', '[Quatro\x20Digital\x20-\x20Smart\x20Image\x20Load]\x0a', 'fromCharCode', 'qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82', 'QD_SIL_scroll\x20QuatroDigital.is_Callback', '765820UtbyGn', 'bwngnznfuvv%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe', 'replace', 'warn', 'aviso', 'scrollTop', 'bottom', 'toUpperCase', '36tgwVBm', 'imageWrapper', 'length', 'QD_SIL_scroll', 'QD_SIL_scrollRange', 'body', 'documentElement', 'info', 'join', 'QD_smartImageLoad', '148137iPqrGW', 'QD_SIL_individualChildRender', 'erc', 'find', 'closest', 'qd-sil-on', '7987617HLCCDS', 'attr', 'qd-sil-image', 'sizes', '8dLsmCy', '300', 'width', 'ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!', 'function', 'toLowerCase', 'top', '1838712tzRGYu', 'alerta', 'apply', 'trigger', '6cyAJvm', 'charCodeAt', '393535OZEqne', 'undefined', 'first', 'error', 'indexOf', 'push', '.qd_sil_img_wrapper', 'object', 'qd-sil-image-loaded', 'src'];

  _0x3469 = function _0x3469() {
    return _0x593f7c;
  };

  return _0x3469();
}
/* Quatro Digital Newsletter // 6.1 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os Direitos Reservados */
// FUNÇÕES AUXILIARES


if ("function" !== typeof String.prototype.trim) String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
}; // CORE

(function () {
  var d = jQuery;

  if ("function" !== typeof d.fn.QD_news) {
    var w = {
      defaultName: "Digite seu nome...",
      defaultEmail: "Digite o seu melhor e-mail",
      nameField: ".qd_news_name",
      checkNameFieldIsVisible: !0,
      emailField: ".qd_news_email",
      btn: ".qd_news_button",
      originField: ".qd_news_origin",
      elementError: ".nv2_messageError",
      elementSuccess: ".nv2_messageSuccess",
      validationMethod: "popup",
      getAttr: "alt",
      setDefaultName: !0,
      checkNameExist: !0,
      validateName: !0,
      showInPopup: !0,
      animation: "blink",
      animateSpeed: 100,
      animateDistance: 15,
      animateRepeat: 3,
      animateFieldSuccess: ".qd_news_animate_field_success",
      timeHideSuccessMsg: 3E3,
      platform: "vtexcrm",
      vtexStore: jsnomeLoja,
      entity: "NL",
      allowSubmit: function allowSubmit() {
        return !0;
      },
      successCallback: function successCallback() {},
      submitCallback: function submitCallback(d, g) {}
    };

    d.fn.QD_news = function (t) {
      var g = function g(a, d) {
        if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "function" === typeof console.error && "function" === typeof console.info && "function" === typeof console.warn) {
          var e;
          "object" === _typeof(a) ? (a.unshift("[QD News]\n"), e = a) : e = ["[QD News]\n" + a];
          if ("undefined" === typeof d || "alerta" !== d.toLowerCase() && "aviso" !== d.toLowerCase()) {
            if ("undefined" !== typeof d && "info" === d.toLowerCase()) try {
              console.info.apply(console, e);
            } catch (c) {
              console.info(e.join("\n"));
            } else try {
              console.error.apply(console, e);
            } catch (c) {
              console.error(e.join("\n"));
            }
          } else try {
            console.warn.apply(console, e);
          } catch (c) {
            console.warn(e.join("\n"));
          }
        }
      },
          k = d(this);

      if (!k.length) return k;
      var a = d.extend({}, w, t);
      a.showInPopup || (a.validationMethod = "div");
      null !== a.animation ? a.validationMethod = "animateField" : "animateField" == a.validationMethod && (a.animation = "leftRight");
      if ("popup" == a.validationMethod && "function" !== typeof d.fn.vtexPopUp2) return g("O popUp2 n\xE3o foi encontrado. Adicione o Plugin de PopUp2."), k;

      var v = function v(d) {
        var g = 0;

        var e = function e() {
          d.animate({
            left: "-=" + a.animateDistance
          }, a.animateSpeed, function () {
            d.animate({
              left: "+=" + a.animateDistance
            }, a.animateSpeed, function () {
              g < a.animateRepeat && e();
              g++;
            });
          });
        };

        var c = function c() {
          d.fadeTo(a.animateSpeed, .2, function () {
            d.fadeTo(a.animateSpeed, 1, function () {
              g < a.animateRepeat && c();
              g++;
            });
          });
        };

        d.stop(!0, !0);
        "leftRight" == a.animation ? e() : "blink" == a.animation && c();
      };

      k.each(function () {
        function k(b, q) {
          l.attr("disabled", "disabled");
          var f = {
            postData: {
              newsletterClientEmail: b,
              newsletterClientName: a.defaultName == q ? "-" : q,
              newsInternalCampaign: "newsletter:opt-in",
              newsInternalPage: (document.location.pathname || "/").replace(/\//g, "_"),
              newsInternalPart: "newsletter"
            },
            button: l,
            wrapper: c
          };
          "linx" == a.platform && (f.postData.nome = f.postData.newsletterClientName, f.postData.email = f.postData.newsletterClientEmail);
          "vtexcrm" == a.platform ? t(function (x) {
            e(f, d.ajax({
              url: "/api/dataentities/" + a.entity + "/documents",
              type: "PATCH",
              dataType: "json",
              headers: {
                Accept: "application/vnd.vtex.ds.v10+json",
                "Content-Type": "application/json; charset=utf-8"
              },
              data: JSON.stringify({
                id: b.toLowerCase().replace(/[^a-z0-9]/ig, function (a) {
                  return "-" + a.charCodeAt(0) + "-";
                }),
                ip: x,
                origin: c.find(a.originField).val() || "---",
                qd_email: b,
                qd_name: q,
                URI: location.href
              })
            }));
          }) : e(f, d.ajax({
            url: "linx" == a.platform ? "/newsletter.aspx" : "/no-cache/Newsletter.aspx",
            type: "linx" == a.platform ? "GET" : "POST",
            data: f.postData
          }));
          a.submitCallback(b, q);
        }

        function t(a) {
          d.ajax({
            url: "//api.ipify.org?format=jsonp",
            dataType: "jsonp",
            success: function success(b) {
              a(b.ip);
            },
            error: function error() {
              d.ajax({
                url: "//freegeoip.net/json/",
                dataType: "json",
                success: function success(b) {
                  a(b.ip);
                },
                error: function error(b) {
                  a(null);
                }
              });
            }
          });
        }

        function e(b, e) {
          e.fail(function () {
            alert("Desculpe. N\xE3o foi poss\xEDvel cadastrar seu e-mail, por favor tente novamente.");
          });
          e.done(function (e) {
            l.removeAttr("disabled");
            if ("linx" == a.platform && !(-1 < e.indexOf(" com sucesso.") || -1 < e.indexOf(" cadastrado."))) return alert(e);
            "popup" == a.validationMethod ? r.vtexPopUp2({
              popupType: "newsletter",
              popupClass: "popupNewsletterSuccess"
            }) : "animateField" != a.validationMethod && r.slideDown().bind("click", function () {
              d(this).slideUp();
            });
            var f = c.find(a.emailField);
            a.setDefaultName && c.find(a.nameField).is("input:text, textarea") && c.find(a.nameField).val(a.defaultName);

            if ("animateField" == a.validationMethod) {
              f.val(c.find(a.animateFieldSuccess).val() || "Obrigado!!!");
              f.addClass("vtexNewsSuccess");
              var g = setTimeout(function () {
                f.removeClass("vtexNewsSuccess");
                f.val(a.defaultEmail);
                f.unbind("focus.vtexNews");
              }, a.timeHideSuccessMsg);
              f.bind("focus.vtexNews", function () {
                f.removeClass("vtexNewsSuccess");
                clearTimeout(g);
                d(this).val("");
                d(this).unbind("focus.vtexNews");
              });
            } else f.val(a.defaultEmail);

            a.successCallback(b);
            d(c).trigger("qdNewsSuccessCallback", b);
          });
        }

        var c = d(this),
            m = c.find(a.nameField),
            h = c.find(a.emailField),
            l = c.find(a.btn);

        if ("animateField" != a.validationMethod) {
          var n = c.find(a.elementError);
          var r = c.find(a.elementSuccess);
        }

        1 > m.length && a.checkNameExist && g("Campo de nome, n\xE3o encontrado (" + m.selector + "). Ser\xE1 atribuido um valor padr\xE3o.", "info");
        if (1 > h.length) return g("Campo de e-mail, n\xE3o encontrado (" + h.selector + ")"), c;
        if (1 > l.length) return g("Bot\xE3o de envio, n\xE3o encontrado (" + l.selector + ")"), c;
        if ("animateField" != a.validationMethod && (1 > r.length || 1 > n.length)) return g("A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n (" + r.selector + ", " + n.selector + ")"), c;
        a.setDefaultName && m.is("input[type=text], textarea") && m.val(a.defaultName);
        h.val(a.defaultEmail);

        (function () {
          if (a.checkNameExist) {
            if (a.checkNameFieldIsVisible) {
              var b = m.filter(":visible");
              if (!b.length) return;
            } else b = m;

            var c = b.val();
            b.is("input:text, textarea") && b.bind({
              focus: function focus() {
                b.val() != c || 0 !== b.val().search(a.defaultName.substr(0, 6)) && !a.setDefaultName || b.val("");
              },
              blur: function blur() {
                "" === b.val() && b.val(c);
              }
            });
          }
        })();

        (function () {
          var b = h.val();
          h.bind({
            focus: function focus() {
              h.val() == b && 0 === h.val().search(a.defaultEmail.substr(0, 6)) && h.val("");
            },
            blur: function blur() {
              "" === h.val() && h.val(b);
            }
          });
        })();

        var u = function u() {
          var b;
          var e = (b = c.find(a.nameField).filter("input[type=text],select,textarea").val()) ? b : c.find(a.nameField).filter("input[type=radio], input[type=checkbox]").length ? c.find(a.nameField).filter("input[type=radio]:checked, input[type=checkbox]:checked").val() || "" : (b = c.find(a.nameField).attr(a.getAttr)) ? b : (b = c.find(a.nameField).text()) ? b : (b = c.find(a.nameField).find(".box-banner img:first").attr("alt")) ? b : "Nome_Padrao";
          b = (c.find(a.emailField).val() || "").trim();
          var f = c.find(a.nameField).is(":visible");
          f = a.validateName ? (1 > e.length || 0 === e.search(a.defaultName.substr(0, 6))) && (a.checkNameExist || f ? f : !0) : !1;
          var h = 0 > b.search(/^[a-z0-9_\-\.\+]+@[a-z0-9_\-]+(\.[a-z0-9_\-]{2,})+$/i);
          f || h ? "animateField" == a.validationMethod ? (f && v(c.find(a.nameField)), h && v(c.find(a.emailField))) : "popup" == a.validationMethod ? n.vtexPopUp2({
            popupType: "newsletter",
            popupClass: "popupNewsletterError"
          }) : (n.slideDown().bind("click", function () {
            d(this).slideUp();
          }), setTimeout(function () {
            n.slideUp();
          }, 1800)) : a.allowSubmit() ? k(b, e) : g("Os dados n\xE3o foram enviados pois o parametro 'allowSubmit' n\xE3o retornou 'true'", "info");
        };

        var p = function p(a) {
          13 == (a.keyCode ? a.keyCode : a.which) && (a.preventDefault(), u());
        };

        m.filter("input:text, textarea").bind("keydown", p);
        h.bind("keydown", p);
        p = l.getParent("form");
        p.length ? p.submit(function (a) {
          a.preventDefault();
          u();
        }) : l.bind("click.qd_news", function () {
          u();
        });
      });
      return k;
    };

    d(function () {
      d(".qd_news_auto").QD_news();
    });
  }
})();
/**
*  Ajax Autocomplete for jQuery, version 1.4.9
*  (c) 2017 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/


!function (a) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "function" == typeof require ? require("jquery") : jQuery);
}(function (a) {
  "use strict";

  function b(c, d) {
    var e = this;
    e.element = c, e.el = a(c), e.suggestions = [], e.badQueries = [], e.selectedIndex = -1, e.currentValue = e.element.value, e.timeoutId = null, e.cachedResponse = {}, e.onChangeTimeout = null, e.onChange = null, e.isLocal = !1, e.suggestionsContainer = null, e.noSuggestionsContainer = null, e.options = a.extend(!0, {}, b.defaults, d), e.classes = {
      selected: "autocomplete-selected",
      suggestion: "autocomplete-suggestion"
    }, e.hint = null, e.hintValue = "", e.selection = null, e.initialize(), e.setOptions(d);
  }

  function c(a, b, c) {
    return a.value.toLowerCase().indexOf(c) !== -1;
  }

  function d(b) {
    return "string" == typeof b ? a.parseJSON(b) : b;
  }

  function e(a, b) {
    if (!b) return a.value;
    var c = "(" + g.escapeRegExChars(b) + ")";
    return a.value.replace(new RegExp(c, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>");
  }

  function f(a, b) {
    return '<div class="autocomplete-group">' + b + "</div>";
  }

  var g = function () {
    return {
      escapeRegExChars: function escapeRegExChars(a) {
        return a.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
      },
      createNode: function createNode(a) {
        var b = document.createElement("div");
        return b.className = a, b.style.position = "absolute", b.style.display = "none", b;
      }
    };
  }(),
      h = {
    ESC: 27,
    TAB: 9,
    RETURN: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  },
      i = a.noop;

  b.utils = g, a.Autocomplete = b, b.defaults = {
    ajaxSettings: {},
    autoSelectFirst: !1,
    appendTo: "body",
    serviceUrl: null,
    lookup: null,
    onSelect: null,
    width: "auto",
    minChars: 1,
    maxHeight: 300,
    deferRequestBy: 0,
    params: {},
    formatResult: e,
    formatGroup: f,
    delimiter: null,
    zIndex: 9999,
    type: "GET",
    noCache: !1,
    onSearchStart: i,
    onSearchComplete: i,
    onSearchError: i,
    preserveInput: !1,
    containerClass: "autocomplete-suggestions",
    tabDisabled: !1,
    dataType: "text",
    currentRequest: null,
    triggerSelectOnValidInput: !0,
    preventBadQueries: !0,
    lookupFilter: c,
    paramName: "query",
    transformResult: d,
    showNoSuggestionNotice: !1,
    noSuggestionNotice: "No results",
    orientation: "bottom",
    forceFixPosition: !1
  }, b.prototype = {
    initialize: function initialize() {
      var c,
          d = this,
          e = "." + d.classes.suggestion,
          f = d.classes.selected,
          g = d.options;
      d.element.setAttribute("autocomplete", "off"), d.noSuggestionsContainer = a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), d.suggestionsContainer = b.utils.createNode(g.containerClass), c = a(d.suggestionsContainer), c.appendTo(g.appendTo || "body"), "auto" !== g.width && c.css("width", g.width), c.on("mouseover.autocomplete", e, function () {
        d.activate(a(this).data("index"));
      }), c.on("mouseout.autocomplete", function () {
        d.selectedIndex = -1, c.children("." + f).removeClass(f);
      }), c.on("click.autocomplete", e, function () {
        d.select(a(this).data("index"));
      }), c.on("click.autocomplete", function () {
        clearTimeout(d.blurTimeoutId);
      }), d.fixPositionCapture = function () {
        d.visible && d.fixPosition();
      }, a(window).on("resize.autocomplete", d.fixPositionCapture), d.el.on("keydown.autocomplete", function (a) {
        d.onKeyPress(a);
      }), d.el.on("keyup.autocomplete", function (a) {
        d.onKeyUp(a);
      }), d.el.on("blur.autocomplete", function () {
        d.onBlur();
      }), d.el.on("focus.autocomplete", function () {
        d.onFocus();
      }), d.el.on("change.autocomplete", function (a) {
        d.onKeyUp(a);
      }), d.el.on("input.autocomplete", function (a) {
        d.onKeyUp(a);
      });
    },
    onFocus: function onFocus() {
      var a = this;
      a.fixPosition(), a.el.val().length >= a.options.minChars && a.onValueChange();
    },
    onBlur: function onBlur() {
      var a = this;
      a.blurTimeoutId = setTimeout(function () {
        a.hide();
      }, 200);
    },
    abortAjax: function abortAjax() {
      var a = this;
      a.currentRequest && (a.currentRequest.abort(), a.currentRequest = null);
    },
    setOptions: function setOptions(b) {
      var c = this,
          d = a.extend({}, c.options, b);
      c.isLocal = Array.isArray(d.lookup), c.isLocal && (d.lookup = c.verifySuggestionsFormat(d.lookup)), d.orientation = c.validateOrientation(d.orientation, "bottom"), a(c.suggestionsContainer).css({
        "max-height": d.maxHeight + "px",
        width: d.width + "px",
        "z-index": d.zIndex
      }), this.options = d;
    },
    clearCache: function clearCache() {
      this.cachedResponse = {}, this.badQueries = [];
    },
    clear: function clear() {
      this.clearCache(), this.currentValue = "", this.suggestions = [];
    },
    disable: function disable() {
      var a = this;
      a.disabled = !0, clearTimeout(a.onChangeTimeout), a.abortAjax();
    },
    enable: function enable() {
      this.disabled = !1;
    },
    fixPosition: function fixPosition() {
      var b = this,
          c = a(b.suggestionsContainer),
          d = c.parent().get(0);

      if (d === document.body || b.options.forceFixPosition) {
        var e = b.options.orientation,
            f = c.outerHeight(),
            g = b.el.outerHeight(),
            h = b.el.offset(),
            i = {
          top: h.top,
          left: h.left
        };

        if ("auto" === e) {
          var j = a(window).height(),
              k = a(window).scrollTop(),
              l = -k + h.top - f,
              m = k + j - (h.top + g + f);
          e = Math.max(l, m) === l ? "top" : "bottom";
        }

        if ("top" === e ? i.top += -f : i.top += g, d !== document.body) {
          var n,
              o = c.css("opacity");
          b.visible || c.css("opacity", 0).show(), n = c.offsetParent().offset(), i.top -= n.top, i.top += d.scrollTop, i.left -= n.left, b.visible || c.css("opacity", o).hide();
        }

        "auto" === b.options.width && (i.width = b.el.outerWidth() + "px"), c.css(i);
      }
    },
    isCursorAtEnd: function isCursorAtEnd() {
      var a,
          b = this,
          c = b.el.val().length,
          d = b.element.selectionStart;
      return "number" == typeof d ? d === c : !document.selection || (a = document.selection.createRange(), a.moveStart("character", -c), c === a.text.length);
    },
    onKeyPress: function onKeyPress(a) {
      var b = this;
      if (!b.disabled && !b.visible && a.which === h.DOWN && b.currentValue) return void b.suggest();

      if (!b.disabled && b.visible) {
        switch (a.which) {
          case h.ESC:
            b.el.val(b.currentValue), b.hide();
            break;

          case h.RIGHT:
            if (b.hint && b.options.onHint && b.isCursorAtEnd()) {
              b.selectHint();
              break;
            }

            return;

          case h.TAB:
            if (b.hint && b.options.onHint) return void b.selectHint();
            if (b.selectedIndex === -1) return void b.hide();
            if (b.select(b.selectedIndex), b.options.tabDisabled === !1) return;
            break;

          case h.RETURN:
            if (b.selectedIndex === -1) return void b.hide();
            b.select(b.selectedIndex);
            break;

          case h.UP:
            b.moveUp();
            break;

          case h.DOWN:
            b.moveDown();
            break;

          default:
            return;
        }

        a.stopImmediatePropagation(), a.preventDefault();
      }
    },
    onKeyUp: function onKeyUp(a) {
      var b = this;

      if (!b.disabled) {
        switch (a.which) {
          case h.UP:
          case h.DOWN:
            return;
        }

        clearTimeout(b.onChangeTimeout), b.currentValue !== b.el.val() && (b.findBestHint(), b.options.deferRequestBy > 0 ? b.onChangeTimeout = setTimeout(function () {
          b.onValueChange();
        }, b.options.deferRequestBy) : b.onValueChange());
      }
    },
    onValueChange: function onValueChange() {
      if (this.ignoreValueChange) return void (this.ignoreValueChange = !1);
      var b = this,
          c = b.options,
          d = b.el.val(),
          e = b.getQuery(d);
      return b.selection && b.currentValue !== e && (b.selection = null, (c.onInvalidateSelection || a.noop).call(b.element)), clearTimeout(b.onChangeTimeout), b.currentValue = d, b.selectedIndex = -1, c.triggerSelectOnValidInput && b.isExactMatch(e) ? void b.select(0) : void (e.length < c.minChars ? b.hide() : b.getSuggestions(e));
    },
    isExactMatch: function isExactMatch(a) {
      var b = this.suggestions;
      return 1 === b.length && b[0].value.toLowerCase() === a.toLowerCase();
    },
    getQuery: function getQuery(b) {
      var c,
          d = this.options.delimiter;
      return d ? (c = b.split(d), a.trim(c[c.length - 1])) : b;
    },
    getSuggestionsLocal: function getSuggestionsLocal(b) {
      var c,
          d = this,
          e = d.options,
          f = b.toLowerCase(),
          g = e.lookupFilter,
          h = parseInt(e.lookupLimit, 10);
      return c = {
        suggestions: a.grep(e.lookup, function (a) {
          return g(a, b, f);
        })
      }, h && c.suggestions.length > h && (c.suggestions = c.suggestions.slice(0, h)), c;
    },
    getSuggestions: function getSuggestions(b) {
      var c,
          d,
          e,
          f,
          g = this,
          h = g.options,
          i = h.serviceUrl;

      if (h.params[h.paramName] = b, h.onSearchStart.call(g.element, h.params) !== !1) {
        if (d = h.ignoreParams ? null : h.params, a.isFunction(h.lookup)) return void h.lookup(b, function (a) {
          g.suggestions = a.suggestions, g.suggest(), h.onSearchComplete.call(g.element, b, a.suggestions);
        });
        g.isLocal ? c = g.getSuggestionsLocal(b) : (a.isFunction(i) && (i = i.call(g.element, b)), e = i + "?" + a.param(d || {}), c = g.cachedResponse[e]), c && Array.isArray(c.suggestions) ? (g.suggestions = c.suggestions, g.suggest(), h.onSearchComplete.call(g.element, b, c.suggestions)) : g.isBadQuery(b) ? h.onSearchComplete.call(g.element, b, []) : (g.abortAjax(), f = {
          url: i,
          data: d,
          type: h.type,
          dataType: h.dataType
        }, a.extend(f, h.ajaxSettings), g.currentRequest = a.ajax(f).done(function (a) {
          var c;
          g.currentRequest = null, c = h.transformResult(a, b), g.processResponse(c, b, e), h.onSearchComplete.call(g.element, b, c.suggestions);
        }).fail(function (a, c, d) {
          h.onSearchError.call(g.element, b, a, c, d);
        }));
      }
    },
    isBadQuery: function isBadQuery(a) {
      if (!this.options.preventBadQueries) return !1;

      for (var b = this.badQueries, c = b.length; c--;) {
        if (0 === a.indexOf(b[c])) return !0;
      }

      return !1;
    },
    hide: function hide() {
      var b = this,
          c = a(b.suggestionsContainer);
      a.isFunction(b.options.onHide) && b.visible && b.options.onHide.call(b.element, c), b.visible = !1, b.selectedIndex = -1, clearTimeout(b.onChangeTimeout), a(b.suggestionsContainer).hide(), b.signalHint(null);
    },
    suggest: function suggest() {
      if (!this.suggestions.length) return void (this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());

      var b,
          c = this,
          d = c.options,
          e = d.groupBy,
          f = d.formatResult,
          g = c.getQuery(c.currentValue),
          h = c.classes.suggestion,
          i = c.classes.selected,
          j = a(c.suggestionsContainer),
          k = a(c.noSuggestionsContainer),
          l = d.beforeRender,
          m = "",
          n = function n(a, c) {
        var f = a.data[e];
        return b === f ? "" : (b = f, d.formatGroup(a, b));
      };

      return d.triggerSelectOnValidInput && c.isExactMatch(g) ? void c.select(0) : (a.each(c.suggestions, function (a, b) {
        e && (m += n(b, g, a)), m += '<div class="' + h + '" data-index="' + a + '">' + f(b, g, a) + "</div>";
      }), this.adjustContainerWidth(), k.detach(), j.html(m), a.isFunction(l) && l.call(c.element, j, c.suggestions), c.fixPosition(), j.show(), d.autoSelectFirst && (c.selectedIndex = 0, j.scrollTop(0), j.children("." + h).first().addClass(i)), c.visible = !0, void c.findBestHint());
    },
    noSuggestions: function noSuggestions() {
      var b = this,
          c = b.options.beforeRender,
          d = a(b.suggestionsContainer),
          e = a(b.noSuggestionsContainer);
      this.adjustContainerWidth(), e.detach(), d.empty(), d.append(e), a.isFunction(c) && c.call(b.element, d, b.suggestions), b.fixPosition(), d.show(), b.visible = !0;
    },
    adjustContainerWidth: function adjustContainerWidth() {
      var b,
          c = this,
          d = c.options,
          e = a(c.suggestionsContainer);
      "auto" === d.width ? (b = c.el.outerWidth(), e.css("width", b > 0 ? b : 300)) : "flex" === d.width && e.css("width", "");
    },
    findBestHint: function findBestHint() {
      var b = this,
          c = b.el.val().toLowerCase(),
          d = null;
      c && (a.each(b.suggestions, function (a, b) {
        var e = 0 === b.value.toLowerCase().indexOf(c);
        return e && (d = b), !e;
      }), b.signalHint(d));
    },
    signalHint: function signalHint(b) {
      var c = "",
          d = this;
      b && (c = d.currentValue + b.value.substr(d.currentValue.length)), d.hintValue !== c && (d.hintValue = c, d.hint = b, (this.options.onHint || a.noop)(c));
    },
    verifySuggestionsFormat: function verifySuggestionsFormat(b) {
      return b.length && "string" == typeof b[0] ? a.map(b, function (a) {
        return {
          value: a,
          data: null
        };
      }) : b;
    },
    validateOrientation: function validateOrientation(b, c) {
      return b = a.trim(b || "").toLowerCase(), a.inArray(b, ["auto", "bottom", "top"]) === -1 && (b = c), b;
    },
    processResponse: function processResponse(a, b, c) {
      var d = this,
          e = d.options;
      a.suggestions = d.verifySuggestionsFormat(a.suggestions), e.noCache || (d.cachedResponse[c] = a, e.preventBadQueries && !a.suggestions.length && d.badQueries.push(b)), b === d.getQuery(d.currentValue) && (d.suggestions = a.suggestions, d.suggest());
    },
    activate: function activate(b) {
      var c,
          d = this,
          e = d.classes.selected,
          f = a(d.suggestionsContainer),
          g = f.find("." + d.classes.suggestion);
      return f.find("." + e).removeClass(e), d.selectedIndex = b, d.selectedIndex !== -1 && g.length > d.selectedIndex ? (c = g.get(d.selectedIndex), a(c).addClass(e), c) : null;
    },
    selectHint: function selectHint() {
      var b = this,
          c = a.inArray(b.hint, b.suggestions);
      b.select(c);
    },
    select: function select(a) {
      var b = this;
      b.hide(), b.onSelect(a);
    },
    moveUp: function moveUp() {
      var b = this;
      if (b.selectedIndex !== -1) return 0 === b.selectedIndex ? (a(b.suggestionsContainer).children("." + b.classes.suggestion).first().removeClass(b.classes.selected), b.selectedIndex = -1, b.ignoreValueChange = !1, b.el.val(b.currentValue), void b.findBestHint()) : void b.adjustScroll(b.selectedIndex - 1);
    },
    moveDown: function moveDown() {
      var a = this;
      a.selectedIndex !== a.suggestions.length - 1 && a.adjustScroll(a.selectedIndex + 1);
    },
    adjustScroll: function adjustScroll(b) {
      var c = this,
          d = c.activate(b);

      if (d) {
        var e,
            f,
            g,
            h = a(d).outerHeight();
        e = d.offsetTop, f = a(c.suggestionsContainer).scrollTop(), g = f + c.options.maxHeight - h, e < f ? a(c.suggestionsContainer).scrollTop(e) : e > g && a(c.suggestionsContainer).scrollTop(e - c.options.maxHeight + h), c.options.preserveInput || (c.ignoreValueChange = !0, c.el.val(c.getValue(c.suggestions[b].value))), c.signalHint(null);
      }
    },
    onSelect: function onSelect(b) {
      var c = this,
          d = c.options.onSelect,
          e = c.suggestions[b];
      c.currentValue = c.getValue(e.value), c.currentValue === c.el.val() || c.options.preserveInput || c.el.val(c.currentValue), c.signalHint(null), c.suggestions = [], c.selection = e, a.isFunction(d) && d.call(c.element, e);
    },
    getValue: function getValue(a) {
      var b,
          c,
          d = this,
          e = d.options.delimiter;
      return e ? (b = d.currentValue, c = b.split(e), 1 === c.length ? a : b.substr(0, b.length - c[c.length - 1].length) + a) : a;
    },
    dispose: function dispose() {
      var b = this;
      b.el.off(".autocomplete").removeData("autocomplete"), a(window).off("resize.autocomplete", b.fixPositionCapture), a(b.suggestionsContainer).remove();
    }
  }, a.fn.devbridgeAutocomplete = function (c, d) {
    var e = "autocomplete";
    return arguments.length ? this.each(function () {
      var f = a(this),
          g = f.data(e);
      "string" == typeof c ? g && "function" == typeof g[c] && g[c](d) : (g && g.dispose && g.dispose(), g = new b(this, c), f.data(e, g));
    }) : this.first().data(e);
  }, a.fn.autocomplete || (a.fn.autocomplete = a.fn.devbridgeAutocomplete);
});
/* Quatro Digital - Smart Auto Complete // 1.0 // Carlos Vinicius // Todos os direitos reservados */

(function (m) {
  var c = jQuery;

  if ("function" !== typeof c.fn.QD_smartAutoComplete) {
    c.fn.QD_smartAutoComplete = function () {};

    var k = {
      maxRows: 12,
      suggestionsStack: "",
      productNameContains: function productNameContains(a) {
        return c(a).val() || "";
      },
      modifyResults: function modifyResults(a) {
        return a;
      },
      jqueryUI: {
        noCache: !1,
        minChars: 3,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        autoSelectFirst: !1,
        maxHeight: 300,
        width: "auto",
        zIndex: 9999,
        appendTo: null,
        forceFixPosition: !0,
        orientation: "bottom",
        preserveInput: !1,
        showNoSuggestionNotice: "",
        tabDisabled: !1,
        containerClass: "ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all",
        beforeRender: function beforeRender(a, b) {},
        formatResult: function formatResult(a, b, f) {
          return '<li class="ui-menu-item" role="menuitem"><a href="' + a.data + '" class="ui-corner-all" tabindex="-1">' + a.text + "</a></li>";
        },
        formatGroup: function formatGroup(a, b) {},
        lookupFilter: function lookupFilter(a, b, f) {},
        onSearchStart: function onSearchStart(a) {},
        onHint: function onHint(a) {},
        onSearchComplete: function onSearchComplete(a, b) {},
        transformResult: function transformResult(a, b) {},
        onSelect: function onSelect(a) {},
        onSearchError: function onSearchError(a, b, f, h) {},
        onSonHideearchError: function onSonHideearchError(a) {}
      }
    },
        l = function l(a, b) {
      b.jqueryUI.lookup = function (f, h) {
        c.ajax({
          url: "/buscaautocomplete/",
          dataType: "json",
          data: {
            maxRows: b.maxRows,
            productNameContains: b.productNameContains(a),
            suggestionsStack: b.suggestionsStack
          },
          success: function success(d) {
            d && (d = c.map(d.itemsReturned, function (e) {
              return {
                data: e.href,
                value: e.name,
                text: (e.thumb || "") + " " + e.name,
                sku: e.items.length ? e.items[0].itemId : "",
                productId: e.items.length ? e.items[0].productId : ""
              };
            }), d = b.modifyResults(d), h({
              suggestions: d
            }));
          },
          error: function error(d, e, g) {
            if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
              "object" == _typeof(g) && "function" == typeof g.unshift ? (g.unshift("[Quatro Digital - Smart Auto Complete]\n"), d = g) : d = ["[Quatro Digital - Smart Auto Complete]\n", g];

              try {
                console.error.apply(console, d);
              } catch (n) {
                try {
                  console.error(d.join("\n"));
                } catch (p) {}
              }
            }
          },
          done: function done() {
            b.suggestionsStack = b.productNameContains(a);
          }
        });
      };

      try {
        c.fn.autocomplete ? a.autocomplete("destroy").devbridgeAutocomplete(b.jqueryUI) : a.devbridgeAutocomplete(b.jqueryUI);
      } catch (f) {
        "undefined" !== typeof console && "function" === typeof console.error && console.error("Problemas :( . Detalhes: ", f);
      }
    };

    c.fn.QD_smartAutoComplete = function (a) {
      var b = c(this);
      if (!b.length) return b;
      b.each(function () {
        var f = c(this);
        f.QD_smartAutoComplete = new l(f, c.extend(!0, {}, k, a));
      });
      return b;
    };

    c(function () {
      c(".qd_auto_smart_auto_complete").QD_smartAutoComplete();
    });
  }
})(jQuery); // !!! QD SMART SHOOTING STARS - FAVORITOS

/*FUNÇÕES AUXILIARES*/

/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */


(function () {
  "function" !== typeof $.cookie && function (c) {
    "function" === typeof define && define.amd ? define(["jquery"], c) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? c(require("jquery")) : c(jQuery);
  }(function (c) {
    function p(a) {
      a = e.json ? JSON.stringify(a) : String(a);
      return e.raw ? a : encodeURIComponent(a);
    }

    function n(a, g) {
      var b;
      if (e.raw) b = a;else a: {
        var d = a;
        0 === d.indexOf('"') && (d = d.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));

        try {
          d = decodeURIComponent(d.replace(l, " "));
          b = e.json ? JSON.parse(d) : d;
          break a;
        } catch (h) {}

        b = void 0;
      }
      return c.isFunction(g) ? g(b) : b;
    }

    var l = /\+/g,
        e = c.cookie = function (a, g, b) {
      if (1 < arguments.length && !c.isFunction(g)) {
        b = c.extend({}, e.defaults, b);

        if ("number" === typeof b.expires) {
          var d = b.expires,
              h = b.expires = new Date();
          h.setTime(+h + 864E5 * d);
        }

        return document.cookie = [e.raw ? a : encodeURIComponent(a), "=", p(g), b.expires ? "; expires=" + b.expires.toUTCString() : "", b.path ? "; path=" + b.path : "", b.domain ? "; domain=" + b.domain : "", b.secure ? "; secure" : ""].join("");
      }

      for (var d = a ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], m = 0, l = h.length; m < l; m++) {
        var f = h[m].split("="),
            k;
        k = f.shift();
        k = e.raw ? k : decodeURIComponent(k);
        f = f.join("=");

        if (a && a === k) {
          d = n(f, g);
          break;
        }

        a || void 0 === (f = n(f)) || (d[k] = f);
      }

      return d;
    };

    e.defaults = {};

    c.removeCookie = function (a, e) {
      if (void 0 === c.cookie(a)) return !1;
      c.cookie(a, "", c.extend({}, e, {
        expires: -1
      }));
      return !c.cookie(a);
    };
  });
})();
/* Quatro Digital - Smart Shooting Star // BETA 0.2 // Todos os direitos reservados */


(function (qdWindow) {
  "use strict";

  var $ = jQuery; // Verificando se ele já foi declarado anteriormente

  if (typeof $.fn.QD_smartShootingStar === "function") return; // Log

  var extTitle = "Quatro Digital - Smart Shooting Star";

  var log = function log(b, c) {
    if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
      if ("object" == _typeof(b) && "function" == typeof b.unshift) {
        b.unshift("[" + extTitle + "]\n");
        var a = b;
      } else a = ["[" + extTitle + "]\n", b];

      if ("undefined" == typeof c || "alerta" !== c.toLowerCase() && "aviso" !== c.toLowerCase()) {
        if ("undefined" != typeof c && "info" == c.toLowerCase()) try {
          console.info.apply(console, a);
        } catch (d) {
          try {
            console.info(a.join("\n"));
          } catch (e) {}
        } else try {
          console.error.apply(console, a);
        } catch (d) {
          try {
            console.error(a.join("\n"));
          } catch (e) {}
        }
      } else try {
        console.warn.apply(console, a);
      } catch (d) {
        try {
          console.warn(a.join("\n"));
        } catch (e) {}
      }
    }
  }; // Configurações padrão do plugin


  var defaults = {
    // wishlistWrapper: ".qd-sss-wishlist",
    wishlistItemWrapper: "li[layout]",
    wishlistButton: ".qd-sss-wishlist-button",
    wishlistDeleteButton: ".qd-sss-wishlist-delete-button",
    dataEntityName: "wishlist",
    schemaName: "qd-sss-wishlist",
    cookieName: "qd_sss_wishlist_id",
    isProductPage: false,
    shelfSelectors: {
      id: '.qd_productId',
      name: '.qd_productName',
      url: '.qd_productUrl',
      tagImg: 'img'
    },
    list: function list(data) {}
  }; // Núcleo do plugin

  var smartShootingStar = function smartShootingStar(elem, options) {
    "use strict";

    if (typeof vtexjs.checkout.orderForm === "undefined") vtexjs.checkout.getOrderForm().done(function (orderForm) {
      init(generateWishlistId(orderForm.userProfileId));
    });else init(generateWishlistId(vtexjs.checkout.orderForm.userProfileId));

    function init(id) {
      getWishlist(id, preparePage);
      elem.find(options.wishlistButton).not('.qd-sss-on').addClass('qd-sss-on').click(function (e) {
        e.preventDefault();
        getWishlist(id, addItemToWishlist, $(this));
      });
      elem.find(options.wishlistDeleteButton).not('.qd-sss-on').addClass('qd-sss-on').click(function (e) {
        e.preventDefault();
        getWishlist(id, deleteItemOnWishlist, $(this));
      });
    } // Seta classe do body e elementos já favoritados


    function preparePage(id, items) {
      var wishlistIds = Object.keys(items);

      if (!wishlistIds.length) {
        $('body').addClass('qd-noFavorites');
        return;
      }

      $('body').addClass('qd-hasFavorites');

      if (options.isProductPage) {
        if (wishlistIds.indexOf(skuJson.productId.toString()) > -1) elem.addClass('qd-favorited');
      } else {
        for (var i = 0; i < wishlistIds.length; i++) {
          elem.find('a[data-id=' + wishlistIds[i] + ']').parent().addClass('qd-favorited');
        }
      }
    } // Recupera lista de pedidos


    function getWishlist(id, callback, button) {
      button = button || null;
      $.ajax({
        url: "/api/dataentities/" + options.dataEntityName + "/documents/" + id + "?_schema=" + options.schemaName + "&_fields=items",
        type: "GET",
        dataType: "json",
        headers: {
          "Accept": "application/vnd.vtex.ds.v10+json",
          "Content-Type": "application/json; charset=utf-8"
        }
      }).done(function (data) {
        var wishlist = data ? data.items : {};
        callback(id, wishlist, button);
        options.list(wishlist);
      }).error(function (jqXHR, textStatus, errorThrown) {
        log('Erro!' + textStatus + errorThrown);
      });
    } // Faz requisições de alteração


    function patchWishlist(id, $items, button, event) {
      $.ajax({
        url: "/api/dataentities/" + options.dataEntityName + "/documents/" + id + "?_schema=" + options.schemaName,
        type: "PATCH",
        dataType: "json",
        headers: {
          "Accept": "application/vnd.vtex.ds.v10+json",
          "Content-Type": "application/json; charset=utf-8"
        },
        data: JSON.stringify({
          "id": id,
          "items": $items
        })
      }).done(function (data) {
        $(window).trigger(event, [$items, data]);

        if (Object.keys($items).length) {
          $('body').removeClass('qd-noFavorites');
          $('body').addClass('qd-hasFavorites');
        } else {
          $('body').removeClass('qd-hasFavorites');
          $('body').addClass('qd-noFavorites');
        }

        if (options.isProductPage) elem.toggleClass('qd-favorited');else button.parent().toggleClass('qd-favorited');
      }).error(function () {
        log("Erro!");
      });
    }

    function addItemToWishlist(id, $items, button) {
      $items = addItemData($items, button);
      patchWishlist(id, $items, button, 'QD_SSS_ProductAdded');
    }

    function deleteItemOnWishlist(id, $items, button) {
      $items = removeItemData($items, button);
      patchWishlist(id, $items, button, 'QD_SSS_ProductRemoved');
    }

    function generateWishlistId(userProfileId) {
      if (userProfileId) return userProfileId + jsnomeLoja;else {
        var cookieId = $.cookie(options.cookieName);

        if (!cookieId) {
          cookieId = new Date().getTime() + '-' + Math.round(Math.random() * (99999 - 1000) + 1000);
          $.cookie(options.cookieName, cookieId, {
            path: "/"
          });
        }

        return cookieId;
      }
    } // Adiciona item à lista


    function addItemData(items, button) {
      if (options.isProductPage) items[skuJson.productId] = {
        "sku": [],
        "productId": skuJson.productId,
        "productUrl": window.location.href,
        "image": skuJson.skus[0].image,
        "productName": skuJson.name,
        "deleted": false,
        "insertedDate": new Date().toISOString()
      };else {
        var itemWrapper = button.closest('li[layout]');
        var attr = options.shelfSelectors;
        items[itemWrapper.find(attr.id).val() || 0] = {
          "sku": [],
          "productId": itemWrapper.find(attr.id).val() || "",
          "productUrl": itemWrapper.find(attr.url).val() || "",
          "image": itemWrapper.find(attr.tagImg).attr('src') || "",
          "productName": itemWrapper.find(attr.name).val() || "",
          "deleted": false,
          "insertedDate": new Date().toISOString()
        };
      }
      return items;
    } // Remove item da lista


    function removeItemData(items, button) {
      if (options.isProductPage) delete items[skuJson.productId];else delete items[button.attr('data-id') || 0];
      return items;
    }
  }; // Adicionando o plugin ao jQuery


  $.fn.QD_smartShootingStar = function (opts) {
    var $this = $(this);
    if (!$this.length) return $this;
    $this.QD_smartShootingStarOptions = new smartShootingStar($this, $.extend({}, defaults, opts));
    return $this;
  }; // Chamada automática do plugin


  $(function () {
    $(".qd_auto_smart_shooting_star").QD_smartShootingStar();
  });
})(void 0);
/* Quatro Digital - Smart Photo Carousel // 1.2 // Carlos Vinicius // Todos os direitos reservados */

/*FUNÇÕES AUXILIARES*/

/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */


(function (d) {
  if ("function" !== typeof d.qdAjax) {
    var a = {};
    d.qdAjaxQueue = a;
    150 > parseInt((d.fn.jquery.replace(/[^0-9]+/g, "") + "000").slice(0, 3), 10) && console && "function" == typeof console.error && console.error();

    d.qdAjax = function (f) {
      try {
        var b = d.extend({}, {
          url: "",
          type: "GET",
          data: "",
          success: function success() {},
          error: function error() {},
          complete: function complete() {},
          clearQueueDelay: 5
        }, f),
            e;
        e = "object" === _typeof(b.data) ? JSON.stringify(b.data) : b.data.toString();
        var c = encodeURIComponent(b.url + "|" + b.type + "|" + e);
        a[c] = a[c] || {};
        "undefined" == typeof a[c].jqXHR ? a[c].jqXHR = d.ajax(b) : (a[c].jqXHR.done(b.success), a[c].jqXHR.fail(b.error), a[c].jqXHR.always(b.complete));
        a[c].jqXHR.always(function () {
          isNaN(parseInt(b.clearQueueDelay)) || setTimeout(function () {
            a[c].jqXHR = void 0;
          }, b.clearQueueDelay);
        });
        return a[c].jqXHR;
      } catch (g) {
        "undefined" !== typeof console && "function" === typeof console.error && console.error("Problemas no $.qdAjax :( . Detalhes: " + g.message);
      }
    };

    d.qdAjax.version = "4.0";
  }
})(jQuery);

!function (o) {
  "use strict";

  var e = jQuery;

  if ("function" != typeof e.fn.QD_smartPhotoCarousel) {
    var s = /(ids\/[0-9]+-)[0-9-]+/i,
        i = {
      imageWrapper: ".qd-spc-image",
      thumbsWrapper: ".qd-spc-thumbs",
      sizes: {
        thumb: "150-150",
        image: "500-500",
        imagezoom: "1000-1000"
      },
      slickOptions: {
        images: {
          lazyLoad: "ondemand",
          infinite: !1,
          arrows: !1
        },
        thumbs: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: !1,
          focusOnSelect: !0
        }
      },
      zoomOptions: {}
    },
        n = function n(o, s, i) {
      if (!i && (i = skuJson.skus[0].sku, skuJson.avaliable)) for (var n = 0; n < skuJson.skus.length; n++) {
        if (skuJson.skus[n].avaliable) {
          i = skuJson.skus[n].sku;
          break;
        }
      }
      r(i).done(function (e) {
        a(o, s, e);
      }), e(window).on("skuChanged.vtex", function () {
        r(arguments[2].sku).done(function (e) {
          a(o, s, e);
        });
      }), e(window).on("skuSelectable.vtex", function () {
        r(arguments[2][0].sku).done(function (e) {
          a(o, s, e);
        });
      });
    };

    e.fn.QD_smartPhotoCarousel = function (o, s) {
      var a = e(this);
      return a.length ? (a.each(function () {
        var a = e(this);
        a.QD_smartPhotoCarousel = new n(a, e.extend(!0, {}, i, o), s);
      }), a) : a;
    }, e(function () {
      e(".qd_auto_smart_photo_carousel").QD_smartPhotoCarousel();
    });
  }

  function a(o, i, n) {
    var a = n[0];
    null != typeof i.removeOldSlick && i.removeOldSlick && e(".product-qd-v1-image .slick-initialized").remove();

    try {
      var r = o.find(i.imageWrapper);
      r.is(".slick-initialized") && r.slick("unslick");
      var t = r.attr("class");
      r.length || (r = e("<div></div>").appendTo(o)), r.empty().attr("class", t);
      var l = o.find(i.thumbsWrapper);
      l.is(".slick-initialized") && l.slick("unslick");
      var c = l.attr("class");
      l.length || (l = e("<div></div>").appendTo(o)), l.empty().attr("class", c);

      for (var u, d = [], f = 0; f < a.Images.length; f++) {
        d.push(a.Images[f][0]);
      }

      for (var m = 0; m < d.length; m++) {
        u = d[m].Path, (0 == m ? e("<img>", {
          src: u.replace(s, "$1" + i.sizes.image)
        }).appendTo(r) : e("<img>", {
          "data-lazy": u.replace(s, "$1" + i.sizes.image)
        }).appendTo(r)).wrap("<div></div>").wrap(e("<a></a>", {
          href: u.replace(s, "$1" + i.sizes.imagezoom),
          "class": "jqzoom"
        })), e("<img>", {
          src: u.replace(s, "$1" + i.sizes.thumb)
        }).appendTo(l).wrap("<div></div>"), d[m].IsMain && (i.slickOptions.images.initialSlide = m);
      }
    } catch (o) {
      "undefined" != typeof console && "function" == typeof console.error && console.error("Problemas :( . Detalhes: ", o);
    }

    try {
      i.slickOptions.images.asNavFor = l, e(window).trigger("QD_SPC_beforeImageSlick", [r]), e(r).slick(i.slickOptions.images), i.slickOptions.thumbs.asNavFor = r, e(l).each(function () {
        var o = e(this);
        o.find("img:first").one("load", function () {
          try {
            e(window).trigger("QD_SPC_beforeThumbSlick", [o]), o.slick(i.slickOptions.thumbs), e(window).trigger("QD_SPC_afterSlick", [o]);
          } catch (o) {
            "undefined" != typeof console && "function" == typeof console.error && console.error("Problemas :( . Detalhes: ", o);
          }
        });
      }), e(".jqzoom").jqzoom(i.zoomOptions), e(l).on("afterChange", function () {
        e(r).slick("slickGoTo", e(this).slick("slickCurrentSlide"));
      });
    } catch (o) {
      "undefined" != typeof console && "function" == typeof console.error && console.error("Problemas :( . Detalhes: ", o);
    }
  }

  function r(o) {
    return e.qdAjax({
      url: "/produto/sku/" + o,
      dataType: "json",
      error: function error() {
        alert("erro ao buscar objeto SKU");
      }
    });
  }
}(); /// FIXAR IMAGEM PAGINA DE PRODUTO

/* Quatro Digital - Affix // 1.0 // Carlos Vinicius // Todos os direitos reservados */

(function (F, d) {
  if ("function" !== typeof d.fn.QD_affix) {
    var y = function y(a, b) {
      if ("object" === (typeof console === "undefined" ? "undefined" : _typeof(console)) && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
        var c;
        "object" === _typeof(a) ? (a.unshift("[Quatro Digital - Affix]\n"), c = a) : c = ["[Quatro Digital - Affix]\n" + a];
        if ("undefined" === typeof b || "alerta" !== b.toLowerCase() && "aviso" !== b.toLowerCase()) {
          if ("undefined" !== typeof b && "info" === b.toLowerCase()) try {
            console.info.apply(console, c);
          } catch (d) {
            try {
              console.info(c.join("\n"));
            } catch (e) {}
          } else try {
            console.error.apply(console, c);
          } catch (k) {
            try {
              console.error(c.join("\n"));
            } catch (g) {}
          }
        } else try {
          console.warn.apply(console, c);
        } catch (p) {
          try {
            console.warn(c.join("\n"));
          } catch (q) {}
        }
      }
    },
        u = {
      topSpacing: 20,
      bottomSpacing: 20,
      bottomLimitSeletor: !1,
      css: {
        position: "relative"
      }
    },
        e = d(window);

    e.width();

    var k = e.height(),
        z = function z(a) {
      var b = a;
      d(function () {
        e.resize(function () {
          b();
        });
      });
      e.load(function () {
        b = function b() {};

        e.resize(a);
      });
    };

    z(function () {
      e.width();
      k = e.height();
    });
    d(function () {
      e.width();
      k = e.height();
    });

    var E = function E(a, b) {
      if (a.is(".qd-affix-on")) return y("Execu\xE7\xE3o ignorada pois a classe 'qd-affix-on' foi encontrado o que significa que este elemento j\xE1 teve o plugin aplicado", "aviso"), a;
      a.addClass("qd-affix-on");

      try {
        a.css(b.css);

        var c,
            m,
            x = function x() {
          m = c = a.offset();
          m.top = c.top - b.topSpacing;
        };

        x();
        var t = !1;
        a.width();

        var g = a.height(),
            p = function p() {
          a.width();
          g = a.height();
          t = g + b.topSpacing + b.bottomSpacing > k;
          r && (l = q.offset());
        },
            q,
            r = !1,
            l;

        (function () {
          if (b.bottomLimitSeletor) {
            q = d(b.bottomLimitSeletor).first();
            var a = q.offset();
            a && (r = !0, l = a);
          }
        })();

        var h = 0,
            v = 0,
            A = 0,
            B = 0,
            f = 0,
            C = !1,
            D = 0,
            w = 0,
            n = function n() {
          clearTimeout(A);
          A = setTimeout(p, 25);
          5 > w && (a[0].style.top = 0, x(), w += 1);
          f = window.scrollY || document.documentElement.scrollTop;
          C = 0 !== f && f <= B ? !0 : !1;
          B = f;

          if (r && t) {
            if (f + k > l.top && a.offset().top + b.topSpacing + g + b.bottomSpacing > l.top) {
              a[0].style.top = l.top - c.top - (b.topSpacing + g + b.bottomSpacing) + "px";
              return;
            }
          } else if (r && f + b.topSpacing + g + b.bottomSpacing > l.top) return;

          t ? C ? (h = f - m.top, -1 < h && a.offset().top - b.topSpacing > f && (a[0].style.top = f - m.top + "px")) : (h = c.top + g + b.bottomSpacing, v = f + k, h < v ? f + k > a.offset().top + g + b.bottomSpacing && (a[0].style.top = v - h - b.bottomSpacing + "px") : a[0].style.top = 0) : (h = f - m.top, a[0].style.top = -1 < h ? h + "px" : 0);
        };

        e.scroll(function () {
          n();
          clearTimeout(D);
          D = setTimeout(n, 50);
        });
        z(function () {
          p();
          n();
        });
        e.load(function () {
          p();
          n();
        });
        n();
      } catch (u) {
        y("Erro: " + u.message);
      }
    };

    d.fn.QD_affix = function (a) {
      var b = d(this);
      if (!b.length) return b;
      var c = d.extend({}, u, a);
      b.each(function () {
        var a = d(this);
        a.qdPlugin = new E(a, c);
      });
      return b;
    };

    d(function () {
      d(".qd_auto_affix").QD_affix();
    });
  }
})(window, jQuery);