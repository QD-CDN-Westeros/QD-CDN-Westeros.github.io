/* Anonymouswill - 12/08/2020 16:03:20 GMT */
function showUserName(){if(enext_utils.user){var name=null;(name=enext_utils.user.FirstName)&&$(".x-header .x-user-account p").text(name)}}removeHelpComplement=function(){$(".helperComplement").remove()},floatToCurrency=function(_float){for(var s=_float.toString().replace(",","").split("."),decimals=s[1]||"",integer_array=s[0].split(""),formatted_array=[],i=integer_array.length,c=0;0!=i;i--,c++)c%3==0&&0!=c&&(formatted_array[formatted_array.length]="."),formatted_array[formatted_array.length]=integer_array[i-1];return 1==decimals.length?decimals+="0":0==decimals.length?decimals="00":decimals.length>2&&(decimals=Math.floor(parseInt(decimals,10)/Math.pow(10,decimals.length-2)).toString()),"R$ "+formatted_array.reverse().join("")+","+decimals},appearMinicartButtons=function(){var cartListWrapper=$(".x-header .x-bottom-header .x-minicart-content .x-content-minicart"),cartListFooter=$(".x-header .x-bottom-header .x-minicart_itens--wrapper footer");0==cartListWrapper.children("ul.cart-list").length?cartListFooter.css("display","none"):cartListFooter.css("display","block")},actionMenuPrincipal=function(){$(".x-header .x-top-header .x-menu_item").click(function(){$(".x-header .x-menu-myaccount").slideDown("slow"),$(".x-header .x-top-header").slideUp()}),$(".x-header .x-menu-myaccount .x-vlt").click(function(){$(".x-header .x-menu-myaccount").slideUp("slow"),$(".x-header .x-top-header").slideDown()}),$(".x-search-amount .x-amount-itens .x-cart").click(function(){$(this).parent().addClass("x-active"),$(".x-amount-itens .x-close_miniCart").fadeIn(),$(".x-wrapper--itens .x-miniCart-box-wrapper").slideDown(800),appearMinicartButtons()}),$(".x-amount-itens .x-close_miniCart").click(function(){$(this).fadeOut(),$(".x-search-amount .x-amount-itens").removeClass("x-active"),$(".x-wrapper--itens .x-miniCart-box-wrapper").slideUp(800)}),$(document).mouseup(function(e){var container=$(".x-miniCart-box-wrapper");container.is(e.target)||0!==container.has(e.target).length||($(".x-amount-itens .x-close_miniCart").fadeOut(),$(".x-search-amount .x-amount-itens").removeClass("x-active"),container.slideUp(800))})},searchBox=function(){$("#x-autocomplete-input").on("focus",function(){$(this).data("placeholder",$(this).attr("placeholder")).attr("placeholder","")}).on("blur",function(){$(this).attr("placeholder",$(this).data("placeholder"))}),$("#x-search-auto-complete").click(function(){$(".x-wrapper--itens .x-search-box-wrapper").slideDown(800),$("#x-autocomplete-input").focus()}),$(".x-search-box-wrapper .x-close_search-box").click(function(){$(".x-wrapper--itens .x-search-box-wrapper").slideUp(800)}),$(document).mouseup(function(e){var container=$(".x-search-box-wrapper");container.is(e.target)||0!==container.has(e.target).length||container.slideUp(800)}),$(".x-search-box-wrapper .x-form form").submit(function(){var word=$("#x-autocomplete-input").val();return window.location.href="/"+word,!1}),$("#x-autocomplete-input").keypress(function(event){var busca=$(this).val();busca.length>3&&$.ajax({type:"GET",url:"/api/catalog_system/pub/products/search/"+busca,headers:{resources:"0-3"},success:function(data){var search=data,container=$(".x-result-itens_search-box .x-produt-list ul");$(container).html(" "),$(".x-wrapper--itens .x-search-box-wrapper").addClass("x-not-padding");for(var i=0;i<search.length;i++){products=search[i],productName=products.productName,productLink=products.link,priceList=[];for(var j=0;j<products.items.length;j++)productPriceValid=products.items[j].sellers[0].commertialOffer.Price,priceList.push(productPriceValid);if(productPrice=Math.max.apply(null,priceList),productImage="/arquivos/ids/"+products.items[0].images[0].imageId+"-230-337/"+products.items[0].images[0].imageText+".jpg",container.find("li").length<=3){var price=floatToCurrency(productPrice);"R$ 0,00"==price&&(price="PRODUTO ESGOTADO"),$(container).append("<li><a href="+productLink+"><span><img src="+productImage+" alt="+productName+' border="0" /></span><h3>'+productName+'</h3><span class="x-price">'+price+"</span></a></li>")}}},error:function(data){console.log(data),console.log("Ops, ocorreu um erro."),$(".x-wrapper--itens .x-search-box-wrapper").removeClass("x-not-padding")}})})},amountItens=function(){var valueItens=$(".cart-info .amount-items").text().trim().split(": ")[1];$(".x-amount-itens .x-cart .x-qtd-amount").text(valueItens)},percentValueProduct=function(){$(".prateleira ul li").each(function(){var $sliptValue=$.trim($(this).find(".x-percent-value").text());if("0"!=$sliptValue){$(this).find(".x-percent-value").html($sliptValue.split(",")[0]),$(this).find(".x-percent-value").show();var page=window.location.pathname;page=page.toLowerCase()}})};var flagOff=function(){$(".x-shelf__discount").length&&$(".x-shelf__discount").each(function(){var discount=$(this).text().replace(",",".").replace(" %","");discount=parseInt(discount),$(this).text(discount+"%")})};loginHeaderActions=function(){$(".x-itens_wishlist--account .x-account").click(function(){return $.ajax({type:"GET",url:"/no-cache/profileSystem/getProfile",success:function(data){0==data.IsUserDefined?vtexid.start({returnUrl:"/account",userEmail:"",locale:"pt-BR",forceReload:!1}):$(".x-header .x-menu-myaccount").slideDown("slow")}}),!1})},fixedHeaderController=function(){var fixedHeader=$("header.x-header");$(window).on("scroll",function(){$(this).scrollTop()>135?fixedHeader.addClass("is--active"):fixedHeader.removeClass("is--active")})},fixNewsLetterButton=function(){$("#newsletterButtonOK").val("Enviar")};var footerNewsletter=function(){$("#home-news-form").on("submit",function(e){e.preventDefault();var $errorMsg=$(".home-news-form__error-msg"),$loadingMsg=$(".home-news-form__loading-msg"),fields=($(".home-news-form__success-msg"),[]);if(!$(this).serializeArray().every(function(field){return field.value&&fields.push(field.value),field.value}))return $errorMsg.length||$(this).append("<p class='home-news-form__error-msg'>Por favor, preencha todas as informações.</p>"),!1;$errorMsg.remove(),$loadingMsg.length||$(this).append("<p class='home-news-form__loading-msg'><img src='/ARQUIVOS/LOADING.GIF'/></p>");var dataToSubmit={unique:"Email","fields[0][Email]":fields[1],"fields[1][Nome]":fields[0],"fields[2][Source]":"Newsletter-Home"},$form=$(this);$.ajax({url:"//landfy.smartcampaign.com.br/landfy/api/2bf02b2d-6739-11e7-bcb3-0e7eae3ca056",data:dataToSubmit,success:function(response){$(".home-news-form__loading-msg, .home-news-form__input, .home-news-form__submit").hide(),1===response.response?$(".home-news-form__success-msg").length||$form.append("<p class='home-news-form__success-msg'>Obrigado por se cadastrar na The North Face!</p>"):3===response.response?$(".home-news-form__success-msg").length||$form.append("<p class='home-news-form__success-msg'>Você já está cadastrado na <strong>The North Face</strong>!</p>"):$(".home-news-form__error-msg").length||$form.append("<p class='home-news-form__error-msg'>Ops! Não foi possível cadastrar suas informações. Tente novamente por favor!</p>")},error:function(response){1===response.response&&3===response.response||$(".home-news-form__error-msg").length||$form.append("<p class='home-news-form__error-msg'>Ops! Não foi possível cadastrar suas informações. Tente novamente por favor!</p>")}})})},validaPopUp=function(){null==$.cookie("popupNews")?($(".x-news-popup-v2").addClass("--is-active"),newsPopUp()):$(".x-news-popup-v2").hide()},newsPopUp=function(){$(".x-news-popup-v2__close").click(function(){$.cookie("popupNews","1",{path:"/",expires:29}),$(".x-news-popup-v2").fadeOut().removeClass("--is-active")}),$(".x-close-all").click(function(){$.cookie("popupNews","1"),$(".x-news-popup-v2").fadeOut().removeClass("--is-active")}),$(".enviar-news-v2").keyup(function(e){13==e.keyCode&&(e.preventDefault(),$(".x-subscribe").submit())})},popupNewsletter=function(){$(".x-subscribe").on("submit",function(e){e.preventDefault();var fields=[];if(!$(this).serializeArray().every(function(field){return field.value&&fields.push(field.value),field.value}))return!1;var dataToSubmit={unique:"Email","fields[0][Email]":fields[1],"fields[2][Source]":"Modal"};$(this);$.ajax({url:"//landfy.smartcampaign.com.br/landfy/api/a4612c47-d302-11e8-bc9f-0e7eae3ca056",data:dataToSubmit,success:function(response){1===response.response?($(".x-news-popup-v2__box.failure").hide(),$.cookie("popupNews","1"),$(".x-popup-sucess").addClass("is--active")):3===response.response?($(".enviar-news-v2").val(""),$(".enviar-news-v2").attr("placeholder","e-mail já cadastrado"),$(".enviar-news-v2").addClass("wrong"),$("x-popup-sucess").addClass("is--active")):($(".enviar-news-v2").val(""),$(".enviar-news-v2").attr("placeholder","e-mail inválido"),$(".enviar-news-v2").addClass("wrong"))},error:function(response){1===response.response&&3===response.response||($(".enviar-news-v2").val(""),$(".enviar-news-v2").attr("placeholder","ocorreu um erro, por favor tente novamente"),$(".enviar-news-v2").addClass("wrong"))}})})};validateEmail=function(sEmail){return!!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(sEmail)},selosSmartWool=function(){$(".prateleira li").each(function(){var flagNewCollection=$(this).find(".nova-colecao---s17"),flagSmartwool=$(this).find(".smartwool---total"),flagsOutside=$(this).find(".go-outside---equipamento-do-ano-2017");flagNewCollection.length>0&&flagSmartwool.length>0&&flagNewCollection.hide(),flagNewCollection.length>0&&flagsOutside.length>0&&flagsOutside.length>0&&flagNewCollection.hide()})},sliderInform=function(){var informSlider=$(".x-general__inform");!0===$("body").hasClass("x-home")&&informSlider?$(".x-general__inform ul").slick({infinite:!0,slidesToShow:1,autoplay:!0,autoplaySpeed:3e3,dots:!1,arrows:!0,focusOnSelect:!1,adaptiveHeight:!1,touchMove:!0,cssEase:"linear"}):informSlider.hide()};var sucessoPopup=function(){$(".x-subscribe-btn-v2").click(function(){console.log("teste"),$(".x-news-popup-v2__box failure").hide(),$(".x-popup-sucess").addClass("is--active")})};$(document).ready(function(){actionMenuPrincipal(),searchBox(),percentValueProduct(),loginHeaderActions(),fixedHeaderController(),fixNewsLetterButton(),showUserName(),footerNewsletter(),validaPopUp(),newsPopUp(),popupNewsletter(),sliderInform(),flagOff()}),$(document).ajaxStop(function(){removeHelpComplement(),amountItens(),percentValueProduct()});