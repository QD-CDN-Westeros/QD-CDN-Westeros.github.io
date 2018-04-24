/**
* Funções base
*/
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});
/* Quatro Digital - Product Thumbs // 1.2 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs();a.trigger("QuatroDigital.pt_callback",[a])}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return a.length?$.extend({},a,new b(a)):a},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();

try {
	var Common = {
		run: function() {},
		init: function() {
			Common.qdOverlay();
			Common.vtexBindQuickViewDestroy();
			Common.accessoriesFix();
			Common.applyAmazingMenu();
			Common.applyAmazingMenuMobile();
			Common.applyMosaicBanners();
			Common.applySmartCart();
			Common.applyCarouselShelf();
			Common.openSearchModal();
			Common.saveAmountFix();
			Common.setDataScrollToggle();
			Common.showFooterContent();
		},
		ajaxStop: function() {
			Common.appendSkuPopUpCloseBtn();
			Common.saveAmountFix();
		},
		windowOnload: function() {},
		vtexBindQuickViewDestroy: function() {
			window.bindQuickView = function() {};
		},
		qdOverlayClass: 'qd-am-on qd-cart-show qd-sn-on',
		qdOverlay: function() {
			$('.components-qd-v1-overlay').click(function() {
				$(document.body).removeClass(Common.qdOverlayClass);
			});
		},
		accessoriesFix: function() {
			if (!$(document.body).is('.produto'))
				return;

			$('fieldset >.buy-product-checkbox').parent().each(function() {
				var $t  = $(this);
				$t.add($t.prev('ul')).wrapAll('<div class="accessories-qd-v1-item col-xs-12 col-sm-6 col-md-3"/>');
			});
		},
		appendSkuPopUpCloseBtn: function() {
			$('<span class="modal-qd-v1-box-popup-close">Fechar</span>').insertBefore('.boxPopUp2 .selectSkuTitle');

			$('.modal-qd-v1-box-popup-close').click(function() {
				$(window).trigger('vtex.modal.hide');
				return false;
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
		},
		applyAmazingMenuMobile: function() {
			var wrapper = $('.header-qd-v1-amazing-menu-mobile');

			wrapper.QD_amazingMenu({
				callback: function() {
					$('<span class="qd-am-dropdown-trigger"><i class="fa fa-caret-down"></i></span>').appendTo(wrapper.find('.qd-am-has-ul')).click(function() {
						var $t = $(this);
						$t.parent().toggleClass('qd-am-is-active');

						$t.siblings('ul').stop(true, true).slideToggle();
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
		},
		applyCarouselShelf: function() {
			var wrapper = $('.carousel-qd-v1-shelf .prateleira');

			if (!wrapper.length)
				return false;

			wrapper.each(function() {
				var $t = $(this);

				$t.find('h2').prependTo($t.parent());
			});

			wrapper.slick({
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
		applyMosaicBanners: function() {
			$('.mosaic-qd-v1-wrapper .box-banner').QD_mosaicBanners({
				containerWidth: 1326,
				classFourColumn: "col-xs-12 col-sm-6 col-md-3"
			});

			$('.mosaic-qd-v2-wrapper .box-banner').QD_mosaicBanners({
				bannerColSecurityMargin: -30,
				containerWidth: 1326,
				classFourColumn: "col-xs-12 col-sm-6 col-md-3"
			});
		},
		applySmartCart: function() {
			$('.header-qd-v1-actions-cart').append('<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>');

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

			$('.header-qd-v1-cart-link').click(function(evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-cart-show');

				wrapper.height($(window).height());
				wrapper.find(".qd-ddc-prodWrapper").css('max-height', $(window).height() - 193);
			});

			$('.qd_ddc_lightBoxClose').click(function(evt){
				$(document.body).removeClass(Common.qdOverlayClass);
			});
		},
		openSearchModal: function() {
			$('.header-qd-v1-actions-search').click(function() {
				$('.modal-qd-v1-search').modal();
				return false;
			});
		},
		saveAmountFix: function() {
			$('.shelf-qd-v1-highlight-discount-percentage:not(.qd-on)').addClass('qd-on').each(function() {
				var $t = $(this);
				$t.text(($t.text().trim().match(/[0-9]+/) || [""]).pop() + '%');
			});
		},
		setDataScrollToggle: function() {
			$(document.body).attr('data-qd-scroll-limit', '0');
		},
		showFooterContent: function() {
			$('.footer-qd-v1-mobile-collapse-trigger').click(function(e) {
				e.preventDefault();
				$(this).addClass('qd-is-hide');
				$('.footer-qd-v1-mobile-collapse').addClass('qd-is-active');
			});
		}
	};

	var Home = {
		init: function() {
			// Home.openModalVideoInstitutional();
			Home.sliderFull();
			Home.applyBrandCarousel();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		applyBrandCarousel: function () {
			var wrapper = $('.carousel-qd-v1-brand');

			wrapper.slick({
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				slidesToShow: 5,
				slidesToScroll: 5,
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
							slidesToScroll: 2
						}
					},

					{
						breakpoint: 380,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		},
		openModalVideoInstitutional: function() {
			$('.home-qd-v1-video-poster').click(function(e) {
				$('.modal-qd-v1-home-video').modal('show');
				return false;
			});
		},
		sliderFull: function() {
			$('.slider-qd-v1-full').slick({
				dots: true,
				fade: true,
				cssEase: 'linear',
				infinite: true,
				speed: 500,
				draggable: false
			});
		}
	};

	var Search = {
		init: function() {
			Search.openFiltersMenu();
			Search.shelfLineFix();
		},
		ajaxStop: function() {
			Search.shelfLineFix();
		},
		windowOnload: function() {
			Search.shelfLineFix();
		},
		openFiltersMenu: function() {
			$('.search-qd-v1-navigator-trigger').click(function(e) {
				e.preventDefault();
				$(document.body).toggleClass('qd-sn-on');
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
				};
				exec();

				// Olhando para o Smart Research
				if(!window.qd_shelf_line_fix_){
					$(window).on("QuatroDigital.sr_shelfCallback", exec);
					window.qd_shelf_line_fix_ = true;
				}

				// Olhando para o evento window resize
				var resize = $._data(window).events.resize;
				var allowResize = true;
				if(resize)
					for(var i = 0; i < resize.length; i++){
						if(resize[i].namespace == "qd"){
							allowResize = false;
							break;
						}
					}
				if(allowResize){
					var timeOut = 0;
					$(window).on("resize.qd", function(){
						clearTimeout(timeOut);
						timeOut = setTimeout(function() {
							$(".qd-first-line").removeClass(".qd-first-line");
							exec();
						}, 20);
					});
				}
			}
			catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
		}
	};

	var Product = {
		run: function() {},
		init: function() {
			// Product.forceImageZoom();
			Product.applyCarouselThumb(); $(window).on('skuSelected.vtex', Product.applyCarouselThumb);
			Product.accessoriesApplyCarousel();
			Product.openShipping();
			Product.saveAmountFlag();
			Product.scrollToDescription();
			Product.setAvailableBodyClass();
			Product.wrapProductSpecification();
			Product.splitDescription();
			Product.applyTipBarCarousel();
			Product.showFloatingBuyBar();
		},
		ajaxStop: function() {
			Product.addCloseBtnFreightTable();
		},
		windowOnload: function() {},
		accessoriesApplyCarousel: function() {
			$('.accessories-qd-v1-item').wrapAll('<div class="accessories-qd-v1-carousel"></div>');

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
		applyTipBarCarousel: function() {
			var wrapper = $('.tip-bar-qd-v1-carousel');

			if (!wrapper.length)
				return;

			wrapper.find('[class*="col-"]').each(function(){
				$(this).removeAttr('class');
				$(this).addClass('col-xs-12 col-md-6');
			});

			wrapper.slick({
				arrows: false,
				autoplay: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				draggable: false,
				responsive:[
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
		splitDescription: function() {
			var wrapper = $('.product-qd-v1-description-wrapper .row').first();
			var measuresEl = wrapper.find('h4.Medidas, h4.Medida');

			if(measuresEl.length > 0) // Verifica se existe Medidas
				measuresEl = measuresEl.wrap('<div class="col-xs-12"><div class="product-qd-v1-specification"><div class="h1 h2 h3 h4 h5 h6 p ul dl"></div></div></div>').after(wrapper.find('table.Medidas, table.Medida')).closest('.col-xs-12').appendTo(wrapper);

			var columns = wrapper.find('[class*=col-xs-12]:not(:first-child)');
			columns.removeClass(function(){ // Remove classe col-md-*
				var match = $(this).attr('class').match(/col-md-\d{1,2}/g);
				if(match == null)
					return '';
				return match[0];
			}).addClass(function() { // Adiciona classe col-md-* nova baseada no nº de colunas (MAX: col-md-6, MIN: col-md-3)
				return 'col-md-' + (Math.min(6, Math.max(3, Math.round(12 / columns.length))));
			});
		},
		addCloseBtnFreightTable: function() {
			var elem = $('.freight-values');

			if (!$('#calculoFrete').length) $('.product-qd-v1-shipping').hide();
			else $('.product-qd-v1-shipping').show();

			if (elem.length > 0 && elem.is(':visible'))
				$('<span class="close"/>').bind('click', function() {
					elem.fadeToggle('fast', 'linear');
				}).appendTo(elem);
		},
		applyCarouselThumb: function() {
			var thumbsSliderWrapper = $('.product-qd-v1-image-thumbs-mobile'); // Wrapper onde foi inserido as thumbs

			thumbsSliderWrapper.slick({
  				slidesToShow: 5,
  				arrows: false,
  				infinite: false,
  				dots: false,
  				responsive: [
  					{
  						breakpoint: 600,
  						settings: {
  							slidesToShow: 3
  						}
  					}
  				]
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
		openShipping: function() {
			if( typeof window.ShippingValue === "function" )
				window.ShippingValue();
		},
		saveAmountFlag: function() {
			var flag = $('.product-qd-v1-stamps-highlight-discount');

			$(window).on('skuSelected.vtex', function(e, sku, data) {
				if (!flag.length)
					flag = $('<div class="product-qd-v1-stamps-highlight-discount"></div>').prependTo('.product-qd-v1-stamps');

				if (data.listPrice > data.bestPrice)
					flag.text(parseInt(100 - data.bestPrice / data.listPrice * 100) + "%").show();
				else
					flag.hide();
			});

			if (skuJson.skus.length >= 1) {
				if (!flag.length)
					flag = $('<div class="product-qd-v1-stamps-highlight-discount"></div>').prependTo('.product-qd-v1-stamps');

				if (skuJson.skus[0].listPrice > skuJson.skus[0].bestPrice)
					flag.text(parseInt(100 - skuJson.skus[0].bestPrice / skuJson.skus[0].listPrice * 100) + "%").show();
			}
		},
		scrollToDescription: function() {
			$('.product-qd-v1-link-description').click(function(e) {
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $('.product-qd-v1-description').offset().top -100
				}, 900, 'swing');
			});
		},
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
		wrapProductSpecification: function() {
			$('#caracteristicas > h4').each(function() {
				$(this).next('table').addBack().wrapAll('<div class="product-qd-v1-specification-column" />')
			});
		},
		showFloatingBuyBar: function () {
			var targetOffset = $(".product-qd-v1-buy-button").offset().top - 30;
			var elem = $(".product-floating-bar-buy");

			var $w = $(window).scroll(function () {

				if ($w.scrollTop() > targetOffset) {
					elem.addClass("active");
				}
				else {
					elem.removeClass("active");
				}

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
		sidemenuToggle:function() {
			// Amazing Menu Responsivo
			$('.institucional-qd-v1-menu-toggle-wrap').click(function(evt) {
				evt.preventDefault();
				$(document.body).addClass('qd-sn-on');
			});
		},
		formCadastreMask: function() {
			var form = $(".form-qd-v1");

			if (!form.length || typeof $.fn.mask !== "function")
				return;

			form.find('[name=qd_form_cpnj]').mask('00.000.000/0000-00');
			form.find('[name=qd_form_cpf]').mask('000.000.000-00');
			form.find('[name=qd_form_phone]').mask('(00) 0000-00009');
			form.find('[name=qd_form_celphone]').mask('(00) 0000-00009');
			form.find('[name=qd_form_zipcode]').mask('00000-000');
			form.find('[name=qd_form_ie]').mask('###.###.###.###.###');
			form.find('[name=qd_form_birthdate]').mask('00/00/0000');
		},
		checkEmailExist: function(email){
			window.QD_checkEmailExist_request = window.QD_checkEmailExist_request || $.ajax({
				url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/CL/search",
				data: {"_fields": "id", "email": email},
				type: "GET",
				dataType: "json",
				headers: {Accept: "application/vnd.vtex.ds.v10+json"},
				success: function(data) {
					if(data.length)
						alert("Este e-mail já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente.");
				},
				complete: function(){
					window.QD_checkEmailExist_request = undefined;
				}
			});

			return window.QD_checkEmailExist_request;
		},
		checkCnpjExist: function(cnpj){
			window.QD_checkCnpjExist_request = window.QD_checkCnpjExist_request || $.ajax({
				url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/CL/search",
				data: {"_fields": "id", "corporateDocument": cnpj.replace(/[^0-9]/ig, "")},
				type: "GET",
				dataType: "json",
				headers: {Accept: "application/vnd.vtex.ds.v10+json"},
				success: function(data) {
					if(data.length)
						alert("Este CNPJ já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente.");
				},
				complete: function(){
					window.QD_checkCnpjExist_request = undefined;
				}
			});

			return window.QD_checkCnpjExist_request;
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

		Search.isSearch = $(document.body).is('.resultado-busca');
		Search.isDepartament = $(document.body).is('.departamento');
		Search.isCategory = $(document.body).is('.categoria');

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
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.init();
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

/* Quatro Digital Newsletter // 5.1 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os Direitos Reservados */
(function(){var f=jQuery;if("function"!==typeof f.fn.QD_news){var t={defaultName:"Digite seu nome...",defaultEmail:"Digite seu e-mail...",nameField:".qd_news_name",checkNameFieldIsVisible:!0,emailField:".qd_news_email",btn:".qd_news_button",elementError:".nv2_messageError",elementSuccess:".nv2_messageSuccess",validationMethod:"popup",getAttr:"alt",setDefaultName:!0,checkNameExist:!0,validateName:!0,showInPopup:!0,animation:"blink",animateSpeed:100,animateDistance:15,animateRepeat:3,animateFieldSuccess:".qd_news_animate_field_success",
timeHideSuccessMsg:3E3,platform:"VTEX",allowSubmit:function(){return!0},successCallback:function(){},submitCallback:function(f,l){}};f.fn.QD_news=function(r){var l=function(a,d){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var g;"object"===typeof a?(a.unshift("[QD News]\n"),g=a):g=["[QD News]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===
d.toLowerCase())try{console.info.apply(console,g)}catch(b){console.info(g.join("\n"))}else try{console.error.apply(console,g)}catch(b){console.error(g.join("\n"))}else try{console.warn.apply(console,g)}catch(b){console.warn(g.join("\n"))}}},h=f(this);if(!h.length)return h;var a=f.extend({},t,r);a.showInPopup||(a.validationMethod="div");null!==a.animation?a.validationMethod="animateField":"animateField"==a.validationMethod&&(a.animation="leftRight");if("popup"==a.validationMethod&&"function"!==typeof f.fn.vtexPopUp2)return l("O popUp2 n\u00e3o foi encontrado. Adicione o Plugin de PopUp2."),
h;var q=function(f){var d,g,b;g=0;d=function(){f.animate({left:"-="+a.animateDistance},a.animateSpeed,function(){f.animate({left:"+="+a.animateDistance},a.animateSpeed,function(){g<a.animateRepeat&&d();g++})})};b=function(){f.fadeTo(a.animateSpeed,.2,function(){f.fadeTo(a.animateSpeed,1,function(){g<a.animateRepeat&&b();g++})})};f.stop(!0,!0);"leftRight"==a.animation?d():"blink"==a.animation&&b()};h.each(function(){var h,d,g,b=f(this),k=b.find(a.nameField),e=b.find(a.emailField),m=b.find(a.btn);"animateField"!=
a.validationMethod&&(d=b.find(a.elementError),g=b.find(a.elementSuccess));1>k.length&&a.checkNameExist&&l("Campo de nome, n\u00e3o encontrado ("+k.selector+"). Ser\u00e1 atribuido um valor padr\u00e3o.","info");if(1>e.length)return l("Campo de e-mail, n\u00e3o encontrado ("+e.selector+")"),b;if(1>m.length)return l("Bot\u00e3o de envio, n\u00e3o encontrado ("+m.selector+")"),b;if("animateField"!=a.validationMethod&&(1>g.length||1>d.length))return l("A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n ("+
g.selector+", "+d.selector+")"),b;a.setDefaultName&&k.is("input[type=text], textarea")&&k.val(a.defaultName);e.val(a.defaultEmail);(function(){if(a.checkNameExist){if(a.checkNameFieldIsVisible){var c=k.filter(":visible");if(!c.length)return}else c=k;var b=c.val();c.is("input:text, textarea")&&c.bind({focus:function(){c.val()!=b||0!==c.val().search(a.defaultName.substr(0,6))&&!a.setDefaultName||c.val("")},blur:function(){""===c.val()&&c.val(b)}})}})();(function(){var b;b=e.val();e.bind({focus:function(){e.val()==
b&&0===e.val().search(a.defaultEmail.substr(0,6))&&e.val("")},blur:function(){""===e.val()&&e.val(b)}})})();h=function(){var c,e,h,k;e=(c=b.find(a.nameField).filter("input[type=text],select,textarea").val())?c:b.find(a.nameField).filter("input[type=radio], input[type=checkbox]").length?b.find(a.nameField).filter("input[type=radio]:checked, input[type=checkbox]:checked").val()||"":(c=b.find(a.nameField).attr(a.getAttr))?c:(c=b.find(a.nameField).text())?c:(c=b.find(a.nameField).find(".box-banner img:first").attr("alt"))?
c:"Nome_Padrao";c=(b.find(a.emailField).val()||"").trim();h=b.find(a.nameField).is(":visible");h=a.validateName?(1>e.length||0===e.search(a.defaultName.substr(0,6)))&&(a.checkNameExist||h?h:!0):!1;k=0>c.search(/^[a-z0-9\_\-\.\+]+@[a-z0-9\_\-]+(\.[a-z0-9\_\-]{2,})+$/i);if(h||k)"animateField"==a.validationMethod?(h&&q(b.find(a.nameField)),k&&q(b.find(a.emailField))):"popup"==a.validationMethod?d.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterError"}):(d.slideDown().bind("click",function(){f(this).slideUp()}),
setTimeout(function(){d.slideUp()},1800));else if(a.allowSubmit()){m.attr("disabled","disabled");var n={postData:{newsletterClientEmail:c,newsletterClientName:a.defaultName==e?"-":e,newsInternalCampaign:"newsletter:opt-in",newsInternalPage:(document.location.pathname||"/").replace(/\//g,"_"),newsInternalPart:"newsletter"},button:m,wrapper:b};"linx"===a.platform&&(n.postData.nome=n.postData.newsletterClientName,n.postData.email=n.postData.newsletterClientEmail);f.ajax({url:"linx"===a.platform?"/newsletter.aspx":
"/no-cache/Newsletter.aspx",type:"linx"===a.platform?"GET":"POST",data:n.postData,success:function(c){var e,h,d;m.removeAttr("disabled");if("linx"===a.platform&&!(-1<c.indexOf(" com sucesso.")||-1<c.indexOf(" cadastrado.")))return alert(c);"popup"==a.validationMethod?g.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterSuccess"}):"animateField"!=a.validationMethod&&g.slideDown().bind("click",function(){f(this).slideUp()});d=b.find(a.emailField);a.setDefaultName&&b.find(a.nameField).is("input:text, textarea")&&
b.find(a.nameField).val(a.defaultName);e=function(){d.val(a.defaultEmail)};"animateField"==a.validationMethod?(d.val(b.find(a.animateFieldSuccess).val()||"Obrigado!!!"),d.addClass("vtexNewsSuccess"),h=setTimeout(function(){d.removeClass("vtexNewsSuccess");e();d.unbind("focus.vtexNews")},a.timeHideSuccessMsg),d.bind("focus.vtexNews",function(){d.removeClass("vtexNewsSuccess");clearTimeout(h);f(this).val("");f(this).unbind("focus.vtexNews")})):e();a.successCallback(n);f(b).trigger("qdNewsSuccessCallback",
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
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(){"function"!==typeof $.cookie&&function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)}(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?
g(b):b}var l=/\+/g,e=c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864E5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=
h[m].split("="),k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}})})();
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
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);

/* Quatro Digital Amazing Menu */
var _0x5f2f=['---','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','find','.qd_am_code','filter','.qd-am-collection','parent','qd-am-banner-wrapper','url','img[alt=\x27','attr','data-qdam-value','length','.box-banner','clone','insertBefore','hide','qd-am-content-loaded','trim','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','\x27\x20falho.','ajaxCallback','call','trigger','ul[itemscope]','alerta','qd-am-has-ul','children','qd-am-elem-','replaceSpecialChars','>li','qd-amazing-menu','>ul','qd-am-column','qd-am-dropdown-menu','qd-am-dropdown','qd-am-level-','add','-li','QuatroDigital.am.callback','exec','.qd_amazing_menu_auto','getParent','closest','function','QD_amazingMenu','object','undefined','error','info','warn','unshift','[QD\x20Amazing\x20Menu]\x0a','aviso','toLowerCase','apply','join','qdAmAddNdx','each','addClass','qd-am-li-','first','qd-am-first','last','qd-am-last','dhnevhf%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','charCodeAt'];(function(_0x4f7022,_0x108a77){var _0x119d9f=function(_0x2b0888){while(--_0x2b0888){_0x4f7022['push'](_0x4f7022['shift']());}};_0x119d9f(++_0x108a77);}(_0x5f2f,0x73));var _0xf5f2=function(_0x86d517,_0x32502e){_0x86d517=_0x86d517-0x0;var _0x3d8464=_0x5f2f[_0x86d517];return _0x3d8464;};(function(_0x7c86d8){_0x7c86d8['fn'][_0xf5f2('0x0')]=_0x7c86d8['fn'][_0xf5f2('0x1')];}(jQuery));(function(_0x1a7be1){var _0x1172dd;var _0x174bc7=jQuery;if(_0xf5f2('0x2')!==typeof _0x174bc7['fn'][_0xf5f2('0x3')]){var _0x501fbd={'url':'/qd-amazing-menu','callback':function(){},'ajaxCallback':function(){}};var _0x1665c7=function(_0x192215,_0xad7f65){if(_0xf5f2('0x4')===typeof console&&_0xf5f2('0x5')!==typeof console[_0xf5f2('0x6')]&&'undefined'!==typeof console[_0xf5f2('0x7')]&&_0xf5f2('0x5')!==typeof console[_0xf5f2('0x8')]){var _0x56a69f;_0xf5f2('0x4')===typeof _0x192215?(_0x192215[_0xf5f2('0x9')](_0xf5f2('0xa')),_0x56a69f=_0x192215):_0x56a69f=['[QD\x20Amazing\x20Menu]\x0a'+_0x192215];if(_0xf5f2('0x5')===typeof _0xad7f65||'alerta'!==_0xad7f65['toLowerCase']()&&_0xf5f2('0xb')!==_0xad7f65[_0xf5f2('0xc')]())if('undefined'!==typeof _0xad7f65&&_0xf5f2('0x7')===_0xad7f65[_0xf5f2('0xc')]())try{console[_0xf5f2('0x7')][_0xf5f2('0xd')](console,_0x56a69f);}catch(_0x59bb6c){try{console[_0xf5f2('0x7')](_0x56a69f['join']('\x0a'));}catch(_0x5850f4){}}else try{console[_0xf5f2('0x6')][_0xf5f2('0xd')](console,_0x56a69f);}catch(_0x1c1a5c){try{console[_0xf5f2('0x6')](_0x56a69f['join']('\x0a'));}catch(_0xafe430){}}else try{console[_0xf5f2('0x8')][_0xf5f2('0xd')](console,_0x56a69f);}catch(_0x1b6dd2){try{console[_0xf5f2('0x8')](_0x56a69f[_0xf5f2('0xe')]('\x0a'));}catch(_0xdb61b3){}}}};_0x174bc7['fn'][_0xf5f2('0xf')]=function(){var _0x11f702=_0x174bc7(this);_0x11f702[_0xf5f2('0x10')](function(_0x20fccd){_0x174bc7(this)[_0xf5f2('0x11')](_0xf5f2('0x12')+_0x20fccd);});_0x11f702[_0xf5f2('0x13')]()[_0xf5f2('0x11')](_0xf5f2('0x14'));_0x11f702[_0xf5f2('0x15')]()['addClass'](_0xf5f2('0x16'));return _0x11f702;};_0x174bc7['fn'][_0xf5f2('0x3')]=function(){};_0x1a7be1=function(_0x49dac2){var _0x47acfc={'n':_0xf5f2('0x17')};return function(_0x388e6c){var _0x4ae323=function(_0x45b74f){return _0x45b74f;};var _0x170042=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x388e6c=_0x388e6c['d'+_0x170042[0x10]+'c'+_0x170042[0x11]+'m'+_0x4ae323(_0x170042[0x1])+'n'+_0x170042[0xd]]['l'+_0x170042[0x12]+'c'+_0x170042[0x0]+'ti'+_0x4ae323('o')+'n'];var _0x39e44a=function(_0x39c024){return escape(encodeURIComponent(_0x39c024[_0xf5f2('0x18')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x21cd91){return String[_0xf5f2('0x19')](('Z'>=_0x21cd91?0x5a:0x7a)>=(_0x21cd91=_0x21cd91[_0xf5f2('0x1a')](0x0)+0xd)?_0x21cd91:_0x21cd91-0x1a);})));};var _0x2833fe=_0x39e44a(_0x388e6c[[_0x170042[0x9],_0x4ae323('o'),_0x170042[0xc],_0x170042[_0x4ae323(0xd)]][_0xf5f2('0xe')]('')]);_0x39e44a=_0x39e44a((window[['js',_0x4ae323('no'),'m',_0x170042[0x1],_0x170042[0x4]['toUpperCase'](),'ite'][_0xf5f2('0xe')]('')]||_0xf5f2('0x1b'))+['.v',_0x170042[0xd],'e',_0x4ae323('x'),'co',_0x4ae323('mm'),_0xf5f2('0x1c'),_0x170042[0x1],'.c',_0x4ae323('o'),'m.',_0x170042[0x13],'r'][_0xf5f2('0xe')](''));for(var _0xf6c58d in _0x47acfc){if(_0x39e44a===_0xf6c58d+_0x47acfc[_0xf6c58d]||_0x2833fe===_0xf6c58d+_0x47acfc[_0xf6c58d]){var _0x788a8d='tr'+_0x170042[0x11]+'e';break;}_0x788a8d='f'+_0x170042[0x0]+'ls'+_0x4ae323(_0x170042[0x1])+'';}_0x4ae323=!0x1;-0x1<_0x388e6c[[_0x170042[0xc],'e',_0x170042[0x0],'rc',_0x170042[0x9]][_0xf5f2('0xe')]('')][_0xf5f2('0x1d')](_0xf5f2('0x1e'))&&(_0x4ae323=!0x0);return[_0x788a8d,_0x4ae323];}(_0x49dac2);}(window);if(!eval(_0x1a7be1[0x0]))return _0x1a7be1[0x1]?_0x1665c7('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;var _0xaa2602=function(_0x102449){var _0x375ca8=_0x102449[_0xf5f2('0x1f')](_0xf5f2('0x20'));var _0x477604=_0x375ca8['filter']('.qd-am-banner');var _0x22c826=_0x375ca8[_0xf5f2('0x21')](_0xf5f2('0x22'));if(_0x477604['length']||_0x22c826['length'])_0x477604[_0xf5f2('0x23')]()[_0xf5f2('0x11')](_0xf5f2('0x24')),_0x22c826[_0xf5f2('0x23')]()[_0xf5f2('0x11')]('qd-am-collection-wrapper'),_0x174bc7['qdAjax']({'url':_0x1172dd[_0xf5f2('0x25')],'dataType':'html','success':function(_0xb744b9){var _0x58a4df=_0x174bc7(_0xb744b9);_0x477604[_0xf5f2('0x10')](function(){var _0xb744b9=_0x174bc7(this);var _0x7b6817=_0x58a4df[_0xf5f2('0x1f')](_0xf5f2('0x26')+_0xb744b9[_0xf5f2('0x27')](_0xf5f2('0x28'))+'\x27]');_0x7b6817[_0xf5f2('0x29')]&&(_0x7b6817['each'](function(){_0x174bc7(this)[_0xf5f2('0x0')](_0xf5f2('0x2a'))[_0xf5f2('0x2b')]()[_0xf5f2('0x2c')](_0xb744b9);}),_0xb744b9[_0xf5f2('0x2d')]());})[_0xf5f2('0x11')](_0xf5f2('0x2e'));_0x22c826['each'](function(){var _0xb744b9={};var _0xf503e8=_0x174bc7(this);_0x58a4df['find']('h2')[_0xf5f2('0x10')](function(){if(_0x174bc7(this)['text']()[_0xf5f2('0x2f')]()[_0xf5f2('0xc')]()==_0xf503e8[_0xf5f2('0x27')](_0xf5f2('0x28'))['trim']()['toLowerCase']())return _0xb744b9=_0x174bc7(this),!0x1;});_0xb744b9[_0xf5f2('0x29')]&&(_0xb744b9[_0xf5f2('0x10')](function(){_0x174bc7(this)[_0xf5f2('0x0')]('[class*=\x27colunas\x27]')[_0xf5f2('0x2b')]()['insertBefore'](_0xf503e8);}),_0xf503e8[_0xf5f2('0x2d')]());})['addClass'](_0xf5f2('0x2e'));},'error':function(){_0x1665c7(_0xf5f2('0x30')+_0x1172dd['url']+_0xf5f2('0x31'));},'complete':function(){_0x1172dd[_0xf5f2('0x32')][_0xf5f2('0x33')](this);_0x174bc7(window)[_0xf5f2('0x34')]('QuatroDigital.am.ajaxCallback',_0x102449);},'clearQueueDelay':0xbb8});};_0x174bc7['QD_amazingMenu']=function(_0x3d328f){var _0x140a11=_0x3d328f[_0xf5f2('0x1f')](_0xf5f2('0x35'))[_0xf5f2('0x10')](function(){var _0xe62b57=_0x174bc7(this);if(!_0xe62b57[_0xf5f2('0x29')])return _0x1665c7(['UL\x20do\x20menu\x20não\x20encontrada',_0x3d328f],_0xf5f2('0x36'));_0xe62b57[_0xf5f2('0x1f')]('li\x20>ul')[_0xf5f2('0x23')]()[_0xf5f2('0x11')](_0xf5f2('0x37'));_0xe62b57[_0xf5f2('0x1f')]('li')[_0xf5f2('0x10')](function(){var _0x3b6372=_0x174bc7(this);var _0x462ea3=_0x3b6372[_0xf5f2('0x38')](':not(ul)');_0x462ea3[_0xf5f2('0x29')]&&_0x3b6372[_0xf5f2('0x11')](_0xf5f2('0x39')+_0x462ea3['first']()['text']()['trim']()[_0xf5f2('0x3a')]()[_0xf5f2('0x18')](/\./g,'')['replace'](/\s/g,'-')[_0xf5f2('0xc')]());});var _0xeed03d=_0xe62b57[_0xf5f2('0x1f')](_0xf5f2('0x3b'))[_0xf5f2('0xf')]();_0xe62b57[_0xf5f2('0x11')](_0xf5f2('0x3c'));_0xeed03d=_0xeed03d[_0xf5f2('0x1f')](_0xf5f2('0x3d'));_0xeed03d[_0xf5f2('0x10')](function(){var _0x444317=_0x174bc7(this);_0x444317[_0xf5f2('0x1f')](_0xf5f2('0x3b'))[_0xf5f2('0xf')]()['addClass'](_0xf5f2('0x3e'));_0x444317['addClass'](_0xf5f2('0x3f'));_0x444317[_0xf5f2('0x23')]()[_0xf5f2('0x11')](_0xf5f2('0x40'));});_0xeed03d[_0xf5f2('0x11')](_0xf5f2('0x40'));var _0x55a633=0x0,_0x1a7be1=function(_0x2e7193){_0x55a633+=0x1;_0x2e7193=_0x2e7193[_0xf5f2('0x38')]('li')[_0xf5f2('0x38')]('*');_0x2e7193[_0xf5f2('0x29')]&&(_0x2e7193[_0xf5f2('0x11')](_0xf5f2('0x41')+_0x55a633),_0x1a7be1(_0x2e7193));};_0x1a7be1(_0xe62b57);_0xe62b57[_0xf5f2('0x42')](_0xe62b57['find']('ul'))[_0xf5f2('0x10')](function(){var _0x33ec29=_0x174bc7(this);_0x33ec29[_0xf5f2('0x11')]('qd-am-'+_0x33ec29[_0xf5f2('0x38')]('li')[_0xf5f2('0x29')]+_0xf5f2('0x43'));});});_0xaa2602(_0x140a11);_0x1172dd['callback']['call'](this);_0x174bc7(window)[_0xf5f2('0x34')](_0xf5f2('0x44'),_0x3d328f);};_0x174bc7['fn']['QD_amazingMenu']=function(_0x14aa81){var _0x533cca=_0x174bc7(this);if(!_0x533cca[_0xf5f2('0x29')])return _0x533cca;_0x1172dd=_0x174bc7['extend']({},_0x501fbd,_0x14aa81);_0x533cca[_0xf5f2('0x45')]=new _0x174bc7['QD_amazingMenu'](_0x174bc7(this));return _0x533cca;};_0x174bc7(function(){_0x174bc7(_0xf5f2('0x46'))[_0xf5f2('0x3')]();});}}(this));

/*  Automatizador de comments box do Facebook Carlos Vinicius [Quatro Digital] */
/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if(!$("script#facebook-jssdk").length){a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+
(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse()});

/* Quatro Digital Smart Cart */
var _0xa5fa=['unshift','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','alerta','toLowerCase','aviso','apply','join','_QuatroDigital_DropDown','QD_dropDownCart','dhnevhf%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','toUpperCase','ite','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','Ir\x20ao\x20Carrinho','Finalizar\x20Compra','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','Continuar\x20Comprando','<label\x20for=\x22qd-ddc-cep\x22>Calcular\x20frete:\x20</label><input\x20type=\x22tel\x22\x20id=\x22qd-ddc-cep\x22\x20placeholder=\x22CEP\x22\x20/>','name','smartCheckout','vtexjs','ajax','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','script','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','checkout','SDK','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','cartContainer','append','find','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','add','.qd_ddc_lightBoxOverlay','click.qd_ddc_closeFn','removeClass','qd-bb-lightBoxProdAdd','off','keyup.qd_ddc_closeFn','keyCode','qd-bb-lightBoxBodyProdAdd','.qd-ddc-scrollUp','click.qd_ddc_scrollUp','scrollCart','.qd-ddc-scrollDown','click.qd_ddc_scrollDown','.qd-ddc-shipping\x20input','keyup.qd_ddc_cep','updateOnlyHover','allowUpdate','simpleCart','mouseleave.qd_ddc_hover','texts','cartTotal','#value','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','#items','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','.qd-ddc-viewCart','html','linkCart','.qd_ddc_continueShopping','linkCheckout','.qd-ddc-infoTotal','.qd-ddc-shipping','shippingForm','.qd-ddc-emptyCart\x20p','emptyCart','call','clone','.qd-ddc-infoTotalItems','.qd-ddc-infoTotalShipping','.qd-ddc-infoAllTotal','allTotal','items','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','renderProductsList','dataOptionsCache','timeRemoveNewItemClass','.qd-ddc-wrapper','qd-ddc-prodLoaded','function','exec','_QuatroDigital_AmountProduct','addClass','getOrderForm','totalizers','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho','Este\x20método\x20esta\x20descontinuado!','.qd-ddc-prodRow','qd-ddc-noItems','.qd-ddc-prodWrapper2','each','attr','qd-ddc-','.qd-ddc-prodName','skuName','.qd-ddc-prodPrice','sellingPrice','Grátis','content','.qd-ddc-quantity','val','quantity','.qd-ddc-remove','insertProdImg','.qd-ddc-image','imageUrl','appendTo','shippingData','address','postalCode','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','actionButtons','lastSku','filter','[data-sku=\x27','outerHeight','qd-ddc-lastAddedFixed','qd-ddc-lastAdded','body','qd-ddc-product-add-time-v2','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','qd-ddc-product-add-time','callbackProductsList','callbackProductsList\x20não\x20é\x20uma\x20função','qd-loaded','load','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','data-sku','data-sku-index','changeQantity','.qd-ddc-prodQttWrapper:not(.qd_on)','click.qd_ddc_more','qd-loading','.qd-ddc-quantityMinus','click.qd_ddc_minus','preventDefault','focusout.qd_ddc_change','stop','slideUp','remove','cartIsEmpty','$1-$2$3','data','qdDdcLastPostalCode','calculateShipping','BRA','done','getCartInfoByUrl','fail','Não\x20foi\x20possível\x20calcular\x20o\x20frete','boolean','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','updateItems','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','atenção\x20esta\x20método\x20esta\x20descontinuado','index','removeItems','.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2','animate','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','avisso','Callback\x20não\x20é\x20uma\x20função','allowRecalculate','buyButtonClicked','quickViewUpdate','productId','prod_','prodId','qtt','.qd-bap-wrapper','.qd-bap-item-added','input.qd-productId[value=','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd_bap_wrapper_content','qd-bap-item-added','prepend','QD_smartCart','extend','dropDown','selector','QD_buyButton','buyButton','smartCart','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','getParent','closest','replace','undefined','pow','round','toFixed','split','length','_QuatroDigital_CartData','callback','Callbacks','error','Oooops!\x20','message','object','info','warn'];(function(_0x397e5f,_0x454c8f){var _0x5302b8=function(_0x1a29ef){while(--_0x1a29ef){_0x397e5f['push'](_0x397e5f['shift']());}};_0x5302b8(++_0x454c8f);}(_0xa5fa,0xc4));var _0xaa5f=function(_0xab287a,_0x2db01f){_0xab287a=_0xab287a-0x0;var _0x16ac16=_0xa5fa[_0xab287a];return _0x16ac16;};(function(_0x4b50eb){_0x4b50eb['fn'][_0xaa5f('0x0')]=_0x4b50eb['fn'][_0xaa5f('0x1')];}(jQuery));function qd_number_format(_0x24d383,_0x1b7e1d,_0x499d69,_0x3e56f9){_0x24d383=(_0x24d383+'')[_0xaa5f('0x2')](/[^0-9+\-Ee.]/g,'');_0x24d383=isFinite(+_0x24d383)?+_0x24d383:0x0;_0x1b7e1d=isFinite(+_0x1b7e1d)?Math['abs'](_0x1b7e1d):0x0;_0x3e56f9=_0xaa5f('0x3')===typeof _0x3e56f9?',':_0x3e56f9;_0x499d69=_0xaa5f('0x3')===typeof _0x499d69?'.':_0x499d69;var _0x3d1489='',_0x3d1489=function(_0x13b606,_0x302138){var _0x1b7e1d=Math[_0xaa5f('0x4')](0xa,_0x302138);return''+(Math[_0xaa5f('0x5')](_0x13b606*_0x1b7e1d)/_0x1b7e1d)[_0xaa5f('0x6')](_0x302138);},_0x3d1489=(_0x1b7e1d?_0x3d1489(_0x24d383,_0x1b7e1d):''+Math['round'](_0x24d383))[_0xaa5f('0x7')]('.');0x3<_0x3d1489[0x0][_0xaa5f('0x8')]&&(_0x3d1489[0x0]=_0x3d1489[0x0]['replace'](/\B(?=(?:\d{3})+(?!\d))/g,_0x3e56f9));(_0x3d1489[0x1]||'')['length']<_0x1b7e1d&&(_0x3d1489[0x1]=_0x3d1489[0x1]||'',_0x3d1489[0x1]+=Array(_0x1b7e1d-_0x3d1489[0x1][_0xaa5f('0x8')]+0x1)['join']('0'));return _0x3d1489['join'](_0x499d69);};(function(){try{window[_0xaa5f('0x9')]=window['_QuatroDigital_CartData']||{},window[_0xaa5f('0x9')][_0xaa5f('0xa')]=window[_0xaa5f('0x9')][_0xaa5f('0xa')]||$[_0xaa5f('0xb')]();}catch(_0x48d1d3){_0xaa5f('0x3')!==typeof console&&'function'===typeof console[_0xaa5f('0xc')]&&console[_0xaa5f('0xc')](_0xaa5f('0xd'),_0x48d1d3[_0xaa5f('0xe')]);}}());(function(_0x2e1ca5){try{var _0x5a4c41=jQuery,_0x4fc828=function(_0x1f37fb,_0x291042){if(_0xaa5f('0xf')===typeof console&&_0xaa5f('0x3')!==typeof console[_0xaa5f('0xc')]&&_0xaa5f('0x3')!==typeof console[_0xaa5f('0x10')]&&_0xaa5f('0x3')!==typeof console[_0xaa5f('0x11')]){var _0x3d874f;_0xaa5f('0xf')===typeof _0x1f37fb?(_0x1f37fb[_0xaa5f('0x12')]('[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a'),_0x3d874f=_0x1f37fb):_0x3d874f=[_0xaa5f('0x13')+_0x1f37fb];if(_0xaa5f('0x3')===typeof _0x291042||_0xaa5f('0x14')!==_0x291042[_0xaa5f('0x15')]()&&_0xaa5f('0x16')!==_0x291042[_0xaa5f('0x15')]())if(_0xaa5f('0x3')!==typeof _0x291042&&_0xaa5f('0x10')===_0x291042[_0xaa5f('0x15')]())try{console[_0xaa5f('0x10')][_0xaa5f('0x17')](console,_0x3d874f);}catch(_0x10f287){try{console[_0xaa5f('0x10')](_0x3d874f['join']('\x0a'));}catch(_0x1e917d){}}else try{console['error'][_0xaa5f('0x17')](console,_0x3d874f);}catch(_0x34ca72){try{console['error'](_0x3d874f[_0xaa5f('0x18')]('\x0a'));}catch(_0x1032ce){}}else try{console['warn'][_0xaa5f('0x17')](console,_0x3d874f);}catch(_0x15f70b){try{console[_0xaa5f('0x11')](_0x3d874f[_0xaa5f('0x18')]('\x0a'));}catch(_0x1f66c0){}}}};window[_0xaa5f('0x19')]=window[_0xaa5f('0x19')]||{};window[_0xaa5f('0x19')]['allowUpdate']=!0x0;_0x5a4c41[_0xaa5f('0x1a')]=function(){};_0x5a4c41['fn'][_0xaa5f('0x1a')]=function(){return{'fn':new _0x5a4c41()};};var _0x1ed8eb=function(_0x5a7cf1){var _0x3b17b6={'n':_0xaa5f('0x1b')};return function(_0x438165){var _0x4e50ca=function(_0x5a90e5){return _0x5a90e5;};var _0x479f29=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x438165=_0x438165['d'+_0x479f29[0x10]+'c'+_0x479f29[0x11]+'m'+_0x4e50ca(_0x479f29[0x1])+'n'+_0x479f29[0xd]]['l'+_0x479f29[0x12]+'c'+_0x479f29[0x0]+'ti'+_0x4e50ca('o')+'n'];var _0x5990d2=function(_0x27d1a4){return escape(encodeURIComponent(_0x27d1a4['replace'](/\./g,'¨')[_0xaa5f('0x2')](/[a-zA-Z]/g,function(_0x4e0ec9){return String['fromCharCode'](('Z'>=_0x4e0ec9?0x5a:0x7a)>=(_0x4e0ec9=_0x4e0ec9['charCodeAt'](0x0)+0xd)?_0x4e0ec9:_0x4e0ec9-0x1a);})));};var _0x26a90d=_0x5990d2(_0x438165[[_0x479f29[0x9],_0x4e50ca('o'),_0x479f29[0xc],_0x479f29[_0x4e50ca(0xd)]]['join']('')]);_0x5990d2=_0x5990d2((window[['js',_0x4e50ca('no'),'m',_0x479f29[0x1],_0x479f29[0x4][_0xaa5f('0x1c')](),_0xaa5f('0x1d')]['join']('')]||'---')+['.v',_0x479f29[0xd],'e',_0x4e50ca('x'),'co',_0x4e50ca('mm'),_0xaa5f('0x1e'),_0x479f29[0x1],'.c',_0x4e50ca('o'),'m.',_0x479f29[0x13],'r']['join'](''));for(var _0x13e1bb in _0x3b17b6){if(_0x5990d2===_0x13e1bb+_0x3b17b6[_0x13e1bb]||_0x26a90d===_0x13e1bb+_0x3b17b6[_0x13e1bb]){var _0x36c306='tr'+_0x479f29[0x11]+'e';break;}_0x36c306='f'+_0x479f29[0x0]+'ls'+_0x4e50ca(_0x479f29[0x1])+'';}_0x4e50ca=!0x1;-0x1<_0x438165[[_0x479f29[0xc],'e',_0x479f29[0x0],'rc',_0x479f29[0x9]]['join']('')][_0xaa5f('0x1f')](_0xaa5f('0x20'))&&(_0x4e50ca=!0x0);return[_0x36c306,_0x4e50ca];}(_0x5a7cf1);}(window);if(!eval(_0x1ed8eb[0x0]))return _0x1ed8eb[0x1]?_0x4fc828(_0xaa5f('0x21')):!0x1;_0x5a4c41['QD_dropDownCart']=function(_0xecaac7,_0x160198){var _0x527866=_0x5a4c41(_0xecaac7);if(!_0x527866['length'])return _0x527866;var _0x586210=_0x5a4c41['extend'](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0xaa5f('0x22'),'linkCheckout':_0xaa5f('0x23'),'cartTotal':_0xaa5f('0x24'),'emptyCart':_0xaa5f('0x25'),'continueShopping':_0xaa5f('0x26'),'shippingForm':_0xaa5f('0x27')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'skuName':function(_0x3887dd){return _0x3887dd['skuName']||_0x3887dd[_0xaa5f('0x28')];},'callback':function(){},'callbackProductsList':function(){}},_0x160198);_0x5a4c41('');var _0x32a678=this;if(_0x586210[_0xaa5f('0x29')]){var _0x1f3268=!0x1;_0xaa5f('0x3')===typeof window[_0xaa5f('0x2a')]&&(_0x4fc828('A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN'),_0x5a4c41[_0xaa5f('0x2b')]({'url':_0xaa5f('0x2c'),'async':!0x1,'dataType':_0xaa5f('0x2d'),'error':function(){_0x4fc828(_0xaa5f('0x2e'));_0x1f3268=!0x0;}}));if(_0x1f3268)return _0x4fc828(_0xaa5f('0x2f'));}if('object'===typeof window['vtexjs']&&_0xaa5f('0x3')!==typeof window[_0xaa5f('0x2a')][_0xaa5f('0x30')])var _0x2e1ca5=window['vtexjs'][_0xaa5f('0x30')];else if(_0xaa5f('0xf')===typeof vtex&&_0xaa5f('0xf')===typeof vtex[_0xaa5f('0x30')]&&_0xaa5f('0x3')!==typeof vtex[_0xaa5f('0x30')][_0xaa5f('0x31')])_0x2e1ca5=new vtex[(_0xaa5f('0x30'))][(_0xaa5f('0x31'))]();else return _0x4fc828(_0xaa5f('0x32'));_0x32a678[_0xaa5f('0x33')]='<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>';var _0x42fc51=function(_0x2562ce){_0x5a4c41(this)[_0xaa5f('0x34')](_0x2562ce);_0x2562ce[_0xaa5f('0x35')](_0xaa5f('0x36'))[_0xaa5f('0x37')](_0x5a4c41(_0xaa5f('0x38')))['on'](_0xaa5f('0x39'),function(){_0x527866[_0xaa5f('0x3a')](_0xaa5f('0x3b'));_0x5a4c41(document['body'])[_0xaa5f('0x3a')]('qd-bb-lightBoxBodyProdAdd');});_0x5a4c41(document)[_0xaa5f('0x3c')](_0xaa5f('0x3d'))['on'](_0xaa5f('0x3d'),function(_0x4bbb30){0x1b==_0x4bbb30[_0xaa5f('0x3e')]&&(_0x527866[_0xaa5f('0x3a')](_0xaa5f('0x3b')),_0x5a4c41(document['body'])[_0xaa5f('0x3a')](_0xaa5f('0x3f')));});var _0x1ac9b6=_0x2562ce[_0xaa5f('0x35')]('.qd-ddc-prodWrapper');_0x2562ce[_0xaa5f('0x35')](_0xaa5f('0x40'))['on'](_0xaa5f('0x41'),function(){_0x32a678[_0xaa5f('0x42')]('-',void 0x0,void 0x0,_0x1ac9b6);return!0x1;});_0x2562ce[_0xaa5f('0x35')](_0xaa5f('0x43'))['on'](_0xaa5f('0x44'),function(){_0x32a678[_0xaa5f('0x42')](void 0x0,void 0x0,void 0x0,_0x1ac9b6);return!0x1;});_0x2562ce['find'](_0xaa5f('0x45'))['val']('')['on'](_0xaa5f('0x46'),function(){_0x32a678['shippingCalculate'](_0x5a4c41(this));});if(_0x586210[_0xaa5f('0x47')]){var _0x160198=0x0;_0x5a4c41(this)['on']('mouseenter.qd_ddc_hover',function(){var _0x2562ce=function(){window[_0xaa5f('0x19')][_0xaa5f('0x48')]&&(_0x32a678['getCartInfoByUrl'](),window['_QuatroDigital_DropDown']['allowUpdate']=!0x1,_0x5a4c41['fn'][_0xaa5f('0x49')](!0x0),_0x32a678['cartIsEmpty']());};_0x160198=setInterval(function(){_0x2562ce();},0x258);_0x2562ce();});_0x5a4c41(this)['on'](_0xaa5f('0x4a'),function(){clearInterval(_0x160198);});}};var _0x44600c=function(_0x2e3d08){_0x2e3d08=_0x5a4c41(_0x2e3d08);_0x586210[_0xaa5f('0x4b')]['cartTotal']=_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x4c')][_0xaa5f('0x2')](_0xaa5f('0x4d'),_0xaa5f('0x4e'));_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x4c')]=_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x4c')][_0xaa5f('0x2')](_0xaa5f('0x4f'),_0xaa5f('0x50'));_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x4c')]=_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x4c')]['replace'](_0xaa5f('0x51'),_0xaa5f('0x52'));_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x4c')]=_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x4c')][_0xaa5f('0x2')]('#total',_0xaa5f('0x53'));_0x2e3d08[_0xaa5f('0x35')](_0xaa5f('0x54'))[_0xaa5f('0x55')](_0x586210['texts'][_0xaa5f('0x56')]);_0x2e3d08[_0xaa5f('0x35')](_0xaa5f('0x57'))['html'](_0x586210['texts']['continueShopping']);_0x2e3d08['find']('.qd-ddc-checkout')['html'](_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x58')]);_0x2e3d08[_0xaa5f('0x35')](_0xaa5f('0x59'))[_0xaa5f('0x55')](_0x586210[_0xaa5f('0x4b')]['cartTotal']);_0x2e3d08['find'](_0xaa5f('0x5a'))[_0xaa5f('0x55')](_0x586210['texts'][_0xaa5f('0x5b')]);_0x2e3d08[_0xaa5f('0x35')](_0xaa5f('0x5c'))[_0xaa5f('0x55')](_0x586210[_0xaa5f('0x4b')][_0xaa5f('0x5d')]);return _0x2e3d08;}(this[_0xaa5f('0x33')]);var _0x51faff=0x0;_0x527866['each'](function(){0x0<_0x51faff?_0x42fc51[_0xaa5f('0x5e')](this,_0x44600c[_0xaa5f('0x5f')]()):_0x42fc51['call'](this,_0x44600c);_0x51faff++;});window['_QuatroDigital_CartData']['callback'][_0xaa5f('0x37')](function(){_0x5a4c41('.qd-ddc-infoTotalValue')[_0xaa5f('0x55')](window['_QuatroDigital_CartData']['total']||'--');_0x5a4c41(_0xaa5f('0x60'))[_0xaa5f('0x55')](window[_0xaa5f('0x9')]['qtt']||'0');_0x5a4c41(_0xaa5f('0x61'))[_0xaa5f('0x55')](window[_0xaa5f('0x9')]['shipping']||'--');_0x5a4c41(_0xaa5f('0x62'))[_0xaa5f('0x55')](window['_QuatroDigital_CartData'][_0xaa5f('0x63')]||'--');});var _0x2b2300=function(_0x455702,_0x3fdc46){if(_0xaa5f('0x3')===typeof _0x455702[_0xaa5f('0x64')])return _0x4fc828(_0xaa5f('0x65'));_0x32a678[_0xaa5f('0x66')][_0xaa5f('0x5e')](this,_0x3fdc46);};_0x32a678['getCartInfoByUrl']=function(_0x7e4313,_0x199360){_0xaa5f('0x3')!=typeof _0x199360?window[_0xaa5f('0x19')][_0xaa5f('0x67')]=_0x199360:window[_0xaa5f('0x19')][_0xaa5f('0x67')]&&(_0x199360=window[_0xaa5f('0x19')]['dataOptionsCache']);setTimeout(function(){window[_0xaa5f('0x19')]['dataOptionsCache']=void 0x0;},_0x586210[_0xaa5f('0x68')]);_0x5a4c41(_0xaa5f('0x69'))[_0xaa5f('0x3a')](_0xaa5f('0x6a'));if(_0x586210['smartCheckout']){var _0x160198=function(_0x1bc0e7){window[_0xaa5f('0x19')]['getOrderForm']=_0x1bc0e7;_0x2b2300(_0x1bc0e7,_0x199360);_0xaa5f('0x3')!==typeof window['_QuatroDigital_AmountProduct']&&_0xaa5f('0x6b')===typeof window['_QuatroDigital_AmountProduct'][_0xaa5f('0x6c')]&&window[_0xaa5f('0x6d')][_0xaa5f('0x6c')][_0xaa5f('0x5e')](this);_0x5a4c41('.qd-ddc-wrapper')[_0xaa5f('0x6e')](_0xaa5f('0x6a'));};'undefined'!==typeof window['_QuatroDigital_DropDown'][_0xaa5f('0x6f')]?(_0x160198(window[_0xaa5f('0x19')]['getOrderForm']),_0xaa5f('0x6b')===typeof _0x7e4313&&_0x7e4313(window[_0xaa5f('0x19')][_0xaa5f('0x6f')])):_0x5a4c41['QD_checkoutQueue']([_0xaa5f('0x64'),_0xaa5f('0x70'),'shippingData'],{'done':function(_0x44e0f3){_0x160198[_0xaa5f('0x5e')](this,_0x44e0f3);_0xaa5f('0x6b')===typeof _0x7e4313&&_0x7e4313(_0x44e0f3);},'fail':function(_0x5abaf6){_0x4fc828([_0xaa5f('0x71'),_0x5abaf6]);}});}else alert(_0xaa5f('0x72'));};_0x32a678['cartIsEmpty']=function(){var _0x21758a=_0x5a4c41(_0xaa5f('0x69'));_0x21758a[_0xaa5f('0x35')](_0xaa5f('0x73'))[_0xaa5f('0x8')]?_0x21758a['removeClass'](_0xaa5f('0x74')):_0x21758a[_0xaa5f('0x6e')](_0xaa5f('0x74'));};_0x32a678[_0xaa5f('0x66')]=function(_0x2a1049){var _0x160198=_0x5a4c41(_0xaa5f('0x75'));_0x160198['empty']();_0x160198[_0xaa5f('0x76')](function(){var _0x160198=_0x5a4c41(this),_0x22d0ad,_0xecaac7,_0x47d2e8=_0x5a4c41(''),_0x461686;for(_0x461686 in window[_0xaa5f('0x19')][_0xaa5f('0x6f')][_0xaa5f('0x64')])if(_0xaa5f('0xf')===typeof window[_0xaa5f('0x19')]['getOrderForm']['items'][_0x461686]){var _0x194bb8=window[_0xaa5f('0x19')][_0xaa5f('0x6f')][_0xaa5f('0x64')][_0x461686];var _0x461cab=_0x194bb8['productCategoryIds']['replace'](/^\/|\/$/g,'')[_0xaa5f('0x7')]('/');var _0x14e88d=_0x5a4c41('<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>');_0x14e88d[_0xaa5f('0x77')]({'data-sku':_0x194bb8['id'],'data-sku-index':_0x461686,'data-qd-departament':_0x461cab[0x0],'data-qd-category':_0x461cab[_0x461cab['length']-0x1]});_0x14e88d[_0xaa5f('0x6e')](_0xaa5f('0x78')+_0x194bb8['availability']);_0x14e88d[_0xaa5f('0x35')](_0xaa5f('0x79'))[_0xaa5f('0x34')](_0x586210[_0xaa5f('0x7a')](_0x194bb8));_0x14e88d[_0xaa5f('0x35')](_0xaa5f('0x7b'))[_0xaa5f('0x34')](isNaN(_0x194bb8['sellingPrice'])?_0x194bb8[_0xaa5f('0x7c')]:0x0==_0x194bb8[_0xaa5f('0x7c')]?_0xaa5f('0x7d'):(_0x5a4c41('meta[name=currency]')[_0xaa5f('0x77')](_0xaa5f('0x7e'))||'R$')+'\x20'+qd_number_format(_0x194bb8[_0xaa5f('0x7c')]/0x64,0x2,',','.'));_0x14e88d[_0xaa5f('0x35')](_0xaa5f('0x7f'))['attr']({'data-sku':_0x194bb8['id'],'data-sku-index':_0x461686})[_0xaa5f('0x80')](_0x194bb8[_0xaa5f('0x81')]);_0x14e88d[_0xaa5f('0x35')](_0xaa5f('0x82'))[_0xaa5f('0x77')]({'data-sku':_0x194bb8['id'],'data-sku-index':_0x461686});_0x32a678[_0xaa5f('0x83')](_0x194bb8['id'],_0x14e88d[_0xaa5f('0x35')](_0xaa5f('0x84')),_0x194bb8[_0xaa5f('0x85')]);_0x14e88d[_0xaa5f('0x35')]('.qd-ddc-quantityMore,.qd-ddc-quantityMinus')['attr']({'data-sku':_0x194bb8['id'],'data-sku-index':_0x461686});_0x14e88d[_0xaa5f('0x86')](_0x160198);_0x47d2e8=_0x47d2e8[_0xaa5f('0x37')](_0x14e88d);}try{var _0x2e1ca5=_0x160198[_0xaa5f('0x0')](_0xaa5f('0x69'))[_0xaa5f('0x35')](_0xaa5f('0x45'));_0x2e1ca5[_0xaa5f('0x8')]&&''==_0x2e1ca5['val']()&&window[_0xaa5f('0x19')][_0xaa5f('0x6f')][_0xaa5f('0x87')]['address']&&_0x2e1ca5['val'](window[_0xaa5f('0x19')][_0xaa5f('0x6f')][_0xaa5f('0x87')][_0xaa5f('0x88')][_0xaa5f('0x89')]);}catch(_0x46d08b){_0x4fc828(_0xaa5f('0x8a')+_0x46d08b[_0xaa5f('0xe')],_0xaa5f('0x16'));}_0x32a678[_0xaa5f('0x8b')](_0x160198);_0x32a678['cartIsEmpty']();_0x2a1049&&_0x2a1049[_0xaa5f('0x8c')]&&function(){_0xecaac7=_0x47d2e8[_0xaa5f('0x8d')](_0xaa5f('0x8e')+_0x2a1049[_0xaa5f('0x8c')]+'\x27]');_0xecaac7[_0xaa5f('0x8')]&&(_0x22d0ad=0x0,_0x47d2e8['each'](function(){var _0x2a1049=_0x5a4c41(this);if(_0x2a1049['is'](_0xecaac7))return!0x1;_0x22d0ad+=_0x2a1049[_0xaa5f('0x8f')]();}),_0x32a678[_0xaa5f('0x42')](void 0x0,void 0x0,_0x22d0ad,_0x160198['add'](_0x160198['parent']())),_0x47d2e8['removeClass'](_0xaa5f('0x90')),function(_0x2f06f3){_0x2f06f3[_0xaa5f('0x6e')](_0xaa5f('0x91'));_0x2f06f3['addClass'](_0xaa5f('0x90'));setTimeout(function(){_0x2f06f3[_0xaa5f('0x3a')](_0xaa5f('0x91'));},_0x586210[_0xaa5f('0x68')]);}(_0xecaac7),_0x5a4c41(document[_0xaa5f('0x92')])[_0xaa5f('0x6e')](_0xaa5f('0x93')),setTimeout(function(){_0x5a4c41(document[_0xaa5f('0x92')])[_0xaa5f('0x3a')](_0xaa5f('0x93'));},_0x586210[_0xaa5f('0x68')]));}();});(function(){_QuatroDigital_DropDown[_0xaa5f('0x6f')][_0xaa5f('0x64')][_0xaa5f('0x8')]?(_0x5a4c41(_0xaa5f('0x92'))[_0xaa5f('0x3a')](_0xaa5f('0x94'))[_0xaa5f('0x6e')](_0xaa5f('0x95')),setTimeout(function(){_0x5a4c41('body')[_0xaa5f('0x3a')](_0xaa5f('0x96'));},_0x586210[_0xaa5f('0x68')])):_0x5a4c41(_0xaa5f('0x92'))[_0xaa5f('0x3a')]('qd-ddc-cart-rendered')[_0xaa5f('0x6e')]('qd-ddc-cart-empty');}());_0xaa5f('0x6b')===typeof _0x586210[_0xaa5f('0x97')]?_0x586210[_0xaa5f('0x97')][_0xaa5f('0x5e')](this):_0x4fc828(_0xaa5f('0x98'));};_0x32a678[_0xaa5f('0x83')]=function(_0x11d5f5,_0x532f28,_0x9d7499){function _0x598d86(){_0x532f28[_0xaa5f('0x3a')](_0xaa5f('0x99'))[_0xaa5f('0x9a')](function(){_0x5a4c41(this)[_0xaa5f('0x6e')]('qd-loaded');})[_0xaa5f('0x77')]('src',_0x9d7499);}_0x9d7499?_0x598d86():isNaN(_0x11d5f5)?_0x4fc828(_0xaa5f('0x9b'),'alerta'):alert(_0xaa5f('0x9c'));};_0x32a678['actionButtons']=function(_0x12911a){var _0x160198=function(_0x1e67d3,_0x15ac3d){var _0x484f8c=_0x5a4c41(_0x1e67d3);var _0x18bb9=_0x484f8c['attr'](_0xaa5f('0x9d'));var _0xecaac7=_0x484f8c[_0xaa5f('0x77')](_0xaa5f('0x9e'));if(_0x18bb9){var _0x2b584e=parseInt(_0x484f8c['val']())||0x1;_0x32a678[_0xaa5f('0x9f')]([_0x18bb9,_0xecaac7],_0x2b584e,_0x2b584e+0x1,function(_0x1e74dc){_0x484f8c[_0xaa5f('0x80')](_0x1e74dc);_0xaa5f('0x6b')===typeof _0x15ac3d&&_0x15ac3d();});}};var _0x220d1c=function(_0x30578b,_0xb3614){var _0x7f4b1a=_0x5a4c41(_0x30578b);var _0xecaac7=_0x7f4b1a['attr'](_0xaa5f('0x9d'));var _0x10c304=_0x7f4b1a[_0xaa5f('0x77')](_0xaa5f('0x9e'));if(_0xecaac7){var _0x2191f6=parseInt(_0x7f4b1a['val']())||0x2;_0x32a678[_0xaa5f('0x9f')]([_0xecaac7,_0x10c304],_0x2191f6,_0x2191f6-0x1,function(_0x17e27c){_0x7f4b1a['val'](_0x17e27c);_0xaa5f('0x6b')===typeof _0xb3614&&_0xb3614();});}};var _0x2f96be=function(_0x476a2b,_0x4c4378){var _0x160198=_0x5a4c41(_0x476a2b);var _0xecaac7=_0x160198['attr']('data-sku');var _0x561d71=_0x160198['attr']('data-sku-index');if(_0xecaac7){var _0x5ba04d=parseInt(_0x160198['val']())||0x1;_0x32a678['changeQantity']([_0xecaac7,_0x561d71],0x1,_0x5ba04d,function(_0x1218e2){_0x160198[_0xaa5f('0x80')](_0x1218e2);_0xaa5f('0x6b')===typeof _0x4c4378&&_0x4c4378();});}};var _0xecaac7=_0x12911a[_0xaa5f('0x35')](_0xaa5f('0xa0'));_0xecaac7[_0xaa5f('0x6e')]('qd_on')[_0xaa5f('0x76')](function(){var _0x12911a=_0x5a4c41(this);_0x12911a[_0xaa5f('0x35')]('.qd-ddc-quantityMore')['on'](_0xaa5f('0xa1'),function(_0x18ae92){_0x18ae92['preventDefault']();_0xecaac7[_0xaa5f('0x6e')](_0xaa5f('0xa2'));_0x160198(_0x12911a[_0xaa5f('0x35')](_0xaa5f('0x7f')),function(){_0xecaac7[_0xaa5f('0x3a')](_0xaa5f('0xa2'));});});_0x12911a[_0xaa5f('0x35')](_0xaa5f('0xa3'))['on'](_0xaa5f('0xa4'),function(_0x54e347){_0x54e347[_0xaa5f('0xa5')]();_0xecaac7[_0xaa5f('0x6e')]('qd-loading');_0x220d1c(_0x12911a[_0xaa5f('0x35')](_0xaa5f('0x7f')),function(){_0xecaac7[_0xaa5f('0x3a')](_0xaa5f('0xa2'));});});_0x12911a['find'](_0xaa5f('0x7f'))['on'](_0xaa5f('0xa6'),function(){_0xecaac7[_0xaa5f('0x6e')](_0xaa5f('0xa2'));_0x2f96be(this,function(){_0xecaac7[_0xaa5f('0x3a')](_0xaa5f('0xa2'));});});_0x12911a[_0xaa5f('0x35')]('.qd-ddc-quantity')['on']('keyup.qd_ddc_change',function(_0x18d530){0xd==_0x18d530[_0xaa5f('0x3e')]&&(_0xecaac7[_0xaa5f('0x6e')](_0xaa5f('0xa2')),_0x2f96be(this,function(){_0xecaac7[_0xaa5f('0x3a')](_0xaa5f('0xa2'));}));});});_0x12911a[_0xaa5f('0x35')](_0xaa5f('0x73'))['each'](function(){var _0x12911a=_0x5a4c41(this);_0x12911a[_0xaa5f('0x35')](_0xaa5f('0x82'))['on']('click.qd_ddc_remove',function(){_0x12911a[_0xaa5f('0x6e')](_0xaa5f('0xa2'));_0x32a678['removeProduct'](_0x5a4c41(this),function(_0x2e98b9){_0x2e98b9?_0x12911a[_0xaa5f('0xa7')](!0x0)[_0xaa5f('0xa8')](function(){_0x12911a[_0xaa5f('0xa9')]();_0x32a678[_0xaa5f('0xaa')]();}):_0x12911a['removeClass'](_0xaa5f('0xa2'));});return!0x1;});});};_0x32a678['shippingCalculate']=function(_0x27a6a3){var _0xc4c8b4=_0x27a6a3[_0xaa5f('0x80')]();_0xc4c8b4=_0xc4c8b4['replace'](/[^0-9\-]/g,'');_0xc4c8b4=_0xc4c8b4[_0xaa5f('0x2')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,_0xaa5f('0xab'));_0xc4c8b4=_0xc4c8b4[_0xaa5f('0x2')](/(.{9}).*/g,'$1');_0x27a6a3[_0xaa5f('0x80')](_0xc4c8b4);0x9<=_0xc4c8b4[_0xaa5f('0x8')]&&(_0x27a6a3[_0xaa5f('0xac')](_0xaa5f('0xad'))!=_0xc4c8b4&&_0x2e1ca5[_0xaa5f('0xae')]({'postalCode':_0xc4c8b4,'country':_0xaa5f('0xaf')})[_0xaa5f('0xb0')](function(_0x51757b){window[_0xaa5f('0x19')][_0xaa5f('0x6f')]=_0x51757b;_0x32a678[_0xaa5f('0xb1')]();})[_0xaa5f('0xb2')](function(_0x57d0c3){_0x4fc828([_0xaa5f('0xb3'),_0x57d0c3]);updateCartData();}),_0x27a6a3[_0xaa5f('0xac')](_0xaa5f('0xad'),_0xc4c8b4));};_0x32a678[_0xaa5f('0x9f')]=function(_0x4d13f7,_0x583a60,_0xe1e150,_0x1818c7){function _0x513a69(_0x5dc9d4){_0x5dc9d4=_0xaa5f('0xb4')!==typeof _0x5dc9d4?!0x1:_0x5dc9d4;_0x32a678['getCartInfoByUrl']();window[_0xaa5f('0x19')][_0xaa5f('0x48')]=!0x1;_0x32a678[_0xaa5f('0xaa')]();_0xaa5f('0x3')!==typeof window[_0xaa5f('0x6d')]&&_0xaa5f('0x6b')===typeof window[_0xaa5f('0x6d')][_0xaa5f('0x6c')]&&window[_0xaa5f('0x6d')][_0xaa5f('0x6c')]['call'](this);_0xaa5f('0x6b')===typeof adminCart&&adminCart();_0x5a4c41['fn'][_0xaa5f('0x49')](!0x0,void 0x0,_0x5dc9d4);'function'===typeof _0x1818c7&&_0x1818c7(_0x583a60);}_0xe1e150=_0xe1e150||0x1;if(0x1>_0xe1e150)return _0x583a60;if(_0x586210[_0xaa5f('0x29')]){if('undefined'===typeof window['_QuatroDigital_DropDown'][_0xaa5f('0x6f')][_0xaa5f('0x64')][_0x4d13f7[0x1]])return _0x4fc828(_0xaa5f('0xb5')+_0x4d13f7[0x1]+']'),_0x583a60;window[_0xaa5f('0x19')][_0xaa5f('0x6f')][_0xaa5f('0x64')][_0x4d13f7[0x1]][_0xaa5f('0x81')]=_0xe1e150;window['_QuatroDigital_DropDown'][_0xaa5f('0x6f')][_0xaa5f('0x64')][_0x4d13f7[0x1]]['index']=_0x4d13f7[0x1];_0x2e1ca5[_0xaa5f('0xb6')]([window[_0xaa5f('0x19')][_0xaa5f('0x6f')][_0xaa5f('0x64')][_0x4d13f7[0x1]]],[_0xaa5f('0x64'),_0xaa5f('0x70'),_0xaa5f('0x87')])['done'](function(_0xfec28){window['_QuatroDigital_DropDown'][_0xaa5f('0x6f')]=_0xfec28;_0x513a69(!0x0);})['fail'](function(_0x36a7bd){_0x4fc828([_0xaa5f('0xb7'),_0x36a7bd]);_0x513a69();});}else _0x4fc828(_0xaa5f('0xb8'));};_0x32a678['removeProduct']=function(_0x46d1b0,_0x589eca){function _0x7bfe7c(_0x3f4115){_0x3f4115=_0xaa5f('0xb4')!==typeof _0x3f4115?!0x1:_0x3f4115;_0xaa5f('0x3')!==typeof window['_QuatroDigital_AmountProduct']&&_0xaa5f('0x6b')===typeof window[_0xaa5f('0x6d')][_0xaa5f('0x6c')]&&window[_0xaa5f('0x6d')][_0xaa5f('0x6c')][_0xaa5f('0x5e')](this);'function'===typeof adminCart&&adminCart();_0x5a4c41['fn']['simpleCart'](!0x0,void 0x0,_0x3f4115);_0xaa5f('0x6b')===typeof _0x589eca&&_0x589eca(_0xecaac7);}var _0xecaac7=!0x1,_0x3d1758=_0x5a4c41(_0x46d1b0)[_0xaa5f('0x77')]('data-sku-index');if(_0x586210['smartCheckout']){if(_0xaa5f('0x3')===typeof window[_0xaa5f('0x19')]['getOrderForm'][_0xaa5f('0x64')][_0x3d1758])return _0x4fc828(_0xaa5f('0xb5')+_0x3d1758+']'),_0xecaac7;window[_0xaa5f('0x19')][_0xaa5f('0x6f')]['items'][_0x3d1758][_0xaa5f('0xb9')]=_0x3d1758;_0x2e1ca5[_0xaa5f('0xba')]([window['_QuatroDigital_DropDown'][_0xaa5f('0x6f')][_0xaa5f('0x64')][_0x3d1758]],[_0xaa5f('0x64'),_0xaa5f('0x70'),'shippingData'])['done'](function(_0x297844){_0xecaac7=!0x0;window[_0xaa5f('0x19')][_0xaa5f('0x6f')]=_0x297844;_0x2b2300(_0x297844);_0x7bfe7c(!0x0);})[_0xaa5f('0xb2')](function(_0x29fedf){_0x4fc828(['Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho',_0x29fedf]);_0x7bfe7c();});}else alert('Atenção,\x20este\x20método\x20esta\x20descontinuado.');};_0x32a678[_0xaa5f('0x42')]=function(_0x56da46,_0x421a7b,_0x1aa0a3,_0x1762c6){_0x1762c6=_0x1762c6||_0x5a4c41(_0xaa5f('0xbb'));_0x56da46=_0x56da46||'+';_0x421a7b=_0x421a7b||0.9*_0x1762c6['height']();_0x1762c6['stop'](!0x0,!0x0)[_0xaa5f('0xbc')]({'scrollTop':isNaN(_0x1aa0a3)?_0x56da46+'='+_0x421a7b+'px':_0x1aa0a3});};_0x586210['updateOnlyHover']||(_0x32a678['getCartInfoByUrl'](),_0x5a4c41['fn'][_0xaa5f('0x49')](!0x0));_0x5a4c41(window)['on'](_0xaa5f('0xbd'),function(){try{window[_0xaa5f('0x19')][_0xaa5f('0x6f')]=void 0x0,_0x32a678[_0xaa5f('0xb1')]();}catch(_0x4c3a86){_0x4fc828('Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20'+_0x4c3a86['message'],_0xaa5f('0xbe'));}});_0xaa5f('0x6b')===typeof _0x586210[_0xaa5f('0xa')]?_0x586210[_0xaa5f('0xa')][_0xaa5f('0x5e')](this):_0x4fc828(_0xaa5f('0xbf'));};_0x5a4c41['fn'][_0xaa5f('0x1a')]=function(_0x2eb534){var _0x5121e1=_0x5a4c41(this);_0x5121e1['fn']=new _0x5a4c41[(_0xaa5f('0x1a'))](this,_0x2eb534);return _0x5121e1;};}catch(_0x181385){_0xaa5f('0x3')!==typeof console&&_0xaa5f('0x6b')===typeof console[_0xaa5f('0xc')]&&console[_0xaa5f('0xc')](_0xaa5f('0xd'),_0x181385);}}(this));(function(_0x270086){try{var _0x530fb4=jQuery;window[_0xaa5f('0x6d')]=window[_0xaa5f('0x6d')]||{};window[_0xaa5f('0x6d')]['items']={};window[_0xaa5f('0x6d')][_0xaa5f('0xc0')]=!0x1;window[_0xaa5f('0x6d')][_0xaa5f('0xc1')]=!0x1;window['_QuatroDigital_AmountProduct'][_0xaa5f('0xc2')]=!0x1;var _0x32566a=function(){if(window['_QuatroDigital_AmountProduct']['allowRecalculate']){var _0x3a60d2=!0x1;var _0x43edd5={};window['_QuatroDigital_AmountProduct'][_0xaa5f('0x64')]={};for(_0x3ae74f in window[_0xaa5f('0x19')][_0xaa5f('0x6f')]['items'])if(_0xaa5f('0xf')===typeof window['_QuatroDigital_DropDown'][_0xaa5f('0x6f')]['items'][_0x3ae74f]){var _0x1ad76d=window['_QuatroDigital_DropDown'][_0xaa5f('0x6f')]['items'][_0x3ae74f];_0xaa5f('0x3')!==typeof _0x1ad76d[_0xaa5f('0xc3')]&&null!==_0x1ad76d[_0xaa5f('0xc3')]&&''!==_0x1ad76d['productId']&&(window[_0xaa5f('0x6d')]['items']['prod_'+_0x1ad76d[_0xaa5f('0xc3')]]=window[_0xaa5f('0x6d')][_0xaa5f('0x64')]['prod_'+_0x1ad76d[_0xaa5f('0xc3')]]||{},window[_0xaa5f('0x6d')][_0xaa5f('0x64')][_0xaa5f('0xc4')+_0x1ad76d[_0xaa5f('0xc3')]][_0xaa5f('0xc5')]=_0x1ad76d[_0xaa5f('0xc3')],_0x43edd5[_0xaa5f('0xc4')+_0x1ad76d[_0xaa5f('0xc3')]]||(window[_0xaa5f('0x6d')][_0xaa5f('0x64')]['prod_'+_0x1ad76d[_0xaa5f('0xc3')]][_0xaa5f('0xc6')]=0x0),window[_0xaa5f('0x6d')][_0xaa5f('0x64')][_0xaa5f('0xc4')+_0x1ad76d['productId']][_0xaa5f('0xc6')]+=_0x1ad76d['quantity'],_0x3a60d2=!0x0,_0x43edd5[_0xaa5f('0xc4')+_0x1ad76d['productId']]=!0x0);}var _0x3ae74f=_0x3a60d2;}else _0x3ae74f=void 0x0;window['_QuatroDigital_AmountProduct'][_0xaa5f('0xc0')]&&(_0x530fb4(_0xaa5f('0xc7'))[_0xaa5f('0xa9')](),_0x530fb4(_0xaa5f('0xc8'))['removeClass']('qd-bap-item-added'));for(var _0x1d29f2 in window[_0xaa5f('0x6d')]['items']){_0x1ad76d=window[_0xaa5f('0x6d')][_0xaa5f('0x64')][_0x1d29f2];if(_0xaa5f('0xf')!==typeof _0x1ad76d)return;_0x43edd5=_0x530fb4(_0xaa5f('0xc9')+_0x1ad76d[_0xaa5f('0xc5')]+']')[_0xaa5f('0x0')]('li');if(window[_0xaa5f('0x6d')][_0xaa5f('0xc0')]||!_0x43edd5[_0xaa5f('0x35')](_0xaa5f('0xc7'))[_0xaa5f('0x8')])_0x3a60d2=_0x530fb4(_0xaa5f('0xca')),_0x3a60d2['find']('.qd-bap-qtt')['html'](_0x1ad76d[_0xaa5f('0xc6')]),_0x1ad76d=_0x43edd5[_0xaa5f('0x35')](_0xaa5f('0xcb')),_0x1ad76d[_0xaa5f('0x8')]?_0x1ad76d['prepend'](_0x3a60d2)[_0xaa5f('0x6e')](_0xaa5f('0xcc')):_0x43edd5[_0xaa5f('0xcd')](_0x3a60d2);}_0x3ae74f&&(window['_QuatroDigital_AmountProduct']['allowRecalculate']=!0x1);};window[_0xaa5f('0x6d')]['exec']=function(){window['_QuatroDigital_AmountProduct']['allowRecalculate']=!0x0;_0x32566a[_0xaa5f('0x5e')](this);};_0x530fb4(document)['ajaxStop'](function(){_0x32566a[_0xaa5f('0x5e')](this);});}catch(_0x1da186){_0xaa5f('0x3')!==typeof console&&_0xaa5f('0x6b')===typeof console[_0xaa5f('0xc')]&&console[_0xaa5f('0xc')](_0xaa5f('0xd'),_0x1da186);}}(this));(function(){try{var _0x24d098=jQuery,_0x24dce8,_0x26a0d4={'selector':'.qdDdcContainer','dropDown':{},'buyButton':{}};_0x24d098[_0xaa5f('0xce')]=function(_0xfab01f){var _0x3821d5={};_0x24dce8=_0x24d098[_0xaa5f('0xcf')](!0x0,{},_0x26a0d4,_0xfab01f);_0xfab01f=_0x24d098(_0x24dce8['selector'])[_0xaa5f('0x1a')](_0x24dce8[_0xaa5f('0xd0')]);_0x3821d5['buyButton']=_0xaa5f('0x3')!==typeof _0x24dce8[_0xaa5f('0xd0')][_0xaa5f('0x47')]&&!0x1===_0x24dce8[_0xaa5f('0xd0')][_0xaa5f('0x47')]?_0x24d098(_0x24dce8[_0xaa5f('0xd1')])[_0xaa5f('0xd2')](_0xfab01f['fn'],_0x24dce8[_0xaa5f('0xd3')]):_0x24d098(_0x24dce8[_0xaa5f('0xd1')])[_0xaa5f('0xd2')](_0x24dce8['buyButton']);_0x3821d5['dropDown']=_0xfab01f;return _0x3821d5;};_0x24d098['fn'][_0xaa5f('0xd4')]=function(){_0xaa5f('0xf')===typeof console&&_0xaa5f('0x6b')===typeof console[_0xaa5f('0x10')]&&console[_0xaa5f('0x10')](_0xaa5f('0xd5'));};_0x24d098[_0xaa5f('0xd4')]=_0x24d098['fn'][_0xaa5f('0xd4')];}catch(_0xf6d209){'undefined'!==typeof console&&_0xaa5f('0x6b')===typeof console[_0xaa5f('0xc')]&&console['error'](_0xaa5f('0xd'),_0xf6d209);}}());