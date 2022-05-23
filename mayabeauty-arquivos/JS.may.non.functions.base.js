/* Ton-Maeztra - 11/05/2022 12:22:01 GMT */
"use strict";function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});try{var Common={run:function run(){},init:function init(){Common.vtexBindQuickViewDestroy();Common.addToCartShelfTemplate()},ready:function ready(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},vtexBindQuickViewDestroy:function vtexBindQuickViewDestroy(){window.bindQuickView=function(){}},addToCartShelfTemplate:function addToCartShelfTemplate(){$(".wrapper-buy-button-asynchronous").find("a.btn-add-buy-button-asynchronous").html("compre agora");$(".wrapper-buy-button-asynchronous").find("a.btn-add-buy-button-asynchronous").on("click",function(e){e.preventDefault();var _this=$(this);$.ajax({url:$(this).attr("href")+"&redirect=false"}).done(function(res,status,data_response){if(data_response.status==200&&status=="success"){var skuID=_this.parents(".shelf-wrapper").find(".idSku").html();$.ajax({url:"/api/catalog_system/pub/products/search?fq=skuId:"+skuID}).done(function(productData){var imgProduct=productData[0].items[0].images[0].imageUrl;var productName=productData[0].productName;vtexjs.checkout.getOrderForm();$(".popUp_successAddProduct").toggleClass("__active");$(".popUp_successAddProduct .popUp_successAddProduct-image").html('<img src="'+imgProduct+'" />');$(".popUp_successAddProduct .popUp_successAddProduct-name").html(productName);setTimeout(function(){$(".popUp_successAddProduct").toggleClass("__active")},3e3)})}})})}};var Home={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Search={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Product={run:function run(){},init:function init(){Product.setAvailableBodyClass()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},setAvailableBodyClass:function setAvailableBodyClass(){function checkVisibleNotify(available){if(available)$(document.body).addClass("qd-product-available").removeClass("qd-product-unavailable");else $(document.body).addClass("qd-product-unavailable").removeClass("qd-product-available")}$(document).on("skuSelected.vtex",function(e,id,sku){checkVisibleNotify(sku.available)});checkVisibleNotify(skuJson.available)}};var List={run:function run(){},init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Institutional={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Orders={init:function init(){Orders.bootstrapCssFix()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},bootstrapCssFix:function bootstrapCssFix(){var styleSheets=document.styleSheets;for(var i=0;i<styleSheets.length;i++){if((styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css")>-1||(styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css")>-1){styleSheets[i].disabled=true}}}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function windowLoad(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".produto"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function ajaxStop(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".produto"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".produto"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}(function(u){try{var a=jQuery,r=a({}),n=function n(a,d){if("object"===(typeof console==="undefined"?"undefined":_typeof(console))&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===_typeof(a)?(a.unshift("[Quatro Digital - Buy Button]\n"),b=a):b=["[Quatro Digital - Buy Button]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase()){if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(h){try{console.info(b.join("\n"))}catch(k){}}else try{console.error.apply(console,b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}}else try{console.warn.apply(console,b)}catch(h){try{console.warn(b.join("\n"))}catch(k){}}}},t={timeRemoveNewItemClass:5e3,isSmartCheckout:!0,buyButton:".productInformationWrapper  a.buy-button",buyQtt:"input.buy-in-page-quantity",selectSkuMsg:"javascript:",autoWatchBuyButton:!0,buyIfQuantityZeroed:!1,fakeRequest:!1,productPageCallback:function productPageCallback(g,d,b){a("body").is(".productQuickView")&&("success"===d?alert("Produto adicionado ao carrinho!"):(alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),("object"===(typeof parent==="undefined"?"undefined":_typeof(parent))?parent:document).location.href=b))},isProductPage:function isProductPage(){return a("body").is("#produto, .produto")},execDefaultAction:function execDefaultAction(a){return!1},allowBuyClick:function allowBuyClick(){return!0},callback:function callback(){},asyncCallback:function asyncCallback(){}};a.QD_buyButton=function(g,d,b){function h(a){f.isSmartCheckout?a.data("qd-bb-click-active")||(a.data("qd-bb-click-active",1),a.on("click.qd_bb_buy_sc",function(a){if(!f.allowBuyClick())return!0;if(!0!==m.clickBuySmartCheckout.call(this))return a.preventDefault(),!1})):alert("Método descontinuado!")}function k(e){e=e||a(f.buyButton);e.each(function(){var c=a(this);c.is(".qd-sbb-on")||(c.addClass("qd-sbb-on"),c.is(".btn-add-buy-button-asynchronous")&&!c.is(".remove-href")||c.data("qd-bb-active")||(c.data("qd-bb-active",1),c.children(".qd-bb-productAdded").length||c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'),c.is(".buy-in-page-button")&&f.isProductPage()&&l.call(c),h(c)))});f.isProductPage()&&!e.length&&n("Oooops!\nAparentemente esta é uma página de produto porém não encontrei nenhum botão comprar!\nVerifique se é este mesmo o seletor: '"+e.selector+"'.","info")}var f=b||f,p=a(g),m=this;window._Quatro_Digital_dropDown=window._Quatro_Digital_dropDown||{};window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};m.prodAdd=function(e,c){p.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");a("body").addClass("qd-bb-lightBoxBodyProdAdd");var b=a(f.buyButton).filter("[href='"+(e.attr("href")||"---")+"']").add(e);b.addClass("qd-bb-itemAddBuyButtonWrapper");setTimeout(function(){p.removeClass("qd-bb-itemAddCartWrapper");b.removeClass("qd-bb-itemAddBuyButtonWrapper")},f.timeRemoveNewItemClass);window._Quatro_Digital_dropDown.getOrderForm=void 0;if("undefined"!==typeof d&&"function"===typeof d.getCartInfoByUrl)return f.isSmartCheckout||(n("função descontinuada"),d.getCartInfoByUrl()),window._QuatroDigital_DropDown.getOrderForm=void 0,d.getCartInfoByUrl(function(c){window._Quatro_Digital_dropDown.getOrderForm=c;a.fn.simpleCart(!0,void 0,!0)},{lastSku:c});window._Quatro_Digital_dropDown.allowUpdate=!0;a.fn.simpleCart(!0);a(window).trigger("QuatroDigital.qd_sc_prodAdd",[e,c,b])};(function(){if(f.isSmartCheckout&&f.autoWatchBuyButton){var e=a(".btn-add-buy-button-asynchronous");e.length&&k(e)}})();var l=function l(){var e=a(this);"undefined"!==typeof e.data("buyButton")?(e.unbind("click"),h(e)):(e.bind("mouseenter.qd_bb_buy_sc",function(c){e.unbind("click");h(e);a(this).unbind(c)}),a(window).load(function(){e.unbind("click");h(e);e.unbind("mouseenter.qd_bb_buy_sc")}))};m.clickBuySmartCheckout=function(){var e=a(this),c=e.attr("href")||"";if(-1<c.indexOf(f.selectSkuMsg))return!0;c=c.replace(/redirect=(false|true)/gi,"").replace("?","?redirect=false&").replace(/&&/gi,"&");if(f.execDefaultAction(e))return e.attr("href",c.replace("redirect=false","redirect=true")),!0;c=c.replace(/http.?:/i,"");r.queue(function(b){if(!f.buyIfQuantityZeroed&&!/(&|\?)qty=[1-9][0-9]*/gi.test(c))return b();var d=function d(b,_d){var g=c.match(/sku=([0-9]+)/gi),h=[];if("object"===_typeof(g)&&null!==g)for(var k=g.length-1;0<=k;k--){var l=parseInt(g[k].replace(/sku=/gi,""));isNaN(l)||h.push(l)}f.productPageCallback.call(this,b,_d,c);m.buyButtonClickCallback.call(this,b,_d,c,h);m.prodAdd(e,c.split("ku=").pop().split("&").shift());"function"===typeof f.asyncCallback&&f.asyncCallback.call(this);a(window).trigger("productAddedToCart");a(window).trigger("cartProductAdded.vtex")};f.fakeRequest?(d(null,"success"),b()):a.ajax({url:c,complete:d,mimeType:"text/html"}).always(function(){b()})})};m.buyButtonClickCallback=function(a,c,b,d){try{"success"===c&&"object"===_typeof(window.parent)&&"function"===typeof window.parent._QuatroDigital_prodBuyCallback&&window.parent._QuatroDigital_prodBuyCallback(a,c,b,d)}catch(v){n("Problemas ao tentar comunicar a página que o produto foi aicionado ao carrinho.")}};k();"function"===typeof f.callback?f.callback.call(this):n("Callback não é uma função")};var l=a.Callbacks();a.fn.QD_buyButton=function(g,d){var b=a(this);"undefined"!==typeof d||"object"!==_typeof(g)||g instanceof a||(d=g,g=void 0);var h;l.add(function(){b.children(".qd-bb-itemAddWrapper").length||b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');h=new a.QD_buyButton(b,g,a.extend({},t,d))});l.fire();a(window).on("QuatroDigital.qd_bb_prod_add",function(a,b,d){h.prodAdd(b,d)});return a.extend(b,h)};var q=0;a(document).ajaxSend(function(a,d,b){-1<b.url.toLowerCase().indexOf("/checkout/cart/add")&&(q=(b.url.match(/sku=([0-9]+)/i)||[""]).pop())});a(window).bind("productAddedToCart.qdSbbVtex",function(){a(window).trigger("QuatroDigital.qd_bb_prod_add",[new a,q])});a(document).ajaxStop(function(){l.fire()})}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",g)}})(void 0);"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function success(){},error:function error(){},complete:function complete(){},clearQueueDelay:5},f),e;e="object"===_typeof(b.data)?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);(function(){var l=function l(a,c){if("object"===(typeof console==="undefined"?"undefined":_typeof(console))){var d="object"===_typeof(a);"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===_typeof(window.vtexjs)&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("Não foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a força não esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function done(){},fail:function fail(){}},c),b=a.join(";"),k=function k(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function a(_a,b){var c=Math.pow(10,b);return""+(Math.round(_a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)}(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart){b(function(){var e=vtexjs.checkout.getOrderForm;vtexjs.checkout.getOrderForm=function(){return e.call()}});try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(e,n,k){var l=function l(a,c){if("object"===(typeof console==="undefined"?"undefined":_typeof(console))){var d="object"===_typeof(a);"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):d?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};var g=b(this);"object"===_typeof(e)?n=e:(e=e||!1,g=g.add(b.QD_simpleCart.elements));if(!g.length)return g;b.QD_simpleCart.elements=b.QD_simpleCart.elements.add(g);k="undefined"===typeof k?!1:k;var p={cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:(b("meta[name=currency]").attr("content")||"R$")+" ",showQuantityByItems:!0,smartCheckout:!0,callback:function callback(){}};var f=b.extend({},p,n);var m=b("");g.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});var q=function q(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var c=0,d=0,h=0;h<a.totalizers.length;h++){"Shipping"==a.totalizers[h].id?d+=a.totalizers[h].value:c+=a.totalizers[h].value}window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(c/100,2,",",".");window._QuatroDigital_CartData.shipping=f.currencySymbol+qd_number_format(d/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((c+d)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(h=0;h<a.items.length;h++){window._QuatroDigital_CartData.qtt+=a.items[h].quantity}else window._QuatroDigital_CartData.qtt=a.items.length||0;try{window._QuatroDigital_CartData.callback&&window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(x){l("Problemas com o callback do Smart Cart")}t(m)};var u=function u(a,c){1===a?c.text("Item").filter(".singular").show():c.text("itens").filter(".plural").show()};var v=function v(a){1>a?g.addClass("qd-emptyCart"):g.removeClass("qd-emptyCart")};var w=function w(a,c){var d=parseInt(window._QuatroDigital_CartData.qtt,10);c.$this.show();isNaN(d)&&(l("O valor obtido para calcular o plural/singular não é um número! O valor será definido para 0.","alerta"),d=0);c.cartTotalE.html(window._QuatroDigital_CartData.total);c.cartQttE.html(d);u(d,c.itemsTextE);v(d)};var t=function t(a){g.each(function(){var c={};var d=b(this);e&&d.data("qd_simpleCartOpts")&&b.extend(f,d.data("qd_simpleCartOpts"));c.$this=d;c.cartQttE=d.find(f.cartQtt)||m;c.cartTotalE=d.find(f.cartTotal)||m;c.itemsTextE=d.find(f.itemsText)||m;c.emptyElem=d.find(f.emptyCart)||m;w(a,c);d.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(k||!e))return q(window._QuatroDigital_DropDown.getOrderForm);if("object"!==_typeof(window.vtexjs)||"undefined"===typeof window.vtexjs.checkout)if("object"===(typeof vtex==="undefined"?"undefined":_typeof(vtex))&&"object"===_typeof(vtex.checkout)&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return l("Não foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function done(a){q(a);window._QuatroDigital_DropDown.getOrderForm=a},fail:function fail(a){l(["Não foi possível obter os dados para o carrinho.",a])}})}else alert("Esta é uma função descontinuada =/")})();f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return g};b.QD_simpleCart={elements:b("")};b(function(){if("function"===typeof window.ajaxRequestbuyButtonAsynchronous){var e=window.ajaxRequestbuyButtonAsynchronous;window.ajaxRequestbuyButtonAsynchronous=function(n,k,l,g,p){e.call(this,n,k,l,g,function(){"function"===typeof p&&p();b.QD_simpleCart.elements.each(function(){var f=b(this);f.simpleCart(f.data("qd_simpleCartOpts"))})})}}});var r=window.ReloadItemsCart||void 0;window.ReloadItemsCart=function(e){b.fn.simpleCart(!0);"function"===typeof r?r.call(this,e):alert(e)};b(function(){var e=b(".qd_cart_auto");e.length&&e.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex cartProductAdded.vtex",function(){b.fn.simpleCart(!0)})})}catch(e){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",e)}}})();