/* DESKTOP-GUOJE28 - 29/06/2021 17:24:29 GMT */
"use strict";function checkoutSteps(){$(window).on("hashchange",function(e){if(window.location.hash=="#/cart"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active")}else if(window.location.hash=="#/email"||window.location.hash=="#/profile"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active");$("#identificacao").addClass("active")}else if(window.location.hash=="#/payment"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active");$("#identificacao").addClass("active");$("#pagamento").addClass("active")}else if(window.location.hash=="/orderPlaced"){$(".mz-header__checkout--steps li").addClass("active")}})}checkoutSteps();function checkoutCupons(){var skuId;var skuId2=[];vtexjs.checkout.getOrderForm().done(function(orderForm){var itms=orderForm.items;$.each(itms,function(idx,val){if(val.productCategories!="Eletrônicos"){$("#shipping-preview-container").hide();$(".vtex-omnishipping-1-x-deliveryGroup").hide()}if(idx.length<2){skuId=val.id}else{skuId2.push(val.id)}});var email=orderForm.clientProfileData.email;Cookies.set("skuIdOrder",skuId===undefined?skuId2:skuId);Cookies.set("emailOrder",email);Cookies.set("idOrder",orderForm.orderFormId)});$(window).on("hashchange",function(e){if(window.location.hash=="#/shipping"){vtexjs.checkout.getOrderForm().done(function(orderForm){var itms=orderForm.items;$.each(itms,function(idx,val){if(val.productCategories!="Eletrônicos"){$(".vtex-omnishipping-1-x-deliveryGroup").hide()}})})}})}$(function(){checkoutCupons()});