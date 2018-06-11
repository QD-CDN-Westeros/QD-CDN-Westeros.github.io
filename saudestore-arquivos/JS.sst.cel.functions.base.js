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
			Common.applyAmazingMenu();
			Common.applyAmazingMenuMobile();
			Common.bannerResponsive();
			Common.bannersCount();
			Common.callCartLinkShow();
			Common.floatBarMiniCart();
			Common.applyCarouselShelf();
			Common.applySmartPrice();
			Common.applySmartCart();
			Common.openModalVideoInstitutional();
		},
		ajaxStop: function() {
			Common.applySmartPrice();			
		},
		windowOnload: function() {
			Common.facebookLikebox();
		},
		buyInShelf: function () {
			var fn = function () {
				$(".shelf-qd-v1-buy-button .btn-add-buy-button-asynchronous:not('.remove-href')").not('.qd-on-bb').addClass("show qd-on-bb").click(function (e) {
					e.preventDefault();
					var $t = $(this);
					
					Common.buyInShelfOpenModal($t.getParent(".wrapper-buy-button-asynchronous").find("input[class*='buy-button-asynchronous-product-url']" || "").attr("class").replace(/[^0-9]+/gi, ""), $t.getParent(".shelf-qd-v1-buy-button").find(".qd-sq-quantity").val() || 1);
				});
			};
			fn();
			
			// Ações
			$(".qd-v1-modal").on("hidden.bs.modal", function () {
				$(this).removeClass("shelf-qd-v1-buy-button-modal");
			});
			
			// No callback do infinity scroll
			$(window).on("QuatroDigital.is_Callback", function () {
				fn();
			});
		},
		floatBarMiniCart: function() {
			var miniCart = $(".show-minicart-on-hover");
			$(".floating-qd-v1-content .header-qd-v1-cart-link").mouseenter(function() {
				miniCart.not(this).mouseover();
			});
		},
		applyCarouselShelf: function () {
			var wrapper = $('.carousel-qd-v1-shelf .prateleira');
			
			if (!wrapper.length)
			return false;
			
			wrapper.each(function () {
				var $t = $(this);
				
				$t.find('h2').prependTo($t.parent());
			});
			
			var slides = 4;
			if (wrapper.parent().hasClass('side-carousel-qd-v1-shelf'))
			slides = 3
			
			wrapper.slick({
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				slidesToShow: slides,
				slidesToScroll: slides,
				infinite: true,
				draggable: false,
				speed: 700,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
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
		applyAmazingMenu: function () {
			$('.header-qd-v1-amazing-menu, .footer-qd-v1-menu-list').QD_amazingMenu();
			
			$(".floating-qd-v1-call-amazing-menu").click(function () {
				$("body").toggleClass('qd-am-toggle');
			});
		},
		applyAmazingMenuMobile: function () {
			var wrapper = $('.header-qd-v1-amazing-menu-mobile');
			
			wrapper.find('> ul > li > ul').prepend(function () { return $(this).prev().clone().wrap('<li></li>').parent() });
			
			wrapper.QD_amazingMenu({
				callback: function () {
					$('<span class="qd-am-dropdown-trigger"><i class="fa fa-angle-down"></i></span>').appendTo(wrapper.find('.qd-am-has-ul')).click(function () {
						var $t = $(this);
						$.merge($t.parent(), $t.closest('ul')).toggleClass('qd-am-is-active');
						
						$t.filter(function () { return !$(this).closest('ul').is('.qd-amazing-menu'); }).siblings('ul').stop(true, true).slideToggle();
					});
					
					wrapper.find('> ul > li > .qd-am-dropdown-trigger').click(function () {
						var w = $('.header-qd-v1-amazing-menu-mobile-wrapper');
						w.addClass('qd-am-is-active');
						w.animate({ scrollTop: 0 }, 200);
					});
					
					wrapper.find('> ul > li > ul > li:first-child').click(function (e) {
						e.preventDefault();
						$(this).parents(".qd-am-is-active").removeClass('qd-am-is-active');
					});
				}
			});
			
			$('.header-qd-v1-amazing-menu-toggle').click(function (evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-am-on');
			});
			
			$('.header-qd-v1-amazing-menu-mobile-wrapper .header-qd-v1-user-message').on('click', 'a#login', function () {
				$(document.body).removeClass('qd-am-on');
			});
			
			$('.header-qd-v1-amazing-menu-mobile-wrapper .header-qd-v1-user-message').append('<div class="header-qd-v1-close-amazing-menu-mobile"></div>');
			
			$('.header-qd-v1-close-amazing-menu-mobile').click(function (evt) {
				$(document.body).removeClass('qd-am-on');
			});
		},		
		bannerResponsive: function () {
			$(".banner-qd-v1-responsive .box-banner a, .qd-placeholder .box-banner a").each(function () {
				var $t = $(this);
				var cols = [];
				
				var href = $t.attr("href") || "";
				if (!href.length)
				return;
				
				$t.attr("href", href.replace(/(col-)?(xs|sm|md|lg|hidden-xs|hidden-sm|hidden-md|hidden-lg)(-([0-9]{1,2}))?,?/ig, function (match) {
					var str = match.replace(",", "").toLowerCase();
					cols.push(str.substr(0, 4) === "col-" ? str : str);
					return "";
				}));
				
				$t.parent().addClass(cols.length ? cols.join(" ") : "col-xs-12 col-sm-12");
			});
		},
		facebookLikebox: function() {
			$(".footer-qd-v1-facebook-likebox").html('<div class="fb-page" data-href="https://www.facebook.com/saudestore/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/">Boa Coisa</a></blockquote></div></div>');
		},
		callCartLinkShow: function () {
			if ($(window).width() < 750) {
				$(".header-qd-v1-cart-link").click(function (evt) {
					evt.preventDefault();
					
					$(".v2-vtexsc-cart").toggleClass('cart-show');
				});
			}
		},
		shelfColors: function() {
			$(".prateleira").QD_coresPrateleira({
				checkDuplicateUri : false,
				groupSkuByDimension : false,
			});
		},
		bannersCount: function() {
			$(".box-banner").parent().each(function() {
				var $t = $(this);
				$t.addClass("qdBannerCount-" + $t.find(".box-banner").length);
			});
		},
		applySmartCart: function() {
			$('.header-qd-v1-cart-link').append('<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>');
			
			$(document.body).append('<div class="smart-cart-qd-v2-wrapper"><div class="qd-sc-wrapper"></div></div>');
			
			var wrapper = $(".qd-sc-wrapper");
			var wrapper = $(".qd-sc-wrapper");
			
			$.QD_smartCart({
				selector: wrapper,
				dropDown: {
					texts: {
						linkCart: "Finalizar Compra",
						cartTotal: '<span class="qd-infoTotalItems">Itens: #items</span><span class="qd-infoTotalValue">Total: #value</span>'
					},
					updateOnlyHover: false,
					smartCheckout: true,
					callback: function () {
						$(".qd-ddc-wrapper3").prepend('<div class="qd-cartTitle"><h3>Carrinho</h3></div>');
						wrapper.find('.qd_ddc_continueShopping').after(wrapper.find('.qd-ddc-viewCart'));
					},
					skuName: function (data) {
						return data.name + ' - ' + data.skuName.replace(data.name, '');
					},
					callbackProductsList: function () {
						wrapper.find(".qd-ddc-prodQtt").each(function () {
							var $t = $(this);
							$t.add($t.next('.qd-ddc-prodRemove')).wrapAll('<div class="qd-ddc-prodAction"></div>');
						});
					}
				},
				buyButton: {
					buyButton: "body .prateleira .buy-button"
				}
			});
			
			// Callback do Quick View
			window._QuatroDigital_prodBuyCallback = function (jqXHR, textStatus, prodLink, skus) {
				$.fn.simpleCart(true);
				$(".shelf-qd-v1-buy-button-modal").modal("hide");
				$(window).trigger("QuatroDigital.qd_bb_prod_add", [new $, skus[0] || 0]);
			};
			
			$(".header-qd-v1-cart-link").click(function (evt) {
				console.log("clique do smart cart");
				evt.preventDefault();
				$(document.body).toggleClass('qd-cart-show');
				
				wrapper.height($(window).height());
				wrapper.find(".qd-ddc-prodWrapper").css('max-height', $(window).height() - 193);
			});
			
			$(".components-qd-v1-overlay, .qd_ddc_lightBoxClose").click(function (evt) {
				$(document.body).removeClass('qd-cart-show');
			});
		},
		applySmartPrice: function () {
			// ATENÇÃO CHAMAR ESSA FUNÇÃO TBM NO AJAX STOP
			var wrapper = $("li[layout]");
			
			$('<div class="qd-sp-wrap"> <p class="qd_displayPrice shelf-qd-v1-sp-best-price">R$ </p> <span>com</span> <span class="qd-sp-display-discount shelf-qd-v1-sp-discount"> 0% de desconto</span> </div>').insertAfter(".shelf-price:not(.qd-on)");
			
			$(".shelf-price").addClass('qd-on');
			
			wrapper.find(".shelf-qd-v1-stamps .flag").QD_SmartPrice({
				filterFlagBy: "[class*='desconto-boleto']",
				wrapperElement: wrapper,
				productPage: {
					isProductPage: false
				}
			});
		},
		openModalVideoInstitutional: function () {
			var videoRegex = /(youtu\.be\/|\?v=)([^&]+)/i;
			
			$('.box-banner a').filter('[href*="youtube.com/"], [href*="youtu.be/"]').click(function (e) {
				e.preventDefault();
				var modal = $('.qd-v1-modal').clone().appendTo(document.body).addClass('hotsite-information-qd-v1-modal');
				var $t = $(this);
				var videoId = ($t.attr('href').match(videoRegex) || ['']).pop();
				
				modal.find('.modal-header').append('<h2 class="modal-title">' + $t.find('img').attr('alt') + '</h2>');
				$('<iframe src="' + 'https://www.youtube.com/embed/' + videoId + '?wmode=transparent&rel=0" frameborder="0"></iframe>').appendTo(modal.find('.modal-body'));
				modal.modal();
				
				modal.on('hidden.bs.modal', function () {
					modal.remove();
				});
			});
		}
	};
	
	var Home = {
		init: function() {
			Home.applySliderFull();
			Home.brandCarousel();
			Home.shelfCarouselHome();
			Home.shelfCarouselCollection();
			Home.organizeSideMenuCollection();
			Home.mosaicSetCol();
			//Home.instagramPhotoFeed();
			//Home.selectSmartResearch2();			
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		applySliderFull: function () {
			var wrapper = $('.slider-qd-v1-full');
			
			setTimeout(function () {
				wrapper.slick({
					autoplay: true,
					dots: true,
					fade: true,
					cssEase: 'linear',
					infinite: true,
					speed: 500,
					draggable: false
				});
			}, 500);	
			
			wrapper.each(function () {
				$(this).find('.slick-arrow').wrapAll('<div class="slick-nav" />');
			});
		},
		
		selectSmartResearch2: function () {
			var htmlClassRegex = /[^a-z0-9]/ig;
			var values = [];
			
			$(".departmentNavigator").first().find("h3 a").each(function () {
				var $t = $(this);
				values.push([$t.text().trim(), $t.attr("href") || ""])
			});
			
			$(".qd-search-filters-wrapper").QD_SelectSmartResearch2({
				options: [values, "lid=5636e1ca-fccb-4cd7-bc5c-4358bc3ae4bc", "lid=5636e1ca-fccb-4cd7-bc5c-4358bc3ae4bc"],
				optionsPlaceHolder: ["Departamento", "Linha", "Material"],
				getAjaxOptions: function (requestData, $select) {
					var values = [];
					if ($select.is('#qd-ssr2-select-10'))
					var elems = $(requestData).find('h4 a');
					else if ($select.is('#qd-ssr2-select-20'))
					var elems = $(requestData).find('h4 + ul li a');
					else
					var elems = $(requestData).find(".search-single-navigator ul." + $select.attr("data-qdssr-title")).find("a");
					
					elems.each(function () {
						var $t = $(this);
						values.push([$t.text().trim(), $t.attr("href") || ""]);
					});
					return values;
				},
				optionIsChecked: function (optionPlaceHolder) {
					if (typeof optionPlaceHolder === "undefined")
					return null;
					
					var value = optionPlaceHolder === "Departamento" ? $(".search-single-navigator h3:first").text().trim() : $("h5." + optionPlaceHolder.replace(htmlClassRegex, "-") + " +ul .filtro-ativo:first").text().trim();
					return value.length ? value : null;
				}
			});
		},
		mosaicSetCol: function() {
			$(".banner-qd-v1-responsive .box-banner").QD_mosaicBanners();
		},
		instagramPhotoFeed: function () {
			$('.home-qd-v1-instagram-photos').QD_socialPhotos('???', {
				socialType: 'instagram',
				user: 'quatrodigital',
				photosQtty: 8
			});
		},
		brandCarousel:function(){
			var wrapper = $('.brand-carousel-qd-v1');
			
			// Titulo
			wrapper.each(function () {
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
			var wrapper = $('.shelf-qd-v1-carousel');
			
			// Titulo
			wrapper.each(function () {
				var wrap = $(this);
				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});
			
			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				navigation: true,
				pagination: false
			});
		},
		shelfCarouselCollection: function () {
			var wrapper = $('.qd-category-collections');
			
			// Titulo
			wrapper.each(function () {
				var wrap = $(this);
				wrap.find("h2").hide();
			});
			
			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				navigation: true,
				pagination: false
			});
		},
		organizeSideMenuCollection: function() {
			var wrapper = $('.qd-category-collections');
			
			if (wrapper.find('.box-banner').length < 1) {
				return
			}
			
			wrapper.find('.prateleira').each(function () {
				var colCarousel = '<div class="col-xs-12 col-md-9 qd-category-collections-carousel"></div>';
				
				if ($(this).prev().length < 1)
				colCarousel = '<div class="col-xs-12 qd-category-collections-carousel"></div>';
				
				$(this).wrap(colCarousel);
			});
			
			wrapper.find('.box-banner').each(function () {
				$(this).wrap('<div class="col-xs-12 col-md-3 qd-category-collections-banner"></div>');
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
			Product.zoomFix();
			Product.shelfCarouselProduct();
			Product.openShipping();
			Product.showInstallmentsMethods();
			Product.seeDescription();
			Product.skuListSelection();
			Product.accessoriesFix();
			Product.accessoriesApplyCarousel();
			Product.qdNotifymeShow();
			Product.doublePrice();
			Product.applySmartPriceProduct();
			Product.setAvailableBodyClass();
		},
		ajaxStop: function () {
			Product.addCloseBtnFreightTable();
		},
		windowOnload: function () {},
		qdNotifymeShow: function() {
			var notifyWrapper = $(".portal-notify-me-ref");
			
			var checkVisibleNotify = function(data) {
				if (data.availability || data.available){
					notifyWrapper.parent().parent().attr('col-xs-12');
					$(document.body).removeClass('notify-active');
				}
				else {
					notifyWrapper.parent().parent().attr('col-xs-12');
					$(document.body).addClass('notify-active');
				}
			}
			
			$(document).on("skuSelected.vtex", function(e, sku) {
				checkVisibleNotify(sku);
			});
			
			checkVisibleNotify(skuJson);
		},
		accessoriesFix: function () {
			$('fieldset >.buy-product-checkbox').parent().each(function () {
				var $t = $(this);
				$t.add($t.prev('ul')).wrapAll('<div class="accessories-qd-v1-item col-xs-12 col-sm-6 col-md-3"/>');
			});
		},
		accessoriesApplyCarousel: function () {
			var item = $('.accessories-qd-v1-item');
			
			if (!item.length)
			return;
			
			item.wrapAll('<div class="accessories-qd-v1-carousel"></div>');
			
			$(".accessories-qd-v1-carousel").find('.prateleira').each(function () {
				var $this = $(this);
				
				$this.find("h2").addClass('heading-3').insertBefore($this);
				
				$this.owlCarousel({
					items: 2,
					navigation: true,
					pagination: false
				});
			});
		},
		doublePrice: function () {
			var row = $('.product-qd-v1-box-quantity').clone().addClass('product-qd-v1-double-size qd-show');
			row.find('script').remove();
			// row.insertBefore($('.product-floating-bar-smart-qtt'));
			
			// Product.applySmartQuantity();
		},
		applySmartPriceProduct: function () {
			if ($('.product-qd-v1-stamps .flag[class*="desconto-boleto"]').length) {
				
				$(".product-qd-v1-smart-price > div").append('<div class="qd-sp-wrap"> <p class="qd_displayPrice shelf-qd-v1-sp-best-price">R$ </p> <span>com</span> <span class="qd-sp-display-discount shelf-qd-v1-sp-discount"> 0% no boleto</span> </div>');
				
				$(".product-qd-v1-buy-button > div").removeClass('col-lg-6').addClass('col-lg-12');
				
				$(".product-qd-v1-stamps .flag").QD_SmartPrice({
					filterFlagBy: "[class*='desconto-boleto']",					
					productPage: {
						wrapperElement: ".product-qd-v1-sku-selection-box",
						changeNativePrice: false,
						isProductPage: true
					}
				});
			}
		},			
		setAvailableBodyClass: function () {
			function checkVisibleNotify(available) {
				if (available)
				$(document.body).addClass('qd-product-available').removeClass('qd-product-unavailable');
				else
				$(document.body).addClass('qd-product-unavailable').removeClass('qd-product-available');
			}
			
			$(document).on("skuSelected.vtex", function (e, id, sku) {
				checkVisibleNotify(sku.available);
			});
			
			checkVisibleNotify(skuJson.available);
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
		showInstallmentsMethods: function() {
			var wrapper = $('.product-qd-v1-installments-method');
			
			$('.product-qd-v1-see-installments').click(function(e) {
				e.preventDefault();
				$(this).toggleClass('qd-is-active');
				wrapper.toggleClass('qd-is-active');
				
				// var selectionBox = $('.product-qd-v1-sku-selection-box');
				// var viewportHeight = $(window).height() - 50;
				// var wrapperTopPosition = selectionBox.offset().top - $(window).scrollTop();
				// console.log(viewportHeight, (selectionBox.height() + wrapperTopPosition));
				// if(viewportHeight < (selectionBox.height() + wrapperTopPosition)) {
				// 	wrapper.addClass('short-viewport');
				// }
			});
			
			$('<span class="product-qd-v1-close-installments"><i class="fa fa-times"></i></span>').click(function(e) {
				e.preventDefault();
				wrapper.removeClass('qd-is-active');
			}).appendTo(wrapper);
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

/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);

/* * Javascript Cookie v1.5.1 * https://github.com/js-cookie/js-cookie * * Copyright 2006, 2014 Klaus Hartl * Released under the MIT license */
(function(e){var l;if("function"===typeof define&&define.amd)define(["jquery"],e);else if("object"===typeof exports){try{l=require("jquery")}catch(n){}module.exports=e(l)}else{var m=window.Cookies,h=window.Cookies=e(window.jQuery);h.noConflict=function(){window.Cookies=m;return h}}})(function(e){function l(a){a=c.json?JSON.stringify(a):String(a);return c.raw?a:encodeURIComponent(a)}function n(a,r){var b;if(c.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g, "\\"));try{d=decodeURIComponent(d.replace(p," "));b=c.json?JSON.parse(d):d;break a}catch(e){}b=void 0}return h(r)?r(b):b}function m(){for(var a,c,b=0,d={};b<arguments.length;b++)for(a in c=arguments[b],c)d[a]=c[a];return d}function h(a){return"[object Function]"===Object.prototype.toString.call(a)}var p=/\+/g,c=function(a,e,b){if(1<arguments.length&&!h(e)){b=m(c.defaults,b);if("number"===typeof b.expires){var d=b.expires,k=b.expires=new Date;k.setMilliseconds(k.getMilliseconds()+864E5*d)}return document.cookie= [c.raw?a:encodeURIComponent(a),"=",l(e),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},k=document.cookie?document.cookie.split("; "):[],q=0,p=k.length;q<p;q++){var f=k[q].split("="),g;g=f.shift();g=c.raw?g:decodeURIComponent(g);f=f.join("=");if(a===g){d=n(f,e);break}a||void 0===(f=n(f))||(d[g]=f)}return d};c.get=c.set=c;c.defaults={};c.remove=function(a,e){c(a,"",m(e,{expires:-1})); return!c(a)};e&&(e.cookie=c,e.removeCookie=c.remove);return c});
var $Cookies = Cookies.noConflict();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};

/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);

/* * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010 * http://benalman.com/projects/jquery-bbq-plugin/ * * Copyright (c) 2010 "Cowboy" Ben Alman * Dual licensed under the MIT and GPL licenses. * http://benalman.com/about/license/ */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){function n(b){b=f.json?JSON.stringify(b):String(b);return f.raw?b:encodeURIComponent(b)}function m(b,e){var a;if(f.raw)a=b;else a:{var d=b;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));a=f.json?JSON.parse(d):d;break a}catch(g){}a=void 0}return c.isFunction(e)?e(a):a}var l=/\+/g,f=
c.cookie=function(b,e,a){if(void 0!==e&&!c.isFunction(e)){a=c.extend({},f.defaults,a);if("number"===typeof a.expires){var d=a.expires,g=a.expires=new Date;g.setTime(+g+864E5*d)}return document.cookie=[f.raw?b:encodeURIComponent(b),"=",n(e),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b?void 0:{};for(var d=document.cookie?document.cookie.split("; "):[],g=0,l=d.length;g<l;g++){var h=d[g].split("="),k;
k=h.shift();k=f.raw?k:decodeURIComponent(k);h=h.join("=");if(b&&b===k){a=m(h,e);break}b||void 0===(h=m(h))||(a[k]=h)}return a};f.defaults={};c.removeCookie=function(b,e){if(void 0===c.cookie(b))return!1;c.cookie(b,"",c.extend({},e,{expires:-1}));return!c.cookie(b)}});

/* Quatro Digital - sessionStorage // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(){var e=function(b,c){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var a;"object"===typeof b?(b.unshift("[Quatro Digital - sessionStorage]\n"),a=b):a=["[Quatro Digital - sessionStorage]\n"+b];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,a)}catch(d){console.info(a.join("\n"))}else try{console.error.apply(console,a)}catch(e){console.error(a.join("\n"))}else try{console.warn.apply(console,a)}catch(f){console.warn(a.join("\n"))}}};window.qdSessionStorage=window.qdSessionStorage||{};var f="undefined"!==typeof sessionStorage&&"undefined"!==typeof sessionStorage.setItem&&"undefined"!==typeof sessionStorage.getItem;window.qdSessionStorage.setItem=function(b,c,a){try{if(!f)return!1;var d=new Date;sessionStorage.setItem(b,c);isNaN(parseInt(a))||(d.setTime(d.getTime()+6E4*a),sessionStorage.setItem(b+"_expiration",d.getTime()))}catch(g){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar salvar os dados no armazenamento da sess\u00e3o. Detalhes: ",g.message],"alerta")}};window.qdSessionStorage.getItem=function(b){try{if(!f)return!1;var c=new Date,a=parseInt(sessionStorage.getItem(b+"_expiration")||0,10)||0;return c.getTime()>a?(sessionStorage.removeItem&&(sessionStorage.removeItem(b),sessionStorage.removeItem(b+"_expiration")),null):sessionStorage.getItem(b)}catch(d){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar obter os dados no armazenamento da sess\u00e3o. Detalhes: ",d.message],"alerta")}}})();
	
/*http://phpjs.org/functions/utf8_encode/*/
function utf8_encode(b){if(null===b||"undefined"===typeof b)return"";b+="";var d="",f,g,h=0;f=g=0;for(var h=b.length,e=0;e<h;e++){var a=b.charCodeAt(e),c=null;if(128>a)g++;else if(127<a&&2048>a)c=String.fromCharCode(a>>6|192,a&63|128);else if(55296!=(a&63488))c=String.fromCharCode(a>>12|224,a>>6&63|128,a&63|128);else{if(55296!=(a&64512))throw new RangeError("Unmatched trail surrogate at "+e);c=b.charCodeAt(++e);if(56320!=(c&64512))throw new RangeError("Unmatched lead surrogate at "+(e-1));a=((a&1023)<<10)+(c&1023)+65536;c=String.fromCharCode(a>>18|240,a>>12&63|128,a>>6&63|128,a&63|128)}null!==c&&(g>f&&(d+=b.slice(f,g)),d+=c,f=g=e+1)}g>f&&(d+=b.slice(f,h));return d};
	
/*http://phpjs.org/functions/md5/*/
if("function"!==typeof qd_md5)var qd_md5=function(p){var h=function(b,a){var d,c,f,e,g;f=b&2147483648;e=a&2147483648;d=b&1073741824;c=a&1073741824;g=(b&1073741823)+(a&1073741823);return d&c?g^2147483648^f^e:d|c?g&1073741824?g^3221225472^f^e:g^1073741824^f^e:g^f^e},k=function(b,a,d,c,f,e,g){b=h(b,h(h(a&d|~a&c,f),g));return h(b<<e|b>>>32-e,a)},l=function(b,a,d,c,f,e,g){b=h(b,h(h(a&c|d&~c,f),g));return h(b<<e|b>>>32-e,a)},m=function(b,a,c,d,e,f,g){b=h(b,h(h(a^c^d,e),g));return h(b<<f|b>>>32-f,a)},n=
function(b,a,c,d,f,e,g){b=h(b,h(h(c^(a|~d),f),g));return h(b<<e|b>>>32-e,a)},q=function(b){var a="",c="",d;for(d=0;3>=d;d++)c=b>>>8*d&255,c="0"+c.toString(16),a+=c.substr(c.length-2,2);return a},e=[],f,r,t,u,v,b,a,d,c;p=this.utf8_encode(p);e=function(b){var a,c=b.length;a=c+8;for(var d=16*((a-a%64)/64+1),e=Array(d-1),f=0,g=0;g<c;)a=(g-g%4)/4,f=g%4*8,e[a]|=b.charCodeAt(g)<<f,g++;a=(g-g%4)/4;e[a]|=128<<g%4*8;e[d-2]=c<<3;e[d-1]=c>>>29;return e}(p);b=1732584193;a=4023233417;d=2562383102;c=271733878;p=
e.length;for(f=0;f<p;f+=16)r=b,t=a,u=d,v=c,b=k(b,a,d,c,e[f+0],7,3614090360),c=k(c,b,a,d,e[f+1],12,3905402710),d=k(d,c,b,a,e[f+2],17,606105819),a=k(a,d,c,b,e[f+3],22,3250441966),b=k(b,a,d,c,e[f+4],7,4118548399),c=k(c,b,a,d,e[f+5],12,1200080426),d=k(d,c,b,a,e[f+6],17,2821735955),a=k(a,d,c,b,e[f+7],22,4249261313),b=k(b,a,d,c,e[f+8],7,1770035416),c=k(c,b,a,d,e[f+9],12,2336552879),d=k(d,c,b,a,e[f+10],17,4294925233),a=k(a,d,c,b,e[f+11],22,2304563134),b=k(b,a,d,c,e[f+12],7,1804603682),c=k(c,b,a,d,e[f+13],
12,4254626195),d=k(d,c,b,a,e[f+14],17,2792965006),a=k(a,d,c,b,e[f+15],22,1236535329),b=l(b,a,d,c,e[f+1],5,4129170786),c=l(c,b,a,d,e[f+6],9,3225465664),d=l(d,c,b,a,e[f+11],14,643717713),a=l(a,d,c,b,e[f+0],20,3921069994),b=l(b,a,d,c,e[f+5],5,3593408605),c=l(c,b,a,d,e[f+10],9,38016083),d=l(d,c,b,a,e[f+15],14,3634488961),a=l(a,d,c,b,e[f+4],20,3889429448),b=l(b,a,d,c,e[f+9],5,568446438),c=l(c,b,a,d,e[f+14],9,3275163606),d=l(d,c,b,a,e[f+3],14,4107603335),a=l(a,d,c,b,e[f+8],20,1163531501),b=l(b,a,d,c,e[f+
13],5,2850285829),c=l(c,b,a,d,e[f+2],9,4243563512),d=l(d,c,b,a,e[f+7],14,1735328473),a=l(a,d,c,b,e[f+12],20,2368359562),b=m(b,a,d,c,e[f+5],4,4294588738),c=m(c,b,a,d,e[f+8],11,2272392833),d=m(d,c,b,a,e[f+11],16,1839030562),a=m(a,d,c,b,e[f+14],23,4259657740),b=m(b,a,d,c,e[f+1],4,2763975236),c=m(c,b,a,d,e[f+4],11,1272893353),d=m(d,c,b,a,e[f+7],16,4139469664),a=m(a,d,c,b,e[f+10],23,3200236656),b=m(b,a,d,c,e[f+13],4,681279174),c=m(c,b,a,d,e[f+0],11,3936430074),d=m(d,c,b,a,e[f+3],16,3572445317),a=m(a,d,
c,b,e[f+6],23,76029189),b=m(b,a,d,c,e[f+9],4,3654602809),c=m(c,b,a,d,e[f+12],11,3873151461),d=m(d,c,b,a,e[f+15],16,530742520),a=m(a,d,c,b,e[f+2],23,3299628645),b=n(b,a,d,c,e[f+0],6,4096336452),c=n(c,b,a,d,e[f+7],10,1126891415),d=n(d,c,b,a,e[f+14],15,2878612391),a=n(a,d,c,b,e[f+5],21,4237533241),b=n(b,a,d,c,e[f+12],6,1700485571),c=n(c,b,a,d,e[f+3],10,2399980690),d=n(d,c,b,a,e[f+10],15,4293915773),a=n(a,d,c,b,e[f+1],21,2240044497),b=n(b,a,d,c,e[f+8],6,1873313359),c=n(c,b,a,d,e[f+15],10,4264355552),d=n(d,c,b,a,e[f+6],15,2734768916),a=n(a,d,c,b,e[f+13],21,1309151649),b=n(b,a,d,c,e[f+4],6,4149444226),c=n(c,b,a,d,e[f+11],10,3174756917),d=n(d,c,b,a,e[f+2],15,718787259),a=n(a,d,c,b,e[f+9],213951481745),b=h(b,r),a=h(a,t),d=h(d,u),c=h(c,v);return(q(b)+q(a)+q(d)+q(c)).toLowerCase()};
				
/* Quatro Digital Amazing Menu */
var _0x191b=['add','extend','.qd_amazing_menu_auto','getParent','QD_amazingMenu','/qd-amazing-menu','object','error','undefined','info','warn','[QD\x20Amazing\x20Menu]\x0a','alerta','toLowerCase','aviso','apply','join','qdAmAddNdx','each','addClass','qd-am-li-','qd-am-first','last','qd-am-last','bnpbvfn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','charCodeAt','toUpperCase','ite','---','erc','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','find','.qd_am_code','filter','.qd-am-banner','length','qd-am-banner-wrapper','qd-am-collection-wrapper','qdAjax','html','img[alt=\x27','data-qdam-value','clone','insertBefore','hide','qd-am-content-loaded','text','trim','attr','[class*=\x27colunas\x27]','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','url','ajaxCallback','call','trigger','QuatroDigital.am.ajaxCallback','UL\x20do\x20menu\x20não\x20encontrada','li\x20>ul','qd-am-has-ul','children',':not(ul)','qd-am-elem-','first','>li','qd-amazing-menu','qd-am-column','qd-am-dropdown-menu','qd-am-dropdown'];(function(_0x56c105,_0x33969b){var _0x589b9d=function(_0x131599){while(--_0x131599){_0x56c105['push'](_0x56c105['shift']());}};_0x589b9d(++_0x33969b);}(_0x191b,0x1f4));var _0x3aee=function(_0x1f6d14,_0x2b0eea){_0x1f6d14=_0x1f6d14-0x0;var _0x19e984=_0x191b[_0x1f6d14];return _0x19e984;};(function(_0x5031b2){_0x5031b2['fn'][_0x3aee('0x0')]=_0x5031b2['fn']['closest'];}(jQuery));(function(_0x87e848){var _0x2d12d7;var _0x344376=jQuery;if('function'!==typeof _0x344376['fn'][_0x3aee('0x1')]){var _0x4cecd3={'url':_0x3aee('0x2'),'callback':function(){},'ajaxCallback':function(){}};var _0x296eeb=function(_0x19d464,_0xea31fb){if(_0x3aee('0x3')===typeof console&&'undefined'!==typeof console[_0x3aee('0x4')]&&_0x3aee('0x5')!==typeof console[_0x3aee('0x6')]&&'undefined'!==typeof console[_0x3aee('0x7')]){var _0x21aa4b;_0x3aee('0x3')===typeof _0x19d464?(_0x19d464['unshift'](_0x3aee('0x8')),_0x21aa4b=_0x19d464):_0x21aa4b=['[QD\x20Amazing\x20Menu]\x0a'+_0x19d464];if('undefined'===typeof _0xea31fb||_0x3aee('0x9')!==_0xea31fb[_0x3aee('0xa')]()&&_0x3aee('0xb')!==_0xea31fb[_0x3aee('0xa')]())if(_0x3aee('0x5')!==typeof _0xea31fb&&_0x3aee('0x6')===_0xea31fb[_0x3aee('0xa')]())try{console[_0x3aee('0x6')][_0x3aee('0xc')](console,_0x21aa4b);}catch(_0x286702){try{console['info'](_0x21aa4b[_0x3aee('0xd')]('\x0a'));}catch(_0x4ee893){}}else try{console[_0x3aee('0x4')][_0x3aee('0xc')](console,_0x21aa4b);}catch(_0x1427a4){try{console[_0x3aee('0x4')](_0x21aa4b[_0x3aee('0xd')]('\x0a'));}catch(_0x227a23){}}else try{console[_0x3aee('0x7')][_0x3aee('0xc')](console,_0x21aa4b);}catch(_0x1ac7aa){try{console[_0x3aee('0x7')](_0x21aa4b[_0x3aee('0xd')]('\x0a'));}catch(_0x3b9826){}}}};_0x344376['fn'][_0x3aee('0xe')]=function(){var _0x2d7e4a=_0x344376(this);_0x2d7e4a[_0x3aee('0xf')](function(_0x1f0d39){_0x344376(this)[_0x3aee('0x10')](_0x3aee('0x11')+_0x1f0d39);});_0x2d7e4a['first']()[_0x3aee('0x10')](_0x3aee('0x12'));_0x2d7e4a[_0x3aee('0x13')]()[_0x3aee('0x10')](_0x3aee('0x14'));return _0x2d7e4a;};_0x344376['fn'][_0x3aee('0x1')]=function(){};_0x87e848=function(_0x106893){var _0x4f82df={'o':_0x3aee('0x15')};return function(_0x35fff1){var _0x4b1bfc=function(_0x296038){return _0x296038;};var _0x24f0ed=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x35fff1=_0x35fff1['d'+_0x24f0ed[0x10]+'c'+_0x24f0ed[0x11]+'m'+_0x4b1bfc(_0x24f0ed[0x1])+'n'+_0x24f0ed[0xd]]['l'+_0x24f0ed[0x12]+'c'+_0x24f0ed[0x0]+'ti'+_0x4b1bfc('o')+'n'];var _0x52f864=function(_0x4b07c2){return escape(encodeURIComponent(_0x4b07c2['replace'](/\./g,'¨')[_0x3aee('0x16')](/[a-zA-Z]/g,function(_0x1514db){return String[_0x3aee('0x17')](('Z'>=_0x1514db?0x5a:0x7a)>=(_0x1514db=_0x1514db[_0x3aee('0x18')](0x0)+0xd)?_0x1514db:_0x1514db-0x1a);})));};var _0xed0a30=_0x52f864(_0x35fff1[[_0x24f0ed[0x9],_0x4b1bfc('o'),_0x24f0ed[0xc],_0x24f0ed[_0x4b1bfc(0xd)]][_0x3aee('0xd')]('')]);_0x52f864=_0x52f864((window[['js',_0x4b1bfc('no'),'m',_0x24f0ed[0x1],_0x24f0ed[0x4][_0x3aee('0x19')](),_0x3aee('0x1a')][_0x3aee('0xd')]('')]||_0x3aee('0x1b'))+['.v',_0x24f0ed[0xd],'e',_0x4b1bfc('x'),'co',_0x4b1bfc('mm'),_0x3aee('0x1c'),_0x24f0ed[0x1],'.c',_0x4b1bfc('o'),'m.',_0x24f0ed[0x13],'r'][_0x3aee('0xd')](''));for(var _0xe8c754 in _0x4f82df){if(_0x52f864===_0xe8c754+_0x4f82df[_0xe8c754]||_0xed0a30===_0xe8c754+_0x4f82df[_0xe8c754]){var _0x30c57d='tr'+_0x24f0ed[0x11]+'e';break;}_0x30c57d='f'+_0x24f0ed[0x0]+'ls'+_0x4b1bfc(_0x24f0ed[0x1])+'';}_0x4b1bfc=!0x1;-0x1<_0x35fff1[[_0x24f0ed[0xc],'e',_0x24f0ed[0x0],'rc',_0x24f0ed[0x9]]['join']('')][_0x3aee('0x1d')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x4b1bfc=!0x0);return[_0x30c57d,_0x4b1bfc];}(_0x106893);}(window);if(!eval(_0x87e848[0x0]))return _0x87e848[0x1]?_0x296eeb(_0x3aee('0x1e')):!0x1;var _0x22b2f1=function(_0xa205ba){var _0x3b2da2=_0xa205ba[_0x3aee('0x1f')](_0x3aee('0x20'));var _0x4b7f25=_0x3b2da2[_0x3aee('0x21')](_0x3aee('0x22'));var _0x329a3c=_0x3b2da2[_0x3aee('0x21')]('.qd-am-collection');if(_0x4b7f25[_0x3aee('0x23')]||_0x329a3c[_0x3aee('0x23')])_0x4b7f25['parent']()['addClass'](_0x3aee('0x24')),_0x329a3c['parent']()[_0x3aee('0x10')](_0x3aee('0x25')),_0x344376[_0x3aee('0x26')]({'url':_0x2d12d7['url'],'dataType':_0x3aee('0x27'),'success':function(_0x219b7a){var _0x185aa8=_0x344376(_0x219b7a);_0x4b7f25[_0x3aee('0xf')](function(){var _0x219b7a=_0x344376(this);var _0x21f255=_0x185aa8[_0x3aee('0x1f')](_0x3aee('0x28')+_0x219b7a['attr'](_0x3aee('0x29'))+'\x27]');_0x21f255['length']&&(_0x21f255[_0x3aee('0xf')](function(){_0x344376(this)[_0x3aee('0x0')]('.box-banner')[_0x3aee('0x2a')]()[_0x3aee('0x2b')](_0x219b7a);}),_0x219b7a[_0x3aee('0x2c')]());})['addClass'](_0x3aee('0x2d'));_0x329a3c[_0x3aee('0xf')](function(){var _0x219b7a={};var _0x15e643=_0x344376(this);_0x185aa8['find']('h2')[_0x3aee('0xf')](function(){if(_0x344376(this)[_0x3aee('0x2e')]()[_0x3aee('0x2f')]()[_0x3aee('0xa')]()==_0x15e643[_0x3aee('0x30')](_0x3aee('0x29'))[_0x3aee('0x2f')]()[_0x3aee('0xa')]())return _0x219b7a=_0x344376(this),!0x1;});_0x219b7a[_0x3aee('0x23')]&&(_0x219b7a['each'](function(){_0x344376(this)['getParent'](_0x3aee('0x31'))[_0x3aee('0x2a')]()[_0x3aee('0x2b')](_0x15e643);}),_0x15e643[_0x3aee('0x2c')]());})[_0x3aee('0x10')](_0x3aee('0x2d'));},'error':function(){_0x296eeb(_0x3aee('0x32')+_0x2d12d7[_0x3aee('0x33')]+'\x27\x20falho.');},'complete':function(){_0x2d12d7[_0x3aee('0x34')][_0x3aee('0x35')](this);_0x344376(window)[_0x3aee('0x36')](_0x3aee('0x37'),_0xa205ba);},'clearQueueDelay':0xbb8});};_0x344376[_0x3aee('0x1')]=function(_0x644a63){var _0x2a1c50=_0x644a63[_0x3aee('0x1f')]('ul[itemscope]')['each'](function(){var _0x80be5b=_0x344376(this);if(!_0x80be5b[_0x3aee('0x23')])return _0x296eeb([_0x3aee('0x38'),_0x644a63],_0x3aee('0x9'));_0x80be5b[_0x3aee('0x1f')](_0x3aee('0x39'))['parent']()[_0x3aee('0x10')](_0x3aee('0x3a'));_0x80be5b[_0x3aee('0x1f')]('li')[_0x3aee('0xf')](function(){var _0x4ebd4e=_0x344376(this);var _0x59c4b2=_0x4ebd4e[_0x3aee('0x3b')](_0x3aee('0x3c'));_0x59c4b2[_0x3aee('0x23')]&&_0x4ebd4e[_0x3aee('0x10')](_0x3aee('0x3d')+_0x59c4b2[_0x3aee('0x3e')]()[_0x3aee('0x2e')]()[_0x3aee('0x2f')]()['replaceSpecialChars']()[_0x3aee('0x16')](/\./g,'')[_0x3aee('0x16')](/\s/g,'-')['toLowerCase']());});var _0x2c98b5=_0x80be5b[_0x3aee('0x1f')](_0x3aee('0x3f'))[_0x3aee('0xe')]();_0x80be5b['addClass'](_0x3aee('0x40'));_0x2c98b5=_0x2c98b5[_0x3aee('0x1f')]('>ul');_0x2c98b5['each'](function(){var _0x4d308b=_0x344376(this);_0x4d308b[_0x3aee('0x1f')]('>li')[_0x3aee('0xe')]()['addClass'](_0x3aee('0x41'));_0x4d308b[_0x3aee('0x10')](_0x3aee('0x42'));_0x4d308b['parent']()['addClass'](_0x3aee('0x43'));});_0x2c98b5['addClass'](_0x3aee('0x43'));var _0x290414=0x0,_0x87e848=function(_0x576c67){_0x290414+=0x1;_0x576c67=_0x576c67[_0x3aee('0x3b')]('li')[_0x3aee('0x3b')]('*');_0x576c67[_0x3aee('0x23')]&&(_0x576c67['addClass']('qd-am-level-'+_0x290414),_0x87e848(_0x576c67));};_0x87e848(_0x80be5b);_0x80be5b[_0x3aee('0x44')](_0x80be5b[_0x3aee('0x1f')]('ul'))['each'](function(){var _0x12a8b4=_0x344376(this);_0x12a8b4[_0x3aee('0x10')]('qd-am-'+_0x12a8b4[_0x3aee('0x3b')]('li')[_0x3aee('0x23')]+'-li');});});_0x22b2f1(_0x2a1c50);_0x2d12d7['callback']['call'](this);_0x344376(window)[_0x3aee('0x36')]('QuatroDigital.am.callback',_0x644a63);};_0x344376['fn']['QD_amazingMenu']=function(_0x3fa8f5){var _0x5e1396=_0x344376(this);if(!_0x5e1396[_0x3aee('0x23')])return _0x5e1396;_0x2d12d7=_0x344376[_0x3aee('0x45')]({},_0x4cecd3,_0x3fa8f5);_0x5e1396['exec']=new _0x344376['QD_amazingMenu'](_0x344376(this));return _0x5e1396;};_0x344376(function(){_0x344376(_0x3aee('0x46'))['QD_amazingMenu']();});}}(this));
var _0x4be6=['prodId','.qd-bap-wrapper','remove','.qd-bap-item-added','qd-bap-item-added','input.qd-productId[value=','.qd-bap-qtt','.qd_bap_wrapper_content','prepend','ajaxStop','.qdDdcContainer','QD_smartCart','selector','dropDown','buyButton','QD_buyButton','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','smartCart','getParent','closest','undefined','pow','round','toFixed','length','replace','join','_QuatroDigital_CartData','callback','Callbacks','error','message','object','info','unshift','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','alerta','toLowerCase','aviso','apply','warn','_QuatroDigital_DropDown','QD_dropDownCart','bnpbvfn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','charCodeAt','toUpperCase','ite','erc','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','Finalizar\x20Compra','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','Continuar\x20Comprando','<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>','A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN','ajax','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','script','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','vtexjs','checkout','SDK','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','cartContainer','<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>','find','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','add','.qd_ddc_lightBoxOverlay','removeClass','body','qd-bb-lightBoxBodyProdAdd','off','keyup.qd_ddc_closeFn','keyCode','qd-bb-lightBoxProdAdd','.qd-ddc-scrollUp','scrollCart','.qd-ddc-scrollDown','click.qd_ddc_scrollDown','.qd-ddc-shipping\x20.qd-ddc-cep-tooltip-text','.qd-ddc-shipping\x20.qd-ddc-cep','val','keyup.qd_ddc_cep','.qd-ddc-shipping\x20.qd-ddc-cep-ok','click','.qd-ddc-cep-btn','.qd-ddc-shipping\x20.qd-dd-cep-slas','shippingCalculate','.qd-ddc-cep','toggle','.qd-ddc-cep-close','preventDefault','hide','click._QD_DDC_closeShipping','.qd-ddc-cep-tooltip','.qd-ddc-cep-ok','updateOnlyHover','mouseenter.qd_ddc_hover','allowUpdate','simpleCart','cartIsEmpty','mouseleave.qd_ddc_hover','texts','cartTotal','#value','#items','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#total','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','linkCart','.qd_ddc_continueShopping','html','.qd-ddc-checkout','linkCheckout','.qd-ddc-shipping','shippingForm','.qd-ddc-emptyCart\x20p','emptyCart','call','clone','.qd-ddc-infoTotalValue','total','qtt','.qd-ddc-infoAllTotal','items','renderProductsList','getCartInfoByUrl','dataOptionsCache','.qd-ddc-wrapper','qd-ddc-prodLoaded','smartCheckout','_QuatroDigital_AmountProduct','exec','addClass','getOrderForm','function','QD_checkoutQueue','totalizers','shippingData','Este\x20método\x20esta\x20descontinuado!','.qd-ddc-prodRow','qd-ddc-noItems','.qd-ddc-prodWrapper2','each','productCategoryIds','split','attr','availability','.qd-ddc-prodName','append','.qd-ddc-prodPrice','sellingPrice','Grátis','meta[name=currency]','content','.qd-ddc-quantity','quantity','.qd-ddc-remove','insertProdImg','.qd-ddc-image','imageUrl','appendTo','.qd-ddc-shipping\x20input','address','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','[data-sku=\x27','lastSku','outerHeight','parent','qd-ddc-lastAdded','qd-ddc-lastAddedFixed','qd-ddc-product-add-time-v2','timeRemoveNewItemClass','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','callbackProductsList\x20não\x20é\x20uma\x20função','forceImageHTTPS','string','https','load','src','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','actionButtons','data-sku','data-sku-index','changeQantity','.qd-ddc-prodQttWrapper:not(.qd_on)','qd_on','.qd-ddc-quantityMore','qd-loading','.qd-ddc-quantityMinus','click.qd_ddc_minus','keyup.qd_ddc_change','removeProduct','slideUp','formatCepField','calculateShipping','BRA','.qd-ddc-cep-tooltip-text','logisticsInfo','<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>','slas','price','shippingEstimate','name','<tr></tr>','\x20dia\x20útil','\x20dias\x20útéis','</td><td>',',\x20entrega\x20em\x20','\x20para\x20o\x20CEP\x20','</td>','tbody','fail','Não\x20foi\x20possível\x20calcular\x20o\x20frete','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','index','updateItems','done','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','atenção\x20esta\x20método\x20esta\x20descontinuado','boolean','removeItems','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2','stop','animate','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','avisso','Callback\x20não\x20é\x20uma\x20função','Oooops!\x20','allowRecalculate','buyButtonClicked','quickViewUpdate','productId','prod_'];(function(_0x250ffc,_0x33ac8b){var _0xddd6db=function(_0x3edae8){while(--_0x3edae8){_0x250ffc['push'](_0x250ffc['shift']());}};_0xddd6db(++_0x33ac8b);}(_0x4be6,0x101));var _0x4063=function(_0x21c892,_0x5b25f6){_0x21c892=_0x21c892-0x0;var _0x5c6dbc=_0x4be6[_0x21c892];return _0x5c6dbc;};(function(_0x413a61){_0x413a61['fn'][_0x4063('0x0')]=_0x413a61['fn'][_0x4063('0x1')];}(jQuery));function qd_number_format(_0x4422f0,_0x4f785b,_0x4ea818,_0x301912){_0x4422f0=(_0x4422f0+'')['replace'](/[^0-9+\-Ee.]/g,'');_0x4422f0=isFinite(+_0x4422f0)?+_0x4422f0:0x0;_0x4f785b=isFinite(+_0x4f785b)?Math['abs'](_0x4f785b):0x0;_0x301912=_0x4063('0x2')===typeof _0x301912?',':_0x301912;_0x4ea818=_0x4063('0x2')===typeof _0x4ea818?'.':_0x4ea818;var _0x59cf6b='',_0x59cf6b=function(_0x48c017,_0xd61c13){var _0x4f785b=Math[_0x4063('0x3')](0xa,_0xd61c13);return''+(Math[_0x4063('0x4')](_0x48c017*_0x4f785b)/_0x4f785b)[_0x4063('0x5')](_0xd61c13);},_0x59cf6b=(_0x4f785b?_0x59cf6b(_0x4422f0,_0x4f785b):''+Math[_0x4063('0x4')](_0x4422f0))['split']('.');0x3<_0x59cf6b[0x0][_0x4063('0x6')]&&(_0x59cf6b[0x0]=_0x59cf6b[0x0][_0x4063('0x7')](/\B(?=(?:\d{3})+(?!\d))/g,_0x301912));(_0x59cf6b[0x1]||'')[_0x4063('0x6')]<_0x4f785b&&(_0x59cf6b[0x1]=_0x59cf6b[0x1]||'',_0x59cf6b[0x1]+=Array(_0x4f785b-_0x59cf6b[0x1][_0x4063('0x6')]+0x1)[_0x4063('0x8')]('0'));return _0x59cf6b[_0x4063('0x8')](_0x4ea818);};(function(){try{window[_0x4063('0x9')]=window[_0x4063('0x9')]||{},window[_0x4063('0x9')][_0x4063('0xa')]=window['_QuatroDigital_CartData']['callback']||$[_0x4063('0xb')]();}catch(_0x2b96dd){'undefined'!==typeof console&&'function'===typeof console[_0x4063('0xc')]&&console['error']('Oooops!\x20',_0x2b96dd[_0x4063('0xd')]);}}());(function(_0x19eecd){try{var _0x27b4a4=jQuery,_0x2583e9=function(_0x22834b,_0x7dae8b){if(_0x4063('0xe')===typeof console&&_0x4063('0x2')!==typeof console['error']&&_0x4063('0x2')!==typeof console[_0x4063('0xf')]&&_0x4063('0x2')!==typeof console['warn']){var _0x4297f3;_0x4063('0xe')===typeof _0x22834b?(_0x22834b[_0x4063('0x10')]('[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a'),_0x4297f3=_0x22834b):_0x4297f3=[_0x4063('0x11')+_0x22834b];if(_0x4063('0x2')===typeof _0x7dae8b||_0x4063('0x12')!==_0x7dae8b[_0x4063('0x13')]()&&_0x4063('0x14')!==_0x7dae8b['toLowerCase']())if(_0x4063('0x2')!==typeof _0x7dae8b&&_0x4063('0xf')===_0x7dae8b['toLowerCase']())try{console[_0x4063('0xf')][_0x4063('0x15')](console,_0x4297f3);}catch(_0x3054dd){try{console['info'](_0x4297f3[_0x4063('0x8')]('\x0a'));}catch(_0x44252){}}else try{console[_0x4063('0xc')][_0x4063('0x15')](console,_0x4297f3);}catch(_0x5d4feb){try{console[_0x4063('0xc')](_0x4297f3['join']('\x0a'));}catch(_0x374cfa){}}else try{console[_0x4063('0x16')][_0x4063('0x15')](console,_0x4297f3);}catch(_0x5257af){try{console[_0x4063('0x16')](_0x4297f3[_0x4063('0x8')]('\x0a'));}catch(_0x677986){}}}};window[_0x4063('0x17')]=window[_0x4063('0x17')]||{};window[_0x4063('0x17')]['allowUpdate']=!0x0;_0x27b4a4[_0x4063('0x18')]=function(){};_0x27b4a4['fn'][_0x4063('0x18')]=function(){return{'fn':new _0x27b4a4()};};var _0x2c236a=function(_0x420999){var _0x3c5775={'o':_0x4063('0x19')};return function(_0x292af8){var _0x427b8a=function(_0x3556a8){return _0x3556a8;};var _0x187c8b=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x292af8=_0x292af8['d'+_0x187c8b[0x10]+'c'+_0x187c8b[0x11]+'m'+_0x427b8a(_0x187c8b[0x1])+'n'+_0x187c8b[0xd]]['l'+_0x187c8b[0x12]+'c'+_0x187c8b[0x0]+'ti'+_0x427b8a('o')+'n'];var _0x409a4c=function(_0x50892b){return escape(encodeURIComponent(_0x50892b[_0x4063('0x7')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x417db2){return String[_0x4063('0x1a')](('Z'>=_0x417db2?0x5a:0x7a)>=(_0x417db2=_0x417db2[_0x4063('0x1b')](0x0)+0xd)?_0x417db2:_0x417db2-0x1a);})));};var _0xec37bf=_0x409a4c(_0x292af8[[_0x187c8b[0x9],_0x427b8a('o'),_0x187c8b[0xc],_0x187c8b[_0x427b8a(0xd)]][_0x4063('0x8')]('')]);_0x409a4c=_0x409a4c((window[['js',_0x427b8a('no'),'m',_0x187c8b[0x1],_0x187c8b[0x4][_0x4063('0x1c')](),_0x4063('0x1d')][_0x4063('0x8')]('')]||'---')+['.v',_0x187c8b[0xd],'e',_0x427b8a('x'),'co',_0x427b8a('mm'),_0x4063('0x1e'),_0x187c8b[0x1],'.c',_0x427b8a('o'),'m.',_0x187c8b[0x13],'r'][_0x4063('0x8')](''));for(var _0x20192d in _0x3c5775){if(_0x409a4c===_0x20192d+_0x3c5775[_0x20192d]||_0xec37bf===_0x20192d+_0x3c5775[_0x20192d]){var _0x49632f='tr'+_0x187c8b[0x11]+'e';break;}_0x49632f='f'+_0x187c8b[0x0]+'ls'+_0x427b8a(_0x187c8b[0x1]);}_0x427b8a=!0x1;-0x1<_0x292af8[[_0x187c8b[0xc],'e',_0x187c8b[0x0],'rc',_0x187c8b[0x9]][_0x4063('0x8')]('')]['indexOf']('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x427b8a=!0x0);return[_0x49632f,_0x427b8a];}(_0x420999);}(window);if(!eval(_0x2c236a[0x0]))return _0x2c236a[0x1]?_0x2583e9(_0x4063('0x1f')):!0x1;_0x27b4a4['QD_dropDownCart']=function(_0x114b9f,_0x387332){var _0x545c1c=_0x27b4a4(_0x114b9f);if(!_0x545c1c[_0x4063('0x6')])return _0x545c1c;var _0x904618=_0x27b4a4['extend'](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':'Ir\x20ao\x20Carrinho','linkCheckout':_0x4063('0x20'),'cartTotal':_0x4063('0x21'),'emptyCart':_0x4063('0x22'),'continueShopping':_0x4063('0x23'),'shippingForm':_0x4063('0x24')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'forceImageHTTPS':!0x1,'skuName':function(_0x45cf6f){return _0x45cf6f['skuName']||_0x45cf6f['name'];},'callback':function(){},'callbackProductsList':function(){}},_0x387332);_0x27b4a4('');var _0x232c0e=this;if(_0x904618['smartCheckout']){var _0x4b7275=!0x1;_0x4063('0x2')===typeof window['vtexjs']&&(_0x2583e9(_0x4063('0x25')),_0x27b4a4[_0x4063('0x26')]({'url':_0x4063('0x27'),'async':!0x1,'dataType':_0x4063('0x28'),'error':function(){_0x2583e9(_0x4063('0x29'));_0x4b7275=!0x0;}}));if(_0x4b7275)return _0x2583e9('A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!');}if('object'===typeof window[_0x4063('0x2a')]&&_0x4063('0x2')!==typeof window[_0x4063('0x2a')][_0x4063('0x2b')])var _0x19eecd=window[_0x4063('0x2a')][_0x4063('0x2b')];else if(_0x4063('0xe')===typeof vtex&&_0x4063('0xe')===typeof vtex[_0x4063('0x2b')]&&_0x4063('0x2')!==typeof vtex[_0x4063('0x2b')][_0x4063('0x2c')])_0x19eecd=new vtex[(_0x4063('0x2b'))]['SDK']();else return _0x2583e9(_0x4063('0x2d'));_0x232c0e[_0x4063('0x2e')]=_0x4063('0x2f');var _0xe757be=function(_0xc72853){_0x27b4a4(this)['append'](_0xc72853);_0xc72853[_0x4063('0x30')](_0x4063('0x31'))[_0x4063('0x32')](_0x27b4a4(_0x4063('0x33')))['on']('click.qd_ddc_closeFn',function(){_0x545c1c[_0x4063('0x34')]('qd-bb-lightBoxProdAdd');_0x27b4a4(document[_0x4063('0x35')])['removeClass'](_0x4063('0x36'));});_0x27b4a4(document)[_0x4063('0x37')](_0x4063('0x38'))['on']('keyup.qd_ddc_closeFn',function(_0x3bfd9d){0x1b==_0x3bfd9d[_0x4063('0x39')]&&(_0x545c1c[_0x4063('0x34')](_0x4063('0x3a')),_0x27b4a4(document['body'])[_0x4063('0x34')](_0x4063('0x36')));});var _0x1f8127=_0xc72853[_0x4063('0x30')]('.qd-ddc-prodWrapper');_0xc72853['find'](_0x4063('0x3b'))['on']('click.qd_ddc_scrollUp',function(){_0x232c0e[_0x4063('0x3c')]('-',void 0x0,void 0x0,_0x1f8127);return!0x1;});_0xc72853[_0x4063('0x30')](_0x4063('0x3d'))['on'](_0x4063('0x3e'),function(){_0x232c0e[_0x4063('0x3c')](void 0x0,void 0x0,void 0x0,_0x1f8127);return!0x1;});var _0x56459f=_0xc72853[_0x4063('0x30')](_0x4063('0x3f'));_0xc72853[_0x4063('0x30')](_0x4063('0x40'))[_0x4063('0x41')]('')['on'](_0x4063('0x42'),function(_0x3be142){_0x232c0e['formatCepField'](_0x27b4a4(this));0xd==_0x3be142['keyCode']&&_0xc72853[_0x4063('0x30')](_0x4063('0x43'))[_0x4063('0x44')]();});_0xc72853[_0x4063('0x30')](_0x4063('0x45'))[_0x4063('0x44')](function(_0x34c35f){_0x34c35f['preventDefault']();_0xc72853['find'](_0x4063('0x46'))['length']&&_0x232c0e[_0x4063('0x47')](_0xc72853[_0x4063('0x30')](_0x4063('0x48')));_0x56459f[_0x4063('0x49')]();});_0xc72853['find'](_0x4063('0x4a'))['click'](function(_0x484873){_0x484873[_0x4063('0x4b')]();_0x56459f[_0x4063('0x4c')]();});_0x27b4a4(document)[_0x4063('0x37')](_0x4063('0x4d'))['on']('click._QD_DDC_closeShipping',function(_0x5ba4b4){_0x27b4a4(_0x5ba4b4['target'])[_0x4063('0x1')](_0xc72853[_0x4063('0x30')](_0x4063('0x4e')))[_0x4063('0x6')]||_0x56459f['hide']();});_0xc72853[_0x4063('0x30')](_0x4063('0x4f'))[_0x4063('0x44')](function(_0x5a5d08){_0x5a5d08[_0x4063('0x4b')]();_0x232c0e['shippingCalculate'](_0xc72853[_0x4063('0x30')]('.qd-ddc-cep'));});if(_0x904618[_0x4063('0x50')]){var _0x39be8c=0x0;_0x27b4a4(this)['on'](_0x4063('0x51'),function(){var _0xc72853=function(){window[_0x4063('0x17')][_0x4063('0x52')]&&(_0x232c0e['getCartInfoByUrl'](),window[_0x4063('0x17')][_0x4063('0x52')]=!0x1,_0x27b4a4['fn'][_0x4063('0x53')](!0x0),_0x232c0e[_0x4063('0x54')]());};_0x39be8c=setInterval(function(){_0xc72853();},0x258);_0xc72853();});_0x27b4a4(this)['on'](_0x4063('0x55'),function(){clearInterval(_0x39be8c);});}};var _0x367efe=function(_0x55a08a){_0x55a08a=_0x27b4a4(_0x55a08a);_0x904618['texts']['cartTotal']=_0x904618[_0x4063('0x56')][_0x4063('0x57')][_0x4063('0x7')](_0x4063('0x58'),'<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>');_0x904618[_0x4063('0x56')][_0x4063('0x57')]=_0x904618[_0x4063('0x56')][_0x4063('0x57')][_0x4063('0x7')](_0x4063('0x59'),_0x4063('0x5a'));_0x904618[_0x4063('0x56')][_0x4063('0x57')]=_0x904618['texts'][_0x4063('0x57')][_0x4063('0x7')]('#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>');_0x904618[_0x4063('0x56')]['cartTotal']=_0x904618[_0x4063('0x56')][_0x4063('0x57')][_0x4063('0x7')](_0x4063('0x5b'),_0x4063('0x5c'));_0x55a08a[_0x4063('0x30')]('.qd-ddc-viewCart')['html'](_0x904618[_0x4063('0x56')][_0x4063('0x5d')]);_0x55a08a['find'](_0x4063('0x5e'))[_0x4063('0x5f')](_0x904618['texts']['continueShopping']);_0x55a08a[_0x4063('0x30')](_0x4063('0x60'))['html'](_0x904618['texts'][_0x4063('0x61')]);_0x55a08a[_0x4063('0x30')]('.qd-ddc-infoTotal')[_0x4063('0x5f')](_0x904618['texts']['cartTotal']);_0x55a08a[_0x4063('0x30')](_0x4063('0x62'))[_0x4063('0x5f')](_0x904618[_0x4063('0x56')][_0x4063('0x63')]);_0x55a08a[_0x4063('0x30')](_0x4063('0x64'))[_0x4063('0x5f')](_0x904618[_0x4063('0x56')][_0x4063('0x65')]);return _0x55a08a;}(this[_0x4063('0x2e')]);var _0x1972ce=0x0;_0x545c1c['each'](function(){0x0<_0x1972ce?_0xe757be[_0x4063('0x66')](this,_0x367efe[_0x4063('0x67')]()):_0xe757be[_0x4063('0x66')](this,_0x367efe);_0x1972ce++;});window[_0x4063('0x9')][_0x4063('0xa')][_0x4063('0x32')](function(){_0x27b4a4(_0x4063('0x68'))[_0x4063('0x5f')](window[_0x4063('0x9')][_0x4063('0x69')]||'--');_0x27b4a4('.qd-ddc-infoTotalItems')[_0x4063('0x5f')](window[_0x4063('0x9')][_0x4063('0x6a')]||'0');_0x27b4a4('.qd-ddc-infoTotalShipping')[_0x4063('0x5f')](window[_0x4063('0x9')]['shipping']||'--');_0x27b4a4(_0x4063('0x6b'))[_0x4063('0x5f')](window[_0x4063('0x9')]['allTotal']||'--');});var _0x8b4765=function(_0x3adb41,_0x2c9e3d){if(_0x4063('0x2')===typeof _0x3adb41[_0x4063('0x6c')])return _0x2583e9('Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição');_0x232c0e[_0x4063('0x6d')]['call'](this,_0x2c9e3d);};_0x232c0e[_0x4063('0x6e')]=function(_0x1522f6,_0x583920){_0x4063('0x2')!=typeof _0x583920?window[_0x4063('0x17')][_0x4063('0x6f')]=_0x583920:window['_QuatroDigital_DropDown'][_0x4063('0x6f')]&&(_0x583920=window[_0x4063('0x17')]['dataOptionsCache']);setTimeout(function(){window['_QuatroDigital_DropDown'][_0x4063('0x6f')]=void 0x0;},_0x904618['timeRemoveNewItemClass']);_0x27b4a4(_0x4063('0x70'))['removeClass'](_0x4063('0x71'));if(_0x904618[_0x4063('0x72')]){var _0x2d0735=function(_0x529e73){window[_0x4063('0x17')]['getOrderForm']=_0x529e73;_0x8b4765(_0x529e73,_0x583920);_0x4063('0x2')!==typeof window[_0x4063('0x73')]&&'function'===typeof window['_QuatroDigital_AmountProduct']['exec']&&window['_QuatroDigital_AmountProduct'][_0x4063('0x74')]['call'](this);_0x27b4a4(_0x4063('0x70'))[_0x4063('0x75')](_0x4063('0x71'));};_0x4063('0x2')!==typeof window[_0x4063('0x17')][_0x4063('0x76')]?(_0x2d0735(window['_QuatroDigital_DropDown'][_0x4063('0x76')]),_0x4063('0x77')===typeof _0x1522f6&&_0x1522f6(window['_QuatroDigital_DropDown'][_0x4063('0x76')])):_0x27b4a4[_0x4063('0x78')]([_0x4063('0x6c'),_0x4063('0x79'),_0x4063('0x7a')],{'done':function(_0x34ebb3){_0x2d0735[_0x4063('0x66')](this,_0x34ebb3);_0x4063('0x77')===typeof _0x1522f6&&_0x1522f6(_0x34ebb3);},'fail':function(_0x3ef626){_0x2583e9(['Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho',_0x3ef626]);}});}else alert(_0x4063('0x7b'));};_0x232c0e[_0x4063('0x54')]=function(){var _0x2d7a18=_0x27b4a4(_0x4063('0x70'));_0x2d7a18[_0x4063('0x30')](_0x4063('0x7c'))[_0x4063('0x6')]?_0x2d7a18[_0x4063('0x34')](_0x4063('0x7d')):_0x2d7a18[_0x4063('0x75')](_0x4063('0x7d'));};_0x232c0e[_0x4063('0x6d')]=function(_0x22c58d){var _0x387332=_0x27b4a4(_0x4063('0x7e'));_0x387332['empty']();_0x387332[_0x4063('0x7f')](function(){var _0x1691cc=_0x27b4a4(this),_0x387332,_0x37aeaa,_0x52dd3=_0x27b4a4(''),_0x4eb291;for(_0x4eb291 in window[_0x4063('0x17')][_0x4063('0x76')]['items'])if(_0x4063('0xe')===typeof window['_QuatroDigital_DropDown'][_0x4063('0x76')][_0x4063('0x6c')][_0x4eb291]){var _0x4c29a8=window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x6c')][_0x4eb291];var _0x30942a=_0x4c29a8[_0x4063('0x80')][_0x4063('0x7')](/^\/|\/$/g,'')[_0x4063('0x81')]('/');var _0x114b9f=_0x27b4a4('<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>');_0x114b9f[_0x4063('0x82')]({'data-sku':_0x4c29a8['id'],'data-sku-index':_0x4eb291,'data-qd-departament':_0x30942a[0x0],'data-qd-category':_0x30942a[_0x30942a['length']-0x1]});_0x114b9f[_0x4063('0x75')]('qd-ddc-'+_0x4c29a8[_0x4063('0x83')]);_0x114b9f[_0x4063('0x30')](_0x4063('0x84'))[_0x4063('0x85')](_0x904618['skuName'](_0x4c29a8));_0x114b9f[_0x4063('0x30')](_0x4063('0x86'))['append'](isNaN(_0x4c29a8[_0x4063('0x87')])?_0x4c29a8[_0x4063('0x87')]:0x0==_0x4c29a8[_0x4063('0x87')]?_0x4063('0x88'):(_0x27b4a4(_0x4063('0x89'))[_0x4063('0x82')](_0x4063('0x8a'))||'R$')+'\x20'+qd_number_format(_0x4c29a8[_0x4063('0x87')]/0x64,0x2,',','.'));_0x114b9f['find'](_0x4063('0x8b'))[_0x4063('0x82')]({'data-sku':_0x4c29a8['id'],'data-sku-index':_0x4eb291})['val'](_0x4c29a8[_0x4063('0x8c')]);_0x114b9f[_0x4063('0x30')](_0x4063('0x8d'))[_0x4063('0x82')]({'data-sku':_0x4c29a8['id'],'data-sku-index':_0x4eb291});_0x232c0e[_0x4063('0x8e')](_0x4c29a8['id'],_0x114b9f[_0x4063('0x30')](_0x4063('0x8f')),_0x4c29a8[_0x4063('0x90')]);_0x114b9f[_0x4063('0x30')]('.qd-ddc-quantityMore,.qd-ddc-quantityMinus')['attr']({'data-sku':_0x4c29a8['id'],'data-sku-index':_0x4eb291});_0x114b9f[_0x4063('0x91')](_0x1691cc);_0x52dd3=_0x52dd3['add'](_0x114b9f);}try{var _0x1094d7=_0x1691cc[_0x4063('0x0')](_0x4063('0x70'))[_0x4063('0x30')](_0x4063('0x92'));_0x1094d7[_0x4063('0x6')]&&''==_0x1094d7[_0x4063('0x41')]()&&window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x7a')][_0x4063('0x93')]&&_0x1094d7['val'](window['_QuatroDigital_DropDown'][_0x4063('0x76')]['shippingData'][_0x4063('0x93')]['postalCode']);}catch(_0x3e29f0){_0x2583e9(_0x4063('0x94')+_0x3e29f0[_0x4063('0xd')],_0x4063('0x14'));}_0x232c0e['actionButtons'](_0x1691cc);_0x232c0e[_0x4063('0x54')]();_0x22c58d&&_0x22c58d['lastSku']&&function(){_0x37aeaa=_0x52dd3['filter'](_0x4063('0x95')+_0x22c58d[_0x4063('0x96')]+'\x27]');_0x37aeaa['length']&&(_0x387332=0x0,_0x52dd3[_0x4063('0x7f')](function(){var _0x22c58d=_0x27b4a4(this);if(_0x22c58d['is'](_0x37aeaa))return!0x1;_0x387332+=_0x22c58d[_0x4063('0x97')]();}),_0x232c0e[_0x4063('0x3c')](void 0x0,void 0x0,_0x387332,_0x1691cc[_0x4063('0x32')](_0x1691cc[_0x4063('0x98')]())),_0x52dd3[_0x4063('0x34')]('qd-ddc-lastAddedFixed'),function(_0x3b91ae){_0x3b91ae[_0x4063('0x75')](_0x4063('0x99'));_0x3b91ae[_0x4063('0x75')](_0x4063('0x9a'));setTimeout(function(){_0x3b91ae['removeClass'](_0x4063('0x99'));},_0x904618['timeRemoveNewItemClass']);}(_0x37aeaa),_0x27b4a4(document[_0x4063('0x35')])[_0x4063('0x75')](_0x4063('0x9b')),setTimeout(function(){_0x27b4a4(document['body'])[_0x4063('0x34')]('qd-ddc-product-add-time-v2');},_0x904618[_0x4063('0x9c')]));}();});(function(){_QuatroDigital_DropDown['getOrderForm']['items'][_0x4063('0x6')]?(_0x27b4a4(_0x4063('0x35'))['removeClass'](_0x4063('0x9d'))[_0x4063('0x75')](_0x4063('0x9e')),setTimeout(function(){_0x27b4a4(_0x4063('0x35'))[_0x4063('0x34')]('qd-ddc-product-add-time');},_0x904618[_0x4063('0x9c')])):_0x27b4a4('body')[_0x4063('0x34')]('qd-ddc-cart-rendered')[_0x4063('0x75')](_0x4063('0x9d'));}());'function'===typeof _0x904618['callbackProductsList']?_0x904618['callbackProductsList'][_0x4063('0x66')](this):_0x2583e9(_0x4063('0x9f'));};_0x232c0e[_0x4063('0x8e')]=function(_0x23c148,_0x42428e,_0x132738){function _0x38441f(){_0x904618[_0x4063('0xa0')]&&_0x4063('0xa1')==typeof _0x132738&&(_0x132738=_0x132738[_0x4063('0x7')]('http',_0x4063('0xa2')));_0x42428e['removeClass']('qd-loaded')[_0x4063('0xa3')](function(){_0x27b4a4(this)[_0x4063('0x75')]('qd-loaded');})['attr'](_0x4063('0xa4'),_0x132738);}_0x132738?_0x38441f():isNaN(_0x23c148)?_0x2583e9(_0x4063('0xa5'),'alerta'):alert('Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.');};_0x232c0e[_0x4063('0xa6')]=function(_0x57f5b6){var _0x176206=function(_0x20b720,_0x5a6b31){var _0x387332=_0x27b4a4(_0x20b720);var _0x652bf4=_0x387332[_0x4063('0x82')](_0x4063('0xa7'));var _0x114b9f=_0x387332[_0x4063('0x82')](_0x4063('0xa8'));if(_0x652bf4){var _0x29f56a=parseInt(_0x387332[_0x4063('0x41')]())||0x1;_0x232c0e['changeQantity']([_0x652bf4,_0x114b9f],_0x29f56a,_0x29f56a+0x1,function(_0x598114){_0x387332[_0x4063('0x41')](_0x598114);_0x4063('0x77')===typeof _0x5a6b31&&_0x5a6b31();});}};var _0x387332=function(_0x52aed2,_0x138eba){var _0x387332=_0x27b4a4(_0x52aed2);var _0x568aaa=_0x387332[_0x4063('0x82')](_0x4063('0xa7'));var _0x114b9f=_0x387332[_0x4063('0x82')](_0x4063('0xa8'));if(_0x568aaa){var _0x3ce503=parseInt(_0x387332[_0x4063('0x41')]())||0x2;_0x232c0e['changeQantity']([_0x568aaa,_0x114b9f],_0x3ce503,_0x3ce503-0x1,function(_0x321672){_0x387332[_0x4063('0x41')](_0x321672);'function'===typeof _0x138eba&&_0x138eba();});}};var _0x114b9f=function(_0x4edecf,_0x4f94ab){var _0x54b8b5=_0x27b4a4(_0x4edecf);var _0x5262a7=_0x54b8b5['attr'](_0x4063('0xa7'));var _0x114b9f=_0x54b8b5[_0x4063('0x82')](_0x4063('0xa8'));if(_0x5262a7){var _0x1631c3=parseInt(_0x54b8b5[_0x4063('0x41')]())||0x1;_0x232c0e[_0x4063('0xa9')]([_0x5262a7,_0x114b9f],0x1,_0x1631c3,function(_0x252477){_0x54b8b5['val'](_0x252477);_0x4063('0x77')===typeof _0x4f94ab&&_0x4f94ab();});}};var _0xabd6=_0x57f5b6['find'](_0x4063('0xaa'));_0xabd6['addClass'](_0x4063('0xab'))[_0x4063('0x7f')](function(){var _0x57f5b6=_0x27b4a4(this);_0x57f5b6['find'](_0x4063('0xac'))['on']('click.qd_ddc_more',function(_0xb9ce1d){_0xb9ce1d['preventDefault']();_0xabd6['addClass'](_0x4063('0xad'));_0x176206(_0x57f5b6[_0x4063('0x30')]('.qd-ddc-quantity'),function(){_0xabd6['removeClass']('qd-loading');});});_0x57f5b6[_0x4063('0x30')](_0x4063('0xae'))['on'](_0x4063('0xaf'),function(_0x31fd32){_0x31fd32[_0x4063('0x4b')]();_0xabd6[_0x4063('0x75')](_0x4063('0xad'));_0x387332(_0x57f5b6[_0x4063('0x30')](_0x4063('0x8b')),function(){_0xabd6[_0x4063('0x34')](_0x4063('0xad'));});});_0x57f5b6[_0x4063('0x30')](_0x4063('0x8b'))['on']('focusout.qd_ddc_change',function(){_0xabd6[_0x4063('0x75')]('qd-loading');_0x114b9f(this,function(){_0xabd6['removeClass'](_0x4063('0xad'));});});_0x57f5b6[_0x4063('0x30')](_0x4063('0x8b'))['on'](_0x4063('0xb0'),function(_0x225e51){0xd==_0x225e51['keyCode']&&(_0xabd6[_0x4063('0x75')](_0x4063('0xad')),_0x114b9f(this,function(){_0xabd6['removeClass'](_0x4063('0xad'));}));});});_0x57f5b6['find'](_0x4063('0x7c'))['each'](function(){var _0x3d5a14=_0x27b4a4(this);_0x3d5a14[_0x4063('0x30')](_0x4063('0x8d'))['on']('click.qd_ddc_remove',function(){_0x3d5a14[_0x4063('0x75')](_0x4063('0xad'));_0x232c0e[_0x4063('0xb1')](_0x27b4a4(this),function(_0x1dbfc8){_0x1dbfc8?_0x3d5a14['stop'](!0x0)[_0x4063('0xb2')](function(){_0x3d5a14['remove']();_0x232c0e[_0x4063('0x54')]();_0x232c0e[_0x4063('0x47')](_0x57f5b6[_0x4063('0x0')](_0x4063('0x70'))[_0x4063('0x30')](_0x4063('0x48')));}):_0x3d5a14[_0x4063('0x34')](_0x4063('0xad'));});return!0x1;});});};_0x232c0e[_0x4063('0xb3')]=function(_0x541a57){var _0x1c0a27=_0x541a57[_0x4063('0x41')]();_0x1c0a27=_0x1c0a27[_0x4063('0x7')](/[^0-9\-]/g,'');_0x1c0a27=_0x1c0a27['replace'](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,'$1-$2$3');_0x1c0a27=_0x1c0a27[_0x4063('0x7')](/(.{9}).*/g,'$1');_0x541a57['val'](_0x1c0a27);};_0x232c0e[_0x4063('0x47')]=function(_0x4227db){var _0xe4089e=_0x4227db['val']();0x9<=_0xe4089e[_0x4063('0x6')]&&_0x19eecd[_0x4063('0xb4')]({'postalCode':_0xe4089e,'country':_0x4063('0xb5')})['done'](function(_0xb1b172){_0x4227db[_0x4063('0x1')](_0x4063('0xb6'))['find']('.qd-dd-cep-slas')['remove']();window['_QuatroDigital_DropDown']['getOrderForm']=_0xb1b172;_0x232c0e[_0x4063('0x6e')]();var _0x114b9f=[],_0x429910=_0xb1b172[_0x4063('0x7a')][_0x4063('0xb7')];_0xb1b172=_0x27b4a4(_0x4063('0xb8'));for(var _0x257ee8=0x0;_0x257ee8<_0x429910[_0x4063('0x6')];_0x257ee8++)for(var _0x20e95a=_0x429910[_0x257ee8][_0x4063('0xb9')],_0x2c41db=0x0;_0x2c41db<_0x20e95a[_0x4063('0x6')];_0x2c41db++)_0x114b9f[_0x2c41db]=_0x114b9f[_0x2c41db]||{},_0x114b9f[_0x2c41db]['price']=(_0x114b9f[_0x2c41db][_0x4063('0xba')]||0x0)+_0x20e95a[_0x2c41db][_0x4063('0xba')],_0x114b9f[_0x2c41db][_0x4063('0xbb')]=_0x20e95a[_0x2c41db][_0x4063('0xbb')],_0x114b9f[_0x2c41db][_0x4063('0xbc')]=_0x20e95a[_0x2c41db][_0x4063('0xbc')];for(_0x429910=0x0;_0x429910<_0x114b9f[_0x4063('0x6')];_0x429910++)_0x257ee8=_0x27b4a4(_0x4063('0xbd')),_0x20e95a=0x1<_0x114b9f[_0x429910][_0x4063('0xbb')]?_0x114b9f[_0x429910]['shippingEstimate']['replace']('bd',_0x4063('0xbe')):_0x114b9f[_0x429910][_0x4063('0xbb')][_0x4063('0x7')]('bd',_0x4063('0xbf')),_0x257ee8[_0x4063('0x85')]('<td>\x20R$\x20'+qd_number_format(_0x114b9f[_0x429910]['price']/0x64,0x2,',','.')+_0x4063('0xc0')+_0x114b9f[_0x429910]['name']+_0x4063('0xc1')+_0x20e95a+_0x4063('0xc2')+_0xe4089e+_0x4063('0xc3')),_0x257ee8[_0x4063('0x91')](_0xb1b172[_0x4063('0x30')](_0x4063('0xc4')));_0xb1b172['insertBefore'](_0x4227db[_0x4063('0x1')](_0x4063('0xb6'))[_0x4063('0x30')](_0x4063('0x4a')));})[_0x4063('0xc5')](function(_0x208cc8){_0x2583e9([_0x4063('0xc6'),_0x208cc8]);});};_0x232c0e['changeQantity']=function(_0x524901,_0x30fc03,_0x2462d6,_0x5a9e12){function _0x89afb2(_0x5f4344){_0x5f4344='boolean'!==typeof _0x5f4344?!0x1:_0x5f4344;_0x232c0e[_0x4063('0x6e')]();window['_QuatroDigital_DropDown'][_0x4063('0x52')]=!0x1;_0x232c0e[_0x4063('0x54')]();_0x4063('0x2')!==typeof window[_0x4063('0x73')]&&'function'===typeof window[_0x4063('0x73')][_0x4063('0x74')]&&window[_0x4063('0x73')][_0x4063('0x74')][_0x4063('0x66')](this);_0x4063('0x77')===typeof adminCart&&adminCart();_0x27b4a4['fn']['simpleCart'](!0x0,void 0x0,_0x5f4344);_0x4063('0x77')===typeof _0x5a9e12&&_0x5a9e12(_0x30fc03);}_0x2462d6=_0x2462d6||0x1;if(0x1>_0x2462d6)return _0x30fc03;if(_0x904618['smartCheckout']){if('undefined'===typeof window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x6c')][_0x524901[0x1]])return _0x2583e9(_0x4063('0xc7')+_0x524901[0x1]+']'),_0x30fc03;window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x6c')][_0x524901[0x1]][_0x4063('0x8c')]=_0x2462d6;window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x6c')][_0x524901[0x1]][_0x4063('0xc8')]=_0x524901[0x1];_0x19eecd[_0x4063('0xc9')]([window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x6c')][_0x524901[0x1]]],[_0x4063('0x6c'),_0x4063('0x79'),'shippingData'])[_0x4063('0xca')](function(_0x10db0e){window['_QuatroDigital_DropDown'][_0x4063('0x76')]=_0x10db0e;_0x89afb2(!0x0);})[_0x4063('0xc5')](function(_0x208230){_0x2583e9([_0x4063('0xcb'),_0x208230]);_0x89afb2();});}else _0x2583e9(_0x4063('0xcc'));};_0x232c0e[_0x4063('0xb1')]=function(_0x5a5ba2,_0x2f9ad6){function _0x3b0e0c(_0x1d4857){_0x1d4857=_0x4063('0xcd')!==typeof _0x1d4857?!0x1:_0x1d4857;'undefined'!==typeof window[_0x4063('0x73')]&&_0x4063('0x77')===typeof window['_QuatroDigital_AmountProduct'][_0x4063('0x74')]&&window[_0x4063('0x73')][_0x4063('0x74')][_0x4063('0x66')](this);_0x4063('0x77')===typeof adminCart&&adminCart();_0x27b4a4['fn']['simpleCart'](!0x0,void 0x0,_0x1d4857);_0x4063('0x77')===typeof _0x2f9ad6&&_0x2f9ad6(_0x114b9f);}var _0x114b9f=!0x1,_0x59f5b3=_0x27b4a4(_0x5a5ba2)[_0x4063('0x82')]('data-sku-index');if(_0x904618[_0x4063('0x72')]){if('undefined'===typeof window[_0x4063('0x17')]['getOrderForm']['items'][_0x59f5b3])return _0x2583e9('Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items['+_0x59f5b3+']'),_0x114b9f;window['_QuatroDigital_DropDown'][_0x4063('0x76')][_0x4063('0x6c')][_0x59f5b3][_0x4063('0xc8')]=_0x59f5b3;_0x19eecd[_0x4063('0xce')]([window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x6c')][_0x59f5b3]],['items',_0x4063('0x79'),_0x4063('0x7a')])[_0x4063('0xca')](function(_0x13282c){_0x114b9f=!0x0;window[_0x4063('0x17')][_0x4063('0x76')]=_0x13282c;_0x8b4765(_0x13282c);_0x3b0e0c(!0x0);})['fail'](function(_0x333485){_0x2583e9([_0x4063('0xcf'),_0x333485]);_0x3b0e0c();});}else alert('Atenção,\x20este\x20método\x20esta\x20descontinuado.');};_0x232c0e['scrollCart']=function(_0x4d53fc,_0x40d6a8,_0x3cac58,_0x2add50){_0x2add50=_0x2add50||_0x27b4a4(_0x4063('0xd0'));_0x4d53fc=_0x4d53fc||'+';_0x40d6a8=_0x40d6a8||0.9*_0x2add50['height']();_0x2add50[_0x4063('0xd1')](!0x0,!0x0)[_0x4063('0xd2')]({'scrollTop':isNaN(_0x3cac58)?_0x4d53fc+'='+_0x40d6a8+'px':_0x3cac58});};_0x904618[_0x4063('0x50')]||(_0x232c0e[_0x4063('0x6e')](),_0x27b4a4['fn'][_0x4063('0x53')](!0x0));_0x27b4a4(window)['on'](_0x4063('0xd3'),function(){try{window[_0x4063('0x17')][_0x4063('0x76')]=void 0x0,_0x232c0e[_0x4063('0x6e')]();}catch(_0x3bcfd3){_0x2583e9(_0x4063('0xd4')+_0x3bcfd3['message'],_0x4063('0xd5'));}});_0x4063('0x77')===typeof _0x904618[_0x4063('0xa')]?_0x904618[_0x4063('0xa')]['call'](this):_0x2583e9(_0x4063('0xd6'));};_0x27b4a4['fn']['QD_dropDownCart']=function(_0x1defd3){var _0x154542=_0x27b4a4(this);_0x154542['fn']=new _0x27b4a4[(_0x4063('0x18'))](this,_0x1defd3);return _0x154542;};}catch(_0x14f22c){'undefined'!==typeof console&&_0x4063('0x77')===typeof console[_0x4063('0xc')]&&console[_0x4063('0xc')](_0x4063('0xd7'),_0x14f22c);}}(this));(function(_0x25e05b){try{var _0x187ebf=jQuery;window['_QuatroDigital_AmountProduct']=window['_QuatroDigital_AmountProduct']||{};window[_0x4063('0x73')][_0x4063('0x6c')]={};window['_QuatroDigital_AmountProduct'][_0x4063('0xd8')]=!0x1;window[_0x4063('0x73')][_0x4063('0xd9')]=!0x1;window[_0x4063('0x73')][_0x4063('0xda')]=!0x1;var _0x144c93=function(){if(window[_0x4063('0x73')][_0x4063('0xd8')]){var _0x346a03=!0x1;var _0x57842d={};window[_0x4063('0x73')][_0x4063('0x6c')]={};for(_0x38d7cc in window['_QuatroDigital_DropDown']['getOrderForm'][_0x4063('0x6c')])if('object'===typeof window[_0x4063('0x17')][_0x4063('0x76')][_0x4063('0x6c')][_0x38d7cc]){var _0xbb0e1f=window[_0x4063('0x17')][_0x4063('0x76')]['items'][_0x38d7cc];_0x4063('0x2')!==typeof _0xbb0e1f[_0x4063('0xdb')]&&null!==_0xbb0e1f['productId']&&''!==_0xbb0e1f['productId']&&(window[_0x4063('0x73')][_0x4063('0x6c')][_0x4063('0xdc')+_0xbb0e1f[_0x4063('0xdb')]]=window['_QuatroDigital_AmountProduct'][_0x4063('0x6c')][_0x4063('0xdc')+_0xbb0e1f['productId']]||{},window[_0x4063('0x73')][_0x4063('0x6c')][_0x4063('0xdc')+_0xbb0e1f[_0x4063('0xdb')]][_0x4063('0xdd')]=_0xbb0e1f[_0x4063('0xdb')],_0x57842d[_0x4063('0xdc')+_0xbb0e1f['productId']]||(window['_QuatroDigital_AmountProduct'][_0x4063('0x6c')][_0x4063('0xdc')+_0xbb0e1f[_0x4063('0xdb')]][_0x4063('0x6a')]=0x0),window[_0x4063('0x73')]['items'][_0x4063('0xdc')+_0xbb0e1f[_0x4063('0xdb')]][_0x4063('0x6a')]+=_0xbb0e1f[_0x4063('0x8c')],_0x346a03=!0x0,_0x57842d[_0x4063('0xdc')+_0xbb0e1f[_0x4063('0xdb')]]=!0x0);}var _0x38d7cc=_0x346a03;}else _0x38d7cc=void 0x0;window['_QuatroDigital_AmountProduct']['allowRecalculate']&&(_0x187ebf(_0x4063('0xde'))[_0x4063('0xdf')](),_0x187ebf(_0x4063('0xe0'))[_0x4063('0x34')](_0x4063('0xe1')));for(var _0xb008d2 in window[_0x4063('0x73')][_0x4063('0x6c')]){_0xbb0e1f=window['_QuatroDigital_AmountProduct'][_0x4063('0x6c')][_0xb008d2];if(_0x4063('0xe')!==typeof _0xbb0e1f)return;_0x57842d=_0x187ebf(_0x4063('0xe2')+_0xbb0e1f[_0x4063('0xdd')]+']')[_0x4063('0x0')]('li');if(window['_QuatroDigital_AmountProduct'][_0x4063('0xd8')]||!_0x57842d[_0x4063('0x30')]('.qd-bap-wrapper')[_0x4063('0x6')])_0x346a03=_0x187ebf('<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>'),_0x346a03[_0x4063('0x30')](_0x4063('0xe3'))[_0x4063('0x5f')](_0xbb0e1f[_0x4063('0x6a')]),_0xbb0e1f=_0x57842d[_0x4063('0x30')](_0x4063('0xe4')),_0xbb0e1f[_0x4063('0x6')]?_0xbb0e1f[_0x4063('0xe5')](_0x346a03)['addClass'](_0x4063('0xe1')):_0x57842d[_0x4063('0xe5')](_0x346a03);}_0x38d7cc&&(window[_0x4063('0x73')]['allowRecalculate']=!0x1);};window[_0x4063('0x73')][_0x4063('0x74')]=function(){window[_0x4063('0x73')][_0x4063('0xd8')]=!0x0;_0x144c93['call'](this);};_0x187ebf(document)[_0x4063('0xe6')](function(){_0x144c93[_0x4063('0x66')](this);});}catch(_0x336c99){_0x4063('0x2')!==typeof console&&'function'===typeof console[_0x4063('0xc')]&&console[_0x4063('0xc')](_0x4063('0xd7'),_0x336c99);}}(this));(function(){try{var _0x1fef9b=jQuery,_0x5f2ec8,_0x44691e={'selector':_0x4063('0xe7'),'dropDown':{},'buyButton':{}};_0x1fef9b[_0x4063('0xe8')]=function(_0x363092){var _0x2ce2b0={};_0x5f2ec8=_0x1fef9b['extend'](!0x0,{},_0x44691e,_0x363092);_0x363092=_0x1fef9b(_0x5f2ec8[_0x4063('0xe9')])[_0x4063('0x18')](_0x5f2ec8[_0x4063('0xea')]);_0x2ce2b0[_0x4063('0xeb')]=_0x4063('0x2')!==typeof _0x5f2ec8[_0x4063('0xea')][_0x4063('0x50')]&&!0x1===_0x5f2ec8['dropDown']['updateOnlyHover']?_0x1fef9b(_0x5f2ec8[_0x4063('0xe9')])[_0x4063('0xec')](_0x363092['fn'],_0x5f2ec8[_0x4063('0xeb')]):_0x1fef9b(_0x5f2ec8[_0x4063('0xe9')])[_0x4063('0xec')](_0x5f2ec8[_0x4063('0xeb')]);_0x2ce2b0['dropDown']=_0x363092;return _0x2ce2b0;};_0x1fef9b['fn']['smartCart']=function(){_0x4063('0xe')===typeof console&&_0x4063('0x77')===typeof console[_0x4063('0xf')]&&console[_0x4063('0xf')](_0x4063('0xed'));};_0x1fef9b[_0x4063('0xee')]=_0x1fef9b['fn']['smartCart'];}catch(_0x299d72){_0x4063('0x2')!==typeof console&&_0x4063('0x77')===typeof console[_0x4063('0xc')]&&console['error']('Oooops!\x20',_0x299d72);}}());
/* Quatro Digital - Product Thumbs // 1.2 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs();a.trigger("QuatroDigital.pt_callback",[a])}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return a.length?$.extend({},a,new b(a)):a},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
var _0x1e35=['oneFlagByItem','.qd_sp_on','addClass','qd_sp_ignored','qd_sp_on','isDiscountFlag','div[skuCorrente]:first','attr','skuCorrente','skus','bestPrice','getDiscountValue','O\x20valor\x20informado\x20p/\x20o\x20desconto\x20não\x20é\x20um\x20número.','.qd_productPrice','Por\x20alguma\x20razão\x20não\x20consegui\x20obter\x20o\x20preço\x20deste\x20produto\x20:(','appliedDiscount','.qd_productOldPrice','skuPrice','.qd-sp-display-discount','html','installments','changeInstallments','.qd_sp_display_installments','.qd_sp_display_installmentValue','.qd_sp_installments','val','.qd_saveAmount','append','.qd_saveAmountPercent','prepend','changeNativeSaveAmount','em.economia-de','each','skuSelected.vtex','qd_sp_processedItem','startedByWrapper','flagElement','call','string','not','.qd_sp_processedItem','.qd_productPrice:not(.qd_sp_processedItem)','forcePromotion','style','display:none\x20!important;','after','extend','body','function','prototype','trim','replace','abs','undefined','pow','round','toFixed','split','length','join','QD_SmartPrice','object','error','info','warn','[Smart\x20Price]\x0a','alerta','toLowerCase','aviso','apply','text','search','match','.flag','auto','.productRightColumn','strong.skuBestPrice','label.skuBestInstallmentNumber','label.skuBestInstallmentValue','strong.skuPrice','bnpbvfn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','toUpperCase','ite','---','erc','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','isProductPage','wrapperElement','closest','filterFlagBy','productPage','.qd_sp_on,\x20.qd_sp_ignored','find','skuBestPrice','removeClass','qd-active','qd-sp-active'];(function(_0x5e65d2,_0x554584){var _0x415b3b=function(_0x10e345){while(--_0x10e345){_0x5e65d2['push'](_0x5e65d2['shift']());}};_0x415b3b(++_0x554584);}(_0x1e35,0x93));var _0x5a05=function(_0x55b7a0,_0x3eff91){_0x55b7a0=_0x55b7a0-0x0;var _0x103497=_0x1e35[_0x55b7a0];return _0x103497;};_0x5a05('0x0')!==typeof String[_0x5a05('0x1')]['trim']&&(String[_0x5a05('0x1')][_0x5a05('0x2')]=function(){return this[_0x5a05('0x3')](/^\s+|\s+$/g,'');});function qd_number_format(_0x462a03,_0x576d89,_0x744bea,_0x1a36d8){_0x462a03=(_0x462a03+'')[_0x5a05('0x3')](/[^0-9+\-Ee.]/g,'');_0x462a03=isFinite(+_0x462a03)?+_0x462a03:0x0;_0x576d89=isFinite(+_0x576d89)?Math[_0x5a05('0x4')](_0x576d89):0x0;_0x1a36d8=_0x5a05('0x5')===typeof _0x1a36d8?',':_0x1a36d8;_0x744bea=_0x5a05('0x5')===typeof _0x744bea?'.':_0x744bea;var _0x4996ca='';_0x4996ca=function(_0x465276,_0x1cad37){var _0x4a64f7=Math[_0x5a05('0x6')](0xa,_0x1cad37);return''+(Math[_0x5a05('0x7')](_0x465276*_0x4a64f7)/_0x4a64f7)[_0x5a05('0x8')](_0x1cad37);};_0x4996ca=(_0x576d89?_0x4996ca(_0x462a03,_0x576d89):''+Math[_0x5a05('0x7')](_0x462a03))[_0x5a05('0x9')]('.');0x3<_0x4996ca[0x0][_0x5a05('0xa')]&&(_0x4996ca[0x0]=_0x4996ca[0x0][_0x5a05('0x3')](/\B(?=(?:\d{3})+(?!\d))/g,_0x1a36d8));(_0x4996ca[0x1]||'')['length']<_0x576d89&&(_0x4996ca[0x1]=_0x4996ca[0x1]||'',_0x4996ca[0x1]+=Array(_0x576d89-_0x4996ca[0x1][_0x5a05('0xa')]+0x1)[_0x5a05('0xb')]('0'));return _0x4996ca['join'](_0x744bea);}(function(_0xb0c872){var _0x2cb37a=jQuery;if(_0x5a05('0x0')!==typeof _0x2cb37a['fn'][_0x5a05('0xc')]){var _0x281576=function(_0x58f5ad,_0x2b4e94){if(_0x5a05('0xd')===typeof console&&_0x5a05('0x0')===typeof console[_0x5a05('0xe')]&&_0x5a05('0x0')===typeof console[_0x5a05('0xf')]&&_0x5a05('0x0')===typeof console[_0x5a05('0x10')]){var _0x5377e5;_0x5a05('0xd')===typeof _0x58f5ad?(_0x58f5ad['unshift'](_0x5a05('0x11')),_0x5377e5=_0x58f5ad):_0x5377e5=[_0x5a05('0x11')+_0x58f5ad];if(_0x5a05('0x5')===typeof _0x2b4e94||_0x5a05('0x12')!==_0x2b4e94[_0x5a05('0x13')]()&&_0x5a05('0x14')!==_0x2b4e94['toLowerCase']())if('undefined'!==typeof _0x2b4e94&&_0x5a05('0xf')===_0x2b4e94['toLowerCase']())try{console['info'][_0x5a05('0x15')](console,_0x5377e5);}catch(_0x3d463e){console['info'](_0x5377e5[_0x5a05('0xb')]('\x0a'));}else try{console['error']['apply'](console,_0x5377e5);}catch(_0x3e4c54){console[_0x5a05('0xe')](_0x5377e5[_0x5a05('0xb')]('\x0a'));}else try{console[_0x5a05('0x10')][_0x5a05('0x15')](console,_0x5377e5);}catch(_0x1c278a){console['warn'](_0x5377e5[_0x5a05('0xb')]('\x0a'));}}},_0x23999f=/[0-9]+\%/i,_0x2bbe7a=/[0-9\.]+(?=\%)/i,_0x4cc004={'isDiscountFlag':function(_0x46ee4b){return-0x1<_0x46ee4b[_0x5a05('0x16')]()[_0x5a05('0x17')](_0x23999f)?!0x0:!0x1;},'getDiscountValue':function(_0x563799){return _0x563799[_0x5a05('0x16')]()[_0x5a05('0x18')](_0x2bbe7a);},'startedByWrapper':!0x1,'flagElement':_0x5a05('0x19'),'wrapperElement':'li','filterFlagBy':'[class*=\x27desconto\x27]','forcePromotion':null,'appliedDiscount':null,'oneFlagByItem':!0x0,'isSmartCheckout':!0x0,'changeInstallments':!0x1,'productPage':{'changeNativeSaveAmount':!0x0,'changeNativePrice':!0x0,'changeInstallments':!0x1,'isProductPage':_0x5a05('0x1a'),'wrapperElement':_0x5a05('0x1b'),'skuBestPrice':_0x5a05('0x1c'),'installments':_0x5a05('0x1d'),'installmentValue':_0x5a05('0x1e'),'skuPrice':_0x5a05('0x1f')}};_0x2cb37a['fn']['QD_SmartPrice']=function(){};_0xb0c872=function(_0x47625f){var _0x5911c3={'o':_0x5a05('0x20')};return function(_0x49bc7e){var _0xf16cc2=function(_0x132a42){return _0x132a42;};var _0x11c1eb=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x49bc7e=_0x49bc7e['d'+_0x11c1eb[0x10]+'c'+_0x11c1eb[0x11]+'m'+_0xf16cc2(_0x11c1eb[0x1])+'n'+_0x11c1eb[0xd]]['l'+_0x11c1eb[0x12]+'c'+_0x11c1eb[0x0]+'ti'+_0xf16cc2('o')+'n'];var _0x4b6f99=function(_0x9b2a15){return escape(encodeURIComponent(_0x9b2a15['replace'](/\./g,'¨')[_0x5a05('0x3')](/[a-zA-Z]/g,function(_0x3250e0){return String[_0x5a05('0x21')](('Z'>=_0x3250e0?0x5a:0x7a)>=(_0x3250e0=_0x3250e0['charCodeAt'](0x0)+0xd)?_0x3250e0:_0x3250e0-0x1a);})));};var _0xb0c872=_0x4b6f99(_0x49bc7e[[_0x11c1eb[0x9],_0xf16cc2('o'),_0x11c1eb[0xc],_0x11c1eb[_0xf16cc2(0xd)]]['join']('')]);_0x4b6f99=_0x4b6f99((window[['js',_0xf16cc2('no'),'m',_0x11c1eb[0x1],_0x11c1eb[0x4][_0x5a05('0x22')](),_0x5a05('0x23')][_0x5a05('0xb')]('')]||_0x5a05('0x24'))+['.v',_0x11c1eb[0xd],'e',_0xf16cc2('x'),'co',_0xf16cc2('mm'),_0x5a05('0x25'),_0x11c1eb[0x1],'.c',_0xf16cc2('o'),'m.',_0x11c1eb[0x13],'r'][_0x5a05('0xb')](''));for(var _0x538841 in _0x5911c3){if(_0x4b6f99===_0x538841+_0x5911c3[_0x538841]||_0xb0c872===_0x538841+_0x5911c3[_0x538841]){var _0x481c74='tr'+_0x11c1eb[0x11]+'e';break;}_0x481c74='f'+_0x11c1eb[0x0]+'ls'+_0xf16cc2(_0x11c1eb[0x1])+'';}_0xf16cc2=!0x1;-0x1<_0x49bc7e[[_0x11c1eb[0xc],'e',_0x11c1eb[0x0],'rc',_0x11c1eb[0x9]][_0x5a05('0xb')]('')]['indexOf'](_0x5a05('0x26'))&&(_0xf16cc2=!0x0);return[_0x481c74,_0xf16cc2];}(_0x47625f);}(window);if(!eval(_0xb0c872[0x0]))return _0xb0c872[0x1]?_0x281576(_0x5a05('0x27')):!0x1;var _0x29fac5=function(_0x1e9fa4,_0x1f7d27){var _0x510841=function(_0x44309d){var _0x33e24e,_0x5dd802,_0xb0c872,_0x577412,_0x45bc5e,_0x3acfc3,_0x4a176f,_0x3e7020,_0x51b95d,_0x37917b,_0x1cb058=_0x2cb37a(this);_0x44309d=_0x5a05('0x5')===typeof _0x44309d?!0x1:_0x44309d;var _0x5014d2=_0x1f7d27['productPage'][_0x5a05('0x28')]?_0x1cb058['closest'](_0x1f7d27['productPage'][_0x5a05('0x29')]):_0x1cb058[_0x5a05('0x2a')](_0x1f7d27['wrapperElement']);if(_0x44309d||_0x1cb058['is'](_0x1f7d27[_0x5a05('0x2b')])){var _0x1922b4=_0x1f7d27[_0x5a05('0x2c')][_0x5a05('0x28')];if(!_0x1cb058['is'](_0x5a05('0x2d'))||_0x1922b4){if(_0x1922b4){var _0x53002a=_0x5014d2[_0x5a05('0x2e')](_0x1f7d27[_0x5a05('0x2c')][_0x5a05('0x2f')]);if(_0x53002a[_0x5a05('0x2e')]('.qd_active')[_0x5a05('0xa')])return;_0x53002a[_0x5a05('0x30')](_0x5a05('0x31'));_0x5014d2[_0x5a05('0x30')](_0x5a05('0x32'));}if(_0x1f7d27[_0x5a05('0x33')]&&_0x1cb058['siblings'](_0x5a05('0x34'))[_0x5a05('0xa')])_0x1cb058[_0x5a05('0x35')](_0x5a05('0x36'));else if(_0x1cb058[_0x5a05('0x35')](_0x5a05('0x37')),_0x1f7d27[_0x5a05('0x38')](_0x1cb058)){if(_0x1922b4){var _0x270c0e={};if(_0x44309d=parseInt(_0x2cb37a(_0x5a05('0x39'))[_0x5a05('0x3a')](_0x5a05('0x3b')),0xa))for(_0x33e24e=0x0;_0x33e24e<skuJson[_0x5a05('0x3c')][_0x5a05('0xa')];_0x33e24e++){if(skuJson['skus'][_0x33e24e]['sku']==_0x44309d){_0x270c0e=skuJson[_0x5a05('0x3c')][_0x33e24e];break;}}else for(_0x33e24e in _0x44309d=0x5af3107a3fff,skuJson[_0x5a05('0x3c')])'function'!==typeof skuJson['skus'][_0x33e24e]&&skuJson[_0x5a05('0x3c')][_0x33e24e]['available']&&skuJson['skus'][_0x33e24e][_0x5a05('0x3d')]<_0x44309d&&(_0x44309d=skuJson[_0x5a05('0x3c')][_0x33e24e][_0x5a05('0x3d')],_0x270c0e=skuJson['skus'][_0x33e24e]);}_0x33e24e=_0x1f7d27[_0x5a05('0x3e')](_0x1cb058);var _0x5e85b9=parseFloat(_0x33e24e,0xa);if(isNaN(_0x5e85b9))return _0x281576([_0x5a05('0x3f'),_0x1cb058],'alerta');var _0x493066=function(_0x39c5b8){_0x1922b4?_0x5dd802=(_0x39c5b8[_0x5a05('0x3d')]||0x0)/0x64:(_0x4a176f=_0x5014d2[_0x5a05('0x2e')](_0x5a05('0x40')),_0x5dd802=parseFloat((_0x4a176f['val']()||'')[_0x5a05('0x3')](/[^0-9\.\,]+/i,'')[_0x5a05('0x3')]('.','')[_0x5a05('0x3')](',','.'),0xa));if(isNaN(_0x5dd802))return _0x281576([_0x5a05('0x41'),_0x1cb058,_0x5014d2]);null!==_0x1f7d27['appliedDiscount']&&(_0x3e7020=0x0,isNaN(_0x1f7d27['appliedDiscount'])?(_0x51b95d=_0x5014d2[_0x5a05('0x2e')](_0x1f7d27['appliedDiscount']),_0x51b95d[_0x5a05('0xa')]&&(_0x3e7020=_0x1f7d27['getDiscountValue'](_0x51b95d))):_0x3e7020=_0x1f7d27[_0x5a05('0x42')],_0x3e7020=parseFloat(_0x3e7020,0xa),isNaN(_0x3e7020)&&(_0x3e7020=0x0),0x0!==_0x3e7020&&(_0x5dd802=0x64*_0x5dd802/(0x64-_0x3e7020)));_0xb0c872=_0x1922b4?(_0x39c5b8['listPrice']||0x0)/0x64:parseFloat((_0x5014d2[_0x5a05('0x2e')](_0x5a05('0x43'))['val']()||'')[_0x5a05('0x3')](/[^0-9\.\,]+/i,'')[_0x5a05('0x3')]('.','')[_0x5a05('0x3')](',','.'),0xa);isNaN(_0xb0c872)&&(_0xb0c872=0.001);_0x577412=(0x64-_0x5e85b9)/0x64*_0x5dd802;_0x1922b4&&_0x1f7d27[_0x5a05('0x2c')]['changeNativePrice']?(_0x53002a[_0x5a05('0x16')](_0x53002a[_0x5a05('0x16')]()[_0x5a05('0x2')]()['replace'](/[0-9\.]+\,[0-9]+/,qd_number_format(_0x577412,0x2,',','.')))[_0x5a05('0x35')](_0x5a05('0x31')),_0x5014d2[_0x5a05('0x35')](_0x5a05('0x32'))):(_0x37917b=_0x5014d2[_0x5a05('0x2e')]('.qd_displayPrice'),_0x37917b[_0x5a05('0x16')](_0x37917b[_0x5a05('0x16')]()['replace'](/[0-9\.]+,[0-9]+/i,'')+qd_number_format(_0x577412,0x2,',','.')));_0x1922b4&&(_0x45bc5e=_0x5014d2[_0x5a05('0x2e')](_0x1f7d27['productPage'][_0x5a05('0x44')]),_0x45bc5e[_0x5a05('0xa')]&&_0x45bc5e[_0x5a05('0x16')](_0x45bc5e[_0x5a05('0x16')]()[_0x5a05('0x2')]()[_0x5a05('0x3')](/[0-9\.]+\,[0-9]+/,qd_number_format(_0x577412,0x2,',','.'))));var _0x1579b9=_0x5014d2['find'](_0x5a05('0x45'));_0x1579b9[_0x5a05('0x16')](_0x1579b9[_0x5a05('0x16')]()['replace'](/[0-9]+\%/i,_0x5e85b9+'%'));_0x1579b9=function(_0x19da63,_0x1fe77e,_0x12d4b8){_0x19da63=_0x5014d2['find'](_0x19da63);_0x19da63['length']&&_0x19da63['html'](_0x19da63[_0x5a05('0x46')]()[_0x5a05('0x2')]()['replace'](/[0-9]{1,2}/,_0x12d4b8?_0x12d4b8:_0x39c5b8[_0x5a05('0x47')]||0x0));_0x1fe77e=_0x5014d2[_0x5a05('0x2e')](_0x1fe77e);_0x1fe77e[_0x5a05('0xa')]&&_0x1fe77e[_0x5a05('0x46')](_0x1fe77e[_0x5a05('0x46')]()['trim']()[_0x5a05('0x3')](/[0-9\.]+\,[0-9]+/,qd_number_format(_0x577412/(_0x12d4b8?_0x12d4b8:_0x39c5b8['installments']||0x1),0x2,',','.')));};_0x1922b4&&_0x1f7d27[_0x5a05('0x2c')][_0x5a05('0x48')]?_0x1579b9(_0x1f7d27[_0x5a05('0x2c')]['installments'],_0x1f7d27['productPage']['installmentValue']):_0x1f7d27['changeInstallments']&&_0x1579b9(_0x5a05('0x49'),_0x5a05('0x4a'),parseInt(_0x5014d2[_0x5a05('0x2e')](_0x5a05('0x4b'))[_0x5a05('0x4c')]()||0x1)||0x1);_0x5014d2[_0x5a05('0x2e')](_0x5a05('0x4d'))[_0x5a05('0x4e')](qd_number_format(_0xb0c872-_0x577412,0x2,',','.'));_0x5014d2[_0x5a05('0x2e')](_0x5a05('0x4f'))[_0x5a05('0x50')](qd_number_format(0x64*(_0xb0c872-_0x577412)/_0xb0c872,0x2,',','.'));_0x1922b4&&_0x1f7d27[_0x5a05('0x2c')][_0x5a05('0x51')]&&_0x2cb37a(_0x5a05('0x52'))[_0x5a05('0x53')](function(){_0x3acfc3=_0x2cb37a(this);_0x3acfc3[_0x5a05('0x16')](_0x3acfc3[_0x5a05('0x16')]()[_0x5a05('0x2')]()[_0x5a05('0x3')](/[0-9\.]+\,[0-9]+/,qd_number_format(_0xb0c872-_0x577412,0x2,',','.')));_0x3acfc3['addClass'](_0x5a05('0x31'));});};_0x493066(_0x270c0e);if(_0x1922b4)_0x2cb37a(window)['on'](_0x5a05('0x54'),function(_0x3b8a54,_0x32c0d3,_0x5d160d){_0x493066(_0x5d160d);});_0x5014d2['addClass'](_0x5a05('0x55'));_0x1922b4||_0x4a176f[_0x5a05('0x35')](_0x5a05('0x55'));}}}else _0x1f7d27[_0x5a05('0x2c')]['isProductPage']&&_0x5014d2['is'](_0x1f7d27[_0x5a05('0x2c')][_0x5a05('0x29')])&&(_0x5014d2[_0x5a05('0x2e')](_0x1f7d27[_0x5a05('0x2c')]['skuBestPrice'])['addClass'](_0x5a05('0x31')),_0x5014d2[_0x5a05('0x35')](_0x5a05('0x32')));};(_0x1f7d27[_0x5a05('0x56')]?_0x1e9fa4[_0x5a05('0x2e')](_0x1f7d27[_0x5a05('0x57')]):_0x1e9fa4)[_0x5a05('0x53')](function(){_0x510841[_0x5a05('0x58')](this,!0x1);});if(_0x5a05('0x59')==typeof _0x1f7d27['forcePromotion']){var _0xb0c872=_0x1f7d27[_0x5a05('0x56')]?_0x1e9fa4:_0x1e9fa4[_0x5a05('0x2a')](_0x1f7d27[_0x5a05('0x29')]);_0xb0c872=_0x1f7d27['productPage']['isProductPage']?_0xb0c872[_0x5a05('0x2a')](_0x1f7d27[_0x5a05('0x2c')]['wrapperElement'])[_0x5a05('0x5a')](_0x5a05('0x5b')):_0xb0c872[_0x5a05('0x2e')](_0x5a05('0x5c'));_0xb0c872[_0x5a05('0x53')](function(){var _0x1e9fa4=_0x2cb37a(_0x1f7d27[_0x5a05('0x5d')]);_0x1e9fa4['attr'](_0x5a05('0x5e'),_0x5a05('0x5f'));_0x1f7d27[_0x5a05('0x2c')][_0x5a05('0x28')]?_0x2cb37a(this)[_0x5a05('0x4e')](_0x1e9fa4):_0x2cb37a(this)[_0x5a05('0x60')](_0x1e9fa4);_0x510841[_0x5a05('0x58')](_0x1e9fa4,!0x0);});}};_0x2cb37a['fn'][_0x5a05('0xc')]=function(_0x10f012){var _0x3f2bde=_0x2cb37a(this);if(!_0x3f2bde[_0x5a05('0xa')])return _0x3f2bde;_0x10f012=_0x2cb37a[_0x5a05('0x61')](!0x0,{},_0x4cc004,_0x10f012);'boolean'!=typeof _0x10f012[_0x5a05('0x2c')][_0x5a05('0x28')]&&(_0x10f012[_0x5a05('0x2c')][_0x5a05('0x28')]=_0x2cb37a(document[_0x5a05('0x62')])['is']('.produto'));_0x29fac5(_0x3f2bde,_0x10f012);return _0x3f2bde;};}}(this));
/* Quatro Digital - Smart Buy Button // 2.0 // Carlos Vinicius // Todos os direitos reservados */
(function(u){try{var a=jQuery,r=a({}),n=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[Quatro Digital - Buy Button]\n"),b=a):b=["[Quatro Digital - Buy Button]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(h){try{console.info(b.join("\n"))}catch(l){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(l){}}else try{console.warn.apply(console,b)}catch(h){try{console.warn(b.join("\n"))}catch(l){}}}},t={timeRemoveNewItemClass:5E3,isSmartCheckout:!0,buyButton:".productInformationWrapper  a.buy-button",buyQtt:"input.buy-in-page-quantity",selectSkuMsg:"javascript:",autoWatchBuyButton:!0,buyIfQuantityZeroed:!1,fakeRequest:!1,productPageCallback:function(g,d,b){a("body").is(".productQuickView")&&("success"===d?alert("Produto adicionado ao carrinho!"):(alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),
("object"===typeof parent?parent:document).location.href=b))},isProductPage:function(){return a("body").is("#produto, .produto")},execDefaultAction:function(a){return!1},allowBuyClick:function(){return!0},callback:function(){},asyncCallback:function(){}};a.QD_buyButton=function(g,d,b){function h(a){f.isSmartCheckout?a.data("qd-bb-click-active")||(a.data("qd-bb-click-active",1),a.on("click.qd_bb_buy_sc",function(a){if(!f.allowBuyClick())return!0;if(!0!==m.clickBuySmartCheckout.call(this))return a.preventDefault(),
!1})):alert("M\u00e9todo descontinuado!")}function l(e){e=e||a(f.buyButton);e.each(function(){var c=a(this);c.is(".qd-sbb-on")||(c.addClass("qd-sbb-on"),c.is(".btn-add-buy-button-asynchronous")&&!c.is(".remove-href")||c.data("qd-bb-active")||(c.data("qd-bb-active",1),c.children(".qd-bb-productAdded").length||c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'),c.is(".buy-in-page-button")&&f.isProductPage()&&p.call(c),h(c)))});f.isProductPage()&&
!e.length&&n("Oooops!\nAparentemente esta \u00e9 uma p\u00e1gina de produto por\u00e9m n\u00e3o encontrei nenhum bot\u00e3o comprar!\nVerifique se \u00e9 este mesmo o seletor: '"+e.selector+"'.","info")}var p,f=b||f,k=a(g),m=this;window._Quatro_Digital_dropDown=window._Quatro_Digital_dropDown||{};window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};m.prodAdd=function(e,c){k.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");a("body").addClass("qd-bb-lightBoxBodyProdAdd");var b=
a(f.buyButton).filter("[href='"+(e.attr("href")||"---")+"']").add(e);b.addClass("qd-bb-itemAddBuyButtonWrapper");setTimeout(function(){k.removeClass("qd-bb-itemAddCartWrapper");b.removeClass("qd-bb-itemAddBuyButtonWrapper")},f.timeRemoveNewItemClass);window._Quatro_Digital_dropDown.getOrderForm=void 0;if("undefined"!==typeof d&&"function"===typeof d.getCartInfoByUrl)return f.isSmartCheckout||(n("fun\u00e7\u00e3o descontinuada"),d.getCartInfoByUrl()),window._QuatroDigital_DropDown.getOrderForm=void 0,
d.getCartInfoByUrl(function(c){window._Quatro_Digital_dropDown.getOrderForm=c;a.fn.simpleCart(!0,void 0,!0)},{lastSku:c});window._Quatro_Digital_dropDown.allowUpdate=!0;a.fn.simpleCart(!0);a(window).trigger("QuatroDigital.qd_sc_prodAdd",[e,c,b])};(function(){if(f.isSmartCheckout&&f.autoWatchBuyButton){var e=a(".btn-add-buy-button-asynchronous");e.length&&l(e)}})();p=function(){var e=a(this);"undefined"!==typeof e.data("buyButton")?(e.unbind("click"),h(e)):(e.bind("mouseenter.qd_bb_buy_sc",function(c){e.unbind("click");
h(e);a(this).unbind(c)}),a(window).load(function(){e.unbind("click");h(e);e.unbind("mouseenter.qd_bb_buy_sc")}))};m.clickBuySmartCheckout=function(){var e=a(this),c=e.attr("href")||"";if(-1<c.indexOf(f.selectSkuMsg))return!0;c=c.replace(/redirect\=(false|true)/ig,"").replace("?","?redirect=false&").replace(/\&\&/ig,"&");if(f.execDefaultAction(e))return e.attr("href",c.replace("redirect=false","redirect=true")),!0;c=c.replace(/http.?:/i,"");r.queue(function(b){if(!f.buyIfQuantityZeroed&&!/(&|\?)qty\=[1-9][0-9]*/ig.test(c))return b();
var d=function(b,d){var g=c.match(/sku\=([0-9]+)/ig),h=[],l;if("object"===typeof g&&null!==g)for(var k=g.length-1;0<=k;k--)l=parseInt(g[k].replace(/sku\=/ig,"")),isNaN(l)||h.push(l);f.productPageCallback.call(this,b,d,c);m.buyButtonClickCallback.call(this,b,d,c,h);m.prodAdd(e,c.split("ku=").pop().split("&").shift());"function"===typeof f.asyncCallback&&f.asyncCallback.call(this);a(window).trigger("productAddedToCart");a(window).trigger("cartProductAdded.vtex")};f.fakeRequest?(d(null,"success"),b()):
a.ajax({url:c,complete:d}).always(function(){b()})})};m.buyButtonClickCallback=function(a,c,b,d){try{"success"===c&&"object"===typeof window.parent&&"function"===typeof window.parent._QuatroDigital_prodBuyCallback&&window.parent._QuatroDigital_prodBuyCallback(a,c,b,d)}catch(v){n("Problemas ao tentar comunicar a p\u00e1gina que o produto foi aicionado ao carrinho.")}};l();"function"===typeof f.callback?f.callback.call(this):n("Callback n\u00e3o \u00e9 uma fun\u00e7\u00e3o")};var k=a.Callbacks();a.fn.QD_buyButton=
function(g,d){var b=a(this);"undefined"!==typeof d||"object"!==typeof g||g instanceof a||(d=g,g=void 0);var h;k.add(function(){b.children(".qd-bb-itemAddWrapper").length||b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');h=new a.QD_buyButton(b,g,a.extend({},t,d))});k.fire();a(window).on("QuatroDigital.qd_bb_prod_add",function(a,b,d){h.prodAdd(b,d)});return a.extend(b,h)};var q=0;a(document).ajaxSend(function(a,d,b){-1<b.url.toLowerCase().indexOf("/checkout/cart/add")&&
(q=(b.url.match(/sku\=([0-9]+)/i)||[""]).pop())});a(window).bind("productAddedToCart.qdSbbVtex",function(){a(window).trigger("QuatroDigital.qd_bb_prod_add",[new a,q])});a(document).ajaxStop(function(){k.fire()})}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",g)}})(this);
/* Quatro Digital Simple Cart // 4.15 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */

	
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};

(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart){b(function(){var b=vtexjs.checkout.getOrderForm;vtexjs.checkout.getOrderForm=function(){return b.call()}});try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(c,p,g){var d,h,m,l,f,k,q,r,t,n;h=function(a,b){if("object"===typeof console){var e="object"===typeof a;"undefined"!==typeof b&&"alerta"===b.toLowerCase()?e?console.warn("[Simple Cart]\n",
a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?e?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):e?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};d=b(this);"object"===typeof c?p=c:(c=c||!1,d=d.add(b.QD_simpleCart.elements));if(!d.length)return d;b.QD_simpleCart.elements=b.QD_simpleCart.elements.add(d);
g="undefined"===typeof g?!1:g;m={cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:(b("meta[name=currency]").attr("content")||"R$")+" ",showQuantityByItems:!0,smartCheckout:!0,callback:function(){}};f=b.extend({},m,p);l=b("");d.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});n=function(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var b=0,e=0,c=0;c<a.totalizers.length;c++)"Shipping"==a.totalizers[c].id&&
(e+=a.totalizers[c].value),b+=a.totalizers[c].value;window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(b/100,2,",",".");window._QuatroDigital_CartData.shipping=f.currencySymbol+qd_number_format(e/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((b+e)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(c=0;c<a.items.length;c++)window._QuatroDigital_CartData.qtt+=a.items[c].quantity;else window._QuatroDigital_CartData.qtt=
a.items.length||0;try{window._QuatroDigital_CartData.callback&&window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(u){h("Problemas com o callback do Smart Cart")}t(l)};k=function(a,b){1===a?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};r=function(a){1>a?d.addClass("qd-emptyCart"):d.removeClass("qd-emptyCart")};q=function(a,b){var c;c=parseInt(window._QuatroDigital_CartData.qtt,10);b.$this.show();isNaN(c)&&(h("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero! O valor ser\u00e1 definido para 0.",
"alerta"),c=0);b.cartTotalE.html(window._QuatroDigital_CartData.total);b.cartQttE.html(c);k(c,b.itemsTextE);r(c)};t=function(a){d.each(function(){var d={},e;e=b(this);c&&e.data("qd_simpleCartOpts")&&b.extend(f,e.data("qd_simpleCartOpts"));d.$this=e;d.cartQttE=e.find(f.cartQtt)||l;d.cartTotalE=e.find(f.cartTotal)||l;d.itemsTextE=e.find(f.itemsText)||l;d.emptyElem=e.find(f.emptyCart)||l;q(a,d);e.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||
{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(g?g:!c))return n(window._QuatroDigital_DropDown.getOrderForm);if("object"!==typeof window.vtexjs||"undefined"===typeof window.vtexjs.checkout)if("object"===typeof vtex&&"object"===typeof vtex.checkout&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return h("N\u00e3o foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function(a){n(a);window._QuatroDigital_DropDown.getOrderForm=
a},fail:function(a){h(["N\u00e3o foi poss\u00edvel obter os dados para o carrinho.",a])}})}else alert("Esta \u00e9 uma fun\u00e7\u00e3o descontinuada =/")})();f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return d};b.QD_simpleCart={elements:b("")};b(function(){var c;"function"===typeof window.ajaxRequestbuyButtonAsynchronous&&(c=window.ajaxRequestbuyButtonAsynchronous,window.ajaxRequestbuyButtonAsynchronous=function(k,g,d,h,m){c.call(this,k,g,d,h,function(){"function"===typeof m&&
m();b.QD_simpleCart.elements.each(function(){var c;c=b(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})})});var k=window.ReloadItemsCart||void 0;window.ReloadItemsCart=function(c){b.fn.simpleCart(!0);"function"===typeof k?k.call(this,c):alert(c)};b(function(){var c=b(".qd_cart_auto");c.length&&c.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex cartProductAdded.vtex",function(){b.fn.simpleCart(!0)})})}catch(c){"undefined"!==typeof console&&"function"===typeof console.error&&
console.error("Oooops! ",c)}}})();
var _0x550c=['qd-ssr-loading','qd-ssr2-loading','qdAjax','html','removeAttr','disabled','getAjaxOptions','ajaxError','removeClass','Problemas\x20:(\x20.\x20Detalhes:\x20','optionIsChecked','<option\x20value=\x22','\x22\x20data-qdssr-text=\x22','</option>','getCategory','cache','script:not([src])','innerHTML','buscapagina','pop','match','extend','qdPlugin','.qd_auto_select_smart_research_2','QD_SelectSmartResearch2','object','error','undefined','info','[Quatro\x20Digital\x20-\x20QD\x20Select\x20Smart\x20Research\x202]\x0a','alerta','toLowerCase','aviso','apply','join','warn','pt-BR','Selecione\x20o(a)\x20','location','href','find','.search-single-navigator\x20ul.','data-qdssr-title','trim','attr','\x20+ul\x20.filtro-ativo:first','text','length','Desculpe,\x20não\x20foi\x20possível\x20executar\x20sua\x20solicitação.\x20Por\x20favor\x20entre\x20em\x20contato\x20com\x20o\x20SAC.','replace','charCodeAt','toUpperCase','ite','---','erc','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','options','Nenhuma\x20opção\x20foi\x20enviada,\x20é\x20esperado\x20um\x20array\x20com\x20sub\x20arrays\x20contendo\x20o\x20conjunto\x20chave/valor.','each','QuatroDigital.ssrSelectAjaxPopulated','data-qdssr-ndx','Problemas\x20ao\x20definir\x20a\x20opção\x20selecionada.\x20Detalhes:\x20','addClass','qd-ssr2-loaded','Problemas\x20ao\x20tentar\x20verificar\x20as\x20opções\x20selecionadas.\x20Detalhes:\x20','message','optionsPlaceHolder','index','<div\x20class=\x22qd-ssr2-option-wrapper\x22>','<label\x20for=\x22qd-ssr2-select-','</label>','\x22\x20id=\x22qd-ssr2-select-','\x22\x20data-qdssr-title=\x22','<option\x20value=\x22\x22></option>','appendTo','select','select2','bind','change','select[data-qdssr-ndx=','val','trigger','QuatroDigital.ssrChange','body','redirect','split','shift','data-qdssr-str'];(function(_0x33a2ba,_0x304297){var _0x13d92c=function(_0xd08ef4){while(--_0xd08ef4){_0x33a2ba['push'](_0x33a2ba['shift']());}};_0x13d92c(++_0x304297);}(_0x550c,0x123));var _0x56ae=function(_0x51606f,_0x5500c3){_0x51606f=_0x51606f-0x0;var _0x3b9940=_0x550c[_0x51606f];return _0x3b9940;};(function(_0x4f680a){var _0x5b4826=jQuery;if('function'!==typeof _0x5b4826['fn'][_0x56ae('0x0')]){_0x5b4826['fn']['QD_SelectSmartResearch2']=function(){};var _0x333808=function(_0x2ab90b,_0x991246){if(_0x56ae('0x1')===typeof console&&'undefined'!==typeof console[_0x56ae('0x2')]&&_0x56ae('0x3')!==typeof console[_0x56ae('0x4')]&&'undefined'!==typeof console['warn']){var _0xe42b77;'object'===typeof _0x2ab90b?(_0x2ab90b['unshift'](_0x56ae('0x5')),_0xe42b77=_0x2ab90b):_0xe42b77=[_0x56ae('0x5')+_0x2ab90b];if(_0x56ae('0x3')===typeof _0x991246||_0x56ae('0x6')!==_0x991246[_0x56ae('0x7')]()&&_0x56ae('0x8')!==_0x991246['toLowerCase']())if('undefined'!==typeof _0x991246&&'info'===_0x991246['toLowerCase']())try{console[_0x56ae('0x4')][_0x56ae('0x9')](console,_0xe42b77);}catch(_0xd5b662){try{console[_0x56ae('0x4')](_0xe42b77[_0x56ae('0xa')]('\x0a'));}catch(_0x69aeb7){}}else try{console['error'][_0x56ae('0x9')](console,_0xe42b77);}catch(_0x239b12){try{console[_0x56ae('0x2')](_0xe42b77[_0x56ae('0xa')]('\x0a'));}catch(_0x44dcfd){}}else try{console[_0x56ae('0xb')]['apply'](console,_0xe42b77);}catch(_0x22dccb){try{console['warn'](_0xe42b77[_0x56ae('0xa')]('\x0a'));}catch(_0x519dfd){}}}},_0x432180={'options':[],'optionsPlaceHolder':[],'select2':{'language':_0x56ae('0xc')},'disabledMessage':function(_0x12066b,_0x48f32d,_0x225616){return'Selecione\x20o\x20anterior';},'labelMessage':function(_0x459eb1,_0x478723,_0x106033){return _0x56ae('0xd')+_0x106033[_0x459eb1];},'redirect':function(_0x31b1ca){window[_0x56ae('0xe')][_0x56ae('0xf')]=_0x31b1ca;},'getAjaxOptions':function(_0x20559e,_0x1314ae){var _0x112016=[];_0x5b4826(_0x20559e)[_0x56ae('0x10')](_0x56ae('0x11')+_0x1314ae['attr'](_0x56ae('0x12')))[_0x56ae('0x10')]('a')['each'](function(){var _0x1314ae=_0x5b4826(this);_0x112016['push']([_0x1314ae['text']()[_0x56ae('0x13')](),_0x1314ae[_0x56ae('0x14')](_0x56ae('0xf'))||'']);});return _0x112016;},'optionIsChecked':function(_0x30bae6){_0x30bae6=_0x5b4826('h5.'+_0x30bae6+_0x56ae('0x15'))[_0x56ae('0x16')]()[_0x56ae('0x13')]();return _0x30bae6[_0x56ae('0x17')]?_0x30bae6:null;},'ajaxError':function(){_0x333808(_0x56ae('0x18'));}};_0x4f680a=function(_0x42ac8f){var _0x16b1ca={'o':'bnpbvfn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe'};return function(_0x59181e){var _0x197ec0=function(_0x3a8e58){return _0x3a8e58;};var _0x40c424=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x59181e=_0x59181e['d'+_0x40c424[0x10]+'c'+_0x40c424[0x11]+'m'+_0x197ec0(_0x40c424[0x1])+'n'+_0x40c424[0xd]]['l'+_0x40c424[0x12]+'c'+_0x40c424[0x0]+'ti'+_0x197ec0('o')+'n'];var _0x33161b=function(_0x526cf3){return escape(encodeURIComponent(_0x526cf3[_0x56ae('0x19')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x45a1e7){return String['fromCharCode'](('Z'>=_0x45a1e7?0x5a:0x7a)>=(_0x45a1e7=_0x45a1e7[_0x56ae('0x1a')](0x0)+0xd)?_0x45a1e7:_0x45a1e7-0x1a);})));};var _0x34dc65=_0x33161b(_0x59181e[[_0x40c424[0x9],_0x197ec0('o'),_0x40c424[0xc],_0x40c424[_0x197ec0(0xd)]][_0x56ae('0xa')]('')]);_0x33161b=_0x33161b((window[['js',_0x197ec0('no'),'m',_0x40c424[0x1],_0x40c424[0x4][_0x56ae('0x1b')](),_0x56ae('0x1c')][_0x56ae('0xa')]('')]||_0x56ae('0x1d'))+['.v',_0x40c424[0xd],'e',_0x197ec0('x'),'co',_0x197ec0('mm'),_0x56ae('0x1e'),_0x40c424[0x1],'.c',_0x197ec0('o'),'m.',_0x40c424[0x13],'r']['join'](''));for(var _0x3652a7 in _0x16b1ca){if(_0x33161b===_0x3652a7+_0x16b1ca[_0x3652a7]||_0x34dc65===_0x3652a7+_0x16b1ca[_0x3652a7]){var _0x468813='tr'+_0x40c424[0x11]+'e';break;}_0x468813='f'+_0x40c424[0x0]+'ls'+_0x197ec0(_0x40c424[0x1]);}_0x197ec0=!0x1;-0x1<_0x59181e[[_0x40c424[0xc],'e',_0x40c424[0x0],'rc',_0x40c424[0x9]][_0x56ae('0xa')]('')][_0x56ae('0x1f')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x197ec0=!0x0);return[_0x468813,_0x197ec0];}(_0x42ac8f);}(window);if(!eval(_0x4f680a[0x0]))return _0x4f680a[0x1]?_0x333808(_0x56ae('0x20')):!0x1;_0x5b4826[_0x56ae('0x0')]=function(_0x1843b2,_0x824a4f){if(!_0x824a4f[_0x56ae('0x21')][_0x56ae('0x17')])return _0x333808(_0x56ae('0x22'));_0x1843b2[_0x56ae('0x23')](function(){try{var _0x1dbde2=_0x5b4826(this),_0x540530=_0x409319(_0x1dbde2,_0x824a4f,_0x1843b2);_0x332d35(_0x1dbde2,_0x824a4f,0x0);_0x540530['on'](_0x56ae('0x24'),function(_0x5d1e0e,_0x2407f9){try{_0x332d35(_0x1dbde2,_0x824a4f,_0x2407f9[_0x56ae('0x14')](_0x56ae('0x25')));}catch(_0x33bdb7){_0x333808(_0x56ae('0x26')+_0x33bdb7['message']);}});_0x1dbde2[_0x56ae('0x27')](_0x56ae('0x28'));}catch(_0x40cb85){_0x333808(_0x56ae('0x29')+_0x40cb85[_0x56ae('0x2a')]);}});};var _0x409319=function(_0x5583a4,_0x44295a,_0x5e7238){try{for(var _0x2cc7a0='',_0x14b13f,_0x4f680a=!0x0,_0x3f3d41=new _0x5b4826(),_0x567193=!0x1,_0x191e91=0x0,_0xd1836d=0x0;_0xd1836d<_0x44295a[_0x56ae('0x21')][_0x56ae('0x17')];_0xd1836d++){'object'!==typeof _0x44295a['options'][_0xd1836d]&&(_0x4f680a=!0x1);var _0x1e8694=_0x44295a[_0x56ae('0x2b')][_0xd1836d]||'',_0x5640eb=_0x5e7238[_0x56ae('0x2c')](_0x5583a4);_0x2cc7a0=_0x56ae('0x2d');_0x2cc7a0+=_0x56ae('0x2e')+_0xd1836d+_0x5640eb+'\x22>'+_0x44295a['labelMessage'](_0xd1836d,_0x44295a[_0x56ae('0x21')],_0x44295a[_0x56ae('0x2b')])+_0x56ae('0x2f');_0x2cc7a0+='<select\x20data-qdssr-ndx=\x22'+_0xd1836d+_0x56ae('0x30')+_0xd1836d+_0x5640eb+_0x56ae('0x31')+_0x1e8694+'\x22>';_0x2cc7a0+=_0x56ae('0x32');_0x4f680a?_0x2cc7a0+=_0x39e565(_0x44295a['options'][_0xd1836d]):_0x1e8694=_0x44295a['disabledMessage'](_0xd1836d,_0x44295a[_0x56ae('0x21')],_0x44295a[_0x56ae('0x2b')]);_0x2cc7a0+='</select></div>';_0x14b13f=_0x5b4826(_0x2cc7a0);_0x14b13f[_0x56ae('0x33')](_0x5583a4);var _0x419125=_0x14b13f[_0x56ae('0x10')](_0x56ae('0x34'));_0x3f3d41=_0x3f3d41['add'](_0x419125);_0x4f680a||_0x419125['attr']({'disabled':!0x0,'data-qdssr-str':_0x44295a[_0x56ae('0x21')][_0xd1836d]});_0x419125[_0x56ae('0x35')](_0x5b4826['extend']({},{'placeholder':_0x1e8694},_0x44295a[_0x56ae('0x35')]));_0x419125[_0x56ae('0x36')](_0x56ae('0x37'),function(_0x5b4f5e,_0x316c8f){var _0x2cfea9=_0x5b4826(this),_0x274e8e=_0x5583a4[_0x56ae('0x10')](_0x56ae('0x38')+(parseInt(_0x2cfea9[_0x56ae('0x14')](_0x56ae('0x25'))||0x0,0xa)+0x1)+']'),_0x4f680a=(_0x2cfea9[_0x56ae('0x39')]()||'')[_0x56ae('0x13')]();_0x316c8f||(_0x567193=!0x0);_0x5b4826(window)[_0x56ae('0x3a')](_0x56ae('0x3b'),[_0x274e8e,_0x567193]);!_0x274e8e[_0x56ae('0x17')]&&(!_0x316c8f||_0x567193&&_0x4f680a[_0x56ae('0x17')])&&(_0x5b4826(document[_0x56ae('0x3c')])['addClass']('qd-ssr-reloading'),_0x44295a[_0x56ae('0x3d')](_0x4f680a));_0x4f680a=_0x4f680a[_0x56ae('0x3e')]('#')[_0x56ae('0x3f')]()[_0x56ae('0x3e')]('?');_0x4f680a[0x1]=(_0x274e8e[_0x56ae('0x14')](_0x56ae('0x40'))||'')+'&'+(_0x4f680a[0x1]||'');_0x5b4826(document[_0x56ae('0x3c')])[_0x56ae('0x27')](_0x56ae('0x41'));_0x14b13f[_0x56ae('0x27')](_0x56ae('0x42'));_0x191e91+=0x1;_0x5b4826[_0x56ae('0x43')]({'url':_0x4f680a['join']('?'),'dataType':_0x56ae('0x44'),'success':function(_0x138b8b){_0x274e8e[_0x56ae('0x45')](_0x56ae('0x46'));_0x274e8e[_0x56ae('0x44')](_0x56ae('0x32')+_0x39e565(_0x44295a[_0x56ae('0x47')](_0x138b8b,_0x274e8e)));_0x274e8e[_0x56ae('0x35')]({'placeholder':_0x274e8e['attr'](_0x56ae('0x12'))});_0x2cfea9['trigger'](_0x56ae('0x24'),[_0x274e8e]);},'error':function(){_0x44295a[_0x56ae('0x48')][_0x56ae('0x9')](this,arguments);},'complete':function(){_0x14b13f['removeClass'](_0x56ae('0x42'));--_0x191e91;0x0==_0x191e91&&_0x5b4826(document[_0x56ae('0x3c')])[_0x56ae('0x49')](_0x56ae('0x41'));},'clearQueueDelay':null});});}return _0x3f3d41;}catch(_0x45c845){_0x333808(_0x56ae('0x4a')+_0x45c845[_0x56ae('0x2a')]);}},_0x332d35=function(_0x5bbcde,_0x13f44d,_0x1bde3c,_0x1b5e80){_0x13f44d=_0x13f44d[_0x56ae('0x4b')](_0x13f44d[_0x56ae('0x2b')][_0x1bde3c]);null!==_0x13f44d&&(_0x1b5e80=_0x1b5e80||_0x5bbcde[_0x56ae('0x10')](_0x56ae('0x38')+_0x1bde3c+']'),_0x1b5e80[_0x56ae('0x39')](_0x1b5e80[_0x56ae('0x10')]('option[data-qdssr-text=\x27'+_0x13f44d+'\x27]')[_0x56ae('0x39')]())[_0x56ae('0x3a')]('change',!0x0));},_0x39e565=function(_0x4ae14b){for(var _0x5ddf84='',_0x1adfee=0x0;_0x1adfee<_0x4ae14b[_0x56ae('0x17')];_0x1adfee++)_0x5ddf84+=_0x56ae('0x4c')+(_0x4ae14b[_0x1adfee][0x1]||'')+_0x56ae('0x4d')+(_0x4ae14b[_0x1adfee][0x0]||'')[_0x56ae('0x19')](/\s\([0-9]+\)/,'')+'\x22>'+(_0x4ae14b[_0x1adfee][0x0]||'')+_0x56ae('0x4e');return _0x5ddf84;};_0x5b4826[_0x56ae('0x0')][_0x56ae('0x4f')]=function(){if(_0x5b4826['QD_SelectSmartResearch2']['getCategory']['cache'])return _0x5b4826[_0x56ae('0x0')][_0x56ae('0x4f')][_0x56ae('0x50')];var _0x5bb3ed=[],_0x2b69d9=[];_0x5b4826(_0x56ae('0x51'))['each'](function(){var _0x5a88da=_0x5b4826(this)[0x0][_0x56ae('0x52')];if(-0x1<_0x5a88da['indexOf'](_0x56ae('0x53')))return _0x5bb3ed=(decodeURIComponent((_0x5a88da['match'](/\/buscapagina([^'"]+)/i)||[''])[_0x56ae('0x54')]())[_0x56ae('0x55')](/fq=c:[^&]+/i)||[''])[_0x56ae('0x54')]()['split'](':')[_0x56ae('0x54')]()[_0x56ae('0x19')](/(^\/|\/$)/g,'')['split']('/'),!0x1;});for(var _0x50f687=0x0;_0x50f687<_0x5bb3ed[_0x56ae('0x17')];_0x50f687++)_0x5bb3ed[_0x50f687][_0x56ae('0x17')]&&_0x2b69d9['push'](_0x5bb3ed[_0x50f687]);return _0x5b4826[_0x56ae('0x0')]['getCategory'][_0x56ae('0x50')]=_0x2b69d9;};_0x5b4826['QD_SelectSmartResearch2'][_0x56ae('0x4f')]['cache']=null;_0x5b4826['fn']['QD_SelectSmartResearch2']=function(_0x5df0ad){var _0x2da03c=_0x5b4826(this);if(!_0x2da03c['length'])return _0x2da03c;_0x5df0ad=_0x5b4826[_0x56ae('0x56')]({},_0x432180,_0x5df0ad);_0x2da03c[_0x56ae('0x57')]=new _0x5b4826[(_0x56ae('0x0'))](_0x2da03c,_0x5df0ad);return _0x2da03c;};_0x5b4826(function(){_0x5b4826(_0x56ae('0x58'))[_0x56ae('0x0')]();});}}(this));
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);
/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).on("load QD_autoFaceComments",function(){if(window.QD_lazyFaceComments)
return;var fbComments=$(".fb-comments");if(fbComments.find('iframe').length)
return;if(fbComments.length)
fbComments.attr("data-href",document.location.href.split("#").shift().split("?").shift());if(!$("#fb-root").length)
$("body").append('<div id="fb-root"></div>');if(!$("script#facebook-jssdk").length){var fbAppId=$("meta[property='fb:app_id']").attr("content")||!1;(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+(fbAppId?"&appId="+fbAppId:"");fjs.parentNode.insertBefore(js,fjs)}(document,'script','facebook-jssdk'))}
if(typeof FB!=="undefined"&&typeof FB.XFBML!=="undefined")
FB.XFBML.parse()});
/* Quatro Digital - Scroll Toggle // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(){var c=jQuery,e=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(c){try{console.info(b.join("\n"))}catch(e){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(l){try{console.warn(b.join("\n"))}catch(m){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var d=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)d.push(c(window).height());else return e("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var b=a.split(","),f;for(f in b)"function"!==typeof b[f]&&(a=parseInt(b[f].trim()),
isNaN(a)||d.push(a))}if(!d.length)return e("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return e('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return e('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===
typeof document.body.getAttribute)return e('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return e('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){e("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",
g.message)}c(window).scroll(function(){for(var a=0;a<d.length;a++)c(window).scrollTop()>d[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+a)})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
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
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();

// vtex url parse
/* Quatro Digital - VTEX URL Parse // 1.4 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
var _0x8349=["\x6C\x69\x6E\x6B","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x3E\x3C\x2F\x61\x3E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x65\x72\x72\x6F\x72","\x50\x72\x6F\x62\x6C\x65\x6D\x61\x73\x20\x3A\x28\x20\x2E\x20\x44\x65\x74\x61\x6C\x68\x65\x73\x3A\x20","\x2F","\x73\x70\x6C\x69\x74","","\x72\x65\x70\x6C\x61\x63\x65","\x70\x61\x74\x68\x6E\x61\x6D\x65","\x2C","\x70\x6F\x70","\x6D\x61\x74\x63\x68","\x73\x65\x61\x72\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x6F\x62\x6A\x65\x63\x74","\x70\x75\x73\x68","\x63","\x6D\x61\x70","\x73\x68\x69\x66\x74","\x6F\x74\x68\x65\x72\x5F\x70\x61\x74\x68","\x6F\x74\x68\x65\x72\x5F\x73\x65\x61\x72\x63\x68","\x26","\x6F\x75\x74","\x67\x65\x74\x4D\x61\x70","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x6D\x65\x72\x67\x65\x55\x72\x6C","\x63\x61\x6C\x6C","\x65\x78\x74\x65\x6E\x64","\x67\x65\x74\x55\x72\x6C","\x6D\x61\x70\x3D","\x6A\x6F\x69\x6E","\x3F","\x51\x44\x5F\x56\x74\x65\x78\x55\x72\x6C\x50\x61\x72\x73\x65"];(function(){function _0x6ac7x1(_0x6ac7x2){try{this[_0x8349[0]]=$(_0x8349[1]+_0x6ac7x2+_0x8349[2])[0]}catch(c){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],c)}}function _0x6ac7x3(_0x6ac7x2){try{_0x6ac7x2=_0x6ac7x2||this[_0x8349[0]];var _0x6ac7x4=_0x6ac7x2[_0x8349[11]][_0x8349[10]](/\/\//g,_0x8349[7])[_0x8349[10]](/(^\/|\/$)/g,_0x8349[9])[_0x8349[8]](_0x8349[7]),_0x6ac7x5=((_0x6ac7x2[_0x8349[15]]||_0x8349[9])[_0x8349[14]](/map\=([^&]+)/i)||[_0x8349[9]])[_0x8349[13]]()[_0x8349[8]](_0x8349[12]);if(1==_0x6ac7x5[_0x8349[16]]&&0==_0x6ac7x5[0][_0x8349[16]]){if(_0x8349[17]== typeof defaultMap){_0x6ac7x5=defaultMap}else {for(var _0x6ac7x6=0;_0x6ac7x6<_0x6ac7x4[_0x8349[16]];_0x6ac7x6++){_0x6ac7x4[_0x6ac7x6][_0x8349[16]]&&_0x8349[7]!=_0x6ac7x4[_0x6ac7x6]&&_0x6ac7x5[_0x8349[18]](defaultMap)}}};for(var _0x6ac7x6={map:{},other_path:_0x8349[9]},_0x6ac7x7=0;_0x6ac7x7<_0x6ac7x5[_0x8349[16]];_0x6ac7x7++){_0x6ac7x5[_0x6ac7x7][_0x8349[16]]&&(_0x8349[19]==_0x6ac7x5[_0x6ac7x7]?(_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]]=_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]]||[],_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]][_0x8349[18]]((_0x6ac7x4||[_0x8349[9]])[_0x8349[21]]())):_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]]=(_0x6ac7x4||[_0x8349[9]])[_0x8349[21]]())};_0x6ac7x6[_0x8349[22]]=_0x6ac7x4;_0x6ac7x6[_0x8349[23]]=(_0x6ac7x2[_0x8349[15]]||_0x8349[9])[_0x8349[10]](/map\=([^&]+)/ig,_0x8349[9])[_0x8349[10]](/\&\&+/ig,_0x8349[24])[_0x8349[10]](/\?/g,_0x8349[9]);return this[_0x8349[25]]=_0x6ac7x6}catch(g){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],g)}}_0x6ac7x1[_0x8349[27]][_0x8349[26]]=_0x6ac7x3;_0x6ac7x1[_0x8349[27]][_0x8349[28]]=function(_0x6ac7x2,_0x6ac7x4){try{var _0x6ac7x5=_0x6ac7x3[_0x8349[29]](this,this[_0x8349[0]]),_0x6ac7x6=_0x6ac7x3[_0x8349[29]](this,$(_0x8349[1]+_0x6ac7x2+_0x8349[2])[0]);_0x6ac7x5[_0x8349[22]][_0x8349[16]]||(_0x6ac7x5[_0x8349[22]]=void(0));_0x6ac7x5[_0x8349[23]][_0x8349[16]]||(_0x6ac7x5[_0x8349[23]]=void(0));var _0x6ac7x7=$[_0x8349[30]](!0,{},_0x6ac7x6,_0x6ac7x5);if(_0x8349[17]== typeof _0x6ac7x4){for(_0x6ac7x6=0;_0x6ac7x6<_0x6ac7x4[_0x8349[16]];_0x6ac7x6++){_0x6ac7x7[_0x8349[20]][_0x6ac7x4[_0x6ac7x6]]&&(_0x6ac7x7[_0x8349[20]][_0x6ac7x4[_0x6ac7x6]]=_0x6ac7x5[_0x8349[20]][_0x6ac7x4[_0x6ac7x6]])}};return this[_0x8349[25]]=_0x6ac7x7}catch(g){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],g)}};_0x6ac7x1[_0x8349[27]][_0x8349[31]]=function(_0x6ac7x2){try{var _0x6ac7x4=[],_0x6ac7x5=[];_0x6ac7x2=_0x6ac7x2||{};for(var _0x6ac7x6 in this[_0x8349[25]][_0x8349[20]]){if(!_0x6ac7x2[_0x6ac7x6]){if(_0x8349[19]==_0x6ac7x6){for(var _0x6ac7x7=0;_0x6ac7x7<this[_0x8349[25]][_0x8349[20]][_0x6ac7x6][_0x8349[16]];_0x6ac7x7++){_0x6ac7x4[_0x8349[18]](this[_0x8349[25]][_0x8349[20]][_0x6ac7x6][_0x6ac7x7]),_0x6ac7x5[_0x8349[18]](_0x6ac7x6)}}else {_0x6ac7x4[_0x8349[18]](this[_0x8349[25]][_0x8349[20]][_0x6ac7x6]),_0x6ac7x5[_0x8349[18]](_0x6ac7x6)}}};var _0x6ac7x8=_0x6ac7x5[_0x8349[16]]?_0x8349[32]+_0x6ac7x5[_0x8349[33]](_0x8349[12])+_0x8349[24]:_0x8349[9];return _0x8349[7]+_0x6ac7x4[_0x8349[33]](_0x8349[7])+(this[_0x8349[25]][_0x8349[22]][_0x8349[16]]?_0x8349[7]+this[_0x8349[25]][_0x8349[22]][_0x8349[33]](_0x8349[7]):_0x8349[9])+_0x8349[34]+(_0x6ac7x8+this[_0x8349[25]][_0x8349[23]])[_0x8349[10]](/\&\&+/g,_0x8349[24])}catch(_0x6ac7x1){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],_0x6ac7x1)}};window[_0x8349[35]]=_0x6ac7x1})()
