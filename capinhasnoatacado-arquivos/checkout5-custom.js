/* GENGAR - 17/05/2019 11:00:00 GMT */
(function($,window,document){"use strict";try{var applyShippingOption=function(){$(".full-cart ul.shipping-sla-options a#Transportadora span").text("Transportadora - a combinar");if($(".full-cart .totalizers-list td.info .shipping-sla-selector span.shipping-name").first().text()=="Transportadora"){$(".full-cart .totalizers-list .Shipping td.info span.shipping-estimate").text("a combinar");$(".full-cart .totalizers-list .Shipping td.monetary").text("Consulte Preço e Prazo com sua Transportadora");$(".full-cart table.cart-items span.shipping-estimate-date:not(.shipping-estimate-detail)").text("a combinar")}console.log($(".orderform-template.active input[value=Transportadora]"));$(".orderform-template.active input[value=Transportadora]").next("span").text("Transportadora - a combinar");if($(".orderform-template.active input[value=Transportadora]").is(":checked"))$(".orderform-template.active .totalizers-list .Shipping td.monetary").text("a combinar")};$(window).on("hashchange ajaxStop",function(){console.log("mudou");applyShippingOption()});$(document).on("componentDone.vtex",function(){console.log("mudou2");applyShippingOption()});applyShippingOption()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Problemas :( . Detalhes: ",e)}})(jQuery,window,document);