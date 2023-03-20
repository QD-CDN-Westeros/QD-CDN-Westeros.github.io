/* DESKTOP-F6V71R2 - 16/03/2023 16:43:15 GMT */
"use strict";try{var Common={run:function run(){},init:function init(){Common.slickTipBar();Common.priceMinValue()},ready:function ready(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},priceMinValue:function priceMinValue(){vtexjs.catalog.getCurrentProductWithVariations().done(function(product){var priceFull=product.skus[0].bestPrice;var textInformation="<span>*Este produto só pode ser adquirido por uma de nossas lojas fisicas ou por WhatsApp</span>";if(priceFull>=6e6){$(".preco").remove();$(".plugin-preco").remove();$(".produto-all .mz-product-all #produtoDiv-direita .variantes-sku").append(textInformation)}})},slickTipBar:function slickTipBar(){$(".mz-tip-bar-footer > ul").slick({dots:false,arrows:false,infinite:false,speed:300,autoplay:true,autoplaySpeed:2e3,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}};var Home={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Search={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Product={run:function run(){},init:function init(){Product.comprarFlutuante();Product.compartilhaWp();Product.abreFechaDescription();Product.slidePrateleiraProdutos();Product.slideExpMaxior();Product.parcelamentoOpt();Product.skuBestInstallmentValue();Product.setaTopo()},ajaxStop:function ajaxStop(){Product.sizeUno()},windowOnload:function windowOnload(){},setaTopo:function setaTopo(){$(".toTop").click(function(){$("html, body").animate({scrollTop:0})})},comprarFlutuante:function comprarFlutuante(){if($("body").hasClass("product")){$(window).scroll(function(){if($(window).scrollTop()>$("div#comprar-flutuante").offset().top-$("div#comprar-flutuante").offset().top&&!$("div#comprar-flutuante").hasClass("stickybottom")){$("div#comprar-flutuante").addClass("stickybottom");$("div#comprar-flutuante").animate({bottom:"0%"},1e3)}else if($(window).scrollTop()==0){$("div#comprar-flutuante").removeClass("stickybottom");$("div#comprar-flutuante").css({bottom:"-100%"})}})}},compartilhaWp:function compartilhaWp(){var shareUrl=window.location.href;$(".shareWhats").append('<a href="https://wa.me/?text='.concat(shareUrl,'" class="compartilharWp"></a>'))},abreFechaDescription:function abreFechaDescription(){$(".descricao-especificacao h2.titulo").click(function(){$(".productDescription").slideToggle();$(this).toggleClass("on")});$("#caracteristicas table.group.Especificacoes-do-produto").click(function(){$(this).find("tbody").slideToggle().css("display","block");$(this).find("tbody").closest("table").toggleClass("on")});$("table.group.Informacoes-adicionais").click(function(){$(this).find("tbody").slideToggle().css("display","block");$(this).find("tbody").closest("table").toggleClass("on")})},slidePrateleiraProdutos:function slidePrateleiraProdutos(){$(".slide-prod .prateleira > ul").slick({infinite:true,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:1,infinite:true}},{breakpoint:980,settings:{slidesToShow:3,slidesToScroll:1,infinite:true}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,dots:true}}]})},slideExpMaxior:function slideExpMaxior(){$(".exp-maxior .text-wrapper ").slick({infinite:true,arrows:false,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1400,settings:{slidesToShow:4,slidesToScroll:1,infinite:true}},{breakpoint:980,settings:{slidesToShow:3,slidesToScroll:1,infinite:true}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1,infinite:true,dots:true}}]})},parcelamentoOpt:function parcelamentoOpt(){setTimeout(function(){$("main").append('<div class="op-parc-lightbox"></div>');$(".other-payment-method-content").appendTo(".op-parc-lightbox");$(".other-payment-method-content").prepend('<p class="close-parc">X</p>');$(".price-installments").click(function(){$(".op-parc-lightbox").css("display","flex");$(".other-payment-method-content").css("display","block")});$(".op-parc-lightbox .close-parc").click(function(){$(".op-parc-lightbox").css("display","none");$(".other-payment-method-content").css("display","none")})},500)},sizeUno:function sizeUno(){$(".item-dimension-Aro").css("opacity","1");var listQtt=$(".item-dimension-Aro .nice-select .list li");var current=$(".item-dimension-Aro .nice-select .current");var label=$(".item-dimension-Aro label");if(listQtt.length===0){current.text("único");label.remove()}else{return}},skuBestInstallmentValue:function skuBestInstallmentValue(){$("#produtoDiv-direita .skuBestInstallmentValue").append("<p>ver opções</p>")}};var List={run:function run(){},init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Institutional={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Orders={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Account={init:function init(){Account.bootstrapCssFix();Account.applyWishlist()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function windowLoad(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".product"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function ajaxStop(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".product"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".product")||body.is(".Produto-Kit"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}