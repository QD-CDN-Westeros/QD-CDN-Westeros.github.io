/* PC-RAYQUAZA - 23/09/2021 19:14:45 GMT-0300 */
"use strict";function mz_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function a(_a,b){var c=Math.pow(10,b);return""+(Math.round(_a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)}$(function(){function cartPersonalization(difference,percentage){var wrapper=$(".mz-v1-shipping-progress-bar-checkout");if(!wrapper.length)$(".full-cart .totalizers").append('<div class="mz-v1-shipping-progress-bar-checkout"> <div class="progress-bar-text"><span class="icon-truck"></span>Faltam só <span>R$ '+mz_number_format(difference,2,",",".")+'</span> para seu frete grátis! </div> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">  </div> </div></div>');wrapper=$(".mz-v1-shipping-progress-bar-checkout");wrapper.find(".progress-bar-text").html('<span class="icon-truck"></span> Faltam só <span>R$ '+mz_number_format(difference,2,",",".")+"</span> para seu frete grátis!");wrapper.find(".progress-bar").css("width",percentage+"%").attr("aria-valuenow",percentage);return wrapper}function shippingPersonalization(difference){var wrapper=$(".mz-v1-shipping-alert-box");if(!wrapper.length)wrapper=$('<div class="mz-v1-shipping-alert-box"> </div>').appendTo(".shipping-data .accordion-inner");wrapper.html(' <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Faltam só <strong>R$ '+mz_number_format(difference,2,",",".")+"</strong> para Frete Grátis!");return wrapper}var bind=function bind(){try{if(!window.mz_ShippingTargetPrice||!window.API||!window.API.orderForm)return;var targetPrice=window.mz_ShippingTargetPrice;var wrapper;var currentPrice=window.API.orderForm.totalizers[0].value/100;var percentage=currentPrice/targetPrice*100;var difference=targetPrice-currentPrice;if(!(window.location.hash.indexOf("cart")<0)){wrapper=cartPersonalization(difference,percentage);if(difference<=0){wrapper.find(".progress-bar-text").html('<span class="icon-truck"></span> Você ganhou frete grátis!')}}if(!(window.location.hash.indexOf("shipping")<0)){wrapper=shippingPersonalization(difference);if(difference<=0){wrapper.html('<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Você ganhou frete grátis!')}}if($(".tooltip-necessary").length>1){$(".tooltip-necessary").last().remove()}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Erro:",e)}};$(window).on("orderFormUpdated.vtex",bind);$(window).on("hashchange",bind)});