/* davids - 02/10/2020 12:30:51 GMT-0300 */
var Checkout={init:function(){Checkout.applyFlowProgressBuy();Checkout.boxContentHealth();Checkout.shippingToggleCheckout()},applyFlowProgressBuy:function(){var imageFlow=$(".mz-flowbuy img");var pathFlow=["bsn-fllowbuy1.png","bsn-fllowbuy2.png","bsn-fllowbuy3.png","bsn-fllowbuy4.png"];$(window).on("hashchange",function(e){if(window.location.hash=="#/cart"){imageFlow.attr("src","/arquivos/"+pathFlow[0]+"");console.log(imageFlow.attr("src"));$(".mz-flowbuy").show()}else if(window.location.hash=="#/profile"||window.location.hash=="#/shipping"){imageFlow.attr("src","/arquivos/"+pathFlow[1]+"");console.log(imageFlow.attr("src"));$(".mz-flowbuy").show()}else if(window.location.hash=="#/payment"){imageFlow.attr("src","/arquivos/"+pathFlow[2]+"");$(".mz-flowbuy").show()}})},boxContentHealth:function(){var $boxContentHealth='<div class="cart-health-content"><div class="box-content-health">A entrega pode sofrer atrasos devido aos impactos do Covid-19.</div></div>';$($boxContentHealth).insertBefore(".cart-links-bottom")},shippingToggleCheckout:function(){window.addEventListener("load",function(){$(".srp-toggle__pickup").on("click",function(){$(".qd-v1-shipping-progress-bar").hide()});$(".srp-toggle__delivery").on("click",function(){$(".qd-v1-shipping-progress-bar").show()})})}};$(function(){Checkout.init()});