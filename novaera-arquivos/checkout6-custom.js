/* Anonymouswill - 10/08/2020 15:04:14 GMT */
"use strict";function checkoutSteps(){$(window).on("hashchange",function(e){if(window.location.hash=="#/cart"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active")}else if(window.location.hash=="#/email"||window.location.hash=="#/profile"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active");$("#identificacao").addClass("active")}else if(window.location.hash=="#/payment"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active");$("#identificacao").addClass("active");$("#pagamento").addClass("active")}else if(window.location.hash=="/orderPlaced"){$(".mz-header__checkout--steps li").addClass("active")}})}checkoutSteps();