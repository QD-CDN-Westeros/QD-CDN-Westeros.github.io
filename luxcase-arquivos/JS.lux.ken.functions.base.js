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
		var _0xb2fa=['unavailable','available','Erro\x20ao\x20Verificar\x20se\x20todos\x20os\x20SKUs\x20estão\x20indisponíveis.\x20Detalhes:\x20','function','qdAjaxQueue','qdAjax','extend','url','opts','success','call','error','complete','parameters','callbackFns','boolean','successPopulated','errorPopulated','completePopulated','object','clearQueueDelay','undefined','jqXHR','readyState','textStatus','errorThrown','version','2.1','/produto/sku/','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20SKU,\x20a\x20requisição\x20falhou!','unshift','[Quatro\x20Digital\x20-\x20Smart\x20Stock\x20Available]\x0a','aviso','toLowerCase','info','apply','warn','removeClass','qd-ssa-sku-no-selected','addClass','qd-ssa-sku-selected','SkuSellersInformation','AvailableQuantity','each','find','[data-qd-ssa-text]','hide','qd-ssa-hide','filter','length','[data-qd-ssa-text=\x22default\x22]','qd-ssa-show','replace','#qtt','show','Erro\x20ao\x20processar\x20as\x20informações\x20HTML\x20do\x20SKU.\x20Detalhes:\x20','message','qd-ssa-on','qd-ssa-skus-','skus','split','Erro\x20ao\x20adicionar\x20classe\x20com\x20a\x20quantidade\x20de\x20SKUs\x20do\x20produto.\x20Detalhes:\x20','sku','trigger','QuatroDigital.ssa.prodUnavailable','Erro\x20ao\x20processar\x20o\x20SKU.\x20Detalhes:\x20','off','vtex.sku.selected.QD','qd-ssa-sku-prod-unavailable','hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','join','toUpperCase','ite','erc','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','qdPlugin','QD_smartStockAvailable','initialSkuSelected','QuatroDigital.ssa.skuSelected','Erro\x20ao\x20tentar\x20disparar\x20o\x20evento\x20customizado\x20de\x20seleção\x20de\x20SKU.\x20Detalhes:\x20'];(function(_0x47185f,_0x5b4cfa){var _0x3fca67=function(_0x23617d){while(--_0x23617d){_0x47185f['push'](_0x47185f['shift']());}};_0x3fca67(++_0x5b4cfa);}(_0xb2fa,0xa5));var _0x3a8a=function(_0x543da7,_0x290a88){_0x543da7=_0x543da7-0x0;var _0x3b9af4=_0xb2fa[_0x543da7];return _0x3b9af4;};(function(_0x1cf8c2){if(_0x3a8a('0x0')!==typeof _0x1cf8c2['qdAjax']){var _0x582d86={};_0x1cf8c2[_0x3a8a('0x1')]=_0x582d86;_0x1cf8c2[_0x3a8a('0x2')]=function(_0x5b4667){var _0x363f14=_0x1cf8c2[_0x3a8a('0x3')]({},{'success':function(){},'error':function(){},'complete':function(){},'clearQueueDelay':0x0},_0x5b4667);var _0x458764=escape(encodeURIComponent(_0x363f14[_0x3a8a('0x4')]));_0x582d86[_0x458764]=_0x582d86[_0x458764]||{};_0x582d86[_0x458764][_0x3a8a('0x5')]=_0x582d86[_0x458764][_0x3a8a('0x5')]||[];_0x582d86[_0x458764][_0x3a8a('0x5')]['push']({'success':function(_0x51a959,_0x594c89,_0x121c92){_0x363f14[_0x3a8a('0x6')][_0x3a8a('0x7')](this,_0x51a959,_0x594c89,_0x121c92);},'error':function(_0x276872,_0x4672ae,_0xd94595){_0x363f14[_0x3a8a('0x8')][_0x3a8a('0x7')](this,_0x276872,_0x4672ae,_0xd94595);},'complete':function(_0x33de66,_0x12c1b3){_0x363f14[_0x3a8a('0x9')][_0x3a8a('0x7')](this,_0x33de66,_0x12c1b3);}});_0x582d86[_0x458764][_0x3a8a('0xa')]=_0x582d86[_0x458764]['parameters']||{'success':{},'error':{},'complete':{}};_0x582d86[_0x458764]['callbackFns']=_0x582d86[_0x458764][_0x3a8a('0xb')]||{};_0x582d86[_0x458764][_0x3a8a('0xb')]['successPopulated']=_0x3a8a('0xc')===typeof _0x582d86[_0x458764]['callbackFns'][_0x3a8a('0xd')]?_0x582d86[_0x458764]['callbackFns'][_0x3a8a('0xd')]:!0x1;_0x582d86[_0x458764]['callbackFns'][_0x3a8a('0xe')]=_0x3a8a('0xc')===typeof _0x582d86[_0x458764][_0x3a8a('0xb')][_0x3a8a('0xe')]?_0x582d86[_0x458764][_0x3a8a('0xb')][_0x3a8a('0xe')]:!0x1;_0x582d86[_0x458764]['callbackFns']['completePopulated']='boolean'===typeof _0x582d86[_0x458764][_0x3a8a('0xb')][_0x3a8a('0xf')]?_0x582d86[_0x458764][_0x3a8a('0xb')][_0x3a8a('0xf')]:!0x1;_0x5b4667=_0x1cf8c2['extend']({},_0x363f14,{'success':function(_0x30d3ab,_0x6d054e,_0x1cb84e){_0x582d86[_0x458764]['parameters'][_0x3a8a('0x6')]={'data':_0x30d3ab,'textStatus':_0x6d054e,'jqXHR':_0x1cb84e};_0x582d86[_0x458764][_0x3a8a('0xb')][_0x3a8a('0xd')]=!0x0;for(var _0x314316 in _0x582d86[_0x458764][_0x3a8a('0x5')])_0x3a8a('0x10')===typeof _0x582d86[_0x458764][_0x3a8a('0x5')][_0x314316]&&(_0x582d86[_0x458764][_0x3a8a('0x5')][_0x314316][_0x3a8a('0x6')]['call'](this,_0x30d3ab,_0x6d054e,_0x1cb84e),_0x582d86[_0x458764][_0x3a8a('0x5')][_0x314316][_0x3a8a('0x6')]=function(){});},'error':function(_0xb8268e,_0x568f59,_0x1d9ca2){_0x582d86[_0x458764][_0x3a8a('0xa')][_0x3a8a('0x8')]={'errorThrown':_0x1d9ca2,'textStatus':_0x568f59,'jqXHR':_0xb8268e};_0x582d86[_0x458764]['callbackFns']['errorPopulated']=!0x0;for(var _0x24c636 in _0x582d86[_0x458764][_0x3a8a('0x5')])_0x3a8a('0x10')===typeof _0x582d86[_0x458764][_0x3a8a('0x5')][_0x24c636]&&(_0x582d86[_0x458764][_0x3a8a('0x5')][_0x24c636]['error']['call'](this,_0xb8268e,_0x568f59,_0x1d9ca2),_0x582d86[_0x458764][_0x3a8a('0x5')][_0x24c636][_0x3a8a('0x8')]=function(){});},'complete':function(_0x54ccd4,_0x3dc887){_0x582d86[_0x458764][_0x3a8a('0xa')]['complete']={'textStatus':_0x3dc887,'jqXHR':_0x54ccd4};_0x582d86[_0x458764]['callbackFns'][_0x3a8a('0xf')]=!0x0;for(var _0xdc5910 in _0x582d86[_0x458764]['opts'])_0x3a8a('0x10')===typeof _0x582d86[_0x458764]['opts'][_0xdc5910]&&(_0x582d86[_0x458764][_0x3a8a('0x5')][_0xdc5910][_0x3a8a('0x9')][_0x3a8a('0x7')](this,_0x54ccd4,_0x3dc887),_0x582d86[_0x458764][_0x3a8a('0x5')][_0xdc5910][_0x3a8a('0x9')]=function(){});isNaN(parseInt(_0x363f14[_0x3a8a('0x11')]))||setTimeout(function(){_0x582d86[_0x458764]['jqXHR']=void 0x0;_0x582d86[_0x458764][_0x3a8a('0x5')]=void 0x0;_0x582d86[_0x458764][_0x3a8a('0xa')]=void 0x0;_0x582d86[_0x458764][_0x3a8a('0xb')]=void 0x0;},_0x363f14[_0x3a8a('0x11')]);}});_0x3a8a('0x12')===typeof _0x582d86[_0x458764][_0x3a8a('0x13')]?_0x582d86[_0x458764]['jqXHR']=_0x1cf8c2['ajax'](_0x5b4667):_0x582d86[_0x458764][_0x3a8a('0x13')]&&_0x582d86[_0x458764][_0x3a8a('0x13')][_0x3a8a('0x14')]&&0x4==_0x582d86[_0x458764]['jqXHR'][_0x3a8a('0x14')]&&(_0x582d86[_0x458764]['callbackFns'][_0x3a8a('0xd')]&&_0x5b4667[_0x3a8a('0x6')](_0x582d86[_0x458764][_0x3a8a('0xa')][_0x3a8a('0x6')]['data'],_0x582d86[_0x458764][_0x3a8a('0xa')][_0x3a8a('0x6')][_0x3a8a('0x15')],_0x582d86[_0x458764]['parameters'][_0x3a8a('0x6')][_0x3a8a('0x13')]),_0x582d86[_0x458764]['callbackFns']['errorPopulated']&&_0x5b4667[_0x3a8a('0x8')](_0x582d86[_0x458764][_0x3a8a('0xa')]['error'][_0x3a8a('0x13')],_0x582d86[_0x458764][_0x3a8a('0xa')][_0x3a8a('0x8')][_0x3a8a('0x15')],_0x582d86[_0x458764][_0x3a8a('0xa')][_0x3a8a('0x8')][_0x3a8a('0x16')]),_0x582d86[_0x458764][_0x3a8a('0xb')][_0x3a8a('0xf')]&&_0x5b4667[_0x3a8a('0x9')](_0x582d86[_0x458764][_0x3a8a('0xa')][_0x3a8a('0x9')][_0x3a8a('0x13')],_0x582d86[_0x458764][_0x3a8a('0xa')][_0x3a8a('0x9')][_0x3a8a('0x15')]));};_0x1cf8c2[_0x3a8a('0x2')][_0x3a8a('0x17')]=_0x3a8a('0x18');}}(jQuery));(function(_0x324f75){function _0x31d7cd(_0x295ac7,_0x3a4316){_0x1590b4['qdAjax']({'url':_0x3a8a('0x19')+_0x295ac7,'clearQueueDelay':null,'success':_0x3a4316,'error':function(){_0x10c7b9(_0x3a8a('0x1a'));}});}var _0x1590b4=jQuery;if(_0x3a8a('0x0')!==typeof _0x1590b4['fn']['QD_smartStockAvailable']){var _0x10c7b9=function(_0x394ca4,_0x4ceb45){if(_0x3a8a('0x10')===typeof console){var _0x7eb834;_0x3a8a('0x10')===typeof _0x394ca4?(_0x394ca4[_0x3a8a('0x1b')](_0x3a8a('0x1c')),_0x7eb834=_0x394ca4):_0x7eb834=[_0x3a8a('0x1c')+_0x394ca4];_0x3a8a('0x12')===typeof _0x4ceb45||'alerta'!==_0x4ceb45['toLowerCase']()&&_0x3a8a('0x1d')!==_0x4ceb45[_0x3a8a('0x1e')]()?_0x3a8a('0x12')!==typeof _0x4ceb45&&_0x3a8a('0x1f')===_0x4ceb45[_0x3a8a('0x1e')]()?console[_0x3a8a('0x1f')][_0x3a8a('0x20')](console,_0x7eb834):console[_0x3a8a('0x8')][_0x3a8a('0x20')](console,_0x7eb834):console[_0x3a8a('0x21')][_0x3a8a('0x20')](console,_0x7eb834);}},_0x480387={},_0x35a808=function(_0x8d0e6b,_0x336c0c){function _0x1e6a89(_0x451033){try{_0x8d0e6b[_0x3a8a('0x22')](_0x3a8a('0x23'))[_0x3a8a('0x24')](_0x3a8a('0x25'));var _0x6dbd16=_0x451033[0x0][_0x3a8a('0x26')][0x0][_0x3a8a('0x27')];_0x8d0e6b['attr']('data-qd-ssa-qtt',_0x6dbd16);_0x8d0e6b[_0x3a8a('0x28')](function(){var _0x8d0e6b=_0x1590b4(this)[_0x3a8a('0x29')](_0x3a8a('0x2a'));if(0x1>_0x6dbd16)return _0x8d0e6b[_0x3a8a('0x2b')]()[_0x3a8a('0x24')](_0x3a8a('0x2c'))['removeClass']('qd-ssa-show');var _0x451033=_0x8d0e6b[_0x3a8a('0x2d')]('[data-qd-ssa-text=\x22'+_0x6dbd16+'\x22]');_0x451033=_0x451033[_0x3a8a('0x2e')]?_0x451033:_0x8d0e6b['filter'](_0x3a8a('0x2f'));_0x8d0e6b['hide']()[_0x3a8a('0x24')](_0x3a8a('0x2c'))[_0x3a8a('0x22')](_0x3a8a('0x30'));_0x451033['html']((_0x451033['html']()||'')[_0x3a8a('0x31')](_0x3a8a('0x32'),_0x6dbd16));_0x451033[_0x3a8a('0x33')]()['addClass']('qd-ssa-show')['removeClass']('qd-ssa-hide');});}catch(_0x426755){_0x10c7b9([_0x3a8a('0x34'),_0x426755[_0x3a8a('0x35')]]);}}if(_0x8d0e6b[_0x3a8a('0x2e')]){_0x8d0e6b[_0x3a8a('0x24')](_0x3a8a('0x36'));_0x8d0e6b[_0x3a8a('0x24')](_0x3a8a('0x23'));try{_0x8d0e6b[_0x3a8a('0x24')](_0x3a8a('0x37')+vtxctx[_0x3a8a('0x38')][_0x3a8a('0x39')](';')['length']);}catch(_0x152450){_0x10c7b9([_0x3a8a('0x3a'),_0x152450[_0x3a8a('0x35')]]);}_0x1590b4(window)['on']('vtex.sku.selected\x20QuatroDigital.ssa.skuSelected',function(_0x2e0389,_0x24d578,_0x5cd334){try{_0x31d7cd(_0x5cd334[_0x3a8a('0x3b')],function(_0x4b7085){_0x1e6a89(_0x4b7085);0x1===vtxctx[_0x3a8a('0x38')][_0x3a8a('0x39')](';')[_0x3a8a('0x2e')]&&0x0==_0x4b7085[0x0]['SkuSellersInformation'][0x0][_0x3a8a('0x27')]&&_0x1590b4(window)[_0x3a8a('0x3c')](_0x3a8a('0x3d'));});}catch(_0x2c8e32){_0x10c7b9([_0x3a8a('0x3e'),_0x2c8e32[_0x3a8a('0x35')]]);}});_0x1590b4(window)[_0x3a8a('0x3f')](_0x3a8a('0x40'));_0x1590b4(window)['on']('QuatroDigital.ssa.prodUnavailable',function(){_0x8d0e6b[_0x3a8a('0x24')](_0x3a8a('0x41'))['hide']();});}};_0x324f75=function(_0x4ab023){var _0x45b38d={'y':_0x3a8a('0x42')};return function(_0x23d6bf){var _0x4c8750=function(_0x5c14ef){return _0x5c14ef;};var _0x262df6=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x23d6bf=_0x23d6bf['d'+_0x262df6[0x10]+'c'+_0x262df6[0x11]+'m'+_0x4c8750(_0x262df6[0x1])+'n'+_0x262df6[0xd]]['l'+_0x262df6[0x12]+'c'+_0x262df6[0x0]+'ti'+_0x4c8750('o')+'n'];var _0x2d130c=function(_0x54a6ef){return escape(encodeURIComponent(_0x54a6ef['replace'](/\./g,'¨')[_0x3a8a('0x31')](/[a-zA-Z]/g,function(_0x341918){return String[_0x3a8a('0x43')](('Z'>=_0x341918?0x5a:0x7a)>=(_0x341918=_0x341918['charCodeAt'](0x0)+0xd)?_0x341918:_0x341918-0x1a);})));};var _0x36c460=_0x2d130c(_0x23d6bf[[_0x262df6[0x9],_0x4c8750('o'),_0x262df6[0xc],_0x262df6[_0x4c8750(0xd)]][_0x3a8a('0x44')]('')]);_0x2d130c=_0x2d130c((window[['js',_0x4c8750('no'),'m',_0x262df6[0x1],_0x262df6[0x4][_0x3a8a('0x45')](),_0x3a8a('0x46')]['join']('')]||'---')+['.v',_0x262df6[0xd],'e',_0x4c8750('x'),'co',_0x4c8750('mm'),_0x3a8a('0x47'),_0x262df6[0x1],'.c',_0x4c8750('o'),'m.',_0x262df6[0x13],'r']['join'](''));for(var _0x2c7f89 in _0x45b38d){if(_0x2d130c===_0x2c7f89+_0x45b38d[_0x2c7f89]||_0x36c460===_0x2c7f89+_0x45b38d[_0x2c7f89]){var _0x1c0ee7='tr'+_0x262df6[0x11]+'e';break;}_0x1c0ee7='f'+_0x262df6[0x0]+'ls'+_0x4c8750(_0x262df6[0x1])+'';}_0x4c8750=!0x1;-0x1<_0x23d6bf[[_0x262df6[0xc],'e',_0x262df6[0x0],'rc',_0x262df6[0x9]][_0x3a8a('0x44')]('')]['indexOf']('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x4c8750=!0x0);return[_0x1c0ee7,_0x4c8750];}(_0x4ab023);}(window);if(!eval(_0x324f75[0x0]))return _0x324f75[0x1]?_0x10c7b9(_0x3a8a('0x48')):!0x1;_0x1590b4['fn']['QD_smartStockAvailable']=function(_0x375036){var _0x1b4d57=_0x1590b4(this);_0x375036=_0x1590b4[_0x3a8a('0x3')](!0x0,{},_0x480387,_0x375036);_0x1b4d57[_0x3a8a('0x49')]=new _0x35a808(_0x1b4d57,_0x375036);try{_0x3a8a('0x10')===typeof _0x1590b4['fn'][_0x3a8a('0x4a')][_0x3a8a('0x4b')]&&_0x1590b4(window)[_0x3a8a('0x3c')](_0x3a8a('0x4c'),[_0x1590b4['fn'][_0x3a8a('0x4a')][_0x3a8a('0x4b')]['prod'],_0x1590b4['fn'][_0x3a8a('0x4a')][_0x3a8a('0x4b')][_0x3a8a('0x3b')]]);}catch(_0x29260e){_0x10c7b9([_0x3a8a('0x4d'),_0x29260e[_0x3a8a('0x35')]]);}_0x1590b4['fn'][_0x3a8a('0x4a')][_0x3a8a('0x4e')]&&_0x1590b4(window)[_0x3a8a('0x3c')](_0x3a8a('0x3d'));return _0x1b4d57;};_0x1590b4(window)['on'](_0x3a8a('0x40'),function(_0x183aed,_0x59c3e1,_0x54c7f8){try{_0x1590b4['fn'][_0x3a8a('0x4a')][_0x3a8a('0x4b')]={'prod':_0x59c3e1,'sku':_0x54c7f8},_0x1590b4(this)['off'](_0x183aed);}catch(_0x57ea01){_0x10c7b9(['Erro\x20ao\x20armazenar\x20o\x20SKU\x20disparado\x20no\x20ínicio\x20da\x20página.\x20Detalhes:\x20',_0x57ea01[_0x3a8a('0x35')]]);}});_0x1590b4(window)['on']('vtex.sku.selectable',function(_0x43b3e4,_0x44a2cb,_0x60d6bd){try{for(var _0x2e93bf=_0x60d6bd[_0x3a8a('0x2e')],_0x54094e=_0x44a2cb=0x0;_0x54094e<_0x2e93bf&&!_0x60d6bd[_0x54094e][_0x3a8a('0x4f')];_0x54094e++)_0x44a2cb+=0x1;_0x2e93bf<=_0x44a2cb&&(_0x1590b4['fn'][_0x3a8a('0x4a')][_0x3a8a('0x4e')]=!0x0);_0x1590b4(this)['off'](_0x43b3e4);}catch(_0x29a33d){_0x10c7b9([_0x3a8a('0x50'),_0x29a33d[_0x3a8a('0x35')]]);}});_0x1590b4(function(){_0x1590b4('.qd_smart_stock_available_auto')[_0x3a8a('0x4a')]();});}}(window));
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
		var _0x11fa=['apply','each','addClass','qd-am-li-','first','qd-am-first','qd-am-last','hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','ite','---','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','find','.qd_am_code','filter','.qd-am-banner','.qd-am-collection','length','parent','qd-am-banner-wrapper','qd-am-collection-wrapper','qdAjax','url','html','data-qdam-value','.box-banner','insertBefore','hide','qd-am-content-loaded','text','attr','[class*=\x27colunas\x27]','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','\x27\x20falho.','ajaxCallback','call','QuatroDigital.am.ajaxCallback','ul[itemscope]','UL\x20do\x20menu\x20não\x20encontrada','li\x20>ul','children',':not(ul)','qd-am-elem-','trim','>li','qdAmAddNdx','qd-amazing-menu','>ul','qd-am-column','qd-am-dropdown','qd-am-level-','add','qd-am-','-li','callback','trigger','QuatroDigital.am.callback','extend','exec','.qd_amazing_menu_auto','getParent','function','QD_amazingMenu','object','undefined','error','info','warn','unshift','[QD\x20Amazing\x20Menu]\x0a','alerta','toLowerCase','aviso','join'];(function(_0x59aef5,_0x1f8ae6){var _0x5f560a=function(_0x1e726d){while(--_0x1e726d){_0x59aef5['push'](_0x59aef5['shift']());}};_0x5f560a(++_0x1f8ae6);}(_0x11fa,0x12a));var _0xd36a=function(_0x588ec3,_0x129aa6){_0x588ec3=_0x588ec3-0x0;var _0x29444c=_0x11fa[_0x588ec3];return _0x29444c;};(function(_0x5395da){_0x5395da['fn'][_0xd36a('0x0')]=_0x5395da['fn']['closest'];}(jQuery));(function(_0x11e667){var _0x1330ab;var _0x9e3e4d=jQuery;if(_0xd36a('0x1')!==typeof _0x9e3e4d['fn'][_0xd36a('0x2')]){var _0x168fb5={'url':'/qd-amazing-menu','callback':function(){},'ajaxCallback':function(){}};var _0x40c72e=function(_0x290cf7,_0x1c0263){if(_0xd36a('0x3')===typeof console&&_0xd36a('0x4')!==typeof console[_0xd36a('0x5')]&&_0xd36a('0x4')!==typeof console[_0xd36a('0x6')]&&_0xd36a('0x4')!==typeof console[_0xd36a('0x7')]){var _0x23abd8;_0xd36a('0x3')===typeof _0x290cf7?(_0x290cf7[_0xd36a('0x8')]('[QD\x20Amazing\x20Menu]\x0a'),_0x23abd8=_0x290cf7):_0x23abd8=[_0xd36a('0x9')+_0x290cf7];if(_0xd36a('0x4')===typeof _0x1c0263||_0xd36a('0xa')!==_0x1c0263[_0xd36a('0xb')]()&&_0xd36a('0xc')!==_0x1c0263[_0xd36a('0xb')]())if('undefined'!==typeof _0x1c0263&&_0xd36a('0x6')===_0x1c0263[_0xd36a('0xb')]())try{console[_0xd36a('0x6')]['apply'](console,_0x23abd8);}catch(_0x43cebd){try{console[_0xd36a('0x6')](_0x23abd8[_0xd36a('0xd')]('\x0a'));}catch(_0x326cbc){}}else try{console[_0xd36a('0x5')][_0xd36a('0xe')](console,_0x23abd8);}catch(_0x1ab9eb){try{console[_0xd36a('0x5')](_0x23abd8[_0xd36a('0xd')]('\x0a'));}catch(_0x1c894e){}}else try{console[_0xd36a('0x7')][_0xd36a('0xe')](console,_0x23abd8);}catch(_0x53e739){try{console[_0xd36a('0x7')](_0x23abd8['join']('\x0a'));}catch(_0x17636f){}}}};_0x9e3e4d['fn']['qdAmAddNdx']=function(){var _0x3722c=_0x9e3e4d(this);_0x3722c[_0xd36a('0xf')](function(_0x1ed987){_0x9e3e4d(this)[_0xd36a('0x10')](_0xd36a('0x11')+_0x1ed987);});_0x3722c[_0xd36a('0x12')]()['addClass'](_0xd36a('0x13'));_0x3722c['last']()[_0xd36a('0x10')](_0xd36a('0x14'));return _0x3722c;};_0x9e3e4d['fn']['QD_amazingMenu']=function(){};_0x11e667=function(_0x3eedb9){var _0x2988c0={'y':_0xd36a('0x15')};return function(_0x1a97b6){var _0x421c2f=function(_0xc50134){return _0xc50134;};var _0x729dcb=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x1a97b6=_0x1a97b6['d'+_0x729dcb[0x10]+'c'+_0x729dcb[0x11]+'m'+_0x421c2f(_0x729dcb[0x1])+'n'+_0x729dcb[0xd]]['l'+_0x729dcb[0x12]+'c'+_0x729dcb[0x0]+'ti'+_0x421c2f('o')+'n'];var _0x59170d=function(_0x1ed18b){return escape(encodeURIComponent(_0x1ed18b['replace'](/\./g,'¨')[_0xd36a('0x16')](/[a-zA-Z]/g,function(_0x8f057b){return String[_0xd36a('0x17')](('Z'>=_0x8f057b?0x5a:0x7a)>=(_0x8f057b=_0x8f057b['charCodeAt'](0x0)+0xd)?_0x8f057b:_0x8f057b-0x1a);})));};var _0x34c146=_0x59170d(_0x1a97b6[[_0x729dcb[0x9],_0x421c2f('o'),_0x729dcb[0xc],_0x729dcb[_0x421c2f(0xd)]][_0xd36a('0xd')]('')]);_0x59170d=_0x59170d((window[['js',_0x421c2f('no'),'m',_0x729dcb[0x1],_0x729dcb[0x4]['toUpperCase'](),_0xd36a('0x18')][_0xd36a('0xd')]('')]||_0xd36a('0x19'))+['.v',_0x729dcb[0xd],'e',_0x421c2f('x'),'co',_0x421c2f('mm'),_0xd36a('0x1a'),_0x729dcb[0x1],'.c',_0x421c2f('o'),'m.',_0x729dcb[0x13],'r'][_0xd36a('0xd')](''));for(var _0x529de4 in _0x2988c0){if(_0x59170d===_0x529de4+_0x2988c0[_0x529de4]||_0x34c146===_0x529de4+_0x2988c0[_0x529de4]){var _0x54afa1='tr'+_0x729dcb[0x11]+'e';break;}_0x54afa1='f'+_0x729dcb[0x0]+'ls'+_0x421c2f(_0x729dcb[0x1])+'';}_0x421c2f=!0x1;-0x1<_0x1a97b6[[_0x729dcb[0xc],'e',_0x729dcb[0x0],'rc',_0x729dcb[0x9]][_0xd36a('0xd')]('')][_0xd36a('0x1b')](_0xd36a('0x1c'))&&(_0x421c2f=!0x0);return[_0x54afa1,_0x421c2f];}(_0x3eedb9);}(window);if(!eval(_0x11e667[0x0]))return _0x11e667[0x1]?_0x40c72e(_0xd36a('0x1d')):!0x1;var _0x535cd4=function(_0x147ff3){var _0x1b3562=_0x147ff3[_0xd36a('0x1e')](_0xd36a('0x1f'));var _0x4ecbaa=_0x1b3562[_0xd36a('0x20')](_0xd36a('0x21'));var _0x300b24=_0x1b3562[_0xd36a('0x20')](_0xd36a('0x22'));if(_0x4ecbaa[_0xd36a('0x23')]||_0x300b24[_0xd36a('0x23')])_0x4ecbaa[_0xd36a('0x24')]()['addClass'](_0xd36a('0x25')),_0x300b24['parent']()['addClass'](_0xd36a('0x26')),_0x9e3e4d[_0xd36a('0x27')]({'url':_0x1330ab[_0xd36a('0x28')],'dataType':_0xd36a('0x29'),'success':function(_0x386d76){var _0x29737c=_0x9e3e4d(_0x386d76);_0x4ecbaa['each'](function(){var _0x386d76=_0x9e3e4d(this);var _0x443c2f=_0x29737c['find']('img[alt=\x27'+_0x386d76['attr'](_0xd36a('0x2a'))+'\x27]');_0x443c2f[_0xd36a('0x23')]&&(_0x443c2f[_0xd36a('0xf')](function(){_0x9e3e4d(this)[_0xd36a('0x0')](_0xd36a('0x2b'))['clone']()[_0xd36a('0x2c')](_0x386d76);}),_0x386d76[_0xd36a('0x2d')]());})[_0xd36a('0x10')](_0xd36a('0x2e'));_0x300b24[_0xd36a('0xf')](function(){var _0x386d76={};var _0x44f22a=_0x9e3e4d(this);_0x29737c[_0xd36a('0x1e')]('h2')[_0xd36a('0xf')](function(){if(_0x9e3e4d(this)[_0xd36a('0x2f')]()['trim']()[_0xd36a('0xb')]()==_0x44f22a[_0xd36a('0x30')](_0xd36a('0x2a'))['trim']()['toLowerCase']())return _0x386d76=_0x9e3e4d(this),!0x1;});_0x386d76['length']&&(_0x386d76['each'](function(){_0x9e3e4d(this)[_0xd36a('0x0')](_0xd36a('0x31'))['clone']()['insertBefore'](_0x44f22a);}),_0x44f22a[_0xd36a('0x2d')]());})[_0xd36a('0x10')](_0xd36a('0x2e'));},'error':function(){_0x40c72e(_0xd36a('0x32')+_0x1330ab[_0xd36a('0x28')]+_0xd36a('0x33'));},'complete':function(){_0x1330ab[_0xd36a('0x34')][_0xd36a('0x35')](this);_0x9e3e4d(window)['trigger'](_0xd36a('0x36'),_0x147ff3);},'clearQueueDelay':0xbb8});};_0x9e3e4d['QD_amazingMenu']=function(_0x413258){var _0x2b8d50=_0x413258[_0xd36a('0x1e')](_0xd36a('0x37'))['each'](function(){var _0x785d5a=_0x9e3e4d(this);if(!_0x785d5a['length'])return _0x40c72e([_0xd36a('0x38'),_0x413258],_0xd36a('0xa'));_0x785d5a['find'](_0xd36a('0x39'))[_0xd36a('0x24')]()[_0xd36a('0x10')]('qd-am-has-ul');_0x785d5a[_0xd36a('0x1e')]('li')[_0xd36a('0xf')](function(){var _0x5ae5c4=_0x9e3e4d(this);var _0x330a57=_0x5ae5c4[_0xd36a('0x3a')](_0xd36a('0x3b'));_0x330a57[_0xd36a('0x23')]&&_0x5ae5c4[_0xd36a('0x10')](_0xd36a('0x3c')+_0x330a57[_0xd36a('0x12')]()[_0xd36a('0x2f')]()[_0xd36a('0x3d')]()['replaceSpecialChars']()[_0xd36a('0x16')](/\./g,'')['replace'](/\s/g,'-')[_0xd36a('0xb')]());});var _0x3a3013=_0x785d5a[_0xd36a('0x1e')](_0xd36a('0x3e'))[_0xd36a('0x3f')]();_0x785d5a[_0xd36a('0x10')](_0xd36a('0x40'));_0x3a3013=_0x3a3013[_0xd36a('0x1e')](_0xd36a('0x41'));_0x3a3013[_0xd36a('0xf')](function(){var _0x4720b3=_0x9e3e4d(this);_0x4720b3['find'](_0xd36a('0x3e'))['qdAmAddNdx']()[_0xd36a('0x10')](_0xd36a('0x42'));_0x4720b3[_0xd36a('0x10')]('qd-am-dropdown-menu');_0x4720b3['parent']()[_0xd36a('0x10')]('qd-am-dropdown');});_0x3a3013[_0xd36a('0x10')](_0xd36a('0x43'));var _0x20b4f6=0x0,_0x11e667=function(_0x16b46c){_0x20b4f6+=0x1;_0x16b46c=_0x16b46c['children']('li')[_0xd36a('0x3a')]('*');_0x16b46c[_0xd36a('0x23')]&&(_0x16b46c[_0xd36a('0x10')](_0xd36a('0x44')+_0x20b4f6),_0x11e667(_0x16b46c));};_0x11e667(_0x785d5a);_0x785d5a[_0xd36a('0x45')](_0x785d5a[_0xd36a('0x1e')]('ul'))['each'](function(){var _0x15d3a1=_0x9e3e4d(this);_0x15d3a1['addClass'](_0xd36a('0x46')+_0x15d3a1[_0xd36a('0x3a')]('li')[_0xd36a('0x23')]+_0xd36a('0x47'));});});_0x535cd4(_0x2b8d50);_0x1330ab[_0xd36a('0x48')][_0xd36a('0x35')](this);_0x9e3e4d(window)[_0xd36a('0x49')](_0xd36a('0x4a'),_0x413258);};_0x9e3e4d['fn'][_0xd36a('0x2')]=function(_0x4b3014){var _0x3220ba=_0x9e3e4d(this);if(!_0x3220ba['length'])return _0x3220ba;_0x1330ab=_0x9e3e4d[_0xd36a('0x4b')]({},_0x168fb5,_0x4b3014);_0x3220ba[_0xd36a('0x4c')]=new _0x9e3e4d[(_0xd36a('0x2'))](_0x9e3e4d(this));return _0x3220ba;};_0x9e3e4d(function(){_0x9e3e4d(_0xd36a('0x4d'))[_0xd36a('0x2')]();});}}(this));
		/* Quatro Digital Smart Cart */
		var _0x386d=['qd-bb-lightBoxProdAdd','qd-bb-lightBoxBodyProdAdd','keyup.qd_ddc_closeFn','keyCode','body','.qd-ddc-prodWrapper','.qd-ddc-scrollUp','click.qd_ddc_scrollUp','.qd-ddc-scrollDown','scrollCart','.qd-ddc-shipping\x20.qd-ddc-cep-tooltip-text','val','keyup.qd_ddc_cep','formatCepField','.qd-ddc-shipping\x20.qd-ddc-cep-ok','.qd-ddc-cep-btn','preventDefault','.qd-ddc-cep-close','click','hide','click._QD_DDC_closeShipping','target','.qd-ddc-cep-tooltip','.qd-ddc-cep-ok','shippingCalculate','.qd-ddc-cep','getCartInfoByUrl','simpleCart','cartIsEmpty','texts','cartTotal','#value','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','#total','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','.qd-ddc-viewCart','html','.qd_ddc_continueShopping','continueShopping','.qd-ddc-checkout','linkCheckout','.qd-ddc-infoTotal','.qd-ddc-shipping','.qd-ddc-emptyCart\x20p','emptyCart','each','call','.qd-ddc-infoTotalValue','total','.qd-ddc-infoTotalItems','qtt','shipping','.qd-ddc-infoAllTotal','allTotal','items','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','renderProductsList','dataOptionsCache','.qd-ddc-wrapper','getOrderForm','_QuatroDigital_AmountProduct','QD_checkoutQueue','totalizers','shippingData','Este\x20método\x20esta\x20descontinuado!','.qd-ddc-prodRow','qd-ddc-noItems','addClass','.qd-ddc-prodWrapper2','productCategoryIds','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','attr','qd-ddc-','availability','.qd-ddc-prodName','.qd-ddc-prodPrice','sellingPrice','Grátis','content','.qd-ddc-quantity','quantity','.qd-ddc-remove','insertProdImg','imageUrl','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','appendTo','address','postalCode','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','lastSku','filter','[data-sku=\x27','outerHeight','qd-ddc-lastAddedFixed','qd-ddc-lastAdded','timeRemoveNewItemClass','qd-ddc-product-add-time-v2','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','qd-ddc-product-add-time','qd-ddc-cart-rendered','callbackProductsList','callbackProductsList\x20não\x20é\x20uma\x20função','forceImageHTTPS','http','https','qd-loaded','load','src','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','actionButtons','data-sku','data-sku-index','changeQantity','.qd-ddc-prodQttWrapper:not(.qd_on)','qd_on','.qd-ddc-quantityMore','qd-loading','click.qd_ddc_minus','focusout.qd_ddc_change','keyup.qd_ddc_change','stop','slideUp','remove','$1-$2$3','data','.qd-dd-cep-slas','logisticsInfo','<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>','shippingEstimate','\x20dia\x20útil','<tr></tr>','</td><td>','\x20para\x20o\x20CEP\x20','</td>','tbody','insertBefore','.qd-ddc-cep-tooltip-text','Não\x20foi\x20possível\x20calcular\x20o\x20frete','qdDdcLastPostalCode','boolean','exec','smartCheckout','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','index','done','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','atenção\x20esta\x20método\x20esta\x20descontinuado','removeItems','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','Atenção,\x20este\x20método\x20esta\x20descontinuado.','.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2','height','animate','updateOnlyHover','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','avisso','Callback\x20não\x20é\x20uma\x20função','allowRecalculate','quickViewUpdate','productId','prod_','prodId','.qd-bap-wrapper','qd-bap-item-added','input.qd-productId[value=','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd_bap_wrapper_content','prepend','.qdDdcContainer','QD_smartCart','selector','dropDown','buyButton','QD_buyButton','smartCart','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','getParent','closest','replace','abs','undefined','pow','round','toFixed','split','length','join','_QuatroDigital_CartData','callback','Callbacks','function','error','Oooops!\x20','message','info','warn','unshift','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','alerta','aviso','toLowerCase','apply','_QuatroDigital_DropDown','allowUpdate','QD_dropDownCart','charCodeAt','---','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','extend','Finalizar\x20Compra','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>','skuName','name','vtexjs','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','script','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','object','checkout','SDK','cartContainer','append','find','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','add','.qd_ddc_lightBoxOverlay','click.qd_ddc_closeFn','removeClass'];(function(_0x87cb51,_0x2caa28){var _0xc5279f=function(_0xf6ba8a){while(--_0xf6ba8a){_0x87cb51['push'](_0x87cb51['shift']());}};_0xc5279f(++_0x2caa28);}(_0x386d,0x1a5));var _0x1947=function(_0x3e3fbf,_0x3bf7ef){_0x3e3fbf=_0x3e3fbf-0x0;var _0x25876b=_0x386d[_0x3e3fbf];return _0x25876b;};(function(_0x3973b9){_0x3973b9['fn'][_0x1947('0x0')]=_0x3973b9['fn'][_0x1947('0x1')];}(jQuery));function qd_number_format(_0x1bc2c9,_0x48828d,_0x4cc8ca,_0x532755){_0x1bc2c9=(_0x1bc2c9+'')[_0x1947('0x2')](/[^0-9+\-Ee.]/g,'');_0x1bc2c9=isFinite(+_0x1bc2c9)?+_0x1bc2c9:0x0;_0x48828d=isFinite(+_0x48828d)?Math[_0x1947('0x3')](_0x48828d):0x0;_0x532755=_0x1947('0x4')===typeof _0x532755?',':_0x532755;_0x4cc8ca=_0x1947('0x4')===typeof _0x4cc8ca?'.':_0x4cc8ca;var _0x20c4a0='',_0x20c4a0=function(_0x2cbf0a,_0x26403f){var _0x48828d=Math[_0x1947('0x5')](0xa,_0x26403f);return''+(Math[_0x1947('0x6')](_0x2cbf0a*_0x48828d)/_0x48828d)[_0x1947('0x7')](_0x26403f);},_0x20c4a0=(_0x48828d?_0x20c4a0(_0x1bc2c9,_0x48828d):''+Math[_0x1947('0x6')](_0x1bc2c9))[_0x1947('0x8')]('.');0x3<_0x20c4a0[0x0][_0x1947('0x9')]&&(_0x20c4a0[0x0]=_0x20c4a0[0x0][_0x1947('0x2')](/\B(?=(?:\d{3})+(?!\d))/g,_0x532755));(_0x20c4a0[0x1]||'')[_0x1947('0x9')]<_0x48828d&&(_0x20c4a0[0x1]=_0x20c4a0[0x1]||'',_0x20c4a0[0x1]+=Array(_0x48828d-_0x20c4a0[0x1][_0x1947('0x9')]+0x1)[_0x1947('0xa')]('0'));return _0x20c4a0[_0x1947('0xa')](_0x4cc8ca);};(function(){try{window[_0x1947('0xb')]=window[_0x1947('0xb')]||{},window[_0x1947('0xb')][_0x1947('0xc')]=window[_0x1947('0xb')]['callback']||$[_0x1947('0xd')]();}catch(_0x27b769){_0x1947('0x4')!==typeof console&&_0x1947('0xe')===typeof console[_0x1947('0xf')]&&console[_0x1947('0xf')](_0x1947('0x10'),_0x27b769[_0x1947('0x11')]);}}());(function(_0x4d0877){try{var _0x3cce00=jQuery,_0x5c6712=function(_0x2c912b,_0x297c0f){if('object'===typeof console&&'undefined'!==typeof console[_0x1947('0xf')]&&_0x1947('0x4')!==typeof console[_0x1947('0x12')]&&_0x1947('0x4')!==typeof console[_0x1947('0x13')]){var _0x563030;'object'===typeof _0x2c912b?(_0x2c912b[_0x1947('0x14')](_0x1947('0x15')),_0x563030=_0x2c912b):_0x563030=[_0x1947('0x15')+_0x2c912b];if(_0x1947('0x4')===typeof _0x297c0f||_0x1947('0x16')!==_0x297c0f['toLowerCase']()&&_0x1947('0x17')!==_0x297c0f[_0x1947('0x18')]())if(_0x1947('0x4')!==typeof _0x297c0f&&_0x1947('0x12')===_0x297c0f[_0x1947('0x18')]())try{console[_0x1947('0x12')]['apply'](console,_0x563030);}catch(_0x3e1a1d){try{console[_0x1947('0x12')](_0x563030[_0x1947('0xa')]('\x0a'));}catch(_0x4ecaaf){}}else try{console[_0x1947('0xf')][_0x1947('0x19')](console,_0x563030);}catch(_0x565513){try{console[_0x1947('0xf')](_0x563030[_0x1947('0xa')]('\x0a'));}catch(_0x575387){}}else try{console[_0x1947('0x13')][_0x1947('0x19')](console,_0x563030);}catch(_0xe812e){try{console[_0x1947('0x13')](_0x563030[_0x1947('0xa')]('\x0a'));}catch(_0x480081){}}}};window[_0x1947('0x1a')]=window['_QuatroDigital_DropDown']||{};window[_0x1947('0x1a')][_0x1947('0x1b')]=!0x0;_0x3cce00['QD_dropDownCart']=function(){};_0x3cce00['fn'][_0x1947('0x1c')]=function(){return{'fn':new _0x3cce00()};};var _0x2f8942=function(_0x53385a){var _0x21a053={'y':'hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe'};return function(_0x5b24ee){var _0x591f9d=function(_0x1a8608){return _0x1a8608;};var _0x343763=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x5b24ee=_0x5b24ee['d'+_0x343763[0x10]+'c'+_0x343763[0x11]+'m'+_0x591f9d(_0x343763[0x1])+'n'+_0x343763[0xd]]['l'+_0x343763[0x12]+'c'+_0x343763[0x0]+'ti'+_0x591f9d('o')+'n'];var _0x4be38a=function(_0x55b717){return escape(encodeURIComponent(_0x55b717[_0x1947('0x2')](/\./g,'¨')[_0x1947('0x2')](/[a-zA-Z]/g,function(_0x1ab373){return String['fromCharCode'](('Z'>=_0x1ab373?0x5a:0x7a)>=(_0x1ab373=_0x1ab373[_0x1947('0x1d')](0x0)+0xd)?_0x1ab373:_0x1ab373-0x1a);})));};var _0x24aee1=_0x4be38a(_0x5b24ee[[_0x343763[0x9],_0x591f9d('o'),_0x343763[0xc],_0x343763[_0x591f9d(0xd)]][_0x1947('0xa')]('')]);_0x4be38a=_0x4be38a((window[['js',_0x591f9d('no'),'m',_0x343763[0x1],_0x343763[0x4]['toUpperCase'](),'ite']['join']('')]||_0x1947('0x1e'))+['.v',_0x343763[0xd],'e',_0x591f9d('x'),'co',_0x591f9d('mm'),_0x1947('0x1f'),_0x343763[0x1],'.c',_0x591f9d('o'),'m.',_0x343763[0x13],'r'][_0x1947('0xa')](''));for(var _0x3e59f6 in _0x21a053){if(_0x4be38a===_0x3e59f6+_0x21a053[_0x3e59f6]||_0x24aee1===_0x3e59f6+_0x21a053[_0x3e59f6]){var _0x1557eb='tr'+_0x343763[0x11]+'e';break;}_0x1557eb='f'+_0x343763[0x0]+'ls'+_0x591f9d(_0x343763[0x1])+'';}_0x591f9d=!0x1;-0x1<_0x5b24ee[[_0x343763[0xc],'e',_0x343763[0x0],'rc',_0x343763[0x9]][_0x1947('0xa')]('')][_0x1947('0x20')](_0x1947('0x21'))&&(_0x591f9d=!0x0);return[_0x1557eb,_0x591f9d];}(_0x53385a);}(window);if(!eval(_0x2f8942[0x0]))return _0x2f8942[0x1]?_0x5c6712(_0x1947('0x22')):!0x1;_0x3cce00[_0x1947('0x1c')]=function(_0x63b958,_0x33c5a3){var _0x17f4f1=_0x3cce00(_0x63b958);if(!_0x17f4f1[_0x1947('0x9')])return _0x17f4f1;var _0x2a6664=_0x3cce00[_0x1947('0x23')](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':'Ir\x20ao\x20Carrinho','linkCheckout':_0x1947('0x24'),'cartTotal':_0x1947('0x25'),'emptyCart':_0x1947('0x26'),'continueShopping':'Continuar\x20Comprando','shippingForm':_0x1947('0x27')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'forceImageHTTPS':!0x1,'skuName':function(_0x5bbf7f){return _0x5bbf7f[_0x1947('0x28')]||_0x5bbf7f[_0x1947('0x29')];},'callback':function(){},'callbackProductsList':function(){}},_0x33c5a3);_0x3cce00('');var _0x2c40e4=this;if(_0x2a6664['smartCheckout']){var _0x38e156=!0x1;_0x1947('0x4')===typeof window[_0x1947('0x2a')]&&(_0x5c6712('A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN'),_0x3cce00['ajax']({'url':_0x1947('0x2b'),'async':!0x1,'dataType':_0x1947('0x2c'),'error':function(){_0x5c6712('Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.');_0x38e156=!0x0;}}));if(_0x38e156)return _0x5c6712(_0x1947('0x2d'));}if(_0x1947('0x2e')===typeof window[_0x1947('0x2a')]&&_0x1947('0x4')!==typeof window[_0x1947('0x2a')][_0x1947('0x2f')])var _0x4d0877=window[_0x1947('0x2a')][_0x1947('0x2f')];else if(_0x1947('0x2e')===typeof vtex&&'object'===typeof vtex[_0x1947('0x2f')]&&'undefined'!==typeof vtex['checkout'][_0x1947('0x30')])_0x4d0877=new vtex['checkout'][(_0x1947('0x30'))]();else return _0x5c6712('Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js');_0x2c40e4[_0x1947('0x31')]='<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>';var _0x372761=function(_0x4d14e3){_0x3cce00(this)[_0x1947('0x32')](_0x4d14e3);_0x4d14e3[_0x1947('0x33')](_0x1947('0x34'))[_0x1947('0x35')](_0x3cce00(_0x1947('0x36')))['on'](_0x1947('0x37'),function(){_0x17f4f1[_0x1947('0x38')](_0x1947('0x39'));_0x3cce00(document['body'])['removeClass'](_0x1947('0x3a'));});_0x3cce00(document)['off'](_0x1947('0x3b'))['on'](_0x1947('0x3b'),function(_0x57b0af){0x1b==_0x57b0af[_0x1947('0x3c')]&&(_0x17f4f1[_0x1947('0x38')](_0x1947('0x39')),_0x3cce00(document[_0x1947('0x3d')])[_0x1947('0x38')](_0x1947('0x3a')));});var _0x5768f1=_0x4d14e3[_0x1947('0x33')](_0x1947('0x3e'));_0x4d14e3[_0x1947('0x33')](_0x1947('0x3f'))['on'](_0x1947('0x40'),function(){_0x2c40e4['scrollCart']('-',void 0x0,void 0x0,_0x5768f1);return!0x1;});_0x4d14e3['find'](_0x1947('0x41'))['on']('click.qd_ddc_scrollDown',function(){_0x2c40e4[_0x1947('0x42')](void 0x0,void 0x0,void 0x0,_0x5768f1);return!0x1;});var _0x1595aa=_0x4d14e3[_0x1947('0x33')](_0x1947('0x43'));_0x4d14e3[_0x1947('0x33')]('.qd-ddc-shipping\x20.qd-ddc-cep')[_0x1947('0x44')]('')['on'](_0x1947('0x45'),function(_0x3f44b9){_0x2c40e4[_0x1947('0x46')](_0x3cce00(this));0xd==_0x3f44b9['keyCode']&&_0x4d14e3[_0x1947('0x33')](_0x1947('0x47'))['click']();});_0x4d14e3[_0x1947('0x33')](_0x1947('0x48'))['click'](function(_0x30d1c0){_0x30d1c0[_0x1947('0x49')]();_0x1595aa['toggle']();});_0x4d14e3['find'](_0x1947('0x4a'))[_0x1947('0x4b')](function(_0x1ac859){_0x1ac859[_0x1947('0x49')]();_0x1595aa[_0x1947('0x4c')]();});_0x3cce00(document)['off'](_0x1947('0x4d'))['on'](_0x1947('0x4d'),function(_0x14b069){_0x3cce00(_0x14b069[_0x1947('0x4e')])['closest'](_0x4d14e3[_0x1947('0x33')](_0x1947('0x4f')))[_0x1947('0x9')]||_0x1595aa[_0x1947('0x4c')]();});_0x4d14e3['find'](_0x1947('0x50'))[_0x1947('0x4b')](function(_0x9a3b38){_0x9a3b38['preventDefault']();_0x2c40e4[_0x1947('0x51')](_0x4d14e3[_0x1947('0x33')](_0x1947('0x52')));});if(_0x2a6664['updateOnlyHover']){var _0x33c5a3=0x0;_0x3cce00(this)['on']('mouseenter.qd_ddc_hover',function(){var _0x4d14e3=function(){window['_QuatroDigital_DropDown'][_0x1947('0x1b')]&&(_0x2c40e4[_0x1947('0x53')](),window['_QuatroDigital_DropDown'][_0x1947('0x1b')]=!0x1,_0x3cce00['fn'][_0x1947('0x54')](!0x0),_0x2c40e4[_0x1947('0x55')]());};_0x33c5a3=setInterval(function(){_0x4d14e3();},0x258);_0x4d14e3();});_0x3cce00(this)['on']('mouseleave.qd_ddc_hover',function(){clearInterval(_0x33c5a3);});}};var _0x7e726a=function(_0x1030dd){_0x1030dd=_0x3cce00(_0x1030dd);_0x2a6664[_0x1947('0x56')][_0x1947('0x57')]=_0x2a6664[_0x1947('0x56')][_0x1947('0x57')][_0x1947('0x2')](_0x1947('0x58'),_0x1947('0x59'));_0x2a6664['texts'][_0x1947('0x57')]=_0x2a6664[_0x1947('0x56')][_0x1947('0x57')][_0x1947('0x2')]('#items',_0x1947('0x5a'));_0x2a6664[_0x1947('0x56')][_0x1947('0x57')]=_0x2a6664[_0x1947('0x56')]['cartTotal'][_0x1947('0x2')](_0x1947('0x5b'),_0x1947('0x5c'));_0x2a6664[_0x1947('0x56')][_0x1947('0x57')]=_0x2a6664[_0x1947('0x56')][_0x1947('0x57')][_0x1947('0x2')](_0x1947('0x5d'),_0x1947('0x5e'));_0x1030dd['find'](_0x1947('0x5f'))[_0x1947('0x60')](_0x2a6664[_0x1947('0x56')]['linkCart']);_0x1030dd[_0x1947('0x33')](_0x1947('0x61'))[_0x1947('0x60')](_0x2a6664['texts'][_0x1947('0x62')]);_0x1030dd['find'](_0x1947('0x63'))[_0x1947('0x60')](_0x2a6664[_0x1947('0x56')][_0x1947('0x64')]);_0x1030dd['find'](_0x1947('0x65'))[_0x1947('0x60')](_0x2a6664['texts'][_0x1947('0x57')]);_0x1030dd[_0x1947('0x33')](_0x1947('0x66'))[_0x1947('0x60')](_0x2a6664['texts']['shippingForm']);_0x1030dd[_0x1947('0x33')](_0x1947('0x67'))[_0x1947('0x60')](_0x2a6664['texts'][_0x1947('0x68')]);return _0x1030dd;}(this[_0x1947('0x31')]);var _0x4ab484=0x0;_0x17f4f1[_0x1947('0x69')](function(){0x0<_0x4ab484?_0x372761[_0x1947('0x6a')](this,_0x7e726a['clone']()):_0x372761[_0x1947('0x6a')](this,_0x7e726a);_0x4ab484++;});window[_0x1947('0xb')][_0x1947('0xc')][_0x1947('0x35')](function(){_0x3cce00(_0x1947('0x6b'))[_0x1947('0x60')](window[_0x1947('0xb')][_0x1947('0x6c')]||'--');_0x3cce00(_0x1947('0x6d'))[_0x1947('0x60')](window['_QuatroDigital_CartData'][_0x1947('0x6e')]||'0');_0x3cce00('.qd-ddc-infoTotalShipping')[_0x1947('0x60')](window[_0x1947('0xb')][_0x1947('0x6f')]||'--');_0x3cce00(_0x1947('0x70'))[_0x1947('0x60')](window[_0x1947('0xb')][_0x1947('0x71')]||'--');});var _0xe347de=function(_0x599ade,_0x497b71){if(_0x1947('0x4')===typeof _0x599ade[_0x1947('0x72')])return _0x5c6712(_0x1947('0x73'));_0x2c40e4[_0x1947('0x74')][_0x1947('0x6a')](this,_0x497b71);};_0x2c40e4[_0x1947('0x53')]=function(_0x4f7609,_0x4bc6c1){_0x1947('0x4')!=typeof _0x4bc6c1?window[_0x1947('0x1a')][_0x1947('0x75')]=_0x4bc6c1:window[_0x1947('0x1a')][_0x1947('0x75')]&&(_0x4bc6c1=window[_0x1947('0x1a')][_0x1947('0x75')]);setTimeout(function(){window[_0x1947('0x1a')][_0x1947('0x75')]=void 0x0;},_0x2a6664['timeRemoveNewItemClass']);_0x3cce00(_0x1947('0x76'))['removeClass']('qd-ddc-prodLoaded');if(_0x2a6664['smartCheckout']){var _0x5b78ff=function(_0x1453fd){window[_0x1947('0x1a')][_0x1947('0x77')]=_0x1453fd;_0xe347de(_0x1453fd,_0x4bc6c1);_0x1947('0x4')!==typeof window['_QuatroDigital_AmountProduct']&&_0x1947('0xe')===typeof window[_0x1947('0x78')]['exec']&&window['_QuatroDigital_AmountProduct']['exec'][_0x1947('0x6a')](this);_0x3cce00('.qd-ddc-wrapper')['addClass']('qd-ddc-prodLoaded');};'undefined'!==typeof window[_0x1947('0x1a')][_0x1947('0x77')]?(_0x5b78ff(window[_0x1947('0x1a')]['getOrderForm']),_0x1947('0xe')===typeof _0x4f7609&&_0x4f7609(window[_0x1947('0x1a')][_0x1947('0x77')])):_0x3cce00[_0x1947('0x79')]([_0x1947('0x72'),_0x1947('0x7a'),_0x1947('0x7b')],{'done':function(_0x106924){_0x5b78ff[_0x1947('0x6a')](this,_0x106924);_0x1947('0xe')===typeof _0x4f7609&&_0x4f7609(_0x106924);},'fail':function(_0x1adc47){_0x5c6712(['Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho',_0x1adc47]);}});}else alert(_0x1947('0x7c'));};_0x2c40e4[_0x1947('0x55')]=function(){var _0x5a5962=_0x3cce00('.qd-ddc-wrapper');_0x5a5962[_0x1947('0x33')](_0x1947('0x7d'))[_0x1947('0x9')]?_0x5a5962[_0x1947('0x38')](_0x1947('0x7e')):_0x5a5962[_0x1947('0x7f')](_0x1947('0x7e'));};_0x2c40e4[_0x1947('0x74')]=function(_0xd5d92e){var _0x33c5a3=_0x3cce00(_0x1947('0x80'));_0x33c5a3['empty']();_0x33c5a3['each'](function(){var _0x33c5a3=_0x3cce00(this),_0x51e463,_0x39ddcc,_0x48af32=_0x3cce00(''),_0x336480;for(_0x336480 in window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')])if(_0x1947('0x2e')===typeof window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')][_0x336480]){var _0x294cf2=window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')][_0x336480];var _0x63b958=_0x294cf2[_0x1947('0x81')]['replace'](/^\/|\/$/g,'')[_0x1947('0x8')]('/');var _0x1fdb7a=_0x3cce00(_0x1947('0x82'));_0x1fdb7a[_0x1947('0x83')]({'data-sku':_0x294cf2['id'],'data-sku-index':_0x336480,'data-qd-departament':_0x63b958[0x0],'data-qd-category':_0x63b958[_0x63b958[_0x1947('0x9')]-0x1]});_0x1fdb7a[_0x1947('0x7f')](_0x1947('0x84')+_0x294cf2[_0x1947('0x85')]);_0x1fdb7a[_0x1947('0x33')](_0x1947('0x86'))[_0x1947('0x32')](_0x2a6664[_0x1947('0x28')](_0x294cf2));_0x1fdb7a['find'](_0x1947('0x87'))[_0x1947('0x32')](isNaN(_0x294cf2[_0x1947('0x88')])?_0x294cf2['sellingPrice']:0x0==_0x294cf2['sellingPrice']?_0x1947('0x89'):(_0x3cce00('meta[name=currency]')['attr'](_0x1947('0x8a'))||'R$')+'\x20'+qd_number_format(_0x294cf2[_0x1947('0x88')]/0x64,0x2,',','.'));_0x1fdb7a[_0x1947('0x33')](_0x1947('0x8b'))[_0x1947('0x83')]({'data-sku':_0x294cf2['id'],'data-sku-index':_0x336480})[_0x1947('0x44')](_0x294cf2[_0x1947('0x8c')]);_0x1fdb7a[_0x1947('0x33')](_0x1947('0x8d'))['attr']({'data-sku':_0x294cf2['id'],'data-sku-index':_0x336480});_0x2c40e4[_0x1947('0x8e')](_0x294cf2['id'],_0x1fdb7a[_0x1947('0x33')]('.qd-ddc-image'),_0x294cf2[_0x1947('0x8f')]);_0x1fdb7a[_0x1947('0x33')](_0x1947('0x90'))['attr']({'data-sku':_0x294cf2['id'],'data-sku-index':_0x336480});_0x1fdb7a[_0x1947('0x91')](_0x33c5a3);_0x48af32=_0x48af32[_0x1947('0x35')](_0x1fdb7a);}try{var _0x486431=_0x33c5a3['getParent'](_0x1947('0x76'))[_0x1947('0x33')]('.qd-ddc-shipping\x20input');_0x486431[_0x1947('0x9')]&&''==_0x486431[_0x1947('0x44')]()&&window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x7b')][_0x1947('0x92')]&&_0x486431[_0x1947('0x44')](window[_0x1947('0x1a')]['getOrderForm'][_0x1947('0x7b')][_0x1947('0x92')][_0x1947('0x93')]);}catch(_0x5b97ea){_0x5c6712(_0x1947('0x94')+_0x5b97ea[_0x1947('0x11')],_0x1947('0x17'));}_0x2c40e4['actionButtons'](_0x33c5a3);_0x2c40e4[_0x1947('0x55')]();_0xd5d92e&&_0xd5d92e[_0x1947('0x95')]&&function(){_0x39ddcc=_0x48af32[_0x1947('0x96')](_0x1947('0x97')+_0xd5d92e['lastSku']+'\x27]');_0x39ddcc[_0x1947('0x9')]&&(_0x51e463=0x0,_0x48af32[_0x1947('0x69')](function(){var _0xd5d92e=_0x3cce00(this);if(_0xd5d92e['is'](_0x39ddcc))return!0x1;_0x51e463+=_0xd5d92e[_0x1947('0x98')]();}),_0x2c40e4['scrollCart'](void 0x0,void 0x0,_0x51e463,_0x33c5a3['add'](_0x33c5a3['parent']())),_0x48af32[_0x1947('0x38')](_0x1947('0x99')),function(_0xe9c927){_0xe9c927[_0x1947('0x7f')]('qd-ddc-lastAdded');_0xe9c927[_0x1947('0x7f')](_0x1947('0x99'));setTimeout(function(){_0xe9c927[_0x1947('0x38')](_0x1947('0x9a'));},_0x2a6664[_0x1947('0x9b')]);}(_0x39ddcc),_0x3cce00(document[_0x1947('0x3d')])[_0x1947('0x7f')](_0x1947('0x9c')),setTimeout(function(){_0x3cce00(document[_0x1947('0x3d')])['removeClass'](_0x1947('0x9c'));},_0x2a6664[_0x1947('0x9b')]));}();});(function(){_QuatroDigital_DropDown[_0x1947('0x77')][_0x1947('0x72')][_0x1947('0x9')]?(_0x3cce00(_0x1947('0x3d'))[_0x1947('0x38')](_0x1947('0x9d'))[_0x1947('0x7f')](_0x1947('0x9e')),setTimeout(function(){_0x3cce00(_0x1947('0x3d'))[_0x1947('0x38')](_0x1947('0x9f'));},_0x2a6664[_0x1947('0x9b')])):_0x3cce00(_0x1947('0x3d'))[_0x1947('0x38')](_0x1947('0xa0'))[_0x1947('0x7f')](_0x1947('0x9d'));}());_0x1947('0xe')===typeof _0x2a6664[_0x1947('0xa1')]?_0x2a6664[_0x1947('0xa1')]['call'](this):_0x5c6712(_0x1947('0xa2'));};_0x2c40e4['insertProdImg']=function(_0x3c5ded,_0x3732ed,_0x3fd817){function _0x581783(){_0x2a6664[_0x1947('0xa3')]&&'string'==typeof _0x3fd817&&(_0x3fd817=_0x3fd817[_0x1947('0x2')](_0x1947('0xa4'),_0x1947('0xa5')));_0x3732ed[_0x1947('0x38')](_0x1947('0xa6'))[_0x1947('0xa7')](function(){_0x3cce00(this)[_0x1947('0x7f')](_0x1947('0xa6'));})['attr'](_0x1947('0xa8'),_0x3fd817);}_0x3fd817?_0x581783():isNaN(_0x3c5ded)?_0x5c6712(_0x1947('0xa9'),_0x1947('0x16')):alert(_0x1947('0xaa'));};_0x2c40e4[_0x1947('0xab')]=function(_0x13cb97){var _0x33c5a3=function(_0x442088,_0x499f57){var _0x341caa=_0x3cce00(_0x442088);var _0x2e9c52=_0x341caa[_0x1947('0x83')](_0x1947('0xac'));var _0x63b958=_0x341caa[_0x1947('0x83')](_0x1947('0xad'));if(_0x2e9c52){var _0xe6d42e=parseInt(_0x341caa[_0x1947('0x44')]())||0x1;_0x2c40e4[_0x1947('0xae')]([_0x2e9c52,_0x63b958],_0xe6d42e,_0xe6d42e+0x1,function(_0x1d8043){_0x341caa[_0x1947('0x44')](_0x1d8043);'function'===typeof _0x499f57&&_0x499f57();});}};var _0x5a6c95=function(_0x537ca1,_0x14d8fa){var _0x33c5a3=_0x3cce00(_0x537ca1);var _0x35c8f6=_0x33c5a3[_0x1947('0x83')](_0x1947('0xac'));var _0x17530d=_0x33c5a3[_0x1947('0x83')](_0x1947('0xad'));if(_0x35c8f6){var _0x63b958=parseInt(_0x33c5a3[_0x1947('0x44')]())||0x2;_0x2c40e4[_0x1947('0xae')]([_0x35c8f6,_0x17530d],_0x63b958,_0x63b958-0x1,function(_0x138fca){_0x33c5a3['val'](_0x138fca);_0x1947('0xe')===typeof _0x14d8fa&&_0x14d8fa();});}};var _0x4186a9=function(_0x329028,_0x308785){var _0x49c87=_0x3cce00(_0x329028);var _0x47a380=_0x49c87[_0x1947('0x83')]('data-sku');var _0x63b958=_0x49c87[_0x1947('0x83')](_0x1947('0xad'));if(_0x47a380){var _0x103f03=parseInt(_0x49c87[_0x1947('0x44')]())||0x1;_0x2c40e4[_0x1947('0xae')]([_0x47a380,_0x63b958],0x1,_0x103f03,function(_0x3cacf3){_0x49c87[_0x1947('0x44')](_0x3cacf3);'function'===typeof _0x308785&&_0x308785();});}};var _0x63b958=_0x13cb97['find'](_0x1947('0xaf'));_0x63b958[_0x1947('0x7f')](_0x1947('0xb0'))['each'](function(){var _0x13cb97=_0x3cce00(this);_0x13cb97['find'](_0x1947('0xb1'))['on']('click.qd_ddc_more',function(_0x5adbd6){_0x5adbd6[_0x1947('0x49')]();_0x63b958[_0x1947('0x7f')](_0x1947('0xb2'));_0x33c5a3(_0x13cb97[_0x1947('0x33')]('.qd-ddc-quantity'),function(){_0x63b958[_0x1947('0x38')]('qd-loading');});});_0x13cb97[_0x1947('0x33')]('.qd-ddc-quantityMinus')['on'](_0x1947('0xb3'),function(_0x5e2aea){_0x5e2aea[_0x1947('0x49')]();_0x63b958['addClass'](_0x1947('0xb2'));_0x5a6c95(_0x13cb97[_0x1947('0x33')](_0x1947('0x8b')),function(){_0x63b958['removeClass'](_0x1947('0xb2'));});});_0x13cb97[_0x1947('0x33')]('.qd-ddc-quantity')['on'](_0x1947('0xb4'),function(){_0x63b958[_0x1947('0x7f')]('qd-loading');_0x4186a9(this,function(){_0x63b958['removeClass']('qd-loading');});});_0x13cb97[_0x1947('0x33')]('.qd-ddc-quantity')['on'](_0x1947('0xb5'),function(_0x37c116){0xd==_0x37c116[_0x1947('0x3c')]&&(_0x63b958[_0x1947('0x7f')](_0x1947('0xb2')),_0x4186a9(this,function(){_0x63b958[_0x1947('0x38')](_0x1947('0xb2'));}));});});_0x13cb97[_0x1947('0x33')](_0x1947('0x7d'))['each'](function(){var _0x13cb97=_0x3cce00(this);_0x13cb97[_0x1947('0x33')](_0x1947('0x8d'))['on']('click.qd_ddc_remove',function(){_0x13cb97[_0x1947('0x7f')](_0x1947('0xb2'));_0x2c40e4['removeProduct'](_0x3cce00(this),function(_0x50febf){_0x50febf?_0x13cb97[_0x1947('0xb6')](!0x0)[_0x1947('0xb7')](function(){_0x13cb97[_0x1947('0xb8')]();_0x2c40e4[_0x1947('0x55')]();}):_0x13cb97[_0x1947('0x38')]('qd-loading');});return!0x1;});});};_0x2c40e4[_0x1947('0x46')]=function(_0x193717){var _0x310301=_0x193717[_0x1947('0x44')]();_0x310301=_0x310301['replace'](/[^0-9\-]/g,'');_0x310301=_0x310301[_0x1947('0x2')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,_0x1947('0xb9'));_0x310301=_0x310301[_0x1947('0x2')](/(.{9}).*/g,'$1');_0x193717[_0x1947('0x44')](_0x310301);};_0x2c40e4['shippingCalculate']=function(_0x16b871){var _0x36ae95=_0x16b871[_0x1947('0x44')]();0x9<=_0x36ae95[_0x1947('0x9')]&&(_0x16b871[_0x1947('0xba')]('qdDdcLastPostalCode')!=_0x36ae95&&_0x4d0877['calculateShipping']({'postalCode':_0x36ae95,'country':'BRA'})['done'](function(_0x35726f){_0x16b871[_0x1947('0x1')]('.qd-ddc-cep-tooltip-text')[_0x1947('0x33')](_0x1947('0xbb'))[_0x1947('0xb8')]();window[_0x1947('0x1a')][_0x1947('0x77')]=_0x35726f;_0x2c40e4['getCartInfoByUrl']();_0x35726f=_0x35726f['shippingData'][_0x1947('0xbc')][0x0]['slas'];for(var _0x63b958=_0x3cce00(_0x1947('0xbd')),_0x13eab4=0x0;_0x13eab4<_0x35726f[_0x1947('0x9')];_0x13eab4++){var _0x53d05c=_0x35726f[_0x13eab4],_0x131e1c=0x1<_0x53d05c[_0x1947('0xbe')]?_0x53d05c[_0x1947('0xbe')]['replace']('bd',_0x1947('0xbf')):_0x53d05c[_0x1947('0xbe')][_0x1947('0x2')]('bd','\x20dias\x20útéis'),_0x599bb6=_0x3cce00(_0x1947('0xc0'));_0x599bb6['append']('<td>\x20R$\x20'+qd_number_format(_0x53d05c['price']/0x64,0x2,',','.')+_0x1947('0xc1')+_0x53d05c[_0x1947('0x29')]+',\x20entrega\x20em\x20'+_0x131e1c+_0x1947('0xc2')+_0x36ae95+_0x1947('0xc3'));_0x599bb6[_0x1947('0x91')](_0x63b958['find'](_0x1947('0xc4')));}_0x63b958[_0x1947('0xc5')](_0x16b871[_0x1947('0x1')](_0x1947('0xc6'))[_0x1947('0x33')](_0x1947('0x4a')));})['fail'](function(_0xefb8d8){_0x5c6712([_0x1947('0xc7'),_0xefb8d8]);updateCartData();}),_0x16b871[_0x1947('0xba')](_0x1947('0xc8'),_0x36ae95));};_0x2c40e4[_0x1947('0xae')]=function(_0xcda240,_0x314386,_0x5a16ff,_0x3ca567){function _0x9fd465(_0x189fc3){_0x189fc3=_0x1947('0xc9')!==typeof _0x189fc3?!0x1:_0x189fc3;_0x2c40e4[_0x1947('0x53')]();window['_QuatroDigital_DropDown'][_0x1947('0x1b')]=!0x1;_0x2c40e4[_0x1947('0x55')]();'undefined'!==typeof window[_0x1947('0x78')]&&_0x1947('0xe')===typeof window[_0x1947('0x78')][_0x1947('0xca')]&&window[_0x1947('0x78')][_0x1947('0xca')][_0x1947('0x6a')](this);_0x1947('0xe')===typeof adminCart&&adminCart();_0x3cce00['fn'][_0x1947('0x54')](!0x0,void 0x0,_0x189fc3);'function'===typeof _0x3ca567&&_0x3ca567(_0x314386);}_0x5a16ff=_0x5a16ff||0x1;if(0x1>_0x5a16ff)return _0x314386;if(_0x2a6664[_0x1947('0xcb')]){if(_0x1947('0x4')===typeof window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')][_0xcda240[0x1]])return _0x5c6712(_0x1947('0xcc')+_0xcda240[0x1]+']'),_0x314386;window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')][_0xcda240[0x1]][_0x1947('0x8c')]=_0x5a16ff;window['_QuatroDigital_DropDown'][_0x1947('0x77')]['items'][_0xcda240[0x1]][_0x1947('0xcd')]=_0xcda240[0x1];_0x4d0877['updateItems']([window['_QuatroDigital_DropDown']['getOrderForm'][_0x1947('0x72')][_0xcda240[0x1]]],[_0x1947('0x72'),_0x1947('0x7a'),_0x1947('0x7b')])[_0x1947('0xce')](function(_0x40a600){window[_0x1947('0x1a')][_0x1947('0x77')]=_0x40a600;_0x9fd465(!0x0);})['fail'](function(_0x13fe03){_0x5c6712([_0x1947('0xcf'),_0x13fe03]);_0x9fd465();});}else _0x5c6712(_0x1947('0xd0'));};_0x2c40e4['removeProduct']=function(_0x52f135,_0x52aa78){function _0x5458c5(_0x19d095){_0x19d095=_0x1947('0xc9')!==typeof _0x19d095?!0x1:_0x19d095;_0x1947('0x4')!==typeof window[_0x1947('0x78')]&&_0x1947('0xe')===typeof window[_0x1947('0x78')][_0x1947('0xca')]&&window[_0x1947('0x78')][_0x1947('0xca')][_0x1947('0x6a')](this);_0x1947('0xe')===typeof adminCart&&adminCart();_0x3cce00['fn'][_0x1947('0x54')](!0x0,void 0x0,_0x19d095);_0x1947('0xe')===typeof _0x52aa78&&_0x52aa78(_0x3188bb);}var _0x3188bb=!0x1,_0x63b958=_0x3cce00(_0x52f135)[_0x1947('0x83')](_0x1947('0xad'));if(_0x2a6664[_0x1947('0xcb')]){if(_0x1947('0x4')===typeof window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')][_0x63b958])return _0x5c6712(_0x1947('0xcc')+_0x63b958+']'),_0x3188bb;window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')][_0x63b958]['index']=_0x63b958;_0x4d0877[_0x1947('0xd1')]([window[_0x1947('0x1a')][_0x1947('0x77')][_0x1947('0x72')][_0x63b958]],[_0x1947('0x72'),_0x1947('0x7a'),_0x1947('0x7b')])[_0x1947('0xce')](function(_0x299201){_0x3188bb=!0x0;window[_0x1947('0x1a')]['getOrderForm']=_0x299201;_0xe347de(_0x299201);_0x5458c5(!0x0);})['fail'](function(_0x4058d2){_0x5c6712([_0x1947('0xd2'),_0x4058d2]);_0x5458c5();});}else alert(_0x1947('0xd3'));};_0x2c40e4[_0x1947('0x42')]=function(_0x3bf53b,_0x52bc96,_0x279cb8,_0x260efd){_0x260efd=_0x260efd||_0x3cce00(_0x1947('0xd4'));_0x3bf53b=_0x3bf53b||'+';_0x52bc96=_0x52bc96||0.9*_0x260efd[_0x1947('0xd5')]();_0x260efd[_0x1947('0xb6')](!0x0,!0x0)[_0x1947('0xd6')]({'scrollTop':isNaN(_0x279cb8)?_0x3bf53b+'='+_0x52bc96+'px':_0x279cb8});};_0x2a6664[_0x1947('0xd7')]||(_0x2c40e4['getCartInfoByUrl'](),_0x3cce00['fn']['simpleCart'](!0x0));_0x3cce00(window)['on'](_0x1947('0xd8'),function(){try{window[_0x1947('0x1a')][_0x1947('0x77')]=void 0x0,_0x2c40e4[_0x1947('0x53')]();}catch(_0x25bdac){_0x5c6712(_0x1947('0xd9')+_0x25bdac[_0x1947('0x11')],_0x1947('0xda'));}});'function'===typeof _0x2a6664[_0x1947('0xc')]?_0x2a6664['callback']['call'](this):_0x5c6712(_0x1947('0xdb'));};_0x3cce00['fn'][_0x1947('0x1c')]=function(_0x15bde3){var _0x4f56d6=_0x3cce00(this);_0x4f56d6['fn']=new _0x3cce00[(_0x1947('0x1c'))](this,_0x15bde3);return _0x4f56d6;};}catch(_0x2c0714){'undefined'!==typeof console&&_0x1947('0xe')===typeof console[_0x1947('0xf')]&&console[_0x1947('0xf')](_0x1947('0x10'),_0x2c0714);}}(this));(function(_0x357736){try{var _0x47452b=jQuery;window[_0x1947('0x78')]=window[_0x1947('0x78')]||{};window[_0x1947('0x78')][_0x1947('0x72')]={};window['_QuatroDigital_AmountProduct'][_0x1947('0xdc')]=!0x1;window[_0x1947('0x78')]['buyButtonClicked']=!0x1;window[_0x1947('0x78')][_0x1947('0xdd')]=!0x1;var _0x4c3bd1=function(){if(window[_0x1947('0x78')][_0x1947('0xdc')]){var _0x198ecf=!0x1;var _0x927131={};window[_0x1947('0x78')][_0x1947('0x72')]={};for(_0xd8150e in window[_0x1947('0x1a')][_0x1947('0x77')]['items'])if('object'===typeof window['_QuatroDigital_DropDown'][_0x1947('0x77')][_0x1947('0x72')][_0xd8150e]){var _0x5bf6b3=window[_0x1947('0x1a')]['getOrderForm'][_0x1947('0x72')][_0xd8150e];_0x1947('0x4')!==typeof _0x5bf6b3[_0x1947('0xde')]&&null!==_0x5bf6b3[_0x1947('0xde')]&&''!==_0x5bf6b3[_0x1947('0xde')]&&(window[_0x1947('0x78')][_0x1947('0x72')][_0x1947('0xdf')+_0x5bf6b3[_0x1947('0xde')]]=window[_0x1947('0x78')][_0x1947('0x72')]['prod_'+_0x5bf6b3[_0x1947('0xde')]]||{},window[_0x1947('0x78')][_0x1947('0x72')][_0x1947('0xdf')+_0x5bf6b3['productId']][_0x1947('0xe0')]=_0x5bf6b3['productId'],_0x927131['prod_'+_0x5bf6b3[_0x1947('0xde')]]||(window[_0x1947('0x78')][_0x1947('0x72')][_0x1947('0xdf')+_0x5bf6b3[_0x1947('0xde')]][_0x1947('0x6e')]=0x0),window[_0x1947('0x78')][_0x1947('0x72')]['prod_'+_0x5bf6b3[_0x1947('0xde')]]['qtt']+=_0x5bf6b3[_0x1947('0x8c')],_0x198ecf=!0x0,_0x927131[_0x1947('0xdf')+_0x5bf6b3[_0x1947('0xde')]]=!0x0);}var _0xd8150e=_0x198ecf;}else _0xd8150e=void 0x0;window[_0x1947('0x78')]['allowRecalculate']&&(_0x47452b(_0x1947('0xe1'))[_0x1947('0xb8')](),_0x47452b('.qd-bap-item-added')[_0x1947('0x38')](_0x1947('0xe2')));for(var _0x24022b in window[_0x1947('0x78')][_0x1947('0x72')]){_0x5bf6b3=window[_0x1947('0x78')][_0x1947('0x72')][_0x24022b];if(_0x1947('0x2e')!==typeof _0x5bf6b3)return;_0x927131=_0x47452b(_0x1947('0xe3')+_0x5bf6b3[_0x1947('0xe0')]+']')[_0x1947('0x0')]('li');if(window[_0x1947('0x78')][_0x1947('0xdc')]||!_0x927131['find']('.qd-bap-wrapper')['length'])_0x198ecf=_0x47452b(_0x1947('0xe4')),_0x198ecf[_0x1947('0x33')]('.qd-bap-qtt')['html'](_0x5bf6b3[_0x1947('0x6e')]),_0x5bf6b3=_0x927131[_0x1947('0x33')](_0x1947('0xe5')),_0x5bf6b3[_0x1947('0x9')]?_0x5bf6b3[_0x1947('0xe6')](_0x198ecf)[_0x1947('0x7f')](_0x1947('0xe2')):_0x927131[_0x1947('0xe6')](_0x198ecf);}_0xd8150e&&(window[_0x1947('0x78')][_0x1947('0xdc')]=!0x1);};window[_0x1947('0x78')]['exec']=function(){window[_0x1947('0x78')][_0x1947('0xdc')]=!0x0;_0x4c3bd1[_0x1947('0x6a')](this);};_0x47452b(document)['ajaxStop'](function(){_0x4c3bd1[_0x1947('0x6a')](this);});}catch(_0x5ed7fd){_0x1947('0x4')!==typeof console&&_0x1947('0xe')===typeof console['error']&&console[_0x1947('0xf')](_0x1947('0x10'),_0x5ed7fd);}}(this));(function(){try{var _0x5e492f=jQuery,_0x15ff37,_0x5a42e0={'selector':_0x1947('0xe7'),'dropDown':{},'buyButton':{}};_0x5e492f[_0x1947('0xe8')]=function(_0xf87949){var _0x48b01a={};_0x15ff37=_0x5e492f[_0x1947('0x23')](!0x0,{},_0x5a42e0,_0xf87949);_0xf87949=_0x5e492f(_0x15ff37[_0x1947('0xe9')])['QD_dropDownCart'](_0x15ff37[_0x1947('0xea')]);_0x48b01a[_0x1947('0xeb')]=_0x1947('0x4')!==typeof _0x15ff37['dropDown'][_0x1947('0xd7')]&&!0x1===_0x15ff37[_0x1947('0xea')]['updateOnlyHover']?_0x5e492f(_0x15ff37[_0x1947('0xe9')])[_0x1947('0xec')](_0xf87949['fn'],_0x15ff37[_0x1947('0xeb')]):_0x5e492f(_0x15ff37[_0x1947('0xe9')])[_0x1947('0xec')](_0x15ff37['buyButton']);_0x48b01a[_0x1947('0xea')]=_0xf87949;return _0x48b01a;};_0x5e492f['fn'][_0x1947('0xed')]=function(){_0x1947('0x2e')===typeof console&&_0x1947('0xe')===typeof console['info']&&console[_0x1947('0x12')](_0x1947('0xee'));};_0x5e492f['smartCart']=_0x5e492f['fn'][_0x1947('0xed')];}catch(_0x562aba){_0x1947('0x4')!==typeof console&&'function'===typeof console[_0x1947('0xf')]&&console[_0x1947('0xf')](_0x1947('0x10'),_0x562aba);}}());
		
		/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);
		
		var _0x3e3f=['ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','object','undefined','error','info','warn','unshift','alerta','toLowerCase','aviso','apply','.qd_sil_img_wrapper','300','QD_SIL_scroll\x20QuatroDigital.is_Callback','find','imageWrapper','.qd-sil-on','top','first','height','length','Problemas\x20:(\x20.\x20Detalhes:\x20','clone','load','qd-sil-image-loaded','sizes','width','addClass','qd-sil-image','insertAfter','qd-sil-on','offset','bottom','each','scroll','documentElement','body','scrollTop','trigger','QD_SIL_scroll','QD_smartImageLoad','function','replace','charCodeAt','toUpperCase','ite','join','---','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82'];(function(_0x4b8e3a,_0x2dc524){var _0x13ea0b=function(_0xecd764){while(--_0xecd764){_0x4b8e3a['push'](_0x4b8e3a['shift']());}};_0x13ea0b(++_0x2dc524);}(_0x3e3f,0x127));var _0x549c=function(_0x2aa2cc,_0x1150e7){_0x2aa2cc=_0x2aa2cc-0x0;var _0x5383fb=_0x3e3f[_0x2aa2cc];return _0x5383fb;};(function(_0x36d0ca){'use strict';var _0x40a2e1=jQuery;if(typeof _0x40a2e1['fn'][_0x549c('0x0')]===_0x549c('0x1'))return;_0x40a2e1['fn'][_0x549c('0x0')]=function(){};var _0x41aeb8=function(_0x358bad){var _0x280363={'y':'hkpnfr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe'};return function(_0x3e166){var _0x1a2193,_0x37970c,_0x1293f7,_0x3f4c4e;_0x37970c=function(_0x557019){return _0x557019;};_0x1293f7=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x3e166=_0x3e166['d'+_0x1293f7[0x10]+'c'+_0x1293f7[0x11]+'m'+_0x37970c(_0x1293f7[0x1])+'n'+_0x1293f7[0xd]]['l'+_0x1293f7[0x12]+'c'+_0x1293f7[0x0]+'ti'+_0x37970c('o')+'n'];_0x1a2193=function(_0x2d0cae){return escape(encodeURIComponent(_0x2d0cae['replace'](/\./g,'¨')[_0x549c('0x2')](/[a-zA-Z]/g,function(_0x37ccde){return String['fromCharCode'](('Z'>=_0x37ccde?0x5a:0x7a)>=(_0x37ccde=_0x37ccde[_0x549c('0x3')](0x0)+0xd)?_0x37ccde:_0x37ccde-0x1a);})));};var _0xcc15e5=_0x1a2193(_0x3e166[[_0x1293f7[0x9],_0x37970c('o'),_0x1293f7[0xc],_0x1293f7[_0x37970c(0xd)]]['join']('')]);_0x1a2193=_0x1a2193((window[['js',_0x37970c('no'),'m',_0x1293f7[0x1],_0x1293f7[0x4][_0x549c('0x4')](),_0x549c('0x5')][_0x549c('0x6')]('')]||_0x549c('0x7'))+['.v',_0x1293f7[0xd],'e',_0x37970c('x'),'co',_0x37970c('mm'),_0x549c('0x8'),_0x1293f7[0x1],'.c',_0x37970c('o'),'m.',_0x1293f7[0x13],'r'][_0x549c('0x6')](''));for(var _0x5644e0 in _0x280363){if(_0x1a2193===_0x5644e0+_0x280363[_0x5644e0]||_0xcc15e5===_0x5644e0+_0x280363[_0x5644e0]){_0x3f4c4e='tr'+_0x1293f7[0x11]+'e';break;}_0x3f4c4e='f'+_0x1293f7[0x0]+'ls'+_0x37970c(_0x1293f7[0x1])+'';}_0x37970c=!0x1;-0x1<_0x3e166[[_0x1293f7[0xc],'e',_0x1293f7[0x0],'rc',_0x1293f7[0x9]][_0x549c('0x6')]('')][_0x549c('0x9')](_0x549c('0xa'))&&(_0x37970c=!0x0);return[_0x3f4c4e,_0x37970c];}(_0x358bad);}(window);if(!eval(_0x41aeb8[0x0]))return _0x41aeb8[0x1]?_0x339448(_0x549c('0xb')):!0x1;var _0x33cbaf='Quatro\x20Digital\x20-\x20Smart\x20Image\x20Load';var _0x339448=function(_0x414d57,_0x3a5af5){if(_0x549c('0xc')===typeof console&&_0x549c('0xd')!==typeof console[_0x549c('0xe')]&&_0x549c('0xd')!==typeof console[_0x549c('0xf')]&&_0x549c('0xd')!==typeof console[_0x549c('0x10')]){if(_0x549c('0xc')==typeof _0x414d57&&_0x549c('0x1')==typeof _0x414d57[_0x549c('0x11')]){_0x414d57[_0x549c('0x11')]('['+_0x33cbaf+']\x0a');var _0x38f51c=_0x414d57;}else _0x38f51c=['['+_0x33cbaf+']\x0a',_0x414d57];if('undefined'==typeof _0x3a5af5||_0x549c('0x12')!==_0x3a5af5[_0x549c('0x13')]()&&_0x549c('0x14')!==_0x3a5af5[_0x549c('0x13')]())if(_0x549c('0xd')!=typeof _0x3a5af5&&_0x549c('0xf')==_0x3a5af5[_0x549c('0x13')]())try{console[_0x549c('0xf')][_0x549c('0x15')](console,_0x38f51c);}catch(_0x2ce3e2){try{console[_0x549c('0xf')](_0x38f51c[_0x549c('0x6')]('\x0a'));}catch(_0x23f62d){}}else try{console['error']['apply'](console,_0x38f51c);}catch(_0x4fd91e){try{console['error'](_0x38f51c[_0x549c('0x6')]('\x0a'));}catch(_0x3de2c0){}}else try{console[_0x549c('0x10')][_0x549c('0x15')](console,_0x38f51c);}catch(_0x47db1e){try{console[_0x549c('0x10')](_0x38f51c[_0x549c('0x6')]('\x0a'));}catch(_0x15f347){}}}};var _0x3d326e=/(ids\/[0-9]+-)[0-9-]+/i;var _0x336e7e={'imageWrapper':_0x549c('0x16'),'sizes':{'width':_0x549c('0x17'),'height':_0x549c('0x17')}};var _0x2fd3d0=function(_0xaebde9,_0x2c8ffd){'use strict';_0x273e8f();_0x40a2e1(window)['on'](_0x549c('0x18'),_0x273e8f);function _0x273e8f(){try{var _0x1a375b=_0xaebde9[_0x549c('0x19')](_0x2c8ffd[_0x549c('0x1a')])['not'](_0x549c('0x1b'))[_0x549c('0x19')]('img:visible');if(!_0x1a375b['length'])return;var _0xa19d3=_0x40a2e1(window);var _0x47a00b={'top':_0xa19d3['scrollTop']()};_0x47a00b['bottom']=_0x47a00b[_0x549c('0x1c')]+_0xa19d3['height']();var _0x1a3363=_0x1a375b[_0x549c('0x1d')]()[_0x549c('0x1e')]();var _0x3baf9a=_0x56c554(_0x1a375b,_0x47a00b,_0x1a3363);for(var _0x579cf0=0x0;_0x579cf0<_0x3baf9a[_0x549c('0x1f')];_0x579cf0++)_0x50c9d1(_0x40a2e1(_0x3baf9a[_0x579cf0]));}catch(_0x2c9342){typeof console!==_0x549c('0xd')&&typeof console[_0x549c('0xe')]==='function'&&console[_0x549c('0xe')](_0x549c('0x20'),_0x2c9342);}}function _0x50c9d1(_0x41d0df){var _0x3ffc60=_0x41d0df[_0x549c('0x21')]();_0x3ffc60['on'](_0x549c('0x22'),function(){_0x40a2e1(this)['addClass'](_0x549c('0x23'));});_0x3ffc60['attr']({'src':_0x3ffc60[0x0]['src'][_0x549c('0x2')](_0x3d326e,'$1'+_0x2c8ffd[_0x549c('0x24')][_0x549c('0x25')]+'-'+_0x2c8ffd[_0x549c('0x24')][_0x549c('0x1e')]),'width':_0x2c8ffd[_0x549c('0x24')][_0x549c('0x25')],'height':_0x2c8ffd[_0x549c('0x24')]['height']});_0x3ffc60[_0x549c('0x26')](_0x549c('0x27'))[_0x549c('0x28')](_0x41d0df);_0x3ffc60['closest'](_0x2c8ffd['imageWrapper'])['addClass'](_0x549c('0x29'));}function _0x56c554(_0x544432,_0x1f4b4a,_0x130a50){var _0x4e7df3;var _0x45cdbd=[];for(var _0x4ab23c=0x0;_0x4ab23c<_0x544432[_0x549c('0x1f')];_0x4ab23c++){_0x4e7df3=_0x40a2e1(_0x544432[_0x4ab23c])[_0x549c('0x2a')]();_0x4e7df3[_0x549c('0x2b')]=_0x4e7df3[_0x549c('0x1c')]+_0x130a50;if(!(_0x1f4b4a['bottom']<_0x4e7df3['top']||_0x1f4b4a[_0x549c('0x1c')]>_0x4e7df3['bottom'])){_0x45cdbd['push'](_0x544432[_0x4ab23c]);}}return _0x45cdbd;};};_0x40a2e1['fn'][_0x549c('0x0')]=function(_0x266d39){var _0x4e84d2=_0x40a2e1(this);if(!_0x4e84d2['length'])return _0x4e84d2;_0x4e84d2[_0x549c('0x2c')](function(){var _0x1f5eca=_0x40a2e1(this);_0x1f5eca[_0x549c('0x0')]=new _0x2fd3d0(_0x1f5eca,_0x40a2e1['extend']({},_0x336e7e,_0x266d39));});return _0x4e84d2;};window['QD_SIL_scrollRange']=0x28;var _0x3e142b=QD_SIL_scrollRange;var _0x165550=0x0;_0x40a2e1(window)['on'](_0x549c('0x2d'),function(){var _0x393195=document[_0x549c('0x2e')]['scrollTop']||document[_0x549c('0x2f')][_0x549c('0x30')];if(_0x393195>_0x165550+_0x3e142b||_0x393195<_0x165550-_0x3e142b){_0x40a2e1(window)[_0x549c('0x31')](_0x549c('0x32'));_0x165550=_0x393195;}});}(this));
		
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


		
		