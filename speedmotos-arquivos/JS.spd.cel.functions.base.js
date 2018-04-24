/**
* Funções base
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

try {
	var Common = {
		run: function() {},
		init: function() {
			Common.amazingMenu();
			Common.bannerResponsive();
			Common.bannersCount();
			Common.callCartLinkShow();
			Common.openSearchModal();
			Common.floatBarMiniCart();
			Common.smartCart();
			Common.cartAddProduct();
			Common.callSmartPrice();
		},
		ajaxStop: function() {
			Common.callSmartPrice();
		},
		windowOnload: function() {
			Common.facebookLikebox();
		},
		buyInShelf: function() {
			var fn = function(){
				$(".shelf-qd-v1-buy-button .btn-add-buy-button-asynchronous:not('.remove-href')").not('.qd-on-bb').addClass("show qd-on-bb").click(function(e) {
					e.preventDefault();
					var $t = $(this);

					Common.buyInShelfOpenModal($t.getParent(".wrapper-buy-button-asynchronous").find("input[class*='buy-button-asynchronous-product-url']" || "").attr("class").replace(/[^0-9]+/gi, ""), $t.getParent(".shelf-qd-v1-buy-button").find(".qd-sq-quantity").val() || 1);
				});
			};
			fn();

			// Ações
			$(".qd-v1-modal").on("hidden.bs.modal", function(){
				$(this).removeClass("shelf-qd-v1-buy-button-modal");
			});

			// No callback do infinity scroll
			$(window).on("QuatroDigital.is_Callback", function(){
				fn();
			});
		},
		callSmartPrice: function() {
			var wrapper = $("li[layout]");

			wrapper.find('.shelf-qd-v1-box-buy:not(.qd-on)').addClass('qd-on').prepend('<div class="qd-sp-best-price">Por <span class="qd_displayPrice">R$ </span></div><div class="qd-sp-best-discount">com <span class="qd-sp-display-discount">desconto de 0% no Boleto</span></div>');

			wrapper.find(".flag").QD_SmartPrice({
				filterFlagBy: "[class*='boleto']",
				wrapperElement: wrapper,
				productPage:{
					isProductPage: false
				}
			});
		},
		floatBarMiniCart: function() {
			var miniCart = $(".show-minicart-on-hover");
			$(".floating-qd-v1-content .header-qd-v1-cart-link").mouseenter(function() {
				miniCart.not(this).mouseover();
			});
		},
		buyInShelfOpenModal: function(productId, qty){
			var modal = $(".qd-v1-modal");

			modal.addClass("shelf-qd-v1-buy-button-modal");

			// Header
			var header = modal.find(".modal-header");
			var modalContent = header.closest(".modal-content");
			modalContent.addClass("buy-in-shelf-open-modal-custom");
			header.children(":not(.close)").remove();
			header.append('<h3>Escolha a variação do produto</h3>');

			var iframe = $('<iframe src="/modal-sku?idproduto=' + productId + '&qty=' + qty + '" frameborder="0"></iframe>');
			modal.find(".modal-body").empty().append(iframe);
			modal.modal();

			iframe.load(function() {
				try{
					var $t = $(this);
					$t.height($t.contents().find("body").outerHeight(true) + 5);
				}
				catch(e){if (typeof console !== "undefined" && typeof console.error === "function") console.error(e.message); };
			});

			// Callback do Quick View
			window._QuatroDigital_prodBuyCallback = function(jqXHR, textStatus, prodLink, skus){
				modal.modal("hide");
				$(window).trigger("QuatroDigital.qd_bb_prod_add", [new $, skus[0] || 0]);
			};
		},
		amazingMenu:function(){
			$('.header-qd-v1-main-amazing-menu').QD_amazingMenu();

			// Amazing Menu Responsivo
			$(".header-qd-v1-amazing-menu-toggle, .header-qd-v1-amazing-menu-trigger").click(function(){
				$("body").toggleClass('qd-am-on');
			});

			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-am-on');
			});

			$(".floating-qd-v1-call-amazing-menu").click(function() {
				$("body").toggleClass('qd-am-toggle');
			});

			var wrapperMobile = $(".header-qd-v1-main-amazing-menu-mobile-wrapper");

			wrapperMobile.QD_amazingMenu();

			wrapperMobile.find('> ul > li.qd-am-has-ul a[href="#"]').click(function(evt) {
				evt.preventDefault();
				$(this).parent().toggleClass('qd-am-dropdown-active');
			});

			wrapperMobile.after('<span class="btn-close-mobile"><i class="fa fa-times-circle"></i></span>');

			$(".btn-close-mobile").click(function(){
				$("body").removeClass('qd-am-on');
			});
		},
		facebookLikebox: function() {
			$(".footer-qd-v1-facebook-likebox").html('<div class="fb-page" data-href="https://www.facebook.com/speedmotosoficial/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/speedmotosoficial/">Speed Motos</a></blockquote></div></div>');
		},
		bannerResponsive : function(){
			$(".banner-qd-v1-responsive .box-banner a, .qd-placeholder .box-banner a").each(function(){
				var $t = $(this);
				var cols = [];

				var href = $t.attr("href") || "";
				if(!href.length)
					return;

				$t.attr( "href", href.replace(/(col-)?(xs|sm|md|lg|hidden-xs|hidden-sm|hidden-md|hidden-lg)(-([0-9]{1,2}))?,?/ig, function(match){
					var str = match.replace(",", "").toLowerCase();
					cols.push( str.substr(0,4) === "col-" ? str : str );
					return "";
				}) );

				$t.parent().addClass( cols.length ? cols.join(" ") : "col-xs-12 col-sm-12" );
			});
		},
		callCartLinkShow: function() {
			if ($(window).width() < 750){
				$(".header-qd-v1-cart-link").click(function(evt) {
					evt.preventDefault();
					$(".header-qd-v1-main-amazing-menu-mobile-wrapper, .btn-close-mobile").attr('style', 'display:none !important');
					$(".v2-vtexsc-cart").toggleClass('cart-show');
				});
			}
		},
		smartyQuantity: function() {
			$(".shelf-qd-v1-buy-button").QD_smartQuantity({
				buyButton: ".btn-add-buy-button-asynchronous"
			});
			// $(".shelf-qd-v1-buy-button .btn-add-buy-button-asynchronous").QD_smartQuantity();
		},
		shelfColors: function() {
			$(".prateleira").QD_coresPrateleira({
				checkDuplicateUri : false,
				groupSkuByDimension : false,
			});
		},
		smartyBuyButton: function() {
			$(".header-qd-v1-cart-link").QD_buyButton({
				buyButton: ".shelf-qd-v1-buy-button .btn-add-buy-button-asynchronous"
			});
		},
		bannersCount: function() {
			$(".box-banner").parent().each(function() {
				var $t = $(this);
				$t.addClass("qdBannerCount-" + $t.find(".box-banner").length);
			});
		},
		smartCart: function() {
			var wrapper = $(".qd-sc-wrapper");

			$.QD_smartCart({
				selector: wrapper,
				dropDown:{
					texts: {
						linkCart: "Finalizar Compra",
						cartTotal: '<span class="qd-infoTotalItems">Itens: #items</span><span class="qd-infoTotalValue">Total: #value</span>'
					},
					updateOnlyHover: false,
					smartCheckout: true,
					callback: function() {
						$(".qd-ddc-wrapper3").prepend('<div class="qd-cartTitle"><h3>Carrinho</h3></div>');
						wrapper.find('.qd_ddc_continueShopping').after(wrapper.find('.qd-ddc-viewCart'));
					},
					skuName: function(data) {
						return data.name + ' - ' + data.skuName.replace(data.name, '');
					},
					callbackProductsList: function() {
						wrapper.find(".qd-ddc-prodQtt").each(function() {
							var $t = $(this);
							$t.add($t.next('.qd-ddc-prodRemove')).wrapAll('<div class="qd-ddc-prodAction"></div>');
						});
					}
				},
				buyButton: {
					buyButton: ".prateleira .buy-button"
				}
			});

			// Callback do Quick View
			window._QuatroDigital_prodBuyCallback = function(jqXHR, textStatus, prodLink, skus){
				$.fn.simpleCart(true);
				$(".shelf-qd-v1-buy-button-modal").modal("hide");
				$(window).trigger("QuatroDigital.qd_bb_prod_add", [new $, skus[0] || 0]);
			};

			$(".header-qd-v1-cart-link").click(function(evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-cart-show');

				wrapper.height($(window).height());
				wrapper.find(".qd-ddc-prodWrapper").css('max-height', $(window).height() - 193);
			});

			$(".components-qd-v1-overlay, .qd_ddc_lightBoxClose").click(function(evt){
				$(document.body).removeClass('qd-cart-show');
				$(".qd-am-overlay").hide();
			});
		},
		openSearchModal: function () {
			$('.header-qd-v1-action-search').click(function () {
				$('.modal-qd-v1-search').modal();
				$(document.body).addClass('qd-search-modal-open');
				return false;
			});

			$('body').on('hidden.bs.modal', '.modal-qd-v1-search', function () {
				$(document.body).removeClass('qd-search-modal-open');
			});
		},
		cartAddProduct: function() {
			var modal = $('.qd-v1-modal').clone().appendTo(document.body).addClass('qd-v1-modal-add-product-cart').removeClass('qd-v1-modal');

			modal.find('.modal-body').append('<p><i class="fa fa-check-circle" aria-hidden="true"></i> Produto adicionado ao carrinho com sucesso!</p>');

			$(window).on("cartProductAdded.vtex", function() {
				modal.modal();

				// setTimeout(function() {
				// 	modal.modal('hide');
				// }, 3000);
			});
		}
	};

	var Home = {
		init: function() {
			Home.bannerSliderDesktop();
			Home.bannerSliderMobile();
			Home.brandCarousel();
			Home.shelfCarouselHome();
			Home.organizeSideMenuCollection();
			Home.mosaicSetCol();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		bannerSliderDesktop: function() {
			$('.slider-qd-v1-full').slick({
				prevArrow: '<button type="button" class="slick-prev" title="Anterior"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next" title="Próximo"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
				dots: true,
				adaptiveHeight: true,
				fade: true,
				speed: 400,
				cssEase: 'linear'
			});
		},
		bannerSliderMobile: function() {
			$('.mobile-slider-qd-v1-wrapper').slick({
				adaptiveHeight: true,
				fade: true,
				speed: 400,
				cssEase: 'linear',
				arrows: false
			});
		},
		mosaicSetCol: function() {
			$(".banner-qd-v1-responsive .box-banner").QD_mosaicBanners();
		},
		brandCarousel:function(){
			var wrapper = $('.brand-carousel-qd-v1');

			// Titulo
			wrapper.each(function(){
				var wrap = $(this);
				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});

			wrapper.owlCarousel({
				items: 6,
				navigation: true,
				pagination: false
			});
		},
		shelfCarouselHome: function() {
			var wrapper = $('.shelf-qd-v1-carousel, .qd-category-collections');

			// Titulo
			wrapper.find('.prateleira').each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});

			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				navigation: true,
				pagination: false
			});
		},
		organizeSideMenuCollection: function() {
			var wrapper = $(".qd-category-collections");
			var htmlItem = '<div class="col-xs-12 item"><div class="row"></div></div>';
			var htmlSideMenuWrapper = '<div class="col-xs-12 col-sm-5 col-md-3 htmlSideMenuWrapper"></div>';
			var htmlCollectionWrapper = '<div class="col-xs-12 col-sm-7 col-md-9 htmlCollectionWrapper"></div>';
			var itemSideMenuCollection = '<div class="row itemSideMenuCollection"><div></div></div>';

			wrapper.find('.box-banner:not(".qd-on")').addClass("qd-on").each(function() {
				$t = $(this);

				$t.after(htmlSideMenuWrapper);

				$('.htmlSideMenuWrapper:not(".qd-on")').addClass("qd-on").append(wrapper.find($t));

				var collectionTitle = ($t.getParent(".htmlSideMenuWrapper").find("+ .heading-1")) || "";

				if ($t.getParent(".htmlSideMenuWrapper").find("+ .heading-1 + .prateleira").length > 0)
					var collection = $t.getParent(".htmlSideMenuWrapper").find("+ .heading-1 + .prateleira");
				else
					var collection = $t.getParent(".htmlSideMenuWrapper").find("+ .prateleira");

				$t.getParent('.htmlSideMenuWrapper').after(htmlCollectionWrapper);

				$('.htmlCollectionWrapper:not(".qd-on")').addClass("qd-on").append(collectionTitle, collection);

				$t.getParent(".htmlSideMenuWrapper").find("+ .htmlCollectionWrapper").after(itemSideMenuCollection);

				$('.itemSideMenuCollection:not(".qd-on")').addClass("qd-on").find("> div").append($t.getParent(".htmlSideMenuWrapper"), $t.getParent(".htmlSideMenuWrapper").find("+ .htmlCollectionWrapper"));
			});
		},
	};

	var Departament = {
		init: function() {
			Search.sideMenuFilterAdjust();
			Search.emptySearch();
			Departament.sidemenuToggle();
			Departament.hideExtendedMenu();
			Search.shelfLineFix();
			Departament.addLinkOpenModalTableSize();
		},
		ajaxStop: function() {
			Search.shelfLineFix();
		},
		windowOnload: function() {},
		sidemenuToggle:function(){
			// Amazing Menu Responsivo
			$(".search-qd-v1-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});

			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		},
		addLinkOpenModalTableSize: function() {
			var modal = $(".qd-v1-modal");
			var htmlTabela = $('<div class="row"> <div class="col-xs-12"> <div class="tableWrapper popup" style=""> <div class="mainSize"> <div class="tableImage tableImageWoman"></div> <div class="tableTitle"> <h1>Vestuário Feminino</h1> </div> <div class="tableSubtitle"> <p>Todas as medidas são do corpo da piloto, não do equipamento. As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow firstTd">BRASIL</td> <td class="yellow">PP</td> <td class="yellow">P</td> <td class="yellow">M</td> <td class="yellow">G</td> <td class="yellow">GG</td> <td class="yellow">GGG</td> <td class="yellow">GGGG</td> <td class="yellow">GGGGG</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">INTERNACIONAL</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">3XL</td> <td class="yellow">4XL</td> <td class="yellow"></td> </tr> <tr> <td class="firstTd">A = BUSTO</td> <td>83-87</td> <td>89-93</td> <td>95-99</td> <td>101-105</td> <td>107-111</td> <td>113-117</td> <td>115-119</td> <td>117-121</td> <td>cm</td> </tr> <tr> <td class="gray firstTd">B = CINTURA</td> <td class="gray">63-67</td> <td class="gray">69-73</td> <td class="gray">75-79</td> <td class="gray">81-85</td> <td class="gray">87-91</td> <td class="gray">93-97</td> <td class="gray">99-103</td> <td class="gray">105-109</td> <td class="gray">cm</td> </tr> <tr> <td class="firstTd">C = QUADRIL</td> <td>87-91</td> <td>93-97</td> <td>99-103</td> <td>105-109</td> <td>111-115</td> <td>117-121</td> <td>123-127</td> <td>129-133</td> <td>cm</td> </tr> <tr> <td class="gray firstTd">D = PERNA (INTEIRA)</td> <td class="gray">79</td> <td class="gray">79</td> <td class="gray">81</td> <td class="gray">83</td> <td class="gray">85</td> <td class="gray">85</td> <td class="gray">87</td> <td class="gray">88</td> <td class="gray">cm</td> </tr> <tr> <td class="firstTd">E = ALTURA</td> <td>163-166</td> <td>166-169</td> <td>169-172</td> <td>172-175</td> <td>175-178</td> <td>178-181</td> <td>93-97</td> <td>93-97</td> <td>cm</td> </tr> <tr> <td class="gray firstTd">F = PESO</td> <td class="gray">49-56</td> <td class="gray">51-58</td> <td class="gray">53-60</td> <td class="gray">55-62</td> <td class="gray">57-64</td> <td class="gray">59-66</td> <td class="gray">93-97</td> <td class="gray">93-97</td> <td class="gray">kg</td> </tr> <tr> <td class="yellow firstTd">USA</td> <td class="yellow">1</td> <td class="yellow">3</td> <td class="yellow">5</td> <td class="yellow">7</td> <td class="yellow">9</td> <td class="yellow">11</td> <td class="yellow">13</td> <td class="yellow">15</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">USA (CALÇAS)</td> <td class="yellow">2</td> <td class="yellow">4</td> <td class="yellow">6</td> <td class="yellow">8</td> <td class="yellow">10</td> <td class="yellow">12</td> <td class="yellow">14</td> <td class="yellow">16</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">USA (MACACÃO)</td> <td class="yellow"></td> <td class="yellow">2</td> <td class="yellow">4</td> <td class="yellow">6</td> <td class="yellow">8</td> <td class="yellow">10</td> <td class="yellow">12</td> <td class="yellow">14</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">EURO / BRASIL</td> <td class="yellow">36</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow"></td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageMan"></div> <div class="tableTitle"> <h1>Vestuário Masculino</h1> </div> <div class="tableSubtitle"> <p>Todas as medidas são do corpo da piloto, não do equipamento. As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">BRASIL</td> <td class="yellow">PP</td> <td class="yellow">P</td> <td class="yellow">M</td> <td class="yellow">G</td> <td class="yellow">GG</td> <td class="yellow">GGG</td> <td class="yellow">GGGG</td> <td class="yellow">GGGGG</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">BRASIL</td> <td class="yellow">38</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">INTERNACIONAL</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">3XL</td> <td class="yellow">4XL</td> <td class="yellow"></td> </tr> <tr> <td>A = PEITO</td> <td>89-93</td> <td>95-99</td> <td>101-105</td> <td>107-111</td> <td>113-117</td> <td>119-123</td> <td>125-129</td> <td>131-135</td> <td>cm</td> </tr> <tr> <td class="gray">B = CINTURA</td> <td class="gray">73-77</td> <td class="gray">79-83</td> <td class="gray">85-89</td> <td class="gray">91-95</td> <td class="gray">97-101</td> <td class="gray">103-107</td> <td class="gray">109-113</td> <td class="gray">115-119</td> <td class="gray">cm</td> </tr> <tr> <td>C = QUADRIL</td> <td>89-93</td> <td>95-99</td> <td>101-105</td> <td>107-111</td> <td>113-117</td> <td>119-123</td> <td>125-129</td> <td>131-135</td> <td>cm</td> </tr> <tr> <td class="gray">D = PERNA (INTEIRA)</td> <td class="gray">76.2</td> <td class="gray">81.3</td> <td class="gray">86.4</td> <td class="gray">86.4</td> <td class="gray">91.4</td> <td class="gray">91.4</td> <td class="gray">96,5</td> <td class="gray">96,5</td> <td class="gray">cm</td> </tr> <tr> <td>E = ALTURA</td> <td>171-174</td> <td>174-177</td> <td>177-180</td> <td>180-183</td> <td>183-186</td> <td>186-189</td> <td>189-192</td> <td>192-195</td> <td>cm</td> </tr> <tr> <td class="gray">F = PESO</td> <td class="gray">60-65</td> <td class="gray">65-70</td> <td class="gray">70-75</td> <td class="gray">75-85</td> <td class="gray">85-90</td> <td class="gray">90-95</td> <td class="gray">95-100</td> <td class="gray">100-105</td> <td class="gray">kg</td> </tr> <tr> <td class="yellow">USA (CALÇAS)</td> <td class="yellow">30</td> <td class="yellow">32</td> <td class="yellow">34</td> <td class="yellow">36</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">USA (MACACÃO)</td> <td class="yellow">36</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">EURO (MACACÃO)</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow">52</td> <td class="yellow">54</td> <td class="yellow">56</td> <td class="yellow">58</td> <td class="yellow">60</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">EURO (CALÇAS)</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow">52</td> <td class="yellow"></td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageBoots"></div> <div class="tableTitle"> <h1>Botas e Tênis</h1> </div> <div class="tableSubtitle"> <p>As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable measurementTableSmall" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">BRA</td> <td class="yellow">34</td> <td class="yellow">35</td> <td class="yellow">36</td> <td class="yellow">37</td> <td class="yellow">38</td> <td class="yellow">39</td> <td class="yellow">40</td> <td class="yellow">41</td> <td class="yellow">42</td> <td class="yellow">43</td> <td class="yellow">44</td> <td class="yellow">45</td> <td class="yellow">46</td> <td class="yellow">47</td> <td class="yellow">48</td> </tr> <tr> <td>EUR</td> <td>36</td> <td>37</td> <td>38</td> <td>39</td> <td>40</td> <td>41</td> <td>42</td> <td>43</td> <td>44</td> <td>45</td> <td>46</td> <td>47</td> <td>48</td> <td>49</td> <td>50</td> </tr> <tr> <td class="gray">USA</td> <td class="gray">3.5</td> <td class="gray">4</td> <td class="gray">5</td> <td class="gray">6</td> <td class="gray">6.5</td> <td class="gray">7.5</td> <td class="gray">8</td> <td class="gray">9</td> <td class="gray">9.5</td> <td class="gray">10.5</td> <td class="gray">11.5</td> <td class="gray">12</td> <td class="gray">12.5</td> <td class="gray">13.5</td> <td class="gray">14</td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageHelmets"></div> <div class="tableTitle"> <h1>Capacete</h1> </div> <div class="tableSubtitle"> <p>As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable measurementTableSmall" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">TAMANHO</td> <td class="yellow">2XS</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">3XL</td> </tr> <tr> <td>CENTÍMETROS</td> <td>51-52</td> <td>53-54</td> <td>55-56</td> <td>57-58</td> <td>59-60</td> <td>61-62</td> <td>63-64</td> <td>65-66</td> </tr> <tr> <td class="gray">POLEGADAS</td> <td class="gray">20 - 20 1/2</td> <td class="gray">20 7/8 - 21 1/4</td> <td class="gray">21 5/8 - 22</td> <td class="gray">22 1/2 - 22 7/8</td> <td class="gray">23 1/4 - 23 5/8</td> <td class="gray">24 - 24 3/8</td> <td class="gray">24 3/4 - 25 1/4</td> <td class="gray">25 5/8 - 26</td> </tr> <tr> <td>TAMANHO DE CHAPÉU</td> <td>6 3/8 - 6 1/2</td> <td>6 5/8 - 6 3/4</td> <td>6 7/8 - 7</td> <td>7 1/8 - 7 1/4</td> <td>7 3/8 - 7 1/2</td> <td>7 5/8 - 7 3/4</td> <td>7 7/8 - 8</td> <td>8 1/8 - 8 1/4</td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageGloves"></div> <div class="tableTitle"> <h1>Luvas</h1> </div> <div class="tableSubtitle"> <p>As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable measurementTableSmall" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">&nbsp;</td> <td class="yellow secondColumn">BRASIL</td> <td class="yellow">PP</td> <td class="yellow">P</td> <td class="yellow">M</td> <td class="yellow">G</td> <td class="yellow">GG</td> <td class="yellow">GGG</td> <td class="yellow">&nbsp;</td> <td class="yellow">&nbsp;</td> </tr> <tr> <td class="yellow">&nbsp;</td> <td class="yellow secondColumn">INTERNACIONAL</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">&nbsp;</td> <td class="yellow">&nbsp;</td> </tr> <tr> <td>A</td> <td class="secondColumn">Circunferência</td> <td>18-19</td> <td>19-20</td> <td>20-21</td> <td>21-22</td> <td>22-23</td> <td>23-24</td> <td>cm</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td class="gray">B</td> <td class="gray secondColumn">Altura</td> <td class="gray">16-17</td> <td class="gray">17-18</td> <td class="gray">18-19</td> <td class="gray">19-20</td> <td class="gray">20-21</td> <td class="gray">21-22</td> <td class="gray">cm</td> <td class="gray">&nbsp;</td> </tr> </tbody></table> </div> </div> </div> </div>');
			$('<div class="product-qd-v1-sku-selection-btn-table-size"><i class="fa fa-table" aria-hidden="true"></i> Tabela de medidas</div>').insertBefore(".search-qd-v1-navigator .navigation, .search-qd-v1-navigator .navigation-tabs");

			// Ações
			modal.on("hidden.bs.modal", function(){
				modal.removeClass("qd-v1-size-modal");
			});

			$(".product-qd-v1-sku-selection-btn-table-size").click(function(event) {
				modal.find(".modal-body").empty().append(htmlTabela);
				modal.addClass("qd-v1-size-modal");
				modal.modal();
			});
		},
		hideExtendedMenu:function(){
			$(".search-qd-v1-navigator ul").each(function(){
				var $t = $(this);
				var li = $t.find(">li:not('.qd-removed')");
				var qtt = 7;

				if(li.length <= qtt)
					return;

				var liHide = li.filter(":gt(" + (qtt - 1) + ")").stop(true, true).hide();
				var linkShowMore=$('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				$t.after(linkShowMore);
				var moreLi = $('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais filtros</a></li>');
				$t.append(moreLi);

				function click(){
					liHide.stop(true, true).slideToggle(function(){
						if(li.filter(":visible").length > qtt){
							linkShowMore.addClass("minus").text("Mostrar menos filtros");
							moreLi.addClass("minus").find("a").text("Mostrar menos filtros");
						}
						else{
							linkShowMore.removeClass("minus").text("Mostrar mais filtros");
							moreLi.removeClass("minus").find("a").text("Mostrar mais filtros");
						}
					});
				};

				moreLi.bind("click.qd_viewMore", click);
				linkShowMore.bind("click.qd_viewMore", click);
			});
		}
	};

	var Search = {
		init: function () {
			Search.sideMenuFilterAdjust();
			Search.emptySearch();
			Departament.sidemenuToggle();
			Departament.hideExtendedMenu();
			Search.organizeSearchV2();
			Search.shelfLineFix();
			Departament.addLinkOpenModalTableSize();
		},
		ajaxStop: function () {
			Search.shelfLineFix();
		},
		windowOnload: function () {},
		emptySearch:function () {
			if ($('.busca-vazio').length>0) {
				$('.search-qd-v1-no-result').show();
			};

			if ($('body').is(".busca-vazia"))
				$('.search-qd-v1-no-result').show();
		},
		organizeSearchV2: function() {
			var searchQDResult = $(".search-qd-v2-result");
			var wrap = $(".search-qd-v2-result-wrap-content .search-qd-v2-result-wrap");

			// REMOVE ITENS DUPLICADOS
			searchQDResult.find('.resultItemsWrapper + .searchResultsTime, .resultItemsWrapper + .searchResultsTime + .sub').remove();

			// ADICIONAR E ORGANIZA OS ELEMENTOS
			wrap.prepend('<div class="search-qd-v2-result-content row"> <div class="search-qd-v2-result-item-1 col-xs-12 col-sm-3 col-md-3"></div> <div class="search-qd-v2-result-item-2 col-xs-12 col-sm-6 col-md-3"></div> <div class="search-qd-v2-result-item-3 col-xs-12 col-sm-3 col-md-6"></div> </div>');
			$(".search-qd-v2-result-content .search-qd-v2-result-item-1").append(searchQDResult.find(".search-qd-v2-navigator"));
			$(".search-qd-v2-result-content .search-qd-v2-result-item-2").append(searchQDResult.find(".searchResultsTime"));
			$(".search-qd-v2-result-content .search-qd-v2-result-item-3").append(searchQDResult.find(".sub"));

			wrap.find('.search-qd-v2-navigator').prepend('<div class="search-qd-v2-navigator-btn-toggle"></div>');

			// CLICK PARA EXIBIR O MENU
			wrap.find(".search-qd-v2-navigator-btn-toggle").click(function() {
				wrap.find('.search-qd-v2-navigator .navigation').toggle();
			});

			$("body").attr("data-qd-scroll-limit", "200,370");
		},
		shelfLineFix: function() {
			var curTop;
			var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass('qd-fi-on');

			var shelf = wrapper.children("ul").removeClass('qd-first-line');
			shelf.first().addClass("qd-first-line");

			var setFirst = function() {
				shelf.each(function(){
					var $t = $(this);

					if($t.is(".qd-first-line")){
						curTop = $t.offset().top;
						shelf = shelf.not($t);
						return;
					}

					var offsetTop = $t.offset().top;
					if (offsetTop >= curTop - 10 && offsetTop <= curTop + 10)
						shelf = shelf.not($t);
					else{
						$t.addClass("qd-first-line");
						return false;
					}
				});

				if(shelf.length)
					setFirst();
			};
			setFirst();
		},
		sideMenuFilterAdjust:function() {
			function getSearchUrl() {
				var url;
				var preg = /\/buscapagina\?.+&PageNumber=/i;

				$("script:not([src])").each(function () {
					var content = this.innerHTML;
					if (content.indexOf("buscapagina") > -1) {
						url = preg.exec(content);
						return false;
					}
				});
				return url;
			};

			var filteredAutomaker = (decodeURIComponent((getSearchUrl() || ['']).pop()).toLocaleLowerCase().match(/specificationfilter_32\:([^&]+)/i) || ['']).pop();

			$('h5.HideModelo-Versao +ul a').each(function() {
				var $t = $(this);
				var txt  = $t.text().split('-');
				var automaker = (txt.shift()).trim().toLowerCase();
				$t.text(txt.join('-'));

				if(automaker != filteredAutomaker)
					$t.closest('li').hide().addClass('qd-removed');
			});
		}
	};

	var Product = {
		run: function() {},
		init: function () {
			Product.brandsImages();
			Product.zoomFix();
			Product.shelfCarouselProduct();
			Product.openShipping();
			Product.seeDescription();
			Product.skuListSelection();
			Product.notifymeShow();
			Product.qdCallSmartPrice();
			Product.qdCallModalInstallments();
			Product.qdShowFloatinBar();
			Product.addLinkOpenModalTableSize();
			Product.qdCallSmartPriceFloatingInfoPrice();
			Product.qdCallThumbVideo();
			Product.selectSkuLightboxNotification();
		},
		ajaxStop: function () {
			Product.addCloseBtnFreightTable();
			Product.startBootstrapTooltip();
		},
		windowOnload: function () {},
		brandsImages: function() {
			var brand = $(".product-qd-v1-brandName a.brand");
			if(brand.length)
				brand.html('<img src="/arquivos/qd-brand-'+ brand.attr("class").split(" ").pop() +'.jpg" alt="'+brand.text()+'" />');
		},
		qdCallModalInstallments: function() {
			var link = $('<a class="btn-size-installments" href="#size-table">Parcelas</a>');

			function addBtn() {
				var wrapper = $(".product-qd-v1-box-buy .price-installments");
				var wrapperPaymentMethod = $(".product-qd-v1-price-payment-method");

				if (wrapper.find(".btn-size-installments").length)
					return;

				link.insertAfter(wrapper).click(function() {
					wrapperPaymentMethod.toggleClass('hide');
				});

				wrapperPaymentMethod.click(function() {
					wrapperPaymentMethod.toggleClass('hide');
				});
			};

			$(window).bind("skuSelected.vtex", addBtn);
			addBtn();
		},
		addLinkOpenModalTableSize: function() {
			var modal = $(".qd-v1-modal");
			var htmlTabela = $('<div class="row"> <div class="col-xs-12"> <div class="tableWrapper popup" style=""> <div class="mainSize"> <div class="tableImage tableImageWoman"></div> <div class="tableTitle"> <h1>Vestuário Feminino</h1> </div> <div class="tableSubtitle"> <p>Todas as medidas são do corpo da piloto, não do equipamento. As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow firstTd">BRASIL</td> <td class="yellow">PP</td> <td class="yellow">P</td> <td class="yellow">M</td> <td class="yellow">G</td> <td class="yellow">GG</td> <td class="yellow">GGG</td> <td class="yellow">GGGG</td> <td class="yellow">GGGGG</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">INTERNACIONAL</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">3XL</td> <td class="yellow">4XL</td> <td class="yellow"></td> </tr> <tr> <td class="firstTd">A = BUSTO</td> <td>83-87</td> <td>89-93</td> <td>95-99</td> <td>101-105</td> <td>107-111</td> <td>113-117</td> <td>115-119</td> <td>117-121</td> <td>cm</td> </tr> <tr> <td class="gray firstTd">B = CINTURA</td> <td class="gray">63-67</td> <td class="gray">69-73</td> <td class="gray">75-79</td> <td class="gray">81-85</td> <td class="gray">87-91</td> <td class="gray">93-97</td> <td class="gray">99-103</td> <td class="gray">105-109</td> <td class="gray">cm</td> </tr> <tr> <td class="firstTd">C = QUADRIL</td> <td>87-91</td> <td>93-97</td> <td>99-103</td> <td>105-109</td> <td>111-115</td> <td>117-121</td> <td>123-127</td> <td>129-133</td> <td>cm</td> </tr> <tr> <td class="gray firstTd">D = PERNA (INTEIRA)</td> <td class="gray">79</td> <td class="gray">79</td> <td class="gray">81</td> <td class="gray">83</td> <td class="gray">85</td> <td class="gray">85</td> <td class="gray">87</td> <td class="gray">88</td> <td class="gray">cm</td> </tr> <tr> <td class="firstTd">E = ALTURA</td> <td>163-166</td> <td>166-169</td> <td>169-172</td> <td>172-175</td> <td>175-178</td> <td>178-181</td> <td>93-97</td> <td>93-97</td> <td>cm</td> </tr> <tr> <td class="gray firstTd">F = PESO</td> <td class="gray">49-56</td> <td class="gray">51-58</td> <td class="gray">53-60</td> <td class="gray">55-62</td> <td class="gray">57-64</td> <td class="gray">59-66</td> <td class="gray">93-97</td> <td class="gray">93-97</td> <td class="gray">kg</td> </tr> <tr> <td class="yellow firstTd">USA</td> <td class="yellow">1</td> <td class="yellow">3</td> <td class="yellow">5</td> <td class="yellow">7</td> <td class="yellow">9</td> <td class="yellow">11</td> <td class="yellow">13</td> <td class="yellow">15</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">USA (CALÇAS)</td> <td class="yellow">2</td> <td class="yellow">4</td> <td class="yellow">6</td> <td class="yellow">8</td> <td class="yellow">10</td> <td class="yellow">12</td> <td class="yellow">14</td> <td class="yellow">16</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">USA (MACACÃO)</td> <td class="yellow"></td> <td class="yellow">2</td> <td class="yellow">4</td> <td class="yellow">6</td> <td class="yellow">8</td> <td class="yellow">10</td> <td class="yellow">12</td> <td class="yellow">14</td> <td class="yellow"></td> </tr> <tr> <td class="yellow firstTd">EURO / BRASIL</td> <td class="yellow">36</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow"></td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageMan"></div> <div class="tableTitle"> <h1>Vestuário Masculino</h1> </div> <div class="tableSubtitle"> <p>Todas as medidas são do corpo da piloto, não do equipamento. As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">BRASIL</td> <td class="yellow">PP</td> <td class="yellow">P</td> <td class="yellow">M</td> <td class="yellow">G</td> <td class="yellow">GG</td> <td class="yellow">GGG</td> <td class="yellow">GGGG</td> <td class="yellow">GGGGG</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">BRASIL</td> <td class="yellow">38</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">INTERNACIONAL</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">3XL</td> <td class="yellow">4XL</td> <td class="yellow"></td> </tr> <tr> <td>A = PEITO</td> <td>89-93</td> <td>95-99</td> <td>101-105</td> <td>107-111</td> <td>113-117</td> <td>119-123</td> <td>125-129</td> <td>131-135</td> <td>cm</td> </tr> <tr> <td class="gray">B = CINTURA</td> <td class="gray">73-77</td> <td class="gray">79-83</td> <td class="gray">85-89</td> <td class="gray">91-95</td> <td class="gray">97-101</td> <td class="gray">103-107</td> <td class="gray">109-113</td> <td class="gray">115-119</td> <td class="gray">cm</td> </tr> <tr> <td>C = QUADRIL</td> <td>89-93</td> <td>95-99</td> <td>101-105</td> <td>107-111</td> <td>113-117</td> <td>119-123</td> <td>125-129</td> <td>131-135</td> <td>cm</td> </tr> <tr> <td class="gray">D = PERNA (INTEIRA)</td> <td class="gray">76.2</td> <td class="gray">81.3</td> <td class="gray">86.4</td> <td class="gray">86.4</td> <td class="gray">91.4</td> <td class="gray">91.4</td> <td class="gray">96,5</td> <td class="gray">96,5</td> <td class="gray">cm</td> </tr> <tr> <td>E = ALTURA</td> <td>171-174</td> <td>174-177</td> <td>177-180</td> <td>180-183</td> <td>183-186</td> <td>186-189</td> <td>189-192</td> <td>192-195</td> <td>cm</td> </tr> <tr> <td class="gray">F = PESO</td> <td class="gray">60-65</td> <td class="gray">65-70</td> <td class="gray">70-75</td> <td class="gray">75-85</td> <td class="gray">85-90</td> <td class="gray">90-95</td> <td class="gray">95-100</td> <td class="gray">100-105</td> <td class="gray">kg</td> </tr> <tr> <td class="yellow">USA (CALÇAS)</td> <td class="yellow">30</td> <td class="yellow">32</td> <td class="yellow">34</td> <td class="yellow">36</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">USA (MACACÃO)</td> <td class="yellow">36</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">EURO (MACACÃO)</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow">52</td> <td class="yellow">54</td> <td class="yellow">56</td> <td class="yellow">58</td> <td class="yellow">60</td> <td class="yellow"></td> </tr> <tr> <td class="yellow">EURO (CALÇAS)</td> <td class="yellow">38</td> <td class="yellow">40</td> <td class="yellow">42</td> <td class="yellow">44</td> <td class="yellow">46</td> <td class="yellow">48</td> <td class="yellow">50</td> <td class="yellow">52</td> <td class="yellow"></td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageBoots"></div> <div class="tableTitle"> <h1>Botas e Tênis</h1> </div> <div class="tableSubtitle"> <p>As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable measurementTableSmall" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">BRA</td> <td class="yellow">34</td> <td class="yellow">35</td> <td class="yellow">36</td> <td class="yellow">37</td> <td class="yellow">38</td> <td class="yellow">39</td> <td class="yellow">40</td> <td class="yellow">41</td> <td class="yellow">42</td> <td class="yellow">43</td> <td class="yellow">44</td> <td class="yellow">45</td> <td class="yellow">46</td> <td class="yellow">47</td> <td class="yellow">48</td> </tr> <tr> <td>EUR</td> <td>36</td> <td>37</td> <td>38</td> <td>39</td> <td>40</td> <td>41</td> <td>42</td> <td>43</td> <td>44</td> <td>45</td> <td>46</td> <td>47</td> <td>48</td> <td>49</td> <td>50</td> </tr> <tr> <td class="gray">USA</td> <td class="gray">3.5</td> <td class="gray">4</td> <td class="gray">5</td> <td class="gray">6</td> <td class="gray">6.5</td> <td class="gray">7.5</td> <td class="gray">8</td> <td class="gray">9</td> <td class="gray">9.5</td> <td class="gray">10.5</td> <td class="gray">11.5</td> <td class="gray">12</td> <td class="gray">12.5</td> <td class="gray">13.5</td> <td class="gray">14</td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageHelmets"></div> <div class="tableTitle"> <h1>Capacete</h1> </div> <div class="tableSubtitle"> <p>As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable measurementTableSmall" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">TAMANHO</td> <td class="yellow">2XS</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">3XL</td> </tr> <tr> <td>CENTÍMETROS</td> <td>51-52</td> <td>53-54</td> <td>55-56</td> <td>57-58</td> <td>59-60</td> <td>61-62</td> <td>63-64</td> <td>65-66</td> </tr> <tr> <td class="gray">POLEGADAS</td> <td class="gray">20 - 20 1/2</td> <td class="gray">20 7/8 - 21 1/4</td> <td class="gray">21 5/8 - 22</td> <td class="gray">22 1/2 - 22 7/8</td> <td class="gray">23 1/4 - 23 5/8</td> <td class="gray">24 - 24 3/8</td> <td class="gray">24 3/4 - 25 1/4</td> <td class="gray">25 5/8 - 26</td> </tr> <tr> <td>TAMANHO DE CHAPÉU</td> <td>6 3/8 - 6 1/2</td> <td>6 5/8 - 6 3/4</td> <td>6 7/8 - 7</td> <td>7 1/8 - 7 1/4</td> <td>7 3/8 - 7 1/2</td> <td>7 5/8 - 7 3/4</td> <td>7 7/8 - 8</td> <td>8 1/8 - 8 1/4</td> </tr> </tbody></table> </div> <div class="mainSize"> <div class="tableImage tableImageGloves"></div> <div class="tableTitle"> <h1>Luvas</h1> </div> <div class="tableSubtitle"> <p>As medidas são apenas para referência e não garantem um ajuste perfeito.</p> </div> <table class="measurementTable measurementTableSmall" border="1" cellspacing="0" cellpadding="0"> <tbody><tr> <td class="yellow">&nbsp;</td> <td class="yellow secondColumn">BRASIL</td> <td class="yellow">PP</td> <td class="yellow">P</td> <td class="yellow">M</td> <td class="yellow">G</td> <td class="yellow">GG</td> <td class="yellow">GGG</td> <td class="yellow">&nbsp;</td> <td class="yellow">&nbsp;</td> </tr> <tr> <td class="yellow">&nbsp;</td> <td class="yellow secondColumn">INTERNACIONAL</td> <td class="yellow">XS</td> <td class="yellow">S</td> <td class="yellow">M</td> <td class="yellow">L</td> <td class="yellow">XL</td> <td class="yellow">2XL</td> <td class="yellow">&nbsp;</td> <td class="yellow">&nbsp;</td> </tr> <tr> <td>A</td> <td class="secondColumn">Circunferência</td> <td>18-19</td> <td>19-20</td> <td>20-21</td> <td>21-22</td> <td>22-23</td> <td>23-24</td> <td>cm</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr> <tr> <td class="gray">B</td> <td class="gray secondColumn">Altura</td> <td class="gray">16-17</td> <td class="gray">17-18</td> <td class="gray">18-19</td> <td class="gray">19-20</td> <td class="gray">20-21</td> <td class="gray">21-22</td> <td class="gray">cm</td> <td class="gray">&nbsp;</td> </tr> </tbody></table> </div> </div> </div> </div>');
			$(".product-qd-v1-sku-selection .topic .specification").append('<span class="product-qd-v1-sku-selection-btn-table-size">- <i class="fa fa-table" aria-hidden="true"></i> Tabela de medidas</span>')

			// Ações
			modal.on("hidden.bs.modal", function(){
				modal.removeClass("qd-v1-size-modal");
			});

			$(".product-qd-v1-sku-selection-btn-table-size").click(function(event) {
				modal.find(".modal-body").empty().append(htmlTabela);
				modal.addClass("qd-v1-size-modal");
				modal.modal();
			});
		},
		notifymeShow: function() {
			var notifyWrapper = $(".portal-notify-me-ref");

			var checkVisibleNotify = function() {
				if (notifyWrapper.find(".sku-notifyme").is(":visible")){
					notifyWrapper.parent().parent().attr('class', "").addClass('col-xs-12 col-lg-8');
					$(document.body).addClass('notify-active');
				}
				else {
					notifyWrapper.parent().parent().removeClass('col-xs-12').attr('class', "col-xs-12 col-sm-6");
					$(document.body).removeClass('notify-active');
				}
			}

			$(document).on("skuSelected.vtex", function(e, sku) {
				checkVisibleNotify();
			});

			checkVisibleNotify();
		},
		zoomFix: function(){
			var overlay = $("<div class='qdZoomInvisibleOverlay' />");
			$("#image").prepend(overlay).on("mouseout", ".zoomPad", function(){ overlay.hide(); }).on("mouseover", ".zoomPad", function(){ overlay.show(); });
		},
		shelfCarouselProduct: function() {
			var wrapper = $('.qd-collections-wrap ');

			// Titulo
			wrapper.find('.prateleira').each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-2').insertBefore(wrap);
			});


			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				navigation: true,
				pagination: false
			});
		},
		openShipping: function() {
			ShippingValue();
		},
		hideUniqueSkuOption : function(){
			$(".sku-selector-container [class*='group_']").each(function(){
				var $t = $(this);
				var input =  $t.find("input");

				if(input.length !== 1)
					return;

				input.attr("checked", true).change();
				$t.getParent("ul").hide();
			});
		},
		addCloseBtnFreightTable: function() {
			var elem = $(".freight-values");

			if (!$("#calculoFrete").length) $(".product-shipping").hide();
			else $(".product-shipping").show();

			if (elem.length > 0 && elem.is(":visible"))
				$("<span class='close'/>").bind("click", function() {
					elem.fadeToggle("fast","linear");
				}).appendTo(elem);
		},
		qdCallSmartPrice: function() {
			var wrapper = $('.product-qd-v1-price');
			wrapper.hide();

			if(!skuJson.available)
					return;

			wrapper.append('<div class="qd-sp-best-price">ou <span class="qd_displayPrice">R$ </span></div>')
			.append('<div class="qd-sp-best-discount">com <span class="qd-sp-display-discount">0% de desconto</span> no boleto</div>').show();

			$('.product-qd-v1-sku-selection-box .flag').QD_SmartPrice({
				filterFlagBy: '[class*="desconto"]',
				productPage:{
					wrapperElement: '.product-qd-v1-sku-selection-box',
					changeNativePrice: false,
					isProductPage: true,
					skuPrice: null
				}
			});

			$(window).on("skuSelected", function(e, id, data) {
				if(data.available)
					wrapper.show();
				else
					wrapper.hide();
			});
		},
		qdShowFloatinBar: function() {
			var targetOffset = $(".product-qd-v1-buy-button").offset().top-30;
			var elem = $(".product-qd-v1-floating-info-price");

			var $w = $(window).scroll(function(){

				if (!elem.is('.active-btn')) {
					if ( $w.scrollTop() > targetOffset ) {
						elem.addClass("active");
					}
					else {
						elem.removeClass("active");
					}
				}

			});

			$(".product-qd-v1-floating-info-close").click(function(evt){
				elem.toggleClass("active");
				elem.addClass('active-btn');
			});

			$(".product-qd-v1-floating-price-button, .product-qd-v1-floating-info-price .btn-size-installments").click(function() {
				$('html, body').stop().animate({
					'scrollTop': 0
				}, 900, 'swing');

				elem.removeClass("active");
			});
		},
		qdCallSmartPriceFloatingInfoPrice: function() {
			var wrapper = $(".product-qd-v1-floating-info-price");

			if(!skuJson.available){
				wrapper.hide();
				return;
			}

			$(".product-qd-v1-floating-info-price .flag").QD_SmartPrice({
				filterFlagBy: "[class*='desconto']",
				productPage:{
					wrapperElement: ".product-qd-v1-floating-info-price",
					changeNativePrice: false,
					isProductPage: true
				}
			});

			$(window).on("skuSelected", function(e, id, data) {
				if(data.available)
					wrapper.show();
				else
					wrapper.hide();
			});
		},
		seeDescription: function() {
			$(".product-qd-v1-link-description").click(function(e){
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $(".product-qd-v1-description").offset().top - 100
				}, 900, 'swing');
			});
		},
		skuUrlHash: function() {
			var sku = $.bbq.getState("sku");
			if(sku && !$(".skuList.qd-sku-list-selected-by-click").length){
				var skuList = $("a.buy-button[href*='sku=" + sku + "'], input.sku-notifyme-skuid[value='" + sku + "']").first().getParent(".skuList");
				var src = (skuList.find(".imageSku img:first").attr("src") || "").match(/ids\/[0-9]+/i);
				if(typeof src === "object" && typeof src[0] === "string" && !$(".image-zoom [src*='" + src[0] + "']").length)
					skuList.trigger("selectSku.qd_click");
				else if(!$(".skuList.qd-sku-list-selected").length)
					skuList.trigger("selectSku.qd_click");
			}
		},
		skuListSelection:function(){
			if (!$(".product-qd-v1-sku-selection .imageSku").length > 0)
				return;

			$(document.body).addClass('sku-in-list');

			var wrapper = $(".product-qd-v1-sku-selection");

			wrapper.find(".skuList").each(function(){
				$(this).addClass("product-qd-v1-sku-in-list");

				if ($(window).width() >= 500){
					$(this).addClass('no-xs');
				}
			});

			wrapper.find(".buy-button").each(function(){
				$(this).wrap('<div class="qd-v1-buy-button-content"></div>');
			});

			wrapper.find(".portal-notify-me-ref").each(function() {
				var $t = $(this);

				$t.find(".notifyme").addClass("qd-notifyme-hide");
				$t.getParent(".skuList").addClass("qd-sku-unavaliable");

				var btn = $('<div class="notifyme-btn-wrap"><button class="btn btn-xs notifyme-btn">Avise-me</button></div>');
				btn.find("button").click(function() {
					btn.siblings(".notifyme").removeClass("qd-notifyme-hide");
					btn.addClass("qd-notifyme-hide");
				});
				$(this).prepend(btn);
			});

			wrapper.find(".qd-v1-buy-button-content").prepend('<div class="qd-v1-smart-qtt"> <input type="tel" class="qd-sq-quantity" /> <div class="btns-wrapper"> <span class="qd-sq-more"></span> <span class="qd-sq-minus"></span> </div> </div>');
		},
		smartQuantity: function() {
			$(".product-qd-v1-sku-selection-box").QD_smartQuantity();
		},
		smartyBuyButton: function() {
			$(".header-qd-v1-cart-link").QD_buyButton({
				buyButton: ".product-qd-v1-sku-selection-box .buy-button"
			});
		},
		qdCallThumbVideo: function() {
			var iframe = $("td.value-field.Video-Descricao-do-Produto:first iframe");

			if (!iframe.length) {
				window.qdVideoInProduct = {videoFieldSelector: 'td.value-field.Video:first'};
				return;
			}

			window.qdVideoInProduct = {videoFieldSelector: $('<span/>').addClass('video-product').text('https://www.youtube.com/watch?v=' + iframe.attr("src").split("?").shift().split("/").pop() + '&rel=0')};
		},
		startBootstrapTooltip: function() {
			$('[data-toggle="tooltip"]').tooltip({
				trigger: 'hover focus'
			});
		},
		selectSkuLightboxNotification: function () {
			var buyButton = $('.product-qd-v1-buy-button .buy-button');
			var newBB = buyButton.clone().insertAfter(buyButton).hide();
			var skuWrapper = $('.sku-selector-container');

			newBB.attr('href', 'javascript:void(0)');
			newBB.attr('data-template', '/templates/sku-selector/' + skuJson.productId);
			newBB.addClass('to-bind-modal');

			$.ajax('/no-cache/horaatualservidor.aspx');  // Forço um ajax para disparar o evento da Vtex de modal

			buyButton.click(function (e) {
				if ((this.href || '').indexOf('javascript:') < 0)
					return;
				e.preventDefault();
				newBB.click();
			});

			$(document).ajaxComplete(function (event, xhr, settings) {
				if (settings.url.indexOf('/templates/sku-selector/') < -1)
					return;

				$('#sku-selector-container').find('.skuselector-specification-label').each(function () {
					var input = $(this);
					var id = (input.attr('id') || '');

					if (id.indexOf('qd_') == 0)
						return;

					input.next('label').attr('for', 'qd_' + id).off('click.qd_skuLightboxNotify').on('click.qd_skuLightboxNotify', function() {
						skuWrapper.find('label[for="' + id + '"]').click();
					});
					input.attr('id', 'qd_' + id);
				});
			});
		}
	};

	var List = {
		run: function() {},
		init: function() {},
		ajaxStop: function() {},
		windowOnload: function() {}
	};

	var Institutional = {
		init: function() {
			Institutional.sidemenuToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		sidemenuToggle:function(){
			// Amazing Menu Responsivo
			$(".institucional-qd-v1-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});

			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		},
	};

	var Orders = {
		init: function() {
			Orders.bootstrapCssFix();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		bootstrapCssFix: function() {
			var styleSheets = document.styleSheets;
			for (var i = 0; i < styleSheets.length; i++) {
				if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1) {
					styleSheets[i].disabled = true;
					break;
				}
			}
		}
	};
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message)); }

try {
	(function() {
		var body, ajaxStop, windowLoad;

		windowLoad = function() {
			Common.windowOnload();
			if (body.is(".home")) Home.windowOnload();
			else if (body.is(".departamento, .categoria")) Departament.windowOnload();
			else if (body.is(".resultado-busca")) Search.windowOnload();
			else if (body.is(".produto")) Product.windowOnload();
			else if (body.is(".listas")) List.windowOnload();
			else if (body.is(".institucional")) Institutional.windowOnload();
			else if (body.is(".orders")) Orders.windowOnload();
		};

		ajaxStop = function() {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".departamento, .categoria")) Departament.ajaxStop();
			else if (body.is(".resultado-busca")) Search.ajaxStop();
			else if (body.is(".produto")) Product.ajaxStop();
			else if (body.is(".listas")) List.ajaxStop();
			else if (body.is(".institucional")) Institutional.ajaxStop();
			else if (body.is(".orders")) Orders.ajaxStop();
		};

		$(function() {
			body = $(document.body);
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".departamento, .categoria")) Departament.init();
			else if (body.is(".resultado-busca")) Search.init();
			else if (body.is(".produto")) Product.init();
			else if (body.is(".listas")) List.init();
			else if (body.is(".institucional")) Institutional.init();
			else if (body.is(".orders")) Orders.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
		});

		Common.run();
		if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			Product.run();
		else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			List.run();
	})();
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass('jsFullLoaded jsFullLoadedError') && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message)); }

/* Quatro Digital Newsletter // 5.0 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os Direitos Reservados */
(function(){var f=jQuery;if("function"!==typeof f.fn.QD_news){var t={defaultName:"Digite seu nome...",defaultEmail:"Digite seu e-mail...",nameField:".qd_news_name",checkNameFieldIsVisible:!0,emailField:".qd_news_email",btn:".qd_news_button",elementError:".nv2_messageError",elementSuccess:".nv2_messageSuccess",validationMethod:"popup",getAttr:"alt",setDefaultName:!0,checkNameExist:!0,validateName:!0,showInPopup:!0,animation:"blink",animateSpeed:100,animateDistance:15,animateRepeat:3,animateFieldSuccess:".qd_news_animate_field_success",
timeHideSuccessMsg:3E3,platform:"VTEX",allowSubmit:function(){return!0},successCallback:function(){},submitCallback:function(f,l){}};f.fn.QD_news=function(r){var l=function(a,d){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var g;"object"===typeof a?(a.unshift("[QD News]\n"),g=a):g=["[QD News]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===
d.toLowerCase())try{console.info.apply(console,g)}catch(b){console.info(g.join("\n"))}else try{console.error.apply(console,g)}catch(f){console.error(g.join("\n"))}else try{console.warn.apply(console,g)}catch(e){console.warn(g.join("\n"))}}},h=f(this);if(!h.length)return h;var a=f.extend({},t,r);a.showInPopup||(a.validationMethod="div");null!==a.animation?a.validationMethod="animateField":"animateField"==a.validationMethod&&(a.animation="leftRight");if("popup"==a.validationMethod&&"function"!==typeof f.fn.vtexPopUp2)return l("O popUp2 n\u00e3o foi encontrado. Adicione o Plugin de PopUp2."),
h;var q=function(f){var d,g,b;g=0;d=function(){f.animate({left:"-="+a.animateDistance},a.animateSpeed,function(){f.animate({left:"+="+a.animateDistance},a.animateSpeed,function(){g<a.animateRepeat&&d();g++})})};b=function(){f.fadeTo(a.animateSpeed,.2,function(){f.fadeTo(a.animateSpeed,1,function(){g<a.animateRepeat&&b();g++})})};f.stop(!0,!0);"leftRight"==a.animation?d():"blink"==a.animation&&b()};h.each(function(){var h,d,g,b=f(this),k=b.find(a.nameField),e=b.find(a.emailField),m=b.find(a.btn);"animateField"!=
a.validationMethod&&(d=b.find(a.elementError),g=b.find(a.elementSuccess));1>k.length&&a.checkNameExist&&l("Campo de nome, n\u00e3o encontrado ("+k.selector+"). Ser\u00e1 atribuido um valor padr\u00e3o.","info");if(1>e.length)return l("Campo de e-mail, n\u00e3o encontrado ("+e.selector+")"),b;if(1>m.length)return l("Bot\u00e3o de envio, n\u00e3o encontrado ("+m.selector+")"),b;if("animateField"!=a.validationMethod&&(1>g.length||1>d.length))return l("A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n ("+
g.selector+", "+d.selector+")"),b;a.setDefaultName&&k.is("input[type=text], textarea")&&k.val(a.defaultName);e.val(a.defaultEmail);(function(){if(a.checkNameExist){if(a.checkNameFieldIsVisible){var c=k.filter(":visible");if(!c.length)return}else c=k;var b=c.val();c.is("input:text, textarea")&&c.bind({focus:function(){c.val()!=b||0!==c.val().search(a.defaultName.substr(0,6))&&!a.setDefaultName||c.val("")},blur:function(){""===c.val()&&c.val(b)}})}})();(function(){var c;c=e.val();e.bind({focus:function(){e.val()==
c&&0===e.val().search(a.defaultEmail.substr(0,6))&&e.val("")},blur:function(){""===e.val()&&e.val(c)}})})();h=function(){var c,e,h,k;e=(c=b.find(a.nameField).filter("input[type=text],select,textarea").val())?c:b.find(a.nameField).filter("input[type=radio], input[type=checkbox]").length?b.find(a.nameField).filter("input[type=radio]:checked, input[type=checkbox]:checked").val()||"":(c=b.find(a.nameField).attr(a.getAttr))?c:(c=b.find(a.nameField).text())?c:(c=b.find(a.nameField).find(".box-banner img:first").attr("alt"))?
c:"Nome_Padrao";c=(b.find(a.emailField).val()||"").trim();h=b.find(a.nameField).is(":visible");h=a.validateName?(1>e.length||0===e.search(a.defaultName.substr(0,6)))&&(a.checkNameExist||h?h:!0):!1;k=0>c.search(/^[a-z0-9\_\-\.\+]+@[a-z0-9\_\-]+(\.[a-z0-9\_\-]{2,})+$/i);if(h||k)"animateField"==a.validationMethod?(h&&q(b.find(a.nameField)),k&&q(b.find(a.emailField))):"popup"==a.validationMethod?d.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterError"}):(d.slideDown().bind("click",function(){f(this).slideUp()}),
setTimeout(function(){d.slideUp()},1800));else if(a.allowSubmit()){m.attr("disabled","disabled");var n={postData:{newsletterClientEmail:c,newsletterClientName:a.defaultName==e?"-":e,newsInternalCampaign:"newsletter:opt-in",newsInternalPage:(document.location.pathname||"/").replace(/\//g,"_"),newsInternalPart:"newsletter"},button:m,wrapper:b};"linx"===a.platform&&(n.postData.nome=n.postData.newsletterClientName,n.postData.email=n.postData.newsletterClientEmail);f.ajax({url:"linx"===a.platform?"/newsletter.aspx":
"/no-cache/Newsletter.aspx",type:"linx"===a.platform?"GET":"POST",data:n.postData,success:function(c){var e,h,d;m.removeAttr("disabled");if("linx"===a.platform&&!(-1<c.indexOf(" com sucesso.")||-1<c.indexOf(" cadastrado.")))return alert(c);"popup"==a.validationMethod?g.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterSuccess"}):"animateField"!=a.validationMethod&&g.slideDown().bind("click",function(){f(this).slideUp()});d=b.find(a.emailField);a.setDefaultName&&b.find(a.nameField).is("input:text, textarea")&&
b.find(a.nameField).val(a.defaultName);e=function(){d.val(a.defaultEmail)};"animateField"==a.validationMethod?(d.val(b.find(a.animateFieldSuccess).val()||"Obrigado!!!"),d.addClass("vtexNewsSuccess"),h=setTimeout(function(){d.removeClass("vtexNewsSuccess");e();d.unbind("focus.vtexNews")},a.timeHideSuccessMsg),d.bind("focus.vtexNews",function(){d.removeClass("vtexNewsSuccess");clearTimeout(h);f(this).val("");f(this).unbind("focus.vtexNews")})):e();a.successCallback(n);f(window).trigger("qdNewsSuccessCallback",
n)}});a.submitCallback(c,e)}else l("Os dados n\u00e3o foram enviados pois o parametro 'allowSubmit' n\u00e3o retornou 'true'","info")};var p=function(a){13==(a.keyCode?a.keyCode:a.which)&&(a.preventDefault(),h())};k.filter("input:text, textarea").bind("keydown",p);e.bind("keydown",p);p=m.getParent("form");p.length?p.submit(function(a){a.preventDefault();h()}):m.bind("click.qd_news",function(){h()})});return h};f(function(){f(".qd_news_auto").QD_news()})}})();
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
//* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/* Quatro Digital - Scroll Toggle // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(){var c=jQuery,e=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(c){try{console.info(b.join("\n"))}catch(e){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(l){try{console.warn(b.join("\n"))}catch(m){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var d=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)d.push(c(window).height());else return e("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var b=a.split(","),f;for(f in b)"function"!==typeof b[f]&&(a=parseInt(b[f].trim()),
isNaN(a)||d.push(a))}if(!d.length)return e("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return e('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return e('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===
typeof document.body.getAttribute)return e('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return e('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){e("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",
g.message)}c(window).scroll(function(){for(var a=0;a<d.length;a++)c(window).scrollTop()>d[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+a)})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
/* * Javascript Cookie v1.5.1 * https://github.com/js-cookie/js-cookie * * Copyright 2006, 2014 Klaus Hartl * Released under the MIT license */
(function(e){var l;if("function"===typeof define&&define.amd)define(["jquery"],e);else if("object"===typeof exports){try{l=require("jquery")}catch(n){}module.exports=e(l)}else{var m=window.Cookies,h=window.Cookies=e(window.jQuery);h.noConflict=function(){window.Cookies=m;return h}}})(function(e){function l(a){a=c.json?JSON.stringify(a):String(a);return c.raw?a:encodeURIComponent(a)}function n(a,r){var b;if(c.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g, "\\"));try{d=decodeURIComponent(d.replace(p," "));b=c.json?JSON.parse(d):d;break a}catch(e){}b=void 0}return h(r)?r(b):b}function m(){for(var a,c,b=0,d={};b<arguments.length;b++)for(a in c=arguments[b],c)d[a]=c[a];return d}function h(a){return"[object Function]"===Object.prototype.toString.call(a)}var p=/\+/g,c=function(a,e,b){if(1<arguments.length&&!h(e)){b=m(c.defaults,b);if("number"===typeof b.expires){var d=b.expires,k=b.expires=new Date;k.setMilliseconds(k.getMilliseconds()+864E5*d)}return document.cookie= [c.raw?a:encodeURIComponent(a),"=",l(e),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},k=document.cookie?document.cookie.split("; "):[],q=0,p=k.length;q<p;q++){var f=k[q].split("="),g;g=f.shift();g=c.raw?g:decodeURIComponent(g);f=f.join("=");if(a===g){d=n(f,e);break}a||void 0===(f=n(f))||(d[g]=f)}return d};c.get=c.set=c;c.defaults={};c.remove=function(a,e){c(a,"",m(e,{expires:-1})); return!c(a)};e&&(e.cookie=c,e.removeCookie=c.remove);return c});
var $Cookies = Cookies.noConflict();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};
/* Quatro Digital Simple Cart // 4.14 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart){b(function(){var b=vtexjs.checkout.getOrderForm;vtexjs.checkout.getOrderForm=function(){return b.call()}});try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(c,n,h){var d,k,g,f,l,p,q,r,m;k=function(a,b){if("object"===typeof console){var e="object"===typeof a;"undefined"!==typeof b&&"alerta"===b.toLowerCase()?e?console.warn("[Simple Cart]\n",a[0],
a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?e?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):e?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};d=b(this);"object"===typeof c?n=c:(c=c||!1,d=d.add(b.QD_simpleCart.elements));if(!d.length)return d;b.QD_simpleCart.elements=b.QD_simpleCart.elements.add(d);h="undefined"===
typeof h?!1:h;f=b.extend({},{cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:"R$ ",showQuantityByItems:!0,smartCheckout:!0,callback:function(){}},n);g=b("");d.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});m=function(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var b=0,e=0,c=0;c<a.totalizers.length;c++)"Shipping"==a.totalizers[c].id&&(e+=a.totalizers[c].value),b+=a.totalizers[c].value;
window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(b/100,2,",",".");window._QuatroDigital_CartData.shipping=f.currencySymbol+qd_number_format(e/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((b+e)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(c=0;c<a.items.length;c++)window._QuatroDigital_CartData.qtt+=a.items[c].quantity;else window._QuatroDigital_CartData.qtt=a.items.length||0;try{window._QuatroDigital_CartData.callback&&
window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(d){k("Problemas com o callback do Smart Cart")}r(g)};l=function(a,b){1===a?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};q=function(a){1>a?d.addClass("qd-emptyCart"):d.removeClass("qd-emptyCart")};p=function(a,b){var c;c=parseInt(window._QuatroDigital_CartData.qtt,10);b.$this.show();isNaN(c)&&(k("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero! O valor ser\u00e1 definido para 0.",
"alerta"),c=0);b.cartTotalE.html(window._QuatroDigital_CartData.total);b.cartQttE.html(c);l(c,b.itemsTextE);q(c)};r=function(a){d.each(function(){var d={},e;e=b(this);c&&e.data("qd_simpleCartOpts")&&b.extend(f,e.data("qd_simpleCartOpts"));d.$this=e;d.cartQttE=e.find(f.cartQtt)||g;d.cartTotalE=e.find(f.cartTotal)||g;d.itemsTextE=e.find(f.itemsText)||g;d.emptyElem=e.find(f.emptyCart)||g;p(a,d);e.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||
{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(h?h:!c))return m(window._QuatroDigital_DropDown.getOrderForm);if("object"!==typeof window.vtexjs||"undefined"===typeof window.vtexjs.checkout)if("object"===typeof vtex&&"object"===typeof vtex.checkout&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return k("N\u00e3o foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function(a){m(a);window._QuatroDigital_DropDown.getOrderForm=
a},fail:function(a){k(["N\u00e3o foi poss\u00edvel obter os dados para o carrinho.",a])}})}else alert("Esta \u00e9 uma fun\u00e7\u00e3o descontinuada =/")})();f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return d};b.QD_simpleCart={elements:b("")};b(function(){var c;"function"===typeof window.ajaxRequestbuyButtonAsynchronous&&(c=window.ajaxRequestbuyButtonAsynchronous,window.ajaxRequestbuyButtonAsynchronous=function(l,h,d,k,g){c.call(this,l,h,d,k,function(){"function"===typeof g&&
g();b.QD_simpleCart.elements.each(function(){var c;c=b(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})})});var l=window.ReloadItemsCart||void 0;window.ReloadItemsCart=function(c){b.fn.simpleCart(!0);"function"===typeof l?l.call(this,c):alert(c)};b(function(){var c=b(".qd_cart_auto");c.length&&c.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex cartProductAdded.vtex",function(){b.fn.simpleCart(!0)})})}catch(c){"undefined"!==typeof console&&"function"===typeof console.error&&
console.error("Oooops! ",c)}}})();
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* Quatro Digital Amazing Menu // 2.13 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(5(k){3 g;3 a=28;C("5"!==J a.14.S){3 m={U:"/8-1n-V",1l:5(){},1h:5(){}};3 l=5(a,d){C("1A"===J w&&"T"!==J w.X&&"T"!==J w.10&&"T"!==J w.1i){3 c;"1A"===J a?(a.24("[1J 1I 1w]\\n"),c=a):c=["[1J 1I 1w]\\n"+a];C("T"===J d||"1P"!==d.R()&&"2q"!==d.R())C("T"!==J d&&"10"===d.R())Q{w.10.1k(w,c)}M(e){Q{w.10(c.K("\\n"))}M(b){}}1Q Q{w.X.1k(w,c)}M(e){Q{w.X(c.K("\\n"))}M(b){}}1Q Q{w.1i.1k(w,c)}M(e){Q{w.1i(c.K("\\n"))}M(b){}}}};a.14.1c=5(){3 f=a(i);f.E(5(d){a(i).q("8-7-H-"+d)});f.1g().q("8-7-1g");f.1S().q("8-7-1S");B f};a.14.S=5(){};k=5(a){3 d={j:"25%6%1d%6%I%6%G",27:"2c%6%I%6%G",1X:"1W%6%2z%6%I%6%G",2i:"2C%6%1U%6%I%6%G",2n:"2m%6%1M%6%I%6%G",2l:"2j%6%2t%6%2s%6%I%6%G","1V%2r":"2%1d%6%1U%6%I%6%G","1V%6":"%1d%6%1M%6%I%6%G"};B 5(a){3 e=5(a){B a};3 b=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];a=a["d"+b[16]+"c"+b[17]+"m"+e(b[1])+"n"+b[13]]["l"+b[18]+"c"+b[0]+"2p"+e("o")+"n"];3 c=5(a){B 2o(2u(a.Y(/\\./g,"\\2v").Y(/[a-2D-Z]/g,5(a){B 2E.2F(("Z">=a?2B:2A)>=(a=a.2w(0)+13)?a:a-26)})))};3 n=c(a[[b[9],e("o"),b[12],b[e(13)]].K("")]);c=c((W[["2x",e("2y"),"m",b[1],b[4].2G(),"2f"].K("")]||"---")+[".v",b[13],"e",e("x"),"23",e("20"),"22",b[1],".c",e("o"),"m.",b[19],"r"].K(""));1Z(3 h 1Y d){C(c===h+d[h]||n===h+d[h]){3 f="21"+b[17]+"e";2h}f="f"+b[0]+"2d"+e(b[1])+""}e=!1;-1<a[[b[12],"e",b[0],"2e",b[9]].K("")].2g("2b%1C%1B%1z%1f%1b%1f%29%2a%2k%1D%2L%1D%3n%1f%1b%1C%1B%1z%3s%1b")&&(e=!0);B[f,e]}(a)}(W);C(!3u(k[0]))B k[1]?l("\\3d\\3f\\1F \\3l\\P\\3i\\3k\\1E\\P\\1E\\1F \\3g\\P\\2H\\P \\3e\\3m\\3r\\P L\\3o\\P!"):!1;3 p=5(f){3 d=f.D(".3q");3 c=d.1H(".8-7-1e");3 e=d.1H(".8-7-1y");C(c.F||e.F)c.15().q("8-7-1e-1K"),e.15().q("8-7-1y-1K"),a.3b({U:g.U,3a:"2Q",2S:5(b){3 d=a(b);c.E(5(){3 b=a(i);3 c=d.D("2T[2U=\'"+b.1p("1q-1o-1L")+"\']");c.F&&(c.E(5(){a(i).1m(".2P-1e").1r().1s(b)}),b.1x())}).q("8-7-1v-1t");e.E(5(){3 b={};3 c=a(i);d.D("2O").E(5(){C(a(i).1O().1a().R()==c.1p("1q-1o-1L").1a().R())B b=a(i),!1});b.F&&(b.E(5(){a(i).1m("[2J*=\'2I\']").1r().1s(c)}),c.1x())}).q("8-7-1v-1t")},X:5(){l("N\\1R 2W 35\\34 36 37 38 1N V. A U \'"+g.U+"\' 2Y.")},2X:5(){g.1h.1T(i);a(W).1G("1u.7.1h",f)},2Z:30})};a.S=5(f){3 d=f.D("O[31]").E(5(){3 c=a(i);C(!c.F)B l(["2R 1N V n\\1R 32",f],"1P");c.D("H >O").15().q("8-7-33-O");c.D("H").E(5(){3 b=a(i);3 c=b.11(":2V(O)");c.F&&b.q("8-7-2M-"+c.1g().1O().1a().2N().Y(/\\./g,"").Y(/\\s/g,"-").R())});3 d=c.D(">H").1c();c.q("8-1n-V");d=d.D(">O");d.E(5(){3 b=a(i);b.D(">H").1c().q("8-7-2K");b.q("8-7-1j-V");b.15().q("8-7-1j")});d.q("8-7-1j");3 b=0,g=5(a){b+=1;a=a.11("H").11("*");a.F&&(a.q("8-7-39-"+b),g(a))};g(c);c.3p(c.D("O")).E(5(){3 b=a(i);b.q("8-7-"+b.11("H").F+"-H")})});p(d);g.1l.1T(i);a(W).1G("1u.7.1l",f)};a.14.S=5(f){3 d=a(i);C(!d.F)B d;g=a.3c({},m,f);d.3j=3h a.S(a(i));B d};a(5(){a(".3t").S()})}})(i);',62,217,'|||var||function|25C2|am|qd||||||||||this||||||||addClass||||||console|||||return|if|find|each|length|25A8oe|li|25A8pbz|typeof|join||catch||ul|u0391|try|toLowerCase|QD_amazingMenu|undefined|url|menu|window|error|replace||info|children|||fn|parent|||||trim|82|qdAmAddNdx|25A8fcrrqzbgbf|banner|D1|first|ajaxCallback|warn|dropdown|apply|callback|getParent|amazing|qdam|attr|data|clone|insertBefore|loaded|QuatroDigital|content|Menu|hide|collection|84|object|B8|E0|C2|u2202|u0472|trigger|filter|Amazing|QD|wrapper|value|25A8igrkpbzzreprfgnoyr|do|text|alerta|else|u00e3o|last|call|25A8igrkpbzzreprorgn|jjj|rqzbgbf|fcr|in|for|mm|tr|erc|co|unshift|jj||fc|jQuery|8F|CF|qu|rrqzbgbf|ls|rc|ite|indexOf|break|fcrr|bgbf|83d|fcrrqz|zbgbf|fcrrq|escape|ti|aviso|25C|25A8dhngebqvtvgny|25A8igrk|encodeURIComponent|u00a8|charCodeAt|js|no|25A8igrkpbzzrepr|122|90|qzbgbf|zA|String|fromCharCode|toUpperCase|u0ae8|colunas|class|column|A1g|elem|replaceSpecialChars|h2|box|html|UL|success|img|alt|not|foi|complete|falho|clearQueueDelay|3E3|itemscope|encontrada|has|u00edvel|poss|obter|os|dados|level|dataType|qdAjax|extend|u0e17|u0aef|u00c3|u03a1|new|u2113|exec|u00a1|u221a|u0abd|A1|u0472J|add|qd_am_code|u01ac|C5|qd_amazing_menu_auto|eval'.split('|'),0,{}));
/* * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010 * http://benalman.com/projects/jquery-bbq-plugin/ * * Copyright (c) 2010 "Cowboy" Ben Alman * Dual licensed under the MIT and GPL licenses. * http://benalman.com/about/license/ */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){function n(b){b=f.json?JSON.stringify(b):String(b);return f.raw?b:encodeURIComponent(b)}function m(b,e){var a;if(f.raw)a=b;else a:{var d=b;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));a=f.json?JSON.parse(d):d;break a}catch(g){}a=void 0}return c.isFunction(e)?e(a):a}var l=/\+/g,f=
c.cookie=function(b,e,a){if(void 0!==e&&!c.isFunction(e)){a=c.extend({},f.defaults,a);if("number"===typeof a.expires){var d=a.expires,g=a.expires=new Date;g.setTime(+g+864E5*d)}return document.cookie=[f.raw?b:encodeURIComponent(b),"=",n(e),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b?void 0:{};for(var d=document.cookie?document.cookie.split("; "):[],g=0,l=d.length;g<l;g++){var h=d[g].split("="),k;
k=h.shift();k=f.raw?k:decodeURIComponent(k);h=h.join("=");if(b&&b===k){a=m(h,e);break}b||void 0===(h=m(h))||(a[k]=h)}return a};f.defaults={};c.removeCookie=function(b,e){if(void 0===c.cookie(b))return!1;c.cookie(b,"",c.extend({},e,{expires:-1}));return!c.cookie(b)}});
/* Quatro Digital - Smart Quantity // 1.9 // Carlos Vinicius // Todos os direitos reservados */
(function(t){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var f=function(d,b){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var e;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),e=d):e=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
e)}catch(f){console.info(e.join("\n"))}else try{console.error.apply(console,e)}catch(f){console.error(e.join("\n"))}else try{console.warn.apply(console,e)}catch(f){console.warn(e.join("\n"))}}},m={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1,setQuantityByUrl:!0},n=function(h,b){function e(c,g,a){b.setQuantityByUrl?c.val(((location.search||"").match(p)||[b.initialValue]).pop()):c.val(b.initialValue);c.change(function(){try{var c=d(this),
a=parseInt(c.val().replace(q,""));!isNaN(a)&&a>b.initialValue?c.val(a):c.val(b.initialValue);c.trigger("QuatroDigital.sq_change",this)}catch(g){f(g.message)}});c.focusin(function(){d(this).trigger("QuatroDigital.sq_focusin",this)});g.click(function(a){a.preventDefault();c.val((parseInt(c.val())||b.initialValue)+1).change()});a.click(function(a){a.preventDefault();c.val((parseInt(c.val())||b.initialValue+1)-1).change()});c.change()}function m(c,g,a){c.on("QuatroDigital.sq_change",function(){(d(this).val()||
0)<=b.initialValue?(a.addClass("qd-sq-inactive"),g.removeClass("qd-sq-inactive")):(g.addClass("qd-sq-inactive"),a.removeClass("qd-sq-inactive"))})}function n(c,d){c.on("QuatroDigital.sq_change",function(){try{if(!(d[0].hostname||"").length)return f("A quantidade n\u00e3o foi inserida no bt comprar pois o mesmo n\u00e3o possui uma URL","info");var a=d[0].search||"";-1<a.toLowerCase().indexOf("qty=")?d[0].search=a.replace(l,"qty="+(parseInt(c.val())||("number"==typeof b.initialValue?b.initialValue:
1))+"&"):d[0].search="qty="+(parseInt(c.val())||("number"==typeof b.initialValue?b.initialValue:1))+"&"+(d[0].search||"").replace(l,"");var e=((d.attr("href")||"").match(r)||[""]).pop()+"";c.attr("data-sku-id",e);if(e.length&&"object"===typeof skuJson&&!c.attr("data-sku-price"))for(a=0;a<skuJson.skus.length;a++)skuJson.skus[a].sku==e&&c.attr("data-sku-price",skuJson.skus[a].bestPrice)}catch(k){f(k.message)}})}var q=/[^0-9-]/gi,p=/qty\=([0-9]+)/i,r=/sku\=([0-9]+)/i,l=/qty\=[0-9]+\&?/ig;h.each(function(){try{var c=
d(this),g=c.find(b.buyButton),a=c.find(b.qttInput),h=c.find(b.btnMore),k=c.find(b.btnMinus);if(!g.length&&null!==b.buyButton||!a.length)return f("O plugin parou por aqui! N\u00e3o foram encontrados o bot\u00e3o comprar e o campo de quantidade","alerta");if(a.is(".qd-sq-on"))return f(["Execu\u00e7\u00e3o ignorada pois este input j\u00e1 possui o plugin aplicado. Input: ",a],"info");a.addClass("qd-sq-on");m(a,h,k);null!==b.buyButton&&n(a,g);e(a,h,k);d(window).on("vtex.sku.selected",function(){a.change()})}catch(l){f(l.message)}})};
d.fn.QD_smartQuantity=function(f){var b=d(this);b.qdPlugin=new n(b,d.extend({},m,f));d(window).trigger("QuatroDigital.sq_callback");return b};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);
/* Quatro Digital - Smart Buy Button // 1.18 // Carlos Vinicius // Todos os direitos reservados */
(function(u){try{var a=jQuery,c,r=a({}),l=function(a,c){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[Quatro Digital - Buy Button]\n"),b=a):b=["[Quatro Digital - Buy Button]\n"+a];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,b)}catch(h){try{console.info(b.join("\n"))}catch(k){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(h){try{console.warn(b.join("\n"))}catch(k){}}}},t={timeRemoveNewItemClass:5E3,isSmartCheckout:!0,buyButton:".productInformationWrapper  a.buy-button",buyQtt:"input.buy-in-page-quantity",selectSkuMsg:"javascript:",autoWatchBuyButton:!0,buyIfQuantityZeroed:!1,fakeRequest:!1,productPageCallback:function(c,f,b){a("body").is(".productQuickView")&&("success"===f?alert("Produto adicionado ao carrinho!"):(alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),
("object"===typeof parent?parent:document).location.href=b))},isProductPage:function(){return a("body").is("#produto, .produto")},execDefaultAction:function(a){return!1},allowBuyClick:function(){return!0},callback:function(){},asyncCallback:function(){}};a.QD_buyButton=function(g,f){function b(a){c.isSmartCheckout?a.data("qd-bb-click-active")||(a.data("qd-bb-click-active",1),a.on("click.qd_bb_buy_sc",function(a){if(!c.allowBuyClick())return!0;if(!0!==m.clickBuySmartCheckout.call(this))return a.preventDefault(),
!1})):alert("M\u00e9todo descontinuado!")}function h(e){e=e||a(c.buyButton);e.each(function(){var d=a(this);d.is(".qd-sbb-on")||(d.addClass("qd-sbb-on"),d.is(".btn-add-buy-button-asynchronous")&&!d.is(".remove-href")||d.data("qd-bb-active")||(d.data("qd-bb-active",1),d.children(".qd-bb-productAdded").length||d.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'),d.is(".buy-in-page-button")&&c.isProductPage()&&p.call(d),b(d)))});c.isProductPage()&&
!e.length&&l("Oooops!\nAparentemente esta \u00e9 uma p\u00e1gina de produto por\u00e9m n\u00e3o encontrei nenhum bot\u00e3o comprar!\nVerifique se \u00e9 este mesmo o seletor: '"+e.selector+"'.","info")}var k,p,m;k=a(g);m=this;window._Quatro_Digital_dropDown=window._Quatro_Digital_dropDown||{};window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};m.prodAdd=function(e,d){k.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");a("body").addClass("qd-bb-lightBoxBodyProdAdd");var b=a(c.buyButton).filter("[href='"+
(e.attr("href")||"---")+"']").add(e);b.addClass("qd-bb-itemAddBuyButtonWrapper");setTimeout(function(){k.removeClass("qd-bb-itemAddCartWrapper");b.removeClass("qd-bb-itemAddBuyButtonWrapper")},c.timeRemoveNewItemClass);window._Quatro_Digital_dropDown.getOrderForm=void 0;if("undefined"!==typeof f&&"function"===typeof f.getCartInfoByUrl)return c.isSmartCheckout||(l("fun\u00e7\u00e3o descontinuada"),f.getCartInfoByUrl()),window._QuatroDigital_DropDown.getOrderForm=void 0,f.getCartInfoByUrl(function(d){window._Quatro_Digital_dropDown.getOrderForm=
d;a.fn.simpleCart(!0,void 0,!0)},{lastSku:d});window._Quatro_Digital_dropDown.allowUpdate=!0;a.fn.simpleCart(!0)};(function(){if(c.isSmartCheckout&&c.autoWatchBuyButton){var e=a(".btn-add-buy-button-asynchronous");e.length&&h(e)}})();p=function(){var e=a(this);"undefined"!==typeof e.data("buyButton")?(e.unbind("click"),b(e)):(e.bind("mouseenter.qd_bb_buy_sc",function(d){e.unbind("click");b(e);a(this).unbind(d)}),a(window).load(function(){e.unbind("click");b(e);e.unbind("mouseenter.qd_bb_buy_sc")}))};
m.clickBuySmartCheckout=function(){var e=a(this),d=e.attr("href")||"";if(-1<d.indexOf(c.selectSkuMsg))return!0;d=d.replace(/redirect\=(false|true)/ig,"").replace("?","?redirect=false&").replace(/\&\&/ig,"&");if(c.execDefaultAction(e))return e.attr("href",d.replace("redirect=false","redirect=true")),!0;d=d.replace(/http.?:/i,"");r.queue(function(b){if(!c.buyIfQuantityZeroed&&!/(&|\?)qty\=[1-9][0-9]*/ig.test(d))return b();var f=function(b,f){var g=d.match(/sku\=([0-9]+)/ig),h=[],k;if("object"===typeof g&&
null!==g)for(var l=g.length-1;0<=l;l--)k=parseInt(g[l].replace(/sku\=/ig,"")),isNaN(k)||h.push(k);c.productPageCallback.call(this,b,f,d);m.buyButtonClickCallback.call(this,b,f,d,h);m.prodAdd(e,d.split("ku=").pop().split("&").shift());"function"===typeof c.asyncCallback&&c.asyncCallback.call(this);a(window).trigger("productAddedToCart");a(window).trigger("cartProductAdded.vtex")};c.fakeRequest?(f(null,"success"),b()):a.ajax({url:d,complete:f}).always(function(){b()})})};m.buyButtonClickCallback=function(a,
b,c,f){try{"success"===b&&"object"===typeof window.parent&&"function"===typeof window.parent._QuatroDigital_prodBuyCallback&&window.parent._QuatroDigital_prodBuyCallback(a,b,c,f)}catch(g){l("Problemas ao tentar comunicar a p\u00e1gina que o produto foi aicionado ao carrinho.")}};h();"function"===typeof c.callback?c.callback.call(this):l("Callback n\u00e3o \u00e9 uma fun\u00e7\u00e3o")};var n=a.Callbacks();a.fn.QD_buyButton=function(g,f){var b=a(this);"undefined"!==typeof f||"object"!==typeof g||g instanceof
a||(f=g,g=void 0);c=a.extend({},t,f);var h;n.add(function(){b.children(".qd-bb-itemAddWrapper").length||b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');h=new a.QD_buyButton(b,g)});n.fire();a(window).on("QuatroDigital.qd_bb_prod_add",function(a,b,c){h.prodAdd(b,c)});return a.extend(b,h)};var q=0;a(document).ajaxSend(function(a,c,b){-1<b.url.toLowerCase().indexOf("/checkout/cart/add")&&(q=(b.url.match(/sku\=([0-9]+)/i)||[""]).pop())});a(window).bind("productAddedToCart.qdSbbVtex",
function(){a(window).trigger("QuatroDigital.qd_bb_prod_add",[new a,q])});a(document).ajaxStop(function(){n.fire()})}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",g)}})(this);
/* Quatro Digital - sessionStorage // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(){var e=function(b,c){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var a;"object"===typeof b?(b.unshift("[Quatro Digital - sessionStorage]\n"),a=b):a=["[Quatro Digital - sessionStorage]\n"+b];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,a)}catch(d){console.info(a.join("\n"))}else try{console.error.apply(console,
a)}catch(e){console.error(a.join("\n"))}else try{console.warn.apply(console,a)}catch(f){console.warn(a.join("\n"))}}};window.qdSessionStorage=window.qdSessionStorage||{};var f="undefined"!==typeof sessionStorage&&"undefined"!==typeof sessionStorage.setItem&&"undefined"!==typeof sessionStorage.getItem;window.qdSessionStorage.setItem=function(b,c,a){try{if(!f)return!1;var d=new Date;sessionStorage.setItem(b,c);isNaN(parseInt(a))||(d.setTime(d.getTime()+6E4*a),sessionStorage.setItem(b+"_expiration",
d.getTime()))}catch(g){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar salvar os dados no armazenamento da sess\u00e3o. Detalhes: ",g.message],"alerta")}};window.qdSessionStorage.getItem=function(b){try{if(!f)return!1;var c=new Date,a=parseInt(sessionStorage.getItem(b+"_expiration")||0,10)||0;return c.getTime()>a?(sessionStorage.removeItem&&(sessionStorage.removeItem(b),sessionStorage.removeItem(b+"_expiration")),null):sessionStorage.getItem(b)}catch(d){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar obter os dados no armazenamento da sess\u00e3o. Detalhes: ",
d.message],"alerta")}}})();
/*http://phpjs.org/functions/utf8_encode/*/
function utf8_encode(b){if(null===b||"undefined"===typeof b)return"";b+="";var d="",f,g,h=0;f=g=0;for(var h=b.length,e=0;e<h;e++){var a=b.charCodeAt(e),c=null;if(128>a)g++;else if(127<a&&2048>a)c=String.fromCharCode(a>>6|192,a&63|128);else if(55296!=(a&63488))c=String.fromCharCode(a>>12|224,a>>6&63|128,a&63|128);else{if(55296!=(a&64512))throw new RangeError("Unmatched trail surrogate at "+e);c=b.charCodeAt(++e);if(56320!=(c&64512))throw new RangeError("Unmatched lead surrogate at "+(e-1));a=((a&1023)<<
10)+(c&1023)+65536;c=String.fromCharCode(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}null!==c&&(g>f&&(d+=b.slice(f,g)),d+=c,f=g=e+1)}g>f&&(d+=b.slice(f,h));return d};
/*http://phpjs.org/functions/md5/*/
if("function"!==typeof qd_md5)var qd_md5=function(p){var h=function(b,a){var d,c,f,e,g;f=b&2147483648;e=a&2147483648;d=b&1073741824;c=a&1073741824;g=(b&1073741823)+(a&1073741823);return d&c?g^2147483648^f^e:d|c?g&1073741824?g^3221225472^f^e:g^1073741824^f^e:g^f^e},k=function(b,a,d,c,f,e,g){b=h(b,h(h(a&d|~a&c,f),g));return h(b<<e|b>>>32-e,a)},l=function(b,a,d,c,f,e,g){b=h(b,h(h(a&c|d&~c,f),g));return h(b<<e|b>>>32-e,a)},m=function(b,a,c,d,e,f,g){b=h(b,h(h(a^c^d,e),g));return h(b<<f|b>>>32-f,a)},n=
function(b,a,c,d,f,e,g){b=h(b,h(h(c^(a|~d),f),g));return h(b<<e|b>>>32-e,a)},q=function(b){var a="",c="",d;for(d=0;3>=d;d++)c=b>>>8*d&255,c="0"+c.toString(16),a+=c.substr(c.length-2,2);return a},e=[],f,r,t,u,v,b,a,d,c;p=this.utf8_encode(p);e=function(b){var a,c=b.length;a=c+8;for(var d=16*((a-a%64)/64+1),e=Array(d-1),f=0,g=0;g<c;)a=(g-g%4)/4,f=g%4*8,e[a]|=b.charCodeAt(g)<<f,g++;a=(g-g%4)/4;e[a]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(p);b=1732584193;a=4023233417;d=2562383102;c=271733878;p=
e.length;for(f=0;f<p;f+=16)r=b,t=a,u=d,v=c,b=k(b,a,d,c,e[f+0],7,3614090360),c=k(c,b,a,d,e[f+1],12,3905402710),d=k(d,c,b,a,e[f+2],17,606105819),a=k(a,d,c,b,e[f+3],22,3250441966),b=k(b,a,d,c,e[f+4],7,4118548399),c=k(c,b,a,d,e[f+5],12,1200080426),d=k(d,c,b,a,e[f+6],17,2821735955),a=k(a,d,c,b,e[f+7],22,4249261313),b=k(b,a,d,c,e[f+8],7,1770035416),c=k(c,b,a,d,e[f+9],12,2336552879),d=k(d,c,b,a,e[f+10],17,4294925233),a=k(a,d,c,b,e[f+11],22,2304563134),b=k(b,a,d,c,e[f+12],7,1804603682),c=k(c,b,a,d,e[f+13],
12,4254626195),d=k(d,c,b,a,e[f+14],17,2792965006),a=k(a,d,c,b,e[f+15],22,1236535329),b=l(b,a,d,c,e[f+1],5,4129170786),c=l(c,b,a,d,e[f+6],9,3225465664),d=l(d,c,b,a,e[f+11],14,643717713),a=l(a,d,c,b,e[f+0],20,3921069994),b=l(b,a,d,c,e[f+5],5,3593408605),c=l(c,b,a,d,e[f+10],9,38016083),d=l(d,c,b,a,e[f+15],14,3634488961),a=l(a,d,c,b,e[f+4],20,3889429448),b=l(b,a,d,c,e[f+9],5,568446438),c=l(c,b,a,d,e[f+14],9,3275163606),d=l(d,c,b,a,e[f+3],14,4107603335),a=l(a,d,c,b,e[f+8],20,1163531501),b=l(b,a,d,c,e[f+
13],5,2850285829),c=l(c,b,a,d,e[f+2],9,4243563512),d=l(d,c,b,a,e[f+7],14,1735328473),a=l(a,d,c,b,e[f+12],20,2368359562),b=m(b,a,d,c,e[f+5],4,4294588738),c=m(c,b,a,d,e[f+8],11,2272392833),d=m(d,c,b,a,e[f+11],16,1839030562),a=m(a,d,c,b,e[f+14],23,4259657740),b=m(b,a,d,c,e[f+1],4,2763975236),c=m(c,b,a,d,e[f+4],11,1272893353),d=m(d,c,b,a,e[f+7],16,4139469664),a=m(a,d,c,b,e[f+10],23,3200236656),b=m(b,a,d,c,e[f+13],4,681279174),c=m(c,b,a,d,e[f+0],11,3936430074),d=m(d,c,b,a,e[f+3],16,3572445317),a=m(a,d,
c,b,e[f+6],23,76029189),b=m(b,a,d,c,e[f+9],4,3654602809),c=m(c,b,a,d,e[f+12],11,3873151461),d=m(d,c,b,a,e[f+15],16,530742520),a=m(a,d,c,b,e[f+2],23,3299628645),b=n(b,a,d,c,e[f+0],6,4096336452),c=n(c,b,a,d,e[f+7],10,1126891415),d=n(d,c,b,a,e[f+14],15,2878612391),a=n(a,d,c,b,e[f+5],21,4237533241),b=n(b,a,d,c,e[f+12],6,1700485571),c=n(c,b,a,d,e[f+3],10,2399980690),d=n(d,c,b,a,e[f+10],15,4293915773),a=n(a,d,c,b,e[f+1],21,2240044497),b=n(b,a,d,c,e[f+8],6,1873313359),c=n(c,b,a,d,e[f+15],10,4264355552),
d=n(d,c,b,a,e[f+6],15,2734768916),a=n(a,d,c,b,e[f+13],21,1309151649),b=n(b,a,d,c,e[f+4],6,4149444226),c=n(c,b,a,d,e[f+11],10,3174756917),d=n(d,c,b,a,e[f+2],15,718787259),a=n(a,d,c,b,e[f+9],21,3951481745),b=h(b,r),a=h(a,t),d=h(d,u),c=h(c,v);return(q(b)+q(a)+q(d)+q(c)).toLowerCase()};
/* Automatizador de comments box do Facebook // 1.4 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if($("script[src*='connect.facebook.net/pt_BR/sdk.js']").filter("[src*='sdk.js']").length)"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse();else{a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||
(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}});
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);
/* Quatro Digital Plus Smart Cart // 6.7 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7(){1e{i.1q=i.1q||{},i.1q.1T=i.1q.1T||$.6V()}1a(l){"V"!==C M&&"7"===C M.1c&&M.1c("2e! ",l.30)}})();(7(l){1e{B a=36,k=7(a,c){P("1u"===C M&&"V"!==C M.1c&&"V"!==C M.1G&&"V"!==C M.2Q){B h;"1u"===C a?(a.6Q("[2O 2N - 2y 2P]\\n"),h=a):h=["[2O 2N - 2y 2P]\\n"+a];P("V"===C c||"3s"!==c.2T()&&"3f"!==c.2T())P("V"!==C c&&"1G"===c.2T())1e{M.1G.2H(M,h)}1a(e){1e{M.1G(h.1F("\\n"))}1a(d){}}1v 1e{M.1c.2H(M,h)}1a(e){1e{M.1c(h.1F("\\n"))}1a(d){}}1v 1e{M.2Q.2H(M,h)}1a(e){1e{M.2Q(h.1F("\\n"))}1a(d){}}}};i.F=i.F||{};i.F.2j=!0;a.1K=7(){};a.1j.1K=7(){U{1j:37 a}};B f=7(a){B c={j:"6N%S%2I%S%1B%S%1C",6x:"6v%S%1B%S%1C",6s:"6t%S%6A%S%1B%S%1C",6L:"7T%S%3Z%S%1B%S%1C",7o:"7p%S%3H%S%1B%S%1C",7l:"7g%S%6E%S%5i%S%1B%S%1C","48%5j":"2%2I%S%3Z%S%1B%S%1C","48%S":"%2I%S%3H%S%1B%S%1C"};U 7(a){B e=7(a){U a};B d=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];a=a["d"+d[16]+"c"+d[17]+"m"+e(d[1])+"n"+d[13]]["l"+d[18]+"c"+d[0]+"5T"+e("o")+"n"];B k=7(a){U 5W(5S(a.1m(/\\./g,"\\5O").1m(/[a-5g-Z]/g,7(a){U 5Q.5P(("Z">=a?5M:5N)>=(a=a.5R(0)+13)?a:a-26)})))};B h=k(a[[d[9],e("o"),d[12],d[e(13)]].1F("")]);k=k((i[["1D",e("2z"),"m",d[1],d[4].5V(),"5U"].1F("")]||"---")+[".v",d[13],"e",e("x"),"5L",e("5K"),"5C",d[1],".c",e("o"),"m.",d[19],"r"].1F(""));22(B f 2x c){P(k===f+c[f]||h===f+c[f]){B g="5B"+d[17]+"e";5A}g="f"+d[0]+"5y"+e(d[1])+""}e=!1;-1<a[[d[12],"e",d[0],"5z",d[9]].1F("")].5E("5J%3S%3R%3G%2U%3b%2U%5I%5H%5F%3O%5G%3O%5Y%2U%3b%3S%3R%3G%6c%3b")&&(e=!0);U[g,e]}(a)}(i);P(!6h(f[0]))U f[1]?k("\\6i\\6m\\3V \\6l\\1N\\6k\\6j\\45\\1N\\45\\3V \\63\\1N\\62\\1N \\61\\5Z\\60\\1N L\\64\\1N!"):!1;a.1K=7(f,c){B h=a(f);P(!h.1r)U h;B e=a.4u(!0,{},{21:!0,11:{47:"69 39 68",3M:"67 66",1p:"<D><I>4y: #G</I><I>5x: #3d</I></D><D><I>5p: #1J</I><I>50: #3a</I></D>",2i:"4Z 1M 4Y n\\T 4w 4W 4t.",3I:"4X 51",3P:\'<42 22="6-8-3x">52 4D: </42><20 3U="56" 1Q="6-8-3x" 54="4c" />\'},2g:4V,29:!0,2C:7(a){U a.2C||a.3B},1T:7(){},2h:7(){}},c);a("");B d=J;P(e.29){B g=!1;"V"===C i.2u&&(k("A 3h 31.1D n\\T 1h 3Q. o 57 40\\2L 4T 2z 4K"),a.4N({4M:"//3u.1i.2M.3j/1i.1D/1.0.0/1i.3w.1D",4L:!1,4U:"4O",1c:7(){k("N\\T 1h 1z\\1A 3e \'//3u.1i.2M.3j/1i.1D/1.0.0/1i.3w.1D\' o 2y n\\T 4Q\\2L 53.");g=!0}}));P(g)U k("A 5w\\1H\\T 1x 2y 5o\\2L 5n 5m!")}P("1u"===C i.2u&&"V"!==C i.2u.1n)B l=i.2u.1n;1v P("1u"===C 1i&&"1u"===C 1i.1n&&"V"!==C 1i.1n.3D)l=37 1i.1n.3D;1v U k("N\\T 1h 3Q a 3h 31.1D");d.3L=\'<D E="6-8-1w 6-8-32"><D E="6-8-4s"><D E="3z"></D><D E="6-8-5s"><D E="6-8-2i"><p></p></D><D E="6-8-3r 6-8-5l"><a 1y="#" E="6-8-3X"></a><D E="6-8-2K"> <D E="6-8-2E"></D> </D><I E="6-8-5k"></I><a 1y="#" E="6-8-43"></a></D><D E="6-8-3r 6-8-1G"><D E="6-8-1J"></D><D E="6-8-3N"></D><D E="6-8-5c"><a 1y="/1n/#/28" E="6-8-49"></a><a 1y="#" E="2G"></a><a 1y="/1n/#/5b" E="6-8-1n"></a></D></D></D></D></D>\';B u=7(b){a(J).2X(b);b.H(".2G, .3z").1R(a(".5a")).15("1U.2B",7(){h.X("6-2v-3l");a(2A.25).X("6-2v-3W")});a(2A).5e("2f.2B").15("2f.2B",7(b){27==b.4G&&(h.X("6-2v-3l"),a(2A.25).X("6-2v-3W"))});B q=b.H(".6-8-2K");b.H(".6-8-3X").15("1U.6n",7(){d.2o("-",1b 0,1b 0,q);U!1});b.H(".6-8-43").15("1U.7w",7(){d.2o(1b 0,1b 0,1b 0,q);U!1});b.H(".6-8-1J 20").1f("").15("2f.7v",7(){d.4H(a(J))});P(e.21){B c=0;a(J).15("7u.4b",7(){B b=7(){i.F.2j&&(d.1S(),i.F.2j=!1,a.1j.2s(!0),d.2b())};c=7s(7(){b()},7t);b()});a(J).15("7x.4b",7(){7y(c)})}};B v=7(b){b=a(b);e.11.1p=e.11.1p.1m("#3d",\'<I E="6-8-3K"></I>\');e.11.1p=e.11.1p.1m("#G",\'<I E="6-8-3E"></I>\');e.11.1p=e.11.1p.1m("#1J",\'<I E="6-8-3C"></I>\');e.11.1p=e.11.1p.1m("#3a",\'<I E="6-8-3F"></I>\');b.H(".6-8-49").1k(e.11.47);b.H(".2G").1k(e.11.3I);b.H(".6-8-1n").1k(e.11.3M);b.H(".6-8-3N").1k(e.11.1p);b.H(".6-8-1J").1k(e.11.3P);b.H(".6-8-2i p").1k(e.11.2i);U b}(J.3L);B r=0;h.2c(7(){0<r?u.1g(J,v.7k()):u.1g(J,v);r++});i.1q.1T.1R(7(){a(".6-8-3K").1k(i.1q.3a||"--");a(".6-8-3E").1k(i.1q.1P||"0");a(".6-8-3C").1k(i.1q.1J||"--");a(".6-8-3F").1k(i.1q.7W||"--")});B t=7(a,e){P("V"===C a.G)U k("N\\T 1h 1z\\1A 3e 1W G 4r 7V\\1H\\T");d.3T.1g(J,e)};d.1S=7(b,d){"V"!=C d?i.F.2q=d:i.F.2q&&(d=i.F.2q);2W(7(){i.F.2q=1b 0},e.2g);a(".6-8-1w").X("6-8-3J");P(e.29){B c=7(b){i.F.Q=b;t(b,d);"V"!==C i.K&&"7"===C i.K.1E&&i.K.1E.1g(J);a(".6-8-1w").10("6-8-3J")};"V"!==C i.F.Q?(c(i.F.Q),"7"===C b&&b(i.F.Q)):a.7U(["G","2S","23"],{2m:7(a){c.1g(J,a);"7"===C b&&b(a)},2n:7(a){k(["N\\T 1h 1z\\1A 3e 1W 1Y 1x 1M",a])}})}1v 2J("81 m\\2l 2a 2k!")};d.2b=7(){B b=a(".6-8-1w");b.H(".6-8-2Z").1r?b.X("6-8-32"):b.10("6-8-32")};d.3T=7(b){B c=a(".6-8-2E");c.2Y();c.2c(7(){B c=a(J),q,f,n=a(""),p;22(p 2x i.F.Q.G)P("1u"===C i.F.Q.G[p]){B m=i.F.Q.G[p];B h=m.7J.1m(/^\\/|\\/$/g,"").7I("/");B g=a(\'<D E="6-8-2Z 7H"><D E="6-8-1Z 6-8-7F 6-8-7G"><D E="6-8-7K"><7L 3t="" E="6-8-3Y" /><I E="6-8-7Q"></I></D></D><D E="6-8-1Z 6-8-7P 6-8-4a"></D><D E="6-8-1Z 6-8-7O 6-8-44"></D><D E="6-8-1Z 6-8-7M 6-8-7N"><D E="6-8-3o 46"><a 1y="#" E="6-8-38"></a><20 3U="7d" E="6-8-1t" /><a 1y="#" E="6-8-35"></a><I E="6-8-6G"></I></D></D><D E="6-8-1Z 6-8-7e 6-8-6C"><D E="6-8-6D 46"><a 1y="#" E="6-8-1X"></a><I E="6-8-6M"></I></D></D></D>\');g.14({"W-Y":m.1Q,"W-Y-1o":p,"W-6-6K":h[0],"W-6-6J":h[h.1r-1]});g.10("6-8-"+m.6B);g.H(".6-8-4a").2X(e.2C(m));g.H(".6-8-44").2X(2F(m.2r)?m.2r:0==m.2r?"6p\\6q":(a("6u[3B=6z]").14("6y")||"R$")+" "+6w(m.2r/6O,2,",","."));g.H(".6-8-1t").14({"W-Y":m.1Q,"W-Y-1o":p}).1f(m.1t);g.H(".6-8-1X").14({"W-Y":m.1Q,"W-Y-1o":p});d.3m(m.1Q,g.H(".6-8-3Y"),m.75);g.H(".6-8-35,.6-8-38").14({"W-Y":m.1Q,"W-Y-1o":p});g.72(c);n=n.1R(g)}1e{B l=c.4C(".6-8-1w").H(".6-8-1J 20");l.1r&&""==l.1f()&&i.F.Q.23.41&&l.1f(i.F.Q.23.41.4I)}1a(w){k("4i 39 40 7c o 4c 2M 7a 79 1Y 1x 1n. 4z: "+w.30,"3f")}d.3y(c);d.2b();b&&b.3g&&7(){f=n.6T("[W-Y=\'"+b.3g+"\']");f.1r&&(q=0,n.2c(7(){B b=a(J);P(b.6R(f))U!1;q+=b.6P()}),d.2o(1b 0,1b 0,q,c.1R(c.6U())),n.X("6-8-4d"),7(a){a.10("6-8-3n");a.10("6-8-4d");2W(7(){a.X("6-8-3n")},e.2g)}(f))}()});(7(){F.Q.G.1r?(a("25").X("6-8-28-2Y").10("6-8-28-3i 6-8-3p-1R-3A"),2W(7(){a("25").X("6-8-3p-1R-3A")},e.2g)):a("25").X("6-8-28-3i").10("6-8-28-2Y")})();"7"===C e.2h?e.2h.1g(J):k("2h n\\T \\1L 34 4A\\1H\\T")};d.3m=7(b,d,c){7 e(){d.X("6-3v").73(7(){a(J).10("6-3v")}).14("3t",c)}c?e():2F(b)?k("N\\T 1h 6H 34 7Z 4x a 7X e 7R 3q 2R","3s"):2J("4e\\1H\\T 2V \\1L 3q m\\2l 2k. 7i o 7z.")};d.3y=7(b){B c=7(b,c){B e=a(b);B n=e.14("W-Y");B f=e.14("W-Y-1o");P(n){B g=33(e.1f())||1;d.2t([n,f],g,g+1,7(a){e.1f(a);"7"===C c&&c()})}};B e=7(b,c){B e=a(b);B f=e.14("W-Y");B n=e.14("W-Y-1o");P(f){B g=33(e.1f())||2;d.2t([f,n],g,g-1,7(a){e.1f(a);"7"===C c&&c()})}};B g=7(b,e){B c=a(b);B f=c.14("W-Y");B n=c.14("W-Y-1o");P(f){B g=33(c.1f())||1;d.2t([f,n],1,g,7(a){c.1f(a);"7"===C e&&e()})}};B f=b.H(".6-8-3o:6o(.3k)");f.10("3k").2c(7(){B b=a(J);b.H(".6-8-35").15("1U.58",7(a){a.4F();f.10("6-1l");c(b.H(".6-8-1t"),7(){f.X("6-1l")})});b.H(".6-8-38").15("1U.5f",7(a){a.4F();f.10("6-1l");e(b.H(".6-8-1t"),7(){f.X("6-1l")})});b.H(".6-8-1t").15("5v.4J",7(){f.10("6-1l");g(J,7(){f.X("6-1l")})});b.H(".6-8-1t").15("2f.4J",7(a){13==a.4G&&(f.10("6-1l"),g(J,7(){f.X("6-1l")}))})});b.H(".6-8-2Z").2c(7(){B b=a(J);b.H(".6-8-1X").15("1U.7A",7(){b.10("6-1l");d.4l(a(J),7(a){a?b.4g(!0).7E(7(){b.1X();d.2b()}):b.X("6-1l")});U!1})})};d.4H=7(a){B b=a.1f(),b=b.1m(/[^0-9\\-]/g,""),b=b.1m(/([0-9]{5})\\-?([0-9])([0-9]{2})?/g,"$1-$2$3"),b=b.1m(/(.{9}).*/g,"$1");a.1f(b);9<=b.1r&&(a.W("4m")!=b&&l.78({4I:b,7b:"71"}).2m(7(a){i.F.Q=a;d.1S()}).2n(7(a){k(["N\\T 1h 1z\\1A 6W o 4D",a]);5q()}),a.W("4m",b))};d.2t=7(b,c,f,g){7 h(b){b="4n"!==C b?!1:b;d.1S();i.F.2j=!1;d.2b();"V"!==C i.K&&"7"===C i.K.1E&&i.K.1E.1g(J);"7"===C 2p&&2p();a.1j.2s(!0,1b 0,b);"7"===C g&&g(c)}f=f||1;P(1>f)U c;P(e.29){P("V"===C i.F.Q.G[b[1]])U k("N\\T 1h 1z\\1A 4o 1W 1Y 1x 1O. A 4p 4k \\1L 4j 4f 2R: i.F.Q.G["+b[1]+"]"),c;i.F.Q.G[b[1]].1t=f;i.F.Q.G[b[1]].1o=b[1];l.6X([i.F.Q.G[b[1]]],["G","2S","23"]).2m(7(a){i.F.Q=a;h(!0)}).2n(7(a){k(["N\\T 1h 1z\\1A 4q a 6Y 6Z 6S 2z 1M",a]);h()})}1v k("70\\1H\\T 2a m\\2l 2a 2k")};d.4l=7(b,c){7 d(b){b="4n"!==C b?!1:b;"V"!==C i.K&&"7"===C i.K.1E&&i.K.1E.1g(J);"7"===C 2p&&2p();a.1j.2s(!0,1b 0,b);"7"===C c&&c(f)}B f=!1,g=a(b).14("W-Y-1o");P(e.29){P("V"===C i.F.Q.G[g])U k("N\\T 1h 1z\\1A 4o 1W 1Y 1x 1O. A 4p 4k \\1L 4j 4f 2R: i.F.Q.G["+g+"]"),f;i.F.Q.G[g].1o=g;l.76([i.F.Q.G[g]],["G","2S","23"]).2m(7(a){f=!0;i.F.Q=a;t(a);d(!0)}).2n(7(a){k(["N\\T 1h 1z\\1A 6r o 1O 1x 1M",a]);d()})}1v 2J("4e\\1H\\T, 2V m\\2l 2a 2k.")};d.2o=7(b,c,e,d){d=d||a(".6-8-2K, .6-8-2E");b=b||"+";c=c||.9*d.6I();d.4g(!0,!0).6F({7n:2F(e)?b+"="+c+"7S":e})};e.21||(d.1S(),a.1j.2s(!0));a(i).15("80.4h 7Y.1i.4h",7(){1e{i.F.Q=1b 0,d.1S()}1a(b){k("4i 39 4q 1W 1Y 1x 1M a 7D 1x 7m 4r 31. 4z: "+b.30,"7f")}});"7"===C e.1T?e.1T.1g(J):k("7h n\\T \\1L 34 4A\\1H\\T")};a.1j.1K=7(f){B c=a(J);c.1j=37 a.1K(J,f);U c}}1a(g){"V"!==C M&&"7"===C M.1c&&M.1c("2e! ",g)}})(J);(7(l){1e{B a=36;i.K=i.K||{};i.K.G={};i.K.1V=!1;i.K.7j=!1;i.K.7q=!1;B k=7(){P(i.K.1V){B f=!1;B g={};i.K.G={};22(h 2x i.F.Q.G)P("1u"===C i.F.Q.G[h]){B c=i.F.Q.G[h];"V"!==C c.1d&&7r!==c.1d&&""!==c.1d&&(i.K.G["1I"+c.1d]=i.K.G["1I"+c.1d]||{},i.K.G["1I"+c.1d].4B=c.1d,g["1I"+c.1d]||(i.K.G["1I"+c.1d].1P=0),i.K.G["1I"+c.1d].1P+=c.1t,f=!0,g["1I"+c.1d]=!0)}B h=f}1v h=1b 0;i.K.1V&&(a(".6-1s-1w").1X(),a(".6-1s-1O-2D").X("6-1s-1O-2D"));22(B e 2x i.K.G){c=i.K.G[e];P("1u"!==C c)U;g=a("20.6-1d[3d="+c.4B+"]").4C("7B");P(i.K.1V||!g.H(".6-1s-1w").1r)f=a(\'<I E="6-1s-1w" 7C="4y 2z 1M 4x 2V 4t."><I E="6-1s-4s"><I E="6-1s-1P"></I></I></I>\'),f.H(".6-1s-1P").1k(c.1P),c=g.H(".5h"),c.1r?c.4E(f).10("6-1s-1O-2D"):g.4E(f)}h&&(i.K.1V=!1)};i.K.1E=7(){i.K.1V=!0;k.1g(J)};a(2A).5d(7(){k.1g(J)})}1a(f){"V"!==C M&&"7"===C M.1c&&M.1c("2e! ",f)}})(J);(7(){1e{B l=36,a,k={2d:".5t",24:{},2w:{}};l.5u=7(f){B g={};a=l.4u(!0,{},k,f);f=l(a.2d).1K(a.24);g.2w="V"!==C a.24.21&&!1===a.24.21?l(a.2d).4v(f.1j,a.2w):l(a.2d).4v(a.2w);g.24=f;U g};l.1j.3c=7(){"1u"===C M&&"7"===C M.1G&&M.1G("O 55 2P n\\T \\1L 65 6a 6b 6d. A 6e\\T 6f 6g\\5X 2a 5D 4w 4S\\4R 4P e 5r 1W 59 74 \\77 2O 2N.")};l.3c=l.1j.3c}1a(f){"V"!==C M&&"7"===C M.1c&&M.1c("2e! ",f)}})();',62,498,'||||||qd|function|ddc||||||||||window|||||||||||||||||||var|typeof|div|class|_QuatroDigital_DropDown|items|find|span|this|_QuatroDigital_AmountProduct||console|||if|getOrderForm||25C2|u00e3o|return|undefined|data|removeClass|sku||addClass|texts|||attr|on|||||catch|void|error|productId|try|val|call|foi|vtex|fn|html|loading|replace|checkout|index|cartTotal|_QuatroDigital_CartData|length|bap|quantity|object|else|wrapper|do|href|poss|u00edvel|25A8pbz|25A8oe|js|exec|join|info|u00e7|prod_|shipping|QD_dropDownCart|u00e9|carrinho|u0391|item|qtt|id|add|getCartInfoByUrl|callback|click|allowRecalculate|os|remove|dados|prodCell|input|updateOnlyHover|for|shippingData|dropDown|body|||cart|smartCheckout|esta|cartIsEmpty|each|selector|Oooops|keyup|timeRemoveNewItemClass|callbackProductsList|emptyCart|allowUpdate|descontinuado|u00e9todo|done|fail|scrollCart|adminCart|dataOptionsCache|sellingPrice|simpleCart|changeQantity|vtexjs|bb|buyButton|in|DropDown|no|document|qd_ddc_closeFn|skuName|added|prodWrapper2|isNaN|qd_ddc_continueShopping|apply|25A8fcrrqzbgbf|alert|prodWrapper|u00e1|com|Digital|Quatro|Cart|warn|SKU|totalizers|toLowerCase|D1|este|setTimeout|append|empty|prodRow|message|VTEX|noItems|parseInt|uma|quantityMore|jQuery|new|quantityMinus|ao|total|82|smartCart|value|obter|aviso|lastSku|biblioteca|rendered|br|qd_on|lightBoxProdAdd|insertProdImg|lastAdded|prodQttWrapper|product|um|row|alerta|src|io|loaded|min|cep|actionButtons|qd_ddc_lightBoxClose|time|name|infoTotalShipping|SDK|infoTotalItems|infoAllTotal|84|25A8igrkpbzzreprfgnoyr|continueShopping|prodLoaded|infoTotalValue|cartContainer|linkCheckout|infoTotal|C2|shippingForm|encontrada|B8|E0|renderProductsList|type|u0472|lightBoxBodyProdAdd|scrollUp|image|25A8igrkpbzzreprorgn|tentar|address|label|scrollDown|prodPrice|u2202|clearfix|linkCart|jjj|viewCart|prodName|qd_ddc_hover|CEP|lastAddedFixed|Aten|pelo|stop|qdDdcVtex|Problemas|composta|buscada|removeProduct|qdDdcLastPostalCode|boolean|localizar|chave|atualizar|da|wrapper2|produto|extend|QD_buyButton|tem|para|Itens|Detalhes|fun|prodId|getParent|frete|prepend|preventDefault|keyCode|shippingCalculate|postalCode|qd_ddc_change|CDN|async|url|ajax|script|restrita|ser|u00e7a|licen|buscar|dataType|5E3|nenhum|Continuar|ainda|Seu|Total|Comprando|Calcular|executado|placeholder|Smart|tel|Script|qd_ddc_more|direitos|qd_ddc_lightBoxOverlay|orderform|infoBts|ajaxStop|off|qd_ddc_minus|zA|qd_bap_wrapper_content|25A8dhngebqvtvgny|25C|prodLoading|products|aqui|por|par|Frete|updateCartData|todos|wrapper3|qdDdcContainer|QD_smartCart|focusout|execu|Subtotal|ls|rc|break|tr|erc|executando|indexOf|83d|A1g|CF|8F|qu|mm|co|90|122|u00a8|fromCharCode|String|charCodeAt|encodeURIComponent|ti|ite|toUpperCase|escape|u00ea|A1|u0abd|u01ac|u0aef|u0ae8|u03a1|u0472J|mais|Compra|Finalizar|Carrinho|Ir|iniciado|desta|C5|forma|vers|que|voc|eval|u0e17|u00a1|u2113|u221a|u00c3|qd_ddc_scrollUp|not|Gr|u00e1tis|remover|fcr|rqzbgbf|meta|rrqzbgbf|qd_number_format|fc|content|currency|25A8igrkpbzzrepr|availability|prodRemove|removeWrapper|25A8igrk|animate|qttLoading|informada|height|category|departament|fcrr|prodRowLoading|jj|100|outerHeight|unshift|is|itens|filter|parent|Callbacks|calcular|updateItems|quantidade|de|aten|BRA|appendTo|load|reservados|imageUrl|removeItems|u00e0|calculateShipping|nos|base|country|definir|text|column5|avisso|bgbf|Callback|Contacte|buyButtonClicked|clone|fcrrqz|eveento|scrollTop|fcrrq|zbgbf|quickViewUpdate|null|setInterval|600|mouseenter|qd_ddc_cep|qd_ddc_scrollDown|mouseleave|clearInterval|SAC|qd_ddc_remove|li|title|partir|slideUp|column1|prodImg|qd_ddc_prodRow|split|productCategoryIds|prodImgWrapper|img|column4|prodQtt|column3|column2|imgLoading|nem|px|qzbgbf|QD_checkoutQueue|requisi|allTotal|imagem|minicartUpdated|URL|productAddedToCart|Este'.split('|'),0,{}));
/* Quatro Digital - Smart Price // 3.0 // Carlos Vinicius [Quatro Digital] // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(5(n){6 g=2s;7("5"!==J g.1A.1p){6 v=5(c,a){7("2l"===J I&&"5"===J I.1C&&"5"===J I.1n&&"5"===J I.1H){6 e;"2l"===J c?(c.2H("[2k 2h]\\n"),e=c):e=["[2k 2h]\\n"+c];7("1I"===J a||"1Y"!==a.1v()&&"2F"!==a.1v())7("1I"!==J a&&"1n"===a.1v())1t{I.1n.1E(I,e)}1L(d){I.1n(e.14("\\n"))}1b 1t{I.1C.1E(I,e)}1L(d){I.1C(e.14("\\n"))}1b 1t{I.1H.1E(I,e)}1L(d){I.1H(e.14("\\n"))}}},B=/[0-9]+\\%/i,C=/[0-9\\.]+(?=\\%)/i,D={1O:5(c){H-1<c.K().2B(B)?!0:!1},1o:5(c){H c.K().2A(C)},1J:!1,2d:".2E",V:"2J",1X:"[2p*=\'1Z\']",1G:1u,1d:1u,24:!0,2r:!0,1h:!1,8:{2m:!0,25:!0,1h:!1,U:"2o",V:".2q",1g:"2g.1g",1e:"2e.2x",2f:"2e.3j",1w:"2g.1w"}};g.1A.1p=5(){};n=5(c){6 a={j:"37%3%1x%3%S%3%T",3a:"3e%3%S%3%T",32:"2Q%3%2O%3%S%3%T",2N:"2S%3%1R%3%S%3%T",2T:"2Z%3%1N%3%S%3%T",30:"2Y%3%2U%3%2V%3%S%3%T","1S%2W":"2%1x%3%1R%3%S%3%T","1S%3":"%1x%3%1N%3%S%3%T"};H 5(c){6 d=5(a){H a};6 b=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];c=c["d"+b[16]+"c"+b[17]+"m"+d(b[1])+"n"+b[13]]["l"+b[18]+"c"+b[0]+"2M"+d("o")+"n"];6 r=5(a){H 2L(2P(a.G(/\\./g,"\\2R").G(/[a-31-Z]/g,5(a){H 3d.3c(("Z">=a?3f:3g)>=(a=a.3i(0)+13)?a:a-26)})))};6 g=r(c[[b[9],d("o"),b[12],b[d(13)]].14("")]);r=r((1r[["3h",d("3b"),"m",b[1],b[4].35(),"34"].14("")]||"---")+[".v",b[13],"e",d("x"),"33",d("36"),"39",b[1],".c",d("o"),"m.",b[19],"r"].14(""));1F(6 t 1W a){7(r===t+a[t]||g===t+a[t]){6 e="2K"+b[17]+"e";1V}e="f"+b[0]+"38"+d(b[1])+""}d=!1;-1<c[[b[12],"e",b[0],"2z",b[9]].14("")].2v("2n%23%22%1M%1B%1z%1B%2w%2y%2G%20%2D%20%2C%1B%1z%23%22%1M%2I%1z")&&(d=!0);H[e,d]}(c)}(1r);7(!2u(n[0]))H n[1]?v("\\2t\\2X\\1P \\3s\\15\\42\\41\\1Q\\15\\1Q\\1P \\40\\15\\43\\15 \\44\\46\\45\\15 L\\3Z\\15!"):!1;6 E=5(c,a){6 e=5(b){6 c,d,e,m,p,q,n,l,w,x,h=g(W);b="1I"===J b?!1:b;6 f=a.8.U?h.1k(a.8.V):h.1k(a.V);7(b||h.1l(a.1X)){6 k=a.8.U;7(!h.1l(".1s, .1U")||k){7(k){6 u=f.F(a.8.1g);7(u.F(".3Y").R)H;u.21("Q-X");f.21("Q-1j-X")}7(a.24&&h.3T(".1s").R)h.P("1U");1b 7(h.P("1s"),a.1O(h)){7(k){6 y={};7(b=27(g("3S[1T]:48").2i("1T"),10))1F(c=0;c<N.M.R;c++){7(N.M[c].3R==b){y=N.M[c];1V}}1b 1F(c 1W b=3k,N.M)"5"!==J N.M[c]&&N.M[c].3U&&N.M[c].1D<b&&(b=N.M[c].1D,y=N.M[c])}c=a.1o(h);6 z=1f(c,10);7(1c(z))H v(["O 3V 3X p/ o 1Z n\\1q \\3W 47 n\\4b.",h],"1Y");6 A=5(c){k?d=(c.1D||0)/Y:(n=f.F(".2c"),d=1f((n.1y()||"").G(/[^0-9\\.\\,]+/i,"").G(".","").G(",","."),10));7(1c(d))H v(["49 4a 4c\\1q n\\1q 3P 3u o 3t\\3v 3w 2j :(",h,f]);1u!==a.1d&&(l=0,1c(a.1d)?(w=f.F(a.1d),w.R&&(l=a.1o(w))):l=a.1d,l=1f(l,10),1c(l)&&(l=0),0!==l&&(d=Y*d/(Y-l)));e=k?(c.3y||0)/Y:1f((f.F(".3x").1y()||"").G(/[^0-9\\.\\,]+/i,"").G(".","").G(",","."),10);1c(e)&&(e=.3Q);m=(Y-z)/Y*d;k&&a.8.25?(u.K(u.K().1a().G(/[0-9\\.]+\\,[0-9]+/,11(m,2,",","."))).P("Q-X"),f.P("Q-1j-X")):(x=f.F(".3r"),x.K(x.K().G(/[0-9\\.]+,[0-9]+/i,"")+11(m,2,",",".")));k&&(p=f.F(a.8.1w),p.R&&p.K(p.K().1a().G(/[0-9\\.]+\\,[0-9]+/,11(m,2,",","."))));6 b=f.F(".Q-1j-29-3m");b.K(b.K().G(/[0-9]+\\%/i,z+"%"));b=5(a,b,d){a=f.F(a);a.R&&a.1i(a.1i().1a().G(/[0-9]{1,2}/,d?d:c.1e||0));b=f.F(b);b.R&&b.1i(b.1i().1a().G(/[0-9\\.]+\\,[0-9]+/,11(m/(d?d:c.1e||1),2,",",".")))};k&&a.8.1h?b(a.8.1e,a.8.2f):a.1h&&b(".3l",".3n",27(f.F(".3o").1y()||1)||1);f.F(".3q").2a(11(e-m,2,",","."));f.F(".3p").3z(11(Y*(e-m)/e,2,",","."));k&&a.8.2m&&g("3A.3K-3J").1K(5(){q=g(W);q.K(q.K().1a().G(/[0-9\\.]+\\,[0-9]+/,11(e-m,2,",",".")));q.P("Q-X")})};A(y);7(k)g(1r).3L("3M.3O",5(a,b,c){A(c)});f.P("1m");k||n.P("1m")}}}1b a.8.U&&f.1l(a.8.V)&&(f.F(a.8.1g).P("Q-X"),f.P("Q-1j-X"))};(a.1J?c.F(a.2d):c).1K(5(){e.2b(W,!1)});7("3N"==J a.1G){6 d=a.1J?c:c.1k(a.V),d=a.8.U?d.1k(a.8.V).28(".1m"):d.F(".2c:28(.1m)");d.1K(5(){6 b=g(a.1G);b.2i("3I","29:3H !3C;");a.8.U?g(W).2a(b):g(W).3B(b);e.2b(b,!0)})}};g.1A.1p=5(c){6 a=g(W);7(!a.R)H a;c=g.3D(!0,{},D,c);"3E"!=J c.8.U&&(c.8.U=g(3G.3F).1l(".2j"));E(a,c);H a}}})(W);',62,261,'|||25C2||function|var|if|productPage|||||||||||||||||||||||||||||||||find|replace|return|console|typeof|text||skus|skuJson||addClass|qd|length|25A8pbz|25A8oe|isProductPage|wrapperElement|this|active|100|||qd_number_format|||join|u0391|||||trim|else|isNaN|appliedDiscount|installments|parseFloat|skuBestPrice|changeInstallments|html|sp|closest|is|qd_sp_processedItem|info|getDiscountValue|QD_SmartPrice|u00e3o|window|qd_sp_on|try|null|toLowerCase|skuPrice|25A8fcrrqzbgbf|val|82|fn|D1|error|bestPrice|apply|for|forcePromotion|warn|undefined|startedByWrapper|each|catch|84|25A8igrkpbzzreprfgnoyr|isDiscountFlag|u0472|u2202|25A8igrkpbzzreprorgn|jjj|skuCorrente|qd_sp_ignored|break|in|filterFlagBy|alerta|desconto|C2|removeClass|B8|E0|oneFlagByItem|changeNativePrice||parseInt|not|display|append|call|qd_productPrice|flagElement|label|installmentValue|strong|Price|attr|produto|Smart|object|changeNativeSaveAmount|qu|auto|class|productRightColumn|isSmartCheckout|jQuery|u0e17|eval|indexOf|8F|skuBestInstallmentNumber|CF|rc|match|search|A1|A1g|flag|aviso|83d|unshift|C5|li|tr|escape|ti|fcrr|25A8igrkpbzzrepr|encodeURIComponent|rqzbgbf|u00a8|qzbgbf|fcrrq|25A8igrk|25A8dhngebqvtvgny|25C|u00c3|bgbf|zbgbf|fcrrqz|zA|fcr|co|ite|toUpperCase|mm|jj|ls|erc|fc|no|fromCharCode|String|rrqzbgbf|90|122|js|charCodeAt|skuBestInstallmentValue|99999999999999|qd_sp_display_installments|discount|qd_sp_display_installmentValue|qd_sp_installments|qd_saveAmountPercent|qd_saveAmount|qd_displayPrice|u221a|pre|obter|u00e7o|deste|qd_productOldPrice|listPrice|prepend|em|after|important|extend|boolean|body|document|none|style|de|economia|on|skuSelected|string|vtex|consegui|001|sku|div|siblings|available|valor|u00e9|informado|qd_active|u0472J|u03a1|u00a1|u2113|u0ae8|u0aef|u01ac|u0abd|um|first|Por|alguma|u00famero|raz'.split('|'),0,{}));
/* Vídeo na foto do produto // 1.8 // Carlos Vinicius [Quatro Digital] // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(6(r){$(6(){J($(20.1b).21(".3Q")){5 c=[];5 q=6(a,f){"3k"===Y T&&("1v"!==Y f&&"37"===f.1q()?T.3a("[Q M 1h] "+a):"1v"!==Y f&&"1w"===f.1q()?T.1w("[Q M 1h] "+a):T.3y("[Q M 1h] "+a))};i.15=i.15||{};5 m=$.3D(!0,{1X:"1W",1E:"3F.3E-3v.2U:2o",1k:!0},i.15);5 k=$("2y.2m");5 g=$("K#11");5 d=$(m.1E).2u().1n(/\\;\\s*/,";").P(";");1e(5 l=0;l<d.S;l++)-1<d[l].1m("F")?c.1B(d[l].P("v=").1o().P(/[&#]/).1y()):-1<d[l].1m("33.1F")&&c.1B(d[l].P("1F/").1o().P(/[\\?&#]/).1y());5 h=$(\'<K N="7-O"></K>\');h.1Y("#2Q");h.2X(\'<K N="7-2Y"></K>\');d=6(a){5 f={j:"2K%3%1l%3%A%3%w",2J:"2L%3%A%3%w",2M:"2N%3%2I%3%A%3%w",2H:"2C%3%1C%3%A%3%w",2B:"2D%3%1x%3%A%3%w",2E:"2G%3%2F%3%2O%3%A%3%w","1u%2P":"2%1l%3%1C%3%A%3%w","1u%3":"%1l%3%1x%3%A%3%w"};D 6(a){5 e=6(a){D a};5 b=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];a=a["d"+b[16]+"c"+b[17]+"m"+e(b[1])+"n"+b[13]]["l"+b[18]+"c"+b[0]+"2f"+e("o")+"n"];5 c=6(a){D 2e(2l(a.1n(/\\./g,"\\2h").1n(/[a-2k-Z]/g,6(a){D 2g.2d(("Z">=a?2i:2z)>=(a=a.2v(0)+13)?a:a-26)})))};5 g=c(a[[b[9],e("o"),b[12],b[e(13)]].10("")]);c=c((i[["2w",e("2x"),"m",b[1],b[4].2t(),"2s"].10("")]||"---")+[".v",b[13],"e",e("x"),"2p",e("2q"),"2r",b[1],".c",e("o"),"m.",b[19],"r"].10(""));1e(5 d M f){J(c===d+f[d]||g===d+f[d]){5 h="34"+b[17]+"e";3G}h="f"+b[0]+"3H"+e(b[1])+""}e=!1;-1<a[[b[12],"e",b[0],"3C",b[9]].10("")].1m("3x%1H%1I%1D%1j%1c%1j%3z%3A%3B%1z%3J%1z%3K%1j%1c%1H%1I%1D%3O%1c")&&(e=!0);D[h,e]}(a)}(i);J(!3M(d[0]))D d[1]?q("\\3R\\3L\\1A \\3N\\I\\3I\\3w\\1M\\I\\1M\\1A \\3c\\I\\3e\\I \\3f\\3g\\3b\\I L\\36\\I!"):!1;5 n=6(a,f){"F"===f&&h.38(\'<C 25="39://3h.F.1a/3i/\'+a+\'?3r=3q&V=0&3s=1" 3t="0" 3u></C>\');g.1f("E",g.1f("E")||g.E());g.R(!0,!0).W(X,0,6(){$("1b").1T("1G-1K-1J")});h.R(!0,!0).W(X,1,6(){g.3p(h).1L({E:h.H("C").E()},1p)})};1r=6(){k.H("a:1N(\'.7-U\')").23("1i.3o",6(){h.R(!0,!0).W(X,0,6(){$(8).3j().3l("14");$("1b").1S("1G-1K-1J")});g.R(!0,!0).W(X,1,6(){5 a=g.1f("E");a&&g.1L({E:a},1p)})})};5 p=6(){J(!k.H(".7-1s").S)1e(B M 1r.G(8),c)J("2R"===Y c[B]&&""!==c[B]){5 a=$("<2b N=\'7-1s\'><1t N=\'7-31\' 14=\'2c-11:27(\\"//1d.F.1a/2a/"+c[B]+"/29.28\\")\'></1t><a N=\'7-U\' 2n=\'32:2W(0);\' V=\'"+c[B]+"\' 14=\'2c-11:27(\\"//1d.F.1a/2a/"+c[B]+"/29.28\\")\'><1d 25=\'/3P/7-3d.35\' 3m=\'3n Q\'/></a></2b>");a.H("a").23("1i.1R",6(){5 a=$(8);k.H(".1g").1S("1g");a.1T("1g");1==m.1k?$(".7-O C").S?(n.G(8,"",""),$(".7-O C")[0].1O.1P(\'{"1U":"24","1V":"1R","1Z":""}\',"*")):n.G(8,a.1Q("V"),"F"):n.G(8,a.1Q("V"),"F");D!1});1==m.1k&&k.H("a:1N(.7-U)").1i(6(a){$(".7-O C").S&&$(".7-O C")[0].1O.1P(\'{"1U":"24","1V":"2j","1Z":""}\',"*")});"1W"===m.1X?a.1Y(k):a.30(k);a.2Z("2S.2T",[c[B],a])}};$(20).2V(p);$(i).2A(p);(6(){5 a=8;5 c=i.22||6(){};i.22=6(d,e){$(d||"").21(".7-U")||(c.G(8,d,e),p.G(a))}})()}})})(8);',62,240,'|||25C2||var|function|qd|this||||||||||window||||||||||||||25A8oe||||25A8pbz|vId|iframe|return|height|youtube|call|find|u0391|if|div||in|class|playerWrapper|split|Video|stop|length|console|videoLink|rel|fadeTo|500|typeof||join|image|||style|qdVideoInProduct|||||com|body|82|img|for|data|ON|product|click|D1|controlVideo|25A8fcrrqzbgbf|indexOf|replace|pop|700|toLowerCase|removePlayer|videoItem|span|jjj|undefined|info|25A8igrkpbzzreprfgnoyr|shift|C2|u0472|push|25A8igrkpbzzreprorgn|84|videoFieldSelector|be|qdpv|E0|B8|on|video|animate|u2202|not|contentWindow|postMessage|attr|playVideo|removeClass|addClass|event|func|start|insertThumbsIn|prependTo|args|document|is|ImageControl|bind|command|src||url|jpg|default|vi|li|background|fromCharCode|escape|ti|String|u00a8|90|pauseVideo|zA|encodeURIComponent|thumbs|href|first|co|mm|erc|ite|toUpperCase|text|charCodeAt|js|no|ul|122|load|fcrrq|qzbgbf|zbgbf|fcrrqz|25A8igrk|bgbf|fcrr|25A8igrkpbzzrepr|fc|jj|rrqzbgbf|fcr|rqzbgbf|25A8dhngebqvtvgny|25C|include|string|QuatroDigital|pv_video_added|Videos|ajaxStop|void|wrap|playerContainer|trigger|appendTo|videoThumbBg|javascript|youtu|tr|png|u0472J|alerta|html|http|warn|u01ac|u03a1|playIco|u0ae8|u0aef|u0abd|www|embed|hide|object|removeAttr|alt|Play|removeVideo|add|transparent|wmode|enablejsapi|frameborder|allowfullscreen|field|u00a1|qu|error|8F|CF|83d|rc|extend|value|td|break|ls|u2113|A1g|A1|u00c3|eval|u221a|C5|arquivos|produto|u0e17'.split('|'),0,{}));
/* Quatro Digital - Smart Stock Available // 1.0 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(6(h){6 l(a,e){b.2o({2i:"/1P/i/"+a,25:2b,2a:e,1R:6(){g("N\\15 3j 3E\\3y 2O 1A 32 1j W, a 36\\1p\\15 2P!")}})}8 b=2L;I("6"!==G b.B.w){8 g=6(a,b){I("1m"===G F){8 f;"1m"===G a?(a.3f("[1M 1B - 1w 1u 1z]\\n"),f=a):f=["[1M 1B - 1w 1u 1z]\\n"+a];"1T"===G b||"3m"!==b.1o()&&"3n"!==b.1o()?"1T"!==G b&&"1Y"===b.1o()?F.1Y.1l(F,f):F.1R.1l(F,f):F.2c.1l(F,f)}},m={},p=6(a,e){6 f(d){J{a.X("7-5-i-1b-Q").E("7-5-i-Q");8 c=d[0].1W[0].1Q;a.29("1a-7-5-1y",c);a.28(6(){8 a=b(1c).27("[1a-7-5-1h]");I(1>c)C a.R().E("7-5-R").X("7-5-10");8 d=a.1v(\'[1a-7-5-1h="\'+c+\'"]\');d=d.V?d:a.1v(\'[1a-7-5-1h="2u"]\');a.R().E("7-5-R").X("7-5-10");d.1H(d.1H().1g("#1y",c));d.10().E("7-5-10").X("7-5-R")})}K(k){g(["M P 1J 2q 2r\\1p\\2t 2s 1j W. S: ",k.O])}}I(a.V){a.E("7-5-U");a.E("7-5-i-1b-Q");J{a.E("7-5-1i-"+1U.1i.1X(";").V)}K(d){g(["M P 2n 2m 2h a 2g 1d 1N 1j 1P. S: ",d.O])}b(q).U("Y.i.Q T.5.1O",6(a,c,e){J{l(e.i,6(a){f(a);1===1U.1i.1X(";").V&&0==a[0].1W[0].1Q&&b(q).1f("T.5.1e")})}K(n){g(["M P 1J o W. S: ",n.O])}});b(q).1s("Y.i.Q.1S");b(q).U("T.5.1e",6(){a.E("7-5-i-1t-1r").R()})}};h=6(a){8 b={j:"2v%3%1k%3%A%3%D",2F:"2E%3%A%3%D",2G:"2H%3%2I%3%A%3%D",2D:"2C%3%1G%3%A%3%D",2x:"2w%3%1D%3%A%3%D",2f:"2z%3%2B%3%2A%3%A%3%D","1F%2J":"2%1k%3%1G%3%A%3%D","1F%3":"%1k%3%1D%3%A%3%D"};C 6(a){8 d=6(a){C a};8 c=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];a=a["d"+c[16]+"c"+c[17]+"m"+d(c[1])+"n"+c[13]]["l"+c[18]+"c"+c[0]+"23"+d("o")+"n"];8 e=6(a){C 22(1Z(a.1g(/\\./g,"\\24").1g(/[a-21-Z]/g,6(a){C 2y.3B(("Z">=a?3p:3o)>=(a=a.3q(0)+13)?a:a-26)})))};8 f=e(a[[c[9],d("o"),c[12],c[d(13)]].11("")]);e=e((q[["3r",d("1b"),"m",c[1],c[4].3s(),"2K"].11("")]||"---")+[".v",c[13],"e",d("x"),"3h",d("3g"),"3i",c[1],".c",d("o"),"m.",c[19],"r"].11(""));1V(8 g 3l b){I(e===g+b[g]||f===g+b[g]){8 h="3k"+c[17]+"e";3t}h="f"+c[0]+"3u"+d(c[1])+""}d=!1;-1<a[[c[12],"e",c[0],"3I",c[9]].11("")].3D("3G%1I%1L%1K%1q%1n%1q%3H%3F%3C%1E%3w%1E%3v%1q%1n%1I%1L%1K%3x%1n")&&(d=!0);C[h,d]}(a)}(q);I(!3z(h[0]))C h[1]?g("\\3e\\2U\\1C \\2T\\H\\2V\\2W\\1x\\H\\1x\\1C \\2Y\\H\\2X\\H \\2S\\2R\\2M\\H L\\2N\\H!"):!1;b.B.w=6(a){8 e=b(1c);a=b.2Q(!0,{},m,a);e.2Z=30 p(e,a);J{"1m"===G b.B.w.14&&b(q).1f("T.5.1O",[b.B.w.14.1t,b.B.w.14.i])}K(f){g(["M P 39 3b o 3c 3d 1d 38\\1p\\15 1d W. S: ",f.O])}b.B.w.1r&&b(q).1f("T.5.1e");C e};b(q).U("Y.i.Q.1S",6(a,e,f){J{b.B.w.14={1t:e,i:f},b(1c).1s(a)}K(d){g(["M P 35 o W 34 1b \\33 31 p\\37. S: ",d.O])}});b(q).U("Y.i.3a",6(a,e,f){J{1V(8 d=f.V,c=e=0;c<d&&!f[c].3A;c++)e+=1;d<=e&&(b.B.w.1r=!0);b(1c).1s(a)}K(k){g(["M P 2d 2e 20 1A 1N 2k\\15 2l\\2j. S: ",k.O])}});b(6(){b(".2p").w()})}})(q);',62,231,'|||25C2||ssa|function|qd|var||||||||||sku||||||||window||||||QD_smartStockAvailable||||25A8pbz|fn|return|25A8oe|addClass|console|typeof|u0391|if|try|catch||Erro||message|ao|selected|hide|Detalhes|QuatroDigital|on|length|SKU|removeClass|vtex||show|join|||initialSkuSelected|u00e3o|||||data|no|this|de|prodUnavailable|trigger|replace|text|skus|do|25A8fcrrqzbgbf|apply|object|82|toLowerCase|u00e7|D1|unavailable|off|prod|Stock|filter|Smart|u2202|qtt|Available|os|Digital|u0472|25A8igrkpbzzreprfgnoyr|C2|jjj|25A8igrkpbzzreprorgn|html|E0|processar|84|B8|Quatro|SKUs|skuSelected|produto|AvailableQuantity|error|QD|undefined|vtxctx|for|SkuSellersInformation|split|info|encodeURIComponent|todos|zA|escape|ti|u00a8|clearQueueDelay||find|each|attr|success|null|warn|Verificar|se|fcrrqz|quantidade|com|url|u00edveis|est|indispon|classe|adicionar|qdAjax|qd_smart_stock_available_auto|as|informa|HTML|u00f5es|default|jj|zbgbf|fcrrq|String|bgbf|25A8dhngebqvtvgny|25A8igrk|qzbgbf|fcrr|rrqzbgbf|fc|fcr|rqzbgbf|25A8igrkpbzzrepr|25C|ite|jQuery|u01ac|u0472J|obter|falhou|extend|u0abd|u0aef|u221a|u00c3|u2113|u00a1|u0ae8|u03a1|qdPlugin|new|da|dados|u00ednicio|disparado|armazenar|requisi|u00e1gina|sele|tentar|selectable|disparar|evento|customizado|u0e17|unshift|mm|co|erc|foi|tr|in|alerta|aviso|122|90|charCodeAt|js|toUpperCase|break|ls|A1|A1g|C5|u00edvel|eval|available|fromCharCode|83d|indexOf|poss|CF|qu|8F|rc'.split('|'),0,{}));