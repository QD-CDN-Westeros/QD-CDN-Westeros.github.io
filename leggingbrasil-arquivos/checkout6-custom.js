/* LAPTOP-T0P1H0OI - 24/06/2021 17:49:31 GMT */
var Checkout={init:function(){Checkout.applyFlowProgressBuy();Checkout.boxContentHealth()},ajaxStop:function(){Checkout.shippingToggleCheckout()},applyFlowProgressBuy:function(){var imageFlow=$(".mz-flowbuy img");var pathFlow=["bsn-fllowbuy1.png","bsn-fllowbuy2.png","bsn-fllowbuy3.png","bsn-fllowbuy4.png"];$(window).on("hashchange",function(e){if(window.location.hash=="#/cart"){imageFlow.attr("src","/arquivos/"+pathFlow[0]+"");console.log(imageFlow.attr("src"));$(".mz-flowbuy").show()}else if(window.location.hash=="#/profile"||window.location.hash=="#/shipping"){imageFlow.attr("src","/arquivos/"+pathFlow[1]+"");console.log(imageFlow.attr("src"));$(".mz-flowbuy").show()}else if(window.location.hash=="#/payment"){imageFlow.attr("src","/arquivos/"+pathFlow[2]+"");$(".mz-flowbuy").show()}})},boxContentHealth:function(){var $boxContentHealth='<div class="cart-health-content"><div class="box-content-health">A entrega pode sofrer atrasos devido aos impactos do Covid-19.</div></div>';$($boxContentHealth).insertBefore(".cart-links-bottom")},shippingToggleCheckout:function(){if(vtexjs.checkout.orderForm==undefined)setTimeout(function(){Checkout.shippingToggleCheckout()},100);if(vtexjs.checkout.orderForm.shippingData==undefined)return;if(vtexjs.checkout.orderForm.shippingData.logisticsInfo==undefined)return;if(vtexjs.checkout.orderForm.shippingData.logisticsInfo.length<=0)return;if(vtexjs.checkout.orderForm.shippingData.logisticsInfo[0].selectedDeliveryChannel==undefined)return;if(vtexjs.checkout.orderForm.shippingData.logisticsInfo[0].selectedDeliveryChannel=="pickup-in-point")$(".qd-v1-shipping-progress-bar").hide();else $(".qd-v1-shipping-progress-bar").show()}};$(function(){Checkout.init()});$(document).ajaxStop(function(){Checkout.ajaxStop()});