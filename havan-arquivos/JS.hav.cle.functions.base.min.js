/**
* Funções base
*/
if("function"!==typeof(String.prototype.trim)) String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");};
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

/* Smart Tabs - Automatização de Abas // Carlos Vinicius -  Quatro Digital // 1.4 // Todos os direitos reservados */
$(function(){var g;g={tabsWithShelf:function(){$(".qd-smartTabsCollections").each(function(){var c,a,b;c=$(this);a=c.find(".qd-tabNav");b=0;c.find(".qd-collections >div").each(function(){var c,d;c=$(this).addClass("qd-tabContent").addClass("qd_itemContent-"+b);d=$("<li class='qd_itemTitle-"+b+"'></li>").append($("<span></span>").html(c.find(">h2").html()||""));a.append(d);0===b&&(d.addClass("qd-activeTab"),c.addClass("qd-activeContent"));b++});a.find(">li:last").addClass("last");c.addClass("qd-smartTabs")})},
configs:function(c){if(c.length){var a,b,e,d;a=c.attr("data-tabs")||"";c={hideEmpty:null};a=a.split(/\;\s*/);for(b in a)"string"===typeof a[b]&&""!==a[b]&&(e=a[b].split(":"),d=e.shift(),"hideEmpty"===d?c.hideEmpty=e.pop().trim():"showCallback"===d&&(c.showCallback=window[e.pop().trim()]||null));return c}},tabs:function(){$(".qd-smartTabs").each(function(){function c(){var c=a.find(".qd-activeTab");"function"===typeof e.showCallback&&c.length&&e.showCallback(c,a.find(".qd-activeContent"))}var a,b,
e,d,f,k;a=$(this);e=g.configs(a);b=a.find(".qd-tabNav");if(a.find(".box-banner").length){var h=$('<ul class="qd-tabNav"/>').appendTo(a);k=a.find(".box-banner");k.each(function(c,d){var b=$(d);b.addClass("qd-tabContent");h.append("<li>"+b.find("img").attr("alt")+"</li>");b.appendTo(a)});h.find("li:first").addClass("qd-activeTab");a.find(".box-banner:first").addClass("qd-activeContent");h.children("li").bind("click",function(){var b=$(this);if(b.hasClass("qd-activeTab"))return!1;h.find("li").removeClass("qd-activeTab");
b.addClass("qd-activeTab");d=a.find(".qd-tabContent");f=d.eq(b.index());f.is(".qd-activeContent")||(d.hide().removeClass("qd-activeContent"),f.fadeTo(300,1).addClass("qd-activeContent"),c())})}b.children("li").bind("click",function(){var e=$(this);if(e.hasClass("qd-activeTab"))return!1;b.find("li").removeClass("qd-activeTab");e.addClass("qd-activeTab");d=a.find(".qd-tabContent");f=d.eq(e.index());f.is(".qd-activeContent")||(d.hide().removeClass("qd-activeContent"),f.fadeTo(300,1).addClass("qd-activeContent"),
c())});"false"!==e.hideEmpty&&(d=a.find(".qd-tabContent"),d.each(function(){var a;a=$(this);0<a.text().trim().length||(a.addClass("qd-noContent").hide(),b.children("li:eq("+d.index(a)+")").addClass("qd-noContent").hide())}),b.children("li:not(.qd-noContent):first").trigger("click"));c()})}};g.tabsWithShelf();g.tabs()});

try {
	var Common = {
		run: function() {},
		init: function() {
			Common.qdAmazingMenu();
			Common.qdCallSmartCart();
			Common.bannersCount();
			Common.bodyDataQDScrollT();
			Common.qdUserLinksMobileActive();
			Common.qdMiniCartShowMobile();
			Common.chat();
			Common.vtexBindQuickViewDestroy();
			Common.applyAmazingMenuMobile();
			Common.showFooterLinks();

			if(!$(document.body).is(".qd-shelf-colors")){
				Common.shelfColors();			
			}
		},
		ajaxStop: function() {
			if(!$(document.body).is(".qd-shelf-colors")){
				Common.shelfColors();			
			}
		},
		windowOnload: function() {},
		vtexBindQuickViewDestroy: function() {
			window.bindQuickView = function() {};
		},
		chat:function(){
			// Function to toggle active class on chat container
			$('.footer-qd-v1-chat-header:not(.qd-on)').addClass('qd-on').on('click', function() {
				$('.footer-qd-v1-chat').toggleClass('active');
				return false;
			});

			$('.footer-qd-v1-btn:not(.qd-on)').addClass('qd-on').on('click', function() {
				window.open('https://www12.directtalk.com.br/chat31/?idd=1F520090798CE01741EB', 'Chat Online Havan','left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
				return false;
			});
			// End
		},

		// applyBlackFridayV1: function(){
		// 	$('body').addClass('blackfriday-v1');

		// 	if ($("body").hasClass("blackfriday-v1")) {
		// 		$('.header-qd-v2-logo').html('<a href="/"><img src="//havan.vteximg.com.br/arquivos/qd-header-logo-blackfriday-v1.png" alt="Havan"></a>');
		// 		$('.footer-qd-v2-logo').html('<img src="//havan.vteximg.com.br/arquivos/qd-footer-logo-blackfriday-v1.png" alt="Havan">');
		// 	}
		// },

		// applyBlackFridayV2: function(){
			
		// 	if ($("body").hasClass("home-bf")) {
		// 		$('body').addClass('blackfriday-v2');
		// 		$('.header-qd-v2-logo').html('<a href="/"><img src="//havan.vteximg.com.br/arquivos/qd-header-logo-blackfriday-v2.png" alt="Havan"></a>');
		// 		$('.footer-qd-v2-logo').html('<img src="//havan.vteximg.com.br/arquivos/qd-footer-logo-blackfriday-v2.png" alt="Havan">');
		// 	}
		// },

		applyAmazingMenuMobile: function() {
			var wrapper = $('.footer-qd-v2-content .qd-v2-spacing-mobile');

			wrapper.find('> ul > li > ul').prepend(function(){return $(this).prev().clone().wrap('<li></li>').parent()});

			wrapper.QD_amazingMenu({
				callback: function() {
					$('<span class="qd-am-dropdown-trigger"><i class="fa fa-angle-right"></i></span>').appendTo(wrapper.find('.qd-am-has-ul')).click(function() {
						var $t = $(this);
						$.merge($t.parent(), $t.closest('ul')).toggleClass('qd-am-is-active');

						$t.filter(function(){return !$(this).closest('ul').is('.qd-amazing-menu');}).siblings('ul').stop(true, true).slideToggle();
					});

					wrapper.find('> ul > li > .qd-am-dropdown-trigger').click(function() {
						$('.header-qd-v1-amazing-menu-mobile-wrapper, .header-qd-v2-amazing-menu-mobile-wrapper').addClass('qd-am-is-active');
						$('.header-qd-v1-amazing-menu-mobile-wrapper, header-qd-v2-amazing-menu-mobile-wrapper').animate({
				          scrollTop: 0
				        }, 200);
					});

					wrapper.find('> ul > li > ul > li:first-child').click(function(e){
						e.preventDefault();
						$(this).parents(".qd-am-is-active").removeClass('qd-am-is-active');
					});
				}
			});

			$('.header-qd-v1-amazing-menu-trigger, .header-qd-v2-amazing-menu-trigger').click(function(evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-am-on');
			});

			$('.header-qd-v1-amazing-menu-mobile-wrapper .header-qd-v1-user-message, .header-qd-v2-amazing-menu-mobile-wrapper .header-qd-v2-user-message').on('click', 'a#login', function() {
				$(document.body).removeClass('qd-am-on');
			});
		},
		showFooterLinks: function () {
			$('.footer-qd-v2-nav-links > ul > li').click(function (e) {
				var $t = $(this);
				$t.toggleClass('qd-is-active');
				$t.find('> ul').toggleClass('qd-is-active');
			});
		},
		setIframeSize: function(size){
			$(".shelf-qd-v1-buy-button-modal iframe").height(size);
		},
		qdCallSmartCart: function() {
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
					buyButton: "body.qd-modal-sku .buy-button"
				}
			});

			// Callback do Quick View
			window._QuatroDigital_prodBuyCallback = function(jqXHR, textStatus, prodLink, skus){
				$.fn.simpleCart(true);
				$(".shelf-qd-v1-buy-button-modal").modal("hide");
				$(window).trigger("QuatroDigital.qd_bb_prod_add", [new $, skus[0] || 0]);
			};
		},
		qdUserLinksMobileActive : function() {
			$(".header-qd-v1-mobile .header-qd-v1-user-links > ul > li, .header-qd-v2-mobile .header-qd-v2-user-links > ul > li").click(function(event) {
				$(this).toggleClass('active-menu-mobile');
			});
		},
		shelfColors: function() {
			skuRadioDepartaments = {
				'Adega': true,
				'Aparadores de Cerca': true,
				'Aparadores de Grama': true,
				'Aquecedor': true,
				'Assadores e Frangueiras': true,
				'Carregador': true,
				'Centrífuga de Roupa': true,
				'Cervejeira': true,
				'Climatizadores': true,
				'Coifa': true,
				'Colchões Elétricos': true,
				'Cortador de Cabelos': true,
				'Cortadores de Grama': true,
				'Depurador': true,
				'Ducha': true,
				'Eletro-Eletronicos': true,
				'Eletroportáteis': true,
				'Ferramentas': true,
				'Filtro de Piscina': true,
				'Forno de Microondas': true,
				'Forno Elétrico': true,
				'Frigobar': true,
				'Grampeador': true,
				'Juicer': true,
				'Lava e Seca': true,
				'Lava-louças': true,
				'Lavadoras de Alta Pressão': true,
				'Lavadoras de Roupa': true,
				'Luminárias Lumifácil': true,
				'Lâmpada de LED': true,
				'Massageadores': true,
				'Modelador': true,
				'Máquina de gelo': true,
				'Passadeira': true,
				'Piscina com Filtro': true,
				'Portátil': true,
				'Processador': true,
				'Purificador': true,
				'Refrigerador': true,
				'Secador': true,
				'Secadoras de Roupa': true,
				'Sopradores de Folhas': true,
				'Torneira': true,
				'Ventilador de Coluna': true,
				'Ventilador de Mesa': true,
				'Ventilador de Teto': true,
				'Moda': true
			};

			$('.prateleira:not([id*="ResultItems"]) li[layout]:not(.qd-sku-colors-on)').addClass('qd-sku-colors-on').each(function() {
				var $t = $(this);

				if(skuRadioDepartaments[$t.find('.qd-departament-name').val() || '-'] || skuRadioDepartaments[$t.find('.qd-category-name').val() || '-']){
					// $t.closest('ul').QD_coresPrateleira({
					// 	checkDuplicateUri : false,
					// 	thumbsQuantity: 3,
					// 	minSkuQttShow: 1,
					// 	dimensions: ["Escolha a Voltagem"],
					// 	thumbSize: {
					// 		width: 40,
					// 		height: 40
					// 	}
					// });
				}
				else{
					$t.closest('ul').QD_coresPrateleira({
						groupSkuByDimension: false,
						checkDuplicateUri : false
					});
				}
			});
		},
		bodyDataQDScrollT: function() {
			$(document.body).attr('data-qd-scroll-limit', '180');
		},
		qdMiniCartShowMobile: function() {
			var wrapper = $(".smart-cart-qd-v1-wrapper, .smart-cart-qd-v2-wrapper");

			$(".header-qd-v1-mini-cart, .header-qd-v2-mini-cart").click(function(evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-cart-on');

				wrapper.find(".qd-ddc-prodWrapper").css('max-height', $(window).height() - 193);
			});

			$(".components-qd-v1-overlay, .components-qd-v2-overlay, .qd_ddc_lightBoxClose").click(function(evt){
				$(document.body).removeClass('qd-cart-on');
			});
		},
		qdAmazingMenu: function() {
			var wrapperAmazingMenuMobile = $(".header-qd-v1-main-amazing-menu-mobile, .header-qd-v2-main-amazing-menu-mobile");

			$('.header-qd-v1-main-amazing-menu, .header-qd-v2-main-amazing-menu').QD_amazingMenu();

			// Amazing Menu Responsivo
			wrapperAmazingMenuMobile.find("> ul > li").each(function() {
				var $t = $(this);

				if ($t.find('> ul').length)
					$t.addClass('li-son');
			});

			wrapperAmazingMenuMobile.find("> ul > li.li-son > a, > ul > li.li-son > p").click(function(evt) {
				evt.preventDefault();
				var $t = $(this);

				$t.parent().find("> ul").stop(true, true).slideToggle(function(){
					$t.parent().toggleClass('li-son-active');
				});
			});

			wrapperAmazingMenuMobile.after('<span class="header-qd-v1-main-amazing-menu-mobile-close header-qd-v2-main-amazing-menu-mobile-close"><i class="fa fa-times-circle" aria-hidden="true"></i></span>');

			$(".header-qd-v1-amazing-menu-toggle, .header-qd-v2-amazing-menu-toggle").click(function(){
				$("body").toggleClass('qd-am-on');
			});

			$(".components-qd-v1-overlay, .header-qd-v1-main-amazing-menu-mobile-close, .header-qd-v2-main-amazing-menu-mobile-close").click(function(){
				$("body").removeClass('qd-am-on');
			});
		},
		bannersCount: function() {
			$(".box-banner").parent().each(function() {
				var $t = $(this);
				$t.addClass("qdBannerCount-" + $t.find(".box-banner").length);
			});
		},
		buyInShelf: function() {
			var fn = function(){
				$(".shelf-qd-v1-buy-button .btn-add-buy-button-asynchronous:not(.remove-href)").not('.qd-on-bb').addClass("qd-on-bb").click(function(e) {
					e.preventDefault();
					var $t = $(this);

					Common.buyInShelfOpenModal(
						$t.getParent(".wrapper-buy-button-asynchronous").find("input[class*='buy-button-asynchronous-product-url']" || "").attr("class").replace(/[^0-9]+/gi, ""),
						$t.getParent(".shelf-qd-v1-buy-button").find(".qd-sq-quantity").val() || 0,
						$t.attr('href') || ""
					);
				});
			};
			fn();

			var modal = $(".qd-v1-modal");

			// Ações
			modal.on("hidden.bs.modal", function(){
				modal.removeClass("shelf-qd-v1-buy-button-modal");
				modal.find(".modal-body").empty();
				modal.find(".modal-header .close").empty();
				modal.find(".modal-footer").empty();
			});

			// No callback do infinity scroll
			$(window).on("QuatroDigital.is_Callback", function(){
				fn();
			});
		},
		buyInShelfOpenModal: function(productId, qty, urlProduct){
			var modal = $(".qd-v1-modal");

			modal.addClass("shelf-qd-v1-buy-button-modal");

			// Header
			var header = modal.find(".modal-header");
			var modalContent = header.closest(".modal-content");
			modalContent.addClass("buy-in-shelf-open-modal-custom");
			header.children(":not(.close)").remove();

			var iframe = $('<iframe src="/qd-modal-sku?idproduto=' + productId + '&qty=' + qty + '&urlProduct=' + urlProduct +'" frameborder="0"></iframe>');
			modal.find(".modal-body").empty().append(iframe);
			modal.modal();

			function iframeHeight() {
				try{
					var $t = $(this);
					$t.height($t.contents().find("body").outerHeight(true) + 5);
				}
				catch(e){if (typeof console !== "undefined" && typeof console.error === "function") console.error(e.message); };
			};
			iframe.load(iframeHeight);
			iframe.scroll(iframeHeight);
		},
	};

	var Home = {
		init: function() {
			Home.addLinkCarouselTitles(); // Chamar antes de todas as funções
			// Home.cycle2();
			Home.slickFullBanner();
			Home.qdApplyCarrouselTab();
			Home.qdApplyCarrouselHome();
			Home.bannerCarouselHome();
			Home.mosaicSetCol();
			Home.addSpanTitlesCarousel();
			Home.applyHighlightCarousel();

			if($(document.body).is('.toy-store')){
				// Home.mosaicFavourite();
				Home.extraAmazingMenu();
				Home.toyFilter();
			}
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		applyHighlightCarousel: function() {
			var wrapper = $('.highlight-qd-v1-carousel');
			if(!wrapper.children().length){
				$('.highlight-qd-v1-banners-wrapper').hide();
				return;
			}

			wrapper.owlCarousel({
				items: 4,
				slideSpeed: 800,
				navigation: true,
				pagination: false,
				scrollPerPage: true
			});
		},
		mosaicSetCol: function() {
			var boxBanner = $(".banner-qd-v1-responsive .box-banner");

			boxBanner.find("img").each(function() {
				var $t = $(this);

				if ($t.width() <= 1)
					$t.remove();
			});

			boxBanner.QD_mosaicBanners({
				bannerColSecurityMargin: 50
			});
		},
		mosaicFavourite: function() {
			$('.favourite-qd-v1-banner .box-banner').QD_mosaicBanners();
		},
		extraAmazingMenu: function() {
			$('.toy-store-qd-v1-amazing-menu-desktop, .toy-store-qd-v1-amazing-menu').QD_amazingMenu();

			$(".toy-store-qd-v1-amazing-menu > ul > li > a, > ul > li > p").click(function(evt) {
				evt.preventDefault();
				var $t = $(this);

				$t.parent().find("> ul").stop(true, true).slideToggle(function(){
					$t.parent().toggleClass('li-son-active');
				});
			});

			$('.toy-store-qd-v1-amazing-menu, .toy-store-qd-v2-amazing-menu').after('<span class="header-qd-v1-main-amazing-menu-mobile-close"><i class="fa fa-times-circle" aria-hidden="true"></i></span>');

			$(".toy-store-qd-v1-menu-mobile .container p, .toy-store-qd-v2-menu-mobile .container p").click(function(){
				$("body").toggleClass('qd-toy-am-on');
			});

			$(".components-qd-v1-overlay, .header-qd-v1-main-amazing-menu-mobile-close").click(function(){
				$("body").removeClass('qd-toy-am-on');
			});
		},
		addSpanTitlesCarousel: function() {
			$('.home-qd-v1-collections-wrapper h2').addClass('group').wrap('<div class="qd-line"></div>');
		},
		bannerCarouselHome:function(){
			if(typeof $.fn.slick != "function")
				return;

			var wrapper = $('.carousel-qd-v1-banner');

			// Titulo
			wrapper.each(function(){
				var wrap = $(this);
				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});

			var options = {
				items: 7,
				slideSpeed: 800,
				navigation: true,
				pagination: false,
				scrollPerPage: true
			};

			var brandsCarousel = $('.carousel-qd-v1-brands .carousel-qd-v1-banner');
			if(brandsCarousel.length != 0) {
				brandsCarousel.owlCarousel($.extend({}, options, {items: 6}));
			}

			wrapper.owlCarousel(options);
		},
		qdApplyCarrouselTab: function() {
			var wrapper = $('.tab-qd-v1-collections-wrapper');

			// Titulo
			wrapper.find('.prateleira').each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});

			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				slideSpeed: 800,
				navigation: true,
				pagination: false,
				scrollPerPage: true
			});
		},
		qdApplyCarrouselHome: function() {
			var wrapper = $('.home-qd-v1-collections-wrapper');

			// Titulo
			wrapper.find('.prateleira').each(function(){
				var wrap = $(this);

				wrap.find("h2").insertBefore(wrap);
			});

			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				slideSpeed: 800,
				navigation: true,
				pagination: false,
				scrollPerPage: true
			});
		},
		slickFullBanner: function() {
			if(typeof $.fn.slick != "function")
				return;

			var elem = $(".slider-qd-v1-full");
			elem.find('> *:not(.box-banner, .row)').remove();
			elem.removeClass('qdBannerCount-1').find('.box-banner, .row').wrap('<div class="slick-qd-v1-slide-item"><div class="container"></div></div>');
			elem.find('.col-xs-12').addClass(function(){
				return $(this).attr('class').match(/col-md-\d+/g)[0].replace('md', 'sm');
			}).removeClass(function() {
				return $(this).attr('class').match(/col-md-\d+/g)[0];
			});
			var items = elem.find('.slick-qd-v1-slide-item > .container');
			var slideNames = [];
			items.each(function() {
				var $t = $(this);
				var img = $t.find('img');

				if(img.length == 1)
					$("<img/>").load(function(){
					    if(this.width > 1140)
					    	$t.removeClass('container').addClass('container-fluid').height(this.height);
					}).attr("src", img.attr('src'));

				slideNames.push(img.first().attr('alt'));
			});
			elem.slick({
				autoplay: true,
				autoplaySpeed: 3000,
				dots: true,
				draggable: false,
				fade: true,
				lazyLoad: true
			});
			var controls = elem.find('.slick-arrow');
			controls.first().wrap($('<div class="container slider-qd-v1-control-wrapper" />')).parent().append(controls.last()).prependTo(elem);
			elem.find('.slick-dots button').each(function(index) {
				$(this).text(slideNames[index]);
			});
			elem.removeClass('slider-qd-v1-loading');
		},
		cycle2: function() {
			var elem = $(".slider-qd-v1-full");
			elem.has('.col-xs-12').addClass('new-slider-qd-v1').removeClass('qdBannerCount-1').find('.box-banner, .row').wrap('<div class="container">');
			elem.find('.col-xs-12').addClass(function(){
				return $(this).attr('class').match(/col-md-\d+/g)[0].replace('md', 'sm');
			}).removeClass(function() {
				return $(this).attr('class').match(/col-md-\d+/g)[0];
			});

			var items = elem.filter('.new-slider-qd-v1').find('> .container');
			items.each(function() {
				var $t = $(this);
				var img = $t.find('img');

				if(img.length == 1)
					$("<img/>").load(function(){
					    if(this.width > 1140)
					    	$t.removeClass('container').addClass('container-fluid');
					}).attr("src", img.attr('src'));
			});

			elem.find("> .box-banner, > .container, > .container-fluid").each(function() {
				var $t = $(this);
				$t.attr("data-cycle-pager-template", "<div class='cycle-pager-item'><span class='slider-pager-content'>" + $t.find("img").attr("alt") + "</span></div>");
			});

			elem.cycle({
				slides: "> .box-banner, > .container, > .container-fluid",
				swipe: "true",
				pager: ".slider-qd-v1-responsive-pager",
				prev: ".slider-qd-v1-cycle-prev",
				next: ".slider-qd-v1-cycle-next",
				"auto-height":false,
				timeout: 8000
			});

			var controls = elem.filter('.new-slider-qd-v1').find('.slider-qd-v1-cycle-control');
			controls.first().wrap($('<div class="container slider-qd-v1-control-wrapper" />')).parent().append(controls.last()).prependTo(elem);
		},
		addLinkCarouselTitles: function() {
			$('.box-banner img[width="1"]').each(function() {
				var $t = $(this);

				$t.closest('.box-banner').prev('.prateleira').find('h2').wrapInner('<a href="'+ ($t.parent().attr('href') || '#error') +'"></a>');
			});
		},
		toyFilter: function() {
			$('.gift-qd-v1-text select').change(function(){
				$t = $(this);
				$t.attr('value', $t.val());

				$('[class*="gift-qd-v1-banners"]').addClass('hide').filter('[class^=gift-qd-v1-banners-' + $t.val() + ']').removeClass('hide');
			}).change();
		}
	};

	var Departament = {
		init: function() {
			Search.shelfLineFix();
			Departament.sidemenuToggle();
			Departament.hideExtendedMenu();
			Search.bannerCarouselBrands();
			Home.mosaicSetCol();
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

			$(".components-qd-v1-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		},
		hideExtendedMenu:function(){
			$(".search-qd-v1-navigator ul").each(function(){
				var t,li,qtt,moreLink,moreLi,click,liHide;

				t=$(this);
				li=t.find(">li");
				qtt=7;

				if(li.length<=qtt) return;

				liHide=li.filter(":gt("+(qtt-1)+")").stop(true,true).hide();
				moreLink=$('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				t.after(moreLink);
				moreLi=$('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais filtros</a></li>');
				t.append(moreLi);

				click=function(){
					liHide.stop(true,true).slideToggle(function(){
						if(li.filter(":visible").length>qtt){
							moreLink.addClass("minus").text("Mostrar menos filtros");
							moreLi.addClass("minus").find("a").text("Mostrar menos filtros");
						}
						else{
							moreLink.removeClass("minus").text("Mostrar mais filtros");
							moreLi.removeClass("minus").find("a").text("Mostrar mais filtros");
						}
					});
				};
				moreLi.bind("click.qd_viewMore",click);
				moreLink.bind("click.qd_viewMore",click);
			});

			var wrapper = $(".search-single-navigator");

			wrapper.find('h3, h4, h5').click(function(evt) {
				var $t = $(this);

				if ($(evt.target).is(wrapper.find('h3')) || $(evt.target).is(wrapper.find('h4')) || $(evt.target).is(wrapper.find('h5'))) {
					$t.find("+ ul").stop(true, true).slideToggle(function(){
						$t.toggleClass('qd-seach-active-menu');
					});
				}
			});
		},
	};

	var Search = {
		init: function() {
	        Search.shelfLineFix();
	        Departament.sidemenuToggle();
	        Departament.hideExtendedMenu();
	        Search.bannerCarouselBrands();
	        Search.salesGuideHighlighter();
	    },
	    ajaxStop: function() {
	        Search.shelfLineFix();
	    },
	    windowOnload: function() {
	        Search.shelfLineFix();
	    },
	    bannerCarouselBrands:function(){
			$(".search-qd-v1-result .searchResultsTime:first-child").after($('.search-qd-v1-carousel-banner'));

			var wrapper = $('.search-qd-v1-carousel-banner');

			// Titulo
			wrapper.each(function(){
				var wrap = $(this);
				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});

			wrapper.owlCarousel({
				items: 5,
				slideSpeed: 800,
				navigation: true,
				pagination: false,
				scrollPerPage: true
			});
		},
	    shelfLineFix: function() {
	        try {
	            var exec = function() {
	                var curTop;
	                var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass('qd-fi-on');

	                var shelf = wrapper.children("ul").removeClass('qd-first-line');
	                shelf.first().addClass("qd-first-line");

	                var setFirst = function() {
	                    shelf.each(function() {
	                        var $t = $(this);

	                        if ($t.is(".qd-first-line")) {
	                            curTop = $t.offset().top;
	                            shelf = shelf.not($t);
	                            return;
	                        }

	                        var offsetTop = $t.offset().top;
	                        if (offsetTop >= curTop - 10 && offsetTop <= curTop + 10)
	                            shelf = shelf.not($t);
	                        else {
	                            $t.addClass("qd-first-line");
	                            return false;
	                        }
	                    });

	                    if (shelf.length)
	                        setFirst();
	                };
	                setFirst();
	            };
	            exec();

	            // Olhando para o Smart Research
	            if (!window.qd_shelf_line_fix_) {
	                $(window).on("QuatroDigital.sr_shelfCallback", exec);
	                window.qd_shelf_line_fix_ = true;
	            }

	            // Olhando para o evento window resize
	            var resize = $._data(window).events.resize;
	            var allowResize = true;
	            if (resize)
	                for (var i = 0; i < resize.length; i++) {
	                    if (resize[i].namespace == "qd") {
	                        allowResize = false;
	                        break;
	                    }
	                }
	            if (allowResize) {
	                var timeOut = 0;
	                $(window).on("resize.qd", function() {
	                    clearTimeout(timeOut);
	                    timeOut = setTimeout(function() {
	                        $(".qd-first-line").removeClass(".qd-first-line");
	                        exec();
	                    }, 20);
	                });
	            }
	        } catch (e) {
	            (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message));
	        }
	    },
	    salesGuideHighlighter: function(){
	    	if($('body').hasClass('sales-guide')){
		    	var link = window.location.pathname.split("/")[1];
				$('[href="/' + link + '"]').addClass('sales-guide-qd-link-active');
	    	}
	    }
	};

	var Product = {
		run: function() {},
		init: function() {
			Product.qdForceRadioSkuSelector();
			Product.qdHideUniqueSkuOption();
			Product.qdSeeDescription();
			Product.productCollectionsCarrousel();
			Product.addSpanTitlesProduct();
			Product.qdCallBuyButton();
			Product.qdCallThumbVideo();
			Product.qdCheckDescription();
			Product.qdCheckSellerInfo();
			Product.qdSkuModalAddLinkProduct();
			Product.iframeResize();
			Product.openShipping();
			Product.qdVideoShowThumb();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		openShipping: function() {
			if( typeof window.ShippingValue === "function" )
				window.ShippingValue();
		},
		iframeResize: function() {
			try{
				if(!$("body").is(".qd-modal-sku"))
					return;

				window.parent.Common.setIframeSize($("body").outerHeight(true) + 5);

				$(document.body).on('scroll', '.modal', function(){
					window.parent.Common.setIframeSize($("body").outerHeight(true) + 5);
				});
			}
			catch(e){if (typeof console !== "undefined" && typeof console.error === "function") console.error(e.message); };
		},
		qdSkuModalAddLinkProduct: function() {
			$(".common-qd-v1-sku-modal .product-qd-v1-link a").attr('href', ((location.search || "").match(/urlProduct=([^\&]+)/i) || [""]).pop().trim());
		},
		// Caso seja dia 14/07/2016 (14 de Julho de 2016) e você esteja mexendo neste arquivo, remova esta função abaixo
		qdSetBodyClassDepartamentName: function() {
			$(document.body)
			.addClass('product-qd-v1-category-' + vtxctx.categoryName.toLowerCase().replaceSpecialChars().replace(/[^0-9a-z]/g, '-'))
			.addClass('product-qd-v1-departament-' + vtxctx.departmentName.toLowerCase().replaceSpecialChars().replace(/[^0-9a-z]/g, '-'));
		},
		// Caso seja dia 14/07/2016 (14 de Julho de 2016) e você esteja mexendo neste arquivo, remova esta função
		qdHideUniqueSkuOption: function() {
			$(".product-qd-v1-sku-selection [class*='group_']").each(function(){
				var $t = $(this);
				var input =  $t.find("input");

				if(input.length !== 1)
					return;

				input.attr("checked", true).change();
				$t.getParent("ul").hide();
			});
		},
		qdCheckSellerInfo: function() {
			var textSeller = $(".product-qd-v1-seller-info .seller-name a").text().toLowerCase();

			if (textSeller.length && (textSeller == "brinox" || textSeller == "devhavan" || textSeller == "havan"))
				return;

			var linkModal = $('<a href="" class="product-qd-v1-seller-link-modal">O que são produtos MarketPlace?</a>');
			var modal = $('.qd-v1-modal').clone().appendTo(document.body).addClass('qd-v1-modal-seller-info modal').removeClass('qd-v1-modal');
			modal.find('.modal-header').prepend('O que são produtos de MarketPlace?');
			modal.find('.modal-body').append('<p>Os produtos de MarketPlace são identificados pelo selo Exclusivo Online e são produtos disponibilizados por outras lojas para serem comercializados dentro da Havan.com.br</p> <p>- A entrega dos produtos de MarketPlace são de responsabilidade da loja que disponibiliza os produtos.</p> <p>- Meios de Pagamento: Não é possível realizar o pagamento com o Cartão Havan em produtos de MarketPlace.</p>');

			$(".product-qd-v1-seller-info").show().append(linkModal);

			linkModal.click(function(evt){
				evt.preventDefault();
				modal.modal();
			});
		},
		qdCheckDescription: function() {
			if ($(".product-qd-v1-description .productDescription").text().length <= 0 && $(".product-qd-v1-description .productDescription > *").length <= 0)
				$(".product-qd-v1-description").hide();
		},
		qdCallThumbVideo: function() {
			var iframe = $("td.value-field.Video:first iframe");

			if (!iframe.length) {
				window.qdVideoInProduct = {
					videoFieldSelector: 'td.value-field.Video:first',
					autoPlay: 1,
					mute: 1
				};
				return;
			}

			window.qdVideoInProduct = {
				videoFieldSelector: $('<span/>').addClass('video-product').text('https://www.youtube.com/watch?v=' + iframe.attr("src").split("?").shift().split("/").pop() + '&rel=0'),
				autoPlay: 1,
				mute: 1
			};
		},
		qdCallBuyButton: function() {
			if (typeof skuJson.dimensionsMap['Escolha a Voltagem'] == 'undefined') {
				$(document.body).QD_buyButton({
					buyButton: ".product-qd-v1-sku-selection-box .buy-button"
				});
			} else {
				$(document.body).QD_buyButton({
					buyButton: ".confirm-sku-qd-v1-buy-button a",
				});

				$(window).bind("productAddedToCart.qdSbbVtex", function() {
					$(".confirm-sku-qd-v1-modal").modal('hide');
				});
			}
		},
		productCollectionsCarrousel: function() {
			var wrapper = $(".qd-product-collections-wrap");

			wrapper.find('.prateleira').each(function(){
				var wrap = $(this);

				wrap.find("h2").insertBefore(wrap);
			});

			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				slideSpeed: 800,
				navigation: true,
				pagination: false,
				scrollPerPage: true
			});
		},
		addSpanTitlesProduct: function() {
			$(".qd-product-collections-wrap h2, .product-qd-v1-specification h4, .trustvox-container h2, .product-qd-v1-buy-together #divTitulo").wrap('<div class="qd-line"></div>');
		},
		qdSeeDescription: function() {
			var wrapperDescription = $(".product-qd-v1-description");
			var wrapperSpecification = $(".product-qd-v1-specification");
			var goToWrapper;

			if (wrapperDescription.find(".productDescription").text().length <= 0 && wrapperDescription.find(".product-qd-v1-description .productDescription > *").length <= 0) {
				goToWrapper = wrapperSpecification;
			} else {
				goToWrapper = wrapperDescription;
			}

			$(".product-qd-v1-link-description a").click(function(e){
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': goToWrapper.offset().top - 100
				}, 900, 'swing');
			});
		},
		qdForceRadioSkuSelector: function() {
			try {
				if(skuJson.dimensions.length)
					return;

				window.skuJson_0.displayMode = 'especificacao';

				var variations = [];
				for(var l = 0; l < skuJson_0.skus.length; l++){
					window.skuJson_0.skus[l].dimensions = {'Variação': window.skuJson_0.skus[l].skuname};
					variations.push(window.skuJson_0.skus[l].skuname);
				}
				window.skuJson_0.dimensions = ['Variação'];
				window.skuJson_0.dimensionsMap = {'Variação': variations};

				var skuWrapper = $('.product-qd-v1-sku-selection').prepend('<div class="sku-selector-container-0"></div>');
				$('.sku-selector-container-0').skuSelector(skuJson_0, {forceInputType: 'radio', selectSingleDimensionsOnOpening: 'true'});

				var buyButtonWrapper = $('.product-qd-v1-buy-button');
				$('<a href="" class="buy-button buy-button-ref">Comprar</a>').prependTo(buyButtonWrapper).buyButton(skuJson.productId, {salesChannel: jssalesChannel}, {});
				$('<div class="product-qd-v1-notify-me"></div>').appendTo(buyButtonWrapper).notifyMe(skuJson.productId, ((window.notifyMeOptions || {}).sku = null));

				skuWrapper.find('.sku-selector +label').each(function(index, el) {
					$(this).wrapInner('<span class="product-qd-v1-sku-text"></span>').prepend('<span class="product-qd-v1-sku-img"><img src="' + skuJson.skus[index].image.replace(/(ids\/[0-9]+)\-[0-9]+\-[0-9]+/, '$1-50-50') + '" /></span>');
				});

				$('<div class="plugin-preco"></div>').appendTo('.product-qd-v1-price').price(skuJson.productId);

				skuWrapper.find('.sku-selector:not(.item_unavailable):first()').click();

				window.skuJson = window.skuJson_0;
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e)); }
		},
		qdVideoShowThumb: function() {
			$(window).on('QuatroDigital.pv_video_added', function(e, vId, li) {
				li.find('.qd-videoLink').click();
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
			Institutional.sideMenuToggleInstitutional();
			Institutional.addLogoutButton();

			Home.qdApplyCarrouselTab();

			if($(document.body).is('.banners')) {
				Institutional.applyBrandCarousel();
				Institutional.bannersPageSlick();
				Institutional.bannersPageWrapText();
				Institutional.bannersPageILineCols();
				Institutional.bannersPageMLineCols();
				Home.slickFullBanner();
				Home.applyHighlightCarousel();
				Institutional.hideEmptyShelf();
				Institutional.applyAmazingMenuCategories();
				Institutional.applyDepartamentCarousel();

				if($(document.body).is('.search')) {
	        		Search.shelfLineFix();
				}
			}
		},
		ajaxStop: function() {
			if($(document.body).is('.banners')) {
				if($(document.body).is('.search')) {
					Search.shelfLineFix();
				}
			}
		},
		windowOnload: function() {
			if($(document.body).is('.banners')) {
				if($(document.body).is('.search')) {
					Search.shelfLineFix();
				}
			}
		},
		applyAmazingMenuCategories:function(){
			$('.banner-special-qd-v1-collection').QD_amazingMenu();
		},
		addLogoutButton: function() {
			$('.edit-profile-link').append('<a href="/no-cache/user/logout" class="logout-qd-v1-link">Sair</a>');
		},
		applyDepartamentCarousel: function() {

			var itens = $('.special-amazing-menu ul[itemscope] > li');

			itens.parent().slick({
				dots: false,
				draggable: false,
				slidesToShow: 6,
				slidesToScroll: 1,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 650,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					}
				]
			});
		},
		applyBrandCarousel: function() {
			$('.carousel-qd-v1-banner').removeClass('slide-qd-v1-slick').slick({
				slidesToShow: 6,
				slidesToScroll: 6,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 650,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		},
		shelfCarousel: function() {
			var wrapper = $('.carousel-qd-v1-shelf');

			// Titulo
			wrapper.find('.prateleira').each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});

			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				slideSpeed: 800,
				navigation: true,
				pagination: false,
				scrollPerPage: true
			});
		},
		bannersPageSlick: function() {
			$('.slide-qd-v1-slick').slick({
				responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			});

			$('.slide-qd-v1-slick').filter(function(){if($(this).parent().is('.container-fluid')) return $(this);}).each(function() {
				$(this).find('.slick-arrow').wrapAll('<div class="container" />');
			});
		},
		bannersPageWrapText: function() {
			$('.banner-special-qd-v1-row-h, .banner-special-qd-v1-row-k').each(function(){
				$(this).find('> *:not(.box-banner):not(.box-text)').wrapAll('<div class="box-text" />');
			});
		},
		sideMenuToggleInstitutional: function() {
			$(".institucional-qd-v1-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});

			$(".components-qd-v1-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		},
		bannersPageILineCols: function() {
			var bannerClass = '.banner-special-qd-v1-row-i > .box-banner';
			$(bannerClass).slice(0, 3).wrapAll('<div class="col-xs-12 col-md-4" />');
			$(bannerClass).slice(0, 1).wrapAll('<div class="col-xs-12 col-md-4" />');
			$(bannerClass).wrapAll('<div class="col-xs-12 col-md-4" />');
		},
		bannersPageMLineCols: function() {
			$('.banner-special-qd-v1-row-m .box-banner').slice(0, 3).wrapAll('<div class="col-xs-12 col-md-6" />');
			$('.banner-special-qd-v1-row-m .box-banner').slice(3, 6).wrapAll('<div class="col-xs-12 col-md-6" />');
		},
		hideEmptyShelf: function() {
			var wrapper = $('.tab-qd-v1-collections-wrapper');
			if(!wrapper.find('.shelf-qd-v1').length)
				wrapper.hide();
		}
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

/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/* Quatro Digital - Scroll Toggle // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(){var c=jQuery,e=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(c){try{console.info(b.join("\n"))}catch(e){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(l){try{console.warn(b.join("\n"))}catch(m){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var d=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)d.push(c(window).height());else return e("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var b=a.split(","),f;for(f in b)"function"!==typeof b[f]&&(a=parseInt(b[f].trim()),
isNaN(a)||d.push(a))}if(!d.length)return e("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return e('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return e('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===
typeof document.body.getAttribute)return e('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return e('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){e("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",
g.message)}c(window).scroll(function(){for(var a=0;a<d.length;a++)c(window).scrollTop()>d[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+a)})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
/*! * Javascript Cookie v1.5.1 * https://github.com/js-cookie/js-cookie * * Copyright 2006, 2014 Klaus Hartl * Released under the MIT license */
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
/* Quatro Digital Amazing Menu // 2.12 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(4(h){8 a,m,k,n;a=2g;C("4"!==G a.1a.R){m={U:"/7-1N-T",1l:4(){}};8 l=4(a,b){C("1C"===G w&&"X"!==G w.11&&"X"!==G w.1b&&"X"!==G w.1h){8 d;"1C"===G a?(a.2f("[1t 1q 1r]\\n"),d=a):d=["[1t 1q 1r]\\n"+a];C("X"===G b||"1H"!==b.M()&&"2h"!==b.M())C("X"!==G b&&"1b"===b.M())I{w.1b.1e(w,d)}J(p){I{w.1b(d.S("\\n"))}J(f){}}1G I{w.11.1e(w,d)}J(p){I{w.11(d.S("\\n"))}J(f){}}1G I{w.1h.1e(w,d)}J(p){I{w.1h(d.S("\\n"))}J(f){}}}};a.1a.1k=4(){8 e=a(v);e.B(4(b){a(v).r("7-i-F-"+b)});e.1f().r("7-i-1f");e.1K().r("7-i-1K");x e};a.1a.R=4(){};h=4(a){8 b={j:"2i%3%1I%3%5%3%6",2j:"2e%3%5%3%6",2d:"29%3%O%3%5%3%6",28:"a%3%V%3%5%3%6",14:"%3%Y%3%5%3%6",2a:"c-14%3%O%3%5%3%6",W:"-14%3%V%3%5%3%6","W-":"14%3%Y%3%5%3%6","P%3%":"1I%3%O%3%5%3%6","P%3%2":"2b%3%V%3%5%3%6","P%3%25":"2c%3%Y%3%5%3%6","P%3%2k":"2l%3%5%3%6","H%3":"%5%3%6","H%3%":"O%3%5%3%6","H%3%2":"2u%3%5%3%6","H%3%25":"27%3%5%3%6","W-H%":"3%O%3%5%3%6","W-H%2":"2v%V%3%5%3%6","W-H%25":"1d%Y%3%5%3%6","P%3%2w":"a%3%O%3%5%3%6","P%3%2x":"%3%V%3%5%3%6"};x 4(a){8 e,f,c,g;f=4(a){x a};c=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];a=a["d"+c[16]+"c"+c[17]+"m"+f(c[1])+"n"+c[13]]["l"+c[18]+"c"+c[0]+"2s"+f("o")+"n"];e=4(a){x 2r(2n(a.15(/\\./g,"\\2m").15(/[a-2o-Z]/g,4(a){x 2p.2q(("Z">=a?2y:24)>=(a=a.1V(0)+13)?a:a-26)})))};1W(8 q 1U b){C(e(a[[c[9],f("o"),c[12],c[f(13)]].S("")])===q+b[q]){g="23"+c[17]+"e";22}g="f"+c[0]+"1Y"+f(c[1])+""}f=!1;-1<a[[c[12],"e",c[0],"20",c[9]].S("")].21("1X%1p%1D%1Q%1m%1j%1m%1R%1T%1S%1d%1Z%1d%2t%1m%1j%1p%1D%1Q%2N%1j")&&(f=!0);x[g,f]}(a)}(h);C(!3l(h[0]))x h[1]?l("\\3i\\3g\\1P \\3h\\Q\\35\\3a\\1O\\Q\\1O\\1P \\3b\\Q\\3c\\Q \\3d\\2z\\3f\\Q L\\36\\Q!"):!1;n=4(e){8 b,d;e=e.D(".37");b=e.1w(".7-i-1i");d=e.1w(".7-i-1x");C(b.E||d.E)b.10().r("7-i-1i-1y"),d.10().r("7-i-1x-1y"),a.38({U:k.U,39:"3n",3m:4(e){8 f=a(e);b.B(4(){8 c,g;g=a(v);c=f.D("3k[3j=\'"+g.1v("1z-1A-1E")+"\']");c.E&&(c.B(4(){a(v).1u(".3e-1i").1B().1F(g)}),g.1s())}).r("7-i-1o-1n");d.B(4(){8 c={},g;g=a(v);f.D("33").B(4(){C(a(v).1J().1c().M()==g.1v("1z-1A-1E").1c().M())x c=a(v),!1});c.E&&(c.B(4(){a(v).1u("[2J*=\'2I\']").1B().1F(g)}),g.1s())}).r("7-i-1o-1n")},11:4(){l("N\\1M 2K 2L\\34 2M 2H 2G 1L T. A U \'"+k.U+"\' 2B.")},2A:2C})};a.R=4(e){8 b=e.D("K[2D]").B(4(){8 d,b;d=a(v);C(!d.E)x l(["2F 1L T n\\1M 2E",e],"1H");d.D("F >K").10().r("7-i-2O-K");d.D("F").B(4(){8 g=a(v),b;b=g.19(":2P(K)");b.E&&g.r("7-i-2Z-"+b.1f().1J().1c().2Y().15(/\\./g,"").15(/\\s/g,"-").M())});b=d.D(">F").1k();d.r("7-1N-T");b=b.D(">K");b.B(4(){8 b=a(v);b.D(">F").1k().r("7-i-30");b.r("7-i-1g-T");b.10().r("7-i-1g")});b.r("7-i-1g");8 f=0,c=4(a){f+=1;a=a.19("F").19("*");a.E&&(a.r("7-i-31-"+f),c(a))};c(d);d.32(d.D("K")).B(4(){8 b=a(v);b.r("7-i-"+b.19("F").E+"-F")})});n(b);k.1l.2X(v);a(2W).2R("2Q.i.1l",e)};a.1a.R=4(e){8 b=a(v);C(!b.E)x b;k=a.2S({},m,e);b.2T=2V a.R(a(v));x b};a(4(){a(".2U").R()})}})(v);',62,210,'|||25C2|function|25A8pbz|25A8oe|qd|var||||||||||am|||||||||addClass||||this|console|return||||each|if|find|length|li|typeof|qriunina|try|catch|ul||toLowerCase||25A8igrkpbzzrepr|jjj|u0391|QD_amazingMenu|join|menu|url|25A8igrkpbzzreprorgn|qrirybc|undefined|25A8igrkpbzzreprfgnoyr||parent|error|||unina|replace||||children|fn|info|trim|C2|apply|first|dropdown|warn|banner|82|qdAmAddNdx|callback|D1|loaded|content|E0|Amazing|Menu|hide|QD|getParent|attr|filter|collection|wrapper|data|qdam|clone|object|B8|value|insertBefore|else|alerta|25A8unina|text|last|do|u00e3o|amazing|u2202|u0472|84|8F|83d|CF|in|charCodeAt|for|qu|ls|A1g|rc|indexOf|break|tr|122|||A8igrkpbzzreprfgnoyr|unin|na|qriryb|5A8unina|A8unina|uni|ina|unshift|jQuery|aviso|jj|un|25A|8qriunina|u00a8|encodeURIComponent|zA|String|fromCharCode|escape|ti|A1|5A8igrkpbzzreprorgn|5C2|25A8qriunin|25A8qriunina|90|u0abd|clearQueueDelay|falho|3E3|itemscope|encontrada|UL|dados|os|colunas|class|foi|poss|obter|C5|has|not|QuatroDigital|trigger|extend|exec|qd_amazing_menu_auto|new|window|call|replaceSpecialChars|elem|column|level|add|h2|u00edvel|u2113|u0472J|qd_am_code|qdAjax|dataType|u00a1|u03a1|u0ae8|u0aef|box|u01ac|u00c3|u221a|u0e17|alt|img|eval|success|html'.split('|'),0,{}));
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* Quatro Digital - sessionStorage // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(){var e=function(b,c){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var a;"object"===typeof b?(b.unshift("[Quatro Digital - sessionStorage]\n"),a=b):a=["[Quatro Digital - sessionStorage]\n"+b];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,a)}catch(d){console.info(a.join("\n"))}else try{console.error.apply(console,
a)}catch(e){console.error(a.join("\n"))}else try{console.warn.apply(console,a)}catch(f){console.warn(a.join("\n"))}}};window.qdSessionStorage=window.qdSessionStorage||{};var f="undefined"!==typeof sessionStorage&&"undefined"!==typeof sessionStorage.setItem&&"undefined"!==typeof sessionStorage.getItem;window.qdSessionStorage.setItem=function(b,c,a){try{if(!f)return!1;var d=new Date;sessionStorage.setItem(b,c);isNaN(parseInt(a))||(d.setTime(d.getTime()+6E4*a),sessionStorage.setItem(b+"_expiration",
d.getTime()))}catch(g){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar salvar os dados no armazenamento da sess\u00e3o. Detalhes: ",g.message],"alerta")}};window.qdSessionStorage.getItem=function(b){try{if(!f)return!1;var c=new Date,a=parseInt(sessionStorage.getItem(b+"_expiration")||0,10)||0;return c.getTime()>a?(sessionStorage.removeItem&&(sessionStorage.removeItem(b),sessionStorage.removeItem(b+"_expiration")),null):sessionStorage.getItem(b)}catch(d){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar obter os dados no armazenamento da sess\u00e3o. Detalhes: ",
d.message],"alerta")}}})();
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
/*jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license*/
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?g(b):b}var l=/\+/g,e=
c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864E5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=h[m].split("="),
k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}});
/* Automatizador de comments box do Facebook // 1.5 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if(!$("script[src*='connect.facebook.net/pt_BR/sdk.js']").filter("[src*='sdk.js']").length){a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(b=document.createElement("script"),b.id="facebook-jssdk", b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse()});
/* Cores Na Prateleira // 11.3 // Carlos Vinicius [QUATRO DIGITAL] // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(5(H,r){S("5"!==P r.3g.31){r.3g.31=5(){};8 E,h,F,B,G=-1<67.68.1q.1z().4X("69"),l=5(h,q){S("2j"===P 1f){8 b;"2j"===P h?(h.3Z("[2i 1X]\\n"),b=h):b=["[2i 1X]\\n"+h];"1b"===P q||"1m"!==q.1z()&&"48"!==q.1z()?"1b"!==P q&&"1u"===q.1z()?1f.1u.1W(1f,b):1f.2q.1W(1f,b):1f.3I.1W(1f,b)}},u=5(h,q){S("2j"===P 1f&&G){8 b;"2j"===P h?(h.3Z("[2i 1X]\\n"),b=h):b=["[2i 1X]\\n"+h];"1b"===P q||"1m"!==q.1z()&&"48"!==q.1z()?"1b"!==P q&&"1u"===q.1z()?1f.1u.1W(1f,b):1f.2q.1W(1f,b):1f.3I.1W(1f,b)}},C=!1;1v{2l.4K(2l.4z({a:"b"})),C=!0}1w(J){l("66 65 n\\19 5d 62 a 2l 63","1u")}8 I={4h:"1K[64]",6a:"N\\19 1y 6b\\2d 1N 6h 6i\\2N\\6g 6f 6c.",3w:"6d: R$ #2Z",2p:"R$ ",6e:".M-3R[61=\'60\']",3u:!1,4s:!1,3A:!1,4y:!1,3O:!0,2M:!1,4J:!1,4U:!0,3M:!1,1J:15,3W:!1,4L:!0,3F:!0,1k:5O,2R:4,2S:2,37:15,2V:{1L:36,24:36},2g:"3x",2s:!0,1l:["5P"],2t:[15],3i:15,4B:!0,4l:5(){},3a:5(){},4c:5(h,q,b,f,a){},2E:5(h,q,b){1v{U h.1n(/(5Q\\/[0-9]+\\-)([0-9]+\\-[0-9]+)/i,"$1"+q+"-"+b)}1w(f){U l(["3q 2v 3a \'2E\'. ",f.1B],"1m"),""}},4C:5(h,q,b,f){f(!1)},1j:!0,3J:2,4b:30,43:3,5N:"/5M-5J"},A=5(h){8 q={j:"5K%6%4k%6%Y%6%X",5L:"5R%6%Y%6%X",5S:"2T%6%1Q%6%Y%6%X",5Y:"a%6%2c%6%Y%6%X",2J:"%6%2m%6%Y%6%X",5Z:"c-2J%6%1Q%6%Y%6%X",2a:"-2J%6%2c%6%Y%6%X","2a-":"2J%6%2m%6%Y%6%X","1O%6%":"4k%6%1Q%6%Y%6%X","1O%6%2":"5X%6%2c%6%Y%6%X","1O%6%25":"5W%6%2m%6%Y%6%X","1O%6%5T":"5U%6%Y%6%X","1I%6":"%Y%6%X","1I%6%":"1Q%6%Y%6%X","1I%6%2":"5V%6%Y%6%X","1I%6%25":"6j%6%Y%6%X","2a-1I%":"6%1Q%6%Y%6%X","2a-1I%2":"6k%2c%6%Y%6%X","2a-1I%25":"3b%2m%6%Y%6%X","1O%6%6J":"a%6%1Q%6%Y%6%X","1O%6%4Q":"%6%2c%6%Y%6%X","1O%6%4Q%":"6%2m%6%Y%6%X"};U 5(b){8 f,a,d,e;a=5(a){U a};d=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];b=b["d"+d[16]+"c"+d[17]+"m"+a(d[1])+"n"+d[13]]["l"+d[18]+"c"+d[0]+"6K"+a("o")+"n"];f=5(a){U 6L(6I(a.1n(/\\./g,"\\6H").1n(/[a-2Y-Z]/g,5(a){U 6E.5I(("Z">=a?6F:6G)>=(a=a.6M(0)+13)?a:a-26)})))};1d(8 c 1t q){S(f(b[[d[9],a("o"),d[12],d[a(13)]].2U("")])===c+q[c]){e="6N"+d[17]+"e";2r}e="f"+d[0]+"6T"+a(d[1])+""}a=!1;-1<b[[d[12],"e",d[0],"6U",d[9]].2U("")].4X("6S%47%41%84%38%82%38%6R%6O%6P%3b%6Q%3b%6D%38%82%47%41%84%6C%82")&&(a=!0);U[e,a]}(h)}(H);S(!6q(A[0]))U A[1]?l("\\6r\\6s\\3P \\6p\\1P\\6o\\6l\\3Y\\1P\\3Y\\3P \\6m\\1P\\6n\\1P \\6t\\6u\\6A\\1P L\\6B\\1P!"):!1;r.3g.31=5(A){1v{r("");8 q=/6z\\:\\/\\/[a-z\\-\\.]+(?=\\/)/i,b=r.6y(!0,{},I,A),f={6v:15,2o:15,2X:15,2B:15,3v:0,2D:!1,6w:[],6x:[],3p:{},3V:{},2C:15,6V:{},4O:5(){f.4F()},4F:5(){8 a=f.2C;0<a.V&&a.3E(5(a){8 b=1R(1x);b.3U("K-4R")||f.5a(b,a)})},5a:5(a,d){8 e=a.7(b.4h).3r(".5j");S(1>e.V)U l("1X n\\19 5i \\n ("+e.3R+")"),!1;a.Q("K-4R");e.3E(5(a){8 g,e,k,m,v,D,y,t,p,w,x;g=r(1x);!0===b.3O&&f.5g(g);e=g.7(".5A");k=g.7(".K-5z");D=d.4Z()+"2W"+a.4Z();p=5(a,d){8 c,k;v=f.4W(a,D);m=b.2s?f.2s(v,d):v;0<v.V&&0===m.V&&u("O 1s 34 "+d+" 4j "+a.V+\' 5x 21 5B 5C 4v\\4G o 5k 51 5E\\2N\\19 n\\19 5D 4g 1M 35 5w 1s. 5o-5n 3d 5p 5q o 5u 5t 35 a 5s\\2N\\5r\\19 "1l".\',"1m");g.7(".K-2x 2f").Q("K-2F");x=m.V;(b.3A||b.4y)&&e.Q("1g").W("1c");8 t=15;S("5"===P b.3i&&(t=b.3i(g),"1E"===P t&&""!==t||"5G"===P t))1d(8 l=0;l<m.V;l++)S(m[l][1]==t){k=m[l];m[l]=m[0];m[0]=k;2r}S(x>=b.2S)1d(x>b.2R&&(g.7(".4t").Q("1g").W("1c"),g.7(".14-2k-M-5l").1D(x)),l=0;l<x;l++){8 p,z;p=m[l][1];z=m[l][0].2O();k=z.1n(q,"");S(b.2M&&!h.M[p].4H)u(["O M \\3j"+p+"\\2h 1y 33 2z n\\19 4j 5m. 5v: ",g],"1u");22{S(b.4s&&(y=k==(g.7(".1V:2H").11("1q")||"").2O().1n(q,""))){u("O M \\3j"+p+"\\2h 1y 33 2z 5d o 54 2K 5F o 1s 5y 2T 52.\\n 58: "+k,"1u");5H}S(b.4U&&0<g.7(".K-2Q[4A=\'"+k+"\']").V)u("O M \\3j"+p+"\\2h 1y 33 2z j\\8n 8m 8k 4e 2T 52 8w o 54 2K.\\n 58: "+k,"1u");22 S(c=g.1h("14-2k-M-3k")||0,g.1h("14-2k-M-3k",c+1),c>=b.2R-1){g.7(".4t").Q("14-2k-40-M-8s");2r}22""!==p&&(c=1R("<1o 1i=\'K-2Q K-87"+(c-1)+" K-88"+p+" 1c\' "+(t==p?\'1h-7X-M="1"\':"")+"><1o 1i=\'K-80\'><a 1q=\'"+(b.3F?z+"#M="+p:z)+"\' 1i=\'14-44\'></a></1o><1o 1i=\'K-8z\'></1o></1o>"),c.11({4A:k,34:p}),e.3f(f.3H(g,p,c,z,D)))}}e.Q("14-2k-8i-3k-"+e.7(".K-2Q").V);w=g.7(".K-2Q");w.V>=b.2S&&w.W("1c");w.2H().Q("K-7U");r(1C).20("1Y.8o",{1K:g,50:e,1h:h})};b.4J?(a=k.7("1K").1D().2O().1T("|"),G&&""===k.7("1K").1D().2O()&&u("O 3h 1s n\\19 4N 8j 4g 8l.\\n 8t: "+(g.7(".1V[4n]:2H").11("4n")||"[T\\8v n\\19 7Y]"),"1u"),p(a)):(t=g.7(".4V").27(),k=g.7(".3e").27(),"1b"===P t&&l(["N\\19 1y 2G\\2d 1N o 8f 23 1s 2v 3h \\89\\2h.",g]),"1b"===P k&&l("N\\19 1y 2G\\2d 1N a 8g 23 1s 2v 3h \\86\\2h."),f.4Y(5(a,b){p(a,t);r(1C).20("1Y.8a",{1K:g,50:e})},t,k,g))})},4Y:5(a,d,e,c){b.1j&&E.3T(1x,a,d,e,c)},8b:5(a){8 b,e,c=[a];b=a.7(".4V").27();e=a.7(".3e").27();"1b"!==P b&&"1b"!==P e&&(c=[b,e,a]);U c},4W:5(a,b){8 e={},c=[],g,n,k;k=a.V;S(2>k&&""===a[0])U c;1d(8 m=0;m<k;m++)g=a[m].1T(";"),n=g.3X(),g=g.3D(),"1b"!=P n&&("1b"==P e[g]?e[g]=[n]:e[g].1a(n));1d(8 f 1t e){k=e[f].V;n=[];S(3<k){8 h,l;g=3C(k/3,10);h=k%3;l=2*g;1d(m=0;m<g;m++)n.1a(e[f][m]),n.1a(e[f][m+g]),n.1a(e[f][m+l]);1==h?n.1a(e[f][k-1]):2==h&&(n.1a(e[f][k-1]),n.1a(e[f][k-2]))}22 n=e[f];c.1a([n.3D(),f])}U c},2s:5(a,d){S(!b.1j||!b.4L)U a;8 e,c,g,f;e=[];h.1e=h.1e||{};S("1b"!==P h.1e[d]&&"2j"===P h.1e[d].1S&&0<h.1e[d].1S.V)U e.8d(h.1e[d].1S);1d(8 k 1t a)S("5"!==P a[k]){f=a[k][1];g=h.M[f];c=[];1d(8 m 1t b.1l)"5"!==P b.1l[m]&&"1E"===P g.1l[b.1l[m]]&&c.1a(b.1l[m]);h.1e[g.1r]=h.1e[g.1r]||{};1d(8 v 1t c)"5"!==P c[v]&&(h.1e[g.1r][g.1l[c[v]]]=h.1e[g.1r][g.1l[c[v]]]||[],h.1e[g.1r].1S=h.1e[g.1r].1S||[],h.1e[g.1r][g.1l[c[v]]].V||(e.1a(a[k]),h.1e[g.1r].1S.1a(a[k])),h.1e[g.1r][g.1l[c[v]]].1a(f))}U e},3H:5(a,d,e,c,g){e.Q("K-42");f.3N(a,d,a.7(".K-56"),b.3J,e,c,g);b.4c(a,e,f.3V,f.3p,d);U e},2M:5(a,b,e,c,g,n){f.4a(a,b,e,c,g)},4a:5(a,d,e,c,g){f.46(e,c);f.5h(e,c,d);e.4m("8c.4i",5(){1v{a.7(".2b").W("2b");e.Q("2b");S(b.3u){f.2o=a.7(".3o").85().83();f.2X=a.7(".1V:2H").11("1q")||"";8 d=a.7(".K-1U");f.2B=[d.1F()||"",d.11("1i")||""]}f.4E(c,a,g);f.2D=!0;r(1C).20("1Y.7V",{1h:c[0],1K:a,2K:g})}1w(k){l(k.1B)}});b.3u&&e.4m("7T.4i",5(){1v{a.7(".2b").W("2b"),f.3L(a),f.2D=!1,r(1C).20("1Y.7S",{1h:c[0],1K:a,2K:g})}1w(b){l(b.1B)}});U e},4E:5(a,d,e){8 c,g,n,k,m,h,l,y,t,p,w,x;d.Q("K-3n");a=a[0];a.4H||a.7W||b.3A?(c=d.7(".3m"),t=a.81||a.7Z,p=b.1j?a.8h/2P:a.8x,w=b.1j?a.4q/2P:a.4o,c.Q("1g").W("1c"),d.7(".3s").Q("1c").W("1g"),c.7(".8u").1D(b.2p+f.29(b.1j?a.4q/2P:a.4o)),d.7(".K-1U").1F(b.3w.1n("#2Z",f.29(p-w))),w<p?(c.7(".4T").Q("1g").W("1c").7(".8A").1D(b.2p+f.29(p)),d.7(".K-1U").Q("1g").W("1c")):(c.7(".4T").Q("1c").W("1g"),d.7(".K-1U").Q("1c").W("1g")),1<t?(p=c.7(".3K").Q("1g").W("1c"),p.7(".8y").1D(t),p.7(".8r").1D(b.2p+f.29(b.1j?a.8q/2P:a.8p)),c.7(".3G").Q("1c").W("1g")):(c.7(".3K").Q("1c").W("1g"),c.7(".3G").Q("1g").W("1c"))):(d.7(".3m").Q("1c").W("1g"),d.7(".3s").Q("1g").W("1c"));c=a.5c||a.2A;b.3M&&(6W(b.1J)||15===b.1J?d.7(".14-2L").1F(c):b.3W&&(c||"").V>b.1J?(c=(c||"").4d(0,b.1J+1).1T(" "),c.3X(),d.7(".14-2L").1F(c.2U(" ")+" ...")):(c||"").V>b.1J?d.7(".14-2L").1F((c||"").4d(0,b.1J)+" ..."):d.7(".14-2L").1F(c||""));c=d.7(".1V");""!==e&&c.11("1q",e.1n(q,""));c.11("1q",b.3F?c.11("1q")+"#M="+(a.M||a.1H):c.11("1q"));g=d.7(".K-2x");n=d.7(".K-55");k=g.7(".K-2F");c=k[0];e=k.11("1L")||c.8e;c=k.11("24")||c.7Q;b.1j&&"3x"==b.2g&&(b.2g={1L:e,24:c});x=5(a,c){8 e=a.M||a.1H;m=f.39(a,b.4b,b.1j,c);S("1E"!==P c||""!==m[0])h=d.7("2f[2n*=\'"+(m[0].1T("?").3D()||k.11("2n"))+"\']:3r(\'.K-49\')"),l=0<h.V?!0:!1,n.40(),l?(k.1p(!0).W("14-1A").2e(b.1k),n.3z(),d.7(".K-2u").1p(!0).W("14-1A").2e(b.1k),h.1p(!0).Q("14-1A").28(b.1k,1),h.11("1h-M",e),"1E"===P c&""!==c&&h.11("1h-M-32",c),h.7g("[1h-M=\'"+e+"\']").1p(!0).Q("14-1A").28(b.1k,1)):(y=r(\'<2f 2n="\'+(m[0]||k.11("2n"))+\'" 3c="" 1i="K-2u" 7f="7e:7c;" 1h-M="\'+e+\'" />\'),"1E"===P c&""!==c&&y.11("1h-M-32",c),y.7d(5(){f.2D?(k.1p(!0).W("14-1A").2e(b.1k),n.3z(),d.7(".K-2u").1p(!0).W("14-1A").2e(b.1k),y.1p(!0).Q("14-1A").28(b.1k,1),d.7(".K-2u[1h-M=\'"+e+"\']").1p(!0).Q("14-1A").28(b.1k,1)):(n.3z(),f.3B(d))}),g.3f(y))};1d(8 u 1t b.2t)"5"!==P b.2t[u]&&B(a.M,5(a){x(a[0],b.2t[u])},!0)},3L:5(a){15!==f.2o&&a.3U("K-3n")&&(a.W("K-3n").7(".3o").1F(f.2o),f.3B(a),f.45(a),f.3Q(a))},3B:5(a){a=a.7(".K-2x");a.7(":3r(.K-2F)").1p(!0).2e(b.1k);a.7(".K-2F").1p(!0).28(b.1k,1)},45:5(a){a.7(".1V").11("1q",f.2X)},3Q:5(a){a.7(".K-1U").1F(f.2B[0]).11("1i",f.2B[1])},46:5(a,d){8 e=5(c,d,e){d=f.39(c[0],b.43,!1,d,e);a.W("K-42");0<d.V&&(a.7h("7i-2y","2w(\'"+d[0]+"\')"),a.7(".14-44").3f(\'<2f 2n="\'+d[0]+\'" 3c="" 1i="K-49 K-7n\'+(c[0].M||c[0].1H)+\'" 3c=""/>\'))};b.1j&&15!==b.37?B(d[0].M||d[0].1H,5(a){e(a,b.37,d[0])},!0):e(d)},3N:5(a,d,e,c,g,f,k){b.1j?F.3T(1x,a,d,e,c,g,f,k):l("7m m\\7l 1y 7j =/")},29:5(a){8 b="",e=b="";a=a.7k(2).1T(".");1d(8 c=0,g=a[0].1T("").V,f=a[0].V;0<f;f--)b=a[0].7b(f-1,1),c++,0===c%3&&g>c&&(b="."+b),e=b+e;U b=e+","+a[1]},39:5(a,d,e,c,g){d=[];8 f,k;f=a.2y||a.7a;k=5(a,b){8 d=[];S(1>a.V)U l("N\\19 7R 71 72 35 o 1M: "+b.1H),d;1d(8 e 1t a)1d(8 f 1t a[e])S(15!==c&&"1E"===P c?a[e][f].2A&&c.1z()==a[e][f].2A.1z():a[e][f].70){d.1a(a[e][f].6Z);2r}U d};"1E"===P c&&(f=k(f,a),f.V?f=f[0]:("1b"!==P g&&"1b"!==P g.2y?f=g.2y:(f="",u("N\\19 1y 2G\\2d 1N a 4S 6X\\19 23 1M 2z o 6Y 73 2v 74 79 \\78 77 75 4N 76 4u 7o n\\19 7p. 1M:"+a.1H,"1m")),u("N\\19 1y 2G\\2d 1N a 4S 3l 4e 51 32. 1M:"+a.1H,"1m")));e?d.1a(b.2E("1E"===P f?f:k(f,a)[0],b.2g.1L,b.2g.24),f):d.1a(b.2E(f,b.2V.1L,b.2V.24),f);U d},5h:5(a,d,e){b.1j?a.Q("K-5b"+d[0].5c.1n(/[^a-2Y-5e-9\\-\\2W]/g,"")):a.Q("K-5b"+d[0].2A.1n(/[^a-2Y-5e-9\\-\\2W]/g,""))},5g:5(a){1v{a.7("a[1q=\'"+a.7(".3e").27()+"\']").Q("1V");8 d=15;a.7("2f").3E(5(){8 a=r(1x);d=15===d?a:d;3C(d.11("1L")||0,10)<3C(a.11("1L")||0,10)&&(d=a)});d.4M(\'<2I 1i="K-55"></2I>\');d.7I().Q("K-2x");8 e=1R(\'<1o 1i="K-7H"><2I 1i="K-56"></2I></1o>\'),c=1R(\'<1o 1i="3o"></1o>\'),g=a.7(".3m");g.4M(e);g.3t(c);a.7(".3s").3t(c);c.3t(e);S(1>f.3v){8 e=/\\7G\\$\\s[0-9]+,[0-9]{1,2}/i,h=a.7(".K-1U").1D();-1<h.7E(e)&&(b.3w=h.1n(e," R$ #2Z"));f.3v++}}1w(k){l(["3y 21 3S o 3x 7F. 4I: ",k.1B],"1m")}}};E=5(a,d,e,c){5 g(a,d,c,e){1v{h=h||{4f:{},M:{}};h.4f[c]=a;1d(8 g 1t a.1G)"5"!==P a.1G[g]&&(k.1a(a.1G[g].M+";"+e),f.3p[a.1G[g].M]=c,h.M[a.1G[g].M]=a.1G[g],h.M[a.1G[g].M].1r=c);d(k);b.4l();r(1C).20("1Y.7J",1x)}1w(n){l(["7K 4u 7P 4v\\4G o 7O 3l 7N\\2N\\19 a 4D 3d 1s 3l 7L. 4I: ",n.1B],"1m")}}5 n(a,b,c){8 d=!1;S(C)1v{(d=2l.4K(1C.4x.7M("4w"+b)))&&g(d,a,b,c)}1w(e){l("3y 21 7D o 7C. "+e.1B,"1m")}d||r.4r({2w:"/4D/7u/7t/7s/7q/"+b,7r:"4p",57:5(d){g(d,a,b,c);C&&1C.4x.7v("4w"+b,2l.4z(d),7w)},2q:5(){l("3q 21 53 1N 59 5f 3d 1M 23 1s")},4P:15})}8 k=[];b.4C(c,d,e,5(c){S(c)1v{8 f=1,g=0;n(5(b){g+=1;f===g&&a(b)},d,e);1d(8 h=0;h<c.V&&(!b.4B||h!==b.2R);h++)f+=1,n(5(b){g+=1;f===g&&a(b)},c[h].34,c[h].2w)}1w(k){l(k.1B)}22 n(5(b){a(b)},d,e)})};F=5(a,b,e,c,g,l,k){f.2M(a,b,g,[h.M[b]],l,k)};B=5(a,b,e){S("1b"!==P h.M[a]&&"1b"!==P h.M[a].1Z)U"5"===P b&&b(h.M[a].1Z),h.M[a].1Z;r.4r({2w:"/1s/M/"+a,1h:"4p",57:5(c){h.M[a].1Z=c;"5"===P b&&b(h.M[a].1Z)},2q:5(){l("3q 21 53 1N 7B 59 5f 23 1M.")},7A:"1b"!==P e?e:!1,4P:15});U h.M[a].1Z};f.2C=1R(1x);f.4O();b.3a();r(1C).20("1Y.7z",1x);U f.2C}1w(a){l(["3y 21 3S o 7x 2i 1X, 7y: ",a.1B],"1m")}}}})(1x,1R);',62,533,'|||||function|25C2|find|var||||||||||||||||||||||||||||||||||||||vtex||sku|||typeof|addClass||if||return|length|removeClass|25A8oe|25A8pbz|||attr|||qd|null||||u00e3o|push|undefined|qd_cpHide|for|dimension|console|qd_cpShow|data|class|isSmartCheckout|speedFade|dimensions|alerta|replace|span|stop|href|productId|produto|in|info|try|catch|this|foi|toLowerCase|visible|message|window|text|string|html|skus|Id|qriunina|productNameLimiter|li|width|SKU|obter|jjj|u0391|25A8igrkpbzzrepr|jQuery|uniqueSkuByDimension|split|cpSave|qd_cpProductLink|apply|Prateleira|QuatroDigital|fullData|trigger|ao|else|do|height|||val|fadeTo|numberFormat|qrirybc|vtex_cpActiveSku|25A8igrkpbzzreprorgn|u00edvel|fadeOut|img|imageSize|u201d|Cores|object|cp|JSON|25A8igrkpbzzreprfgnoyr|src|productOriginalInfo|currency|error|break|groupSkuByDimension|imageLabel|cpSkuImage|no|url|cpProductImage|image|pois|Name|productOriginalSave|productShelf|onHover|imageUrl|cpOriginalImage|poss|first|div|unina|link|cpProductName|checkIsAvaliable|u00e7|trim|100|cpSkuIds|thumbsQuantity|minSkuQttShow|na|join|thumbSize|_|productOriginalLink|zA|value||QD_coresPrateleira|label|ignorado|id|para||thumbByLabel|D1|getImageUrl|callback|C2|alt|de|qd_cpUri|append|fn|campo|primarySkuThumb|u201c|count|da|qd_cpProductInfo|cpInfoFromSKU|qd_cpProductInfoWrap|skuProduct|Erro|not|qd_cpProductUnavailable|appendTo|restoreOriginalDetails|saveCount|saveText|auto|Problemas|hide|forceAvailable|setOriginalImg|parseInt|shift|each|addSkuIdInURL|qd_cpFullRegularPrice|setThumbs|warn|action|qd_cpInstallment|setOriginalElements|replaceProductName|loadSku|autoSetup|u0472|setOriginalSaveText|selector|executar|call|hasClass|productHtml|productNameStopInLastWord|pop|u2202|unshift|show|B8|cpLoadingData|thumbImgId|cpInnerLink|setOriginalLink|setImgThumb|E0|aviso|cpImgsThumb|mouseActions2|productImgId|thumbRendered|substring|thumb|prod|nenhum|productsLi|qd_cp_mouse|possui|25A8unina|ajaxCallback|bind|title|Price|json|bestPrice|qdAjax|checkLinkEquals|qd_cpViewMore|um|ap|QD_cp_prod_info_|qdSessionStorage|forceImgList|stringify|ref|limitRequestSimilarProducts|similarProducts|api|formatInfo|createSkuElementsList|u00f3s|available|Detalhes|useProductField|parse|checkDuplicateSKUByDimenion|before|esta|init|clearQueueDelay|25A8qriunina|cpIsActivated|imagem|qd_cpListPriceWrap|checkDuplicateUri|qd_cpProdId|groupSku|indexOf|getProductInfo|toString|wrapper|por|vitrine|tentar|mesmo|cpImgOverlay|cpOverlay|success|URI|os|exec|cp_|skuname|tem|Z0|dados|shelfSetup|setClass|encontrada|helperComplement|agrupamento|qtt|estoque|se|Certifique|ter|passado|u00f5|op|correto|parametro|Wrapper|este|SKUs|existente|cpProductField|qd_cpSkuList|total|mas|restou|especifica|que|number|continue|fromCharCode|prateleira|jj|un|cores|productPageUrl|200|Cor|ids|ina|uni|25A|8qriunina|5A8igrkpbzzreprorgn|A8unina|5A8unina|unin|qriryb|espec_0|name|suporte|functions|layout|navegador|Este|document|location|debugcp|messageRequestFail|posss|item|Economize|skuGroupSelector|deste|u00f5es|as|informa|A8igrkpbzzreprfgnoyr|5C2|u00a1|u03a1|u0ae8|u2113|u221a|eval|u0e17|u00c3|u0aef|u0abd|loadSkuJqxhr|skuList|skuQueue|extend|http|u01ac|u0472J|C5|A1|String|90|122|u00a8|encodeURIComponent|25A8qriunin|ti|escape|charCodeAt|tr|CF|83d|A1g|8F|qu|ls|rc|productSkus|isNaN|padr|objeto|Path|IsMain|encontradas|imagens|fornecido|ambiente|ou|em|inexistente|u00e9|SmartCheckout|Images|substr|none|load|display|style|siblings|css|background|descontinuado|toFixed|u00e9todo|Esse|cpThumb_|formato|esperado|variations|dataType|products|pub|catalog_system|setItem|120|QD|detalhes|cp_callback|async|todos|cache|usar|search|setup|sR|cpProductTextWrap|parent|cp_ajaxCallback|Ocorreu|VTEX|getItem|requisi|retorno|problema|naturalHeight|foram|cp_thumbMouseleave|mouseleave|cpFirst|cp_thumbMouseenter|Availability|primary|encontrado|BestInstallmentNumber|cpInner|installments||clone||children|u201cqd_cpUri|cpIndex_|cpSkuId_|u201cqd_cpProdId|cp_liAjaxCallback|getRelatedProductInfo|mouseenter|concat|naturalWidth|ID|URL|listPrice|thumbs|retornando|uma|valor|existe|u00e1|cp_thumbsWrapperAdd|BestInstallmentValue|installmentsValue|qd_cpInstallmentValue|availables|Produto|qd_cpBestPrice|u00edtulo|com|ListPrice|qd_cpNumbersOfInstallment|cpInner2|qd_cpListPrice'.split('|'),0,{}));
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* Quatro Digital - Mosaic Banners // 1.1 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners").QD_mosaicBanners()})}})(this);
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital Cookie Functions // 1.5 // Carlos Vinicius // Todos os direitos reservados */
(function(){var a,h,g;a=jQuery;g={cookieName:"Nome_Padrao",closeLimit:2,expireDays:365,completeExpireDays:365,path:"/",close:"[class*=close]",show:function(a){a.slideDown()},hide:function(a){a.slideUp()},callback:function(){},exceededLimitCallback:function(){},closeCallback:function(){}};var k=function(a,d){if("object"===typeof console){var e;"object"===typeof a?(a.unshift("[Cookie Functions]\n"),e=a):e=["[Cookie Functions]\n"+a];"undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase()?
"undefined"!==typeof d&&"info"===d.toLowerCase()?console.info.apply(console,e):console.error.apply(console,e):console.warn.apply(console,e)}};a.QD_cookieFn=function(f){if("function"!==typeof a.cookie)return k("Aeeeee irm\u00e3\u00e3\u00e3ooooo!\nEsta faltando o plugin $.cookie mew. Chama ele na p\u00e1gina, vlw!");var d=function(c,b){var d=a.cookie("qdCookieFn_"+b.cookieName);if("undefined"!==typeof d&&d>=b.closeLimit||a.cookie("qdCookieFn_"+b.cookieName+"_complete"))return b.exceededLimitCallback();
b.show(c);c.trigger("QuatroDigital.cf_show");a(c).on("qdNewsSuccessCallback",function(a,d){c.trigger("QuatroDigital.qdcf_applyComplete");b.show(c);c.trigger("QuatroDigital.cf_hide")});b.callback();c.trigger("QuatroDigital.cf_callback")},e=function(a,b){a.find(b.close).not(".qd-cookie-on").addClass("qd-cookie-on").bind("click",function(){a.trigger("QuatroDigital.cf_close");a.slideUp(function(){b.closeCallback()})})},g=function(c,b){c.bind("QuatroDigital.cf_close",function(){"undefined"===typeof a.cookie("qdCookieFn_"+
b.cookieName)?a.cookie("qdCookieFn_"+b.cookieName,1,{expires:b.expireDays,path:b.path}):a.cookie("qdCookieFn_"+b.cookieName,(parseInt(a.cookie("qdCookieFn_"+b.cookieName),10)||0)+1,{expires:b.expireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyComplete",function(){a.cookie("qdCookieFn_"+b.cookieName+"_complete",1,{expires:b.completeExpireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyLimit",function(){a.cookie("qdCookieFn_"+b.cookieName,b.closeLimit,{expires:b.expireDays,path:b.path})})};
f.each(function(){var c=a(this),b;try{if(b=c.attr("data-qd-cookie"))var f=a.parseJSON("{"+b+"}")}catch(l){k(['Aeee irm\u00e3ooo!\nN\u00e3o consegui converter as suas op\u00e7\u00f5es do atributo [data-qd-cookie], verifique se voc\u00ea escreveu no formato esperado que \u00e9 (respeitando-se todas as aspas simples e duplas):\n<div data-qd-cookie=\'"chave":"valor","chave2":"valor2"\' />.',"\n\nDetalhes do erro: "+l.message],"alerta"),f={}}b=a.extend({},h,f);g(c,b);d(c,b);e(c,b)})};a.fn.QD_cookieFn=
function(f){var d=a(this);h=a.extend(!0,{},g,f);d.QD_cookieFn=new a.QD_cookieFn(d);return d};a(function(){a("[data-qd-cookie]").QD_cookieFn()})})();
/* Quatro Digital Plus Smart Cart // 6.7 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7(){15{8.1t=8.1t||{},8.1t.1L=8.1t.1L||$.5P()}1e(h){"V"!==B M&&"7"===B M.1a&&M.1a("2j! ",h.3a)}})();(7(h){15{E a=3i,c=7(a,b){W("1r"===B M&&"V"!==B M.1a&&"V"!==B M.1G&&"V"!==B M.2E){E d;"1r"===B a?(a.5Q("[3e 3c - 2t 3b]\\n"),d=a):d=["[3e 3c - 2t 3b]\\n"+a];W("V"===B b||"3z"!==b.2I()&&"3K"!==b.2I())W("V"!==B b&&"1G"===b.2I())15{M.1G.2H(M,d)}1e(c){15{M.1G(d.2a("\\n"))}1e(q){}}1H 15{M.1a.2H(M,d)}1e(c){15{M.1a(d.2a("\\n"))}1e(q){}}1H 15{M.2E.2H(M,d)}1e(c){15{M.2E(d.2a("\\n"))}1e(q){}}}};8.G=8.G||{};8.G.2k=!0;a.1T=7(){};a.1k.1T=7(){S{1k:3g a}};E b=7(a){E b={j:"5N%i%3X%i%U%i%T",5L:"5M%i%U%i%T",5R:"5S%i%1S%i%U%i%T",5X:"a%i%20%i%U%i%T",2s:"%i%22%i%U%i%T",5W:"c-2s%i%1S%i%U%i%T",2g:"-2s%i%20%i%U%i%T","2g-":"2s%i%22%i%U%i%T","1E%i%":"3X%i%1S%i%U%i%T","1E%i%2":"5U%i%20%i%U%i%T","1E%i%25":"5K%i%22%i%U%i%T","1E%i%5J":"5A%i%U%i%T","1F%i":"%U%i%T","1F%i%":"1S%i%U%i%T","1F%i%2":"5B%i%U%i%T","1F%i%25":"5z%i%U%i%T","2g-1F%":"i%1S%i%U%i%T","2g-1F%2":"5y%20%i%U%i%T","2g-1F%25":"2V%22%i%U%i%T","1E%i%5C":"a%i%1S%i%U%i%T","1E%i%3W":"%i%20%i%U%i%T","1E%i%3W%":"i%22%i%U%i%T"};S 7(a){E c,f,k,g;f=7(a){S a};k=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];a=a["d"+k[16]+"c"+k[17]+"m"+f(k[1])+"n"+k[13]]["l"+k[18]+"c"+k[0]+"5Y"+f("o")+"n"];c=7(a){S 5Z(6j(a.1q(/\\./g,"\\6k").1q(/[a-6i-Z]/g,7(a){S 6h.6f(("Z">=a?6g:6l)>=(a=a.6m(0)+13)?a:a-26)})))};29(E h 2D b){W(c(a[[k[9],f("o"),k[12],k[f(13)]].2a("")])===h+b[h]){g="6r"+k[17]+"e";6q}g="f"+k[0]+"6p"+f(k[1])+""}f=!1;-1<a[[k[12],"e",k[0],"6n",k[9]].2a("")].6e("6d%3Y%3Z%41%2Q%2T%2Q%64%65%63%2V%62%2V%61%2Q%2T%3Y%3Z%41%6c%2T")&&(f=!0);S[g,f]}(a)}(h);W(!6a(b[0]))S b[1]?c("\\68\\69\\3U \\6s\\1Q\\5q\\4Y\\40\\1Q\\40\\3U \\4U\\1Q\\4V\\1Q \\4Z\\50\\4T\\1Q L\\51\\1Q!"):!1;a.1T=7(b,h){E d,t,q,k,g,r,v;r=a(b);W(!r.1v)S r;d=a.3s(!0,{},{2e:!0,11:{4c:"4Q 35 4L",46:"4M 4S",1o:"<C><H>47: #F</H><H>4R: #3f</H></C><C><H>4N: #1B</H><H>4P: #2Y</H></C>",2u:"4O 1K 52 n\\Q 3V 5u 3D.",4b:"5n 56",44:\'<3T 29="4-6-3O">5m 4v: </3T><1X 3q="5l" 1W="4-6-3O" 5o="3k" />\'},33:5t,1Y:!0,2K:7(a){S a.2K||a.5s},1L:7(){},2z:7(){}},h);a("");g=I;W(d.1Y){E w=!1;"V"===B 8.2B&&(c("A 3R 38.1U n\\Q 1j 3S. o 5i 3l\\2Z 5a 36 57"),a.58({5c:"//3N.1i.2O.3M/1i.1U/1.0.0/1i.3P.1U",5d:!1,5h:"5f",1a:7(){c("N\\Q 1j 1w\\1y 2M \'//3N.1i.2O.3M/1i.1U/1.0.0/1i.3P.1U\' o 2t n\\Q 5e\\2Z 5g.");w=!0}}));W(w)S c("A 59\\1D\\Q 1z 2t 5b\\2Z 5r 5p!")}E u;W("1r"===B 8.2B&&"V"!==B 8.2B.1m)u=8.2B.1m;1H W("1r"===B 1i&&"1r"===B 1i.1m&&"V"!==B 1i.1m.3Q)u=3g 1i.1m.3Q;1H S c("N\\Q 1j 3S a 3R 38.1U");g.3L=\'<C D="4-6-1x 4-6-2L"><C D="4-6-3J"><C D="43"></C><C D="4-6-67"><C D="4-6-2u"><p></p></C><C D="4-6-42 4-6-6t"><a 1u="#" D="4-6-4f"></a><C D="4-6-2J"> <C D="4-6-2S"></C> </C><H D="4-6-7T"></H><a 1u="#" D="4-6-4g"></a></C><C D="4-6-42 4-6-1G"><C D="4-6-1B"></C><C D="4-6-45"></C><C D="4-6-7E"><a 1u="/1m/#/2c" D="4-6-4h"></a><a 1u="#" D="2W"></a><a 1u="/1m/#/7D" D="4-6-1m"></a></C></C></C></C></C>\';t=7(e){a(I).2U(e);e.K(".2W, .43").1J(a(".7s")).1d("1M.2R",7(){r.X("4-2w-4e");a(2v.2f).X("4-2w-4d")});a(2v).7p("2x.2R").7m("2x.2R",7(e){27==e.4s&&(r.X("4-2w-4e"),a(2v.2f).X("4-2w-4d"))});E l=e.K(".4-6-2J");e.K(".4-6-4f").1d("1M.7A",7(){g.2m("-",1h 0,1h 0,l);S!1});e.K(".4-6-4g").1d("1M.7u",7(){g.2m(1h 0,1h 0,1h 0,l);S!1});e.K(".4-6-1B 1X").1c("").1d("2x.7n",7(){g.4l(a(I))});W(d.2e){E b=0;a(I).1d("7F.4i",7(){E e=7(){8.G.2k&&(g.1I(),8.G.2k=!1,a.1k.2o(!0),g.23())};b=7L(7(){e()},7S);e()});a(I).1d("7r.4i",7(){7x(b)})}};q=7(e){e=a(e);d.11.1o=d.11.1o.1q("#3f",\'<H D="4-6-4k"></H>\');d.11.1o=d.11.1o.1q("#F",\'<H D="4-6-48"></H>\');d.11.1o=d.11.1o.1q("#1B",\'<H D="4-6-4a"></H>\');d.11.1o=d.11.1o.1q("#2Y",\'<H D="4-6-49"></H>\');e.K(".4-6-4h").1f(d.11.4c);e.K(".2W").1f(d.11.4b);e.K(".4-6-1m").1f(d.11.46);e.K(".4-6-45").1f(d.11.1o);e.K(".4-6-1B").1f(d.11.44);e.K(".4-6-2u p").1f(d.11.2u);S e}(I.3L);k=0;r.1Z(7(){0<k?t.1g(I,q.7q()):t.1g(I,q);k++});8.1t.1L.1J(7(){a(".4-6-4k").1f(8.1t.2Y||"--");a(".4-6-48").1f(8.1t.1N||"0");a(".4-6-4a").1f(8.1t.1B||"--");a(".4-6-49").1f(8.1t.7Q||"--")});v=7(a,b){W("V"===B a.F)S c("N\\Q 1j 1w\\1y 2M 1R F 4q 7R\\1D\\Q");g.3o.1g(I,b)};g.1I=7(e,b){E g;a(".4-6-1x").X("4-6-3p");d.1Y?(g=7(e){8.G.P=e;v(e,b);"V"!==B 8.J&&"7"===B 8.J.1A&&8.J.1A.1g(I);a(".4-6-1x").14("4-6-3p")},"V"!==B 8.G.P?(g(8.G.P),"7"===B e&&e(8.G.P)):a.7M(["F","2P","2q"],{2i:7(a){g.1g(I,a);"7"===B e&&e(a)},2p:7(a){c(["N\\Q 1j 1w\\1y 2M 1R 2b 1z 1K",a])}})):2G("7K m\\2r 28 2n!")};g.23=7(){E e=a(".4-6-1x");e.K(".4-6-30").1v?e.X("4-6-2L"):e.14("4-6-2L")};g.3o=7(e){E b=a(".4-6-2S");b.2N();b.1Z(7(){E b=a(I),l,m,n,f,k=a(""),p;29(p 2D 8.G.P.F)"1r"===B 8.G.P.F[p]&&(n=8.G.P.F[p],m=a(\'<C D="4-6-30 7I"><C D="4-6-2d 4-6-7H 4-6-7O"><C D="4-6-7z"><7k 3y="" D="4-6-3j" /><H D="4-6-6M"></H></C></C><C D="4-6-2d 4-6-6L 4-6-3n"></C><C D="4-6-2d 4-6-6K 4-6-3t"></C><C D="4-6-2d 4-6-6I 4-6-6J"><C D="4-6-4G 3r"><a 1u="#" D="4-6-2X"></a><1X 3q="6O" D="4-6-1s" /><a 1u="#" D="4-6-32"></a><H D="4-6-6S"></H></C></C><C D="4-6-2d 4-6-6R 4-6-6Q"><C D="4-6-7l 3r"><a 1u="#" D="4-6-24"></a><H D="4-6-6H"></H></C></C></C>\'),m.19({"Y-10":n.1W,"Y-10-1l":p}),m.14(".4-6-"+n.6y),m.K(".4-6-3n").2U(d.2K(n)),m.K(".4-6-3t").2U(3h(n.2y)?n.2y:0==n.2y?"6v\\6z":"R$ "+6A(n.2y/6E,2,",",".")),m.K(".4-6-1s").19({"Y-10":n.1W,"Y-10-1l":p}).1c(n.1s),m.K(".4-6-24").19({"Y-10":n.1W,"Y-10-1l":p}),g.3w(n.1W,m.K(".4-6-3j"),n.6B),m.K(".4-6-32,.4-6-2X").19({"Y-10":n.1W,"Y-10-1l":p}),m.6C(b),k=k.1J(m));15{E h=b.4H(".4-6-1x").K(".4-6-1B 1X");h.1v&&""==h.1c()&&h.1c(8.G.P.2q.6U.4z)}1e(x){c("4I 35 3l 7c o 3k 2O 7b 79 2b 1z 1m. 4t: "+x.3a,"3K")}g.3A();g.23();e&&e.3F&&7(){f=k.7e("[Y-10=\'"+e.3F+"\']");f.1v&&(l=0,k.1Z(7(){E e=a(I);W(e.7f(f))S!1;l+=e.7j()}),g.2m(1h 0,1h 0,l,b.1J(b.7i())),k.X("4-6-3E"),7(a){a.14("4-6-3G");a.14("4-6-3E");3u(7(){a.X("4-6-3G")},d.33)}(f))}()});(7(){G.P.F.1v?(a("2f").X("4-6-2c-2N").14("4-6-2c-3C 4-6-3H-1J-3I"),3u(7(){a("2f").X("4-6-3H-1J-3I")},d.33)):a("2f").X("4-6-2c-3C").14("4-6-2c-2N")})();"7"===B d.2z?d.2z.1g(I):c("2z n\\Q \\1P 34 4y\\1D\\Q")};g.3w=7(e,b,d){7 g(){b.X("4-3v").6Y(7(){a(I).14("4-3v")}).19("3y",d)}d?g():3h(e)?c("N\\Q 1j 6W 34 70 3x a 71 e 76 3B 31","3z"):2G("4x\\1D\\Q 39 \\1P 3B m\\2r 2n. 74 o 72.")};g.3A=7(){E e,b,d,f;e=7(b,e){E d,f,c,l;c=a(b);d=c.19("Y-10");l=c.19("Y-10-1l");d&&(f=2F(c.1c())||1,g.2l([d,l],f,f+1,7(a){c.1c(a);"7"===B e&&e()}))};d=7(b,e){E d,f,c,l;c=a(b);d=c.19("Y-10");l=c.19("Y-10-1l");d&&(f=2F(c.1c())||2,g.2l([d,l],f,f-1,7(a){c.1c(a);"7"===B e&&e()}))};f=7(b,e){E d,f,c,l;c=a(b);d=c.19("Y-10");l=c.19("Y-10-1l");d&&(f=2F(c.1c())||1,g.2l([d,l],1,f,7(a){c.1c(a);"7"===B e&&e()}))};b=a(".4-6-4G:73(.4F)");b.14("4F").1Z(7(){E c=a(I);c.K(".4-6-32").1d("1M.6V",7(a){a.4K();b.14("4-1n");e(c.K(".4-6-1s"),7(){b.X("4-1n")})});c.K(".4-6-2X").1d("1M.6Z",7(a){a.4K();b.14("4-1n");d(c.K(".4-6-1s"),7(){b.X("4-1n")})});c.K(".4-6-1s").1d("77.4C",7(){b.14("4-1n");f(I,7(){b.X("4-1n")})});c.K(".4-6-1s").1d("2x.4C",7(a){13==a.4s&&(b.14("4-1n"),f(I,7(){b.X("4-1n")}))})});a(".4-6-30").1Z(7(){E b=a(I);b.K(".4-6-24").1d("1M.78",7(){b.14("4-1n");g.4A(a(I),7(a){a?b.4E(!0).7g(7(){b.24();g.23()}):b.X("4-1n")});S!1})})};g.4l=7(a){E b=a.1c(),b=b.1q(/[^0-9\\-]/g,""),b=b.1q(/([0-9]{5})\\-?([0-9])([0-9]{2})?/g,"$1-$2$3"),b=b.1q(/(.{9}).*/g,"$1");a.1c(b);9<=b.1v&&(a.Y("4w")!=b&&u.6D({4z:b,6u:"6x"}).2i(7(a){8.G.P=a;g.1I()}).2p(7(a){c(["N\\Q 1j 1w\\1y 6P o 4v",a]);6N()}),a.Y("4w",b))};g.2l=7(b,f,k,h){7 m(b){b="4u"!==B b?!1:b;g.1I();8.G.2k=!1;g.23();"V"!==B 8.J&&"7"===B 8.J.1A&&8.J.1A.1g(I);"7"===B 2h&&2h();a.1k.2o(!0,1h 0,b);"7"===B h&&h(f)}k=k||1;W(1>k)S f;W(d.1Y){W("V"===B 8.G.P.F[b[1]])S c("N\\Q 1j 1w\\1y 4D 1R 2b 1z 1O. A 4n 4m \\1P 4o 4r 31: 8.G.P.F["+b[1]+"]"),f;8.G.P.F[b[1]].1s=k;8.G.P.F[b[1]].1l=b[1];u.7P([8.G.P.F[b[1]]],["F","2P","2q"]).2i(7(a){8.G.P=a;m(!0)}).2p(7(a){c(["N\\Q 1j 1w\\1y 4J a 7N 7G 7C 36 1K",a]);m()})}1H c("7o\\1D\\Q 28 m\\2r 28 2n")};g.4A=7(b,f){7 g(b){b="4u"!==B b?!1:b;"V"!==B 8.J&&"7"===B 8.J.1A&&8.J.1A.1g(I);"7"===B 2h&&2h();a.1k.2o(!0,1h 0,b);"7"===B f&&f(k)}E k=!1,h=a(b).19("Y-10-1l");W(d.1Y){W("V"===B 8.G.P.F[h])S c("N\\Q 1j 1w\\1y 4D 1R 2b 1z 1O. A 4n 4m \\1P 4o 4r 31: 8.G.P.F["+h+"]"),k;8.G.P.F[h].1l=h;u.7J([8.G.P.F[h]],["F","2P","2q"]).2i(7(a){k=!0;8.G.P=a;v(a);g(!0)}).2p(7(a){c(["N\\Q 1j 1w\\1y 4X o 1O 1z 1K",a]);g()})}1H 2G("4x\\1D\\Q, 39 m\\2r 28 2n.")};g.2m=7(b,d,c,f){f=f||a(".4-6-2J, .4-6-2S");b=b||"+";d=d||.9*f.5O();f.4E(!0,!0).5V({5T:3h(c)?b+"="+d+"5H":c})};d.2e||(g.1I(),a.1k.2o(!0));a(8).1d("5v.4B 4W.1i.4B",7(){15{8.G.P=1h 0,g.1I()}1e(a){c("4I 35 4J 1R 2b 1z 1K a 53 1z 7B 4q 38. 4t: "+a.3a,"7w")}});"7"===B d.1L?d.1L.1g(I):c("7v n\\Q \\1P 34 4y\\1D\\Q")};a.1k.1T=7(b){E c;c=a(I);c.1k=3g a.1T(I,b);S c}}1e(f){"V"!==B M&&"7"===B M.1a&&M.1a("2j! ",f)}})(I);(7(h){15{E a=3i;8.J=8.J||{};8.J.F={};8.J.1V=!1;8.J.6T=!1;8.J.7d=!1;E c=7(){E b,c,h,d;W(8.J.1V){c=!1;h={};8.J.F={};29(d 2D 8.G.P.F)"1r"===B 8.G.P.F[d]&&(b=8.G.P.F[d],"V"!==B b.1b&&7h!==b.1b&&""!==b.1b&&(8.J.F["1C"+b.1b]=8.J.F["1C"+b.1b]||{},8.J.F["1C"+b.1b].4p=b.1b,h["1C"+b.1b]||(8.J.F["1C"+b.1b].1N=0),8.J.F["1C"+b.1b].1N+=b.1s,c=!0,h["1C"+b.1b]=!0));d=c}1H d=1h 0;8.J.1V&&(a(".4-1p-1x").24(),a(".4-1p-1O-37").X("4-1p-1O-37"));29(E t 2D 8.J.F){b=8.J.F[t];W("1r"!==B b)S;h=a("1X.4-1b[3f="+b.4p+"]").4H("6X");W(8.J.1V||!h.K(".4-1p-1x").1v)c=a(\'<H D="4-1p-1x" 75="47 36 1K 3x 39 3D."><H D="4-1p-3J"><H D="4-1p-1N"></H></H></H>\'),c.K(".4-1p-1N").1f(b.1N),b=h.K(".7a"),b.1v?b.3m(c).14("4-1p-1O-37"):h.3m(c)}d&&(8.J.1V=!1)};8.J.1A=7(){8.J.1V=!0;c.1g(I)};a(2v).6F(7(){c.1g(I)})}1e(b){"V"!==B M&&"7"===B M.1a&&M.1a("2j! ",b)}})(I);(7(){15{E h=3i,a,c={2A:".6w",21:{},2C:{}};h.6G=7(b){E f={};a=h.3s(!0,{},c,b);b=h(a.2A).1T(a.21);f.2C="V"!==B a.21.2e&&!1===a.21.2e?h(a.2A).4j(b.1k,a.2C):h(a.2A).4j(a.2C);f.21=b;S f};h.1k.3d=7(){"1r"===B M&&"7"===B M.1G&&M.1G("O 7y 3b n\\Q \\1P 7t 54 5k 5j. A 55\\Q 6b 66\\60 28 6o 3V 5F\\5E 5G e 5I 1R 5D 5x \\5w 3e 3c.")};h.3d=h.1k.3d}1e(b){"V"!==B M&&"7"===B M.1a&&M.1a("2j! ",b)}})();',62,490,'||||qd||ddc|function|window||||||||||25C2|||||||||||||||||||typeof|div|class|var|items|_QuatroDigital_DropDown|span|this|_QuatroDigital_AmountProduct|find||console|||getOrderForm|u00e3o||return|25A8oe|25A8pbz|undefined|if|removeClass|data||sku|texts|||addClass|try||||attr|error|productId|val|bind|catch|html|call|void|vtex|foi|fn|index|checkout|loading|cartTotal|bap|replace|object|quantity|_QuatroDigital_CartData|href|length|poss|wrapper|u00edvel|do|exec|shipping|prod_|u00e7|jjj|qriunina|info|else|getCartInfoByUrl|add|carrinho|callback|click|qtt|item|u00e9|u0391|os|25A8igrkpbzzrepr|QD_dropDownCart|js|allowRecalculate|id|input|smartCheckout|each|25A8igrkpbzzreprorgn|dropDown|25A8igrkpbzzreprfgnoyr|cartIsEmpty|remove||||esta|for|join|dados|cart|prodCell|updateOnlyHover|body|qrirybc|adminCart|done|Oooops|allowUpdate|changeQantity|scrollCart|descontinuado|simpleCart|fail|shippingData|u00e9todo|unina|DropDown|emptyCart|document|bb|keyup|sellingPrice|callbackProductsList|selector|vtexjs|buyButton|in|warn|parseInt|alert|apply|toLowerCase|prodWrapper|skuName|noItems|obter|empty|com|totalizers|D1|qd_ddc_closeFn|prodWrapper2|82|append|C2|qd_ddc_continueShopping|quantityMinus|total|u00e1|prodRow|SKU|quantityMore|timeRemoveNewItemClass|uma|ao|no|added|VTEX|este|message|Cart|Digital|smartCart|Quatro|value|new|isNaN|jQuery|image|CEP|tentar|prepend|prodName|renderProductsList|prodLoaded|type|clearfix|extend|prodPrice|setTimeout|loaded|insertProdImg|para|src|alerta|actionButtons|um|rendered|produto|lastAddedFixed|lastSku|lastAdded|product|time|wrapper2|aviso|cartContainer|br|io|cep|min|SDK|biblioteca|encontrada|label|u0472|tem|25A8qriunina|25A8unina|E0|B8|u2202|84|row|qd_ddc_lightBoxClose|shippingForm|infoTotal|linkCheckout|Itens|infoTotalItems|infoAllTotal|infoTotalShipping|continueShopping|linkCart|lightBoxBodyProdAdd|lightBoxProdAdd|scrollUp|scrollDown|viewCart|qd_ddc_hover|QD_buyButton|infoTotalValue|shippingCalculate|buscada|chave|composta|prodId|da|pelo|keyCode|Detalhes|boolean|frete|qdDdcLastPostalCode|Aten|fun|postalCode|removeProduct|qdDdcVtex|qd_ddc_change|localizar|stop|qd_on|prodQttWrapper|getParent|Problemas|atualizar|preventDefault|Carrinho|Finalizar|Frete|Seu|Total|Ir|Subtotal|Compra|u01ac|u03a1|u0ae8|minicartUpdated|remover|u00a1|u0aef|u0abd|u0472J|ainda|partir|iniciado|vers|Comprando|CDN|ajax|execu|buscar|par|url|async|ser|script|executado|dataType|Script|forma|desta|tel|Calcular|Continuar|placeholder|aqui|u2113|por|name|5E3|nenhum|productAddedToCart|u00e0|reservados|5C2|A8igrkpbzzreprfgnoyr|8qriunina|5A8igrkpbzzreprorgn|25A8qriunin|direitos|u00e7a|licen|restrita|px|todos|25A|A8unina|un|ina|jj|height|Callbacks|unshift|uni|na|scrollTop|5A8unina|animate|qriryb|unin|ti|escape|u00ea|A1|A1g|83d|8F|CF|voc|wrapper3|u0e17|u00c3|eval|que|C5|qu|indexOf|fromCharCode|90|String|zA|encodeURIComponent|u00a8|122|charCodeAt|rc|executando|ls|break|tr|u221a|products|country|Gr|qdDdcContainer|BRA|availability|u00e1tis|qd_number_format|imageUrl|appendTo|calculateShipping|100|ajaxStop|QD_smartCart|prodRowLoading|column4|prodQtt|column3|column2|imgLoading|updateCartData|text|calcular|prodRemove|column5|qttLoading|buyButtonClicked|address|qd_ddc_more|informada|li|load|qd_ddc_minus|URL|imagem|SAC|not|Contacte|title|nem|focusout|qd_ddc_remove|nos|qd_bap_wrapper_content|base|definir|quickViewUpdate|filter|is|slideUp|null|parent|outerHeight|img|removeWrapper|on|qd_ddc_cep|aten|off|clone|mouseleave|qd_ddc_lightBoxOverlay|mais|qd_ddc_scrollDown|Callback|avisso|clearInterval|Smart|prodImgWrapper|qd_ddc_scrollUp|eveento|itens|orderform|infoBts|mouseenter|de|column1|qd_ddc_prodRow|removeItems|Este|setInterval|QD_checkoutQueue|quantidade|prodImg|updateItems|allTotal|requisi|600|prodLoading'.split('|'),0,{}));
/*QD - SKU Select + Confirm*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(m(){$(m(){Q{z("B"!=v l){t a=$(\'<4 6="k 16 n-7-j-8-k" 1b="-1" 12="K" 14="1g:1x"> <4 6="k-K"> <4 6="k-1E"> <4 6="k-21"> <H 6="k-22">20 1Z 1W\\1X\\1Y 23\\24</H> <q 29="q" 6="1q" 2a-28="k" 27-13="25"><i 6="1a 1a-1V-2b"></i></q> </4> <4 6="k-G"> <4 6="1U"> <4 6="15-11-3"> <4 6="n-7-j-8-T"></4> </4> <4 6="15-11-9"> <4 6="n-7-j-8-S"> <17 6="1J"></17></4> <4 6="n-7-j-8-1e"></4> <4 6="n-7-j-8-U"></4> <4 6="n-7-j-8-y-q"><a x="" 6="y-q">1C</a></4> <4 6="n-7-j-8-1c-1l"></4> </4> </4> </4> </4> </4> </4> </4>\');a.r(".1q").V("D",m(){a.k("P")});a.r(".n-7-j-8-U").U(l.E);1n.1o&&a.r(".n-7-j-8-1c-1l").1G(l.E,{1j:1n.1o.1j});t d=a.r(".n-7-j-8-1e");d.1M(1S,{1T:"1R"});t e=a.r(".n-7-j-8-y-q a");e.1v(l.E,{1u:1t},{});e.D(m(){z("#"!=$(L).s("x"))a.k("P");1d{$(d).1Q("1N","2c");J(t b=0;5>b;b++)0==b&&d.1P(!0,!0),d.1i({1h:0==b%2?10:-10},1m);d.1i({1h:0},1m);M!1}});I={};t c=2r($("4[1f]:2s").s("1f"),10);z(c)J(t b=0;b<l.w.1k;b++){z(l.w[b].7==c){I=l.w[b];2C}}1d J(c=2A,b=0;b<l.w.1k;b++)l.w[b].2h&&l.w[b].1p<c&&(c=l.w[b].1p,I=l.w[b]);t h=a.r(".n-7-j-8-T");$(F).V("W.N",m(a,b,c){h.1B(\'<2j 2l="\'+c.T+\'" 2k="\'+c.2m+\'"/>\');d.r("2n").2i(m(){t a=$(L);a.s("R",a.s("R")+"2e");a.2d("13").s("J",a.s("R"))})});t f=!1;$("a.y-q").D(m(){z(!(0>($(L).s("x")||"").2z().1D("1r o 19 18")))M f||($(F.G).2y("W.N",[l.E,I]),$(":1w(2w[2t]) a.y-q").s("x","2u:2v(\'1O 2p, 1r o 19 18.\');"),e.s("x","#")),f=!0,a.k(),!1});a.1y(F.G)}}Z(g){"B"!==v u&&"m"===v u.C&&u.C("X :( . Y: ",g)}});$(m(){Q{z("B"!=v l){t a=$(\'<4 6="k 16 A-7-j-8-k" 1b="-1" 12="K" 14="1g:1x"> <4 6="k-K"> <4 6="k-1E"> <4 6="k-G"> <H>1I\\1L 1F O 2g</H> <p 6="A-7-j-8-S"></p> <4 6="A-7-j-8-1s"><a x="">&2x; 2q</a></4> <4 6="A-7-j-8-y-q"><a x="">1C &2f;</a></4> </4> </4> </4> </4>\'),d=a.r(".A-7-j-8-S"),e=a.r(".A-7-j-8-y-q a");e.1v(l.E,{1u:1t},{});a.r(".A-7-j-8-1s a").D(m(){a.k("P");M!1});$("a.y-q").1w(e).D(m(){z(!("B"==v l.2B["1A a 1z"]||0>($(L).s("x")||"").1D("/2o/26/1K")))M a.k(),!1});$(F).V("W.N",m(a,b,e){Q{d.1B(e.1H["1A a 1z"])}Z(f){"B"!==v u&&"m"===v u.C&&u.C("X :( . Y: ",f)}});a.1y(F.G)}}Z(c){"B"!==v u&&"m"===v u.C&&u.C("X :( . Y: ",c)}})})();',62,163,'||||div||class|sku|v1|||||||||||qd|modal|skuJson|function|select|||button|find|attr|var|console|typeof|skus|href|buy|if|confirm|undefined|error|click|productId|document|body|h4|skuData|for|dialog|this|return|vtex||hide|try|id|name|image|price|on|skuSelected|Problemas|Detalhes|catch||xs|role|label|style|col|fade|h3|desejado|modelo|fa|tabindex|notify|else|selector|skuCorrente|display|left|animate|strings|length|me|100|window|notifyMeOptions|bestPrice|close|selecione|cancel|jssalesChannel|salesChannel|buyButton|not|none|appendTo|Voltagem|Escolha|html|Comprar|indexOf|content|SELECIONOU|notifyMe|dimensions|VOC|productName|add|u00ca|skuSelector|position|Por|stop|css|true|skuJson_0|selectSingleDimensionsOnOpening|row|times|varia|u00e7|u00e3o|uma|Selecione|header|title|dispon|u00edvel|Close|cart|aria|dismiss|type|data|circle|relative|next|_qd|gt|PRODUTO|available|each|img|alt|src|skuname|input|checkout|favor|Cancelar|parseInt|first|layout|javascript|alert|li|lt|trigger|toLowerCase|99999999999999|dimensionsMap|break'.split('|'),0,{}));
/* Quatro Digital Newsletter */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
(function(){var d=jQuery;if("function"!==typeof d.fn.QD_news){var w={defaultName:"Digite seu nome...",defaultEmail:"Digite seu e-mail...",nameField:".qd_news_name",checkNameFieldIsVisible:!0,emailField:".qd_news_email",btn:".qd_news_button",originField:".qd_news_origin",elementError:".nv2_messageError",elementSuccess:".nv2_messageSuccess",validationMethod:"popup",getAttr:"alt",setDefaultName:!0,checkNameExist:!0,validateName:!0,showInPopup:!0,animation:"blink",animateSpeed:100,animateDistance:15,
animateRepeat:3,animateFieldSuccess:".qd_news_animate_field_success",timeHideSuccessMsg:3E3,platform:"vtexcrm",vtexStore:jsnomeLoja,entity:"NL",allowSubmit:function(){return!0},successCallback:function(){},submitCallback:function(d,g){}};d.fn.QD_news=function(t){var g=function(a,d){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var e;"object"===typeof a?(a.unshift("[QD News]\n"),e=a):e=["[QD News]\n"+a];if("undefined"===
typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,e)}catch(c){console.info(e.join("\n"))}else try{console.error.apply(console,e)}catch(c){console.error(e.join("\n"))}else try{console.warn.apply(console,e)}catch(c){console.warn(e.join("\n"))}}},k=d(this);if(!k.length)return k;var a=d.extend({},w,t);a.showInPopup||(a.validationMethod="div");null!==a.animation?a.validationMethod="animateField":"animateField"==
a.validationMethod&&(a.animation="leftRight");if("popup"==a.validationMethod&&"function"!==typeof d.fn.vtexPopUp2)return g("O popUp2 n\u00e3o foi encontrado. Adicione o Plugin de PopUp2."),k;var v=function(d){var g=0;var e=function(){d.animate({left:"-="+a.animateDistance},a.animateSpeed,function(){d.animate({left:"+="+a.animateDistance},a.animateSpeed,function(){g<a.animateRepeat&&e();g++})})};var c=function(){d.fadeTo(a.animateSpeed,.2,function(){d.fadeTo(a.animateSpeed,1,function(){g<a.animateRepeat&&
c();g++})})};d.stop(!0,!0);"leftRight"==a.animation?e():"blink"==a.animation&&c()};k.each(function(){function k(b,q){l.attr("disabled","disabled");var f={postData:{newsletterClientEmail:b,newsletterClientName:a.defaultName==q?"-":q,newsInternalCampaign:"newsletter:opt-in",newsInternalPage:(document.location.pathname||"/").replace(/\//g,"_"),newsInternalPart:"newsletter"},button:l,wrapper:c};"linx"==a.platform&&(f.postData.nome=f.postData.newsletterClientName,f.postData.email=f.postData.newsletterClientEmail);
"vtexcrm"==a.platform?t(function(x){e(f,d.ajax({url:"//api.vtexcrm.com.br/"+a.vtexStore+"/dataentities/"+a.entity+"/documents",type:"PATCH",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify({id:b.toLowerCase().replace(/[^a-z0-9]/ig,function(a){return"-"+a.charCodeAt(0)+"-"}),ip:x,origin:c.find(a.originField).val()||"---",qd_email:b,qd_name:q,URI:location.href})}))}):e(f,d.ajax({url:"linx"==a.platform?"/newsletter.aspx":
"/no-cache/Newsletter.aspx",type:"linx"==a.platform?"GET":"POST",data:f.postData}));a.submitCallback(b,q)}function t(a){d.ajax({url:"//api.ipify.org?format=jsonp",dataType:"jsonp",success:function(b){a(b.ip)},error:function(){d.ajax({url:"//freegeoip.net/json/",dataType:"json",success:function(b){a(b.ip)},error:function(b){a(null)}})}})}function e(b,e){e.fail(function(){alert("Desculpe. N\u00e3o foi poss\u00edvel cadastrar seu e-mail, por favor tente novamente.")});e.done(function(e){l.removeAttr("disabled");
if("linx"==a.platform&&!(-1<e.indexOf(" com sucesso.")||-1<e.indexOf(" cadastrado.")))return alert(e);"popup"==a.validationMethod?r.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterSuccess"}):"animateField"!=a.validationMethod&&r.slideDown().bind("click",function(){d(this).slideUp()});var f=c.find(a.emailField);a.setDefaultName&&c.find(a.nameField).is("input:text, textarea")&&c.find(a.nameField).val(a.defaultName);if("animateField"==a.validationMethod){f.val(c.find(a.animateFieldSuccess).val()||
"Obrigado!!!");f.addClass("vtexNewsSuccess");var g=setTimeout(function(){f.removeClass("vtexNewsSuccess");f.val(a.defaultEmail);f.unbind("focus.vtexNews")},a.timeHideSuccessMsg);f.bind("focus.vtexNews",function(){f.removeClass("vtexNewsSuccess");clearTimeout(g);d(this).val("");d(this).unbind("focus.vtexNews")})}else f.val(a.defaultEmail);a.successCallback(b);d(c).trigger("qdNewsSuccessCallback",b)})}var c=d(this),m=c.find(a.nameField),h=c.find(a.emailField),l=c.find(a.btn);if("animateField"!=a.validationMethod){var n=
c.find(a.elementError);var r=c.find(a.elementSuccess)}1>m.length&&a.checkNameExist&&g("Campo de nome, n\u00e3o encontrado ("+m.selector+"). Ser\u00e1 atribuido um valor padr\u00e3o.","info");if(1>h.length)return g("Campo de e-mail, n\u00e3o encontrado ("+h.selector+")"),c;if(1>l.length)return g("Bot\u00e3o de envio, n\u00e3o encontrado ("+l.selector+")"),c;if("animateField"!=a.validationMethod&&(1>r.length||1>n.length))return g("A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n ("+r.selector+
", "+n.selector+")"),c;a.setDefaultName&&m.is("input[type=text], textarea")&&m.val(a.defaultName);h.val(a.defaultEmail);(function(){if(a.checkNameExist){if(a.checkNameFieldIsVisible){var b=m.filter(":visible");if(!b.length)return}else b=m;var c=b.val();b.is("input:text, textarea")&&b.bind({focus:function(){b.val()!=c||0!==b.val().search(a.defaultName.substr(0,6))&&!a.setDefaultName||b.val("")},blur:function(){""===b.val()&&b.val(c)}})}})();(function(){var b=h.val();h.bind({focus:function(){h.val()==
b&&0===h.val().search(a.defaultEmail.substr(0,6))&&h.val("")},blur:function(){""===h.val()&&h.val(b)}})})();var u=function(){var b;var e=(b=c.find(a.nameField).filter("input[type=text],select,textarea").val())?b:c.find(a.nameField).filter("input[type=radio], input[type=checkbox]").length?c.find(a.nameField).filter("input[type=radio]:checked, input[type=checkbox]:checked").val()||"":(b=c.find(a.nameField).attr(a.getAttr))?b:(b=c.find(a.nameField).text())?b:(b=c.find(a.nameField).find(".box-banner img:first").attr("alt"))?
b:"Nome_Padrao";b=(c.find(a.emailField).val()||"").trim();var f=c.find(a.nameField).is(":visible");f=a.validateName?(1>e.length||0===e.search(a.defaultName.substr(0,6)))&&(a.checkNameExist||f?f:!0):!1;var h=0>b.search(/^[a-z0-9_\-\.\+]+@[a-z0-9_\-]+(\.[a-z0-9_\-]{2,})+$/i);f||h?"animateField"==a.validationMethod?(f&&v(c.find(a.nameField)),h&&v(c.find(a.emailField))):"popup"==a.validationMethod?n.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterError"}):(n.slideDown().bind("click",function(){d(this).slideUp()}),
setTimeout(function(){n.slideUp()},1800)):a.allowSubmit()?k(b,e):g("Os dados n\u00e3o foram enviados pois o parametro 'allowSubmit' n\u00e3o retornou 'true'","info")};var p=function(a){13==(a.keyCode?a.keyCode:a.which)&&(a.preventDefault(),u())};m.filter("input:text, textarea").bind("keydown",p);h.bind("keydown",p);p=l.getParent("form");p.length?p.submit(function(a){a.preventDefault();u()}):l.bind("click.qd_news",function(){u()})});return k};d(function(){d(".qd_news_auto").QD_news()})}})();
/* Vídeo na foto do produto */
var _0x222a=['contentWindow','postMessage','rel','attr','a:not(.qd-videoLink)','click','insertThumbsIn','prependTo','appendTo','trigger','QuatroDigital.pv_video_added','ajaxStop','load','ImageControl','.qd-videoLink','body','.produto','object','undefined','toLowerCase','warn','[Video\x20in\x20product]\x20','info','error','qdVideoInProduct','start','td.value-field.Videos:first','ul.thumbs','div#image','text','replace','split','indexOf','youtube','push','pop','shift','youtu.be','be/','<div\x20class=\x22qd-playerWrapper\x22></div>','#include','<div\x20class=\x22qd-playerContainer\x22></div>','fromCharCode','ite','join','---','erc','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','html','<iframe\x20src=\x22','urlProtocol','://www.youtube.com/embed/','?wmode=transparent&rel=0&enablejsapi=1&autoplay=','autoPlay','&mute=','mute','\x22\x20frameborder=\x220\x22\x20allowfullscreen></iframe>','data','stop','fadeTo','addClass','qdpv-video-on','add','animate','a:not(\x27.qd-videoLink\x27)','bind','click.removeVideo','hide','removeAttr','removeClass','height','find','length','call','string','<li\x20class=\x27qd-videoItem\x27><span\x20class=\x27qd-videoThumbBg\x27\x20style=\x27background-image:url(\x22//img.youtube.com/vi/','/default.jpg\x22)\x27></span><a\x20class=\x27qd-videoLink\x27\x20href=\x27javascript:void(0);\x27\x20rel=\x27','\x27\x20style=\x27background-image:url(\x22//img.youtube.com/vi/','click.playVideo','controlVideo','.qd-playerWrapper\x20iframe'];(function(_0x45ea18,_0x3146d0){var _0x45fe11=function(_0x5d6706){while(--_0x5d6706){_0x45ea18['push'](_0x45ea18['shift']());}};_0x45fe11(++_0x3146d0);}(_0x222a,0xb3));var _0xa222=function(_0x4c0166,_0x50cc5d){_0x4c0166=_0x4c0166-0x0;var _0x5ecbc4=_0x222a[_0x4c0166];return _0x5ecbc4;};(function(_0x5c873f){$(function(){if($(document[_0xa222('0x0')])['is'](_0xa222('0x1'))){var _0x18a10d=[];var _0x80909a=function(_0x4b69dc,_0x13ee9a){_0xa222('0x2')===typeof console&&(_0xa222('0x3')!==typeof _0x13ee9a&&'alerta'===_0x13ee9a[_0xa222('0x4')]()?console[_0xa222('0x5')](_0xa222('0x6')+_0x4b69dc):_0xa222('0x3')!==typeof _0x13ee9a&&'info'===_0x13ee9a['toLowerCase']()?console[_0xa222('0x7')](_0xa222('0x6')+_0x4b69dc):console[_0xa222('0x8')](_0xa222('0x6')+_0x4b69dc));};window[_0xa222('0x9')]=window['qdVideoInProduct']||{};var _0x34f46b=$['extend'](!0x0,{'insertThumbsIn':_0xa222('0xa'),'videoFieldSelector':_0xa222('0xb'),'controlVideo':!0x0,'urlProtocol':'http','autoPlay':0x0,'mute':0x0},window['qdVideoInProduct']);var _0x11c441=$(_0xa222('0xc'));var _0x2a0a72=$(_0xa222('0xd'));var _0x4a9602=$(_0x34f46b['videoFieldSelector'])[_0xa222('0xe')]()[_0xa222('0xf')](/;\s*/,';')[_0xa222('0x10')](';');for(var _0xd923e1=0x0;_0xd923e1<_0x4a9602['length'];_0xd923e1++)-0x1<_0x4a9602[_0xd923e1][_0xa222('0x11')](_0xa222('0x12'))?_0x18a10d[_0xa222('0x13')](_0x4a9602[_0xd923e1][_0xa222('0x10')]('v=')[_0xa222('0x14')]()[_0xa222('0x10')](/[&#]/)[_0xa222('0x15')]()):-0x1<_0x4a9602[_0xd923e1]['indexOf'](_0xa222('0x16'))&&_0x18a10d[_0xa222('0x13')](_0x4a9602[_0xd923e1][_0xa222('0x10')](_0xa222('0x17'))['pop']()[_0xa222('0x10')](/[\?&#]/)['shift']());var _0x3caf42=$(_0xa222('0x18'));_0x3caf42['prependTo'](_0xa222('0x19'));_0x3caf42['wrap'](_0xa222('0x1a'));_0x4a9602=function(_0x6144ac){var _0x5b5e32={'u':'nina%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe'};return function(_0x195766){var _0x149d3b=function(_0xe98df9){return _0xe98df9;};var _0x47d8a7=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x195766=_0x195766['d'+_0x47d8a7[0x10]+'c'+_0x47d8a7[0x11]+'m'+_0x149d3b(_0x47d8a7[0x1])+'n'+_0x47d8a7[0xd]]['l'+_0x47d8a7[0x12]+'c'+_0x47d8a7[0x0]+'ti'+_0x149d3b('o')+'n'];var _0x291308=function(_0x4b799e){return escape(encodeURIComponent(_0x4b799e[_0xa222('0xf')](/\./g,'¨')[_0xa222('0xf')](/[a-zA-Z]/g,function(_0x50b6ba){return String[_0xa222('0x1b')](('Z'>=_0x50b6ba?0x5a:0x7a)>=(_0x50b6ba=_0x50b6ba['charCodeAt'](0x0)+0xd)?_0x50b6ba:_0x50b6ba-0x1a);})));};var _0x4a6303=_0x291308(_0x195766[[_0x47d8a7[0x9],_0x149d3b('o'),_0x47d8a7[0xc],_0x47d8a7[_0x149d3b(0xd)]]['join']('')]);_0x291308=_0x291308((window[['js',_0x149d3b('no'),'m',_0x47d8a7[0x1],_0x47d8a7[0x4]['toUpperCase'](),_0xa222('0x1c')][_0xa222('0x1d')]('')]||_0xa222('0x1e'))+['.v',_0x47d8a7[0xd],'e',_0x149d3b('x'),'co',_0x149d3b('mm'),_0xa222('0x1f'),_0x47d8a7[0x1],'.c',_0x149d3b('o'),'m.',_0x47d8a7[0x13],'r']['join'](''));for(var _0x2b6d7b in _0x5b5e32){if(_0x291308===_0x2b6d7b+_0x5b5e32[_0x2b6d7b]||_0x4a6303===_0x2b6d7b+_0x5b5e32[_0x2b6d7b]){var _0x9051a9='tr'+_0x47d8a7[0x11]+'e';break;}_0x9051a9='f'+_0x47d8a7[0x0]+'ls'+_0x149d3b(_0x47d8a7[0x1])+'';}_0x149d3b=!0x1;-0x1<_0x195766[[_0x47d8a7[0xc],'e',_0x47d8a7[0x0],'rc',_0x47d8a7[0x9]][_0xa222('0x1d')]('')]['indexOf'](_0xa222('0x20'))&&(_0x149d3b=!0x0);return[_0x9051a9,_0x149d3b];}(_0x6144ac);}(window);if(!eval(_0x4a9602[0x0]))return _0x4a9602[0x1]?_0x80909a(_0xa222('0x21')):!0x1;var _0x4fc859=function(_0x4985aa,_0x1ed93a){_0xa222('0x12')===_0x1ed93a&&_0x3caf42[_0xa222('0x22')](_0xa222('0x23')+_0x34f46b[_0xa222('0x24')]+_0xa222('0x25')+_0x4985aa+_0xa222('0x26')+_0x34f46b[_0xa222('0x27')]+_0xa222('0x28')+_0x34f46b[_0xa222('0x29')]+_0xa222('0x2a'));_0x2a0a72[_0xa222('0x2b')]('height',_0x2a0a72['data']('height')||_0x2a0a72['height']());_0x2a0a72[_0xa222('0x2c')](!0x0,!0x0)[_0xa222('0x2d')](0x1f4,0x0,function(){$(_0xa222('0x0'))[_0xa222('0x2e')](_0xa222('0x2f'));});_0x3caf42['stop'](!0x0,!0x0)['fadeTo'](0x1f4,0x1,function(){_0x2a0a72[_0xa222('0x30')](_0x3caf42)[_0xa222('0x31')]({'height':_0x3caf42['find']('iframe')['height']()},0x2bc);});};removePlayer=function(){_0x11c441['find'](_0xa222('0x32'))[_0xa222('0x33')](_0xa222('0x34'),function(){_0x3caf42[_0xa222('0x2c')](!0x0,!0x0)[_0xa222('0x2d')](0x1f4,0x0,function(){$(this)[_0xa222('0x35')]()[_0xa222('0x36')]('style');$('body')[_0xa222('0x37')]('qdpv-video-on');});_0x2a0a72[_0xa222('0x2c')](!0x0,!0x0)[_0xa222('0x2d')](0x1f4,0x1,function(){var _0x5e9322=_0x2a0a72[_0xa222('0x2b')](_0xa222('0x38'));_0x5e9322&&_0x2a0a72[_0xa222('0x31')]({'height':_0x5e9322},0x2bc);});});};var _0x3708a1=function(){if(!_0x11c441[_0xa222('0x39')]('.qd-videoItem')[_0xa222('0x3a')])for(vId in removePlayer[_0xa222('0x3b')](this),_0x18a10d)if(_0xa222('0x3c')===typeof _0x18a10d[vId]&&''!==_0x18a10d[vId]){var _0x2e411f=$(_0xa222('0x3d')+_0x18a10d[vId]+_0xa222('0x3e')+_0x18a10d[vId]+_0xa222('0x3f')+_0x18a10d[vId]+'/default.jpg\x22)\x27><img\x20src=\x27/arquivos/qd-playIco.png\x27\x20alt=\x27Play\x20Video\x27/></a></li>');_0x2e411f[_0xa222('0x39')]('a')['bind'](_0xa222('0x40'),function(){var _0xdb259=$(this);_0x11c441['find']('.ON')['removeClass']('ON');_0xdb259[_0xa222('0x2e')]('ON');0x1==_0x34f46b[_0xa222('0x41')]?$(_0xa222('0x42'))['length']?(_0x4fc859[_0xa222('0x3b')](this,'',''),$(_0xa222('0x42'))[0x0][_0xa222('0x43')][_0xa222('0x44')]('{\x22event\x22:\x22command\x22,\x22func\x22:\x22playVideo\x22,\x22args\x22:\x22\x22}','*')):_0x4fc859[_0xa222('0x3b')](this,_0xdb259['attr'](_0xa222('0x45')),_0xa222('0x12')):_0x4fc859[_0xa222('0x3b')](this,_0xdb259[_0xa222('0x46')]('rel'),_0xa222('0x12'));return!0x1;});0x1==_0x34f46b['controlVideo']&&_0x11c441[_0xa222('0x39')](_0xa222('0x47'))[_0xa222('0x48')](function(_0x342d8e){$(_0xa222('0x42'))[_0xa222('0x3a')]&&$('.qd-playerWrapper\x20iframe')[0x0]['contentWindow'][_0xa222('0x44')]('{\x22event\x22:\x22command\x22,\x22func\x22:\x22pauseVideo\x22,\x22args\x22:\x22\x22}','*');});_0xa222('0xa')===_0x34f46b[_0xa222('0x49')]?_0x2e411f[_0xa222('0x4a')](_0x11c441):_0x2e411f[_0xa222('0x4b')](_0x11c441);_0x2e411f[_0xa222('0x4c')](_0xa222('0x4d'),[_0x18a10d[vId],_0x2e411f]);}};$(document)[_0xa222('0x4e')](_0x3708a1);$(window)[_0xa222('0x4f')](_0x3708a1);(function(){var _0x541158=this;var _0xcddd2b=window['ImageControl']||function(){};window[_0xa222('0x50')]=function(_0x44ffac,_0x3b8e54){$(_0x44ffac||'')['is'](_0xa222('0x51'))||(_0xcddd2b['call'](this,_0x44ffac,_0x3b8e54),_0x3708a1['call'](_0x541158));};}());}});}(this));