/* DESKTOP-F6V71R2 - 18/01/2023 15:31:04 GMT */
"use strict";try{var Common={run:function run(){},init:function init(){},ready:function ready(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Home={init:function init(){Search.searchBtn()},ajaxStop:function ajaxStop(){Search.searchBtn()},windowOnload:function windowOnload(){Search.searchBtn()}};var Search={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){Search.searchBtn()},searchBtn:function searchBtn(){$(".itHeader__searchDesk--searchIcon").css("cursor","pointer");$(".itHeader__searchDesk .itSearch__body--results").css("z-index","99");$(".itHeader__searchDesk--searchIcon").on("click",function(){var term=$(".itHeader__searchDesk--input").val();if(term.length>0){window.location.href="/".concat(term,"?qs=").concat(term,"&O=OrderByTopSaleDESC")}else{$(".itSearch__header--input").focus()}})}};var Product={run:function run(){},init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var List={run:function run(){},init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Institutional={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Orders={init:function init(){},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}};var Account={init:function init(){Account.bootstrapCssFix();Account.applyWishlist()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function windowLoad(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".produto"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function ajaxStop(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".produto"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".produto")||body.is(".Produto-Kit"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}