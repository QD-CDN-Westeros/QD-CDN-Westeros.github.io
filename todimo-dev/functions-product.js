!function(){$(document).on("click","#ulPubliqueResenha .publique #lnkPubliqueResenha",(function(){$("#publishUserReview").addClass("active")})),$(document).on("click",".close",(function(){$("#publishUserReview").removeClass("active")})),$(document).on("click","#formasPagamento",(function(){$(".opcoes-pagamento").slideToggle()}));var e='\n\n<fieldset class="form-whitelabel-seller">\n\n  <div class="wl-container">\n\n    <div class="form-box form-state">\n        <h2 class="form-text"><strong>Importante:</strong> O tipo de entrega de alguns produtos foi alterado. Verifique o seu carrinho</h2>\n\n        <div class="wl-sellerOk visible">ok</div>\n    </div>                          \n\n  </div>    \n\n</fieldset>\n';function t(e){var t=e||1,a="/checkout/cart/add?sku="+skuJson.skus[0].sku+"&qty="+t+"&seller="+window.selectedSeller+"&redirect=true&sc=1";$(".buy-button").attr("href",a),$("#calculoFrete .quantity input").attr("value",t)}$(document).on("click",".qtd-comprar .btn-qtd",(function(){var e=$(this),a=$(".qtd-comprar .qtdInput"),o=parseInt(a.val());e.hasClass("btnMais")?(a.val(o+1),t(o+1)):e.hasClass("btnMenos")&&o>1&&(a.val(o-1),t(o-1))})),$(document).ready((function(){$(".product-image .apresentacao #include").append('\n      <div class="product-seals-containers">\n        <div class="product-seals-top-right-container"></div>\n        <div class="product-seals-top-left-container"></div>\n        <div class="product-seals-bottom-right-container"></div>\n        <div class="product-seals-bottom-left-container"></div>       \n      </div>\n    '),"block"==$(".descricao-preco .valor-por").css("display")&&$(".descricao-preco .valor-por").css("display","inline-block"),"block"==$(".descricao-preco .valor-dividido").css("display")&&$(".descricao-preco .valor-dividido").css("display","inline-block").addClass("visible"),0==$(".portal-notify-me-ref").height()?$("#formasPagamento, .compartilhar").show():$("#comprar-flutuante").addClass("d-none"),0==$(".productDescription")[0].textContent.length&&$(".product-description").hide(),$("#caracteristicas-e-especificacoes-tecnicas > br, #caracteristicas-e-especificacoes-tecnicas .p-carac-item > br").remove(),$("#especificacoes table.Especificacoes tr").each((function(){var e=`\n\n          <div class="product-specification-item">\n\n            <div class="product-specification-item-title tit-especial">\n              <span>${$(this).find(".name-field").text()}</span>\n            </div>\n\n            <div class="product-specification-item-content">\n              ${$(this).find(".value-field").html()}\n            </div>\n\n          </div>\n\n        `;$(".product-specification-items").append(e)}));var e=getCookieJobspace("jb-zipCodeCurrent");setTimeout((function(){null!=e&&$(".mz-freight-input").val(e)}),1e3)}));var a=$(".product-image .apresentacao #show .thumbs li").length,o=0;function i(){if(!$("body").is(".mz-buybox-page"))return;var t=skuJson.skus[0].sku;if(!t)return;skuJson.skus.length>1&&$(document).on("skuSelected.vtex",(function(e,a,i){for(var r=0,s=0;s<skuJson.skus.length;s++)i.sku==skuJson.skus[s].sku&&(r=s,t=i.sku);o(t,r)}));let a=null!=vtexjs.checkout.orderForm.shippingData?vtexjs.checkout.orderForm.shippingData.selectedAddresses[0].postalCode:getCookieJobspace("jb-zipCodeCurrent");function o(e,t){var a,o={postalCode:t,country:"BRA",items:[]};a=$(".bf-product__buyQtd").length?window.valueFinal?window.valueFinal:1:$(".qtd-comprar input").length?$(".qtd-comprar input").val():1,o.items.push({id:e,quantity:a,seller:1}),$.ajax({url:"/api/checkout/pub/orderforms/simulation",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(o)}).then((function(a){i(e,a,t)}))}function i(e,t,a){var o=[];if(t&&t.items&&t.items[0]&&t.purchaseConditions&&t.purchaseConditions.itemPurchaseConditions.length>0){var i=t.purchaseConditions.itemPurchaseConditions,r=t.totals,s=t.items&&t.items[0]&&t.items[0].unitMultiplier?t.items[0].unitMultiplier:1,n=t.items&&t.items[0]&&t.items[0].quantity?t.items[0].quantity:1;if($(".product-qd-v1-wrap-price .sku-unavailable").remove(),$(".productBuy-default").show(),!r.length)return b(),void console.log("not active");var l="",d=[];!function(e,t,a){$(".product-qd-v1-wrap-price:visible").remove();for(var o=0;o<e.length;o++){var i=e[o].sellerChain.filter((function(e){return"1"!=e}))[0];(l=$(".product-qd-v1-wrap-price").first().clone()).addClass(i||"1").attr("data-sellername",i).css({float:"left"}),l.appendTo($(".product-qd-v1-wrap-price").parent()).show(),p(e[o],t,a),d.push(e[o].sellerId),v()}if(!d.length||!e.length)return void b();$(".product-qd-v1-buy-button .buy-button").css({display:"block"})}(i,s,n),$(".product-qd-v1-wrap-price").parent().show()}function c(e){return{todimocba:"Todimo Carmindo de Campos Cuiabá-MT",todimovgd:"Todimo Couto Magalhâes Varzea Grande-MT",todimocac:"Todimo Cáceres-MT",todimosnp:"Todimo Sinop-MT",todimocdms:"Todimo CD Joaquim Murtinho Campo Grande-MS",todimornd:"Todimo Rondonópolis-MT",todimocdlnd:"Todimo CD Av Fernando Cerquira C.Coimbra Londrina-PR",todimolnd:"Todimo Av. Tiradentes Londrina-PR",todimosrs:"Todimo Sorriso-MT",todimohc:"Todimo Av. Miguel Sutil Cuiabá-MT",todimocc:"Todimo Saul Elkind Londrina-PR",todimotj:"Todimo Av. Fernado Correa Cuiabá-MT",todimocpa:"Todimo Rua Pará CPA Cuiaba-MT",todimocdmt:"Todimo CD Rod. Palmiro P. de Barros Cuiabá-MT",todimopnt:"Todimo Pontes e Lacerda-MT",todimoarp:"Todimo Arapongas-PR",todimoapc:"Todimo Apucarana-PR",todimopva:"Todimo Primavera do Leste-MT",todimobga:"Todimo Barra do Garças-MT",todimoarn:"Todimo Av. Agrícola Paes de Barros Cuiabá-MT",todimolrv:"Todimo Lucas do Rio Verde-MT",todimotga:"Todimo Tangará da Serra-MT",todimonmt:"Todimo Nova Mutum-MT",todimocgd:"Todimo Min. João Arinos Campo Grande-MS",todimoumu:"Todimo Umuarama-PR",todimogua:"Todimo Guarapuava-PR",todimobnd:"Todimo Av. Bandeirantes Campo Grande-MS",todimojlc:"Todimo Av. Júlio de Castilho Campo Grande-MS",todimodou:"Todimo Dourados-MS"}[e]||"Todimo"}function u(e){return $(".buy-button.buy-button-ref").attr("href").replace(/(seller=[0-9a-z]+)/g,"seller="+e)}function p(e,t,a){var i=e.sellerChain.filter((function(e){return"1"!=e}))[0];o[i]={id:i,name:c(i),price:e.listPrice,buyLink:u(i),slas:e.slas};var r=$(".product-qd-v1-wrap-price."+i);r.prepend('<span id="product-qd-v1-seller-id" style="display:none">'+i+"</span>"),r.prepend('<input type="radio" name="selectedSeller" style="display:none" value="'+o[i].buyLink+'" />'),r.find(".product-qd-v1-seller").html(o[i].name),r.addClass("isSellerSelectable");var s=o[i].slas.length;let n=[];for(var l=0;l<s;l++){var d=o[i].slas[l];if("delivery"==d.deliveryChannel&&(console.log(d.name),r.find(".product-qd-v1-seller").append('<p class="express"> - '+d.name+"</p>")),n.push(d.deliveryChannel),console.log("id",d.id),l>0){r.find(".mz-values-wrap").clone();var p=$(".product-qd-v1-wrap-price."+i).clone();p.find(".product-qd-v1-shipping").html(f(d.shippingEstimate)),isNaN(d.listPrice)||(p.attr("data-sla-id",d.id).attr("data-my-shipping",d.deliveryChannel),-1!=d.name.indexOf("Retirada")?(p.find(".product-qd-v1-price").html("Grátis"),p.addClass("pickup"),$(".pickup.unavailable").remove()):(p.find(".product-qd-v1-price").html("A partir de "+m(d.listPrice)),p.addClass("express"),p.removeClass("pickup"),$(".express.unavailable").remove())),p.find(".product-qd-v1-total").html(m(o[i].price)),r.parent().append(p)}else r.find(".product-qd-v1-shipping").html(f(d.shippingEstimate)),r.attr("data-sla-id",d.id).attr("data-my-shipping",d.deliveryChannel),isNaN(d.listPrice)||(-1!=d.name.indexOf("Retirada")?(r.find(".product-qd-v1-price").html("Grátis"),r.addClass("pickup"),$(".pickup.unavailable").remove()):(r.find(".product-qd-v1-price").html(m(d.listPrice)),r.addClass("express"),$(".express.unavailable").remove())),r.find(".product-qd-v1-total").html(m(o[i].price));$(".mz-sellers-container").attr("style","")}n.indexOf("delivery")>=0&&$("#delivery").addClass("active"),n.indexOf("pickup-in-point")>=0&&$("#pickup").addClass("active"),$(".product-qd-v1-wrap-price .mz-values-wrap").each((function(e,t){-1!=$(t).find(".product-qd-v1-price").html().indexOf("Grátis")&&$(t).find(".product-qd-v1-sellers-title:first-child").html("Retirada")})),$(".bf-product__buyQtdInput").length?$(".mz-buybox .product-qd-v1-sellers-v2 .product-qd-v1-sellers-title:nth-child(3)").html("Preço por m²"):$(".mz-buybox .product-qd-v1-sellers-v2 .product-qd-v1-sellers-title:nth-child(3)").html("Preço por unidade"),$(".product-qd-v1-wrap-price").off("click").on("click",(function(){$(".product-qd-v1-wrap-price").removeClass("checked pulse"),$(this).addClass("checked").find('input[name="selectedSeller"]').attr("checked","checked"),window.selectedSeller=$(this).find('input[name="selectedSeller"]').text();var e=$(this).find('input[name="selectedSeller"]').attr("value"),t=$(".productBuy-default .buy-button.buy-button-ref"),a=$(".qtd-comprar input").val();e=e.replace(/(qty=[0-9]+)/g,"qty="+a),t.attr("href",e),$(".comprar").addClass("active")}))}function m(e,t){if(0==e)return"Frete grátis";var a=((e=(e/100).toFixed(2))+"").split("."),o=a[1]?","+a[1]:",00";return"R$ "+a[0]+o}function f(e){if("Retire"==e)return"Retire na loja";var t="-";if(e&&e.length){var a=e.match(/\d+/)[0];t=e.includes("h")?a+" horas após o pagamento":a+" dias"}return t}function v(){$(".product-qd-v1-wrap-price.isSellerSelectable").length}function b(){$(".product-qd-v1-wrap-price:visible").remove(),$(".productBuy-default").hide(),$("body").addClass("unavailable");(l=$(".product-qd-v1-wrap-price").first().clone()).addClass("product-qd-v1-buy-button sku-unavailable").html('<div class="portal-notify-me-ref"><div class="notifyme sku-notifyme" style="display: block;"><div class="notifyme-title-div" style="display: block;"><h3 class="notifymetitle notifyme-title">Avise-Me</h3></div><form action="/no-cache/AviseMe.aspx" style="display: block;"><fieldset class="sku-notifyme-form notifyme-form"><p>Para ser avisado da disponibilidade deste Produto, basta preencher os campos abaixo.</p><input class="sku-notifyme-client-name notifyme-client-name" placeholder="Digite seu nome..." size="20" type="text" name="notifymeClientName" id="notifymeClientName" style="display: inline-block;"><input class="sku-notifyme-client-email notifyme-client-email" placeholder="Digite seu e-mail..." size="20" type="text" name="notifymeClientEmail" id="notifymeClientEmail" style="display: inline-block;"><input class="btn-ok sku-notifyme-button-ok notifyme-button-ok" value="ok" type="button" name="notifymeButtonOK" id="notifymeButtonOK" style="display: inline-block;"><input type="hidden" class="sku-notifyme-skuid notifyme-skuid" name="notifymeIdSku" value="107" style="display: none;"></fieldset></form><p class="notifyme-loading-message" style="display: none"><span class="sku-notifyme-loading notifyme-loading">Carregando...</span></p><fieldset class="success" style="display:none;"><label><em><span class="sku-notifyme-success notifyme-success">Cadastrado com sucesso, assim que o produto for disponibilizado você receberá um email avisando.</span></em></label></fieldset><fieldset class="error" style="display: none"><label><span class="sku-notifyme-error   notifyme-error"></span></label></fieldset></div></div>'),l.appendTo($(".product-qd-v1-wrap-price").parent()).show()}}0==$(".delivery:not(.unavailable)").length&&0==$(".pickup:not(.unavailable)").length&&o(t,a),$(".mz-freight-button").off("click").on("click",(function(t){if(t.preventDefault(),$(".product-qd-v1-wrap-price ").removeClass("checked"),$(".comprar").removeClass("active"),$(window).width()>768){var a=document.getElementById("delivery").offsetTop;window.scrollTo({top:a+10,left:0,behavior:"smooth"})}else $("html, body").animate({scrollTop:$(".mz-freight-button").offset().top-70},500);$("body").removeClass("delivery pickup"),$("body").addClass($(this).attr("id")),$(".produto .buy-button").on("click",(function(t){var a,o;t.preventDefault(),window.location.search.indexOf("bf8eaa79-2dd0")>-1&&(a=$(".product-qd-v1-wrap-price.checked").data("my-shipping"),o=$(".product-qd-v1-wrap-price.checked").data("sellername"),$(".mini-cart .minicart-middle .vtexsc-productList tbody>tr:not(.title_delivery):not(.title_pickup-in-point)").each((function(t,i){var r=$(i).attr("class"),s=$(i).data("nameseller");a!=r&&o===s&&(0==$(".wl-modalOverlay").length?($("html").append("<div class='wl-modalOverlay'></div>"),$("html").append(e).addClass("overlayModal")):(console.log("Whitelabel - Modal já foi criado. Reabrindo..."),$(".form-whitelabel-seller").fadeIn(),$(".wl-modalOverlay").show(),$("html").addClass("overlayModal")),$(".form-whitelabel-seller .wl-sellerOk").off("click").on("click",(function(){$(".form-whitelabel-seller").fadeOut(),$(".wl-modalOverlay").hide(),$("html").removeClass("overlayModal"),$(".mini-cart").addClass("minicart-open"),$(".overlay").attr("style"," ")})))}))),vtexjs.checkout.orderForm.shippingData.logisticsInfo,$(".product-qd-v1-wrap-price.checked").attr("name"),0==$(".product-qd-v1-wrap-price.checked").length&&($(".product-qd-v1-wrap-price").addClass("pulse"),$(this).addClass("buy-button-balloon"),setTimeout((function(){$(".buy-button").removeClass("buy-button-balloon")}),3e3));let i=$(".buy-button").attr("href").split("qty=")[1].split("&")[0],r=$(".product-qd-v1-wrap-price.checked #product-qd-v1-seller-id").text(),s={id:skuJson.skus[0].sku,quantity:i,seller:r};vtexjs.checkout.addToCart([s],null,1).done((function(e){let t,a,o,i=e.shippingData,r=i.logisticsInfo,n=e.items,l="";o=1==$("body.pickup .product-qd-v1-wrap-price.checked.pickup").length?"pickup-in-point":"delivery";for(var d=0;d<i.selectedAddresses.length;d++){let e=i.selectedAddresses[d];("delivery"==o&&"residential"==e.addressType||"pickup-in-point"==o&&"search"==e.addressType)&&(l=e.addressId)}if(!l){let e=JSON.parse(JSON.stringify(i.address)),t=-1;e.addressType="search","delivery"==o&&(t=1,e.addressType="residential"),e.addressId=((new Date).getTime()*t).toString(),l=e.addressId,i.selectedAddresses.push(e)}for(var c=0;c<n.length;c++)if(n[c].id==s.id){t=c;break}for(var u=0;u<r.length;u++)r[u].itemIndex==t&&(a=u);1==$("body.delivery .product-qd-v1-wrap-price.checked.express").length&&(r[a].selectedDeliveryChannel=o,r[a].addressId=l,r[a].selectedSla=$(".product-qd-v1-wrap-price.checked.express").attr("data-sla-id")),1==$("body.pickup .product-qd-v1-wrap-price.checked.pickup").length&&(r[a].selectedDeliveryChannel=o,r[a].addressId=l,r[a].selectedSla=$(".product-qd-v1-wrap-price.checked.pickup").attr("data-sla-id")),i.logisticsInfo=r,vtexjs.checkout.sendAttachment("shippingData",i).done((function(e){$("html").hasClass(".overlayModal")||($(".mini-cart").addClass("minicart-open"),$(".overlay").attr("style"," "))}))}))}))}))}$(document).ready((function(){$(".helperComplement").remove(),a>4&&function(){$("<div class='product-image-small-content'></div>").appendTo(".product-image .apresentacao #show"),$(".product-image .apresentacao #show .thumbs").appendTo(".product-image-small-content");var e=$(".product-image .apresentacao #show .thumbs").height();e<300?$(".js--product-image-slideDown").css("top",e+40):$(".js--product-image-slideDown").css("top","345px"),$(".product-image .apresentacao #show .thumbs li").length>3&&$(".product-image .js--product-image-slideUp, .product-image .js--product-image-slideDown").show(),$(".product-image .apresentacao #show .thumbs").addClass("loaded")}(),$(".product-image .apresentacao #show").css("opacity","1")})),$(document).on("click",".js--product-image-slideUp",(function(){o>0&&(o-=1,$(".product-image .product-image-small-content").attr("data-image-position",o),$(".product-image .apresentacao #show .thumbs").css("transform","translateY("+-55*o+"px)"))})),$(document).on("click",".js--product-image-slideDown",(function(){a-3>o&&(o+=1,$(".product-image .product-image-small-content").attr("data-image-position",o),$(".product-image .apresentacao #show .thumbs").css("transform","translateY("+-55*o+"px)"))})),$((function(){$("#divCompreJunto table").length>0&&$(".collection-compre-junto").prepend("<h2><span>"+$("#divCompreJunto #divTitulo").text()+"</span></h2>"),$(".collection-acessorios ul").length>0&&($("<div class='acessorios-container'></div>").insertAfter($(".collection-acessorios .prateleira > h2")),$(".collection-acessorios .prateleira > fieldset").appendTo($(".collection-acessorios .prateleira ul")),$(".collection-acessorios .prateleira li").each((function(){var e=$(this).next();$(this).append(e)})),$(".acessorios-container").prepend($(".collection-acessorios .prateleira > fieldset")),$(".acessorios-container").prepend($(".collection-acessorios .prateleira > ul")),$(".buy-product-checkbox").each((function(){$(this).attr("checked",!0).trigger("click")})),isMobile()?$(".collection-acessorios ul li").length>2&&$(".collection-prateleiras-personalizadas .vitrine-produto-acessorios .prateleira ul").slick({infinite:!1,dots:!1,slidesToShow:2,slidesToScroll:1,speed:500,autoplay:!1,arrows:!0,mobileFirst:!0}):$(".collection-prateleiras-personalizadas .vitrine-produto-acessorios .prateleira ul").slick({infinite:!1,dots:!1,slidesToShow:3,slidesToScroll:1,speed:500,autoplay:!1,arrows:!0})),$(".collection-prateleiras-personalizadas .prateleira ul li").length>0&&$(".collection-prateleiras-personalizadas .vitrine-produto .prateleira ul").slick({infinite:!0,dots:!1,slidesToShow:4,slidesToScroll:1,speed:1e3,autoplay:!0,arrows:!0,responsive:[{breakpoint:990,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}}]})})),$(document).ready((function(){setTimeout((function(){$(".valor-de").length>0&&$(".product-inf .preco .descricao-preco .valor-por").addClass("hasOldPrice"),$(".user-review > h4").addClass("tit-especial"),$(".user-review > h4").html("<span>"+$(".user-review > h4").text().replace(":","")+"</span>")}),1500),skuJson.available||$("body#produto .comprar .qtd-comprar").remove()})),$(document).ready((function(){$(window).scroll((function(){let e=$("body#produto .product-top .comprar .buy-button").offset().top,t=$("body#produto .product-top .comprar .buy-button").height(),a=$("#comprar-flutuante");$(this).scrollTop()>parseInt(e+t)?(a.addClass("active"),$(".whatsLateral").addClass("compraFlutuante-opened"),$(".backtoTop").addClass("compraFlutuante-opened")):(a.removeClass("active"),$(".whatsLateral").removeClass("compraFlutuante-opened"),$(".backtoTop").removeClass("compraFlutuante-opened"))}))})),$(document).on("click",".buy-button",(function(e){$(this).addClass("loading"),e.preventDefault();var t=$(".buy-button").attr("href").split("qty=")[1].split("&")[0],a={id:skuJson.skus[0].sku,quantity:t,seller:skuJson.skus[0].sellerId};vtexjs.checkout.addToCart([a],null,1).done((function(){$(".buy-button").removeClass("loading"),$(".mini-cart").addClass("minicart-open"),$(".overlay").attr("style"," ")}))})),$(document).ready((function(){isMobile()&&($(".compartilhar").insertAfter(".calcular-frete"),$(".product-top .product-inf .product-name").insertBefore(".product-image .apresentacao").fadeIn())})),$(document).ready((function(){setTimeout((function(){}),500);var e=0,t=setInterval((function(){vtexjs&&vtexjs.checkout&&vtexjs.checkout.orderForm&&(clearInterval(t),i()),++e>20&&clearInterval(t)}),250)})),window.addEventListener("load",(function(){$(".mz-buybox").show()})),$(document).on("click","#add-area",(function(){$(".bf-calc-tb__body").append('<div class="bf-calc-tb__row bf-calc"><div class="bf-calc-tb__td"><strong>Área</strong></div><div class="bf-calc-tb__td bf-calc-tb__td--large"><input type="text" class="largura"></div><div class="bf-calc-tb__td bf-calc-tb__td--large"><input type="text" class="comprimento"></div><div class="bf-calc-tb__td"><button id="remove-area">Limpar</button></div></div>')})),$(document).on("click","#remove-area",(function(){$(".bf-calc-tb__body .bf-calc-tb__row").length>1?$(this).closest(".bf-calc-tb__row").remove():1==$(".bf-calc-tb__body .bf-calc-tb__row").length&&($(".largura, .comprimento").val(""),$(".bf-calculator__totalizer span").text("0.00 m²").attr("value","1 m²")),s()})),$(document).on("click","#update-qty",(function(){if($(".bf-calc-tb__td input").hasClass("error"))alert("Preencha os campos em branco!");else{let e=$(".bf-calculator__totalizer span").attr("value");$(".areaCalculator").removeClass("visible"),$(".bf-product__buyQtdInput").val(e+" m²"),n(),isMobile()&&$("html, body").animate({scrollTop:$(".btn-calc-m2").offset().top-100})}})),$(document).on("click",".btn-calc-m2",(function(){$(".areaCalculator").addClass("visible")})),$(document).on("click",".bf-calculator__close",(function(){$(".areaCalculator").removeClass("visible"),isMobile()&&$("html, body").animate({scrollTop:$(".btn-calc-m2").offset().top-100})})),$(document).on("change",".bf-product__buyQtdInput",(function(){$(this).val($(this).val()+" m²"),""==$(this).val()&&$(this).val(1)}));var r=1;function s(){var e=0,t=!0;$(".bf-calc-tb__body .bf-calc-tb__row").each((function(){t=!0;let a=$(this).find(".largura").val(),o=$(this).find(".comprimento").val();$(this).find(".largura").removeClass("error"),$(this).find(".comprimento").removeClass("error"),""==a&&""==o&&console.log("preencha os campos"),""==a&&(a=0,t=!1,$(this).find(".largura").addClass("error")),""==o&&(o=0,t=!1,$(this).find(".comprimento").addClass("error")),e+=a*o})),t&&$(".bf-calculator__totalizer span").text(e.toFixed(2)+" m²").attr("value",e.toFixed(2))}function n(){let e=1,t=skuJson.skus[0].unitMultiplier,a=parseFloat($(".bf-product__buyQtdInput").val().replace("m²","").trim());$(".bf-product__buyQtdInput").attr("data-source",a);if($("#adicionarQuebra-10").is(":checked")&&$("#adicionarQuebra-15").is(":checked")?e=.25:$("#adicionarQuebra-10").is(":checked")?e=.1:$("#adicionarQuebra-15").is(":checked")&&(e=.15),1!=e){a+=a*e}let o=a/t,i=a%t;o=parseFloat(o),o>1?(0!=i&&(o+=1),o=parseInt(o),window.valueFinal=o,$(".bf-calc-area-qtdBox").text(o+" caixas")):(o=1,window.valueFinal=o,$(".bf-calc-area-qtdBox").text(o+" caixa"));let r=`/checkout/cart/add?sku=${vtxctx.skus}`;r+="&qty="+o,r+=`&seller=${skuJson.skus[0].sellerId}&redirect=true&sc=${skuJson.salesChannel}`,$(".bf-product__buy .buy-button").attr("href",r),$(".bf-calc-area-qtdSelected").text($(".bf-product__buyQtdInput").val()),.1==e?$(".bf-calc-area-qtdSelected").html($(".bf-calc-area-qtdSelected").text()+" <small>mais</small> 10%"):.15==e?$(".bf-calc-area-qtdSelected").html($(".bf-calc-area-qtdSelected").text()+" <small>mais</small> 15%"):.25==e&&$(".bf-calc-area-qtdSelected").html($(".bf-calc-area-qtdSelected").text()+" <small>mais</small> 25%")}$(document).on("blur",".bf-product__buyQtdInput",(function(){isMobile()||$(".bf-product__buyQtdRefresh").fadeOut(),""==$(this).val()&&$(this).val(r),n()})),$(document).on("focus",".bf-product__buyQtdInput",(function(){r=$(this).val(),$(this).val(""),isMobile()||$(".bf-product__buyQtdRefresh").fadeIn()})),$(document).on("keydown",".bf-calc-tb__td--large input, .bf-product__buyQtdInput",(function(e){if(-1===$.inArray(e.keyCode,[9,96,97,98,99,100,101,102,103,104,105,48,49,50,51,52,53,54,55,56,57,8,37,39,109,189,46,110,190])&&17!=e.keyCode&&86!=e.keyCode)e.preventDefault();else{if(!($.trim($(this).val()).indexOf(".")>-1&&-1!=$.inArray(e.keyCode,[110,190])))return!0;e.preventDefault()}})),$(document).on("paste",".bf-calc-tb__td--large input, .bf-product__buyQtdInput",(function(e){var t=e.originalEvent.clipboardData.getData("Text").replace(/[^0-9.]/g,"");$.isNumeric(t)?(e.originalEvent.target.value=t,e.preventDefault()):(e.originalEvent.target.value="",e.preventDefault())})),$(document).on("keyup",".bf-calc-tb__td--large input",(function(){s()})),$(document).on("blur",".bf-calc-tb__td--large input",(function(){s()})),$(document).on("focus",".bf-calc-tb__td--large input",(function(){$(this).removeClass("error")})),$(document).on("change","#adicionarQuebra-10",(function(){n()})),$(document).on("change","#adicionarQuebra-15",(function(){n()})),$(document).ready((function(){var e="";$.ajax({url:`/api/catalog_system/pub/products/search?fq=productId:${skuJson.productId}`,type:"GET",async:!1,success:function(t){t=t[0],e=t.items[0].measurementUnit}}),"m²"!=e?($(".productBuy-square").remove(),$(".productBuy-default").show()):skuJson.skus[0].available?($(".productBuy-default").remove(),$(".productBuy-default").show(),$(".productBuy-square").show(),$(".bf-calc-area-qtdInBox").text(" "+skuJson.skus[0].unitMultiplier+" m²"),$("#comprar-flutuante .qtd-comprar").hide(),$("#comprar-flutuante .buy-button").attr("href","#bf-area-calculator"),$(".bf-product__buyQtd").append("<div class='bf-product__buyQtdRefresh'>Atualizar</div>")):$(".productBuy-default").show()})),$(document).ready((function(){returnBrandSeal(skuJson.productId,".product-image .apresentacao #include .product-seals-top-right-container")})),$(document).ready((function(){$(".product-top .economia-de .economia").length>0&&function(){var e=realParaNumber($(".skuListPrice").text()),t=realParaNumber($(".product-top .economia-de .economia").text());if(console.log(e,t),!isNaN(t)||null!=t){var a=`<div class='best-price-cash-discount'><span>-${t=(t/e*100).toFixed(0)}%</span><small>OFF</small></div>`;$(".product-image .apresentacao #include .product-seals-top-right-container").append(a)}}()}))}();