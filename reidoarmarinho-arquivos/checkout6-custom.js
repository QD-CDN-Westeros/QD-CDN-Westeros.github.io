/* eduardo - 13/05/2021 16:10:41 GMT */
"use strict";var Checkout={init:function init(){Checkout.warningCheckout()},warningCheckout:function warningCheckout(){setTimeout(function(){$('<div class="warning_checkout" style="display:none"><p>Antes de finalizar o pedido, confirme se o seu endereço de entrega está completo e correto</p></div>').insertBefore(".container.container-main")},3500);$(window).on("hashchange",function(){var hash=window.location.hash;if(hash=="#/profile"||hash=="#/shipping"){$(".warning_checkout").addClass("active")}if(hash=="#/payment"){$(".warning_checkout").addClass("active")}})}};$(function(){Checkout.init()});