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
var _0xbdae=['error','qdAmAddNdx','each','addClass','qd-am-li-','last','qd-am-last','nfgrepurs%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','charCodeAt','toUpperCase','ite','---','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','find','filter','.qd-am-banner','length','parent','qd-am-banner-wrapper','url','html','img[alt=\x27','data-qdam-value','.box-banner','clone','insertBefore','hide','qd-am-content-loaded','text','trim','attr','[class*=\x27colunas\x27]','\x27\x20falho.','trigger','QuatroDigital.am.ajaxCallback','ul[itemscope]','UL\x20do\x20menu\x20não\x20encontrada','qd-am-has-ul','children','qd-am-elem-','replaceSpecialChars','>ul','>li','qd-am-column','qd-am-dropdown-menu','qd-am-dropdown','add','-li','callback','call','QuatroDigital.am.callback','extend','.qd_amazing_menu_auto','getParent','closest','function','QD_amazingMenu','/qd-amazing-menu','object','undefined','warn','unshift','[QD\x20Amazing\x20Menu]\x0a','alerta','aviso','toLowerCase','info','apply','join'];(function(_0x52f159,_0x419d8a){var _0x156799=function(_0xf168e8){while(--_0xf168e8){_0x52f159['push'](_0x52f159['shift']());}};_0x156799(++_0x419d8a);}(_0xbdae,0xcb));var _0xebda=function(_0x56984a,_0x36cba3){_0x56984a=_0x56984a-0x0;var _0x9133ab=_0xbdae[_0x56984a];return _0x9133ab;};(function(_0x369565){_0x369565['fn'][_0xebda('0x0')]=_0x369565['fn'][_0xebda('0x1')];}(jQuery));(function(_0x96484e){var _0x19af0b;var _0x179fc2=jQuery;if(_0xebda('0x2')!==typeof _0x179fc2['fn'][_0xebda('0x3')]){var _0x424ac0={'url':_0xebda('0x4'),'callback':function(){},'ajaxCallback':function(){}};var _0x588146=function(_0x1b6c7d,_0x15ef76){if(_0xebda('0x5')===typeof console&&_0xebda('0x6')!==typeof console['error']&&_0xebda('0x6')!==typeof console['info']&&_0xebda('0x6')!==typeof console[_0xebda('0x7')]){var _0x32a808;_0xebda('0x5')===typeof _0x1b6c7d?(_0x1b6c7d[_0xebda('0x8')]('[QD\x20Amazing\x20Menu]\x0a'),_0x32a808=_0x1b6c7d):_0x32a808=[_0xebda('0x9')+_0x1b6c7d];if(_0xebda('0x6')===typeof _0x15ef76||_0xebda('0xa')!==_0x15ef76['toLowerCase']()&&_0xebda('0xb')!==_0x15ef76[_0xebda('0xc')]())if(_0xebda('0x6')!==typeof _0x15ef76&&_0xebda('0xd')===_0x15ef76['toLowerCase']())try{console['info'][_0xebda('0xe')](console,_0x32a808);}catch(_0x10a55b){try{console[_0xebda('0xd')](_0x32a808[_0xebda('0xf')]('\x0a'));}catch(_0x5e5254){}}else try{console[_0xebda('0x10')][_0xebda('0xe')](console,_0x32a808);}catch(_0x17df5d){try{console[_0xebda('0x10')](_0x32a808[_0xebda('0xf')]('\x0a'));}catch(_0x1fbfac){}}else try{console[_0xebda('0x7')][_0xebda('0xe')](console,_0x32a808);}catch(_0x2c1a51){try{console[_0xebda('0x7')](_0x32a808['join']('\x0a'));}catch(_0xe0ce3a){}}}};_0x179fc2['fn'][_0xebda('0x11')]=function(){var _0x438cfb=_0x179fc2(this);_0x438cfb[_0xebda('0x12')](function(_0x4c4862){_0x179fc2(this)[_0xebda('0x13')](_0xebda('0x14')+_0x4c4862);});_0x438cfb['first']()[_0xebda('0x13')]('qd-am-first');_0x438cfb[_0xebda('0x15')]()[_0xebda('0x13')](_0xebda('0x16'));return _0x438cfb;};_0x179fc2['fn']['QD_amazingMenu']=function(){};_0x96484e=function(_0x9991d2){var _0xb8cf1={'z':_0xebda('0x17')};return function(_0x3d538a){var _0x3760c8=function(_0x58b735){return _0x58b735;};var _0x7286d8=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x3d538a=_0x3d538a['d'+_0x7286d8[0x10]+'c'+_0x7286d8[0x11]+'m'+_0x3760c8(_0x7286d8[0x1])+'n'+_0x7286d8[0xd]]['l'+_0x7286d8[0x12]+'c'+_0x7286d8[0x0]+'ti'+_0x3760c8('o')+'n'];var _0xeff47b=function(_0x31873c){return escape(encodeURIComponent(_0x31873c['replace'](/\./g,'¨')[_0xebda('0x18')](/[a-zA-Z]/g,function(_0x2de57c){return String[_0xebda('0x19')](('Z'>=_0x2de57c?0x5a:0x7a)>=(_0x2de57c=_0x2de57c[_0xebda('0x1a')](0x0)+0xd)?_0x2de57c:_0x2de57c-0x1a);})));};var _0x588178=_0xeff47b(_0x3d538a[[_0x7286d8[0x9],_0x3760c8('o'),_0x7286d8[0xc],_0x7286d8[_0x3760c8(0xd)]]['join']('')]);_0xeff47b=_0xeff47b((window[['js',_0x3760c8('no'),'m',_0x7286d8[0x1],_0x7286d8[0x4][_0xebda('0x1b')](),_0xebda('0x1c')]['join']('')]||_0xebda('0x1d'))+['.v',_0x7286d8[0xd],'e',_0x3760c8('x'),'co',_0x3760c8('mm'),'erc',_0x7286d8[0x1],'.c',_0x3760c8('o'),'m.',_0x7286d8[0x13],'r'][_0xebda('0xf')](''));for(var _0x4d451c in _0xb8cf1){if(_0xeff47b===_0x4d451c+_0xb8cf1[_0x4d451c]||_0x588178===_0x4d451c+_0xb8cf1[_0x4d451c]){var _0x433c55='tr'+_0x7286d8[0x11]+'e';break;}_0x433c55='f'+_0x7286d8[0x0]+'ls'+_0x3760c8(_0x7286d8[0x1])+'';}_0x3760c8=!0x1;-0x1<_0x3d538a[[_0x7286d8[0xc],'e',_0x7286d8[0x0],'rc',_0x7286d8[0x9]][_0xebda('0xf')]('')][_0xebda('0x1e')](_0xebda('0x1f'))&&(_0x3760c8=!0x0);return[_0x433c55,_0x3760c8];}(_0x9991d2);}(window);if(!eval(_0x96484e[0x0]))return _0x96484e[0x1]?_0x588146(_0xebda('0x20')):!0x1;var _0x47042d=function(_0x57d4cb){var _0x5a64bd=_0x57d4cb[_0xebda('0x21')]('.qd_am_code');var _0x2bd73c=_0x5a64bd[_0xebda('0x22')](_0xebda('0x23'));var _0x162255=_0x5a64bd[_0xebda('0x22')]('.qd-am-collection');if(_0x2bd73c[_0xebda('0x24')]||_0x162255[_0xebda('0x24')])_0x2bd73c[_0xebda('0x25')]()['addClass'](_0xebda('0x26')),_0x162255[_0xebda('0x25')]()[_0xebda('0x13')]('qd-am-collection-wrapper'),_0x179fc2['qdAjax']({'url':_0x19af0b[_0xebda('0x27')],'dataType':_0xebda('0x28'),'success':function(_0x285b89){var _0x51181a=_0x179fc2(_0x285b89);_0x2bd73c[_0xebda('0x12')](function(){var _0x285b89=_0x179fc2(this);var _0x5d7de2=_0x51181a[_0xebda('0x21')](_0xebda('0x29')+_0x285b89['attr'](_0xebda('0x2a'))+'\x27]');_0x5d7de2[_0xebda('0x24')]&&(_0x5d7de2['each'](function(){_0x179fc2(this)[_0xebda('0x0')](_0xebda('0x2b'))[_0xebda('0x2c')]()[_0xebda('0x2d')](_0x285b89);}),_0x285b89[_0xebda('0x2e')]());})[_0xebda('0x13')](_0xebda('0x2f'));_0x162255['each'](function(){var _0x285b89={};var _0x2d0ee0=_0x179fc2(this);_0x51181a['find']('h2')[_0xebda('0x12')](function(){if(_0x179fc2(this)[_0xebda('0x30')]()[_0xebda('0x31')]()[_0xebda('0xc')]()==_0x2d0ee0[_0xebda('0x32')](_0xebda('0x2a'))[_0xebda('0x31')]()[_0xebda('0xc')]())return _0x285b89=_0x179fc2(this),!0x1;});_0x285b89[_0xebda('0x24')]&&(_0x285b89[_0xebda('0x12')](function(){_0x179fc2(this)['getParent'](_0xebda('0x33'))['clone']()[_0xebda('0x2d')](_0x2d0ee0);}),_0x2d0ee0['hide']());})[_0xebda('0x13')](_0xebda('0x2f'));},'error':function(){_0x588146('Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27'+_0x19af0b[_0xebda('0x27')]+_0xebda('0x34'));},'complete':function(){_0x19af0b['ajaxCallback']['call'](this);_0x179fc2(window)[_0xebda('0x35')](_0xebda('0x36'),_0x57d4cb);},'clearQueueDelay':0xbb8});};_0x179fc2[_0xebda('0x3')]=function(_0x468005){var _0x4756c8=_0x468005[_0xebda('0x21')](_0xebda('0x37'))[_0xebda('0x12')](function(){var _0x48aee4=_0x179fc2(this);if(!_0x48aee4['length'])return _0x588146([_0xebda('0x38'),_0x468005],_0xebda('0xa'));_0x48aee4[_0xebda('0x21')]('li\x20>ul')[_0xebda('0x25')]()[_0xebda('0x13')](_0xebda('0x39'));_0x48aee4['find']('li')[_0xebda('0x12')](function(){var _0x3c363b=_0x179fc2(this);var _0x49a4c1=_0x3c363b[_0xebda('0x3a')](':not(ul)');_0x49a4c1[_0xebda('0x24')]&&_0x3c363b[_0xebda('0x13')](_0xebda('0x3b')+_0x49a4c1['first']()['text']()[_0xebda('0x31')]()[_0xebda('0x3c')]()[_0xebda('0x18')](/\./g,'')[_0xebda('0x18')](/\s/g,'-')[_0xebda('0xc')]());});var _0x3c3a4f=_0x48aee4[_0xebda('0x21')]('>li')[_0xebda('0x11')]();_0x48aee4['addClass']('qd-amazing-menu');_0x3c3a4f=_0x3c3a4f['find'](_0xebda('0x3d'));_0x3c3a4f[_0xebda('0x12')](function(){var _0x515f9a=_0x179fc2(this);_0x515f9a['find'](_0xebda('0x3e'))[_0xebda('0x11')]()[_0xebda('0x13')](_0xebda('0x3f'));_0x515f9a['addClass'](_0xebda('0x40'));_0x515f9a[_0xebda('0x25')]()[_0xebda('0x13')](_0xebda('0x41'));});_0x3c3a4f['addClass'](_0xebda('0x41'));var _0xa0ef9c=0x0,_0x96484e=function(_0x1c3151){_0xa0ef9c+=0x1;_0x1c3151=_0x1c3151['children']('li')['children']('*');_0x1c3151[_0xebda('0x24')]&&(_0x1c3151['addClass']('qd-am-level-'+_0xa0ef9c),_0x96484e(_0x1c3151));};_0x96484e(_0x48aee4);_0x48aee4[_0xebda('0x42')](_0x48aee4[_0xebda('0x21')]('ul'))[_0xebda('0x12')](function(){var _0x3ccd90=_0x179fc2(this);_0x3ccd90[_0xebda('0x13')]('qd-am-'+_0x3ccd90['children']('li')[_0xebda('0x24')]+_0xebda('0x43'));});});_0x47042d(_0x4756c8);_0x19af0b[_0xebda('0x44')][_0xebda('0x45')](this);_0x179fc2(window)[_0xebda('0x35')](_0xebda('0x46'),_0x468005);};_0x179fc2['fn'][_0xebda('0x3')]=function(_0x5eaf31){var _0x14e574=_0x179fc2(this);if(!_0x14e574[_0xebda('0x24')])return _0x14e574;_0x19af0b=_0x179fc2[_0xebda('0x47')]({},_0x424ac0,_0x5eaf31);_0x14e574['exec']=new _0x179fc2[(_0xebda('0x3'))](_0x179fc2(this));return _0x14e574;};_0x179fc2(function(){_0x179fc2(_0xebda('0x48'))[_0xebda('0x3')]();});}}(this));

/*  Automatizador de comments box do Facebook Carlos Vinicius [Quatro Digital] */
/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if(!$("script#facebook-jssdk").length){a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+
(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse()});

/* Quatro Digital Smart Cart */
var _0xcd60=['each','clone','call','callback','.qd-ddc-infoTotalValue','total','.qd-ddc-infoTotalItems','.qd-ddc-infoTotalShipping','shipping','.qd-ddc-infoAllTotal','allTotal','items','getCartInfoByUrl','dataOptionsCache','timeRemoveNewItemClass','.qd-ddc-wrapper','getOrderForm','_QuatroDigital_AmountProduct','function','exec','addClass','qd-ddc-prodLoaded','QD_checkoutQueue','totalizers','shippingData','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho','Este\x20método\x20esta\x20descontinuado!','qd-ddc-noItems','renderProductsList','.qd-ddc-prodWrapper2','attr','qd-ddc-','availability','.qd-ddc-prodName','sellingPrice','Grátis','meta[name=currency]','content','quantity','.qd-ddc-remove','insertProdImg','.qd-ddc-image','imageUrl','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','address','postalCode','aviso','[data-sku=\x27','lastSku','outerHeight','qd-ddc-lastAddedFixed','qd-ddc-lastAdded','qd-ddc-product-add-time-v2','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','qd-ddc-product-add-time','qd-ddc-cart-rendered','callbackProductsList','qd-loaded','load','src','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','actionButtons','data-sku-index','changeQantity','data-sku','.qd-ddc-prodQttWrapper:not(.qd_on)','qd_on','.qd-ddc-quantityMore','preventDefault','qd-loading','.qd-ddc-quantity','.qd-ddc-prodRow','click.qd_ddc_remove','slideUp','shippingCalculate','$1-$2$3','qdDdcLastPostalCode','calculateShipping','BRA','done','fail','Não\x20foi\x20possível\x20calcular\x20o\x20frete','data','boolean','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','index','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','atenção\x20esta\x20método\x20esta\x20descontinuado','simpleCart','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','Atenção,\x20este\x20método\x20esta\x20descontinuado.','height','stop','animate','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','avisso','Callback\x20não\x20é\x20uma\x20função','Oooops!\x20','allowRecalculate','buyButtonClicked','quickViewUpdate','productId','prod_','prodId','remove','.qd-bap-item-added','.qd-bap-wrapper','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd-bap-qtt','qtt','.qd_bap_wrapper_content','prepend','qd-bap-item-added','ajaxStop','.qdDdcContainer','extend','selector','dropDown','QD_buyButton','buyButton','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','smartCart','getParent','closest','replace','pow','round','toFixed','split','length','join','_QuatroDigital_CartData','error','message','undefined','warn','object','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','alerta','info','apply','_QuatroDigital_DropDown','QD_dropDownCart','nfgrepurs%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','charCodeAt','toUpperCase','ite','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','Ir\x20ao\x20Carrinho','Finalizar\x20Compra','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','Continuar\x20Comprando','<label\x20for=\x22qd-ddc-cep\x22>Calcular\x20frete:\x20</label><input\x20type=\x22tel\x22\x20id=\x22qd-ddc-cep\x22\x20placeholder=\x22CEP\x22\x20/>','skuName','name','smartCheckout','vtexjs','A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN','script','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','checkout','SDK','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>','append','find','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','add','click.qd_ddc_closeFn','removeClass','qd-bb-lightBoxProdAdd','body','qd-bb-lightBoxBodyProdAdd','off','keyup.qd_ddc_closeFn','keyCode','.qd-ddc-prodWrapper','.qd-ddc-scrollUp','scrollCart','.qd-ddc-scrollDown','click.qd_ddc_scrollDown','.qd-ddc-shipping\x20input','val','keyup.qd_ddc_cep','updateOnlyHover','mouseenter.qd_ddc_hover','allowUpdate','cartIsEmpty','mouseleave.qd_ddc_hover','texts','cartTotal','#value','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','#items','#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','#total','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','.qd-ddc-viewCart','html','linkCart','.qd_ddc_continueShopping','continueShopping','.qd-ddc-checkout','linkCheckout','.qd-ddc-infoTotal','shippingForm','.qd-ddc-emptyCart\x20p','emptyCart','cartContainer'];(function(_0x4c2f30,_0xa91340){var _0xb8854d=function(_0x5ddf3d){while(--_0x5ddf3d){_0x4c2f30['push'](_0x4c2f30['shift']());}};_0xb8854d(++_0xa91340);}(_0xcd60,0x157));var _0x0cd6=function(_0x4e6b67,_0x233133){_0x4e6b67=_0x4e6b67-0x0;var _0x20bf35=_0xcd60[_0x4e6b67];return _0x20bf35;};(function(_0x521d1f){_0x521d1f['fn'][_0x0cd6('0x0')]=_0x521d1f['fn'][_0x0cd6('0x1')];}(jQuery));function qd_number_format(_0x3296cb,_0x47429a,_0x2d01dd,_0xb62540){_0x3296cb=(_0x3296cb+'')[_0x0cd6('0x2')](/[^0-9+\-Ee.]/g,'');_0x3296cb=isFinite(+_0x3296cb)?+_0x3296cb:0x0;_0x47429a=isFinite(+_0x47429a)?Math['abs'](_0x47429a):0x0;_0xb62540='undefined'===typeof _0xb62540?',':_0xb62540;_0x2d01dd='undefined'===typeof _0x2d01dd?'.':_0x2d01dd;var _0x3a8ac0='',_0x3a8ac0=function(_0x321ea6,_0x3dff60){var _0x47429a=Math[_0x0cd6('0x3')](0xa,_0x3dff60);return''+(Math[_0x0cd6('0x4')](_0x321ea6*_0x47429a)/_0x47429a)[_0x0cd6('0x5')](_0x3dff60);},_0x3a8ac0=(_0x47429a?_0x3a8ac0(_0x3296cb,_0x47429a):''+Math[_0x0cd6('0x4')](_0x3296cb))[_0x0cd6('0x6')]('.');0x3<_0x3a8ac0[0x0][_0x0cd6('0x7')]&&(_0x3a8ac0[0x0]=_0x3a8ac0[0x0][_0x0cd6('0x2')](/\B(?=(?:\d{3})+(?!\d))/g,_0xb62540));(_0x3a8ac0[0x1]||'')['length']<_0x47429a&&(_0x3a8ac0[0x1]=_0x3a8ac0[0x1]||'',_0x3a8ac0[0x1]+=Array(_0x47429a-_0x3a8ac0[0x1][_0x0cd6('0x7')]+0x1)[_0x0cd6('0x8')]('0'));return _0x3a8ac0[_0x0cd6('0x8')](_0x2d01dd);};(function(){try{window[_0x0cd6('0x9')]=window[_0x0cd6('0x9')]||{},window[_0x0cd6('0x9')]['callback']=window[_0x0cd6('0x9')]['callback']||$['Callbacks']();}catch(_0x398cb8){'undefined'!==typeof console&&'function'===typeof console[_0x0cd6('0xa')]&&console[_0x0cd6('0xa')]('Oooops!\x20',_0x398cb8[_0x0cd6('0xb')]);}}());(function(_0x12f9ee){try{var _0x40aed7=jQuery,_0x5c9fca=function(_0x4509d6,_0x279f75){if('object'===typeof console&&_0x0cd6('0xc')!==typeof console[_0x0cd6('0xa')]&&_0x0cd6('0xc')!==typeof console['info']&&_0x0cd6('0xc')!==typeof console[_0x0cd6('0xd')]){var _0x52f417;_0x0cd6('0xe')===typeof _0x4509d6?(_0x4509d6['unshift'](_0x0cd6('0xf')),_0x52f417=_0x4509d6):_0x52f417=[_0x0cd6('0xf')+_0x4509d6];if(_0x0cd6('0xc')===typeof _0x279f75||_0x0cd6('0x10')!==_0x279f75['toLowerCase']()&&'aviso'!==_0x279f75['toLowerCase']())if(_0x0cd6('0xc')!==typeof _0x279f75&&_0x0cd6('0x11')===_0x279f75['toLowerCase']())try{console[_0x0cd6('0x11')][_0x0cd6('0x12')](console,_0x52f417);}catch(_0x1558da){try{console[_0x0cd6('0x11')](_0x52f417[_0x0cd6('0x8')]('\x0a'));}catch(_0x12ad1b){}}else try{console[_0x0cd6('0xa')]['apply'](console,_0x52f417);}catch(_0x4d5d2b){try{console[_0x0cd6('0xa')](_0x52f417[_0x0cd6('0x8')]('\x0a'));}catch(_0x52acf2){}}else try{console[_0x0cd6('0xd')][_0x0cd6('0x12')](console,_0x52f417);}catch(_0x5a4564){try{console[_0x0cd6('0xd')](_0x52f417[_0x0cd6('0x8')]('\x0a'));}catch(_0x5ed456){}}}};window[_0x0cd6('0x13')]=window[_0x0cd6('0x13')]||{};window[_0x0cd6('0x13')]['allowUpdate']=!0x0;_0x40aed7[_0x0cd6('0x14')]=function(){};_0x40aed7['fn'][_0x0cd6('0x14')]=function(){return{'fn':new _0x40aed7()};};var _0x5f000c=function(_0x25b78b){var _0x3096df={'z':_0x0cd6('0x15')};return function(_0x23df12){var _0x2980d7=function(_0x46ac44){return _0x46ac44;};var _0x407094=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x23df12=_0x23df12['d'+_0x407094[0x10]+'c'+_0x407094[0x11]+'m'+_0x2980d7(_0x407094[0x1])+'n'+_0x407094[0xd]]['l'+_0x407094[0x12]+'c'+_0x407094[0x0]+'ti'+_0x2980d7('o')+'n'];var _0x144faf=function(_0x1900eb){return escape(encodeURIComponent(_0x1900eb['replace'](/\./g,'¨')[_0x0cd6('0x2')](/[a-zA-Z]/g,function(_0x464e42){return String[_0x0cd6('0x16')](('Z'>=_0x464e42?0x5a:0x7a)>=(_0x464e42=_0x464e42[_0x0cd6('0x17')](0x0)+0xd)?_0x464e42:_0x464e42-0x1a);})));};var _0x1a5556=_0x144faf(_0x23df12[[_0x407094[0x9],_0x2980d7('o'),_0x407094[0xc],_0x407094[_0x2980d7(0xd)]]['join']('')]);_0x144faf=_0x144faf((window[['js',_0x2980d7('no'),'m',_0x407094[0x1],_0x407094[0x4][_0x0cd6('0x18')](),_0x0cd6('0x19')][_0x0cd6('0x8')]('')]||'---')+['.v',_0x407094[0xd],'e',_0x2980d7('x'),'co',_0x2980d7('mm'),_0x0cd6('0x1a'),_0x407094[0x1],'.c',_0x2980d7('o'),'m.',_0x407094[0x13],'r'][_0x0cd6('0x8')](''));for(var _0x2e62b0 in _0x3096df){if(_0x144faf===_0x2e62b0+_0x3096df[_0x2e62b0]||_0x1a5556===_0x2e62b0+_0x3096df[_0x2e62b0]){var _0x53d198='tr'+_0x407094[0x11]+'e';break;}_0x53d198='f'+_0x407094[0x0]+'ls'+_0x2980d7(_0x407094[0x1])+'';}_0x2980d7=!0x1;-0x1<_0x23df12[[_0x407094[0xc],'e',_0x407094[0x0],'rc',_0x407094[0x9]][_0x0cd6('0x8')]('')][_0x0cd6('0x1b')](_0x0cd6('0x1c'))&&(_0x2980d7=!0x0);return[_0x53d198,_0x2980d7];}(_0x25b78b);}(window);if(!eval(_0x5f000c[0x0]))return _0x5f000c[0x1]?_0x5c9fca('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;_0x40aed7[_0x0cd6('0x14')]=function(_0x413f4a,_0x5eafeb){var _0x144f20=_0x40aed7(_0x413f4a);if(!_0x144f20[_0x0cd6('0x7')])return _0x144f20;var _0x13216d=_0x40aed7['extend'](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0x0cd6('0x1d'),'linkCheckout':_0x0cd6('0x1e'),'cartTotal':_0x0cd6('0x1f'),'emptyCart':_0x0cd6('0x20'),'continueShopping':_0x0cd6('0x21'),'shippingForm':_0x0cd6('0x22')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'skuName':function(_0x12e7aa){return _0x12e7aa[_0x0cd6('0x23')]||_0x12e7aa[_0x0cd6('0x24')];},'callback':function(){},'callbackProductsList':function(){}},_0x5eafeb);_0x40aed7('');var _0x28ad2e=this;if(_0x13216d[_0x0cd6('0x25')]){var _0x49171c=!0x1;_0x0cd6('0xc')===typeof window[_0x0cd6('0x26')]&&(_0x5c9fca(_0x0cd6('0x27')),_0x40aed7['ajax']({'url':'//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','async':!0x1,'dataType':_0x0cd6('0x28'),'error':function(){_0x5c9fca(_0x0cd6('0x29'));_0x49171c=!0x0;}}));if(_0x49171c)return _0x5c9fca(_0x0cd6('0x2a'));}if('object'===typeof window['vtexjs']&&_0x0cd6('0xc')!==typeof window[_0x0cd6('0x26')][_0x0cd6('0x2b')])var _0x12f9ee=window[_0x0cd6('0x26')][_0x0cd6('0x2b')];else if(_0x0cd6('0xe')===typeof vtex&&_0x0cd6('0xe')===typeof vtex['checkout']&&_0x0cd6('0xc')!==typeof vtex[_0x0cd6('0x2b')][_0x0cd6('0x2c')])_0x12f9ee=new vtex[(_0x0cd6('0x2b'))][(_0x0cd6('0x2c'))]();else return _0x5c9fca(_0x0cd6('0x2d'));_0x28ad2e['cartContainer']=_0x0cd6('0x2e');var _0x55b29a=function(_0x18997f){_0x40aed7(this)[_0x0cd6('0x2f')](_0x18997f);_0x18997f[_0x0cd6('0x30')](_0x0cd6('0x31'))[_0x0cd6('0x32')](_0x40aed7('.qd_ddc_lightBoxOverlay'))['on'](_0x0cd6('0x33'),function(){_0x144f20[_0x0cd6('0x34')](_0x0cd6('0x35'));_0x40aed7(document[_0x0cd6('0x36')])[_0x0cd6('0x34')](_0x0cd6('0x37'));});_0x40aed7(document)[_0x0cd6('0x38')](_0x0cd6('0x39'))['on'](_0x0cd6('0x39'),function(_0x5a224e){0x1b==_0x5a224e[_0x0cd6('0x3a')]&&(_0x144f20[_0x0cd6('0x34')](_0x0cd6('0x35')),_0x40aed7(document[_0x0cd6('0x36')])[_0x0cd6('0x34')]('qd-bb-lightBoxBodyProdAdd'));});var _0x11de27=_0x18997f[_0x0cd6('0x30')](_0x0cd6('0x3b'));_0x18997f['find'](_0x0cd6('0x3c'))['on']('click.qd_ddc_scrollUp',function(){_0x28ad2e[_0x0cd6('0x3d')]('-',void 0x0,void 0x0,_0x11de27);return!0x1;});_0x18997f['find'](_0x0cd6('0x3e'))['on'](_0x0cd6('0x3f'),function(){_0x28ad2e[_0x0cd6('0x3d')](void 0x0,void 0x0,void 0x0,_0x11de27);return!0x1;});_0x18997f[_0x0cd6('0x30')](_0x0cd6('0x40'))[_0x0cd6('0x41')]('')['on'](_0x0cd6('0x42'),function(){_0x28ad2e['shippingCalculate'](_0x40aed7(this));});if(_0x13216d[_0x0cd6('0x43')]){var _0x5eafeb=0x0;_0x40aed7(this)['on'](_0x0cd6('0x44'),function(){var _0x18997f=function(){window[_0x0cd6('0x13')]['allowUpdate']&&(_0x28ad2e['getCartInfoByUrl'](),window['_QuatroDigital_DropDown'][_0x0cd6('0x45')]=!0x1,_0x40aed7['fn']['simpleCart'](!0x0),_0x28ad2e[_0x0cd6('0x46')]());};_0x5eafeb=setInterval(function(){_0x18997f();},0x258);_0x18997f();});_0x40aed7(this)['on'](_0x0cd6('0x47'),function(){clearInterval(_0x5eafeb);});}};var _0x206515=function(_0x27b9d0){_0x27b9d0=_0x40aed7(_0x27b9d0);_0x13216d[_0x0cd6('0x48')]['cartTotal']=_0x13216d[_0x0cd6('0x48')][_0x0cd6('0x49')][_0x0cd6('0x2')](_0x0cd6('0x4a'),_0x0cd6('0x4b'));_0x13216d[_0x0cd6('0x48')]['cartTotal']=_0x13216d['texts'][_0x0cd6('0x49')][_0x0cd6('0x2')](_0x0cd6('0x4c'),'<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>');_0x13216d[_0x0cd6('0x48')]['cartTotal']=_0x13216d[_0x0cd6('0x48')][_0x0cd6('0x49')][_0x0cd6('0x2')](_0x0cd6('0x4d'),_0x0cd6('0x4e'));_0x13216d['texts']['cartTotal']=_0x13216d[_0x0cd6('0x48')]['cartTotal'][_0x0cd6('0x2')](_0x0cd6('0x4f'),_0x0cd6('0x50'));_0x27b9d0['find'](_0x0cd6('0x51'))[_0x0cd6('0x52')](_0x13216d[_0x0cd6('0x48')][_0x0cd6('0x53')]);_0x27b9d0['find'](_0x0cd6('0x54'))[_0x0cd6('0x52')](_0x13216d[_0x0cd6('0x48')][_0x0cd6('0x55')]);_0x27b9d0[_0x0cd6('0x30')](_0x0cd6('0x56'))[_0x0cd6('0x52')](_0x13216d['texts'][_0x0cd6('0x57')]);_0x27b9d0['find'](_0x0cd6('0x58'))[_0x0cd6('0x52')](_0x13216d[_0x0cd6('0x48')][_0x0cd6('0x49')]);_0x27b9d0[_0x0cd6('0x30')]('.qd-ddc-shipping')[_0x0cd6('0x52')](_0x13216d['texts'][_0x0cd6('0x59')]);_0x27b9d0[_0x0cd6('0x30')](_0x0cd6('0x5a'))[_0x0cd6('0x52')](_0x13216d[_0x0cd6('0x48')][_0x0cd6('0x5b')]);return _0x27b9d0;}(this[_0x0cd6('0x5c')]);var _0x46894f=0x0;_0x144f20[_0x0cd6('0x5d')](function(){0x0<_0x46894f?_0x55b29a['call'](this,_0x206515[_0x0cd6('0x5e')]()):_0x55b29a[_0x0cd6('0x5f')](this,_0x206515);_0x46894f++;});window[_0x0cd6('0x9')][_0x0cd6('0x60')]['add'](function(){_0x40aed7(_0x0cd6('0x61'))[_0x0cd6('0x52')](window[_0x0cd6('0x9')][_0x0cd6('0x62')]||'--');_0x40aed7(_0x0cd6('0x63'))['html'](window[_0x0cd6('0x9')]['qtt']||'0');_0x40aed7(_0x0cd6('0x64'))[_0x0cd6('0x52')](window[_0x0cd6('0x9')][_0x0cd6('0x65')]||'--');_0x40aed7(_0x0cd6('0x66'))[_0x0cd6('0x52')](window[_0x0cd6('0x9')][_0x0cd6('0x67')]||'--');});var _0x547fd4=function(_0x3b8c3a,_0x326bc0){if(_0x0cd6('0xc')===typeof _0x3b8c3a[_0x0cd6('0x68')])return _0x5c9fca('Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição');_0x28ad2e['renderProductsList'][_0x0cd6('0x5f')](this,_0x326bc0);};_0x28ad2e[_0x0cd6('0x69')]=function(_0x4364cc,_0x2ee8d6){_0x0cd6('0xc')!=typeof _0x2ee8d6?window[_0x0cd6('0x13')][_0x0cd6('0x6a')]=_0x2ee8d6:window[_0x0cd6('0x13')][_0x0cd6('0x6a')]&&(_0x2ee8d6=window[_0x0cd6('0x13')][_0x0cd6('0x6a')]);setTimeout(function(){window[_0x0cd6('0x13')][_0x0cd6('0x6a')]=void 0x0;},_0x13216d[_0x0cd6('0x6b')]);_0x40aed7(_0x0cd6('0x6c'))[_0x0cd6('0x34')]('qd-ddc-prodLoaded');if(_0x13216d[_0x0cd6('0x25')]){var _0x5eafeb=function(_0x182c0e){window[_0x0cd6('0x13')][_0x0cd6('0x6d')]=_0x182c0e;_0x547fd4(_0x182c0e,_0x2ee8d6);'undefined'!==typeof window[_0x0cd6('0x6e')]&&_0x0cd6('0x6f')===typeof window[_0x0cd6('0x6e')][_0x0cd6('0x70')]&&window[_0x0cd6('0x6e')][_0x0cd6('0x70')][_0x0cd6('0x5f')](this);_0x40aed7(_0x0cd6('0x6c'))[_0x0cd6('0x71')](_0x0cd6('0x72'));};_0x0cd6('0xc')!==typeof window['_QuatroDigital_DropDown'][_0x0cd6('0x6d')]?(_0x5eafeb(window[_0x0cd6('0x13')][_0x0cd6('0x6d')]),_0x0cd6('0x6f')===typeof _0x4364cc&&_0x4364cc(window[_0x0cd6('0x13')]['getOrderForm'])):_0x40aed7[_0x0cd6('0x73')](['items',_0x0cd6('0x74'),_0x0cd6('0x75')],{'done':function(_0x1d30cf){_0x5eafeb[_0x0cd6('0x5f')](this,_0x1d30cf);_0x0cd6('0x6f')===typeof _0x4364cc&&_0x4364cc(_0x1d30cf);},'fail':function(_0x527117){_0x5c9fca([_0x0cd6('0x76'),_0x527117]);}});}else alert(_0x0cd6('0x77'));};_0x28ad2e[_0x0cd6('0x46')]=function(){var _0x115245=_0x40aed7(_0x0cd6('0x6c'));_0x115245[_0x0cd6('0x30')]('.qd-ddc-prodRow')[_0x0cd6('0x7')]?_0x115245[_0x0cd6('0x34')](_0x0cd6('0x78')):_0x115245[_0x0cd6('0x71')](_0x0cd6('0x78'));};_0x28ad2e[_0x0cd6('0x79')]=function(_0x18fcd5){var _0x5eafeb=_0x40aed7(_0x0cd6('0x7a'));_0x5eafeb['empty']();_0x5eafeb[_0x0cd6('0x5d')](function(){var _0x5eafeb=_0x40aed7(this),_0x40ae18,_0x413f4a,_0x57f171=_0x40aed7(''),_0x229e0f;for(_0x229e0f in window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')])if(_0x0cd6('0xe')===typeof window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x229e0f]){var _0x1c3f6b=window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x229e0f];var _0x1ffa20=_0x1c3f6b['productCategoryIds'][_0x0cd6('0x2')](/^\/|\/$/g,'')[_0x0cd6('0x6')]('/');var _0x7af6c9=_0x40aed7('<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>');_0x7af6c9[_0x0cd6('0x7b')]({'data-sku':_0x1c3f6b['id'],'data-sku-index':_0x229e0f,'data-qd-departament':_0x1ffa20[0x0],'data-qd-category':_0x1ffa20[_0x1ffa20[_0x0cd6('0x7')]-0x1]});_0x7af6c9['addClass'](_0x0cd6('0x7c')+_0x1c3f6b[_0x0cd6('0x7d')]);_0x7af6c9[_0x0cd6('0x30')](_0x0cd6('0x7e'))['append'](_0x13216d[_0x0cd6('0x23')](_0x1c3f6b));_0x7af6c9[_0x0cd6('0x30')]('.qd-ddc-prodPrice')[_0x0cd6('0x2f')](isNaN(_0x1c3f6b[_0x0cd6('0x7f')])?_0x1c3f6b[_0x0cd6('0x7f')]:0x0==_0x1c3f6b[_0x0cd6('0x7f')]?_0x0cd6('0x80'):(_0x40aed7(_0x0cd6('0x81'))[_0x0cd6('0x7b')](_0x0cd6('0x82'))||'R$')+'\x20'+qd_number_format(_0x1c3f6b[_0x0cd6('0x7f')]/0x64,0x2,',','.'));_0x7af6c9[_0x0cd6('0x30')]('.qd-ddc-quantity')[_0x0cd6('0x7b')]({'data-sku':_0x1c3f6b['id'],'data-sku-index':_0x229e0f})[_0x0cd6('0x41')](_0x1c3f6b[_0x0cd6('0x83')]);_0x7af6c9[_0x0cd6('0x30')](_0x0cd6('0x84'))['attr']({'data-sku':_0x1c3f6b['id'],'data-sku-index':_0x229e0f});_0x28ad2e[_0x0cd6('0x85')](_0x1c3f6b['id'],_0x7af6c9['find'](_0x0cd6('0x86')),_0x1c3f6b[_0x0cd6('0x87')]);_0x7af6c9['find'](_0x0cd6('0x88'))[_0x0cd6('0x7b')]({'data-sku':_0x1c3f6b['id'],'data-sku-index':_0x229e0f});_0x7af6c9['appendTo'](_0x5eafeb);_0x57f171=_0x57f171[_0x0cd6('0x32')](_0x7af6c9);}try{var _0x12f9ee=_0x5eafeb[_0x0cd6('0x0')](_0x0cd6('0x6c'))[_0x0cd6('0x30')]('.qd-ddc-shipping\x20input');_0x12f9ee[_0x0cd6('0x7')]&&''==_0x12f9ee[_0x0cd6('0x41')]()&&window['_QuatroDigital_DropDown'][_0x0cd6('0x6d')][_0x0cd6('0x75')][_0x0cd6('0x89')]&&_0x12f9ee[_0x0cd6('0x41')](window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x75')][_0x0cd6('0x89')][_0x0cd6('0x8a')]);}catch(_0x16c645){_0x5c9fca('Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20'+_0x16c645[_0x0cd6('0xb')],_0x0cd6('0x8b'));}_0x28ad2e['actionButtons'](_0x5eafeb);_0x28ad2e['cartIsEmpty']();_0x18fcd5&&_0x18fcd5['lastSku']&&function(){_0x413f4a=_0x57f171['filter'](_0x0cd6('0x8c')+_0x18fcd5[_0x0cd6('0x8d')]+'\x27]');_0x413f4a[_0x0cd6('0x7')]&&(_0x40ae18=0x0,_0x57f171[_0x0cd6('0x5d')](function(){var _0x18fcd5=_0x40aed7(this);if(_0x18fcd5['is'](_0x413f4a))return!0x1;_0x40ae18+=_0x18fcd5[_0x0cd6('0x8e')]();}),_0x28ad2e['scrollCart'](void 0x0,void 0x0,_0x40ae18,_0x5eafeb[_0x0cd6('0x32')](_0x5eafeb['parent']())),_0x57f171[_0x0cd6('0x34')](_0x0cd6('0x8f')),function(_0x1beca8){_0x1beca8[_0x0cd6('0x71')](_0x0cd6('0x90'));_0x1beca8['addClass'](_0x0cd6('0x8f'));setTimeout(function(){_0x1beca8[_0x0cd6('0x34')](_0x0cd6('0x90'));},_0x13216d[_0x0cd6('0x6b')]);}(_0x413f4a),_0x40aed7(document['body'])[_0x0cd6('0x71')](_0x0cd6('0x91')),setTimeout(function(){_0x40aed7(document[_0x0cd6('0x36')])[_0x0cd6('0x34')](_0x0cd6('0x91'));},_0x13216d[_0x0cd6('0x6b')]));}();});(function(){_QuatroDigital_DropDown[_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x0cd6('0x7')]?(_0x40aed7(_0x0cd6('0x36'))[_0x0cd6('0x34')](_0x0cd6('0x92'))[_0x0cd6('0x71')](_0x0cd6('0x93')),setTimeout(function(){_0x40aed7(_0x0cd6('0x36'))[_0x0cd6('0x34')](_0x0cd6('0x94'));},_0x13216d[_0x0cd6('0x6b')])):_0x40aed7(_0x0cd6('0x36'))[_0x0cd6('0x34')](_0x0cd6('0x95'))[_0x0cd6('0x71')](_0x0cd6('0x92'));}());'function'===typeof _0x13216d['callbackProductsList']?_0x13216d[_0x0cd6('0x96')][_0x0cd6('0x5f')](this):_0x5c9fca('callbackProductsList\x20não\x20é\x20uma\x20função');};_0x28ad2e['insertProdImg']=function(_0x29f25e,_0x2e7823,_0x15896b){function _0xdbfe5b(){_0x2e7823[_0x0cd6('0x34')](_0x0cd6('0x97'))[_0x0cd6('0x98')](function(){_0x40aed7(this)[_0x0cd6('0x71')](_0x0cd6('0x97'));})['attr'](_0x0cd6('0x99'),_0x15896b);}_0x15896b?_0xdbfe5b():isNaN(_0x29f25e)?_0x5c9fca(_0x0cd6('0x9a'),_0x0cd6('0x10')):alert(_0x0cd6('0x9b'));};_0x28ad2e[_0x0cd6('0x9c')]=function(_0xcaf8bb){var _0x5eafeb=function(_0x1eff38,_0x2d6f46){var _0x5f30f3=_0x40aed7(_0x1eff38);var _0x1f7120=_0x5f30f3[_0x0cd6('0x7b')]('data-sku');var _0x413f4a=_0x5f30f3[_0x0cd6('0x7b')](_0x0cd6('0x9d'));if(_0x1f7120){var _0x45ecc2=parseInt(_0x5f30f3[_0x0cd6('0x41')]())||0x1;_0x28ad2e[_0x0cd6('0x9e')]([_0x1f7120,_0x413f4a],_0x45ecc2,_0x45ecc2+0x1,function(_0x5f2283){_0x5f30f3[_0x0cd6('0x41')](_0x5f2283);'function'===typeof _0x2d6f46&&_0x2d6f46();});}};var _0x5f2c5e=function(_0x3f0c0d,_0x12f375){var _0x5c11c6=_0x40aed7(_0x3f0c0d);var _0x413f4a=_0x5c11c6['attr'](_0x0cd6('0x9f'));var _0x5bf2e1=_0x5c11c6[_0x0cd6('0x7b')](_0x0cd6('0x9d'));if(_0x413f4a){var _0x5e2348=parseInt(_0x5c11c6[_0x0cd6('0x41')]())||0x2;_0x28ad2e[_0x0cd6('0x9e')]([_0x413f4a,_0x5bf2e1],_0x5e2348,_0x5e2348-0x1,function(_0x559422){_0x5c11c6[_0x0cd6('0x41')](_0x559422);_0x0cd6('0x6f')===typeof _0x12f375&&_0x12f375();});}};var _0x5f399c=function(_0x282ce2,_0x36bd98){var _0x5eafeb=_0x40aed7(_0x282ce2);var _0x413f4a=_0x5eafeb['attr'](_0x0cd6('0x9f'));var _0x67ebb=_0x5eafeb[_0x0cd6('0x7b')](_0x0cd6('0x9d'));if(_0x413f4a){var _0x468c91=parseInt(_0x5eafeb[_0x0cd6('0x41')]())||0x1;_0x28ad2e[_0x0cd6('0x9e')]([_0x413f4a,_0x67ebb],0x1,_0x468c91,function(_0x197174){_0x5eafeb[_0x0cd6('0x41')](_0x197174);_0x0cd6('0x6f')===typeof _0x36bd98&&_0x36bd98();});}};var _0x413f4a=_0xcaf8bb[_0x0cd6('0x30')](_0x0cd6('0xa0'));_0x413f4a[_0x0cd6('0x71')](_0x0cd6('0xa1'))[_0x0cd6('0x5d')](function(){var _0xcaf8bb=_0x40aed7(this);_0xcaf8bb[_0x0cd6('0x30')](_0x0cd6('0xa2'))['on']('click.qd_ddc_more',function(_0x5e74aa){_0x5e74aa[_0x0cd6('0xa3')]();_0x413f4a[_0x0cd6('0x71')](_0x0cd6('0xa4'));_0x5eafeb(_0xcaf8bb[_0x0cd6('0x30')](_0x0cd6('0xa5')),function(){_0x413f4a[_0x0cd6('0x34')](_0x0cd6('0xa4'));});});_0xcaf8bb[_0x0cd6('0x30')]('.qd-ddc-quantityMinus')['on']('click.qd_ddc_minus',function(_0x1437d7){_0x1437d7[_0x0cd6('0xa3')]();_0x413f4a['addClass']('qd-loading');_0x5f2c5e(_0xcaf8bb[_0x0cd6('0x30')](_0x0cd6('0xa5')),function(){_0x413f4a[_0x0cd6('0x34')](_0x0cd6('0xa4'));});});_0xcaf8bb[_0x0cd6('0x30')]('.qd-ddc-quantity')['on']('focusout.qd_ddc_change',function(){_0x413f4a[_0x0cd6('0x71')](_0x0cd6('0xa4'));_0x5f399c(this,function(){_0x413f4a[_0x0cd6('0x34')](_0x0cd6('0xa4'));});});_0xcaf8bb[_0x0cd6('0x30')](_0x0cd6('0xa5'))['on']('keyup.qd_ddc_change',function(_0x339236){0xd==_0x339236[_0x0cd6('0x3a')]&&(_0x413f4a[_0x0cd6('0x71')](_0x0cd6('0xa4')),_0x5f399c(this,function(){_0x413f4a[_0x0cd6('0x34')](_0x0cd6('0xa4'));}));});});_0xcaf8bb[_0x0cd6('0x30')](_0x0cd6('0xa6'))['each'](function(){var _0xcaf8bb=_0x40aed7(this);_0xcaf8bb[_0x0cd6('0x30')]('.qd-ddc-remove')['on'](_0x0cd6('0xa7'),function(){_0xcaf8bb[_0x0cd6('0x71')](_0x0cd6('0xa4'));_0x28ad2e['removeProduct'](_0x40aed7(this),function(_0x4cd6c8){_0x4cd6c8?_0xcaf8bb['stop'](!0x0)[_0x0cd6('0xa8')](function(){_0xcaf8bb['remove']();_0x28ad2e['cartIsEmpty']();}):_0xcaf8bb['removeClass'](_0x0cd6('0xa4'));});return!0x1;});});};_0x28ad2e[_0x0cd6('0xa9')]=function(_0x1a57bd){var _0x8a5bf6=_0x1a57bd[_0x0cd6('0x41')]();_0x8a5bf6=_0x8a5bf6[_0x0cd6('0x2')](/[^0-9\-]/g,'');_0x8a5bf6=_0x8a5bf6[_0x0cd6('0x2')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,_0x0cd6('0xaa'));_0x8a5bf6=_0x8a5bf6[_0x0cd6('0x2')](/(.{9}).*/g,'$1');_0x1a57bd[_0x0cd6('0x41')](_0x8a5bf6);0x9<=_0x8a5bf6[_0x0cd6('0x7')]&&(_0x1a57bd['data'](_0x0cd6('0xab'))!=_0x8a5bf6&&_0x12f9ee[_0x0cd6('0xac')]({'postalCode':_0x8a5bf6,'country':_0x0cd6('0xad')})[_0x0cd6('0xae')](function(_0x398ff7){window['_QuatroDigital_DropDown'][_0x0cd6('0x6d')]=_0x398ff7;_0x28ad2e[_0x0cd6('0x69')]();})[_0x0cd6('0xaf')](function(_0xf389a8){_0x5c9fca([_0x0cd6('0xb0'),_0xf389a8]);updateCartData();}),_0x1a57bd[_0x0cd6('0xb1')](_0x0cd6('0xab'),_0x8a5bf6));};_0x28ad2e[_0x0cd6('0x9e')]=function(_0x254d7c,_0x18db11,_0x3f358c,_0x188b7e){function _0x452001(_0x35cb7e){_0x35cb7e=_0x0cd6('0xb2')!==typeof _0x35cb7e?!0x1:_0x35cb7e;_0x28ad2e[_0x0cd6('0x69')]();window[_0x0cd6('0x13')][_0x0cd6('0x45')]=!0x1;_0x28ad2e['cartIsEmpty']();_0x0cd6('0xc')!==typeof window[_0x0cd6('0x6e')]&&_0x0cd6('0x6f')===typeof window[_0x0cd6('0x6e')][_0x0cd6('0x70')]&&window[_0x0cd6('0x6e')][_0x0cd6('0x70')][_0x0cd6('0x5f')](this);_0x0cd6('0x6f')===typeof adminCart&&adminCart();_0x40aed7['fn']['simpleCart'](!0x0,void 0x0,_0x35cb7e);'function'===typeof _0x188b7e&&_0x188b7e(_0x18db11);}_0x3f358c=_0x3f358c||0x1;if(0x1>_0x3f358c)return _0x18db11;if(_0x13216d[_0x0cd6('0x25')]){if('undefined'===typeof window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x254d7c[0x1]])return _0x5c9fca(_0x0cd6('0xb3')+_0x254d7c[0x1]+']'),_0x18db11;window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x254d7c[0x1]]['quantity']=_0x3f358c;window[_0x0cd6('0x13')]['getOrderForm'][_0x0cd6('0x68')][_0x254d7c[0x1]][_0x0cd6('0xb4')]=_0x254d7c[0x1];_0x12f9ee['updateItems']([window['_QuatroDigital_DropDown'][_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x254d7c[0x1]]],[_0x0cd6('0x68'),_0x0cd6('0x74'),_0x0cd6('0x75')])['done'](function(_0x3a16c0){window['_QuatroDigital_DropDown'][_0x0cd6('0x6d')]=_0x3a16c0;_0x452001(!0x0);})[_0x0cd6('0xaf')](function(_0x57ab91){_0x5c9fca([_0x0cd6('0xb5'),_0x57ab91]);_0x452001();});}else _0x5c9fca(_0x0cd6('0xb6'));};_0x28ad2e['removeProduct']=function(_0xf89ffc,_0x3c27c3){function _0x507432(_0x46e112){_0x46e112=_0x0cd6('0xb2')!==typeof _0x46e112?!0x1:_0x46e112;'undefined'!==typeof window[_0x0cd6('0x6e')]&&_0x0cd6('0x6f')===typeof window[_0x0cd6('0x6e')]['exec']&&window['_QuatroDigital_AmountProduct'][_0x0cd6('0x70')]['call'](this);'function'===typeof adminCart&&adminCart();_0x40aed7['fn'][_0x0cd6('0xb7')](!0x0,void 0x0,_0x46e112);'function'===typeof _0x3c27c3&&_0x3c27c3(_0x413f4a);}var _0x413f4a=!0x1,_0x477520=_0x40aed7(_0xf89ffc)[_0x0cd6('0x7b')](_0x0cd6('0x9d'));if(_0x13216d['smartCheckout']){if(_0x0cd6('0xc')===typeof window[_0x0cd6('0x13')]['getOrderForm'][_0x0cd6('0x68')][_0x477520])return _0x5c9fca('Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items['+_0x477520+']'),_0x413f4a;window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x477520][_0x0cd6('0xb4')]=_0x477520;_0x12f9ee['removeItems']([window[_0x0cd6('0x13')]['getOrderForm'][_0x0cd6('0x68')][_0x477520]],[_0x0cd6('0x68'),_0x0cd6('0x74'),_0x0cd6('0x75')])[_0x0cd6('0xae')](function(_0x107c1e){_0x413f4a=!0x0;window['_QuatroDigital_DropDown']['getOrderForm']=_0x107c1e;_0x547fd4(_0x107c1e);_0x507432(!0x0);})[_0x0cd6('0xaf')](function(_0xad5f61){_0x5c9fca([_0x0cd6('0xb8'),_0xad5f61]);_0x507432();});}else alert(_0x0cd6('0xb9'));};_0x28ad2e[_0x0cd6('0x3d')]=function(_0x36bb8f,_0xe21d69,_0x47d4d5,_0x21ceff){_0x21ceff=_0x21ceff||_0x40aed7('.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2');_0x36bb8f=_0x36bb8f||'+';_0xe21d69=_0xe21d69||0.9*_0x21ceff[_0x0cd6('0xba')]();_0x21ceff[_0x0cd6('0xbb')](!0x0,!0x0)[_0x0cd6('0xbc')]({'scrollTop':isNaN(_0x47d4d5)?_0x36bb8f+'='+_0xe21d69+'px':_0x47d4d5});};_0x13216d[_0x0cd6('0x43')]||(_0x28ad2e['getCartInfoByUrl'](),_0x40aed7['fn'][_0x0cd6('0xb7')](!0x0));_0x40aed7(window)['on'](_0x0cd6('0xbd'),function(){try{window['_QuatroDigital_DropDown'][_0x0cd6('0x6d')]=void 0x0,_0x28ad2e['getCartInfoByUrl']();}catch(_0x657f7d){_0x5c9fca(_0x0cd6('0xbe')+_0x657f7d[_0x0cd6('0xb')],_0x0cd6('0xbf'));}});'function'===typeof _0x13216d[_0x0cd6('0x60')]?_0x13216d[_0x0cd6('0x60')][_0x0cd6('0x5f')](this):_0x5c9fca(_0x0cd6('0xc0'));};_0x40aed7['fn']['QD_dropDownCart']=function(_0x49be52){var _0x14c298=_0x40aed7(this);_0x14c298['fn']=new _0x40aed7[(_0x0cd6('0x14'))](this,_0x49be52);return _0x14c298;};}catch(_0x217100){_0x0cd6('0xc')!==typeof console&&_0x0cd6('0x6f')===typeof console[_0x0cd6('0xa')]&&console[_0x0cd6('0xa')](_0x0cd6('0xc1'),_0x217100);}}(this));(function(_0x2db805){try{var _0xa59729=jQuery;window[_0x0cd6('0x6e')]=window[_0x0cd6('0x6e')]||{};window[_0x0cd6('0x6e')][_0x0cd6('0x68')]={};window[_0x0cd6('0x6e')][_0x0cd6('0xc2')]=!0x1;window[_0x0cd6('0x6e')][_0x0cd6('0xc3')]=!0x1;window[_0x0cd6('0x6e')][_0x0cd6('0xc4')]=!0x1;var _0x2787f3=function(){if(window['_QuatroDigital_AmountProduct'][_0x0cd6('0xc2')]){var _0x262e71=!0x1;var _0x5a7d54={};window[_0x0cd6('0x6e')][_0x0cd6('0x68')]={};for(_0x366374 in window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')])if(_0x0cd6('0xe')===typeof window[_0x0cd6('0x13')][_0x0cd6('0x6d')][_0x0cd6('0x68')][_0x366374]){var _0x424746=window['_QuatroDigital_DropDown']['getOrderForm'][_0x0cd6('0x68')][_0x366374];'undefined'!==typeof _0x424746['productId']&&null!==_0x424746['productId']&&''!==_0x424746[_0x0cd6('0xc5')]&&(window[_0x0cd6('0x6e')][_0x0cd6('0x68')][_0x0cd6('0xc6')+_0x424746[_0x0cd6('0xc5')]]=window[_0x0cd6('0x6e')]['items'][_0x0cd6('0xc6')+_0x424746[_0x0cd6('0xc5')]]||{},window[_0x0cd6('0x6e')][_0x0cd6('0x68')]['prod_'+_0x424746[_0x0cd6('0xc5')]][_0x0cd6('0xc7')]=_0x424746[_0x0cd6('0xc5')],_0x5a7d54['prod_'+_0x424746['productId']]||(window[_0x0cd6('0x6e')][_0x0cd6('0x68')][_0x0cd6('0xc6')+_0x424746[_0x0cd6('0xc5')]]['qtt']=0x0),window[_0x0cd6('0x6e')]['items'][_0x0cd6('0xc6')+_0x424746[_0x0cd6('0xc5')]]['qtt']+=_0x424746['quantity'],_0x262e71=!0x0,_0x5a7d54[_0x0cd6('0xc6')+_0x424746[_0x0cd6('0xc5')]]=!0x0);}var _0x366374=_0x262e71;}else _0x366374=void 0x0;window[_0x0cd6('0x6e')][_0x0cd6('0xc2')]&&(_0xa59729('.qd-bap-wrapper')[_0x0cd6('0xc8')](),_0xa59729(_0x0cd6('0xc9'))[_0x0cd6('0x34')]('qd-bap-item-added'));for(var _0x264aa5 in window[_0x0cd6('0x6e')][_0x0cd6('0x68')]){_0x424746=window[_0x0cd6('0x6e')][_0x0cd6('0x68')][_0x264aa5];if(_0x0cd6('0xe')!==typeof _0x424746)return;_0x5a7d54=_0xa59729('input.qd-productId[value='+_0x424746[_0x0cd6('0xc7')]+']')[_0x0cd6('0x0')]('li');if(window[_0x0cd6('0x6e')]['allowRecalculate']||!_0x5a7d54[_0x0cd6('0x30')](_0x0cd6('0xca'))[_0x0cd6('0x7')])_0x262e71=_0xa59729(_0x0cd6('0xcb')),_0x262e71[_0x0cd6('0x30')](_0x0cd6('0xcc'))[_0x0cd6('0x52')](_0x424746[_0x0cd6('0xcd')]),_0x424746=_0x5a7d54[_0x0cd6('0x30')](_0x0cd6('0xce')),_0x424746[_0x0cd6('0x7')]?_0x424746[_0x0cd6('0xcf')](_0x262e71)[_0x0cd6('0x71')](_0x0cd6('0xd0')):_0x5a7d54[_0x0cd6('0xcf')](_0x262e71);}_0x366374&&(window[_0x0cd6('0x6e')][_0x0cd6('0xc2')]=!0x1);};window[_0x0cd6('0x6e')][_0x0cd6('0x70')]=function(){window[_0x0cd6('0x6e')][_0x0cd6('0xc2')]=!0x0;_0x2787f3[_0x0cd6('0x5f')](this);};_0xa59729(document)[_0x0cd6('0xd1')](function(){_0x2787f3[_0x0cd6('0x5f')](this);});}catch(_0x9604b8){_0x0cd6('0xc')!==typeof console&&'function'===typeof console[_0x0cd6('0xa')]&&console[_0x0cd6('0xa')](_0x0cd6('0xc1'),_0x9604b8);}}(this));(function(){try{var _0xbcf462=jQuery,_0x16a5ef,_0xbccd8f={'selector':_0x0cd6('0xd2'),'dropDown':{},'buyButton':{}};_0xbcf462['QD_smartCart']=function(_0x15803e){var _0x11e22a={};_0x16a5ef=_0xbcf462[_0x0cd6('0xd3')](!0x0,{},_0xbccd8f,_0x15803e);_0x15803e=_0xbcf462(_0x16a5ef[_0x0cd6('0xd4')])['QD_dropDownCart'](_0x16a5ef[_0x0cd6('0xd5')]);_0x11e22a['buyButton']='undefined'!==typeof _0x16a5ef[_0x0cd6('0xd5')][_0x0cd6('0x43')]&&!0x1===_0x16a5ef['dropDown'][_0x0cd6('0x43')]?_0xbcf462(_0x16a5ef[_0x0cd6('0xd4')])[_0x0cd6('0xd6')](_0x15803e['fn'],_0x16a5ef[_0x0cd6('0xd7')]):_0xbcf462(_0x16a5ef[_0x0cd6('0xd4')])[_0x0cd6('0xd6')](_0x16a5ef[_0x0cd6('0xd7')]);_0x11e22a[_0x0cd6('0xd5')]=_0x15803e;return _0x11e22a;};_0xbcf462['fn']['smartCart']=function(){'object'===typeof console&&_0x0cd6('0x6f')===typeof console[_0x0cd6('0x11')]&&console['info'](_0x0cd6('0xd8'));};_0xbcf462[_0x0cd6('0xd9')]=_0xbcf462['fn']['smartCart'];}catch(_0x304eaf){'undefined'!==typeof console&&'function'===typeof console[_0x0cd6('0xa')]&&console[_0x0cd6('0xa')](_0x0cd6('0xc1'),_0x304eaf);}}());