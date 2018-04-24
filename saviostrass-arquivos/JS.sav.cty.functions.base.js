/**
* Funções base
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

try {
	var Common = {
		run: function() {},
		init: function() {
			Common.bannersCount();
			Common.amazingMenu();
			Common.clickActiveMiniCartMobile();
			Common.floatBarMiniCart();
			Common.setScrollToggle();
			Common.smartPrice();
			Common.btnSearchOpen();
			Common.applySmartQuantity();
			Common.mobileSearchBtnToggle();
			Common.mobileBlackBar();
		},
		ajaxStop: function() {
			Common.smartPrice();
			Common.applySmartQuantity();
		},
		windowOnload: function() {
			Common.facebookLikebox();
		},
		mobileSearchBtnToggle: function() {
			$('.header-mobile-qd-v1-search-toggle').click(function(){
				$('.header-qd-v4').toggleClass('qd-search-on');
			});
		},
		mobileBlackBar: function() {
			var originalBB = $('.header-qd-v4-black-bar');
			var clone = originalBB.clone().addClass('header-qd-v4-black-bar-mobile');
			clone.find('li').first().insertBefore(clone.find('ul')).replaceWith(function() {
				return '<p>' + $(this).html() + '</p>';
			})
			clone.find('p').click(function() {
				$(this).siblings('ul').slideToggle();
			});
			clone.insertAfter(originalBB);
		},
		setScrollToggle: function() {
			$("body").attr("data-qd-scroll-limit", 200);
		},
		btnSearchOpen: function() {
			$('.header-qd-v2-searchbar-btn').click(function() {
				$('.header-qd-v2-searchbar').toggleClass('header-qd-v2-searchbar-active');
			});

			$('.header-qd-v3-searchbar-btn').click(function() {
				$('.header-qd-v3-searchbar').toggleClass('header-qd-v3-searchbar-active');
			});

			$('.header-qd-v4-searchbar-btn').click(function() {
				$('.header-qd-v4-searchbar').toggleClass('header-qd-v4-searchbar-active');
			});
		},
		smartPrice: function(){
			var wrapper = $("li[layout]");

			// wrapper.find('.flag-teste-dev').remove();
			// wrapper.prepend('<p class="flag flag-teste-dev boleto-10-">boleto 10%</p>');

			wrapper.find(".shelf-qd-v1-price-old-price").each(function() {
				var $t = $(this);
				if(!$t.siblings('.qd-sp-wrapper').length)
					$t.before('<div class="qd-sp-wrapper"><div class="qd-sp-best-price"><span class="qd_displayPrice">R$ </span></div><div class="qd-sp-display-discount-text"><span class="qd-sp-display-discount">0% de desconto no Boleto</span></div></div>');
			});

			wrapper.find(".flag").QD_SmartPrice({
			// wrapper.QD_SmartPrice({
				// startedByWrapper: true,
				// forcePromotion: '<p class="flag desconto-0-" style="display:none;">desconto 0%</p>',
				filterFlagBy: "[class*='boleto']",
				wrapperElement: wrapper,
				productPage:{isProductPage: false }
			});
		},
		bannersCount: function() {
			$(".box-banner").parent().each(function() {
				var $t = $(this);
				$t.addClass("qdBannerCount-" + $t.find(".box-banner").length);
			});
		},
		floatBarMiniCart: function() {
			var miniCart = $(".show-minicart-on-hover");
			$(".floating-qd-v1-content .header-qd-v1-cart").mouseenter(function() {
				miniCart.not(this).mouseover();
			});
		},
		amazingMenu: function() {
			$(".header-qd-v2-main-amazing-menu, .header-qd-v3-main-amazing-menu, .header-qd-v4-main-amazing-menu").QD_amazingMenu();

			// Amazing Menu Responsivo
			$(".header-qd-v2-amazing-menu-toggle, .header-qd-v3-amazing-menu-toggle, .header-qd-v4-amazing-menu-toggle").click(function(){
				$("body").toggleClass('qd-am-on');
			});

			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-am-on');
			});

			$('.header-qd-v2-main-amazing-menu-mobile > ul > li > a, .header-qd-v2-main-amazing-menu-mobile > ul > li > p, .header-qd-v3-main-amazing-menu-mobile > ul > li > a, .header-qd-v3-main-amazing-menu-mobile > ul > li > p, .header-qd-v4-main-amazing-menu-mobile > ul > li > a, .header-qd-v4-main-amazing-menu-mobile > ul > li > p').click(function(evt){
				evt.preventDefault();

				var $t = $(this);
				$t.toggleClass('qd-on');
				$t.next('ul').slideToggle();
			});
		},
		facebookLikebox: function() {
			$(".footer-qd-v1-facebook-likebox").html('<div class="fb-page" data-href="https://www.facebook.com/saviostrass/" data-width="100%" data-height="290px" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/saviostrass/"><a href="https://www.facebook.com/saviostrass/">Quatro Digital</a></blockquote></div></div>');
		},
		clickActiveMiniCartMobile: function(){
			if ($(window).width() <= 767) {
				$(".cart-click-active-mobile, .floating-qd-v1-content .header-qd-v1-cart a").click(function(evt) {
					evt.preventDefault();
					$(".v2-vtexsc-cart").toggleClass('cart-show');
				});
			};
		},
		formCadastreMask: function() {
			var form = $(".modal form.form-first-step");

			if (!form.length || typeof $.fn.mask !== "function")
				return;

			form.find('[name=cnpj]').mask('00.000.000/0000-00');
			form.find('[name=cpf]').mask('000.000.000-00');
			form.find('[name=tel_comercial]').mask('(00) 0000-00009');
			form.find('[name=tel_celular]').mask('(00) 0000-00009');
			form.find('[name=cep]').mask('00000-000');
			form.find('[name=insc_estadual]').mask('###.###.###.###.###');
		},
		applySmartQuantity: function(){
			$('.prateleira .shelf-qd-v1-buy-button .buy-button-normal a:not(.qd-on)').addClass('qd-on').QD_buyButton({
				buyButton: '.prateleira .shelf-qd-v1-buy-button .buy-button-normal a',
				productPageCallback: function(xhr, state, url){
					if(!$(document.body).is('.resultado-busca.cores'))
						return;
					// Pega quantidade
					var qty = (url.match(/qty=([^&]+)/i) || ['0']).pop();
					// Pega quantidade
					$('a[href*="' + url.replace('redirect=false&', '') + '"]').closest('.shelf-qd-v1').find('.shelf-qd-v1-quantity').first().text(qty).closest('.shelf-qd-v1-count').addClass('qd-active').find('.shelf-qd-v1-quantity-text').text((qty>1)?'Itens adicionados':'Item adicionado');
				}
			});

			$('.prateleira .shelf-qd-v1:not(.qd-on)').addClass('qd-on').QD_smartQuantity({
				buyButton: ".shelf-qd-v1-buy-button .buy-button-normal a",
				setQuantityByUrl: false
			});
		}
	};

	var Home = {
		init: function() {
			Home.cycle2();
			Home.bannerResponsive();
			Home.mosaicAdjustment(); // Chamar depois do "bannerResponsive"
			Home.organizeSideMenuCollection();
			Home.shelfTitleStructure();
			Home.organizeSideMenuFilterList();
			Home.homeShelfCarousel();
			// Home.mosaicSetCol();
			Home.addFilterShelf();
			Home.categoryShelfCarousel();
			Home.homeSpecialLinksToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		cycle2: function() {
			if(typeof $.fn.cycle !== "function")
				return;

			var elem = $(".slider-qd-v1-full-wrapper");
			elem.find(".box-banner").each(function() {
				var $t = $(this);
				$t.attr("data-cycle-pager-template", "<div class='cycle-pager-item'><span class='slider-pager-content'>" + $t.find("img").attr("alt") + "</span></div>");
			});
			elem.cycle({
				slides: ">.box-banner",
				swipe: "true",
				pager: ">.slider-qd-v1-responsive-pager",
				prev: ">.slider-qd-v1-cycle-prev",
				next: ">.slider-qd-v1-cycle-next",
				pauseOnHover: true
			});
		},
		bannerResponsive : function(){
			$(".qd-mosaic-wrapper .box-banner a, .banner-qd-v1-browse-by-brand .box-banner a, .qd-banner-responsive .box-banner a").each(function(){
				var $t = $(this);
				var cols = [];

				var href = $t.attr("href") || "";
				if(!href.length)
					return;

				$t.attr("href", href.replace(/(col-)?(xs|sm|md|lg)-[0-9]{1,2},?/ig, function(match){
					var str = match.replace(",", "").toLowerCase();
					cols.push( str.substr(0,4) === "col-" ? str : "col-" + str );
					return "";
				}));

				$t.parent().addClass( cols.length ? cols.join(" ") : "col-xs-12 col-sm-12" );
			});
		},
		mosaicAdjustment: function() {
			mosaicAddRow($(".qd-mosaic-wrapper >div:not(.row)"));

			function mosaicAddRow(wrapper) {
				var firstTop;
				var items = new $;

				if(!wrapper.length)
					return;

				wrapper.each(function(){
					var $t = $(this);
					var offsetTop = $t.offset().top;

					if (!firstTop)
						firstTop = offsetTop;

					if (offsetTop >= firstTop - 10 && offsetTop <= firstTop + 10)
						items = items.add($t);
					else
						return false;
				});

				items.wrapAll('<div class="row"></div>');
				mosaicAddRow($(".qd-mosaic-wrapper > div:not(.row)"));
			}
		},
		organizeSideMenuCollection: function() {
			$(".box-banner +.prateleira").each(function() {
				var $t = $(this);
				var sideElem = $t.prev();

				$t.add(sideElem).wrapAll('<div class="row item-qd-v1-side-summary-collection"></div>');

				sideElem.wrap('<div class="col-xs-12 col-sm-3 col-md-3 html-qd-v1-side-summary-wrapper"></div>');
				$t.wrap('<div class="col-xs-12 col-sm-9 col-md-9 html-qd-v1-side-collection-wrapper"></div>');

				$t.find('li.helperComplement').remove();
				var ul = $t.children("ul");
				var ulFirst = ul.first();
				if(ul.length > 1){
					ul.children().appendTo(ulFirst);
					ul.not(ulFirst).remove();
				}
				ulFirst.owlCarousel({
					items: 3,
					navigation: true,
					pagination: false
				});
			});
		},
		organizeSideMenuFilterList: function() {
			var wrapper = $('.shelf-qd-v1-carousel');
			wrapper.find('ul[itemscope]').filter(function() {
				return $(this).find('+ h2 + .prateleira').length > 0;
			}).each(function() {
				var $t = $(this).addClass('home-qd-v1-shelf-filter-menu');
				var shelf = $t.find('~ .prateleira').first();
				shelf.before($t);
				$.merge($.merge($(), $t), shelf).wrapAll('<div class="row" />');
				$t.wrap('<div class="col-xs-12 col-sm-3" />');
				shelf.wrap('<div class="col-xs-12 col-sm-9" />');
				$t.parent().QD_amazingMenu();
				shelf.owlCarousel({
					items: 3,
					itemsDesktop: [1199,3],
					itemsDesktopSmall: [979,2],
					navigation: true,
					pagination: false
				});

				$t.children('li').click(function() {
					$t.toggleClass('qd-is-active');
					// $(this).children('ul').slideToggle();
				});
			});
		},
		shelfTitleStructure: function() {
			var wrapper = $('.shelf-qd-v1-carousel');

			// Titulo
			wrapper.find('.prateleira').before(function(){
				return $(this).find("h2").addClass('heading-3');
			});
		},
		homeShelfCarousel: function() {
			var wrapper = $('.shelf-qd-v1-carousel:not(.special-carousel-qd-v1-shelf)');

			wrapper.find('.prateleira').filter(function() {
				return typeof $(this).data('owlCarousel') == "undefined";
			}).owlCarousel({
				items: 4,
				navigation: true,
				pagination: false
			});
		},
		categoryShelfCarousel: function() {
			var wrapper = $('.special-carousel-qd-v1-shelf');

			wrapper.find('.prateleira').filter(function() {
				return typeof $(this).data('owlCarousel') == "undefined";
			}).owlCarousel({
				items: 3,
				itemsDesktop: [1199,2],
				itemsDesktopSmall: [979,1],
				navigation: true,
				pagination: false
			});
		},
		homeSpecialLinksToggle:function() {	
			var closedHeight = $('.home-qd-v1-special-links, .hotsite-qd-v1-special-links').outerHeight();
			var maxheight = $('.home-qd-v1-special-links >ul, .hotsite-qd-v1-special-links >ul').height();

			$('.home-qd-v1-special-links, .hotsite-qd-v1-special-links').click(function() {
				$(this).stop();

				if ($(this).outerHeight() == closedHeight) {
					$(this).animate({
						height: maxheight
					});
				}
				else {
					$(this).animate({
						height: closedHeight
					});
				}
			});

		},
		mosaicSetCol: function() {
			$(".banner-qd-v1-mosaic .box-banner").QD_mosaicBanners();
		},
		addFilterShelf: function() {
			var wrapper = $('.shelf-qd-v1-carousel');
			wrapper.find('.prateleira')
		}
	};

	var Departament = {
		init: function() {
			Search.shelfLineFix();
			Departament.sidemenuToggle();
			Search.getShelf2Carousel();
			// Departament.hideExtendedMenu();
			Search.addDiscountFilterClass();
			Search.hideExtendedMenu();

			if($(document.body).is('.cores')) {
				// Search.smartPriceModalHTML();
				// Search.moveModalSmartPrice();
			}
		},
		ajaxStop: function() {
			Search.shelfLineFix();

			if($(document.body).is('.cores')) {
				// Search.smartPriceModalHTML();
				// Search.moveModalSmartPrice();
			}
		},
		windowOnload: function() {
			Search.shelfLineFix();
		},
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
			$(".search-multiple-navigator fieldset").each(function(){
				var t,li,qtt,moreLink,moreLi,click,liHide;

				t=$(this);
				li=t.find("label");
				qtt=5;

				if(li.length<=qtt) return;

				liHide=li.filter(":gt("+(qtt-1)+")").stop(true,true).hide();
				moreLink=$('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				t.after(moreLink);
				moreLi=$('<span class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">ver mais</a></span>');
				t.append(moreLi);

				click=function(){
					liHide.stop(true,true).slideToggle(function(){
						if(li.filter(":visible").length>qtt){
							moreLink.addClass("minus").text("ver menos");
							moreLi.addClass("minus").find("a").text("ver menos");
						}
						else{
							moreLink.removeClass("minus").text("ver mais");
							moreLi.removeClass("minus").find("a").text("ver mais");
						}
					});
				};
				moreLi.bind("click.qd_viewMore",click);
				moreLink.bind("click.qd_viewMore",click);
			});
		}
	};

	var Search = {
		init: function() {
			Search.shelfLineFix();
			Departament.sidemenuToggle();
			// Search.getShelf2Carousel();
			// Departament.hideExtendedMenu();
			Search.addDiscountFilterClass();
			Search.hideExtendedMenu();

			if($(document.body).is('.cores')) {
				// Search.smartPriceModalHTML();
				// Search.moveModalSmartPrice();
			}
		},
		ajaxStop: function() {
			Search.shelfLineFix();

			if($(document.body).is('.cores')) {
				// Search.smartPriceModalHTML();
				// Search.moveModalSmartPrice();
			}
		},
		windowOnload: function() {
			Search.shelfLineFix();
		},
		hideExtendedMenu: function () {
			$(".search-qd-v1-navigator fieldset").each(function () {
				var t, li, qtt, moreLink, moreLi, click, liHide;

				t = $(this);
				li = t.find("label");
				qtt = 5;

				if (li.length <= qtt) return;

				liHide = li.filter(":gt(" + (qtt - 1) + ")").stop(true, true).hide();
				moreLink = $('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				t.find('div').append(moreLink);
				moreLi = $('<span class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">ver mais</a></span>');
				t.find('div').append(moreLi);

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
			wrapper.find('h3, h4, h5').addClass('qd-seach-active-menu');
			wrapper.find('h3, h4, h5').find("+ ul").stop(true, true).slideToggle(0);
			wrapper.find('h3, h4, h5').find("+ div").stop(true, true).slideToggle(0);
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
		shelfLineFix: function() {
			try {
				var exec = function() {
					var curTop;
					var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on'), .similar-modal-qd-v1-content .prateleira:not('.qd-fi-on')").addClass('qd-fi-on');

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
			} catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		},
		addDiscountFilterClass: function() {
			$('.search-single-navigator li').filter(function(i, el) {
				var $t = $(el);
				var text = $t.text();
				if (text.indexOf('% OFF') > -1 || text.indexOf('% off') > -1) {
					$t.find('a').text(function(index, text) {
						return text.replace(/\(\d+\)/, '');
					});
					return true;
				}
			}).first().closest('ul').addClass('filter-qd-v1-discount-list');
		},
		getShelf2Carousel: function() {
			var query;
			$("script:not([src])").each(function () {
				var content = this.innerHTML;
				if (content.indexOf("buscapagina") > -1) {
					query = (content.match(/\/buscapagina\?(.+&PageNumber=)/i) || ['']).pop() + '1';
					return false;
				}
			});

			var wrapper = $('.shelf-qd-v1-search-carousel');
			wrapper.html('<div class="qd-empty"></div>');

			$.ajax({
				url: '/buscapagina?' + query.replace(/sl=[^&]+/i, 'sl=7332fe82-c6c3-4a79-8368-af5056cd7b09'),
				dataType: 'html',
				success: function(data) {
					wrapper.html(data).find('.prateleira').owlCarousel({
						items: 1,
						navigation: true,
						pagination: false,
						itemsCustom: [0, 1]
					});
				}
			});
		},
		smartPriceModalHTML: function() {
			$('.prateleira .qd-sp-display-discount-text:not(.qd-on)').addClass('qd-on').each(function(){
				$t = $(this);
				$t.html('com <span class="qd-sp-display-discount">' + $t.find('.qd-sp-display-discount').text().replace(/\%/g, '% desc.') + '</span>');
			});
		},
		moveModalSmartPrice: function() {
			$('.prateleira .qd-sp-wrapper:not(.qd-on)').addClass('qd-on').each(function(){
				$t = $(this);
				$t.appendTo($t.closest('.shelf-qd-v1-price'));
			});
		},
	};

	var Product = {
		run: function() {},
		init: function() {
			Product.callQdVideoInProduct();
			Product.seeDescription();
			Product.openShipping();
			Product.checkBuyTogether();
			Product.checkSpecification();
			Product.currentColorThumb();
			Product.qdProductToolTipCall();
			Product.qdClickTableMeasures();
			Product.hideUniqueSkuOption();
			Product.smartPriceHtml();
			Product.smartPrice();
			Product.orderingSimilarProducts();
			Product.orderingSimilarPopUpProducts();
			Product.applySmartButton();
			// Product.applySmartQuantity(); // Está sendo chamado no método doublePrice()

			// Smart Quantity Modal Functions
			Product.insertProductList().always(function() {
				if(Product.sqModalEmpty())
					return;
				Product.modalSmartQuantityTitleAndButton();
				Product.applySmartQuantityModal();
				// Product.moveModalSmartPrice();
				// Product.smartPriceModalHTML();
				Product.modalTipCookie();
			});

			Product.doublePrice(); // Chamar este método por último antes desse de baixo
			Product.qdProductCollectionsWrapCarousel(); // Chamar este metodo sempre por último
		},
		ajaxStop: function() {
			Product.applySmartButton();
		},
		windowOnload: function() {},
		orderingSimilarPopUpProducts: function() {
			$('.similar-modal-qd-v1-wrapper').one('show.bs.modal', function(){
				var ulWrapper = $(this).find('.prateleira');
				var ulSorted = ulWrapper.find('ul').sort(function(a, b) {
					var x = $(a).find('a').attr('title');
					var y = $(b).find('a').attr('title');
	
					if(x > y)
						return 1;
					if(x < y)
						return -1;
					return 0;
				});
				ulWrapper.append(ulSorted);
			});
		},
		orderingSimilarProducts: function() {
			var wrapper = $('.sku-qd-v1-color-similar');

			var arraySort = wrapper.find('a').sort(function(a, b) {
				var x = $(a).attr('data-original-title');
				var y = $(b).attr('data-original-title');

				if(x > y)
					return 1;
				if(x < y)
					return -1;
				return 0;
			});

			wrapper.find('.color-in-stock').each(function(index) {
				var $t = $(this);
				$t.append(arraySort[index]);
			});
		},
		applySmartButton: function(){
			$('.produto .product-qd-v1-wrapper').QD_buyButton({
				buyButton: '.product-qd-v1-buy-button a.buy-button',
				callback: function(){
					$('.qd-bb-productAdded').remove();
				}
			});
		},
		applySmartQuantityModal: function(){
			$('.similar-modal-qd-v1-wrapper .buy-button-normal a').QD_buyButton({
				buyButton: '.similar-modal-qd-v1-wrapper .buy-button-normal a',
				productPageCallback: function(xhr, state, url){
					// Pega quantidade
					var qty = (url.match(/qty=([^&]+)/i) || ['0']).pop();
					// Pega quantidade
					$('a[href*="' + url.replace('redirect=false&', '') + '"]').closest('.shelf-qd-v1').find('.shelf-qd-v1-quantity').first().text(qty).closest('.shelf-qd-v1-count').addClass('qd-active').find('.shelf-qd-v1-quantity-text').text((qty>1)?'Itens adicionados':'Item adicionado');
				}
			});

			$('.similar-modal-qd-v1-wrapper .shelf-qd-v1').QD_smartQuantity({
				buyButton: ".buy-button-normal a",
				setQuantityByUrl: false
			});
		},
		callQdVideoInProduct: function() {
			var iframe = $("td.value-field.Video:first iframe");

			if (!iframe.length)
				return;

			window.qdVideoInProduct = {videoFieldSelector: $('<span/>').addClass('video-product').text('https://www.youtube.com/watch?v=' + iframe.attr("src").split("?").shift().split("/").pop() + '&rel=0')};
		},
		doublePrice: function() {
			if($('.prateleira.color').height() > 112) {
				var row = $('.row.padding-t-xs.padding-b-xs.bg-color-6-500').clone().addClass('product-qd-v1-double-size qd-show');
				row.find('script').remove();
				row.insertBefore($('.smart-quantity-opener-qd-v1-wrapper').closest('.row'));
			}

			Product.applySmartQuantity();
		},
		insertProductList: function() {
			return $.ajax({
				url: "/buscapagina?sl=3976c1d3-5e3d-4f2f-bbd8-e3d94b3c3ab5&PS=1&cc=5&sm=0&PageNumber=1&fq=productId:" + skuJson_0.productId
			}).done(function(data) {
				var wrapper = $(data).find('ul').first().prependTo('.similar-modal-qd-v1-wrapper .prateleira').find('li').first();
				wrapper.find(".shelf-qd-v1-price-best-price").each(function() {
					var $t = $(this);
					if(!$t.siblings('.qd-sp-wrapper').length)
						$t.before('<div class="qd-sp-wrapper"><div class="qd-sp-best-price"><span class="qd_displayPrice">R$ </span></div><div class="qd-sp-display-discount-text">c/ desconto de <span class="qd-sp-display-discount">0% no Boleto</span></div></div>');
				});

				wrapper.find(".flag").QD_SmartPrice({
					filterFlagBy: "[class*='boleto']",
					wrapperElement: wrapper,
					productPage:{isProductPage: false }
				});
			});
		},
		smartPriceHtml: function() {
			if(!skuJson.available)
				return;

			var wrapper = $(".product-qd-v1-price").each(function(){
				$(this).prepend('<div class="qd-sp-wrapper"><div class="qd-sp-best-price"><span class="qd_displayPrice">R$ </span></div><div class="qd-sp-display-discount-text"><span class="qd-sp-display-discount">0% de desconto no Boleto</span></div></div>');
			});

			// wrapper.find('.flag-teste-dev').remove();
			// wrapper.prepend('<p class="flag flag-teste-dev boleto-10-">boleto 10%</p>');

			$(window).on("skuSelected", function(e, id, data) {
				if(data.available)
					wrapper.show();
				else
					wrapper.hide();
			});
		},
		smartPrice: function() {
			$(".product-qd-v1-stamps .flag").QD_SmartPrice({
			// $('.product-qd-v1-sku-selection-box').QD_SmartPrice({
				// startedByWrapper: true,
				// forcePromotion: '<p class="flag boleto-0-" style="display:none;">boleto 0%</p>',
				filterFlagBy: "[class*='boleto']",
				productPage:{
					wrapperElement: ".product-qd-v1-wrapper",
					changeNativePrice: false,
					isProductPage: true
				}
			});
		},
		qdClickTableMeasures: function() {
			var wrapper = $(".sku-qd-v1-selection-elements");
			var modal = $(".qd-v2-modal");

			if (wrapper.find(".sku-qd-v1-color-similar h2").length) {
				wrapper.find(".sku-qd-v1-color-similar h2").append('<span class="sku-qd-v1-click-table-measures">ver tabela de cores e tamanho</span>');

			}else {
				wrapper.prepend('<span class="sku-qd-v1-click-table-measures">ver tabela de cores e tamanho</span>');
			}

			$(".sku-qd-v1-click-table-measures").click(function() {
				modal.find('.modal-body:not(.qd-on)').addClass('qd-on').append('<img width="720" height="688" id="ihttp://saviostrass.vteximg.com.br/arquivos/ids/155327/tabela-de-medidas.jpg" alt="tabela de medidas" src="http://saviostrass.vteximg.com.br/arquivos/ids/155327/tabela-de-medidas.jpg" complete="complete">');
				modal.addClass('qd-v2-modal-table-measures');
				modal.modal();
			});
		},
		qdProductToolTipCall: function() {
			$('[data-toggle="tooltip"]').tooltip();
		},
		seeDescription: function() {
			$(".product-qd-v1-link-description").click(function(e){
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $(".product-qd-v1-description").offset().top - 100
				}, 900, 'swing');
			});
		},
		smartPriceModalHTML: function() {
			$('.similar-modal-qd-v1-content .qd-sp-display-discount-text').each(function(){
				$t = $(this);
				$t.html('<span class="qd-sp-display-discount">' + $t.find('.qd-sp-display-discount').text().replace(/\%/g, '% desc.') + '</span>');
			});
		},
		sqModalEmpty: function() {
			if($('.similar-modal-qd-v1-content').html() == ""){
				$('.smart-quantity-opener-qd-v1-wrapper').addClass('qd-inactive');
				return true;
			}
			return false;
		},
		openShipping: function() {
			if( typeof window.ShippingValue === "function" )
				window.ShippingValue();
		},
		moveModalSmartPrice: function() {
			$('.similar-modal-qd-v1-content .qd-sp-wrapper').each(function(){
				$t = $(this);
				$t.appendTo($t.closest('.shelf-qd-v1-price'));
			});
		},
		modalSmartQuantityTitleAndButton: function() {
			var wrapper = $('.similar-modal-qd-v1-content');
			var h2 = wrapper.find('.prateleira > h2');
			wrapper.find('.modal-header h4').text(h2.text());
			h2.remove();

			$('.similar-modal-qd-v1-wrapper').on('show.bs.modal', function(){
				setTimeout(function(){
					Search.shelfLineFix();
				}, 500);
			});

			$('.sm-opener-qd-v1-bg-content').click(function(){
				$('.similar-modal-qd-v1-wrapper').modal();
			});
		},
		modalTipCookie: function() {
			wrapper = $('.smart-quantity-opener-qd-v1-wrapper');

			if($.cookie('QD_SmQtyTip') == undefined){
				$.cookie('QD_SmQtyTip', 'true', { expires: 365, path: "/"});

				wrapper.addClass('qd-active');
				$(document).click(function(e){
					// Elementos que não fecharão a tip
					if($(e.target).is('.src-component-Launcher-wrapper, #samchat-window'))
						return;

					wrapper.removeClass('qd-active');
				});
			}
		},
		currentColorThumb: function() {
			var ul = $(".sku-qd-v1-color-similar .prateleira >ul:first");
			var newUl = ul.clone();

			newUl.find("img").attr("src", skuJson.skus[0].image);
			newUl.find("a").attr("href", "").addClass("qd-sku-selected");
			newUl.insertBefore(ul);
		},
		qdProductCollectionsWrapCarousel: function() {
			$('.qd-collections-wrap').find('.prateleira').each(function(){
				var $this = $(this);
				$this.find("h2").addClass('heading-3').insertBefore($this);
				$this.owlCarousel({
					items : 4,
					navigation: true,
					pagination: false
				});
			});
		},
		checkBuyTogether: function(){
			var wrapper = $(".product-qd-v1-area-placeholder-buy-together");

			if (wrapper.find('.buy-together-content > *').length <= 0)
				wrapper.find('> .col-sm-6').removeClass('col-sm-6').addClass('col-sm-12');

			$(".product-qd-v1-area-placeholder-buy-together").find('.prateleira').each(function(){
				var $this = $(this);

				$this.find("h2").addClass('heading-3').insertBefore($this);

				$this.owlCarousel({
					items : 2,
					navigation: true,
					pagination: false
				});
			});
		},
		checkSpecification: function() {
			if ($(".product-qd-v1-specification #caracteristicas > *").length <= 0)
				$(".product-qd-v1-description").parent().removeClass('col-sm-5').addClass('col-sm-12');
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
		applySmartQuantity: function() {
			$('.product-qd-v1-sku-selection-box').QD_smartQuantity();

			$(window).on("skuSelected.vtex", function(e, id, data) {
				$('.qd-sq-more, .qd-sq-minus').click();
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
			Institutional.sidemenuToggleInstitutional();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		sidemenuToggleInstitutional: function() {
			// Amazing Menu Responsivo
			$(".institucional-qd-v1-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});

			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
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
/* Quatro Digital Simple Cart // 4.15 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
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
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital Amazing Menu // 2.12 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(4(h){8 a,m,k,n;a=2s;D("4"!==F a.Y.R){m={X:"/7-1Q-V",1g:4(){}};8 l=4(a,b){D("1B"===F w&&"U"!==F w.11&&"U"!==F w.14&&"U"!==F w.1h){8 d;"1B"===F a?(a.2t("[1C 1A 1z]\\n"),d=a):d=["[1C 1A 1z]\\n"+a];D("U"===F b||"1S"!==b.M()&&"2v"!==b.M())D("U"!==F b&&"14"===b.M())S{w.14.1l(w,d)}Q(p){S{w.14(d.T("\\n"))}Q(f){}}1x S{w.11.1l(w,d)}Q(p){S{w.11(d.T("\\n"))}Q(f){}}1x S{w.1h.1l(w,d)}Q(p){S{w.1h(d.T("\\n"))}Q(f){}}}};a.Y.1c=4(){8 e=a(r);e.C(4(b){a(r).v("7-i-G-"+b)});e.1d().v("7-i-1d");e.1y().v("7-i-1y");x e};a.Y.R=4(){};h=4(a){8 b={j:"2o%3%1D%3%6%3%5",Y:"2n%3%6%3%5",2w:"2x%3%O%3%6%3%5",2G:"1E%3%I%3%6%3%5",2F:"1w%3%K%3%6%3%5",2H:"c-1f%3%O%3%6%3%5",W:"-1f%3%I%3%6%3%5","W-":"1f%3%K%3%6%3%5","H%3%":"1D%3%O%3%6%3%5","H%3%2":"2J%3%I%3%6%3%5","H%3%25":"2E%3%K%3%6%3%5","H%3%2D":"2z%3%6%3%5",2y:"f%3%6%3%5",1j:"%3%O%3%6%3%5","1j%":"3%I%3%6%3%5","1j%2":"2A%K%3%6%3%5","W-2B":"1K%3%O%3%6%3%5","W-2i":"2K%3%I%3%6%3%5","W-2f":"1Z%3%K%3%6%3%5","H%3%20":"1E%3%O%3%6%3%5","H%3%22":"1w%3%I%3%6%3%5","H%3%1U":"1K%3%K%3%6%3%5"};x 4(a){8 e,f,c,g;f=4(a){x a};c=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];a=a["d"+c[16]+"c"+c[17]+"m"+f(c[1])+"n"+c[13]]["l"+c[18]+"c"+c[0]+"23"+f("o")+"n"];e=4(a){x 2e(2g(a.15(/\\./g,"\\2c").15(/[a-2b-Z]/g,4(a){x 27.28(("Z">=a?2L:2a)>=(a=a.2h(0)+13)?a:a-26)})))};29(8 q 2d b){D(e(a[[c[9],f("o"),c[12],c[f(13)]].T("")])===q+b[q]){g="24"+c[17]+"e";1W}g="f"+c[0]+"2C"+f(c[1])+""}f=!1;-1<a[[c[12],"e",c[0],"3s",c[9]].T("")].3i("3n%1H%1F%1G%1a%1i%1a%3v%3r%3q%1I%3t%1I%3k%1a%1i%1H%1F%1G%3m%1i")&&(f=!0);x[g,f]}(a)}(h);D(!3u(h[0]))x h[1]?l("\\3g\\2V\\1M \\2U\\J\\2W\\2X\\1L\\J\\1L\\1M \\3h\\J\\2Y\\J \\2T\\2S\\2N\\J L\\2M\\J!"):!1;n=4(e){8 b,d;e=e.B(".2P");b=e.1m(".7-i-1e");d=e.1m(".7-i-1n");D(b.E||d.E)b.19().v("7-i-1e-1s"),d.19().v("7-i-1n-1s"),a.30({X:k.X,31:"3b",3a:4(e){8 f=a(e);b.C(4(){8 c,g;g=a(r);c=f.B("3c[3d=\'"+g.1p("1q-1r-1o")+"\']");c.E&&(c.C(4(){a(r).1u(".3f-1e").1t().1v(g)}),g.1J())}).v("7-i-1R-1T");d.C(4(){8 c={},g;g=a(r);f.B("39").C(4(){D(a(r).1P().1b().M()==g.1p("1q-1r-1o").1b().M())x c=a(r),!1});c.E&&(c.C(4(){a(r).1u("[37*=\'36\']").1t().1v(g)}),g.1J())}).v("7-i-1R-1T")},11:4(){l("N\\1N 35 34\\32 33 38 3e 1O V. A X \'"+k.X+"\' 2Q.")},2R:2O})};a.R=4(e){8 b=e.B("P[2Z]").C(4(){8 d,b;d=a(r);D(!d.E)x l(["3o 1O V n\\1N 3l",e],"1S");d.B("G >P").19().v("7-i-3p-P");d.B("G").C(4(){8 g=a(r),b;b=g.10(":3j(P)");b.E&&g.v("7-i-1X-"+b.1d().1P().1b().1V().15(/\\./g,"").15(/\\s/g,"-").M())});b=d.B(">G").1c();d.v("7-1Q-V");b=b.B(">P");b.C(4(){8 b=a(r);b.B(">G").1c().v("7-i-1Y");b.v("7-i-1k-V");b.19().v("7-i-1k")});b.v("7-i-1k");8 f=0,c=4(a){f+=1;a=a.10("G").10("*");a.E&&(a.v("7-i-21-"+f),c(a))};c(d);d.2I(d.B("P")).C(4(){8 b=a(r);b.v("7-i-"+b.10("G").E+"-G")})});n(b);k.1g.2m(r);a(2l).2j("2k.i.1g",e)};a.Y.R=4(e){8 b=a(r);D(!b.E)x b;k=a.2p({},m,e);b.2q=2u a.R(a(r));x b};a(4(){a(".2r").R()})}})(r);',62,218,'|||25C2|function|25A8oe|25A8pbz|qd|var||||||||||am|||||||||this||||addClass|console|return||||find|each|if|length|typeof|li|jjj|25A8igrkpbzzreprorgn|u0391|25A8igrkpbzzreprfgnoyr||toLowerCase||25A8igrkpbzzrepr|ul|catch|QD_amazingMenu|try|join|undefined|menu|qrirybc|url|fn||children|error|||info|replace||||parent|D1|trim|qdAmAddNdx|first|banner|fnivbfgenff|callback|warn|82|qrifnivbfgenff|dropdown|apply|filter|collection|value|attr|data|qdam|wrapper|clone|getParent|insertBefore|fgenff|else|last|Menu|Amazing|object|QD|25A8fnivbfgenff|bfgenff|B8|84|E0|C2|hide|genff|u2202|u0472|u00e3o|do|text|amazing|content|alerta|loaded|25A8qrifnivbf|replaceSpecialChars|break|elem|column|nff|25A8qrifniv|level|25A8qrifnivb|ti|tr|||String|fromCharCode|for|122|zA|u00a8|in|escape|qrifnivbfge|encodeURIComponent|charCodeAt|qrifnivbfg|trigger|QuatroDigital|window|call|ivbfgenff|jj|extend|exec|qd_amazing_menu_auto|jQuery|unshift|new|aviso|fni|vbfgenff|qrifnivbfgenf|8qrifnivbfgenff|5C2|qrifnivbf|ls|25A|A8fnivbfgenff|fnivb|fniv|qriryb|add|5A8fnivbfgenff|enff|90|u0472J|u01ac|3E3|qd_am_code|falho|clearQueueDelay|u0abd|u0aef|u221a|u00c3|u2113|u00a1|u0ae8|itemscope|qdAjax|dataType|u00edvel|obter|poss|foi|colunas|class|os|h2|success|html|img|alt|dados|box|u0e17|u03a1|indexOf|not|A1|encontrada|C5|qu|UL|has|83d|CF|rc|A1g|eval|8F'.split('|'),0,{}));
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/*http://phpjs.org/functions/number_format/*/
	function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};
/* Quatro Digital - Smart Price // 3.0 // Carlos Vinicius [Quatro Digital] // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"5"!==I 1w.2q.X&&(1w.2q.X=5(){G T.F(/^\\s+|\\s+$/g,"")});5 R(d,c,q,g){d=(d+"").F(/[^0-9+\\-2A.]/g,"");d=1S(+d)?+d:0;c=1S(+c)?1o.3s(c):0;g="1c"===I g?",":g;q="1c"===I q?".":q;E b="",b=5(c,b){E m=1o.3g(10,b);G""+(1o.1Z(c*m)/m).3h(b)},b=(c?b(d,c):""+1o.1Z(d)).3d(".");3<b[0].M&&(b[0]=b[0].F(/\\B(?=(?:\\d{3})+(?!\\d))/g,g));(b[1]||"").M<c&&(b[1]=b[1]||"",b[1]+=3a(c-b[1].M+1).V("0"));G b.V(q)}(5(d){E c=3o;8("5"!==I c.1p.1u){E q=5(c,a){8("1Q"===I J&&"5"===I J.1M&&"5"===I J.1m&&"5"===I J.1O){E b;"1Q"===I c?(c.2X("[2g 2c]\\n"),b=c):b=["[2g 2c]\\n"+c];8("1c"===I a||"22"!==a.1D()&&"32"!==a.1D())8("1c"!==I a&&"1m"===a.1D())1J{J.1m.1H(J,b)}1I(d){J.1m(b.V("\\n"))}1e 1J{J.1M.1H(J,b)}1I(d){J.1M(b.V("\\n"))}1e 1J{J.1O.1H(J,b)}1I(d){J.1O(b.V("\\n"))}}},g=/[0-9]+\\%/i,b=/[0-9\\.]+(?=\\%)/i,B={2a:5(c){G-1<c.K().31(g)?!0:!1},1B:5(c){G c.K().30(b)},1P:!1,2k:".33",Y:"34",1R:"[37*=\'20\']",1x:1C,1g:1C,1T:!0,36:!0,1l:!1,D:{2p:!0,28:!0,1l:!1,U:"35",Y:".2Z",1j:"2o.1j",1n:"2f.2Y",2r:"2f.2S",1z:"2o.1z"}};c.1p.1u=5(){};d=5(c){E a={j:"2R%4%2s%4%6%4%7",1p:"2Q%4%6%4%7",2P:"2T%4%15%4%6%4%7",2U:"24%4%19%4%6%4%7",2V:"1X%4%1b%4%6%4%7",38:"c-1L%4%15%4%6%4%7",1d:"-1L%4%19%4%6%4%7","1d-":"1L%4%1b%4%6%4%7","11%4%":"2s%4%15%4%6%4%7","11%4%2":"39%4%19%4%6%4%7","11%4%25":"3m%4%1b%4%6%4%7","11%4%3l":"3k%4%6%4%7",3n:"f%4%6%4%7",1v:"%4%15%4%6%4%7","1v%":"4%19%4%6%4%7","1v%2":"3r%1b%4%6%4%7","1d-3q":"1Y%4%15%4%6%4%7","1d-3p":"2O%4%19%4%6%4%7","1d-3j":"3i%4%1b%4%6%4%7","11%4%3c":"24%4%15%4%6%4%7","11%4%3b":"1X%4%19%4%6%4%7","11%4%3e":"1Y%4%1b%4%6%4%7"};G 5(c){E b,n,h,e;n=5(a){G a};h=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];c=c["d"+h[16]+"c"+h[17]+"m"+n(h[1])+"n"+h[13]]["l"+h[18]+"c"+h[0]+"3f"+n("o")+"n"];b=5(a){G 2D(2C(a.F(/\\./g,"\\2K").F(/[a-2F-Z]/g,5(a){G 1w.2x(("Z">=a?2G:2z)>=(a=a.2y(0)+13)?a:a-26)})))};1y(E d 21 a){8(b(c[[h[9],n("o"),h[12],h[n(13)]].V("")])===d+a[d]){e="2w"+h[17]+"e";23}e="f"+h[0]+"2E"+n(h[1])+""}n=!1;-1<c[[h[12],"e",h[0],"2M",h[9]].V("")].2L("2H%2m%2n%2i%1K%1E%1K%2I%2J%2N%2h%2B%2h%2W%1K%1E%2m%2n%2i%3z%1E")&&(n=!0);G[e,n]}(c)}(d);8(!4i(d[0]))G d[1]?q("\\4l\\4o\\2t \\4q\\1a\\46\\43\\2v\\1a\\2v\\2t \\4d\\1a\\4b\\1a \\4e\\4a\\47\\1a L\\42\\1a!"):!1;E C=5(b,a){E d=5(b){E d,e,g,m,t,r,v,u,w,x,p,y,z,k=c(T);b="1c"===I b?!1:b;E f=a.D.U?k.1s(a.D.Y):k.1s(a.Y);8(b||k.1r(a.1R)){E l=a.D.U;8(!k.1r(".1F, .1V")||l){8(l){u=f.H(a.D.1j);8(u.H(".45").M)G;u.1W("S-W");f.1W("S-1h-W")}8(a.1T&&k.4f(".1F").M)k.N("1V");1e 8(k.N("1F"),a.2a(k)){8(l)8(g={},b=2u(c("4k[29]:3t").2d("29"),10))1y(e=0;e<P.Q.M;e++){8(P.Q[e].4n==b){g=P.Q[e];23}}1e 1y(e 21 b=4m,P.Q)"5"!==I P.Q[e]&&P.Q[e].4p&&P.Q[e].1G<b&&(b=P.Q[e].1G,g=P.Q[e]);e=a.1B(k);d=1k(e,10);8(1f(d))G q(["O 4h 4j p/ o 20 n\\1t \\48 40 n\\3E.",k],"22");E A=5(b){l?m=(b.1G||0)/14:(x=f.H(".2j"),m=1k((x.1A()||"").F(/[^0-9\\.\\,]+/i,"").F(".","").F(",","."),10));8(1f(m))G q(["3D 41 3F\\1t n\\1t 3I 3H o 3B\\3w 3v 27 :(",k,f]);1C!==a.1g&&(p=0,1f(a.1g)?(y=f.H(a.1g),y.M&&(p=a.1B(y))):p=a.1g,p=1k(p,10),1f(p)&&(p=0),0!==p&&(m=14*m/(14-p)));t=l?(b.3y||0)/14:1k((f.H(".3A").1A()||"").F(/[^0-9\\.\\,]+/i,"").F(".","").F(",","."),10);1f(t)&&(t=.3J);r=(14-d)/14*m;l&&a.D.28?(u.K(u.K().X().F(/[0-9\\.]+\\,[0-9]+/,R(r,2,",","."))).N("S-W"),f.N("S-1h-W")):(z=f.H(".3V"),z.K(z.K().F(/[0-9\\.]+,[0-9]+/i,"")+R(r,2,",",".")));l&&(v=f.H(a.D.1z),v.M&&v.K(v.K().X().F(/[0-9\\.]+\\,[0-9]+/,R(r,2,",","."))));E e=f.H(".S-1h-2e-3U");e.K(e.K().F(/[0-9]+\\%/i,d+"%"));e=5(a,c,d){a=f.H(a);a.M&&a.1i(a.1i().X().F(/[0-9]{1,2}/,d?d:b.1n||0));c=f.H(c);c.M&&c.1i(c.1i().X().F(/[0-9\\.]+\\,[0-9]+/,R(r/(d?d:b.1n||1),2,",",".")))};l&&a.D.1l?e(a.D.1n,a.D.2r):a.1l&&e(".3X",".3Z",2u(f.H(".3Y").1A()||1)||1);f.H(".3T").2b(R(t-r,2,",","."));f.H(".3N").3M(R(14*(t-r)/t,2,",","."));l&&a.D.2p&&c("3L.3O-3P").1N(5(){w=c(T);w.K(w.K().X().F(/[0-9\\.]+\\,[0-9]+/,R(t-r,2,",",".")));w.N("S-W")})};A(g);8(l)c(3Q).3R("3S.3W",5(a,b,c){A(c)});f.N("1q");l||x.N("1q")}}}1e a.D.U&&f.1r(a.D.Y)&&(f.H(a.D.1j).N("S-W"),f.N("S-1h-W"))};(a.1P?b.H(a.2k):b).1N(5(){d.1U(T,!1)});8("3K"==I a.1x){E g=a.1P?b:b.1s(a.Y),g=a.D.U?g.1s(a.D.Y).2l(".1q"):g.H(".2j:2l(.1q)");g.1N(5(){E b=c(a.1x);b.2d("3x","2e:3u !3C;");a.D.U?c(T).2b(b):c(T).3G(b);d.1U(b,!0)})}};c.1p.1u=5(b){E a=c(T);8(!a.M)G a;b=c.4g(!0,{},B,b);"44"!=I b.D.U&&(b.D.U=c(4c.49).1r(".27"));C(a,b);G a}}})(T);',62,275,'||||25C2|function|25A8pbz|25A8oe|if|||||||||||||||||||||||||||||||productPage|var|replace|return|find|typeof|console|text||length|addClass||skuJson|skus|qd_number_format|qd|this|isProductPage|join|active|trim|wrapperElement|||jjj|||100|25A8igrkpbzzrepr||||25A8igrkpbzzreprorgn|u0391|25A8igrkpbzzreprfgnoyr|undefined|qrirybc|else|isNaN|appliedDiscount|sp|html|skuBestPrice|parseFloat|changeInstallments|info|installments|Math|fn|qd_sp_processedItem|is|closest|u00e3o|QD_SmartPrice|qrifnivbfgenff|String|forcePromotion|for|skuPrice|val|getDiscountValue|null|toLowerCase|82|qd_sp_on|bestPrice|apply|catch|try|D1|fnivbfgenff|error|each|warn|startedByWrapper|object|filterFlagBy|isFinite|oneFlagByItem|call|qd_sp_ignored|removeClass|fgenff|genff|round|desconto|in|alerta|break|bfgenff|||produto|changeNativePrice|skuCorrente|isDiscountFlag|append|Price|attr|display|label|Smart|C2|84|qd_productPrice|flagElement|not|E0|B8|strong|changeNativeSaveAmount|prototype|installmentValue|25A8fnivbfgenff|u0472|parseInt|u2202|tr|fromCharCode|charCodeAt|122|Ee|A1g|encodeURIComponent|escape|ls|zA|90|qu|8F|CF|u00a8|indexOf|rc|83d|enff|fni|ivbfgenff|jj|skuBestInstallmentValue|vbfgenff|fniv|fnivb|A1|unshift|skuBestInstallmentNumber|productRightColumn|match|search|aviso|flag|li|auto|isSmartCheckout|class|qriryb|5A8fnivbfgenff|Array|25A8qrifnivb|25A8qrifniv|split|25A8qrifnivbf|ti|pow|toFixed|nff|qrifnivbfge|8qrifnivbfgenff|25A|A8fnivbfgenff|qrifnivbfgenf|jQuery|qrifnivbfg|qrifnivbf|5C2|abs|first|none|deste|u00e7o|style|listPrice|C5|qd_productOldPrice|pre|important|Por|u00famero|raz|after|obter|consegui|001|string|em|prepend|qd_saveAmountPercent|economia|de|window|on|skuSelected|qd_saveAmount|discount|qd_displayPrice|vtex|qd_sp_display_installments|qd_sp_installments|qd_sp_display_installmentValue|um|alguma|u0472J|u00a1|boolean|qd_active|u2113|u01ac|u00e9|body|u0abd|u0ae8|document|u03a1|u0aef|siblings|extend|valor|eval|informado|div|u0e17|99999999999999|sku|u00c3|available|u221a'.split('|'),0,{}));
/* Automatizador de comments box do Facebook // 1.4 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if($("script[src*='connect.facebook.net/pt_BR/sdk.js']").filter("[src*='sdk.js']").length)"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse();else{a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||
(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}});
/* Quatro Digital - localStorage // 1.1 // Carlos Vinicius // Todos os direitos reservados */
(function(){var e=function(b,c){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var a;"object"===typeof b?(b.unshift("[Quatro Digital - localStorage]\n"),a=b):a=["[Quatro Digital - localStorage]\n"+b];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,a)}catch(d){console.info(a.join("\n"))}else try{console.error.apply(console,
a)}catch(e){console.error(a.join("\n"))}else try{console.warn.apply(console,a)}catch(f){console.warn(a.join("\n"))}}};window.qdLocalStorage=window.qdLocalStorage||{};var f="undefined"!==typeof localStorage&&"undefined"!==typeof localStorage.setItem&&"undefined"!==typeof localStorage.getItem;window.qdLocalStorage.setItem=function(b,c,a){try{if(!f)return!1;var d=new Date;localStorage.setItem(b,c);isNaN(parseInt(a))||(d.setTime(d.getTime()+6E4*a),localStorage.setItem(b+"_expiration",d.getTime()))}catch(g){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar salvar os dados no armazenamento local. Detalhes: ",
g.message],"alerta")}};window.qdLocalStorage.getItem=function(b){try{if(!f)return!1;var c=new Date,a=parseInt(localStorage.getItem(b+"_expiration")||0,10)||0;return c.getTime()>a?(localStorage.removeItem&&(localStorage.removeItem(b),localStorage.removeItem(b+"_expiration")),null):localStorage.getItem(b)}catch(d){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar obter os dados no armazenamento local. Detalhes: ",d.message],"alerta")}}})();
/* Quatro Digital - Smart SKU Totalizer // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(m){var a=jQuery;if("function"!==typeof a.fn.QD_smartSkuTotalizer){var f=function(a,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var c;"object"===typeof a?(a.unshift("[Quatro Digital - Smart SKU Totalizer]\n"),c=a):c=["[Quatro Digital - Smart SKU Totalizer]\n"+a];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
c)}catch(f){try{console.info(c.join("\n"))}catch(k){}}else try{console.error.apply(console,c)}catch(g){try{console.error(c.join("\n"))}catch(e){}}else try{console.warn.apply(console,c)}catch(n){try{console.warn(c.join("\n"))}catch(p){}}}},l={inputQtt:"input",qttSkus:".qd-selected-qtt-sku",valueSkus:".qd-selected-sku-total"};a.QD_smartSkuTotalizer=function(d,b){if(!d.length)return d;try{var c=a(b.qttSkus),h=a(b.valueSkus),k=a("meta[name='currency']").attr("content")||"R$";if(!c.length&&!h.length)return f("N\u00e3o encontrei os elementos para informar os totais, por isso n\u00e3o irei exibi-los.",
"info");var g=d.find(b.inputQtt).not("disabled").filter("[data-sku-id]");g.on("QuatroDigital.sq_change",function(){try{var b=0,d=0;g.each(function(){var c=a(this),e=parseInt(c.val());0<e&&(d+=e,b+=e*(parseInt(c.attr("data-sku-price"))||0))});c.html(d);h.html(k+" "+qd_number_format(b/100,2,",","."))}catch(e){f(e.message)}})}catch(e){f(e.message)}};a.fn.QD_smartSkuTotalizer=function(d){var b=a(this);if(!b.length)return b;var c=a.extend({},l,d);b.each(function(){a.QD_smartSkuTotalizer(a(this),c)});return b};
a(function(){a(".qd_auto_smart_sku_totalizer").QD_smartSkuTotalizer()})}})(this);
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
/* Quatro Digital Cookie Functions // 1.5 // Carlos Vinicius // Todos os direitos reservados */
(function(){var a,h,g;a=jQuery;g={cookieName:"Nome_Padrao",closeLimit:2,expireDays:365,completeExpireDays:365,path:"/",close:"[class*=close]",show:function(a){a.slideDown()},hide:function(a){a.slideUp()},callback:function(){},exceededLimitCallback:function(){},closeCallback:function(){}};var k=function(a,d){if("object"===typeof console){var e;"object"===typeof a?(a.unshift("[Cookie Functions]\n"),e=a):e=["[Cookie Functions]\n"+a];"undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase()?
"undefined"!==typeof d&&"info"===d.toLowerCase()?console.info.apply(console,e):console.error.apply(console,e):console.warn.apply(console,e)}};a.QD_cookieFn=function(f){if("function"!==typeof a.cookie)return k("Aeeeee irm\u00e3\u00e3\u00e3ooooo!\nEsta faltando o plugin $.cookie mew. Chama ele na p\u00e1gina, vlw!");var d=function(c,b){var d=a.cookie("qdCookieFn_"+b.cookieName);if("undefined"!==typeof d&&d>=b.closeLimit||a.cookie("qdCookieFn_"+b.cookieName+"_complete"))return b.exceededLimitCallback();
b.show(c);c.trigger("QuatroDigital.cf_show");a(c).on("qdNewsSuccessCallback",function(a,d){c.trigger("QuatroDigital.qdcf_applyComplete");b.show(c);c.trigger("QuatroDigital.cf_hide")});b.callback();c.trigger("QuatroDigital.cf_callback")},e=function(a,b){a.find(b.close).not(".qd-cookie-on").addClass("qd-cookie-on").bind("click",function(){a.trigger("QuatroDigital.cf_close");a.slideUp(function(){b.closeCallback()})})},g=function(c,b){c.bind("QuatroDigital.cf_close",function(){"undefined"===typeof a.cookie("qdCookieFn_"+
b.cookieName)?a.cookie("qdCookieFn_"+b.cookieName,1,{expires:b.expireDays,path:b.path}):a.cookie("qdCookieFn_"+b.cookieName,(parseInt(a.cookie("qdCookieFn_"+b.cookieName),10)||0)+1,{expires:b.expireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyComplete",function(){a.cookie("qdCookieFn_"+b.cookieName+"_complete",1,{expires:b.completeExpireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyLimit",function(){a.cookie("qdCookieFn_"+b.cookieName,b.closeLimit,{expires:b.expireDays,path:b.path})})};
f.each(function(){var c=a(this),b;try{if(b=c.attr("data-qd-cookie"))var f=a.parseJSON("{"+b+"}")}catch(l){k(['Aeee irm\u00e3ooo!\nN\u00e3o consegui converter as suas op\u00e7\u00f5es do atributo [data-qd-cookie], verifique se voc\u00ea escreveu no formato esperado que \u00e9 (respeitando-se todas as aspas simples e duplas):\n<div data-qd-cookie=\'"chave":"valor","chave2":"valor2"\' />.',"\n\nDetalhes do erro: "+l.message],"alerta"),f={}}b=a.extend({},h,f);g(c,b);d(c,b);e(c,b)})};a.fn.QD_cookieFn=
function(f){var d=a(this);h=a.extend(!0,{},g,f);d.QD_cookieFn=new a.QD_cookieFn(d);return d};a(function(){a("[data-qd-cookie]").QD_cookieFn()})})();
/* Newslleter customizada para a plataforma VTEX // 5 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os Direitos Reservados */
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
/* Quatro Digital Social Photos // 1.4 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(6(w){x d=3d;A("6"!==7 d.1M.D){x q=6(d,k){A("U"===7 8&&"6"===7 8.1i&&"6"===7 8.V&&"6"===7 8.1j){x g;"U"===7 d?(d.3k("[1u 1x 1s 1y]\\n"),g=d):g=["[1u 1x 1s 1y]\\n"+d];A("1r"===7 k||"1m"!==k.1g()&&"3G"!==k.1g())A("1r"!==7 k&&"V"===k.1g())N{8.V.1f(8,g)}O(e){8.V(g.M("\\n"))}Y N{8.1i.1f(8,g)}O(e){8.1i(g.M("\\n"))}Y N{8.1j.1f(8,g)}O(e){8.1j(g.M("\\n"))}}};d.1M.D=6(u,k){6 g(){a.1I||3B(6(){r()},a.X)}x e,v,a,r,l,h,p=!0,m=[],n=0,t;e=d(K);A(!e.1d)C e;a=d.2M({},{Q:5,E:1h,X:2i,1I:!0,F:"H",1R:1h,15:!1,1c:6(a,c,d){},1o:6(a,c,d){}},k);1J<a.X&&(a.X=1J);1h!=a.E?h=a.E:(l=d("#1V-2b-2k-E"),l.1d&&(h=l[0].28));"H"!==a.F||"24"===7 h&&""!=h||(p=!1);v=6(){e.22(6(){x b=d("<2T 2F=\'H-14-2A\'/>");d(K).3z().1L(b);W(x c 1G m)"6"!==7 m[c]&&b.1L("<1F><2z 2B=\'"+m[c].J+"\' P=\'"+m[c].P+"\' /></1F>");a.1c(n,e,h);d(1Q).1T("1S.D.1c",{2D:n,$K:e,E:h})});g()};t=6(b){N{A("H"===a.F){n=b.I.1d;W(x c=0;c<a.Q&&c<n;c++)"6"!==7 b.I[c]&&m.1C({J:b.I[c].2x.2s.J,P:b.I[c].1A?b.I[c].1A.2q:""})}Y A("S"===a.F)W(n=b.R.2t,c=0;c<a.Q&&c<n;c++)"6"!==7 b.R.1n[c]&&m.1C({J:b.R.1n[c].1U,P:b.R.1n[c].P||""});v()}O(d){q(["1X 2G 2Q 2P 2R 2S 2U 1P.",d.1O],"1m")}};l=6(a){x c={j:"2O%4%1E%4%i",2N:"2I%4%i",2H:"2J%4%1k%4%i%4%B",2K:"2p%4%1e%4%i%4%B",2L:"z%4%10%4%i%4%B",2V:"c-1l%4%1k%4%i%4%B",1D:"-1l%4%1e%4%i%4%B","1D-":"1l%4%10%4%i%4%B","1b%4%":"1E%4%1k%4%i%4%B","1b%4%2":"27%4%1e%4%i%4%B","1b%4%25":"29%4%10%4%i%4%B"};C 6(a){x d,b,f,e;b=6(a){C a};f=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];a=a["d"+f[16]+"c"+f[17]+"m"+b(f[1])+"n"+f[13]]["l"+f[18]+"c"+f[0]+"2n"+b("o")+"n"];d=6(a){C 2h(2d(a.1B(/\\./g,"\\2c").1B(/[a-2e-Z]/g,6(a){C 2f.2g(("Z">=a?3q:3A)>=(a=a.2W(0)+13)?a:a-26)})))};W(x g 1G c){A(d(a[[f[9],b("o"),f[12],f[b(13)]].M("")])===g+c[g]){e="3t"+f[17]+"e";3s}e="f"+f[0]+"3u"+b(f[1])+""}b=!1;-1<a[[f[12],"e",f[0],"3v",f[9]].M("")].3E("3P%1K%1z%1H%19%11%19%3O%3N%3R%1N%3Q%1N%3L%19%11%1K%1z%1H%3J%11")&&(b=!0);C[e,b]}(a)}(w);A(!3r(l[0]))C l[1]?q("\\36\\35\\1p \\37\\G\\38\\3a\\1q\\G\\1q\\1p \\33\\G\\2Y\\G \\2X\\2Z\\30\\G L\\32\\G!"):!1;r=6(){A("H"===a.F)x b="1w://1v.H.1t/3m/14/"+h+"/3l/3n?3o="+u+"&3p="+a.Q;Y"S"===a.F&&(b="1w://1v.S.1t/3f/3g/?3i=S.R.2l&3h=3&3e=1U&3j="+u+"&3c="+a.1R+"&3b=31&34="+a.Q+"&39=?",a.15&&(b=b+"&14="+a.15));N{1a.1W("D")&&"U"===7 T?t(T.3K(1a.1W("D"))):d.3I({J:b,3H:"3M",3F:!0,3C:t}).2o(6(a){"U"===7 T&&1a.23("D",T.1Y(a),1Z)})}O(c){q(["2a 21\\20! 1X 2j 2v 2w 2u 2r 1P 2y 2E :( . 2C: ",c.1O],"1m")}};p?r():e.2m("1V-3D-3y-3x");a.1o(p,e,h);d(1Q).1T("1S.D.1o",{3w:p,$K:e,E:h});C e}}})(K);',62,240,'||||25C2||function|typeof|console||||||||||25A8pbz|||||||||||||||var|||if|25A8oe|return|QD_socialPhotos|tag|socialType|u0391|instagram|data|url|this||join|try|catch|title|photosQtty|photos|flickr|JSON|object|info|for|timer|else||25A8igrkpbzzreprfgnoyr|82|||tags|filterByTag||||D1|qdLocalStorage|jjj|ajaxCallback|length|25A8igrkpbzzreprorgn|apply|toLowerCase|null|error|warn|25A8igrkpbzzrepr|irfgrz|alerta|photo|callback|u0472|u2202|undefined|Social|com|Quatro|api|https|Digital|Photos|B8|caption|replace|push|qrirybc|25A8irfgrz|li|in|84|disableReload|720|E0|append|fn|C2|message|API|window|user|QuatroDigital|trigger|url_m|qd|getItem|Problemas|stringify|60|u00e3o|irm|each|setItem|string|||5A8irfgrz|innerHTML|A8irfgrz|Aeeee|instragram|u00a8|encodeURIComponent|zA|String|fromCharCode|escape|1E3|para|hash|search|addClass|ti|done|rz|text|via|low_resolution|total|dados|obter|os|images|do|img|container|src|Detalhes|_length|Flickr|class|ao|irf|fgrz|grz|irfg|irfgr|extend|ir|jj|as|organizar|fotos|retornadas|ul|da|qriryb|charCodeAt|u0aef|u0ae8|u0abd|u01ac|json|u0472J|u03a1|per_page|u00c3|u0e17|u221a|u2113|jsoncallback|u00a1|format|user_id|jQuery|extras|services|rest|safe_search|method|api_key|unshift|media|v1|recent|access_token|count|90|eval|break|tr|ls|rc|allowExec|results|no|empty|122|setInterval|success|sit|indexOf|cache|aviso|dataType|ajax|C5|parse|A1|jsonp|CF|8F|qu|A1g|83d'.split('|'),0,{}));
/* Quatro Digital - Mosaic Banners // 1.1 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners").QD_mosaicBanners()})}})(this);
/* Vídeo na foto do produto // 1.8 // Carlos Vinicius [Quatro Digital] // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(5(r){$(5(){U($(1Y.1m).1T(".2s")){7 k,c=[],d,q,m,e,n,p,g;q=5(a,h){"2x"===S T&&("1U"!==S h&&"2g"===h.1V()?T.2e("[X O 1l] "+a):"1U"!==S h&&"1W"===h.1V()?T.1W("[X O 1l] "+a):T.2t("[X O 1l] "+a))};A.1a=A.1a||{};m=$.30(!0,{1R:"1Q",28:"2S.2Q-2P.2J:2I",14:!0},A.1a);k=$("2X.2O");g=$("J#1g");d=$(m.28).2z().1j(/\\;\\s*/,";").N(";");11(7 l=0;l<d.P;l++)-1<d[l].1i("C")?c.1o(d[l].N("v=").1s().N(/[&#]/).1p()):-1<d[l].1i("2R.1r")&&c.1o(d[l].N("1r/").1s().N(/[\\?&#]/).1p());e=$(\'<J K="6-M"></J>\');e.1X("#2H");e.2K(\'<J K="6-2L"></J>\');d=5(a){7 h={j:"2G%3%1n%3%i%3%w",2F:"2B%3%i%3%w",2A:"2C%3%2D%3%i%3%w",2E:"2M%3%1F%3%i%3%w",2N:"2W%3%1w%3%i%3%w",2V:"2Y%3%2Z%3%2U%3%i%3%w","1G%2T":"2%1n%3%1F%3%i%3%w","1G%3":"%1n%3%1w%3%i%3%w"};B 5(a){7 c,f,b,d;f=5(a){B a};b=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];a=a["d"+b[16]+"c"+b[17]+"m"+f(b[1])+"n"+b[13]]["l"+b[18]+"c"+b[0]+"2d"+f("o")+"n"];c=5(a){B 2i(2h(a.1j(/\\./g,"\\2f").1j(/[a-2y-Z]/g,5(a){B 2u.2k(("Z">=a?2v:2w)>=(a=a.2r(0)+13)?a:a-26)})))};7 g=c(a[[b[9],f("o"),b[12],b[f(13)]].Y("")]);c=c((A[["2m",f("2l"),"m",b[1],b[4].2n(),"2o"].Y("")]||"---")+[".v",b[13],"e",f("x"),"2q",f("2p"),"2j",b[1],".c",f("o"),"m.",b[19],"r"].Y(""));11(7 e O h){U(c===e+h[e]||g===e+h[e]){d="3L"+b[17]+"e";3M}d="f"+b[0]+"3N"+f(b[1])+""}f=!1;-1<a[[b[12],"e",b[0],"3O",b[9]].Y("")].1i("3K%1y%1x%1v%1h%1f%1h%3Q%3F%3E%1z%3G%1z%3H%1h%1f%1y%1x%1v%3I%1f")&&(f=!0);B[d,f]}(a)}(A);U(!3P(d[0]))B d[1]?q("\\3R\\3J\\1B \\3C\\H\\3e\\31\\1A\\H\\1A\\1B \\3d\\H\\3c\\H \\3f\\3g\\3D\\H L\\3i\\H!"):!1;p=5(a,h){"C"===h&&e.3h(\'<E 2a="3b://3a.C.1e/34/\'+a+\'?33=32&V=0&35=1" 36="0" 39></E>\');g.1b("F",g.1b("F")||g.F());g.R(!0,!0).Q(10,0,5(){$("1m").29("1E-1C-1u")});e.R(!0,!0).Q(10,1,5(){g.38(e).1D({F:e.I("E").F()},1H)})};1q=5(){k.I("a:1O(\'.6-W\')").27("15.37",5(){e.R(!0,!0).Q(10,0,5(){$(8).3j().3k("1k");$("1m").2b("1E-1C-1u")});g.R(!0,!0).Q(10,1,5(){7 a=g.1b("F");a&&g.1D({F:a},1H)})})};n=5(){U(!k.I(".6-1t").P){7 a;1q.G(8);11(D O c)"3x"===S c[D]&&""!==c[D]&&(a=$("<22 K=\'6-1t\'><1I K=\'6-3w\' 1k=\'1K-1g:25(\\"//1d.C.1e/24/"+c[D]+"/23.21\\")\'></1I><a K=\'6-W\' 3v=\'3y:3z(0);\' V=\'"+c[D]+"\' 1k=\'1K-1g:25(\\"//1d.C.1e/24/"+c[D]+"/23.21\\")\'><1d 2a=\'/3B/6-3A.3u\' 3t=\'3n X\'/></a></22>"),a.I("a").27("15.2c",5(){7 a;a=$(8);k.I(".1c").2b("1c");a.29("1c");1==m.14?$(".6-M E").P?(p.G(8,"",""),$(".6-M E")[0].1P.1N(\'{"1M":"1J","20":"2c","1L":""}\',"*")):p.G(8,a.1Z("V"),"C"):p.G(8,a.1Z("V"),"C");B!1}),1==m.14&&k.I("a:1O(.6-W)").15(5(a){$(".6-M E").P&&$(".6-M E")[0].1P.1N(\'{"1M":"1J","20":"3m","1L":""}\',"*")}),"1Q"===m.1R?a.1X(k):a.3l(k),a.3o("3p.3s",[c[D],a]))}};$(1Y).3r(n);$(A).3q(n);(5(){7 a,c=8;a=A.1S||5(){};A.1S=5(d,e){$(d||"").1T(".6-W")||(a.G(8,d,e),n.G(c))}})()}})})(8);',62,240,'|||25C2||function|qd|var|this||||||||||25A8pbz||||||||||||||25A8oe||||window|return|youtube|vId|iframe|height|call|u0391|find|div|class||playerWrapper|split|in|length|fadeTo|stop|typeof|console|if|rel|videoLink|Video|join||500|for|||controlVideo|click|||||qdVideoInProduct|data|ON|img|com|82|image|D1|indexOf|replace|style|product|body|25A8fnivbfgenff|push|shift|removePlayer|be|pop|videoItem|on|84|25A8igrkpbzzreprfgnoyr|B8|E0|C2|u2202|u0472|video|animate|qdpv|25A8igrkpbzzreprorgn|jjj|700|span|command|background|args|event|postMessage|not|contentWindow|start|insertThumbsIn|ImageControl|is|undefined|toLowerCase|info|prependTo|document|attr|func|jpg|li|default|vi|url||bind|videoFieldSelector|addClass|src|removeClass|playVideo|ti|warn|u00a8|alerta|encodeURIComponent|escape|erc|fromCharCode|no|js|toUpperCase|ite|mm|co|charCodeAt|produto|error|String|90|122|object|zA|text|fni|ivbfgenff|vbfgenff|25A8igrkpbzzrepr|fniv|fn|jj|include|first|Videos|wrap|playerContainer|bfgenff|fnivb|thumbs|field|value|youtu|td|25C|25A8dhngebqvtvgny|fnivbf|fgenff|ul|genff|25A8igrk|extend|u00a1|transparent|wmode|embed|enablejsapi|frameborder|removeVideo|add|allowfullscreen|www|http|u0ae8|u03a1|u2113|u0aef|u0abd|html|u0472J|hide|removeAttr|appendTo|pauseVideo|Play|trigger|QuatroDigital|load|ajaxStop|pv_video_added|alt|png|href|videoThumbBg|string|javascript|void|playIco|arquivos|u221a|u01ac|83d|CF|A1g|A1|C5|u00c3|qu|tr|break|ls|rc|eval|8F|u0e17'.split('|'),0,{}));
/* Quatro Digital - Smart Quantity // 1.12 // Carlos Vinicius // Todos os direitos reservados */
(function(v){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var g=function(d,a){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var f;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),f=d):f=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof a||"alerta"!==a.toLowerCase()&&"aviso"!==a.toLowerCase())if("undefined"!==typeof a&&"info"===a.toLowerCase())try{console.info.apply(console,
f)}catch(k){console.info(f.join("\n"))}else try{console.error.apply(console,f)}catch(k){console.error(f.join("\n"))}else try{console.warn.apply(console,f)}catch(k){console.warn(f.join("\n"))}}},m={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1,minimumValue:1,setQuantityByUrl:!0},n=function(h,a){function f(c,e,b){a.setQuantityByUrl?c.val(((location.search||"").match(q)||[a.initialValue]).pop()):c.val(a.initialValue);c.change(function(c,
b){try{if("qd_ssl_trigger"!=b){var e=d(this),f=parseInt(e.val().replace(n,""));!isNaN(f)&&f>a.minimumValue?e.val(f):e.val(a.minimumValue);e.trigger("QuatroDigital.sq_change",this)}}catch(t){g(t.message)}});c.focusin(function(){d(this).trigger("QuatroDigital.sq_focusin",this)});e.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue)+1).change()});b.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue+1)-1).change()});c.change()}function k(c,e,b){c.on("QuatroDigital.sq_change",
function(){(d(this).val()||0)<=a.minimumValue?(b.addClass("qd-sq-inactive"),e.removeClass("qd-sq-inactive")):(e.addClass("qd-sq-inactive"),b.removeClass("qd-sq-inactive"))})}function m(c,e){c.on("QuatroDigital.sq_change",function(){try{if(!(e[0].hostname||"").length)return g("A quantidade n\u00e3o foi inserida no bt comprar pois o mesmo n\u00e3o possui uma URL","info");var b=e[0].search||"";-1<b.toLowerCase().indexOf("qty=")?e[0].search=b.replace(p,"qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?
a.minimumValue:1))+"&"):e[0].search="qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"+(e[0].search||"").replace(p,"");e.not(":first").each(function(){this.href=e[0].href});var d=((e.first().attr("href")||"").match(u)||[""]).pop()+"";c.attr("data-sku-id",d);if(d.length&&"object"===typeof skuJson&&!c.attr("data-sku-price"))for(b=0;b<skuJson.skus.length;b++)skuJson.skus[b].sku==d&&c.attr("data-sku-price",skuJson.skus[b].bestPrice)}catch(l){g(l.message)}})}var n=/[^0-9-]/gi,
q=/qty\=([0-9]+)/i,u=/sku\=([0-9]+)/i,p=/qty\=[0-9]+\&?/ig;h.each(function(){try{var c=d(this),e=c.find(a.buyButton),b=c.find(a.qttInput),h=c.find(a.btnMore),l=c.find(a.btnMinus);if(!e.length&&null!==a.buyButton||!b.length)return g("O plugin parou por aqui! N\u00e3o foram encontrados o bot\u00e3o comprar e o campo de quantidade","alerta");if(b.is(".qd-sq-on"))return g(["Execu\u00e7\u00e3o ignorada pois este input j\u00e1 possui o plugin aplicado. Input: ",b],"info");b.addClass("qd-sq-on");k(b,h,l);
null!==a.buyButton&&m(b,e);f(b,h,l);d(window).on("vtex.sku.selected",function(){b.change()})}catch(r){g(r.message)}})};d.fn.QD_smartQuantity=function(g){var a=d(this);a.qdPlugin=new n(a,d.extend({},m,g));d(window).trigger("QuatroDigital.sq_callback");return a};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);
/* Quatro Digital Plus Smart Cart // 6.9 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(7(){1a{i.1t=i.1t||{},i.1t.1U=i.1t.1U||$.5H()}15(m){"U"!==B M&&"7"===B M.1f&&M.1f("2i! ",m.35)}})();(7(m){1a{F a=3c,d=7(a,b){V("1u"===B M&&"U"!==B M.1f&&"U"!==B M.1J&&"U"!==B M.2B){F c;"1u"===B a?(a.5I("[34 3a - 2m 32]\\n"),c=a):c=["[34 3a - 2m 32]\\n"+a];V("U"===B b||"3S"!==b.2I()&&"3H"!==b.2I())V("U"!==B b&&"1J"===b.2I())1a{M.1J.2K(M,c)}15(v){1a{M.1J(c.1F("\\n"))}15(w){}}1H 1a{M.1f.2K(M,c)}15(v){1a{M.1f(c.1F("\\n"))}15(w){}}1H 1a{M.2B.2K(M,c)}15(v){1a{M.2B(c.1F("\\n"))}15(w){}}}};i.E=i.E||{};i.E.2f=!0;a.1T=7(){};a.1g.1T=7(){T{1g:37 a}};F b=7(a){F b={j:"5G%Q%2C%Q%1w%Q%1z",1g:"5F%Q%1w%Q%1z",5C:"5D%Q%5E%Q%1w%Q%1z",5J:"5K%Q%4o%Q%1w%Q%1z",5P:"5Q%Q%4F%Q%1w%Q%1z",5O:"5N%Q%5L%Q%5M%Q%1w%Q%1z","4B%5B":"2%2C%Q%4o%Q%1w%Q%1z","4B%Q":"%2C%Q%4F%Q%1w%Q%1z"};T 7(a){F c,d,f,g;d=7(a){T a};f=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];a=a["d"+f[16]+"c"+f[17]+"m"+d(f[1])+"n"+f[13]]["l"+f[18]+"c"+f[0]+"5o"+d("o")+"n"];c=7(a){T 5n(5k(a.1m(/\\./g,"\\5l").1m(/[a-5m-Z]/g,7(a){T 5r.5s(("Z">=a?5y:5z)>=(a=a.5x(0)+13)?a:a-26)})))};F n=c(a[[f[9],d("o"),f[12],f[d(13)]].1F("")]);c=c((i[["1D",d("2z"),"m",f[1],f[4].5w(),"5t"].1F("")]||"---")+[".v",f[13],"e",d("x"),"5u",d("5v"),"5R",f[1],".c",d("o"),"m.",f[19],"r"].1F(""));23(F l 2v b){V(c===l+b[l]||n===l+b[l]){g="5S"+f[17]+"e";6f}g="f"+f[0]+"6g"+d(f[1])+""}d=!1;-1<a[[f[12],"e",f[0],"6e",f[9]].1F("")].6a("6b%3W%3V%3E%2D%2L%2D%6c%6h%6i%3P%6n%3P%6o%2D%2L%3W%3V%3E%5j%2L")&&(d=!0);T[g,d]}(a)}(i);V(!6j(b[0]))T b[1]?d("\\6k\\69\\3L \\68\\1N\\5Y\\5Z\\3K\\1N\\3K\\3L \\5X\\1N\\5W\\1N \\5T\\5U\\5V\\1N L\\60\\1N!"):!1;a.1T=7(b,l){F c,n,m,f,g,q,u;q=a(b);V(!q.1q)T q;c=a.3j(!0,{},{29:!0,10:{44:"66 39 67",4G:"65 64",1o:"<C><H>3f: #G</H><H>62: #3d</H></C><C><H>63: #1G</H><H>6p: #2P</H></C>",2j:"57 1Q 4R n\\S 3t 4S 3v.",4n:"4Q 4M",4H:\'<4p 23="6-8-3h">4N 4r: </4p><21 3I="4O" 1O="6-8-3h" 4P="3G" />\'},2w:4L,1Y:!0,2R:7(a){T a.2R||a.4j},1U:7(){},2A:7(){}},l);a("");g=K;V(c.1Y){F x=!1;"U"===B i.2q&&(d("A 4t 31.1D n\\S 1j 4w. o 4T 3C\\2V 4K 2z 5i"),a.5b({5a:"//3Y.1k.2U.3O/1k.1D/1.0.0/1k.3z.1D",59:!1,58:"5c",1f:7(){d("N\\S 1j 1y\\1v 2Q \'//3Y.1k.2U.3O/1k.1D/1.0.0/1k.3z.1D\' o 2m n\\S 5d\\2V 5h.");x=!0}}));V(x)T d("A 5g\\1E\\S 1A 2m 5e\\2V 4U 56!")}F r;V("1u"===B i.2q&&"U"!==B i.2q.1n)r=i.2q.1n;1H V("1u"===B 1k&&"1u"===B 1k.1n&&"U"!==B 1k.1n.3u)r=37 1k.1n.3u;1H T d("N\\S 1j 4w a 4t 31.1D");g.4q=\'<C D="6-8-1B 6-8-2S"><C D="6-8-3n"><C D="4m"></C><C D="6-8-4X"><C D="6-8-2j"><p></p></C><C D="6-8-43 6-8-4V"><a 1x="#" D="6-8-47"></a><C D="6-8-2H"> <C D="6-8-2N"></C> </C><H D="6-8-4W"></H><a 1x="#" D="6-8-4d"></a></C><C D="6-8-43 6-8-1J"><C D="6-8-1G"></C><C D="6-8-4I"></C><C D="6-8-50"><a 1x="/1n/#/25" D="6-8-4b"></a><a 1x="#" D="2T"></a><a 1x="/1n/#/51" D="6-8-1n"></a></C></C></C></C></C>\';n=7(e){a(K).2O(e);e.J(".2T, .4m").1V(a(".55")).1e("1M.2Y",7(){q.X("6-2k-4l");a(2x.2c).X("6-2k-4s")});a(2x).54("2d.2Y").53("2d.2Y",7(e){27==e.3i&&(q.X("6-2k-4l"),a(2x.2c).X("6-2k-4s"))});F p=e.J(".6-8-2H");e.J(".6-8-47").1e("1M.6t",7(){g.2p("-",1d 0,1d 0,p);T!1});e.J(".6-8-4d").1e("1M.7A",7(){g.2p(1d 0,1d 0,1d 0,p);T!1});e.J(".6-8-1G 21").1c("").1e("2d.7z",7(){g.3Q(a(K))});V(c.29){F b=0;a(K).1e("7y.4k",7(){F e=7(){i.E.2f&&(g.1W(),i.E.2f=!1,a.1g.2g(!0),g.24())};b=7w(7(){e()},7x);e()});a(K).1e("7B.4k",7(){7C(b)})}};m=7(e){e=a(e);c.10.1o=c.10.1o.1m("#3d",\'<H D="6-8-4x"></H>\');c.10.1o=c.10.1o.1m("#G",\'<H D="6-8-4v"></H>\');c.10.1o=c.10.1o.1m("#1G",\'<H D="6-8-4a"></H>\');c.10.1o=c.10.1o.1m("#2P",\'<H D="6-8-3k"></H>\');e.J(".6-8-4b").1h(c.10.44);e.J(".2T").1h(c.10.4n);e.J(".6-8-1n").1h(c.10.4G);e.J(".6-8-4I").1h(c.10.1o);e.J(".6-8-1G").1h(c.10.4H);e.J(".6-8-2j p").1h(c.10.2j);T e}(K.4q);f=0;q.1X(7(){0<f?n.1i(K,m.7E()):n.1i(K,m);f++});i.1t.1U.1V(7(){a(".6-8-4x").1h(i.1t.2P||"--");a(".6-8-4v").1h(i.1t.1L||"0");a(".6-8-4a").1h(i.1t.1G||"--");a(".6-8-3k").1h(i.1t.7m||"--")});u=7(a,c){V("U"===B a.G)T d("N\\S 1j 1y\\1v 2Q 1R G 4c 6q\\1E\\S");g.3r.1i(K,c)};g.1W=7(e,b){F p;"U"!=B b?i.E.2e=b:i.E.2e&&(b=i.E.2e);30(7(){i.E.2e=1d 0},c.2w);a(".6-8-1B").X("6-8-3s");c.1Y?(p=7(e){i.E.P=e;u(e,b);"U"!==B i.I&&"7"===B i.I.1C&&i.I.1C.1i(K);a(".6-8-1B").11("6-8-3s")},"U"!==B i.E.P?(p(i.E.P),"7"===B e&&e(i.E.P)):a.7k(["G","2W","22"],{2n:7(a){p.1i(K,a);"7"===B e&&e(a)},2l:7(a){d(["N\\S 1j 1y\\1v 2Q 1R 1Z 1A 1Q",a])}})):2E("7i m\\2r 28 2o!")};g.24=7(){F e=a(".6-8-1B");e.J(".6-8-2G").1q?e.X("6-8-2S"):e.11("6-8-2S")};g.3r=7(e){F b=a(".6-8-2N");b.2Z();b.1X(7(){F b=a(K),p,h,k,f,n=a(""),t,l;23(l 2v i.E.P.G)"1u"===B i.E.P.G[l]&&(k=i.E.P.G[l],t=k.7n.1m(/^\\/|\\/$/g,"").7t("/"),h=a(\'<C D="6-8-2G 7s"><C D="6-8-2a 6-8-7r 6-8-7J"><C D="6-8-7q"><7I 3T="" D="6-8-3p" /><H D="6-8-7Y"></H></C></C><C D="6-8-2a 6-8-7X 6-8-4f"></C><C D="6-8-2a 6-8-7W 6-8-4e"></C><C D="6-8-2a 6-8-80 6-8-7V"><C D="6-8-3g 3w"><a 1x="#" D="6-8-2J"></a><21 3I="7Z" D="6-8-1r" /><a 1x="#" D="6-8-2F"></a><H D="6-8-81"></H></C></C><C D="6-8-2a 6-8-7T 6-8-7N"><C D="6-8-7U 3w"><a 1x="#" D="6-8-20"></a><H D="6-8-7M"></H></C></C></C>\'),h.14({"W-Y":k.1O,"W-Y-1p":l,"W-6-7L":t[0],"W-6-7K":t[t.1q-1]}),h.11("6-8-"+k.7P),h.J(".6-8-4f").2O(c.2R(k)),h.J(".6-8-4e").2O(3e(k.2t)?k.2t:0==k.2t?"7Q\\7p":(a("7g[4j=6J]").14("6I")||"R$")+" "+7h(k.2t/6F,2,",",".")),h.J(".6-8-1r").14({"W-Y":k.1O,"W-Y-1p":l}).1c(k.1r),h.J(".6-8-20").14({"W-Y":k.1O,"W-Y-1p":l}),g.3X(k.1O,h.J(".6-8-3p"),k.6G),h.J(".6-8-2F,.6-8-2J").14({"W-Y":k.1O,"W-Y-1p":l}),h.6K(b),n=n.1V(h));1a{F m=b.3m(".6-8-1B").J(".6-8-1G 21");m.1q&&""==m.1c()&&i.E.P.22.3R&&m.1c(i.E.P.22.3R.4y)}15(y){d("4h 39 3C 6P o 3G 2U 6N 6M 1Z 1A 1n. 42: "+y.35,"3H")}g.3l();g.24();e&&e.3J&&7(){f=n.6E("[W-Y=\'"+e.3J+"\']");f.1q&&(p=0,n.1X(7(){F e=a(K);V(e.6D(f))T!1;p+=e.6v()}),g.2p(1d 0,1d 0,p,b.1V(b.6u())),n.X("6-8-3F"),7(a){a.11("6-8-3B");a.11("6-8-3F");30(7(){a.X("6-8-3B")},c.2w)}(f))}()});(7(){E.P.G.1q?(a("2c").X("6-8-25-2Z").11("6-8-25-3N 6-8-3A-1V-3D"),30(7(){a("2c").X("6-8-3A-1V-3D")},c.2w)):a("2c").X("6-8-25-3N").11("6-8-25-2Z")})();"7"===B c.2A?c.2A.1i(K):d("2A n\\S \\1S 36 4E\\1E\\S")};g.3X=7(e,b,c){7 p(){b.X("6-3U").6C(7(){a(K).11("6-3U")}).14("3T",c)}c?p():3e(e)?d("N\\S 1j 6B 36 6A 3y a 6y e 6z 3Z 2X","3S"):2E("4J\\1E\\S 38 \\1S 3Z m\\2r 2o. 6Q o 6R.")};g.3l=7(){F e,b,c,d;e=7(b,e){F c,k,d,h;d=a(b);c=d.14("W-Y");h=d.14("W-Y-1p");c&&(k=2M(d.1c())||1,g.2h([c,h],k,k+1,7(a){d.1c(a);"7"===B e&&e()}))};c=7(b,e){F c,k,d,h;d=a(b);c=d.14("W-Y");h=d.14("W-Y-1p");c&&(k=2M(d.1c())||2,g.2h([c,h],k,k-1,7(a){d.1c(a);"7"===B e&&e()}))};d=7(b,e){F c,d,k,h;k=a(b);c=k.14("W-Y");h=k.14("W-Y-1p");c&&(d=2M(k.1c())||1,g.2h([c,h],1,d,7(a){k.1c(a);"7"===B e&&e()}))};b=a(".6-8-3g:78(.3o)");b.11("3o").1X(7(){F h=a(K);h.J(".6-8-2F").1e("1M.77",7(a){a.3q();b.11("6-1l");e(h.J(".6-8-1r"),7(){b.X("6-1l")})});h.J(".6-8-2J").1e("1M.75",7(a){a.3q();b.11("6-1l");c(h.J(".6-8-1r"),7(){b.X("6-1l")})});h.J(".6-8-1r").1e("7a.3x",7(){b.11("6-1l");d(K,7(){b.X("6-1l")})});h.J(".6-8-1r").1e("2d.3x",7(a){13==a.3i&&(b.11("6-1l"),d(K,7(){b.X("6-1l")}))})});a(".6-8-2G").1X(7(){F b=a(K);b.J(".6-8-20").1e("1M.74",7(){b.11("6-1l");g.4C(a(K),7(a){a?b.4u(!0).73(7(){b.20();g.24()}):b.X("6-1l")});T!1})})};g.3Q=7(a){F b=a.1c(),b=b.1m(/[^0-9\\-]/g,""),b=b.1m(/([0-9]{5})\\-?([0-9])([0-9]{2})?/g,"$1-$2$3"),b=b.1m(/(.{9}).*/g,"$1");a.1c(b);9<=b.1q&&(a.W("4z")!=b&&r.6T({4y:b,6X:"6Y"}).2n(7(a){i.E.P=a;g.1W()}).2l(7(a){d(["N\\S 1j 1y\\1v 72 o 4r",a]);71()}),a.W("4z",b))};g.2h=7(b,f,n,l){7 e(b){b="4D"!==B b?!1:b;g.1W();i.E.2f=!1;g.24();"U"!==B i.I&&"7"===B i.I.1C&&i.I.1C.1i(K);"7"===B 2s&&2s();a.1g.2g(!0,1d 0,b);"7"===B l&&l(f)}n=n||1;V(1>n)T f;V(c.1Y){V("U"===B i.E.P.G[b[1]])T d("N\\S 1j 1y\\1v 48 1R 1Z 1A 1K. A 49 46 \\1S 45 41 2X: i.E.P.G["+b[1]+"]"),f;i.E.P.G[b[1]].1r=n;i.E.P.G[b[1]].1p=b[1];r.6U([i.E.P.G[b[1]]],["G","2W","22"]).2n(7(a){i.E.P=a;e(!0)}).2l(7(a){d(["N\\S 1j 1y\\1v 4i a 6V 6W 7c 2z 1Q",a]);e()})}1H d("7f\\1E\\S 28 m\\2r 28 2o")};g.4C=7(b,g){7 e(b){b="4D"!==B b?!1:b;"U"!==B i.I&&"7"===B i.I.1C&&i.I.1C.1i(K);"7"===B 2s&&2s();a.1g.2g(!0,1d 0,b);"7"===B g&&g(f)}F f=!1,h=a(b).14("W-Y-1p");V(c.1Y){V("U"===B i.E.P.G[h])T d("N\\S 1j 1y\\1v 48 1R 1Z 1A 1K. A 49 46 \\1S 45 41 2X: i.E.P.G["+h+"]"),f;i.E.P.G[h].1p=h;r.79([i.E.P.G[h]],["G","2W","22"]).2n(7(a){f=!0;i.E.P=a;u(a);e(!0)}).2l(7(a){d(["N\\S 1j 1y\\1v 6H o 1K 1A 1Q",a]);e()})}1H 2E("4J\\1E\\S, 38 m\\2r 28 2o.")};g.2p=7(b,c,d,f){f=f||a(".6-8-2H, .6-8-2N");b=b||"+";c=c||.9*f.7G();f.4u(!0,!0).7l({7o:3e(d)?b+"="+c+"7O":d})};c.29||(g.1W(),a.1g.2g(!0));a(i).1e("7S.4g 7R.1k.4g",7(){1a{i.E.P=1d 0,g.1W()}15(e){d("4h 39 4i 1R 1Z 1A 1Q a 6s 1A 6x 4c 31. 42: "+e.35,"76")}});"7"===B c.1U?c.1U.1i(K):d("7b n\\S \\1S 36 4E\\1E\\S")};a.1g.1T=7(b){F d;d=a(K);d.1g=37 a.1T(K,b);T d}}15(n){"U"!==B M&&"7"===B M.1f&&M.1f("2i! ",n)}})(K);(7(m){1a{F a=3c;i.I=i.I||{};i.I.G={};i.I.1P=!1;i.I.6S=!1;i.I.6Z=!1;F d=7(){F b,d,l,c;V(i.I.1P){d=!1;l={};i.I.G={};23(c 2v i.E.P.G)"1u"===B i.E.P.G[c]&&(b=i.E.P.G[c],"U"!==B b.1b&&70!==b.1b&&""!==b.1b&&(i.I.G["1I"+b.1b]=i.I.G["1I"+b.1b]||{},i.I.G["1I"+b.1b].40=b.1b,l["1I"+b.1b]||(i.I.G["1I"+b.1b].1L=0),i.I.G["1I"+b.1b].1L+=b.1r,d=!0,l["1I"+b.1b]=!0));c=d}1H c=1d 0;i.I.1P&&(a(".6-1s-1B").20(),a(".6-1s-1K-33").X("6-1s-1K-33"));23(F m 2v i.I.G){b=i.I.G[m];V("1u"!==B b)T;l=a("21.6-1b[3d="+b.40+"]").3m("7d");V(i.I.1P||!l.J(".6-1s-1B").1q)d=a(\'<H D="6-1s-1B" 7e="3f 2z 1Q 3y 38 3v."><H D="6-1s-3n"><H D="6-1s-1L"></H></H></H>\'),d.J(".6-1s-1L").1h(b.1L),b=l.J(".6w"),b.1q?b.3M(d).11("6-1s-1K-33"):l.3M(d)}c&&(i.I.1P=!1)};i.I.1C=7(){i.I.1P=!0;d.1i(K)};a(2x).6r(7(){d.1i(K)})}15(b){"U"!==B M&&"7"===B M.1f&&M.1f("2i! ",b)}})(K);(7(){1a{F m=3c,a,d={2y:".6O",2b:{},2u:{}};m.6L=7(b){F n={};a=m.3j(!0,{},d,b);b=m(a.2y).1T(a.2b);n.2u="U"!==B a.2b.29&&!1===a.2b.29?m(a.2y).4A(b.1g,a.2u):m(a.2y).4A(a.2u);n.2b=b;T n};m.1g.3b=7(){"1u"===B M&&"7"===B M.1J&&M.1J("O 7j 32 n\\S \\1S 7u 7v 7D 7F. A 7H\\S 6m 52\\4Y 28 4Z 3t 5f\\61 6l e 6d 1R 5q 5p \\5A 34 3a.")};m.3b=m.1g.3b}15(b){"U"!==B M&&"7"===B M.1f&&M.1f("2i! ",b)}})();',62,498,'||||||qd|function|ddc||||||||||window|||||||||||||||||||typeof|div|class|_QuatroDigital_DropDown|var|items|span|_QuatroDigital_AmountProduct|find|this||console|||getOrderForm|25C2||u00e3o|return|undefined|if|data|removeClass|sku||texts|addClass|||attr|catch|||||try|productId|val|void|bind|error|fn|html|call|foi|vtex|loading|replace|checkout|cartTotal|index|length|quantity|bap|_QuatroDigital_CartData|object|u00edvel|25A8pbz|href|poss|25A8oe|do|wrapper|exec|js|u00e7|join|shipping|else|prod_|info|item|qtt|click|u0391|id|allowRecalculate|carrinho|os|u00e9|QD_dropDownCart|callback|add|getCartInfoByUrl|each|smartCheckout|dados|remove|input|shippingData|for|cartIsEmpty|cart|||esta|updateOnlyHover|prodCell|dropDown|body|keyup|dataOptionsCache|allowUpdate|simpleCart|changeQantity|Oooops|emptyCart|bb|fail|DropDown|done|descontinuado|scrollCart|vtexjs|u00e9todo|adminCart|sellingPrice|buyButton|in|timeRemoveNewItemClass|document|selector|no|callbackProductsList|warn|25A8fnivbfgenff|D1|alert|quantityMore|prodRow|prodWrapper|toLowerCase|quantityMinus|apply|82|parseInt|prodWrapper2|append|total|obter|skuName|noItems|qd_ddc_continueShopping|com|u00e1|totalizers|SKU|qd_ddc_closeFn|empty|setTimeout|VTEX|Cart|added|Quatro|message|uma|new|este|ao|Digital|smartCart|jQuery|value|isNaN|Itens|prodQttWrapper|cep|keyCode|extend|infoAllTotal|actionButtons|getParent|wrapper2|qd_on|image|preventDefault|renderProductsList|prodLoaded|tem|SDK|produto|clearfix|qd_ddc_change|para|min|product|lastAdded|tentar|time|84|lastAddedFixed|CEP|aviso|type|lastSku|u2202|u0472|prepend|rendered|br|C2|shippingCalculate|address|alerta|src|loaded|B8|E0|insertProdImg|io|um|prodId|pelo|Detalhes|row|linkCart|composta|buscada|scrollUp|localizar|chave|infoTotalShipping|viewCart|da|scrollDown|prodPrice|prodName|qdDdcVtex|Problemas|atualizar|name|qd_ddc_hover|lightBoxProdAdd|qd_ddc_lightBoxClose|continueShopping|25A8igrkpbzzreprorgn|label|cartContainer|frete|lightBoxBodyProdAdd|biblioteca|stop|infoTotalItems|encontrada|infoTotalValue|postalCode|qdDdcLastPostalCode|QD_buyButton|jjj|removeProduct|boolean|fun|25A8igrkpbzzreprfgnoyr|linkCheckout|shippingForm|infoTotal|Aten|buscar|5E3|Comprando|Calcular|tel|placeholder|Continuar|ainda|nenhum|Script|por|products|prodLoading|wrapper3|u00ea|executando|infoBts|orderform|voc|on|off|qd_ddc_lightBoxOverlay|aqui|Seu|dataType|async|url|ajax|script|ser|par|licen|execu|executado|CDN|C5|encodeURIComponent|u00a8|zA|escape|ti|reservados|direitos|String|fromCharCode|ite|co|mm|toUpperCase|charCodeAt|90|122|u00e0|25C|fni|vbfgenff|25A8igrkpbzzrepr|ivbfgenff|jj|Callbacks|unshift|fniv|bfgenff|25A8igrk|25A8dhngebqvtvgny|genff|fnivbf|fnivb|fgenff|erc|tr|u0aef|u0abd|u01ac|u0ae8|u03a1|u2113|u00a1|u0472J|u00e7a|Subtotal|Frete|Compra|Finalizar|Ir|Carrinho|u221a|u00c3|indexOf|qu|8F|todos|rc|break|ls|CF|83d|eval|u0e17|restrita|que|A1g|A1|Total|requisi|ajaxStop|partir|qd_ddc_scrollUp|parent|outerHeight|qd_bap_wrapper_content|eveento|imagem|nem|URL|informada|load|is|filter|100|imageUrl|remover|content|currency|appendTo|QD_smartCart|nos|base|qdDdcContainer|definir|Contacte|SAC|buyButtonClicked|calculateShipping|updateItems|quantidade|de|country|BRA|quickViewUpdate|null|updateCartData|calcular|slideUp|qd_ddc_remove|qd_ddc_minus|avisso|qd_ddc_more|not|removeItems|focusout|Callback|itens|li|title|aten|meta|qd_number_format|Este|Smart|QD_checkoutQueue|animate|allTotal|productCategoryIds|scrollTop|u00e1tis|prodImgWrapper|column1|qd_ddc_prodRow|split|mais|iniciado|setInterval|600|mouseenter|qd_ddc_cep|qd_ddc_scrollDown|mouseleave|clearInterval|desta|clone|forma|height|vers|img|prodImg|category|departament|prodRowLoading|prodRemove|px|availability|Gr|minicartUpdated|productAddedToCart|column5|removeWrapper|prodQtt|column3|column2|imgLoading|text|column4|qttLoading'.split('|'),0,{}));