/* PC-QUARTO - 30/06/2020 16:07:12 GMT-0300 */
(function(){"function"!==typeof $.cookie&&function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)}(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?g(b):b}var l=/\+/g,e=c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864e5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=h[m].split("="),k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}})})();(function(){var a,h,g;a=jQuery;g={cookieName:"Nome_Padrao",closeLimit:2,expireDays:365,completeExpireDays:365,path:"/",close:"[class*=close]",show:function(a){a.slideDown()},hide:function(a){a.slideUp()},callback:function(){},exceededLimitCallback:function(){},closeCallback:function(){}};var k=function(a,d){if("object"===typeof console){var e;"object"===typeof a?(a.unshift("[Cookie Functions]\n"),e=a):e=["[Cookie Functions]\n"+a];"undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase()?"undefined"!==typeof d&&"info"===d.toLowerCase()?console.info.apply(console,e):console.error.apply(console,e):console.warn.apply(console,e)}};a.QD_cookieFn=function(f){if("function"!==typeof a.cookie)return k("Aeeeee irmãããooooo!\nEsta faltando o plugin $.cookie mew. Chama ele na página, vlw!");var d=function(c,b){var d=a.cookie("qdCookieFn_"+b.cookieName);if("undefined"!==typeof d&&d>=b.closeLimit||a.cookie("qdCookieFn_"+b.cookieName+"_complete"))return b.exceededLimitCallback();b.show(c);c.trigger("QuatroDigital.cf_show");a(c).on("qdNewsSuccessCallback",function(a,d){c.trigger("QuatroDigital.qdcf_applyComplete");b.show(c);c.trigger("QuatroDigital.cf_hide")});b.callback();c.trigger("QuatroDigital.cf_callback")},e=function(a,b){a.find(b.close).not(".qd-cookie-on").addClass("qd-cookie-on").bind("click",function(){a.trigger("QuatroDigital.cf_close");a.slideUp(function(){b.closeCallback()})})},g=function(c,b){c.bind("QuatroDigital.cf_close",function(){"undefined"===typeof a.cookie("qdCookieFn_"+b.cookieName)?a.cookie("qdCookieFn_"+b.cookieName,1,{expires:b.expireDays,path:b.path}):a.cookie("qdCookieFn_"+b.cookieName,(parseInt(a.cookie("qdCookieFn_"+b.cookieName),10)||0)+1,{expires:b.expireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyComplete",function(){a.cookie("qdCookieFn_"+b.cookieName+"_complete",1,{expires:b.completeExpireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyLimit",function(){a.cookie("qdCookieFn_"+b.cookieName,b.closeLimit,{expires:b.expireDays,path:b.path})})};f.each(function(){var c=a(this),b;try{if(b=c.attr("data-qd-cookie"))var f=a.parseJSON("{"+b+"}")}catch(l){k(['Aeee irmãooo!\nNão consegui converter as suas opções do atributo [data-qd-cookie], verifique se você escreveu no formato esperado que é (respeitando-se todas as aspas simples e duplas):\n<div data-qd-cookie=\'"chave":"valor","chave2":"valor2"\' />.',"\n\nDetalhes do erro: "+l.message],"alerta"),f={}}b=a.extend({},h,f);g(c,b);d(c,b);e(c,b)})};a.fn.QD_cookieFn=function(f){var d=a(this);h=a.extend(!0,{},g,f);d.QD_cookieFn=new a.QD_cookieFn(d);return d};a(function(){a("[data-qd-cookie]").QD_cookieFn()})})();var MZCheckoutConfirmation={init:function(){MZCheckoutConfirmation.confirmationModal();MZCheckoutConfirmation.fixLink();MZCheckoutConfirmation.fixAttachments();MZCheckoutConfirmation.setFormattedAddress();MZCheckoutConfirmation.waitOrderId();MZCheckoutConfirmation.clearAddressIfFinished();MZCheckoutConfirmation.setDeliveryTypeBodyClass()},fixLink:function(){$(window).load(function(){$(".cconf-continue-button").attr("href","/mcmenu")})},fixAttachments:function(){var a=setInterval(function(){if($(".cconf-product").length){var keys=$('tr[class*="ingredientes"] .cconf-attachment-key');keys.each(function(){var text=$(this).text();$(this).text(text.split(":")[0])});var juguetes=$('tr[class*="juguete"] .cconf-attachment-value');juguetes.each(function(){var $t=$(this);if($t.text().indexOf("false")>=0){$t.parent().hide()}else{var key=$t.siblings('[class*="key"]');var text=key.text();key.text(text.split(":")[0])}});$('.cconf-attachment-value:contains("false")').parent().remove();$(".cconf-attachment-name").each(function(){if($(this).next().is(":empty")){$(this).remove()}});$('[class*="attachment-ingredientes"], [class*="attachment-juguetes"]').show();clearInterval(a)}},500)},setFormattedAddress:function(){if(!$.cookie("MZFriendlyName")||!$.cookie("MZSelectedAddress")){return}var slaFriendly=$.cookie("MZFriendlyName");var selectedAddress=JSON.parse(decodeURIComponent($.cookie("MZSelectedAddress")));var formattedAddress=(slaFriendly?slaFriendly+" - ":"")+MZCheckoutConfirmation.setFormattedAddressFromResponse(selectedAddress);$(".MZa__address").find(".address").html(formattedAddress)},setFormattedAddressFromResponse:function(address){return(address.street?address.street:"")+(address.number?", "+address.number:"")+(address.neighborhood?" - "+address.neighborhood:"")+(address.city?", "+address.city:"")+(address.state?", "+address.state:"")},getOrder:function(){var html=$('<div class="mz-prepare mz-prepare--init" style="display:none">                  <h5 class="mz-prepare__title">                  No olvides hacer click en el botón de abajo, que se activa cuando estás a 200 metros del local.                  </h5>                  <button class="mz-prepare__button" type="button" disabled="disabled">Empezar a preparar</button>                </div>                <div class="mz-prepare mz-prepare--preparing" style="display:none">                  <h5 class="mz-prepare__title">                    <img src="/arquivos/icon-prepare.png" alt="Seu pedido está sendo preparado" />                    Su pedido está siendo preparado.                  </h5>                  <p class="mz-prepare__description">Contraseña de retirada de pedido</p>                  <div class="mz-prepare__dual-point">105</div>                </div>                <div class="mz-prepare mz-prepare--pending" style="display:none">                  <h5 class="mz-prepare__title">                    Esperando el restaurante<br /> confirma tu pedido.                  </h5>                  <div class="mz-spinner">                    <div class="spinner">                      <div></div>                    </div>                  </div>                </div>');var orderId=$("#order-id").text().substring(1);MZCheckoutConfirmation.orderRequisition(orderId).done(function(response){if(!response||!response.length){setTimeout(function(){MZCheckoutConfirmation.getOrder()},4e3);return}window.allowedDistance=250;var order=response[0];window.geoPrompt=true;MZCheckoutConfirmation.geoLocationPermission();$(".mz-prepare").remove();$("#app-top").prepend(html);MZCheckoutConfirmation.updateOrderStatus(order);setInterval(function(){if(window.waitingBringg){window.waitingBringg=false}else{MZCheckoutConfirmation.updateOrderStatusContainer()}},5e3)}).fail(function(){MZCheckoutConfirmation.getOrder()})},updateOrderStatus:function(order){var newStatus=MZCheckoutConfirmation.getOrderStatus(order);var coords=JSON.parse(order.geoCoordinates);var distance=0;if(window.userCoords){var lat1=coords[1];var lat2=window.userCoords.latitude;var lng1=coords[0];var lng2=window.userCoords.longitude;var d=MZCheckoutConfirmation.getDistance([lat2,lng2],[lat1,lng1]);distance=d}console.log(distance);window.orderStatus=newStatus;if(order.dualPoint){$(".mz-prepare--preparing").show();$(".mz-prepare--pending").hide();$(".mz-prepare__dual-point").text(order.dualPoint)}else if(order.status=="waiting"){$(".mz-prepare--pending").show();$(".mz-prepare--init").hide();$(".mz-prepare--preparing").hide()}else if(order.bringg&&distance<=window.allowedDistance&&!window.geoPrompt){$(".mz-prepare--init").show();$(".mz-prepare--preparing").hide();$(".mz-prepare__button").attr("disabled",false);$(".mz-prepare__button").off("click").on("click",function(){$("body").addClass("modal-prepare-confirmation");$(".mz-prepare__button-confirmation").off("click").on("click",function(){$("body").removeClass("modal-prepare-confirmation");$(".mz-prepare--pending").show();$(".mz-prepare--init").hide();MZCheckoutConfirmation.getDualPoint(order.bringg,order.id,order.account,order.hostname).done(function(response){if(!response){return}window.waitingBringg=true})})})}else{$(".mz-prepare--pending").hide();$(".mz-prepare--init").show();$(".mz-prepare--preparing").hide();$(".mz-prepare__button").attr("disabled",true)}},updateOrderStatusContainer:function(){MZCheckoutConfirmation.orderRequisition(window.orderStatus.id).done(function(response){if(!response||!response.length){return}var order=response[0];MZCheckoutConfirmation.updateOrderStatus(order)})},getOrderStatus:function(order){var id=order.id;if(order&&order.dualPoint){return{id:id,status:"ReceivedDualPoint"}}else if(order.status=="waiting"){return{id:id,status:"waitingDualPoint"}}else if(order.bringg){return{id:id,status:"isReadyToSend"}}else{return{id:id,status:"waitingBringg"}}},waitOrderId:function(){var a=setInterval(function(){if($("#order-id").length){clearInterval(a);MZCheckoutConfirmation.getOrder()}},2e3)},orderRequisition:function(orderId){var req={url:"https://midmc.maeztra.com/vtex/orders",type:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify({param:"id",value:orderId})};return $.ajax(req)},getDualPoint:function(bringgId,orderId,account,hostname){var request={url:"https://midmc.maeztra.com/bringg/order/prep",type:"POST",timeout:0,headers:{"Content-Type":"application/json"},data:JSON.stringify({id:orderId,bringg:bringgId,account:account,hostname:hostname?hostname:""})};return $.ajax(request)},getDistance:function(pos2,pos1){var lat1=pos2[0];var lat2=pos1[0];var lng1=pos2[1];var lng2=pos1[1];var phi1=lat1*Math.PI/180;var phi2=lat2*Math.PI/180;var dlambda=(lng2-lng1)*Math.PI/180;var R=6371e3;var d=Math.acos(Math.sin(phi1)*Math.sin(phi2)+Math.cos(phi1)*Math.cos(phi2)*Math.cos(dlambda))*R;return d},watchPosition:function(){if(navigator.geolocation){navigator.geolocation.watchPosition(function(pos){window.userCoords=pos.coords;window.geoPrompt=false},function(){console.log("não foi possível recuperar as coordenadas do usuário");window.geoPrompt=false;window.userCoords=""},{enableHighAccuracy:true,maximumAge:15e3})}else{window.geoPrompt=false;window.userCoords=""}},geoLocationPermission:function(){setTimeout(function(){MZCheckoutConfirmation.watchPosition()},120)},clearAddressIfFinished:function(){if(document.referrer&&document.referrer.indexOf("checkout")>-1){$.removeCookie("MZSelectedSla",{path:"/"});$.removeCookie("mzAddress",{path:"/"})}},confirmationModal:function(){$(".mz-overlay-confirmation,.mz-prepare__button-cancel,.mz-modal--confirmation .fa-times").click(function(){$("body").removeClass("modal-prepare-confirmation")})},setDeliveryTypeBodyClass:function(){var bodyClass="mz-no-delivery-type";if($.cookie("MZDeliveryType")){bodyClass="mz-type-"+$.cookie("MZDeliveryType")}$(document.body).addClass(bodyClass)}};$(function(){MZCheckoutConfirmation.init()});