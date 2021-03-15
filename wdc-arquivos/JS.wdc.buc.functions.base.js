// qd-include ../qd-quatro-lib-plugins/String Extender/StringExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Array Extender/ArrayExtender.min.js

var doc = document
var win = window

/**Funções base */
try {
  /* COMMON */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.common.js

  /* CART */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.cart.js

  /* CUSTOM SEARCH */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.customsearch.js

  /* HOME */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.home.js
  /* SEARCH */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.search.js
  /* PRODUCT */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.product.js
  /* LIST */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.list.js
  /* INSTITUCIONAL */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.institucional.js
  /* ORDERS */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.orders.js
  /* ACCOUNT */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.account.js
	//
  /* REGISTER */
  // qd-include ./web/JS/components/JS.wdc.buc.functions.auth.js
  // qd-include ./web/JS/components/JS.wdc.buc.functions.register.js
  // qd-include ./web/JS/components/JS.wdc.buc.functions.facade.js
  // qd-include ./web/JS/components/JS.wdc.buc.functions.login.js


  /* Infinity scroll */
  // qd-include ./web/JS/JS.QD-infinityScroll.min.js
} catch (e) {
  typeof console !== "undefined" &&
    typeof console.error === "function" &&
    console.error("Houve um erro nos objetos. Detalhes: " + e.message);
}

try {
  (function () {
    var body, ajaxStop, windowLoad;

    windowLoad = function () {
      Common.windowOnload();
      CustomSearch.windowOnload();
      if (body.is(".home")) Home.windowOnload();
      else if (body.is(".resultado-busca, .departamento, .categoria"))
        Search.windowOnload();
      else if (body.is(".produto")) Product.windowOnload();
      else if (body.is(".listas, .giftlist,.giftlist-home,.giftlist-shelf,.giftlist-manage,.giftlist-greate")) List.windowOnload();
      else if (body.is(".institucional")) Institutional.windowOnload();
      //else if (body.is(".account, .orders")) Wishlist.windowOnload();
      else if (body.is(".pre-carrinho")) Cart.windowOnload(); 
      else if (body.is(".my-orders")) Orders.windowOnload();
    };

    ajaxStop = function () {
      Common.ajaxStop();
      if (body.is(".home")) Home.ajaxStop();
      else if (body.is(".resultado-busca, .departamento, .categoria"))
        Search.ajaxStop();
      else if (body.is(".produto")) Product.ajaxStop();
      else if (body.is(".listas, .giftlist,.giftlist-home,.giftlist-shelf,.giftlist-manage,.giftlist-greate")) List.ajaxStop();
      else if (body.is(".institucional")) Institutional.ajaxStop();
      else if (body.is(".account, .orders")) Account.ajaxStop();
      else if (body.is(".pre-carrinho")) Cart.ajaxStop();
      CustomSearch.ajaxStop();
      // else if (body.is(".wishlist")) Wishlist.ajaxStop();
    };

    $(function () {
      
      body = $(document.body);
      Common.init();
      if (body.is(".home")) Home.init();
      else if (body.is(".resultado-busca, .departamento, .categoria")) {
        Search.isSearch = $(document.body).is(".resultado-busca");
        Search.isDepartament = $(document.body).is(".departamento");
        Search.isCategory = $(document.body).is(".categoria");
        Search.init();
      } else if (body.is(".produto")) Product.init();
      else if (body.is(".listas, .giftlist,.giftlist-home,.giftlist-shelf,.giftlist-manage,.giftlist-greate")) List.init();
      else if (body.is(".institucional")) Institutional.init();
      else if (body.is(".account")) Account.init();
      else if (body.is(".my-orders")) Orders.init();
      else if (body.is(".pre-carrinho")) Cart.init();

      if (!body.is(".pre-carrinho")) {
        Register.init();
        Login.init();
      }

      CustomSearch.init();
      // else if (body.is(".wishlist")) Wishlist.init();

      $(document).ajaxStop(ajaxStop);
      $(window).load(windowLoad);
      body.addClass("jsFullLoaded");
      Common.ready();
    });

    Common.run();
    if (
      location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() ==
      "/p"
    )
      Product.run();
    else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
      List.run();
  })();
} catch (e) {
  typeof console !== "undefined" &&
    typeof console.error === "function" &&
    $("body").addClass("jsFullLoaded jsFullLoadedError") &&
    console.error(
      "Houve um erro ao iniciar os objetos. Detalhes: " + e.message
    );
}

/* Quatro Digital - Smart Buy Button // 1.18 // Carlos Vinicius // Todos os direitos reservados */
(function (u) {
  try {
    var a = jQuery, c, r = a({}), l = function (a, c) {
      if ("object" === typeof console && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
        var b; "object" === typeof a ? (a.unshift("[Quatro Digital - Buy Button]\n"), b = a) : b = ["[Quatro Digital - Buy Button]\n" + a]; if ("undefined" === typeof c || "alerta" !== c.toLowerCase() && "aviso" !== c.toLowerCase()) if ("undefined" !== typeof c && "info" === c.toLowerCase()) try { console.info.apply(console, b) } catch (h) { try { console.info(b.join("\n")) } catch (k) { } } else try {
          console.error.apply(console,
            b)
        } catch (h) { try { console.error(b.join("\n")) } catch (k) { } } else try { console.warn.apply(console, b) } catch (h) { try { console.warn(b.join("\n")) } catch (k) { } }
      }
    }, t = {
      timeRemoveNewItemClass: 5E3, isSmartCheckout: !0, buyButton: ".productInformationWrapper  a.buy-button", buyQtt: "input.buy-in-page-quantity", selectSkuMsg: "javascript:", autoWatchBuyButton: !0, buyIfQuantityZeroed: !1, fakeRequest: !1, productPageCallback: function (c, f, b) {
        a("body").is(".productQuickView") && ("success" === f ? alert("Produto adicionado ao carrinho!") : (alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),
          ("object" === typeof parent ? parent : document).location.href = b))
      }, isProductPage: function () { return a("body").is("#produto, .produto") }, execDefaultAction: function (a) { return !1 }, allowBuyClick: function () { return !0 }, callback: function () { }, asyncCallback: function () { }
    }; a.QD_buyButton = function (g, f) {
      function b(a) {
        c.isSmartCheckout ? a.data("qd-bb-click-active") || (a.data("qd-bb-click-active", 1), a.on("click.qd_bb_buy_sc", function (a) {
          if (!c.allowBuyClick()) return !0; if (!0 !== m.clickBuySmartCheckout.call(this)) return a.preventDefault(),
            !1
        })) : alert("M\u00e9todo descontinuado!")
      } function h(e) {
        e = e || a(c.buyButton); e.each(function () { var d = a(this); d.is(".qd-sbb-on") || (d.addClass("qd-sbb-on"), d.is(".btn-add-buy-button-asynchronous") && !d.is(".remove-href") || d.data("qd-bb-active") || (d.data("qd-bb-active", 1), d.children(".qd-bb-productAdded").length || d.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'), d.is(".buy-in-page-button") && c.isProductPage() && p.call(d), b(d))) }); c.isProductPage() &&
          !e.length && l("Oooops!\nAparentemente esta \u00e9 uma p\u00e1gina de produto por\u00e9m n\u00e3o encontrei nenhum bot\u00e3o comprar!\nVerifique se \u00e9 este mesmo o seletor: '" + e.selector + "'.", "info")
      } var k, p, m; k = a(g); m = this; window._Quatro_Digital_dropDown = window._Quatro_Digital_dropDown || {}; window._QuatroDigital_CartData = window._QuatroDigital_CartData || {}; m.prodAdd = function (e, d) {
        k.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd"); a("body").addClass("qd-bb-lightBoxBodyProdAdd"); var b = a(c.buyButton).filter("[href='" +
          (e.attr("href") || "---") + "']").add(e); b.addClass("qd-bb-itemAddBuyButtonWrapper"); setTimeout(function () { k.removeClass("qd-bb-itemAddCartWrapper"); b.removeClass("qd-bb-itemAddBuyButtonWrapper") }, c.timeRemoveNewItemClass); window._Quatro_Digital_dropDown.getOrderForm = void 0; if ("undefined" !== typeof f && "function" === typeof f.getCartInfoByUrl) return c.isSmartCheckout || (l("fun\u00e7\u00e3o descontinuada"), f.getCartInfoByUrl()), window._QuatroDigital_DropDown.getOrderForm = void 0, f.getCartInfoByUrl(function (d) {
            window._Quatro_Digital_dropDown.getOrderForm =
              d; a.fn.simpleCart(!0, void 0, !0)
          }, { lastSku: d }); window._Quatro_Digital_dropDown.allowUpdate = !0; a.fn.simpleCart(!0)
      }; (function () { if (c.isSmartCheckout && c.autoWatchBuyButton) { var e = a(".btn-add-buy-button-asynchronous"); e.length && h(e) } })(); p = function () { var e = a(this); "undefined" !== typeof e.data("buyButton") ? (e.unbind("click"), b(e)) : (e.bind("mouseenter.qd_bb_buy_sc", function (d) { e.unbind("click"); b(e); a(this).unbind(d) }), a(window).load(function () { e.unbind("click"); b(e); e.unbind("mouseenter.qd_bb_buy_sc") })) };
      m.clickBuySmartCheckout = function () {
        var e = a(this), d = e.attr("href") || ""; if (-1 < d.indexOf(c.selectSkuMsg)) return !0; d = d.replace(/redirect\=(false|true)/ig, "").replace("?", "?redirect=false&").replace(/\&\&/ig, "&"); if (c.execDefaultAction(e)) return e.attr("href", d.replace("redirect=false", "redirect=true")), !0; d = d.replace(/http.?:/i, ""); r.queue(function (b) {
          if (!c.buyIfQuantityZeroed && !/(&|\?)qty\=[1-9][0-9]*/ig.test(d)) return b(); var f = function (b, f) {
            var g = d.match(/sku\=([0-9]+)/ig), h = [], k; if ("object" === typeof g &&
              null !== g) for (var l = g.length - 1; 0 <= l; l--)k = parseInt(g[l].replace(/sku\=/ig, "")), isNaN(k) || h.push(k); c.productPageCallback.call(this, b, f, d); m.buyButtonClickCallback.call(this, b, f, d, h); m.prodAdd(e, d.split("ku=").pop().split("&").shift()); "function" === typeof c.asyncCallback && c.asyncCallback.call(this); a(window).trigger("productAddedToCart"); a(window).trigger("cartProductAdded.vtex")
          }; c.fakeRequest ? (f(null, "success"), b()) : a.ajax({ url: d, complete: f }).always(function () { b() })
        })
      }; m.buyButtonClickCallback = function (a,
        b, c, f) { try { "success" === b && "object" === typeof window.parent && "function" === typeof window.parent._QuatroDigital_prodBuyCallback && window.parent._QuatroDigital_prodBuyCallback(a, b, c, f) } catch (g) { l("Problemas ao tentar comunicar a p\u00e1gina que o produto foi aicionado ao carrinho.") } }; h(); "function" === typeof c.callback ? c.callback.call(this) : l("Callback n\u00e3o \u00e9 uma fun\u00e7\u00e3o")
    }; var n = a.Callbacks(); a.fn.QD_buyButton = function (g, f) {
      var b = a(this); "undefined" !== typeof f || "object" !== typeof g || g instanceof
        a || (f = g, g = void 0); c = a.extend({}, t, f); var h; n.add(function () { b.children(".qd-bb-itemAddWrapper").length || b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>'); h = new a.QD_buyButton(b, g) }); n.fire(); a(window).on("QuatroDigital.qd_bb_prod_add", function (a, b, c) { h.prodAdd(b, c) }); return a.extend(b, h)
    }; var q = 0; a(document).ajaxSend(function (a, c, b) { -1 < b.url.toLowerCase().indexOf("/checkout/cart/add") && (q = (b.url.match(/sku\=([0-9]+)/i) || [""]).pop()) }); a(window).bind("productAddedToCart.qdSbbVtex",
      function () { a(window).trigger("QuatroDigital.qd_bb_prod_add", [new a, q]) }); a(document).ajaxStop(function () { n.fire() })
  } catch (g) { "undefined" !== typeof console && "function" === typeof console.error && console.error("Oooops! ", g) }
})(this);


// qd-include ../qd-quatro-lib-plugins/_assets/jquery.mask.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.validate.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.serializeObject.min.js

// qd-include web/JS/JS.jquery.slick.min.js
// qd-include web/JS/JS.jquery.maskMoney.js
// qd-include web/JS/table2csv.min.js
// qd-include ../qd-amazing-menu/VTEX/QD_amazingMenu.min.js
// qd-include ../qd-smart-buy-button/QD_buyButton.min.js
// qd-include ../qd-simple-cart/SimpleCart.min.js
// qd-include ../qd-smart-cart/QD_smartCart.min.js
// qd-include ../qd-product-thumbs/QD_productThumbs.min.js
// qd-include ../qd-quatro-lib-plugins/Scroll Toggle/QD_scrollToggle.min.js
// qd-include ../qd-quatro-lib-plugins/Mosaic Banners/QD_mosaicBanners.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Image Load/QD_smartImageLoad.min.js
// qd-include ../qd-quatro-lib-plugins/Newsletter/QD_news.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Auto Complete/QD_smartAutoComplete.min.js


// !!! QD SMART SHOOTING STARS - FAVORITOS
// qd-include ../qd-quatro-lib-plugins/Smart Shooting Star/QD_smartShootingStar.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Photo Carousel/QD_smartPhotoCarousel.min.js

/// FIXAR IMAGEM PAGINA DE PRODUTO
// qd-include ../qd-quatro-lib-plugins/Affix/QD_affix.min.js

/* Quatro Digital - Smart Quantity // 1.10 // Carlos Vinicius // Todos os direitos reservados */
(function (r) {
  var d = jQuery; if ("function" !== typeof d.fn.QD_smartQuantity) {
    var g = function (d, a) {
      if ("object" === typeof console && "function" === typeof console.error && "function" === typeof console.info && "function" === typeof console.warn) {
        var f; "object" === typeof d ? (d.unshift("[Quatro Digital - Smart Quantity]\n"), f = d) : f = ["[Quatro Digital - Smart Quantity]\n" + d]; if ("undefined" === typeof a || "alerta" !== a.toLowerCase() && "aviso" !== a.toLowerCase()) if ("undefined" !== typeof a && "info" === a.toLowerCase()) try {
          console.info.apply(console,
            f)
        } catch (g) { console.info(f.join("\n")) } else try { console.error.apply(console, f) } catch (g) { console.error(f.join("\n")) } else try { console.warn.apply(console, f) } catch (g) { console.warn(f.join("\n")) }
      }
    }, l = { buyButton: ".buy-button", qttInput: ".qd-sq-quantity", btnMore: ".qd-sq-more", btnMinus: ".qd-sq-minus", initialValue: 1, setQuantityByUrl: !0 }, n = function (h, a) {
      function f(c, e, b) {
        a.setQuantityByUrl ? c.val(((location.search || "").match(m) || [a.initialValue]).pop()) : c.val(a.initialValue); c.change(function (c, b) {
          try {
            if ("qd_ssl_trigger" !=
              b) { var e = d(this), f = parseInt(e.val().replace(p, "")); !isNaN(f) && f > a.initialValue ? e.val(f) : e.val(a.initialValue); e.trigger("QuatroDigital.sq_change", this) }
          } catch (h) { g(h.message) }
        }); c.focusin(function () { d(this).trigger("QuatroDigital.sq_focusin", this) }); e.click(function (b) { b.preventDefault(); c.val((parseInt(c.val()) || a.initialValue) + 1).change() }); b.click(function (b) { b.preventDefault(); c.val((parseInt(c.val()) || a.initialValue + 1) - 1).change() }); c.change()
      } function l(c, e, b) {
        c.on("QuatroDigital.sq_change",
          function () { (d(this).val() || 0) <= a.initialValue ? (b.addClass("qd-sq-inactive"), e.removeClass("qd-sq-inactive")) : (e.addClass("qd-sq-inactive"), b.removeClass("qd-sq-inactive")) })
      } function n(c, e) {
        c.on("QuatroDigital.sq_change", function () {
          try {
            if (!(e[0].hostname || "").length) return g("A quantidade n\u00e3o foi inserida no bt comprar pois o mesmo n\u00e3o possui uma URL", "info"); var b = e[0].search || ""; -1 < b.toLowerCase().indexOf("qty=") ? e[0].search = b.replace(k, "qty=" + (parseInt(c.val()) || ("number" == typeof a.initialValue ?
              a.initialValue : 1)) + "&") : e[0].search = "qty=" + (parseInt(c.val()) || ("number" == typeof a.initialValue ? a.initialValue : 1)) + "&" + (e[0].search || "").replace(k, ""); var d = ((e.attr("href") || "").match(q) || [""]).pop() + ""; c.attr("data-sku-id", d); if (d.length && "object" === typeof skuJson && !c.attr("data-sku-price")) for (b = 0; b < skuJson.skus.length; b++)skuJson.skus[b].sku == d && c.attr("data-sku-price", skuJson.skus[b].bestPrice)
          } catch (f) { g(f.message) }
        })
      } var p = /[^0-9-]/gi, m = /qty\=([0-9]+)/i, q = /sku\=([0-9]+)/i, k = /qty\=[0-9]+\&?/ig;
      h.each(function () {
        try {
          var c = d(this), e = c.find(a.buyButton), b = c.find(a.qttInput), h = c.find(a.btnMore), k = c.find(a.btnMinus); if (!e.length && null !== a.buyButton || !b.length) return g("O plugin parou por aqui! N\u00e3o foram encontrados o bot\u00e3o comprar e o campo de quantidade", "alerta"); if (b.is(".qd-sq-on")) return g(["Execu\u00e7\u00e3o ignorada pois este input j\u00e1 possui o plugin aplicado. Input: ", b], "info"); b.addClass("qd-sq-on"); l(b, h, k); null !== a.buyButton && n(b, e); f(b, h, k); d(window).on("vtex.sku.selected",
            function () { b.change() })
        } catch (m) { g(m.message) }
      })
    }; d.fn.QD_smartQuantity = function (g) { var a = d(this); a.qdPlugin = new n(a, d.extend({}, l, g)); d(window).trigger("QuatroDigital.sq_callback"); return a }; d(function () { d(".qd_auto_smart_quantity").QD_smartQuantity() })
  }
})(this);




/* Quatro Digital - Smart SKU Totalizer // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function (m) {
  var a = jQuery; if ("function" !== typeof a.fn.QD_smartSkuTotalizer) {
    var f = function (a, b) {
      if ("object" === typeof console && "undefined" !== typeof console.error && "undefined" !== typeof console.info && "undefined" !== typeof console.warn) {
        var c; "object" === typeof a ? (a.unshift("[Quatro Digital - Smart SKU Totalizer]\n"), c = a) : c = ["[Quatro Digital - Smart SKU Totalizer]\n" + a]; if ("undefined" === typeof b || "alerta" !== b.toLowerCase() && "aviso" !== b.toLowerCase()) if ("undefined" !== typeof b && "info" === b.toLowerCase()) try {
          console.info.apply(console,
            c)
        } catch (f) { try { console.info(c.join("\n")) } catch (k) { } } else try { console.error.apply(console, c) } catch (g) { try { console.error(c.join("\n")) } catch (e) { } } else try { console.warn.apply(console, c) } catch (n) { try { console.warn(c.join("\n")) } catch (p) { } }
      }
    }, l = { inputQtt: "input", qttSkus: ".qd-selected-qtt-sku", valueSkus: ".qd-selected-sku-total" }; a.QD_smartSkuTotalizer = function (d, b) {
      if (!d.length) return d; try {
        var c = a(b.qttSkus), h = a(b.valueSkus), k = a("meta[name='currency']").attr("content") || "R$"; if (!c.length && !h.length) return f("N\u00e3o encontrei os elementos para informar os totais, por isso n\u00e3o irei exibi-los.",
          "info"); var g = d.find(b.inputQtt).not("disabled").filter("[data-sku-id]"); g.on("QuatroDigital.sq_change", function () { try { var b = 0, d = 0; g.each(function () { var c = a(this), e = parseInt(c.val()); 0 < e && (d += e, b += e * (parseInt(c.attr("data-sku-price")) || 0)) }); c.html(d); h.html(k + " " + qd_number_format(b / 100, 2, ",", ".")) } catch (e) { f(e.message) } })
      } catch (e) { f(e.message) }
    }; a.fn.QD_smartSkuTotalizer = function (d) { var b = a(this); if (!b.length) return b; var c = a.extend({}, l, d); b.each(function () { a.QD_smartSkuTotalizer(a(this), c) }); return b };
    a(function () { a(".qd_auto_smart_sku_totalizer").QD_smartSkuTotalizer() })
  }
})(this);

