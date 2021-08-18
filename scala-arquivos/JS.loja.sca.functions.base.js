/* Lugia - 16/07/2021 13:50:17 GMT */
"use strict";"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});try{var Common={run:function run(){},init:function init(){Common.vtexBindQuickViewDestroy()},ready:function ready(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},vtexBindQuickViewDestroy:function vtexBindQuickViewDestroy(){window.bindQuickView=function(){}}};var Home={init:function init(){Home.btnReadMore()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){Home.mainBanner();Home.shelfsTabs();Home.instaBanners()},mainBanner:function mainBanner(){$(".fullBanner .fullBanner__wrapper").unslick();$(".fullBanner .fullBanner__wrapper").slick({slide:".box-banner",slidesToShow:1,arrows:true,dots:true,infinite:true,autoplay:true,autoplaySpeed:6e3,speed:600})},shelfsTabs:function shelfsTabs(){var slickSettings={infinite:true,slidesToShow:4,slidesToScroll:1,dots:false,slider:"li",draggable:true,responsive:[{breakpoint:767,settings:{slidesToShow:1,arrows:true,variableWidth:true}}]};if(innerWidth<767){$(".mz-tabs-content .prateleira .prateleira-padrao ul").unslick();$(".mz-tabs-content .prateleira .prateleira-padrao ul").slick(slickSettings)}$(".tabs-segmento.mz-tabs-button li").on("click",function(){var tab_id=$(this).attr("data-tab");$(".tabs-segmento.mz-tabs-button li").removeClass("current");$(".tabs-segmento.mz-tabs-content .tabs-content--div").removeClass("current");$(this).addClass("current");$("#"+tab_id).addClass("current");$(".tabs-segmento.mz-tabs-content .prateleira .prateleira-padrao ul").unslick();$(".tabs-segmento.mz-tabs-content .prateleira .prateleira-padrao ul").slick(slickSettings)});$(".tabs-colecao.mz-tabs-button li").on("click",function(){var tab_id=$(this).attr("data-tab");$(".tabs-colecao.mz-tabs-button li").removeClass("current");$(".tabs-colecao.mz-tabs-content .tabs-content--div").removeClass("current");$(this).addClass("current");$("#"+tab_id).addClass("current");$(".tabs-colecao.mz-tabs-content .prateleira .prateleira-padrao ul").unslick();$(".tabs-colecao.mz-tabs-content .prateleira .prateleira-padrao ul").slick(slickSettings)})},instaBanners:function instaBanners(){$(".mz-instagram--banners").slick({slide:".box-banner",slidesToShow:4,arrows:true,dots:false,infinite:true,autoplay:false,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]})},btnReadMore:function btnReadMore(){$(".mz-btn-more").on("click",function(){$(".mz-SEO-text").toggleClass("mz-seo-height")})}};var Search={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Product={run:function run(){},init:function init(){Product.setAvailableBodyClass()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},setAvailableBodyClass:function setAvailableBodyClass(){function checkVisibleNotify(available){if(available)$(document.body).addClass("qd-product-available").removeClass("qd-product-unavailable");else $(document.body).addClass("qd-product-unavailable").removeClass("qd-product-available")}$(document).on("skuSelected.vtex",function(e,id,sku){checkVisibleNotify(sku.available)});checkVisibleNotify(skuJson.available)}};var List={run:function run(){},init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Institutional={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Orders={init:function init(){Orders.bootstrapCssFix()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},bootstrapCssFix:function bootstrapCssFix(){var styleSheets=document.styleSheets;for(var i=0;i<styleSheets.length;i++){if((styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css")>-1||(styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css")>-1){styleSheets[i].disabled=true}}}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function windowLoad(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".produto"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function ajaxStop(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".produto"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".produto"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}