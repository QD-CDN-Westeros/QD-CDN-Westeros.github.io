/* Note-Koity - 26/01/2021 15:54:50 GMT */
$(function(){"use strict";var $cache={productInfo:null},methods={splitPriceProduct:function(){var $priceProduct=$.trim($(".x-price .plugin-preco .valor-por strong").text()),$splitPrice=$priceProduct.split("R$ ")[1];$(".x-price .plugin-preco .valor-por strong").html("<small>R$ </small>"+$splitPrice)},nameProductToLowerCase:function(){var str=$(".x-product-name--description > h1 > div").text();str=str.toLowerCase().replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()});var match=str.split(/\s+/),contemTextoA=str.indexOf("a")>-1,contemTextoAs=str.indexOf("as")>-1,contemTextoO=str.indexOf("o")>-1,contemTextoOs=str.indexOf("os")>-1,contemTextoEm=str.indexOf("em")>-1,contemTextoDe=str.indexOf("de")>-1,contemTextoUm=str.indexOf("um")>-1,contemTextoUns=str.indexOf("uns")>-1,contemTextoUmas=str.indexOf("umas")>-1,contemTextoE=str.indexOf("e")>-1,contemTextoPP=str.indexOf("pp")>-1,contemTextoPPP=str.indexOf("ppp")>-1,contemTextoGG=str.indexOf("gg")>-1,contemTextoGGG=str.indexOf("ggg")>-1;if(contemTextoA||contemTextoAs||contemTextoO||contemTextoOs||contemTextoEm||contemTextoDe||contemTextoUm||contemTextoUns||contemTextoUmas||contemTextoE||contemTextoPP||contemTextoPPP||contemTextoGG||contemTextoGGG){for(var texto="",i=0;i<match.length;i++)"A"==match[i]||"As"==match[i]||"O"==match[i]||"Os"==match[i]||"Em"==match[i]||"De"==match[i]||"Um"==match[i]||"Uns"==match[i]||"Umas"==match[i]||"E"==match[i]?texto+=match[i].toLowerCase()+" ":"Pp"==match[i]||"Ppp"==match[i]||"Gg"==match[i]||"Ggg"==match[i]?texto+=match[i].toUpperCase()+" ":texto+=match[i]+" ";str=texto}$(".x-product-name--description > h1 > div").text(str),$(".x-product").each(function(){var str_2=$(this).find("h2 > a").text();str_2=str_2.toLowerCase().replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()});var match_2=str_2.split(/\s+/),contemTextoA=str_2.indexOf("a")>-1,contemTextoAs=str_2.indexOf("as")>-1,contemTextoO=str_2.indexOf("o")>-1,contemTextoOs=str_2.indexOf("os")>-1,contemTextoEm=str_2.indexOf("em")>-1,contemTextoDe=str_2.indexOf("de")>-1,contemTextoUm=str_2.indexOf("um")>-1,contemTextoUns=str_2.indexOf("uns")>-1,contemTextoUmas=str_2.indexOf("umas")>-1,contemTextoE=str_2.indexOf("e")>-1,contemTextoPP=str_2.indexOf("pp")>-1,contemTextoPPP=str_2.indexOf("ppp")>-1,contemTextoGG=str_2.indexOf("gg")>-1,contemTextoGGG=str_2.indexOf("ggg")>-1;if(contemTextoA||contemTextoAs||contemTextoO||contemTextoOs||contemTextoEm||contemTextoDe||contemTextoUm||contemTextoUns||contemTextoUmas||contemTextoE||contemTextoPP||contemTextoPPP||contemTextoGG||contemTextoGGG){for(var texto="",i=0;i<match_2.length;i++)"A"==match_2[i]||"As"==match_2[i]||"O"==match_2[i]||"Os"==match_2[i]||"Em"==match_2[i]||"De"==match_2[i]||"Um"==match_2[i]||"Uns"==match_2[i]||"Umas"==match_2[i]||"E"==match_2[i]?texto+=match_2[i].toLowerCase()+" ":"Pp"==match_2[i]||"Ppp"==match_2[i]||"Gg"==match_2[i]||"Ggg"==match_2[i]?texto+=match_2[i].toUpperCase()+" ":texto+=match_2[i]+" ";str_2=texto}$(this).find("h2 > a").text(str_2)})},nameDepartament:function(){$(".x-product-departament").text(vtxctx.departmentName)},semJuros_boleto:function(){$(".valor-dividido > span:first-child > span:first-child").attr("id","x-ou-txt"),setTimeout(function(){$(".price-installments").css("font-size","13px"),$(".skuBestInstallmentNumber").css("margin-left","2%"),$(".x-fixed-infos .descricao-preco").css("width","195px"),$(".price-installments span, strong label").css("font-weight","800"),$(".price-installments strong").append("<label>  sem juros <br/></label>")},10)},addVideo:function(){$.ajax({type:"GET",url:"/api/catalog_system/pub/products/search/?fq=productId:"+skuJson.productId,success:function(data){var productVideo=!!data[0].url_video&&data[0].url_video[0];productVideo?$(document).trigger("getVideoInfos",[data[0].url_video[0]]):$(document).trigger("getVideoInfos",productVideo)}}),$(document).on("getVideoInfos",function(event,videoID){0!=videoID&&$(".apresentacao .thumbs ").append('<li aria-hidden="true" role="presentation" class="x-ajust-video-product"><img class="x-img-play x-thumb-product" src="https://www.gobiond.com/wp-content/uploads/2018/05/http___pluspng.com_img-png_play-button-png-filename-play-button-png-237.png" alt="Play YouTube""><img class="x-thumb-product-play" src="http://i.ytimg.com/vi/'+videoID+'/sddefault.jpg" title="Banner Video" alt=""></li>')})},productThumbsSlide:function(){function applyZoom(){$(".thumbs .slick-current a").jqzoom()}function applyZoomImages(){$(".thumbs li a img").each(function(){var urlImg=$(this).attr("src");$(this).parents("a").attr("href",urlImg)})}function slider(){$(".x-top .slick-dots").remove();var slide=$(".thumbs").slick({dots:!0,infinite:!1,fade:!0,appendDots:$(".thumbs, .js--append-dots")});$(".js--append-dots li").eq().addClass("slick-active"),slide.on("afterChange",function(event,slick,currentSlide,nextSlide){$(".js--append-dots li").eq(currentSlide).addClass("slick-active"),applyZoom()})}function imgDots(){$(".thumbs .slick-track li.slick-slide").each(function(index){var img=$(this).find("img").clone();$(".thumbs .slick-dots button").eq(index).append(img)})}$(document).on("skuDimensionChanged.vtex",function(){$(".thumbs").removeClass("slick-initialized slick-slider slick-dotted"),setTimeout(function(){slider(),imgDots()},1e3)}),$(document).on("getVideoInfos",function(){slider(),imgDots(),applyZoomImages(),applyZoom()})},sliderShelfs:function(){var $shelfs=$(".x-slider-product_vitrine .prateleira");$shelfs.find("> ul").slick({infinite:!0,slidesToShow:3,centerPadding:"0px",adaptiveHeight:!0}),$shelfs.length>1&&$shelfs.eq(1).hide()},addDiscountPercent:function(){if($(".x-price .skuListPrice").length>0){var price=(parseInt(vtxctx.categoryId),parseFloat($(".x-price .skuListPrice").text().replace("R$ ","").replace(".","").replace(",","."))),bestPrice=parseFloat($(".x-price .skuBestPrice").text().replace("R$ ","").replace(".","").replace(",",".")),discount=price-bestPrice,discountPercent=Math.floor(100*discount/price);if(29==discountPercent&&(discountPercent+=1),discountPercent>0)if(9==discountPercent){var discountPercentnine=Math.ceil(100*discount/price);$(".x-product-name--description").prepend('<div style="top: 60px; left: 0; position: absolute; font-size: 15px; font-family: \'Oswald\', sans-serif; font-weight: 800; color: #ed1e27; border: 1px solid #ed1e27; padding: 3px;" class="flag-desconto"><span>-'+discountPercentnine+"%</span></div>")}else $(".x-product-name--description").prepend('<div style="top: 60px; left: 0; position: absolute; font-size: 15px; font-family: \'Oswald\', sans-serif; font-weight: 800; color: #ed1e27; border: 1px solid #ed1e27; padding: 3px;" class="flag-desconto"><span>-'+discountPercent+"%</span></div>")}},incrementDecrementValue:function(){$(".x-value .x-minus").click(function(){$('.x-value input[type="text"]').val(Math.max(1,$('.x-value input[type="text"]').val()-1)).change()}),$(".x-value .x-plus").click(function(){$('.x-value input[type="text"]').val(1*$('.x-value input[type="text"]').val()+1).change()})},setbuyButtonText:function(){skuJson.skus.length>1?$(document).on("skuSelected.vtex",function(event,productId,infos){$(".buy-button").text("comprar").removeClass("is--active"),$cache.skuToBuy=[{id:infos.sku,quantity:+$(".x-buy-product .x-value input").val(),seller:1}]}):$cache.skuToBuy=[{id:skuJson.skus[0].sku,quantity:+$(".x-buy-product .x-value input").val(),seller:1}],$(document).on("skuUnselected.vtex",function(event,productId,infos){$(".buy-button").text("Por favor, selecione a cor e tamanho").addClass("is--active"),$cache.skuToBuy=null}),$(".x-qtd input").on("change",function(){$cache.skuToBuy&&($cache.skuToBuy[0].quantity=$(this).val())})},buyAsync:function(){$(".x-buy-product").on("click",".buy-button",function(){if($cache.skuToBuy){var $this=$(this);$(this).text("aguarde...");var cookieIPS="";cookieIPS=Cookies.get("IPS");cookieIPS&&(cookieIPS.split("Campanha=")[1].split("&")[0],cookieIPS.split("Midia=")[1].split("&")[0],cookieIPS.split("Parceiro=")[1].split("&")[0]);enext_utils.addToCart($cache.skuToBuy,{success:function(){$("a.buy-button.buy-button-ref").text("Produto adicionado")},error:function(){$this.text("Erro, tente novamente")}})}else $(".buy-button").text("Por favor, selecione a cor e tamanho").addClass("is--active")})},buildZoom:function(){var $li=$(".thumbs .slick-track li"),$ul=$("<ul>");$li.each(function(){$ul.append($(this).clone().attr("style",""))});var $div=$('<div class="x-zoom__slide js--zoom">');$div.append($('<button class="x-zoom__back js--close-zoom">').append($("<span>").text("voltar"))),$("body").append($div.append($ul)),$(".x-zoom__slide ul").slick({infinite:!1}),setTimeout(function(){$(".js--zoom").attr("style",$(".x-image--name-description-etc .x-image-product").attr("style"))},300)},setInteractiveZoom:function(){$(".js--zoomit").on("click",function(){$("body").addClass("x-no-scroll"),$(".js--zoom").addClass("is--active")}),$("body").on("click",".js--close-zoom",function(){$(".js--zoom").removeClass("is--active"),$("body").removeClass("x-no-scroll")})},unavaiable:function(){$(".x-buy-product .buy-button").after(function(){var $div=$("<div>").addClass("x-product__unavaiable-bar js--unavaiable-bar");return $div.append($("<span>").addClass("x-product__unavaiable-label").text("Produto Esgotado")),$div.append($("<button>").addClass("x-product__unavaiable-btn").text("Avise-me quando estiver disponível")),$div}),$(document).on("skuSelected.vtex",function(event,productId,infos){infos.available?$(".js--unavaiable-bar, .x-buy-product .x-qtd").removeClass("is--active"):$(".js--unavaiable-bar, .x-buy-product .x-qtd").addClass("is--active")})},activeColorVariation:function(){var id=skuJson.productId;$(".x-variations_color .x-shelf__id").each(function(){var currentId=$(this).val();id==currentId&&$(this).closest("li").addClass("is--active")})},popupMedidas:function(){function _selectedOption(){$(".x-medidas-categorias").children().on("click",function(){$(this).addClass("active"),$(this).siblings().removeClass("active"),$(this).parent().siblings(".x-medidas-img").hide(),$(this).parent().siblings(".x-medida-"+$(this).attr("id")).show()})}function _sliderGuideSize(){$(".x-medidas-img ul").slick({infinite:!0,centerMode:!1,slidesToShow:1,centerPadding:"0px",focusOnSelect:!1,adaptiveHeight:!0,touchMove:!0,cssEase:"linear",dots:!0,arrows:!0}),$(".x-medidas-img").hide(),$(".x-medida-jaquetas").show()}var isFirstClick=!0;$("body").on("click",".x-sizeguide__table .x-sideguide__img",function(event){$(".x-medidas-popup").show(),isFirstClick&&(_selectedOption(),_sliderGuideSize(),isFirstClick=!1)}),$(".x-guia-de-medidas-bg .x-close, .x-medidas-overlay").on("click",function(){$(".x-medidas-popup").hide()})},fixedBuyBlock:function(){var src=($(".thumbs li:first-child img"),$(".thumbs li:first-child img").attr("src")),blocofixed=$(".x-top .x-fixed-infos");blocofixed.prepend('<div class="x-fixed-imagem"><img src="'+src+'"/></div>'),$(window).on("scroll",function(){$(window).scrollTop()>=600?blocofixed.show():blocofixed.hide()})},popupGuiaMedidas:function(){function slickIt(el){el.find(".x-bloco-img ul").slick({dots:!0,arrows:!0})}function slickItInfantil(el){el.find(".x-bloco-infatil").slick({dots:!0,arrows:!0,infinite:!1})}function slickItSapatosInfantil(el){el.find(".x-tabela-tamanho-infantil").slick({dots:!0,arrows:!0,infinite:!1,slidesToShow:2})}function slickItLuvas(el){$('[data-bloco="luva"]').find(".x-bloco-tabela .slick-track").children().last().remove(),el.find(".x-bloco-tabela").slick({dots:!0,arrows:!0,infinite:!0})}var categoryId=parseInt(vtxctx.categoryId),categoryName=vtxctx.categoryName,jaquetaInfantil=[56,65,64,73,58,67,62,71,63,72,124,128,129],calcaInfantil=[64,73,63,72,57,66,126,130];$(".x-guia-medida-txt").on("click",function(){$(".x-guia-medida-popup").fadeIn(),$(".x-guia-medida-popup .x-bloco-overlay").css("visibility","initial"),$(".x-bloco").css("visibility","initial"),$(".slick-dots li button").click()}),$(".x-bloco-close").on("click",function(){$(".x-guia-medida-popup").fadeOut()}),function(){14==categoryId||15==categoryId||24==categoryId||114==categoryId||108==categoryId||115==categoryId||118==categoryId||116==categoryId||117==categoryId||23==categoryId?($('[data-bloco="jaqueta"]').removeClass("hidden"),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="masculino"]').addClass("active"),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="feminino"]').hide(),$(".x-bloco-infatil").hide(),slickIt($('[data-bloco="jaqueta"]'))):32==categoryId||45==categoryId||109==categoryId||110==categoryId||113==categoryId||112==categoryId||111==categoryId||44==categoryId||133==categoryId?($('[data-bloco="jaqueta"]').removeClass("hidden"),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="feminino"]').addClass("active"),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="masculino"]').hide(),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="infantil"]').hide(),$(".x-bloco-infatil").hide(),slickIt($('[data-bloco="jaqueta"]'))):$.inArray(categoryId,jaquetaInfantil)>-1?($('[data-bloco="jaqueta"]').removeClass("hidden"),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="masculino"]').hide(),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="feminino"]').hide(),$('[data-bloco="jaqueta"]').find('[data-bloco-sexo="infantil"]').addClass("active"),slickIt($('[data-bloco="jaqueta"]')),slickItInfantil($('[data-bloco="jaqueta"]'))):16==categoryId||27==categoryId||29==categoryId||28==categoryId?($('[data-bloco="calca"]').removeClass("hidden"),$('[data-bloco="calca"]').find('[data-bloco-sexo="masculino"]').addClass("active"),$('[data-bloco="calca"]').find('[data-bloco-sexo="feminino"]').hide(),$(".x-bloco-infatil").hide(),slickIt($('[data-bloco="calca"]'))):35==categoryId||49==categoryId||51==categoryId||50==categoryId?($('[data-bloco="calca"]').removeClass("hidden"),$('[data-bloco="calca"]').find('[data-bloco-sexo="feminino"]').addClass("active"),$('[data-bloco="calca"]').find('[data-bloco-sexo="masculino"]').hide(),$(".x-bloco-infatil").hide(),slickIt($('[data-bloco="calca"]'))):$.inArray(categoryId,calcaInfantil)>-1?($('[data-bloco="calca"]').removeClass("hidden"),$('[data-bloco="calca"]').find('[data-bloco-sexo="infantil"]').addClass("active"),$('[data-bloco="calca"]').find('[data-bloco-sexo="feminino"]').hide(),$('[data-bloco="calca"]').find('[data-bloco-sexo="masculino"]').hide(),slickIt($('[data-bloco="calca"]')),slickItInfantil($('[data-bloco="calca"]'))):"Luvas"==categoryName||158==categoryId||157==categoryId||86==categoryId||120==categoryId?(slickIt($('[data-bloco="luva"]')),158==categoryId?($('[data-bloco="luva"]').removeClass("hidden"),$('[data-bloco="luva"]').find('[data-bloco-sexo="masculino"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="feminino"]').removeClass("hidden"),$('[data-bloco="luva"]').find('[data-bloco-sexo="infantil"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="unissex"]').hide()):157==categoryId?($('[data-bloco="luva"]').removeClass("hidden"),$('[data-bloco="luva"]').find('[data-bloco-sexo="masculino"]').removeClass("hidden"),$('[data-bloco="luva"]').find('[data-bloco-sexo="feminino"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="infantil"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="unissex"]').hide()):86==categoryId?($('[data-bloco="luva"]').removeClass("hidden"),$('[data-bloco="luva"]').find('[data-bloco-sexo="masculino"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="feminino"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="infantil"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="unissex"]').removeClass("hidden")):120==categoryId&&($('[data-bloco="luva"]').removeClass("hidden"),$('[data-bloco="luva"]').find('[data-bloco-sexo="masculino"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="feminino"]').hide(),$('[data-bloco="luva"]').find('[data-bloco-sexo="infantil"]').removeClass("hidden"),$('[data-bloco="luva"]').find('[data-bloco-sexo="unissex"]').hide())):11==categoryId||12==categoryId||13==categoryId||22==categoryId?($('[data-bloco="calcado"]').removeClass("hidden"),$('[data-bloco="calcado"]').find('[data-bloco-sexo="masculino"]').addClass("active"),$('[data-bloco="calcado"]').find('[data-bloco-sexo="feminino"]').hide(),$('[data-bloco="calcado"]').find('[data-bloco-sexo="infantil"]').hide()):33==categoryId||41==categoryId||42==categoryId||43==categoryId?($('[data-bloco="calcado"]').removeClass("hidden"),$('[data-bloco="calcado"]').find('[data-bloco-sexo="feminino"]').addClass("active"),$('[data-bloco="calcado"]').find('[data-bloco-sexo="masculino"]').hide(),$('[data-bloco="calcado"]').find('[data-bloco-sexo="infantil"]').hide()):61==categoryId||70==categoryId?($('[data-bloco="calcado"]').removeClass("hidden"),$('[data-bloco="calcado"]').find('[data-bloco-sexo="infantil"]').addClass("active"),$('[data-bloco="calcado"]').find('[data-bloco-sexo="masculino"]').hide(),$('[data-bloco="calcado"]').find('[data-bloco-sexo="feminino"]').hide(),slickItSapatosInfantil($('[data-bloco="calcado"]'))):107==categoryId||134==categoryId?($('[data-bloco="chapeu"]').removeClass("hidden"),$('[data-bloco="chapeu"]').find('[data-bloco-sexo="unissex"]').addClass("active"),$('[data-bloco="chapeu"]').find('[data-bloco-sexo="infantil"]').addClass("active"),slickIt($('[data-bloco="chapeu"]')),slickItLuvas($('[data-bloco="chapeu"]'))):87==categoryId||119==categoryId?($('[data-bloco="gorros"]').removeClass("hidden"),$('[data-bloco="gorros"]').find('[data-bloco-sexo="unissex"]').addClass("active"),$('[data-bloco="gorros"]').find('[data-bloco-sexo="infantil"]').addClass("active"),slickIt($('[data-bloco="gorros"]')),slickItLuvas($('[data-bloco="gorros"]'))):88==categoryId?($('[data-bloco="bones"]').removeClass("hidden"),$('[data-bloco="bones"]').find('[data-bloco-sexo="unissex"]').addClass("active"),$('[data-bloco="bones"]').find('[data-bloco-sexo="infantil"]').addClass("active"),slickIt($('[data-bloco="bones"]')),slickItLuvas($('[data-bloco="bones"]'))):95==categoryId?($('[data-bloco="meia"]').removeClass("hidden"),$('[data-bloco="meia"]').find('[data-bloco-sexo="masculino"]').addClass("active"),$('[data-bloco="meia"]').find('[data-bloco-sexo="feminino"]').addClass("active"),$('[data-bloco="meia"]').find('[data-bloco-sexo="infantil"]').addClass("active"),slickItLuvas($('[data-bloco="meia"]'))):107==categoryId&&($('[data-bloco="chapeu"]').removeClass("hidden"),$('[data-bloco="chapeu"]').find('[data-bloco-sexo="unissex"]').addClass("active"),$('[data-bloco="chapeu"]').find('[data-bloco-sexo="infantil"]').addClass("active"),slickIt($('[data-bloco="chapeu"]')),slickItLuvas($('[data-bloco="chapeu"]')))}()},youTubePopup:function(){$(".x-youtube-popup__close").click(function(){$(".x-youtube-popup").fadeOut(),$(".x-youtube-popup iframe").remove(),setTimeout(function(){0==$(".x-youtube-popup .x-youtube-popup__box .youtube").length&&$(".x-youtube-popup .x-youtube-popup__box").append('<div class="youtube" id="gYG2x0J8wYY" style="width:500px;height:281px;"></div>')},200)})},cacheAllProductInfo:function(){var prod_id=skuJson.productId;$.ajax("/api/catalog_system/pub/products/search/?fq=productId:"+prod_id).fail(function(data){consol.warn("Falha ao acessar a API de produto")}).success(function(data){data&&Array.isArray(data)&&(data[0]&&($cache.productInfo=data[0]),ajaxDependencies.init())})},changeImageName:function(){document.querySelectorAll("#botaoZoom img").forEach(function(el){$(el).attr("title",skuJson.name),$(el).attr("alt",skuJson.name)})}},ajaxDependencies={init:function(){for(var i in this.features)this.features.hasOwnProperty(i)&&this.features[i].call(this.features)},features:{setBackgroundImg:function(){if($cache.productInfo){var imgName=$cache.productInfo["Foto fundo do produto"];Array.isArray(imgName)&&(imgName=imgName[0])&&(imgName=imgName.replace(/\s/gim,"-"),imgName="url(/arquivos/"+imgName+".jpg)",$(".x-image--name-description-etc .x-image-product").css({"background-image":imgName}))}},setTechIcons:function(){if($cache.productInfo){var allIcons=$cache.productInfo["Características"];if(allIcons&&Array.isArray(allIcons)){var $list=$("<ul>");if(-1!==allIcons.indexOf("Nenhum"))return;allIcons.forEach(function(icon){var $li=$("<li>"),iconName=enext_utils.removeSpecialChars(icon.trim().replace(/\s/gim,"-").toLowerCase());$li.append(function(){return $("<button>").addClass("icon-"+iconName).append($("<span>").text(icon))}),$list.append($li)}),$(".js--spec-icons").append($list)}}},setTechInfos:function(){if($cache.productInfo){var $photo,$container=$(".js--specview-description"),techInfo=$cache.productInfo.Tecnologias,photo=$cache.productInfo["Foto Detalhe do produto"],brand=$cache.productInfo.brand,techInfoContent="",photoContent=null;if(Array.isArray(techInfo)&&techInfo.forEach(function(content){techInfoContent+=enext_utils.replaceBreakLines(content)}),Array.isArray(photo)&&photo.forEach(function(content){photoContent="url(/arquivos/"+content+")"}),techInfo){var wrapper="<ul>";techInfo.forEach(function(element){wrapper+="<li>"+element+"</li>"}),$container.append(wrapper)}$(".x-details .x-tech-details__title").text("Características"),photoContent&&($photo=$("<div>").addClass("x-description__img"),$photo.append($("<div>").css({"background-image":photoContent}))),brand&&$container.append($("<p>").addClass("x-description__brand").text(brand)),$photo?$container.append(function(){return $("<div>").addClass("x-description__info").append(void 0).append(void 0)}).append($photo):$container.append(void 0).append(void 0),techInfoContent||$container.hide()}},setGuideSizeSection:function(){if($cache.productInfo){var $container=$(".js--specview-sizes"),photo=$cache.productInfo["Foto Melhor Utilização"],betterUtil=$cache.productInfo["Melhor Utilização"],$photo=null,$betterUtil=null,betterUtilContent="";Array.isArray(photo)&&photo.forEach(function(content){var name=content.replace(/\s/gim,"-");$photo=$("<div>").addClass("x-sizeguide__img"),$photo.append($("<div>").css({"background-image":"url(/arquivos/"+name+".jpg)"}))}),Array.isArray(betterUtil)&&betterUtil.forEach(function(content){betterUtilContent+=enext_utils.replaceBreakLines(content)}),betterUtilContent.trim()&&($betterUtil=$("<div>").addClass("x-sizeguide__better-util"),$betterUtil.append($("<h2>").addClass("x-sizeguide__title").text("Melhor ").append($("<span>").text("utilização"))).append($("<div>").addClass("x-sizeguide__text").append(betterUtilContent))),$photo&&$container.append($photo),$betterUtil&&$container.append($betterUtil)}},setTechData:function(){if($cache.productInfo){var $container=$(".js--specview-techdata"),techData=$cache.productInfo["Dados Técnicos"],techDataContent="",$techData=null;Array.isArray(techData)&&techData.forEach(function(content){var lineArray=content.split(/(?:\r\n|\r|\n)/g);lineArray=lineArray.filter(function(content){return $.trim(content)}),techDataContent=$('<div class="x-techdata__text">');var current=0,row=null;lineArray.forEach(function(item,index){current%2==0?(row=$('<div class="x-techdata__row">'),row.append("<p>"+item+"</p>")):(row.append("<p>"+item+"</p>"),techDataContent.append(row)),current++})}),techDataContent&&($techData=$("<div>").addClass("x-techdata"),$techData.append($("<h2>").addClass("x-techdata__title").text("dados ").append($("<span>").text("técnicos"))).append(techDataContent)),$techData&&$container.append($techData)}},alterBackgroundName:function(){var productNameBanner=$(".x-specview .x-specview__section .x-description__brand"),firstNameProduct=skuJson_0.name.split(" ");productNameBanner.text(firstNameProduct[0])},removeEmptyElement:function(){$(".prateleira ul li").each(function(){""===$.trim($(this).find(".x-image-hover").html())&&$(this).find(".x-image-hover").remove()})},shipping:function(){var shippingBox=$(".shipping-box"),button=$(".frete-calcular"),inputCep=shippingBox.find(".prefixo").find("#txtCep");shippingBox.find(".prefixo").text("CEP").append(inputCep),shippingBox.find(".prefixo").append(button),button.click(function(){shippingBox.find(".freight-values").find("table").remove();var interval=setInterval(function(){var table=shippingBox.find(".freight-values").find("table");if(0!=table.length){clearInterval(interval);var newTable=table.find("tbody tr").get().reduce(function(newTable,tr){var phrase=$(tr).find("td:nth-child(2)").text();return $(newTable).find("tbody").append($("<tr>").append($("<td>").append(phrase.split(",")[0].split(" ")[1]),$("<td>").append(phrase.split("em")[1].split("para")[0]),$("<td>").append($(tr).find("td").first().text()))).end().get(0)},$("<table>").append($("<thead>").append($("<tr>").append($("<th>").append("Tipo"),$("<th>").append("Prazo"),$("<th>").append("Valor"))),$("<tbody>")).get(0));table.after(newTable),table.remove()}})})}}};!function(){for(var i in methods)methods.hasOwnProperty(i)&&methods[i].call(methods)}(),$(".x-lista-historico ul").slick({slidesToShow:3,slidesToScroll:1})});