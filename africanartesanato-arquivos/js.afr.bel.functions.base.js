/**
* Funções base
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
// (function(){"undefined"===typeof window.console&&(window.console=window.console||{});"object"===typeof window.console&&"function"!==typeof window.console.error&&(window.console.error=function(){});"object"===typeof window.console&&"function"!==typeof window.console.info&&(window.console.info=function(){});"object"===typeof window.console&&"function"!==typeof window.console.warn&&(window.console.warn=function(){});"object"===typeof window.console&&"function"!==typeof window.console.debug&& (window.console.debug=function(){});"object"===typeof window.console&&"function"!==typeof window.console.log&&(window.console.log=function(){})})();

try {
	var Common = {
		run: function() {},
		init: function() {
			Common.bannersCount();
			Common.userAuth();
			// Common.bannerResponsive();
			Common.productCaroussel();
			Common.productOwlCarousel();
			// Common.modalNewsLetter();
			Common.callSmartCart();
			Common.cartAddProduct();
			Common.amazingMenu();
			Common.applyMosaicBanners();
			Common.quantityForVtexBuyButton();
			Common.quantityForVtexBuyButtonClick();
		},
		ajaxStop: function() {
			Common.quantityForVtexBuyButtonClick();
		},
		windowOnload: function() {},
		cartAddProduct: function() {
			var modal = $('.modal').clone().appendTo(document.body).addClass('qd-v1-modal-add-product-cart');

			modal.find('.modal-body').append('<p><i class="fa fa-check-circle" aria-hidden="true"></i> Produto adicionado com sucesso!</p>');

			$(window).on("cartProductAdded.vtex", function() {
				modal.modal();

				setTimeout(function() {
					modal.modal('hide');
				}, 3000);
			});
		},
		applyMosaicBanners: function() {
			$('.qd-mosaic-banners > .box-banner').QD_mosaicBanners({
				// bannerColSecurityMargin: -30,
				containerWidth: 1142,
				classTwoColumn: "col-xs-24 col-sm-12", // Classe do bootstrap para 2 banner por linha
				classThreeColumn: "col-xs-12 col-sm-8", // Classe do bootstrap para 3 banner por linha
				classFourColumn: "col-xs-12 col-sm-6" // Classe do bootstrap para 4 banner por linha				
			});
		},		
		callSmartCart: function() {
			// Adiciona Carrinho e Backdrop
			$(document.body).append('<div class="components-qd-v1-overlay"></div>');
			$(document.body).append('<div class="smart-cart-qd-v2-wrapper"> <div class="qd-sc-wrapper"></div> </div>');

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
				}
			});

			window._QuatroDigital_prodBuyCallback = function(jqXHR, textStatus, prodLink, skus){
				$.fn.simpleCart(true);
				$(".shelf-qd-v1-buy-button-modal").modal("hide");
				$(window).trigger("QuatroDigital.qd_bb_prod_add", [new $, skus[0] || 0]);
			};

			$(".v2-cart-wrapper a.cartLink").click(function(evt) {
				evt.preventDefault();
				$(document.body).toggleClass('qd-cart-show');

				wrapper.height($(window).height());
				wrapper.find(".qd-ddc-prodWrapper").css('max-height', $(window).height() - 193);
			});

			$(".components-qd-v1-overlay, .qd_ddc_lightBoxClose").click(function(evt){
				$(document.body).removeClass('qd-cart-show');
			});
		},
		bannersCount: function() {
			$(".box-banner").parent().each(function() {
				var $t = $(this);
				$t.addClass("qdBannerCount-" + $t.find(".box-banner").length);
			});
		},
		amazingMenu:function(){
			var amazingMenuMobile = $('.header-qd-v3-amazing-menu-mobile');

			$('[class*=main-amazing-menu]').QD_amazingMenu();

			$('.header-qd-v3-amazing-menu-mobile-content').append('<span class="header-qd-v1-mobile-amazing-menu-close"></span>');

			// Amazing Menu Responsivo
			$(".header-qd-v3-amazing-menu-mobile-btn").click(function(){
				$("body").toggleClass('qd-am-on');
			});

			$(".components-qd-v1-overlay, .header-qd-v1-mobile-amazing-menu-close").click(function(){
				$("body").removeClass('qd-am-on');
			});

			amazingMenuMobile.find('> ul > li > a, > ul > li > p').each(function() {
				var $t = $(this);

				if ($t.find('+ ul').length > 0)
					$t.addClass('link-dropdown');
			});

			amazingMenuMobile.find('.link-dropdown').click(function(evt) {
				evt.preventDefault();
				var $t = $(this);

				$t.find('+ ul').stop(true, true).slideToggle('slow');
				$t.toggleClass('active');
			});
		},
		userAuth:function(){
			$.qdAjax({
				url: "/no-cache/profileSystem/getProfile",
				dataType: "json",
				clearQueueDelay: null,
				success: function(data){
					try{
						if(data.IsUserDefined){
							// logado
							$(".qd-header-auth").text("(Sair)").attr({"href":"/no-cache/user/logout", "title": (data.FirstName ? data.FirstName + " " + (data.LastName || ""): data.Email), "data-placement":"bottom" }).tooltip();
						}
						else{
							// Deslogado
							$(".qd-header-auth").text("(Entrar)").click(function(e) {
								e.preventDefault();
								vtexid.start();
							});
						}
					}catch (e) {
						if (typeof console !== "undefined" && typeof console.info === "function")
							console.info("Ops, algo saiu errado com o login.", e.message);
					}
				}
			});
		},
		bannerResponsive:function(){
			$(".qd-banner-responsive .box-banner a").each(function(){
				var $t = $(this);
				var cols = [];

				var href = $t.attr("href") || "";
				if(!href.length)
					return;

				$t.attr( "href", href.replace(/(col-)?(xs|sm|md|lg)-[0-9]{1,2},?/ig, function(match){
					var str = match.replace(",", "").toLowerCase();
					cols.push( str.substr(0,4) === "col-" ? str : "col-" + str );
					return "";
				}) );

				$t.parent().addClass( cols.length ? cols.join(" ") : "col-xs-12 col-sm-12" );
			});
		},
		productOwlCarousel:function(){
			if (!$.fn.owlCarousel)
				return;

			$('body.produto .prateleira fieldset').parent().addClass('qd-accessories');

			$(".qd-shelf-carousel .prateleira:not(.qd-accessories)").each(function() {
				$(this).owlCarousel({
					items: 4,
					navigation: true,
					pagination: false
				});
			});
		},
		productCaroussel: function(){
			$(".qd-porduct-collections-accessories .prateleira, .qd-shelf-carousel .prateleira, .shelf-qd-v1-carousel .prateleira").each(function(){
				var wrap = $(this);

				wrap.find("> h2").addClass('heading-2').insertBefore(wrap);
				wrap.find(".prateleira >ul").addClass("item");
			});
		},
		modalNewsLetter: function () {
			var modal = $(".modal");
			var html = $('<form novalidate="1"> <div class="row"> <div class="col-xs-15 col-xs-offset-9"> <div class="qd_news"> <div class="row form-row"> <input type="text" name="nome" class="qd_news_name input-type-text-ghost form-control" /> </div> <div class="row form-row"> <input type="email" name="email" class="qd_news_email input-type-text-ghost form-control" /> </div> <div class="row form-row"> <button class="qd_news_button">Gerar cupom</button> </div> </div> <span class="btn-close ico-close" data-dismiss="modal"></span> </div> </div> </form>');
			var inputSuccess = $('<div class="row form-row"><input type="text" name="name" class="qd_success input-type-text-ghost form-control" /><button class="qd_news_button_ok" data-dismiss="modal">OK!</button></div>');

			// Ações
			modal.on("hidden.bs.modal", function(){
				modal.removeClass("newsletter-modal");
				html.trigger("QuatroDigital.cf_close");
			});

			html.QD_cookieFn({
				cookieName: "newsletter",
				close: "",
				expireDays: 31,
				show: function($elem){
					modal.find(".modal-body").empty().append(html);
					modal.addClass("newsletter-modal");
					modal.modal();

					html.QD_news({
						defaultName: "Nome",
						defaultEmail: "E-mail",
						checkNameFieldIsVisible: false,
						successCallback: function () {
							$(".newsletter-modal").addClass("newsletterFinish");
							$(".qd_news").append(inputSuccess);
							$(".newsletter-modal .qd_success").val("PROMO1COMP");
						}
					});
				},
				hide: function($elem){}
			});
		},
		quantityForVtexBuyButton: function () {
			try{
				window._QD_qfvbb_qtt = 1;
				var getAddUrlForSku =  $.skuSelector.getAddUrlForSku;
				
				$.skuSelector.getAddUrlForSku = function() {
					var params = arguments;
					params[2] = window._QD_qfvbb_qtt;
					
					return getAddUrlForSku.apply(this, params);
				};
			} catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e)); }
		},
		quantityForVtexBuyButtonClick: function () {
			try{
				$('.wrapper-buy-button-asynchronous:not(.shelf-qd-v1-box-quantity)').prepend("<div class='shelf-qd-v1-smart-qtt'> <input class='shelf-qd-v1-smart-input qd-sq-quantity' type='tel' value='0'> <span class='shelf-qd-v1-smart-qtt-btn qd-sq-more'><i class='fa fa-plus'></i></span> <span class='shelf-qd-v1-smart-qtt-btn qd-sq-minus qd-sq-inactive'><i class='fa fa-minus'></i></span></div>").addClass('shelf-qd-v1-box-quantity');
				$('li[layout]:not(".qd-qfvbb-on")').addClass('qd-qfvbb-on').QD_smartQuantity({
					buyButton: null
				});
				
				$('.shelf-qd-v1-box-quantity .btn-add-buy-button-asynchronous:not(".qd-qfvbb-on")').addClass('qd-qfvbb-on').on("click", function () {
					var qtt = $(this).closest('.wrapper-buy-button-asynchronous').find('.qd-sq-quantity').val();
					window._QD_qfvbb_qtt = parseInt(qtt) || 1;
				});
			} catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e)); }
		}
	};

	var Home = {
		init: function() {
			Home.brandOwlCarousel();
			Home.cycle2();
			Home.cycle2Mobile();
			Home.organizeSideMenuCollection();
			Home.homeSliderFull();
			// Home.mosaicAdjustment();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		brandOwlCarousel:function(){
			var owl = $(".qd-banner-carousel");

			owl.owlCarousel({
				items: 5,
				navigation: true,
				pagination: false,
				navigationText: ["",""]
			});

			// Custom Navigation Events
			$(".owl-next").click(function(){
				owl.trigger('owl.next');
			});
			$(".owl-prev").click(function(){
				owl.trigger('owl.prev');
			});
		},
		cycle2: function() {
			if(typeof $.fn.cycle !== "function")
				return;
			var elem = $(".main-slider");

			elem.cycle({
				slides: ">.box-banner",
				swipe: "true",
				pager: ".responsive-pager",
				prev: ".cycle-prev",
				next: ".cycle-next"
			});
		},
		cycle2Mobile: function() {
			if(typeof $.fn.cycle !== "function")
				return;
			var elem = $(".main-slider-mobile");

			elem.cycle({
				slides: ">.box-banner",
				swipe: "true",
				pager: ".responsive-pager",
				prev: ".cycle-prev",
				next: ".cycle-next"
			});
		},
		organizeSideMenuCollection: function() {
			var wrapper = $(".qd-category-collections");
			var htmlItem = '<div class="col-xs-24 item"><div class="row"></div></div>';
			var htmlSideMenuWrapper = '<div class="col-xs-24 col-sm-24 col-md-6 htmlSideMenuWrapper"></div>';
			var htmlCollectionWrapper = '<div class="col-xs-24 col-sm-24 col-md-18 htmlCollectionWrapper"></div>';
			var itemSideMenuCollection = '<div class="row itemSideMenuCollection"><div></div></div>';

			wrapper.find('[itemscope="itemscope"]:not(".qd-on")').addClass("qd-on").each(function() {
				$t = $(this);

				$t.after(htmlSideMenuWrapper);

				$('.htmlSideMenuWrapper:not(".qd-on")').addClass("qd-on").append(wrapper.find($t));

				var collectionTitle = $t.getParent(".htmlSideMenuWrapper").find("+ .heading-2");
				var collection = $t.getParent(".htmlSideMenuWrapper").find("+ .heading-2 + .prateleira") || $t.getParent(".htmlSideMenuWrapper").find("+ .prateleira");

				$t.getParent('.htmlSideMenuWrapper').after(htmlCollectionWrapper);

				$('.htmlCollectionWrapper:not(".qd-on")').addClass("qd-on").append(collectionTitle, collection);

				$t.getParent(".htmlSideMenuWrapper").find("+ .htmlCollectionWrapper").after(itemSideMenuCollection);

				$('.itemSideMenuCollection:not(".qd-on")').addClass("qd-on").find("> div").append($t.getParent(".htmlSideMenuWrapper"), $t.getParent(".htmlSideMenuWrapper").find("+ .htmlCollectionWrapper"));
			});

			// APLCIANDO CAROUSEL
			if (!$.fn.owlCarousel)
				return;

			$(".shelf-qd-v1-carousel .prateleira").each(function() {
				$(this).owlCarousel({
					items: 3,
					navigation: true,
					pagination: false
				});
			});
		},
		homeSliderFull: function() {
			if(typeof $.fn.cycle !== "function")
				return;
			var elem = $(".home-slider");

			elem.cycle({
				slides: ">.box-banner",
				swipe: "true",
				pager: ".responsive-pager-2",
				prev: ".cycle-prev-home-slider",
				next: ".cycle-next-home-slider"
			});
		},
		mosaicAdjustment: function() {
			mosaicAddRow($(".qd-banner-responsive >div:not(.row)"));

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
				mosaicAddRow($(".qd-banner-responsive > div:not(.row)"));
			}
		}
	};

	var Departament = {
		init: function () {
			Departament.showDisclaimerBanners();
			Departament.sidemenuToggle();
			Departament.hideExtendedMenu();
			Search.shelfLineFix();
		},
		ajaxStop: function () {
			Search.shelfLineFix();
		},
		windowOnload: function () {},
		showDisclaimerBanners: function () {
			if ($(".disclaimer .box-banner").length)
				$(".disclaimer").show();
		},
		sidemenuToggle:function(){
			// Amazing Menu Responsivo
			console.log("fiddler on");
			$(".side-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});
			$(".qd-am-overlay, .search-menu-close, .components-qd-v1-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		},
		hideExtendedMenu:function(){
			$(".search-navigator ul").each(function(){
				var t,li,qtt,moreLink,moreLi,click,liHide;

				t=$(this);
				li=t.find(">li");
				qtt=5;

				if(li.length<=qtt) return;

				liHide=li.filter(":gt("+(qtt-1)+")").stop(true,true).hide();
				moreLink=$('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				t.after(moreLink);
				moreLi=$('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">ver mais</a></li>');
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
		init: function () {
			Departament.showDisclaimerBanners();
			Departament.sidemenuToggle();
			Departament.hideExtendedMenu();
			Search.shelfLineFix();
		},
		ajaxStop: function () {
			Search.shelfLineFix();
		},
		windowOnload: function () {},
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
		}
	};

	var Product = {
		init: function () {
			Product.seeDescription();
			Product.organizeDescription();
			Product.videoIframe();
			Product.accessoriesFix();
			Product.openShipping();
			Product.hideUniqueSkuOption();
			Product.applyBuyButton();
			Product.applySmartQuantity();
			Product.showColorsImages();
			Product.productSkuMerge();
			Product.showColorTable();
		},
		ajaxStop: function () {},
		windowOnload: function () {},
		seeDescription: function() {
			$(".btn-see-description").click(function(e){
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $(".product-description").offset().top - 100
				}, 900, 'swing');
			});
		},
		organizeDescription: function() {
			var wrapper = $('#caracteristicas');

			wrapper.prepend(wrapper.find(".group.Curriculo + table"));
			wrapper.prepend(wrapper.find(".group.Curriculo"));
			wrapper.prepend(wrapper.find(".group.Sinopse + table"));
			wrapper.prepend(wrapper.find(".group.Sinopse"));
		},
		hideUniqueSkuOption: function() {
			$(".sku-selection-box [class*='group_']").each(function(){
				var $t = $(this);
				var input =  $t.find("input");

				if(input.length !== 1)
					return;

				input.attr("checked", true).change();
				$t.getParent("ul").hide();
			});
		},
		videoIframe: function() {
			var wrapper = $('.video-iframe .video-iframe-content');

			wrapper.prepend($(".group.Video + table iframe"));

			if (!$('.group.Video').length > 0)
				return;

			$('.product-image-thumbs').prepend('<li class="thumb-product-video"><a href="#video-iframe"></a></li>');


			$(".thumb-product-video a").click(function(e){
				e.preventDefault();

				var target = this.hash;

				$target = $(target);

				$('html, body').stop().animate({
					'scrollTop': $target.offset().top - 60
				}, 900, 'swing');
			});
		},
		accessoriesFix: function() {
			$("fieldset >.buy-product-checkbox").parent().each(function() {
				var $t  = $(this);
				$t.add($t.prev("ul")).wrapAll('<div class="qd-accessories-wrapper col-xs-24 col-sm-8 col-md-6"/>');
			});
		},
		openShipping: function() {
			ShippingValue();
		},
		applyBuyButton: function() {
			$(".qd_cart_auto").QD_buyButton({
				buyButton: ".product-buy-button .buy-button"
			});
		},
		applySmartQuantity: function () {
			$('.sku-selection-box').QD_smartQuantity({
				buyButton: ".product-buy-button .buy-button"
			});

			$(window).on("skuSelected.vtex", function (e, id, data) {
				$('.qd-sq-more, .qd-sq-minus').click();
			});
		},
		showColorsImages: function() {
			if ($(document.body).is(".product-colors"))
				return;

			try {
				$('.sku-selector-container-0 .Cor').find('.dimension-Cor').each(function() {
					i = 0;
					var cor = $(this).attr('class').split('skuespec_Cor_opcao_')[1].replace(/ /g, '').replace(/-/g, ' ');
					for (var i = 0; i < skuJson.skus.length; i++) {
						if (skuJson.skus[i].dimensions.Cor == cor) {
							$(this).wrapInner('<div class="product-qd-v1-sku-text"></div>').prepend('<div class="product-qd-v1-sku-img"><img class="img-responsive" src="' + skuJson.skus[i].image.replace(/(ids\/[0-9]+)\-[0-9]+\-[0-9]+/, '$1-50-50') + '" /></div>');
							break;
						}
					}
				});
			}
			catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Ops, algo saiu errado ao aplicar as imagens das cores :( . Detalhes: " + e.message)); }
		},
		productSkuMerge: function() {
			try {
				if (!$(document.body).is(".product-colors") || !skuJson.skus[0].dimensions['Cor'] || !$('.product-qd-v2-sku-selection-color-similiar').length) 
					return;

				// Ajustando bodyClass e escondendo SKU em lista
				$('.product-sku-selection').hide();

				var wrapper = $('<div class="product-qd-v2-sku-merge"></div>').appendTo('.product-qd-v2-sku-selection-color-similiar');

				var wrapperColors = $('<ul></ul>').appendTo(wrapper);
				var loading = $('<div style="clear: both" class="loading"></div>').hide().appendTo(wrapper);

				var item, iWrapper;
				function renderBubble(pData) {
					for (var i = 0; i < pData.skus.length; i++) {
						item = $('<img alt="' + (pData.skus[i].dimensions['Cor'] || '----') + '"></img>').appendTo(wrapperColors).wrap('<li data-qd-sku="'+pData.skus[i].sku+'"></li>');
						item.addClass('product-qd-v1-color-image');
						item.attr({
							'data-qd-available': pData.skus[i].available ? 'true' : 'false',
							'data-qd-sku': pData.skus[i].sku,
							'src': pData.skus[i].image.replace(/(ids\/[0-9]+)\-[0-9]+\-[0-9]+/, '$1-85-85') || '----'
						});

						iWrapper = item.parent();
						$('<p class="color-name">'+(pData.skus[i].dimensions['Cor'] || '---')+'</p>').appendTo(iWrapper);
						$('<p class="color-price">'+(pData.skus[i].bestPriceFormated || '---')+'</p>').appendTo(iWrapper);
						$('<div class="product-qd-v1-box-quantity"> <div class="product-qd-v1-smart-qtt"> <input class="product-qd-v1-smart-input qd-sq-quantity" type="tel" value="0" /> <span class="product-qd-v1-smart-qtt-btn qd-sq-more"><i class="fa fa-plus"></i></span> <span class="product-qd-v1-smart-qtt-btn qd-sq-minus"><i class="fa fa-minus"></i></span> </div> </div>').appendTo(iWrapper);

						// Indisponível
						if (!pData.skus[i].available) {
							iWrapper.addClass('color-unavailable').after('<span style="display:none">indisponível</span>');
							iWrapper.find(".color-price").text('---');
						} else {
							iWrapper.QD_smartQuantity({
								buyButton: null,
								initialValue: 0,
								minimumValue: 0
							});
						}
					}
				}

				// Renderizando as bolhas
				renderBubble(skuJson);

				function showScrollBar() {
					var windowWidth = $(window).width();
					if (windowWidth < 740 ) {
						$('.product-qd-v2-sku-merge').css('overflow', 'auto');
						var colorListWidth = $('.product-qd-v2-sku-merge li').length * 200;
						$('.product-qd-v2-sku-merge ul').css('width',colorListWidth+'px');
					} else {
						$('.product-qd-v2-sku-merge').css('overflow', 'hidden');
						$('.product-qd-v2-sku-merge ul').css('width', '100%');
					}
				}
				showScrollBar();
				$(window).on("resize", function() { 
					console.log('moedinha');showScrollBar(); });

				$('.product-qd-v2-sku-merge').on('QuatroDigital.sq_change', function(e, input) {
					var $t = $(input);
					var iWrapper = $t.closest('li');

					for (var i = 0; i < skuJson.skus.length; i++) {
						if ($t.val() > 0)
							iWrapper.addClass('sku-selected');
						else
							iWrapper.removeClass('sku-selected');

						if (skuJson.skus[i].sku == iWrapper.attr('data-qd-sku')) {
							$(window).trigger('QuatroDigital.psm_change_v2', [skuJson.skus[i], $t.val()]);
							break;
						}
					}
				});
			}
			catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e)); }
		},
		showColorTable: function() {
			if (!$('.product-qd-v2-sku-selection-color-similiar').length) 
				return;
				
			var skus = {};
			var shippingItems = [];

			var table = $('<table class="product-qd-v1-skus-table"><thead><th>Cores Selecionadas</th> <th>Qtd.</th><th>Excluir</th></thead><tbody></tbody></table>');
			table.insertAfter($('.sku-selection-box .product-price').closest('.row'));
			table.wrap('<div class="row"></div>');
			table.hide();

			var tbody = table.find('tbody');
			var totalPrice = 0;

			var installWrapper = $('<div class="product-qd-v2-installments-method"></div>');
			installWrapper.append('<a class="installments-method-close"><i class="fa fa-times" aria-hidden="true"></i></a>');
			installWrapper.append('<h5>Opções de Parcelamento:</h5>');
			installWrapper.append('<div class="product-qd-v2-installments-table"></div>');
			installWrapper.insertAfter('.sku-selection-box .product-price');
			installWrapper.hide();

			installWrapper.find(".installments-method-close").click(function() {
				installWrapper.hide();
			});

			var installButton = $('<a class="product-qd-v1-see-installments"><i class="fa fa-credit-card"></i><span>Formas de parcelamento</span></a>');
			installButton.insertAfter('.sku-selection-box .product-price');
			installButton.hide();
			installButton.click(function() {
				installWrapper.toggle();

				if (installWrapper.is(':visible'))
					vtexjs.checkout.simulateShipping(shippingItems, '', 'BRA').done(function(result) {
						var installments = [];
						var wrapper = installWrapper.find('.product-qd-v2-installments-table');
						wrapper.empty();

						for(var i=0; i<result.paymentData.installmentOptions.length; i++)
							if (result.paymentData.installmentOptions[i].installments.length > installments.length)
								installments = result.paymentData.installmentOptions[i].installments;

						for (var i=0; i<installments.length; i++) {
							var count = installments[i].count == 1 ? "à vista" : installments[i].count + "x de";
							wrapper.append('<p>'+count+' <span>R$ ' + qd_number_format(installments[i].value/100, 2, ",", ".")+'</span></p>');
						}
					});
			});

			$('.product-price .skuBestPrice').empty();
			$('.product-buy-button').html('<a class="buy-button buy-button-ref qd-sbb-on" href="#" onClick="alert(\'Selecione o modelo desejado!\')">Comprar<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span></a>');

			$(window).on("QuatroDigital.psm_change_v2", function(e, sData, qtt) {
				tbody.empty();
				totalPrice = 0;
				shippingItems = [];
				var url = "/checkout/cart/add?";

				if (qtt == 0)
					skus[sData.sku] = null;
				else
					skus[sData.sku] = {"sData" : sData, "qtt" : qtt};

				for (var i in skus) {
					if (!skus[i] || skus[i].qtt == 0)
						continue;
					var tr = $('<tr></tr>');

					var iWrapper = $('<td></td>');
					iWrapper.append('<img class="product-qd-v1-color-image" src="'+(skus[i].sData.image.replace(/(ids\/[0-9]+)\-[0-9]+\-[0-9]+/, '$1-85-85') || '----')+'"></img>');
					iWrapper.append('<p>'+(skus[i].sData.dimensions['Cor'] || '---') + ' <span>' + (skus[i].sData.bestPriceFormated || '---')+'</span></p>');
					tr.append(iWrapper);

					tr.append('<td>'+skus[i].qtt+'</td>');

					var a = $('<a data-qd-sku="'+skus[i].sData.sku+'"><i class="fa fa-times" aria-hidden="true"></i></a>');
					a.click(function() {
						var sSku = $(this).attr('data-qd-sku');
						$('.product-qd-v2-sku-merge').find('li[data-qd-sku="'+sSku+'"] .product-qd-v1-smart-input').val(0).change();
					});
					tr.append(a);
					a.wrap('<td></td>')

					tr.appendTo(tbody);

					totalPrice += ((skus[i].sData.bestPrice/100) * skus[i].qtt);

					$('.sku-selection-box .product-price').show();
					$('.product-price').html('<em class="valor-por price-best-price"><strong class="skuBestPrice">R$ '+qd_number_format(totalPrice, 2, ",", ".")+'</strong></em>');

					url += "&sku=" + skus[i].sData.sku + "&qty=" + skus[i].qtt + "&seller=" + skus[i].sData.sellerId;

					shippingItems.push({
						'id': skus[i].sData.sku,
						'quantity': skus[i].qtt,
						'seller' : skus[i].sData.sellerId
					});
				};

				if (tbody.is(':empty')) {
					table.hide();
					$('.sku-selection-box .product-price').hide();
					$('.product-qd-v1-see-installments').hide();
					$('.product-qd-v1-installments-method').hide();
					$('.product-buy-button').html('<a class="buy-button buy-button-ref qd-sbb-on" href="#" onClick="alert(\'Selecione o modelo desejado!\')">Comprar<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span></a>');
				} else {
					table.show();
					url += '&sc='+jssalesChannel+'&redirect=true';
					$('.sku-selection-box .product-price').show();
					$('.product-qd-v1-see-installments').show();
					$('.product-buy-button').html('<a class="buy-button buy-button-ref qd-sbb-on" href="'+url+'">Comprar<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span></a>');
				}
			});
		}
	};

	var List = {
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
			$(".side-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});
			$(".qd-am-overlay, .search-menu-close, .components-qd-v1-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		}
	};

	var Orders = {
		init: function() {
			Orders.bootstrapCssFix();
			Institutional.sidemenuToggle();
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
} catch (err) {
	if (typeof console !== "undefined" && typeof console.error === "function" && typeof console.info === "function") {
		console.info("Houve um erro nos objetos, informações abaixo.");
		console.error(err.message);
	}
}

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
			body = $("body");
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
	})();
} catch (err) {
	if (typeof console !== "undefined" && typeof console.error === "function" && typeof console.info === "function") {
		$("body").addClass('jsFullLoaded jsFullLoadedError');
		console.info("Houve um erro ao iniciar os objetos, informações abaixo.");
		console.error(err);
	}
}

/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
var _0xe353=['updateOnlyHover','mouseenter.qd_ddc_hover','getCartInfoByUrl','texts','cartTotal','#value','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','#items','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','#total','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','.qd-ddc-viewCart','html','linkCart','.qd_ddc_continueShopping','continueShopping','.qd-ddc-checkout','linkCheckout','.qd-ddc-infoTotal','.qd-ddc-shipping','shippingForm','emptyCart','cartContainer','each','clone','add','total','.qd-ddc-infoTotalShipping','shipping','.qd-ddc-infoAllTotal','items','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','dataOptionsCache','timeRemoveNewItemClass','.qd-ddc-wrapper','qd-ddc-prodLoaded','_QuatroDigital_AmountProduct','exec','call','getOrderForm','totalizers','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho','.qd-ddc-prodRow','qd-ddc-noItems','renderProductsList','.qd-ddc-prodWrapper2','productCategoryIds','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','attr','addClass','qd-ddc-','availability','.qd-ddc-prodName','skuName','.qd-ddc-prodPrice','append','sellingPrice','Grátis','meta[name=currency]','content','.qd-ddc-quantity','quantity','insertProdImg','.qd-ddc-image','imageUrl','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','shippingData','address','postalCode','aviso','actionButtons','lastSku','filter','[data-sku=\x27','outerHeight','qd-ddc-lastAddedFixed','qd-ddc-lastAdded','qd-ddc-cart-empty','qd-ddc-product-add-time','qd-ddc-cart-rendered','callbackProductsList','qd-loaded','load','src','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','data-sku','data-sku-index','changeQantity','.qd-ddc-prodQttWrapper:not(.qd_on)','.qd-ddc-quantityMore','click.qd_ddc_more','qd-loading','click.qd_ddc_minus','preventDefault','focusout.qd_ddc_change','keyup.qd_ddc_change','.qd-ddc-remove','click.qd_ddc_remove','removeProduct','slideUp','remove','cartIsEmpty','$1-$2$3','data','qdDdcLastPostalCode','calculateShipping','BRA','fail','Não\x20foi\x20possível\x20calcular\x20o\x20frete','boolean','simpleCart','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','index','updateItems','done','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','removeItems','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','Atenção,\x20este\x20método\x20esta\x20descontinuado.','height','stop','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','avisso','Callback\x20não\x20é\x20uma\x20função','Oooops!\x20','allowRecalculate','buyButtonClicked','quickViewUpdate','productId','prod_','prodId','qtt','.qd-bap-wrapper','qd-bap-item-added','input.qd-productId[value=','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd-bap-qtt','.qd_bap_wrapper_content','prepend','ajaxStop','.qdDdcContainer','QD_smartCart','extend','selector','buyButton','dropDown','QD_buyButton','smartCart','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','getParent','closest','replace','undefined','pow','round','toFixed','split','length','join','_QuatroDigital_CartData','callback','Callbacks','function','error','message','object','info','warn','unshift','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','alerta','toLowerCase','apply','_QuatroDigital_DropDown','allowUpdate','QD_dropDownCart','sevpnanegrfnangb%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','fromCharCode','ite','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','Ir\x20ao\x20Carrinho','Finalizar\x20Compra','<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','Continuar\x20Comprando','<label\x20for=\x22qd-ddc-cep\x22>Calcular\x20frete:\x20</label><input\x20type=\x22tel\x22\x20id=\x22qd-ddc-cep\x22\x20placeholder=\x22CEP\x22\x20/>','name','smartCheckout','vtexjs','ajax','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','script','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','checkout','SDK','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>','find','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','click.qd_ddc_closeFn','removeClass','body','off','keyup.qd_ddc_closeFn','keyCode','qd-bb-lightBoxProdAdd','qd-bb-lightBoxBodyProdAdd','.qd-ddc-prodWrapper','.qd-ddc-scrollUp','click.qd_ddc_scrollUp','scrollCart','click.qd_ddc_scrollDown','.qd-ddc-shipping\x20input','val','shippingCalculate'];(function(_0xe4de3d,_0x34d3ec){var _0x4f454a=function(_0x363d44){while(--_0x363d44){_0xe4de3d['push'](_0xe4de3d['shift']());}};_0x4f454a(++_0x34d3ec);}(_0xe353,0x176));var _0x3e35=function(_0x55036d,_0x53fd08){_0x55036d=_0x55036d-0x0;var _0x147e59=_0xe353[_0x55036d];return _0x147e59;};(function(_0x43b515){_0x43b515['fn'][_0x3e35('0x0')]=_0x43b515['fn'][_0x3e35('0x1')];}(jQuery));function qd_number_format(_0x2db966,_0x13eb2a,_0x619170,_0x1f0e46){_0x2db966=(_0x2db966+'')[_0x3e35('0x2')](/[^0-9+\-Ee.]/g,'');_0x2db966=isFinite(+_0x2db966)?+_0x2db966:0x0;_0x13eb2a=isFinite(+_0x13eb2a)?Math['abs'](_0x13eb2a):0x0;_0x1f0e46=_0x3e35('0x3')===typeof _0x1f0e46?',':_0x1f0e46;_0x619170=_0x3e35('0x3')===typeof _0x619170?'.':_0x619170;var _0x135316='',_0x135316=function(_0x560e4f,_0xe156a){var _0x13eb2a=Math[_0x3e35('0x4')](0xa,_0xe156a);return''+(Math[_0x3e35('0x5')](_0x560e4f*_0x13eb2a)/_0x13eb2a)[_0x3e35('0x6')](_0xe156a);},_0x135316=(_0x13eb2a?_0x135316(_0x2db966,_0x13eb2a):''+Math[_0x3e35('0x5')](_0x2db966))[_0x3e35('0x7')]('.');0x3<_0x135316[0x0][_0x3e35('0x8')]&&(_0x135316[0x0]=_0x135316[0x0][_0x3e35('0x2')](/\B(?=(?:\d{3})+(?!\d))/g,_0x1f0e46));(_0x135316[0x1]||'')['length']<_0x13eb2a&&(_0x135316[0x1]=_0x135316[0x1]||'',_0x135316[0x1]+=Array(_0x13eb2a-_0x135316[0x1][_0x3e35('0x8')]+0x1)[_0x3e35('0x9')]('0'));return _0x135316[_0x3e35('0x9')](_0x619170);};(function(){try{window[_0x3e35('0xa')]=window['_QuatroDigital_CartData']||{},window[_0x3e35('0xa')][_0x3e35('0xb')]=window['_QuatroDigital_CartData']['callback']||$[_0x3e35('0xc')]();}catch(_0x2a9b3d){_0x3e35('0x3')!==typeof console&&_0x3e35('0xd')===typeof console[_0x3e35('0xe')]&&console[_0x3e35('0xe')]('Oooops!\x20',_0x2a9b3d[_0x3e35('0xf')]);}}());(function(_0x5ab566){try{var _0x171970=jQuery,_0x50af2d=function(_0x419c92,_0x296938){if(_0x3e35('0x10')===typeof console&&_0x3e35('0x3')!==typeof console[_0x3e35('0xe')]&&'undefined'!==typeof console[_0x3e35('0x11')]&&_0x3e35('0x3')!==typeof console[_0x3e35('0x12')]){var _0xa76814;'object'===typeof _0x419c92?(_0x419c92[_0x3e35('0x13')]('[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a'),_0xa76814=_0x419c92):_0xa76814=[_0x3e35('0x14')+_0x419c92];if(_0x3e35('0x3')===typeof _0x296938||_0x3e35('0x15')!==_0x296938[_0x3e35('0x16')]()&&'aviso'!==_0x296938[_0x3e35('0x16')]())if(_0x3e35('0x3')!==typeof _0x296938&&'info'===_0x296938[_0x3e35('0x16')]())try{console['info'][_0x3e35('0x17')](console,_0xa76814);}catch(_0x53a2af){try{console['info'](_0xa76814[_0x3e35('0x9')]('\x0a'));}catch(_0x28614d){}}else try{console[_0x3e35('0xe')][_0x3e35('0x17')](console,_0xa76814);}catch(_0x5138a0){try{console[_0x3e35('0xe')](_0xa76814['join']('\x0a'));}catch(_0x2e893d){}}else try{console[_0x3e35('0x12')][_0x3e35('0x17')](console,_0xa76814);}catch(_0x879700){try{console[_0x3e35('0x12')](_0xa76814[_0x3e35('0x9')]('\x0a'));}catch(_0xe3d663){}}}};window[_0x3e35('0x18')]=window[_0x3e35('0x18')]||{};window['_QuatroDigital_DropDown'][_0x3e35('0x19')]=!0x0;_0x171970[_0x3e35('0x1a')]=function(){};_0x171970['fn'][_0x3e35('0x1a')]=function(){return{'fn':new _0x171970()};};var _0x3101fb=function(_0x8f4d55){var _0x57d59b={'n':_0x3e35('0x1b')};return function(_0x138ee3){var _0x2139b7=function(_0x3e2581){return _0x3e2581;};var _0x104c89=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x138ee3=_0x138ee3['d'+_0x104c89[0x10]+'c'+_0x104c89[0x11]+'m'+_0x2139b7(_0x104c89[0x1])+'n'+_0x104c89[0xd]]['l'+_0x104c89[0x12]+'c'+_0x104c89[0x0]+'ti'+_0x2139b7('o')+'n'];var _0x3059e4=function(_0x4a45b7){return escape(encodeURIComponent(_0x4a45b7['replace'](/\./g,'¨')[_0x3e35('0x2')](/[a-zA-Z]/g,function(_0x8337d4){return String[_0x3e35('0x1c')](('Z'>=_0x8337d4?0x5a:0x7a)>=(_0x8337d4=_0x8337d4['charCodeAt'](0x0)+0xd)?_0x8337d4:_0x8337d4-0x1a);})));};var _0x4097e5=_0x3059e4(_0x138ee3[[_0x104c89[0x9],_0x2139b7('o'),_0x104c89[0xc],_0x104c89[_0x2139b7(0xd)]][_0x3e35('0x9')]('')]);_0x3059e4=_0x3059e4((window[['js',_0x2139b7('no'),'m',_0x104c89[0x1],_0x104c89[0x4]['toUpperCase'](),_0x3e35('0x1d')][_0x3e35('0x9')]('')]||'---')+['.v',_0x104c89[0xd],'e',_0x2139b7('x'),'co',_0x2139b7('mm'),'erc',_0x104c89[0x1],'.c',_0x2139b7('o'),'m.',_0x104c89[0x13],'r']['join'](''));for(var _0x466499 in _0x57d59b){if(_0x3059e4===_0x466499+_0x57d59b[_0x466499]||_0x4097e5===_0x466499+_0x57d59b[_0x466499]){var _0x48e55e='tr'+_0x104c89[0x11]+'e';break;}_0x48e55e='f'+_0x104c89[0x0]+'ls'+_0x2139b7(_0x104c89[0x1])+'';}_0x2139b7=!0x1;-0x1<_0x138ee3[[_0x104c89[0xc],'e',_0x104c89[0x0],'rc',_0x104c89[0x9]][_0x3e35('0x9')]('')][_0x3e35('0x1e')](_0x3e35('0x1f'))&&(_0x2139b7=!0x0);return[_0x48e55e,_0x2139b7];}(_0x8f4d55);}(window);if(!eval(_0x3101fb[0x0]))return _0x3101fb[0x1]?_0x50af2d(_0x3e35('0x20')):!0x1;_0x171970[_0x3e35('0x1a')]=function(_0x190b12,_0x260c58){var _0x46ec31=_0x171970(_0x190b12);if(!_0x46ec31[_0x3e35('0x8')])return _0x46ec31;var _0x2c5179=_0x171970['extend'](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0x3e35('0x21'),'linkCheckout':_0x3e35('0x22'),'cartTotal':_0x3e35('0x23'),'emptyCart':_0x3e35('0x24'),'continueShopping':_0x3e35('0x25'),'shippingForm':_0x3e35('0x26')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'skuName':function(_0x5e17ad){return _0x5e17ad['skuName']||_0x5e17ad[_0x3e35('0x27')];},'callback':function(){},'callbackProductsList':function(){}},_0x260c58);_0x171970('');var _0x3edf59=this;if(_0x2c5179[_0x3e35('0x28')]){var _0x105321=!0x1;'undefined'===typeof window[_0x3e35('0x29')]&&(_0x50af2d('A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN'),_0x171970[_0x3e35('0x2a')]({'url':_0x3e35('0x2b'),'async':!0x1,'dataType':_0x3e35('0x2c'),'error':function(){_0x50af2d(_0x3e35('0x2d'));_0x105321=!0x0;}}));if(_0x105321)return _0x50af2d('A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!');}if(_0x3e35('0x10')===typeof window['vtexjs']&&'undefined'!==typeof window[_0x3e35('0x29')][_0x3e35('0x2e')])var _0x5ab566=window[_0x3e35('0x29')][_0x3e35('0x2e')];else if(_0x3e35('0x10')===typeof vtex&&_0x3e35('0x10')===typeof vtex[_0x3e35('0x2e')]&&'undefined'!==typeof vtex[_0x3e35('0x2e')][_0x3e35('0x2f')])_0x5ab566=new vtex[(_0x3e35('0x2e'))]['SDK']();else return _0x50af2d(_0x3e35('0x30'));_0x3edf59['cartContainer']=_0x3e35('0x31');var _0x61573a=function(_0xc31aea){_0x171970(this)['append'](_0xc31aea);_0xc31aea[_0x3e35('0x32')](_0x3e35('0x33'))['add'](_0x171970('.qd_ddc_lightBoxOverlay'))['on'](_0x3e35('0x34'),function(){_0x46ec31[_0x3e35('0x35')]('qd-bb-lightBoxProdAdd');_0x171970(document[_0x3e35('0x36')])[_0x3e35('0x35')]('qd-bb-lightBoxBodyProdAdd');});_0x171970(document)[_0x3e35('0x37')]('keyup.qd_ddc_closeFn')['on'](_0x3e35('0x38'),function(_0x328b44){0x1b==_0x328b44[_0x3e35('0x39')]&&(_0x46ec31['removeClass'](_0x3e35('0x3a')),_0x171970(document[_0x3e35('0x36')])[_0x3e35('0x35')](_0x3e35('0x3b')));});var _0x317202=_0xc31aea[_0x3e35('0x32')](_0x3e35('0x3c'));_0xc31aea[_0x3e35('0x32')](_0x3e35('0x3d'))['on'](_0x3e35('0x3e'),function(){_0x3edf59[_0x3e35('0x3f')]('-',void 0x0,void 0x0,_0x317202);return!0x1;});_0xc31aea['find']('.qd-ddc-scrollDown')['on'](_0x3e35('0x40'),function(){_0x3edf59[_0x3e35('0x3f')](void 0x0,void 0x0,void 0x0,_0x317202);return!0x1;});_0xc31aea['find'](_0x3e35('0x41'))[_0x3e35('0x42')]('')['on']('keyup.qd_ddc_cep',function(){_0x3edf59[_0x3e35('0x43')](_0x171970(this));});if(_0x2c5179[_0x3e35('0x44')]){var _0x260c58=0x0;_0x171970(this)['on'](_0x3e35('0x45'),function(){var _0xc31aea=function(){window['_QuatroDigital_DropDown'][_0x3e35('0x19')]&&(_0x3edf59[_0x3e35('0x46')](),window[_0x3e35('0x18')][_0x3e35('0x19')]=!0x1,_0x171970['fn']['simpleCart'](!0x0),_0x3edf59['cartIsEmpty']());};_0x260c58=setInterval(function(){_0xc31aea();},0x258);_0xc31aea();});_0x171970(this)['on']('mouseleave.qd_ddc_hover',function(){clearInterval(_0x260c58);});}};var _0xcb02c8=function(_0x330320){_0x330320=_0x171970(_0x330320);_0x2c5179[_0x3e35('0x47')][_0x3e35('0x48')]=_0x2c5179[_0x3e35('0x47')][_0x3e35('0x48')][_0x3e35('0x2')](_0x3e35('0x49'),_0x3e35('0x4a'));_0x2c5179[_0x3e35('0x47')][_0x3e35('0x48')]=_0x2c5179['texts'][_0x3e35('0x48')][_0x3e35('0x2')](_0x3e35('0x4b'),_0x3e35('0x4c'));_0x2c5179[_0x3e35('0x47')][_0x3e35('0x48')]=_0x2c5179['texts'][_0x3e35('0x48')][_0x3e35('0x2')](_0x3e35('0x4d'),_0x3e35('0x4e'));_0x2c5179[_0x3e35('0x47')][_0x3e35('0x48')]=_0x2c5179[_0x3e35('0x47')][_0x3e35('0x48')][_0x3e35('0x2')](_0x3e35('0x4f'),_0x3e35('0x50'));_0x330320[_0x3e35('0x32')](_0x3e35('0x51'))[_0x3e35('0x52')](_0x2c5179[_0x3e35('0x47')][_0x3e35('0x53')]);_0x330320['find'](_0x3e35('0x54'))[_0x3e35('0x52')](_0x2c5179[_0x3e35('0x47')][_0x3e35('0x55')]);_0x330320['find'](_0x3e35('0x56'))[_0x3e35('0x52')](_0x2c5179['texts'][_0x3e35('0x57')]);_0x330320[_0x3e35('0x32')](_0x3e35('0x58'))[_0x3e35('0x52')](_0x2c5179[_0x3e35('0x47')][_0x3e35('0x48')]);_0x330320[_0x3e35('0x32')](_0x3e35('0x59'))[_0x3e35('0x52')](_0x2c5179[_0x3e35('0x47')][_0x3e35('0x5a')]);_0x330320[_0x3e35('0x32')]('.qd-ddc-emptyCart\x20p')[_0x3e35('0x52')](_0x2c5179[_0x3e35('0x47')][_0x3e35('0x5b')]);return _0x330320;}(this[_0x3e35('0x5c')]);var _0x2efc35=0x0;_0x46ec31[_0x3e35('0x5d')](function(){0x0<_0x2efc35?_0x61573a['call'](this,_0xcb02c8[_0x3e35('0x5e')]()):_0x61573a['call'](this,_0xcb02c8);_0x2efc35++;});window['_QuatroDigital_CartData'][_0x3e35('0xb')][_0x3e35('0x5f')](function(){_0x171970('.qd-ddc-infoTotalValue')['html'](window[_0x3e35('0xa')][_0x3e35('0x60')]||'--');_0x171970('.qd-ddc-infoTotalItems')[_0x3e35('0x52')](window['_QuatroDigital_CartData']['qtt']||'0');_0x171970(_0x3e35('0x61'))[_0x3e35('0x52')](window[_0x3e35('0xa')][_0x3e35('0x62')]||'--');_0x171970(_0x3e35('0x63'))[_0x3e35('0x52')](window['_QuatroDigital_CartData']['allTotal']||'--');});var _0xc90040=function(_0x116c21,_0x570813){if(_0x3e35('0x3')===typeof _0x116c21[_0x3e35('0x64')])return _0x50af2d(_0x3e35('0x65'));_0x3edf59['renderProductsList']['call'](this,_0x570813);};_0x3edf59['getCartInfoByUrl']=function(_0xa0e6cc,_0x23513b){_0x3e35('0x3')!=typeof _0x23513b?window['_QuatroDigital_DropDown'][_0x3e35('0x66')]=_0x23513b:window['_QuatroDigital_DropDown'][_0x3e35('0x66')]&&(_0x23513b=window['_QuatroDigital_DropDown'][_0x3e35('0x66')]);setTimeout(function(){window[_0x3e35('0x18')][_0x3e35('0x66')]=void 0x0;},_0x2c5179[_0x3e35('0x67')]);_0x171970(_0x3e35('0x68'))[_0x3e35('0x35')](_0x3e35('0x69'));if(_0x2c5179['smartCheckout']){var _0x260c58=function(_0x273ec1){window[_0x3e35('0x18')]['getOrderForm']=_0x273ec1;_0xc90040(_0x273ec1,_0x23513b);_0x3e35('0x3')!==typeof window[_0x3e35('0x6a')]&&_0x3e35('0xd')===typeof window[_0x3e35('0x6a')][_0x3e35('0x6b')]&&window['_QuatroDigital_AmountProduct'][_0x3e35('0x6b')][_0x3e35('0x6c')](this);_0x171970(_0x3e35('0x68'))['addClass'](_0x3e35('0x69'));};'undefined'!==typeof window[_0x3e35('0x18')][_0x3e35('0x6d')]?(_0x260c58(window['_QuatroDigital_DropDown'][_0x3e35('0x6d')]),'function'===typeof _0xa0e6cc&&_0xa0e6cc(window[_0x3e35('0x18')]['getOrderForm'])):_0x171970['QD_checkoutQueue']([_0x3e35('0x64'),_0x3e35('0x6e'),'shippingData'],{'done':function(_0x350939){_0x260c58[_0x3e35('0x6c')](this,_0x350939);_0x3e35('0xd')===typeof _0xa0e6cc&&_0xa0e6cc(_0x350939);},'fail':function(_0x3ff4ca){_0x50af2d([_0x3e35('0x6f'),_0x3ff4ca]);}});}else alert('Este\x20método\x20esta\x20descontinuado!');};_0x3edf59['cartIsEmpty']=function(){var _0x426530=_0x171970(_0x3e35('0x68'));_0x426530[_0x3e35('0x32')](_0x3e35('0x70'))[_0x3e35('0x8')]?_0x426530['removeClass'](_0x3e35('0x71')):_0x426530['addClass'](_0x3e35('0x71'));};_0x3edf59[_0x3e35('0x72')]=function(_0x572e6f){var _0x260c58=_0x171970(_0x3e35('0x73'));_0x260c58['empty']();_0x260c58[_0x3e35('0x5d')](function(){var _0x260c58=_0x171970(this),_0x45fb60,_0x190b12,_0x458a27=_0x171970(''),_0x3cf0a7;for(_0x3cf0a7 in window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x64')])if(_0x3e35('0x10')===typeof window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x64')][_0x3cf0a7]){var _0x356826=window['_QuatroDigital_DropDown'][_0x3e35('0x6d')][_0x3e35('0x64')][_0x3cf0a7];var _0x522a03=_0x356826[_0x3e35('0x74')]['replace'](/^\/|\/$/g,'')[_0x3e35('0x7')]('/');var _0x6cd8ef=_0x171970(_0x3e35('0x75'));_0x6cd8ef[_0x3e35('0x76')]({'data-sku':_0x356826['id'],'data-sku-index':_0x3cf0a7,'data-qd-departament':_0x522a03[0x0],'data-qd-category':_0x522a03[_0x522a03[_0x3e35('0x8')]-0x1]});_0x6cd8ef[_0x3e35('0x77')](_0x3e35('0x78')+_0x356826[_0x3e35('0x79')]);_0x6cd8ef[_0x3e35('0x32')](_0x3e35('0x7a'))['append'](_0x2c5179[_0x3e35('0x7b')](_0x356826));_0x6cd8ef[_0x3e35('0x32')](_0x3e35('0x7c'))[_0x3e35('0x7d')](isNaN(_0x356826['sellingPrice'])?_0x356826['sellingPrice']:0x0==_0x356826[_0x3e35('0x7e')]?_0x3e35('0x7f'):(_0x171970(_0x3e35('0x80'))[_0x3e35('0x76')](_0x3e35('0x81'))||'R$')+'\x20'+qd_number_format(_0x356826['sellingPrice']/0x64,0x2,',','.'));_0x6cd8ef['find'](_0x3e35('0x82'))[_0x3e35('0x76')]({'data-sku':_0x356826['id'],'data-sku-index':_0x3cf0a7})[_0x3e35('0x42')](_0x356826[_0x3e35('0x83')]);_0x6cd8ef[_0x3e35('0x32')]('.qd-ddc-remove')[_0x3e35('0x76')]({'data-sku':_0x356826['id'],'data-sku-index':_0x3cf0a7});_0x3edf59[_0x3e35('0x84')](_0x356826['id'],_0x6cd8ef[_0x3e35('0x32')](_0x3e35('0x85')),_0x356826[_0x3e35('0x86')]);_0x6cd8ef[_0x3e35('0x32')](_0x3e35('0x87'))[_0x3e35('0x76')]({'data-sku':_0x356826['id'],'data-sku-index':_0x3cf0a7});_0x6cd8ef['appendTo'](_0x260c58);_0x458a27=_0x458a27['add'](_0x6cd8ef);}try{var _0x5ab566=_0x260c58[_0x3e35('0x0')](_0x3e35('0x68'))[_0x3e35('0x32')](_0x3e35('0x41'));_0x5ab566[_0x3e35('0x8')]&&''==_0x5ab566[_0x3e35('0x42')]()&&window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x88')]['address']&&_0x5ab566[_0x3e35('0x42')](window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x88')][_0x3e35('0x89')][_0x3e35('0x8a')]);}catch(_0x42cae9){_0x50af2d('Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20'+_0x42cae9[_0x3e35('0xf')],_0x3e35('0x8b'));}_0x3edf59[_0x3e35('0x8c')](_0x260c58);_0x3edf59['cartIsEmpty']();_0x572e6f&&_0x572e6f[_0x3e35('0x8d')]&&function(){_0x190b12=_0x458a27[_0x3e35('0x8e')](_0x3e35('0x8f')+_0x572e6f[_0x3e35('0x8d')]+'\x27]');_0x190b12[_0x3e35('0x8')]&&(_0x45fb60=0x0,_0x458a27[_0x3e35('0x5d')](function(){var _0x572e6f=_0x171970(this);if(_0x572e6f['is'](_0x190b12))return!0x1;_0x45fb60+=_0x572e6f[_0x3e35('0x90')]();}),_0x3edf59[_0x3e35('0x3f')](void 0x0,void 0x0,_0x45fb60,_0x260c58[_0x3e35('0x5f')](_0x260c58['parent']())),_0x458a27[_0x3e35('0x35')](_0x3e35('0x91')),function(_0x5e3be8){_0x5e3be8[_0x3e35('0x77')](_0x3e35('0x92'));_0x5e3be8[_0x3e35('0x77')]('qd-ddc-lastAddedFixed');setTimeout(function(){_0x5e3be8[_0x3e35('0x35')]('qd-ddc-lastAdded');},_0x2c5179[_0x3e35('0x67')]);}(_0x190b12),_0x171970(document[_0x3e35('0x36')])[_0x3e35('0x77')]('qd-ddc-product-add-time-v2'),setTimeout(function(){_0x171970(document[_0x3e35('0x36')])['removeClass']('qd-ddc-product-add-time-v2');},_0x2c5179[_0x3e35('0x67')]));}();});(function(){_QuatroDigital_DropDown['getOrderForm'][_0x3e35('0x64')]['length']?(_0x171970(_0x3e35('0x36'))['removeClass'](_0x3e35('0x93'))['addClass']('qd-ddc-cart-rendered\x20qd-ddc-product-add-time'),setTimeout(function(){_0x171970('body')[_0x3e35('0x35')](_0x3e35('0x94'));},_0x2c5179['timeRemoveNewItemClass'])):_0x171970(_0x3e35('0x36'))[_0x3e35('0x35')](_0x3e35('0x95'))['addClass'](_0x3e35('0x93'));}());_0x3e35('0xd')===typeof _0x2c5179[_0x3e35('0x96')]?_0x2c5179[_0x3e35('0x96')][_0x3e35('0x6c')](this):_0x50af2d('callbackProductsList\x20não\x20é\x20uma\x20função');};_0x3edf59['insertProdImg']=function(_0xd7cc2,_0x48a73b,_0x370599){function _0x4f5deb(){_0x48a73b[_0x3e35('0x35')](_0x3e35('0x97'))[_0x3e35('0x98')](function(){_0x171970(this)[_0x3e35('0x77')]('qd-loaded');})[_0x3e35('0x76')](_0x3e35('0x99'),_0x370599);}_0x370599?_0x4f5deb():isNaN(_0xd7cc2)?_0x50af2d(_0x3e35('0x9a'),_0x3e35('0x15')):alert(_0x3e35('0x9b'));};_0x3edf59['actionButtons']=function(_0x270385){var _0x260c58=function(_0x4f4f75,_0x5bc8e9){var _0x74ff3=_0x171970(_0x4f4f75);var _0xbfa07e=_0x74ff3[_0x3e35('0x76')](_0x3e35('0x9c'));var _0x190b12=_0x74ff3['attr'](_0x3e35('0x9d'));if(_0xbfa07e){var _0xfe6c38=parseInt(_0x74ff3[_0x3e35('0x42')]())||0x1;_0x3edf59[_0x3e35('0x9e')]([_0xbfa07e,_0x190b12],_0xfe6c38,_0xfe6c38+0x1,function(_0x1fee87){_0x74ff3['val'](_0x1fee87);_0x3e35('0xd')===typeof _0x5bc8e9&&_0x5bc8e9();});}};var _0x1f20a0=function(_0x3eadcb,_0x26a9ed){var _0x37f647=_0x171970(_0x3eadcb);var _0x190b12=_0x37f647[_0x3e35('0x76')]('data-sku');var _0x30fbe9=_0x37f647[_0x3e35('0x76')]('data-sku-index');if(_0x190b12){var _0x4b07b9=parseInt(_0x37f647[_0x3e35('0x42')]())||0x2;_0x3edf59[_0x3e35('0x9e')]([_0x190b12,_0x30fbe9],_0x4b07b9,_0x4b07b9-0x1,function(_0xf6c5a1){_0x37f647['val'](_0xf6c5a1);_0x3e35('0xd')===typeof _0x26a9ed&&_0x26a9ed();});}};var _0x25f7d7=function(_0x92b832,_0x34575c){var _0x260c58=_0x171970(_0x92b832);var _0x190b12=_0x260c58['attr'](_0x3e35('0x9c'));var _0x47c79f=_0x260c58[_0x3e35('0x76')](_0x3e35('0x9d'));if(_0x190b12){var _0x757ea3=parseInt(_0x260c58[_0x3e35('0x42')]())||0x1;_0x3edf59[_0x3e35('0x9e')]([_0x190b12,_0x47c79f],0x1,_0x757ea3,function(_0x3f00d3){_0x260c58[_0x3e35('0x42')](_0x3f00d3);'function'===typeof _0x34575c&&_0x34575c();});}};var _0x190b12=_0x270385['find'](_0x3e35('0x9f'));_0x190b12[_0x3e35('0x77')]('qd_on')[_0x3e35('0x5d')](function(){var _0x270385=_0x171970(this);_0x270385[_0x3e35('0x32')](_0x3e35('0xa0'))['on'](_0x3e35('0xa1'),function(_0x4caddd){_0x4caddd['preventDefault']();_0x190b12['addClass']('qd-loading');_0x260c58(_0x270385['find'](_0x3e35('0x82')),function(){_0x190b12[_0x3e35('0x35')](_0x3e35('0xa2'));});});_0x270385['find']('.qd-ddc-quantityMinus')['on'](_0x3e35('0xa3'),function(_0x334d15){_0x334d15[_0x3e35('0xa4')]();_0x190b12['addClass'](_0x3e35('0xa2'));_0x1f20a0(_0x270385[_0x3e35('0x32')](_0x3e35('0x82')),function(){_0x190b12[_0x3e35('0x35')](_0x3e35('0xa2'));});});_0x270385[_0x3e35('0x32')](_0x3e35('0x82'))['on'](_0x3e35('0xa5'),function(){_0x190b12[_0x3e35('0x77')]('qd-loading');_0x25f7d7(this,function(){_0x190b12['removeClass'](_0x3e35('0xa2'));});});_0x270385[_0x3e35('0x32')](_0x3e35('0x82'))['on'](_0x3e35('0xa6'),function(_0x10b31e){0xd==_0x10b31e[_0x3e35('0x39')]&&(_0x190b12[_0x3e35('0x77')](_0x3e35('0xa2')),_0x25f7d7(this,function(){_0x190b12['removeClass'](_0x3e35('0xa2'));}));});});_0x270385[_0x3e35('0x32')](_0x3e35('0x70'))[_0x3e35('0x5d')](function(){var _0x270385=_0x171970(this);_0x270385[_0x3e35('0x32')](_0x3e35('0xa7'))['on'](_0x3e35('0xa8'),function(){_0x270385['addClass'](_0x3e35('0xa2'));_0x3edf59[_0x3e35('0xa9')](_0x171970(this),function(_0x2d6522){_0x2d6522?_0x270385['stop'](!0x0)[_0x3e35('0xaa')](function(){_0x270385[_0x3e35('0xab')]();_0x3edf59[_0x3e35('0xac')]();}):_0x270385[_0x3e35('0x35')]('qd-loading');});return!0x1;});});};_0x3edf59[_0x3e35('0x43')]=function(_0x1ec0fc){var _0x6ec2be=_0x1ec0fc['val']();_0x6ec2be=_0x6ec2be[_0x3e35('0x2')](/[^0-9\-]/g,'');_0x6ec2be=_0x6ec2be[_0x3e35('0x2')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,_0x3e35('0xad'));_0x6ec2be=_0x6ec2be[_0x3e35('0x2')](/(.{9}).*/g,'$1');_0x1ec0fc[_0x3e35('0x42')](_0x6ec2be);0x9<=_0x6ec2be[_0x3e35('0x8')]&&(_0x1ec0fc[_0x3e35('0xae')](_0x3e35('0xaf'))!=_0x6ec2be&&_0x5ab566[_0x3e35('0xb0')]({'postalCode':_0x6ec2be,'country':_0x3e35('0xb1')})['done'](function(_0xc2457){window[_0x3e35('0x18')][_0x3e35('0x6d')]=_0xc2457;_0x3edf59[_0x3e35('0x46')]();})[_0x3e35('0xb2')](function(_0x4f0a0b){_0x50af2d([_0x3e35('0xb3'),_0x4f0a0b]);updateCartData();}),_0x1ec0fc[_0x3e35('0xae')]('qdDdcLastPostalCode',_0x6ec2be));};_0x3edf59[_0x3e35('0x9e')]=function(_0x158dbb,_0x3e476e,_0x42f40d,_0x26041e){function _0x395fda(_0x358f27){_0x358f27=_0x3e35('0xb4')!==typeof _0x358f27?!0x1:_0x358f27;_0x3edf59[_0x3e35('0x46')]();window['_QuatroDigital_DropDown'][_0x3e35('0x19')]=!0x1;_0x3edf59['cartIsEmpty']();'undefined'!==typeof window[_0x3e35('0x6a')]&&_0x3e35('0xd')===typeof window['_QuatroDigital_AmountProduct']['exec']&&window[_0x3e35('0x6a')][_0x3e35('0x6b')][_0x3e35('0x6c')](this);_0x3e35('0xd')===typeof adminCart&&adminCart();_0x171970['fn'][_0x3e35('0xb5')](!0x0,void 0x0,_0x358f27);_0x3e35('0xd')===typeof _0x26041e&&_0x26041e(_0x3e476e);}_0x42f40d=_0x42f40d||0x1;if(0x1>_0x42f40d)return _0x3e476e;if(_0x2c5179[_0x3e35('0x28')]){if(_0x3e35('0x3')===typeof window['_QuatroDigital_DropDown']['getOrderForm'][_0x3e35('0x64')][_0x158dbb[0x1]])return _0x50af2d(_0x3e35('0xb6')+_0x158dbb[0x1]+']'),_0x3e476e;window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x64')][_0x158dbb[0x1]][_0x3e35('0x83')]=_0x42f40d;window['_QuatroDigital_DropDown'][_0x3e35('0x6d')][_0x3e35('0x64')][_0x158dbb[0x1]][_0x3e35('0xb7')]=_0x158dbb[0x1];_0x5ab566[_0x3e35('0xb8')]([window['_QuatroDigital_DropDown'][_0x3e35('0x6d')][_0x3e35('0x64')][_0x158dbb[0x1]]],['items',_0x3e35('0x6e'),'shippingData'])[_0x3e35('0xb9')](function(_0x4fceab){window['_QuatroDigital_DropDown']['getOrderForm']=_0x4fceab;_0x395fda(!0x0);})[_0x3e35('0xb2')](function(_0x2af8d1){_0x50af2d([_0x3e35('0xba'),_0x2af8d1]);_0x395fda();});}else _0x50af2d('atenção\x20esta\x20método\x20esta\x20descontinuado');};_0x3edf59[_0x3e35('0xa9')]=function(_0x315728,_0x24ba9f){function _0x1a5fc8(_0xc0a0e9){_0xc0a0e9=_0x3e35('0xb4')!==typeof _0xc0a0e9?!0x1:_0xc0a0e9;_0x3e35('0x3')!==typeof window[_0x3e35('0x6a')]&&'function'===typeof window[_0x3e35('0x6a')][_0x3e35('0x6b')]&&window['_QuatroDigital_AmountProduct'][_0x3e35('0x6b')][_0x3e35('0x6c')](this);_0x3e35('0xd')===typeof adminCart&&adminCart();_0x171970['fn']['simpleCart'](!0x0,void 0x0,_0xc0a0e9);_0x3e35('0xd')===typeof _0x24ba9f&&_0x24ba9f(_0x190b12);}var _0x190b12=!0x1,_0x51bf3f=_0x171970(_0x315728)[_0x3e35('0x76')](_0x3e35('0x9d'));if(_0x2c5179[_0x3e35('0x28')]){if(_0x3e35('0x3')===typeof window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x64')][_0x51bf3f])return _0x50af2d(_0x3e35('0xb6')+_0x51bf3f+']'),_0x190b12;window[_0x3e35('0x18')]['getOrderForm']['items'][_0x51bf3f][_0x3e35('0xb7')]=_0x51bf3f;_0x5ab566[_0x3e35('0xbb')]([window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x64')][_0x51bf3f]],[_0x3e35('0x64'),_0x3e35('0x6e'),_0x3e35('0x88')])[_0x3e35('0xb9')](function(_0x3d9c8c){_0x190b12=!0x0;window[_0x3e35('0x18')][_0x3e35('0x6d')]=_0x3d9c8c;_0xc90040(_0x3d9c8c);_0x1a5fc8(!0x0);})[_0x3e35('0xb2')](function(_0x3dc86e){_0x50af2d([_0x3e35('0xbc'),_0x3dc86e]);_0x1a5fc8();});}else alert(_0x3e35('0xbd'));};_0x3edf59[_0x3e35('0x3f')]=function(_0x173ef5,_0x901a2c,_0x25158e,_0x23718c){_0x23718c=_0x23718c||_0x171970('.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2');_0x173ef5=_0x173ef5||'+';_0x901a2c=_0x901a2c||0.9*_0x23718c[_0x3e35('0xbe')]();_0x23718c[_0x3e35('0xbf')](!0x0,!0x0)['animate']({'scrollTop':isNaN(_0x25158e)?_0x173ef5+'='+_0x901a2c+'px':_0x25158e});};_0x2c5179['updateOnlyHover']||(_0x3edf59[_0x3e35('0x46')](),_0x171970['fn'][_0x3e35('0xb5')](!0x0));_0x171970(window)['on'](_0x3e35('0xc0'),function(){try{window[_0x3e35('0x18')][_0x3e35('0x6d')]=void 0x0,_0x3edf59[_0x3e35('0x46')]();}catch(_0xee5f6c){_0x50af2d(_0x3e35('0xc1')+_0xee5f6c[_0x3e35('0xf')],_0x3e35('0xc2'));}});'function'===typeof _0x2c5179['callback']?_0x2c5179[_0x3e35('0xb')]['call'](this):_0x50af2d(_0x3e35('0xc3'));};_0x171970['fn'][_0x3e35('0x1a')]=function(_0x482320){var _0x3b90c4=_0x171970(this);_0x3b90c4['fn']=new _0x171970[(_0x3e35('0x1a'))](this,_0x482320);return _0x3b90c4;};}catch(_0x58a1d8){_0x3e35('0x3')!==typeof console&&_0x3e35('0xd')===typeof console[_0x3e35('0xe')]&&console[_0x3e35('0xe')](_0x3e35('0xc4'),_0x58a1d8);}}(this));(function(_0x9ff40f){try{var _0xff0a86=jQuery;window['_QuatroDigital_AmountProduct']=window[_0x3e35('0x6a')]||{};window['_QuatroDigital_AmountProduct'][_0x3e35('0x64')]={};window['_QuatroDigital_AmountProduct'][_0x3e35('0xc5')]=!0x1;window[_0x3e35('0x6a')][_0x3e35('0xc6')]=!0x1;window[_0x3e35('0x6a')][_0x3e35('0xc7')]=!0x1;var _0x2b668f=function(){if(window['_QuatroDigital_AmountProduct'][_0x3e35('0xc5')]){var _0x530736=!0x1;var _0x38f8cb={};window[_0x3e35('0x6a')][_0x3e35('0x64')]={};for(_0x309865 in window['_QuatroDigital_DropDown'][_0x3e35('0x6d')][_0x3e35('0x64')])if(_0x3e35('0x10')===typeof window[_0x3e35('0x18')][_0x3e35('0x6d')]['items'][_0x309865]){var _0x3004e1=window[_0x3e35('0x18')][_0x3e35('0x6d')][_0x3e35('0x64')][_0x309865];_0x3e35('0x3')!==typeof _0x3004e1[_0x3e35('0xc8')]&&null!==_0x3004e1[_0x3e35('0xc8')]&&''!==_0x3004e1['productId']&&(window['_QuatroDigital_AmountProduct']['items'][_0x3e35('0xc9')+_0x3004e1[_0x3e35('0xc8')]]=window[_0x3e35('0x6a')][_0x3e35('0x64')][_0x3e35('0xc9')+_0x3004e1[_0x3e35('0xc8')]]||{},window[_0x3e35('0x6a')][_0x3e35('0x64')]['prod_'+_0x3004e1[_0x3e35('0xc8')]][_0x3e35('0xca')]=_0x3004e1['productId'],_0x38f8cb[_0x3e35('0xc9')+_0x3004e1[_0x3e35('0xc8')]]||(window[_0x3e35('0x6a')][_0x3e35('0x64')]['prod_'+_0x3004e1[_0x3e35('0xc8')]]['qtt']=0x0),window[_0x3e35('0x6a')][_0x3e35('0x64')]['prod_'+_0x3004e1[_0x3e35('0xc8')]][_0x3e35('0xcb')]+=_0x3004e1[_0x3e35('0x83')],_0x530736=!0x0,_0x38f8cb['prod_'+_0x3004e1[_0x3e35('0xc8')]]=!0x0);}var _0x309865=_0x530736;}else _0x309865=void 0x0;window[_0x3e35('0x6a')][_0x3e35('0xc5')]&&(_0xff0a86(_0x3e35('0xcc'))[_0x3e35('0xab')](),_0xff0a86('.qd-bap-item-added')[_0x3e35('0x35')](_0x3e35('0xcd')));for(var _0x4894ad in window[_0x3e35('0x6a')][_0x3e35('0x64')]){_0x3004e1=window[_0x3e35('0x6a')]['items'][_0x4894ad];if(_0x3e35('0x10')!==typeof _0x3004e1)return;_0x38f8cb=_0xff0a86(_0x3e35('0xce')+_0x3004e1[_0x3e35('0xca')]+']')[_0x3e35('0x0')]('li');if(window[_0x3e35('0x6a')][_0x3e35('0xc5')]||!_0x38f8cb[_0x3e35('0x32')](_0x3e35('0xcc'))[_0x3e35('0x8')])_0x530736=_0xff0a86(_0x3e35('0xcf')),_0x530736[_0x3e35('0x32')](_0x3e35('0xd0'))[_0x3e35('0x52')](_0x3004e1[_0x3e35('0xcb')]),_0x3004e1=_0x38f8cb[_0x3e35('0x32')](_0x3e35('0xd1')),_0x3004e1[_0x3e35('0x8')]?_0x3004e1[_0x3e35('0xd2')](_0x530736)[_0x3e35('0x77')]('qd-bap-item-added'):_0x38f8cb[_0x3e35('0xd2')](_0x530736);}_0x309865&&(window[_0x3e35('0x6a')]['allowRecalculate']=!0x1);};window[_0x3e35('0x6a')][_0x3e35('0x6b')]=function(){window['_QuatroDigital_AmountProduct'][_0x3e35('0xc5')]=!0x0;_0x2b668f[_0x3e35('0x6c')](this);};_0xff0a86(document)[_0x3e35('0xd3')](function(){_0x2b668f[_0x3e35('0x6c')](this);});}catch(_0x5c93d9){'undefined'!==typeof console&&'function'===typeof console[_0x3e35('0xe')]&&console[_0x3e35('0xe')](_0x3e35('0xc4'),_0x5c93d9);}}(this));(function(){try{var _0x4a8263=jQuery,_0x488c02,_0x22fd1c={'selector':_0x3e35('0xd4'),'dropDown':{},'buyButton':{}};_0x4a8263[_0x3e35('0xd5')]=function(_0x228259){var _0x2c30a9={};_0x488c02=_0x4a8263[_0x3e35('0xd6')](!0x0,{},_0x22fd1c,_0x228259);_0x228259=_0x4a8263(_0x488c02[_0x3e35('0xd7')])[_0x3e35('0x1a')](_0x488c02['dropDown']);_0x2c30a9[_0x3e35('0xd8')]=_0x3e35('0x3')!==typeof _0x488c02[_0x3e35('0xd9')]['updateOnlyHover']&&!0x1===_0x488c02['dropDown'][_0x3e35('0x44')]?_0x4a8263(_0x488c02[_0x3e35('0xd7')])[_0x3e35('0xda')](_0x228259['fn'],_0x488c02[_0x3e35('0xd8')]):_0x4a8263(_0x488c02[_0x3e35('0xd7')])[_0x3e35('0xda')](_0x488c02[_0x3e35('0xd8')]);_0x2c30a9[_0x3e35('0xd9')]=_0x228259;return _0x2c30a9;};_0x4a8263['fn'][_0x3e35('0xdb')]=function(){'object'===typeof console&&'function'===typeof console[_0x3e35('0x11')]&&console[_0x3e35('0x11')](_0x3e35('0xdc'));};_0x4a8263[_0x3e35('0xdb')]=_0x4a8263['fn'][_0x3e35('0xdb')];}catch(_0x127068){_0x3e35('0x3')!==typeof console&&'function'===typeof console[_0x3e35('0xe')]&&console[_0x3e35('0xe')](_0x3e35('0xc4'),_0x127068);}}());
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
var _0xf4f4=['ite','---','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','.qd-am-banner','filter','length','qd-am-banner-wrapper','parent','qd-am-collection-wrapper','qdAjax','find','img[alt=\x27','attr','data-qdam-value','.box-banner','insertBefore','hide','qd-am-content-loaded','text','trim','[class*=\x27colunas\x27]','clone','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','ajaxCallback','call','trigger','QuatroDigital.am.ajaxCallback','ul[itemscope]','li\x20>ul','children','qd-am-elem-','qd-amazing-menu','>ul','>li','qd-am-column','qd-am-dropdown-menu','qd-am-dropdown','qd-am-level-','qd-am-','-li','callback','QuatroDigital.am.callback','extend','exec','.qd_amazing_menu_auto','getParent','closest','QD_amazingMenu','/qd-amazing-menu','object','undefined','info','warn','unshift','[QD\x20Amazing\x20Menu]\x0a','alerta','toLowerCase','aviso','join','apply','qdAmAddNdx','each','addClass','first','qd-am-first','last','qd-am-last','sevpnanegrfnangb%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','charCodeAt','toUpperCase'];(function(_0x4b8f17,_0x5c6770){var _0x4674ec=function(_0x5bcebe){while(--_0x5bcebe){_0x4b8f17['push'](_0x4b8f17['shift']());}};_0x4674ec(++_0x5c6770);}(_0xf4f4,0xbe));var _0x4f4f=function(_0x33fb2d,_0x4a2659){_0x33fb2d=_0x33fb2d-0x0;var _0x2e5d70=_0xf4f4[_0x33fb2d];return _0x2e5d70;};(function(_0x434df8){_0x434df8['fn'][_0x4f4f('0x0')]=_0x434df8['fn'][_0x4f4f('0x1')];}(jQuery));(function(_0x228fcf){var _0x510b24;var _0x5a752b=jQuery;if('function'!==typeof _0x5a752b['fn'][_0x4f4f('0x2')]){var _0x132d5c={'url':_0x4f4f('0x3'),'callback':function(){},'ajaxCallback':function(){}};var _0x1ff75a=function(_0x3c4877,_0x249f8a){if(_0x4f4f('0x4')===typeof console&&_0x4f4f('0x5')!==typeof console['error']&&_0x4f4f('0x5')!==typeof console[_0x4f4f('0x6')]&&_0x4f4f('0x5')!==typeof console[_0x4f4f('0x7')]){var _0x116f22;_0x4f4f('0x4')===typeof _0x3c4877?(_0x3c4877[_0x4f4f('0x8')](_0x4f4f('0x9')),_0x116f22=_0x3c4877):_0x116f22=['[QD\x20Amazing\x20Menu]\x0a'+_0x3c4877];if('undefined'===typeof _0x249f8a||_0x4f4f('0xa')!==_0x249f8a[_0x4f4f('0xb')]()&&_0x4f4f('0xc')!==_0x249f8a[_0x4f4f('0xb')]())if(_0x4f4f('0x5')!==typeof _0x249f8a&&_0x4f4f('0x6')===_0x249f8a['toLowerCase']())try{console[_0x4f4f('0x6')]['apply'](console,_0x116f22);}catch(_0x216ba8){try{console[_0x4f4f('0x6')](_0x116f22[_0x4f4f('0xd')]('\x0a'));}catch(_0x38535d){}}else try{console['error'][_0x4f4f('0xe')](console,_0x116f22);}catch(_0x4c68f4){try{console['error'](_0x116f22['join']('\x0a'));}catch(_0x422894){}}else try{console[_0x4f4f('0x7')][_0x4f4f('0xe')](console,_0x116f22);}catch(_0x1af189){try{console[_0x4f4f('0x7')](_0x116f22[_0x4f4f('0xd')]('\x0a'));}catch(_0x1245c4){}}}};_0x5a752b['fn'][_0x4f4f('0xf')]=function(){var _0x929a0b=_0x5a752b(this);_0x929a0b[_0x4f4f('0x10')](function(_0x32b549){_0x5a752b(this)[_0x4f4f('0x11')]('qd-am-li-'+_0x32b549);});_0x929a0b[_0x4f4f('0x12')]()[_0x4f4f('0x11')](_0x4f4f('0x13'));_0x929a0b[_0x4f4f('0x14')]()[_0x4f4f('0x11')](_0x4f4f('0x15'));return _0x929a0b;};_0x5a752b['fn'][_0x4f4f('0x2')]=function(){};_0x228fcf=function(_0x3e33d5){var _0x28f8ef={'n':_0x4f4f('0x16')};return function(_0x469a1d){var _0x17832f=function(_0x17984d){return _0x17984d;};var _0xc78135=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x469a1d=_0x469a1d['d'+_0xc78135[0x10]+'c'+_0xc78135[0x11]+'m'+_0x17832f(_0xc78135[0x1])+'n'+_0xc78135[0xd]]['l'+_0xc78135[0x12]+'c'+_0xc78135[0x0]+'ti'+_0x17832f('o')+'n'];var _0x5bda88=function(_0x4f7261){return escape(encodeURIComponent(_0x4f7261['replace'](/\./g,'¨')[_0x4f4f('0x17')](/[a-zA-Z]/g,function(_0x43e661){return String['fromCharCode'](('Z'>=_0x43e661?0x5a:0x7a)>=(_0x43e661=_0x43e661[_0x4f4f('0x18')](0x0)+0xd)?_0x43e661:_0x43e661-0x1a);})));};var _0x15859c=_0x5bda88(_0x469a1d[[_0xc78135[0x9],_0x17832f('o'),_0xc78135[0xc],_0xc78135[_0x17832f(0xd)]][_0x4f4f('0xd')]('')]);_0x5bda88=_0x5bda88((window[['js',_0x17832f('no'),'m',_0xc78135[0x1],_0xc78135[0x4][_0x4f4f('0x19')](),_0x4f4f('0x1a')][_0x4f4f('0xd')]('')]||_0x4f4f('0x1b'))+['.v',_0xc78135[0xd],'e',_0x17832f('x'),'co',_0x17832f('mm'),'erc',_0xc78135[0x1],'.c',_0x17832f('o'),'m.',_0xc78135[0x13],'r'][_0x4f4f('0xd')](''));for(var _0x237cf9 in _0x28f8ef){if(_0x5bda88===_0x237cf9+_0x28f8ef[_0x237cf9]||_0x15859c===_0x237cf9+_0x28f8ef[_0x237cf9]){var _0x18e718='tr'+_0xc78135[0x11]+'e';break;}_0x18e718='f'+_0xc78135[0x0]+'ls'+_0x17832f(_0xc78135[0x1])+'';}_0x17832f=!0x1;-0x1<_0x469a1d[[_0xc78135[0xc],'e',_0xc78135[0x0],'rc',_0xc78135[0x9]][_0x4f4f('0xd')]('')][_0x4f4f('0x1c')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x17832f=!0x0);return[_0x18e718,_0x17832f];}(_0x3e33d5);}(window);if(!eval(_0x228fcf[0x0]))return _0x228fcf[0x1]?_0x1ff75a(_0x4f4f('0x1d')):!0x1;var _0xaf3de1=function(_0x7180f8){var _0x5deda9=_0x7180f8['find']('.qd_am_code');var _0x73b8bb=_0x5deda9['filter'](_0x4f4f('0x1e'));var _0x39c1a8=_0x5deda9[_0x4f4f('0x1f')]('.qd-am-collection');if(_0x73b8bb[_0x4f4f('0x20')]||_0x39c1a8[_0x4f4f('0x20')])_0x73b8bb['parent']()[_0x4f4f('0x11')](_0x4f4f('0x21')),_0x39c1a8[_0x4f4f('0x22')]()['addClass'](_0x4f4f('0x23')),_0x5a752b[_0x4f4f('0x24')]({'url':_0x510b24['url'],'dataType':'html','success':function(_0x465a36){var _0x305bf7=_0x5a752b(_0x465a36);_0x73b8bb[_0x4f4f('0x10')](function(){var _0x465a36=_0x5a752b(this);var _0x418acb=_0x305bf7[_0x4f4f('0x25')](_0x4f4f('0x26')+_0x465a36[_0x4f4f('0x27')](_0x4f4f('0x28'))+'\x27]');_0x418acb[_0x4f4f('0x20')]&&(_0x418acb['each'](function(){_0x5a752b(this)['getParent'](_0x4f4f('0x29'))['clone']()[_0x4f4f('0x2a')](_0x465a36);}),_0x465a36[_0x4f4f('0x2b')]());})[_0x4f4f('0x11')](_0x4f4f('0x2c'));_0x39c1a8[_0x4f4f('0x10')](function(){var _0x465a36={};var _0x76c93=_0x5a752b(this);_0x305bf7[_0x4f4f('0x25')]('h2')[_0x4f4f('0x10')](function(){if(_0x5a752b(this)[_0x4f4f('0x2d')]()[_0x4f4f('0x2e')]()[_0x4f4f('0xb')]()==_0x76c93['attr'](_0x4f4f('0x28'))[_0x4f4f('0x2e')]()[_0x4f4f('0xb')]())return _0x465a36=_0x5a752b(this),!0x1;});_0x465a36[_0x4f4f('0x20')]&&(_0x465a36[_0x4f4f('0x10')](function(){_0x5a752b(this)[_0x4f4f('0x0')](_0x4f4f('0x2f'))[_0x4f4f('0x30')]()[_0x4f4f('0x2a')](_0x76c93);}),_0x76c93['hide']());})[_0x4f4f('0x11')](_0x4f4f('0x2c'));},'error':function(){_0x1ff75a(_0x4f4f('0x31')+_0x510b24['url']+'\x27\x20falho.');},'complete':function(){_0x510b24[_0x4f4f('0x32')][_0x4f4f('0x33')](this);_0x5a752b(window)[_0x4f4f('0x34')](_0x4f4f('0x35'),_0x7180f8);},'clearQueueDelay':0xbb8});};_0x5a752b[_0x4f4f('0x2')]=function(_0xd7bbf4){var _0x1c012d=_0xd7bbf4[_0x4f4f('0x25')](_0x4f4f('0x36'))[_0x4f4f('0x10')](function(){var _0x14afb1=_0x5a752b(this);if(!_0x14afb1[_0x4f4f('0x20')])return _0x1ff75a(['UL\x20do\x20menu\x20não\x20encontrada',_0xd7bbf4],_0x4f4f('0xa'));_0x14afb1[_0x4f4f('0x25')](_0x4f4f('0x37'))[_0x4f4f('0x22')]()[_0x4f4f('0x11')]('qd-am-has-ul');_0x14afb1['find']('li')[_0x4f4f('0x10')](function(){var _0xa070ad=_0x5a752b(this);var _0x2064e9=_0xa070ad[_0x4f4f('0x38')](':not(ul)');_0x2064e9[_0x4f4f('0x20')]&&_0xa070ad['addClass'](_0x4f4f('0x39')+_0x2064e9['first']()['text']()[_0x4f4f('0x2e')]()['replaceSpecialChars']()[_0x4f4f('0x17')](/\./g,'')[_0x4f4f('0x17')](/\s/g,'-')['toLowerCase']());});var _0x220df1=_0x14afb1[_0x4f4f('0x25')]('>li')[_0x4f4f('0xf')]();_0x14afb1[_0x4f4f('0x11')](_0x4f4f('0x3a'));_0x220df1=_0x220df1[_0x4f4f('0x25')](_0x4f4f('0x3b'));_0x220df1[_0x4f4f('0x10')](function(){var _0xb0d1b2=_0x5a752b(this);_0xb0d1b2[_0x4f4f('0x25')](_0x4f4f('0x3c'))[_0x4f4f('0xf')]()[_0x4f4f('0x11')](_0x4f4f('0x3d'));_0xb0d1b2[_0x4f4f('0x11')](_0x4f4f('0x3e'));_0xb0d1b2[_0x4f4f('0x22')]()['addClass'](_0x4f4f('0x3f'));});_0x220df1['addClass']('qd-am-dropdown');var _0x31349a=0x0,_0x228fcf=function(_0x5cf4da){_0x31349a+=0x1;_0x5cf4da=_0x5cf4da[_0x4f4f('0x38')]('li')[_0x4f4f('0x38')]('*');_0x5cf4da[_0x4f4f('0x20')]&&(_0x5cf4da[_0x4f4f('0x11')](_0x4f4f('0x40')+_0x31349a),_0x228fcf(_0x5cf4da));};_0x228fcf(_0x14afb1);_0x14afb1['add'](_0x14afb1[_0x4f4f('0x25')]('ul'))[_0x4f4f('0x10')](function(){var _0x30674f=_0x5a752b(this);_0x30674f[_0x4f4f('0x11')](_0x4f4f('0x41')+_0x30674f[_0x4f4f('0x38')]('li')[_0x4f4f('0x20')]+_0x4f4f('0x42'));});});_0xaf3de1(_0x1c012d);_0x510b24[_0x4f4f('0x43')]['call'](this);_0x5a752b(window)[_0x4f4f('0x34')](_0x4f4f('0x44'),_0xd7bbf4);};_0x5a752b['fn']['QD_amazingMenu']=function(_0x5ac4df){var _0x5941ac=_0x5a752b(this);if(!_0x5941ac[_0x4f4f('0x20')])return _0x5941ac;_0x510b24=_0x5a752b[_0x4f4f('0x45')]({},_0x132d5c,_0x5ac4df);_0x5941ac[_0x4f4f('0x46')]=new _0x5a752b['QD_amazingMenu'](_0x5a752b(this));return _0x5941ac;};_0x5a752b(function(){_0x5a752b(_0x4f4f('0x47'))['QD_amazingMenu']();});}}(this));
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
/* Quatro Digital - Smart Quantity // 1.12 // Carlos Vinicius // Todos os direitos reservados */
(function(v){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var g=function(d,a){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var f;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),f=d):f=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof a||"alerta"!==a.toLowerCase()&&"aviso"!==a.toLowerCase())if("undefined"!==typeof a&&"info"===a.toLowerCase())try{console.info.apply(console,
f)}catch(k){console.info(f.join("\n"))}else try{console.error.apply(console,f)}catch(k){console.error(f.join("\n"))}else try{console.warn.apply(console,f)}catch(k){console.warn(f.join("\n"))}}},m={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1,minimumValue:1,setQuantityByUrl:!0},n=function(h,a){function f(c,e,b){a.setQuantityByUrl?c.val(((location.search||"").match(q)||[a.initialValue]).pop()):c.val(a.initialValue);c.change(function(c,
b){try{if("qd_ssl_trigger"!=b){var e=d(this),f=parseInt(e.val().replace(n,""));!isNaN(f)&&f>a.minimumValue?e.val(f):e.val(a.minimumValue);e.trigger("QuatroDigital.sq_change",this)}}catch(t){g(t.message)}});c.focusin(function(){d(this).trigger("QuatroDigital.sq_focusin",this)});e.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue)+1).change()});b.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue+1)-1).change()});c.change()}function k(c,e,b){c.on("QuatroDigital.sq_change",
function(){(d(this).val()||0)<=a.minimumValue?(b.addClass("qd-sq-inactive"),e.removeClass("qd-sq-inactive")):(e.addClass("qd-sq-inactive"),b.removeClass("qd-sq-inactive"))})}function m(c,e){c.on("QuatroDigital.sq_change",function(){try{if(!(e[0].hostname||"").length)return g("A quantidade n\u00e3o foi inserida no bt comprar pois o mesmo n\u00e3o possui uma URL","info");var b=e[0].search||"";-1<b.toLowerCase().indexOf("qty=")?e[0].search=b.replace(p,"qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?
a.minimumValue:1))+"&"):e[0].search="qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"+(e[0].search||"").replace(p,"");e.not(":first").each(function(){this.href=e[0].href});var d=((e.first().attr("href")||"").match(u)||[""]).pop()+"";c.attr("data-sku-id",d);if(d.length&&"object"===typeof skuJson&&!c.attr("data-sku-price"))for(b=0;b<skuJson.skus.length;b++)skuJson.skus[b].sku==d&&c.attr("data-sku-price",skuJson.skus[b].bestPrice)}catch(l){g(l.message)}})}var n=/[^0-9-]/gi,
q=/qty\=([0-9]+)/i,u=/sku\=([0-9]+)/i,p=/qty\=[0-9]+\&?/ig;h.each(function(){try{var c=d(this),e=c.find(a.buyButton),b=c.find(a.qttInput),h=c.find(a.btnMore),l=c.find(a.btnMinus);if(!e.length&&null!==a.buyButton||!b.length)return g("O plugin parou por aqui! N\u00e3o foram encontrados o bot\u00e3o comprar e o campo de quantidade","alerta");if(b.is(".qd-sq-on"))return g(["Execu\u00e7\u00e3o ignorada pois este input j\u00e1 possui o plugin aplicado. Input: ",b],"info");b.addClass("qd-sq-on");k(b,h,l);
null!==a.buyButton&&m(b,e);f(b,h,l);d(window).on("vtex.sku.selected",function(){b.change()})}catch(r){g(r.message)}})};d.fn.QD_smartQuantity=function(g){var a=d(this);a.qdPlugin=new n(a,d.extend({},m,g));d(window).trigger("QuatroDigital.sq_callback");return a};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);    
// not qd-include ../qd-product-thumbs/QD_productThumbs.min.js

/* Automatizador de comments box do Facebook // 1.2 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a;a=$(".fb-comments");if(a.length)if($("#fb-root").length||$("body").append('<div id="fb-root"></div>'),a.attr("data-href",document.location.href.split("#").shift().split("?").shift()),$("script[src*='connect.facebook.net']").filter("[src*='all.js']").length)"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse();else{var b=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(a=document.createElement("script"),a.id="facebook-jssdk",a.src="//connect.facebook.net/pt_BR/all.js#xfbml=1&appId="+($("meta[property='fb:app_id']").attr("content")||""),b.parentNode.insertBefore(a,b))}});
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(){"function"!==typeof $.cookie&&function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)}(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?
g(b):b}var l=/\+/g,e=c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864E5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=
h[m].split("="),k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}})})();
/* Quatro Digital Cookie Functions // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(){var a,h,g;a=jQuery;g={cookieName:"Nome_Padrao",closeLimit:2,expireDays:365,completeExpireDays:365,path:"/",close:"[class*=close]",show:function(a){a.slideDown()},hide:function(a){a.slideUp()},callback:function(){},exceededLimitCallback:function(){},closeCallback:function(){}};var k=function(a,c){if("object"===typeof console){var e;"object"===typeof a?(a.unshift("[Cookie Functions]\n"),e=a):e=["[Cookie Functions]\n"+a];"undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase()?
"undefined"!==typeof c&&"info"===c.toLowerCase()?console.info.apply(console,e):console.error.apply(console,e):console.warn.apply(console,e)}};a.QD_cookieFn=function(f){if("function"!==typeof a.cookie)return k("Aeeeee irm\u00e3\u00e3\u00e3ooooo!\nEsta faltando o plugin $.cookie mew. Chama ele na p\u00e1gina, vlw!");var c=function(d,b){var c=a.cookie("qdCookieFn_"+b.cookieName);if("undefined"!==typeof c&&c>=b.closeLimit||a.cookie("qdCookieFn_"+b.cookieName+"_complete"))return b.exceededLimitCallback();
b.show(d);d.trigger("QuatroDigital.cf_show");a(window).on("qdNewsSuccessCallback",function(a,c){d.trigger("QuatroDigital.qdcf_applyComplete");b.show(d);d.trigger("QuatroDigital.cf_hide")});b.callback();d.trigger("QuatroDigital.cf_callback")},e=function(a,b){a.find(b.close).not(".qd-cookie-on").addClass("qd-cookie-on").bind("click",function(){a.trigger("QuatroDigital.cf_close");a.slideUp(function(){b.closeCallback()})})},g=function(c,b){c.bind("QuatroDigital.cf_close",function(){"undefined"===typeof a.cookie("qdCookieFn_"+
b.cookieName)?a.cookie("qdCookieFn_"+b.cookieName,1,{expires:b.expireDays,path:b.path}):a.cookie("qdCookieFn_"+b.cookieName,(parseInt(a.cookie("qdCookieFn_"+b.cookieName),10)||0)+1,{expires:b.expireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyComplete",function(){a.cookie("qdCookieFn_"+b.cookieName+"_complete",1,{expires:b.completeExpireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyLimit",function(){a.cookie("qdCookieFn_"+b.cookieName,b.closeLimit,{expires:b.expireDays,path:b.path})})};
f.each(function(){var d=a(this),b;try{if(b=d.attr("data-qd-cookie"))var f=a.parseJSON("{"+b+"}")}catch(l){k(['Aeee irm\u00e3ooo!\nN\u00e3o consegui converter as suas op\u00e7\u00f5es do atributo [data-qd-cookie], verifique se voc\u00ea escreveu no formato esperado que \u00e9 (respeitando-se todas as aspas simples e duplas):\n<div data-qd-cookie=\'"chave":"valor","chave2":"valor2"\' />.',"\n\nDetalhes do erro: "+l.message],"alerta"),f={}}b=a.extend({},h,f);g(d,b);c(d,b);e(d,b)})};a.fn.QD_cookieFn=
function(f){var c=a(this);h=a.extend(!0,{},g,f);c.QD_cookieFn=new a.QD_cookieFn(c);return c};a(function(){a("[data-qd-cookie]").QD_cookieFn()})})();
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);