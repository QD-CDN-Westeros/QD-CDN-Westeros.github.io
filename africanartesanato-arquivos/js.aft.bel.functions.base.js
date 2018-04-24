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
		},
		ajaxStop: function() {},
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
			$(".side-menu-toggle").click(function(){
				$("body").toggleClass('qd-sn-on');
			});
			$(".qd-am-overlay, .search-menu-close").click(function(){
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
			$(".qd-am-overlay, .search-menu-close").click(function(){
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
var _0xbe51=['asyncCallback','trigger','cartProductAdded.vtex','parent','_QuatroDigital_prodBuyCallback','Callback\x20não\x20é\x20uma\x20função','.qd-bb-itemAddWrapper','prepend','<span\x20class=\x22qd-bb-itemAddWrapper\x22><span\x20class=\x22qd-bb-itemAddIco\x22></span></span>','QuatroDigital.qd_bb_prod_add','ajaxSend','url','/checkout/cart/add','productAddedToCart.qdSbbVtex','ajaxStop','pow','toFixed','unshift','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','QD_dropDownCart','fromCharCode','charCodeAt','ite','---','erc','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','Ir\x20ao\x20Carrinho','Finalizar\x20Compra','Continuar\x20Comprando','<label\x20for=\x22qd-ddc-cep\x22>Calcular\x20frete:\x20</label><input\x20type=\x22tel\x22\x20id=\x22qd-ddc-cep\x22\x20placeholder=\x22CEP\x22\x20/>','skuName','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js','cartContainer','append','.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose','.qd_ddc_lightBoxOverlay','qd-bb-lightBoxProdAdd','off','keyup.qd_ddc_closeFn','.qd-ddc-prodWrapper','click.qd_ddc_scrollDown','scrollCart','.qd-ddc-shipping\x20input','val','keyup.qd_ddc_cep','shippingCalculate','updateOnlyHover','mouseenter.qd_ddc_hover','mouseleave.qd_ddc_hover','texts','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','#items','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','#shipping','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','#total','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','linkCart','.qd_ddc_continueShopping','continueShopping','linkCheckout','.qd-ddc-infoTotal','.qd-ddc-shipping','.qd-ddc-emptyCart\x20p','clone','.qd-ddc-infoTotalShipping','shipping','.qd-ddc-infoAllTotal','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','renderProductsList','dataOptionsCache','.qd-ddc-wrapper','qd-ddc-prodLoaded','_QuatroDigital_AmountProduct','exec','Este\x20método\x20esta\x20descontinuado!','qd-ddc-noItems','.qd-ddc-prodWrapper2','empty','productCategoryIds','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','qd-ddc-','availability','.qd-ddc-prodName','.qd-ddc-prodPrice','sellingPrice','Grátis','insertProdImg','.qd-ddc-image','imageUrl','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','appendTo','address','postalCode','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','actionButtons','lastSku','[data-sku=\x27','outerHeight','qd-ddc-lastAddedFixed','qd-ddc-lastAdded','qd-ddc-cart-empty','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','callbackProductsList','callbackProductsList\x20não\x20é\x20uma\x20função','qd-loaded','src','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.','data-sku','data-sku-index','changeQantity','.qd-ddc-prodQttWrapper:not(.qd_on)','.qd-ddc-quantityMore','click.qd_ddc_more','.qd-ddc-quantity','click.qd_ddc_minus','qd-loading','focusout.qd_ddc_change','keyup.qd_ddc_change','keyCode','.qd-ddc-remove','click.qd_ddc_remove','slideUp','remove','calculateShipping','BRA','boolean','cartIsEmpty','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20window._QuatroDigital_DropDown.getOrderForm.items[','index','updateItems','Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho','atenção\x20esta\x20método\x20esta\x20descontinuado','removeItems','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','Atenção,\x20este\x20método\x20esta\x20descontinuado.','.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2','height','stop','animate','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20','avisso','allowRecalculate','buyButtonClicked','quickViewUpdate','productId','prod_','prodId','.qd-bap-wrapper','.qd-bap-item-added','input.qd-productId[value=','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','.qd-bap-qtt','.qd_bap_wrapper_content','qd-bap-item-added','.qdDdcContainer','QD_smartCart','dropDown','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','smartCart','getParent','replace','abs','undefined','round','split','length','join','function','prototype','charAt','toUpperCase','slice','toLowerCase','qdAjax','qdAjaxQueue','jquery','000','error','object','data','stringify','jqXHR','ajax','done','success','always','complete','clearQueueDelay','message','version','4.0','closest','simpleCart','getOrderForm','checkout','call','QuatroDigital_simpleCart','alerta','warn','[Simple\x20Cart]\x0a','info','add','elements','QD_simpleCart','meta[name=currency]','attr','content','extend','each','qd_simpleCartOpts','_QuatroDigital_CartData','totalizers','Shipping','value','total','currencySymbol','qtt','showQuantityByItems','items','quantity','callback','fire','hide','filter','.singular','show','qd-emptyCart','cartTotalE','cartQttE','html','$this','find','cartQtt','cartTotal','itemsText','emptyElem','emptyCart','addClass','smartCheckout','_QuatroDigital_DropDown','vtexjs','SDK','QD_checkoutQueue','shippingData','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20para\x20o\x20carrinho.','ajaxRequestbuyButtonAsynchronous','ReloadItemsCart','.qd_cart_auto','bind','productAddedToCart\x20minicartUpdated.vtex\x20cartProductAdded.vtex','Oooops!\x20','[QD\x20VTEX\x20Checkout\x20Queue]\x0a','Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js.\x20Este\x20componente\x20para\x20por\x20aqui,\x20a\x20força\x20não\x20esta\x20mais\x20contigo\x20neste\x20jornada!\x20Para\x20resolver\x20isto\x20inclua\x20a\x20biblioteca\x20VTEX.js','fail','Callbacks','[Quatro\x20Digital\x20-\x20Buy\x20Button]\x0a','aviso','apply','.productInformationWrapper\x20\x20a.buy-button','input.buy-in-page-quantity','javascript:','body','.productQuickView','Produto\x20adicionado\x20ao\x20carrinho!','Ooops!\x20Algo\x20saiu\x20errado\x20ao\x20tentar\x20adicionar\x20seu\x20produto\x20ao\x20carrinho.\x20\x0a\x20Vou\x20te\x20redirecionar\x20para\x20o\x20carrinho.','location','#produto,\x20.produto','QD_buyButton','qd-bb-click-active','allowBuyClick','clickBuySmartCheckout','preventDefault','buyButton','.qd-sbb-on','qd-sbb-on','.btn-add-buy-button-asynchronous','qd-bb-active','children','.qd-bb-productAdded','<span\x20class=\x22qd-bb-productAdded\x22><i\x20class=\x22icon-thumbs-up\x22></i>\x20<span>Produto\x20adicionado</span></span>','.buy-in-page-button','isProductPage','selector','_Quatro_Digital_dropDown','prodAdd','qd-bb-itemAddCartWrapper\x20qd-bb-lightBoxProdAdd','qd-bb-lightBoxBodyProdAdd','[href=\x27','href','qd-bb-itemAddBuyButtonWrapper','removeClass','timeRemoveNewItemClass','getCartInfoByUrl','isSmartCheckout','função\x20descontinuada','allowUpdate','unbind','click','mouseenter.qd_bb_buy_sc','indexOf','selectSkuMsg','execDefaultAction','redirect=false','queue','match','push','productPageCallback','buyButtonClickCallback','ku=','pop','shift'];(function(_0x4af177,_0x976774){var _0x57d98a=function(_0x22f14b){while(--_0x22f14b){_0x4af177['push'](_0x4af177['shift']());}};_0x57d98a(++_0x976774);}(_0xbe51,0x1e2));var _0x1be5=function(_0x4ce1b1,_0x2ae01b){_0x4ce1b1=_0x4ce1b1-0x0;var _0xa01663=_0xbe51[_0x4ce1b1];return _0xa01663;};(function(_0x130748){_0x130748['fn'][_0x1be5('0x0')]=_0x130748['fn']['closest'];}(jQuery));function qd_number_format(_0x13d364,_0x50be3c,_0x341ee3,_0x45a17f){_0x13d364=(_0x13d364+'')[_0x1be5('0x1')](/[^0-9+\-Ee.]/g,'');_0x13d364=isFinite(+_0x13d364)?+_0x13d364:0x0;_0x50be3c=isFinite(+_0x50be3c)?Math[_0x1be5('0x2')](_0x50be3c):0x0;_0x45a17f=_0x1be5('0x3')===typeof _0x45a17f?',':_0x45a17f;_0x341ee3=_0x1be5('0x3')===typeof _0x341ee3?'.':_0x341ee3;var _0x288927='',_0x288927=function(_0x13fa3e,_0xf4a39f){var _0x50be3c=Math['pow'](0xa,_0xf4a39f);return''+(Math[_0x1be5('0x4')](_0x13fa3e*_0x50be3c)/_0x50be3c)['toFixed'](_0xf4a39f);},_0x288927=(_0x50be3c?_0x288927(_0x13d364,_0x50be3c):''+Math[_0x1be5('0x4')](_0x13d364))[_0x1be5('0x5')]('.');0x3<_0x288927[0x0]['length']&&(_0x288927[0x0]=_0x288927[0x0][_0x1be5('0x1')](/\B(?=(?:\d{3})+(?!\d))/g,_0x45a17f));(_0x288927[0x1]||'')[_0x1be5('0x6')]<_0x50be3c&&(_0x288927[0x1]=_0x288927[0x1]||'',_0x288927[0x1]+=Array(_0x50be3c-_0x288927[0x1][_0x1be5('0x6')]+0x1)[_0x1be5('0x7')]('0'));return _0x288927[_0x1be5('0x7')](_0x341ee3);};_0x1be5('0x8')!==typeof String[_0x1be5('0x9')]['trim']&&(String[_0x1be5('0x9')]['trim']=function(){return this[_0x1be5('0x1')](/^\s+|\s+$/g,'');});_0x1be5('0x8')!=typeof String[_0x1be5('0x9')]['capitalize']&&(String[_0x1be5('0x9')]['capitalize']=function(){return this[_0x1be5('0xa')](0x0)[_0x1be5('0xb')]()+this[_0x1be5('0xc')](0x1)[_0x1be5('0xd')]();});(function(_0x1b4d73){if(_0x1be5('0x8')!==typeof _0x1b4d73[_0x1be5('0xe')]){var _0x5db6ba={};_0x1b4d73[_0x1be5('0xf')]=_0x5db6ba;0x96>parseInt((_0x1b4d73['fn'][_0x1be5('0x10')][_0x1be5('0x1')](/[^0-9]+/g,'')+_0x1be5('0x11'))[_0x1be5('0xc')](0x0,0x3),0xa)&&console&&_0x1be5('0x8')==typeof console[_0x1be5('0x12')]&&console[_0x1be5('0x12')]();_0x1b4d73['qdAjax']=function(_0x3020fc){try{var _0x33cf5d=_0x1b4d73['extend']({},{'url':'','type':'GET','data':'','success':function(){},'error':function(){},'complete':function(){},'clearQueueDelay':0x5},_0x3020fc);var _0x5b776c=_0x1be5('0x13')===typeof _0x33cf5d[_0x1be5('0x14')]?JSON[_0x1be5('0x15')](_0x33cf5d[_0x1be5('0x14')]):_0x33cf5d[_0x1be5('0x14')]['toString']();var _0x277630=encodeURIComponent(_0x33cf5d['url']+'|'+_0x33cf5d['type']+'|'+_0x5b776c);_0x5db6ba[_0x277630]=_0x5db6ba[_0x277630]||{};_0x1be5('0x3')==typeof _0x5db6ba[_0x277630][_0x1be5('0x16')]?_0x5db6ba[_0x277630][_0x1be5('0x16')]=_0x1b4d73[_0x1be5('0x17')](_0x33cf5d):(_0x5db6ba[_0x277630][_0x1be5('0x16')][_0x1be5('0x18')](_0x33cf5d[_0x1be5('0x19')]),_0x5db6ba[_0x277630][_0x1be5('0x16')]['fail'](_0x33cf5d[_0x1be5('0x12')]),_0x5db6ba[_0x277630][_0x1be5('0x16')][_0x1be5('0x1a')](_0x33cf5d[_0x1be5('0x1b')]));_0x5db6ba[_0x277630][_0x1be5('0x16')][_0x1be5('0x1a')](function(){isNaN(parseInt(_0x33cf5d[_0x1be5('0x1c')]))||setTimeout(function(){_0x5db6ba[_0x277630][_0x1be5('0x16')]=void 0x0;},_0x33cf5d['clearQueueDelay']);});return _0x5db6ba[_0x277630][_0x1be5('0x16')];}catch(_0x5577f8){_0x1be5('0x3')!==typeof console&&_0x1be5('0x8')===typeof console[_0x1be5('0x12')]&&console[_0x1be5('0x12')]('Problemas\x20no\x20$.qdAjax\x20:(\x20.\x20Detalhes:\x20'+_0x5577f8[_0x1be5('0x1d')]);}};_0x1b4d73[_0x1be5('0xe')][_0x1be5('0x1e')]=_0x1be5('0x1f');}}(jQuery));(function(_0x1ddf40){_0x1ddf40['fn']['getParent']=_0x1ddf40['fn'][_0x1be5('0x20')];}(jQuery));(function(){var _0x15ccef=jQuery;if(_0x1be5('0x8')!==typeof _0x15ccef['fn'][_0x1be5('0x21')]){_0x15ccef(function(){var _0x2833ba=vtexjs['checkout'][_0x1be5('0x22')];vtexjs[_0x1be5('0x23')][_0x1be5('0x22')]=function(){return _0x2833ba[_0x1be5('0x24')]();};});try{window['QuatroDigital_simpleCart']=window[_0x1be5('0x25')]||{};window[_0x1be5('0x25')]['ajaxStopOn']=!0x1;_0x15ccef['fn'][_0x1be5('0x21')]=function(_0x11c32e,_0x51c923,_0x5bd223){var _0xa84d12=function(_0x440072,_0x2473e3){if(_0x1be5('0x13')===typeof console){var _0x4aaefa=_0x1be5('0x13')===typeof _0x440072;_0x1be5('0x3')!==typeof _0x2473e3&&_0x1be5('0x26')===_0x2473e3[_0x1be5('0xd')]()?_0x4aaefa?console[_0x1be5('0x27')]('[Simple\x20Cart]\x0a',_0x440072[0x0],_0x440072[0x1],_0x440072[0x2],_0x440072[0x3],_0x440072[0x4],_0x440072[0x5],_0x440072[0x6],_0x440072[0x7]):console[_0x1be5('0x27')](_0x1be5('0x28')+_0x440072):'undefined'!==typeof _0x2473e3&&_0x1be5('0x29')===_0x2473e3['toLowerCase']()?_0x4aaefa?console['info'](_0x1be5('0x28'),_0x440072[0x0],_0x440072[0x1],_0x440072[0x2],_0x440072[0x3],_0x440072[0x4],_0x440072[0x5],_0x440072[0x6],_0x440072[0x7]):console[_0x1be5('0x29')](_0x1be5('0x28')+_0x440072):_0x4aaefa?console['error'](_0x1be5('0x28'),_0x440072[0x0],_0x440072[0x1],_0x440072[0x2],_0x440072[0x3],_0x440072[0x4],_0x440072[0x5],_0x440072[0x6],_0x440072[0x7]):console['error'](_0x1be5('0x28')+_0x440072);}};var _0x1f3120=_0x15ccef(this);_0x1be5('0x13')===typeof _0x11c32e?_0x51c923=_0x11c32e:(_0x11c32e=_0x11c32e||!0x1,_0x1f3120=_0x1f3120[_0x1be5('0x2a')](_0x15ccef['QD_simpleCart'][_0x1be5('0x2b')]));if(!_0x1f3120[_0x1be5('0x6')])return _0x1f3120;_0x15ccef[_0x1be5('0x2c')][_0x1be5('0x2b')]=_0x15ccef[_0x1be5('0x2c')][_0x1be5('0x2b')][_0x1be5('0x2a')](_0x1f3120);_0x5bd223=_0x1be5('0x3')===typeof _0x5bd223?!0x1:_0x5bd223;var _0x226659={'cartQtt':'.qd_cart_qtt','cartTotal':'.qd_cart_total','itemsText':'.qd_items_text','currencySymbol':(_0x15ccef(_0x1be5('0x2d'))[_0x1be5('0x2e')](_0x1be5('0x2f'))||'R$')+'\x20','showQuantityByItems':!0x0,'smartCheckout':!0x0,'callback':function(){}};var _0x4c96c3=_0x15ccef[_0x1be5('0x30')]({},_0x226659,_0x51c923);var _0x5c373c=_0x15ccef('');_0x1f3120[_0x1be5('0x31')](function(){var _0x21df7c=_0x15ccef(this);_0x21df7c[_0x1be5('0x14')](_0x1be5('0x32'))||_0x21df7c[_0x1be5('0x14')](_0x1be5('0x32'),_0x4c96c3);});var _0x328337=function(_0x454bf7){window[_0x1be5('0x33')]=window['_QuatroDigital_CartData']||{};for(var _0x11c32e=0x0,_0x4d3452=0x0,_0x168bda=0x0;_0x168bda<_0x454bf7[_0x1be5('0x34')][_0x1be5('0x6')];_0x168bda++)_0x1be5('0x35')==_0x454bf7[_0x1be5('0x34')][_0x168bda]['id']&&(_0x4d3452+=_0x454bf7[_0x1be5('0x34')][_0x168bda]['value']),_0x11c32e+=_0x454bf7[_0x1be5('0x34')][_0x168bda][_0x1be5('0x36')];window[_0x1be5('0x33')][_0x1be5('0x37')]=_0x4c96c3[_0x1be5('0x38')]+qd_number_format(_0x11c32e/0x64,0x2,',','.');window[_0x1be5('0x33')]['shipping']=_0x4c96c3[_0x1be5('0x38')]+qd_number_format(_0x4d3452/0x64,0x2,',','.');window[_0x1be5('0x33')]['allTotal']=_0x4c96c3[_0x1be5('0x38')]+qd_number_format((_0x11c32e+_0x4d3452)/0x64,0x2,',','.');window[_0x1be5('0x33')][_0x1be5('0x39')]=0x0;if(_0x4c96c3[_0x1be5('0x3a')])for(_0x168bda=0x0;_0x168bda<_0x454bf7[_0x1be5('0x3b')][_0x1be5('0x6')];_0x168bda++)window[_0x1be5('0x33')][_0x1be5('0x39')]+=_0x454bf7[_0x1be5('0x3b')][_0x168bda][_0x1be5('0x3c')];else window['_QuatroDigital_CartData']['qtt']=_0x454bf7['items'][_0x1be5('0x6')]||0x0;try{window[_0x1be5('0x33')][_0x1be5('0x3d')]&&window[_0x1be5('0x33')]['callback'][_0x1be5('0x3e')]&&window['_QuatroDigital_CartData'][_0x1be5('0x3d')][_0x1be5('0x3e')]();}catch(_0x36e999){_0xa84d12('Problemas\x20com\x20o\x20callback\x20do\x20Smart\x20Cart');}_0x520a30(_0x5c373c);};var _0x518eec=function(_0x8d19e3,_0x57339b){0x1===_0x8d19e3?_0x57339b[_0x1be5('0x3f')]()[_0x1be5('0x40')](_0x1be5('0x41'))[_0x1be5('0x42')]():_0x57339b['hide']()['filter']('.plural')[_0x1be5('0x42')]();};var _0x535710=function(_0x2b7eef){0x1>_0x2b7eef?_0x1f3120['addClass'](_0x1be5('0x43')):_0x1f3120['removeClass']('qd-emptyCart');};var _0x5b3db2=function(_0x288963,_0x1b0170){var _0x295189=parseInt(window['_QuatroDigital_CartData'][_0x1be5('0x39')],0xa);_0x1b0170['$this'][_0x1be5('0x42')]();isNaN(_0x295189)&&(_0xa84d12('O\x20valor\x20obtido\x20para\x20calcular\x20o\x20plural/singular\x20não\x20é\x20um\x20número!\x20O\x20valor\x20será\x20definido\x20para\x200.',_0x1be5('0x26')),_0x295189=0x0);_0x1b0170[_0x1be5('0x44')]['html'](window[_0x1be5('0x33')][_0x1be5('0x37')]);_0x1b0170[_0x1be5('0x45')][_0x1be5('0x46')](_0x295189);_0x518eec(_0x295189,_0x1b0170['itemsTextE']);_0x535710(_0x295189);};var _0x520a30=function(_0x45a852){_0x1f3120[_0x1be5('0x31')](function(){var _0x4203bc={};var _0x3a83c3=_0x15ccef(this);_0x11c32e&&_0x3a83c3[_0x1be5('0x14')](_0x1be5('0x32'))&&_0x15ccef[_0x1be5('0x30')](_0x4c96c3,_0x3a83c3[_0x1be5('0x14')]('qd_simpleCartOpts'));_0x4203bc[_0x1be5('0x47')]=_0x3a83c3;_0x4203bc[_0x1be5('0x45')]=_0x3a83c3[_0x1be5('0x48')](_0x4c96c3[_0x1be5('0x49')])||_0x5c373c;_0x4203bc[_0x1be5('0x44')]=_0x3a83c3[_0x1be5('0x48')](_0x4c96c3[_0x1be5('0x4a')])||_0x5c373c;_0x4203bc['itemsTextE']=_0x3a83c3[_0x1be5('0x48')](_0x4c96c3[_0x1be5('0x4b')])||_0x5c373c;_0x4203bc[_0x1be5('0x4c')]=_0x3a83c3[_0x1be5('0x48')](_0x4c96c3[_0x1be5('0x4d')])||_0x5c373c;_0x5b3db2(_0x45a852,_0x4203bc);_0x3a83c3[_0x1be5('0x4e')]('qd-sc-populated');});};(function(){if(_0x4c96c3[_0x1be5('0x4f')]){window[_0x1be5('0x50')]=window[_0x1be5('0x50')]||{};if('undefined'!==typeof window[_0x1be5('0x50')][_0x1be5('0x22')]&&(_0x5bd223||!_0x11c32e))return _0x328337(window[_0x1be5('0x50')][_0x1be5('0x22')]);if('object'!==typeof window[_0x1be5('0x51')]||_0x1be5('0x3')===typeof window[_0x1be5('0x51')]['checkout'])if('object'===typeof vtex&&'object'===typeof vtex[_0x1be5('0x23')]&&_0x1be5('0x3')!==typeof vtex[_0x1be5('0x23')][_0x1be5('0x52')])new vtex[(_0x1be5('0x23'))][(_0x1be5('0x52'))]();else return _0xa84d12('Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js');_0x15ccef[_0x1be5('0x53')]([_0x1be5('0x3b'),_0x1be5('0x34'),_0x1be5('0x54')],{'done':function(_0x4b3e93){_0x328337(_0x4b3e93);window['_QuatroDigital_DropDown'][_0x1be5('0x22')]=_0x4b3e93;},'fail':function(_0x2c8462){_0xa84d12([_0x1be5('0x55'),_0x2c8462]);}});}else alert('Esta\x20é\x20uma\x20função\x20descontinuada\x20=/');}());_0x4c96c3[_0x1be5('0x3d')]();_0x15ccef(window)['trigger']('simpleCartCallback.quatro_digital');return _0x1f3120;};_0x15ccef[_0x1be5('0x2c')]={'elements':_0x15ccef('')};_0x15ccef(function(){var _0x779a18;_0x1be5('0x8')===typeof window['ajaxRequestbuyButtonAsynchronous']&&(_0x779a18=window[_0x1be5('0x56')],window[_0x1be5('0x56')]=function(_0xa04881,_0xb7857d,_0x271224,_0x3b9096,_0x4bc247){_0x779a18['call'](this,_0xa04881,_0xb7857d,_0x271224,_0x3b9096,function(){'function'===typeof _0x4bc247&&_0x4bc247();_0x15ccef['QD_simpleCart'][_0x1be5('0x2b')][_0x1be5('0x31')](function(){var _0x3ec41c=_0x15ccef(this);_0x3ec41c['simpleCart'](_0x3ec41c[_0x1be5('0x14')]('qd_simpleCartOpts'));});});});});var _0x3c2b88=window[_0x1be5('0x57')]||void 0x0;window['ReloadItemsCart']=function(_0x54eba1){_0x15ccef['fn'][_0x1be5('0x21')](!0x0);_0x1be5('0x8')===typeof _0x3c2b88?_0x3c2b88[_0x1be5('0x24')](this,_0x54eba1):alert(_0x54eba1);};_0x15ccef(function(){var _0x17d8c6=_0x15ccef(_0x1be5('0x58'));_0x17d8c6['length']&&_0x17d8c6['simpleCart']();});_0x15ccef(function(){_0x15ccef(window)[_0x1be5('0x59')](_0x1be5('0x5a'),function(){_0x15ccef['fn'][_0x1be5('0x21')](!0x0);});});}catch(_0xc80d90){_0x1be5('0x3')!==typeof console&&'function'===typeof console['error']&&console[_0x1be5('0x12')](_0x1be5('0x5b'),_0xc80d90);}}}());(function(){var _0x5177bb=function(_0x32a75b,_0x3f69f4){if(_0x1be5('0x13')===typeof console){var _0x17a4de='object'===typeof _0x32a75b;_0x1be5('0x3')!==typeof _0x3f69f4&&_0x1be5('0x26')===_0x3f69f4[_0x1be5('0xd')]()?_0x17a4de?console[_0x1be5('0x27')]('[QD\x20VTEX\x20Checkout\x20Queue]\x0a',_0x32a75b[0x0],_0x32a75b[0x1],_0x32a75b[0x2],_0x32a75b[0x3],_0x32a75b[0x4],_0x32a75b[0x5],_0x32a75b[0x6],_0x32a75b[0x7]):console[_0x1be5('0x27')](_0x1be5('0x5c')+_0x32a75b):_0x1be5('0x3')!==typeof _0x3f69f4&&_0x1be5('0x29')===_0x3f69f4['toLowerCase']()?_0x17a4de?console[_0x1be5('0x29')](_0x1be5('0x5c'),_0x32a75b[0x0],_0x32a75b[0x1],_0x32a75b[0x2],_0x32a75b[0x3],_0x32a75b[0x4],_0x32a75b[0x5],_0x32a75b[0x6],_0x32a75b[0x7]):console['info'](_0x1be5('0x5c')+_0x32a75b):_0x17a4de?console[_0x1be5('0x12')]('[QD\x20VTEX\x20Checkout\x20Queue]\x0a',_0x32a75b[0x0],_0x32a75b[0x1],_0x32a75b[0x2],_0x32a75b[0x3],_0x32a75b[0x4],_0x32a75b[0x5],_0x32a75b[0x6],_0x32a75b[0x7]):console[_0x1be5('0x12')](_0x1be5('0x5c')+_0x32a75b);}},_0xd8cb9e=null,_0xa52c79={},_0x512d10={},_0x49e86b={};$[_0x1be5('0x53')]=function(_0x21b77d,_0x2b928e){if(null===_0xd8cb9e)if('object'===typeof window[_0x1be5('0x51')]&&_0x1be5('0x3')!==typeof window[_0x1be5('0x51')]['checkout'])_0xd8cb9e=window[_0x1be5('0x51')][_0x1be5('0x23')];else return _0x5177bb(_0x1be5('0x5d'));var _0x200d92=$['extend']({'done':function(){},'fail':function(){}},_0x2b928e),_0x44a87e=_0x21b77d[_0x1be5('0x7')](';'),_0x594f27=function(){_0xa52c79[_0x44a87e]['add'](_0x200d92[_0x1be5('0x18')]);_0x512d10[_0x44a87e]['add'](_0x200d92[_0x1be5('0x5e')]);};_0x49e86b[_0x44a87e]?_0x594f27():(_0xa52c79[_0x44a87e]=$['Callbacks'](),_0x512d10[_0x44a87e]=$[_0x1be5('0x5f')](),_0x594f27(),_0x49e86b[_0x44a87e]=!0x0,_0xd8cb9e[_0x1be5('0x22')](_0x21b77d)['done'](function(_0x25407){_0x49e86b[_0x44a87e]=!0x1;_0xa52c79[_0x44a87e][_0x1be5('0x3e')](_0x25407);})[_0x1be5('0x5e')](function(_0x19bc1c){_0x49e86b[_0x44a87e]=!0x1;_0x512d10[_0x44a87e][_0x1be5('0x3e')](_0x19bc1c);}));};}());(function(_0x4215e4){try{var _0x23a36a=jQuery,_0x12d157,_0x2158ac=_0x23a36a({}),_0x3d8b84=function(_0x1774ea,_0x409743){if('object'===typeof console&&_0x1be5('0x3')!==typeof console[_0x1be5('0x12')]&&_0x1be5('0x3')!==typeof console[_0x1be5('0x29')]&&_0x1be5('0x3')!==typeof console['warn']){var _0x46b9a2;_0x1be5('0x13')===typeof _0x1774ea?(_0x1774ea['unshift']('[Quatro\x20Digital\x20-\x20Buy\x20Button]\x0a'),_0x46b9a2=_0x1774ea):_0x46b9a2=[_0x1be5('0x60')+_0x1774ea];if('undefined'===typeof _0x409743||_0x1be5('0x26')!==_0x409743[_0x1be5('0xd')]()&&_0x1be5('0x61')!==_0x409743[_0x1be5('0xd')]())if(_0x1be5('0x3')!==typeof _0x409743&&_0x1be5('0x29')===_0x409743[_0x1be5('0xd')]())try{console['info']['apply'](console,_0x46b9a2);}catch(_0xd57951){try{console[_0x1be5('0x29')](_0x46b9a2['join']('\x0a'));}catch(_0x5034fa){}}else try{console[_0x1be5('0x12')][_0x1be5('0x62')](console,_0x46b9a2);}catch(_0x4ba037){try{console[_0x1be5('0x12')](_0x46b9a2['join']('\x0a'));}catch(_0x3e6b27){}}else try{console[_0x1be5('0x27')][_0x1be5('0x62')](console,_0x46b9a2);}catch(_0x213062){try{console[_0x1be5('0x27')](_0x46b9a2['join']('\x0a'));}catch(_0x1ad92a){}}}},_0x14adfe={'timeRemoveNewItemClass':0x1388,'isSmartCheckout':!0x0,'buyButton':_0x1be5('0x63'),'buyQtt':_0x1be5('0x64'),'selectSkuMsg':_0x1be5('0x65'),'autoWatchBuyButton':!0x0,'buyIfQuantityZeroed':!0x1,'fakeRequest':!0x1,'productPageCallback':function(_0x4dd536,_0x34c5e6,_0x11984f){_0x23a36a(_0x1be5('0x66'))['is'](_0x1be5('0x67'))&&(_0x1be5('0x19')===_0x34c5e6?alert(_0x1be5('0x68')):(alert(_0x1be5('0x69')),(_0x1be5('0x13')===typeof parent?parent:document)[_0x1be5('0x6a')]['href']=_0x11984f));},'isProductPage':function(){return _0x23a36a(_0x1be5('0x66'))['is'](_0x1be5('0x6b'));},'execDefaultAction':function(_0x6d9dcd){return!0x1;},'allowBuyClick':function(){return!0x0;},'callback':function(){},'asyncCallback':function(){}};_0x23a36a[_0x1be5('0x6c')]=function(_0x591252,_0x41a33f){function _0x59be51(_0x13fc03){_0x12d157['isSmartCheckout']?_0x13fc03[_0x1be5('0x14')](_0x1be5('0x6d'))||(_0x13fc03[_0x1be5('0x14')](_0x1be5('0x6d'),0x1),_0x13fc03['on']('click.qd_bb_buy_sc',function(_0xb2d0d9){if(!_0x12d157[_0x1be5('0x6e')]())return!0x0;if(!0x0!==_0x302a8c[_0x1be5('0x6f')][_0x1be5('0x24')](this))return _0xb2d0d9[_0x1be5('0x70')](),!0x1;})):alert('Método\x20descontinuado!');}function _0x5ef58b(_0x1963c2){_0x1963c2=_0x1963c2||_0x23a36a(_0x12d157[_0x1be5('0x71')]);_0x1963c2[_0x1be5('0x31')](function(){var _0x1963c2=_0x23a36a(this);_0x1963c2['is'](_0x1be5('0x72'))||(_0x1963c2[_0x1be5('0x4e')](_0x1be5('0x73')),_0x1963c2['is'](_0x1be5('0x74'))&&!_0x1963c2['is']('.remove-href')||_0x1963c2[_0x1be5('0x14')](_0x1be5('0x75'))||(_0x1963c2[_0x1be5('0x14')](_0x1be5('0x75'),0x1),_0x1963c2[_0x1be5('0x76')](_0x1be5('0x77'))['length']||_0x1963c2['append'](_0x1be5('0x78')),_0x1963c2['is'](_0x1be5('0x79'))&&_0x12d157[_0x1be5('0x7a')]()&&_0x41b9b3[_0x1be5('0x24')](_0x1963c2),_0x59be51(_0x1963c2)));});_0x12d157[_0x1be5('0x7a')]()&&!_0x1963c2[_0x1be5('0x6')]&&_0x3d8b84('Oooops!\x0aAparentemente\x20esta\x20é\x20uma\x20página\x20de\x20produto\x20porém\x20não\x20encontrei\x20nenhum\x20botão\x20comprar!\x0aVerifique\x20se\x20é\x20este\x20mesmo\x20o\x20seletor:\x20\x27'+_0x1963c2[_0x1be5('0x7b')]+'\x27.',_0x1be5('0x29'));}var _0x5dd3f1=_0x23a36a(_0x591252);var _0x302a8c=this;window[_0x1be5('0x7c')]=window[_0x1be5('0x7c')]||{};window[_0x1be5('0x33')]=window['_QuatroDigital_CartData']||{};_0x302a8c[_0x1be5('0x7d')]=function(_0x4e6adc,_0x1803fe){_0x5dd3f1[_0x1be5('0x4e')](_0x1be5('0x7e'));_0x23a36a(_0x1be5('0x66'))[_0x1be5('0x4e')](_0x1be5('0x7f'));var _0x10887c=_0x23a36a(_0x12d157[_0x1be5('0x71')])[_0x1be5('0x40')](_0x1be5('0x80')+(_0x4e6adc[_0x1be5('0x2e')](_0x1be5('0x81'))||'---')+'\x27]')[_0x1be5('0x2a')](_0x4e6adc);_0x10887c[_0x1be5('0x4e')](_0x1be5('0x82'));setTimeout(function(){_0x5dd3f1['removeClass']('qd-bb-itemAddCartWrapper');_0x10887c[_0x1be5('0x83')](_0x1be5('0x82'));},_0x12d157[_0x1be5('0x84')]);window['_Quatro_Digital_dropDown'][_0x1be5('0x22')]=void 0x0;if(_0x1be5('0x3')!==typeof _0x41a33f&&'function'===typeof _0x41a33f[_0x1be5('0x85')])return _0x12d157[_0x1be5('0x86')]||(_0x3d8b84(_0x1be5('0x87')),_0x41a33f[_0x1be5('0x85')]()),window[_0x1be5('0x50')]['getOrderForm']=void 0x0,_0x41a33f[_0x1be5('0x85')](function(_0x67c845){window['_Quatro_Digital_dropDown'][_0x1be5('0x22')]=_0x67c845;_0x23a36a['fn']['simpleCart'](!0x0,void 0x0,!0x0);},{'lastSku':_0x1803fe});window[_0x1be5('0x7c')][_0x1be5('0x88')]=!0x0;_0x23a36a['fn']['simpleCart'](!0x0);};(function(){if(_0x12d157[_0x1be5('0x86')]&&_0x12d157['autoWatchBuyButton']){var _0x2dfef8=_0x23a36a(_0x1be5('0x74'));_0x2dfef8[_0x1be5('0x6')]&&_0x5ef58b(_0x2dfef8);}}());var _0x41b9b3=function(){var _0x39a648=_0x23a36a(this);_0x1be5('0x3')!==typeof _0x39a648[_0x1be5('0x14')](_0x1be5('0x71'))?(_0x39a648[_0x1be5('0x89')](_0x1be5('0x8a')),_0x59be51(_0x39a648)):(_0x39a648[_0x1be5('0x59')]('mouseenter.qd_bb_buy_sc',function(_0x5da9ca){_0x39a648[_0x1be5('0x89')](_0x1be5('0x8a'));_0x59be51(_0x39a648);_0x23a36a(this)[_0x1be5('0x89')](_0x5da9ca);}),_0x23a36a(window)['load'](function(){_0x39a648[_0x1be5('0x89')]('click');_0x59be51(_0x39a648);_0x39a648[_0x1be5('0x89')](_0x1be5('0x8b'));}));};_0x302a8c[_0x1be5('0x6f')]=function(){var _0x442242=_0x23a36a(this),_0x591252=_0x442242['attr'](_0x1be5('0x81'))||'';if(-0x1<_0x591252[_0x1be5('0x8c')](_0x12d157[_0x1be5('0x8d')]))return!0x0;_0x591252=_0x591252['replace'](/redirect\=(false|true)/gi,'')['replace']('?','?redirect=false&')['replace'](/\&\&/gi,'&');if(_0x12d157[_0x1be5('0x8e')](_0x442242))return _0x442242[_0x1be5('0x2e')](_0x1be5('0x81'),_0x591252[_0x1be5('0x1')](_0x1be5('0x8f'),'redirect=true')),!0x0;_0x591252=_0x591252[_0x1be5('0x1')](/http.?:/i,'');_0x2158ac[_0x1be5('0x90')](function(_0x1c9247){if(!_0x12d157['buyIfQuantityZeroed']&&!/(&|\?)qty\=[1-9][0-9]*/gi['test'](_0x591252))return _0x1c9247();var _0x3cd823=function(_0x5c924a,_0x3eafe6){var _0x5ef58b=_0x591252[_0x1be5('0x91')](/sku\=([0-9]+)/gi),_0x1447d8=[];if(_0x1be5('0x13')===typeof _0x5ef58b&&null!==_0x5ef58b)for(var _0x97ca7c=_0x5ef58b[_0x1be5('0x6')]-0x1;0x0<=_0x97ca7c;_0x97ca7c--){var _0x5ae868=parseInt(_0x5ef58b[_0x97ca7c][_0x1be5('0x1')](/sku\=/gi,''));isNaN(_0x5ae868)||_0x1447d8[_0x1be5('0x92')](_0x5ae868);}_0x12d157[_0x1be5('0x93')][_0x1be5('0x24')](this,_0x5c924a,_0x3eafe6,_0x591252);_0x302a8c[_0x1be5('0x94')][_0x1be5('0x24')](this,_0x5c924a,_0x3eafe6,_0x591252,_0x1447d8);_0x302a8c[_0x1be5('0x7d')](_0x442242,_0x591252[_0x1be5('0x5')](_0x1be5('0x95'))[_0x1be5('0x96')]()['split']('&')[_0x1be5('0x97')]());_0x1be5('0x8')===typeof _0x12d157[_0x1be5('0x98')]&&_0x12d157[_0x1be5('0x98')]['call'](this);_0x23a36a(window)['trigger']('productAddedToCart');_0x23a36a(window)[_0x1be5('0x99')](_0x1be5('0x9a'));};_0x12d157['fakeRequest']?(_0x3cd823(null,_0x1be5('0x19')),_0x1c9247()):_0x23a36a[_0x1be5('0x17')]({'url':_0x591252,'complete':_0x3cd823})[_0x1be5('0x1a')](function(){_0x1c9247();});});};_0x302a8c[_0x1be5('0x94')]=function(_0x2cda1b,_0x551777,_0x5d6764,_0x25bbc2){try{_0x1be5('0x19')===_0x551777&&_0x1be5('0x13')===typeof window[_0x1be5('0x9b')]&&'function'===typeof window['parent'][_0x1be5('0x9c')]&&window['parent']['_QuatroDigital_prodBuyCallback'](_0x2cda1b,_0x551777,_0x5d6764,_0x25bbc2);}catch(_0x442abd){_0x3d8b84('Problemas\x20ao\x20tentar\x20comunicar\x20a\x20página\x20que\x20o\x20produto\x20foi\x20aicionado\x20ao\x20carrinho.');}};_0x5ef58b();_0x1be5('0x8')===typeof _0x12d157[_0x1be5('0x3d')]?_0x12d157[_0x1be5('0x3d')][_0x1be5('0x24')](this):_0x3d8b84(_0x1be5('0x9d'));};var _0x49062e=_0x23a36a['Callbacks']();_0x23a36a['fn']['QD_buyButton']=function(_0x4bbaf5,_0x2267e5){var _0x4215e4=_0x23a36a(this);'undefined'!==typeof _0x2267e5||_0x1be5('0x13')!==typeof _0x4bbaf5||_0x4bbaf5 instanceof _0x23a36a||(_0x2267e5=_0x4bbaf5,_0x4bbaf5=void 0x0);_0x12d157=_0x23a36a[_0x1be5('0x30')]({},_0x14adfe,_0x2267e5);var _0x16bf0a;_0x49062e['add'](function(){_0x4215e4[_0x1be5('0x76')](_0x1be5('0x9e'))[_0x1be5('0x6')]||_0x4215e4[_0x1be5('0x9f')](_0x1be5('0xa0'));_0x16bf0a=new _0x23a36a[(_0x1be5('0x6c'))](_0x4215e4,_0x4bbaf5);});_0x49062e[_0x1be5('0x3e')]();_0x23a36a(window)['on'](_0x1be5('0xa1'),function(_0x331ebc,_0x3a4793,_0x1c17b7){_0x16bf0a[_0x1be5('0x7d')](_0x3a4793,_0x1c17b7);});return _0x23a36a[_0x1be5('0x30')](_0x4215e4,_0x16bf0a);};var _0x27d59c=0x0;_0x23a36a(document)[_0x1be5('0xa2')](function(_0x2f898f,_0x530ea8,_0x375bf9){-0x1<_0x375bf9[_0x1be5('0xa3')][_0x1be5('0xd')]()[_0x1be5('0x8c')](_0x1be5('0xa4'))&&(_0x27d59c=(_0x375bf9[_0x1be5('0xa3')]['match'](/sku\=([0-9]+)/i)||[''])[_0x1be5('0x96')]());});_0x23a36a(window)[_0x1be5('0x59')](_0x1be5('0xa5'),function(){_0x23a36a(window)[_0x1be5('0x99')](_0x1be5('0xa1'),[new _0x23a36a(),_0x27d59c]);});_0x23a36a(document)[_0x1be5('0xa6')](function(){_0x49062e['fire']();});}catch(_0x4e82b6){_0x1be5('0x3')!==typeof console&&_0x1be5('0x8')===typeof console[_0x1be5('0x12')]&&console[_0x1be5('0x12')](_0x1be5('0x5b'),_0x4e82b6);}}(this));function qd_number_format(_0x41d97e,_0x532f45,_0x51cc88,_0x229e71){_0x41d97e=(_0x41d97e+'')[_0x1be5('0x1')](/[^0-9+\-Ee.]/g,'');_0x41d97e=isFinite(+_0x41d97e)?+_0x41d97e:0x0;_0x532f45=isFinite(+_0x532f45)?Math[_0x1be5('0x2')](_0x532f45):0x0;_0x229e71=_0x1be5('0x3')===typeof _0x229e71?',':_0x229e71;_0x51cc88=_0x1be5('0x3')===typeof _0x51cc88?'.':_0x51cc88;var _0x56a494='',_0x56a494=function(_0x20d797,_0x491e0f){var _0x1a870c=Math[_0x1be5('0xa7')](0xa,_0x491e0f);return''+(Math[_0x1be5('0x4')](_0x20d797*_0x1a870c)/_0x1a870c)[_0x1be5('0xa8')](_0x491e0f);},_0x56a494=(_0x532f45?_0x56a494(_0x41d97e,_0x532f45):''+Math['round'](_0x41d97e))['split']('.');0x3<_0x56a494[0x0]['length']&&(_0x56a494[0x0]=_0x56a494[0x0]['replace'](/\B(?=(?:\d{3})+(?!\d))/g,_0x229e71));(_0x56a494[0x1]||'')[_0x1be5('0x6')]<_0x532f45&&(_0x56a494[0x1]=_0x56a494[0x1]||'',_0x56a494[0x1]+=Array(_0x532f45-_0x56a494[0x1]['length']+0x1)['join']('0'));return _0x56a494[_0x1be5('0x7')](_0x51cc88);}(function(){try{window[_0x1be5('0x33')]=window[_0x1be5('0x33')]||{},window[_0x1be5('0x33')][_0x1be5('0x3d')]=window[_0x1be5('0x33')][_0x1be5('0x3d')]||$[_0x1be5('0x5f')]();}catch(_0x4ec179){'undefined'!==typeof console&&'function'===typeof console[_0x1be5('0x12')]&&console[_0x1be5('0x12')](_0x1be5('0x5b'),_0x4ec179[_0x1be5('0x1d')]);}}());(function(_0x3e6c6f){try{var _0x4b5a3a=jQuery,_0x9ef9a6=function(_0x290e74,_0x2f00e0){if('object'===typeof console&&_0x1be5('0x3')!==typeof console['error']&&_0x1be5('0x3')!==typeof console['info']&&_0x1be5('0x3')!==typeof console[_0x1be5('0x27')]){var _0x5b010e;_0x1be5('0x13')===typeof _0x290e74?(_0x290e74[_0x1be5('0xa9')](_0x1be5('0xaa')),_0x5b010e=_0x290e74):_0x5b010e=[_0x1be5('0xaa')+_0x290e74];if(_0x1be5('0x3')===typeof _0x2f00e0||_0x1be5('0x26')!==_0x2f00e0[_0x1be5('0xd')]()&&_0x1be5('0x61')!==_0x2f00e0[_0x1be5('0xd')]())if(_0x1be5('0x3')!==typeof _0x2f00e0&&'info'===_0x2f00e0['toLowerCase']())try{console[_0x1be5('0x29')][_0x1be5('0x62')](console,_0x5b010e);}catch(_0x39cc74){try{console[_0x1be5('0x29')](_0x5b010e[_0x1be5('0x7')]('\x0a'));}catch(_0x5bfdd1){}}else try{console[_0x1be5('0x12')][_0x1be5('0x62')](console,_0x5b010e);}catch(_0x2f0f1d){try{console[_0x1be5('0x12')](_0x5b010e['join']('\x0a'));}catch(_0x5614ea){}}else try{console['warn'][_0x1be5('0x62')](console,_0x5b010e);}catch(_0x21f8ae){try{console[_0x1be5('0x27')](_0x5b010e[_0x1be5('0x7')]('\x0a'));}catch(_0x1c8d2a){}}}};window[_0x1be5('0x50')]=window[_0x1be5('0x50')]||{};window[_0x1be5('0x50')][_0x1be5('0x88')]=!0x0;_0x4b5a3a[_0x1be5('0xab')]=function(){};_0x4b5a3a['fn'][_0x1be5('0xab')]=function(){return{'fn':new _0x4b5a3a()};};var _0x2ea048=function(_0x203568){var _0x32a19e={'n':'sevpnanegrfnangb%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe'};return function(_0x16bc7a){var _0x222b77=function(_0x576449){return _0x576449;};var _0x3f5872=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x16bc7a=_0x16bc7a['d'+_0x3f5872[0x10]+'c'+_0x3f5872[0x11]+'m'+_0x222b77(_0x3f5872[0x1])+'n'+_0x3f5872[0xd]]['l'+_0x3f5872[0x12]+'c'+_0x3f5872[0x0]+'ti'+_0x222b77('o')+'n'];var _0x541e73=function(_0x395314){return escape(encodeURIComponent(_0x395314[_0x1be5('0x1')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0x3fdf49){return String[_0x1be5('0xac')](('Z'>=_0x3fdf49?0x5a:0x7a)>=(_0x3fdf49=_0x3fdf49[_0x1be5('0xad')](0x0)+0xd)?_0x3fdf49:_0x3fdf49-0x1a);})));};var _0x3e6c6f=_0x541e73(_0x16bc7a[[_0x3f5872[0x9],_0x222b77('o'),_0x3f5872[0xc],_0x3f5872[_0x222b77(0xd)]][_0x1be5('0x7')]('')]);_0x541e73=_0x541e73((window[['js',_0x222b77('no'),'m',_0x3f5872[0x1],_0x3f5872[0x4][_0x1be5('0xb')](),_0x1be5('0xae')][_0x1be5('0x7')]('')]||_0x1be5('0xaf'))+['.v',_0x3f5872[0xd],'e',_0x222b77('x'),'co',_0x222b77('mm'),_0x1be5('0xb0'),_0x3f5872[0x1],'.c',_0x222b77('o'),'m.',_0x3f5872[0x13],'r'][_0x1be5('0x7')](''));for(var _0x4d4fc9 in _0x32a19e){if(_0x541e73===_0x4d4fc9+_0x32a19e[_0x4d4fc9]||_0x3e6c6f===_0x4d4fc9+_0x32a19e[_0x4d4fc9]){var _0x5bf513='tr'+_0x3f5872[0x11]+'e';break;}_0x5bf513='f'+_0x3f5872[0x0]+'ls'+_0x222b77(_0x3f5872[0x1])+'';}_0x222b77=!0x1;-0x1<_0x16bc7a[[_0x3f5872[0xc],'e',_0x3f5872[0x0],'rc',_0x3f5872[0x9]][_0x1be5('0x7')]('')][_0x1be5('0x8c')](_0x1be5('0xb1'))&&(_0x222b77=!0x0);return[_0x5bf513,_0x222b77];}(_0x203568);}(window);if(!eval(_0x2ea048[0x0]))return _0x2ea048[0x1]?_0x9ef9a6('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;_0x4b5a3a[_0x1be5('0xab')]=function(_0x24d629,_0x100246){var _0x285587=_0x4b5a3a(_0x24d629);if(!_0x285587[_0x1be5('0x6')])return _0x285587;var _0x354f46=_0x4b5a3a[_0x1be5('0x30')](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0x1be5('0xb2'),'linkCheckout':_0x1be5('0xb3'),'cartTotal':'<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','emptyCart':'Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','continueShopping':_0x1be5('0xb4'),'shippingForm':_0x1be5('0xb5')},'timeRemoveNewItemClass':0x1388,'smartCheckout':!0x0,'skuName':function(_0x3f5fe7){return _0x3f5fe7[_0x1be5('0xb6')]||_0x3f5fe7['name'];},'callback':function(){},'callbackProductsList':function(){}},_0x100246);_0x4b5a3a('');var _0x3cb8ef=this;if(_0x354f46[_0x1be5('0x4f')]){var _0x27a521=!0x1;'undefined'===typeof window[_0x1be5('0x51')]&&(_0x9ef9a6('A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN'),_0x4b5a3a['ajax']({'url':_0x1be5('0xb7'),'async':!0x1,'dataType':'script','error':function(){_0x9ef9a6(_0x1be5('0xb8'));_0x27a521=!0x0;}}));if(_0x27a521)return _0x9ef9a6(_0x1be5('0xb9'));}if(_0x1be5('0x13')===typeof window[_0x1be5('0x51')]&&'undefined'!==typeof window[_0x1be5('0x51')]['checkout'])var _0x1fba98=window[_0x1be5('0x51')]['checkout'];else if('object'===typeof vtex&&_0x1be5('0x13')===typeof vtex[_0x1be5('0x23')]&&_0x1be5('0x3')!==typeof vtex[_0x1be5('0x23')][_0x1be5('0x52')])_0x1fba98=new vtex[(_0x1be5('0x23'))][(_0x1be5('0x52'))]();else return _0x9ef9a6(_0x1be5('0xba'));_0x3cb8ef[_0x1be5('0xbb')]='<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>';var _0x5ba08a=function(_0x8cef2e){_0x4b5a3a(this)[_0x1be5('0xbc')](_0x8cef2e);_0x8cef2e[_0x1be5('0x48')](_0x1be5('0xbd'))[_0x1be5('0x2a')](_0x4b5a3a(_0x1be5('0xbe')))['on']('click.qd_ddc_closeFn',function(){_0x285587['removeClass'](_0x1be5('0xbf'));_0x4b5a3a(document['body'])[_0x1be5('0x83')](_0x1be5('0x7f'));});_0x4b5a3a(document)[_0x1be5('0xc0')](_0x1be5('0xc1'))['on'](_0x1be5('0xc1'),function(_0x938b12){0x1b==_0x938b12['keyCode']&&(_0x285587['removeClass'](_0x1be5('0xbf')),_0x4b5a3a(document[_0x1be5('0x66')])[_0x1be5('0x83')](_0x1be5('0x7f')));});var _0xa48d86=_0x8cef2e[_0x1be5('0x48')](_0x1be5('0xc2'));_0x8cef2e['find']('.qd-ddc-scrollUp')['on']('click.qd_ddc_scrollUp',function(){_0x3cb8ef['scrollCart']('-',void 0x0,void 0x0,_0xa48d86);return!0x1;});_0x8cef2e[_0x1be5('0x48')]('.qd-ddc-scrollDown')['on'](_0x1be5('0xc3'),function(){_0x3cb8ef[_0x1be5('0xc4')](void 0x0,void 0x0,void 0x0,_0xa48d86);return!0x1;});_0x8cef2e['find'](_0x1be5('0xc5'))[_0x1be5('0xc6')]('')['on'](_0x1be5('0xc7'),function(){_0x3cb8ef[_0x1be5('0xc8')](_0x4b5a3a(this));});if(_0x354f46[_0x1be5('0xc9')]){var _0x100246=0x0;_0x4b5a3a(this)['on'](_0x1be5('0xca'),function(){var _0x8cef2e=function(){window[_0x1be5('0x50')][_0x1be5('0x88')]&&(_0x3cb8ef[_0x1be5('0x85')](),window[_0x1be5('0x50')][_0x1be5('0x88')]=!0x1,_0x4b5a3a['fn'][_0x1be5('0x21')](!0x0),_0x3cb8ef['cartIsEmpty']());};_0x100246=setInterval(function(){_0x8cef2e();},0x258);_0x8cef2e();});_0x4b5a3a(this)['on'](_0x1be5('0xcb'),function(){clearInterval(_0x100246);});}};var _0x2f76b4=function(_0x5575ec){_0x5575ec=_0x4b5a3a(_0x5575ec);_0x354f46[_0x1be5('0xcc')][_0x1be5('0x4a')]=_0x354f46[_0x1be5('0xcc')]['cartTotal'][_0x1be5('0x1')]('#value',_0x1be5('0xcd'));_0x354f46[_0x1be5('0xcc')][_0x1be5('0x4a')]=_0x354f46[_0x1be5('0xcc')][_0x1be5('0x4a')][_0x1be5('0x1')](_0x1be5('0xce'),_0x1be5('0xcf'));_0x354f46[_0x1be5('0xcc')][_0x1be5('0x4a')]=_0x354f46[_0x1be5('0xcc')][_0x1be5('0x4a')][_0x1be5('0x1')](_0x1be5('0xd0'),_0x1be5('0xd1'));_0x354f46['texts'][_0x1be5('0x4a')]=_0x354f46[_0x1be5('0xcc')][_0x1be5('0x4a')]['replace'](_0x1be5('0xd2'),_0x1be5('0xd3'));_0x5575ec[_0x1be5('0x48')]('.qd-ddc-viewCart')[_0x1be5('0x46')](_0x354f46[_0x1be5('0xcc')][_0x1be5('0xd4')]);_0x5575ec[_0x1be5('0x48')](_0x1be5('0xd5'))[_0x1be5('0x46')](_0x354f46[_0x1be5('0xcc')][_0x1be5('0xd6')]);_0x5575ec[_0x1be5('0x48')]('.qd-ddc-checkout')['html'](_0x354f46[_0x1be5('0xcc')][_0x1be5('0xd7')]);_0x5575ec[_0x1be5('0x48')](_0x1be5('0xd8'))[_0x1be5('0x46')](_0x354f46['texts'][_0x1be5('0x4a')]);_0x5575ec[_0x1be5('0x48')](_0x1be5('0xd9'))['html'](_0x354f46['texts']['shippingForm']);_0x5575ec[_0x1be5('0x48')](_0x1be5('0xda'))['html'](_0x354f46[_0x1be5('0xcc')]['emptyCart']);return _0x5575ec;}(this['cartContainer']);var _0x7162e8=0x0;_0x285587[_0x1be5('0x31')](function(){0x0<_0x7162e8?_0x5ba08a[_0x1be5('0x24')](this,_0x2f76b4[_0x1be5('0xdb')]()):_0x5ba08a['call'](this,_0x2f76b4);_0x7162e8++;});window[_0x1be5('0x33')][_0x1be5('0x3d')][_0x1be5('0x2a')](function(){_0x4b5a3a('.qd-ddc-infoTotalValue')[_0x1be5('0x46')](window[_0x1be5('0x33')][_0x1be5('0x37')]||'--');_0x4b5a3a('.qd-ddc-infoTotalItems')['html'](window[_0x1be5('0x33')]['qtt']||'0');_0x4b5a3a(_0x1be5('0xdc'))[_0x1be5('0x46')](window[_0x1be5('0x33')][_0x1be5('0xdd')]||'--');_0x4b5a3a(_0x1be5('0xde'))['html'](window['_QuatroDigital_CartData']['allTotal']||'--');});var _0x2fd1eb=function(_0x49b127,_0x228735){if(_0x1be5('0x3')===typeof _0x49b127[_0x1be5('0x3b')])return _0x9ef9a6(_0x1be5('0xdf'));_0x3cb8ef[_0x1be5('0xe0')]['call'](this,_0x228735);};_0x3cb8ef['getCartInfoByUrl']=function(_0xf3deee,_0x19bdd7){_0x1be5('0x3')!=typeof _0x19bdd7?window[_0x1be5('0x50')][_0x1be5('0xe1')]=_0x19bdd7:window[_0x1be5('0x50')][_0x1be5('0xe1')]&&(_0x19bdd7=window['_QuatroDigital_DropDown'][_0x1be5('0xe1')]);setTimeout(function(){window['_QuatroDigital_DropDown'][_0x1be5('0xe1')]=void 0x0;},_0x354f46[_0x1be5('0x84')]);_0x4b5a3a(_0x1be5('0xe2'))[_0x1be5('0x83')](_0x1be5('0xe3'));if(_0x354f46['smartCheckout']){var _0x100246=function(_0xe6c911){window[_0x1be5('0x50')][_0x1be5('0x22')]=_0xe6c911;_0x2fd1eb(_0xe6c911,_0x19bdd7);'undefined'!==typeof window[_0x1be5('0xe4')]&&_0x1be5('0x8')===typeof window['_QuatroDigital_AmountProduct'][_0x1be5('0xe5')]&&window[_0x1be5('0xe4')]['exec'][_0x1be5('0x24')](this);_0x4b5a3a(_0x1be5('0xe2'))[_0x1be5('0x4e')](_0x1be5('0xe3'));};_0x1be5('0x3')!==typeof window[_0x1be5('0x50')][_0x1be5('0x22')]?(_0x100246(window[_0x1be5('0x50')][_0x1be5('0x22')]),_0x1be5('0x8')===typeof _0xf3deee&&_0xf3deee(window[_0x1be5('0x50')][_0x1be5('0x22')])):_0x4b5a3a['QD_checkoutQueue'](['items',_0x1be5('0x34'),'shippingData'],{'done':function(_0x325c30){_0x100246['call'](this,_0x325c30);'function'===typeof _0xf3deee&&_0xf3deee(_0x325c30);},'fail':function(_0x596a7b){_0x9ef9a6(['Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho',_0x596a7b]);}});}else alert(_0x1be5('0xe6'));};_0x3cb8ef['cartIsEmpty']=function(){var _0x3575bc=_0x4b5a3a('.qd-ddc-wrapper');_0x3575bc['find']('.qd-ddc-prodRow')[_0x1be5('0x6')]?_0x3575bc[_0x1be5('0x83')](_0x1be5('0xe7')):_0x3575bc[_0x1be5('0x4e')](_0x1be5('0xe7'));};_0x3cb8ef[_0x1be5('0xe0')]=function(_0x5a911a){var _0x100246=_0x4b5a3a(_0x1be5('0xe8'));_0x100246[_0x1be5('0xe9')]();_0x100246[_0x1be5('0x31')](function(){var _0x100246=_0x4b5a3a(this),_0x24d629,_0x4a0e5d,_0xf824fd=_0x4b5a3a(''),_0x432f7b;for(_0x432f7b in window[_0x1be5('0x50')]['getOrderForm'][_0x1be5('0x3b')])if(_0x1be5('0x13')===typeof window[_0x1be5('0x50')]['getOrderForm']['items'][_0x432f7b]){var _0x439dd2=window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x3b')][_0x432f7b];var _0x10ac03=_0x439dd2[_0x1be5('0xea')][_0x1be5('0x1')](/^\/|\/$/g,'')[_0x1be5('0x5')]('/');var _0x18e9b1=_0x4b5a3a(_0x1be5('0xeb'));_0x18e9b1['attr']({'data-sku':_0x439dd2['id'],'data-sku-index':_0x432f7b,'data-qd-departament':_0x10ac03[0x0],'data-qd-category':_0x10ac03[_0x10ac03[_0x1be5('0x6')]-0x1]});_0x18e9b1[_0x1be5('0x4e')](_0x1be5('0xec')+_0x439dd2[_0x1be5('0xed')]);_0x18e9b1['find'](_0x1be5('0xee'))[_0x1be5('0xbc')](_0x354f46[_0x1be5('0xb6')](_0x439dd2));_0x18e9b1[_0x1be5('0x48')](_0x1be5('0xef'))['append'](isNaN(_0x439dd2['sellingPrice'])?_0x439dd2[_0x1be5('0xf0')]:0x0==_0x439dd2[_0x1be5('0xf0')]?_0x1be5('0xf1'):(_0x4b5a3a(_0x1be5('0x2d'))[_0x1be5('0x2e')](_0x1be5('0x2f'))||'R$')+'\x20'+qd_number_format(_0x439dd2[_0x1be5('0xf0')]/0x64,0x2,',','.'));_0x18e9b1[_0x1be5('0x48')]('.qd-ddc-quantity')[_0x1be5('0x2e')]({'data-sku':_0x439dd2['id'],'data-sku-index':_0x432f7b})[_0x1be5('0xc6')](_0x439dd2[_0x1be5('0x3c')]);_0x18e9b1[_0x1be5('0x48')]('.qd-ddc-remove')[_0x1be5('0x2e')]({'data-sku':_0x439dd2['id'],'data-sku-index':_0x432f7b});_0x3cb8ef[_0x1be5('0xf2')](_0x439dd2['id'],_0x18e9b1['find'](_0x1be5('0xf3')),_0x439dd2[_0x1be5('0xf4')]);_0x18e9b1[_0x1be5('0x48')](_0x1be5('0xf5'))[_0x1be5('0x2e')]({'data-sku':_0x439dd2['id'],'data-sku-index':_0x432f7b});_0x18e9b1[_0x1be5('0xf6')](_0x100246);_0xf824fd=_0xf824fd[_0x1be5('0x2a')](_0x18e9b1);}try{var _0x3df757=_0x100246['getParent'](_0x1be5('0xe2'))[_0x1be5('0x48')](_0x1be5('0xc5'));_0x3df757[_0x1be5('0x6')]&&''==_0x3df757[_0x1be5('0xc6')]()&&window[_0x1be5('0x50')]['getOrderForm'][_0x1be5('0x54')][_0x1be5('0xf7')]&&_0x3df757[_0x1be5('0xc6')](window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x54')]['address'][_0x1be5('0xf8')]);}catch(_0x492910){_0x9ef9a6(_0x1be5('0xf9')+_0x492910[_0x1be5('0x1d')],'aviso');}_0x3cb8ef[_0x1be5('0xfa')](_0x100246);_0x3cb8ef['cartIsEmpty']();_0x5a911a&&_0x5a911a[_0x1be5('0xfb')]&&function(){_0x4a0e5d=_0xf824fd[_0x1be5('0x40')](_0x1be5('0xfc')+_0x5a911a[_0x1be5('0xfb')]+'\x27]');_0x4a0e5d[_0x1be5('0x6')]&&(_0x24d629=0x0,_0xf824fd[_0x1be5('0x31')](function(){var _0x5a911a=_0x4b5a3a(this);if(_0x5a911a['is'](_0x4a0e5d))return!0x1;_0x24d629+=_0x5a911a[_0x1be5('0xfd')]();}),_0x3cb8ef[_0x1be5('0xc4')](void 0x0,void 0x0,_0x24d629,_0x100246[_0x1be5('0x2a')](_0x100246[_0x1be5('0x9b')]())),_0xf824fd[_0x1be5('0x83')](_0x1be5('0xfe')),function(_0x49f962){_0x49f962['addClass'](_0x1be5('0xff'));_0x49f962[_0x1be5('0x4e')](_0x1be5('0xfe'));setTimeout(function(){_0x49f962[_0x1be5('0x83')](_0x1be5('0xff'));},_0x354f46['timeRemoveNewItemClass']);}(_0x4a0e5d));}();});(function(){_QuatroDigital_DropDown[_0x1be5('0x22')][_0x1be5('0x3b')]['length']?(_0x4b5a3a(_0x1be5('0x66'))[_0x1be5('0x83')](_0x1be5('0x100'))[_0x1be5('0x4e')](_0x1be5('0x101')),setTimeout(function(){_0x4b5a3a(_0x1be5('0x66'))[_0x1be5('0x83')]('qd-ddc-product-add-time');},_0x354f46['timeRemoveNewItemClass'])):_0x4b5a3a(_0x1be5('0x66'))[_0x1be5('0x83')]('qd-ddc-cart-rendered')['addClass'](_0x1be5('0x100'));}());_0x1be5('0x8')===typeof _0x354f46[_0x1be5('0x102')]?_0x354f46[_0x1be5('0x102')][_0x1be5('0x24')](this):_0x9ef9a6(_0x1be5('0x103'));};_0x3cb8ef[_0x1be5('0xf2')]=function(_0x188898,_0x51c821,_0x148326){function _0x502ff3(){_0x51c821[_0x1be5('0x83')]('qd-loaded')['load'](function(){_0x4b5a3a(this)[_0x1be5('0x4e')](_0x1be5('0x104'));})[_0x1be5('0x2e')](_0x1be5('0x105'),_0x148326);}_0x148326?_0x502ff3():isNaN(_0x188898)?_0x9ef9a6(_0x1be5('0x106'),_0x1be5('0x26')):alert(_0x1be5('0x107'));};_0x3cb8ef['actionButtons']=function(_0x15526e){var _0x36e8fe=function(_0x2dd6e8,_0x30bb80){var _0x100246=_0x4b5a3a(_0x2dd6e8);var _0xb6b510=_0x100246[_0x1be5('0x2e')](_0x1be5('0x108'));var _0x24d629=_0x100246[_0x1be5('0x2e')](_0x1be5('0x109'));if(_0xb6b510){var _0x3df5db=parseInt(_0x100246[_0x1be5('0xc6')]())||0x1;_0x3cb8ef['changeQantity']([_0xb6b510,_0x24d629],_0x3df5db,_0x3df5db+0x1,function(_0x95726f){_0x100246[_0x1be5('0xc6')](_0x95726f);_0x1be5('0x8')===typeof _0x30bb80&&_0x30bb80();});}};var _0x100246=function(_0x4c0848,_0x39d66c){var _0x100246=_0x4b5a3a(_0x4c0848);var _0x11d6a3=_0x100246[_0x1be5('0x2e')](_0x1be5('0x108'));var _0x24d629=_0x100246[_0x1be5('0x2e')]('data-sku-index');if(_0x11d6a3){var _0x15e2f3=parseInt(_0x100246['val']())||0x2;_0x3cb8ef[_0x1be5('0x10a')]([_0x11d6a3,_0x24d629],_0x15e2f3,_0x15e2f3-0x1,function(_0x5a9104){_0x100246[_0x1be5('0xc6')](_0x5a9104);_0x1be5('0x8')===typeof _0x39d66c&&_0x39d66c();});}};var _0x1fe9bd=function(_0x11b058,_0x5b9e84){var _0x100246=_0x4b5a3a(_0x11b058);var _0x3f1118=_0x100246[_0x1be5('0x2e')]('data-sku');var _0x24d629=_0x100246[_0x1be5('0x2e')](_0x1be5('0x109'));if(_0x3f1118){var _0x38c73d=parseInt(_0x100246['val']())||0x1;_0x3cb8ef[_0x1be5('0x10a')]([_0x3f1118,_0x24d629],0x1,_0x38c73d,function(_0x478134){_0x100246[_0x1be5('0xc6')](_0x478134);'function'===typeof _0x5b9e84&&_0x5b9e84();});}};var _0x24d629=_0x15526e[_0x1be5('0x48')](_0x1be5('0x10b'));_0x24d629[_0x1be5('0x4e')]('qd_on')['each'](function(){var _0x15526e=_0x4b5a3a(this);_0x15526e['find'](_0x1be5('0x10c'))['on'](_0x1be5('0x10d'),function(_0x4e214b){_0x4e214b[_0x1be5('0x70')]();_0x24d629[_0x1be5('0x4e')]('qd-loading');_0x36e8fe(_0x15526e[_0x1be5('0x48')](_0x1be5('0x10e')),function(){_0x24d629[_0x1be5('0x83')]('qd-loading');});});_0x15526e[_0x1be5('0x48')]('.qd-ddc-quantityMinus')['on'](_0x1be5('0x10f'),function(_0x493d2e){_0x493d2e[_0x1be5('0x70')]();_0x24d629[_0x1be5('0x4e')](_0x1be5('0x110'));_0x100246(_0x15526e[_0x1be5('0x48')]('.qd-ddc-quantity'),function(){_0x24d629[_0x1be5('0x83')](_0x1be5('0x110'));});});_0x15526e[_0x1be5('0x48')]('.qd-ddc-quantity')['on'](_0x1be5('0x111'),function(){_0x24d629[_0x1be5('0x4e')](_0x1be5('0x110'));_0x1fe9bd(this,function(){_0x24d629[_0x1be5('0x83')](_0x1be5('0x110'));});});_0x15526e['find'](_0x1be5('0x10e'))['on'](_0x1be5('0x112'),function(_0x330f01){0xd==_0x330f01[_0x1be5('0x113')]&&(_0x24d629[_0x1be5('0x4e')]('qd-loading'),_0x1fe9bd(this,function(){_0x24d629['removeClass']('qd-loading');}));});});_0x15526e['find']('.qd-ddc-prodRow')[_0x1be5('0x31')](function(){var _0x15526e=_0x4b5a3a(this);_0x15526e[_0x1be5('0x48')](_0x1be5('0x114'))['on'](_0x1be5('0x115'),function(){_0x15526e[_0x1be5('0x4e')](_0x1be5('0x110'));_0x3cb8ef['removeProduct'](_0x4b5a3a(this),function(_0x1cf809){_0x1cf809?_0x15526e['stop'](!0x0)[_0x1be5('0x116')](function(){_0x15526e[_0x1be5('0x117')]();_0x3cb8ef['cartIsEmpty']();}):_0x15526e[_0x1be5('0x83')]('qd-loading');});return!0x1;});});};_0x3cb8ef['shippingCalculate']=function(_0x46ab75){var _0x20d79a=_0x46ab75[_0x1be5('0xc6')](),_0x20d79a=_0x20d79a[_0x1be5('0x1')](/[^0-9\-]/g,''),_0x20d79a=_0x20d79a[_0x1be5('0x1')](/([0-9]{5})\-?([0-9])([0-9]{2})?/g,'$1-$2$3'),_0x20d79a=_0x20d79a['replace'](/(.{9}).*/g,'$1');_0x46ab75[_0x1be5('0xc6')](_0x20d79a);0x9<=_0x20d79a['length']&&(_0x46ab75['data']('qdDdcLastPostalCode')!=_0x20d79a&&_0x1fba98[_0x1be5('0x118')]({'postalCode':_0x20d79a,'country':_0x1be5('0x119')})[_0x1be5('0x18')](function(_0x582367){window['_QuatroDigital_DropDown']['getOrderForm']=_0x582367;_0x3cb8ef['getCartInfoByUrl']();})['fail'](function(_0x2cc411){_0x9ef9a6(['Não\x20foi\x20possível\x20calcular\x20o\x20frete',_0x2cc411]);updateCartData();}),_0x46ab75[_0x1be5('0x14')]('qdDdcLastPostalCode',_0x20d79a));};_0x3cb8ef['changeQantity']=function(_0x57060b,_0x23c6d2,_0x486e9a,_0x369012){function _0x22fcb6(_0x564c1c){_0x564c1c=_0x1be5('0x11a')!==typeof _0x564c1c?!0x1:_0x564c1c;_0x3cb8ef[_0x1be5('0x85')]();window[_0x1be5('0x50')][_0x1be5('0x88')]=!0x1;_0x3cb8ef[_0x1be5('0x11b')]();_0x1be5('0x3')!==typeof window[_0x1be5('0xe4')]&&_0x1be5('0x8')===typeof window[_0x1be5('0xe4')][_0x1be5('0xe5')]&&window['_QuatroDigital_AmountProduct']['exec'][_0x1be5('0x24')](this);_0x1be5('0x8')===typeof adminCart&&adminCart();_0x4b5a3a['fn']['simpleCart'](!0x0,void 0x0,_0x564c1c);'function'===typeof _0x369012&&_0x369012(_0x23c6d2);}_0x486e9a=_0x486e9a||0x1;if(0x1>_0x486e9a)return _0x23c6d2;if(_0x354f46['smartCheckout']){if(_0x1be5('0x3')===typeof window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x3b')][_0x57060b[0x1]])return _0x9ef9a6(_0x1be5('0x11c')+_0x57060b[0x1]+']'),_0x23c6d2;window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x3b')][_0x57060b[0x1]][_0x1be5('0x3c')]=_0x486e9a;window['_QuatroDigital_DropDown']['getOrderForm']['items'][_0x57060b[0x1]][_0x1be5('0x11d')]=_0x57060b[0x1];_0x1fba98[_0x1be5('0x11e')]([window[_0x1be5('0x50')][_0x1be5('0x22')]['items'][_0x57060b[0x1]]],[_0x1be5('0x3b'),_0x1be5('0x34'),_0x1be5('0x54')])[_0x1be5('0x18')](function(_0x5088e0){window[_0x1be5('0x50')][_0x1be5('0x22')]=_0x5088e0;_0x22fcb6(!0x0);})[_0x1be5('0x5e')](function(_0x596059){_0x9ef9a6([_0x1be5('0x11f'),_0x596059]);_0x22fcb6();});}else _0x9ef9a6(_0x1be5('0x120'));};_0x3cb8ef['removeProduct']=function(_0x33f4bd,_0x22c614){function _0x468a04(_0x506a8d){_0x506a8d=_0x1be5('0x11a')!==typeof _0x506a8d?!0x1:_0x506a8d;_0x1be5('0x3')!==typeof window['_QuatroDigital_AmountProduct']&&_0x1be5('0x8')===typeof window[_0x1be5('0xe4')][_0x1be5('0xe5')]&&window[_0x1be5('0xe4')][_0x1be5('0xe5')][_0x1be5('0x24')](this);_0x1be5('0x8')===typeof adminCart&&adminCart();_0x4b5a3a['fn'][_0x1be5('0x21')](!0x0,void 0x0,_0x506a8d);_0x1be5('0x8')===typeof _0x22c614&&_0x22c614(_0x24d629);}var _0x24d629=!0x1,_0x376107=_0x4b5a3a(_0x33f4bd)[_0x1be5('0x2e')](_0x1be5('0x109'));if(_0x354f46[_0x1be5('0x4f')]){if(_0x1be5('0x3')===typeof window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x3b')][_0x376107])return _0x9ef9a6(_0x1be5('0x11c')+_0x376107+']'),_0x24d629;window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x3b')][_0x376107][_0x1be5('0x11d')]=_0x376107;_0x1fba98[_0x1be5('0x121')]([window[_0x1be5('0x50')]['getOrderForm'][_0x1be5('0x3b')][_0x376107]],['items',_0x1be5('0x34'),_0x1be5('0x54')])[_0x1be5('0x18')](function(_0x1d48c7){_0x24d629=!0x0;window[_0x1be5('0x50')][_0x1be5('0x22')]=_0x1d48c7;_0x2fd1eb(_0x1d48c7);_0x468a04(!0x0);})[_0x1be5('0x5e')](function(_0x233017){_0x9ef9a6([_0x1be5('0x122'),_0x233017]);_0x468a04();});}else alert(_0x1be5('0x123'));};_0x3cb8ef[_0x1be5('0xc4')]=function(_0x40d61c,_0x4ad6f1,_0x58e9fa,_0x5fdeda){_0x5fdeda=_0x5fdeda||_0x4b5a3a(_0x1be5('0x124'));_0x40d61c=_0x40d61c||'+';_0x4ad6f1=_0x4ad6f1||0.9*_0x5fdeda[_0x1be5('0x125')]();_0x5fdeda[_0x1be5('0x126')](!0x0,!0x0)[_0x1be5('0x127')]({'scrollTop':isNaN(_0x58e9fa)?_0x40d61c+'='+_0x4ad6f1+'px':_0x58e9fa});};_0x354f46[_0x1be5('0xc9')]||(_0x3cb8ef[_0x1be5('0x85')](),_0x4b5a3a['fn'][_0x1be5('0x21')](!0x0));_0x4b5a3a(window)['on'](_0x1be5('0x128'),function(){try{window[_0x1be5('0x50')][_0x1be5('0x22')]=void 0x0,_0x3cb8ef['getCartInfoByUrl']();}catch(_0x48bf10){_0x9ef9a6(_0x1be5('0x129')+_0x48bf10['message'],_0x1be5('0x12a'));}});'function'===typeof _0x354f46['callback']?_0x354f46[_0x1be5('0x3d')][_0x1be5('0x24')](this):_0x9ef9a6(_0x1be5('0x9d'));};_0x4b5a3a['fn']['QD_dropDownCart']=function(_0x2e8f0f){var _0x1c9e07=_0x4b5a3a(this);_0x1c9e07['fn']=new _0x4b5a3a['QD_dropDownCart'](this,_0x2e8f0f);return _0x1c9e07;};}catch(_0x1f1a8b){'undefined'!==typeof console&&_0x1be5('0x8')===typeof console[_0x1be5('0x12')]&&console[_0x1be5('0x12')](_0x1be5('0x5b'),_0x1f1a8b);}}(this));(function(_0x10b43a){try{var _0x4665af=jQuery;window[_0x1be5('0xe4')]=window[_0x1be5('0xe4')]||{};window[_0x1be5('0xe4')][_0x1be5('0x3b')]={};window[_0x1be5('0xe4')][_0x1be5('0x12b')]=!0x1;window[_0x1be5('0xe4')][_0x1be5('0x12c')]=!0x1;window[_0x1be5('0xe4')][_0x1be5('0x12d')]=!0x1;var _0x4e918f=function(){if(window[_0x1be5('0xe4')][_0x1be5('0x12b')]){var _0x52b0e3=!0x1;var _0x10b43a={};window[_0x1be5('0xe4')][_0x1be5('0x3b')]={};for(_0x25d1da in window[_0x1be5('0x50')][_0x1be5('0x22')]['items'])if(_0x1be5('0x13')===typeof window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x3b')][_0x25d1da]){var _0x50aa10=window[_0x1be5('0x50')][_0x1be5('0x22')][_0x1be5('0x3b')][_0x25d1da];_0x1be5('0x3')!==typeof _0x50aa10[_0x1be5('0x12e')]&&null!==_0x50aa10[_0x1be5('0x12e')]&&''!==_0x50aa10[_0x1be5('0x12e')]&&(window['_QuatroDigital_AmountProduct'][_0x1be5('0x3b')]['prod_'+_0x50aa10[_0x1be5('0x12e')]]=window[_0x1be5('0xe4')][_0x1be5('0x3b')][_0x1be5('0x12f')+_0x50aa10[_0x1be5('0x12e')]]||{},window['_QuatroDigital_AmountProduct'][_0x1be5('0x3b')]['prod_'+_0x50aa10[_0x1be5('0x12e')]][_0x1be5('0x130')]=_0x50aa10['productId'],_0x10b43a[_0x1be5('0x12f')+_0x50aa10['productId']]||(window['_QuatroDigital_AmountProduct'][_0x1be5('0x3b')][_0x1be5('0x12f')+_0x50aa10[_0x1be5('0x12e')]][_0x1be5('0x39')]=0x0),window[_0x1be5('0xe4')]['items'][_0x1be5('0x12f')+_0x50aa10[_0x1be5('0x12e')]][_0x1be5('0x39')]+=_0x50aa10[_0x1be5('0x3c')],_0x52b0e3=!0x0,_0x10b43a['prod_'+_0x50aa10[_0x1be5('0x12e')]]=!0x0);}var _0x25d1da=_0x52b0e3;}else _0x25d1da=void 0x0;window[_0x1be5('0xe4')]['allowRecalculate']&&(_0x4665af(_0x1be5('0x131'))[_0x1be5('0x117')](),_0x4665af(_0x1be5('0x132'))[_0x1be5('0x83')]('qd-bap-item-added'));for(var _0x1737bd in window['_QuatroDigital_AmountProduct'][_0x1be5('0x3b')]){_0x50aa10=window['_QuatroDigital_AmountProduct']['items'][_0x1737bd];if('object'!==typeof _0x50aa10)return;_0x10b43a=_0x4665af(_0x1be5('0x133')+_0x50aa10[_0x1be5('0x130')]+']')[_0x1be5('0x0')]('li');if(window[_0x1be5('0xe4')][_0x1be5('0x12b')]||!_0x10b43a[_0x1be5('0x48')](_0x1be5('0x131'))['length'])_0x52b0e3=_0x4665af(_0x1be5('0x134')),_0x52b0e3['find'](_0x1be5('0x135'))[_0x1be5('0x46')](_0x50aa10[_0x1be5('0x39')]),_0x50aa10=_0x10b43a['find'](_0x1be5('0x136')),_0x50aa10[_0x1be5('0x6')]?_0x50aa10[_0x1be5('0x9f')](_0x52b0e3)[_0x1be5('0x4e')](_0x1be5('0x137')):_0x10b43a[_0x1be5('0x9f')](_0x52b0e3);}_0x25d1da&&(window['_QuatroDigital_AmountProduct'][_0x1be5('0x12b')]=!0x1);};window[_0x1be5('0xe4')][_0x1be5('0xe5')]=function(){window['_QuatroDigital_AmountProduct'][_0x1be5('0x12b')]=!0x0;_0x4e918f['call'](this);};_0x4665af(document)[_0x1be5('0xa6')](function(){_0x4e918f['call'](this);});}catch(_0x29f4cc){'undefined'!==typeof console&&_0x1be5('0x8')===typeof console[_0x1be5('0x12')]&&console[_0x1be5('0x12')](_0x1be5('0x5b'),_0x29f4cc);}}(this));(function(){try{var _0x22ee7a=jQuery,_0x41f243,_0x180e17={'selector':_0x1be5('0x138'),'dropDown':{},'buyButton':{}};_0x22ee7a[_0x1be5('0x139')]=function(_0x30c041){var _0xfb443a={};_0x41f243=_0x22ee7a[_0x1be5('0x30')](!0x0,{},_0x180e17,_0x30c041);_0x30c041=_0x22ee7a(_0x41f243[_0x1be5('0x7b')])[_0x1be5('0xab')](_0x41f243[_0x1be5('0x13a')]);_0xfb443a[_0x1be5('0x71')]='undefined'!==typeof _0x41f243[_0x1be5('0x13a')][_0x1be5('0xc9')]&&!0x1===_0x41f243[_0x1be5('0x13a')][_0x1be5('0xc9')]?_0x22ee7a(_0x41f243[_0x1be5('0x7b')])[_0x1be5('0x6c')](_0x30c041['fn'],_0x41f243[_0x1be5('0x71')]):_0x22ee7a(_0x41f243[_0x1be5('0x7b')])[_0x1be5('0x6c')](_0x41f243[_0x1be5('0x71')]);_0xfb443a[_0x1be5('0x13a')]=_0x30c041;return _0xfb443a;};_0x22ee7a['fn']['smartCart']=function(){_0x1be5('0x13')===typeof console&&_0x1be5('0x8')===typeof console[_0x1be5('0x29')]&&console[_0x1be5('0x29')](_0x1be5('0x13b'));};_0x22ee7a[_0x1be5('0x13c')]=_0x22ee7a['fn'][_0x1be5('0x13c')];}catch(_0x2da51e){_0x1be5('0x3')!==typeof console&&_0x1be5('0x8')===typeof console[_0x1be5('0x12')]&&console['error'](_0x1be5('0x5b'),_0x2da51e);}}());
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
var _0x7096=['qd-am-li-','first','addClass','last','qd-am-last','sevpnanegrfnangb%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','toUpperCase','---','erc','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','.qd_am_code','filter','.qd-am-banner','length','parent','url','html','find','img[alt=\x27','data-qdam-value','clone','insertBefore','hide','trim','attr','[class*=\x27colunas\x27]','qd-am-content-loaded','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','ajaxCallback','trigger','QuatroDigital.am.ajaxCallback','ul[itemscope]','UL\x20do\x20menu\x20não\x20encontrada','li\x20>ul','qd-am-has-ul','children',':not(ul)','replaceSpecialChars','>li','qdAmAddNdx','qd-amazing-menu','qd-am-column','qd-am-dropdown','qd-am-level-','add','-li','callback','call','QuatroDigital.am.callback','extend','exec','.qd_amazing_menu_auto','getParent','function','QD_amazingMenu','/qd-amazing-menu','object','undefined','error','info','unshift','[QD\x20Amazing\x20Menu]\x0a','aviso','toLowerCase','apply','join','warn','each'];(function(_0x4bcbc2,_0x46cbff){var _0xe5b888=function(_0xd3a99d){while(--_0xd3a99d){_0x4bcbc2['push'](_0x4bcbc2['shift']());}};_0xe5b888(++_0x46cbff);}(_0x7096,0x10c));var _0x6709=function(_0x3b380d,_0x4bf247){_0x3b380d=_0x3b380d-0x0;var _0x54502b=_0x7096[_0x3b380d];return _0x54502b;};(function(_0x442821){_0x442821['fn'][_0x6709('0x0')]=_0x442821['fn']['closest'];}(jQuery));(function(_0x253760){var _0x5c668a;var _0x233cbf=jQuery;if(_0x6709('0x1')!==typeof _0x233cbf['fn'][_0x6709('0x2')]){var _0xccdcb5={'url':_0x6709('0x3'),'callback':function(){},'ajaxCallback':function(){}};var _0x3c8599=function(_0xb8fe6d,_0x9d630f){if(_0x6709('0x4')===typeof console&&_0x6709('0x5')!==typeof console[_0x6709('0x6')]&&_0x6709('0x5')!==typeof console[_0x6709('0x7')]&&'undefined'!==typeof console['warn']){var _0x2c07b1;_0x6709('0x4')===typeof _0xb8fe6d?(_0xb8fe6d[_0x6709('0x8')](_0x6709('0x9')),_0x2c07b1=_0xb8fe6d):_0x2c07b1=[_0x6709('0x9')+_0xb8fe6d];if(_0x6709('0x5')===typeof _0x9d630f||'alerta'!==_0x9d630f['toLowerCase']()&&_0x6709('0xa')!==_0x9d630f[_0x6709('0xb')]())if(_0x6709('0x5')!==typeof _0x9d630f&&_0x6709('0x7')===_0x9d630f[_0x6709('0xb')]())try{console[_0x6709('0x7')][_0x6709('0xc')](console,_0x2c07b1);}catch(_0x1ac547){try{console['info'](_0x2c07b1[_0x6709('0xd')]('\x0a'));}catch(_0xf59b6e){}}else try{console[_0x6709('0x6')][_0x6709('0xc')](console,_0x2c07b1);}catch(_0x4e4587){try{console[_0x6709('0x6')](_0x2c07b1['join']('\x0a'));}catch(_0x41af1f){}}else try{console['warn'][_0x6709('0xc')](console,_0x2c07b1);}catch(_0x28866a){try{console[_0x6709('0xe')](_0x2c07b1[_0x6709('0xd')]('\x0a'));}catch(_0x4cab30){}}}};_0x233cbf['fn']['qdAmAddNdx']=function(){var _0x5c4f94=_0x233cbf(this);_0x5c4f94[_0x6709('0xf')](function(_0x235a54){_0x233cbf(this)['addClass'](_0x6709('0x10')+_0x235a54);});_0x5c4f94[_0x6709('0x11')]()[_0x6709('0x12')]('qd-am-first');_0x5c4f94[_0x6709('0x13')]()[_0x6709('0x12')](_0x6709('0x14'));return _0x5c4f94;};_0x233cbf['fn'][_0x6709('0x2')]=function(){};_0x253760=function(_0x5485d7){var _0x3c4971={'n':_0x6709('0x15')};return function(_0x373047){var _0x3cf882=function(_0x78f61a){return _0x78f61a;};var _0x224e8a=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x373047=_0x373047['d'+_0x224e8a[0x10]+'c'+_0x224e8a[0x11]+'m'+_0x3cf882(_0x224e8a[0x1])+'n'+_0x224e8a[0xd]]['l'+_0x224e8a[0x12]+'c'+_0x224e8a[0x0]+'ti'+_0x3cf882('o')+'n'];var _0x45921e=function(_0x17763d){return escape(encodeURIComponent(_0x17763d[_0x6709('0x16')](/\./g,'¨')[_0x6709('0x16')](/[a-zA-Z]/g,function(_0x2f3415){return String[_0x6709('0x17')](('Z'>=_0x2f3415?0x5a:0x7a)>=(_0x2f3415=_0x2f3415['charCodeAt'](0x0)+0xd)?_0x2f3415:_0x2f3415-0x1a);})));};var _0x29f25f=_0x45921e(_0x373047[[_0x224e8a[0x9],_0x3cf882('o'),_0x224e8a[0xc],_0x224e8a[_0x3cf882(0xd)]][_0x6709('0xd')]('')]);_0x45921e=_0x45921e((window[['js',_0x3cf882('no'),'m',_0x224e8a[0x1],_0x224e8a[0x4][_0x6709('0x18')](),'ite'][_0x6709('0xd')]('')]||_0x6709('0x19'))+['.v',_0x224e8a[0xd],'e',_0x3cf882('x'),'co',_0x3cf882('mm'),_0x6709('0x1a'),_0x224e8a[0x1],'.c',_0x3cf882('o'),'m.',_0x224e8a[0x13],'r'][_0x6709('0xd')](''));for(var _0x588e00 in _0x3c4971){if(_0x45921e===_0x588e00+_0x3c4971[_0x588e00]||_0x29f25f===_0x588e00+_0x3c4971[_0x588e00]){var _0x241428='tr'+_0x224e8a[0x11]+'e';break;}_0x241428='f'+_0x224e8a[0x0]+'ls'+_0x3cf882(_0x224e8a[0x1])+'';}_0x3cf882=!0x1;-0x1<_0x373047[[_0x224e8a[0xc],'e',_0x224e8a[0x0],'rc',_0x224e8a[0x9]][_0x6709('0xd')]('')]['indexOf'](_0x6709('0x1b'))&&(_0x3cf882=!0x0);return[_0x241428,_0x3cf882];}(_0x5485d7);}(window);if(!eval(_0x253760[0x0]))return _0x253760[0x1]?_0x3c8599(_0x6709('0x1c')):!0x1;var _0x5dbb87=function(_0x444b0e){var _0x2499a2=_0x444b0e['find'](_0x6709('0x1d'));var _0x5b5201=_0x2499a2[_0x6709('0x1e')](_0x6709('0x1f'));var _0x5b6906=_0x2499a2[_0x6709('0x1e')]('.qd-am-collection');if(_0x5b5201[_0x6709('0x20')]||_0x5b6906[_0x6709('0x20')])_0x5b5201['parent']()[_0x6709('0x12')]('qd-am-banner-wrapper'),_0x5b6906[_0x6709('0x21')]()[_0x6709('0x12')]('qd-am-collection-wrapper'),_0x233cbf['qdAjax']({'url':_0x5c668a[_0x6709('0x22')],'dataType':_0x6709('0x23'),'success':function(_0xb59fb1){var _0x3f2b5e=_0x233cbf(_0xb59fb1);_0x5b5201[_0x6709('0xf')](function(){var _0xb59fb1=_0x233cbf(this);var _0x69593c=_0x3f2b5e[_0x6709('0x24')](_0x6709('0x25')+_0xb59fb1['attr'](_0x6709('0x26'))+'\x27]');_0x69593c[_0x6709('0x20')]&&(_0x69593c[_0x6709('0xf')](function(){_0x233cbf(this)[_0x6709('0x0')]('.box-banner')[_0x6709('0x27')]()[_0x6709('0x28')](_0xb59fb1);}),_0xb59fb1[_0x6709('0x29')]());})[_0x6709('0x12')]('qd-am-content-loaded');_0x5b6906[_0x6709('0xf')](function(){var _0xb59fb1={};var _0x530973=_0x233cbf(this);_0x3f2b5e[_0x6709('0x24')]('h2')[_0x6709('0xf')](function(){if(_0x233cbf(this)['text']()[_0x6709('0x2a')]()[_0x6709('0xb')]()==_0x530973[_0x6709('0x2b')](_0x6709('0x26'))[_0x6709('0x2a')]()[_0x6709('0xb')]())return _0xb59fb1=_0x233cbf(this),!0x1;});_0xb59fb1[_0x6709('0x20')]&&(_0xb59fb1['each'](function(){_0x233cbf(this)[_0x6709('0x0')](_0x6709('0x2c'))['clone']()[_0x6709('0x28')](_0x530973);}),_0x530973[_0x6709('0x29')]());})[_0x6709('0x12')](_0x6709('0x2d'));},'error':function(){_0x3c8599(_0x6709('0x2e')+_0x5c668a[_0x6709('0x22')]+'\x27\x20falho.');},'complete':function(){_0x5c668a[_0x6709('0x2f')]['call'](this);_0x233cbf(window)[_0x6709('0x30')](_0x6709('0x31'),_0x444b0e);},'clearQueueDelay':0xbb8});};_0x233cbf[_0x6709('0x2')]=function(_0x48492f){var _0x149a7a=_0x48492f[_0x6709('0x24')](_0x6709('0x32'))[_0x6709('0xf')](function(){var _0x2a0948=_0x233cbf(this);if(!_0x2a0948[_0x6709('0x20')])return _0x3c8599([_0x6709('0x33'),_0x48492f],'alerta');_0x2a0948[_0x6709('0x24')](_0x6709('0x34'))[_0x6709('0x21')]()[_0x6709('0x12')](_0x6709('0x35'));_0x2a0948[_0x6709('0x24')]('li')[_0x6709('0xf')](function(){var _0x5ef9e2=_0x233cbf(this);var _0x5abb53=_0x5ef9e2[_0x6709('0x36')](_0x6709('0x37'));_0x5abb53[_0x6709('0x20')]&&_0x5ef9e2[_0x6709('0x12')]('qd-am-elem-'+_0x5abb53['first']()['text']()[_0x6709('0x2a')]()[_0x6709('0x38')]()['replace'](/\./g,'')[_0x6709('0x16')](/\s/g,'-')[_0x6709('0xb')]());});var _0x50d638=_0x2a0948['find'](_0x6709('0x39'))[_0x6709('0x3a')]();_0x2a0948[_0x6709('0x12')](_0x6709('0x3b'));_0x50d638=_0x50d638[_0x6709('0x24')]('>ul');_0x50d638[_0x6709('0xf')](function(){var _0x4d93e4=_0x233cbf(this);_0x4d93e4[_0x6709('0x24')](_0x6709('0x39'))[_0x6709('0x3a')]()['addClass'](_0x6709('0x3c'));_0x4d93e4['addClass']('qd-am-dropdown-menu');_0x4d93e4[_0x6709('0x21')]()[_0x6709('0x12')](_0x6709('0x3d'));});_0x50d638[_0x6709('0x12')](_0x6709('0x3d'));var _0x447f24=0x0,_0x253760=function(_0x13f023){_0x447f24+=0x1;_0x13f023=_0x13f023[_0x6709('0x36')]('li')[_0x6709('0x36')]('*');_0x13f023[_0x6709('0x20')]&&(_0x13f023[_0x6709('0x12')](_0x6709('0x3e')+_0x447f24),_0x253760(_0x13f023));};_0x253760(_0x2a0948);_0x2a0948[_0x6709('0x3f')](_0x2a0948[_0x6709('0x24')]('ul'))['each'](function(){var _0xfbb810=_0x233cbf(this);_0xfbb810['addClass']('qd-am-'+_0xfbb810[_0x6709('0x36')]('li')[_0x6709('0x20')]+_0x6709('0x40'));});});_0x5dbb87(_0x149a7a);_0x5c668a[_0x6709('0x41')][_0x6709('0x42')](this);_0x233cbf(window)[_0x6709('0x30')](_0x6709('0x43'),_0x48492f);};_0x233cbf['fn'][_0x6709('0x2')]=function(_0x47e631){var _0x981ae6=_0x233cbf(this);if(!_0x981ae6[_0x6709('0x20')])return _0x981ae6;_0x5c668a=_0x233cbf[_0x6709('0x44')]({},_0xccdcb5,_0x47e631);_0x981ae6[_0x6709('0x45')]=new _0x233cbf['QD_amazingMenu'](_0x233cbf(this));return _0x981ae6;};_0x233cbf(function(){_0x233cbf(_0x6709('0x46'))['QD_amazingMenu']();});}}(this));
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