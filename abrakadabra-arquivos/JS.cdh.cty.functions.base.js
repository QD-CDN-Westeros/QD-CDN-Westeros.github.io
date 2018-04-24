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
			//Home.modalNewsletter();
			Common.bannersCount();
			Common.amazingMenu();
			Common.clickActiveMiniCartMobile();
			Common.floatBarMiniCart();
			Common.setScrollToggle();
		},
		ajaxStop: function() {},
		windowOnload: function() {
			Common.facebookLikebox();
		},
		setScrollToggle: function() {
			if($(document.body).is('.vstm') || $(document.body).is('.pinkgym')) {
				$("body").attr("data-qd-scroll-limit", 120);
				return;
			}
			$("body").attr("data-qd-scroll-limit", 200);
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
			$(".header-qd-v2-main-amazing-menu").QD_amazingMenu();

			// Amazing Menu Responsivo
			$(".header-qd-v2-amazing-menu-toggle").click(function(){
				$("body").toggleClass('qd-am-on');
			});

			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-am-on');
			});

			$('.header-qd-v2-main-amazing-menu-mobile > ul > li > a, .header-qd-v2-main-amazing-menu-mobile > ul > li > p').click(function(evt){
				evt.preventDefault();

				var $t = $(this);
				$t.toggleClass('qd-on');
				$t.next('ul').slideToggle();
			});
		},
		facebookLikebox: function() {
			$(".footer-qd-v1-facebook-likebox").html('<div class="fb-page" data-href="https://www.facebook.com/clubedeherois/" data-width="100%" data-height="290px" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/clubedeherois/"><a href="https://www.facebook.com/clubedeherois/">Quatro Digital</a></blockquote></div></div>');
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
		}
	};

	var Home = {
		init: function() {
			Home.cycle2();
			Home.bannerResponsive();
			Home.mosaicAdjustment(); // Chamar depois do "bannerResponsive"
			Home.organizeSideMenuCollection();
			Home.homeShelfCarousel();
			// Home.mosaicSetCol();

			if ($(document.body).is('.home-hotsite')) {
				Home.homeHotsiteMosaicSetCol();
				Home.hotsiteProductImageBig();
			}

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
			$(".box-banner +.prateleira, ul[itemscope] +.prateleira").each(function() {
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
		homeShelfCarousel: function() {
			var wrapper = $('.shelf-qd-v1-carousel');

			// Titulo
			wrapper.find('.prateleira').each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-3').insertBefore(wrap);
			});

			wrapper.find('.prateleira').owlCarousel({
				items: 4,
				navigation: true,
				pagination: false
			});
		},
		mosaicSetCol: function() {
			$(".banner-qd-v1-mosaic .box-banner").QD_mosaicBanners();
		},
		homeHotsiteMosaicSetCol: function() {
			$(".hotsite-categories-qd-v1 .box-banner").QD_mosaicBanners({
				bannerColSecurityMargin: 45
			});
		},
		modalNewsletter: function() {
			var modal = $(".qd-v1-modal");
			var html = $('<div class="content-news"> <form novalidate="1"> <div class="qd_news"> <div class="row form-row"> <input type="text" name="name" class="qd_news_name input-type-text-ghost form-control" /> <input type="text" name="email" class="qd_news_email input-type-text-ghost form-control" /> </div> <div class="row form-row"> <button class="qd_news_button">Enviar</button> <a href="/politica-de-privacidade" style="display: none;" class="link-politica-privacidade-modal">Politica de privacidade</a> </div> </div> <span class="content-close"> <i class="btn-close ico-close" data-dismiss="modal"></i> </span> </form> </div>');
			var inputSuccess = $('<div class="row form-row"><input type="text" name="name" class="qd_success input-type-text-ghost form-control" /></div>');

			modal.on("hidden.bs.modal", function(){
				modal.removeClass("qd-v1-newsletter-modal");
				html.trigger("QuatroDigital.cf_close");
				$(document.body).removeClass('modal-open');
			});

			html.QD_cookieFn({
				cookieName: "newsletter",
				close: "",
				expireDays: 7,
				show: function($elem){
					modal.find(".modal-body").empty().append(html);
					modal.addClass("qd-v1-newsletter-modal");
					modal.modal();
					$(document.body).addClass('modal-open');

					html.QD_news({
						defaultEmail: "Digite seu e-mail",
						checkNameFieldIsVisible: false,
						successCallback: function (e) {
							$(".qd-v1-newsletter-modal").addClass("qd-v1-newsletter-modal-finish");

							try {
								lc.sendData({
									evento: "Cadastro Cliente Newslleter",
									nm_email: e.postData.newsletterClientEmail,
									vars: {},
									lista: {
										nm_lista: "Newsletter_do_site",
									}
								});
							}
							catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas no GTM :( . Detalhes: " + e.message)); }
						}
					});

				},
				hide: function($elem){}
			});
		},
		hotsiteProductImageBig: function() {
			$('.shelf-qd-v2-big img').each(function() {
				var $t = $(this);
				var url = $t.attr('src').replace(/(ids\/[0-9]+\-)[0-9]+\-[0-9]+/i, '$1470-470');
				$t.attr('src', url);
				$t.removeAttr('width height');
			});
		}
	};

	var Departament = {
		init: function() {
			Search.shelfLineFix();
			Departament.sidemenuToggle();
			Departament.organizeSideMenuCollection();
		},
		ajaxStop: function() {
			Search.shelfLineFix();
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
		organizeSideMenuCollection: function() {
			if ($(document.body).is('.departamento.vstm') || $(document.body).is('.departamento.pinkgym')) {
				$(".prateleira").each(function() {
					var $t = $(this);
					var sideElem = $t.prev();

					$t.add(sideElem).wrapAll('<div class="row item-qd-v1-side-summary-collection"></div>');

					sideElem.wrap('<div class="col-xs-12 col-sm-3 col-md-3 html-qd-v1-side-summary-wrapper"></div>');
					$t.wrap('<div class="col-xs-12 col-sm-12 col-md-12 html-qd-v1-side-collection-wrapper"></div>');

					$t.find('li.helperComplement').remove();
					var ul = $t.children("ul");
					var ulFirst = ul.first();
					if(ul.length > 1){
						ul.children().appendTo(ulFirst);
						ul.not(ulFirst).remove();
					}
					ulFirst.owlCarousel({
						items: 4,
						navigation: true,
						pagination: false
					});
				});
			}
		}
	};

	var Search = {
	    init: function() {
	        Search.shelfLineFix();
	        Departament.sidemenuToggle();
	    },
	    ajaxStop: function() {
	        Search.shelfLineFix();
	    },
	    windowOnload: function() {
	        Search.shelfLineFix();
	    },
	    shelfLineFix: function() {
	        try {
	            var exec = function() {
	                var curTop;
	                var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass('qd-fi-on');

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
	        } catch (e) {
	            (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message));
	        }
	    }
	};

	var Product = {
		run: function() {},
		init: function() {
			Product.seeDescription();
			Product.openShipping();
			Product.checkBuyTogether();
			Product.checkSpecification();
			Product.currentColorThumb();
			Product.paymentFix();
			Product.openPaymentMethods();
			Home.homeShelfCarousel();
			// Product.qdProductCollectionsWrapCarousel(); // Chamar este metodo sempre por último
		},

		ajaxStop: function() {},
		windowOnload: function() {},
		seeDescription: function() {
			$(".product-qd-v1-link-description").click(function(e){
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $(".product-qd-v1-description").offset().top - 100
				}, 900, 'swing');
			});
		},
		openShipping: function() {
			if( typeof window.ShippingValue === "function" )
				window.ShippingValue();
		},
		currentColorThumb: function() {
			var ul = $(".sku-qd-v1-color-similar .prateleira >ul:first");
			var newUl = ul.clone();

			newUl.find("img").attr("src", skuJson.skus[0].image);
			newUl.find("a").attr("href", "").addClass("qd-sku-selected");
			newUl.insertBefore(ul);

			if ($(document.body).is('.vstm') || $(document.body).is('.pinkgym'))
				$('.sku-qd-v1-color-similar .prateleira h2').attr('data-selected-item' , '( '+$('.productName').text()+' )' );
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
			if ($(document.body).is('.vstm'))
				return;

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
			if ($(document.body).is('.vstm'))
				return;

			if ($(".product-qd-v1-specification #caracteristicas > *").length <= 0)
				$(".product-qd-v1-description").parent().removeClass('col-sm-5').addClass('col-sm-12');
		},
		paymentFix: function(){
			var newUl,elem,li,l;

			newUl=$("<ul class='firstInstallments'></ul>");
			newUl2=$("<ul class='secondInstallments'></ul>");
			elem=$('.other-payment-method');
			li=elem.find('li');

			// Ordem crescente
			l=Math.ceil(li.length/2);
			for(var i = 0; i < l; i++){
				li.eq(i).clone().prependTo(newUl);
				li.eq(i+l).clone().prependTo(newUl);
			}
			elem.find('ul:first').after(newUl);

			// Ordem decrescente
			l=Math.ceil(li.length/2);
			for(var i = 0; i < l; i++){
				li.eq(i).clone().appendTo(newUl2);
				li.eq(i+l).clone().appendTo(newUl2);
			}
			elem.find('ul:first').after(newUl2);
		},
		openPaymentMethods: function() {
			$(".product-qd-v1-see-other-payment-method").click(function(){
				$('.product-qd-v1-other-payment-method').toggleClass('qd-on');
			});

			$('.product-qd-v1-other-payment-method .qd-close').click(function(){
				$('.product-qd-v1-other-payment-method').removeClass('qd-on');
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
			if($(document.body).is('.afiliado')) {
				Institutional.setPartnerTitle();
			}
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
		},
		setPartnerTitle: function() {
			$('.partner-qd-v1-title').text(((window.location.href.match(/(\?|\&)sellerId\=([\w\-]+)(\&?)/) || [])[2] || 'Afiliado').replace(/\-/g, ' ')).show();
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
/* Quatro Digital - jQuery Ajax Queue // 3.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;d.qdAjax=function(f){try{var c=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:0},f);f="";"number"===typeof c.data||"string"===typeof c.data?f=c.data:"object"===typeof c.data&&(f=JSON.stringify(c.data));var b=qd_md5(c.url+c.type+f);a[b]=a[b]||{};a[b].opts=a[b].opts||[];a[b].opts.push({success:function(a,b,e){c.success.call(this,a,b,e)},error:function(a,b,e){c.error.call(this,
a,b,e)},complete:function(a,b){c.complete.call(this,a,b)}});a[b].parameters=a[b].parameters||{success:{},error:{},complete:{}};a[b].callbackFns=a[b].callbackFns||{};a[b].callbackFns.successPopulated="boolean"===typeof a[b].callbackFns.successPopulated?a[b].callbackFns.successPopulated:!1;a[b].callbackFns.errorPopulated="boolean"===typeof a[b].callbackFns.errorPopulated?a[b].callbackFns.errorPopulated:!1;a[b].callbackFns.completePopulated="boolean"===typeof a[b].callbackFns.completePopulated?a[b].callbackFns.completePopulated:
!1;var h=d.extend({},c,{success:function(c,k,e){try{a[b].parameters.success={data:c,textStatus:k,jqXHR:e};a[b].callbackFns.successPopulated=!0;for(var g in a[b].opts)"object"===typeof a[b].opts[g]&&(a[b].opts[g].success.call(this,c,k,e),a[b].opts[g].success=function(){})}catch(d){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+d.message)}},error:function(c,d,e){try{a[b].parameters.error={errorThrown:e,textStatus:d,jqXHR:c};a[b].callbackFns.errorPopulated=
!0;for(var g in a[b].opts)"object"===typeof a[b].opts[g]&&(a[b].opts[g].error.call(this,c,d,e),a[b].opts[g].error=function(){})}catch(f){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+f.message)}},complete:function(d,f){try{a[b].parameters.complete={textStatus:f,jqXHR:d};a[b].callbackFns.completePopulated=!0;for(var e in a[b].opts)"object"===typeof a[b].opts[e]&&(a[b].opts[e].complete.call(this,d,f),a[b].opts[e].complete=function(){});
isNaN(parseInt(c.clearQueueDelay))||setTimeout(function(){a[b].jqXHR=void 0;a[b].opts=void 0;a[b].parameters=void 0;a[b].callbackFns=void 0},c.clearQueueDelay)}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}}});"undefined"===typeof a[b].jqXHR?a[b].jqXHR=d.ajax(h):a[b].jqXHR&&a[b].jqXHR.readyState&&4==a[b].jqXHR.readyState&&(a[b].callbackFns.successPopulated&&h.success(a[b].parameters.success.data,a[b].parameters.success.textStatus,
a[b].parameters.success.jqXHR),a[b].callbackFns.errorPopulated&&h.error(a[b].parameters.error.jqXHR,a[b].parameters.error.textStatus,a[b].parameters.error.errorThrown),a[b].callbackFns.completePopulated&&h.complete(a[b].parameters.complete.jqXHR,a[b].parameters.complete.textStatus))}catch(l){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+l.message)}};d.qdAjax.version="2.1"}})(jQuery);
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
/* Quatro Digital Simple Cart // 4.12 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart)try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(c,n,h){var d,k,g,f,l,p,q,r,m;k=function(a,b){if("object"===typeof console){var e="object"===typeof a;"undefined"!==typeof b&&"alerta"===b.toLowerCase()?e?console.warn("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?
e?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):e?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};d=b(this);"object"===typeof c?n=c:(c=c||!1,d=d.add(b.fn.simpleCart.elements));if(!d.length)return d;b.fn.simpleCart.elements=b.fn.simpleCart.elements.add(d);h="undefined"===typeof h?!1:h;f=b.extend({},{cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:"R$ ",
showQuantityByItems:!0,smartCheckout:!0,callback:function(){}},n);g=b("");d.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});m=function(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var b=0,e=0,c=0;c<a.totalizers.length;c++)"Shipping"==a.totalizers[c].id&&(e+=a.totalizers[c].value),b+=a.totalizers[c].value;window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(b/100,2,",",".");window._QuatroDigital_CartData.shipping=
f.currencySymbol+qd_number_format(e/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((b+e)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(c=0;c<a.items.length;c++)window._QuatroDigital_CartData.qtt+=a.items[c].quantity;else window._QuatroDigital_CartData.qtt=a.items.length||0;try{window._QuatroDigital_CartData.callback&&window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(d){k("Problemas com o callback do Smart Cart")}r(g)};
l=function(a,b){1===a?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};q=function(a){1>a?d.addClass("qd-emptyCart"):d.removeClass("qd-emptyCart")};p=function(a,b){var c;c=parseInt(window._QuatroDigital_CartData.qtt,10);b.$this.show();isNaN(c)&&(k("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero! O valor ser\u00e1 definido para 0.","alerta"),c=0);b.cartTotalE.html(window._QuatroDigital_CartData.total);b.cartQttE.html(c);l(c,b.itemsTextE);q(c)};r=
function(a){d.each(function(){var d={},e;e=b(this);c&&e.data("qd_simpleCartOpts")&&b.extend(f,e.data("qd_simpleCartOpts"));d.$this=e;d.cartQttE=e.find(f.cartQtt)||g;d.cartTotalE=e.find(f.cartTotal)||g;d.itemsTextE=e.find(f.itemsText)||g;d.emptyElem=e.find(f.emptyCart)||g;p(a,d);e.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(h?h:!c))return m(window._QuatroDigital_DropDown.getOrderForm);
if("object"!==typeof window.vtexjs||"undefined"===typeof window.vtexjs.checkout)if("object"===typeof vtex&&"object"===typeof vtex.checkout&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return k("N\u00e3o foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function(a){m(a);window._QuatroDigital_DropDown.getOrderForm=a},fail:function(a){k(["N\u00e3o foi poss\u00edvel obter os dados para o carrinho.",a])}})}else alert("Esta \u00e9 uma fun\u00e7\u00e3o descontinuada =/")})();
f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return d};b.fn.simpleCart.elements=b("");b(function(){var c;"function"===typeof window.ajaxRequestbuyButtonAsynchronous&&(c=window.ajaxRequestbuyButtonAsynchronous,window.ajaxRequestbuyButtonAsynchronous=function(l,h,d,k,g){c.call(this,l,h,d,k,function(){"function"===typeof g&&g();b.fn.simpleCart.elements.each(function(){var c;c=b(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})})});var l=window.ReloadItemsCart||void 0;window.ReloadItemsCart=
function(c){b.fn.simpleCart(!0);"function"===typeof l?l.call(this,c):alert(c)};b(function(){var c=b(".qd_cart_auto");c.length&&c.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex",function(){b.fn.simpleCart(!0)})})}catch(t){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",t)}})();
/* $("a").getParent("ul"); // 2.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(b){b.fn.getParent=function(c){var a;a=b(this);if(1>a.length)return a;a=a.parent();return a.is("html")?b(""):a.is(c)?a.filter(c):a.length?a.getParent(c):a}})(jQuery);
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* Automatizador de comments box do Facebook // 1.5 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if(!$("script[src*='connect.facebook.net/pt_BR/sdk.js']").filter("[src*='sdk.js']").length){a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(b=document.createElement("script"),b.id="facebook-jssdk", b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse()});
/* Quatro Digital - localStorage // 1.1 // Carlos Vinicius // Todos os direitos reservados */
(function(){var e=function(b,c){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var a;"object"===typeof b?(b.unshift("[Quatro Digital - localStorage]\n"),a=b):a=["[Quatro Digital - localStorage]\n"+b];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,a)}catch(d){console.info(a.join("\n"))}else try{console.error.apply(console,
a)}catch(e){console.error(a.join("\n"))}else try{console.warn.apply(console,a)}catch(f){console.warn(a.join("\n"))}}};window.qdLocalStorage=window.qdLocalStorage||{};var f="undefined"!==typeof localStorage&&"undefined"!==typeof localStorage.setItem&&"undefined"!==typeof localStorage.getItem;window.qdLocalStorage.setItem=function(b,c,a){try{if(!f)return!1;var d=new Date;localStorage.setItem(b,c);isNaN(parseInt(a))||(d.setTime(d.getTime()+6E4*a),localStorage.setItem(b+"_expiration",d.getTime()))}catch(g){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar salvar os dados no armazenamento local. Detalhes: ",
g.message],"alerta")}};window.qdLocalStorage.getItem=function(b){try{if(!f)return!1;var c=new Date,a=parseInt(localStorage.getItem(b+"_expiration")||0,10)||0;return c.getTime()>a?(localStorage.removeItem&&(localStorage.removeItem(b),localStorage.removeItem(b+"_expiration")),null):localStorage.getItem(b)}catch(d){e(["Aeeee irm\u00e3o! Algo saiu errado ao tentar obter os dados no armazenamento local. Detalhes: ",d.message],"alerta")}}})();
/* Quatro Digital - Smart SKU Totalizer // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(m){var a=jQuery;if("function"!==typeof a.fn.QD_smartSkuTotalizer){var f=function(a,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var c;"object"===typeof a?(a.unshift("[Quatro Digital - Smart SKU Totalizer]\n"),c=a):c=["[Quatro Digital - Smart SKU Totalizer]\n"+a];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
c)}catch(f){try{console.info(c.join("\n"))}catch(k){}}else try{console.error.apply(console,c)}catch(g){try{console.error(c.join("\n"))}catch(e){}}else try{console.warn.apply(console,c)}catch(n){try{console.warn(c.join("\n"))}catch(p){}}}},l={inputQtt:"input",qttSkus:".qd-selected-qtt-sku",valueSkus:".qd-selected-sku-total"};a.QD_smartSkuTotalizer=function(d,b){if(!d.length)return d;try{var c=a(b.qttSkus),h=a(b.valueSkus),k=a("meta[name='currency']").attr("content")||"R$";if(!c.length&&!h.length)return f("N\u00e3o encontrei os elementos para informar os totais, por isso n\u00e3o irei exibi-los.",
"info");var g=d.find(b.inputQtt).not("disabled").filter("[data-sku-id]");g.on("QuatroDigital.sq_change",function(){try{var b=0,d=0;g.each(function(){var c=a(this),e=parseInt(c.val());0<e&&(d+=e,b+=e*(parseInt(c.attr("data-sku-price"))||0))});c.html(d);h.html(k+" "+qd_number_format(b/100,2,",","."))}catch(e){f(e.message)}})}catch(e){f(e.message)}};a.fn.QD_smartSkuTotalizer=function(d){var b=a(this);if(!b.length)return b;var c=a.extend({},l,d);b.each(function(){a.QD_smartSkuTotalizer(a(this),c)});return b};
a(function(){a(".qd_auto_smart_sku_totalizer").QD_smartSkuTotalizer()})}})(this);
/* Quatro Digital - Smart Buy Button // 1.17 // Carlos Vinicius // Todos os direitos reservados */
(function(v){try{var a=jQuery,d,r=a({}),m=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[Quatro Digital - Buy Button]\n"),b=a):b=["[Quatro Digital - Buy Button]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(g){try{console.info(b.join("\n"))}catch(k){}}else try{console.error.apply(console,
b)}catch(n){try{console.error(b.join("\n"))}catch(l){}}else try{console.warn.apply(console,b)}catch(e){try{console.warn(b.join("\n"))}catch(c){}}}},t={timeRemoveNewItemClass:5E3,isSmartCheckout:!0,buyButton:".productInformationWrapper  a.buy-button",buyQtt:"input.buy-in-page-quantity",selectSkuMsg:"javascript:",autoWatchBuyButton:!0,buyIfQuantityZeroed:!1,fakeRequest:!1,productPageCallback:function(d,f,b){a("body").is(".productQuickView")&&("success"===f?alert("Produto adicionado ao carrinho!"):(alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),
("object"===typeof parent?parent:document).location.href=b))},isProductPage:function(){return a("body").is("#produto, .produto")},execDefaultAction:function(a){return!1},allowBuyClick:function(){return!0},callback:function(){},asyncCallback:function(){}};a.QD_buyButton=function(h,f){function b(a){d.isSmartCheckout?a.data("qd-bb-click-active")||(a.data("qd-bb-click-active",1),a.on("click.qd_bb_buy_sc",function(a){if(!d.allowBuyClick())return!0;if(!0!==l.clickBuySmartCheckout.call(this))return a.preventDefault(),
!1})):alert("M\u00e9todo descontinuado!")}function g(e){e=e||a(d.buyButton);e.each(function(){var c=a(this);c.is(".qd-sbb-on")||(c.addClass("qd-sbb-on"),c.is(".btn-add-buy-button-asynchronous")&&!c.is(".remove-href")||c.data("qd-bb-active")||(c.data("qd-bb-active",1),c.children(".qd-bb-productAdded").length||c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'),c.is(".buy-in-page-button")&&d.isProductPage()&&n.call(c),b(c)))});d.isProductPage()&&
!e.length&&m("Oooops!\nAparentemente esta \u00e9 uma p\u00e1gina de produto por\u00e9m n\u00e3o encontrei nenhum bot\u00e3o comprar!\nVerifique se \u00e9 este mesmo o seletor: '"+e.selector+"'.","info")}var k,n,l;k=a(h);l=this;window._Quatro_Digital_dropDown=window._Quatro_Digital_dropDown||{};window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};l.prodAdd=function(e,c){k.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");a("body").addClass("qd-bb-lightBoxBodyProdAdd");var b=a(d.buyButton).filter("[href='"+
(e.attr("href")||"---")+"']").add(e);b.addClass("qd-bb-itemAddBuyButtonWrapper");setTimeout(function(){k.removeClass("qd-bb-itemAddCartWrapper");b.removeClass("qd-bb-itemAddBuyButtonWrapper")},d.timeRemoveNewItemClass);window._Quatro_Digital_dropDown.getOrderForm=void 0;if("undefined"!==typeof f&&"function"===typeof f.getCartInfoByUrl)return d.isSmartCheckout||(m("fun\u00e7\u00e3o descontinuada"),f.getCartInfoByUrl()),window._QuatroDigital_DropDown.getOrderForm=void 0,f.getCartInfoByUrl(function(c){window._Quatro_Digital_dropDown.getOrderForm=
c;a.fn.simpleCart(!0,void 0,!0)},{lastSku:c});window._Quatro_Digital_dropDown.allowUpdate=!0;a.fn.simpleCart(!0)};(function(){if(d.isSmartCheckout&&d.autoWatchBuyButton){var e=a(".btn-add-buy-button-asynchronous");e.length&&g(e)}})();n=function(){var e=a(this);"undefined"!==typeof e.data("buyButton")?(e.unbind("click"),b(e)):(e.bind("mouseenter.qd_bb_buy_sc",function(c){e.unbind("click");b(e);a(this).unbind(c)}),a(window).load(function(){e.unbind("click");b(e);e.unbind("mouseenter.qd_bb_buy_sc")}))};
l.clickBuySmartCheckout=function(){var e=a(this),c=e.attr("href")||"";if(-1<c.indexOf(d.selectSkuMsg))return!0;c=c.replace(/redirect\=(false|true)/ig,"").replace("?","?redirect=false&").replace(/\&\&/ig,"&");if(d.execDefaultAction(e))return e.attr("href",c.replace("redirect=false","redirect=true")),!0;c=c.replace(/http.?:/i,"");r.queue(function(b){if(!d.buyIfQuantityZeroed&&!/(&|\?)qty\=[1-9][0-9]*/ig.test(c))return b();var f=function(a,b){var f=c.match(/sku\=([0-9]+)/ig),h=[],g;if("object"===typeof f&&
null!==f)for(var k=f.length-1;0<=k;k--)g=parseInt(f[k].replace(/sku\=/ig,"")),isNaN(g)||h.push(g);d.productPageCallback.call(this,a,b,c);l.buyButtonClickCallback.call(this,a,b,c,h);l.prodAdd(e,c.split("ku=").pop().split("&").shift());"function"===typeof d.asyncCallback&&d.asyncCallback.call(this)};d.fakeRequest?(f(null,"success"),b()):a.ajax({url:c,complete:f}).always(function(){b()})})};l.buyButtonClickCallback=function(a,c,b,d){try{"success"===c&&"object"===typeof window.parent&&"function"===typeof window.parent._QuatroDigital_prodBuyCallback&&
window.parent._QuatroDigital_prodBuyCallback(a,c,b,d)}catch(f){m("Problemas ao tentar comunicar a p\u00e1gina que o produto foi aicionado ao carrinho.")}};g();"function"===typeof d.callback?d.callback.call(this):m("Callback n\u00e3o \u00e9 uma fun\u00e7\u00e3o")};var p=a.Callbacks();a.fn.QD_buyButton=function(h,f){var b=a(this);"undefined"!==typeof f||"object"!==typeof h||h instanceof a||(f=h,h=void 0);d=a.extend({},t,f);var g;p.add(function(){b.children(".qd-bb-itemAddWrapper").length||b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');
g=new a.QD_buyButton(b,h)});p.fire();a(window).on("QuatroDigital.qd_bb_prod_add",function(a,b,d){g.prodAdd(b,d)});return a.extend(b,g)};var q=0;a(document).ajaxSend(function(a,d,b){-1<b.url.toLowerCase().indexOf("/checkout/cart/add")&&(q=(b.url.match(/sku\=([0-9]+)/i)||[""]).pop())});a(window).bind("productAddedToCart.qdSbbVtex",function(){a(window).trigger("QuatroDigital.qd_bb_prod_add",[new a,q])});a(document).ajaxStop(function(){p.fire()})}catch(u){"undefined"!==typeof console&&"function"===typeof console.error&&
console.error("Oooops! ",u)}})(this);
/* Quatro Digital Cookie Functions // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(){var a,h,g;a=jQuery;g={cookieName:"Nome_Padrao",closeLimit:2,expireDays:365,completeExpireDays:365,path:"/",close:"[class*=close]",show:function(a){a.slideDown()},hide:function(a){a.slideUp()},callback:function(){},exceededLimitCallback:function(){},closeCallback:function(){}};var k=function(a,c){if("object"===typeof console){var e;"object"===typeof a?(a.unshift("[Cookie Functions]\n"),e=a):e=["[Cookie Functions]\n"+a];"undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase()?
"undefined"!==typeof c&&"info"===c.toLowerCase()?console.info.apply(console,e):console.error.apply(console,e):console.warn.apply(console,e)}};a.QD_cookieFn=function(f){if("function"!==typeof a.cookie)return k("Aeeeee irm\u00e3\u00e3\u00e3ooooo!\nEsta faltando o plugin $.cookie mew. Chama ele na p\u00e1gina, vlw!");var c=function(d,b){var c=a.cookie("qdCookieFn_"+b.cookieName);if("undefined"!==typeof c&&c>=b.closeLimit||a.cookie("qdCookieFn_"+b.cookieName+"_complete"))return b.exceededLimitCallback();
b.show(d);d.trigger("QuatroDigital.cf_show");a(window).on("qdNewsSuccessCallback",function(a,c){d.trigger("QuatroDigital.qdcf_applyComplete");b.show(d);d.trigger("QuatroDigital.cf_hide")});b.callback();d.trigger("QuatroDigital.cf_callback")},e=function(a,b){a.find(b.close).not(".qd-cookie-on").addClass("qd-cookie-on").bind("click",function(){a.trigger("QuatroDigital.cf_close");a.slideUp(function(){b.closeCallback()})})},g=function(c,b){c.bind("QuatroDigital.cf_close",function(){"undefined"===typeof a.cookie("qdCookieFn_"+
b.cookieName)?a.cookie("qdCookieFn_"+b.cookieName,1,{expires:b.expireDays,path:b.path}):a.cookie("qdCookieFn_"+b.cookieName,(parseInt(a.cookie("qdCookieFn_"+b.cookieName),10)||0)+1,{expires:b.expireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyComplete",function(){a.cookie("qdCookieFn_"+b.cookieName+"_complete",1,{expires:b.completeExpireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyLimit",function(){a.cookie("qdCookieFn_"+b.cookieName,b.closeLimit,{expires:b.expireDays,path:b.path})})};
f.each(function(){var d=a(this),b;try{if(b=d.attr("data-qd-cookie"))var f=a.parseJSON("{"+b+"}")}catch(l){k(['Aeee irm\u00e3ooo!\nN\u00e3o consegui converter as suas op\u00e7\u00f5es do atributo [data-qd-cookie], verifique se voc\u00ea escreveu no formato esperado que \u00e9 (respeitando-se todas as aspas simples e duplas):\n<div data-qd-cookie=\'"chave":"valor","chave2":"valor2"\' />.',"\n\nDetalhes do erro: "+l.message],"alerta"),f={}}b=a.extend({},h,f);g(d,b);c(d,b);e(d,b)})};a.fn.QD_cookieFn=
function(f){var c=a(this);h=a.extend(!0,{},g,f);c.QD_cookieFn=new a.QD_cookieFn(c);return c};a(function(){a("[data-qd-cookie]").QD_cookieFn()})})();
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
/* Quatro Digital - Mosaic Banners // 1.2 // Carlos Vinicius // Todos os direitos reservados */
(function(q){var e=jQuery;if("function"!==typeof e.fn.QD_mosaicBanners){var k=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("[Quatro Digital - Mosaic Banners]\n"),a=c):a=["[Quatro Digital - Mosaic Banners]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,
a)}catch(f){try{console.info(a.join("\n"))}catch(d){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(d){}}else try{console.warn.apply(console,a)}catch(f){try{console.warn(a.join("\n"))}catch(d){}}}},l={bannerRowSecurityMargin:10,containerWidth:1170,bannerColSecurityMargin:15,classOneColumn:"col-xs-12",classTwoColumn:"col-xs-12 col-sm-6",classThreeColumn:"col-xs-12 col-sm-4",classFourColumn:"col-xs-6 col-sm-3"},m=function(c,b){function a(f){var d,g=new e;f.length&&
(f.each(function(){var f=e(this),a=f.offset().top;d||(d=a);if(a>=d-b.bannerRowSecurityMargin&&a<=d+b.bannerRowSecurityMargin)g=g.add(f);else return!1}),g.wrapAll('<div class="row qd-mb-row"></div>'),a(c.find(">div:not(.row)")))}a(c.find(">div:not(.row)"))},n=/width\=.?([0-9]+)/i,p=function(c,b){var a=e(c);a.each(function(){var a=e(this);if(a.is(".qd-mb-banner"))k(["Este banner j\u00e1 esta processado!",a],"info");else{a.addClass("qd-mb-banner");var d=a.find("img").first();if(d.length){var c=parseInt,
d=d.wrap("<span></span>"),h=d.parent().html();d.unwrap("span");d=h.replace(/\n/g," ");c=c((d.match(n)||[1]).pop(),10)||1;d=b.containerWidth/2*(1-b.bannerColSecurityMargin/2/100);h=b.containerWidth/3*(1-b.bannerColSecurityMargin/3/100);c>b.containerWidth*(1-b.bannerColSecurityMargin/100)?a.addClass(b.classOneColumn):c>d?a.addClass(b.classTwoColumn):c>h?a.addClass(b.classThreeColumn):a.addClass(b.classFourColumn)}else k(["Esse elemento n\u00e3o possui nenhuma imagem dentro. Certifique-se que esteja chamando um \u201c.box-banner\u201d. Mas voc\u00ea \u00e9 burro hein!",
a],"info")}});a.parent().each(function(){m(e(this),b)})};e.fn.QD_mosaicBanners=function(c){var b=e(this);if(!b.length)return b;c=e.extend({},l,c);b.qdPlugin=new p(b,c);return b};e(function(){e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners()})}})(this);

/* Quatro Digital Amazing Menu */
var _0x55bf=['trigger','alerta','li\x20>ul','qd-am-has-ul',':not(ul)','qd-am-elem-','first','replaceSpecialChars','>li','qd-amazing-menu','>ul','qd-am-column','qd-am-dropdown-menu','qd-am-dropdown','children','qd-am-level-','callback','QuatroDigital.am.callback','exec','.qd_amazing_menu_auto','getParent','closest','QD_amazingMenu','/qd-amazing-menu','QD\x20Amazing\x20Menu','object','error','undefined','warn','unshift','toLowerCase','aviso','info','apply','join','qdAmAddNdx','addClass','qd-am-li-','qd-am-first','last','qd-am-last','oenxnqnoen%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','replace','fromCharCode','charCodeAt','toUpperCase','ite','---','indexOf','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','filter','.qd-am-collection','length','parent','qd-am-banner-wrapper','qd-am-collection-wrapper','url','html','each','find','attr','.box-banner','clone','insertBefore','hide','qd-am-content-loaded','text','trim','data-qdam-value','[class*=\x27colunas\x27]','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','\x27\x20falho.','call'];(function(_0x466b1b,_0x452dd0){var _0x3bf452=function(_0x15be00){while(--_0x15be00){_0x466b1b['push'](_0x466b1b['shift']());}};_0x3bf452(++_0x452dd0);}(_0x55bf,0x181));var _0xf55b=function(_0x5e00b2,_0x5c0473){_0x5e00b2=_0x5e00b2-0x0;var _0x3c6059=_0x55bf[_0x5e00b2];return _0x3c6059;};(function(_0x23a9fd){_0x23a9fd['fn'][_0xf55b('0x0')]=_0x23a9fd['fn'][_0xf55b('0x1')];}(jQuery));(function(_0x2ce95f){'use strict';var _0x4a2b49,_0x52650c,_0xcd0ac,_0x37896f;_0x4a2b49=jQuery;if(typeof _0x4a2b49['fn'][_0xf55b('0x2')]==='function')return;_0x52650c={'url':_0xf55b('0x3'),'callback':function(){},'ajaxCallback':function(){}};var _0x44cfd5=_0xf55b('0x4');var _0xde5d5a=function(_0x1677d3,_0x16724e){if(_0xf55b('0x5')===typeof console&&'undefined'!==typeof console[_0xf55b('0x6')]&&'undefined'!==typeof console['info']&&_0xf55b('0x7')!==typeof console[_0xf55b('0x8')]){var _0x341100;_0xf55b('0x5')===typeof _0x1677d3?(_0x1677d3[_0xf55b('0x9')]('['+_0x44cfd5+']\x0a'),_0x341100=_0x1677d3):_0x341100=['['+_0x44cfd5+']\x0a'+_0x1677d3];if('undefined'===typeof _0x16724e||'alerta'!==_0x16724e[_0xf55b('0xa')]()&&_0xf55b('0xb')!==_0x16724e[_0xf55b('0xa')]())if(_0xf55b('0x7')!==typeof _0x16724e&&_0xf55b('0xc')===_0x16724e[_0xf55b('0xa')]())try{console[_0xf55b('0xc')]['apply'](console,_0x341100);}catch(_0x203301){try{console['info'](_0x341100['join']('\x0a'));}catch(_0x41985d){}}else try{console[_0xf55b('0x6')][_0xf55b('0xd')](console,_0x341100);}catch(_0x27643f){try{console[_0xf55b('0x6')](_0x341100[_0xf55b('0xe')]('\x0a'));}catch(_0x40f09d){}}else try{console[_0xf55b('0x8')][_0xf55b('0xd')](console,_0x341100);}catch(_0x75d4df){try{console[_0xf55b('0x8')](_0x341100['join']('\x0a'));}catch(_0x1420d4){}}}};_0x4a2b49['fn'][_0xf55b('0xf')]=function(){var _0x47ee70=_0x4a2b49(this);_0x47ee70['each'](function(_0x235d48){_0x4a2b49(this)[_0xf55b('0x10')](_0xf55b('0x11')+_0x235d48);});_0x47ee70['first']()[_0xf55b('0x10')](_0xf55b('0x12'));_0x47ee70[_0xf55b('0x13')]()['addClass'](_0xf55b('0x14'));return _0x47ee70;};_0x4a2b49['fn']['QD_amazingMenu']=function(){};var _0x3ae79b=function(_0x3ff6ca){var _0x3c2a8d={'n':_0xf55b('0x15')};return function(_0x2fe3f7){var _0x60cc1,_0x507f36,_0x19aa2f,_0x1ec83b;_0x507f36=function(_0x272bae){return _0x272bae;};_0x19aa2f=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x2fe3f7=_0x2fe3f7['d'+_0x19aa2f[0x10]+'c'+_0x19aa2f[0x11]+'m'+_0x507f36(_0x19aa2f[0x1])+'n'+_0x19aa2f[0xd]]['l'+_0x19aa2f[0x12]+'c'+_0x19aa2f[0x0]+'ti'+_0x507f36('o')+'n'];_0x60cc1=function(_0xeaccc3){return escape(encodeURIComponent(_0xeaccc3[_0xf55b('0x16')](/\./g,'¨')[_0xf55b('0x16')](/[a-zA-Z]/g,function(_0x22d6e7){return String[_0xf55b('0x17')](('Z'>=_0x22d6e7?0x5a:0x7a)>=(_0x22d6e7=_0x22d6e7[_0xf55b('0x18')](0x0)+0xd)?_0x22d6e7:_0x22d6e7-0x1a);})));};var _0xdd942=_0x60cc1(_0x2fe3f7[[_0x19aa2f[0x9],_0x507f36('o'),_0x19aa2f[0xc],_0x19aa2f[_0x507f36(0xd)]][_0xf55b('0xe')]('')]);_0x60cc1=_0x60cc1((window[['js',_0x507f36('no'),'m',_0x19aa2f[0x1],_0x19aa2f[0x4][_0xf55b('0x19')](),_0xf55b('0x1a')][_0xf55b('0xe')]('')]||_0xf55b('0x1b'))+['.v',_0x19aa2f[0xd],'e',_0x507f36('x'),'co',_0x507f36('mm'),'erc',_0x19aa2f[0x1],'.c',_0x507f36('o'),'m.',_0x19aa2f[0x13],'r']['join'](''));for(var _0x36234b in _0x3c2a8d){if(_0x60cc1===_0x36234b+_0x3c2a8d[_0x36234b]||_0xdd942===_0x36234b+_0x3c2a8d[_0x36234b]){_0x1ec83b='tr'+_0x19aa2f[0x11]+'e';break;}_0x1ec83b='f'+_0x19aa2f[0x0]+'ls'+_0x507f36(_0x19aa2f[0x1])+'';}_0x507f36=!0x1;-0x1<_0x2fe3f7[[_0x19aa2f[0xc],'e',_0x19aa2f[0x0],'rc',_0x19aa2f[0x9]][_0xf55b('0xe')]('')][_0xf55b('0x1c')]('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x507f36=!0x0);return[_0x1ec83b,_0x507f36];}(_0x3ff6ca);}(window);if(!eval(_0x3ae79b[0x0]))return _0x3ae79b[0x1]?_0xde5d5a(_0xf55b('0x1d')):!0x1;_0x37896f=function(_0x3feeec){var _0x43172b,_0x2252f6,_0x4cf5f1;_0x4cf5f1=_0x3feeec['find']('.qd_am_code');_0x43172b=_0x4cf5f1[_0xf55b('0x1e')]('.qd-am-banner');_0x2252f6=_0x4cf5f1[_0xf55b('0x1e')](_0xf55b('0x1f'));if(!(_0x43172b[_0xf55b('0x20')]||_0x2252f6['length']))return;_0x43172b[_0xf55b('0x21')]()[_0xf55b('0x10')](_0xf55b('0x22'));_0x2252f6[_0xf55b('0x21')]()['addClass'](_0xf55b('0x23'));_0x4a2b49['qdAjax']({'url':_0xcd0ac[_0xf55b('0x24')],'dataType':_0xf55b('0x25'),'success':function(_0x45d8c3){var _0x59b472=_0x4a2b49(_0x45d8c3);_0x43172b[_0xf55b('0x26')](function(){var _0x283f89,_0x3ddc3b;_0x3ddc3b=_0x4a2b49(this);_0x283f89=_0x59b472[_0xf55b('0x27')]('img[alt=\x27'+_0x3ddc3b[_0xf55b('0x28')]('data-qdam-value')+'\x27]');if(!_0x283f89[_0xf55b('0x20')])return;_0x283f89[_0xf55b('0x26')](function(){_0x4a2b49(this)['getParent'](_0xf55b('0x29'))[_0xf55b('0x2a')]()[_0xf55b('0x2b')](_0x3ddc3b);});_0x3ddc3b[_0xf55b('0x2c')]();})[_0xf55b('0x10')](_0xf55b('0x2d'));_0x2252f6['each'](function(){var _0x578032={},_0x53e0f6;_0x53e0f6=_0x4a2b49(this);_0x59b472[_0xf55b('0x27')]('h2')['each'](function(){if(_0x4a2b49(this)[_0xf55b('0x2e')]()[_0xf55b('0x2f')]()[_0xf55b('0xa')]()==_0x53e0f6[_0xf55b('0x28')](_0xf55b('0x30'))[_0xf55b('0x2f')]()[_0xf55b('0xa')]()){_0x578032=_0x4a2b49(this);return![];}});if(!_0x578032[_0xf55b('0x20')])return;_0x578032[_0xf55b('0x26')](function(){_0x4a2b49(this)[_0xf55b('0x0')](_0xf55b('0x31'))[_0xf55b('0x2a')]()[_0xf55b('0x2b')](_0x53e0f6);});_0x53e0f6[_0xf55b('0x2c')]();})[_0xf55b('0x10')](_0xf55b('0x2d'));},'error':function(){_0xde5d5a(_0xf55b('0x32')+_0xcd0ac[_0xf55b('0x24')]+_0xf55b('0x33'));},'complete':function(){_0xcd0ac['ajaxCallback'][_0xf55b('0x34')](this);_0x4a2b49(window)[_0xf55b('0x35')]('QuatroDigital.am.ajaxCallback',_0x3feeec);},'clearQueueDelay':0xbb8});};_0x4a2b49[_0xf55b('0x2')]=function(_0x2f6736){var _0x56f9d9=_0x2f6736[_0xf55b('0x27')]('ul[itemscope]')[_0xf55b('0x26')](function(){var _0x361b4a,_0x1e8871,_0x2d6d2e,_0x382215;_0x361b4a=_0x4a2b49(this);if(!_0x361b4a[_0xf55b('0x20')])return _0xde5d5a(['UL\x20do\x20menu\x20não\x20encontrada',_0x2f6736],_0xf55b('0x36'));_0x361b4a[_0xf55b('0x27')](_0xf55b('0x37'))[_0xf55b('0x21')]()[_0xf55b('0x10')](_0xf55b('0x38'));_0x361b4a[_0xf55b('0x27')]('li')[_0xf55b('0x26')](function(){var _0x164543=_0x4a2b49(this),_0x1192cf;_0x1192cf=_0x164543['children'](_0xf55b('0x39'));if(!_0x1192cf['length'])return;_0x164543['addClass'](_0xf55b('0x3a')+_0x1192cf[_0xf55b('0x3b')]()[_0xf55b('0x2e')]()['trim']()[_0xf55b('0x3c')]()[_0xf55b('0x16')](/\./g,'')['replace'](/\s/g,'-')[_0xf55b('0xa')]());});_0x1e8871=_0x361b4a[_0xf55b('0x27')](_0xf55b('0x3d'))[_0xf55b('0xf')]();_0x361b4a['addClass'](_0xf55b('0x3e'));_0x2d6d2e=_0x1e8871['find'](_0xf55b('0x3f'));_0x2d6d2e['each'](function(){var _0x3fd6ce=_0x4a2b49(this),_0x589776;_0x589776=_0x3fd6ce[_0xf55b('0x27')](_0xf55b('0x3d'))['qdAmAddNdx']()[_0xf55b('0x10')](_0xf55b('0x40'));_0x3fd6ce['addClass'](_0xf55b('0x41'));_0x3fd6ce[_0xf55b('0x21')]()[_0xf55b('0x10')](_0xf55b('0x42'));});_0x2d6d2e[_0xf55b('0x10')](_0xf55b('0x42'));var _0x2808e0=0x0;var _0x2d4edd=function(_0x4a4d19){_0x2808e0=_0x2808e0+0x1;var _0x4bef4b=_0x4a4d19['children']('li');var _0x37c69f=_0x4bef4b[_0xf55b('0x43')]('*');if(!_0x37c69f[_0xf55b('0x20')])return;_0x37c69f[_0xf55b('0x10')](_0xf55b('0x44')+_0x2808e0);_0x2d4edd(_0x37c69f);};_0x2d4edd(_0x361b4a);_0x361b4a['add'](_0x361b4a[_0xf55b('0x27')]('ul'))[_0xf55b('0x26')](function(){var _0x48b19e=_0x4a2b49(this);_0x48b19e[_0xf55b('0x10')]('qd-am-'+_0x48b19e[_0xf55b('0x43')]('li')[_0xf55b('0x20')]+'-li');});});_0x37896f(_0x56f9d9);_0xcd0ac[_0xf55b('0x45')]['call'](this);_0x4a2b49(window)[_0xf55b('0x35')](_0xf55b('0x46'),_0x2f6736);};_0x4a2b49['fn'][_0xf55b('0x2')]=function(_0x29978e){var _0x280a02=_0x4a2b49(this);if(!_0x280a02['length'])return _0x280a02;_0xcd0ac=_0x4a2b49['extend']({},_0x52650c,_0x29978e);_0x280a02[_0xf55b('0x47')]=new _0x4a2b49['QD_amazingMenu'](_0x4a2b49(this));return _0x280a02;};_0x4a2b49(function(){_0x4a2b49(_0xf55b('0x48'))['QD_amazingMenu']();});}(this));