/* PC-QUARTO - 16/06/2020 20:29:00 GMT-0300 */
(function(){"function"!==typeof $.cookie&&function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)}(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?g(b):b}var l=/\+/g,e=c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864e5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=h[m].split("="),k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}})})();(function(){var a,h,g;a=jQuery;g={cookieName:"Nome_Padrao",closeLimit:2,expireDays:365,completeExpireDays:365,path:"/",close:"[class*=close]",show:function(a){a.slideDown()},hide:function(a){a.slideUp()},callback:function(){},exceededLimitCallback:function(){},closeCallback:function(){}};var k=function(a,d){if("object"===typeof console){var e;"object"===typeof a?(a.unshift("[Cookie Functions]\n"),e=a):e=["[Cookie Functions]\n"+a];"undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase()?"undefined"!==typeof d&&"info"===d.toLowerCase()?console.info.apply(console,e):console.error.apply(console,e):console.warn.apply(console,e)}};a.QD_cookieFn=function(f){if("function"!==typeof a.cookie)return k("Aeeeee irmãããooooo!\nEsta faltando o plugin $.cookie mew. Chama ele na página, vlw!");var d=function(c,b){var d=a.cookie("qdCookieFn_"+b.cookieName);if("undefined"!==typeof d&&d>=b.closeLimit||a.cookie("qdCookieFn_"+b.cookieName+"_complete"))return b.exceededLimitCallback();b.show(c);c.trigger("QuatroDigital.cf_show");a(c).on("qdNewsSuccessCallback",function(a,d){c.trigger("QuatroDigital.qdcf_applyComplete");b.show(c);c.trigger("QuatroDigital.cf_hide")});b.callback();c.trigger("QuatroDigital.cf_callback")},e=function(a,b){a.find(b.close).not(".qd-cookie-on").addClass("qd-cookie-on").bind("click",function(){a.trigger("QuatroDigital.cf_close");a.slideUp(function(){b.closeCallback()})})},g=function(c,b){c.bind("QuatroDigital.cf_close",function(){"undefined"===typeof a.cookie("qdCookieFn_"+b.cookieName)?a.cookie("qdCookieFn_"+b.cookieName,1,{expires:b.expireDays,path:b.path}):a.cookie("qdCookieFn_"+b.cookieName,(parseInt(a.cookie("qdCookieFn_"+b.cookieName),10)||0)+1,{expires:b.expireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyComplete",function(){a.cookie("qdCookieFn_"+b.cookieName+"_complete",1,{expires:b.completeExpireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyLimit",function(){a.cookie("qdCookieFn_"+b.cookieName,b.closeLimit,{expires:b.expireDays,path:b.path})})};f.each(function(){var c=a(this),b;try{if(b=c.attr("data-qd-cookie"))var f=a.parseJSON("{"+b+"}")}catch(l){k(['Aeee irmãooo!\nNão consegui converter as suas opções do atributo [data-qd-cookie], verifique se você escreveu no formato esperado que é (respeitando-se todas as aspas simples e duplas):\n<div data-qd-cookie=\'"chave":"valor","chave2":"valor2"\' />.',"\n\nDetalhes do erro: "+l.message],"alerta"),f={}}b=a.extend({},h,f);g(c,b);d(c,b);e(c,b)})};a.fn.QD_cookieFn=function(f){var d=a(this);h=a.extend(!0,{},g,f);d.QD_cookieFn=new a.QD_cookieFn(d);return d};a(function(){a("[data-qd-cookie]").QD_cookieFn()})})();var MZCheckout={init:function(){MZCheckout.waitVtexjs();MZCheckout.setFormattedAddress();MZCheckout.changeCartLinks();MZCheckout.trimSpaces()},clickSelectPickup:function(){var count=0;var b=setInterval(function(){if($(".srp-toggle__pickup").length){$(".srp-toggle__pickup").click();clearInterval(b)}count++;if(count>20){clearInterval(b)}},200)},waitVtexjs:function(){var a=setInterval(function(){if(vtexjs&&vtexjs.checkout&&vtexjs.checkout.orderForm){clearInterval(a);window.vtexJsReady=true;MZCheckout.setFormattedAddress()}},250)},setFormattedAddress:function(){var slaFriendly=$.cookie("MZFriendlyName");var selectedAddress=JSON.parse(decodeURIComponent($.cookie("MZSelectedAddress")));var formattedAddress=(slaFriendly?slaFriendly+" - ":"")+MZCheckout.setFormattedAddressFromResponse(selectedAddress);$(".MZa__address").find(".address").html(formattedAddress)},setFormattedAddressFromResponse:function(address){return(address.street?address.street:"")+(address.number?", "+address.number:"")+(address.neighborhood?" - "+address.neighborhood:"")+(address.city?", "+address.city:"")+(address.state?", "+address.state:"")},changeCartLinks:function(){if($("#cart-choose-more-products").length){$("#cart-choose-more-products").attr("href","/mcmenu")}if($("#cart-choose-products").length){$("#cart-choose-products").attr("href","/mcmenu")}},forcePickUp:function(){vtexjs.checkout.getOrderForm().done(function(of){var shippingData=of.shippingData;if(!of.shippingData){return}var sla=$.cookie("MZSelectedSla");var address=shippingData.address;if(!address||!address.addressId){return}var addressId=((new Date).getTime()*-1).toString();var newAddress=address;newAddress.receiverName=null;newAddress.addressId=addressId;if(shippingData&&shippingData.logisticsInfo.length){var update=false;var selectedSla;var li=shippingData.logisticsInfo;for(var i=0;i<shippingData.logisticsInfo.length;i++){if(i==0){if(li[i].slas.length){for(var j=0;j<li[i].slas.length;j++){if(li[i].slas[j].pickupStoreInfo.address.addressId==sla){selectedSla=li[i].slas[j].id}}}}console.log(li[i].selectedSla);if(!li[i].selectedSla||li[i].selectedSla.indexOf(sla)<=-1){update=true;li[i].selectedSla=selectedSla?selectedSla:"Pickup ("+sla+")";li[i].itemIndex=i;li[i].addressId=addressId;li[i].selectedDeliveryChannel="pickup-in-point"}}if(update){var data={clearAddressIfPostalCodeNotFound:false,selectedAddress:[newAddress],logisticsInfo:li}}}})},trimSpaces:function(){$("input").on("keyup keydown change",function(){var val=$(this).val();val=val.replace(/\s+/g," ");$(this).val(val)});setTimeout(function(){$("#client-phone3,#client-phone1").on("keyup keydown",function(){var val=$(this).val();val=val.replace(/\s+/g," ");$(this).val(val)})},2e3)}};$(function(){MZCheckout.init()});