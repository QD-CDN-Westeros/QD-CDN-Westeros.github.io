/* DESKTOP-EODD9M4 - 15/04/2020 13:56:17 GMT */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});try{var Common={run:function(){},init:function(){Common.checkLogin();Common.watchQuantityButtons()},ready:function(){},ajaxStop:function(){Common.watchQuantityAndCart();Common.removeProductAddCart()},windowOnload:function(){Common.watchProductsCart();Common.setProductAdded()},vtexBindQuickViewDestroy:function(){},checkLogin:function(){$.ajax({type:"GET",url:"/no-cache/profileSystem/getProfile",dataType:"json",clearQueueDelay:null,success:function(data){try{if(data.IsUserDefined){var emailReceived=data.Email;var nameUser=emailReceived.match(/([^{0-9}|.|@|-]+)/).pop();console.log("Usuario Logado!");$(".user-mobile-data a[href] span, .user-data-toggle strong, .user-data-header .user-name span").text(nameUser);$(".user-info a[href] strong").text(nameUser);$(".user-info a").attr("href","javascript:;");$(".user-info a").addClass("user-data-toggle");$(".user-info a").click(function(){$("body").toggleClass("overflow-hidden");$("#user-data").toggleClass("user-data-opened")})}else{console.log("Nenhum usario logado.")}}catch(e){if(typeof console!=="undefined"&&typeof console.info==="function")console.info("Ops, algo saiu errado com o login.",e.message)}}})},watchProductsCart:function(){var listItemsMiniCart=vtexjs.checkout.orderForm.items;listItemsMiniCart.forEach(function(item){var pdId=item.productId;if($('.product-qty[data-product-id="'+pdId+'"]').closest(".item-shelf").find("flag-adicionado").length>0){return}$('.product-qty[data-product-id="'+pdId+'"]').closest(".item-shelf").children(".product-image, .promo-flags, .product-name, .price").addClass("active-opacity");$('.product-qty[data-product-id="'+pdId+'"]').closest(".item-shelf").append('<span class="flag-adicionado">Adicionado</span>')})},setProductAdded:function(){$(".buy-button-normal > a").click(function(){var $t=$(this);if($t.closest(".item-shelf").find("flag-adicionado").length>0){return}$t.closest(".item-shelf").children(".product-image, .promo-flags, .product-name, .price").addClass("active-opacity");$t.closest(".item-shelf").append('<span class="flag-adicionado">Adicionado</span>')})},removeProductAddCart:function(){$(".products-list").on("click",".product-remove",function(){var $t=$(this);var thisId=$t.attr("id");var searchShelf=$('li[layout] .buy-button-normal[id="'+$t.attr("id")+'"]');if(thisId==searchShelf.attr("id")){searchShelf.closest(".item-shelf").find(".flag-adicionado").remove();searchShelf.closest(".item-shelf").children().removeClass("active-opacity")}})},watchQuantityAndCart:function(){$("li[layout]").each(function(){var $t=$(this);var thisInputQtt=$t.find(".shelf-input-qty-control");if(thisInputQtt.val()==0){$t.find(".product-image, .promo-flags, .product-name, .price").removeClass("active-opacity");$t.find(".flag-adicionado").remove()}})},watchQuanttityShelf:function(){$(window).on("orderFormUpdated.vtex",function(){var listItems=vtexjs.checkout.orderForm.items})},watchQuantityButtons:function(){$(".buy-button-normal a").click(function(){setTimeout(function(){$(".product-qty .shelf-less-qty, .shelf-input-qty, .product-qty .shelf-more-qty").css("pointer-events","none");$(".product-qty .shelf-less-qty, .shelf-input-qty, .product-qty .shelf-more-qty").css("opacity","0.7")},100);setTimeout(function(){$(".product-qty .shelf-less-qty, .shelf-input-qty, .product-qty .shelf-more-qty").css("pointer-events","auto");$(".product-qty .shelf-less-qty, .shelf-input-qty, .product-qty .shelf-more-qty").css("opacity","1")},3e3)})}};var Home={init:function(){Home.sendEmailMasterData()},ajaxStop:function(){},windowOnload:function(){},sendEmailMasterData:function(){if($("body").find(".btn-send-newsletter").length>0){$("#terms")[0].checked=true}$(".btn-send-newsletter").click(function(e){e.preventDefault();var email=$(".form-newsletter").find("input[type=email]").val();var terms=$("#terms");if(validateEmail(email)&&terms[0].checked){var dataJson={email:email,isNewsletterOptIn:true};$.ajax({type:"PATCH",method:"PATCH",url:"/api/dataentities/CL/documents",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify(dataJson)}).success(function(data){toastr.success("você foi cadastrado com sucesso!")}).fail(function(data){toastr.error("ocorreu um erro, verifique se o e-mail esta correto ou tente novamente mais tarde.")});$(".form-newsletter").find("input[type=email]").val("")}else if(email==""){toastr.error("Por favor preencha o campo de email.")}else if(!validateEmail(email)&&email!=""){toastr.warning("Email no formato incorreto.")}else if(!terms[0].checked){toastr.warning("É necessário aceitar as políticas de privacidade antes de prosseguir.")}});function validateEmail(email){var regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return regex.test(email)}}};var Search={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Product={run:function(){},init:function(){Product.setAvailableBodyClass()},ajaxStop:function(){},windowOnload:function(){},setAvailableBodyClass:function(){function checkVisibleNotify(available){if(available)$(document.body).addClass("qd-product-available").removeClass("qd-product-unavailable");else $(document.body).addClass("qd-product-unavailable").removeClass("qd-product-available")}$(document).on("skuSelected.vtex",function(e,id,sku){checkVisibleNotify(sku.available)});checkVisibleNotify(skuJson.available)}};var List={run:function(){},init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Institutional={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Orders={init:function(){Orders.bootstrapCssFix()},ajaxStop:function(){},windowOnload:function(){},bootstrapCssFix:function(){var styleSheets=document.styleSheets;for(var i=0;i<styleSheets.length;i++){if((styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css")>-1||(styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css")>-1){styleSheets[i].disabled=true}}}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".produto"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".produto"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".produto"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}