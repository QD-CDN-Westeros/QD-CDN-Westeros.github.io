/**
* Funções base
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});
/* Quatro Digital - Product Thumbs // 1.2 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs();a.trigger("QuatroDigital.pt_callback",[a])}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return a.length?$.extend({},a,new b(a)):a},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
try {
	var Common = {
		run: function() {},
		init: function() {
			Common.vtexBindQuickViewDestroy();
			Common.qdOverlay();			
			Common.applyMosaicCategorieBanners();		
			Common.applyMosaicCategorieBannersFull();
			Common.applySmartCart();			
			Common.applyAmazingMenu();			
			Common.applyAmazingMenuMobile();
			Common.applyTipBarCarousel();
			Common.applyDifferentialsCarousel();
			Common.applyCarouselShelf();			
			Common.openModalVideoInstitutional();
			Common.saveAmountFix();
			Common.setDataScrollToggle();
			Common.openSearchModal();
		},
		ajaxStop: function() {
			Common.saveAmountFix();			
		},
		windowOnload: function() {
			Common.saveAmountFix();			
		},
		openSearchModal: function() {
			$('.header-qd-v1-action-search').click(function() {
				$('.modal-qd-v1-search').modal();
				return false;
			});
		},
		vtexBindQuickViewDestroy: function() {
			window.bindQuickView = function() {};
		},
		qdOverlayClass: 'qd-am-on qd-cart-show qd-sn-on',
		qdOverlay: function() {
			$('.components-qd-v1-overlay').click(function() {
				$(document.body).removeClass(Common.qdOverlayClass);
			});
		},
		applyAmazingMenu: function() {
			$('.header-qd-v1-amazing-menu').QD_amazingMenu({
				callback: function() {
					$('ul.qd-am-dropdown-menu').each(function() {
						$(this).wrapInner('<li class="container"><ul></ul></li>');
					});
				}
			});

			$('.footer-qd-v1-menu-list').QD_amazingMenu();
			
			$('.footer-qd-v1-menu-list >ul >li').click(function(){
				var $t = $(this);
				$t.toggleClass('qd-is-active');
				$t.find('> ul').toggleClass('qd-is-active');
			});
		},
		applyAmazingMenuMobile: function() {
			var wrapper = $('.header-qd-v1-amazing-menu-mobile');

			wrapper.find('> ul > li > ul').prepend(function(){return $(this).prev().clone().wrap('<li></li>').parent()});

			wrapper.QD_amazingMenu({
				callback: function() {
					$('<span class="qd-am-dropdown-trigger"><i class="fa fa-angle-down"></i></span>').appendTo(wrapper.find('.qd-am-has-ul')).click(function() {
						var $t = $(this);
						$.merge($t.parent(), $t.closest('ul')).toggleClass('qd-am-is-active');

						$t.filter(function(){return !$(this).closest('ul').is('.qd-amazing-menu');}).siblings('ul').stop(true, true).slideToggle();
					});

					wrapper.find('> ul > li > .qd-am-dropdown-trigger').click(function() {
						var w = $('.header-qd-v1-amazing-menu-mobile-wrapper');
						w.addClass('qd-am-is-active');
						w.animate({ scrollTop: 0 }, 200);
					});

					wrapper.find('> ul > li > ul > li:first-child').click(function(e){
						e.preventDefault();
						$(this).parents(".qd-am-is-active").removeClass('qd-am-is-active');
					});
				}
			});

			$('.header-qd-v1-amazing-menu-trigger').click(function(evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-am-on');
			});

			$('.header-qd-v1-amazing-menu-mobile-wrapper .header-qd-v1-user-message').on('click', 'a#login', function() {
				$(document.body).removeClass('qd-am-on');
			});

			$('.header-qd-v1-navigator-close').click(function() {
				$(document.body).removeClass('qd-sn-on');
				$('.search-qd-v1-navigator-close').addClass('hide');
			});
		},
		applyTipBarCarousel: function() {
			var wrapper = $('.tip-bar-qd-v1-carousel');

			if (!wrapper.length)
				return;

			var options = {
				arrows: false,
				autoplay: true,
				slidesToShow: 4,
				slidesToScroll: 4,
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

			wrapper.slick($.extend(true, options, (function() {
				// Se estiver dentro do product-qd-v1-tip-bar, ele mostrará só 2 slides por vez, mantendo as outras propriedades da variável options
				if(wrapper.closest('.product-qd-v1-tip-bar').length)
					return { slidesToShow: 2 };
				return {};
			})()));
		},
		applyMosaicCategorieBanners: function() {
			$('.mosaic-categories-qd-v1-wrapper > .box-banner').QD_mosaicBanners({
				classFourColumn: "col-xs-12 col-sm-12 col-md-6 col-lg-12"
			});
		},
		applyMosaicCategorieBannersFull: function() {
			$('.mosaic-categories-qd-v2-wrapper > .box-banner').QD_mosaicBanners({
				classFourColumn: "col-xs-12 col-sm-12",
				containerWidth: 715
			});
		},
		applySmartCart: function() {
			$('.header-qd-v1-actions-cart, .fixed-buttons-qd-v1 .fixed-buttons-qd-v1-cart').append('<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>');
			
			$(document.body).append('<div class="smart-cart-qd-v2-wrapper"><div class="qd-sc-wrapper"></div></div>');

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
						$(".qd-ddc-wrapper3").prepend('<div class="qd-cartTitle"><h3>Meu carrinho</h3></div>');
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
					buyButton: "body .prateleira:not(.qd-am) .buy-button"
				}
			});

			// Callback do Quick View
			window._QuatroDigital_prodBuyCallback = function(jqXHR, textStatus, prodLink, skus){
				$.fn.simpleCart(true);
				$(".shelf-qd-v1-buy-button-modal").modal("hide");
				$(window).trigger("QuatroDigital.qd_bb_prod_add", [new $, skus[0] || 0]);
			};

			$('.header-qd-v1-cart-link, .header-qd-v1-cart-link-float').click(function(evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-cart-show');

				wrapper.height($(window).height());
				wrapper.find(".qd-ddc-prodWrapper").css('max-height', $(window).height() - 193);
			});

			$('.qd_ddc_lightBoxClose').click(function(evt){
				$(document.body).removeClass(Common.qdOverlayClass);
			});
		},
		openModalVideoInstitutional: function() {
			var videoRegex = /(youtu\.be\/|\?v=)([^&]+)/i;

			$('.box-banner a').filter('[href*="youtube.com/"], [href*="youtu.be/"]').click(function(e) {
				e.preventDefault();
				var modal = $('.qd-v1-modal').clone().appendTo(document.body).addClass('hotsite-information-qd-v1-modal');
				var $t = $(this);
				var videoId = ($t.attr('href').match(videoRegex) || ['']).pop();

				modal.find('.modal-header').append('<h2 class="modal-title">' + $t.find('img').attr('alt') + '</h2>');
				$('<iframe src="' + 'https://www.youtube.com/embed/' + videoId + '?wmode=transparent&rel=0" frameborder="0"></iframe>').appendTo(modal.find('.modal-body'));
				modal.modal();
				
				modal.on('hidden.bs.modal', function() {
					modal.remove();
				});
			});
		},
		saveAmountFix: function() {
			$('.shelf-qd-v1-highlight-discount-percentage:not(.qd-on)').addClass('qd-on').each(function() {
				var $t = $(this);
				$t.text(($t.text().trim().match(/[0-9]+/) || [""]).pop() + '% OFF');
			});
		},
		setDataScrollToggle: function() {
			$(document.body).attr('data-qd-scroll-limit', '100');
		},
		applyCarouselShelf: function() {
			var wrapper = $('.carousel-qd-v1-shelf .prateleira').not('.slick-initialized');

			if (!wrapper.length)
				return false;

			wrapper.has('h2').each(function () {
				var $t = $(this);
				$t.find('h2').insertBefore($t);
			});

			var slidesToShow;
			var slidesToShowB;

			wrapper.each(function(){
								
				if ($(this).parent().hasClass('special-carousel-qd-v1-shelf')) {
					slidesToShow = 2;
					slidesToShowB = 1;
				} else {
					slidesToShow = 4;
					slidesToShowB = 2;
				}
					
				$(this).slick({
					prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					slidesToShow: slidesToShow,
					slidesToScroll: slidesToShow,
					infinite: true,
					draggable: false,
					speed: 700,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: slidesToShowB,
								slidesToScroll: slidesToShowB
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
			});

		},
		applyDifferentialsCarousel: function() {
			var wrapper = $('.differentials-carroussel-qd-v1-carousel');

			if (!wrapper.length)
				return;

			var options = {
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				autoplay: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
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

			wrapper.slick($.extend(true, options, (function() {})()));
		}
	};

	var Home = {
		init: function() {
			Home.sliderFull();
			Home.applyBrandsCarousel();			
			Home.applyHotsiteShelfCarousel();			
			Home.scrollBottomHotsite();
			Home.scrollToTop();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		sliderFull: function() {
			var wrapper = $('.slider-qd-v1-full');

			wrapper.slick({
				dots: true,
				fade: true,
				cssEase: 'linear',
				infinite: true,
				speed: 500,
				draggable: false,
				autoplay: true,
				autoplaySpeed: 7000				
			});

			wrapper.each(function() {
				$(this).find('.slick-arrow').wrapAll('<div class="slick-nav" />');
			});
		},
		applyBrandsCarousel: function() {
			var wrapper = $('.brand-carousel-qd-v1-carousel');

			wrapper.slick({
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
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
							slidesToShow: 2,
							slidesToScroll: 2,
							centerMode: true,
							infinite: true								
						}
					},

					{
						breakpoint: 380,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							centerMode: true,
							infinite: true									
						}
					}
				]
			});
		},
		scrollBottomHotsite: function() {
			$('.hotsite-full-banner-qd-v1-scroll-btn').click(function(e) {
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $('.home-special-departament-video-qd-v1-wrapper').offset().top -100
				}, 900, 'swing');
			});
		},
		applyHotsiteShelfCarousel: function() {
			var wrapper = $('.hotsite-banner-shelf-qd-v1-carousel .prateleira').not('.slick-initialized');
			
			if (!wrapper.length)
				return false;

			wrapper.has('h2').each(function () {
				var $t = $(this);
				$t.find('h2').insertBefore($t);
			});

			wrapper.each(function(){										
				$(this).slick({
					prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					draggable: false,
					speed: 700
				});
			});
		},
		scrollToTop: function() {
			$('#returnToTop').click(function(e) {
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $('.common-qd-v1-structure').offset().top -100
				}, 900, 'swing');
			});
		}
	};

	var Search = {
		init: function() {
			Search.openFiltersMenu();
			Search.hideExtendedMenu();
			Search.shelfLineFix();			
			Search.infinityScroll();			
			Home.sliderFull();			
		},
		ajaxStop: function() {
			Search.shelfLineFix();			
		},
		windowOnload: function() {},
		infinityScroll: function () {
			$(".prateleira[id*=ResultItems]").QD_infinityScroll();
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
		openFiltersMenu: function() {
			$('.search-qd-v1-navigator-trigger').click(function(e) {
				e.preventDefault();				
				$(document.body).toggleClass('qd-sn-on');
				$('.search-qd-v1-navigator-close').appendTo('.search-single-navigator').removeClass('hide');
			});

			$('.navigation-tabs').prepend('<span class="search-qd-v1-navigator-close hide"><i class="fa fa-times-circle" aria-hidden="true"></i></span>');
			
			$('.search-qd-v1-navigator-close').click(function() {
				$(document.body).removeClass('qd-sn-on');
				$('.search-qd-v1-navigator-close').addClass('hide');
			});
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
					if(!window.qd_shelf_line_fix_is){
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
			Product.forceImageZoom();	
			Product.accessoriesFix();
			Product.accessoriesApplyCarousel();
			Product.openShipping();
			Product.scrollToDescription();
			Product.qdHideUniqueSkuOption();
			Product.scrollToBuyButton();
			Product.showFloatingBuyBar();
			Product.sellerInfo();
			
			// Apenas para tela de KIT
			if( $(document.body).is(".produto-kit")){
				Product.kitShowItem();
				Product.kitShowSpecification();
				Product.kitItemSelected();
				Product.kitDustRenderCallback();
				Product.kitUnavailableCheck();
				Product.kitShowDescription();
				Product.kitShowImage();
				Product.kitBuyAllItemsButton();
				Product.scrollToKitProducts();
				var kitOriginalPrice;
				Product.setKitOriginalPrice();
				Product.updateKitTotalPrice();
			}
			else{
				Product.applyCarouselThumb(); $(window).on('skuSelected.vtex', Product.applyCarouselThumb);	
				Product.saveAmountFlag();
				Product.setAvailableBodyClass();
				Product.applyBuyTogetherBackground();
			}
			
			Product.buyButtonWithNotification();
		},
		ajaxStop: function() {},
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
		sellerInfo:function() {
			var textSeller = $(".product-qd-v1-seller-info .seller-name a").text().toLowerCase();

			if (textSeller.length && (textSeller == "casatema" || textSeller == "devcasatema"))
				return;
				
			$(".product-qd-v1-seller-info").removeClass("hide");
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
		applyCarouselThumb: function() {
			var sliderWrapper = $('.product-qd-v1-image-carrousel'); // Wrapper que será inserido o carousel
			var thumbsWrapper = $('.thumbs').first().clone(); // Wrapper onde foi inserido as thumbs
			var thumbsSliderWrapper = $('.product-qd-v1-image-thumbs'); // Wrapper onde foi inserido as thumbs

			sliderWrapper.filter('.slick-initialized').slick('unslick');
			thumbsSliderWrapper.filter('.slick-initialized').slick('unslick');

			var thumbsLi;
			(function cloneThumb () {
				thumbsLi = thumbsWrapper.find('li');
				if(thumbsLi.length <= 4){
					thumbsLi.clone().appendTo(thumbsWrapper);
					cloneThumb();
				}
			})();

			thumbsWrapper.find('li:first').appendTo(thumbsWrapper);

			thumbsSliderWrapper.html(thumbsWrapper.html());

			thumbsSliderWrapper.find('img').each(function(){
				$t = $(this);
				$t.attr('src', $t.attr('src').replace('-55-55', '-90-90'));
			});

			sliderWrapper.empty();
			thumbsWrapper.find('a').each(function(index){
				$t = $(this);
				$('<div class="qd-slide qd-product-image-' + index + '"><a href="' + $t.attr('rel').replace('-292-292', '-640-640') + '"><img src="' + $t.attr('rel').replace('-292-292', '-640-640') + '"/></a></div>').appendTo(sliderWrapper);
			});

			var options = {
				centerMode: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				focusOnSelect: true,
				centerPadding: 0
			};
			sliderWrapper.slick($.extend({}, options, {
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  				asNavFor: '.product-qd-v1-image-thumbs',
  				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 1,
							centerPadding: '0'
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							centerPadding: 0,
							arrows: false
						}
					},
				]
			}));

			var thumbIndex;

			thumbsSliderWrapper.addClass('slick-slide').slick($.extend({}, options, {
				arrows: false,
				  asNavFor: '.product-qd-v1-image-carrousel',
				  slidesToShow: 5
			}));
			thumbsSliderWrapper.on('afterChange', function(event, slick, slide){
				thumbsSliderWrapper.find('.ON').removeClass('ON');
				thumbsSliderWrapper.find('.slick-active.slick-center a').addClass('ON');
			}).slick('getSlick').slickGoTo(0);

			sliderWrapper.find('a').click(function(e){e.preventDefault()});
		},
		openShipping: function() {
			if( typeof window.ShippingValue === "function" )
				window.ShippingValue();
		},
		scrollToDescription: function() {
			$('.product-qd-v1-link-description').click(function(e) {
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $('.product-qd-v1-information-wrapper').offset().top -100
				}, 900, 'swing');
			});
		},
		scrollToKitProducts: function() {
			$('.ver-itens-kit').click(function(e) {
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $('.product-qd-v1-kit-products').offset().top -100
				}, 900, 'swing');
			});
		},
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
		scrollToBuyButton: function() {
			$('.product-qd-v1-buy-button-float').click(function(e) {
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $('.product-qd-v1-name').offset().top -100
				}, 900, 'swing');
			});
		},
		showFloatingBuyBar: function () {
			var targetOffset = $(".product-qd-v1-buy-button").offset().top - 10;
			var elem = $(".product-floating-bar-buy");

			var $w = $(window).scroll(function () {

				if ($w.scrollTop() > targetOffset) {
					elem.addClass("active");
				}
				else {
					elem.removeClass("active");
				}

			});
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
		saveAmountFlag: function() {
			var flag = $('.product-qd-v1-stamps-highlight-discount');

			$(window).on('skuSelected.vtex', function(e, sku, data) {
				if (!flag.length)
					flag = $('<div class="product-qd-v1-stamps-highlight-discount"></div>').prependTo('.product-qd-v1-stamps');

				if (data.listPrice > data.bestPrice)
					flag.text(parseInt(100 - data.bestPrice / data.listPrice * 100) + "% OFF").show();
				else
					flag.hide();
			});

			if (skuJson.skus.length >= 1) {
				if (!flag.length)
					flag = $('<div class="product-qd-v1-stamps-highlight-discount"></div>').prependTo('.product-qd-v1-stamps');

				if (skuJson.skus[0].listPrice > skuJson.skus[0].bestPrice)
					flag.text(parseInt(100 - skuJson.skus[0].bestPrice / skuJson.skus[0].listPrice * 100) + "% OFF").show();
			}
		},
		applyBuyTogetherBackground: function() {
			var wrapper = $('.buy-together-content').html();

			if (wrapper.length >= 1)
				$('.product-qd-v1-buy-together-wrapper').addClass('qd-am-is-active');
		},
		kitShowItem: function () {
			$(".product-qd-v1-kit-item-row").each(function () {
				if ($(this).find("#image-main").length) {
					$(this).show();
				}
			});
		},
		kitShowSpecification: function () {
			$(".specification-row").each(function () {
				if ($(this).find(".productName").length) {
					$(this).show();
				}
			});
		},
		kitItemSelected: function () {
			$(".kit-item-selects").bind("click", function () {
				$(this).parents(".product-qd-v1-kit-item-row").toggleClass("qd-state-not-selected");
				Product.updateKitTotalPrice();
			});
		},
		kitBuyAllItemsButton: function() {
			var productLink = $(".product-qd-v1-buy-button a").attr('href');
			$(".product-qd-v1-buy-button a").click(function(e){
				// Mantem o link do produto
				var items = $(".product-qd-v1-kit-item-row:not('.qd-state-not-selected, .qd-item-unavailable') a.buy-in-page-button");
				var totalItems = $(".product-qd-v1-kit-item-row a.buy-in-page-button").length;
				if(items.length == totalItems) {
					$(this).attr('href', productLink);
					return;
				}
				
				$(this).attr('href', '#');
				var url = Product.setBuyUrl();
				if(url)
					$(this).attr('href', url);
				else{
					e.preventDefault();
					alert('Por favor, selecione o modelo desejado.');
				}
			});
		},
		setBuyUrl: function(){
			var btns = $(".product-qd-v1-kit-item-row:not('.qd-state-not-selected, .qd-item-unavailable') .buy-in-page-button");
			var i = 0;
			var uri = [];
			btns.each(function(){
				var href = this.href || "";
				
				if( href == "" || href.indexOf("javascript:alert(") > -1 ){
					uri = [];
					
					var elem = $(this).closest('.product-qd-v1-kit-item-row').addClass('qd-state-not-chosen');
					$("html, body").animate({ scrollTop: elem.offset().top - 150 });
					setTimeout(function() {
						elem.removeClass('qd-state-not-chosen');
					}, 700);

					return false;
				}

				var param = (this.search || '').replace('?','').split("&");
				var itemUri = [];
				for( var k = 0; k < param.length; k++ ){
					if( param[k].search(/^(sku|qty|seller)/i) != 0)
						continue;
					itemUri.push( param[k] );
				}
				uri.push( itemUri.join("&") );

				i++;
			});

			if( i == btns.length )
				return "/checkout/cart/add?" + uri.join("&") + "&sc=" + jssalesChannel;
		},
		kitDustRenderCallback: function () {
			var orig = window.dust.render;

			window.dust.render = function () {
				orig.apply(this, arguments);

				Product.kitUnavailableCheck();
			}
		},
		kitUnavailableCheck: function () {
			$(".product-qd-v1-kit-item-row").each(function () {
				var $t = $(this);
				if ($t.find(".sku-notifyme:visible").length)
					$t.addClass("qd-item-unavailable");
				else
					$t.removeClass("qd-item-unavailable");
			});
		},
		kitShowDescription: function () {
			var wrapper = $('.product-qd-v1-specification');

			$(".product-qd-v1-kit-details a").click(function (e) {
				e.preventDefault();				

				var pId = $(this).closest('.product-qd-v1-kit-item-row').find('.product-qd-v1-name #___rc-p-id').val();
				var elem = wrapper.find('#___rc-p-id[value=' + pId + ']').closest('.specification-row').addClass('qd-specification-hightlight');
				$("html, body").animate({ scrollTop: elem.offset().top - 150 });
				setTimeout(function() {
					elem.removeClass('qd-specification-hightlight');
				}, 1500);
				
				return false;
			})
		},
		kitShowImage: function () {
			$(".product-qd-v1-kit-image").bind("click", function () {
				if (typeof window.FireSkuChangeImage === "function")
					window.FireSkuChangeImage(($(this).parents(".product-qd-v1-kit-item-row").find("#___rc-p-sku-ids").val() || "").split(",").shift());

				$('html, body').animate({ scrollTop: Math.floor($(".bread-crumb").offset().top || 0) });

				return false;
			});

			$(".product-picture").bind("click", function () {
				if (typeof window.FireSkuChangeImage === "function")
					window.FireSkuChangeImage(($(".product-qd-v1-name #___rc-p-sku-ids").val() || "").split(",").shift());

				$('html, body').animate({ scrollTop: Math.floor($("header").offset().top || 0) });
				// $('html, body').animate({ scrollTop: Math.floor($(".bread-crumb").offset().top || 0) });

				return false;
			});
		},
		setKitOriginalPrice: function() {
			if(!Product.kitOriginalPrice)
				Product.kitOriginalPrice = {
					from: $('.product-qd-v1-price-wrapper .skuListPrice').text(),
					to: $('.product-qd-v1-price-wrapper .skuPrice').text()
				}
		},
		updateKitTotalPrice: function () {
			var totalFromPrice = 0; 
			var totalToPrice = 0;
			var items = $(".product-qd-v1-kit-item-row:not('.qd-state-not-selected, .qd-item-unavailable') a.buy-in-page-button");
			// var installment = 1;
			var totalItems = $(".product-qd-v1-kit-item-row a.buy-in-page-button").length;
			
			if(items.length == totalItems){
				$('.product-qd-v1-price-wrapper .skuListPrice').text(Product.kitOriginalPrice.from);
				$('.product-qd-v1-price-wrapper .skuPrice').text(Product.kitOriginalPrice.to);
				return;
			}

			for(var i = 0; i < items.length; i++){
				var sku = '';
				var url = items[i].href;
				if(url.indexOf('sku=') >= 0){
					sku = items[i].href.split('?')[1].match(/sku=(\s*\d+)/i)[1];
				}

				var skuData = Product.getKitItemPrice($(items[i]).attr('productindex'), sku);
				
				// installment = Math.min(installment, skuData['installment']);
				totalFromPrice += skuData['from_price'];
				totalToPrice += skuData['to_price'];
			}
			
			
			// $('.product-qd-v1-price-wrapper .skuBestInstallmentNumber').html(installment + "<span class='x'>x</span>");
			// $('.product-qd-v1-price-wrapper .skuBestInstallmentValue').text('R$ ' + (totalPrice / (installment*100)).toFixed(2).toString().replace('.',','));
			$('.product-qd-v1-price-wrapper .skuListPrice').text('R$ ' + (totalFromPrice / 100).toFixed(2).toString().replace('.',',').replace(/(\d{1,3})(\d{3}),/, "$1.$2,"));
			$('.product-qd-v1-price-wrapper .skuPrice').text('R$ ' + (totalToPrice / 100).toFixed(2).toString().replace('.',',').replace(/(\d{1,3})(\d{3}),/, "$1.$2,"));
		},
		getKitItemPrice: function(productindex, sku) {
			var skuData = [];
			var selectedSku = '';
			var productJson = window['skuJson_' + productindex];
			if(sku){
				for(var k = 0; k < productJson.skus.length; k++) {
					if(productJson.skus[k].sku == sku)
						selectedSku = productJson.skus[k];
				}
			}
			else {
				for(var k = 0; k < productJson.skus.length; k++) {
					if(!selectedSku || productJson.skus[k].bestPrice < selectedSku.bestPrice)
						selectedSku = productJson.skus[k];
				}
			}
			console.log(selectedSku);
			skuData['from_price'] = selectedSku.listPrice * selectedSku.unitMultiplier;
			skuData['to_price'] = selectedSku.bestPrice * selectedSku.unitMultiplier;
			skuData['installment'] = selectedSku.installments;
			return skuData;
		},
		buyButtonWithNotification: function() {
			var wrapper = $(".qd_cart_auto");
			if (!wrapper.length)
				wrapper = $(document.body);

			wrapper.QD_buyButton({
				buyButton: '.buy-button'
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
			Institutional.sideMenuToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		sideMenuToggle:function() {
			$('.institucional-qd-v1-menu-toggle-wrap').click(function(evt) {
				evt.preventDefault();
				$(document.body).addClass('qd-sn-on');
			});

			$('.institucional-qd-v1-side-menu-wrap-close').click(function(){
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
var _0xb9c5=['push','success','complete','parameters','callbackFns','successPopulated','errorPopulated','boolean','completePopulated','error','object','call','clearQueueDelay','undefined','jqXHR','readyState','data','textStatus','errorThrown','version','2.1','/produto/sku/','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20SKU,\x20a\x20requisição\x20falhou!','QD_smartStockAvailable','unshift','alerta','info','apply','warn','removeClass','qd-ssa-sku-no-selected','addClass','qd-ssa-sku-selected','AvailableQuantity','each','find','[data-qd-ssa-text]','qd-ssa-hide','qd-ssa-show','filter','[data-qd-ssa-text=\x22','length','[data-qd-ssa-text=\x22default\x22]','hide','html','replace','#qtt','show','message','qd-ssa-skus-','skus','split','Erro\x20ao\x20adicionar\x20classe\x20com\x20a\x20quantidade\x20de\x20SKUs\x20do\x20produto.\x20Detalhes:\x20','vtex.sku.selected\x20QuatroDigital.ssa.skuSelected','sku','SkuSellersInformation','QuatroDigital.ssa.prodUnavailable','vtex.sku.selected.QD','qd-ssa-sku-prod-unavailable','nfngrzn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','charCodeAt','join','ite','---','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','qdPlugin','initialSkuSelected','QuatroDigital.ssa.skuSelected','prod','Erro\x20ao\x20tentar\x20disparar\x20o\x20evento\x20customizado\x20de\x20seleção\x20de\x20SKU.\x20Detalhes:\x20','unavailable','trigger','off','Erro\x20ao\x20armazenar\x20o\x20SKU\x20disparado\x20no\x20ínicio\x20da\x20página.\x20Detalhes:\x20','Erro\x20ao\x20Verificar\x20se\x20todos\x20os\x20SKUs\x20estão\x20indisponíveis.\x20Detalhes:\x20','.qd_smart_stock_available_auto','function','qdAjax','extend','opts'];(function(_0x35c5ec,_0x12a5c2){var _0x329efc=function(_0x342932){while(--_0x342932){_0x35c5ec['push'](_0x35c5ec['shift']());}};_0x329efc(++_0x12a5c2);}(_0xb9c5,0x196));var _0x5b9c=function(_0x148ffb,_0x3b8cf1){_0x148ffb=_0x148ffb-0x0;var _0x5e6da9=_0xb9c5[_0x148ffb];return _0x5e6da9;};(function(_0x2bfee4){if(_0x5b9c('0x0')!==typeof _0x2bfee4[_0x5b9c('0x1')]){var _0x5dd19d={};_0x2bfee4['qdAjaxQueue']=_0x5dd19d;_0x2bfee4[_0x5b9c('0x1')]=function(_0x36fdd2){var _0x22446b=_0x2bfee4[_0x5b9c('0x2')]({},{'success':function(){},'error':function(){},'complete':function(){},'clearQueueDelay':0x0},_0x36fdd2);var _0x3ef998=escape(encodeURIComponent(_0x22446b['url']));_0x5dd19d[_0x3ef998]=_0x5dd19d[_0x3ef998]||{};_0x5dd19d[_0x3ef998][_0x5b9c('0x3')]=_0x5dd19d[_0x3ef998][_0x5b9c('0x3')]||[];_0x5dd19d[_0x3ef998]['opts'][_0x5b9c('0x4')]({'success':function(_0x1a393f,_0x5c3820,_0x13c8e9){_0x22446b[_0x5b9c('0x5')]['call'](this,_0x1a393f,_0x5c3820,_0x13c8e9);},'error':function(_0x2cfc7a,_0x423fad,_0x544bca){_0x22446b['error']['call'](this,_0x2cfc7a,_0x423fad,_0x544bca);},'complete':function(_0x133116,_0x231c1a){_0x22446b[_0x5b9c('0x6')]['call'](this,_0x133116,_0x231c1a);}});_0x5dd19d[_0x3ef998]['parameters']=_0x5dd19d[_0x3ef998][_0x5b9c('0x7')]||{'success':{},'error':{},'complete':{}};_0x5dd19d[_0x3ef998]['callbackFns']=_0x5dd19d[_0x3ef998][_0x5b9c('0x8')]||{};_0x5dd19d[_0x3ef998][_0x5b9c('0x8')]['successPopulated']='boolean'===typeof _0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0x9')]?_0x5dd19d[_0x3ef998]['callbackFns']['successPopulated']:!0x1;_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xa')]=_0x5b9c('0xb')===typeof _0x5dd19d[_0x3ef998][_0x5b9c('0x8')]['errorPopulated']?_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xa')]:!0x1;_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xc')]=_0x5b9c('0xb')===typeof _0x5dd19d[_0x3ef998]['callbackFns'][_0x5b9c('0xc')]?_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xc')]:!0x1;_0x36fdd2=_0x2bfee4[_0x5b9c('0x2')]({},_0x22446b,{'success':function(_0x2a9bea,_0x194389,_0x351896){_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0x5')]={'data':_0x2a9bea,'textStatus':_0x194389,'jqXHR':_0x351896};_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0x9')]=!0x0;for(var _0x3a8f17 in _0x5dd19d[_0x3ef998][_0x5b9c('0x3')])'object'===typeof _0x5dd19d[_0x3ef998][_0x5b9c('0x3')][_0x3a8f17]&&(_0x5dd19d[_0x3ef998][_0x5b9c('0x3')][_0x3a8f17][_0x5b9c('0x5')]['call'](this,_0x2a9bea,_0x194389,_0x351896),_0x5dd19d[_0x3ef998]['opts'][_0x3a8f17][_0x5b9c('0x5')]=function(){});},'error':function(_0x59585e,_0x2a281c,_0xf213c){_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0xd')]={'errorThrown':_0xf213c,'textStatus':_0x2a281c,'jqXHR':_0x59585e};_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xa')]=!0x0;for(var _0x3905ec in _0x5dd19d[_0x3ef998][_0x5b9c('0x3')])_0x5b9c('0xe')===typeof _0x5dd19d[_0x3ef998][_0x5b9c('0x3')][_0x3905ec]&&(_0x5dd19d[_0x3ef998][_0x5b9c('0x3')][_0x3905ec][_0x5b9c('0xd')][_0x5b9c('0xf')](this,_0x59585e,_0x2a281c,_0xf213c),_0x5dd19d[_0x3ef998][_0x5b9c('0x3')][_0x3905ec][_0x5b9c('0xd')]=function(){});},'complete':function(_0xc5444d,_0x2d6400){_0x5dd19d[_0x3ef998]['parameters'][_0x5b9c('0x6')]={'textStatus':_0x2d6400,'jqXHR':_0xc5444d};_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xc')]=!0x0;for(var _0x5041b0 in _0x5dd19d[_0x3ef998][_0x5b9c('0x3')])_0x5b9c('0xe')===typeof _0x5dd19d[_0x3ef998]['opts'][_0x5041b0]&&(_0x5dd19d[_0x3ef998]['opts'][_0x5041b0][_0x5b9c('0x6')][_0x5b9c('0xf')](this,_0xc5444d,_0x2d6400),_0x5dd19d[_0x3ef998][_0x5b9c('0x3')][_0x5041b0][_0x5b9c('0x6')]=function(){});isNaN(parseInt(_0x22446b[_0x5b9c('0x10')]))||setTimeout(function(){_0x5dd19d[_0x3ef998]['jqXHR']=void 0x0;_0x5dd19d[_0x3ef998][_0x5b9c('0x3')]=void 0x0;_0x5dd19d[_0x3ef998]['parameters']=void 0x0;_0x5dd19d[_0x3ef998]['callbackFns']=void 0x0;},_0x22446b['clearQueueDelay']);}});_0x5b9c('0x11')===typeof _0x5dd19d[_0x3ef998][_0x5b9c('0x12')]?_0x5dd19d[_0x3ef998]['jqXHR']=_0x2bfee4['ajax'](_0x36fdd2):_0x5dd19d[_0x3ef998][_0x5b9c('0x12')]&&_0x5dd19d[_0x3ef998][_0x5b9c('0x12')][_0x5b9c('0x13')]&&0x4==_0x5dd19d[_0x3ef998][_0x5b9c('0x12')][_0x5b9c('0x13')]&&(_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0x9')]&&_0x36fdd2[_0x5b9c('0x5')](_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0x5')][_0x5b9c('0x14')],_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0x5')][_0x5b9c('0x15')],_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0x5')][_0x5b9c('0x12')]),_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xa')]&&_0x36fdd2[_0x5b9c('0xd')](_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0xd')]['jqXHR'],_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0xd')]['textStatus'],_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0xd')][_0x5b9c('0x16')]),_0x5dd19d[_0x3ef998][_0x5b9c('0x8')][_0x5b9c('0xc')]&&_0x36fdd2['complete'](_0x5dd19d[_0x3ef998]['parameters'][_0x5b9c('0x6')][_0x5b9c('0x12')],_0x5dd19d[_0x3ef998][_0x5b9c('0x7')][_0x5b9c('0x6')][_0x5b9c('0x15')]));};_0x2bfee4[_0x5b9c('0x1')][_0x5b9c('0x17')]=_0x5b9c('0x18');}}(jQuery));(function(_0x218bb1){function _0x150641(_0x452e99,_0x58403b){_0x5b25da[_0x5b9c('0x1')]({'url':_0x5b9c('0x19')+_0x452e99,'clearQueueDelay':null,'success':_0x58403b,'error':function(){_0x1587d2(_0x5b9c('0x1a'));}});}var _0x5b25da=jQuery;if(_0x5b9c('0x0')!==typeof _0x5b25da['fn'][_0x5b9c('0x1b')]){var _0x1587d2=function(_0xcba143,_0x242b2c){if('object'===typeof console){var _0x48b9f9;_0x5b9c('0xe')===typeof _0xcba143?(_0xcba143[_0x5b9c('0x1c')]('[Quatro\x20Digital\x20-\x20Smart\x20Stock\x20Available]\x0a'),_0x48b9f9=_0xcba143):_0x48b9f9=['[Quatro\x20Digital\x20-\x20Smart\x20Stock\x20Available]\x0a'+_0xcba143];_0x5b9c('0x11')===typeof _0x242b2c||_0x5b9c('0x1d')!==_0x242b2c['toLowerCase']()&&'aviso'!==_0x242b2c['toLowerCase']()?_0x5b9c('0x11')!==typeof _0x242b2c&&_0x5b9c('0x1e')===_0x242b2c['toLowerCase']()?console[_0x5b9c('0x1e')]['apply'](console,_0x48b9f9):console[_0x5b9c('0xd')][_0x5b9c('0x1f')](console,_0x48b9f9):console[_0x5b9c('0x20')]['apply'](console,_0x48b9f9);}},_0x137479={},_0x12c3e7=function(_0x224071,_0x9c0328){function _0x1d94b7(_0x90b2e6){try{_0x224071[_0x5b9c('0x21')](_0x5b9c('0x22'))[_0x5b9c('0x23')](_0x5b9c('0x24'));var _0x3334a3=_0x90b2e6[0x0]['SkuSellersInformation'][0x0][_0x5b9c('0x25')];_0x224071['attr']('data-qd-ssa-qtt',_0x3334a3);_0x224071[_0x5b9c('0x26')](function(){var _0x224071=_0x5b25da(this)[_0x5b9c('0x27')](_0x5b9c('0x28'));if(0x1>_0x3334a3)return _0x224071['hide']()[_0x5b9c('0x23')](_0x5b9c('0x29'))[_0x5b9c('0x21')](_0x5b9c('0x2a'));var _0x90b2e6=_0x224071[_0x5b9c('0x2b')](_0x5b9c('0x2c')+_0x3334a3+'\x22]');_0x90b2e6=_0x90b2e6[_0x5b9c('0x2d')]?_0x90b2e6:_0x224071[_0x5b9c('0x2b')](_0x5b9c('0x2e'));_0x224071[_0x5b9c('0x2f')]()['addClass'](_0x5b9c('0x29'))[_0x5b9c('0x21')](_0x5b9c('0x2a'));_0x90b2e6['html']((_0x90b2e6[_0x5b9c('0x30')]()||'')[_0x5b9c('0x31')](_0x5b9c('0x32'),_0x3334a3));_0x90b2e6[_0x5b9c('0x33')]()[_0x5b9c('0x23')](_0x5b9c('0x2a'))[_0x5b9c('0x21')]('qd-ssa-hide');});}catch(_0x3758aa){_0x1587d2(['Erro\x20ao\x20processar\x20as\x20informações\x20HTML\x20do\x20SKU.\x20Detalhes:\x20',_0x3758aa[_0x5b9c('0x34')]]);}}if(_0x224071[_0x5b9c('0x2d')]){_0x224071[_0x5b9c('0x23')]('qd-ssa-on');_0x224071[_0x5b9c('0x23')](_0x5b9c('0x22'));try{_0x224071['addClass'](_0x5b9c('0x35')+vtxctx[_0x5b9c('0x36')][_0x5b9c('0x37')](';')[_0x5b9c('0x2d')]);}catch(_0x1c1ba1){_0x1587d2([_0x5b9c('0x38'),_0x1c1ba1[_0x5b9c('0x34')]]);}_0x5b25da(window)['on'](_0x5b9c('0x39'),function(_0xca0d10,_0x23172a,_0x24a350){try{_0x150641(_0x24a350[_0x5b9c('0x3a')],function(_0x2d2fc0){_0x1d94b7(_0x2d2fc0);0x1===vtxctx[_0x5b9c('0x36')][_0x5b9c('0x37')](';')[_0x5b9c('0x2d')]&&0x0==_0x2d2fc0[0x0][_0x5b9c('0x3b')][0x0]['AvailableQuantity']&&_0x5b25da(window)['trigger'](_0x5b9c('0x3c'));});}catch(_0x1df4e6){_0x1587d2(['Erro\x20ao\x20processar\x20o\x20SKU.\x20Detalhes:\x20',_0x1df4e6[_0x5b9c('0x34')]]);}});_0x5b25da(window)['off'](_0x5b9c('0x3d'));_0x5b25da(window)['on']('QuatroDigital.ssa.prodUnavailable',function(){_0x224071['addClass'](_0x5b9c('0x3e'))[_0x5b9c('0x2f')]();});}};_0x218bb1=function(_0xe212fb){var _0x3ce63e={'p':_0x5b9c('0x3f')};return function(_0x4409bf){var _0x2d7675=function(_0x327bdf){return _0x327bdf;};var _0xa0c17a=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x4409bf=_0x4409bf['d'+_0xa0c17a[0x10]+'c'+_0xa0c17a[0x11]+'m'+_0x2d7675(_0xa0c17a[0x1])+'n'+_0xa0c17a[0xd]]['l'+_0xa0c17a[0x12]+'c'+_0xa0c17a[0x0]+'ti'+_0x2d7675('o')+'n'];var _0x117ffe=function(_0x128ec1){return escape(encodeURIComponent(_0x128ec1['replace'](/\./g,'¨')[_0x5b9c('0x31')](/[a-zA-Z]/g,function(_0x524462){return String[_0x5b9c('0x40')](('Z'>=_0x524462?0x5a:0x7a)>=(_0x524462=_0x524462[_0x5b9c('0x41')](0x0)+0xd)?_0x524462:_0x524462-0x1a);})));};var _0x4d6d6c=_0x117ffe(_0x4409bf[[_0xa0c17a[0x9],_0x2d7675('o'),_0xa0c17a[0xc],_0xa0c17a[_0x2d7675(0xd)]][_0x5b9c('0x42')]('')]);_0x117ffe=_0x117ffe((window[['js',_0x2d7675('no'),'m',_0xa0c17a[0x1],_0xa0c17a[0x4]['toUpperCase'](),_0x5b9c('0x43')][_0x5b9c('0x42')]('')]||_0x5b9c('0x44'))+['.v',_0xa0c17a[0xd],'e',_0x2d7675('x'),'co',_0x2d7675('mm'),'erc',_0xa0c17a[0x1],'.c',_0x2d7675('o'),'m.',_0xa0c17a[0x13],'r'][_0x5b9c('0x42')](''));for(var _0x2f43a2 in _0x3ce63e){if(_0x117ffe===_0x2f43a2+_0x3ce63e[_0x2f43a2]||_0x4d6d6c===_0x2f43a2+_0x3ce63e[_0x2f43a2]){var _0x27593a='tr'+_0xa0c17a[0x11]+'e';break;}_0x27593a='f'+_0xa0c17a[0x0]+'ls'+_0x2d7675(_0xa0c17a[0x1])+'';}_0x2d7675=!0x1;-0x1<_0x4409bf[[_0xa0c17a[0xc],'e',_0xa0c17a[0x0],'rc',_0xa0c17a[0x9]][_0x5b9c('0x42')]('')][_0x5b9c('0x45')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x2d7675=!0x0);return[_0x27593a,_0x2d7675];}(_0xe212fb);}(window);if(!eval(_0x218bb1[0x0]))return _0x218bb1[0x1]?_0x1587d2(_0x5b9c('0x46')):!0x1;_0x5b25da['fn'][_0x5b9c('0x1b')]=function(_0xac5118){var _0x2e4bd0=_0x5b25da(this);_0xac5118=_0x5b25da[_0x5b9c('0x2')](!0x0,{},_0x137479,_0xac5118);_0x2e4bd0[_0x5b9c('0x47')]=new _0x12c3e7(_0x2e4bd0,_0xac5118);try{_0x5b9c('0xe')===typeof _0x5b25da['fn']['QD_smartStockAvailable'][_0x5b9c('0x48')]&&_0x5b25da(window)['trigger'](_0x5b9c('0x49'),[_0x5b25da['fn'][_0x5b9c('0x1b')]['initialSkuSelected'][_0x5b9c('0x4a')],_0x5b25da['fn'][_0x5b9c('0x1b')]['initialSkuSelected'][_0x5b9c('0x3a')]]);}catch(_0x1d1912){_0x1587d2([_0x5b9c('0x4b'),_0x1d1912[_0x5b9c('0x34')]]);}_0x5b25da['fn']['QD_smartStockAvailable'][_0x5b9c('0x4c')]&&_0x5b25da(window)[_0x5b9c('0x4d')](_0x5b9c('0x3c'));return _0x2e4bd0;};_0x5b25da(window)['on'](_0x5b9c('0x3d'),function(_0x5b6540,_0x5a3844,_0xf22f14){try{_0x5b25da['fn']['QD_smartStockAvailable'][_0x5b9c('0x48')]={'prod':_0x5a3844,'sku':_0xf22f14},_0x5b25da(this)[_0x5b9c('0x4e')](_0x5b6540);}catch(_0x64cf6f){_0x1587d2([_0x5b9c('0x4f'),_0x64cf6f[_0x5b9c('0x34')]]);}});_0x5b25da(window)['on']('vtex.sku.selectable',function(_0x117c8f,_0x19fd73,_0x5906a9){try{for(var _0x11d166=_0x5906a9[_0x5b9c('0x2d')],_0x33f664=_0x19fd73=0x0;_0x33f664<_0x11d166&&!_0x5906a9[_0x33f664]['available'];_0x33f664++)_0x19fd73+=0x1;_0x11d166<=_0x19fd73&&(_0x5b25da['fn'][_0x5b9c('0x1b')][_0x5b9c('0x4c')]=!0x0);_0x5b25da(this)[_0x5b9c('0x4e')](_0x117c8f);}catch(_0x140bf3){_0x1587d2([_0x5b9c('0x50'),_0x140bf3[_0x5b9c('0x34')]]);}});_0x5b25da(function(){_0x5b25da(_0x5b9c('0x51'))[_0x5b9c('0x1b')]();});}}(window));
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

/* Quatro Digital Amazing Menu */
var _0x62c9=['qd-amazing-menu','>ul','qd-am-column','qd-am-dropdown-menu','qd-am-dropdown','qd-am-level-','add','qd-am-','-li','callback','call','extend','getParent','closest','QD_amazingMenu','/qd-amazing-menu','warn','object','unshift','[QD\x20Amazing\x20Menu]\x0a','undefined','alerta','toLowerCase','info','error','apply','join','qdAmAddNdx','each','addClass','qd-am-li-','last','qd-am-last','nfngrzn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','charCodeAt','toUpperCase','ite','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','find','.qd_am_code','filter','.qd-am-banner','length','parent','qd-am-collection-wrapper','qdAjax','url','.box-banner','clone','insertBefore','hide','qd-am-content-loaded','trim','attr','[class*=\x27colunas\x27]','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','\x27\x20falho.','ajaxCallback','QuatroDigital.am.ajaxCallback','ul[itemscope]','UL\x20do\x20menu\x20não\x20encontrada','li\x20>ul','qd-am-has-ul','children',':not(ul)','first','replaceSpecialChars','>li'];(function(_0x46382a,_0x1ec272){var _0x5736d8=function(_0x3503fa){while(--_0x3503fa){_0x46382a['push'](_0x46382a['shift']());}};_0x5736d8(++_0x1ec272);}(_0x62c9,0x9a));var _0x962c=function(_0x16f353,_0x5e1570){_0x16f353=_0x16f353-0x0;var _0x24778f=_0x62c9[_0x16f353];return _0x24778f;};(function(_0x4fe3d4){_0x4fe3d4['fn'][_0x962c('0x0')]=_0x4fe3d4['fn'][_0x962c('0x1')];}(jQuery));(function(_0x43dc32){var _0xce2251;var _0x2cfc9e=jQuery;if('function'!==typeof _0x2cfc9e['fn'][_0x962c('0x2')]){var _0x390fac={'url':_0x962c('0x3'),'callback':function(){},'ajaxCallback':function(){}};var _0x4a0a0a=function(_0x3d66ab,_0x45ae97){if('object'===typeof console&&'undefined'!==typeof console['error']&&'undefined'!==typeof console['info']&&'undefined'!==typeof console[_0x962c('0x4')]){var _0x24c398;_0x962c('0x5')===typeof _0x3d66ab?(_0x3d66ab[_0x962c('0x6')](_0x962c('0x7')),_0x24c398=_0x3d66ab):_0x24c398=[_0x962c('0x7')+_0x3d66ab];if(_0x962c('0x8')===typeof _0x45ae97||_0x962c('0x9')!==_0x45ae97[_0x962c('0xa')]()&&'aviso'!==_0x45ae97[_0x962c('0xa')]())if(_0x962c('0x8')!==typeof _0x45ae97&&_0x962c('0xb')===_0x45ae97[_0x962c('0xa')]())try{console[_0x962c('0xb')]['apply'](console,_0x24c398);}catch(_0x1c5197){try{console[_0x962c('0xb')](_0x24c398['join']('\x0a'));}catch(_0x21bb11){}}else try{console[_0x962c('0xc')][_0x962c('0xd')](console,_0x24c398);}catch(_0x29feda){try{console[_0x962c('0xc')](_0x24c398[_0x962c('0xe')]('\x0a'));}catch(_0x2d28ae){}}else try{console[_0x962c('0x4')][_0x962c('0xd')](console,_0x24c398);}catch(_0x27a4db){try{console[_0x962c('0x4')](_0x24c398['join']('\x0a'));}catch(_0x324afa){}}}};_0x2cfc9e['fn'][_0x962c('0xf')]=function(){var _0x2a41c1=_0x2cfc9e(this);_0x2a41c1[_0x962c('0x10')](function(_0x3be4cc){_0x2cfc9e(this)[_0x962c('0x11')](_0x962c('0x12')+_0x3be4cc);});_0x2a41c1['first']()[_0x962c('0x11')]('qd-am-first');_0x2a41c1[_0x962c('0x13')]()[_0x962c('0x11')](_0x962c('0x14'));return _0x2a41c1;};_0x2cfc9e['fn'][_0x962c('0x2')]=function(){};_0x43dc32=function(_0xa05544){var _0x1dd9bd={'p':_0x962c('0x15')};return function(_0x1d1103){var _0x490294=function(_0x37c6c2){return _0x37c6c2;};var _0x2ca8c9=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x1d1103=_0x1d1103['d'+_0x2ca8c9[0x10]+'c'+_0x2ca8c9[0x11]+'m'+_0x490294(_0x2ca8c9[0x1])+'n'+_0x2ca8c9[0xd]]['l'+_0x2ca8c9[0x12]+'c'+_0x2ca8c9[0x0]+'ti'+_0x490294('o')+'n'];var _0x15a81f=function(_0x540112){return escape(encodeURIComponent(_0x540112[_0x962c('0x16')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x41e29f){return String['fromCharCode'](('Z'>=_0x41e29f?0x5a:0x7a)>=(_0x41e29f=_0x41e29f[_0x962c('0x17')](0x0)+0xd)?_0x41e29f:_0x41e29f-0x1a);})));};var _0x48097b=_0x15a81f(_0x1d1103[[_0x2ca8c9[0x9],_0x490294('o'),_0x2ca8c9[0xc],_0x2ca8c9[_0x490294(0xd)]]['join']('')]);_0x15a81f=_0x15a81f((window[['js',_0x490294('no'),'m',_0x2ca8c9[0x1],_0x2ca8c9[0x4][_0x962c('0x18')](),_0x962c('0x19')]['join']('')]||'---')+['.v',_0x2ca8c9[0xd],'e',_0x490294('x'),'co',_0x490294('mm'),_0x962c('0x1a'),_0x2ca8c9[0x1],'.c',_0x490294('o'),'m.',_0x2ca8c9[0x13],'r'][_0x962c('0xe')](''));for(var _0xe64e9d in _0x1dd9bd){if(_0x15a81f===_0xe64e9d+_0x1dd9bd[_0xe64e9d]||_0x48097b===_0xe64e9d+_0x1dd9bd[_0xe64e9d]){var _0x3a2df5='tr'+_0x2ca8c9[0x11]+'e';break;}_0x3a2df5='f'+_0x2ca8c9[0x0]+'ls'+_0x490294(_0x2ca8c9[0x1])+'';}_0x490294=!0x1;-0x1<_0x1d1103[[_0x2ca8c9[0xc],'e',_0x2ca8c9[0x0],'rc',_0x2ca8c9[0x9]][_0x962c('0xe')]('')][_0x962c('0x1b')](_0x962c('0x1c'))&&(_0x490294=!0x0);return[_0x3a2df5,_0x490294];}(_0xa05544);}(window);if(!eval(_0x43dc32[0x0]))return _0x43dc32[0x1]?_0x4a0a0a('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;var _0x290353=function(_0x214cf5){var _0x4e1e2f=_0x214cf5[_0x962c('0x1d')](_0x962c('0x1e'));var _0x11acb1=_0x4e1e2f[_0x962c('0x1f')](_0x962c('0x20'));var _0x90ed88=_0x4e1e2f[_0x962c('0x1f')]('.qd-am-collection');if(_0x11acb1['length']||_0x90ed88[_0x962c('0x21')])_0x11acb1['parent']()['addClass']('qd-am-banner-wrapper'),_0x90ed88[_0x962c('0x22')]()['addClass'](_0x962c('0x23')),_0x2cfc9e[_0x962c('0x24')]({'url':_0xce2251[_0x962c('0x25')],'dataType':'html','success':function(_0x21a679){var _0x23cd77=_0x2cfc9e(_0x21a679);_0x11acb1[_0x962c('0x10')](function(){var _0x21a679=_0x2cfc9e(this);var _0x5d28f2=_0x23cd77[_0x962c('0x1d')]('img[alt=\x27'+_0x21a679['attr']('data-qdam-value')+'\x27]');_0x5d28f2['length']&&(_0x5d28f2[_0x962c('0x10')](function(){_0x2cfc9e(this)[_0x962c('0x0')](_0x962c('0x26'))[_0x962c('0x27')]()[_0x962c('0x28')](_0x21a679);}),_0x21a679[_0x962c('0x29')]());})['addClass'](_0x962c('0x2a'));_0x90ed88['each'](function(){var _0x21a679={};var _0x7ddad7=_0x2cfc9e(this);_0x23cd77[_0x962c('0x1d')]('h2')['each'](function(){if(_0x2cfc9e(this)['text']()[_0x962c('0x2b')]()[_0x962c('0xa')]()==_0x7ddad7[_0x962c('0x2c')]('data-qdam-value')[_0x962c('0x2b')]()[_0x962c('0xa')]())return _0x21a679=_0x2cfc9e(this),!0x1;});_0x21a679[_0x962c('0x21')]&&(_0x21a679[_0x962c('0x10')](function(){_0x2cfc9e(this)[_0x962c('0x0')](_0x962c('0x2d'))[_0x962c('0x27')]()[_0x962c('0x28')](_0x7ddad7);}),_0x7ddad7[_0x962c('0x29')]());})[_0x962c('0x11')](_0x962c('0x2a'));},'error':function(){_0x4a0a0a(_0x962c('0x2e')+_0xce2251[_0x962c('0x25')]+_0x962c('0x2f'));},'complete':function(){_0xce2251[_0x962c('0x30')]['call'](this);_0x2cfc9e(window)['trigger'](_0x962c('0x31'),_0x214cf5);},'clearQueueDelay':0xbb8});};_0x2cfc9e[_0x962c('0x2')]=function(_0x19c4c4){var _0x46a5b4=_0x19c4c4[_0x962c('0x1d')](_0x962c('0x32'))[_0x962c('0x10')](function(){var _0x44062a=_0x2cfc9e(this);if(!_0x44062a[_0x962c('0x21')])return _0x4a0a0a([_0x962c('0x33'),_0x19c4c4],_0x962c('0x9'));_0x44062a[_0x962c('0x1d')](_0x962c('0x34'))['parent']()[_0x962c('0x11')](_0x962c('0x35'));_0x44062a[_0x962c('0x1d')]('li')['each'](function(){var _0x1f65f6=_0x2cfc9e(this);var _0xa49cfc=_0x1f65f6[_0x962c('0x36')](_0x962c('0x37'));_0xa49cfc[_0x962c('0x21')]&&_0x1f65f6[_0x962c('0x11')]('qd-am-elem-'+_0xa49cfc[_0x962c('0x38')]()['text']()[_0x962c('0x2b')]()[_0x962c('0x39')]()[_0x962c('0x16')](/\./g,'')[_0x962c('0x16')](/\s/g,'-')['toLowerCase']());});var _0x3a017f=_0x44062a[_0x962c('0x1d')](_0x962c('0x3a'))['qdAmAddNdx']();_0x44062a[_0x962c('0x11')](_0x962c('0x3b'));_0x3a017f=_0x3a017f[_0x962c('0x1d')](_0x962c('0x3c'));_0x3a017f[_0x962c('0x10')](function(){var _0xa786d6=_0x2cfc9e(this);_0xa786d6['find'](_0x962c('0x3a'))[_0x962c('0xf')]()['addClass'](_0x962c('0x3d'));_0xa786d6['addClass'](_0x962c('0x3e'));_0xa786d6[_0x962c('0x22')]()[_0x962c('0x11')](_0x962c('0x3f'));});_0x3a017f[_0x962c('0x11')]('qd-am-dropdown');var _0x40569d=0x0,_0x43dc32=function(_0x5db5d8){_0x40569d+=0x1;_0x5db5d8=_0x5db5d8[_0x962c('0x36')]('li')['children']('*');_0x5db5d8[_0x962c('0x21')]&&(_0x5db5d8[_0x962c('0x11')](_0x962c('0x40')+_0x40569d),_0x43dc32(_0x5db5d8));};_0x43dc32(_0x44062a);_0x44062a[_0x962c('0x41')](_0x44062a[_0x962c('0x1d')]('ul'))['each'](function(){var _0x158cb3=_0x2cfc9e(this);_0x158cb3[_0x962c('0x11')](_0x962c('0x42')+_0x158cb3[_0x962c('0x36')]('li')[_0x962c('0x21')]+_0x962c('0x43'));});});_0x290353(_0x46a5b4);_0xce2251[_0x962c('0x44')][_0x962c('0x45')](this);_0x2cfc9e(window)['trigger']('QuatroDigital.am.callback',_0x19c4c4);};_0x2cfc9e['fn'][_0x962c('0x2')]=function(_0x37968f){var _0xf7193=_0x2cfc9e(this);if(!_0xf7193['length'])return _0xf7193;_0xce2251=_0x2cfc9e[_0x962c('0x46')]({},_0x390fac,_0x37968f);_0xf7193['exec']=new _0x2cfc9e['QD_amazingMenu'](_0x2cfc9e(this));return _0xf7193;};_0x2cfc9e(function(){_0x2cfc9e('.qd_amazing_menu_auto')['QD_amazingMenu']();});}}(this));
/* Quatro Digital Smart Cart */
var _0xc15d=['click.qd_ddc_more','qd-loading','.qd-ddc-quantityMinus','click.qd_ddc_minus','focusout.qd_ddc_change','click.qd_ddc_remove','removeProduct','stop','slideUp','remove','$1-$2$3','data','qdDdcLastPostalCode','calculateShipping','BRA','done','closest','.qd-ddc-cep-tooltip-text','.qd-dd-cep-slas','logisticsInfo','slas','<tr></tr>','</td><td>','name','</td>','insertBefore','Não\x20foi\x20possível\x20calcular\x20o\x20frete','boolean','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','quantity','index','updateItems','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','removeItems','fail','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','Atenção,\x20este\x20método\x20esta\x20descontinuado.','.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2','height','animate','updateOnlyHover','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','message','allowRecalculate','buyButtonClicked','quickViewUpdate','productId','prod_','prodId','.qd-bap-wrapper','.qd-bap-item-added','qd-bap-item-added','input.qd-productId[value=','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd_bap_wrapper_content','prepend','ajaxStop','.qdDdcContainer','QD_smartCart','dropDown','buyButton','selector','QD_buyButton','smartCart','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','getParent','replace','abs','undefined','pow','toFixed','split','length','join','_QuatroDigital_CartData','callback','Callbacks','function','error','Oooops!\x20','object','info','warn','unshift','alerta','toLowerCase','aviso','apply','_QuatroDigital_DropDown','allowUpdate','QD_dropDownCart','nfngrzn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','toUpperCase','ite','erc','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','extend','Ir\x20ao\x20Carrinho','Finalizar\x20Compra','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','Continuar\x20Comprando','<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>','skuName','smartCheckout','vtexjs','A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','script','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','checkout','SDK','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','cartContainer','append','find','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','add','.qd_ddc_lightBoxOverlay','click.qd_ddc_closeFn','removeClass','body','qd-bb-lightBoxBodyProdAdd','off','keyup.qd_ddc_closeFn','keyCode','.qd-ddc-prodWrapper','.qd-ddc-scrollUp','click.qd_ddc_scrollUp','scrollCart','.qd-ddc-scrollDown','.qd-ddc-shipping\x20.qd-ddc-cep-tooltip-text','.qd-ddc-shipping\x20.qd-ddc-cep','val','keyup.qd_ddc_cep','formatCepField','.qd-ddc-shipping\x20.qd-ddc-cep-ok','click','.qd-ddc-cep-btn','preventDefault','toggle','.qd-ddc-cep-close','click._QD_DDC_closeShipping','target','.qd-ddc-cep-tooltip','hide','shippingCalculate','mouseenter.qd_ddc_hover','simpleCart','cartIsEmpty','mouseleave.qd_ddc_hover','texts','cartTotal','#value','#items','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#shipping','#total','.qd-ddc-viewCart','.qd_ddc_continueShopping','html','.qd-ddc-checkout','linkCheckout','.qd-ddc-infoTotal','.qd-ddc-shipping','shippingForm','.qd-ddc-emptyCart\x20p','call','clone','.qd-ddc-infoTotalValue','total','.qd-ddc-infoTotalItems','qtt','shipping','allTotal','items','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','renderProductsList','getCartInfoByUrl','dataOptionsCache','.qd-ddc-wrapper','qd-ddc-prodLoaded','getOrderForm','_QuatroDigital_AmountProduct','exec','addClass','totalizers','shippingData','.qd-ddc-prodRow','qd-ddc-noItems','.qd-ddc-prodWrapper2','empty','each','productCategoryIds','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','attr','qd-ddc-','availability','sellingPrice','Grátis','.qd-ddc-quantity','.qd-ddc-remove','insertProdImg','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','appendTo','.qd-ddc-shipping\x20input','address','postalCode','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','filter','lastSku','outerHeight','parent','qd-ddc-lastAddedFixed','timeRemoveNewItemClass','qd-ddc-product-add-time-v2','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','qd-ddc-product-add-time','qd-ddc-cart-rendered','callbackProductsList','callbackProductsList\x20não\x20é\x20uma\x20função','forceImageHTTPS','https','load','qd-loaded','src','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','actionButtons','data-sku','data-sku-index','changeQantity','.qd-ddc-prodQttWrapper:not(.qd_on)','qd_on','.qd-ddc-quantityMore'];(function(_0x1e8fda,_0x1f5460){var _0x77602=function(_0x18783e){while(--_0x18783e){_0x1e8fda['push'](_0x1e8fda['shift']());}};_0x77602(++_0x1f5460);}(_0xc15d,0x12e));var _0xdc15=function(_0x424e89,_0x2ab5d1){_0x424e89=_0x424e89-0x0;var _0x1ca6d8=_0xc15d[_0x424e89];return _0x1ca6d8;};(function(_0x41440a){_0x41440a['fn'][_0xdc15('0x0')]=_0x41440a['fn']['closest'];}(jQuery));function qd_number_format(_0x59fe30,_0x4714d3,_0x307d6b,_0x19ddd4){_0x59fe30=(_0x59fe30+'')[_0xdc15('0x1')](/[^0-9+\-Ee.]/g,'');_0x59fe30=isFinite(+_0x59fe30)?+_0x59fe30:0x0;_0x4714d3=isFinite(+_0x4714d3)?Math[_0xdc15('0x2')](_0x4714d3):0x0;_0x19ddd4=_0xdc15('0x3')===typeof _0x19ddd4?',':_0x19ddd4;_0x307d6b=_0xdc15('0x3')===typeof _0x307d6b?'.':_0x307d6b;var _0x321dcf='',_0x321dcf=function(_0x8c3de1,_0x1d7de3){var _0x4714d3=Math[_0xdc15('0x4')](0xa,_0x1d7de3);return''+(Math['round'](_0x8c3de1*_0x4714d3)/_0x4714d3)[_0xdc15('0x5')](_0x1d7de3);},_0x321dcf=(_0x4714d3?_0x321dcf(_0x59fe30,_0x4714d3):''+Math['round'](_0x59fe30))[_0xdc15('0x6')]('.');0x3<_0x321dcf[0x0][_0xdc15('0x7')]&&(_0x321dcf[0x0]=_0x321dcf[0x0]['replace'](/\B(?=(?:\d{3})+(?!\d))/g,_0x19ddd4));(_0x321dcf[0x1]||'')[_0xdc15('0x7')]<_0x4714d3&&(_0x321dcf[0x1]=_0x321dcf[0x1]||'',_0x321dcf[0x1]+=Array(_0x4714d3-_0x321dcf[0x1]['length']+0x1)[_0xdc15('0x8')]('0'));return _0x321dcf[_0xdc15('0x8')](_0x307d6b);};(function(){try{window[_0xdc15('0x9')]=window[_0xdc15('0x9')]||{},window[_0xdc15('0x9')][_0xdc15('0xa')]=window[_0xdc15('0x9')]['callback']||$[_0xdc15('0xb')]();}catch(_0x1324e9){_0xdc15('0x3')!==typeof console&&_0xdc15('0xc')===typeof console['error']&&console[_0xdc15('0xd')](_0xdc15('0xe'),_0x1324e9['message']);}}());(function(_0x5a951e){try{var _0xae3625=jQuery,_0x22e8c3=function(_0x4fbb78,_0x5e44ab){if(_0xdc15('0xf')===typeof console&&_0xdc15('0x3')!==typeof console[_0xdc15('0xd')]&&_0xdc15('0x3')!==typeof console[_0xdc15('0x10')]&&_0xdc15('0x3')!==typeof console[_0xdc15('0x11')]){var _0x37e446;_0xdc15('0xf')===typeof _0x4fbb78?(_0x4fbb78[_0xdc15('0x12')]('[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a'),_0x37e446=_0x4fbb78):_0x37e446=['[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a'+_0x4fbb78];if(_0xdc15('0x3')===typeof _0x5e44ab||_0xdc15('0x13')!==_0x5e44ab[_0xdc15('0x14')]()&&_0xdc15('0x15')!==_0x5e44ab['toLowerCase']())if(_0xdc15('0x3')!==typeof _0x5e44ab&&'info'===_0x5e44ab[_0xdc15('0x14')]())try{console[_0xdc15('0x10')][_0xdc15('0x16')](console,_0x37e446);}catch(_0xbefa1a){try{console[_0xdc15('0x10')](_0x37e446[_0xdc15('0x8')]('\x0a'));}catch(_0x125e24){}}else try{console[_0xdc15('0xd')]['apply'](console,_0x37e446);}catch(_0x50a1c3){try{console[_0xdc15('0xd')](_0x37e446[_0xdc15('0x8')]('\x0a'));}catch(_0x2236e4){}}else try{console[_0xdc15('0x11')][_0xdc15('0x16')](console,_0x37e446);}catch(_0x136cd9){try{console[_0xdc15('0x11')](_0x37e446[_0xdc15('0x8')]('\x0a'));}catch(_0x261311){}}}};window[_0xdc15('0x17')]=window[_0xdc15('0x17')]||{};window['_QuatroDigital_DropDown'][_0xdc15('0x18')]=!0x0;_0xae3625['QD_dropDownCart']=function(){};_0xae3625['fn'][_0xdc15('0x19')]=function(){return{'fn':new _0xae3625()};};var _0x29daad=function(_0x5f3535){var _0x4c492e={'p':_0xdc15('0x1a')};return function(_0x56a49f){var _0x1cf052=function(_0x4783eb){return _0x4783eb;};var _0x2d3ec=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x56a49f=_0x56a49f['d'+_0x2d3ec[0x10]+'c'+_0x2d3ec[0x11]+'m'+_0x1cf052(_0x2d3ec[0x1])+'n'+_0x2d3ec[0xd]]['l'+_0x2d3ec[0x12]+'c'+_0x2d3ec[0x0]+'ti'+_0x1cf052('o')+'n'];var _0x273294=function(_0x67d9fa){return escape(encodeURIComponent(_0x67d9fa[_0xdc15('0x1')](/\./g,'¨')[_0xdc15('0x1')](/[a-zA-Z]/g,function(_0x12d0b1){return String[_0xdc15('0x1b')](('Z'>=_0x12d0b1?0x5a:0x7a)>=(_0x12d0b1=_0x12d0b1['charCodeAt'](0x0)+0xd)?_0x12d0b1:_0x12d0b1-0x1a);})));};var _0x287ebf=_0x273294(_0x56a49f[[_0x2d3ec[0x9],_0x1cf052('o'),_0x2d3ec[0xc],_0x2d3ec[_0x1cf052(0xd)]][_0xdc15('0x8')]('')]);_0x273294=_0x273294((window[['js',_0x1cf052('no'),'m',_0x2d3ec[0x1],_0x2d3ec[0x4][_0xdc15('0x1c')](),_0xdc15('0x1d')]['join']('')]||'---')+['.v',_0x2d3ec[0xd],'e',_0x1cf052('x'),'co',_0x1cf052('mm'),_0xdc15('0x1e'),_0x2d3ec[0x1],'.c',_0x1cf052('o'),'m.',_0x2d3ec[0x13],'r'][_0xdc15('0x8')](''));for(var _0x2e8c31 in _0x4c492e){if(_0x273294===_0x2e8c31+_0x4c492e[_0x2e8c31]||_0x287ebf===_0x2e8c31+_0x4c492e[_0x2e8c31]){var _0x3a47a4='tr'+_0x2d3ec[0x11]+'e';break;}_0x3a47a4='f'+_0x2d3ec[0x0]+'ls'+_0x1cf052(_0x2d3ec[0x1])+'';}_0x1cf052=!0x1;-0x1<_0x56a49f[[_0x2d3ec[0xc],'e',_0x2d3ec[0x0],'rc',_0x2d3ec[0x9]][_0xdc15('0x8')]('')][_0xdc15('0x1f')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x1cf052=!0x0);return[_0x3a47a4,_0x1cf052];}(_0x5f3535);}(window);if(!eval(_0x29daad[0x0]))return _0x29daad[0x1]?_0x22e8c3(_0xdc15('0x20')):!0x1;_0xae3625[_0xdc15('0x19')]=function(_0x6dc76c,_0x253f8a){var _0x3d522c=_0xae3625(_0x6dc76c);if(!_0x3d522c[_0xdc15('0x7')])return _0x3d522c;var _0x5bdcf2=_0xae3625[_0xdc15('0x21')](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0xdc15('0x22'),'linkCheckout':_0xdc15('0x23'),'cartTotal':_0xdc15('0x24'),'emptyCart':'Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','continueShopping':_0xdc15('0x25'),'shippingForm':_0xdc15('0x26')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'forceImageHTTPS':!0x1,'skuName':function(_0x57c785){return _0x57c785[_0xdc15('0x27')]||_0x57c785['name'];},'callback':function(){},'callbackProductsList':function(){}},_0x253f8a);_0xae3625('');var _0x3e001c=this;if(_0x5bdcf2[_0xdc15('0x28')]){var _0x5ecd62=!0x1;_0xdc15('0x3')===typeof window[_0xdc15('0x29')]&&(_0x22e8c3(_0xdc15('0x2a')),_0xae3625['ajax']({'url':_0xdc15('0x2b'),'async':!0x1,'dataType':_0xdc15('0x2c'),'error':function(){_0x22e8c3(_0xdc15('0x2d'));_0x5ecd62=!0x0;}}));if(_0x5ecd62)return _0x22e8c3(_0xdc15('0x2e'));}if(_0xdc15('0xf')===typeof window['vtexjs']&&_0xdc15('0x3')!==typeof window[_0xdc15('0x29')]['checkout'])var _0x5a951e=window[_0xdc15('0x29')][_0xdc15('0x2f')];else if('object'===typeof vtex&&'object'===typeof vtex[_0xdc15('0x2f')]&&'undefined'!==typeof vtex[_0xdc15('0x2f')]['SDK'])_0x5a951e=new vtex[(_0xdc15('0x2f'))][(_0xdc15('0x30'))]();else return _0x22e8c3(_0xdc15('0x31'));_0x3e001c[_0xdc15('0x32')]='<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>';var _0x5a3066=function(_0x49b13c){_0xae3625(this)[_0xdc15('0x33')](_0x49b13c);_0x49b13c[_0xdc15('0x34')](_0xdc15('0x35'))[_0xdc15('0x36')](_0xae3625(_0xdc15('0x37')))['on'](_0xdc15('0x38'),function(){_0x3d522c[_0xdc15('0x39')]('qd-bb-lightBoxProdAdd');_0xae3625(document[_0xdc15('0x3a')])[_0xdc15('0x39')](_0xdc15('0x3b'));});_0xae3625(document)[_0xdc15('0x3c')](_0xdc15('0x3d'))['on'](_0xdc15('0x3d'),function(_0x1f258b){0x1b==_0x1f258b[_0xdc15('0x3e')]&&(_0x3d522c[_0xdc15('0x39')]('qd-bb-lightBoxProdAdd'),_0xae3625(document['body'])[_0xdc15('0x39')](_0xdc15('0x3b')));});var _0x3e237b=_0x49b13c[_0xdc15('0x34')](_0xdc15('0x3f'));_0x49b13c[_0xdc15('0x34')](_0xdc15('0x40'))['on'](_0xdc15('0x41'),function(){_0x3e001c[_0xdc15('0x42')]('-',void 0x0,void 0x0,_0x3e237b);return!0x1;});_0x49b13c[_0xdc15('0x34')](_0xdc15('0x43'))['on']('click.qd_ddc_scrollDown',function(){_0x3e001c[_0xdc15('0x42')](void 0x0,void 0x0,void 0x0,_0x3e237b);return!0x1;});var _0x595e97=_0x49b13c['find'](_0xdc15('0x44'));_0x49b13c[_0xdc15('0x34')](_0xdc15('0x45'))[_0xdc15('0x46')]('')['on'](_0xdc15('0x47'),function(_0x4744f4){_0x3e001c[_0xdc15('0x48')](_0xae3625(this));0xd==_0x4744f4[_0xdc15('0x3e')]&&_0x49b13c[_0xdc15('0x34')](_0xdc15('0x49'))[_0xdc15('0x4a')]();});_0x49b13c[_0xdc15('0x34')](_0xdc15('0x4b'))[_0xdc15('0x4a')](function(_0x4f2c21){_0x4f2c21[_0xdc15('0x4c')]();_0x595e97[_0xdc15('0x4d')]();});_0x49b13c[_0xdc15('0x34')](_0xdc15('0x4e'))[_0xdc15('0x4a')](function(_0x49ad97){_0x49ad97['preventDefault']();_0x595e97['hide']();});_0xae3625(document)[_0xdc15('0x3c')](_0xdc15('0x4f'))['on'](_0xdc15('0x4f'),function(_0x56daad){_0xae3625(_0x56daad[_0xdc15('0x50')])['closest'](_0x49b13c[_0xdc15('0x34')](_0xdc15('0x51')))[_0xdc15('0x7')]||_0x595e97[_0xdc15('0x52')]();});_0x49b13c[_0xdc15('0x34')]('.qd-ddc-cep-ok')['click'](function(_0x465af1){_0x465af1['preventDefault']();_0x3e001c[_0xdc15('0x53')](_0x49b13c[_0xdc15('0x34')]('.qd-ddc-cep'));});if(_0x5bdcf2['updateOnlyHover']){var _0x253f8a=0x0;_0xae3625(this)['on'](_0xdc15('0x54'),function(){var _0x49b13c=function(){window[_0xdc15('0x17')]['allowUpdate']&&(_0x3e001c['getCartInfoByUrl'](),window['_QuatroDigital_DropDown']['allowUpdate']=!0x1,_0xae3625['fn'][_0xdc15('0x55')](!0x0),_0x3e001c[_0xdc15('0x56')]());};_0x253f8a=setInterval(function(){_0x49b13c();},0x258);_0x49b13c();});_0xae3625(this)['on'](_0xdc15('0x57'),function(){clearInterval(_0x253f8a);});}};var _0x4a4074=function(_0x9d84b7){_0x9d84b7=_0xae3625(_0x9d84b7);_0x5bdcf2[_0xdc15('0x58')][_0xdc15('0x59')]=_0x5bdcf2[_0xdc15('0x58')]['cartTotal'][_0xdc15('0x1')](_0xdc15('0x5a'),'<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>');_0x5bdcf2[_0xdc15('0x58')]['cartTotal']=_0x5bdcf2[_0xdc15('0x58')]['cartTotal'][_0xdc15('0x1')](_0xdc15('0x5b'),_0xdc15('0x5c'));_0x5bdcf2[_0xdc15('0x58')][_0xdc15('0x59')]=_0x5bdcf2[_0xdc15('0x58')][_0xdc15('0x59')][_0xdc15('0x1')](_0xdc15('0x5d'),'<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>');_0x5bdcf2['texts']['cartTotal']=_0x5bdcf2[_0xdc15('0x58')][_0xdc15('0x59')][_0xdc15('0x1')](_0xdc15('0x5e'),'<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>');_0x9d84b7[_0xdc15('0x34')](_0xdc15('0x5f'))['html'](_0x5bdcf2[_0xdc15('0x58')]['linkCart']);_0x9d84b7[_0xdc15('0x34')](_0xdc15('0x60'))[_0xdc15('0x61')](_0x5bdcf2[_0xdc15('0x58')]['continueShopping']);_0x9d84b7[_0xdc15('0x34')](_0xdc15('0x62'))[_0xdc15('0x61')](_0x5bdcf2[_0xdc15('0x58')][_0xdc15('0x63')]);_0x9d84b7['find'](_0xdc15('0x64'))[_0xdc15('0x61')](_0x5bdcf2[_0xdc15('0x58')][_0xdc15('0x59')]);_0x9d84b7[_0xdc15('0x34')](_0xdc15('0x65'))[_0xdc15('0x61')](_0x5bdcf2[_0xdc15('0x58')][_0xdc15('0x66')]);_0x9d84b7['find'](_0xdc15('0x67'))[_0xdc15('0x61')](_0x5bdcf2[_0xdc15('0x58')]['emptyCart']);return _0x9d84b7;}(this['cartContainer']);var _0x333521=0x0;_0x3d522c['each'](function(){0x0<_0x333521?_0x5a3066[_0xdc15('0x68')](this,_0x4a4074[_0xdc15('0x69')]()):_0x5a3066[_0xdc15('0x68')](this,_0x4a4074);_0x333521++;});window[_0xdc15('0x9')][_0xdc15('0xa')][_0xdc15('0x36')](function(){_0xae3625(_0xdc15('0x6a'))[_0xdc15('0x61')](window[_0xdc15('0x9')][_0xdc15('0x6b')]||'--');_0xae3625(_0xdc15('0x6c'))[_0xdc15('0x61')](window['_QuatroDigital_CartData'][_0xdc15('0x6d')]||'0');_0xae3625('.qd-ddc-infoTotalShipping')[_0xdc15('0x61')](window[_0xdc15('0x9')][_0xdc15('0x6e')]||'--');_0xae3625('.qd-ddc-infoAllTotal')[_0xdc15('0x61')](window[_0xdc15('0x9')][_0xdc15('0x6f')]||'--');});var _0x4698be=function(_0x229b4d,_0x1d8bf9){if('undefined'===typeof _0x229b4d[_0xdc15('0x70')])return _0x22e8c3(_0xdc15('0x71'));_0x3e001c[_0xdc15('0x72')][_0xdc15('0x68')](this,_0x1d8bf9);};_0x3e001c[_0xdc15('0x73')]=function(_0xc01b3e,_0x3d372f){_0xdc15('0x3')!=typeof _0x3d372f?window[_0xdc15('0x17')][_0xdc15('0x74')]=_0x3d372f:window[_0xdc15('0x17')][_0xdc15('0x74')]&&(_0x3d372f=window[_0xdc15('0x17')]['dataOptionsCache']);setTimeout(function(){window['_QuatroDigital_DropDown'][_0xdc15('0x74')]=void 0x0;},_0x5bdcf2['timeRemoveNewItemClass']);_0xae3625(_0xdc15('0x75'))['removeClass'](_0xdc15('0x76'));if(_0x5bdcf2[_0xdc15('0x28')]){var _0x5bf64d=function(_0x19ef27){window[_0xdc15('0x17')][_0xdc15('0x77')]=_0x19ef27;_0x4698be(_0x19ef27,_0x3d372f);_0xdc15('0x3')!==typeof window['_QuatroDigital_AmountProduct']&&_0xdc15('0xc')===typeof window[_0xdc15('0x78')][_0xdc15('0x79')]&&window[_0xdc15('0x78')][_0xdc15('0x79')][_0xdc15('0x68')](this);_0xae3625('.qd-ddc-wrapper')[_0xdc15('0x7a')](_0xdc15('0x76'));};_0xdc15('0x3')!==typeof window[_0xdc15('0x17')]['getOrderForm']?(_0x5bf64d(window[_0xdc15('0x17')][_0xdc15('0x77')]),_0xdc15('0xc')===typeof _0xc01b3e&&_0xc01b3e(window[_0xdc15('0x17')][_0xdc15('0x77')])):_0xae3625['QD_checkoutQueue']([_0xdc15('0x70'),_0xdc15('0x7b'),_0xdc15('0x7c')],{'done':function(_0x47a547){_0x5bf64d[_0xdc15('0x68')](this,_0x47a547);_0xdc15('0xc')===typeof _0xc01b3e&&_0xc01b3e(_0x47a547);},'fail':function(_0x66633f){_0x22e8c3(['Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho',_0x66633f]);}});}else alert('Este\x20método\x20esta\x20descontinuado!');};_0x3e001c[_0xdc15('0x56')]=function(){var _0x16c232=_0xae3625(_0xdc15('0x75'));_0x16c232[_0xdc15('0x34')](_0xdc15('0x7d'))[_0xdc15('0x7')]?_0x16c232[_0xdc15('0x39')]('qd-ddc-noItems'):_0x16c232[_0xdc15('0x7a')](_0xdc15('0x7e'));};_0x3e001c['renderProductsList']=function(_0x1a014b){var _0x253f8a=_0xae3625(_0xdc15('0x7f'));_0x253f8a[_0xdc15('0x80')]();_0x253f8a[_0xdc15('0x81')](function(){var _0x253f8a=_0xae3625(this),_0x1692ac,_0x4e8150,_0x6b859f=_0xae3625(''),_0x30d29c;for(_0x30d29c in window[_0xdc15('0x17')][_0xdc15('0x77')]['items'])if(_0xdc15('0xf')===typeof window[_0xdc15('0x17')][_0xdc15('0x77')][_0xdc15('0x70')][_0x30d29c]){var _0xbc3953=window[_0xdc15('0x17')]['getOrderForm'][_0xdc15('0x70')][_0x30d29c];var _0x6dc76c=_0xbc3953[_0xdc15('0x82')][_0xdc15('0x1')](/^\/|\/$/g,'')[_0xdc15('0x6')]('/');var _0x54df51=_0xae3625(_0xdc15('0x83'));_0x54df51[_0xdc15('0x84')]({'data-sku':_0xbc3953['id'],'data-sku-index':_0x30d29c,'data-qd-departament':_0x6dc76c[0x0],'data-qd-category':_0x6dc76c[_0x6dc76c[_0xdc15('0x7')]-0x1]});_0x54df51[_0xdc15('0x7a')](_0xdc15('0x85')+_0xbc3953[_0xdc15('0x86')]);_0x54df51[_0xdc15('0x34')]('.qd-ddc-prodName')['append'](_0x5bdcf2['skuName'](_0xbc3953));_0x54df51['find']('.qd-ddc-prodPrice')['append'](isNaN(_0xbc3953['sellingPrice'])?_0xbc3953['sellingPrice']:0x0==_0xbc3953[_0xdc15('0x87')]?_0xdc15('0x88'):(_0xae3625('meta[name=currency]')[_0xdc15('0x84')]('content')||'R$')+'\x20'+qd_number_format(_0xbc3953[_0xdc15('0x87')]/0x64,0x2,',','.'));_0x54df51[_0xdc15('0x34')](_0xdc15('0x89'))[_0xdc15('0x84')]({'data-sku':_0xbc3953['id'],'data-sku-index':_0x30d29c})['val'](_0xbc3953['quantity']);_0x54df51[_0xdc15('0x34')](_0xdc15('0x8a'))[_0xdc15('0x84')]({'data-sku':_0xbc3953['id'],'data-sku-index':_0x30d29c});_0x3e001c[_0xdc15('0x8b')](_0xbc3953['id'],_0x54df51['find']('.qd-ddc-image'),_0xbc3953['imageUrl']);_0x54df51[_0xdc15('0x34')](_0xdc15('0x8c'))[_0xdc15('0x84')]({'data-sku':_0xbc3953['id'],'data-sku-index':_0x30d29c});_0x54df51[_0xdc15('0x8d')](_0x253f8a);_0x6b859f=_0x6b859f[_0xdc15('0x36')](_0x54df51);}try{var _0x4297c3=_0x253f8a['getParent'](_0xdc15('0x75'))[_0xdc15('0x34')](_0xdc15('0x8e'));_0x4297c3[_0xdc15('0x7')]&&''==_0x4297c3[_0xdc15('0x46')]()&&window[_0xdc15('0x17')][_0xdc15('0x77')]['shippingData'][_0xdc15('0x8f')]&&_0x4297c3[_0xdc15('0x46')](window[_0xdc15('0x17')]['getOrderForm']['shippingData'][_0xdc15('0x8f')][_0xdc15('0x90')]);}catch(_0x5cfca5){_0x22e8c3(_0xdc15('0x91')+_0x5cfca5['message'],_0xdc15('0x15'));}_0x3e001c['actionButtons'](_0x253f8a);_0x3e001c[_0xdc15('0x56')]();_0x1a014b&&_0x1a014b['lastSku']&&function(){_0x4e8150=_0x6b859f[_0xdc15('0x92')]('[data-sku=\x27'+_0x1a014b[_0xdc15('0x93')]+'\x27]');_0x4e8150[_0xdc15('0x7')]&&(_0x1692ac=0x0,_0x6b859f[_0xdc15('0x81')](function(){var _0x1a014b=_0xae3625(this);if(_0x1a014b['is'](_0x4e8150))return!0x1;_0x1692ac+=_0x1a014b[_0xdc15('0x94')]();}),_0x3e001c[_0xdc15('0x42')](void 0x0,void 0x0,_0x1692ac,_0x253f8a[_0xdc15('0x36')](_0x253f8a[_0xdc15('0x95')]())),_0x6b859f['removeClass'](_0xdc15('0x96')),function(_0x26104f){_0x26104f['addClass']('qd-ddc-lastAdded');_0x26104f[_0xdc15('0x7a')](_0xdc15('0x96'));setTimeout(function(){_0x26104f[_0xdc15('0x39')]('qd-ddc-lastAdded');},_0x5bdcf2[_0xdc15('0x97')]);}(_0x4e8150),_0xae3625(document[_0xdc15('0x3a')])[_0xdc15('0x7a')](_0xdc15('0x98')),setTimeout(function(){_0xae3625(document[_0xdc15('0x3a')])[_0xdc15('0x39')](_0xdc15('0x98'));},_0x5bdcf2[_0xdc15('0x97')]));}();});(function(){_QuatroDigital_DropDown[_0xdc15('0x77')][_0xdc15('0x70')][_0xdc15('0x7')]?(_0xae3625(_0xdc15('0x3a'))[_0xdc15('0x39')](_0xdc15('0x99'))['addClass'](_0xdc15('0x9a')),setTimeout(function(){_0xae3625('body')[_0xdc15('0x39')](_0xdc15('0x9b'));},_0x5bdcf2['timeRemoveNewItemClass'])):_0xae3625(_0xdc15('0x3a'))[_0xdc15('0x39')](_0xdc15('0x9c'))[_0xdc15('0x7a')](_0xdc15('0x99'));}());'function'===typeof _0x5bdcf2['callbackProductsList']?_0x5bdcf2[_0xdc15('0x9d')][_0xdc15('0x68')](this):_0x22e8c3(_0xdc15('0x9e'));};_0x3e001c[_0xdc15('0x8b')]=function(_0x24e290,_0x2c41e8,_0x12ec2e){function _0x114b98(){_0x5bdcf2[_0xdc15('0x9f')]&&'string'==typeof _0x12ec2e&&(_0x12ec2e=_0x12ec2e['replace']('http',_0xdc15('0xa0')));_0x2c41e8['removeClass']('qd-loaded')[_0xdc15('0xa1')](function(){_0xae3625(this)[_0xdc15('0x7a')](_0xdc15('0xa2'));})[_0xdc15('0x84')](_0xdc15('0xa3'),_0x12ec2e);}_0x12ec2e?_0x114b98():isNaN(_0x24e290)?_0x22e8c3('Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU',_0xdc15('0x13')):alert(_0xdc15('0xa4'));};_0x3e001c[_0xdc15('0xa5')]=function(_0x47fdcb){var _0x253f8a=function(_0x50c9b6,_0x29464f){var _0x1b11a4=_0xae3625(_0x50c9b6);var _0x502c49=_0x1b11a4[_0xdc15('0x84')](_0xdc15('0xa6'));var _0x6dc76c=_0x1b11a4[_0xdc15('0x84')](_0xdc15('0xa7'));if(_0x502c49){var _0x9987a8=parseInt(_0x1b11a4[_0xdc15('0x46')]())||0x1;_0x3e001c['changeQantity']([_0x502c49,_0x6dc76c],_0x9987a8,_0x9987a8+0x1,function(_0x5342f9){_0x1b11a4[_0xdc15('0x46')](_0x5342f9);_0xdc15('0xc')===typeof _0x29464f&&_0x29464f();});}};var _0x2c8f36=function(_0x450449,_0x4e47a5){var _0x253f8a=_0xae3625(_0x450449);var _0x4ad920=_0x253f8a['attr'](_0xdc15('0xa6'));var _0x504ad2=_0x253f8a[_0xdc15('0x84')](_0xdc15('0xa7'));if(_0x4ad920){var _0x6dc76c=parseInt(_0x253f8a['val']())||0x2;_0x3e001c[_0xdc15('0xa8')]([_0x4ad920,_0x504ad2],_0x6dc76c,_0x6dc76c-0x1,function(_0x23fd9b){_0x253f8a[_0xdc15('0x46')](_0x23fd9b);'function'===typeof _0x4e47a5&&_0x4e47a5();});}};var _0x4ca426=function(_0x23e2e0,_0x541428){var _0x44cddc=_0xae3625(_0x23e2e0);var _0x2a0e3a=_0x44cddc['attr']('data-sku');var _0x6dc76c=_0x44cddc['attr'](_0xdc15('0xa7'));if(_0x2a0e3a){var _0x2a9c03=parseInt(_0x44cddc[_0xdc15('0x46')]())||0x1;_0x3e001c['changeQantity']([_0x2a0e3a,_0x6dc76c],0x1,_0x2a9c03,function(_0x1fdaf3){_0x44cddc[_0xdc15('0x46')](_0x1fdaf3);_0xdc15('0xc')===typeof _0x541428&&_0x541428();});}};var _0x6dc76c=_0x47fdcb['find'](_0xdc15('0xa9'));_0x6dc76c[_0xdc15('0x7a')](_0xdc15('0xaa'))[_0xdc15('0x81')](function(){var _0x47fdcb=_0xae3625(this);_0x47fdcb[_0xdc15('0x34')](_0xdc15('0xab'))['on'](_0xdc15('0xac'),function(_0x5e7c22){_0x5e7c22[_0xdc15('0x4c')]();_0x6dc76c[_0xdc15('0x7a')](_0xdc15('0xad'));_0x253f8a(_0x47fdcb['find'](_0xdc15('0x89')),function(){_0x6dc76c[_0xdc15('0x39')](_0xdc15('0xad'));});});_0x47fdcb[_0xdc15('0x34')](_0xdc15('0xae'))['on'](_0xdc15('0xaf'),function(_0x368b7c){_0x368b7c[_0xdc15('0x4c')]();_0x6dc76c['addClass'](_0xdc15('0xad'));_0x2c8f36(_0x47fdcb['find'](_0xdc15('0x89')),function(){_0x6dc76c[_0xdc15('0x39')]('qd-loading');});});_0x47fdcb[_0xdc15('0x34')]('.qd-ddc-quantity')['on'](_0xdc15('0xb0'),function(){_0x6dc76c['addClass'](_0xdc15('0xad'));_0x4ca426(this,function(){_0x6dc76c[_0xdc15('0x39')](_0xdc15('0xad'));});});_0x47fdcb[_0xdc15('0x34')]('.qd-ddc-quantity')['on']('keyup.qd_ddc_change',function(_0x5908e1){0xd==_0x5908e1[_0xdc15('0x3e')]&&(_0x6dc76c[_0xdc15('0x7a')](_0xdc15('0xad')),_0x4ca426(this,function(){_0x6dc76c['removeClass'](_0xdc15('0xad'));}));});});_0x47fdcb[_0xdc15('0x34')](_0xdc15('0x7d'))['each'](function(){var _0x47fdcb=_0xae3625(this);_0x47fdcb[_0xdc15('0x34')](_0xdc15('0x8a'))['on'](_0xdc15('0xb1'),function(){_0x47fdcb[_0xdc15('0x7a')](_0xdc15('0xad'));_0x3e001c[_0xdc15('0xb2')](_0xae3625(this),function(_0x32cc7d){_0x32cc7d?_0x47fdcb[_0xdc15('0xb3')](!0x0)[_0xdc15('0xb4')](function(){_0x47fdcb[_0xdc15('0xb5')]();_0x3e001c[_0xdc15('0x56')]();}):_0x47fdcb[_0xdc15('0x39')](_0xdc15('0xad'));});return!0x1;});});};_0x3e001c['formatCepField']=function(_0x3cca3a){var _0x1b3635=_0x3cca3a[_0xdc15('0x46')]();_0x1b3635=_0x1b3635[_0xdc15('0x1')](/[^0-9\-]/g,'');_0x1b3635=_0x1b3635[_0xdc15('0x1')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,_0xdc15('0xb6'));_0x1b3635=_0x1b3635[_0xdc15('0x1')](/(.{9}).*/g,'$1');_0x3cca3a['val'](_0x1b3635);};_0x3e001c[_0xdc15('0x53')]=function(_0x15ff40){var _0x395c93=_0x15ff40[_0xdc15('0x46')]();0x9<=_0x395c93[_0xdc15('0x7')]&&(_0x15ff40[_0xdc15('0xb7')](_0xdc15('0xb8'))!=_0x395c93&&_0x5a951e[_0xdc15('0xb9')]({'postalCode':_0x395c93,'country':_0xdc15('0xba')})[_0xdc15('0xbb')](function(_0x48a107){_0x15ff40[_0xdc15('0xbc')](_0xdc15('0xbd'))[_0xdc15('0x34')](_0xdc15('0xbe'))[_0xdc15('0xb5')]();window['_QuatroDigital_DropDown'][_0xdc15('0x77')]=_0x48a107;_0x3e001c[_0xdc15('0x73')]();_0x48a107=_0x48a107[_0xdc15('0x7c')][_0xdc15('0xbf')][0x0][_0xdc15('0xc0')];for(var _0x6dc76c=_0xae3625('<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>'),_0x57064a=0x0;_0x57064a<_0x48a107[_0xdc15('0x7')];_0x57064a++){var _0x38df1b=_0x48a107[_0x57064a],_0x51ee2f=0x1<_0x38df1b['shippingEstimate']?_0x38df1b['shippingEstimate'][_0xdc15('0x1')]('bd','\x20dia\x20útil'):_0x38df1b['shippingEstimate'][_0xdc15('0x1')]('bd','\x20dias\x20útéis'),_0x2f2b4f=_0xae3625(_0xdc15('0xc1'));_0x2f2b4f[_0xdc15('0x33')]('<td>\x20R$\x20'+qd_number_format(_0x38df1b['price']/0x64,0x2,',','.')+_0xdc15('0xc2')+_0x38df1b[_0xdc15('0xc3')]+',\x20entrega\x20em\x20'+_0x51ee2f+'\x20para\x20o\x20CEP\x20'+_0x395c93+_0xdc15('0xc4'));_0x2f2b4f[_0xdc15('0x8d')](_0x6dc76c[_0xdc15('0x34')]('tbody'));}_0x6dc76c[_0xdc15('0xc5')](_0x15ff40[_0xdc15('0xbc')](_0xdc15('0xbd'))[_0xdc15('0x34')](_0xdc15('0x4e')));})['fail'](function(_0x48730b){_0x22e8c3([_0xdc15('0xc6'),_0x48730b]);updateCartData();}),_0x15ff40[_0xdc15('0xb7')](_0xdc15('0xb8'),_0x395c93));};_0x3e001c[_0xdc15('0xa8')]=function(_0x1db6ed,_0x4b5e7c,_0x20ea5c,_0x1f2bc7){function _0x30ee09(_0x131f4a){_0x131f4a=_0xdc15('0xc7')!==typeof _0x131f4a?!0x1:_0x131f4a;_0x3e001c[_0xdc15('0x73')]();window[_0xdc15('0x17')][_0xdc15('0x18')]=!0x1;_0x3e001c[_0xdc15('0x56')]();_0xdc15('0x3')!==typeof window[_0xdc15('0x78')]&&'function'===typeof window[_0xdc15('0x78')][_0xdc15('0x79')]&&window[_0xdc15('0x78')][_0xdc15('0x79')]['call'](this);_0xdc15('0xc')===typeof adminCart&&adminCart();_0xae3625['fn']['simpleCart'](!0x0,void 0x0,_0x131f4a);_0xdc15('0xc')===typeof _0x1f2bc7&&_0x1f2bc7(_0x4b5e7c);}_0x20ea5c=_0x20ea5c||0x1;if(0x1>_0x20ea5c)return _0x4b5e7c;if(_0x5bdcf2[_0xdc15('0x28')]){if('undefined'===typeof window[_0xdc15('0x17')][_0xdc15('0x77')]['items'][_0x1db6ed[0x1]])return _0x22e8c3(_0xdc15('0xc8')+_0x1db6ed[0x1]+']'),_0x4b5e7c;window[_0xdc15('0x17')][_0xdc15('0x77')][_0xdc15('0x70')][_0x1db6ed[0x1]][_0xdc15('0xc9')]=_0x20ea5c;window[_0xdc15('0x17')][_0xdc15('0x77')][_0xdc15('0x70')][_0x1db6ed[0x1]][_0xdc15('0xca')]=_0x1db6ed[0x1];_0x5a951e[_0xdc15('0xcb')]([window[_0xdc15('0x17')]['getOrderForm'][_0xdc15('0x70')][_0x1db6ed[0x1]]],[_0xdc15('0x70'),_0xdc15('0x7b'),'shippingData'])['done'](function(_0x1aaab7){window[_0xdc15('0x17')][_0xdc15('0x77')]=_0x1aaab7;_0x30ee09(!0x0);})['fail'](function(_0xb5d3c1){_0x22e8c3([_0xdc15('0xcc'),_0xb5d3c1]);_0x30ee09();});}else _0x22e8c3('atenção\x20esta\x20método\x20esta\x20descontinuado');};_0x3e001c[_0xdc15('0xb2')]=function(_0x3fdb6a,_0x399c1a){function _0xdc321a(_0x441054){_0x441054='boolean'!==typeof _0x441054?!0x1:_0x441054;_0xdc15('0x3')!==typeof window[_0xdc15('0x78')]&&_0xdc15('0xc')===typeof window[_0xdc15('0x78')]['exec']&&window['_QuatroDigital_AmountProduct'][_0xdc15('0x79')][_0xdc15('0x68')](this);_0xdc15('0xc')===typeof adminCart&&adminCart();_0xae3625['fn'][_0xdc15('0x55')](!0x0,void 0x0,_0x441054);'function'===typeof _0x399c1a&&_0x399c1a(_0x326d3e);}var _0x326d3e=!0x1,_0x6dc76c=_0xae3625(_0x3fdb6a)['attr']('data-sku-index');if(_0x5bdcf2[_0xdc15('0x28')]){if(_0xdc15('0x3')===typeof window['_QuatroDigital_DropDown'][_0xdc15('0x77')][_0xdc15('0x70')][_0x6dc76c])return _0x22e8c3('Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items['+_0x6dc76c+']'),_0x326d3e;window['_QuatroDigital_DropDown'][_0xdc15('0x77')][_0xdc15('0x70')][_0x6dc76c][_0xdc15('0xca')]=_0x6dc76c;_0x5a951e[_0xdc15('0xcd')]([window['_QuatroDigital_DropDown'][_0xdc15('0x77')]['items'][_0x6dc76c]],['items',_0xdc15('0x7b'),_0xdc15('0x7c')])[_0xdc15('0xbb')](function(_0x428909){_0x326d3e=!0x0;window[_0xdc15('0x17')]['getOrderForm']=_0x428909;_0x4698be(_0x428909);_0xdc321a(!0x0);})[_0xdc15('0xce')](function(_0x2bd75b){_0x22e8c3([_0xdc15('0xcf'),_0x2bd75b]);_0xdc321a();});}else alert(_0xdc15('0xd0'));};_0x3e001c[_0xdc15('0x42')]=function(_0xf83677,_0x359d99,_0x38accd,_0x2c61b3){_0x2c61b3=_0x2c61b3||_0xae3625(_0xdc15('0xd1'));_0xf83677=_0xf83677||'+';_0x359d99=_0x359d99||0.9*_0x2c61b3[_0xdc15('0xd2')]();_0x2c61b3[_0xdc15('0xb3')](!0x0,!0x0)[_0xdc15('0xd3')]({'scrollTop':isNaN(_0x38accd)?_0xf83677+'='+_0x359d99+'px':_0x38accd});};_0x5bdcf2[_0xdc15('0xd4')]||(_0x3e001c['getCartInfoByUrl'](),_0xae3625['fn'][_0xdc15('0x55')](!0x0));_0xae3625(window)['on']('productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex',function(){try{window[_0xdc15('0x17')][_0xdc15('0x77')]=void 0x0,_0x3e001c['getCartInfoByUrl']();}catch(_0x13633e){_0x22e8c3(_0xdc15('0xd5')+_0x13633e[_0xdc15('0xd6')],'avisso');}});'function'===typeof _0x5bdcf2[_0xdc15('0xa')]?_0x5bdcf2[_0xdc15('0xa')][_0xdc15('0x68')](this):_0x22e8c3('Callback\x20não\x20é\x20uma\x20função');};_0xae3625['fn'][_0xdc15('0x19')]=function(_0x28c7ca){var _0x4fa2fd=_0xae3625(this);_0x4fa2fd['fn']=new _0xae3625[(_0xdc15('0x19'))](this,_0x28c7ca);return _0x4fa2fd;};}catch(_0x84b879){'undefined'!==typeof console&&_0xdc15('0xc')===typeof console[_0xdc15('0xd')]&&console['error'](_0xdc15('0xe'),_0x84b879);}}(this));(function(_0x5e2756){try{var _0x221272=jQuery;window['_QuatroDigital_AmountProduct']=window[_0xdc15('0x78')]||{};window['_QuatroDigital_AmountProduct'][_0xdc15('0x70')]={};window[_0xdc15('0x78')][_0xdc15('0xd7')]=!0x1;window[_0xdc15('0x78')][_0xdc15('0xd8')]=!0x1;window[_0xdc15('0x78')][_0xdc15('0xd9')]=!0x1;var _0x4d8a2f=function(){if(window[_0xdc15('0x78')][_0xdc15('0xd7')]){var _0x40407d=!0x1;var _0x3eaa35={};window[_0xdc15('0x78')]['items']={};for(_0x10e750 in window['_QuatroDigital_DropDown'][_0xdc15('0x77')][_0xdc15('0x70')])if(_0xdc15('0xf')===typeof window[_0xdc15('0x17')][_0xdc15('0x77')][_0xdc15('0x70')][_0x10e750]){var _0x5cb7c7=window['_QuatroDigital_DropDown'][_0xdc15('0x77')][_0xdc15('0x70')][_0x10e750];_0xdc15('0x3')!==typeof _0x5cb7c7['productId']&&null!==_0x5cb7c7[_0xdc15('0xda')]&&''!==_0x5cb7c7[_0xdc15('0xda')]&&(window[_0xdc15('0x78')][_0xdc15('0x70')]['prod_'+_0x5cb7c7['productId']]=window[_0xdc15('0x78')]['items'][_0xdc15('0xdb')+_0x5cb7c7['productId']]||{},window[_0xdc15('0x78')]['items'][_0xdc15('0xdb')+_0x5cb7c7['productId']][_0xdc15('0xdc')]=_0x5cb7c7['productId'],_0x3eaa35[_0xdc15('0xdb')+_0x5cb7c7[_0xdc15('0xda')]]||(window[_0xdc15('0x78')][_0xdc15('0x70')]['prod_'+_0x5cb7c7[_0xdc15('0xda')]][_0xdc15('0x6d')]=0x0),window[_0xdc15('0x78')][_0xdc15('0x70')][_0xdc15('0xdb')+_0x5cb7c7[_0xdc15('0xda')]][_0xdc15('0x6d')]+=_0x5cb7c7[_0xdc15('0xc9')],_0x40407d=!0x0,_0x3eaa35['prod_'+_0x5cb7c7[_0xdc15('0xda')]]=!0x0);}var _0x10e750=_0x40407d;}else _0x10e750=void 0x0;window[_0xdc15('0x78')][_0xdc15('0xd7')]&&(_0x221272(_0xdc15('0xdd'))[_0xdc15('0xb5')](),_0x221272(_0xdc15('0xde'))[_0xdc15('0x39')](_0xdc15('0xdf')));for(var _0x4cadf3 in window[_0xdc15('0x78')][_0xdc15('0x70')]){_0x5cb7c7=window['_QuatroDigital_AmountProduct'][_0xdc15('0x70')][_0x4cadf3];if(_0xdc15('0xf')!==typeof _0x5cb7c7)return;_0x3eaa35=_0x221272(_0xdc15('0xe0')+_0x5cb7c7['prodId']+']')[_0xdc15('0x0')]('li');if(window[_0xdc15('0x78')][_0xdc15('0xd7')]||!_0x3eaa35[_0xdc15('0x34')](_0xdc15('0xdd'))[_0xdc15('0x7')])_0x40407d=_0x221272(_0xdc15('0xe1')),_0x40407d[_0xdc15('0x34')]('.qd-bap-qtt')[_0xdc15('0x61')](_0x5cb7c7[_0xdc15('0x6d')]),_0x5cb7c7=_0x3eaa35[_0xdc15('0x34')](_0xdc15('0xe2')),_0x5cb7c7[_0xdc15('0x7')]?_0x5cb7c7[_0xdc15('0xe3')](_0x40407d)[_0xdc15('0x7a')](_0xdc15('0xdf')):_0x3eaa35[_0xdc15('0xe3')](_0x40407d);}_0x10e750&&(window[_0xdc15('0x78')][_0xdc15('0xd7')]=!0x1);};window[_0xdc15('0x78')]['exec']=function(){window[_0xdc15('0x78')]['allowRecalculate']=!0x0;_0x4d8a2f[_0xdc15('0x68')](this);};_0x221272(document)[_0xdc15('0xe4')](function(){_0x4d8a2f['call'](this);});}catch(_0x3ac181){'undefined'!==typeof console&&_0xdc15('0xc')===typeof console[_0xdc15('0xd')]&&console[_0xdc15('0xd')]('Oooops!\x20',_0x3ac181);}}(this));(function(){try{var _0x5a94da=jQuery,_0x92a237,_0x2cc08f={'selector':_0xdc15('0xe5'),'dropDown':{},'buyButton':{}};_0x5a94da[_0xdc15('0xe6')]=function(_0x2a1008){var _0x49f0b4={};_0x92a237=_0x5a94da[_0xdc15('0x21')](!0x0,{},_0x2cc08f,_0x2a1008);_0x2a1008=_0x5a94da(_0x92a237['selector'])[_0xdc15('0x19')](_0x92a237[_0xdc15('0xe7')]);_0x49f0b4[_0xdc15('0xe8')]='undefined'!==typeof _0x92a237[_0xdc15('0xe7')][_0xdc15('0xd4')]&&!0x1===_0x92a237[_0xdc15('0xe7')][_0xdc15('0xd4')]?_0x5a94da(_0x92a237[_0xdc15('0xe9')])['QD_buyButton'](_0x2a1008['fn'],_0x92a237[_0xdc15('0xe8')]):_0x5a94da(_0x92a237[_0xdc15('0xe9')])[_0xdc15('0xea')](_0x92a237[_0xdc15('0xe8')]);_0x49f0b4[_0xdc15('0xe7')]=_0x2a1008;return _0x49f0b4;};_0x5a94da['fn'][_0xdc15('0xeb')]=function(){_0xdc15('0xf')===typeof console&&'function'===typeof console['info']&&console[_0xdc15('0x10')](_0xdc15('0xec'));};_0x5a94da[_0xdc15('0xeb')]=_0x5a94da['fn']['smartCart'];}catch(_0x478bc4){_0xdc15('0x3')!==typeof console&&_0xdc15('0xc')===typeof console[_0xdc15('0xd')]&&console['error'](_0xdc15('0xe'),_0x478bc4);}}());

/* Quatro Digital - Mosaic Banners // Carlos Vinicius // Todos os direitos reservados */
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);
