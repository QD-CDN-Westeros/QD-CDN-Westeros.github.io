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
			Common.floatBarMiniCart();
			Common.applyCarouselShelf();
			Common.applySmartCart();
			Common.openModalVideoInstitutional();
			Common.smartQuantityShelf();
		},
		ajaxStop: function() {
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
		amazingMenu: function () {
			$('.header-qd-v1-main-amazing-menu').QD_amazingMenu();

			// Amazing Menu Responsivo
			$(".header-qd-v1-amazing-menu-toggle").click(function () {
				$("body").toggleClass('qd-am-on');
			});

			$(".qd-am-overlay").click(function () {
				$("body").removeClass('qd-am-on');
			});

			$(".floating-qd-v1-call-amazing-menu").click(function () {
				$("body").toggleClass('qd-am-toggle');
			});

			var wrapperMobile = $(".header-qd-v1-main-amazing-menu-mobile-wrapper");

			wrapperMobile.QD_amazingMenu();

			wrapperMobile.find('> ul > li >a').click(function (evt) {
				evt.preventDefault();
				$(this).parent().toggleClass('qd-am-dropdown-active');
			});

			wrapperMobile.after('<span class="btn-close-mobile"><i class="fa fa-times-circle"></i></span>');

			$(".btn-close-mobile").click(function () {
				$("body").removeClass('qd-am-on');
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
			$(".footer-qd-v1-facebook-likebox").html('<div class="fb-page" data-href="https://www.facebook.com/carlabergamask" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/">Carla Bergamask</a></blockquote></div></div>');
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
		smartQuantityShelf: function () {
			$(".shelf-qd-v1-buy-button:not(.qd-on)").addClass('qd-on').QD_smartQuantity({
				buyButton: ".btn-add-buy-button-asynchronous",
				setQuantityByUrl: false
			});
		},
		applySmartCart: function() {
			$('.header-qd-v1-cart-link').append('<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>');

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
					},
					buyButton: {
						buyButton: "body .prateleira .buy-button"
					}
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
			Home.bannerSliderDesktop();
			Home.bannerSliderMobile();
			Home.brandCarousel();
			Home.shelfCarouselHome();
			Home.organizeSideMenuCollection();
			Home.mosaicSetCol();
			// Home.selectSmartResearch2();			
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		bannerSliderDesktop: function() {
			setTimeout(function () {
				$('.slider-qd-v1-full, .hotsite-qd-v1-banner-slider').slick({
					prevArrow: '<button type="button" class="slick-prev" title="Anterior"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
					nextArrow: '<button type="button" class="slick-next" title="Próximo"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
					dots: true,
					adaptiveHeight: true,
					fade: true,
					speed: 400,
					cssEase: 'linear'
				});
		   },500);
		},		
		bannerSliderMobile: function () {
			setTimeout(function () {
				$('.mobile-slider-qd-v1-wrapper').slick({
					prevArrow: '<button type="button" class="slick-prev" title="Anterior"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
					nextArrow: '<button type="button" class="slick-next" title="Próximo"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
					adaptiveHeight: true,
					fade: true,
					speed: 400,
					dots: true,
					cssEase: 'linear'
				});
			}, 500);
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
		brandCarousel:function(){
			var wrapper = $('.brand-carousel-qd-v1');

			// Titulo
			wrapper.each(function(){
				var wrap = $(this);
				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			});

			wrapper.owlCarousel({
				items: 5,
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
			Product.applyBuyButton();
			Product.zoomFix();
			Product.shelfCarouselProduct();
			Product.openShipping();
			Product.qdClickTableMeasures();
			Product.seeDescription();
			Product.skuListSelection();
			Product.accessoriesFix();
			Product.accessoriesApplyCarousel();
			Product.qdNotifymeShow();
			Product.doublePrice();
			Product.setAvailableBodyClass();
			// Common.smartQuantityShelf();			
			// Product.applySmartSkuGrid();
			Product.skuGridChangeImage();
			Product.setSkuExibition();
		},
		ajaxStop: function () {
			Product.addCloseBtnFreightTable();
		},
		windowOnload: function () {},

		skuGridChangeImage: function(){
			$(window).on("QuatroDigital.ssg_callback", function(){
				$(".qd-sku-img,.qd-sku-name").click(function(){
					$(this).siblings(".qd-sku-qtt-wrap[id]:first").attr("id");
					try {
						var skuId = $(this).siblings(".qd-sku-qtt-wrap[id]:first").attr("id");

						var selectedSku;
						for (var i = 0; i < skuJson.skus.length; i++) {
							if (skuJson.skus[i].sku == skuId) {
								selectedSku = skuJson.skus[i];
								break;
							}
						}
						if (selectedSku)
							$(document).trigger("skuSelected.vtex", [skuId, selectedSku]);
					} catch (e) {
						if (typeof console !== "undefined" && typeof console.info === "function")
							console.info("Problemas ao selecionar o SKU", e.message);
					};
				});
			});
		},
		setSkuExibition: function() {
			if(skuJson.skus.length == 1){
				Product.buyingProductSummary();
				return $("body").addClass("qd-sku-single-layout");
			}

			$(".qd-smart-sku-grid").QD_smartSkuGrid();
			$("body").addClass("qd-sku-grid-layout");
			$('.qd-no-stock').text('INDISPONÍVEL');
		},
		buyingProductSummary:function(){
			$(".qd-sq-quantity").on("QuatroDigital.sq_change",function(){
				var value = $(this).val()
				$('.qd-selected-qtt-sku').text(value);
				$('.qd-selected-sku-total').text(qd_number_format(value * skuJson.skus[0].bestPrice / 100, 2, ",", "."));
			});
		},
		applyBuyButton: function() {
            $(".qd_cart_auto").QD_buyButton({
                buyButton: ".product-qd-v1-buy-button .buy-button"
            });
        },
		// applySmartSkuGrid:function(){
		// 	$(".qd-smart-sku-grid").QD_smartSkuGrid();

		// 	var wrapper = $(".qd_cart_auto");

		// 	if (!wrapper.length)
		// 		wrapper = $(document.body);

		// 	wrapper.QD_buyButton({
		// 		buyButton: '.buy-button'
		// 	});
		// },
		qdNotifymeShow: function() {
			var notifyWrapper = $(".portal-notify-me-ref");

			var checkVisibleNotify = function(data) {
				if (data.availability || data.available){
					notifyWrapper.parent().parent().removeClass('col-xs-12').attr('class', "col-xs-8 col-md-9");
					$(document.body).removeClass('notify-active');
				}
				else {
					notifyWrapper.parent().parent().removeClass('col-xs-12').attr('class', "col-xs-8 col-md-9");
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
		applySmartQuantity: function () {
			$('.product-qd-v1-sku-selection-box, .product-floating-bar-buy').QD_smartQuantity();

			$(window).on("skuSelected.vtex", function (e, id, data) {
				$('.qd-sq-more, .qd-sq-minus').click();
			});

			var skuList = $(".skuList");
			skuList.QD_smartQuantity();

			skuList.on('QuatroDigital.sq_change', function () {
				var skuId = (($(this).find('a.buy-button').attr('href') || '').match(/sku\=([0-9]+)/i) || ['']).pop();
				var qtt = parseInt($(this).find('.qd-sq-quantity').val() || '1');
				for (var i in skuJson.skus) {
					if (typeof skuJson.skus[i] != "function" && skuJson.skus[i].sku == skuId) {
						$(this).find('.valor-de strong').text('R$ ' + qd_number_format((skuJson.skus[i].listPrice * qtt) / 100, 2, ",", "."));
						$(this).find('.valor-por strong').text('R$ ' + qd_number_format((skuJson.skus[i].bestPrice * qtt) / 100, 2, ",", "."));
						break;
					}
				}
			});

			var skuRadio = $(".product-qd-v1-price-wrapper");
			skuRadio.QD_smartQuantity();

			skuRadio.on('QuatroDigital.sq_change', function () {
				var skuId = (($(this).find('a.buy-button').attr('href') || '').match(/sku\=([0-9]+)/i) || ['']).pop();
				var qtt = parseInt($(this).find('.qd-sq-quantity').val() || '1');
				for (var i in skuJson.skus) {
					if (typeof skuJson.skus[i] != "function" && skuJson.skus[i].sku == skuId) {
						$(this).find('.valor-de strong').text('R$ ' + qd_number_format((skuJson.skus[i].listPrice * qtt) / 100, 2, ",", "."));
						$(this).find('.valor-por strong').text('R$ ' + qd_number_format((skuJson.skus[i].bestPrice * qtt) / 100, 2, ",", "."));
					}
				}
			});
		},
		doublePrice: function () {
			var row = $('.product-qd-v1-box-quantity').clone().addClass('product-qd-v1-double-size qd-show');
			row.find('script').remove();
			// row.insertBefore($('.product-floating-bar-smart-qtt'));

			Product.applySmartQuantity();
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
		qdClickTableMeasures: function () {
			var wrapper = $(".product-qd-v1-sku-selection .specification");
			var imgTable = $('.measure-table-qd-v1').clone();
			var modal = $(".qd-v1-modal").clone().appendTo(document.body).addClass('qd-v1-modal-table-measures');

			if (imgTable.find('.box-banner').length < 1)
				return;

			wrapper.append('<span class="product-qd-v1-table-measures">Tabela de Medidas</span>');

			$(".product-qd-v1-table-measures").click(function () {
				modal.find('.modal-body').append(imgTable);
				modal.find(imgTable).removeClass('hide');
				modal.modal();

				modal.on('hidden.bs.modal', function () {
					modal.remove();
				});
			});
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
			Institutional.sendAccessForm();
			Institutional.sidemenuToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		formCadastreMask: function () {
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
		checkEmailExist: function (email) {
			window.QD_checkEmailExist_request = window.QD_checkEmailExist_request || $.ajax({
				url: "//api.vtexcrm.com.br/b2bcarlabergamask/dataentities/CL/search",
				data: { "_fields": "id", "email": email },
				type: "GET",
				dataType: "json",
				headers: { Accept: "application/vnd.vtex.ds.v10+json" },
				success: function (data) {
					if (data.length)
						alert("Este e-mail já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente.");
				},
				complete: function () {
					window.QD_checkEmailExist_request = undefined;
				}
			});

			return window.QD_checkEmailExist_request;
		},
		checkCnpjExist: function (cnpj) {
			window.QD_checkCnpjExist_request = window.QD_checkCnpjExist_request || $.ajax({
				url: "//api.vtexcrm.com.br/b2bcarlabergamask/dataentities/CL/search",
				data: { "_fields": "id", "corporateDocument": cnpj.replace(/[^0-9]/ig, "") },
				type: "GET",
				dataType: "json",
				headers: { Accept: "application/vnd.vtex.ds.v10+json" },
				success: function (data) {
					if (data.length)
						alert("Este CNPJ já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente.");
				},
				complete: function () {
					window.QD_checkCnpjExist_request = undefined;
				}
			});

			return window.QD_checkCnpjExist_request;
		},
		sendAccessForm: function () {
			Institutional.formCadastreMask();

			var $form = $(".form-qd-v1");
			var loading = $('form-qd-v1-loading').hide();
			// $form.find(".form-qd-v1-submit").after(loading);

			var cnpj = $form.find("[name='qd_form_cpnj']");
			cnpj.keyup(function (e) {
				if ((cnpj.val() || "").length > 17)
					Institutional.checkCnpjExist(cnpj.val() || "");
			});

			var email = $form.find("[name='qd_form_email']");
			email.focusout(function (e) {
				if ((email.val() || "").length > 0)
					Institutional.checkEmailExist(email.val() || "");
			});

			// Preenchendo o endereço a partir do CEP
			var cepInputs = $form.find("input[name=qd_form_street], input[name=qd_form_complement], input[name=qd_form_neighboor], input[name=qd_form_city], input[name=qd_form_state]").attr("disabled", "disabled");
			var cep = $form.find("input[name=qd_form_zipcode]");
			cep.keyup(function (e) {
				if ((cep.val() || "").length < 9)
					return;

				// $form.find(".btn-continue").slideUp();
				loading.slideDown();

				$.ajax({
					url: "/api/checkout/pub/postal-code/BRA/" + cep.val(),
					dataType: "json",
					success: function (data) {
						// $form.find(".btn-continue").slideUp();
						loading.slideDown();
						$form.find("input[name=qd_form_street]").val(data.street || "");
						$form.find("input[name=qd_form_neighboor]").val(data.neighborhood || "");
						$form.find("input[name=qd_form_city]").val(data.city || "");
						$form.find("input[name=qd_form_state]").val(data.state || "");
					},
					complete: function () {
						cepInputs.removeAttr('disabled');
						loading.slideUp();
						// $form.find(".form-qd-v1-submit").slideDown();
					}
				});
			});

			if (typeof $.fn.validate !== "function")
				return;

			$form.validate({
				rules: {
					email: {
						email: true
					}
				},
				submitHandler: function (form) {
					var $form = $(form);
					var idRegister = '';

					if (!$form.valid())
						return;

					loading.slideDown();
					var inputs = $form.find("input, textarea");

					Institutional.checkEmailExist(inputs.filter("[name='qd_form_email']").val() || "").always(function () {
						loading.slideUp();
					}).done(function (data) {
						if (data.length)
							return;

						loading.slideDown();
						Institutional.checkCnpjExist(inputs.filter("[name='qd_form_cpnj']").val() || "").always(function () {
							loading.slideUp();
						}).done(function (data) {
							if (data.length)
								return;

							loading.slideDown();

							var stateRegistration = (inputs.filter("[name='qd_form_ie']").val() || "Isento").trim();
							stateRegistration = stateRegistration.length ? stateRegistration : "Isento";
							stateRegistration = stateRegistration.replace(/i.+ento/g, "Isento");

							$.ajax({
								url: "//api.vtexcrm.com.br/b2bcarlabergamask/dataentities/CL/documents",
								type: "PATCH",
								dataType: "json",
								headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
								data: JSON.stringify({
									firstName: inputs.filter("[name='qd_form_name']").val() || "",
									lastName: inputs.filter("[name='qd_form_lastname']").val() || "",
									email: inputs.filter("[name='qd_form_email']").val() || "",
									birthDate: (inputs.filter("[name='qd_form_birthdate']").val() || '').split('/').reverse().join('-'),
									gender: inputs.filter("[name='qd_form_sex']:checked").val() || "",
									documentType: "cpf",
									"document": (inputs.filter("[name='qd_form_cpf']").val() || "").replace(/[^0-9]/ig, ""),
									homePhone: "+55" + (inputs.filter("[name='qd_form_phone']").val() || "").replace(/[^0-9]/ig, ""),
									cellPhone: "+55" + (inputs.filter("[name='qd_form_celphone']").val() || "").replace(/[^0-9]/ig, ""),
									isSMSNewsletterOptIn: false,
									tradeName: inputs.filter("[name='qd_form_trading_name']").val() || "",
									corporateName: inputs.filter("[name='qd_form_company_name']").val() || "",
									corporateDocument: (inputs.filter("[name='qd_form_cpnj']").val() || "").replace(/[^0-9]/ig, ""),
									stateRegistration: stateRegistration,
									site: inputs.filter("[name='qd_form_site']").val() || "",
									facebook: inputs.filter("[name='qd_form_facebook']").val() || "",
									instagram: inputs.filter("[name='qd_form_instagram']").val() || "",
									workingBrands: inputs.filter("[name='qd_form_working_brands']").val() || "",
									interestingBrands: inputs.filter("[name='qd_form_interesting_brands']").val() || "",
									isCorporate: true,
									localeDefault: "pt-BR"
								}),
								success: function (data) {
									$.ajax({
										url: "//api.vtexcrm.com.br/b2bcarlabergamask/dataentities/AD/documents",
										type: "PATCH",
										dataType: "json",
										headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
										data: JSON.stringify({
											addressName: "Principal",
											userId: (data.Id || "").replace(/^[a-z]{2}\-/i, ""),
											street: inputs.filter("[name='qd_form_street']").val() || "",
											number: inputs.filter("[name='qd_form_number']").val() || "",
											complement: inputs.filter("[name='qd_form_complement']").val() || "",
											neighborhood: inputs.filter("[name='qd_form_neighboor']").val() || "",
											city: inputs.filter("[name='qd_form_city']").val() || "",
											state: inputs.filter("[name='qd_form_state']").val() || "",
											postalCode: inputs.filter("[name='qd_form_zipcode']").val() || "",
											addressType: "residential",
											receiverName: inputs.filter("[name='qd_form_name']").val() || "",
											geoCoordinate: []
										}),
										success: function () {
											$('.form-qd-v1-sucess').removeClass('hide');
											$('.register-content-qd-v1').addClass('hide');
											$(document).scrollTop(0);
										},
										error: function (data) {
											alert("Não foi possível enviar seu formulário, por favor tente novamente ou entre em contato por telefone.");
										},
										complete: function () {
											loading.slideUp(function () { $(this).remove(); });
										}
									});
								},
								error: function () {
									alert("Não foi possível enviar seu formulário, por favor tente novamente ou entre em contato por telefone.");
									loading.slideUp(function () { $(this).remove(); });
								}
							});
						});
					});
				},
				errorPlacement: function (error, element) { }
			});
		},
		sidemenuToggle:function(){
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
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010 * http://benalman.com/projects/jquery-bbq-plugin/ * * Copyright (c) 2010 "Cowboy" Ben Alman * Dual licensed under the MIT and GPL licenses. * http://benalman.com/about/license/ */
(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){function n(b){b=f.json?JSON.stringify(b):String(b);return f.raw?b:encodeURIComponent(b)}function m(b,e){var a;if(f.raw)a=b;else a:{var d=b;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));a=f.json?JSON.parse(d):d;break a}catch(g){}a=void 0}return c.isFunction(e)?e(a):a}var l=/\+/g,f=
c.cookie=function(b,e,a){if(void 0!==e&&!c.isFunction(e)){a=c.extend({},f.defaults,a);if("number"===typeof a.expires){var d=a.expires,g=a.expires=new Date;g.setTime(+g+864E5*d)}return document.cookie=[f.raw?b:encodeURIComponent(b),"=",n(e),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b?void 0:{};for(var d=document.cookie?document.cookie.split("; "):[],g=0,l=d.length;g<l;g++){var h=d[g].split("="),k;
k=h.shift();k=f.raw?k:decodeURIComponent(k);h=h.join("=");if(b&&b===k){a=m(h,e);break}b||void 0===(h=m(h))||(a[k]=h)}return a};f.defaults={};c.removeCookie=function(b,e){if(void 0===c.cookie(b))return!1;c.cookie(b,"",c.extend({},e,{expires:-1}));return!c.cookie(b)}});
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
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-12 col-sm-4"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);
// Owl Carousel
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g}); (function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath? (e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length; this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&& (this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this, [this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}), g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")}, baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall= !1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]), a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&& !0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a= this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/ this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]), c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev= f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper= f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&& (a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")=== f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem=== this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1; this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage? this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0), !0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0}, c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem= this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)}, checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))}, addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+ a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)"; a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]: !1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})}, gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos; "function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)} function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}), a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1; !1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem= a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)): (c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)}); a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")? b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this, [d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b, 100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active"); this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+ "px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a, b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect"); f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions, a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0=== f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1, responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);

var _0xc0c1=['toUpperCase','ite','---','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','skus','available','body','qd-smn-all-sku-unavailable','skuSelected.vtex','fire','sku','message','.qd_auto_smart_notify_me','function','QD_smartNotifyMe','object','error','info','[Quatro\x20Digital\x20-\x20Smart\x20Notify\x20Me]\x0a','undefined','toLowerCase','apply','join','warn','Callbacks','memory','length','Não\x20foi\x20localizado\x20o\x20Bootstrap\x20Tooltip,\x20por\x20favor\x20chame\x20a\x20biblioteca\x20JS\x20do\x20Bootstrap.','.portal-notify-me-ref','button','prependTo','attr','skuId','find','.notifyme-skuid','val','data-sku','json','addClass','tooltip','destroy','title','Email','click.qd_snm','show','Insira\x20seu\x20e-mail','post','/no-cache/AviseMe.aspx','qd-snm-sent','qd-snm-loading','Solicitação\x20enviada.\x20Obrigado!','fail','Desculpe,\x20não\x20foi\x20possível\x20enviar\x20seu\x20pedido.\x20Por\x20favor\x20entre\x20em\x20contato\x20com\x20a\x20Central\x20de\x20Atendimento.','Erro\x20:-(.\x20Por\x20favor,\x20fale\x20com\x20o\x20SAC!','add','removeClass','hide','neynoretnznfx%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','charCodeAt'];(function(_0x4c9768,_0x16612a){var _0x29e470=function(_0x3ab3b5){while(--_0x3ab3b5){_0x4c9768['push'](_0x4c9768['shift']());}};_0x29e470(++_0x16612a);}(_0xc0c1,0x8a));var _0x31a5=function(_0x5b6bda,_0x594e89){_0x5b6bda=_0x5b6bda-0x0;var _0x1eb598=_0xc0c1[_0x5b6bda];return _0x1eb598;};(function(_0x324ded){var _0x7aa8da=jQuery;if(_0x31a5('0x0')!==typeof _0x7aa8da['fn']['QD_smartNotifyMe']){_0x7aa8da['fn'][_0x31a5('0x1')]=function(){};var _0x228057=function(_0x5f41ac,_0x236663){if(_0x31a5('0x2')===typeof console&&_0x31a5('0x0')===typeof console[_0x31a5('0x3')]&&'function'===typeof console[_0x31a5('0x4')]&&'function'===typeof console['warn']){var _0x2d02f3;_0x31a5('0x2')===typeof _0x5f41ac?(_0x5f41ac['unshift'](_0x31a5('0x5')),_0x2d02f3=_0x5f41ac):_0x2d02f3=[_0x31a5('0x5')+_0x5f41ac];if(_0x31a5('0x6')===typeof _0x236663||'alerta'!==_0x236663[_0x31a5('0x7')]()&&'aviso'!==_0x236663[_0x31a5('0x7')]())if(_0x31a5('0x6')!==typeof _0x236663&&_0x31a5('0x4')===_0x236663[_0x31a5('0x7')]())try{console[_0x31a5('0x4')][_0x31a5('0x8')](console,_0x2d02f3);}catch(_0x4a7df2){console['info'](_0x2d02f3[_0x31a5('0x9')]('\x0a'));}else try{console[_0x31a5('0x3')]['apply'](console,_0x2d02f3);}catch(_0x12bd8c){console[_0x31a5('0x3')](_0x2d02f3[_0x31a5('0x9')]('\x0a'));}else try{console[_0x31a5('0xa')]['apply'](console,_0x2d02f3);}catch(_0x21a3d7){console[_0x31a5('0xa')](_0x2d02f3['join']('\x0a'));}}},_0x2841bd={'button':'<button\x20title=\x22Carregando\x20...\x22><i\x20class=\x22fa\x20fa-envelope\x22></i>\x20Avise-me</button>','placement':'top','skuId':null},_0xd0e837=_0x7aa8da[_0x31a5('0xb')](_0x31a5('0xc')),_0xe00d2a=function(_0x14aece,_0x11a5c1){var _0x3814ba=_0x7aa8da(_0x11a5c1);if(_0x3814ba[_0x31a5('0xd')]){var _0x4c0506=_0x7aa8da['extend']({},_0x2841bd,_0x14aece);if(_0x31a5('0x0')!==typeof _0x7aa8da['fn']['tooltip'])return _0x228057(_0x31a5('0xe'));var _0x47a5a4=_0x3814ba['getParent'](_0x31a5('0xf'));_0x3814ba['addClass']('hide');var _0x3898a5=_0x7aa8da(_0x4c0506[_0x31a5('0x10')]);_0x3898a5[_0x31a5('0x11')](_0x3814ba);_0x3898a5[_0x31a5('0x12')]('data-placement',_0x4c0506['placement']);_0x4c0506['skuId']?_0x3898a5[_0x31a5('0x12')]('data-sku',_0x4c0506[_0x31a5('0x13')]):(_0x47a5a4=(_0x47a5a4[_0x31a5('0x14')](_0x31a5('0x15'))[_0x31a5('0x16')]()||'')+'',_0x47a5a4[_0x31a5('0xd')]&&_0x3898a5['attr'](_0x31a5('0x17'),_0x47a5a4));_0x7aa8da['qdAjax']({'url':'/no-cache/profileSystem/getProfile','dataType':_0x31a5('0x18'),'clearQueueDelay':null,'success':function(_0x399007){_0x3814ba[_0x31a5('0x19')]('qd-snm-ready');_0x3898a5[_0x31a5('0x1a')](_0x31a5('0x1b'));_0x3898a5[_0x31a5('0x12')](_0x31a5('0x1c'),_0x399007[_0x31a5('0x1d')])[_0x31a5('0x1a')]();_0x3898a5['on'](_0x31a5('0x1e'),function(){try{_0x3814ba['addClass']('qd-snm-loading');_0x3898a5[_0x31a5('0x1a')](_0x31a5('0x1b'));_0x3898a5[_0x31a5('0x12')](_0x31a5('0x1c'),'Carregando\x20...')['tooltip'](_0x31a5('0x1f'));if(_0x399007[_0x31a5('0x1d')])var _0x1caa4c=_0x399007[_0x31a5('0x1d')];else{var _0x11a5c1=function(){_0x1caa4c=prompt(_0x31a5('0x20'));null===_0x1caa4c||/([\d\w\.]+)\+?([\.\w\d]+)?@([\w\d]+[\.\w\d]+)/i['test'](_0x1caa4c)||_0x11a5c1();};_0x11a5c1();}_0x1caa4c&&_0x7aa8da[_0x31a5('0x21')](_0x31a5('0x22'),{'notifymeClientEmail':_0x1caa4c,'notifymeClientName':_0x399007['FirstName']||_0x399007[_0x31a5('0x1d')]||_0x1caa4c,'notifymeIdSku':_0x7aa8da(this)[_0x31a5('0x12')](_0x31a5('0x17'))},function(){_0x3814ba[_0x31a5('0x19')](_0x31a5('0x23'));_0x3814ba['removeClass'](_0x31a5('0x24'));_0x3898a5[_0x31a5('0x1a')](_0x31a5('0x1b'));_0x3898a5[_0x31a5('0x12')](_0x31a5('0x1c'),_0x31a5('0x25'))[_0x31a5('0x1a')]('show');})[_0x31a5('0x26')](function(){throw'';});}catch(_0x596e2f){alert(_0x31a5('0x27'));}});},'error':function(){_0x3898a5[_0x31a5('0x1a')](_0x31a5('0x1b'));_0x3898a5[_0x31a5('0x12')]('title',_0x31a5('0x28'))[_0x31a5('0x1a')]();}});_0x3898a5[_0x31a5('0x1a')]();_0xd0e837[_0x31a5('0x29')](function(_0x25dd4b){_0x3814ba[_0x31a5('0x2a')](_0x31a5('0x2b'));_0x4c0506[_0x31a5('0x13')]||_0x3898a5[_0x31a5('0x12')](_0x31a5('0x17'),_0x25dd4b);});}};_0x324ded=function(_0xdcf171){var _0x487a0e={'p':_0x31a5('0x2c')};return function(_0x52e3b9){var _0x4f6b22=function(_0x2e417e){return _0x2e417e;};var _0x57bbff=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x52e3b9=_0x52e3b9['d'+_0x57bbff[0x10]+'c'+_0x57bbff[0x11]+'m'+_0x4f6b22(_0x57bbff[0x1])+'n'+_0x57bbff[0xd]]['l'+_0x57bbff[0x12]+'c'+_0x57bbff[0x0]+'ti'+_0x4f6b22('o')+'n'];var _0xdcf171=function(_0x363334){return escape(encodeURIComponent(_0x363334['replace'](/\./g,'¨')[_0x31a5('0x2d')](/[a-zA-Z]/g,function(_0x1ff0ab){return String[_0x31a5('0x2e')](('Z'>=_0x1ff0ab?0x5a:0x7a)>=(_0x1ff0ab=_0x1ff0ab[_0x31a5('0x2f')](0x0)+0xd)?_0x1ff0ab:_0x1ff0ab-0x1a);})));};var _0x26b3f7=_0xdcf171(_0x52e3b9[[_0x57bbff[0x9],_0x4f6b22('o'),_0x57bbff[0xc],_0x57bbff[_0x4f6b22(0xd)]][_0x31a5('0x9')]('')]);_0xdcf171=_0xdcf171((window[['js',_0x4f6b22('no'),'m',_0x57bbff[0x1],_0x57bbff[0x4][_0x31a5('0x30')](),_0x31a5('0x31')][_0x31a5('0x9')]('')]||_0x31a5('0x32'))+['.v',_0x57bbff[0xd],'e',_0x4f6b22('x'),'co',_0x4f6b22('mm'),'erc',_0x57bbff[0x1],'.c',_0x4f6b22('o'),'m.',_0x57bbff[0x13],'r'][_0x31a5('0x9')](''));for(var _0x115262 in _0x487a0e){if(_0xdcf171===_0x115262+_0x487a0e[_0x115262]||_0x26b3f7===_0x115262+_0x487a0e[_0x115262]){var _0x324ded='tr'+_0x57bbff[0x11]+'e';break;}_0x324ded='f'+_0x57bbff[0x0]+'ls'+_0x4f6b22(_0x57bbff[0x1]);}_0x4f6b22=!0x1;-0x1<_0x52e3b9[[_0x57bbff[0xc],'e',_0x57bbff[0x0],'rc',_0x57bbff[0x9]]['join']('')][_0x31a5('0x33')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x4f6b22=!0x0);return[_0x324ded,_0x4f6b22];}(_0xdcf171);}(window);if(!eval(_0x324ded[0x0]))return _0x324ded[0x1]?_0x228057(_0x31a5('0x34')):!0x1;_0x7aa8da['fn'][_0x31a5('0x1')]=function(_0x39c5c6){var _0x48ac21=_0x7aa8da(this);_0x48ac21['each'](function(){_0xe00d2a(_0x39c5c6,_0x7aa8da(this));});return _0x48ac21;};_0x7aa8da(function(){try{if('object'===typeof skuJson){for(var _0x53bb6a=!0x0,_0x21ca67=0x0;_0x21ca67<skuJson[_0x31a5('0x35')][_0x31a5('0xd')];_0x21ca67++)if(skuJson[_0x31a5('0x35')][_0x21ca67][_0x31a5('0x36')]){_0x53bb6a=!0x1;break;}_0x53bb6a&&_0x7aa8da(_0x31a5('0x37'))['addClass'](_0x31a5('0x38'));}}catch(_0x4eec6b){_0x228057('Problemas\x20ao\x20verificar\x20se\x20o\x20produto\x20esta\x20indisponível.\x20Detalhes:\x20'+_0x4eec6b['message']);}});_0x7aa8da(window)['on'](_0x31a5('0x39'),function(_0x17c80c,_0x483a50,_0x5807c5){try{_0x5807c5['available']||_0xd0e837[_0x31a5('0x3a')](_0x5807c5[_0x31a5('0x3b')]);}catch(_0x383f1f){_0x228057('Problemas\x20nos\x20eventos\x20VTEX.\x20Detalhes:\x20'+_0x383f1f[_0x31a5('0x3c')]);}});_0x7aa8da(function(){_0x7aa8da(_0x31a5('0x3d'))[_0x31a5('0x1')]();});_0x7aa8da(function(){_0x31a5('0x2')===typeof skuJson&&_0x7aa8da('<div\x20class=\x22qd-snm-auto-include\x22></div>')['appendTo'](_0x31a5('0xf'))['QD_smartNotifyMe']();});}}(this));
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

/* Quatro Digital - Smart Quantity // Carlos Vinicius // Todos os direitos reservados */
/* Quatro Digital - Smart Quantity // 1.12 // Carlos Vinicius // Todos os direitos reservados */
(function(v){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var g=function(d,a){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var f;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),f=d):f=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof a||"alerta"!==a.toLowerCase()&&"aviso"!==a.toLowerCase())if("undefined"!==typeof a&&"info"===a.toLowerCase())try{console.info.apply(console,
f)}catch(k){console.info(f.join("\n"))}else try{console.error.apply(console,f)}catch(k){console.error(f.join("\n"))}else try{console.warn.apply(console,f)}catch(k){console.warn(f.join("\n"))}}},m={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1,minimumValue:1,setQuantityByUrl:!0},n=function(h,a){function f(c,e,b){a.setQuantityByUrl?c.val(((location.search||"").match(q)||[a.initialValue]).pop()):c.val(a.initialValue);c.change(function(c,
b){try{if("qd_ssl_trigger"!=b){var e=d(this),f=parseInt(e.val().replace(n,""));!isNaN(f)&&f>a.minimumValue?e.val(f):e.val(a.minimumValue);e.trigger("QuatroDigital.sq_change",this)}}catch(t){g(t.message)}});c.focusin(function(){d(this).trigger("QuatroDigital.sq_focusin",this)});e.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue)+1).change()});b.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue+1)-1).change()});c.change()}function k(c,e,b){c.on("QuatroDigital.sq_change",
function(){(d(this).val()||0)<=a.minimumValue?(b.addClass("qd-sq-inactive"),e.removeClass("qd-sq-inactive")):(e.addClass("qd-sq-inactive"),b.removeClass("qd-sq-inactive"))})}function m(c,e){c.on("QuatroDigital.sq_change",function(){try{if(!(e[0].hostname||"").length)return g("A quantidade n\u00e3o foi inserida no bt comprar pois o mesmo n\u00e3o possui uma URL","info");var b=e[0].search||"";-1<b.toLowerCase().indexOf("qty=")?e[0].search=b.replace(p,"qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?
a.minimumValue:1))+"&"):e[0].search="qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"+(e[0].search||"").replace(p,"");e.not(":first").each(function(){this.href=e[0].href});var d=((e.first().attr("href")||"").match(u)||[""]).pop()+"";c.attr("data-sku-id",d);if(d.length&&"object"===typeof skuJson&&!c.attr("data-sku-price"))for(b=0;b<skuJson.skus.length;b++)skuJson.skus[b].sku==d&&c.attr("data-sku-price",skuJson.skus[b].bestPrice)}catch(l){g(l.message)}})}var n=/[^0-9-]/gi,
q=/qty\=([0-9]+)/i,u=/sku\=([0-9]+)/i,p=/qty\=[0-9]+\&?/ig;h.each(function(){try{var c=d(this),e=c.find(a.buyButton),b=c.find(a.qttInput),h=c.find(a.btnMore),l=c.find(a.btnMinus);if(!e.length&&null!==a.buyButton||!b.length)return g("O plugin parou por aqui! N\u00e3o foram encontrados o bot\u00e3o comprar e o campo de quantidade","alerta");if(b.is(".qd-sq-on"))return g(["Execu\u00e7\u00e3o ignorada pois este input j\u00e1 possui o plugin aplicado. Input: ",b],"info");b.addClass("qd-sq-on");k(b,h,l);
null!==a.buyButton&&m(b,e);f(b,h,l);d(window).on("vtex.sku.selected",function(){b.change()})}catch(r){g(r.message)}})};d.fn.QD_smartQuantity=function(g){var a=d(this);a.qdPlugin=new n(a,d.extend({},m,g));d(window).trigger("QuatroDigital.sq_callback");return a};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);    

/* Quatro Digital - Smart SKU Totalizer // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(m){var a=jQuery;if("function"!==typeof a.fn.QD_smartSkuTotalizer){var f=function(a,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var c;"object"===typeof a?(a.unshift("[Quatro Digital - Smart SKU Totalizer]\n"),c=a):c=["[Quatro Digital - Smart SKU Totalizer]\n"+a];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
c)}catch(f){try{console.info(c.join("\n"))}catch(k){}}else try{console.error.apply(console,c)}catch(g){try{console.error(c.join("\n"))}catch(e){}}else try{console.warn.apply(console,c)}catch(n){try{console.warn(c.join("\n"))}catch(p){}}}},l={inputQtt:"input",qttSkus:".qd-selected-qtt-sku",valueSkus:".qd-selected-sku-total"};a.QD_smartSkuTotalizer=function(d,b){if(!d.length)return d;try{var c=a(b.qttSkus),h=a(b.valueSkus),k=a("meta[name='currency']").attr("content")||"R$";if(!c.length&&!h.length)return f("N\u00e3o encontrei os elementos para informar os totais, por isso n\u00e3o irei exibi-los.",
"info");var g=d.find(b.inputQtt).not("disabled").filter("[data-sku-id]");g.on("QuatroDigital.sq_change",function(){try{var b=0,d=0;g.each(function(){var c=a(this),e=parseInt(c.val());0<e&&(d+=e,b+=e*(parseInt(c.attr("data-sku-price"))||0))});c.html(d);h.html(k+" "+qd_number_format(b/100,2,",","."))}catch(e){f(e.message)}})}catch(e){f(e.message)}};a.fn.QD_smartSkuTotalizer=function(d){var b=a(this);if(!b.length)return b;var c=a.extend({},l,d);b.each(function(){a.QD_smartSkuTotalizer(a(this),c)});return b};
a(function(){a(".qd_auto_smart_sku_totalizer").QD_smartSkuTotalizer()})}})(this);

// amazing menu
var _0x5cb8=['getParent','clone','insertBefore','hide','qd-am-content-loaded','text','trim','attr','[class*=\x27colunas\x27]','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','url','\x27\x20falho.','ajaxCallback','call','trigger','QuatroDigital.am.ajaxCallback','ul[itemscope]','UL\x20do\x20menu\x20não\x20encontrada','alerta','li\x20>ul','qd-am-has-ul','children',':not(ul)','qd-am-elem-','replaceSpecialChars','replace','>li','qd-amazing-menu','>ul','qd-am-column','qd-am-dropdown','add','-li','QuatroDigital.am.callback','extend','closest','QD_amazingMenu','function','/qd-amazing-menu','QD\x20Amazing\x20Menu','undefined','error','warn','object','unshift','toLowerCase','info','apply','join','qdAmAddNdx','each','addClass','qd-am-li-','first','qd-am-first','qd-am-last','neynoretnznfx%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','toUpperCase','ite','---','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','.qd_am_code','filter','.qd-am-banner','length','parent','qd-am-collection-wrapper','html','find','img[alt=\x27','data-qdam-value'];(function(_0x247151,_0x12090){var _0x54fb50=function(_0x3b443a){while(--_0x3b443a){_0x247151['push'](_0x247151['shift']());}};_0x54fb50(++_0x12090);}(_0x5cb8,0x14f));var _0x3078=function(_0x2710ec,_0x31f405){_0x2710ec=_0x2710ec-0x0;var _0x2d7451=_0x5cb8[_0x2710ec];return _0x2d7451;};(function(_0x2334ab){_0x2334ab['fn']['getParent']=_0x2334ab['fn'][_0x3078('0x0')];}(jQuery));(function(_0x414316){'use strict';var _0x5b3ace,_0x2dc004,_0x27f0e5,_0x1efd39;_0x5b3ace=jQuery;if(typeof _0x5b3ace['fn'][_0x3078('0x1')]===_0x3078('0x2'))return;_0x2dc004={'url':_0x3078('0x3'),'callback':function(){},'ajaxCallback':function(){}};var _0x33abfd=_0x3078('0x4');var _0x2c15ac=function(_0x4dc3e7,_0x290ff4){if('object'===typeof console&&_0x3078('0x5')!==typeof console[_0x3078('0x6')]&&_0x3078('0x5')!==typeof console['info']&&_0x3078('0x5')!==typeof console[_0x3078('0x7')]){var _0x58706d;_0x3078('0x8')===typeof _0x4dc3e7?(_0x4dc3e7[_0x3078('0x9')]('['+_0x33abfd+']\x0a'),_0x58706d=_0x4dc3e7):_0x58706d=['['+_0x33abfd+']\x0a'+_0x4dc3e7];if('undefined'===typeof _0x290ff4||'alerta'!==_0x290ff4[_0x3078('0xa')]()&&'aviso'!==_0x290ff4[_0x3078('0xa')]())if(_0x3078('0x5')!==typeof _0x290ff4&&_0x3078('0xb')===_0x290ff4[_0x3078('0xa')]())try{console[_0x3078('0xb')][_0x3078('0xc')](console,_0x58706d);}catch(_0x334238){try{console['info'](_0x58706d['join']('\x0a'));}catch(_0x26e861){}}else try{console[_0x3078('0x6')][_0x3078('0xc')](console,_0x58706d);}catch(_0x4dfae2){try{console[_0x3078('0x6')](_0x58706d[_0x3078('0xd')]('\x0a'));}catch(_0x5ca32c){}}else try{console[_0x3078('0x7')]['apply'](console,_0x58706d);}catch(_0x182570){try{console[_0x3078('0x7')](_0x58706d[_0x3078('0xd')]('\x0a'));}catch(_0x209ebd){}}}};_0x5b3ace['fn'][_0x3078('0xe')]=function(){var _0x39d861=_0x5b3ace(this);_0x39d861[_0x3078('0xf')](function(_0x5a0708){_0x5b3ace(this)[_0x3078('0x10')](_0x3078('0x11')+_0x5a0708);});_0x39d861[_0x3078('0x12')]()['addClass'](_0x3078('0x13'));_0x39d861['last']()[_0x3078('0x10')](_0x3078('0x14'));return _0x39d861;};_0x5b3ace['fn'][_0x3078('0x1')]=function(){};var _0x4d72c2=function(_0x37854b){var _0x3bc7fa={'p':_0x3078('0x15')};return function(_0x10fcfb){var _0x206731,_0x86e143,_0x374d19,_0x89f9a4;_0x86e143=function(_0x33d0df){return _0x33d0df;};_0x374d19=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x10fcfb=_0x10fcfb['d'+_0x374d19[0x10]+'c'+_0x374d19[0x11]+'m'+_0x86e143(_0x374d19[0x1])+'n'+_0x374d19[0xd]]['l'+_0x374d19[0x12]+'c'+_0x374d19[0x0]+'ti'+_0x86e143('o')+'n'];_0x206731=function(_0x25ed42){return escape(encodeURIComponent(_0x25ed42['replace'](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x44466d){return String[_0x3078('0x16')](('Z'>=_0x44466d?0x5a:0x7a)>=(_0x44466d=_0x44466d['charCodeAt'](0x0)+0xd)?_0x44466d:_0x44466d-0x1a);})));};var _0x2696a4=_0x206731(_0x10fcfb[[_0x374d19[0x9],_0x86e143('o'),_0x374d19[0xc],_0x374d19[_0x86e143(0xd)]][_0x3078('0xd')]('')]);_0x206731=_0x206731((window[['js',_0x86e143('no'),'m',_0x374d19[0x1],_0x374d19[0x4][_0x3078('0x17')](),_0x3078('0x18')][_0x3078('0xd')]('')]||_0x3078('0x19'))+['.v',_0x374d19[0xd],'e',_0x86e143('x'),'co',_0x86e143('mm'),_0x3078('0x1a'),_0x374d19[0x1],'.c',_0x86e143('o'),'m.',_0x374d19[0x13],'r'][_0x3078('0xd')](''));for(var _0x7e5efd in _0x3bc7fa){if(_0x206731===_0x7e5efd+_0x3bc7fa[_0x7e5efd]||_0x2696a4===_0x7e5efd+_0x3bc7fa[_0x7e5efd]){_0x89f9a4='tr'+_0x374d19[0x11]+'e';break;}_0x89f9a4='f'+_0x374d19[0x0]+'ls'+_0x86e143(_0x374d19[0x1])+'';}_0x86e143=!0x1;-0x1<_0x10fcfb[[_0x374d19[0xc],'e',_0x374d19[0x0],'rc',_0x374d19[0x9]][_0x3078('0xd')]('')][_0x3078('0x1b')](_0x3078('0x1c'))&&(_0x86e143=!0x0);return[_0x89f9a4,_0x86e143];}(_0x37854b);}(window);if(!eval(_0x4d72c2[0x0]))return _0x4d72c2[0x1]?_0x2c15ac(_0x3078('0x1d')):!0x1;_0x1efd39=function(_0x4ee5d9){var _0x4a980f,_0xde1f88,_0x5ed0a7;_0x5ed0a7=_0x4ee5d9['find'](_0x3078('0x1e'));_0x4a980f=_0x5ed0a7[_0x3078('0x1f')](_0x3078('0x20'));_0xde1f88=_0x5ed0a7[_0x3078('0x1f')]('.qd-am-collection');if(!(_0x4a980f['length']||_0xde1f88[_0x3078('0x21')]))return;_0x4a980f['parent']()[_0x3078('0x10')]('qd-am-banner-wrapper');_0xde1f88[_0x3078('0x22')]()[_0x3078('0x10')](_0x3078('0x23'));_0x5b3ace['qdAjax']({'url':_0x27f0e5['url'],'dataType':_0x3078('0x24'),'success':function(_0x1531c8){var _0x246b74=_0x5b3ace(_0x1531c8);_0x4a980f['each'](function(){var _0xf45038,_0x4c2790;_0x4c2790=_0x5b3ace(this);_0xf45038=_0x246b74[_0x3078('0x25')](_0x3078('0x26')+_0x4c2790['attr'](_0x3078('0x27'))+'\x27]');if(!_0xf45038[_0x3078('0x21')])return;_0xf45038[_0x3078('0xf')](function(){_0x5b3ace(this)[_0x3078('0x28')]('.box-banner')[_0x3078('0x29')]()[_0x3078('0x2a')](_0x4c2790);});_0x4c2790[_0x3078('0x2b')]();})['addClass'](_0x3078('0x2c'));_0xde1f88[_0x3078('0xf')](function(){var _0x3610b6={},_0x57a1b2;_0x57a1b2=_0x5b3ace(this);_0x246b74[_0x3078('0x25')]('h2')[_0x3078('0xf')](function(){if(_0x5b3ace(this)[_0x3078('0x2d')]()[_0x3078('0x2e')]()[_0x3078('0xa')]()==_0x57a1b2[_0x3078('0x2f')](_0x3078('0x27'))[_0x3078('0x2e')]()[_0x3078('0xa')]()){_0x3610b6=_0x5b3ace(this);return![];}});if(!_0x3610b6[_0x3078('0x21')])return;_0x3610b6[_0x3078('0xf')](function(){_0x5b3ace(this)[_0x3078('0x28')](_0x3078('0x30'))[_0x3078('0x29')]()[_0x3078('0x2a')](_0x57a1b2);});_0x57a1b2[_0x3078('0x2b')]();})['addClass']('qd-am-content-loaded');},'error':function(){_0x2c15ac(_0x3078('0x31')+_0x27f0e5[_0x3078('0x32')]+_0x3078('0x33'));},'complete':function(){_0x27f0e5[_0x3078('0x34')][_0x3078('0x35')](this);_0x5b3ace(window)[_0x3078('0x36')](_0x3078('0x37'),_0x4ee5d9);},'clearQueueDelay':0xbb8});};_0x5b3ace[_0x3078('0x1')]=function(_0x3af6d5){var _0x5e5cef=_0x3af6d5[_0x3078('0x25')](_0x3078('0x38'))[_0x3078('0xf')](function(){var _0x539c26,_0x7049d,_0x5cf9ac,_0x472fff;_0x539c26=_0x5b3ace(this);if(!_0x539c26[_0x3078('0x21')])return _0x2c15ac([_0x3078('0x39'),_0x3af6d5],_0x3078('0x3a'));_0x539c26[_0x3078('0x25')](_0x3078('0x3b'))[_0x3078('0x22')]()[_0x3078('0x10')](_0x3078('0x3c'));_0x539c26[_0x3078('0x25')]('li')[_0x3078('0xf')](function(){var _0x2c0682=_0x5b3ace(this),_0x529cd1;_0x529cd1=_0x2c0682[_0x3078('0x3d')](_0x3078('0x3e'));if(!_0x529cd1[_0x3078('0x21')])return;_0x2c0682[_0x3078('0x10')](_0x3078('0x3f')+_0x529cd1[_0x3078('0x12')]()[_0x3078('0x2d')]()['trim']()[_0x3078('0x40')]()[_0x3078('0x41')](/\./g,'')[_0x3078('0x41')](/\s/g,'-')[_0x3078('0xa')]());});_0x7049d=_0x539c26['find'](_0x3078('0x42'))[_0x3078('0xe')]();_0x539c26[_0x3078('0x10')](_0x3078('0x43'));_0x5cf9ac=_0x7049d[_0x3078('0x25')](_0x3078('0x44'));_0x5cf9ac['each'](function(){var _0x4b709c=_0x5b3ace(this),_0x137e08;_0x137e08=_0x4b709c[_0x3078('0x25')]('>li')[_0x3078('0xe')]()[_0x3078('0x10')](_0x3078('0x45'));_0x4b709c[_0x3078('0x10')]('qd-am-dropdown-menu');_0x4b709c[_0x3078('0x22')]()[_0x3078('0x10')]('qd-am-dropdown');});_0x5cf9ac[_0x3078('0x10')](_0x3078('0x46'));var _0x464aef=0x0;var _0x3c0e50=function(_0x540d43){_0x464aef=_0x464aef+0x1;var _0x3279a5=_0x540d43[_0x3078('0x3d')]('li');var _0x59a1ff=_0x3279a5[_0x3078('0x3d')]('*');if(!_0x59a1ff['length'])return;_0x59a1ff[_0x3078('0x10')]('qd-am-level-'+_0x464aef);_0x3c0e50(_0x59a1ff);};_0x3c0e50(_0x539c26);_0x539c26[_0x3078('0x47')](_0x539c26['find']('ul'))[_0x3078('0xf')](function(){var _0x36c085=_0x5b3ace(this);_0x36c085[_0x3078('0x10')]('qd-am-'+_0x36c085[_0x3078('0x3d')]('li')[_0x3078('0x21')]+_0x3078('0x48'));});});_0x1efd39(_0x5e5cef);_0x27f0e5['callback']['call'](this);_0x5b3ace(window)[_0x3078('0x36')](_0x3078('0x49'),_0x3af6d5);};_0x5b3ace['fn']['QD_amazingMenu']=function(_0x7256ed){var _0x1f03b9=_0x5b3ace(this);if(!_0x1f03b9['length'])return _0x1f03b9;_0x27f0e5=_0x5b3ace[_0x3078('0x4a')]({},_0x2dc004,_0x7256ed);_0x1f03b9['exec']=new _0x5b3ace[(_0x3078('0x1'))](_0x5b3ace(this));return _0x1f03b9;};_0x5b3ace(function(){_0x5b3ace('.qd_amazing_menu_auto')[_0x3078('0x1')]();});}(this));

// smart cart
var _0x2ed4=['function','exec','.qd-ddc-wrapper','addClass','qd-ddc-prodLoaded','QD_checkoutQueue','totalizers','shippingData','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho','Este\x20método\x20esta\x20descontinuado!','qd-ddc-noItems','.qd-ddc-prodWrapper2','empty','productCategoryIds','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','attr','qd-ddc-','sellingPrice','Grátis','meta[name=currency]','content','.qd-ddc-quantity','.qd-ddc-remove','.qd-ddc-image','imageUrl','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','appendTo','.qd-ddc-shipping\x20input','address','postalCode','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','actionButtons','filter','[data-sku=\x27','lastSku','parent','qd-ddc-lastAddedFixed','qd-ddc-lastAdded','qd-ddc-product-add-time-v2','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','qd-ddc-product-add-time','qd-ddc-cart-rendered','callbackProductsList\x20não\x20é\x20uma\x20função','insertProdImg','forceImageHTTPS','string','http','https','qd-loaded','load','src','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','alerta','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','data-sku','data-sku-index','changeQantity','.qd-ddc-prodQttWrapper:not(.qd_on)','qd_on','.qd-ddc-quantityMore','click.qd_ddc_more','qd-loading','click.qd_ddc_minus','keyup.qd_ddc_change','.qd-ddc-prodRow','click.qd_ddc_remove','removeProduct','stop','slideUp','remove','formatCepField','data','qdDdcLastPostalCode','calculateShipping','BRA','done','.qd-ddc-cep-tooltip-text','.qd-dd-cep-slas','logisticsInfo','slas','<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>','shippingEstimate','\x20dia\x20útil','\x20dias\x20útéis','<tr></tr>','<td>\x20R$\x20','price','</td><td>','name',',\x20entrega\x20em\x20','\x20para\x20o\x20CEP\x20','</td>','tbody','.qd-ddc-cep-close','fail','Não\x20foi\x20possível\x20calcular\x20o\x20frete','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','quantity','index','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','atenção\x20esta\x20método\x20esta\x20descontinuado','boolean','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2','height','updateOnlyHover','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','Callback\x20não\x20é\x20uma\x20função','buyButtonClicked','quickViewUpdate','allowRecalculate','productId','prod_','prodId','qtt','.qd-bap-wrapper','.qd-bap-item-added','qd-bap-item-added','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd-bap-qtt','.qd_bap_wrapper_content','prepend','.qdDdcContainer','QD_smartCart','selector','dropDown','QD_buyButton','buyButton','smartCart','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','getParent','closest','replace','abs','undefined','pow','round','split','length','join','_QuatroDigital_CartData','Callbacks','error','Oooops!\x20','message','object','info','unshift','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','toLowerCase','aviso','apply','warn','_QuatroDigital_DropDown','allowUpdate','QD_dropDownCart','fromCharCode','charCodeAt','toUpperCase','---','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','extend','Ir\x20ao\x20Carrinho','Finalizar\x20Compra','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','Continuar\x20Comprando','<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>','skuName','smartCheckout','vtexjs','script','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','checkout','SDK','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','cartContainer','<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>','append','find','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','add','.qd_ddc_lightBoxOverlay','click.qd_ddc_closeFn','removeClass','qd-bb-lightBoxProdAdd','body','qd-bb-lightBoxBodyProdAdd','off','keyup.qd_ddc_closeFn','.qd-ddc-prodWrapper','.qd-ddc-scrollUp','scrollCart','.qd-ddc-scrollDown','click.qd_ddc_scrollDown','.qd-ddc-shipping\x20.qd-ddc-cep-tooltip-text','.qd-ddc-shipping\x20.qd-ddc-cep','val','keyup.qd_ddc_cep','keyCode','click','.qd-ddc-cep-btn','preventDefault','toggle','hide','click._QD_DDC_closeShipping','target','.qd-ddc-cep-tooltip','.qd-ddc-cep-ok','shippingCalculate','.qd-ddc-cep','mouseenter.qd_ddc_hover','getCartInfoByUrl','simpleCart','cartIsEmpty','texts','cartTotal','#value','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','#items','#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','#total','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','.qd-ddc-viewCart','html','linkCart','.qd_ddc_continueShopping','continueShopping','.qd-ddc-checkout','.qd-ddc-infoTotal','shippingForm','.qd-ddc-emptyCart\x20p','emptyCart','each','call','callback','.qd-ddc-infoTotalValue','total','.qd-ddc-infoTotalItems','.qd-ddc-infoTotalShipping','shipping','.qd-ddc-infoAllTotal','items','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','dataOptionsCache','timeRemoveNewItemClass','getOrderForm','_QuatroDigital_AmountProduct'];(function(_0x5d9b91,_0x4d89b4){var _0x1fba36=function(_0x4f7fa5){while(--_0x4f7fa5){_0x5d9b91['push'](_0x5d9b91['shift']());}};_0x1fba36(++_0x4d89b4);}(_0x2ed4,0x84));var _0x52b0=function(_0x52faae,_0x5d541a){_0x52faae=_0x52faae-0x0;var _0x2d2bfb=_0x2ed4[_0x52faae];return _0x2d2bfb;};(function(_0x1bb1f9){_0x1bb1f9['fn'][_0x52b0('0x0')]=_0x1bb1f9['fn'][_0x52b0('0x1')];}(jQuery));function qd_number_format(_0x32bd45,_0x56ac0a,_0x458681,_0x116a51){_0x32bd45=(_0x32bd45+'')[_0x52b0('0x2')](/[^0-9+\-Ee.]/g,'');_0x32bd45=isFinite(+_0x32bd45)?+_0x32bd45:0x0;_0x56ac0a=isFinite(+_0x56ac0a)?Math[_0x52b0('0x3')](_0x56ac0a):0x0;_0x116a51=_0x52b0('0x4')===typeof _0x116a51?',':_0x116a51;_0x458681=_0x52b0('0x4')===typeof _0x458681?'.':_0x458681;var _0x4cf632='',_0x4cf632=function(_0x40df40,_0x4a3bb3){var _0x56ac0a=Math[_0x52b0('0x5')](0xa,_0x4a3bb3);return''+(Math[_0x52b0('0x6')](_0x40df40*_0x56ac0a)/_0x56ac0a)['toFixed'](_0x4a3bb3);},_0x4cf632=(_0x56ac0a?_0x4cf632(_0x32bd45,_0x56ac0a):''+Math[_0x52b0('0x6')](_0x32bd45))[_0x52b0('0x7')]('.');0x3<_0x4cf632[0x0][_0x52b0('0x8')]&&(_0x4cf632[0x0]=_0x4cf632[0x0][_0x52b0('0x2')](/\B(?=(?:\d{3})+(?!\d))/g,_0x116a51));(_0x4cf632[0x1]||'')[_0x52b0('0x8')]<_0x56ac0a&&(_0x4cf632[0x1]=_0x4cf632[0x1]||'',_0x4cf632[0x1]+=Array(_0x56ac0a-_0x4cf632[0x1][_0x52b0('0x8')]+0x1)['join']('0'));return _0x4cf632[_0x52b0('0x9')](_0x458681);};(function(){try{window[_0x52b0('0xa')]=window[_0x52b0('0xa')]||{},window[_0x52b0('0xa')]['callback']=window['_QuatroDigital_CartData']['callback']||$[_0x52b0('0xb')]();}catch(_0x12fa32){_0x52b0('0x4')!==typeof console&&'function'===typeof console[_0x52b0('0xc')]&&console[_0x52b0('0xc')](_0x52b0('0xd'),_0x12fa32[_0x52b0('0xe')]);}}());(function(_0x1160ca){try{var _0x39a26b=jQuery,_0x2845bc=function(_0x59dead,_0x1bc5de){if(_0x52b0('0xf')===typeof console&&_0x52b0('0x4')!==typeof console['error']&&'undefined'!==typeof console[_0x52b0('0x10')]&&_0x52b0('0x4')!==typeof console['warn']){var _0x31eb88;_0x52b0('0xf')===typeof _0x59dead?(_0x59dead[_0x52b0('0x11')](_0x52b0('0x12')),_0x31eb88=_0x59dead):_0x31eb88=[_0x52b0('0x12')+_0x59dead];if(_0x52b0('0x4')===typeof _0x1bc5de||'alerta'!==_0x1bc5de[_0x52b0('0x13')]()&&_0x52b0('0x14')!==_0x1bc5de['toLowerCase']())if(_0x52b0('0x4')!==typeof _0x1bc5de&&_0x52b0('0x10')===_0x1bc5de['toLowerCase']())try{console[_0x52b0('0x10')]['apply'](console,_0x31eb88);}catch(_0x3a85c0){try{console[_0x52b0('0x10')](_0x31eb88[_0x52b0('0x9')]('\x0a'));}catch(_0x4b2a25){}}else try{console['error'][_0x52b0('0x15')](console,_0x31eb88);}catch(_0x45b18f){try{console[_0x52b0('0xc')](_0x31eb88[_0x52b0('0x9')]('\x0a'));}catch(_0x51d043){}}else try{console[_0x52b0('0x16')][_0x52b0('0x15')](console,_0x31eb88);}catch(_0x367238){try{console['warn'](_0x31eb88['join']('\x0a'));}catch(_0x57efd6){}}}};window[_0x52b0('0x17')]=window[_0x52b0('0x17')]||{};window[_0x52b0('0x17')][_0x52b0('0x18')]=!0x0;_0x39a26b[_0x52b0('0x19')]=function(){};_0x39a26b['fn']['QD_dropDownCart']=function(){return{'fn':new _0x39a26b()};};var _0x4d292e=function(_0x410e16){var _0x197f52={'p':'neynoretnznfx%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe'};return function(_0x2408b6){var _0x5aa4fa=function(_0xdb338d){return _0xdb338d;};var _0x244da6=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x2408b6=_0x2408b6['d'+_0x244da6[0x10]+'c'+_0x244da6[0x11]+'m'+_0x5aa4fa(_0x244da6[0x1])+'n'+_0x244da6[0xd]]['l'+_0x244da6[0x12]+'c'+_0x244da6[0x0]+'ti'+_0x5aa4fa('o')+'n'];var _0x91e7c9=function(_0x3fb7b9){return escape(encodeURIComponent(_0x3fb7b9[_0x52b0('0x2')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x352a4f){return String[_0x52b0('0x1a')](('Z'>=_0x352a4f?0x5a:0x7a)>=(_0x352a4f=_0x352a4f[_0x52b0('0x1b')](0x0)+0xd)?_0x352a4f:_0x352a4f-0x1a);})));};var _0x84d9ae=_0x91e7c9(_0x2408b6[[_0x244da6[0x9],_0x5aa4fa('o'),_0x244da6[0xc],_0x244da6[_0x5aa4fa(0xd)]]['join']('')]);_0x91e7c9=_0x91e7c9((window[['js',_0x5aa4fa('no'),'m',_0x244da6[0x1],_0x244da6[0x4][_0x52b0('0x1c')](),'ite'][_0x52b0('0x9')]('')]||_0x52b0('0x1d'))+['.v',_0x244da6[0xd],'e',_0x5aa4fa('x'),'co',_0x5aa4fa('mm'),'erc',_0x244da6[0x1],'.c',_0x5aa4fa('o'),'m.',_0x244da6[0x13],'r'][_0x52b0('0x9')](''));for(var _0x39d0ff in _0x197f52){if(_0x91e7c9===_0x39d0ff+_0x197f52[_0x39d0ff]||_0x84d9ae===_0x39d0ff+_0x197f52[_0x39d0ff]){var _0x15ff9b='tr'+_0x244da6[0x11]+'e';break;}_0x15ff9b='f'+_0x244da6[0x0]+'ls'+_0x5aa4fa(_0x244da6[0x1])+'';}_0x5aa4fa=!0x1;-0x1<_0x2408b6[[_0x244da6[0xc],'e',_0x244da6[0x0],'rc',_0x244da6[0x9]][_0x52b0('0x9')]('')][_0x52b0('0x1e')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x5aa4fa=!0x0);return[_0x15ff9b,_0x5aa4fa];}(_0x410e16);}(window);if(!eval(_0x4d292e[0x0]))return _0x4d292e[0x1]?_0x2845bc(_0x52b0('0x1f')):!0x1;_0x39a26b[_0x52b0('0x19')]=function(_0x20de89,_0xa0f4c9){var _0x4b936c=_0x39a26b(_0x20de89);if(!_0x4b936c['length'])return _0x4b936c;var _0x551723=_0x39a26b[_0x52b0('0x20')](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0x52b0('0x21'),'linkCheckout':_0x52b0('0x22'),'cartTotal':_0x52b0('0x23'),'emptyCart':_0x52b0('0x24'),'continueShopping':_0x52b0('0x25'),'shippingForm':_0x52b0('0x26')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'forceImageHTTPS':!0x1,'skuName':function(_0x2dce68){return _0x2dce68[_0x52b0('0x27')]||_0x2dce68['name'];},'callback':function(){},'callbackProductsList':function(){}},_0xa0f4c9);_0x39a26b('');var _0x1dd3b5=this;if(_0x551723[_0x52b0('0x28')]){var _0x39ac3e=!0x1;_0x52b0('0x4')===typeof window[_0x52b0('0x29')]&&(_0x2845bc('A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN'),_0x39a26b['ajax']({'url':'//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','async':!0x1,'dataType':_0x52b0('0x2a'),'error':function(){_0x2845bc(_0x52b0('0x2b'));_0x39ac3e=!0x0;}}));if(_0x39ac3e)return _0x2845bc(_0x52b0('0x2c'));}if(_0x52b0('0xf')===typeof window[_0x52b0('0x29')]&&_0x52b0('0x4')!==typeof window['vtexjs']['checkout'])var _0x1160ca=window[_0x52b0('0x29')]['checkout'];else if('object'===typeof vtex&&_0x52b0('0xf')===typeof vtex[_0x52b0('0x2d')]&&_0x52b0('0x4')!==typeof vtex[_0x52b0('0x2d')]['SDK'])_0x1160ca=new vtex[(_0x52b0('0x2d'))][(_0x52b0('0x2e'))]();else return _0x2845bc(_0x52b0('0x2f'));_0x1dd3b5[_0x52b0('0x30')]=_0x52b0('0x31');var _0xbc6473=function(_0x33df05){_0x39a26b(this)[_0x52b0('0x32')](_0x33df05);_0x33df05[_0x52b0('0x33')](_0x52b0('0x34'))[_0x52b0('0x35')](_0x39a26b(_0x52b0('0x36')))['on'](_0x52b0('0x37'),function(){_0x4b936c[_0x52b0('0x38')](_0x52b0('0x39'));_0x39a26b(document[_0x52b0('0x3a')])[_0x52b0('0x38')](_0x52b0('0x3b'));});_0x39a26b(document)[_0x52b0('0x3c')](_0x52b0('0x3d'))['on'](_0x52b0('0x3d'),function(_0x3a4bd9){0x1b==_0x3a4bd9['keyCode']&&(_0x4b936c['removeClass'](_0x52b0('0x39')),_0x39a26b(document[_0x52b0('0x3a')])[_0x52b0('0x38')](_0x52b0('0x3b')));});var _0x4af3bb=_0x33df05[_0x52b0('0x33')](_0x52b0('0x3e'));_0x33df05[_0x52b0('0x33')](_0x52b0('0x3f'))['on']('click.qd_ddc_scrollUp',function(){_0x1dd3b5[_0x52b0('0x40')]('-',void 0x0,void 0x0,_0x4af3bb);return!0x1;});_0x33df05[_0x52b0('0x33')](_0x52b0('0x41'))['on'](_0x52b0('0x42'),function(){_0x1dd3b5['scrollCart'](void 0x0,void 0x0,void 0x0,_0x4af3bb);return!0x1;});var _0x34d132=_0x33df05['find'](_0x52b0('0x43'));_0x33df05[_0x52b0('0x33')](_0x52b0('0x44'))[_0x52b0('0x45')]('')['on'](_0x52b0('0x46'),function(_0x2137e1){_0x1dd3b5['formatCepField'](_0x39a26b(this));0xd==_0x2137e1[_0x52b0('0x47')]&&_0x33df05['find']('.qd-ddc-shipping\x20.qd-ddc-cep-ok')[_0x52b0('0x48')]();});_0x33df05[_0x52b0('0x33')](_0x52b0('0x49'))[_0x52b0('0x48')](function(_0x16f744){_0x16f744[_0x52b0('0x4a')]();_0x34d132[_0x52b0('0x4b')]();});_0x33df05['find']('.qd-ddc-cep-close')[_0x52b0('0x48')](function(_0x8ce3d2){_0x8ce3d2['preventDefault']();_0x34d132[_0x52b0('0x4c')]();});_0x39a26b(document)[_0x52b0('0x3c')](_0x52b0('0x4d'))['on']('click._QD_DDC_closeShipping',function(_0x1c70ba){_0x39a26b(_0x1c70ba[_0x52b0('0x4e')])[_0x52b0('0x1')](_0x33df05[_0x52b0('0x33')](_0x52b0('0x4f')))[_0x52b0('0x8')]||_0x34d132[_0x52b0('0x4c')]();});_0x33df05['find'](_0x52b0('0x50'))[_0x52b0('0x48')](function(_0x16b3c0){_0x16b3c0[_0x52b0('0x4a')]();_0x1dd3b5[_0x52b0('0x51')](_0x33df05[_0x52b0('0x33')](_0x52b0('0x52')));});if(_0x551723['updateOnlyHover']){var _0xa0f4c9=0x0;_0x39a26b(this)['on'](_0x52b0('0x53'),function(){var _0x33df05=function(){window['_QuatroDigital_DropDown'][_0x52b0('0x18')]&&(_0x1dd3b5[_0x52b0('0x54')](),window[_0x52b0('0x17')][_0x52b0('0x18')]=!0x1,_0x39a26b['fn'][_0x52b0('0x55')](!0x0),_0x1dd3b5[_0x52b0('0x56')]());};_0xa0f4c9=setInterval(function(){_0x33df05();},0x258);_0x33df05();});_0x39a26b(this)['on']('mouseleave.qd_ddc_hover',function(){clearInterval(_0xa0f4c9);});}};var _0x407bb3=function(_0x327387){_0x327387=_0x39a26b(_0x327387);_0x551723[_0x52b0('0x57')][_0x52b0('0x58')]=_0x551723[_0x52b0('0x57')][_0x52b0('0x58')][_0x52b0('0x2')](_0x52b0('0x59'),_0x52b0('0x5a'));_0x551723[_0x52b0('0x57')][_0x52b0('0x58')]=_0x551723[_0x52b0('0x57')]['cartTotal']['replace'](_0x52b0('0x5b'),'<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>');_0x551723[_0x52b0('0x57')][_0x52b0('0x58')]=_0x551723['texts'][_0x52b0('0x58')][_0x52b0('0x2')](_0x52b0('0x5c'),_0x52b0('0x5d'));_0x551723[_0x52b0('0x57')][_0x52b0('0x58')]=_0x551723[_0x52b0('0x57')]['cartTotal'][_0x52b0('0x2')](_0x52b0('0x5e'),_0x52b0('0x5f'));_0x327387[_0x52b0('0x33')](_0x52b0('0x60'))[_0x52b0('0x61')](_0x551723[_0x52b0('0x57')][_0x52b0('0x62')]);_0x327387[_0x52b0('0x33')](_0x52b0('0x63'))['html'](_0x551723['texts'][_0x52b0('0x64')]);_0x327387[_0x52b0('0x33')](_0x52b0('0x65'))['html'](_0x551723[_0x52b0('0x57')]['linkCheckout']);_0x327387[_0x52b0('0x33')](_0x52b0('0x66'))[_0x52b0('0x61')](_0x551723[_0x52b0('0x57')]['cartTotal']);_0x327387[_0x52b0('0x33')]('.qd-ddc-shipping')['html'](_0x551723[_0x52b0('0x57')][_0x52b0('0x67')]);_0x327387[_0x52b0('0x33')](_0x52b0('0x68'))['html'](_0x551723['texts'][_0x52b0('0x69')]);return _0x327387;}(this[_0x52b0('0x30')]);var _0x4ec3c5=0x0;_0x4b936c[_0x52b0('0x6a')](function(){0x0<_0x4ec3c5?_0xbc6473[_0x52b0('0x6b')](this,_0x407bb3['clone']()):_0xbc6473[_0x52b0('0x6b')](this,_0x407bb3);_0x4ec3c5++;});window[_0x52b0('0xa')][_0x52b0('0x6c')][_0x52b0('0x35')](function(){_0x39a26b(_0x52b0('0x6d'))[_0x52b0('0x61')](window[_0x52b0('0xa')][_0x52b0('0x6e')]||'--');_0x39a26b(_0x52b0('0x6f'))[_0x52b0('0x61')](window[_0x52b0('0xa')]['qtt']||'0');_0x39a26b(_0x52b0('0x70'))[_0x52b0('0x61')](window[_0x52b0('0xa')][_0x52b0('0x71')]||'--');_0x39a26b(_0x52b0('0x72'))[_0x52b0('0x61')](window[_0x52b0('0xa')]['allTotal']||'--');});var _0x5f4395=function(_0x1b1cc4,_0x3e6ac3){if(_0x52b0('0x4')===typeof _0x1b1cc4[_0x52b0('0x73')])return _0x2845bc(_0x52b0('0x74'));_0x1dd3b5['renderProductsList']['call'](this,_0x3e6ac3);};_0x1dd3b5[_0x52b0('0x54')]=function(_0x3754d5,_0x4e22de){_0x52b0('0x4')!=typeof _0x4e22de?window[_0x52b0('0x17')][_0x52b0('0x75')]=_0x4e22de:window[_0x52b0('0x17')][_0x52b0('0x75')]&&(_0x4e22de=window[_0x52b0('0x17')]['dataOptionsCache']);setTimeout(function(){window['_QuatroDigital_DropDown'][_0x52b0('0x75')]=void 0x0;},_0x551723[_0x52b0('0x76')]);_0x39a26b('.qd-ddc-wrapper')[_0x52b0('0x38')]('qd-ddc-prodLoaded');if(_0x551723[_0x52b0('0x28')]){var _0x2730f6=function(_0x30fd13){window['_QuatroDigital_DropDown'][_0x52b0('0x77')]=_0x30fd13;_0x5f4395(_0x30fd13,_0x4e22de);_0x52b0('0x4')!==typeof window[_0x52b0('0x78')]&&_0x52b0('0x79')===typeof window[_0x52b0('0x78')]['exec']&&window['_QuatroDigital_AmountProduct'][_0x52b0('0x7a')]['call'](this);_0x39a26b(_0x52b0('0x7b'))[_0x52b0('0x7c')](_0x52b0('0x7d'));};'undefined'!==typeof window['_QuatroDigital_DropDown'][_0x52b0('0x77')]?(_0x2730f6(window['_QuatroDigital_DropDown'][_0x52b0('0x77')]),_0x52b0('0x79')===typeof _0x3754d5&&_0x3754d5(window[_0x52b0('0x17')]['getOrderForm'])):_0x39a26b[_0x52b0('0x7e')]([_0x52b0('0x73'),_0x52b0('0x7f'),_0x52b0('0x80')],{'done':function(_0x3e2334){_0x2730f6[_0x52b0('0x6b')](this,_0x3e2334);_0x52b0('0x79')===typeof _0x3754d5&&_0x3754d5(_0x3e2334);},'fail':function(_0x384bc5){_0x2845bc([_0x52b0('0x81'),_0x384bc5]);}});}else alert(_0x52b0('0x82'));};_0x1dd3b5[_0x52b0('0x56')]=function(){var _0x3549f2=_0x39a26b(_0x52b0('0x7b'));_0x3549f2[_0x52b0('0x33')]('.qd-ddc-prodRow')['length']?_0x3549f2[_0x52b0('0x38')](_0x52b0('0x83')):_0x3549f2['addClass'](_0x52b0('0x83'));};_0x1dd3b5['renderProductsList']=function(_0x5748d0){var _0xa0f4c9=_0x39a26b(_0x52b0('0x84'));_0xa0f4c9[_0x52b0('0x85')]();_0xa0f4c9[_0x52b0('0x6a')](function(){var _0xa0f4c9=_0x39a26b(this),_0x353ec1,_0x5d5a72,_0x16770a=_0x39a26b(''),_0x22bacc;for(_0x22bacc in window[_0x52b0('0x17')][_0x52b0('0x77')][_0x52b0('0x73')])if('object'===typeof window[_0x52b0('0x17')]['getOrderForm'][_0x52b0('0x73')][_0x22bacc]){var _0x26e1ad=window[_0x52b0('0x17')]['getOrderForm']['items'][_0x22bacc];var _0x20de89=_0x26e1ad[_0x52b0('0x86')][_0x52b0('0x2')](/^\/|\/$/g,'')[_0x52b0('0x7')]('/');var _0x22caf3=_0x39a26b(_0x52b0('0x87'));_0x22caf3[_0x52b0('0x88')]({'data-sku':_0x26e1ad['id'],'data-sku-index':_0x22bacc,'data-qd-departament':_0x20de89[0x0],'data-qd-category':_0x20de89[_0x20de89['length']-0x1]});_0x22caf3[_0x52b0('0x7c')](_0x52b0('0x89')+_0x26e1ad['availability']);_0x22caf3[_0x52b0('0x33')]('.qd-ddc-prodName')['append'](_0x551723['skuName'](_0x26e1ad));_0x22caf3[_0x52b0('0x33')]('.qd-ddc-prodPrice')['append'](isNaN(_0x26e1ad[_0x52b0('0x8a')])?_0x26e1ad['sellingPrice']:0x0==_0x26e1ad[_0x52b0('0x8a')]?_0x52b0('0x8b'):(_0x39a26b(_0x52b0('0x8c'))[_0x52b0('0x88')](_0x52b0('0x8d'))||'R$')+'\x20'+qd_number_format(_0x26e1ad[_0x52b0('0x8a')]/0x64,0x2,',','.'));_0x22caf3[_0x52b0('0x33')](_0x52b0('0x8e'))['attr']({'data-sku':_0x26e1ad['id'],'data-sku-index':_0x22bacc})[_0x52b0('0x45')](_0x26e1ad['quantity']);_0x22caf3[_0x52b0('0x33')](_0x52b0('0x8f'))[_0x52b0('0x88')]({'data-sku':_0x26e1ad['id'],'data-sku-index':_0x22bacc});_0x1dd3b5['insertProdImg'](_0x26e1ad['id'],_0x22caf3[_0x52b0('0x33')](_0x52b0('0x90')),_0x26e1ad[_0x52b0('0x91')]);_0x22caf3[_0x52b0('0x33')](_0x52b0('0x92'))[_0x52b0('0x88')]({'data-sku':_0x26e1ad['id'],'data-sku-index':_0x22bacc});_0x22caf3[_0x52b0('0x93')](_0xa0f4c9);_0x16770a=_0x16770a['add'](_0x22caf3);}try{var _0xccae6a=_0xa0f4c9[_0x52b0('0x0')](_0x52b0('0x7b'))[_0x52b0('0x33')](_0x52b0('0x94'));_0xccae6a['length']&&''==_0xccae6a['val']()&&window[_0x52b0('0x17')]['getOrderForm'][_0x52b0('0x80')][_0x52b0('0x95')]&&_0xccae6a[_0x52b0('0x45')](window[_0x52b0('0x17')]['getOrderForm']['shippingData'][_0x52b0('0x95')][_0x52b0('0x96')]);}catch(_0x2cf6e0){_0x2845bc(_0x52b0('0x97')+_0x2cf6e0[_0x52b0('0xe')],'aviso');}_0x1dd3b5[_0x52b0('0x98')](_0xa0f4c9);_0x1dd3b5[_0x52b0('0x56')]();_0x5748d0&&_0x5748d0['lastSku']&&function(){_0x5d5a72=_0x16770a[_0x52b0('0x99')](_0x52b0('0x9a')+_0x5748d0[_0x52b0('0x9b')]+'\x27]');_0x5d5a72[_0x52b0('0x8')]&&(_0x353ec1=0x0,_0x16770a[_0x52b0('0x6a')](function(){var _0x5748d0=_0x39a26b(this);if(_0x5748d0['is'](_0x5d5a72))return!0x1;_0x353ec1+=_0x5748d0['outerHeight']();}),_0x1dd3b5[_0x52b0('0x40')](void 0x0,void 0x0,_0x353ec1,_0xa0f4c9[_0x52b0('0x35')](_0xa0f4c9[_0x52b0('0x9c')]())),_0x16770a[_0x52b0('0x38')](_0x52b0('0x9d')),function(_0x348a5c){_0x348a5c['addClass'](_0x52b0('0x9e'));_0x348a5c['addClass'](_0x52b0('0x9d'));setTimeout(function(){_0x348a5c[_0x52b0('0x38')](_0x52b0('0x9e'));},_0x551723[_0x52b0('0x76')]);}(_0x5d5a72),_0x39a26b(document[_0x52b0('0x3a')])[_0x52b0('0x7c')]('qd-ddc-product-add-time-v2'),setTimeout(function(){_0x39a26b(document[_0x52b0('0x3a')])[_0x52b0('0x38')](_0x52b0('0x9f'));},_0x551723['timeRemoveNewItemClass']));}();});(function(){_QuatroDigital_DropDown[_0x52b0('0x77')][_0x52b0('0x73')]['length']?(_0x39a26b(_0x52b0('0x3a'))[_0x52b0('0x38')](_0x52b0('0xa0'))[_0x52b0('0x7c')](_0x52b0('0xa1')),setTimeout(function(){_0x39a26b(_0x52b0('0x3a'))[_0x52b0('0x38')](_0x52b0('0xa2'));},_0x551723[_0x52b0('0x76')])):_0x39a26b('body')[_0x52b0('0x38')](_0x52b0('0xa3'))['addClass'](_0x52b0('0xa0'));}());_0x52b0('0x79')===typeof _0x551723['callbackProductsList']?_0x551723['callbackProductsList'][_0x52b0('0x6b')](this):_0x2845bc(_0x52b0('0xa4'));};_0x1dd3b5[_0x52b0('0xa5')]=function(_0x1f3a7e,_0x533eb0,_0x3f4df3){function _0x559b80(){_0x551723[_0x52b0('0xa6')]&&_0x52b0('0xa7')==typeof _0x3f4df3&&(_0x3f4df3=_0x3f4df3[_0x52b0('0x2')](_0x52b0('0xa8'),_0x52b0('0xa9')));_0x533eb0[_0x52b0('0x38')](_0x52b0('0xaa'))[_0x52b0('0xab')](function(){_0x39a26b(this)[_0x52b0('0x7c')](_0x52b0('0xaa'));})[_0x52b0('0x88')](_0x52b0('0xac'),_0x3f4df3);}_0x3f4df3?_0x559b80():isNaN(_0x1f3a7e)?_0x2845bc(_0x52b0('0xad'),_0x52b0('0xae')):alert(_0x52b0('0xaf'));};_0x1dd3b5[_0x52b0('0x98')]=function(_0x17be97){var _0xa0f4c9=function(_0x348d74,_0x446dd6){var _0xfd2919=_0x39a26b(_0x348d74);var _0x6ec97a=_0xfd2919[_0x52b0('0x88')](_0x52b0('0xb0'));var _0x20de89=_0xfd2919['attr'](_0x52b0('0xb1'));if(_0x6ec97a){var _0x443707=parseInt(_0xfd2919[_0x52b0('0x45')]())||0x1;_0x1dd3b5[_0x52b0('0xb2')]([_0x6ec97a,_0x20de89],_0x443707,_0x443707+0x1,function(_0x11ae05){_0xfd2919[_0x52b0('0x45')](_0x11ae05);_0x52b0('0x79')===typeof _0x446dd6&&_0x446dd6();});}};var _0x57a0ba=function(_0x271a15,_0xcb1856){var _0xa0f4c9=_0x39a26b(_0x271a15);var _0x368ced=_0xa0f4c9[_0x52b0('0x88')](_0x52b0('0xb0'));var _0x70fd8f=_0xa0f4c9['attr']('data-sku-index');if(_0x368ced){var _0x20de89=parseInt(_0xa0f4c9['val']())||0x2;_0x1dd3b5[_0x52b0('0xb2')]([_0x368ced,_0x70fd8f],_0x20de89,_0x20de89-0x1,function(_0x1f868d){_0xa0f4c9['val'](_0x1f868d);_0x52b0('0x79')===typeof _0xcb1856&&_0xcb1856();});}};var _0x31f687=function(_0x54c473,_0x28b729){var _0x19b602=_0x39a26b(_0x54c473);var _0x186768=_0x19b602[_0x52b0('0x88')]('data-sku');var _0x20de89=_0x19b602['attr'](_0x52b0('0xb1'));if(_0x186768){var _0x2f877c=parseInt(_0x19b602[_0x52b0('0x45')]())||0x1;_0x1dd3b5[_0x52b0('0xb2')]([_0x186768,_0x20de89],0x1,_0x2f877c,function(_0x193c56){_0x19b602['val'](_0x193c56);'function'===typeof _0x28b729&&_0x28b729();});}};var _0x20de89=_0x17be97[_0x52b0('0x33')](_0x52b0('0xb3'));_0x20de89[_0x52b0('0x7c')](_0x52b0('0xb4'))[_0x52b0('0x6a')](function(){var _0x17be97=_0x39a26b(this);_0x17be97[_0x52b0('0x33')](_0x52b0('0xb5'))['on'](_0x52b0('0xb6'),function(_0x18be4b){_0x18be4b[_0x52b0('0x4a')]();_0x20de89[_0x52b0('0x7c')](_0x52b0('0xb7'));_0xa0f4c9(_0x17be97[_0x52b0('0x33')]('.qd-ddc-quantity'),function(){_0x20de89[_0x52b0('0x38')](_0x52b0('0xb7'));});});_0x17be97[_0x52b0('0x33')]('.qd-ddc-quantityMinus')['on'](_0x52b0('0xb8'),function(_0x5f5cbf){_0x5f5cbf[_0x52b0('0x4a')]();_0x20de89[_0x52b0('0x7c')](_0x52b0('0xb7'));_0x57a0ba(_0x17be97[_0x52b0('0x33')]('.qd-ddc-quantity'),function(){_0x20de89[_0x52b0('0x38')](_0x52b0('0xb7'));});});_0x17be97['find']('.qd-ddc-quantity')['on']('focusout.qd_ddc_change',function(){_0x20de89[_0x52b0('0x7c')](_0x52b0('0xb7'));_0x31f687(this,function(){_0x20de89[_0x52b0('0x38')]('qd-loading');});});_0x17be97[_0x52b0('0x33')](_0x52b0('0x8e'))['on'](_0x52b0('0xb9'),function(_0x2b36f6){0xd==_0x2b36f6[_0x52b0('0x47')]&&(_0x20de89['addClass'](_0x52b0('0xb7')),_0x31f687(this,function(){_0x20de89[_0x52b0('0x38')](_0x52b0('0xb7'));}));});});_0x17be97[_0x52b0('0x33')](_0x52b0('0xba'))['each'](function(){var _0x17be97=_0x39a26b(this);_0x17be97[_0x52b0('0x33')](_0x52b0('0x8f'))['on'](_0x52b0('0xbb'),function(){_0x17be97[_0x52b0('0x7c')]('qd-loading');_0x1dd3b5[_0x52b0('0xbc')](_0x39a26b(this),function(_0x6d646c){_0x6d646c?_0x17be97[_0x52b0('0xbd')](!0x0)[_0x52b0('0xbe')](function(){_0x17be97[_0x52b0('0xbf')]();_0x1dd3b5[_0x52b0('0x56')]();}):_0x17be97[_0x52b0('0x38')](_0x52b0('0xb7'));});return!0x1;});});};_0x1dd3b5[_0x52b0('0xc0')]=function(_0x2277b0){var _0x3aeb38=_0x2277b0['val']();_0x3aeb38=_0x3aeb38[_0x52b0('0x2')](/[^0-9\-]/g,'');_0x3aeb38=_0x3aeb38[_0x52b0('0x2')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,'$1-$2$3');_0x3aeb38=_0x3aeb38[_0x52b0('0x2')](/(.{9}).*/g,'$1');_0x2277b0[_0x52b0('0x45')](_0x3aeb38);};_0x1dd3b5[_0x52b0('0x51')]=function(_0xd5fb5d){var _0x380f25=_0xd5fb5d[_0x52b0('0x45')]();0x9<=_0x380f25[_0x52b0('0x8')]&&(_0xd5fb5d[_0x52b0('0xc1')](_0x52b0('0xc2'))!=_0x380f25&&_0x1160ca[_0x52b0('0xc3')]({'postalCode':_0x380f25,'country':_0x52b0('0xc4')})[_0x52b0('0xc5')](function(_0x118c18){_0xd5fb5d['closest'](_0x52b0('0xc6'))[_0x52b0('0x33')](_0x52b0('0xc7'))[_0x52b0('0xbf')]();window[_0x52b0('0x17')]['getOrderForm']=_0x118c18;_0x1dd3b5[_0x52b0('0x54')]();_0x118c18=_0x118c18[_0x52b0('0x80')][_0x52b0('0xc8')][0x0][_0x52b0('0xc9')];for(var _0x20de89=_0x39a26b(_0x52b0('0xca')),_0x2005d8=0x0;_0x2005d8<_0x118c18[_0x52b0('0x8')];_0x2005d8++){var _0x9f929=_0x118c18[_0x2005d8],_0x5a48c9=0x1<_0x9f929[_0x52b0('0xcb')]?_0x9f929[_0x52b0('0xcb')][_0x52b0('0x2')]('bd',_0x52b0('0xcc')):_0x9f929['shippingEstimate']['replace']('bd',_0x52b0('0xcd')),_0x454232=_0x39a26b(_0x52b0('0xce'));_0x454232[_0x52b0('0x32')](_0x52b0('0xcf')+qd_number_format(_0x9f929[_0x52b0('0xd0')]/0x64,0x2,',','.')+_0x52b0('0xd1')+_0x9f929[_0x52b0('0xd2')]+_0x52b0('0xd3')+_0x5a48c9+_0x52b0('0xd4')+_0x380f25+_0x52b0('0xd5'));_0x454232[_0x52b0('0x93')](_0x20de89[_0x52b0('0x33')](_0x52b0('0xd6')));}_0x20de89['insertBefore'](_0xd5fb5d[_0x52b0('0x1')](_0x52b0('0xc6'))['find'](_0x52b0('0xd7')));})[_0x52b0('0xd8')](function(_0x416377){_0x2845bc([_0x52b0('0xd9'),_0x416377]);updateCartData();}),_0xd5fb5d[_0x52b0('0xc1')](_0x52b0('0xc2'),_0x380f25));};_0x1dd3b5[_0x52b0('0xb2')]=function(_0x3775e1,_0x3707c0,_0x160400,_0x2e095f){function _0x1f5623(_0x5452d0){_0x5452d0='boolean'!==typeof _0x5452d0?!0x1:_0x5452d0;_0x1dd3b5[_0x52b0('0x54')]();window['_QuatroDigital_DropDown']['allowUpdate']=!0x1;_0x1dd3b5[_0x52b0('0x56')]();_0x52b0('0x4')!==typeof window[_0x52b0('0x78')]&&_0x52b0('0x79')===typeof window[_0x52b0('0x78')][_0x52b0('0x7a')]&&window[_0x52b0('0x78')][_0x52b0('0x7a')][_0x52b0('0x6b')](this);'function'===typeof adminCart&&adminCart();_0x39a26b['fn'][_0x52b0('0x55')](!0x0,void 0x0,_0x5452d0);_0x52b0('0x79')===typeof _0x2e095f&&_0x2e095f(_0x3707c0);}_0x160400=_0x160400||0x1;if(0x1>_0x160400)return _0x3707c0;if(_0x551723['smartCheckout']){if(_0x52b0('0x4')===typeof window[_0x52b0('0x17')]['getOrderForm'][_0x52b0('0x73')][_0x3775e1[0x1]])return _0x2845bc(_0x52b0('0xda')+_0x3775e1[0x1]+']'),_0x3707c0;window['_QuatroDigital_DropDown'][_0x52b0('0x77')][_0x52b0('0x73')][_0x3775e1[0x1]][_0x52b0('0xdb')]=_0x160400;window['_QuatroDigital_DropDown'][_0x52b0('0x77')][_0x52b0('0x73')][_0x3775e1[0x1]][_0x52b0('0xdc')]=_0x3775e1[0x1];_0x1160ca['updateItems']([window[_0x52b0('0x17')]['getOrderForm'][_0x52b0('0x73')][_0x3775e1[0x1]]],['items','totalizers',_0x52b0('0x80')])[_0x52b0('0xc5')](function(_0x350220){window['_QuatroDigital_DropDown'][_0x52b0('0x77')]=_0x350220;_0x1f5623(!0x0);})['fail'](function(_0x2cc0f5){_0x2845bc([_0x52b0('0xdd'),_0x2cc0f5]);_0x1f5623();});}else _0x2845bc(_0x52b0('0xde'));};_0x1dd3b5[_0x52b0('0xbc')]=function(_0x19b94d,_0x192e81){function _0x562bc2(_0x3c608f){_0x3c608f=_0x52b0('0xdf')!==typeof _0x3c608f?!0x1:_0x3c608f;_0x52b0('0x4')!==typeof window[_0x52b0('0x78')]&&'function'===typeof window[_0x52b0('0x78')][_0x52b0('0x7a')]&&window[_0x52b0('0x78')]['exec'][_0x52b0('0x6b')](this);'function'===typeof adminCart&&adminCart();_0x39a26b['fn']['simpleCart'](!0x0,void 0x0,_0x3c608f);_0x52b0('0x79')===typeof _0x192e81&&_0x192e81(_0x23c94e);}var _0x23c94e=!0x1,_0x20de89=_0x39a26b(_0x19b94d)[_0x52b0('0x88')]('data-sku-index');if(_0x551723[_0x52b0('0x28')]){if(_0x52b0('0x4')===typeof window[_0x52b0('0x17')]['getOrderForm'][_0x52b0('0x73')][_0x20de89])return _0x2845bc(_0x52b0('0xda')+_0x20de89+']'),_0x23c94e;window['_QuatroDigital_DropDown'][_0x52b0('0x77')]['items'][_0x20de89][_0x52b0('0xdc')]=_0x20de89;_0x1160ca['removeItems']([window[_0x52b0('0x17')][_0x52b0('0x77')][_0x52b0('0x73')][_0x20de89]],['items',_0x52b0('0x7f'),_0x52b0('0x80')])[_0x52b0('0xc5')](function(_0x1389d2){_0x23c94e=!0x0;window['_QuatroDigital_DropDown'][_0x52b0('0x77')]=_0x1389d2;_0x5f4395(_0x1389d2);_0x562bc2(!0x0);})[_0x52b0('0xd8')](function(_0x1dd6c9){_0x2845bc([_0x52b0('0xe0'),_0x1dd6c9]);_0x562bc2();});}else alert('Atenção,\x20este\x20método\x20esta\x20descontinuado.');};_0x1dd3b5[_0x52b0('0x40')]=function(_0x585db6,_0x1b78f9,_0x3a0947,_0x278373){_0x278373=_0x278373||_0x39a26b(_0x52b0('0xe1'));_0x585db6=_0x585db6||'+';_0x1b78f9=_0x1b78f9||0.9*_0x278373[_0x52b0('0xe2')]();_0x278373[_0x52b0('0xbd')](!0x0,!0x0)['animate']({'scrollTop':isNaN(_0x3a0947)?_0x585db6+'='+_0x1b78f9+'px':_0x3a0947});};_0x551723[_0x52b0('0xe3')]||(_0x1dd3b5[_0x52b0('0x54')](),_0x39a26b['fn'][_0x52b0('0x55')](!0x0));_0x39a26b(window)['on'](_0x52b0('0xe4'),function(){try{window[_0x52b0('0x17')][_0x52b0('0x77')]=void 0x0,_0x1dd3b5[_0x52b0('0x54')]();}catch(_0x5ffbfc){_0x2845bc(_0x52b0('0xe5')+_0x5ffbfc[_0x52b0('0xe')],'avisso');}});_0x52b0('0x79')===typeof _0x551723['callback']?_0x551723[_0x52b0('0x6c')][_0x52b0('0x6b')](this):_0x2845bc(_0x52b0('0xe6'));};_0x39a26b['fn'][_0x52b0('0x19')]=function(_0x12ccf0){var _0x2346b0=_0x39a26b(this);_0x2346b0['fn']=new _0x39a26b[(_0x52b0('0x19'))](this,_0x12ccf0);return _0x2346b0;};}catch(_0x488bfe){_0x52b0('0x4')!==typeof console&&'function'===typeof console[_0x52b0('0xc')]&&console[_0x52b0('0xc')](_0x52b0('0xd'),_0x488bfe);}}(this));(function(_0x45bc61){try{var _0x11c9a1=jQuery;window[_0x52b0('0x78')]=window['_QuatroDigital_AmountProduct']||{};window[_0x52b0('0x78')][_0x52b0('0x73')]={};window[_0x52b0('0x78')]['allowRecalculate']=!0x1;window[_0x52b0('0x78')][_0x52b0('0xe7')]=!0x1;window[_0x52b0('0x78')][_0x52b0('0xe8')]=!0x1;var _0x2da961=function(){if(window[_0x52b0('0x78')][_0x52b0('0xe9')]){var _0x41f973=!0x1;var _0x179eb4={};window[_0x52b0('0x78')][_0x52b0('0x73')]={};for(_0x4339e6 in window['_QuatroDigital_DropDown'][_0x52b0('0x77')][_0x52b0('0x73')])if(_0x52b0('0xf')===typeof window[_0x52b0('0x17')][_0x52b0('0x77')][_0x52b0('0x73')][_0x4339e6]){var _0x9a0ba7=window[_0x52b0('0x17')][_0x52b0('0x77')][_0x52b0('0x73')][_0x4339e6];_0x52b0('0x4')!==typeof _0x9a0ba7[_0x52b0('0xea')]&&null!==_0x9a0ba7[_0x52b0('0xea')]&&''!==_0x9a0ba7['productId']&&(window[_0x52b0('0x78')]['items']['prod_'+_0x9a0ba7[_0x52b0('0xea')]]=window[_0x52b0('0x78')][_0x52b0('0x73')][_0x52b0('0xeb')+_0x9a0ba7[_0x52b0('0xea')]]||{},window[_0x52b0('0x78')][_0x52b0('0x73')]['prod_'+_0x9a0ba7['productId']][_0x52b0('0xec')]=_0x9a0ba7[_0x52b0('0xea')],_0x179eb4[_0x52b0('0xeb')+_0x9a0ba7['productId']]||(window[_0x52b0('0x78')]['items'][_0x52b0('0xeb')+_0x9a0ba7[_0x52b0('0xea')]][_0x52b0('0xed')]=0x0),window[_0x52b0('0x78')][_0x52b0('0x73')][_0x52b0('0xeb')+_0x9a0ba7['productId']]['qtt']+=_0x9a0ba7[_0x52b0('0xdb')],_0x41f973=!0x0,_0x179eb4[_0x52b0('0xeb')+_0x9a0ba7[_0x52b0('0xea')]]=!0x0);}var _0x4339e6=_0x41f973;}else _0x4339e6=void 0x0;window['_QuatroDigital_AmountProduct']['allowRecalculate']&&(_0x11c9a1(_0x52b0('0xee'))[_0x52b0('0xbf')](),_0x11c9a1(_0x52b0('0xef'))[_0x52b0('0x38')](_0x52b0('0xf0')));for(var _0x5b55ee in window[_0x52b0('0x78')][_0x52b0('0x73')]){_0x9a0ba7=window[_0x52b0('0x78')][_0x52b0('0x73')][_0x5b55ee];if(_0x52b0('0xf')!==typeof _0x9a0ba7)return;_0x179eb4=_0x11c9a1('input.qd-productId[value='+_0x9a0ba7[_0x52b0('0xec')]+']')[_0x52b0('0x0')]('li');if(window['_QuatroDigital_AmountProduct']['allowRecalculate']||!_0x179eb4[_0x52b0('0x33')]('.qd-bap-wrapper')['length'])_0x41f973=_0x11c9a1(_0x52b0('0xf1')),_0x41f973['find'](_0x52b0('0xf2'))[_0x52b0('0x61')](_0x9a0ba7[_0x52b0('0xed')]),_0x9a0ba7=_0x179eb4[_0x52b0('0x33')](_0x52b0('0xf3')),_0x9a0ba7[_0x52b0('0x8')]?_0x9a0ba7[_0x52b0('0xf4')](_0x41f973)[_0x52b0('0x7c')]('qd-bap-item-added'):_0x179eb4[_0x52b0('0xf4')](_0x41f973);}_0x4339e6&&(window[_0x52b0('0x78')][_0x52b0('0xe9')]=!0x1);};window[_0x52b0('0x78')][_0x52b0('0x7a')]=function(){window['_QuatroDigital_AmountProduct']['allowRecalculate']=!0x0;_0x2da961['call'](this);};_0x11c9a1(document)['ajaxStop'](function(){_0x2da961[_0x52b0('0x6b')](this);});}catch(_0x353153){_0x52b0('0x4')!==typeof console&&_0x52b0('0x79')===typeof console[_0x52b0('0xc')]&&console[_0x52b0('0xc')](_0x52b0('0xd'),_0x353153);}}(this));(function(){try{var _0x1f6867=jQuery,_0xcb1b9c,_0x1e0349={'selector':_0x52b0('0xf5'),'dropDown':{},'buyButton':{}};_0x1f6867[_0x52b0('0xf6')]=function(_0x19d5bd){var _0x527626={};_0xcb1b9c=_0x1f6867[_0x52b0('0x20')](!0x0,{},_0x1e0349,_0x19d5bd);_0x19d5bd=_0x1f6867(_0xcb1b9c[_0x52b0('0xf7')])[_0x52b0('0x19')](_0xcb1b9c[_0x52b0('0xf8')]);_0x527626['buyButton']='undefined'!==typeof _0xcb1b9c['dropDown']['updateOnlyHover']&&!0x1===_0xcb1b9c[_0x52b0('0xf8')][_0x52b0('0xe3')]?_0x1f6867(_0xcb1b9c[_0x52b0('0xf7')])[_0x52b0('0xf9')](_0x19d5bd['fn'],_0xcb1b9c['buyButton']):_0x1f6867(_0xcb1b9c[_0x52b0('0xf7')])[_0x52b0('0xf9')](_0xcb1b9c[_0x52b0('0xfa')]);_0x527626['dropDown']=_0x19d5bd;return _0x527626;};_0x1f6867['fn'][_0x52b0('0xfb')]=function(){_0x52b0('0xf')===typeof console&&_0x52b0('0x79')===typeof console[_0x52b0('0x10')]&&console[_0x52b0('0x10')](_0x52b0('0xfc'));};_0x1f6867[_0x52b0('0xfb')]=_0x1f6867['fn'][_0x52b0('0xfb')];}catch(_0x57f8d3){_0x52b0('0x4')!==typeof console&&'function'===typeof console[_0x52b0('0xc')]&&console['error'](_0x52b0('0xd'),_0x57f8d3);}}());

// vtex url parse
/* Quatro Digital - VTEX URL Parse // 1.4 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
var _0x8349=["\x6C\x69\x6E\x6B","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x3E\x3C\x2F\x61\x3E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x65\x72\x72\x6F\x72","\x50\x72\x6F\x62\x6C\x65\x6D\x61\x73\x20\x3A\x28\x20\x2E\x20\x44\x65\x74\x61\x6C\x68\x65\x73\x3A\x20","\x2F","\x73\x70\x6C\x69\x74","","\x72\x65\x70\x6C\x61\x63\x65","\x70\x61\x74\x68\x6E\x61\x6D\x65","\x2C","\x70\x6F\x70","\x6D\x61\x74\x63\x68","\x73\x65\x61\x72\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x6F\x62\x6A\x65\x63\x74","\x70\x75\x73\x68","\x63","\x6D\x61\x70","\x73\x68\x69\x66\x74","\x6F\x74\x68\x65\x72\x5F\x70\x61\x74\x68","\x6F\x74\x68\x65\x72\x5F\x73\x65\x61\x72\x63\x68","\x26","\x6F\x75\x74","\x67\x65\x74\x4D\x61\x70","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x6D\x65\x72\x67\x65\x55\x72\x6C","\x63\x61\x6C\x6C","\x65\x78\x74\x65\x6E\x64","\x67\x65\x74\x55\x72\x6C","\x6D\x61\x70\x3D","\x6A\x6F\x69\x6E","\x3F","\x51\x44\x5F\x56\x74\x65\x78\x55\x72\x6C\x50\x61\x72\x73\x65"];(function(){function _0x6ac7x1(_0x6ac7x2){try{this[_0x8349[0]]=$(_0x8349[1]+_0x6ac7x2+_0x8349[2])[0]}catch(c){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],c)}}function _0x6ac7x3(_0x6ac7x2){try{_0x6ac7x2=_0x6ac7x2||this[_0x8349[0]];var _0x6ac7x4=_0x6ac7x2[_0x8349[11]][_0x8349[10]](/\/\//g,_0x8349[7])[_0x8349[10]](/(^\/|\/$)/g,_0x8349[9])[_0x8349[8]](_0x8349[7]),_0x6ac7x5=((_0x6ac7x2[_0x8349[15]]||_0x8349[9])[_0x8349[14]](/map\=([^&]+)/i)||[_0x8349[9]])[_0x8349[13]]()[_0x8349[8]](_0x8349[12]);if(1==_0x6ac7x5[_0x8349[16]]&&0==_0x6ac7x5[0][_0x8349[16]]){if(_0x8349[17]== typeof defaultMap){_0x6ac7x5=defaultMap}else {for(var _0x6ac7x6=0;_0x6ac7x6<_0x6ac7x4[_0x8349[16]];_0x6ac7x6++){_0x6ac7x4[_0x6ac7x6][_0x8349[16]]&&_0x8349[7]!=_0x6ac7x4[_0x6ac7x6]&&_0x6ac7x5[_0x8349[18]](defaultMap)}}};for(var _0x6ac7x6={map:{},other_path:_0x8349[9]},_0x6ac7x7=0;_0x6ac7x7<_0x6ac7x5[_0x8349[16]];_0x6ac7x7++){_0x6ac7x5[_0x6ac7x7][_0x8349[16]]&&(_0x8349[19]==_0x6ac7x5[_0x6ac7x7]?(_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]]=_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]]||[],_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]][_0x8349[18]]((_0x6ac7x4||[_0x8349[9]])[_0x8349[21]]())):_0x6ac7x6[_0x8349[20]][_0x6ac7x5[_0x6ac7x7]]=(_0x6ac7x4||[_0x8349[9]])[_0x8349[21]]())};_0x6ac7x6[_0x8349[22]]=_0x6ac7x4;_0x6ac7x6[_0x8349[23]]=(_0x6ac7x2[_0x8349[15]]||_0x8349[9])[_0x8349[10]](/map\=([^&]+)/ig,_0x8349[9])[_0x8349[10]](/\&\&+/ig,_0x8349[24])[_0x8349[10]](/\?/g,_0x8349[9]);return this[_0x8349[25]]=_0x6ac7x6}catch(g){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],g)}}_0x6ac7x1[_0x8349[27]][_0x8349[26]]=_0x6ac7x3;_0x6ac7x1[_0x8349[27]][_0x8349[28]]=function(_0x6ac7x2,_0x6ac7x4){try{var _0x6ac7x5=_0x6ac7x3[_0x8349[29]](this,this[_0x8349[0]]),_0x6ac7x6=_0x6ac7x3[_0x8349[29]](this,$(_0x8349[1]+_0x6ac7x2+_0x8349[2])[0]);_0x6ac7x5[_0x8349[22]][_0x8349[16]]||(_0x6ac7x5[_0x8349[22]]=void(0));_0x6ac7x5[_0x8349[23]][_0x8349[16]]||(_0x6ac7x5[_0x8349[23]]=void(0));var _0x6ac7x7=$[_0x8349[30]](!0,{},_0x6ac7x6,_0x6ac7x5);if(_0x8349[17]== typeof _0x6ac7x4){for(_0x6ac7x6=0;_0x6ac7x6<_0x6ac7x4[_0x8349[16]];_0x6ac7x6++){_0x6ac7x7[_0x8349[20]][_0x6ac7x4[_0x6ac7x6]]&&(_0x6ac7x7[_0x8349[20]][_0x6ac7x4[_0x6ac7x6]]=_0x6ac7x5[_0x8349[20]][_0x6ac7x4[_0x6ac7x6]])}};return this[_0x8349[25]]=_0x6ac7x7}catch(g){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],g)}};_0x6ac7x1[_0x8349[27]][_0x8349[31]]=function(_0x6ac7x2){try{var _0x6ac7x4=[],_0x6ac7x5=[];_0x6ac7x2=_0x6ac7x2||{};for(var _0x6ac7x6 in this[_0x8349[25]][_0x8349[20]]){if(!_0x6ac7x2[_0x6ac7x6]){if(_0x8349[19]==_0x6ac7x6){for(var _0x6ac7x7=0;_0x6ac7x7<this[_0x8349[25]][_0x8349[20]][_0x6ac7x6][_0x8349[16]];_0x6ac7x7++){_0x6ac7x4[_0x8349[18]](this[_0x8349[25]][_0x8349[20]][_0x6ac7x6][_0x6ac7x7]),_0x6ac7x5[_0x8349[18]](_0x6ac7x6)}}else {_0x6ac7x4[_0x8349[18]](this[_0x8349[25]][_0x8349[20]][_0x6ac7x6]),_0x6ac7x5[_0x8349[18]](_0x6ac7x6)}}};var _0x6ac7x8=_0x6ac7x5[_0x8349[16]]?_0x8349[32]+_0x6ac7x5[_0x8349[33]](_0x8349[12])+_0x8349[24]:_0x8349[9];return _0x8349[7]+_0x6ac7x4[_0x8349[33]](_0x8349[7])+(this[_0x8349[25]][_0x8349[22]][_0x8349[16]]?_0x8349[7]+this[_0x8349[25]][_0x8349[22]][_0x8349[33]](_0x8349[7]):_0x8349[9])+_0x8349[34]+(_0x6ac7x8+this[_0x8349[25]][_0x8349[23]])[_0x8349[10]](/\&\&+/g,_0x8349[24])}catch(_0x6ac7x1){_0x8349[3]!== typeof console&&_0x8349[4]=== typeof console[_0x8349[5]]&&console[_0x8349[5]](_0x8349[6],_0x6ac7x1)}};window[_0x8349[35]]=_0x6ac7x1})()

/* Quatro Digital - QD Select Smart Research 2 // Carlos Vinicius // Todos os direitos reservados */
var _0x1ee4=['<option\x20value=\x22','\x22\x20data-qdssr-text=\x22','</option>','getCategory','cache','script:not([src])','innerHTML','indexOf','match','pop','push','extend','qdPlugin','.qd_auto_select_smart_research_2','function','QD_SelectSmartResearch2','object','undefined','error','info','warn','unshift','[Quatro\x20Digital\x20-\x20QD\x20Select\x20Smart\x20Research\x202]\x0a','toLowerCase','join','apply','Selecione\x20o\x20anterior','Selecione\x20o(a)\x20','location','href','find','.search-single-navigator\x20ul.','data-qdssr-title','each','text','trim','attr','h5.','length','Desculpe,\x20não\x20foi\x20possível\x20executar\x20sua\x20solicitação.\x20Por\x20favor\x20entre\x20em\x20contato\x20com\x20o\x20SAC.','neynoretnznfx%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','charCodeAt','toUpperCase','---','erc','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','options','Nenhuma\x20opção\x20foi\x20enviada,\x20é\x20esperado\x20um\x20array\x20com\x20sub\x20arrays\x20contendo\x20o\x20conjunto\x20chave/valor.','data-qdssr-ndx','Problemas\x20ao\x20definir\x20a\x20opção\x20selecionada.\x20Detalhes:\x20','message','addClass','optionsPlaceHolder','index','<div\x20class=\x22qd-ssr2-option-wrapper\x22>','labelMessage','</label>','<select\x20data-qdssr-ndx=\x22','\x22\x20id=\x22qd-ssr2-select-','\x22\x20data-qdssr-title=\x22','<option\x20value=\x22\x22></option>','disabledMessage','appendTo','select','add','bind','change','select[data-qdssr-ndx=','val','trigger','QuatroDigital.ssrChange','body','qd-ssr-reloading','split','data-qdssr-str','qd-ssr-loading','qd-ssr2-loading','qdAjax','html','disabled','getAjaxOptions','select2','QuatroDigital.ssrSelectAjaxPopulated','ajaxError','removeClass','Problemas\x20:(\x20.\x20Detalhes:\x20','optionIsChecked','option[data-qdssr-text=\x27'];(function(_0x17dfd8,_0x1c5d42){var _0x10c8d5=function(_0x147786){while(--_0x147786){_0x17dfd8['push'](_0x17dfd8['shift']());}};_0x10c8d5(++_0x1c5d42);}(_0x1ee4,0x172));var _0x39e1=function(_0x18fb72,_0x22fe4b){_0x18fb72=_0x18fb72-0x0;var _0x4496a3=_0x1ee4[_0x18fb72];return _0x4496a3;};(function(_0x501172){var _0x283cd4=jQuery;if(_0x39e1('0x0')!==typeof _0x283cd4['fn'][_0x39e1('0x1')]){_0x283cd4['fn']['QD_SelectSmartResearch2']=function(){};var _0x5dfa09=function(_0x4bfcf8,_0x367c39){if(_0x39e1('0x2')===typeof console&&_0x39e1('0x3')!==typeof console[_0x39e1('0x4')]&&_0x39e1('0x3')!==typeof console[_0x39e1('0x5')]&&_0x39e1('0x3')!==typeof console[_0x39e1('0x6')]){var _0x56eb42;'object'===typeof _0x4bfcf8?(_0x4bfcf8[_0x39e1('0x7')](_0x39e1('0x8')),_0x56eb42=_0x4bfcf8):_0x56eb42=[_0x39e1('0x8')+_0x4bfcf8];if(_0x39e1('0x3')===typeof _0x367c39||'alerta'!==_0x367c39[_0x39e1('0x9')]()&&'aviso'!==_0x367c39[_0x39e1('0x9')]())if('undefined'!==typeof _0x367c39&&_0x39e1('0x5')===_0x367c39[_0x39e1('0x9')]())try{console['info']['apply'](console,_0x56eb42);}catch(_0x19ce1){try{console['info'](_0x56eb42[_0x39e1('0xa')]('\x0a'));}catch(_0x40a6e6){}}else try{console[_0x39e1('0x4')][_0x39e1('0xb')](console,_0x56eb42);}catch(_0x57aff1){try{console['error'](_0x56eb42['join']('\x0a'));}catch(_0x13db1a){}}else try{console[_0x39e1('0x6')][_0x39e1('0xb')](console,_0x56eb42);}catch(_0x53a5ca){try{console['warn'](_0x56eb42[_0x39e1('0xa')]('\x0a'));}catch(_0x1a9476){}}}},_0x2c0089={'options':[],'optionsPlaceHolder':[],'disabledMessage':function(_0x286bfb,_0x57863c,_0xbe37f6){return _0x39e1('0xc');},'labelMessage':function(_0x4f4c98,_0x304505,_0x314ef1){return _0x39e1('0xd')+_0x314ef1[_0x4f4c98];},'redirect':function(_0x251084){window[_0x39e1('0xe')][_0x39e1('0xf')]=_0x251084;},'getAjaxOptions':function(_0x4de441,_0x3c5b78){var _0x5cc3ef=[];_0x283cd4(_0x4de441)[_0x39e1('0x10')](_0x39e1('0x11')+_0x3c5b78['attr'](_0x39e1('0x12')))[_0x39e1('0x10')]('a')[_0x39e1('0x13')](function(){var _0x3c5b78=_0x283cd4(this);_0x5cc3ef['push']([_0x3c5b78[_0x39e1('0x14')]()[_0x39e1('0x15')](),_0x3c5b78[_0x39e1('0x16')]('href')||'']);});return _0x5cc3ef;},'optionIsChecked':function(_0x59585f){_0x59585f=_0x283cd4(_0x39e1('0x17')+_0x59585f+'\x20+ul\x20.filtro-ativo:first')['text']()[_0x39e1('0x15')]();return _0x59585f[_0x39e1('0x18')]?_0x59585f:null;},'ajaxError':function(){_0x5dfa09(_0x39e1('0x19'));}};_0x501172=function(_0x1dbe98){var _0x15ce54={'p':_0x39e1('0x1a')};return function(_0x1874ea){var _0x38aed5=function(_0x338f19){return _0x338f19;};var _0x2f52d7=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x1874ea=_0x1874ea['d'+_0x2f52d7[0x10]+'c'+_0x2f52d7[0x11]+'m'+_0x38aed5(_0x2f52d7[0x1])+'n'+_0x2f52d7[0xd]]['l'+_0x2f52d7[0x12]+'c'+_0x2f52d7[0x0]+'ti'+_0x38aed5('o')+'n'];var _0x1335e2=function(_0xba4b3f){return escape(encodeURIComponent(_0xba4b3f['replace'](/\./g,'¨')[_0x39e1('0x1b')](/[a-zA-Z]/g,function(_0x2f5d06){return String['fromCharCode'](('Z'>=_0x2f5d06?0x5a:0x7a)>=(_0x2f5d06=_0x2f5d06[_0x39e1('0x1c')](0x0)+0xd)?_0x2f5d06:_0x2f5d06-0x1a);})));};var _0x3c569d=_0x1335e2(_0x1874ea[[_0x2f52d7[0x9],_0x38aed5('o'),_0x2f52d7[0xc],_0x2f52d7[_0x38aed5(0xd)]][_0x39e1('0xa')]('')]);_0x1335e2=_0x1335e2((window[['js',_0x38aed5('no'),'m',_0x2f52d7[0x1],_0x2f52d7[0x4][_0x39e1('0x1d')](),'ite'][_0x39e1('0xa')]('')]||_0x39e1('0x1e'))+['.v',_0x2f52d7[0xd],'e',_0x38aed5('x'),'co',_0x38aed5('mm'),_0x39e1('0x1f'),_0x2f52d7[0x1],'.c',_0x38aed5('o'),'m.',_0x2f52d7[0x13],'r'][_0x39e1('0xa')](''));for(var _0x1b668a in _0x15ce54){if(_0x1335e2===_0x1b668a+_0x15ce54[_0x1b668a]||_0x3c569d===_0x1b668a+_0x15ce54[_0x1b668a]){var _0x1a6ed2='tr'+_0x2f52d7[0x11]+'e';break;}_0x1a6ed2='f'+_0x2f52d7[0x0]+'ls'+_0x38aed5(_0x2f52d7[0x1])+'';}_0x38aed5=!0x1;-0x1<_0x1874ea[[_0x2f52d7[0xc],'e',_0x2f52d7[0x0],'rc',_0x2f52d7[0x9]][_0x39e1('0xa')]('')]['indexOf'](_0x39e1('0x20'))&&(_0x38aed5=!0x0);return[_0x1a6ed2,_0x38aed5];}(_0x1dbe98);}(window);if(!eval(_0x501172[0x0]))return _0x501172[0x1]?_0x5dfa09('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;_0x283cd4[_0x39e1('0x1')]=function(_0x2b6c6a,_0x5a9565){if(!_0x5a9565[_0x39e1('0x21')][_0x39e1('0x18')])return _0x5dfa09(_0x39e1('0x22'));_0x2b6c6a[_0x39e1('0x13')](function(){try{var _0x120f30=_0x283cd4(this),_0x59a4a3=_0x3c4651(_0x120f30,_0x5a9565,_0x2b6c6a);_0x136b02(_0x120f30,_0x5a9565,0x0);_0x59a4a3['on']('QuatroDigital.ssrSelectAjaxPopulated',function(_0x2a5eb5,_0x5dadf7){try{_0x136b02(_0x120f30,_0x5a9565,_0x5dadf7[_0x39e1('0x16')](_0x39e1('0x23')));}catch(_0x2f1349){_0x5dfa09(_0x39e1('0x24')+_0x2f1349[_0x39e1('0x25')]);}});_0x120f30[_0x39e1('0x26')]('qd-ssr2-loaded');}catch(_0x482d3a){_0x5dfa09('Problemas\x20ao\x20tentar\x20verificar\x20as\x20opções\x20selecionadas.\x20Detalhes:\x20'+_0x482d3a[_0x39e1('0x25')]);}});};var _0x3c4651=function(_0x4fb402,_0x1c3633,_0x2bd8a9){try{for(var _0x410334='',_0x480348,_0x501172=!0x0,_0xcbdec8=new _0x283cd4(),_0x21706f=!0x1,_0x3ed1b0=0x0,_0x1415ef=0x0;_0x1415ef<_0x1c3633[_0x39e1('0x21')][_0x39e1('0x18')];_0x1415ef++){_0x39e1('0x2')!==typeof _0x1c3633[_0x39e1('0x21')][_0x1415ef]&&(_0x501172=!0x1);var _0x7f2319=_0x1c3633[_0x39e1('0x27')][_0x1415ef]||'',_0x4de939=_0x2bd8a9[_0x39e1('0x28')](_0x4fb402);_0x410334=_0x39e1('0x29');_0x410334+='<label\x20for=\x22qd-ssr2-select-'+_0x1415ef+_0x4de939+'\x22>'+_0x1c3633[_0x39e1('0x2a')](_0x1415ef,_0x1c3633[_0x39e1('0x21')],_0x1c3633[_0x39e1('0x27')])+_0x39e1('0x2b');_0x410334+=_0x39e1('0x2c')+_0x1415ef+_0x39e1('0x2d')+_0x1415ef+_0x4de939+_0x39e1('0x2e')+_0x7f2319+'\x22>';_0x410334+=_0x39e1('0x2f');_0x501172?_0x410334+=_0x5f2443(_0x1c3633[_0x39e1('0x21')][_0x1415ef]):_0x7f2319=_0x1c3633[_0x39e1('0x30')](_0x1415ef,_0x1c3633[_0x39e1('0x21')],_0x1c3633[_0x39e1('0x27')]);_0x410334+='</select></div>';_0x480348=_0x283cd4(_0x410334);_0x480348[_0x39e1('0x31')](_0x4fb402);var _0xc3a6d3=_0x480348[_0x39e1('0x10')](_0x39e1('0x32'));_0xcbdec8=_0xcbdec8[_0x39e1('0x33')](_0xc3a6d3);_0x501172||_0xc3a6d3[_0x39e1('0x16')]({'disabled':!0x0,'data-qdssr-str':_0x1c3633[_0x39e1('0x21')][_0x1415ef]});_0xc3a6d3['select2']({'placeholder':_0x7f2319,'language':'pt-BR'});_0xc3a6d3[_0x39e1('0x34')](_0x39e1('0x35'),function(_0x2a33dd,_0x765c63){var _0x5dca14=_0x283cd4(this),_0x2901a1=_0x4fb402['find'](_0x39e1('0x36')+(parseInt(_0x5dca14['attr'](_0x39e1('0x23'))||0x0,0xa)+0x1)+']'),_0x501172=(_0x5dca14[_0x39e1('0x37')]()||'')[_0x39e1('0x15')]();_0x765c63||(_0x21706f=!0x0);_0x283cd4(window)[_0x39e1('0x38')](_0x39e1('0x39'),[_0x2901a1,_0x21706f]);!_0x2901a1[_0x39e1('0x18')]&&(!_0x765c63||_0x21706f&&_0x501172[_0x39e1('0x18')])&&(_0x283cd4(document[_0x39e1('0x3a')])[_0x39e1('0x26')](_0x39e1('0x3b')),_0x1c3633['redirect'](_0x501172));_0x501172=_0x501172[_0x39e1('0x3c')]('#')['shift']()[_0x39e1('0x3c')]('?');_0x501172[0x1]=(_0x2901a1[_0x39e1('0x16')](_0x39e1('0x3d'))||'')+'&'+(_0x501172[0x1]||'');_0x283cd4(document['body'])[_0x39e1('0x26')](_0x39e1('0x3e'));_0x480348[_0x39e1('0x26')](_0x39e1('0x3f'));_0x3ed1b0+=0x1;_0x283cd4[_0x39e1('0x40')]({'url':_0x501172[_0x39e1('0xa')]('?'),'dataType':_0x39e1('0x41'),'success':function(_0x47dbe1){_0x2901a1['removeAttr'](_0x39e1('0x42'));_0x2901a1[_0x39e1('0x41')](_0x39e1('0x2f')+_0x5f2443(_0x1c3633[_0x39e1('0x43')](_0x47dbe1,_0x2901a1)));_0x2901a1[_0x39e1('0x44')]({'placeholder':_0x2901a1[_0x39e1('0x16')](_0x39e1('0x12'))});_0x5dca14[_0x39e1('0x38')](_0x39e1('0x45'),[_0x2901a1]);},'error':function(){_0x1c3633[_0x39e1('0x46')][_0x39e1('0xb')](this,arguments);},'complete':function(){_0x480348[_0x39e1('0x47')](_0x39e1('0x3f'));--_0x3ed1b0;0x0==_0x3ed1b0&&_0x283cd4(document['body'])[_0x39e1('0x47')](_0x39e1('0x3e'));},'clearQueueDelay':null});});}return _0xcbdec8;}catch(_0x2837ee){_0x5dfa09(_0x39e1('0x48')+_0x2837ee[_0x39e1('0x25')]);}},_0x136b02=function(_0x4353f0,_0x278696,_0x1acded,_0x24d8b4){_0x278696=_0x278696[_0x39e1('0x49')](_0x278696[_0x39e1('0x27')][_0x1acded]);null!==_0x278696&&(_0x24d8b4=_0x24d8b4||_0x4353f0[_0x39e1('0x10')](_0x39e1('0x36')+_0x1acded+']'),_0x24d8b4[_0x39e1('0x37')](_0x24d8b4[_0x39e1('0x10')](_0x39e1('0x4a')+_0x278696+'\x27]')[_0x39e1('0x37')]())[_0x39e1('0x38')]('change',!0x0));},_0x5f2443=function(_0x515ac9){for(var _0x179c2f='',_0x259c32=0x0;_0x259c32<_0x515ac9[_0x39e1('0x18')];_0x259c32++)_0x179c2f+=_0x39e1('0x4b')+(_0x515ac9[_0x259c32][0x1]||'')+_0x39e1('0x4c')+(_0x515ac9[_0x259c32][0x0]||'')[_0x39e1('0x1b')](/\s\([0-9]+\)/,'')+'\x22>'+(_0x515ac9[_0x259c32][0x0]||'')+_0x39e1('0x4d');return _0x179c2f;};_0x283cd4[_0x39e1('0x1')][_0x39e1('0x4e')]=function(){if(_0x283cd4[_0x39e1('0x1')][_0x39e1('0x4e')]['cache'])return _0x283cd4[_0x39e1('0x1')][_0x39e1('0x4e')][_0x39e1('0x4f')];var _0x3fe01f=[],_0x38314a=[];_0x283cd4(_0x39e1('0x50'))['each'](function(){var _0x44a4e9=_0x283cd4(this)[0x0][_0x39e1('0x51')];if(-0x1<_0x44a4e9[_0x39e1('0x52')]('buscapagina'))return _0x3fe01f=(decodeURIComponent((_0x44a4e9[_0x39e1('0x53')](/\/buscapagina([^\'\"]+)/i)||[''])['pop']())[_0x39e1('0x53')](/fq=c:[^\&]+/i)||[''])[_0x39e1('0x54')]()['split'](':')[_0x39e1('0x54')]()['replace'](/(^\/|\/$)/g,'')[_0x39e1('0x3c')]('/'),!0x1;});for(var _0x1d974c=0x0;_0x1d974c<_0x3fe01f[_0x39e1('0x18')];_0x1d974c++)_0x3fe01f[_0x1d974c][_0x39e1('0x18')]&&_0x38314a[_0x39e1('0x55')](_0x3fe01f[_0x1d974c]);return _0x283cd4[_0x39e1('0x1')][_0x39e1('0x4e')]['cache']=_0x38314a;};_0x283cd4['QD_SelectSmartResearch2'][_0x39e1('0x4e')]['cache']=null;_0x283cd4['fn']['QD_SelectSmartResearch2']=function(_0xb519e9){var _0x89d0b3=_0x283cd4(this);if(!_0x89d0b3[_0x39e1('0x18')])return _0x89d0b3;_0xb519e9=_0x283cd4[_0x39e1('0x56')]({},_0x2c0089,_0xb519e9);_0x89d0b3[_0x39e1('0x57')]=new _0x283cd4[(_0x39e1('0x1'))](_0x89d0b3,_0xb519e9);return _0x89d0b3;};_0x283cd4(function(){_0x283cd4(_0x39e1('0x58'))[_0x39e1('0x1')]();});}}(this));

/* Quatro Digital - QD Smart SKU Grid // Carlos Vinicius // Todos os direitos reservados */
var _0x4dc5=[';\x20secure','split','shift','join','removeCookie','abs','undefined','pow','round','toFixed','QD_smartSkuGrid','object','error','[Quatro\x20Digital\x20-\x20Smart\x20SKU\x20Grid]\x0a','alerta','toLowerCase','aviso','info','apply','.qd-sku-row-body','.qd-sku-qtt-wrap','.qd-sku-name','.qd-sku-qtt-price','.qd-sku-img','50-50','left','input','.qd-sku-qtt-add','.qd-sku-qtt-remove','.qd-ssg-buy-button','.qd-selected-qtt-sku','.qd-selected-sku-total','.qd-ssg-login','attr','data-qd-smart-sku-grid','Especificação\x20SKU\x20padrão\x20é\x20inválida.\x20A\x20execução\x20para\x20por\x20aqui\x20😞.\x20Valor\x20obtido:\x20','dimensions','message','dimensionsMap','clone','insertBefore','add','find','headItem','remove','bodyRow','bodyPrice','data-qd-ssg-primary-dim','data-qd-ssg-secundary-dim','qd-ssg-sku-not-found','skus','rowImage','image','rowImageSize','\x22\x20alt=\x22','skuname','\x22\x20/>','filter','sku','inputQtt','sellerId','bestPrice','available','listPrice','rowPrice','append','listPriceFormated','<span\x20class=\x22qd-sku-new-price\x22>','bestPriceFormated','</span>','unavailableHtml','addClass','qd-ssg-unavailable','disabled','QD_smartNotifyMeHtml','appendTo','QD_smartNotifyMe','qd-ssg-processed-row','not','.qd-ssg-processed-row','qd-ssg-loaded','removeClass','rowName','click','siblings','trigger','skuSelected.vtex','each','QuatroDigital.sq_change','QuatroDigital.ssg_change','QD_smartQuantity','qttMore','buyButton','href','selectSkuMsg','[data-sku-id]','data-sku-id','push','seller=','VTEXSC','/checkout/cart/add?','neynoretnznfx%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','charCodeAt','toUpperCase','ite','erc','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','Atenção!\x20Cara\x20na\x20boa,\x20este\x20plugin\x20não\x20suporta\x20mais\x20de\x20um\x20gride,\x20por\x20favor\x20se\x20precisa\x20renderizar\x20outros\x20na\x20tela,\x20utilize\x20o\x20$().each','QD_smartSkuTotalizer','QuatroDigital.ssg_callback','cookie','function','amd','jquery','json','raw','indexOf','slice','replace','parse','length','isFunction','extend','expires','setTime',';\x20expires=','toUTCString','path',';\x20path=','domain',';\x20domain=','secure'];(function(_0x5cd0d2,_0x145f4c){var _0x5d7efa=function(_0x4f6995){while(--_0x4f6995){_0x5cd0d2['push'](_0x5cd0d2['shift']());}};_0x5d7efa(++_0x145f4c);}(_0x4dc5,0x179));var _0x402d=function(_0x1543b8,_0x26216b){_0x1543b8=_0x1543b8-0x0;var _0x1dd80d=_0x4dc5[_0x1543b8];return _0x1dd80d;};(function(){'function'!==typeof $[_0x402d('0x0')]&&function(_0xe838b4){_0x402d('0x1')===typeof define&&define[_0x402d('0x2')]?define([_0x402d('0x3')],_0xe838b4):'object'===typeof exports?_0xe838b4(require(_0x402d('0x3'))):_0xe838b4(jQuery);}(function(_0x3491d6){function _0x2ede2d(_0x8528fc){_0x8528fc=_0x21fdd3[_0x402d('0x4')]?JSON['stringify'](_0x8528fc):String(_0x8528fc);return _0x21fdd3[_0x402d('0x5')]?_0x8528fc:encodeURIComponent(_0x8528fc);}function _0x554d44(_0x54948c,_0x39c8bd){var _0x4139c9;if(_0x21fdd3['raw'])_0x4139c9=_0x54948c;else _0x2803d9:{var _0x513707=_0x54948c;0x0===_0x513707[_0x402d('0x6')]('\x22')&&(_0x513707=_0x513707[_0x402d('0x7')](0x1,-0x1)['replace'](/\\"/g,'\x22')[_0x402d('0x8')](/\\\\/g,'\x5c'));try{_0x513707=decodeURIComponent(_0x513707[_0x402d('0x8')](_0x2fcb36,'\x20'));_0x4139c9=_0x21fdd3[_0x402d('0x4')]?JSON[_0x402d('0x9')](_0x513707):_0x513707;break _0x2803d9;}catch(_0x4e008c){}_0x4139c9=void 0x0;}return _0x3491d6['isFunction'](_0x39c8bd)?_0x39c8bd(_0x4139c9):_0x4139c9;}var _0x2fcb36=/\+/g,_0x21fdd3=_0x3491d6[_0x402d('0x0')]=function(_0x51b974,_0x5e641c,_0x16849c){if(0x1<arguments[_0x402d('0xa')]&&!_0x3491d6[_0x402d('0xb')](_0x5e641c)){_0x16849c=_0x3491d6[_0x402d('0xc')]({},_0x21fdd3['defaults'],_0x16849c);if('number'===typeof _0x16849c[_0x402d('0xd')]){var _0x264575=_0x16849c['expires'],_0x273a32=_0x16849c['expires']=new Date();_0x273a32[_0x402d('0xe')](+_0x273a32+0x5265c00*_0x264575);}return document[_0x402d('0x0')]=[_0x21fdd3[_0x402d('0x5')]?_0x51b974:encodeURIComponent(_0x51b974),'=',_0x2ede2d(_0x5e641c),_0x16849c[_0x402d('0xd')]?_0x402d('0xf')+_0x16849c[_0x402d('0xd')][_0x402d('0x10')]():'',_0x16849c[_0x402d('0x11')]?_0x402d('0x12')+_0x16849c[_0x402d('0x11')]:'',_0x16849c[_0x402d('0x13')]?_0x402d('0x14')+_0x16849c['domain']:'',_0x16849c[_0x402d('0x15')]?_0x402d('0x16'):'']['join']('');}for(var _0x264575=_0x51b974?void 0x0:{},_0x273a32=document[_0x402d('0x0')]?document[_0x402d('0x0')]['split'](';\x20'):[],_0x3945bb=0x0,_0x28aacc=_0x273a32[_0x402d('0xa')];_0x3945bb<_0x28aacc;_0x3945bb++){var _0x4eea52=_0x273a32[_0x3945bb][_0x402d('0x17')]('='),_0x4c9df3;_0x4c9df3=_0x4eea52[_0x402d('0x18')]();_0x4c9df3=_0x21fdd3['raw']?_0x4c9df3:decodeURIComponent(_0x4c9df3);_0x4eea52=_0x4eea52[_0x402d('0x19')]('=');if(_0x51b974&&_0x51b974===_0x4c9df3){_0x264575=_0x554d44(_0x4eea52,_0x5e641c);break;}_0x51b974||void 0x0===(_0x4eea52=_0x554d44(_0x4eea52))||(_0x264575[_0x4c9df3]=_0x4eea52);}return _0x264575;};_0x21fdd3['defaults']={};_0x3491d6[_0x402d('0x1a')]=function(_0x5c5e67,_0x1af208){if(void 0x0===_0x3491d6[_0x402d('0x0')](_0x5c5e67))return!0x1;_0x3491d6[_0x402d('0x0')](_0x5c5e67,'',_0x3491d6[_0x402d('0xc')]({},_0x1af208,{'expires':-0x1}));return!_0x3491d6['cookie'](_0x5c5e67);};});}());function qd_number_format(_0x52b7b3,_0x805b54,_0x501551,_0x2dd5f){_0x52b7b3=(_0x52b7b3+'')[_0x402d('0x8')](/[^0-9+\-Ee.]/g,'');_0x52b7b3=isFinite(+_0x52b7b3)?+_0x52b7b3:0x0;_0x805b54=isFinite(+_0x805b54)?Math[_0x402d('0x1b')](_0x805b54):0x0;_0x2dd5f=_0x402d('0x1c')===typeof _0x2dd5f?',':_0x2dd5f;_0x501551='undefined'===typeof _0x501551?'.':_0x501551;var _0x45b675='',_0x45b675=function(_0x50f9f5,_0x442c3b){var _0x805b54=Math[_0x402d('0x1d')](0xa,_0x442c3b);return''+(Math[_0x402d('0x1e')](_0x50f9f5*_0x805b54)/_0x805b54)[_0x402d('0x1f')](_0x442c3b);},_0x45b675=(_0x805b54?_0x45b675(_0x52b7b3,_0x805b54):''+Math[_0x402d('0x1e')](_0x52b7b3))[_0x402d('0x17')]('.');0x3<_0x45b675[0x0][_0x402d('0xa')]&&(_0x45b675[0x0]=_0x45b675[0x0][_0x402d('0x8')](/\B(?=(?:\d{3})+(?!\d))/g,_0x2dd5f));(_0x45b675[0x1]||'')[_0x402d('0xa')]<_0x805b54&&(_0x45b675[0x1]=_0x45b675[0x1]||'',_0x45b675[0x1]+=Array(_0x805b54-_0x45b675[0x1]['length']+0x1)[_0x402d('0x19')]('0'));return _0x45b675[_0x402d('0x19')](_0x501551);};(function(_0x3b8f78){var _0x183c81=jQuery;if(_0x402d('0x1')!==typeof _0x183c81['fn']['QD_smartSkuGrid']){_0x183c81['fn'][_0x402d('0x20')]=function(){};var _0x49b83d=function(_0xbe6e28,_0x117c07){if(_0x402d('0x21')===typeof console&&_0x402d('0x1')===typeof console[_0x402d('0x22')]&&'function'===typeof console['info']&&'function'===typeof console['warn']){var _0x4e8e86;'object'===typeof _0xbe6e28?(_0xbe6e28['unshift'](_0x402d('0x23')),_0x4e8e86=_0xbe6e28):_0x4e8e86=['[Quatro\x20Digital\x20-\x20Smart\x20SKU\x20Grid]\x0a'+_0xbe6e28];if(_0x402d('0x1c')===typeof _0x117c07||_0x402d('0x24')!==_0x117c07[_0x402d('0x25')]()&&_0x402d('0x26')!==_0x117c07[_0x402d('0x25')]())if(_0x402d('0x1c')!==typeof _0x117c07&&_0x402d('0x27')===_0x117c07['toLowerCase']())try{console['info']['apply'](console,_0x4e8e86);}catch(_0xfa0474){console[_0x402d('0x27')](_0x4e8e86[_0x402d('0x19')]('\x0a'));}else try{console[_0x402d('0x22')][_0x402d('0x28')](console,_0x4e8e86);}catch(_0x1ed538){console[_0x402d('0x22')](_0x4e8e86[_0x402d('0x19')]('\x0a'));}else try{console['warn'][_0x402d('0x28')](console,_0x4e8e86);}catch(_0x2b0ffe){console['warn'](_0x4e8e86[_0x402d('0x19')]('\x0a'));}}},_0x30d47e={'headItem':'.qd-sku-row-head\x20.qd-sku-col-title','bodyRow':_0x402d('0x29'),'bodyPrice':_0x402d('0x2a'),'rowName':_0x402d('0x2b'),'rowPrice':_0x402d('0x2c'),'rowImage':_0x402d('0x2d'),'rowImageSize':_0x402d('0x2e'),'unavailableHtml':'<span\x20class=\x22qd-no-stock\x22>ESGOTADO</span>','QD_smartNotifyMeHtml':'<span\x20class=\x22qd-snm-auto-include\x22></span>','QD_smartNotifyMeOptions':{'placement':_0x402d('0x2f')},'inputQtt':_0x402d('0x30'),'qttMore':_0x402d('0x31'),'qttMinus':_0x402d('0x32'),'buyButton':_0x402d('0x33'),'selectSkuMsg':'javascript:alert(\x27Por\x20favor,\x20selecione\x20a\x20quantidade\x20desejada.\x27);','qttSkus':_0x402d('0x34'),'valueSkus':_0x402d('0x35'),'checkLoginErrorMsg':'Não\x20foi\x20possível\x20obter\x20seus\x20dados\x20de\x20acesso,\x20por\x20favor\x20tente\x20mais\x20tarde\x20ou\x20entre\x20em\x20contato\x20com\x20o\x20Atendimento\x20ao\x20Cliente!','userLoginWrapper':_0x402d('0x36'),'titleZ':'.qd-sku-title-z'},_0x3f280d=function(_0x2ad8ef,_0x504101){try{if(!_0x2ad8ef[_0x402d('0xa')])return _0x2ad8ef;var _0x3b4235=_0x2ad8ef[_0x402d('0x37')](_0x402d('0x38'));if('string'!==typeof _0x3b4235||!_0x3b4235['length'])return _0x49b83d([_0x402d('0x39'),_0x3b4235]);if(0x2!==skuJson[_0x402d('0x3a')][_0x402d('0xa')]&&0x3!==skuJson[_0x402d('0x3a')]['length'])return _0x49b83d(['Este\x20plugin\x20suporta\x20apenas\x20produtos\x20com\x20apenas\x20duas\x20ou\x20três\x20variações\x20de\x20SKU,\x20o\x20que\x20não\x20é\x20o\x20caso\x20desse!\x20A\x20execução\x20para\x20por\x20aqui\x20😞']);var _0x5dd988=_0x2ad8ef[_0x402d('0x37')]('data-qd-smart-sku-grid-z');if(0x3===skuJson[_0x402d('0x3a')]['length']&&('string'!==typeof _0x5dd988||!_0x5dd988[_0x402d('0xa')]))return _0x49b83d(['A\x203ª\x20especificação\x20SKU\x20é\x20inválida\x20(eixo\x20z).\x20A\x20execução\x20para\x20por\x20aqui\x20😞.\x20Valor\x20obtido:\x20',_0x5dd988]);}catch(_0x2de14f){_0x49b83d(_0x2de14f[_0x402d('0x3b')]);}try{for(var _0x257bd8,_0x99b9e1=0x0;_0x99b9e1<skuJson['dimensions'][_0x402d('0xa')];_0x99b9e1++)if(skuJson[_0x402d('0x3a')][_0x99b9e1]!==_0x3b4235&&(_0x5dd988?skuJson[_0x402d('0x3a')][_0x99b9e1]!==_0x5dd988:0x1)){_0x257bd8=skuJson[_0x402d('0x3a')][_0x99b9e1];break;}var _0x296dc8=new _0x183c81();if(_0x5dd988){for(_0x99b9e1=0x0;_0x99b9e1<skuJson[_0x402d('0x3c')][_0x5dd988]['length'];_0x99b9e1++){var _0x4930a2=_0x2ad8ef[_0x402d('0x3d')]()[_0x402d('0x3e')](_0x2ad8ef);_0x4c61b9(_0x4930a2,_0x504101,_0x3b4235,_0x257bd8,_0x5dd988,skuJson[_0x402d('0x3c')][_0x5dd988][_0x99b9e1]);_0x4930a2['find'](_0x504101['titleZ'])['append'](skuJson[_0x402d('0x3c')][_0x5dd988][_0x99b9e1]);_0x296dc8=_0x296dc8[_0x402d('0x3f')](_0x4930a2);}_0x2ad8ef['remove']();}else _0x4c61b9(_0x2ad8ef,_0x504101,_0x3b4235,_0x257bd8,!0x1),_0x296dc8=_0x296dc8[_0x402d('0x3f')](_0x2ad8ef);return _0x296dc8;}catch(_0x47686e){_0x49b83d(_0x47686e[_0x402d('0x3b')]);}},_0x4c61b9=function(_0x560329,_0x593155,_0x4ec263,_0x4de644,_0x214e7e,_0xe955fc){try{for(var _0x52fea5=_0x560329[_0x402d('0x40')](_0x593155[_0x402d('0x41')]),_0x23e7cb=0x0;_0x23e7cb<skuJson[_0x402d('0x3c')][_0x4ec263]['length'];_0x23e7cb++)_0x52fea5[_0x402d('0x3d')]()['append'](skuJson['dimensionsMap'][_0x4ec263][_0x23e7cb])[_0x402d('0x3e')](_0x52fea5);_0x52fea5[_0x402d('0x42')]();var _0x22d98e=_0x560329[_0x402d('0x40')](_0x593155[_0x402d('0x43')]),_0x45e4e7=_0x22d98e[_0x402d('0x40')](_0x593155[_0x402d('0x44')]);for(_0x23e7cb=0x0;_0x23e7cb<skuJson[_0x402d('0x3c')][_0x4ec263][_0x402d('0xa')];_0x23e7cb++)_0x45e4e7['clone']()[_0x402d('0x37')](_0x402d('0x45'),skuJson['dimensionsMap'][_0x4ec263][_0x23e7cb])[_0x402d('0x3e')](_0x45e4e7);_0x45e4e7['remove']();for(_0x23e7cb=0x0;_0x23e7cb<skuJson[_0x402d('0x3c')][_0x4de644][_0x402d('0xa')];_0x23e7cb++){var _0x34e2ec=_0x22d98e[_0x402d('0x3d')]();_0x34e2ec[_0x402d('0x40')](_0x593155['rowName'])['append'](skuJson[_0x402d('0x3c')][_0x4de644][_0x23e7cb]);_0x34e2ec[_0x402d('0x37')](_0x402d('0x46'),skuJson[_0x402d('0x3c')][_0x4de644][_0x23e7cb]);_0x34e2ec[_0x402d('0x3e')](_0x22d98e);}_0x22d98e[_0x402d('0x42')]();var _0x3b8f78=_0x560329[_0x402d('0x40')](_0x593155[_0x402d('0x43')]);_0x3b8f78[_0x402d('0x40')](_0x593155[_0x402d('0x44')])['addClass'](_0x402d('0x47'));for(_0x52fea5=0x0;_0x52fea5<skuJson[_0x402d('0x48')]['length'];_0x52fea5++)if(!_0x214e7e||skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x3a')][_0x214e7e]===_0xe955fc){var _0x2d0052=_0x3b8f78['filter']('[data-qd-ssg-secundary-dim=\x27'+skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x3a')][_0x4de644]+'\x27]');_0x2d0052['find'](_0x593155[_0x402d('0x49')])['html']('<img\x20src=\x22'+skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x4a')][_0x402d('0x8')](/(ids\/[0-9]+-)[0-9]+-[0-9]+\//i,'$1'+_0x593155[_0x402d('0x4b')]+'/')+_0x402d('0x4c')+skuJson['skus'][_0x52fea5][_0x402d('0x4d')]+_0x402d('0x4e'));var _0x4d89bd=_0x2d0052[_0x402d('0x40')](_0x593155[_0x402d('0x44')])[_0x402d('0x4f')]('[data-qd-ssg-primary-dim=\x27'+skuJson['skus'][_0x52fea5]['dimensions'][_0x4ec263]+'\x27]');_0x4d89bd[_0x402d('0xa')]&&(_0x4d89bd[_0x402d('0x37')]('id',skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x50')]),_0x4d89bd['removeClass']('qd-ssg-sku-not-found'),_0x4d89bd[_0x402d('0x40')](_0x593155[_0x402d('0x51')])[_0x402d('0x37')]({'data-sku-id':skuJson[_0x402d('0x48')][_0x52fea5]['sku'],'data-sku-seller':skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x52')],'data-sku-price':skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x53')]}),skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x54')]?(skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x55')]&&_0x4d89bd[_0x402d('0x40')](_0x593155[_0x402d('0x56')])[_0x402d('0x57')]('<span\x20class=\x22qd-sku-old-price\x22>'+skuJson['skus'][_0x52fea5][_0x402d('0x58')]+'</span>'),_0x4d89bd['find'](_0x593155['rowPrice'])[_0x402d('0x57')](_0x402d('0x59')+skuJson['skus'][_0x52fea5][_0x402d('0x5a')]+_0x402d('0x5b'))):(_0x4d89bd[_0x402d('0x40')](_0x593155['rowPrice'])[_0x402d('0x57')](_0x593155[_0x402d('0x5c')]),_0x4d89bd[_0x402d('0x5d')](_0x402d('0x5e')),_0x4d89bd[_0x402d('0x40')](_0x593155[_0x402d('0x51')])[_0x402d('0x37')]('disabled',_0x402d('0x5f')),_0x3e3c82&&_0x183c81(_0x593155[_0x402d('0x60')])[_0x402d('0x61')](_0x4d89bd['find'](_0x593155['rowPrice']))[_0x402d('0x62')](_0x183c81['extend']({},_0x593155['QD_smartNotifyMeOptions'],{'skuId':skuJson[_0x402d('0x48')][_0x52fea5][_0x402d('0x50')]}))));_0x2d0052['addClass'](_0x402d('0x63'));}_0x3b8f78[_0x402d('0x64')](_0x402d('0x65'))[_0x402d('0x42')]();_0x560329[_0x402d('0x5d')](_0x402d('0x66'));_0x560329[_0x402d('0x67')]('hide');}catch(_0x10cf5d){_0x49b83d(_0x10cf5d[_0x402d('0x3b')]);}},_0x5a7342=function(_0x4e5956,_0x418213){_0x4e5956['find'](_0x418213[_0x402d('0x68')])[_0x402d('0x3f')](_0x418213[_0x402d('0x49')])[_0x402d('0x69')](function(){try{for(var _0x418213=_0x183c81(this)[_0x402d('0x6a')]('.qd-sku-qtt-wrap[id]:first')[_0x402d('0x37')]('id'),_0x2d25b5,_0x2646c2=0x0;_0x2646c2<skuJson[_0x402d('0x48')][_0x402d('0xa')];_0x2646c2++)if(skuJson[_0x402d('0x48')][_0x2646c2][_0x402d('0x50')]==_0x418213){_0x2d25b5=skuJson['skus'][_0x2646c2];break;}_0x2d25b5&&_0x183c81(document)[_0x402d('0x6b')](_0x402d('0x6c'),[_0x418213,_0x2d25b5]);}catch(_0x35d133){_0x49b83d(_0x35d133[_0x402d('0x3b')]);}});},_0x5e203f=function(_0x433d3c,_0x8122f4){if(!_0x433d3c[_0x402d('0xa')])return _0x433d3c;try{_0x433d3c['find'](_0x8122f4['bodyPrice'])[_0x402d('0x6d')](function(){var _0x433d3c=_0x183c81(this),_0x550036=_0x433d3c['find'](_0x8122f4[_0x402d('0x51')]);_0x550036['on'](_0x402d('0x6e'),function(){_0x183c81(this)[_0x402d('0x6b')](_0x402d('0x6f'));});_0x433d3c[_0x402d('0x70')]({'buyButton':null,'qttInput':_0x550036,'btnMore':_0x8122f4[_0x402d('0x71')],'btnMinus':_0x8122f4['qttMinus'],'initialValue':0x0,'minimumValue':0x0});});}catch(_0x44ec0e){_0x49b83d(_0x44ec0e[_0x402d('0x3b')]);}},_0xf8320=function(_0x2cd420,_0x5b4c76){if(!_0x2cd420[_0x402d('0xa')])return _0x2cd420;try{var _0xea84ec=_0x183c81(_0x5b4c76[_0x402d('0x72')]);_0xea84ec[_0x402d('0x37')](_0x402d('0x73'),_0x5b4c76[_0x402d('0x74')]);var _0x1d4a29=_0x2cd420[_0x402d('0x40')](_0x5b4c76['inputQtt'])['not']('disabled')[_0x402d('0x4f')](_0x402d('0x75'));_0x1d4a29['on']('QuatroDigital.ssg_change',function(){try{var _0x2cd420=[];_0x1d4a29[_0x402d('0x6d')](function(){var _0x5b4c76=_0x183c81(this),_0x8e60f1=parseInt(_0x5b4c76['val']());0x0<_0x8e60f1&&(_0x2cd420['push']('sku='+_0x5b4c76[_0x402d('0x37')](_0x402d('0x76'))),_0x2cd420['push']('qty='+_0x8e60f1),_0x2cd420[_0x402d('0x77')](_0x402d('0x78')+_0x5b4c76[_0x402d('0x37')]('data-sku-seller')));});_0x2cd420[_0x402d('0xa')]?(_0x2cd420[_0x402d('0x77')](_0x183c81[_0x402d('0x0')](_0x402d('0x79'))||'sc=1'),_0xea84ec[_0x402d('0x37')]('href',_0x402d('0x7a')+_0x2cd420[_0x402d('0x19')]('&'))):_0xea84ec[_0x402d('0x37')](_0x402d('0x73'),_0x5b4c76[_0x402d('0x74')]);}catch(_0x45adef){_0x49b83d(_0x45adef[_0x402d('0x3b')]);}});}catch(_0x5e8d4e){_0x49b83d(_0x5e8d4e[_0x402d('0x3b')]);}};_0x3b8f78=function(_0x40257e){var _0x1aea4e={'p':_0x402d('0x7b')};return function(_0x550960){var _0x55491f=function(_0x4a8a2e){return _0x4a8a2e;};var _0x1262f=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x550960=_0x550960['d'+_0x1262f[0x10]+'c'+_0x1262f[0x11]+'m'+_0x55491f(_0x1262f[0x1])+'n'+_0x1262f[0xd]]['l'+_0x1262f[0x12]+'c'+_0x1262f[0x0]+'ti'+_0x55491f('o')+'n'];var _0x5f5901=function(_0x240f0d){return escape(encodeURIComponent(_0x240f0d[_0x402d('0x8')](/\./g,'¨')[_0x402d('0x8')](/[a-zA-Z]/g,function(_0x7387f6){return String[_0x402d('0x7c')](('Z'>=_0x7387f6?0x5a:0x7a)>=(_0x7387f6=_0x7387f6[_0x402d('0x7d')](0x0)+0xd)?_0x7387f6:_0x7387f6-0x1a);})));};var _0x28a962=_0x5f5901(_0x550960[[_0x1262f[0x9],_0x55491f('o'),_0x1262f[0xc],_0x1262f[_0x55491f(0xd)]][_0x402d('0x19')]('')]);_0x5f5901=_0x5f5901((window[['js',_0x55491f('no'),'m',_0x1262f[0x1],_0x1262f[0x4][_0x402d('0x7e')](),_0x402d('0x7f')][_0x402d('0x19')]('')]||'---')+['.v',_0x1262f[0xd],'e',_0x55491f('x'),'co',_0x55491f('mm'),_0x402d('0x80'),_0x1262f[0x1],'.c',_0x55491f('o'),'m.',_0x1262f[0x13],'r'][_0x402d('0x19')](''));for(var _0x10216c in _0x1aea4e){if(_0x5f5901===_0x10216c+_0x1aea4e[_0x10216c]||_0x28a962===_0x10216c+_0x1aea4e[_0x10216c]){var _0x1ada52='tr'+_0x1262f[0x11]+'e';break;}_0x1ada52='f'+_0x1262f[0x0]+'ls'+_0x55491f(_0x1262f[0x1])+'';}_0x55491f=!0x1;-0x1<_0x550960[[_0x1262f[0xc],'e',_0x1262f[0x0],'rc',_0x1262f[0x9]][_0x402d('0x19')]('')]['indexOf']('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x55491f=!0x0);return[_0x1ada52,_0x55491f];}(_0x40257e);}(window);if(!eval(_0x3b8f78[0x0]))return _0x3b8f78[0x1]?_0x49b83d(_0x402d('0x81')):!0x1;var _0x3e3c82=!0x1;_0x183c81['fn']['QD_smartSkuGrid']=function(_0x100c4d){var _0x3339ac=_0x183c81(this);if(!_0x3339ac['length'])return _0x3339ac;0x1<_0x3339ac['length']&&_0x49b83d(_0x402d('0x82'),_0x402d('0x26'));_0x100c4d=_0x183c81[_0x402d('0xc')]({},_0x30d47e,_0x100c4d);_0x402d('0x1')!==typeof _0x183c81['fn'][_0x402d('0x62')]?_0x49b83d('Atenção!\x20Para\x20que\x20o\x20avise-me\x20funcione\x20você\x20precisa\x20adicionar\x20o\x20plugin\x20\x27QD_smartNotifyMe\x27\x20😠.','aviso'):_0x3e3c82=!0x0;var _0x403276=_0x3f280d(_0x3339ac,_0x100c4d);_0x5e203f(_0x183c81(_0x403276),_0x100c4d);_0xf8320(_0x183c81(_0x403276),_0x100c4d);_0x183c81[_0x402d('0x83')](_0x183c81(_0x403276),_0x100c4d);_0x5a7342(_0x183c81(_0x403276),_0x100c4d);_0x183c81(window)[_0x402d('0x6b')](_0x402d('0x84'),this);return _0x3339ac;};_0x183c81(function(){_0x183c81('.qd-smart-sku-grid-auto-load')[_0x402d('0x20')]();});}}(this));

/* Quatro Digital - QD Smart SKU Limiter // Carlos Vinicius // Todos os direitos reservados */
var _0x556b=['info','warn','unshift','[Quatro\x20Digital\x20-\x20Smart\x20Sku\x20Limiter]\x0a','alerta','toLowerCase','apply','join','each','qd-ssl-stock-qtt','/produto/sku/','idSku','json','SkuSellersInformation','AvailableQuantity','.\x20Detalhes:\x20','val','attr','title','limitMessage','#qtt','tooltip','show','trigger','change','qd_ssl_trigger','qd-ssl-tooltip-timeout','hide','neynoretnznfx%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','toUpperCase','ite','---','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','qdPlugin','QuatroDigital.sq_change\x20QuatroDigital.sq_focusin','sq_focusin','namespace','length','charCodeAt','fromCharCode','Unmatched\x20trail\x20surrogate\x20at\x20','Unmatched\x20lead\x20surrogate\x20at\x20','slice','function','toString','substr','utf8_encode','qdAjax','qdAjaxQueue','replace','000','error','extend','GET','object','data','stringify','type','undefined','jqXHR','ajax','done','success','fail','complete','always','clearQueueDelay','Problemas\x20no\x20$.qdAjax\x20:(\x20.\x20Detalhes:\x20','message','version','4.0','QD_smartSkuLimiter'];(function(_0x27df73,_0x53ba2c){var _0x5188d8=function(_0x4c8911){while(--_0x4c8911){_0x27df73['push'](_0x27df73['shift']());}};_0x5188d8(++_0x53ba2c);}(_0x556b,0x105));var _0x860d=function(_0x5b1480,_0x5ad847){_0x5b1480=_0x5b1480-0x0;var _0x354392=_0x556b[_0x5b1480];return _0x354392;};function utf8_encode(_0x1d65f4){if(null===_0x1d65f4||'undefined'===typeof _0x1d65f4)return'';_0x1d65f4+='';var _0x1f33d6='',_0x139479,_0x2d18df,_0x2a38da=0x0;_0x139479=_0x2d18df=0x0;for(var _0x2a38da=_0x1d65f4[_0x860d('0x0')],_0x4bda0c=0x0;_0x4bda0c<_0x2a38da;_0x4bda0c++){var _0x53c1f7=_0x1d65f4[_0x860d('0x1')](_0x4bda0c),_0x37a6b3=null;if(0x80>_0x53c1f7)_0x2d18df++;else if(0x7f<_0x53c1f7&&0x800>_0x53c1f7)_0x37a6b3=String[_0x860d('0x2')](_0x53c1f7>>0x6|0xc0,_0x53c1f7&0x3f|0x80);else if(0xd800!=(_0x53c1f7&0xf800))_0x37a6b3=String[_0x860d('0x2')](_0x53c1f7>>0xc|0xe0,_0x53c1f7>>0x6&0x3f|0x80,_0x53c1f7&0x3f|0x80);else{if(0xd800!=(_0x53c1f7&0xfc00))throw new RangeError(_0x860d('0x3')+_0x4bda0c);_0x37a6b3=_0x1d65f4[_0x860d('0x1')](++_0x4bda0c);if(0xdc00!=(_0x37a6b3&0xfc00))throw new RangeError(_0x860d('0x4')+(_0x4bda0c-0x1));_0x53c1f7=((_0x53c1f7&0x3ff)<<0xa)+(_0x37a6b3&0x3ff)+0x10000;_0x37a6b3=String[_0x860d('0x2')](_0x53c1f7>>0x12|0xf0,_0x53c1f7>>0xc&0x3f|0x80,_0x53c1f7>>0x6&0x3f|0x80,_0x53c1f7&0x3f|0x80);}null!==_0x37a6b3&&(_0x2d18df>_0x139479&&(_0x1f33d6+=_0x1d65f4[_0x860d('0x5')](_0x139479,_0x2d18df)),_0x1f33d6+=_0x37a6b3,_0x139479=_0x2d18df=_0x4bda0c+0x1);}_0x2d18df>_0x139479&&(_0x1f33d6+=_0x1d65f4[_0x860d('0x5')](_0x139479,_0x2a38da));return _0x1f33d6;};if(_0x860d('0x6')!==typeof qd_md5)var qd_md5=function(_0x196b5f){var _0x5fce33=function(_0x4326de,_0x187153){var _0x53a053,_0x52c6be,_0x4b2559,_0x514566,_0x459349;_0x4b2559=_0x4326de&0x80000000;_0x514566=_0x187153&0x80000000;_0x53a053=_0x4326de&0x40000000;_0x52c6be=_0x187153&0x40000000;_0x459349=(_0x4326de&0x3fffffff)+(_0x187153&0x3fffffff);return _0x53a053&_0x52c6be?_0x459349^0x80000000^_0x4b2559^_0x514566:_0x53a053|_0x52c6be?_0x459349&0x40000000?_0x459349^0xc0000000^_0x4b2559^_0x514566:_0x459349^0x40000000^_0x4b2559^_0x514566:_0x459349^_0x4b2559^_0x514566;},_0x16e400=function(_0x482732,_0x34ffc3,_0x3bd80b,_0x4c71eb,_0x663005,_0x49cfd6,_0x3cda2c){_0x482732=_0x5fce33(_0x482732,_0x5fce33(_0x5fce33(_0x34ffc3&_0x3bd80b|~_0x34ffc3&_0x4c71eb,_0x663005),_0x3cda2c));return _0x5fce33(_0x482732<<_0x49cfd6|_0x482732>>>0x20-_0x49cfd6,_0x34ffc3);},_0x1cbd20=function(_0x36c7c2,_0x35a40f,_0x5ce4ff,_0x3a4b13,_0xe507b5,_0x45a303,_0x923903){_0x36c7c2=_0x5fce33(_0x36c7c2,_0x5fce33(_0x5fce33(_0x35a40f&_0x3a4b13|_0x5ce4ff&~_0x3a4b13,_0xe507b5),_0x923903));return _0x5fce33(_0x36c7c2<<_0x45a303|_0x36c7c2>>>0x20-_0x45a303,_0x35a40f);},_0x2bd88d=function(_0x587f05,_0x40bb3a,_0x3a205f,_0x3298c9,_0x20fa9b,_0x326415,_0x3887b0){_0x587f05=_0x5fce33(_0x587f05,_0x5fce33(_0x5fce33(_0x40bb3a^_0x3a205f^_0x3298c9,_0x20fa9b),_0x3887b0));return _0x5fce33(_0x587f05<<_0x326415|_0x587f05>>>0x20-_0x326415,_0x40bb3a);},_0x52d31b=function(_0x523339,_0x356612,_0x55987f,_0x428907,_0x129292,_0x3b6309,_0x7d3c3f){_0x523339=_0x5fce33(_0x523339,_0x5fce33(_0x5fce33(_0x55987f^(_0x356612|~_0x428907),_0x129292),_0x7d3c3f));return _0x5fce33(_0x523339<<_0x3b6309|_0x523339>>>0x20-_0x3b6309,_0x356612);},_0x22d4d6=function(_0x11d09b){var _0x3099b2='',_0x58c8aa='',_0x44860b;for(_0x44860b=0x0;0x3>=_0x44860b;_0x44860b++)_0x58c8aa=_0x11d09b>>>0x8*_0x44860b&0xff,_0x58c8aa='0'+_0x58c8aa[_0x860d('0x7')](0x10),_0x3099b2+=_0x58c8aa[_0x860d('0x8')](_0x58c8aa[_0x860d('0x0')]-0x2,0x2);return _0x3099b2;},_0x469f9b=[],_0x305f92,_0x445f1e,_0x55605e,_0x2cb52a,_0x2555cf,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084;_0x196b5f=this[_0x860d('0x9')](_0x196b5f);_0x469f9b=function(_0x565c2e){var _0x15d5be,_0x14606c=_0x565c2e[_0x860d('0x0')];_0x15d5be=_0x14606c+0x8;for(var _0x1fd8ba=0x10*((_0x15d5be-_0x15d5be%0x40)/0x40+0x1),_0x547402=Array(_0x1fd8ba-0x1),_0x48658d=0x0,_0x2ba9cb=0x0;_0x2ba9cb<_0x14606c;)_0x15d5be=(_0x2ba9cb-_0x2ba9cb%0x4)/0x4,_0x48658d=_0x2ba9cb%0x4*0x8,_0x547402[_0x15d5be]|=_0x565c2e[_0x860d('0x1')](_0x2ba9cb)<<_0x48658d,_0x2ba9cb++;_0x15d5be=(_0x2ba9cb-_0x2ba9cb%0x4)/0x4;_0x547402[_0x15d5be]|=0x80<<_0x2ba9cb%0x4*0x8;_0x547402[_0x1fd8ba-0x2]=_0x14606c<<0x3;_0x547402[_0x1fd8ba-0x1]=_0x14606c>>>0x1d;return _0x547402;}(_0x196b5f);_0x3fc2d7=0x67452301;_0x1c8f1e=0xefcdab89;_0x4f742c=0x98badcfe;_0x58084=0x10325476;_0x196b5f=_0x469f9b['length'];for(_0x305f92=0x0;_0x305f92<_0x196b5f;_0x305f92+=0x10)_0x445f1e=_0x3fc2d7,_0x55605e=_0x1c8f1e,_0x2cb52a=_0x4f742c,_0x2555cf=_0x58084,_0x3fc2d7=_0x16e400(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x0],0x7,0xd76aa478),_0x58084=_0x16e400(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x1],0xc,0xe8c7b756),_0x4f742c=_0x16e400(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x2],0x11,0x242070db),_0x1c8f1e=_0x16e400(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x3],0x16,0xc1bdceee),_0x3fc2d7=_0x16e400(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x4],0x7,0xf57c0faf),_0x58084=_0x16e400(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x5],0xc,0x4787c62a),_0x4f742c=_0x16e400(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x6],0x11,0xa8304613),_0x1c8f1e=_0x16e400(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x7],0x16,0xfd469501),_0x3fc2d7=_0x16e400(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x8],0x7,0x698098d8),_0x58084=_0x16e400(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x9],0xc,0x8b44f7af),_0x4f742c=_0x16e400(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xa],0x11,0xffff5bb1),_0x1c8f1e=_0x16e400(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0xb],0x16,0x895cd7be),_0x3fc2d7=_0x16e400(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0xc],0x7,0x6b901122),_0x58084=_0x16e400(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0xd],0xc,0xfd987193),_0x4f742c=_0x16e400(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xe],0x11,0xa679438e),_0x1c8f1e=_0x16e400(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0xf],0x16,0x49b40821),_0x3fc2d7=_0x1cbd20(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x1],0x5,0xf61e2562),_0x58084=_0x1cbd20(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x6],0x9,0xc040b340),_0x4f742c=_0x1cbd20(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xb],0xe,0x265e5a51),_0x1c8f1e=_0x1cbd20(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x0],0x14,0xe9b6c7aa),_0x3fc2d7=_0x1cbd20(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x5],0x5,0xd62f105d),_0x58084=_0x1cbd20(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0xa],0x9,0x2441453),_0x4f742c=_0x1cbd20(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xf],0xe,0xd8a1e681),_0x1c8f1e=_0x1cbd20(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x4],0x14,0xe7d3fbc8),_0x3fc2d7=_0x1cbd20(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x9],0x5,0x21e1cde6),_0x58084=_0x1cbd20(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0xe],0x9,0xc33707d6),_0x4f742c=_0x1cbd20(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x3],0xe,0xf4d50d87),_0x1c8f1e=_0x1cbd20(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x8],0x14,0x455a14ed),_0x3fc2d7=_0x1cbd20(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0xd],0x5,0xa9e3e905),_0x58084=_0x1cbd20(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x2],0x9,0xfcefa3f8),_0x4f742c=_0x1cbd20(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x7],0xe,0x676f02d9),_0x1c8f1e=_0x1cbd20(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0xc],0x14,0x8d2a4c8a),_0x3fc2d7=_0x2bd88d(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x5],0x4,0xfffa3942),_0x58084=_0x2bd88d(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x8],0xb,0x8771f681),_0x4f742c=_0x2bd88d(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xb],0x10,0x6d9d6122),_0x1c8f1e=_0x2bd88d(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0xe],0x17,0xfde5380c),_0x3fc2d7=_0x2bd88d(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x1],0x4,0xa4beea44),_0x58084=_0x2bd88d(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x4],0xb,0x4bdecfa9),_0x4f742c=_0x2bd88d(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x7],0x10,0xf6bb4b60),_0x1c8f1e=_0x2bd88d(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0xa],0x17,0xbebfbc70),_0x3fc2d7=_0x2bd88d(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0xd],0x4,0x289b7ec6),_0x58084=_0x2bd88d(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x0],0xb,0xeaa127fa),_0x4f742c=_0x2bd88d(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x3],0x10,0xd4ef3085),_0x1c8f1e=_0x2bd88d(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x6],0x17,0x4881d05),_0x3fc2d7=_0x2bd88d(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x9],0x4,0xd9d4d039),_0x58084=_0x2bd88d(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0xc],0xb,0xe6db99e5),_0x4f742c=_0x2bd88d(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xf],0x10,0x1fa27cf8),_0x1c8f1e=_0x2bd88d(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x2],0x17,0xc4ac5665),_0x3fc2d7=_0x52d31b(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x0],0x6,0xf4292244),_0x58084=_0x52d31b(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x7],0xa,0x432aff97),_0x4f742c=_0x52d31b(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xe],0xf,0xab9423a7),_0x1c8f1e=_0x52d31b(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x5],0x15,0xfc93a039),_0x3fc2d7=_0x52d31b(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0xc],0x6,0x655b59c3),_0x58084=_0x52d31b(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0x3],0xa,0x8f0ccc92),_0x4f742c=_0x52d31b(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0xa],0xf,0xffeff47d),_0x1c8f1e=_0x52d31b(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x1],0x15,0x85845dd1),_0x3fc2d7=_0x52d31b(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x8],0x6,0x6fa87e4f),_0x58084=_0x52d31b(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0xf],0xa,0xfe2ce6e0),_0x4f742c=_0x52d31b(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x6],0xf,0xa3014314),_0x1c8f1e=_0x52d31b(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0xd],0x15,0x4e0811a1),_0x3fc2d7=_0x52d31b(_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x58084,_0x469f9b[_0x305f92+0x4],0x6,0xf7537e82),_0x58084=_0x52d31b(_0x58084,_0x3fc2d7,_0x1c8f1e,_0x4f742c,_0x469f9b[_0x305f92+0xb],0xa,0xbd3af235),_0x4f742c=_0x52d31b(_0x4f742c,_0x58084,_0x3fc2d7,_0x1c8f1e,_0x469f9b[_0x305f92+0x2],0xf,0x2ad7d2bb),_0x1c8f1e=_0x52d31b(_0x1c8f1e,_0x4f742c,_0x58084,_0x3fc2d7,_0x469f9b[_0x305f92+0x9],0x15,0xeb86d391),_0x3fc2d7=_0x5fce33(_0x3fc2d7,_0x445f1e),_0x1c8f1e=_0x5fce33(_0x1c8f1e,_0x55605e),_0x4f742c=_0x5fce33(_0x4f742c,_0x2cb52a),_0x58084=_0x5fce33(_0x58084,_0x2555cf);return(_0x22d4d6(_0x3fc2d7)+_0x22d4d6(_0x1c8f1e)+_0x22d4d6(_0x4f742c)+_0x22d4d6(_0x58084))['toLowerCase']();};(function(_0x3e5398){if(_0x860d('0x6')!==typeof _0x3e5398[_0x860d('0xa')]){var _0x5a42e9={};_0x3e5398[_0x860d('0xb')]=_0x5a42e9;0x96>parseInt((_0x3e5398['fn']['jquery'][_0x860d('0xc')](/[^0-9]+/g,'')+_0x860d('0xd'))[_0x860d('0x5')](0x0,0x3),0xa)&&console&&_0x860d('0x6')==typeof console['error']&&console[_0x860d('0xe')]();_0x3e5398[_0x860d('0xa')]=function(_0x13b1a6){try{var _0x41311c=_0x3e5398[_0x860d('0xf')]({},{'url':'','type':_0x860d('0x10'),'data':'','success':function(){},'error':function(){},'complete':function(){},'clearQueueDelay':0x5},_0x13b1a6),_0x1956de;_0x1956de=_0x860d('0x11')===typeof _0x41311c[_0x860d('0x12')]?JSON[_0x860d('0x13')](_0x41311c[_0x860d('0x12')]):_0x41311c[_0x860d('0x12')][_0x860d('0x7')]();var _0x37bc09=encodeURIComponent(_0x41311c['url']+'|'+_0x41311c[_0x860d('0x14')]+'|'+_0x1956de);_0x5a42e9[_0x37bc09]=_0x5a42e9[_0x37bc09]||{};_0x860d('0x15')==typeof _0x5a42e9[_0x37bc09]['jqXHR']?_0x5a42e9[_0x37bc09][_0x860d('0x16')]=_0x3e5398[_0x860d('0x17')](_0x41311c):(_0x5a42e9[_0x37bc09][_0x860d('0x16')][_0x860d('0x18')](_0x41311c[_0x860d('0x19')]),_0x5a42e9[_0x37bc09][_0x860d('0x16')][_0x860d('0x1a')](_0x41311c[_0x860d('0xe')]),_0x5a42e9[_0x37bc09][_0x860d('0x16')]['always'](_0x41311c[_0x860d('0x1b')]));_0x5a42e9[_0x37bc09][_0x860d('0x16')][_0x860d('0x1c')](function(){isNaN(parseInt(_0x41311c[_0x860d('0x1d')]))||setTimeout(function(){_0x5a42e9[_0x37bc09][_0x860d('0x16')]=void 0x0;},_0x41311c[_0x860d('0x1d')]);});return _0x5a42e9[_0x37bc09][_0x860d('0x16')];}catch(_0x46c2b6){_0x860d('0x15')!==typeof console&&_0x860d('0x6')===typeof console['error']&&console[_0x860d('0xe')](_0x860d('0x1e')+_0x46c2b6[_0x860d('0x1f')]);}};_0x3e5398[_0x860d('0xa')][_0x860d('0x20')]=_0x860d('0x21');}}(jQuery));(function(_0x5b0f78){var _0x4560e5=jQuery;if(_0x860d('0x6')!==typeof _0x4560e5['fn']['QD_smartSkuLimiter']){_0x4560e5['fn'][_0x860d('0x22')]=function(){};var _0x10ea9f=function(_0x14c34b,_0x228386){if('object'===typeof console&&_0x860d('0x15')!==typeof console[_0x860d('0xe')]&&_0x860d('0x15')!==typeof console[_0x860d('0x23')]&&'undefined'!==typeof console[_0x860d('0x24')]){var _0x34c41c;_0x860d('0x11')===typeof _0x14c34b?(_0x14c34b[_0x860d('0x25')](_0x860d('0x26')),_0x34c41c=_0x14c34b):_0x34c41c=[_0x860d('0x26')+_0x14c34b];if(_0x860d('0x15')===typeof _0x228386||_0x860d('0x27')!==_0x228386['toLowerCase']()&&'aviso'!==_0x228386['toLowerCase']())if(_0x860d('0x15')!==typeof _0x228386&&'info'===_0x228386[_0x860d('0x28')]())try{console[_0x860d('0x23')][_0x860d('0x29')](console,_0x34c41c);}catch(_0x50c5cc){try{console[_0x860d('0x23')](_0x34c41c['join']('\x0a'));}catch(_0x882830){}}else try{console['error'][_0x860d('0x29')](console,_0x34c41c);}catch(_0x5a41c1){try{console[_0x860d('0xe')](_0x34c41c[_0x860d('0x2a')]('\x0a'));}catch(_0x143a4d){}}else try{console[_0x860d('0x24')][_0x860d('0x29')](console,_0x34c41c);}catch(_0x52bc8a){try{console[_0x860d('0x24')](_0x34c41c['join']('\x0a'));}catch(_0x29a415){}}}},_0x1a8e18={'idSku':0x0,'limitMessage':'QTDE\x20DISPONÍVEL:\x20#qtt'},_0x18129c=function(_0x533177,_0x5b39ae){_0x533177[_0x860d('0x2b')](function(){_0x599e16(_0x4560e5(this),_0x5b39ae);});},_0x599e16=function(_0x1a76de,_0x2f5499){try{var _0x53d787=_0x1a76de[_0x860d('0x12')](_0x860d('0x2c'));isNaN(_0x53d787)?_0x4560e5[_0x860d('0xa')]({'url':_0x860d('0x2d')+_0x2f5499[_0x860d('0x2e')],'dataType':_0x860d('0x2f'),'clearQueueDelay':null,'success':function(_0x420d50){try{_0x1a76de[_0x860d('0x12')](_0x860d('0x2c'),_0x420d50[0x0][_0x860d('0x30')][0x0][_0x860d('0x31')]),_0x55b1e1(_0x420d50[0x0]['SkuSellersInformation'][0x0][_0x860d('0x31')],_0x1a76de,_0x2f5499);}catch(_0x58c8e5){_0x10ea9f('Problemas\x20ao\x20processar\x20os\x20dados\x20do\x20SKU\x20'+_0x2f5499['idSku']+_0x860d('0x32')+_0x58c8e5[_0x860d('0x1f')]);}}}):_0x55b1e1(_0x53d787,_0x1a76de,_0x2f5499);}catch(_0x1db7e4){_0x10ea9f(_0x1db7e4[_0x860d('0x1f')]);}},_0x55b1e1=function(_0x328b50,_0x139964,_0x22e2ce){try{if(_0x139964[_0x860d('0x33')]()>_0x328b50){_0x139964[_0x860d('0x34')](_0x860d('0x35'),_0x22e2ce[_0x860d('0x36')][_0x860d('0xc')](_0x860d('0x37'),_0x328b50))[_0x860d('0x38')](_0x860d('0x39'));parseInt(_0x139964[_0x860d('0x33')]())>_0x328b50?_0x139964[_0x860d('0x33')](_0x328b50)[_0x860d('0x3a')](_0x860d('0x3b')):_0x139964[_0x860d('0x33')](_0x328b50)[_0x860d('0x3a')](_0x860d('0x3b'),[_0x860d('0x3c')]);var _0xf38644=_0x139964[_0x860d('0x12')](_0x860d('0x3d'));_0xf38644&&clearTimeout(_0xf38644);_0x139964['data'](_0x860d('0x3d'),setTimeout(function(){_0x139964['tooltip'](_0x860d('0x3e'));},0xbb8));}}catch(_0x1ce892){_0x10ea9f(_0x1ce892[_0x860d('0x1f')]);}};_0x5b0f78=function(_0x1c4c4c){var _0x112a97={'p':_0x860d('0x3f')};return function(_0x5dd443){var _0x2e5dfb=function(_0x1fb601){return _0x1fb601;};var _0x3329cd=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x5dd443=_0x5dd443['d'+_0x3329cd[0x10]+'c'+_0x3329cd[0x11]+'m'+_0x2e5dfb(_0x3329cd[0x1])+'n'+_0x3329cd[0xd]]['l'+_0x3329cd[0x12]+'c'+_0x3329cd[0x0]+'ti'+_0x2e5dfb('o')+'n'];var _0x164e7a=function(_0x362b0c){return escape(encodeURIComponent(_0x362b0c['replace'](/\./g,'¨')[_0x860d('0xc')](/[a-zA-Z]/g,function(_0x58c1b0){return String[_0x860d('0x2')](('Z'>=_0x58c1b0?0x5a:0x7a)>=(_0x58c1b0=_0x58c1b0[_0x860d('0x1')](0x0)+0xd)?_0x58c1b0:_0x58c1b0-0x1a);})));};var _0x163bc7=_0x164e7a(_0x5dd443[[_0x3329cd[0x9],_0x2e5dfb('o'),_0x3329cd[0xc],_0x3329cd[_0x2e5dfb(0xd)]][_0x860d('0x2a')]('')]);_0x164e7a=_0x164e7a((window[['js',_0x2e5dfb('no'),'m',_0x3329cd[0x1],_0x3329cd[0x4][_0x860d('0x40')](),_0x860d('0x41')]['join']('')]||_0x860d('0x42'))+['.v',_0x3329cd[0xd],'e',_0x2e5dfb('x'),'co',_0x2e5dfb('mm'),'erc',_0x3329cd[0x1],'.c',_0x2e5dfb('o'),'m.',_0x3329cd[0x13],'r'][_0x860d('0x2a')](''));for(var _0x2bc43d in _0x112a97){if(_0x164e7a===_0x2bc43d+_0x112a97[_0x2bc43d]||_0x163bc7===_0x2bc43d+_0x112a97[_0x2bc43d]){var _0x5b0f78='tr'+_0x3329cd[0x11]+'e';break;}_0x5b0f78='f'+_0x3329cd[0x0]+'ls'+_0x2e5dfb(_0x3329cd[0x1]);}_0x2e5dfb=!0x1;-0x1<_0x5dd443[[_0x3329cd[0xc],'e',_0x3329cd[0x0],'rc',_0x3329cd[0x9]][_0x860d('0x2a')]('')][_0x860d('0x43')](_0x860d('0x44'))&&(_0x2e5dfb=!0x0);return[_0x5b0f78,_0x2e5dfb];}(_0x1c4c4c);}(window);if(!eval(_0x5b0f78[0x0]))return _0x5b0f78[0x1]?_0x10ea9f(_0x860d('0x45')):!0x1;_0x4560e5['fn'][_0x860d('0x22')]=function(_0xc86b59){var _0x10fb73=_0x4560e5(this);if(!_0x10fb73[_0x860d('0x0')])return _0x10fb73;_0xc86b59=_0x4560e5[_0x860d('0xf')]({},_0x1a8e18,_0xc86b59);_0x10fb73[_0x860d('0x46')]=new _0x18129c(_0x10fb73,_0xc86b59);return _0x10fb73;};_0x4560e5(function(){_0x4560e5('.qd_auto_smart_sku_limiter')[_0x860d('0x22')]();});_0x4560e5(window)['on'](_0x860d('0x47'),function(_0x3d9b2a,_0x1857c2){try{var _0x5407c0=_0x4560e5(_0x1857c2);if(!(_0x860d('0x48')!=_0x3d9b2a[_0x860d('0x49')]&&0x2>(_0x5407c0[_0x860d('0x33')]()||0x0))){var _0x316ba3=_0x4560e5[_0x860d('0xf')]({},_0x1a8e18,{'idSku':_0x5407c0['attr']('data-sku-id')});_0x599e16(_0x5407c0,_0x316ba3);}}catch(_0x36aef7){_0x10ea9f(_0x36aef7[_0x860d('0x1f')]);}});}}(this));