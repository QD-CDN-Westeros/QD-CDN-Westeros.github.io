/*
* Funções base
*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});

try {
	var Common = {
		init: function () {
			Common.amazingMenu();
			Common.bannerResponsive();
			Common.boxTelevendas();
			Common.applySmartCart();
			// Common.bannerOverlay();
			// Common.facebookLikebox();
		},
		ajaxStop: function () {},
		windowOnload: function () {},
		applySmartCart: function() {
			$('.header-qd-v1-cart').append('<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>');

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
		bannerResponsive : function(){
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
		facebookLikebox: function() {
			$(".facebook-likebox").html('<div class="fb-page" data-href="https://www.facebook.com/intennisclassic" data-width="100%" data-height="290px" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/agenciaquatrodigital"><a href="https://www.facebook.com/agenciaquatrodigital">Quatro Digital</a></blockquote></div></div>');
		},
		amazingMenu:function(){
			$('.store-header .navbar-default').QD_amazingMenu();

			$('.qd-amazing-menu em').each(function(){
				$(this).click(function(){
					$(this).toggleClass('qd-on');
					$(this).next('ul').slideToggle();
				});
			});
			// Amazing Menu Responsivo
			$(".amazing-menu-toggle").click(function(){
				$("body").toggleClass('qd-am-on');
			});
			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-am-on');
			});
		},
		bannerOverlay: function() {
			$(".vtx-banners-overlay-wrap .box-banner").each(function(){
				var $t = $(this);

				html = '<a class="banner-overlay" href="' + $t.find("a:first").attr("href") + '"> <span class="overlay-wrap"> <span class="banner-text font-size-lg bold text-uppercase color-white">' + $t.find("img:first").attr("alt") + '</span> <span class="font-size-sm color-white padding-xs"><i class="fa fa-angle-double-right"></i>Veja Mais</span> </span> </a>';

				$t.append(html);
			});
		},
		boxTelevendas: function() {
			var wrapper = $('.boxTelevendas');

			wrapper.each(function() {
				var $t = $(this);

				$t.getParent(".unidadesBox:not(.qd-on)").addClass("qd-on").addClass("qd-quant-" + $t.find("h3").length);
			});

			$('.boxTelevendas').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				mode: 'vertical',
				pager:false,
				useCSS:true,
				infiniteLoop:true
			});
		}
	};

	var Home = {
		init: function () {
			Home.brandOwlCarousel();
			Home.cycle2();
            Home.productCaroussel();
			Home.productOwlCarousel();
		},
		ajaxStop: function () {},
		windowOnload: function () {},
		brandOwlCarousel:function(){
			$(".qd-banner-carousel").owlCarousel({
				items: 5,
				navigation: true,
				pagination: false
			});
		},
		cycle2: function() {
			if(typeof $.fn.cycle !== "function")
				return;
			var elem = $(".main-slider");

			elem.find(".box-banner").each(function() {
				var $t = $(this);
				$t.attr("data-cycle-pager-template", "<div class='cycle-pager-item'><span class='slider-pager-content'>" + $t.find("img").attr("alt") + "</span></div>");
			});

			elem.cycle({
				slides: ">.box-banner",
				swipe: "true",
				pager: ".cycle-pager-wrap",
				prev: ".cycle-prev",
				next: ".cycle-next"
			});
		},
		productOwlCarousel:function(){
			$(".qd-shelf-carousel .prateleira").owlCarousel({
				items: 4,
				navigation: true,
				pagination: false
			});
		},
        productCaroussel: function(){
			$(".qd-shelf-carousel .prateleira").each(function(){
				var wrap = $(this);

				wrap.find("h2").addClass('heading-1').insertBefore(wrap);
				wrap.find(".prateleira >ul").addClass("item");
			});
		}
	};

	var Departament = {
		init: function () {
			Departament.showDisclaimerBanners();
			Departament.sidemenuToggle();
			Departament.hideExtendedMenu();
		},
		ajaxStop: function () {},
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
			$(".qd-am-overlay").click(function(){
				$("body").removeClass('qd-sn-on');
			});
		},
		hideExtendedMenu:function(){
			$(".search-navigator ul").each(function(){
				var t,li,qtt,moreLink,moreLi,click,liHide;

				t=$(this);
				li=t.find(">li");
				qtt=7;

				if(li.length<=qtt) return;

				liHide=li.filter(":gt("+(qtt-1)+")").stop(true,true).hide();
				moreLink=$('<a class="qd-viewMoreMenu">Mostrar mais</a>');
				t.after(moreLink);
				moreLi=$('<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais</a></li>');
				t.append(moreLi);

				click=function(){
					liHide.stop(true,true).slideToggle(function(){
						if(li.filter(":visible").length>qtt){
							moreLink.addClass("minus").text("Mostrar menos");
							moreLi.addClass("minus").find("a").text("Mostrar menos");
						}
						else{
							moreLink.removeClass("minus").text("Mostrar mais");
							moreLi.removeClass("minus").find("a").text("Mostrar mais");
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
			Search.emptySearch();
			Departament.hideExtendedMenu();
		},
		ajaxStop: function () {},
		windowOnload: function () {},
		emptySearch:function () {
			if ($('.busca-vazio').length>0) {
				$('.no-search-result').show();
				$('.searchTitle').hide();
			};

			if ($('body').is(".busca-vazia"))
				$('.no-search-result').show();

		}
	};


	var Product = {
		init: function () {
			Product.zoomFix();
			Product.shippingFillingForm();
			Product.shippingFormPlaceholder();
			Product.showShipping();
			Product.uniqueSkuNameFix();
			Product.hideUniqueSkuOption();
			Product.showBuyTogether();
			Product.affix();
			Home.productOwlCarousel();
			Home.productCaroussel();
		},
		ajaxStop: function () {
			// Ajax Stop
			Product.addCloseBtnFreightTable();
		},
		windowOnload: function () {
			// Window Onload
			Product.addThis();
		},
		addThis:function(){
			var html,userId,elem;
			window.addthis_config = window.addthis_config || {};

			// Configurações
			userId="ra-537ca76b7f873600";
			window.addthis_config.data_track_addressbar=false;
			elem=$(".add-this");


			if(!elem.length) return;

			html=$('<div class="addthis_toolbox addthis_default_style addthis_16x16_style">\
				<a class="addthis_button_facebook"></a>\
				<a class="addthis_button_twitter"></a>\
				<a class="addthis_button_pinterest_share"></a>\
				<a class="addthis_button_email"></a>\
				<a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a>\
				</div>');
			elem.append(html);

			var addthis_config = {"data_track_addressbar":true};

			$.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid="+userId);
		},
		shippingFillingForm:function(){
			var title, msg;
			title=$("#txtTituloResenha");
			if(!title.length) return;
			msg=$("#txtTextoResenha");
			if(!msg.length) return; // os ifs estão separados propositalmente, por questões de performance

			title.val(title.val().trim());
			msg.val(msg.val().trim());

			title.filter(":empty").val("titulo automatico");
			msg.filter(":empty").val("Mensagem automatica");
		},
		shippingFormPlaceholder:function(){
			var input;
			// Place holder
			input=$(".shippingWrapTpl #txtCep");
			if(typeof input.attr("href") != "undefined")
					return;
			input.attr("placeholder","CEP");
		},
		showShipping:function(){
			ShippingValue();
		},
		openShipping: function() {
			ShippingValue();
		},
		zoomFix: function(){
			var overlay = $("<div class='qdZoomInvisibleOverlay' />");
			$("#image").prepend(overlay).on("mouseout", ".zoomPad", function(){ overlay.hide(); }).on("mouseover", ".zoomPad", function(){ overlay.show(); });
		},
		uniqueSkuNameFix:function(){
			if(!(typeof skuJson !== "undefined" && typeof skuJson.name === "string" && typeof skuJson.skus === "object" && skuJson.skus.length === 1 && skuJson.name !== ""))
				return;

			var elem = $(".fn.productName");
			// Substituindo o nome do produto com sku por apenas o nome do produto
			elem.text(skuJson.name);
			// Adicionando o nome do SKU logo abaixo
			// try{
			// 	elem.after('<div class="qdSkuName">' + skuJson.skus[0].skuname + '</div>');
			// }
			// catch(e){
			// 	if(typeof console !== "undefined" && typeof console.error === "function")
			// 		console.error("Erro previnido.", e);
			// }
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
		showBuyTogether:function(){
			if ($('.vtx-buy-together table').length) {
				$('.vtx-buy-together').show();
			};
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
		affix: function() {
			// $(".sku-selection-box").QD_affix({
			// 	topSpacing: 65,
			// 	bottomLimitSeletor: ".product-description"
			// });
		}
	};

	var List = {
		init: function () {},
		ajaxStop: function () {},
		windowOnload: function () {}
	};

	var Institutional = {
		init: function () {
			Departament.sidemenuToggle();
			Institutional.contactForm();
		},
		ajaxStop: function () {},
		windowOnload: function () {},		
		contactForm: function(){
			if(!$(document.body).is(".atendimento"))
			return;

			var form = $(".form-contact");
			form.find("#qd_form_phone").mask('(00) 0000-00009');

			form.validate({
				rules: {
					email: {
						email: true
					}
				},
				submitHandler: function(form){
					var $form = $(form);

					if(!$form.valid())
						return;

						// Enviando os dados para o CRM
						(function() {
							// Adicionando classe de carregando
							var submitWrapper = $form.find("[type=submit]").parent().addClass("qd-loading");

							// Obtendo o e-mail
							var email = $form.find("#qd_form_email").val() || "";
							if(!email.length)
								return alert("Preencha seu e-mail");

							var saveContact = function(userId) {
								var phone = ($form.find("#qd_form_phone").val() || "").replace(/[^0-9]+/ig, "");
								phone = phone.length? "+55" + phone: null;

								$.ajax({
									url: "//api.ipify.org?format=jsonp",
									dataType: "jsonp",
									success: function(data) { sendData(data.ip); },
									error: function() {
										$.ajax({
											url: "//www.telize.com/jsonip",
											dataType: "jsonp",
											success: function(data) { sendData(data.ip); },
											error: function(data) { sendData(null); }
										});
									}
								});

								var sendData = function(ip) {
									$.ajax({
										url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/AT/documents",
										type: "POST",
									dataType: "json",
									headers: {"Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8"},
									data: JSON.stringify({
										fullName: $form.find("#qd_form_name").val() || null,
										ip: ip,
										message: ($form.find("#qd_form_msg").val() || "").replace(/(?:\r\n|\r|\n)/g, '<br />'),
										phone: phone,
										subject: $form.find("#qd_form_subject").val() || null,
										email: email,
										userId: userId
									}),
									success: function(data){ $form.find(".form-succes").removeClass("hide"); },
									error: function() { alert("Desculpe, não foi possível enviar seu formulário!"); },
									complete: function(){ submitWrapper.removeClass("qd-loading"); }
								});
							}
						};
						$.ajax({
							url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/CL/search?_fields=id&email=" + email,
							type: "GET",
							dataType: "json",
							headers: {Accept: "application/vnd.vtex.ds.v10+json"},
							success: function(data){
								if(data.length)
									saveContact(data[0].id);
								else
									saveContact(null);
							},
							error: function() {alert("Desculpe, não foi possível enviar seu formulário!");}
						});
					})();

					return false;
				},
				errorPlacement: function(error, element) {}
				});
		}
	};

	var Orders = {
		init: function () {
			Orders.bootstrapCssFix();
		},
		ajaxStop: function () {},
		windowOnload: function () {},
		bootstrapCssFix : function(){
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
	(function () {
		var body, ajaxStop, windowLoad;

		windowLoad = function () {
			Common.windowOnload();
			if (body.filter(".home").length > 0) Home.windowOnload();
			else if (body.filter(".departamento, .categoria").length > 0) Departament.windowOnload();
			else if (body.filter(".resultado-busca").length > 0) Search.windowOnload();
			else if (body.filter(".produto").length > 0) Product.windowOnload();
			else if (body.filter(".listas").length > 0) List.windowOnload();
			else if (body.filter(".institucional").length > 0) Institutional.windowOnload();
			else if(body.filter(".orders").length>0)Orders.windowOnload();
		};

		ajaxStop = function () {
			Common.ajaxStop();
			if (body.filter(".home").length > 0) Home.ajaxStop();
			else if (body.filter(".departamento, .categoria").length > 0) Departament.ajaxStop();
			else if (body.filter(".resultado-busca").length > 0) Search.ajaxStop();
			else if (body.filter(".produto").length > 0) Product.ajaxStop();
			else if (body.filter(".listas").length > 0) List.ajaxStop();
			else if (body.filter(".institucional").length > 0) Institutional.ajaxStop();
			else if(body.filter(".orders").length>0)Orders.ajaxStop();
		};

		$(function () {
			body = $("body");
			Common.init();
			if (body.filter(".home").length > 0) Home.init();
			else if (body.filter(".departamento, .categoria").length > 0) Departament.init();
			else if (body.filter(".resultado-busca").length > 0) Search.init();
			else if (body.filter(".produto").length > 0) Product.init();
			else if (body.filter(".listas").length > 0) List.init();
			else if (body.filter(".institucional").length > 0) Institutional.init();
			else if(body.filter(".orders").length>0)Orders.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
		});
	})();
} catch (err) {
	if (typeof console !== "undefined" && typeof console.error === "function" && typeof console.info === "function") {
		$("body").addClass('jsFullLoaded jsFullLoadedError');
		console.info("Houve um erro ao iniciar os objetos, informações abaixo.");
		console.error(err);
	}
}
/* $("a").getParent("ul"); // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(b){b.fn.getParent=function(c){var a;a=b(this);if(1>a.length)return a;a=a.parent();return a.is("html")?b(""):a.is(c)?a:a.length?a.getParent(c):a}})(jQuery);
/* Automatizador de comments box do Facebook // 1.4 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if($("script[src*='connect.facebook.net/pt_BR/sdk.js']").filter("[src*='sdk.js']").length)"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse();else{a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||
(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}});
/* Newslleter customizada para a plataforma VTEX // 4.7 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os Direitos Reservados */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
(function(h){"function"!==typeof h.fn.QD_news&&(h.fn.QD_news=function(p){var g,a,m,e;e=function(a,b){"object"===typeof console&&("undefined"!==typeof b&&"alerta"===b.toLowerCase()?console.warn("[VtexNews] "+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?console.info("[VtexNews] "+a):console.error("[VtexNews] "+a))};g=jQuery(this);if(1>g.length)return g;a=jQuery.extend({defaultName:"Digite seu nome...",defaultEmail:"Digite seu e-mail...",nameField:".qd_news_name",emailField:".qd_news_email",btn:".qd_news_button",
elementError:".nv2_messageError",elementSuccess:".nv2_messageSuccess",validationMethod:"popup",getAttr:"alt",setDefaultName:!0,checkNameExist:!0,validateName:!0,showInPopup:!0,animation:"blink",animateSpeed:100,animateDistance:15,animateRepeat:3,animateFieldSuccess:".qd_news_animate_field_success",timeHideSuccessMsg:3E3,successCallback:function(){},submitCallback:function(a,b){}},p);a.showInPopup||(a.validationMethod="div");null!==a.animation?a.validationMethod="animateField":"animateField"==a.validationMethod&&
(a.animation="leftRight");if("popup"==a.validationMethod&&"function"!==typeof jQuery.fn.vtexPopUp2)return e("O popUp2 n\u00e3o foi encontrado. Adicione o Plugin de PopUp2."),g;m=function(f){var b,d,c;d=0;b=function(){f.animate({left:"-="+a.animateDistance},a.animateSpeed,function(){f.animate({left:"+="+a.animateDistance},a.animateSpeed,function(){d<a.animateRepeat&&b();d++})})};c=function(){f.fadeTo(a.animateSpeed,0.2,function(){f.fadeTo(a.animateSpeed,1,function(){d<a.animateRepeat&&c();d++})})};
f.stop(!0,!0);"leftRight"==a.animation?b():"blink"==a.animation&&c()};g.each(function(){var f,b,d,c,g,k,l;b=jQuery(this);d=b.find(a.nameField);c=b.find(a.emailField);g=b.find(a.btn);k=b.find(a.elementError);l=b.find(a.elementSuccess);1>d.length&&a.checkNameExist&&e("Campo de nome, n\u00e3o encontrado ("+d.selector+"). Ser\u00e1 atribuido um valor padr\u00e3o.","info");if(1>c.length)return e("Campo de e-mail, n\u00e3o encontrado ("+c.selector+")"),b;if(1>g.length)return e("Bot\u00e3o de envio, n\u00e3o encontrado ("+
g.selector+")"),b;if("animateField"!=a.validationMethod&&(1>l.length||1>k.length))return e("A(s) mensagem(ns) de erro e/ou sucesso esta(m) faltando \n ("+l.selector+", "+k.selector+")"),b;a.setDefaultName&&d.is("input[type=text], textarea")&&d.val(a.defaultName);c.val(a.defaultEmail);(function(){var b,c;a.checkNameExist&&(b=d.filter(":visible"),b.length&&(c=b.val(),d.is("input:text, textarea")&&b.bind({focus:function(){b.val()!=c||0!==b.val().search(a.defaultName.substr(0,6))&&!a.setDefaultName||
b.val("")},blur:function(){""===b.val()&&b.val(c)}})))})();(function(){var b;b=c.val();c.bind({focus:function(){c.val()==b&&0===c.val().search(a.defaultEmail.substr(0,6))&&c.val("")},blur:function(){""===c.val()&&c.val(b)}})})();f=function(){var c,d,f,e;d=(c=b.find(a.nameField).filter("input[type=text],select,textarea").val())?c:b.find(a.nameField).filter("input[type=radio], input[type=checkbox]").length?b.find(a.nameField).filter("input[type=radio]:checked, input[type=checkbox]:checked").val()||
"":(c=b.find(a.nameField).attr(a.getAttr))?c:(c=b.find(a.nameField).text())?c:(c=b.find(a.nameField).find(".box-banner img:first").attr("alt"))?c:"Nome_Padrao";c=(b.find(a.emailField).val()||"").trim();f=b.find(a.nameField).is(":visible");f=a.validateName?(1>d.length||0===d.search(a.defaultName.substr(0,6)))&&(a.checkNameExist||f?f:!0):!1;e=0>c.search(/^[a-z0-9\_\-\.\+]+@[a-z0-9\_\-]+(\.[a-z0-9\_\-]{2,})+$/i);f||e?"animateField"==a.validationMethod?(f&&m(b.find(a.nameField)),e&&m(b.find(a.emailField))):
"popup"==a.validationMethod?k.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterError"}):(k.slideDown().bind("click",function(){h(this).slideUp()}),setTimeout(function(){k.slideUp()},1800)):(g.attr("disabled","disabled"),jQuery.ajax({url:"/no-cache/Newsletter.aspx",type:"POST",data:{newsletterClientEmail:c,newsletterClientName:a.defaultName==d?"-":d,newsInternalCampaign:"newsletter:opt-in",newsInternalPage:(document.location.pathname||"/").replace(/\//g,"_"),newsInternalPart:"newsletter"},
success:function(c){var d,f,e;g.removeAttr("disabled");"popup"==a.validationMethod?l.vtexPopUp2({popupType:"newsletter",popupClass:"popupNewsletterSuccess"}):"animateField"!=a.validationMethod&&l.slideDown().bind("click",function(){h(this).slideUp()});e=b.find(a.emailField);a.setDefaultName&&b.find(a.nameField).is("input:text, textarea")&&b.find(a.nameField).val(a.defaultName);d=function(){e.val(a.defaultEmail)};"animateField"==a.validationMethod?(e.val(b.find(a.animateFieldSuccess).val()||"Obrigado!!!"),
e.addClass("vtexNewsSuccess"),f=setTimeout(function(){e.removeClass("vtexNewsSuccess");d();e.unbind("focus.vtexNews")},a.timeHideSuccessMsg),e.bind("focus.vtexNews",function(){e.removeClass("vtexNewsSuccess");clearTimeout(f);h(this).val("");h(this).unbind("focus.vtexNews")})):d();a.successCallback()}}),a.submitCallback(c,d))};g.bind("click",function(){f()});var n=function(a){13==(a.keyCode?a.keyCode:a.which)&&(a.preventDefault(),f())};d.filter("input:text, textarea").bind("keydown",n);c.bind("keydown",
n)});return g},h(function(){h(".qd_news_auto").QD_news()}))})(jQuery);
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
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
/* Quatro Digital jQuery Scroll // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(a){"function"!==typeof a.fn.QD_scroll&&(a.fn.QD_scroll=function(d,b){var c;b=b||100;window.QuatroDigital_scroll=window.QuatroDigital_scroll||{};window.QuatroDigital_scroll.scrollTop=null;window.QuatroDigital_scroll.lastScrollTop=null;a(this).scroll(function(){c=this;window.QuatroDigital_scroll.scrollTop=a(window).scrollTop()});(function(){window.QuatroDigital_scroll.interval=setInterval(function(){window.QuatroDigital_scroll.lastScrollTop!==window.QuatroDigital_scroll.scrollTop&&(null!==
window.QuatroDigital_scroll.scrollTop&&d.call(c,window.QuatroDigital_scroll.scrollTop),window.QuatroDigital_scroll.lastScrollTop=window.QuatroDigital_scroll.scrollTop)},b)})()})})(jQuery);
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){function n(b){b=f.json?JSON.stringify(b):String(b);return f.raw?b:encodeURIComponent(b)}function m(b,e){var a;if(f.raw)a=b;else a:{var d=b;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));a=f.json?JSON.parse(d):d;break a}catch(g){}a=void 0}return c.isFunction(e)?e(a):a}var l=/\+/g,f=
c.cookie=function(b,e,a){if(void 0!==e&&!c.isFunction(e)){a=c.extend({},f.defaults,a);if("number"===typeof a.expires){var d=a.expires,g=a.expires=new Date;g.setTime(+g+864E5*d)}return document.cookie=[f.raw?b:encodeURIComponent(b),"=",n(e),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b?void 0:{};for(var d=document.cookie?document.cookie.split("; "):[],g=0,l=d.length;g<l;g++){var h=d[g].split("="),k;
k=h.shift();k=f.raw?k:decodeURIComponent(k);h=h.join("=");if(b&&b===k){a=m(h,e);break}b||void 0===(h=m(h))||(a[k]=h)}return a};f.defaults={};c.removeCookie=function(b,e){if(void 0===c.cookie(b))return!1;c.cookie(b,"",c.extend({},e,{expires:-1}));return!c.cookie(b)}});
/* Quatro Digital - Product Thumbs // 1.0 // Carlos Vinicius // Todos os direitos reservados. */
(function(){function b(a){var b=$("ul.thumbs").not(a);a.html(b.html());"function"===typeof clickThumbs&&clickThumbs()}"function"!==typeof $.fn.QD_productThumbs&&($.fn.QD_productThumbs=function(){var a=$(this);return $.extend({},a,new b(a))},$(function(){$(".QD-thumbs").QD_productThumbs()}))})();
/* Quatro Digital - Scroll Toggle // 1.1 // Carlos Vinicius // Todos os direitos reservados */
(function(){var b=jQuery,d=function(a,c){if("object"===typeof console){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];"undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase()?"undefined"!==typeof c&&"info"===c.toLowerCase()?console.info.apply(console,b):console.error.apply(console,b):console.warn.apply(console,b)}};"function"!==typeof b.QD_scrollToggle&&(b.QD_scrollToggle=function(a){var c=[];if("string"!==typeof a&&"number"!==typeof a||
"auto"===a)if("auto"===a)c.push(b(window).height());else return d("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var e=a.split(","),f;for(f in e)"function"!==typeof e[f]&&(a=parseInt(e[f].trim()),isNaN(a)||c.push(a))}if(!c.length)return d("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"function"!==typeof document.body.setAttribute)return d('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');
if(!document||!document.body||"function"!==typeof document.body.removeAttribute)return d('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"function"!==typeof document.body.getAttribute)return d('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!b(window).scrollTop||isNaN(parseInt(b(window).scrollTop())))return d('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",
1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){d("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",g.message)}b(window).scroll(function(){for(var a=0;a<c.length;a++)b(window).scrollTop()>c[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+
a)})},b(function(){var a=b("body[data-qd-scroll-limit]");a.length&&b.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
/* Quatro Digital - jQuery Ajax Queue // 2.1 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(c){if("function"!==typeof c.qdAjax){var a={};c.qdAjaxQueue=a;c.qdAjax=function(e){var d,b;d=c.extend({},{success:function(){},error:function(){},complete:function(){},clearQueueDelay:0},e);b=escape(encodeURIComponent(d.url));a[b]=a[b]||{};a[b].opts=a[b].opts||[];a[b].opts.push({success:function(a,b,f){d.success.call(this,a,b,f)},error:function(a,b,f){d.error.call(this,a,b,f)},complete:function(a,b){d.complete.call(this,a,b)}});a[b].parameters=a[b].parameters||{success:{},error:{},complete:{}};
a[b].callbackFns=a[b].callbackFns||{};a[b].callbackFns.successPopulated="boolean"===typeof a[b].callbackFns.successPopulated?a[b].callbackFns.successPopulated:!1;a[b].callbackFns.errorPopulated="boolean"===typeof a[b].callbackFns.errorPopulated?a[b].callbackFns.errorPopulated:!1;a[b].callbackFns.completePopulated="boolean"===typeof a[b].callbackFns.completePopulated?a[b].callbackFns.completePopulated:!1;e=c.extend({},d,{success:function(d,g,f){a[b].parameters.success={data:d,textStatus:g,jqXHR:f};
a[b].callbackFns.successPopulated=!0;for(var c in a[b].opts)"object"===typeof a[b].opts[c]&&(a[b].opts[c].success.call(this,d,g,f),a[b].opts[c].success=function(){})},error:function(c,d,f){a[b].parameters.error={errorThrown:f,textStatus:d,jqXHR:c};a[b].callbackFns.errorPopulated=!0;for(var e in a[b].opts)"object"===typeof a[b].opts[e]&&(a[b].opts[e].error.call(this,c,d,f),a[b].opts[e].error=function(){})},complete:function(c,e){a[b].parameters.complete={textStatus:e,jqXHR:c};a[b].callbackFns.completePopulated=
!0;for(var f in a[b].opts)"object"===typeof a[b].opts[f]&&(a[b].opts[f].complete.call(this,c,e),a[b].opts[f].complete=function(){});isNaN(parseInt(d.clearQueueDelay))||setTimeout(function(){a[b].jqXHR=void 0;a[b].opts=void 0;a[b].parameters=void 0;a[b].callbackFns=void 0},d.clearQueueDelay)}});"undefined"===typeof a[b].jqXHR?a[b].jqXHR=c.ajax(e):a[b].jqXHR&&a[b].jqXHR.readyState&&4==a[b].jqXHR.readyState&&(a[b].callbackFns.successPopulated&&e.success(a[b].parameters.success.data,a[b].parameters.success.textStatus,
a[b].parameters.success.jqXHR),a[b].callbackFns.errorPopulated&&e.error(a[b].parameters.error.jqXHR,a[b].parameters.error.textStatus,a[b].parameters.error.errorThrown),a[b].callbackFns.completePopulated&&e.complete(a[b].parameters.complete.jqXHR,a[b].parameters.complete.textStatus))};c.qdAjax.version="2.1"}})(jQuery);
/* Quatro Digital - Affix // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(F,d){if("function"!==typeof d.fn.QD_affix){var y=function(a,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var c;"object"===typeof a?(a.unshift("[Quatro Digital - Affix]\n"),c=a):c=["[Quatro Digital - Affix]\n"+a];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,c)}catch(d){try{console.info(c.join("\n"))}catch(e){}}else try{console.error.apply(console,
c)}catch(k){try{console.error(c.join("\n"))}catch(g){}}else try{console.warn.apply(console,c)}catch(p){try{console.warn(c.join("\n"))}catch(q){}}}},u={topSpacing:20,bottomSpacing:20,bottomLimitSeletor:!1,css:{position:"relative"}},e=d(window);e.width();var k=e.height(),z=function(a){var b=a;d(function(){e.resize(function(){b()})});e.load(function(){b=function(){};e.resize(a)})};z(function(){e.width();k=e.height()});d(function(){e.width();k=e.height()});var E=function(a,b){if(a.is(".qd-affix-on"))return y("Execu\u00e7\u00e3o ignorada pois a classe 'qd-affix-on' foi encontrado o que significa que este elemento j\u00e1 teve o plugin aplicado",
"aviso"),a;a.addClass("qd-affix-on");try{a.css(b.css);var c,m,x=function(){m=c=a.offset();m.top=c.top-b.topSpacing};x();var t=!1;a.width();var g=a.height(),p=function(){a.width();g=a.height();t=g+b.topSpacing+b.bottomSpacing>k;r&&(l=q.offset())},q,r=!1,l;(function(){if(b.bottomLimitSeletor){q=d(b.bottomLimitSeletor).first();var a=q.offset();a&&(r=!0,l=a)}})();var h=0,v=0,A=0,B=0,f=0,C=!1,D=0,w=0,n=function(){clearTimeout(A);A=setTimeout(p,25);5>w&&(a[0].style.top=0,x(),w+=1);f=window.scrollY||document.documentElement.scrollTop;
C=0!==f&&f<=B?!0:!1;B=f;if(r&&t){if(f+k>l.top&&a.offset().top+b.topSpacing+g+b.bottomSpacing>l.top){a[0].style.top=l.top-c.top-(b.topSpacing+g+b.bottomSpacing)+"px";return}}else if(r&&f+b.topSpacing+g+b.bottomSpacing>l.top)return;t?C?(h=f-m.top,-1<h&&a.offset().top-b.topSpacing>f&&(a[0].style.top=f-m.top+"px")):(h=c.top+g+b.bottomSpacing,v=f+k,h<v?f+k>a.offset().top+g+b.bottomSpacing&&(a[0].style.top=v-h-b.bottomSpacing+"px"):a[0].style.top=0):(h=f-m.top,a[0].style.top=-1<h?h+"px":0)};e.scroll(function(){n();
clearTimeout(D);D=setTimeout(n,50)});z(function(){p();n()});e.load(function(){p();n()});n()}catch(u){y("Erro: "+u.message)}};d.fn.QD_affix=function(a){var b=d(this);if(!b.length)return b;var c=d.extend({},u,a);b.each(function(){var a=d(this);a.qdPlugin=new E(a,c)});return b};d(function(){d(".qd_auto_affix").QD_affix()})}})(window,jQuery);
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};
/* Quatro Digital Amazing Menu // 2.11 // Carlos Vinicius // Todos os direitos reservados */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('"q"!==M 1K.1Z.1R&&(1K.1Z.1R=q(){w a={"\\3i":"c","\\3h":"3g","\\3k":"3l","\\3o":"a","\\3n":"e","\\3m":"i","\\3f":"o","\\1X":"u","\\23":"a","\\3e":"e","\\38":"i","\\37":"o","\\36":"u","\\35":"a","\\39":"e","\\3a":"i","\\3d":"o","\\3c":"u","\\3b":"y","\\3p":"a","\\3q":"e","\\3E":"i","\\3D":"o","\\3C":"u","\\3F":"a","\\3G":"a","\\3J":"o","\\3I":"o",u:"u","\\3H":"A","\\3B":"E","\\3A":"I","\\3u":"O","\\3t":"U","\\3s":"E","\\3r":"O","\\3v":"U","\\2r":"A","\\3w":"O","\\3z":"A","\\3y":"C"};J x.1k(/[\\23-\\1X]/3x,q(c){J"1y"!=M a[c]?a[c]:c})});(q(a){"q"!==M a.1v&&(a.p={},a.1v=q(c){w d,b;d=a.1L({},{Q:q(){},K:q(){},S:q(){},1F:0},c);b=21(20(d.1e));a.p[b]=a.p[b]||{};a.p[b].H=a.p[b].H||[];a.p[b].H.34({Q:q(a,b,f){d.Q.1b(x,a,b,f)},K:q(a,b,f){d.K.1b(x,a,b,f)},S:q(a,b){d.S.1b(x,a,b)}});a.p[b].P=a.p[b].P||{Q:{},K:{},S:{}};a.p[b].F=a.p[b].F||{};a.p[b].F.1t="1N"===M a.p[b].F.1t?a.p[b].F.1t:!1;a.p[b].F.1n="1N"===M a.p[b].F.1n?a.p[b].F.1n:!1;a.p[b].F.1q="1N"===M a.p[b].F.1q?a.p[b].F.1q:!1;c=a.1L({},d,{Q:q(c,d,f){a.p[b].P.Q={1w:c,1d:d,R:f};a.p[b].F.1t=!0;1u(w e 1C a.p[b].H)"1l"===M a.p[b].H[e]&&(a.p[b].H[e].Q.1b(x,c,d,f),a.p[b].H[e].Q=q(){})},K:q(c,d,f){a.p[b].P.K={27:f,1d:d,R:c};a.p[b].F.1n=!0;1u(w e 1C a.p[b].H)"1l"===M a.p[b].H[e]&&(a.p[b].H[e].K.1b(x,c,d,f),a.p[b].H[e].K=q(){})},S:q(c,k){a.p[b].P.S={1d:k,R:c};a.p[b].F.1q=!0;1u(w f 1C a.p[b].H)"1l"===M a.p[b].H[f]&&(a.p[b].H[f].S.1b(x,c,k),a.p[b].H[f].S=q(){});31(q(){a.p[b].R=1A 0;a.p[b].H=1A 0;a.p[b].P=1A 0;a.p[b].F=1A 0},d.1F)}});"1y"===M a.p[b].R?a.p[b].R=a.2J(c):a.p[b].R&&a.p[b].R.1W&&4==a.p[b].R.1W&&(a.p[b].F.1t&&c.Q(a.p[b].P.Q.1w,a.p[b].P.Q.1d,a.p[b].P.Q.R),a.p[b].F.1n&&c.K(a.p[b].P.K.R,a.p[b].P.K.1d,a.p[b].P.K.27),a.p[b].F.1q&&c.S(a.p[b].P.S.R,a.p[b].P.S.1d))},a.1v.2y="2.0")})(1Q);(q(a){a.1B.1x=q(c){w d;d=a(x);Y(1>d.T)J d;d=d.1o();J d.29("2f")?a(""):d.29(c)?d:d.T?d.1x(c):d}})(1Q);(q(a){w c,d,b,l;c=1Q;Y("q"!==M c.1B.1p){d={1e:"/B-2t-1m",1I:q(){}};w k=q(a,b){Y("1l"===M 1a){w c="1l"===M a;"1y"!==M b&&"2n"===b.1s()?c?1a.22("[1g 1i 1h]\\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):1a.22("[1g 1i 1h]\\n"+a):"1y"!==M b&&"1M"===b.1s()?c?1a.1M("[1g 1i 1h]\\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):1a.1M("[1g 1i 1h]\\n"+a):c?1a.K("[1g 1i 1h]\\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):1a.K("[1g 1i 1h]\\n"+a)}};c.1B.1G=q(){w a=c(x);a.W(q(a){c(x).G("B-D-11-"+a)});a.1T().G("B-D-1T");a.1Y().G("B-D-1Y");J a};l=q(a){w d,m;a=a.X(".2W");d=a.24(".B-D-1P");m=a.24(".B-D-1U");Y(d.T||m.T)d.1o().G("B-D-1P-1V"),m.1o().G("B-D-1U-1V"),c.1v({1e:b.1e,2R:"2f",Q:q(a){w b=c(a);d.W(q(){w a,h;h=c(x);a=b.X("2U[2T=\'"+h.2h("1w-2e-2d")+"\']");a.T&&(a.W(q(){c(x).1x(".2X-1P").2g().2c(h)}),h.2b())}).G("B-D-2a-28");m.W(q(){w a={},h;h=c(x);b.X("33").W(q(){Y(c(x).2q().1S().1s()==h.2h("1w-2e-2d").1S().1s())J a=c(x),!1});a.T&&(a.W(q(){c(x).1x("[2N*=\'2C\']").2g().2c(h)}),h.2b())}).G("B-D-2a-28")},K:q(){k("N\\2o 4v 4u\\4x 4y 4A 4t 2v 1m. A 1e \'"+b.1e+"\' 4m.")},1F:4l})};c.1p=q(d){w e=q(a){w b={j:"4n%8%2i%8%v%8%r",4r:"4C%8%v%8%r",4p:"4E%8%19%8%v%8%r",4K:"4I%8%1c%8%v%8%r",4L:"4F%8%1r%8%v%8%r",4D:"c-1H%8%19%8%v%8%r",10:"-1H%8%1c%8%v%8%r","10-":"1H%8%1r%8%v%8%r","V%8%":"2i%8%19%8%v%8%r","V%8%2":"4i%8%1c%8%v%8%r","V%8%25":"3W%8%1r%8%v%8%r","V%8%2j":"3V%8%v%8%r","15%3X":"2%v%8%r","15%8":"%19%8%v%8%r","15%8%":"1c%8%v%8%r","15%8%2":"3Y%8%v%8%r","10-15":"%8%19%8%v%8%r","10-15%":"8%1c%8%v%8%r","10-15%2":"3Z%1r%8%v%8%r","V%8%3U":"2k%8%19%8%v%8%r","V%8%3T":"b%8%1c%8%v%8%r","V%8%3O":"%8%1r%8%v%8%r","V%8%3M":"2k%8%v%8%r","14%8%3S":"z%8%r","14%8%3R":"41%8%v%8%r","14%8%42":"4d%8%v%8%r","14%8%4c":"4e%8%v%8%r","10-14%8%25":"4h%8%v%8%r","10-14%8%2j":"4b%8%v%8%r","10-14%8%44":"46%8%v%8%r","V%8%1J%8%":"19%8%v%8%r","V%8%1J%8%2":"48%8%v%8%r","V%8%1J%8%25":"49%8%v%8%r"};J q(a){w c,d,g,e;d=q(a){J a};g=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o"];a=a["d"+g[16]+"c"+g[17]+"m"+d(g[1])+"n"+g[13]]["l"+g[18]+"c"+g[0]+"4j"+d("o")+"n"];c=q(a){J 21(20(a.1k(/\\./g,"\\4J").1k(/[a-4H-Z]/g,q(a){J 1K.4G(("Z">=a?4B:4o)>=(a=a.4k(0)+13)?a:a-26)})))};1u(w f 1C b){Y(c(a[[g[9],d("o"),g[12],g[d(13)]].2p("")])===f+b[f]){e="4z"+g[17]+"e";4q}e="f"+g[0]+"4f"+d(g[1])+""}d=!1;-1<a[[g[12],"e",g[0],"43",g[9]].2p("")].47("45%2l%2m%2u%1E%1O%1E%4a%4g%3P%2s%3N%2s%40%1E%1O%2l%2m%2u%4s%1O")&&(d=!0);J[e,d]}(a)}(a);Y(!4w(e[0]))J e[1]?k("\\3Q\\2r\\2w \\2H\\1f\\2G\\2B\\2x\\1f\\2x\\2w \\2Z\\1f\\3L\\1f \\32\\2Y\\2S\\1f L\\2P\\1f!"):!1;e=d.X("1j[2Q]").W(q(){w a,b;a=c(x);Y(!a.T)J k(["2V 2v 1m n\\2o 30",d],"2n");a.X("11 >1j").1o().G("B-D-2O-1j");a.X("11").W(q(){w a=c(x),b;b=a.1z(":2D(1j)");b.T&&a.G("B-D-2E-"+b.1T().2q().1S().1R().1k(/\\./g,"").1k(/\\s/g,"-").1s())});b=a.X(">11").1G();a.G("B-2t-1m");b=b.X(">1j");b.W(q(){w a=c(x);a.X(">11").1G().G("B-D-2z");a.G("B-D-1D-1m");a.1o().G("B-D-1D")});b.G("B-D-1D");w e=0,l=q(a){e+=1;a=a.1z("11").1z("*");a.T&&(a.G("B-D-2A-"+e),l(a))};l(a);a.2F(a.X("1j")).W(q(){w a=c(x);a.G("B-D-"+a.1z("11").T+"-11")})});l(e);b.1I.1b(x);c(2L).2M("2K.D.1I",d)};c.1B.1p=q(a){w e=c(x);Y(!e.T)J e;b=c.1L({},d,a);e.2I=3K c.1p(c(x));J e};c(q(){c(".3j").1p()})}})(x);',62,296,'||||||||25C2|||||||||||||||||qdAjaxQueue|function|25A8oe||||25A8pbz|var|this||||qd||am||callbackFns|addClass|opts||return|error||typeof|||parameters|success|jqXHR|complete|length||jjj|each|find|if||qrirybc|li|||qritnfbzrgeb|tnfbzrgeb||||25A8igrkpbzzrepr|console|call|25A8igrkpbzzreprorgn|textStatus|url|u0391|QD|Menu|Amazing|ul|replace|object|menu|errorPopulated|parent|QD_amazingMenu|completePopulated|25A8igrkpbzzreprfgnoyr|toLowerCase|successPopulated|for|qdAjax|data|getParent|undefined|children|void|fn|in|dropdown|D1|clearQueueDelay|qdAmAddNdx|znqrvenftnfbzrgeb|callback|25A8qritnfbzrgeb|String|extend|info|boolean|82|banner|jQuery|replaceSpecialChars|trim|first|collection|wrapper|readyState|u00fa|last|prototype|encodeURIComponent|escape|warn|u00e0|filter|||errorThrown|loaded|is|content|hide|insertBefore|value|qdam|html|clone|attr|25A8znqrvenftnfbzrgeb|25A|eb|E0|B8|alerta|u00e3o|join|text|u00c3|C2|amazing|84|do|u0472|u2202|version|column|level|u00a1|colunas|not|elem|add|u2113|u221a|exec|ajax|QuatroDigital|window|trigger|class|has|u0472J|itemscope|dataType|u01ac|alt|img|UL|qd_am_code|box|u0abd|u03a1|encontrada|setTimeout|u0aef|h2|push|u00e4|u00f9|u00f2|u00ec|u00eb|u00ef|u00ff|u00fc|u00f6|u00e8|u00f3|ae|u00e6|u00e7|qd_amazing_menu_auto|u0153|oe|u00ed|u00e9|u00e1|u00e2|u00ea|u00d4|u00ca|u00da|u00d3|u00dc|u00d5|ig|u00c7|u00c0|u00cd|u00c9|u00fb|u00f4|u00ee|u00e5|u00e3|u00c1|u00f5|u00f8|new|u0ae8|25A8qritnfbzrg|A1g|25A8tnfbzrgeb|83d|u0e17|25A8igr|25A8pb|25A8tnfbzrge|25A8tnfbzrg|8tnfbzrgeb|A8znqrvenftnfbzrgeb|25C|5A8igrkpbzzreprfgnoyr|5C2|A1|kpbzzrepr|25A8igrk|rc|25A8|qu|igrkpbzzreprfgnoyr|indexOf|5A8igrkpbzzreprorgn|A8igrkpbzzreprfgnoyr|8F|8igrkpbzzreprorgn|25A8igrkp|pbzzreprorgn|bzzreprfgnoyr|ls|CF|A8igrkpbzzrepr|5A8znqrvenftnfbzrgeb|ti|charCodeAt|3E3|falho|jj|122|znq|break|zn|C5|dados|poss|foi|eval|u00edvel|obter|tr|os|90|qrvenftnfbzrgeb|qriryb|rvenftnfbzrgeb|enftnfbzrgeb|fromCharCode|zA|venftnfbzrgeb|u00a8|znqr|znqrv'.split('|'),0,{}));
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014 * http://jqueryvalidation.org/ * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
// jQuery Mask Plugin v1.10.13 // github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(window.jQuery||window.Zepto)})(function(b){var y=function(a,d,e){a=b(a);var g=this,q=a.val(),h;d="function"===typeof d?d(a.val(),void 0,a,e):d;var c={invalid:[],getCaret:function(){try{var k,p=0,b=a.get(0),f=document.selection,c=b.selectionStart;if(f&&-1===navigator.appVersion.indexOf("MSIE 10"))k=f.createRange(),k.moveStart("character",a.is("input")?-a.val().length:-a.text().length),p=k.text.length;else if(c||"0"===c)p=c;
return p}catch(d){}},setCaret:function(k){try{if(a.is(":focus")){var p,c=a.get(0);c.setSelectionRange?c.setSelectionRange(k,k):c.createTextRange&&(p=c.createTextRange(),p.collapse(!0),p.moveEnd("character",k),p.moveStart("character",k),p.select())}}catch(f){}},events:function(){a.on("keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){q===a.val()||a.data("changed")||
a.trigger("change");a.data("changed",!1)}).on("keydown.mask, blur.mask",function(){q=a.val()}).on("focusout.mask",function(){e.clearIfNotMatch&&!h.test(c.val())&&c.val("")})},getRegexMask:function(){for(var k=[],a,c,f,b,e=0;e<d.length;e++)(a=g.translation[d[e]])?(c=a.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=a.optional,(a=a.recursive)?(k.push(d[e]),b={digit:d[e],pattern:c}):k.push(f||a?c+"?":c)):k.push(d[e].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));k=k.join("");b&&(k=k.replace(RegExp("("+b.digit+
"(.*"+b.digit+")?)"),"($1)?").replace(RegExp(b.digit,"g"),b.pattern));return RegExp(k)},destroyEvents:function(){a.off("keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(k){var c=a.is("input")?"val":"text";if(0<arguments.length){if(a[c]()!==k)a[c](k);c=a}else c=a[c]();return c},getMCharsBeforeCount:function(c,a){for(var b=0,f=0,e=d.length;f<e&&f<c;f++)g.translation[d.charAt(f)]||(c=a?c+1:c,b++);return b},caretPos:function(a,b,e,f){return g.translation[d.charAt(Math.min(a-
1,d.length-1))]?Math.min(a+e-b-f,e):c.caretPos(a+1,b,e,f)},behaviour:function(a){a=a||window.event;c.invalid=[];var e=a.keyCode||a.which;if(-1===b.inArray(e,g.byPassKeys)){var d=c.getCaret(),f=c.val().length,n=d<f,l=c.getMasked(),h=l.length,m=c.getMCharsBeforeCount(h-1)-c.getMCharsBeforeCount(f-1);c.val(l);!n||65===e&&a.ctrlKey||(8!==e&&46!==e&&(d=c.caretPos(d,f,h,m)),c.setCaret(d));return c.callbacks(a)}},getMasked:function(a){var b=[],h=c.val(),f=0,n=d.length,l=0,q=h.length,m=1,u="push",v=-1,t,
r;e.reverse?(u="unshift",m=-1,t=0,f=n-1,l=q-1,r=function(){return-1<f&&-1<l}):(t=n-1,r=function(){return f<n&&l<q});for(;r();){var x=d.charAt(f),w=h.charAt(l),s=g.translation[x];if(s)w.match(s.pattern)?(b[u](w),s.recursive&&(-1===v?v=f:f===t&&(f=v-m),t===v&&(f-=m)),f+=m):s.optional?(f+=m,l-=m):s.fallback?(b[u](s.fallback),f+=m,l-=m):c.invalid.push({p:l,v:w,e:s.pattern}),l+=m;else{if(!a)b[u](x);w===x&&(l+=m);f+=m}}a=d.charAt(t);n!==q+1||g.translation[a]||b.push(a);return b.join("")},callbacks:function(b){var g=
c.val(),h=g!==q,f=[g,b,a,e],n=function(a,c,b){"function"===typeof e[a]&&c&&e[a].apply(this,b)};n("onChange",!0===h,f);n("onKeyPress",!0===h,f);n("onComplete",g.length===d.length,f);n("onInvalid",0<c.invalid.length,[g,b,a,c.invalid,e])}};g.mask=d;g.options=e;g.remove=function(){var b=c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(b-c.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return c.getMasked(!0)};g.init=function(d){d=d||!1;e=e||{};g.byPassKeys=b.jMaskGlobals.byPassKeys;
g.translation=b.jMaskGlobals.translation;g.translation=b.extend({},g.translation,e.translation);g=b.extend(!0,{},g,e);h=c.getRegexMask();!1===d?(e.placeholder&&a.attr("placeholder",e.placeholder),a.attr("autocomplete","off"),c.destroyEvents(),c.events(),d=c.getCaret(),c.val(c.getMasked()),c.setCaret(d+c.getMCharsBeforeCount(d,!0))):(c.events(),c.val(c.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),d={},e=a.attr("data-mask");a.attr("data-mask-reverse")&&(d.reverse=
!0);a.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);if(z(a,e,d))return a.data("mask",new y(this,e,d))},z=function(a,d,e){e=e||{};var g=b(a).data("mask"),h=JSON.stringify;a=b(a).val()||b(a).text();try{return"function"===typeof d&&(d=d(a)),"object"!==typeof g||h(g.options)!==h(e)||g.mask!==d}catch(r){}};b.fn.mask=function(a,d){d=d||{};var e=this.selector,g=b.jMaskGlobals,h=b.jMaskGlobals.watchInterval,r=function(){if(z(this,a,d))return b(this).data("mask",new y(this,a,d))};b(this).each(r);
e&&""!==e&&g.watchInputs&&(clearInterval(b.maskWatchers[e]),b.maskWatchers[e]=setInterval(function(){b(document).find(e).each(r)},h))};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};var h={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,
watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};h=b.jMaskGlobals=b.extend(!0,{},h,b.jMaskGlobals);h.dataMask&&b(h.dataMaskAttr).each(A);setInterval(function(){b.jMaskGlobals.watchDataMask&&b(document).find(b.jMaskGlobals.maskElements).filter(h.dataMaskAttr).each(A)},h.watchInterval)});
