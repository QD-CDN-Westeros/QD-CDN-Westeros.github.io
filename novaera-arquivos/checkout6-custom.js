/* Anonymouswill - 08/07/2020 08:41:04 GMT */
function checkoutSteps(){$(window).on("hashchange",function(e){if(window.location.hash=="#/cart"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active")}else if(window.location.hash=="#/email"||window.location.hash=="#/profile"){$(".mz-header__checkout--steps li").removeClass("active");$("#identificacao").addClass("active")}else if(window.location.hash=="#/payment"){$(".mz-header__checkout--steps li").removeClass("active");$("#pagamento").addClass("active")}else if(window.location.hash=="/orderPlaced"){$(".mz-header__checkout--steps li").removeClass("active");$("#confirmacao").addClass("active")}})}checkoutSteps();