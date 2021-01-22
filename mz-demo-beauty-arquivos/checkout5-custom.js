/* MacBook-Pro-de-erick.local - 22/01/2021 18:11:47 GMT */
$(function(){function cartPersonalization(difference,percentage){var wrapper=$(".qd-v1-shipping-progress-bar");if(!wrapper.length){wrapper=$('<div class="qd-v1-shipping-progress-bar"> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">0% Complete</span> <i class="fa fa-truck fa-flip-horizontal" aria-hidden="true"></i> </div> </div> <p>frete grátis</p> <div class="tooltip bottom in"><div class="tooltip-inner"></div> </div> <div class="mz-info-correios"></div></div>').insertAfter(".full-cart .summary-totalizers.totalizers")}wrapper.find(".tooltip.bottom.in .tooltip-inner").html("Faltam R$ "+qd_number_format(difference,2,",",".")+" para ganhar <span>frete grátis!</span>");wrapper.find(".progress-bar").css("width",percentage+"%").attr("aria-valuenow",percentage);var tooltipNecessary=$('<div class="tooltip-necessary"><span>Para obter frete grátis é necessário que o total calculado com desconto alcance o valor de <span class="qd-necessary-tooltip">R$ 149,00.</span></span></div>');tooltipNecessary.insertAfter(".tooltip.bottom.in .tooltip-inner");return wrapper}function shippingPersonalization(difference){var wrapper=$(".qd-v1-shipping-alert-box");if(!wrapper.length){wrapper=$('<div class="qd-v1-shipping-alert-box"> </div>').appendTo(".shipping-data .accordion-inner")}wrapper.html(' <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Faltam R$ '+qd_number_format(difference,2,",",".")+" para ter <span>frete grátis!</span");return wrapper}var bind=function(){try{if(!window.qd_ShippingTargetPrice||!window.API||!window.API.orderForm){console.log(window.qd_ShippingTargetPrice);return}var targetPrice=window.qd_ShippingTargetPrice;var wrapper;var currentPrice=window.API.orderForm.value/100;var percentage=currentPrice/targetPrice*100;var difference=targetPrice-currentPrice;if(!(window.location.hash.indexOf("cart")<0)){wrapper=cartPersonalization(difference,percentage)}if(!(window.location.hash.indexOf("shipping")<0)){wrapper=shippingPersonalization(difference)}if(difference<=0){wrapper.remove();return}if($(".tooltip-necessary").length>1){$(".tooltip-necessary").last().remove()}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Problemas :( . Detalhes: ",e)}};$(window).on("orderFormUpdated.vtex",bind);$(window).on("hashchange",bind);var clear=0;var interval=setInterval(function(){clear++;console.log("inter");if(window.API.orderForm&&window.qd_ShippingTargetPrice){console.log("here");bind();clearInterval(interval)}if(clear>8){clearInterval(interval)}},500)});function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)}