/* DESKTOP-F6V71R2 - 29/08/2023 15:36:34 GMT */
function setShippingProgressBar(){window.qd_ShippingTargetPrice=399;try{$(window).on("orderFormUpdated.vtex",function(evt,orderForm){var targetPrice=window.qd_ShippingTargetPrice;var wrapper=$(".minicart__summary");if(orderForm.totalizers[0]==undefined){var valueMinicart=0}else{var valueMinicart=orderForm.totalizers[0].value}var currentPrice=valueMinicart/100;var percentage=currentPrice/targetPrice*100;var difference=targetPrice-currentPrice;var differentFormat=difference.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});if(wrapper.length){var shippingText=`<div class="qd-v1-shipping-progress-bar-cart"> <div class="progress-bar-text"><img src="/arquivos/frete-icon.png" class="icon-frete" />Faltam só ${differentFormat} para o <span class="mz-shipping-text"> frete grátis</span> </div><div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">  </div> </div></div>`;$(".minicart__summary").append(shippingText);var textFormat=$(".qd-v1-shipping-progress-bar-cart");textFormat.find(".progress-bar-text").html(`<img src="/arquivos/frete-icon.png" class="icon-frete" />Faltam só ${differentFormat} para o <span class="mz-shipping-text"> frete grátis</span>`);$(".progress").find(".progress-bar").css("width",percentage+"%").attr("aria-valuenow",percentage);if(difference<=0){textFormat.find(".progress-bar-text").html('<img src="/arquivos/frete-icon.png" class="icon-frete" /><span class="free-shipping-text">Parabéns! Você atingiu o frete grátis</span>')}}if($(".qd-v1-shipping-progress-bar-cart").length>=2){$(".qd-v1-shipping-progress-bar-cart").first().remove()}});console.log("teste 1")}catch(e){console.log("error")}}$(window).on("load",function(){setShippingProgressBar();console.log("entrou")});