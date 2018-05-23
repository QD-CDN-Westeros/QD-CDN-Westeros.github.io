/**
* Funções base
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

try {
	var Common = {
		run: function() {},
		init: function() {
			Common.vtexBindQuickViewDestroy();
			Common.setDataScrollToggle();
			Common.smartAutoComplete();
			Common.applyCarouselShelf();
			Common.applyAmazingMenu();
			Common.applyAmazingMenuMobile();
			Common.applyImageLoad(); // Carregar após Amazing Menu sempre
			Common.applySmartCart();
			Common.openSearchModal();
			Common.overlay();
			Common.saveAmountFix();
			Common.applyTipBarCarouselFooter();
			Common.showFooterLinks();
			Common.applyMosaicCategorieBanners();
		},
		ajaxStop: function() {
			Common.saveAmountFix();
		},
		windowOnload: function() {},
		vtexBindQuickViewDestroy: function() {
			window.bindQuickView = function() {};
		},
		applyImageLoad: function () {
			$('.search-qd-v1-result, .carousel-qd-v1-shelf, .accessories-qd-v1-wrapper').QD_smartImageLoad({
				sizes: {
					width: '300',
					height: '300'
				}
			});
		
			// Aplica Image Load no menu
			$('.header-qd-v1-amazing-menu .qd-am-dropdown').on('mouseover', function () {
				$(this).QD_smartImageLoad();
			});
		},
		showFooterLinks: function () {
			$('.info-title').click(function (e) {
				var $t = $(this);
				$t.toggleClass('qd-is-active');
				$('.info-nav').toggleClass('qd-is-active');
			});
			
			$('.help-title').click(function (e) {
				var $t = $(this);
				$t.toggleClass('qd-is-active');
				$('.help-nav').toggleClass('qd-is-active');
			});
			// $('.social-title').click(function (e) {
			// 	var $t = $(this);
			// 	$t.toggleClass('qd-is-active');
			// 	$('.footer-qd-v1-social-link').toggleClass('qd-is-active');
			// });
		},
		applyMosaicCategorieBanners: function () {
			$('.banner-qd-v1-responsive > .box-banner').QD_mosaicBanners();
		},
		saveAmountFix: function () {
			$('.shelf-qd-v1-highlight-discount-percentage:not(.qd-on)').addClass('qd-on').each(function () {
				var $t = $(this);
				$t.text(($t.text().trim().match(/[0-9]+/) || [""]).pop() + '% off');
			});
		},
		applyTipBarCarouselFooter: function () {
			var wrapper = $('.tip-bar-qd-v1-carousel-footer >ul');
			
			if (!wrapper.length)
			return;
			
			var options = {
				arrows: false,
				autoplay: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				draggable: false,
				speed: 1000,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			};
			
			wrapper.slick($.extend(true, options, (function () {
				// Se estiver dentro do product-qd-v1-tip-bar, ele mostrará só 2 slides por vez, mantendo as outras propriedades da variável options
				if (wrapper.closest('.product-qd-v1-tip-bar').length)
				return { slidesToShow: 1 };
				return {};
			})()));
		},
		
		setDataScrollToggle: function () {
			$(document.body).attr('data-qd-scroll-limit', '100, 800');
		},
		smartAutoComplete: function () {
			$('.fulltext-search-box').QD_smartAutoComplete({});
		},
		applyCarouselShelf: function () {
			var wrapper = $('.carousel-qd-v1-shelf .prateleira').not('.slick-initialized');
			
			if (!wrapper.length)
				return false;
			
			wrapper.has('h2').each(function () {
				var $t = $(this);
				$t.find('h2').addClass("component-qd-v1-section-title").insertBefore($t);
			});
			
			wrapper.slick({
				slidesToShow: 4,
				slidesToScroll: 4,
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
						breakpoint: 550,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		},
		applyAmazingMenu: function () {
			$('.header-qd-v1-amazing-menu, .footer-qd-v1-menu-list').QD_amazingMenu();
		},
		applyAmazingMenuMobile: function () {
			var wrapper = $('.header-qd-v1-amazing-menu-mobile');
			
			wrapper.find('> ul > li > ul').prepend(function () { return $(this).prev().clone().wrap('<li></li>').parent() });
			
			wrapper.QD_amazingMenu({
				callback: function () {
					$('<span class="qd-am-dropdown-trigger"><i class="fa fa-chevron-right"></i></span>').appendTo(wrapper.find('.qd-am-has-ul')).click(function () {
						var $t = $(this);
						$.merge($t.parent(), $t.closest('ul')).toggleClass('qd-am-is-active');
						
						$t.filter(function () { return !$(this).closest('ul').is('.qd-amazing-menu'); }).siblings('ul').stop(true, true).slideToggle();
					});
					
					wrapper.find('nav > ul > li > .qd-am-dropdown-trigger').click(function () {
						$('.header-qd-v1-amazing-menu-mobile').addClass('qd-am-is-active');
						$('.header-qd-v1-amazing-menu-mobile').animate({
							scrollTop: 0
						}, 200);
					});
					
					wrapper.find('nav > ul > li > ul > li:first-child').click(function (e) {
						e.preventDefault();
						$(this).parents(".qd-am-is-active").removeClass('qd-am-is-active');
					});
				}
			});
			
			$('.header-qd-v1-amazing-menu-trigger').click(function (evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-am-on');
			});
			
			$('.header-qd-v1-amazing-menu-mobile .header-qd-v1-user-message').on('click', 'a#login', function () {
				$(document.body).removeClass('qd-am-on');
			});
			
			$('.header-qd-v1-amazing-menu-mobile .header-qd-v1-user-message').append('<div class="header-qd-v1-close-amazing-menu-mobile"></div>');
			
			$('.header-qd-v1-close-amazing-menu-mobile').click(function (evt) {
				$(document.body).removeClass(Common.qdOverlayClass);
			});
			
		},
		applySmartCart: function () {
			$('.header-qd-v1-cart').append('<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>');
			
			$(document.body).append('<div class="smart-cart-qd-v2-wrapper"><div class="qd-sc-wrapper"></div></div>');
			
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
						$(".qd-ddc-wrapper3").prepend('<div class="qd-cartTitle"><h3>Meu Carrinho</h3></div>');
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
					buyButton: "body .prateleira:not(.qd-am) .buy-button"
				}
			});
			
			// Callback do Quick View
			window._QuatroDigital_prodBuyCallback = function (jqXHR, textStatus, prodLink, skus) {
				$.fn.simpleCart(true);
				$(".shelf-qd-v1-buy-button-modal").modal("hide");
				$(window).trigger("QuatroDigital.qd_bb_prod_add", [new $, skus[0] || 0]);
			};
			
			$('.header-qd-v1-cart-link-trigger').click(function (evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-cart-show');
				
				wrapper.height($(window).height());
				wrapper.find(".qd-ddc-prodWrapper").css('max-height', $(window).height() - 242);
				
				if (window.Tawk_API)
					window.Tawk_API.toggleVisibility();
			});
			
			$('.qd_ddc_lightBoxClose').click(function (evt) {
				$(document.body).removeClass(Common.qdOverlayClass);
				
				if (window.Tawk_API)
					window.Tawk_API.toggleVisibility();
			});

			function resetCep() {
				$('.qd-ddc-cep').val('');
				$('.qd-ddc-cep').data('qdDdcLastPostalCode', '');
				$('.qd-dd-cep-slas').remove();
			}
			
			$('.qd-ddc-cep-btn, .qd-ddc-cep-close').click(resetCep);
			$(document).off('click._QD_DDC_closeShipping2').on('click._QD_DDC_closeShipping2', function(e) {
				if($(e.target).closest($('.qd-ddc-cep-tooltip')).length)
					return;

				resetCep();
			});
		},
		openSearchModal: function () {
			$('.header-qd-v1-search-trriger').click(function () {
				$('.modal-qd-v1-search').modal();
				return false;
			});
		},
		qdOverlayClass: 'qd-am-on qd-cart-show qd-sn-on',
		overlay: function () {
			$('.components-qd-v1-overlay').click(function () {
				$(document.body).removeClass(Common.qdOverlayClass);
			});
		}
	};
	
	var Home = {
		init: function() {
			Home.applySlickSlider();
			Home.applyMosaicCarousel();
			Home.applyBrandCarousel();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		applySlickSlider: function () {
			var wrapper = $('.slider-qd-v1-full');
			
			// wrapper.find(".box-banner").each(function() {
			
			wrapper.slick({
				dots: true,
				customPaging: function (slider, i) {
					var alt = slider.$slides[i].querySelector('img').alt;
					return '<button data-role="none" tabindex="' + i + '">' + alt + '</button>';
				},
				fade: true,
				cssEase: 'linear',
				infinite: true,
				speed: 500,
				autoplay: true,
				autoplaySpeed: 7000,
				draggable: false
			});
			
			// var mobileDotsWrapper = $('.slider-qd-v1-full-mobile .slick-dots');
			// mobileDotsWrapper.on('init', function (event, slick) {
			// 	$(this).find('.slick-current').addClass('slick-active');
			// });
			
			// mobileDotsWrapper.slick({
			// 	asNavFor: '.slider-qd-v1-full-mobile',
			// 	arrows: false,
			// 	centerMode: true,
			// 	infinite: false,
			// 	focusOnSelect: true,
			// 	variableWidth: true,
			// 	centerPadding: '24%'
			// });
			
			// // On after slide change
			// var mobileWrapper = $('.slider-qd-v1-full.slider-qd-v1-full-mobile');
			// mobileWrapper.on('afterChange', function (event, slick, currentSlide, nextSlide) {
			// 	mobileDotsWrapper.slick('slickGoTo', currentSlide);
			// 	mobileDotsWrapper.find('.slick-current').addClass('slick-active');
			// });
			
			wrapper.each(function () {
				$(this).find('.slick-arrow').wrapAll('<div class="slick-nav" />');
			});
		},
		applyMosaicCarousel: function () {
			var wrapper = $('.categories-carousel-qd-v1-banners .mosaic-categories-qd-v1-wrapper').not('.slick-initialized');
			var mbRow = $('.categories-carousel-qd-v1-banners .banner-qd-v1-responsive > .qd-mb-row');
			
			if (!wrapper.length)
			return false;
			
			mbRow.each(function () {
				$(this).find('.box-banner').insertBefore(this);
			}).remove();
			
			wrapper.slick({
				slidesToShow: 4,
				slidesToScroll: 4,
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
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		},
		applyBrandCarousel: function () {
			var wrapper = $('.brand-carousel-qd-v1-carousel');
			
			wrapper.slick({
				slidesToShow: 6,
				slidesToScroll: 6,
				infinite: true,
				speed: 700,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					},
					
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
	};
	
	var Search = {
		init: function () { 
			Search.openFiltersMenu();
			Search.hideExtendedMenu();
			Search.infinityScroll();
			Home.applySlickSlider(); 
			Search.shelfLineFix();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		openFiltersMenu: function () {
			$('.search-qd-v1-navigator-trigger').click(function (e) {
				e.preventDefault();
				$(document.body).toggleClass('qd-sn-on');
				$('.search-qd-v1-navigator-close').appendTo('.search-single-navigator').removeClass('hide');
			});
			
			$('.menu-departamento').prepend('<span class="search-qd-v1-navigator-close hide"><i class="fa fa-times-circle" aria-hidden="true"></i></span>');
			
			$('.search-qd-v1-navigator-close').click(function () {
				$(document.body).removeClass('qd-sn-on');
				$('.search-qd-v1-navigator-close').addClass('hide');
			});
		},
		hideExtendedMenu: function () {
			$(".search-qd-v1-navigator ul").each(function () {
				var t, li, qtt, moreLink, moreLi, click, liHide;
				
				t = $(this);
				li = t.find(">li");
				qtt = 10;
				
				if (li.length <= qtt) return;
				
				liHide = li.filter(":gt(" + (qtt - 1) + ")").stop(true, true).hide();
				moreLink = $('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				t.after(moreLink);
				moreLi = $('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais filtros</a></li>');
				t.append(moreLi);
				
				click = function () {
					liHide.stop(true, true).slideToggle(0, function () {
						if (li.filter(":visible").length > qtt) {
							moreLink.addClass("minus").text("Mostrar menos filtros");
							moreLi.addClass("minus").find("a").text("Mostrar menos filtros");
						}
						else {
							moreLink.removeClass("minus").text("Mostrar mais filtros");
							moreLi.removeClass("minus").find("a").text("Mostrar mais filtros");
						}
					});
				};
				moreLi.bind("click.qd_viewMore", click);
				moreLink.bind("click.qd_viewMore", click);
			});
			
			var wrapper = $(".search-single-navigator, .search-multiple-navigator");
			
			wrapper.find('h3, h4, h5').click(function (evt) {
				var $t = $(this);
				
				if ($(evt.target).is(wrapper.find('h3')) || $(evt.target).is(wrapper.find('h4')) || $(evt.target).is(wrapper.find('h5'))) {
					$t.find("+ ul").stop(true, true).slideToggle(0, function () {
						$t.toggleClass('qd-seach-active-menu');
					});
					$t.find("+ div").stop(true, true).slideToggle(0, function () {
						$t.toggleClass('qd-seach-active-menu');
					});
				}
			});
		},
		infinityScroll: function () {
			$(".prateleira[id*=ResultItems]").QD_infinityScroll();
		},
		shelfLineFix: function () {
			try {
				var exec = function () {
					var curTop;
					var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass('qd-fi-on');
					
					var shelf = wrapper.children("ul").removeClass('qd-first-line');
					shelf.first().addClass("qd-first-line");
					
					var setFirst = function () {
						shelf.each(function () {
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
				// Olhando tbm para o Infinity Scroll
				if (!window.qd_shelf_line_fix_is) {
					$(window).on("QuatroDigital.is_Callback", exec);
					window.qd_shelf_line_fix_is = true;
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
					$(window).on("resize.qd", function () {
						clearTimeout(timeOut);
						timeOut = setTimeout(function () {
							$(".qd-first-line").removeClass(".qd-first-line");
							exec();
						}, 20);
					});
				}
			}
			catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		}
	};
	
	var Product = {
		run: function() {},
		init: function() {
			// Product.forceImageZoom();
			Product.accessoriesFix();
			Product.accessoriesApplyCarousel();
			Product.setAvailableBodyClass();
			Product.productThumbCarousel();
			Product.qdHideUniqueSkuOption();
			Product.fixSKUselect();
			Product.openShipping();
			Product.scrollToBuyButton();
			Product.applyCarouselShelfSimilares();
			Product.rotateBuyTogether();
			Product.hideFidelityProgram();
		},
		ajaxStop: function() {
			Product.hideFidelityProgram();
		},
		windowOnload: function() {},
		setAvailableBodyClass: function() {
			function checkVisibleNotify(available) {
				if (available)
				$(document.body).addClass('qd-product-available').removeClass('qd-product-unavailable');
				else
				$(document.body).addClass('qd-product-unavailable').removeClass('qd-product-available');
			}
			
			$(document).on("skuSelected.vtex", function(e, id, sku) {
				checkVisibleNotify(sku.available);
			});
			
			checkVisibleNotify(skuJson.available);
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
			
			$('.accessories-qd-v1-carousel').slick({
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				draggable: false,
				speed: 700,
				responsive: [{ breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }]
			});
		},
		productThumbCarousel: function () {
			$('.product-qd-v1-image-info-wrapper').QD_smartPhotoCarousel({
				imageWrapper: '.product-qd-v1-image',
				thumbsWrapper: '.product-qd-v1-image-thumbs',
				sizes: {
					thumb: '150-150',
					image: '751-751',
					imagezoom: '1000-1000'
				},
				slickOptions: {
					images: {
						lazyLoad: 'ondemand',
						infinite: false,
						arrows: false,
					},
					thumbs: {
						vertical: false,
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows: false,
						focusOnSelect: true,
						centerMode: true,
						centerPadding: '25px',						
						responsive: [
							{
								breakpoint: 991,
								settings: {
									centerPadding: '10px'
								}
							}
						]
					}
				},
			});
		},
		qdHideUniqueSkuOption: function () {
			$(".product-qd-v1-sku-selection [class*='group_']").each(function () {
				var $t = $(this);
				var input = $t.find("input");
				
				if (input.length !== 1)
				return;
				
				input.attr("checked", true).change();
				$t.getParent("ul").hide();
			});
		},
		fixSKUselect: function () {
			var wrapper = $('.product-qd-v1-sku-selection');
			var value = wrapper.find('li.specification').first().text();
			wrapper.find('select').find('option[value=""]').append(value).attr('value', 'selecione');
		},
		openShipping: function () {
			if (typeof window.ShippingValue === "function")
				window.ShippingValue();
		},
		scrollToBuyButton: function () {
			$('.product-qd-v1-fixed-bar .buy-button').click(function (e) {
				e.preventDefault();
				
				$('html, body').stop().animate({
					'scrollTop': $('.product-qd-v1-sku-selection-wrapper').offset().top - 75
				}, 900, 'swing');
			});
		},
		applyCarouselShelfSimilares: function () {
			var wrapper = $('.qd-kenning-color');
			
			if (!wrapper.length)
			return false;
			
			wrapper.each(function () {
				var $t = $(this);
				$t.find('h2').insertBefore(wrapper);
			});
			
			wrapper.parent().removeClass('mosaic-qd-v1-wrapper'); // remove classe de mosaico se tiver carrossel
			
			wrapper.slick({
				prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: true,
				draggable: false,
				speed: 700
			});
		},
		rotateBuyTogether: function () {
			if (typeof $.fn.slick != "function")
			return;
			
			var slider = $('<div class="rotative-buy-together-qd-v1-slide" />').insertAfter('#divTitulo');
			var wrapper = $('.product-qd-v1-buy-together');
			wrapper.find('tr').each(function () {
				$(this).appendTo(slider).wrap("<div><table /></div>");
			});
			wrapper.find('.buy-together-content > table').remove();
			
			slider.slick({
				autoplay: false,
				draggable: true,
				autoplay: true,
				autoplaySpeed: 7000,
				fade: true,
				cssEase: 'linear'
			});
		},
		forceImageZoom: function() {
			try {
				var orig = window.ImageControl;
				window.ImageControl = function() {
					$("ul.thumbs a").each(function() {
						var $t = $(this);
						if ($t.attr("zoom"))
						return;
						var rel = $t.attr("rel");
						if (rel)
						$t.attr("zoom", rel.replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1000-1000"));
					});
					orig.apply(this, arguments);
				}
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Ops, algo saiu errado como zoom :( . Detalhes: " + e.message)); }
		},
		hideFidelityProgram: function() {
			var skuId = ($('a.buy-button').attr('href').match(/sku=([0-9]+)/i) || []).pop();
			var fidelityValue = skuId ? getFidelityValue(skuId) : 0;

			if(!fidelityValue)
				$('.fidelity-program-wrap').closest('.product-qd-v1-sku-selection-row').hide();
			else
				$('.fidelity-program-wrap').closest('.product-qd-v1-sku-selection-row').show();

			function getFidelityValue(skuId) {
				var fidelityValue = 0;
				skuJson.skus.forEach(function(skuElem){
					if(skuElem.sku == skuId) 
						fidelityValue = skuElem.rewardValue;
				}); 
				return fidelityValue;
			}
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
			Institutional.sideMenuToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		sideMenuToggle: function () {
			$('.institucional-qd-v1-menu-toggle-wrap').click(function (evt) {
				evt.preventDefault();
				$(document.body).addClass('qd-sn-on');
			});
			
			$('.institucional-qd-v1-side-menu-wrap-close').click(function () {
				$(document.body).removeClass('qd-sn-on');
			});
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
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.windowOnload();
			else if (body.is(".produto")) Product.windowOnload();
			else if (body.is(".listas")) List.windowOnload();
			else if (body.is(".institucional")) Institutional.windowOnload();
			else if (body.is(".orders")) Orders.windowOnload();
		};
		
		ajaxStop = function() {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.ajaxStop();
			else if (body.is(".produto")) Product.ajaxStop();
			else if (body.is(".listas")) List.ajaxStop();
			else if (body.is(".institucional")) Institutional.ajaxStop();
			else if (body.is(".orders")) Orders.ajaxStop();
		};
		
		$(function() {
			body = $(document.body);
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".resultado-busca, .departamento, .categoria")){
				Search.isSearch = $(document.body).is('.resultado-busca');
				Search.isDepartament = $(document.body).is('.departamento');
				Search.isCategory = $(document.body).is('.categoria');
				Search.init();
			}
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

/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(){"function"!==typeof $.cookie&&function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)}(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?
g(b):b}var l=/\+/g,e=c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864E5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=
h[m].split("="),k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}})})();

/* Slick.js - Version: 1.6.0 - Author: Ken Wheeler - Website: http://kenwheeler.github.io - Docs: http://kenwheeler.github.io/slick - Repo: http://github.com/kenwheeler/slick - Issues: http://github.com/kenwheeler/slick/issues */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/* PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};

/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);

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
/* Quatro Digital - Scroll Toggle // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(){var c=jQuery,e=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(c){try{console.info(b.join("\n"))}catch(e){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(l){try{console.warn(b.join("\n"))}catch(m){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var d=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)d.push(c(window).height());else return e("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var b=a.split(","),f;for(f in b)"function"!==typeof b[f]&&(a=parseInt(b[f].trim()),
isNaN(a)||d.push(a))}if(!d.length)return e("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return e('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return e('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===
typeof document.body.getAttribute)return e('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return e('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){e("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",
g.message)}c(window).scroll(function(){for(var a=0;a<d.length;a++)c(window).scrollTop()>d[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+a)})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
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
var _0x5ad4=['attr','find','[data-qd-ssa-text]','qd-ssa-hide','qd-ssa-show','filter','[data-qd-ssa-text=\x22','length','[data-qd-ssa-text=\x22default\x22]','html','message','qd-ssa-on','qd-ssa-skus-','skus','split','Erro\x20ao\x20adicionar\x20classe\x20com\x20a\x20quantidade\x20de\x20SKUs\x20do\x20produto.\x20Detalhes:\x20','vtex.sku.selected\x20QuatroDigital.ssa.skuSelected','trigger','QuatroDigital.ssa.prodUnavailable','off','qd-ssa-sku-prod-unavailable','hide','hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','charCodeAt','join','toUpperCase','---','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','qdPlugin','initialSkuSelected','QuatroDigital.ssa.skuSelected','prod','sku','Erro\x20ao\x20tentar\x20disparar\x20o\x20evento\x20customizado\x20de\x20seleção\x20de\x20SKU.\x20Detalhes:\x20','unavailable','vtex.sku.selected.QD','Erro\x20ao\x20armazenar\x20o\x20SKU\x20disparado\x20no\x20ínicio\x20da\x20página.\x20Detalhes:\x20','vtex.sku.selectable','qdAjax','extend','url','opts','push','call','error','complete','parameters','callbackFns','successPopulated','boolean','errorPopulated','completePopulated','success','object','clearQueueDelay','jqXHR','undefined','ajax','readyState','data','textStatus','errorThrown','version','2.1','/produto/sku/','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20SKU,\x20a\x20requisição\x20falhou!','function','QD_smartStockAvailable','[Quatro\x20Digital\x20-\x20Smart\x20Stock\x20Available]\x0a','alerta','toLowerCase','aviso','info','apply','removeClass','qd-ssa-sku-no-selected','addClass','qd-ssa-sku-selected','SkuSellersInformation','AvailableQuantity'];(function(_0x34c924,_0x1370c8){var _0x40d552=function(_0x54f3ed){while(--_0x54f3ed){_0x34c924['push'](_0x34c924['shift']());}};_0x40d552(++_0x1370c8);}(_0x5ad4,0x7c));var _0x4e5e=function(_0x5dfeaf,_0x194442){_0x5dfeaf=_0x5dfeaf-0x0;var _0x40583e=_0x5ad4[_0x5dfeaf];return _0x40583e;};(function(_0x34a27e){if('function'!==typeof _0x34a27e[_0x4e5e('0x0')]){var _0x3ba897={};_0x34a27e['qdAjaxQueue']=_0x3ba897;_0x34a27e[_0x4e5e('0x0')]=function(_0x41b025){var _0x216003=_0x34a27e[_0x4e5e('0x1')]({},{'success':function(){},'error':function(){},'complete':function(){},'clearQueueDelay':0x0},_0x41b025);var _0x133ffe=escape(encodeURIComponent(_0x216003[_0x4e5e('0x2')]));_0x3ba897[_0x133ffe]=_0x3ba897[_0x133ffe]||{};_0x3ba897[_0x133ffe][_0x4e5e('0x3')]=_0x3ba897[_0x133ffe][_0x4e5e('0x3')]||[];_0x3ba897[_0x133ffe][_0x4e5e('0x3')][_0x4e5e('0x4')]({'success':function(_0x368523,_0x223f04,_0xf96db2){_0x216003['success'][_0x4e5e('0x5')](this,_0x368523,_0x223f04,_0xf96db2);},'error':function(_0x1d81db,_0xc22aa0,_0x18ba47){_0x216003[_0x4e5e('0x6')][_0x4e5e('0x5')](this,_0x1d81db,_0xc22aa0,_0x18ba47);},'complete':function(_0x1a815a,_0x39a95f){_0x216003[_0x4e5e('0x7')][_0x4e5e('0x5')](this,_0x1a815a,_0x39a95f);}});_0x3ba897[_0x133ffe][_0x4e5e('0x8')]=_0x3ba897[_0x133ffe][_0x4e5e('0x8')]||{'success':{},'error':{},'complete':{}};_0x3ba897[_0x133ffe][_0x4e5e('0x9')]=_0x3ba897[_0x133ffe][_0x4e5e('0x9')]||{};_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xa')]=_0x4e5e('0xb')===typeof _0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xa')]?_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xa')]:!0x1;_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xc')]=_0x4e5e('0xb')===typeof _0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xc')]?_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xc')]:!0x1;_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xd')]='boolean'===typeof _0x3ba897[_0x133ffe]['callbackFns']['completePopulated']?_0x3ba897[_0x133ffe]['callbackFns']['completePopulated']:!0x1;_0x41b025=_0x34a27e[_0x4e5e('0x1')]({},_0x216003,{'success':function(_0x1599bd,_0x210f83,_0x1b8fd0){_0x3ba897[_0x133ffe][_0x4e5e('0x8')]['success']={'data':_0x1599bd,'textStatus':_0x210f83,'jqXHR':_0x1b8fd0};_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xa')]=!0x0;for(var _0x31f8b5 in _0x3ba897[_0x133ffe]['opts'])'object'===typeof _0x3ba897[_0x133ffe]['opts'][_0x31f8b5]&&(_0x3ba897[_0x133ffe]['opts'][_0x31f8b5][_0x4e5e('0xe')][_0x4e5e('0x5')](this,_0x1599bd,_0x210f83,_0x1b8fd0),_0x3ba897[_0x133ffe][_0x4e5e('0x3')][_0x31f8b5]['success']=function(){});},'error':function(_0x5ea3a9,_0x103637,_0x234264){_0x3ba897[_0x133ffe][_0x4e5e('0x8')]['error']={'errorThrown':_0x234264,'textStatus':_0x103637,'jqXHR':_0x5ea3a9};_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xc')]=!0x0;for(var _0x93ea8 in _0x3ba897[_0x133ffe][_0x4e5e('0x3')])_0x4e5e('0xf')===typeof _0x3ba897[_0x133ffe]['opts'][_0x93ea8]&&(_0x3ba897[_0x133ffe][_0x4e5e('0x3')][_0x93ea8][_0x4e5e('0x6')][_0x4e5e('0x5')](this,_0x5ea3a9,_0x103637,_0x234264),_0x3ba897[_0x133ffe][_0x4e5e('0x3')][_0x93ea8][_0x4e5e('0x6')]=function(){});},'complete':function(_0x1a85b3,_0x3704c5){_0x3ba897[_0x133ffe]['parameters'][_0x4e5e('0x7')]={'textStatus':_0x3704c5,'jqXHR':_0x1a85b3};_0x3ba897[_0x133ffe][_0x4e5e('0x9')]['completePopulated']=!0x0;for(var _0x1cce75 in _0x3ba897[_0x133ffe]['opts'])'object'===typeof _0x3ba897[_0x133ffe]['opts'][_0x1cce75]&&(_0x3ba897[_0x133ffe]['opts'][_0x1cce75][_0x4e5e('0x7')][_0x4e5e('0x5')](this,_0x1a85b3,_0x3704c5),_0x3ba897[_0x133ffe][_0x4e5e('0x3')][_0x1cce75][_0x4e5e('0x7')]=function(){});isNaN(parseInt(_0x216003[_0x4e5e('0x10')]))||setTimeout(function(){_0x3ba897[_0x133ffe][_0x4e5e('0x11')]=void 0x0;_0x3ba897[_0x133ffe][_0x4e5e('0x3')]=void 0x0;_0x3ba897[_0x133ffe][_0x4e5e('0x8')]=void 0x0;_0x3ba897[_0x133ffe][_0x4e5e('0x9')]=void 0x0;},_0x216003['clearQueueDelay']);}});_0x4e5e('0x12')===typeof _0x3ba897[_0x133ffe][_0x4e5e('0x11')]?_0x3ba897[_0x133ffe]['jqXHR']=_0x34a27e[_0x4e5e('0x13')](_0x41b025):_0x3ba897[_0x133ffe][_0x4e5e('0x11')]&&_0x3ba897[_0x133ffe][_0x4e5e('0x11')][_0x4e5e('0x14')]&&0x4==_0x3ba897[_0x133ffe][_0x4e5e('0x11')]['readyState']&&(_0x3ba897[_0x133ffe][_0x4e5e('0x9')]['successPopulated']&&_0x41b025[_0x4e5e('0xe')](_0x3ba897[_0x133ffe][_0x4e5e('0x8')]['success'][_0x4e5e('0x15')],_0x3ba897[_0x133ffe][_0x4e5e('0x8')][_0x4e5e('0xe')][_0x4e5e('0x16')],_0x3ba897[_0x133ffe][_0x4e5e('0x8')][_0x4e5e('0xe')][_0x4e5e('0x11')]),_0x3ba897[_0x133ffe][_0x4e5e('0x9')]['errorPopulated']&&_0x41b025[_0x4e5e('0x6')](_0x3ba897[_0x133ffe][_0x4e5e('0x8')]['error']['jqXHR'],_0x3ba897[_0x133ffe][_0x4e5e('0x8')][_0x4e5e('0x6')][_0x4e5e('0x16')],_0x3ba897[_0x133ffe][_0x4e5e('0x8')][_0x4e5e('0x6')][_0x4e5e('0x17')]),_0x3ba897[_0x133ffe][_0x4e5e('0x9')][_0x4e5e('0xd')]&&_0x41b025[_0x4e5e('0x7')](_0x3ba897[_0x133ffe][_0x4e5e('0x8')]['complete']['jqXHR'],_0x3ba897[_0x133ffe]['parameters'][_0x4e5e('0x7')][_0x4e5e('0x16')]));};_0x34a27e[_0x4e5e('0x0')][_0x4e5e('0x18')]=_0x4e5e('0x19');}}(jQuery));(function(_0x2a1211){function _0x13eb95(_0x31c909,_0x2dc267){_0x54b191[_0x4e5e('0x0')]({'url':_0x4e5e('0x1a')+_0x31c909,'clearQueueDelay':null,'success':_0x2dc267,'error':function(){_0x5b27e8(_0x4e5e('0x1b'));}});}var _0x54b191=jQuery;if(_0x4e5e('0x1c')!==typeof _0x54b191['fn'][_0x4e5e('0x1d')]){var _0x5b27e8=function(_0x2cce35,_0x356168){if(_0x4e5e('0xf')===typeof console){var _0x5c4345;_0x4e5e('0xf')===typeof _0x2cce35?(_0x2cce35['unshift']('[Quatro\x20Digital\x20-\x20Smart\x20Stock\x20Available]\x0a'),_0x5c4345=_0x2cce35):_0x5c4345=[_0x4e5e('0x1e')+_0x2cce35];_0x4e5e('0x12')===typeof _0x356168||_0x4e5e('0x1f')!==_0x356168[_0x4e5e('0x20')]()&&_0x4e5e('0x21')!==_0x356168['toLowerCase']()?_0x4e5e('0x12')!==typeof _0x356168&&_0x4e5e('0x22')===_0x356168['toLowerCase']()?console[_0x4e5e('0x22')][_0x4e5e('0x23')](console,_0x5c4345):console['error'][_0x4e5e('0x23')](console,_0x5c4345):console['warn']['apply'](console,_0x5c4345);}},_0xd6fb9f={},_0x199441=function(_0x6a66ef,_0xf1d642){function _0x424549(_0x2ec79d){try{_0x6a66ef[_0x4e5e('0x24')](_0x4e5e('0x25'))[_0x4e5e('0x26')](_0x4e5e('0x27'));var _0x353df7=_0x2ec79d[0x0][_0x4e5e('0x28')][0x0][_0x4e5e('0x29')];_0x6a66ef[_0x4e5e('0x2a')]('data-qd-ssa-qtt',_0x353df7);_0x6a66ef['each'](function(){var _0x6a66ef=_0x54b191(this)[_0x4e5e('0x2b')](_0x4e5e('0x2c'));if(0x1>_0x353df7)return _0x6a66ef['hide']()[_0x4e5e('0x26')](_0x4e5e('0x2d'))[_0x4e5e('0x24')](_0x4e5e('0x2e'));var _0x2ec79d=_0x6a66ef[_0x4e5e('0x2f')](_0x4e5e('0x30')+_0x353df7+'\x22]');_0x2ec79d=_0x2ec79d[_0x4e5e('0x31')]?_0x2ec79d:_0x6a66ef[_0x4e5e('0x2f')](_0x4e5e('0x32'));_0x6a66ef['hide']()[_0x4e5e('0x26')](_0x4e5e('0x2d'))[_0x4e5e('0x24')]('qd-ssa-show');_0x2ec79d[_0x4e5e('0x33')]((_0x2ec79d[_0x4e5e('0x33')]()||'')['replace']('#qtt',_0x353df7));_0x2ec79d['show']()[_0x4e5e('0x26')](_0x4e5e('0x2e'))['removeClass']('qd-ssa-hide');});}catch(_0x309165){_0x5b27e8(['Erro\x20ao\x20processar\x20as\x20informações\x20HTML\x20do\x20SKU.\x20Detalhes:\x20',_0x309165[_0x4e5e('0x34')]]);}}if(_0x6a66ef[_0x4e5e('0x31')]){_0x6a66ef[_0x4e5e('0x26')](_0x4e5e('0x35'));_0x6a66ef[_0x4e5e('0x26')](_0x4e5e('0x25'));try{_0x6a66ef[_0x4e5e('0x26')](_0x4e5e('0x36')+vtxctx[_0x4e5e('0x37')][_0x4e5e('0x38')](';')[_0x4e5e('0x31')]);}catch(_0x26ddcc){_0x5b27e8([_0x4e5e('0x39'),_0x26ddcc[_0x4e5e('0x34')]]);}_0x54b191(window)['on'](_0x4e5e('0x3a'),function(_0x4a7459,_0x516510,_0x144148){try{_0x13eb95(_0x144148['sku'],function(_0x3fdfaa){_0x424549(_0x3fdfaa);0x1===vtxctx[_0x4e5e('0x37')][_0x4e5e('0x38')](';')['length']&&0x0==_0x3fdfaa[0x0][_0x4e5e('0x28')][0x0][_0x4e5e('0x29')]&&_0x54b191(window)[_0x4e5e('0x3b')](_0x4e5e('0x3c'));});}catch(_0x2ce31d){_0x5b27e8(['Erro\x20ao\x20processar\x20o\x20SKU.\x20Detalhes:\x20',_0x2ce31d['message']]);}});_0x54b191(window)[_0x4e5e('0x3d')]('vtex.sku.selected.QD');_0x54b191(window)['on'](_0x4e5e('0x3c'),function(){_0x6a66ef[_0x4e5e('0x26')](_0x4e5e('0x3e'))[_0x4e5e('0x3f')]();});}};_0x2a1211=function(_0x54c737){var _0x126336={'y':_0x4e5e('0x40')};return function(_0x52d648){var _0x49d3f6=function(_0x26642c){return _0x26642c;};var _0x12b808=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x52d648=_0x52d648['d'+_0x12b808[0x10]+'c'+_0x12b808[0x11]+'m'+_0x49d3f6(_0x12b808[0x1])+'n'+_0x12b808[0xd]]['l'+_0x12b808[0x12]+'c'+_0x12b808[0x0]+'ti'+_0x49d3f6('o')+'n'];var _0x34cf5f=function(_0x2f0623){return escape(encodeURIComponent(_0x2f0623[_0x4e5e('0x41')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x1f2083){return String[_0x4e5e('0x42')](('Z'>=_0x1f2083?0x5a:0x7a)>=(_0x1f2083=_0x1f2083[_0x4e5e('0x43')](0x0)+0xd)?_0x1f2083:_0x1f2083-0x1a);})));};var _0x379b0d=_0x34cf5f(_0x52d648[[_0x12b808[0x9],_0x49d3f6('o'),_0x12b808[0xc],_0x12b808[_0x49d3f6(0xd)]][_0x4e5e('0x44')]('')]);_0x34cf5f=_0x34cf5f((window[['js',_0x49d3f6('no'),'m',_0x12b808[0x1],_0x12b808[0x4][_0x4e5e('0x45')](),'ite']['join']('')]||_0x4e5e('0x46'))+['.v',_0x12b808[0xd],'e',_0x49d3f6('x'),'co',_0x49d3f6('mm'),'erc',_0x12b808[0x1],'.c',_0x49d3f6('o'),'m.',_0x12b808[0x13],'r'][_0x4e5e('0x44')](''));for(var _0x45461d in _0x126336){if(_0x34cf5f===_0x45461d+_0x126336[_0x45461d]||_0x379b0d===_0x45461d+_0x126336[_0x45461d]){var _0xdabde4='tr'+_0x12b808[0x11]+'e';break;}_0xdabde4='f'+_0x12b808[0x0]+'ls'+_0x49d3f6(_0x12b808[0x1])+'';}_0x49d3f6=!0x1;-0x1<_0x52d648[[_0x12b808[0xc],'e',_0x12b808[0x0],'rc',_0x12b808[0x9]][_0x4e5e('0x44')]('')][_0x4e5e('0x47')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x49d3f6=!0x0);return[_0xdabde4,_0x49d3f6];}(_0x54c737);}(window);if(!eval(_0x2a1211[0x0]))return _0x2a1211[0x1]?_0x5b27e8(_0x4e5e('0x48')):!0x1;_0x54b191['fn'][_0x4e5e('0x1d')]=function(_0x88b2ca){var _0x259729=_0x54b191(this);_0x88b2ca=_0x54b191[_0x4e5e('0x1')](!0x0,{},_0xd6fb9f,_0x88b2ca);_0x259729[_0x4e5e('0x49')]=new _0x199441(_0x259729,_0x88b2ca);try{_0x4e5e('0xf')===typeof _0x54b191['fn']['QD_smartStockAvailable'][_0x4e5e('0x4a')]&&_0x54b191(window)[_0x4e5e('0x3b')](_0x4e5e('0x4b'),[_0x54b191['fn'][_0x4e5e('0x1d')][_0x4e5e('0x4a')][_0x4e5e('0x4c')],_0x54b191['fn'][_0x4e5e('0x1d')][_0x4e5e('0x4a')][_0x4e5e('0x4d')]]);}catch(_0x30de4f){_0x5b27e8([_0x4e5e('0x4e'),_0x30de4f['message']]);}_0x54b191['fn'][_0x4e5e('0x1d')][_0x4e5e('0x4f')]&&_0x54b191(window)['trigger'](_0x4e5e('0x3c'));return _0x259729;};_0x54b191(window)['on'](_0x4e5e('0x50'),function(_0x47ed20,_0x9eb6dd,_0x4954bc){try{_0x54b191['fn'][_0x4e5e('0x1d')][_0x4e5e('0x4a')]={'prod':_0x9eb6dd,'sku':_0x4954bc},_0x54b191(this)[_0x4e5e('0x3d')](_0x47ed20);}catch(_0x299dd6){_0x5b27e8([_0x4e5e('0x51'),_0x299dd6['message']]);}});_0x54b191(window)['on'](_0x4e5e('0x52'),function(_0x4ba660,_0x1c0acc,_0x1d6ae4){try{for(var _0x2ebc38=_0x1d6ae4[_0x4e5e('0x31')],_0x13c428=_0x1c0acc=0x0;_0x13c428<_0x2ebc38&&!_0x1d6ae4[_0x13c428]['available'];_0x13c428++)_0x1c0acc+=0x1;_0x2ebc38<=_0x1c0acc&&(_0x54b191['fn'][_0x4e5e('0x1d')]['unavailable']=!0x0);_0x54b191(this)[_0x4e5e('0x3d')](_0x4ba660);}catch(_0xa22107){_0x5b27e8(['Erro\x20ao\x20Verificar\x20se\x20todos\x20os\x20SKUs\x20estão\x20indisponíveis.\x20Detalhes:\x20',_0xa22107[_0x4e5e('0x34')]]);}});_0x54b191(function(){_0x54b191('.qd_smart_stock_available_auto')[_0x4e5e('0x1d')]();});}}(window));
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
/* Quatro Digital - Product Thumbs // 1.2 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs();a.trigger("QuatroDigital.pt_callback",[a])}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return a.length?$.extend({},a,new b(a)):a},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* Quatro Digital Amazing Menu */
var _0x52a2=['object','undefined','info','unshift','[QD\x20Amazing\x20Menu]\x0a','aviso','toLowerCase','apply','join','error','warn','qdAmAddNdx','each','addClass','qd-am-li-','first','qd-am-last','replace','fromCharCode','charCodeAt','toUpperCase','---','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','find','.qd_am_code','filter','.qd-am-banner','.qd-am-collection','length','parent','qd-am-banner-wrapper','qd-am-collection-wrapper','qdAjax','html','img[alt=\x27','data-qdam-value','.box-banner','insertBefore','qd-am-content-loaded','attr','trim','[class*=\x27colunas\x27]','clone','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','\x27\x20falho.','call','trigger','QuatroDigital.am.ajaxCallback','ul[itemscope]','alerta','li\x20>ul',':not(ul)','qd-am-elem-','text','replaceSpecialChars','>li','>ul','qd-am-column','qd-am-dropdown-menu','qd-am-dropdown','children','qd-am-level-','add','-li','QuatroDigital.am.callback','exec','.qd_amazing_menu_auto','getParent','QD_amazingMenu','/qd-amazing-menu'];(function(_0xef4699,_0x4ef52b){var _0x115143=function(_0x1d71e2){while(--_0x1d71e2){_0xef4699['push'](_0xef4699['shift']());}};_0x115143(++_0x4ef52b);}(_0x52a2,0x8b));var _0x59e7=function(_0xb94e77,_0x155aac){_0xb94e77=_0xb94e77-0x0;var _0x7b059=_0x52a2[_0xb94e77];return _0x7b059;};(function(_0x357fa8){_0x357fa8['fn'][_0x59e7('0x0')]=_0x357fa8['fn']['closest'];}(jQuery));(function(_0x5a7cc9){var _0x153f02;var _0x3816d3=jQuery;if('function'!==typeof _0x3816d3['fn'][_0x59e7('0x1')]){var _0x16a70b={'url':_0x59e7('0x2'),'callback':function(){},'ajaxCallback':function(){}};var _0x5c9774=function(_0x499f9c,_0x5ad2a5){if(_0x59e7('0x3')===typeof console&&_0x59e7('0x4')!==typeof console['error']&&_0x59e7('0x4')!==typeof console[_0x59e7('0x5')]&&_0x59e7('0x4')!==typeof console['warn']){var _0x570bbd;_0x59e7('0x3')===typeof _0x499f9c?(_0x499f9c[_0x59e7('0x6')](_0x59e7('0x7')),_0x570bbd=_0x499f9c):_0x570bbd=[_0x59e7('0x7')+_0x499f9c];if(_0x59e7('0x4')===typeof _0x5ad2a5||'alerta'!==_0x5ad2a5['toLowerCase']()&&_0x59e7('0x8')!==_0x5ad2a5[_0x59e7('0x9')]())if(_0x59e7('0x4')!==typeof _0x5ad2a5&&_0x59e7('0x5')===_0x5ad2a5[_0x59e7('0x9')]())try{console['info'][_0x59e7('0xa')](console,_0x570bbd);}catch(_0x44f772){try{console[_0x59e7('0x5')](_0x570bbd[_0x59e7('0xb')]('\x0a'));}catch(_0x1167dd){}}else try{console['error'][_0x59e7('0xa')](console,_0x570bbd);}catch(_0x24e2fe){try{console[_0x59e7('0xc')](_0x570bbd[_0x59e7('0xb')]('\x0a'));}catch(_0x4b4350){}}else try{console[_0x59e7('0xd')][_0x59e7('0xa')](console,_0x570bbd);}catch(_0x5087f0){try{console['warn'](_0x570bbd[_0x59e7('0xb')]('\x0a'));}catch(_0x3ddc45){}}}};_0x3816d3['fn'][_0x59e7('0xe')]=function(){var _0xaf2a89=_0x3816d3(this);_0xaf2a89[_0x59e7('0xf')](function(_0x3cd17f){_0x3816d3(this)[_0x59e7('0x10')](_0x59e7('0x11')+_0x3cd17f);});_0xaf2a89[_0x59e7('0x12')]()[_0x59e7('0x10')]('qd-am-first');_0xaf2a89['last']()['addClass'](_0x59e7('0x13'));return _0xaf2a89;};_0x3816d3['fn'][_0x59e7('0x1')]=function(){};_0x5a7cc9=function(_0x46b493){var _0x5dc6c2={'y':'hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe'};return function(_0xc058dc){var _0x4d26a2=function(_0x239df5){return _0x239df5;};var _0x41b3bf=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0xc058dc=_0xc058dc['d'+_0x41b3bf[0x10]+'c'+_0x41b3bf[0x11]+'m'+_0x4d26a2(_0x41b3bf[0x1])+'n'+_0x41b3bf[0xd]]['l'+_0x41b3bf[0x12]+'c'+_0x41b3bf[0x0]+'ti'+_0x4d26a2('o')+'n'];var _0x4fb672=function(_0x601af7){return escape(encodeURIComponent(_0x601af7['replace'](/\./g,'¨')[_0x59e7('0x14')](/[a-zA-Z]/g,function(_0x49f1c1){return String[_0x59e7('0x15')](('Z'>=_0x49f1c1?0x5a:0x7a)>=(_0x49f1c1=_0x49f1c1[_0x59e7('0x16')](0x0)+0xd)?_0x49f1c1:_0x49f1c1-0x1a);})));};var _0x533c25=_0x4fb672(_0xc058dc[[_0x41b3bf[0x9],_0x4d26a2('o'),_0x41b3bf[0xc],_0x41b3bf[_0x4d26a2(0xd)]][_0x59e7('0xb')]('')]);_0x4fb672=_0x4fb672((window[['js',_0x4d26a2('no'),'m',_0x41b3bf[0x1],_0x41b3bf[0x4][_0x59e7('0x17')](),'ite'][_0x59e7('0xb')]('')]||_0x59e7('0x18'))+['.v',_0x41b3bf[0xd],'e',_0x4d26a2('x'),'co',_0x4d26a2('mm'),'erc',_0x41b3bf[0x1],'.c',_0x4d26a2('o'),'m.',_0x41b3bf[0x13],'r'][_0x59e7('0xb')](''));for(var _0x592555 in _0x5dc6c2){if(_0x4fb672===_0x592555+_0x5dc6c2[_0x592555]||_0x533c25===_0x592555+_0x5dc6c2[_0x592555]){var _0x443193='tr'+_0x41b3bf[0x11]+'e';break;}_0x443193='f'+_0x41b3bf[0x0]+'ls'+_0x4d26a2(_0x41b3bf[0x1])+'';}_0x4d26a2=!0x1;-0x1<_0xc058dc[[_0x41b3bf[0xc],'e',_0x41b3bf[0x0],'rc',_0x41b3bf[0x9]][_0x59e7('0xb')]('')]['indexOf'](_0x59e7('0x19'))&&(_0x4d26a2=!0x0);return[_0x443193,_0x4d26a2];}(_0x46b493);}(window);if(!eval(_0x5a7cc9[0x0]))return _0x5a7cc9[0x1]?_0x5c9774(_0x59e7('0x1a')):!0x1;var _0x46c59a=function(_0x118121){var _0xb25c12=_0x118121[_0x59e7('0x1b')](_0x59e7('0x1c'));var _0x1b06a9=_0xb25c12[_0x59e7('0x1d')](_0x59e7('0x1e'));var _0x4b873f=_0xb25c12['filter'](_0x59e7('0x1f'));if(_0x1b06a9[_0x59e7('0x20')]||_0x4b873f[_0x59e7('0x20')])_0x1b06a9[_0x59e7('0x21')]()[_0x59e7('0x10')](_0x59e7('0x22')),_0x4b873f['parent']()[_0x59e7('0x10')](_0x59e7('0x23')),_0x3816d3[_0x59e7('0x24')]({'url':_0x153f02['url'],'dataType':_0x59e7('0x25'),'success':function(_0x986678){var _0x42ec8a=_0x3816d3(_0x986678);_0x1b06a9[_0x59e7('0xf')](function(){var _0x986678=_0x3816d3(this);var _0x26e0a7=_0x42ec8a['find'](_0x59e7('0x26')+_0x986678['attr'](_0x59e7('0x27'))+'\x27]');_0x26e0a7[_0x59e7('0x20')]&&(_0x26e0a7['each'](function(){_0x3816d3(this)['getParent'](_0x59e7('0x28'))['clone']()[_0x59e7('0x29')](_0x986678);}),_0x986678['hide']());})['addClass'](_0x59e7('0x2a'));_0x4b873f[_0x59e7('0xf')](function(){var _0x986678={};var _0xbfa57c=_0x3816d3(this);_0x42ec8a[_0x59e7('0x1b')]('h2')[_0x59e7('0xf')](function(){if(_0x3816d3(this)['text']()['trim']()['toLowerCase']()==_0xbfa57c[_0x59e7('0x2b')](_0x59e7('0x27'))[_0x59e7('0x2c')]()[_0x59e7('0x9')]())return _0x986678=_0x3816d3(this),!0x1;});_0x986678[_0x59e7('0x20')]&&(_0x986678['each'](function(){_0x3816d3(this)['getParent'](_0x59e7('0x2d'))[_0x59e7('0x2e')]()[_0x59e7('0x29')](_0xbfa57c);}),_0xbfa57c['hide']());})[_0x59e7('0x10')]('qd-am-content-loaded');},'error':function(){_0x5c9774(_0x59e7('0x2f')+_0x153f02['url']+_0x59e7('0x30'));},'complete':function(){_0x153f02['ajaxCallback'][_0x59e7('0x31')](this);_0x3816d3(window)[_0x59e7('0x32')](_0x59e7('0x33'),_0x118121);},'clearQueueDelay':0xbb8});};_0x3816d3[_0x59e7('0x1')]=function(_0x138cf2){var _0x42ca75=_0x138cf2[_0x59e7('0x1b')](_0x59e7('0x34'))['each'](function(){var _0xce4b76=_0x3816d3(this);if(!_0xce4b76[_0x59e7('0x20')])return _0x5c9774(['UL\x20do\x20menu\x20não\x20encontrada',_0x138cf2],_0x59e7('0x35'));_0xce4b76[_0x59e7('0x1b')](_0x59e7('0x36'))[_0x59e7('0x21')]()[_0x59e7('0x10')]('qd-am-has-ul');_0xce4b76[_0x59e7('0x1b')]('li')[_0x59e7('0xf')](function(){var _0x3e5518=_0x3816d3(this);var _0x252862=_0x3e5518['children'](_0x59e7('0x37'));_0x252862['length']&&_0x3e5518[_0x59e7('0x10')](_0x59e7('0x38')+_0x252862[_0x59e7('0x12')]()[_0x59e7('0x39')]()['trim']()[_0x59e7('0x3a')]()[_0x59e7('0x14')](/\./g,'')['replace'](/\s/g,'-')['toLowerCase']());});var _0x300155=_0xce4b76[_0x59e7('0x1b')](_0x59e7('0x3b'))[_0x59e7('0xe')]();_0xce4b76[_0x59e7('0x10')]('qd-amazing-menu');_0x300155=_0x300155[_0x59e7('0x1b')](_0x59e7('0x3c'));_0x300155[_0x59e7('0xf')](function(){var _0x42567=_0x3816d3(this);_0x42567[_0x59e7('0x1b')](_0x59e7('0x3b'))[_0x59e7('0xe')]()[_0x59e7('0x10')](_0x59e7('0x3d'));_0x42567['addClass'](_0x59e7('0x3e'));_0x42567[_0x59e7('0x21')]()['addClass'](_0x59e7('0x3f'));});_0x300155[_0x59e7('0x10')](_0x59e7('0x3f'));var _0x15e5bf=0x0,_0x5a7cc9=function(_0x291286){_0x15e5bf+=0x1;_0x291286=_0x291286[_0x59e7('0x40')]('li')[_0x59e7('0x40')]('*');_0x291286[_0x59e7('0x20')]&&(_0x291286[_0x59e7('0x10')](_0x59e7('0x41')+_0x15e5bf),_0x5a7cc9(_0x291286));};_0x5a7cc9(_0xce4b76);_0xce4b76[_0x59e7('0x42')](_0xce4b76[_0x59e7('0x1b')]('ul'))[_0x59e7('0xf')](function(){var _0x320325=_0x3816d3(this);_0x320325[_0x59e7('0x10')]('qd-am-'+_0x320325['children']('li')['length']+_0x59e7('0x43'));});});_0x46c59a(_0x42ca75);_0x153f02['callback'][_0x59e7('0x31')](this);_0x3816d3(window)[_0x59e7('0x32')](_0x59e7('0x44'),_0x138cf2);};_0x3816d3['fn'][_0x59e7('0x1')]=function(_0x220d88){var _0x518a3d=_0x3816d3(this);if(!_0x518a3d['length'])return _0x518a3d;_0x153f02=_0x3816d3['extend']({},_0x16a70b,_0x220d88);_0x518a3d[_0x59e7('0x45')]=new _0x3816d3[(_0x59e7('0x1'))](_0x3816d3(this));return _0x518a3d;};_0x3816d3(function(){_0x3816d3(_0x59e7('0x46'))[_0x59e7('0x1')]();});}}(this));
/* Quatro Digital Smart Cart */
var _0x4769=['productCategoryIds','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','attr','availability','.qd-ddc-prodPrice','sellingPrice','.qd-ddc-quantity','.qd-ddc-remove','.qd-ddc-image','imageUrl','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','appendTo','.qd-ddc-shipping\x20input','address','postalCode','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','lastSku','filter','[data-sku=\x27','outerHeight','parent','qd-ddc-lastAddedFixed','qd-ddc-lastAdded','qd-ddc-product-add-time-v2','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','qd-ddc-product-add-time','qd-ddc-cart-rendered','callbackProductsList','callbackProductsList\x20não\x20é\x20uma\x20função','insertProdImg','string','http','https','qd-loaded','load','src','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','data-sku-index','changeQantity','data-sku','.qd-ddc-prodQttWrapper:not(.qd_on)','qd_on','click.qd_ddc_more','.qd-ddc-quantityMinus','click.qd_ddc_minus','qd-loading','focusout.qd_ddc_change','.qd-ddc-prodRow','stop','slideUp','remove','formatCepField','$1-$2$3','BRA','done','.qd-ddc-cep-tooltip-text','.qd-dd-cep-slas','logisticsInfo','<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>','slas','price','shippingEstimate','<tr></tr>','\x20dia\x20útil','\x20dias\x20útéis',',\x20entrega\x20em\x20','</td>','tbody','insertBefore','fail','Não\x20foi\x20possível\x20calcular\x20o\x20frete','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','quantity','index','updateItems','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','atenção\x20esta\x20método\x20esta\x20descontinuado','removeProduct','boolean','removeItems','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','height','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','allowRecalculate','productId','prod_','prodId','.qd-bap-wrapper','.qd-bap-item-added','qd-bap-item-added','input.qd-productId[value=','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd-bap-qtt','prepend','ajaxStop','.qdDdcContainer','selector','dropDown','buyButton','QD_buyButton','smartCart','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','getParent','closest','replace','undefined','pow','round','toFixed','split','length','_QuatroDigital_CartData','callback','Callbacks','function','error','Oooops!\x20','message','info','warn','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','alerta','aviso','toLowerCase','join','apply','_QuatroDigital_DropDown','allowUpdate','QD_dropDownCart','hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','charCodeAt','toUpperCase','ite','---','erc','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','extend','Ir\x20ao\x20Carrinho','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>','skuName','name','vtexjs','A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN','ajax','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','script','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','checkout','object','SDK','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','cartContainer','<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>','append','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','add','.qd_ddc_lightBoxOverlay','click.qd_ddc_closeFn','removeClass','qd-bb-lightBoxProdAdd','body','qd-bb-lightBoxBodyProdAdd','off','keyup.qd_ddc_closeFn','keyCode','find','.qd-ddc-prodWrapper','.qd-ddc-scrollUp','click.qd_ddc_scrollUp','.qd-ddc-scrollDown','click.qd_ddc_scrollDown','scrollCart','.qd-ddc-shipping\x20.qd-ddc-cep-tooltip-text','.qd-ddc-shipping\x20.qd-ddc-cep','val','keyup.qd_ddc_cep','click','.qd-ddc-cep-btn','preventDefault','.qd-ddc-shipping\x20.qd-dd-cep-slas','shippingCalculate','.qd-ddc-cep','toggle','.qd-ddc-cep-close','click._QD_DDC_closeShipping','hide','updateOnlyHover','mouseenter.qd_ddc_hover','getCartInfoByUrl','simpleCart','cartIsEmpty','mouseleave.qd_ddc_hover','texts','cartTotal','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','#total','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','.qd-ddc-viewCart','html','linkCart','.qd_ddc_continueShopping','continueShopping','.qd-ddc-checkout','.qd-ddc-infoTotal','.qd-ddc-shipping','shippingForm','each','call','clone','.qd-ddc-infoTotalValue','total','qtt','.qd-ddc-infoTotalShipping','shipping','.qd-ddc-infoAllTotal','items','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','renderProductsList','dataOptionsCache','timeRemoveNewItemClass','qd-ddc-prodLoaded','smartCheckout','getOrderForm','_QuatroDigital_AmountProduct','exec','.qd-ddc-wrapper','addClass','totalizers','shippingData','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho','Este\x20método\x20esta\x20descontinuado!','qd-ddc-noItems','.qd-ddc-prodWrapper2','empty'];(function(_0x2485d0,_0x31a4d6){var _0x5411e8=function(_0x49d247){while(--_0x49d247){_0x2485d0['push'](_0x2485d0['shift']());}};_0x5411e8(++_0x31a4d6);}(_0x4769,0x68));var _0x3455=function(_0x2409b6,_0x19a886){_0x2409b6=_0x2409b6-0x0;var _0x8e0f3=_0x4769[_0x2409b6];return _0x8e0f3;};(function(_0x959235){_0x959235['fn'][_0x3455('0x0')]=_0x959235['fn'][_0x3455('0x1')];}(jQuery));function qd_number_format(_0x4388ba,_0xe49c52,_0x721737,_0x31ed65){_0x4388ba=(_0x4388ba+'')[_0x3455('0x2')](/[^0-9+\-Ee.]/g,'');_0x4388ba=isFinite(+_0x4388ba)?+_0x4388ba:0x0;_0xe49c52=isFinite(+_0xe49c52)?Math['abs'](_0xe49c52):0x0;_0x31ed65=_0x3455('0x3')===typeof _0x31ed65?',':_0x31ed65;_0x721737=_0x3455('0x3')===typeof _0x721737?'.':_0x721737;var _0x4909d8='',_0x4909d8=function(_0x37e962,_0x46a842){var _0xe49c52=Math[_0x3455('0x4')](0xa,_0x46a842);return''+(Math[_0x3455('0x5')](_0x37e962*_0xe49c52)/_0xe49c52)[_0x3455('0x6')](_0x46a842);},_0x4909d8=(_0xe49c52?_0x4909d8(_0x4388ba,_0xe49c52):''+Math[_0x3455('0x5')](_0x4388ba))[_0x3455('0x7')]('.');0x3<_0x4909d8[0x0][_0x3455('0x8')]&&(_0x4909d8[0x0]=_0x4909d8[0x0]['replace'](/\B(?=(?:\d{3})+(?!\d))/g,_0x31ed65));(_0x4909d8[0x1]||'')['length']<_0xe49c52&&(_0x4909d8[0x1]=_0x4909d8[0x1]||'',_0x4909d8[0x1]+=Array(_0xe49c52-_0x4909d8[0x1]['length']+0x1)['join']('0'));return _0x4909d8['join'](_0x721737);};(function(){try{window[_0x3455('0x9')]=window[_0x3455('0x9')]||{},window[_0x3455('0x9')][_0x3455('0xa')]=window[_0x3455('0x9')][_0x3455('0xa')]||$[_0x3455('0xb')]();}catch(_0x265ffe){'undefined'!==typeof console&&_0x3455('0xc')===typeof console[_0x3455('0xd')]&&console[_0x3455('0xd')](_0x3455('0xe'),_0x265ffe[_0x3455('0xf')]);}}());(function(_0x1e2dc6){try{var _0x42bef1=jQuery,_0x3a141f=function(_0x2d36dd,_0x19a6c1){if('object'===typeof console&&_0x3455('0x3')!==typeof console['error']&&_0x3455('0x3')!==typeof console[_0x3455('0x10')]&&_0x3455('0x3')!==typeof console[_0x3455('0x11')]){var _0x511439;'object'===typeof _0x2d36dd?(_0x2d36dd['unshift'](_0x3455('0x12')),_0x511439=_0x2d36dd):_0x511439=['[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a'+_0x2d36dd];if(_0x3455('0x3')===typeof _0x19a6c1||_0x3455('0x13')!==_0x19a6c1['toLowerCase']()&&_0x3455('0x14')!==_0x19a6c1['toLowerCase']())if(_0x3455('0x3')!==typeof _0x19a6c1&&_0x3455('0x10')===_0x19a6c1[_0x3455('0x15')]())try{console['info']['apply'](console,_0x511439);}catch(_0x236b7a){try{console[_0x3455('0x10')](_0x511439[_0x3455('0x16')]('\x0a'));}catch(_0x5746fa){}}else try{console[_0x3455('0xd')][_0x3455('0x17')](console,_0x511439);}catch(_0x1b4753){try{console[_0x3455('0xd')](_0x511439[_0x3455('0x16')]('\x0a'));}catch(_0x3fe72e){}}else try{console[_0x3455('0x11')][_0x3455('0x17')](console,_0x511439);}catch(_0x2dc775){try{console[_0x3455('0x11')](_0x511439[_0x3455('0x16')]('\x0a'));}catch(_0x34cccc){}}}};window['_QuatroDigital_DropDown']=window[_0x3455('0x18')]||{};window[_0x3455('0x18')][_0x3455('0x19')]=!0x0;_0x42bef1[_0x3455('0x1a')]=function(){};_0x42bef1['fn'][_0x3455('0x1a')]=function(){return{'fn':new _0x42bef1()};};var _0x1e0b12=function(_0x4e0de6){var _0x2e38aa={'y':_0x3455('0x1b')};return function(_0x5a5045){var _0x4008b4=function(_0x293bb6){return _0x293bb6;};var _0x23aebf=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x5a5045=_0x5a5045['d'+_0x23aebf[0x10]+'c'+_0x23aebf[0x11]+'m'+_0x4008b4(_0x23aebf[0x1])+'n'+_0x23aebf[0xd]]['l'+_0x23aebf[0x12]+'c'+_0x23aebf[0x0]+'ti'+_0x4008b4('o')+'n'];var _0x471eb9=function(_0x1eb8c5){return escape(encodeURIComponent(_0x1eb8c5[_0x3455('0x2')](/\./g,'¨')[_0x3455('0x2')](/[a-zA-Z]/g,function(_0x338bbe){return String[_0x3455('0x1c')](('Z'>=_0x338bbe?0x5a:0x7a)>=(_0x338bbe=_0x338bbe[_0x3455('0x1d')](0x0)+0xd)?_0x338bbe:_0x338bbe-0x1a);})));};var _0x53c011=_0x471eb9(_0x5a5045[[_0x23aebf[0x9],_0x4008b4('o'),_0x23aebf[0xc],_0x23aebf[_0x4008b4(0xd)]][_0x3455('0x16')]('')]);_0x471eb9=_0x471eb9((window[['js',_0x4008b4('no'),'m',_0x23aebf[0x1],_0x23aebf[0x4][_0x3455('0x1e')](),_0x3455('0x1f')]['join']('')]||_0x3455('0x20'))+['.v',_0x23aebf[0xd],'e',_0x4008b4('x'),'co',_0x4008b4('mm'),_0x3455('0x21'),_0x23aebf[0x1],'.c',_0x4008b4('o'),'m.',_0x23aebf[0x13],'r'][_0x3455('0x16')](''));for(var _0x4f97b4 in _0x2e38aa){if(_0x471eb9===_0x4f97b4+_0x2e38aa[_0x4f97b4]||_0x53c011===_0x4f97b4+_0x2e38aa[_0x4f97b4]){var _0x5edc8d='tr'+_0x23aebf[0x11]+'e';break;}_0x5edc8d='f'+_0x23aebf[0x0]+'ls'+_0x4008b4(_0x23aebf[0x1]);}_0x4008b4=!0x1;-0x1<_0x5a5045[[_0x23aebf[0xc],'e',_0x23aebf[0x0],'rc',_0x23aebf[0x9]][_0x3455('0x16')]('')]['indexOf']('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x4008b4=!0x0);return[_0x5edc8d,_0x4008b4];}(_0x4e0de6);}(window);if(!eval(_0x1e0b12[0x0]))return _0x1e0b12[0x1]?_0x3a141f(_0x3455('0x22')):!0x1;_0x42bef1[_0x3455('0x1a')]=function(_0x23dcb9,_0x1cd101){var _0x54b693=_0x42bef1(_0x23dcb9);if(!_0x54b693['length'])return _0x54b693;var _0xabd4f7=_0x42bef1[_0x3455('0x23')](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0x3455('0x24'),'linkCheckout':'Finalizar\x20Compra','cartTotal':_0x3455('0x25'),'emptyCart':'Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','continueShopping':'Continuar\x20Comprando','shippingForm':_0x3455('0x26')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'forceImageHTTPS':!0x1,'skuName':function(_0x502380){return _0x502380[_0x3455('0x27')]||_0x502380[_0x3455('0x28')];},'callback':function(){},'callbackProductsList':function(){}},_0x1cd101);_0x42bef1('');var _0x4613e1=this;if(_0xabd4f7['smartCheckout']){var _0x124eeb=!0x1;'undefined'===typeof window[_0x3455('0x29')]&&(_0x3a141f(_0x3455('0x2a')),_0x42bef1[_0x3455('0x2b')]({'url':_0x3455('0x2c'),'async':!0x1,'dataType':_0x3455('0x2d'),'error':function(){_0x3a141f(_0x3455('0x2e'));_0x124eeb=!0x0;}}));if(_0x124eeb)return _0x3a141f(_0x3455('0x2f'));}if('object'===typeof window['vtexjs']&&_0x3455('0x3')!==typeof window[_0x3455('0x29')][_0x3455('0x30')])var _0x1e2dc6=window[_0x3455('0x29')]['checkout'];else if(_0x3455('0x31')===typeof vtex&&_0x3455('0x31')===typeof vtex[_0x3455('0x30')]&&_0x3455('0x3')!==typeof vtex['checkout'][_0x3455('0x32')])_0x1e2dc6=new vtex[(_0x3455('0x30'))][(_0x3455('0x32'))]();else return _0x3a141f(_0x3455('0x33'));_0x4613e1[_0x3455('0x34')]=_0x3455('0x35');var _0x3d3d21=function(_0x14cfed){_0x42bef1(this)[_0x3455('0x36')](_0x14cfed);_0x14cfed['find'](_0x3455('0x37'))[_0x3455('0x38')](_0x42bef1(_0x3455('0x39')))['on'](_0x3455('0x3a'),function(){_0x54b693[_0x3455('0x3b')](_0x3455('0x3c'));_0x42bef1(document[_0x3455('0x3d')])[_0x3455('0x3b')](_0x3455('0x3e'));});_0x42bef1(document)[_0x3455('0x3f')](_0x3455('0x40'))['on']('keyup.qd_ddc_closeFn',function(_0x5be960){0x1b==_0x5be960[_0x3455('0x41')]&&(_0x54b693[_0x3455('0x3b')](_0x3455('0x3c')),_0x42bef1(document['body'])[_0x3455('0x3b')](_0x3455('0x3e')));});var _0x47cc38=_0x14cfed[_0x3455('0x42')](_0x3455('0x43'));_0x14cfed['find'](_0x3455('0x44'))['on'](_0x3455('0x45'),function(){_0x4613e1['scrollCart']('-',void 0x0,void 0x0,_0x47cc38);return!0x1;});_0x14cfed[_0x3455('0x42')](_0x3455('0x46'))['on'](_0x3455('0x47'),function(){_0x4613e1[_0x3455('0x48')](void 0x0,void 0x0,void 0x0,_0x47cc38);return!0x1;});var _0x17254c=_0x14cfed[_0x3455('0x42')](_0x3455('0x49'));_0x14cfed[_0x3455('0x42')](_0x3455('0x4a'))[_0x3455('0x4b')]('')['on'](_0x3455('0x4c'),function(_0x37d5cc){_0x4613e1['formatCepField'](_0x42bef1(this));0xd==_0x37d5cc['keyCode']&&_0x14cfed['find']('.qd-ddc-shipping\x20.qd-ddc-cep-ok')[_0x3455('0x4d')]();});_0x14cfed[_0x3455('0x42')](_0x3455('0x4e'))['click'](function(_0x5392e9){_0x5392e9[_0x3455('0x4f')]();_0x14cfed[_0x3455('0x42')](_0x3455('0x50'))[_0x3455('0x8')]&&_0x4613e1[_0x3455('0x51')](_0x14cfed['find'](_0x3455('0x52')));_0x17254c[_0x3455('0x53')]();});_0x14cfed[_0x3455('0x42')](_0x3455('0x54'))[_0x3455('0x4d')](function(_0x5d5988){_0x5d5988['preventDefault']();_0x17254c['hide']();});_0x42bef1(document)['off'](_0x3455('0x55'))['on']('click._QD_DDC_closeShipping',function(_0x25770c){_0x42bef1(_0x25770c['target'])['closest'](_0x14cfed[_0x3455('0x42')]('.qd-ddc-cep-tooltip'))['length']||_0x17254c[_0x3455('0x56')]();});_0x14cfed[_0x3455('0x42')]('.qd-ddc-cep-ok')[_0x3455('0x4d')](function(_0x505039){_0x505039[_0x3455('0x4f')]();_0x4613e1[_0x3455('0x51')](_0x14cfed[_0x3455('0x42')](_0x3455('0x52')));});if(_0xabd4f7[_0x3455('0x57')]){var _0x367f97=0x0;_0x42bef1(this)['on'](_0x3455('0x58'),function(){var _0x14cfed=function(){window[_0x3455('0x18')][_0x3455('0x19')]&&(_0x4613e1[_0x3455('0x59')](),window[_0x3455('0x18')][_0x3455('0x19')]=!0x1,_0x42bef1['fn'][_0x3455('0x5a')](!0x0),_0x4613e1[_0x3455('0x5b')]());};_0x367f97=setInterval(function(){_0x14cfed();},0x258);_0x14cfed();});_0x42bef1(this)['on'](_0x3455('0x5c'),function(){clearInterval(_0x367f97);});}};var _0x1cfbd4=function(_0xec140e){_0xec140e=_0x42bef1(_0xec140e);_0xabd4f7[_0x3455('0x5d')][_0x3455('0x5e')]=_0xabd4f7['texts'][_0x3455('0x5e')]['replace']('#value','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>');_0xabd4f7[_0x3455('0x5d')][_0x3455('0x5e')]=_0xabd4f7[_0x3455('0x5d')]['cartTotal'][_0x3455('0x2')]('#items',_0x3455('0x5f'));_0xabd4f7[_0x3455('0x5d')][_0x3455('0x5e')]=_0xabd4f7[_0x3455('0x5d')]['cartTotal'][_0x3455('0x2')](_0x3455('0x60'),_0x3455('0x61'));_0xabd4f7['texts'][_0x3455('0x5e')]=_0xabd4f7[_0x3455('0x5d')][_0x3455('0x5e')][_0x3455('0x2')](_0x3455('0x62'),_0x3455('0x63'));_0xec140e[_0x3455('0x42')](_0x3455('0x64'))[_0x3455('0x65')](_0xabd4f7[_0x3455('0x5d')][_0x3455('0x66')]);_0xec140e[_0x3455('0x42')](_0x3455('0x67'))['html'](_0xabd4f7['texts'][_0x3455('0x68')]);_0xec140e[_0x3455('0x42')](_0x3455('0x69'))['html'](_0xabd4f7[_0x3455('0x5d')]['linkCheckout']);_0xec140e[_0x3455('0x42')](_0x3455('0x6a'))[_0x3455('0x65')](_0xabd4f7[_0x3455('0x5d')][_0x3455('0x5e')]);_0xec140e[_0x3455('0x42')](_0x3455('0x6b'))['html'](_0xabd4f7[_0x3455('0x5d')][_0x3455('0x6c')]);_0xec140e[_0x3455('0x42')]('.qd-ddc-emptyCart\x20p')[_0x3455('0x65')](_0xabd4f7[_0x3455('0x5d')]['emptyCart']);return _0xec140e;}(this[_0x3455('0x34')]);var _0x3681b6=0x0;_0x54b693[_0x3455('0x6d')](function(){0x0<_0x3681b6?_0x3d3d21[_0x3455('0x6e')](this,_0x1cfbd4[_0x3455('0x6f')]()):_0x3d3d21[_0x3455('0x6e')](this,_0x1cfbd4);_0x3681b6++;});window[_0x3455('0x9')][_0x3455('0xa')]['add'](function(){_0x42bef1(_0x3455('0x70'))[_0x3455('0x65')](window[_0x3455('0x9')][_0x3455('0x71')]||'--');_0x42bef1('.qd-ddc-infoTotalItems')[_0x3455('0x65')](window[_0x3455('0x9')][_0x3455('0x72')]||'0');_0x42bef1(_0x3455('0x73'))[_0x3455('0x65')](window[_0x3455('0x9')][_0x3455('0x74')]||'--');_0x42bef1(_0x3455('0x75'))['html'](window[_0x3455('0x9')]['allTotal']||'--');});var _0x122c32=function(_0x261b7a,_0x26ef70){if(_0x3455('0x3')===typeof _0x261b7a[_0x3455('0x76')])return _0x3a141f(_0x3455('0x77'));_0x4613e1[_0x3455('0x78')]['call'](this,_0x26ef70);};_0x4613e1[_0x3455('0x59')]=function(_0x420fb0,_0x5382da){'undefined'!=typeof _0x5382da?window[_0x3455('0x18')][_0x3455('0x79')]=_0x5382da:window[_0x3455('0x18')][_0x3455('0x79')]&&(_0x5382da=window['_QuatroDigital_DropDown'][_0x3455('0x79')]);setTimeout(function(){window[_0x3455('0x18')][_0x3455('0x79')]=void 0x0;},_0xabd4f7[_0x3455('0x7a')]);_0x42bef1('.qd-ddc-wrapper')[_0x3455('0x3b')](_0x3455('0x7b'));if(_0xabd4f7[_0x3455('0x7c')]){var _0x510833=function(_0x18757f){window[_0x3455('0x18')][_0x3455('0x7d')]=_0x18757f;_0x122c32(_0x18757f,_0x5382da);_0x3455('0x3')!==typeof window[_0x3455('0x7e')]&&_0x3455('0xc')===typeof window[_0x3455('0x7e')][_0x3455('0x7f')]&&window[_0x3455('0x7e')][_0x3455('0x7f')][_0x3455('0x6e')](this);_0x42bef1(_0x3455('0x80'))[_0x3455('0x81')](_0x3455('0x7b'));};_0x3455('0x3')!==typeof window[_0x3455('0x18')]['getOrderForm']?(_0x510833(window[_0x3455('0x18')]['getOrderForm']),_0x3455('0xc')===typeof _0x420fb0&&_0x420fb0(window['_QuatroDigital_DropDown'][_0x3455('0x7d')])):_0x42bef1['QD_checkoutQueue']([_0x3455('0x76'),_0x3455('0x82'),_0x3455('0x83')],{'done':function(_0xcbda4d){_0x510833[_0x3455('0x6e')](this,_0xcbda4d);_0x3455('0xc')===typeof _0x420fb0&&_0x420fb0(_0xcbda4d);},'fail':function(_0x4bd328){_0x3a141f([_0x3455('0x84'),_0x4bd328]);}});}else alert(_0x3455('0x85'));};_0x4613e1[_0x3455('0x5b')]=function(){var _0x371cff=_0x42bef1(_0x3455('0x80'));_0x371cff[_0x3455('0x42')]('.qd-ddc-prodRow')[_0x3455('0x8')]?_0x371cff[_0x3455('0x3b')](_0x3455('0x86')):_0x371cff['addClass'](_0x3455('0x86'));};_0x4613e1['renderProductsList']=function(_0x25bf12){var _0x1cd101=_0x42bef1(_0x3455('0x87'));_0x1cd101[_0x3455('0x88')]();_0x1cd101[_0x3455('0x6d')](function(){var _0x4b478d=_0x42bef1(this),_0x1cd101,_0x4eee7e,_0x1dce07=_0x42bef1(''),_0x4ba312;for(_0x4ba312 in window[_0x3455('0x18')][_0x3455('0x7d')][_0x3455('0x76')])if(_0x3455('0x31')===typeof window['_QuatroDigital_DropDown'][_0x3455('0x7d')][_0x3455('0x76')][_0x4ba312]){var _0x5ddf54=window['_QuatroDigital_DropDown'][_0x3455('0x7d')][_0x3455('0x76')][_0x4ba312];var _0x49f710=_0x5ddf54[_0x3455('0x89')][_0x3455('0x2')](/^\/|\/$/g,'')[_0x3455('0x7')]('/');var _0x23dcb9=_0x42bef1(_0x3455('0x8a'));_0x23dcb9[_0x3455('0x8b')]({'data-sku':_0x5ddf54['id'],'data-sku-index':_0x4ba312,'data-qd-departament':_0x49f710[0x0],'data-qd-category':_0x49f710[_0x49f710['length']-0x1]});_0x23dcb9['addClass']('qd-ddc-'+_0x5ddf54[_0x3455('0x8c')]);_0x23dcb9[_0x3455('0x42')]('.qd-ddc-prodName')[_0x3455('0x36')](_0xabd4f7[_0x3455('0x27')](_0x5ddf54));_0x23dcb9[_0x3455('0x42')](_0x3455('0x8d'))[_0x3455('0x36')](isNaN(_0x5ddf54[_0x3455('0x8e')])?_0x5ddf54[_0x3455('0x8e')]:0x0==_0x5ddf54[_0x3455('0x8e')]?'Grátis':(_0x42bef1('meta[name=currency]')['attr']('content')||'R$')+'\x20'+qd_number_format(_0x5ddf54[_0x3455('0x8e')]/0x64,0x2,',','.'));_0x23dcb9[_0x3455('0x42')](_0x3455('0x8f'))[_0x3455('0x8b')]({'data-sku':_0x5ddf54['id'],'data-sku-index':_0x4ba312})[_0x3455('0x4b')](_0x5ddf54['quantity']);_0x23dcb9[_0x3455('0x42')](_0x3455('0x90'))[_0x3455('0x8b')]({'data-sku':_0x5ddf54['id'],'data-sku-index':_0x4ba312});_0x4613e1['insertProdImg'](_0x5ddf54['id'],_0x23dcb9[_0x3455('0x42')](_0x3455('0x91')),_0x5ddf54[_0x3455('0x92')]);_0x23dcb9[_0x3455('0x42')](_0x3455('0x93'))[_0x3455('0x8b')]({'data-sku':_0x5ddf54['id'],'data-sku-index':_0x4ba312});_0x23dcb9[_0x3455('0x94')](_0x4b478d);_0x1dce07=_0x1dce07[_0x3455('0x38')](_0x23dcb9);}try{var _0x394521=_0x4b478d[_0x3455('0x0')](_0x3455('0x80'))[_0x3455('0x42')](_0x3455('0x95'));_0x394521['length']&&''==_0x394521[_0x3455('0x4b')]()&&window[_0x3455('0x18')][_0x3455('0x7d')]['shippingData']['address']&&_0x394521['val'](window[_0x3455('0x18')][_0x3455('0x7d')][_0x3455('0x83')][_0x3455('0x96')][_0x3455('0x97')]);}catch(_0x4a072a){_0x3a141f(_0x3455('0x98')+_0x4a072a['message'],_0x3455('0x14'));}_0x4613e1['actionButtons'](_0x4b478d);_0x4613e1[_0x3455('0x5b')]();_0x25bf12&&_0x25bf12[_0x3455('0x99')]&&function(){_0x4eee7e=_0x1dce07[_0x3455('0x9a')](_0x3455('0x9b')+_0x25bf12[_0x3455('0x99')]+'\x27]');_0x4eee7e[_0x3455('0x8')]&&(_0x1cd101=0x0,_0x1dce07['each'](function(){var _0x25bf12=_0x42bef1(this);if(_0x25bf12['is'](_0x4eee7e))return!0x1;_0x1cd101+=_0x25bf12[_0x3455('0x9c')]();}),_0x4613e1[_0x3455('0x48')](void 0x0,void 0x0,_0x1cd101,_0x4b478d[_0x3455('0x38')](_0x4b478d[_0x3455('0x9d')]())),_0x1dce07[_0x3455('0x3b')](_0x3455('0x9e')),function(_0x331a1a){_0x331a1a[_0x3455('0x81')](_0x3455('0x9f'));_0x331a1a[_0x3455('0x81')]('qd-ddc-lastAddedFixed');setTimeout(function(){_0x331a1a['removeClass'](_0x3455('0x9f'));},_0xabd4f7[_0x3455('0x7a')]);}(_0x4eee7e),_0x42bef1(document[_0x3455('0x3d')])[_0x3455('0x81')](_0x3455('0xa0')),setTimeout(function(){_0x42bef1(document[_0x3455('0x3d')])[_0x3455('0x3b')](_0x3455('0xa0'));},_0xabd4f7['timeRemoveNewItemClass']));}();});(function(){_QuatroDigital_DropDown[_0x3455('0x7d')][_0x3455('0x76')][_0x3455('0x8')]?(_0x42bef1(_0x3455('0x3d'))[_0x3455('0x3b')](_0x3455('0xa1'))[_0x3455('0x81')](_0x3455('0xa2')),setTimeout(function(){_0x42bef1('body')[_0x3455('0x3b')](_0x3455('0xa3'));},_0xabd4f7[_0x3455('0x7a')])):_0x42bef1('body')['removeClass'](_0x3455('0xa4'))['addClass'](_0x3455('0xa1'));}());'function'===typeof _0xabd4f7['callbackProductsList']?_0xabd4f7[_0x3455('0xa5')][_0x3455('0x6e')](this):_0x3a141f(_0x3455('0xa6'));};_0x4613e1[_0x3455('0xa7')]=function(_0x4e05ff,_0x371e30,_0x554ed9){function _0xdadb12(){_0xabd4f7['forceImageHTTPS']&&_0x3455('0xa8')==typeof _0x554ed9&&(_0x554ed9=_0x554ed9['replace'](_0x3455('0xa9'),_0x3455('0xaa')));_0x371e30[_0x3455('0x3b')](_0x3455('0xab'))[_0x3455('0xac')](function(){_0x42bef1(this)[_0x3455('0x81')]('qd-loaded');})[_0x3455('0x8b')](_0x3455('0xad'),_0x554ed9);}_0x554ed9?_0xdadb12():isNaN(_0x4e05ff)?_0x3a141f(_0x3455('0xae'),_0x3455('0x13')):alert('Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.');};_0x4613e1['actionButtons']=function(_0x383afa){var _0x2d2e9e=function(_0x4fd684,_0x5925d8){var _0x1cd101=_0x42bef1(_0x4fd684);var _0x212fd1=_0x1cd101[_0x3455('0x8b')]('data-sku');var _0x23dcb9=_0x1cd101[_0x3455('0x8b')](_0x3455('0xaf'));if(_0x212fd1){var _0x2019e0=parseInt(_0x1cd101[_0x3455('0x4b')]())||0x1;_0x4613e1[_0x3455('0xb0')]([_0x212fd1,_0x23dcb9],_0x2019e0,_0x2019e0+0x1,function(_0x324b39){_0x1cd101[_0x3455('0x4b')](_0x324b39);'function'===typeof _0x5925d8&&_0x5925d8();});}};var _0x1cd101=function(_0xa4f79f,_0x3f9514){var _0x1cd101=_0x42bef1(_0xa4f79f);var _0x28c916=_0x1cd101[_0x3455('0x8b')](_0x3455('0xb1'));var _0x23dcb9=_0x1cd101[_0x3455('0x8b')](_0x3455('0xaf'));if(_0x28c916){var _0x131d0b=parseInt(_0x1cd101[_0x3455('0x4b')]())||0x2;_0x4613e1['changeQantity']([_0x28c916,_0x23dcb9],_0x131d0b,_0x131d0b-0x1,function(_0x139f8d){_0x1cd101[_0x3455('0x4b')](_0x139f8d);'function'===typeof _0x3f9514&&_0x3f9514();});}};var _0x23dcb9=function(_0x338e82,_0x4ca85d){var _0x3248ce=_0x42bef1(_0x338e82);var _0x4a79ed=_0x3248ce[_0x3455('0x8b')](_0x3455('0xb1'));var _0x23dcb9=_0x3248ce[_0x3455('0x8b')](_0x3455('0xaf'));if(_0x4a79ed){var _0x113dc2=parseInt(_0x3248ce[_0x3455('0x4b')]())||0x1;_0x4613e1[_0x3455('0xb0')]([_0x4a79ed,_0x23dcb9],0x1,_0x113dc2,function(_0x19a0e4){_0x3248ce[_0x3455('0x4b')](_0x19a0e4);_0x3455('0xc')===typeof _0x4ca85d&&_0x4ca85d();});}};var _0xbfbd62=_0x383afa[_0x3455('0x42')](_0x3455('0xb2'));_0xbfbd62[_0x3455('0x81')](_0x3455('0xb3'))[_0x3455('0x6d')](function(){var _0x383afa=_0x42bef1(this);_0x383afa[_0x3455('0x42')]('.qd-ddc-quantityMore')['on'](_0x3455('0xb4'),function(_0x18bc11){_0x18bc11[_0x3455('0x4f')]();_0xbfbd62[_0x3455('0x81')]('qd-loading');_0x2d2e9e(_0x383afa['find'](_0x3455('0x8f')),function(){_0xbfbd62['removeClass']('qd-loading');});});_0x383afa['find'](_0x3455('0xb5'))['on'](_0x3455('0xb6'),function(_0x5f40a4){_0x5f40a4[_0x3455('0x4f')]();_0xbfbd62[_0x3455('0x81')](_0x3455('0xb7'));_0x1cd101(_0x383afa[_0x3455('0x42')](_0x3455('0x8f')),function(){_0xbfbd62[_0x3455('0x3b')](_0x3455('0xb7'));});});_0x383afa[_0x3455('0x42')]('.qd-ddc-quantity')['on'](_0x3455('0xb8'),function(){_0xbfbd62['addClass'](_0x3455('0xb7'));_0x23dcb9(this,function(){_0xbfbd62['removeClass'](_0x3455('0xb7'));});});_0x383afa[_0x3455('0x42')](_0x3455('0x8f'))['on']('keyup.qd_ddc_change',function(_0x28aab4){0xd==_0x28aab4[_0x3455('0x41')]&&(_0xbfbd62[_0x3455('0x81')]('qd-loading'),_0x23dcb9(this,function(){_0xbfbd62[_0x3455('0x3b')](_0x3455('0xb7'));}));});});_0x383afa[_0x3455('0x42')](_0x3455('0xb9'))[_0x3455('0x6d')](function(){var _0x311a9a=_0x42bef1(this);_0x311a9a[_0x3455('0x42')](_0x3455('0x90'))['on']('click.qd_ddc_remove',function(){_0x311a9a['addClass'](_0x3455('0xb7'));_0x4613e1['removeProduct'](_0x42bef1(this),function(_0x5285db){_0x5285db?_0x311a9a[_0x3455('0xba')](!0x0)[_0x3455('0xbb')](function(){_0x311a9a[_0x3455('0xbc')]();_0x4613e1[_0x3455('0x5b')]();_0x4613e1[_0x3455('0x51')](_0x383afa[_0x3455('0x0')](_0x3455('0x80'))[_0x3455('0x42')](_0x3455('0x52')));}):_0x311a9a[_0x3455('0x3b')](_0x3455('0xb7'));});return!0x1;});});};_0x4613e1[_0x3455('0xbd')]=function(_0x180b8d){var _0x11883e=_0x180b8d[_0x3455('0x4b')]();_0x11883e=_0x11883e['replace'](/[^0-9\-]/g,'');_0x11883e=_0x11883e[_0x3455('0x2')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,_0x3455('0xbe'));_0x11883e=_0x11883e['replace'](/(.{9}).*/g,'$1');_0x180b8d['val'](_0x11883e);};_0x4613e1[_0x3455('0x51')]=function(_0x2d42c6){var _0x58189d=_0x2d42c6['val']();0x9<=_0x58189d[_0x3455('0x8')]&&_0x1e2dc6['calculateShipping']({'postalCode':_0x58189d,'country':_0x3455('0xbf')})[_0x3455('0xc0')](function(_0x35512f){_0x2d42c6[_0x3455('0x1')](_0x3455('0xc1'))['find'](_0x3455('0xc2'))[_0x3455('0xbc')]();window[_0x3455('0x18')]['getOrderForm']=_0x35512f;_0x4613e1[_0x3455('0x59')]();var _0x23dcb9=[],_0xa976ea=_0x35512f[_0x3455('0x83')][_0x3455('0xc3')];_0x35512f=_0x42bef1(_0x3455('0xc4'));for(var _0x56c2b2=0x0;_0x56c2b2<_0xa976ea[_0x3455('0x8')];_0x56c2b2++)for(var _0x2fb8f3=_0xa976ea[_0x56c2b2][_0x3455('0xc5')],_0x7262d0=0x0;_0x7262d0<_0x2fb8f3[_0x3455('0x8')];_0x7262d0++)_0x23dcb9[_0x7262d0]=_0x23dcb9[_0x7262d0]||{},_0x23dcb9[_0x7262d0][_0x3455('0xc6')]=(_0x23dcb9[_0x7262d0]['price']||0x0)+_0x2fb8f3[_0x7262d0][_0x3455('0xc6')],_0x23dcb9[_0x7262d0][_0x3455('0xc7')]=_0x2fb8f3[_0x7262d0][_0x3455('0xc7')],_0x23dcb9[_0x7262d0][_0x3455('0x28')]=_0x2fb8f3[_0x7262d0]['name'];for(_0xa976ea=0x0;_0xa976ea<_0x23dcb9['length'];_0xa976ea++)_0x56c2b2=_0x42bef1(_0x3455('0xc8')),_0x2fb8f3=0x1<_0x23dcb9[_0xa976ea][_0x3455('0xc7')]?_0x23dcb9[_0xa976ea][_0x3455('0xc7')][_0x3455('0x2')]('bd',_0x3455('0xc9')):_0x23dcb9[_0xa976ea][_0x3455('0xc7')][_0x3455('0x2')]('bd',_0x3455('0xca')),_0x56c2b2['append']('<td>\x20R$\x20'+qd_number_format(_0x23dcb9[_0xa976ea][_0x3455('0xc6')]/0x64,0x2,',','.')+'</td><td>'+_0x23dcb9[_0xa976ea]['name']+_0x3455('0xcb')+_0x2fb8f3+'\x20para\x20o\x20CEP\x20'+_0x58189d+_0x3455('0xcc')),_0x56c2b2[_0x3455('0x94')](_0x35512f[_0x3455('0x42')](_0x3455('0xcd')));_0x35512f[_0x3455('0xce')](_0x2d42c6[_0x3455('0x1')](_0x3455('0xc1'))[_0x3455('0x42')]('.qd-ddc-cep-close'));})[_0x3455('0xcf')](function(_0x58c8d1){_0x3a141f([_0x3455('0xd0'),_0x58c8d1]);});};_0x4613e1['changeQantity']=function(_0x5212a4,_0x54c99f,_0x365da0,_0x126d70){function _0x6252e6(_0x980013){_0x980013='boolean'!==typeof _0x980013?!0x1:_0x980013;_0x4613e1['getCartInfoByUrl']();window[_0x3455('0x18')][_0x3455('0x19')]=!0x1;_0x4613e1[_0x3455('0x5b')]();'undefined'!==typeof window['_QuatroDigital_AmountProduct']&&_0x3455('0xc')===typeof window[_0x3455('0x7e')][_0x3455('0x7f')]&&window['_QuatroDigital_AmountProduct'][_0x3455('0x7f')][_0x3455('0x6e')](this);_0x3455('0xc')===typeof adminCart&&adminCart();_0x42bef1['fn'][_0x3455('0x5a')](!0x0,void 0x0,_0x980013);_0x3455('0xc')===typeof _0x126d70&&_0x126d70(_0x54c99f);}_0x365da0=_0x365da0||0x1;if(0x1>_0x365da0)return _0x54c99f;if(_0xabd4f7[_0x3455('0x7c')]){if(_0x3455('0x3')===typeof window[_0x3455('0x18')][_0x3455('0x7d')][_0x3455('0x76')][_0x5212a4[0x1]])return _0x3a141f(_0x3455('0xd1')+_0x5212a4[0x1]+']'),_0x54c99f;window['_QuatroDigital_DropDown'][_0x3455('0x7d')][_0x3455('0x76')][_0x5212a4[0x1]][_0x3455('0xd2')]=_0x365da0;window['_QuatroDigital_DropDown'][_0x3455('0x7d')]['items'][_0x5212a4[0x1]][_0x3455('0xd3')]=_0x5212a4[0x1];_0x1e2dc6[_0x3455('0xd4')]([window[_0x3455('0x18')]['getOrderForm'][_0x3455('0x76')][_0x5212a4[0x1]]],[_0x3455('0x76'),_0x3455('0x82'),_0x3455('0x83')])[_0x3455('0xc0')](function(_0x86fe0d){window[_0x3455('0x18')]['getOrderForm']=_0x86fe0d;_0x6252e6(!0x0);})[_0x3455('0xcf')](function(_0x5b9630){_0x3a141f([_0x3455('0xd5'),_0x5b9630]);_0x6252e6();});}else _0x3a141f(_0x3455('0xd6'));};_0x4613e1[_0x3455('0xd7')]=function(_0x395b84,_0x3b07bc){function _0x4bc975(_0x2b935a){_0x2b935a=_0x3455('0xd8')!==typeof _0x2b935a?!0x1:_0x2b935a;_0x3455('0x3')!==typeof window[_0x3455('0x7e')]&&_0x3455('0xc')===typeof window[_0x3455('0x7e')][_0x3455('0x7f')]&&window[_0x3455('0x7e')][_0x3455('0x7f')][_0x3455('0x6e')](this);_0x3455('0xc')===typeof adminCart&&adminCart();_0x42bef1['fn'][_0x3455('0x5a')](!0x0,void 0x0,_0x2b935a);'function'===typeof _0x3b07bc&&_0x3b07bc(_0x23dcb9);}var _0x23dcb9=!0x1,_0x5251a4=_0x42bef1(_0x395b84)[_0x3455('0x8b')](_0x3455('0xaf'));if(_0xabd4f7['smartCheckout']){if(_0x3455('0x3')===typeof window[_0x3455('0x18')][_0x3455('0x7d')][_0x3455('0x76')][_0x5251a4])return _0x3a141f(_0x3455('0xd1')+_0x5251a4+']'),_0x23dcb9;window['_QuatroDigital_DropDown']['getOrderForm'][_0x3455('0x76')][_0x5251a4][_0x3455('0xd3')]=_0x5251a4;_0x1e2dc6[_0x3455('0xd9')]([window[_0x3455('0x18')][_0x3455('0x7d')][_0x3455('0x76')][_0x5251a4]],[_0x3455('0x76'),_0x3455('0x82'),_0x3455('0x83')])[_0x3455('0xc0')](function(_0x5165dc){_0x23dcb9=!0x0;window[_0x3455('0x18')][_0x3455('0x7d')]=_0x5165dc;_0x122c32(_0x5165dc);_0x4bc975(!0x0);})[_0x3455('0xcf')](function(_0x21a416){_0x3a141f([_0x3455('0xda'),_0x21a416]);_0x4bc975();});}else alert('Atenção,\x20este\x20método\x20esta\x20descontinuado.');};_0x4613e1['scrollCart']=function(_0xa1c305,_0x35732d,_0x416d8a,_0xd269d8){_0xd269d8=_0xd269d8||_0x42bef1('.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2');_0xa1c305=_0xa1c305||'+';_0x35732d=_0x35732d||0.9*_0xd269d8[_0x3455('0xdb')]();_0xd269d8[_0x3455('0xba')](!0x0,!0x0)['animate']({'scrollTop':isNaN(_0x416d8a)?_0xa1c305+'='+_0x35732d+'px':_0x416d8a});};_0xabd4f7['updateOnlyHover']||(_0x4613e1['getCartInfoByUrl'](),_0x42bef1['fn']['simpleCart'](!0x0));_0x42bef1(window)['on'](_0x3455('0xdc'),function(){try{window[_0x3455('0x18')][_0x3455('0x7d')]=void 0x0,_0x4613e1['getCartInfoByUrl']();}catch(_0x4bfccc){_0x3a141f(_0x3455('0xdd')+_0x4bfccc[_0x3455('0xf')],'avisso');}});_0x3455('0xc')===typeof _0xabd4f7['callback']?_0xabd4f7['callback'][_0x3455('0x6e')](this):_0x3a141f('Callback\x20não\x20é\x20uma\x20função');};_0x42bef1['fn']['QD_dropDownCart']=function(_0x4529f0){var _0x1bf9c9=_0x42bef1(this);_0x1bf9c9['fn']=new _0x42bef1[(_0x3455('0x1a'))](this,_0x4529f0);return _0x1bf9c9;};}catch(_0x4da4ae){_0x3455('0x3')!==typeof console&&_0x3455('0xc')===typeof console['error']&&console[_0x3455('0xd')](_0x3455('0xe'),_0x4da4ae);}}(this));(function(_0x35ea80){try{var _0x11ca57=jQuery;window[_0x3455('0x7e')]=window['_QuatroDigital_AmountProduct']||{};window[_0x3455('0x7e')][_0x3455('0x76')]={};window[_0x3455('0x7e')][_0x3455('0xde')]=!0x1;window[_0x3455('0x7e')]['buyButtonClicked']=!0x1;window[_0x3455('0x7e')]['quickViewUpdate']=!0x1;var _0x1ec985=function(){if(window[_0x3455('0x7e')][_0x3455('0xde')]){var _0x31e011=!0x1;var _0x240fed={};window[_0x3455('0x7e')]['items']={};for(_0xc3d4bf in window['_QuatroDigital_DropDown'][_0x3455('0x7d')][_0x3455('0x76')])if(_0x3455('0x31')===typeof window['_QuatroDigital_DropDown']['getOrderForm'][_0x3455('0x76')][_0xc3d4bf]){var _0x497886=window[_0x3455('0x18')][_0x3455('0x7d')][_0x3455('0x76')][_0xc3d4bf];_0x3455('0x3')!==typeof _0x497886[_0x3455('0xdf')]&&null!==_0x497886['productId']&&''!==_0x497886[_0x3455('0xdf')]&&(window['_QuatroDigital_AmountProduct']['items']['prod_'+_0x497886[_0x3455('0xdf')]]=window['_QuatroDigital_AmountProduct'][_0x3455('0x76')][_0x3455('0xe0')+_0x497886[_0x3455('0xdf')]]||{},window[_0x3455('0x7e')][_0x3455('0x76')][_0x3455('0xe0')+_0x497886[_0x3455('0xdf')]][_0x3455('0xe1')]=_0x497886[_0x3455('0xdf')],_0x240fed[_0x3455('0xe0')+_0x497886['productId']]||(window[_0x3455('0x7e')][_0x3455('0x76')][_0x3455('0xe0')+_0x497886[_0x3455('0xdf')]][_0x3455('0x72')]=0x0),window[_0x3455('0x7e')][_0x3455('0x76')][_0x3455('0xe0')+_0x497886[_0x3455('0xdf')]]['qtt']+=_0x497886[_0x3455('0xd2')],_0x31e011=!0x0,_0x240fed[_0x3455('0xe0')+_0x497886['productId']]=!0x0);}var _0xc3d4bf=_0x31e011;}else _0xc3d4bf=void 0x0;window['_QuatroDigital_AmountProduct'][_0x3455('0xde')]&&(_0x11ca57(_0x3455('0xe2'))['remove'](),_0x11ca57(_0x3455('0xe3'))[_0x3455('0x3b')](_0x3455('0xe4')));for(var _0x259d6c in window[_0x3455('0x7e')][_0x3455('0x76')]){_0x497886=window[_0x3455('0x7e')][_0x3455('0x76')][_0x259d6c];if(_0x3455('0x31')!==typeof _0x497886)return;_0x240fed=_0x11ca57(_0x3455('0xe5')+_0x497886['prodId']+']')[_0x3455('0x0')]('li');if(window[_0x3455('0x7e')][_0x3455('0xde')]||!_0x240fed['find'](_0x3455('0xe2'))[_0x3455('0x8')])_0x31e011=_0x11ca57(_0x3455('0xe6')),_0x31e011[_0x3455('0x42')](_0x3455('0xe7'))[_0x3455('0x65')](_0x497886[_0x3455('0x72')]),_0x497886=_0x240fed[_0x3455('0x42')]('.qd_bap_wrapper_content'),_0x497886[_0x3455('0x8')]?_0x497886[_0x3455('0xe8')](_0x31e011)[_0x3455('0x81')](_0x3455('0xe4')):_0x240fed['prepend'](_0x31e011);}_0xc3d4bf&&(window['_QuatroDigital_AmountProduct'][_0x3455('0xde')]=!0x1);};window[_0x3455('0x7e')][_0x3455('0x7f')]=function(){window[_0x3455('0x7e')][_0x3455('0xde')]=!0x0;_0x1ec985[_0x3455('0x6e')](this);};_0x11ca57(document)[_0x3455('0xe9')](function(){_0x1ec985[_0x3455('0x6e')](this);});}catch(_0x11dd61){_0x3455('0x3')!==typeof console&&'function'===typeof console['error']&&console[_0x3455('0xd')](_0x3455('0xe'),_0x11dd61);}}(this));(function(){try{var _0x44c2a5=jQuery,_0x754f20,_0x245a03={'selector':_0x3455('0xea'),'dropDown':{},'buyButton':{}};_0x44c2a5['QD_smartCart']=function(_0x540e59){var _0x54f016={};_0x754f20=_0x44c2a5['extend'](!0x0,{},_0x245a03,_0x540e59);_0x540e59=_0x44c2a5(_0x754f20[_0x3455('0xeb')])[_0x3455('0x1a')](_0x754f20[_0x3455('0xec')]);_0x54f016[_0x3455('0xed')]=_0x3455('0x3')!==typeof _0x754f20[_0x3455('0xec')][_0x3455('0x57')]&&!0x1===_0x754f20[_0x3455('0xec')]['updateOnlyHover']?_0x44c2a5(_0x754f20[_0x3455('0xeb')])[_0x3455('0xee')](_0x540e59['fn'],_0x754f20['buyButton']):_0x44c2a5(_0x754f20[_0x3455('0xeb')])['QD_buyButton'](_0x754f20['buyButton']);_0x54f016[_0x3455('0xec')]=_0x540e59;return _0x54f016;};_0x44c2a5['fn'][_0x3455('0xef')]=function(){'object'===typeof console&&_0x3455('0xc')===typeof console[_0x3455('0x10')]&&console[_0x3455('0x10')](_0x3455('0xf0'));};_0x44c2a5[_0x3455('0xef')]=_0x44c2a5['fn'][_0x3455('0xef')];}catch(_0x2c8a3c){_0x3455('0x3')!==typeof console&&_0x3455('0xc')===typeof console[_0x3455('0xd')]&&console['error'](_0x3455('0xe'),_0x2c8a3c);}}());

/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);

var _0x2c53=['300','QD_SIL_scroll\x20QuatroDigital.is_Callback','find','imageWrapper','not','.qd-sil-on','img:visible','length','scrollTop','bottom','height','first','Problemas\x20:(\x20.\x20Detalhes:\x20','clone','addClass','qd-sil-image-loaded','attr','src','sizes','width','qd-sil-image','insertAfter','offset','top','each','extend','QD_SIL_scrollRange','documentElement','trigger','QD_SIL_scroll','function','QD_smartImageLoad','hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','join','toUpperCase','ite','---','erc','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','Quatro\x20Digital\x20-\x20Smart\x20Image\x20Load','object','undefined','info','warn','unshift','alerta','aviso','toLowerCase','error','apply'];(function(_0x3f9be6,_0x108a31){var _0x4a60a7=function(_0x3291c7){while(--_0x3291c7){_0x3f9be6['push'](_0x3f9be6['shift']());}};_0x4a60a7(++_0x108a31);}(_0x2c53,0xbd));var _0x28f6=function(_0x390763,_0x2b4a61){_0x390763=_0x390763-0x0;var _0x204498=_0x2c53[_0x390763];return _0x204498;};(function(_0xc69f97){'use strict';var _0x5441cd=jQuery;if(typeof _0x5441cd['fn']['QD_smartImageLoad']===_0x28f6('0x0'))return;_0x5441cd['fn'][_0x28f6('0x1')]=function(){};var _0xa893c6=function(_0x5e000b){var _0x415cc8={'y':_0x28f6('0x2')};return function(_0x2f5e4c){var _0x2d4442,_0x34ab58,_0x23cc6f,_0x4c6aea;_0x34ab58=function(_0x23acf3){return _0x23acf3;};_0x23cc6f=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x2f5e4c=_0x2f5e4c['d'+_0x23cc6f[0x10]+'c'+_0x23cc6f[0x11]+'m'+_0x34ab58(_0x23cc6f[0x1])+'n'+_0x23cc6f[0xd]]['l'+_0x23cc6f[0x12]+'c'+_0x23cc6f[0x0]+'ti'+_0x34ab58('o')+'n'];_0x2d4442=function(_0x397b2a){return escape(encodeURIComponent(_0x397b2a[_0x28f6('0x3')](/\./g,'¨')[_0x28f6('0x3')](/[a-zA-Z]/g,function(_0x399d0b){return String[_0x28f6('0x4')](('Z'>=_0x399d0b?0x5a:0x7a)>=(_0x399d0b=_0x399d0b['charCodeAt'](0x0)+0xd)?_0x399d0b:_0x399d0b-0x1a);})));};var _0x2019b8=_0x2d4442(_0x2f5e4c[[_0x23cc6f[0x9],_0x34ab58('o'),_0x23cc6f[0xc],_0x23cc6f[_0x34ab58(0xd)]][_0x28f6('0x5')]('')]);_0x2d4442=_0x2d4442((window[['js',_0x34ab58('no'),'m',_0x23cc6f[0x1],_0x23cc6f[0x4][_0x28f6('0x6')](),_0x28f6('0x7')][_0x28f6('0x5')]('')]||_0x28f6('0x8'))+['.v',_0x23cc6f[0xd],'e',_0x34ab58('x'),'co',_0x34ab58('mm'),_0x28f6('0x9'),_0x23cc6f[0x1],'.c',_0x34ab58('o'),'m.',_0x23cc6f[0x13],'r'][_0x28f6('0x5')](''));for(var _0x4542bb in _0x415cc8){if(_0x2d4442===_0x4542bb+_0x415cc8[_0x4542bb]||_0x2019b8===_0x4542bb+_0x415cc8[_0x4542bb]){_0x4c6aea='tr'+_0x23cc6f[0x11]+'e';break;}_0x4c6aea='f'+_0x23cc6f[0x0]+'ls'+_0x34ab58(_0x23cc6f[0x1])+'';}_0x34ab58=!0x1;-0x1<_0x2f5e4c[[_0x23cc6f[0xc],'e',_0x23cc6f[0x0],'rc',_0x23cc6f[0x9]][_0x28f6('0x5')]('')]['indexOf'](_0x28f6('0xa'))&&(_0x34ab58=!0x0);return[_0x4c6aea,_0x34ab58];}(_0x5e000b);}(window);if(!eval(_0xa893c6[0x0]))return _0xa893c6[0x1]?_0x5ceb21(_0x28f6('0xb')):!0x1;var _0x4e9818=_0x28f6('0xc');var _0x5ceb21=function(_0x1d28b6,_0x1f1dc3){if(_0x28f6('0xd')===typeof console&&_0x28f6('0xe')!==typeof console['error']&&'undefined'!==typeof console[_0x28f6('0xf')]&&'undefined'!==typeof console[_0x28f6('0x10')]){if(_0x28f6('0xd')==typeof _0x1d28b6&&'function'==typeof _0x1d28b6[_0x28f6('0x11')]){_0x1d28b6[_0x28f6('0x11')]('['+_0x4e9818+']\x0a');var _0x36201e=_0x1d28b6;}else _0x36201e=['['+_0x4e9818+']\x0a',_0x1d28b6];if(_0x28f6('0xe')==typeof _0x1f1dc3||_0x28f6('0x12')!==_0x1f1dc3['toLowerCase']()&&_0x28f6('0x13')!==_0x1f1dc3[_0x28f6('0x14')]())if(_0x28f6('0xe')!=typeof _0x1f1dc3&&_0x28f6('0xf')==_0x1f1dc3[_0x28f6('0x14')]())try{console['info']['apply'](console,_0x36201e);}catch(_0x1fce65){try{console['info'](_0x36201e['join']('\x0a'));}catch(_0x207d7d){}}else try{console[_0x28f6('0x15')][_0x28f6('0x16')](console,_0x36201e);}catch(_0x39f710){try{console[_0x28f6('0x15')](_0x36201e['join']('\x0a'));}catch(_0x3ec286){}}else try{console[_0x28f6('0x10')][_0x28f6('0x16')](console,_0x36201e);}catch(_0x42b81a){try{console[_0x28f6('0x10')](_0x36201e['join']('\x0a'));}catch(_0xed6471){}}}};var _0x479f53=/(ids\/[0-9]+-)[0-9-]+/i;var _0x3e5e4b={'imageWrapper':'.qd_sil_img_wrapper','sizes':{'width':_0x28f6('0x17'),'height':_0x28f6('0x17')}};var _0x472690=function(_0x217640,_0x88024a){'use strict';_0x4c0c11();_0x5441cd(window)['on'](_0x28f6('0x18'),_0x4c0c11);function _0x4c0c11(){try{var _0x20dd64=_0x217640[_0x28f6('0x19')](_0x88024a[_0x28f6('0x1a')])[_0x28f6('0x1b')](_0x28f6('0x1c'))[_0x28f6('0x19')](_0x28f6('0x1d'));if(!_0x20dd64[_0x28f6('0x1e')])return;var _0x40518f=_0x5441cd(window);var _0x3196e3={'top':_0x40518f[_0x28f6('0x1f')]()};_0x3196e3[_0x28f6('0x20')]=_0x3196e3['top']+_0x40518f[_0x28f6('0x21')]();var _0x1806eb=_0x20dd64[_0x28f6('0x22')]()[_0x28f6('0x21')]();var _0x5383d1=_0x5d6574(_0x20dd64,_0x3196e3,_0x1806eb);for(var _0x350025=0x0;_0x350025<_0x5383d1['length'];_0x350025++)_0x47c9a9(_0x5441cd(_0x5383d1[_0x350025]));}catch(_0x121eb7){typeof console!==_0x28f6('0xe')&&typeof console[_0x28f6('0x15')]==='function'&&console[_0x28f6('0x15')](_0x28f6('0x23'),_0x121eb7);}}function _0x47c9a9(_0x715631){var _0x3018bc=_0x715631[_0x28f6('0x24')]();_0x3018bc['on']('load',function(){_0x5441cd(this)[_0x28f6('0x25')](_0x28f6('0x26'));});_0x3018bc[_0x28f6('0x27')]({'src':_0x3018bc[0x0][_0x28f6('0x28')][_0x28f6('0x3')](_0x479f53,'$1'+_0x88024a[_0x28f6('0x29')][_0x28f6('0x2a')]+'-'+_0x88024a[_0x28f6('0x29')][_0x28f6('0x21')]),'width':_0x88024a[_0x28f6('0x29')][_0x28f6('0x2a')],'height':_0x88024a['sizes']['height']});_0x3018bc['addClass'](_0x28f6('0x2b'))[_0x28f6('0x2c')](_0x715631);_0x3018bc['closest'](_0x88024a[_0x28f6('0x1a')])[_0x28f6('0x25')]('qd-sil-on');}function _0x5d6574(_0x13e20,_0x43f6e2,_0x45a844){var _0x574996;var _0x1ec2c6=[];for(var _0x1d6c22=0x0;_0x1d6c22<_0x13e20['length'];_0x1d6c22++){_0x574996=_0x5441cd(_0x13e20[_0x1d6c22])[_0x28f6('0x2d')]();_0x574996[_0x28f6('0x20')]=_0x574996[_0x28f6('0x2e')]+_0x45a844;if(!(_0x43f6e2[_0x28f6('0x20')]<_0x574996['top']||_0x43f6e2[_0x28f6('0x2e')]>_0x574996[_0x28f6('0x20')])){_0x1ec2c6['push'](_0x13e20[_0x1d6c22]);}}return _0x1ec2c6;};};_0x5441cd['fn']['QD_smartImageLoad']=function(_0x2d6a0e){var _0x360b00=_0x5441cd(this);if(!_0x360b00[_0x28f6('0x1e')])return _0x360b00;_0x360b00[_0x28f6('0x2f')](function(){var _0x218cda=_0x5441cd(this);_0x218cda[_0x28f6('0x1')]=new _0x472690(_0x218cda,_0x5441cd[_0x28f6('0x30')]({},_0x3e5e4b,_0x2d6a0e));});return _0x360b00;};window[_0x28f6('0x31')]=0x28;var _0xddad85=QD_SIL_scrollRange;var _0x36df37=0x0;_0x5441cd(window)['on']('scroll',function(){var _0x2ba430=document[_0x28f6('0x32')][_0x28f6('0x1f')]||document['body'][_0x28f6('0x1f')];if(_0x2ba430>_0x36df37+_0xddad85||_0x2ba430<_0x36df37-_0xddad85){_0x5441cd(window)[_0x28f6('0x33')](_0x28f6('0x34'));_0x36df37=_0x2ba430;}});}(this));

/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).on("load QD_autoFaceComments",function(){if(window.QD_lazyFaceComments)
return;var fbComments=$(".fb-comments");if(fbComments.find('iframe').length)
return;if(fbComments.length)
fbComments.attr("data-href",document.location.href.split("#").shift().split("?").shift());if(!$("#fb-root").length)
$("body").append('<div id="fb-root"></div>');if(!$("script#facebook-jssdk").length){var fbAppId=$("meta[property='fb:app_id']").attr("content")||!1;(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+(fbAppId?"&appId="+fbAppId:"");fjs.parentNode.insertBefore(js,fjs)}(document,'script','facebook-jssdk'))}
if(typeof FB!=="undefined"&&typeof FB.XFBML!=="undefined")
FB.XFBML.parse()});

/* Quatro Digital - Smart Photo Carousel // 1.0 // Carlos Vinicius // Todos os direitos reservados */

/*FUNÇÕES AUXILIARES*/

!function(o){"use strict";var s=jQuery;if("function"!=typeof s.fn.QD_smartPhotoCarousel){var e=/(ids\/[0-9]+-)[0-9-]+/i,a={imageWrapper:".qd-spc-image",thumbsWrapper:".qd-spc-thumbs",sizes:{thumb:"150-150",image:"500-500",imagezoom:"1000-1000"},slickOptions:{images:{lazyLoad:"ondemand",infinite:!1,arrows:!1},thumbs:{slidesToShow:3,slidesToScroll:1,arrows:!1,focusOnSelect:!0}},zoomOptions:{}};s.fn.QD_smartPhotoCarousel=function(o,e){var r=s(this);return r.length?(r.each(function(){var r=s(this);r.QD_smartPhotoCarousel=new function(o,e,a){if(!a&&(a=skuJson.skus[0].sku,skuJson.avaliable))for(var r=0;r<skuJson.skus.length;r++)if(skuJson.skus[r].avaliable){a=skuJson.skus[r].sku;break}n(a).done(function(s){i(o,e,s)}),s(window).on("skuChanged.vtex",function(){n(arguments[2].sku).done(function(s){i(o,e,s)})})}(r,s.extend(!0,{},a,o),e)}),r):r},s(function(){s(".qd_auto_smart_photo_carousel").QD_smartPhotoCarousel()})}function i(o,a,i){var n=i[0];try{var r=o.find(a.imageWrapper);r.length||(r=s("<div></div>").appendTo(o)),r.empty().attr("class",a.imageWrapper.slice(1));var t=o.find(a.thumbsWrapper);t.length||(t=s("<div></div>").appendTo(o)),t.empty().attr("class",a.thumbsWrapper.slice(1));for(var l,c=[],u=0;u<n.Images.length;u++)c.push(n.Images[u][0]);for(var p=0;p<c.length;p++)l=c[p].Path,(0==p?s("<img>",{src:l.replace(e,"$1"+a.sizes.image)}).appendTo(r):s("<img>",{"data-lazy":l.replace(e,"$1"+a.sizes.image)}).appendTo(r)).wrap("<div></div>").wrap(s("<a></a>",{href:l.replace(e,"$1"+a.sizes.imagezoom),class:"jqzoom"})),s("<img>",{src:l.replace(e,"$1"+a.sizes.thumb)}).appendTo(t).wrap("<div></div>"),c[p].IsMain&&(a.slickOptions.images.initialSlide=p)}catch(o){"undefined"!=typeof console&&"function"==typeof console.error&&console.error("Problemas :( . Detalhes: ",o)}try{a.slickOptions.images.asNavFor=t,s(r).slick(a.slickOptions.images),a.slickOptions.thumbs.asNavFor=r,s(t.find("img")[0]).load(function(){s(t).slick(a.slickOptions.thumbs)}),s(".jqzoom").jqzoom(a.zoomOptions),s(t).on("afterChange",function(){s(r).slick("slickGoTo",s(this).slick("slickCurrentSlide"))})}catch(o){"undefined"!=typeof console&&"function"==typeof console.error&&console.error("Problemas :( . Detalhes: ",o)}}function n(o){return s.qdAjax({url:"/produto/sku/"+o,dataType:"json",error:function(){alert("erro ao buscar objeto SKU")}})}}();

/* Quatro Digital - Smart Auto Complete // 1.0 // Carlos Vinicius // Todos os direitos reservados */

/*FUNÇÕES AUXILIARES*/
/* https://github.com/devbridge/jQuery-Autocomplete */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=this;e.element=c,e.el=a(c),e.suggestions=[],e.badQueries=[],e.selectedIndex=-1,e.currentValue=e.element.value,e.timeoutId=null,e.cachedResponse={},e.onChangeTimeout=null,e.onChange=null,e.isLocal=!1,e.suggestionsContainer=null,e.noSuggestionsContainer=null,e.options=a.extend({},b.defaults,d),e.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},e.hint=null,e.hintValue="",e.selection=null,e.initialize(),e.setOptions(d)}function c(a,b,c){return a.value.toLowerCase().indexOf(c)!==-1}function d(b){return"string"==typeof b?a.parseJSON(b):b}function e(a,b){if(!b)return a.value;var c="("+g.escapeRegExChars(b)+")";return a.value.replace(new RegExp(c,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function f(a,b){return'<div class="autocomplete-group">'+b+"</div>"}var g=function(){return{escapeRegExChars:function(a){return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),h={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},i=a.noop;b.utils=g,a.Autocomplete=b,b.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:e,formatGroup:f,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:c,paramName:"query",transformResult:d,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},b.prototype={initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo||"body"),"auto"!==g.width&&c.css("width",g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),c.on("click.autocomplete",function(){clearTimeout(d.blurTimeoutId)}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.el.val().length>=a.options.minChars&&a.onValueChange()},onBlur:function(){var a=this;a.blurTimeoutId=setTimeout(function(){a.hide()},200)},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=a.extend({},c.options,b);c.isLocal=Array.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex}),this.options=d},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearTimeout(a.onChangeTimeout),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.top+=d.scrollTop,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()+"px"),c.css(i)}},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:!document.selection||(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length)},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===h.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case h.ESC:b.el.val(b.currentValue),b.hide();break;case h.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case h.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(b.selectedIndex===-1)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case h.RETURN:if(b.selectedIndex===-1)return void b.hide();b.select(b.selectedIndex);break;case h.UP:b.moveUp();break;case h.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case h.UP:case h.DOWN:return}clearTimeout(b.onChangeTimeout),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeTimeout=setTimeout(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){if(this.ignoreValueChange)return void(this.ignoreValueChange=!1);var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearTimeout(b.onChangeTimeout),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,h.onSearchStart.call(g.element,h.params)!==!1){if(d=h.ignoreParams?null:h.params,a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&Array.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearTimeout(b.onChangeTimeout),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var f=a.data[e];return b===f?"":(b=f,d.formatGroup(a,b))};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g,a)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j,c.suggestions),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=b.options.beforeRender,d=a(b.suggestionsContainer),e=a(b.noSuggestionsContainer);this.adjustContainerWidth(),e.detach(),d.empty(),d.append(e),a.isFunction(c)&&c.call(b.element,d,b.suggestions),b.fixPosition(),d.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width?(b=c.el.outerWidth(),e.css("width",b>0?b:300)):"flex"===d.width&&e.css("width","")},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),a.inArray(b,["auto","bottom","top"])===-1&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&!a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,d.selectedIndex!==-1&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(b.selectedIndex!==-1)return 0===b.selectedIndex?(a(b.suggestionsContainer).children("."+b.classes.suggestion).first().removeClass(b.classes.selected),b.selectedIndex=-1,b.ignoreValueChange=!1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,e<f?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||(c.ignoreValueChange=!0,c.el.val(c.getValue(c.suggestions[b].value))),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return arguments.length?this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))}):this.first().data(e)},a.fn.autocomplete||(a.fn.autocomplete=a.fn.devbridgeAutocomplete)});(function(qdWindow){"use strict";var $=jQuery;if(typeof $.fn.QD_smartAutoComplete==="function")
return;$.fn.QD_smartAutoComplete=function(){};var extTitle="Quatro Digital - Smart Auto Complete";var log=function(b,c){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){if("object"==typeof b&&"function"==typeof b.unshift){b.unshift("["+extTitle+"]\n");var a=b}else a=["["+extTitle+"]\n",b];if("undefined"==typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!=typeof c&&"info"==c.toLowerCase())try{console.info.apply(console,a)}catch(d){try{console.info(a.join("\n"))}catch(e){}}else try{console.error.apply(console,a)}catch(d){try{console.error(a.join("\n"))}catch(e){}}else try{console.warn.apply(console,a)}catch(d){try{console.warn(a.join("\n"))}catch(e){}}}};var defaults={maxRows:12,suggestionsStack:'',productNameContains:function(inputElem){return $(inputElem).val()||''},jqueryUI:{noCache:!1,minChars:3,triggerSelectOnValidInput:!0,preventBadQueries:!0,autoSelectFirst:!1,maxHeight:300,width:'auto',zIndex:9999,appendTo:null,forceFixPosition:!0,orientation:'bottom',preserveInput:!1,showNoSuggestionNotice:'',tabDisabled:!1,containerClass:'ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all',beforeRender:function(container,suggestions){},formatResult:function(suggestion,currentValue,i){return'<li class="ui-menu-item" role="menuitem"><a href="'+suggestion.data+'" class="ui-corner-all" tabindex="-1">'+suggestion.text+'</a></li>'},formatGroup:function(suggestion,category){},lookupFilter:function(suggestion,query,queryLowerCase){},onSearchStart:function(params){},onHint:function(hint){},onSearchComplete:function(query,suggestions){},transformResult:function(response,originalQuery){},onSelect:function(suggestion){},onSearchError:function(query,jqXHR,textStatus,errorThrown){},onSonHideearchError:function(container){},}};var QD_smartAutoComplete=function(elem,options){"use strict";var getSearchData=function(query,done){$.ajax({url:"/buscaautocomplete/",dataType:"json",data:{maxRows:options.maxRows,productNameContains:options.productNameContains(elem),suggestionsStack:options.suggestionsStack},success:function(data){if(data){var sugestions=$.map(data.itemsReturned,function(item){return{data:item.href,value:item.name,text:(item.thumb||'')+" "+item.name}});var result={suggestions:sugestions};done(result)}},error:function(jqXHR,textStatus,errorThrown){log(errorThrown,'alert')},done:function(){options.suggestionsStack=options.productNameContains(elem)}})}
options.jqueryUI.lookup=getSearchData;try{if($.fn.autocomplete)
elem.autocomplete("destroy").devbridgeAutocomplete(options.jqueryUI);else elem.devbridgeAutocomplete(options.jqueryUI)}
catch(e){(typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Problemas :( . Detalhes: ",e))}};$.fn.QD_smartAutoComplete=function(opts){var $this=$(this);if(!$this.length)
return $this;$this.each(function(){var $t=$(this);$t.QD_smartAutoComplete=new QD_smartAutoComplete($t,$.extend(!0,{},defaults,opts))});return $this};$(function(){$(".qd_auto_smart_auto_complete").QD_smartAutoComplete()})})(jQuery)
