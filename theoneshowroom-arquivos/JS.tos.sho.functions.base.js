/**
* Funções base
*/
// qd-include ../qd-quatro-lib-plugins/String Extender/StringExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Array Extender/ArrayExtender.min.js

try {
	var Common = {
		run: function() {},
		init: function() {
			Common.setStoreType();
			Common.setHeaderMenu();
			Common.redirectPages();
			Common.restrictSearch();
			Common.vtexBindQuickViewDestroy();
			Common.collapseMenuMobile();
			Common.maskInputs();
			Common.loginLandingPage();
			Common.openMenuTb();
			Common.brandAccess();

		},
		ajaxStop: function() {},
		windowOnload: function() {},
		vtexBindQuickViewDestroy: function() {
			window.bindQuickView = function() {};
		},
		loginLandingPage: function(){
			$(".ld__header-login-btns-wrap a.active").click(function () {
				$(".ld__header-login-btns-wrap").toggleClass("qd-active");
			});
		},
		redirectPages: function(){

			if(window.location.host.toLowerCase() == 'www.the1showroom.com'){
			return;
			}
			if (location.pathname.toLowerCase() != '/sistema/401' && location.pathname.toLowerCase().indexOf('/sistema/401') > -1){
				window.location.host = 'www.the1showroom.com';
			}

		},
		setStoreType: function() {
			var cookie = '/home-beauty';
			switch (jsnomeLoja) {
				case "the1home":
				cookie = '/home-home';
				break;

				case "the1fashion":
				cookie = '/home-fashion';
				break;

				default:
				break;
			}
			$.cookie('location', cookie);
		},
		setHeaderMenu: function() {
			var location = $.cookie('location') || false;
			if (!location)
			return;

			if (location == '/home-beauty') {
				$('.page-header__nav a[href*="-beauty"]').show();
				$('.page-header__nav a[href*="-beauty"]').addClass('active');
				$('.page-menu__beauty').show();
				$('.page-header__menu-mobile--category > li').eq(1).remove();
				$('.page-header__menu-mobile--category > li').eq(0).remove();
			}
			else if (location == '/home-fashion') {
				$('.page-header__nav a[href*="-fashion"]').show();
				$('.page-header__nav a[href*="-fashion"]').addClass('active');
				$('.page-menu__fashion').show();
				$('.page-header__menu-mobile--category > li').eq(2).remove();
				$('.page-header__menu-mobile--category > li').eq(1).remove();
			}
			else if (location == '/home-home') {
				$('.page-header__nav a[href*="-home"]').show();
				$('.page-header__nav a[href*="-home"]').addClass('active');
				$('.page-menu__home').show();
				$('.page-header__menu-mobile--category > li').eq(2).remove();
				$('.page-header__menu-mobile--category > li').eq(0).remove();
			}
		},
		restrictSearch: function() {
			var segment = $.cookie('segment') || false;
			if (!segment)
			return;

			var searchSelectWrapper = $(".page-header__search-container select");
			if (segment == 'fashion')
			searchSelectWrapper.val("4");
			else if (segment == 'beauty')
			searchSelectWrapper.val("11");
			else if (segment == 'home')
			searchSelectWrapper.val("10");
		},
		collapseMenuMobile: function () {
			var firstLevel = $('.mobile-only .navigation__menu-content--wrapper > li');
			var secondLevel = $('.mobile-only .navigation__menu-block--title > h3');
			var elemPlus = '<a class="tag expansor" href="#">+</a>';
			var elemMinus = '<a class="tag reverse" href="#">-</a>';
            var findElem = '> .expansor, > .reverse';

			firstLevel.each(function (e) {
				var $t = $(this);
				$t.append(elemPlus);
				$t.append(elemMinus);

				$t.find(findElem).click(function (e) {
					$t.toggleClass('active');
					$t.next().slideToggle('slow');
				});
			});

			secondLevel.each(function (e) {
				var $t = $(this);
				var wrapper = $t.closest('.navigation__menu-block--title');

				if (!wrapper.next('.navigation__menu-content--itens').length)
				return;

				$t.append(elemPlus);
				$t.append(elemMinus);
				$t.find(findElem).click(function (e) {
					$t.toggleClass('active');
					$t.parent().next().slideToggle('slow');
				});
			});
		},
		openMenuTb: function () {
			if ($(window).width() > 1024) return;

			$(".navigation__menu-content--wrapper").off('mouseover');
			$(".navigation__menu-content--wrapper").off('mouseout');
			$('.desktop-only .navigation__menu-content--wrapper li > a').each(function (e) {
				var $t = $(this);
				$t.click(function (e) {
					e.preventDefault();
					$t.removeAttr("href");
					$t.closest('.navigation__menu-content--wrapper').siblings('.navigation__menu-content--wrapper').removeClass('qd-active');
					$t.closest('.navigation__menu-content--wrapper').toggleClass('qd-active');
				});

			});
		},
		maskInputs: function() {
			var numberMask = /[0-9]/;
			var ignoreKeys = ['Backspace', 'Enter', 'Tab'];
			$('input[type=tel]').on('keydown', function(e) {
				if(!e.key || ignoreKeys.indexOf(e.key) > -1)
				return;
				if(!e.key.match(numberMask))
				e.preventDefault();
			});
		},
		brandAccess: function() {

			// Busca no masterData se CL é Brand
			function defineCookie() {
				var email = vtexjs.checkout.orderForm.clientProfileData.email;
				$.ajax({
					url: "//api.vtexcrm.com.br/theoneshowroom/dataentities/CL/search?email="+ encodeURIComponent(email) +"&_fields=isBrand",
					type: "GET",
					dataType: "json",
					headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
					success: function(data) {
						$.cookie('isBrand', data[0].isBrand);
						defineBodyClass();
					}
				});
			}

			function defineBodyClass() {
				var bodyClass = $.cookie('isBrand') == 'true' ?'qd-isBrand' :'qd-isRetailer';
				$('body').addClass(bodyClass);
			}

			// Define cookie isBrand se não tiver valor
			if(typeof $.cookie('isBrand') == 'undefined')
				vtexjs.checkout.getOrderForm().done(defineCookie);
			else
				defineBodyClass();

			if((window.location.pathname.indexOf('checkout') > -1) && ($.cookie('isBrand') == 'true'))
				window.location = "https://" + window.location.hostname + "/home-" + window.location.hostname.split('.')[0];

		}
	};

	var Home = {
		init: function() {},
		ajaxStop: function() {},
		windowOnload: function() {}
	};

	var Search = {
		init: function() {
			Search.especialCaseHandler();
			Search.filterBrandModel();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		especialCaseHandler: function() {
			if(window.location.pathname == '/brand-model')
				$('.text-qd-v1-wrapper a[title=All]')[0].href += '#linkBack';
			if(window.location.hash == '#linkBack')
				$('<a href="javascript:history.back();">Returns the brand page</a>')
				.appendTo('.catalogo__header-search--title')
				.css({
					'font-size': '14px',
					'font-weight': 'bold',
					'border-bottom': '1px solid #000',
					'margin-top': '20px',
					'display': 'inline-block'
				});

		},
		filterBrandModel: function() {
			$(".search-single-navigator .title-filters h2").on("click", function(e) {
				e.preventDefault();
				if (window.innerWidth > 300) {
					$(".search-single-navigator .title-filters h2").toggleClass("active");
					$(".order-by-wrapper").removeClass("open");
					$(".catalogo__header-order").removeClass("active");
					$(".catalogo__header-filter-content").toggleClass("active");
					$(".catalogo__content-container").fadeOut("fast", function() {
						$(".catalogo__content-container").fadeIn();
						$("body").toggleClass("filter-is-open")
					})
				} else {
					$("html").addClass("filter-active");
					setTimeout(function() {
						$(".catalogo__header-filter-content").addClass("active")
					}, 350)
				}
			});
		}
	};

	var Product = {
		run: function() {},
		init: function() {
			Product.smartSkuLimiterOptions();
			Product.setAvailableBodyClass();
			Product.applySmartSkuGrid();
			Product.applyAffix();
			Product.applyCarousel();
			Product.shelfMoreFromThis();
			Product.changeBrandLink();
			Product.applyImageZoom();
			Product.thumbsLoaded();
			Product.hideInfo();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		thumbsLoaded: function(){
			$(window).on('thumbsLoaded', function(){setTimeout(function() {
				Product.applyCarousel();
			}, 100)});
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
		skuSelection: function() {
			$('#skugrid td[data-map-i]').on('click', function() {
				$(this).parent().find('input').first().click();
			});
			$('#skugrid input').on('click', function(){
				var skuId = $(this)[0].dataset['skuid'];
				skuJson.skus.forEach(function(sku){
					if(sku.sku == skuId) {
						$('.thumbs.slick-slider').slick('unslick');
						$(document).trigger('skuSelected.vtex', [skuId, sku]);
						return;
					}
				});
				var thumbsQtty = $('.thumbs li').length;
				$('.thumbs li').each(function() {
					var _this = $(this).find('img').attr('src').replace('55-55', '696-884');
					$(this).find('img').attr('src', _this).on("load", function(){ $(this).addClass('loaded')});
					if(thumbsQtty-- == 1) $(document).trigger('thumbsLoaded');
				});
			});
		},
		applyCarousel: function() {
			var wrapper = $('.thumbs');

			wrapper.removeClass('slick-vertical').slick({
				slidesToShow: wrapper.find('li').length,
				vertical: true,
				responsive: [{
					breakpoint: 736,
					settings: {
						vertical: false,
						slidesToShow: 1
					}
				}]
			});
		},
		shelfMoreFromThis: function() {
			var wrapper = $('<div>').addClass('qd-more-from-collection u-center');
			$.ajax({
				url:'/buscapagina?fq=B:' + window.dataLayer[0].productBrandId + '&PS=5&sl=8b05a8a3-a701-42db-a9b3-249b18ed70b2&cc=2&sm=0'
			}).success(function(data, status, jqXHR){
				wrapper.append('<h2>More from this collection</h2><div class="collectionItems"><div class="fourImages"></div><div class="prateleira singleImage"></div></div>');
				wrapper.find('.fourImages').html($(data)[1]);
				wrapper.find('.prateleira > ul:last-child').appendTo(wrapper.find('.singleImage'));
				wrapper.appendTo($('main'));
			});
		},
		applyAffix: function() {
			$('.product__col-right').QD_affix({
				topSpacing: 140,
				bottomLimitSeletor: '#details',
				css: {}
			});
		},
		changeBrandLink: function() {
			var link = $('.brandName .brand');
			if (!link.length)
			return;

			var linkUrl = (link.attr('href').split('/').pop() || "");
			if (!linkUrl.length)
			return;
			link.attr('href', "/"+linkUrl);
		},
		applyImageZoom: function() {
			try {
				if ($(window).width() < 737) return;

				var images = $('.loaded'),
				minWidth = 1000,
				minHeight = 1270;

				images.each(function() {
					var $t = $(this);
					var zoomImage = $t.parent('a').attr('zoom');
					var zoomRegex = zoomImage.match(/ids\/[0-9]+-([0-9]+)-([0-9]+)/i);
					if (!zoomRegex)
					return;
					var height = zoomRegex.pop(),
					width = zoomRegex.pop();

					if (!(width >= minWidth && height >= minHeight))
					return;

					$t.attr('data-zoom-image', zoomImage);
					$t.elevateZoom({
						zoomType: "inner",
						cursor: "pointer"
					});
				})
			}
			catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Ops, algo saiu errado com o zoom :( . Detalhes: " + e.message)); }
		},
		applyBuyButton:function(wrapper){
			var wrapper = wrapper

			try{
				// Procuro o buy button em toda a página
				var buyButton = $('.product-buy-button .buy-button');
				var selectSkuMsg = "javascript:alert('Choose a product!');"
				buyButton.text('ADD');
				buyButton.attr("href", selectSkuMsg);
				// Observo o evento de change
				var inputs = wrapper.find('.input-type-text').not("disabled").filter('[data-sku-id]');
				inputs.on("QuatroDigital.sq_change", function() {
					try{
						var url = [];
						inputs.each(function() {
							var $t = $(this);
							var value = parseInt($t.val());
							if(value > 0){
								url.push("sku=" + $t.attr("data-sku-id"));
								url.push("qty=" + value);
								url.push("seller=" + $t.attr("data-sku-seller"));
							}
						});

						if(url.length){
							url.push($.cookie("VTEXSC") || "sc=1");
							buyButton.attr("href", "/checkout/cart/add?" + url.join("&"));
						}
						else
						buyButton.attr("href", selectSkuMsg);
					}
					catch(e){
						log(e.message);
					}
				});
				wrapper.QD_buyButton({
					buyButton: '.show-single-layout .product-buy-button .buy-button',
					productPageCallback: function(jqXHR, textStatus, prodLink) {
						PFTX.pages.common.cartQty();
					}
				});
			}
			catch(e){
				console.log(e.message);
			}
		},
		smartSkuLimiterOptions:function(){
			var buyButton = $('.product-buy-button .buy-button');
			buyButton.text('ADD');

			$.QD_smartSkuLimiter.options = {
				limitMessage: "AVAILABLE QTY: #qtt"
			};
		},
		applySingleLayout:function(){
			$(document.body).addClass("qd-sku-single-layout");
			var wrapper = $('.show-single-layout')
			var bodyRow = wrapper.find(".qd-sku-row-body");
			var bodyRowP = bodyRow.parent();
			var dimen = skuJson.dimensions[0];
			var CurrentBRow;

			for(var l = 0; l < skuJson.skus.length; l++){
				CurrentBRow = bodyRow.clone().appendTo(bodyRowP);
				CurrentBRow.attr({
					"data-name": skuJson.skus[l].dimensions[dimen],
					'data-sku-id': skuJson.skus[l].sku
				});

				if (dimen === 'Color'){
					$("<div class='qd-sku-color'></div>")
					.addClass(skuJson.skus[l].dimensions[dimen])
					.prependTo(CurrentBRow)
					.wrap('<div class="qd-new-img"></div>');
				}
				else
				CurrentBRow.prepend("<img class='qd-sku-img' src='" + skuJson.skus[l].image.replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-35-35") + "'></img>");

				CurrentBRow.find(".qd-sku-qtt-wrap").attr("id", skuJson.skus[l].sku);
				CurrentBRow.find('.input-type-text').attr({
					"data-sku-id": skuJson.skus[l].sku,
					"data-sku-seller": skuJson.skus[l].sellerId,
					"data-sku-price": skuJson.skus[l].bestPrice
				});
			}
			wrapper.find(bodyRow).remove().first();

			wrapper.find(".qd-sku-qtt-wrap").each(function() {
				var $t = $(this);
				var input = $t.find('.input-type-text');
				var qttMinToBuy = 1

				$t.QD_smartQuantity({
					buyButton: null,
					qttInput: input,
					btnMore: '.qd-sku-qtt-add',
					btnMinus: '.qd-sku-qtt-remove',
					initialValue: 0,
					minimumValue: 0,
					minToBuy: qttMinToBuy
				});

				if (skuJson.skus.length > 1){
					var clickFunction = function(){
						var skuId = $t.attr('id')
						SkuDataFetcher_OnSkuSelectionChanged({newSkuId: skuId, productIndex: 0})
						PFTX.pages.product.resizeImg()
					};
					input.on('click', clickFunction);
					$t.parent().find('.qd-new-img').on('click', clickFunction);
				}
			});

			$('.qd-sku-qtt-wrap').on('click', function(){
				$t = $(this)
				Product.getQttMinToBuy($t);

			})

			wrapper.QD_smartSkuTotalizer({
				inputQtt: '.input-type-text'
			});

			Product.applyBuyButton(wrapper);
		},
		applyDefaultSku:function(){
			$(document.body).addClass("qd-sku-tri-layout");
		},
		applySmartSkuGrid:function(){
			if(skuJson.dimensions.length == 1 || skuJson.dimensions.length == false )
			return Product.applySingleLayout();
			else if(skuJson.dimensions.length > 2)
			return Product.applyDefaultSku();

			$(document.body).addClass("qd-sku-grid-layout");

			$(".qd-smart-sku-grid").QD_smartSkuGrid({
				smartQuantityMinToBuy: function(input){
					return input.attr('data-qtd-min');
				}
			});
			// Inclui informação de qtt min de compra
			$('.product-qd-v1-info-qtt-min-buy span').text(1);

			$('.qd-sku-qtt-wrap').on('click', function(){
				$t = $(this)
				Product.getQttMinToBuy($t);

			});

			$(document.body).QD_buyButton({
				buyButton: '.qd-ssg-buy-button',
				productPageCallback: function(jqXHR, textStatus, prodLink) {
					PFTX.pages.common.cartQty();
				}
			});

			//adciona plugin de scrollbar

			var skuGridElem = $(".qd-smart-sku-grid");
			if( skuJson.dimensionsMap[skuJson.dimensions[1]].length > 3) {
				skuGridElem.mCustomScrollbar({
					axis:"x",
					theme:"my-theme",
					alwaysShowScrollbar: 2,
					scrollButtons:{ enable: true },
					setWidth: true,
				});
			}

			// Clona a div de imagens e reposiciona fora da barra de rolagem
			var clickFunction = function(){
				var skuId = $(this).attr('data-sku-id');
				SkuDataFetcher_OnSkuSelectionChanged({newSkuId: skuId, productIndex: 0});
				PFTX.pages.product.resizeImg();
			};
			var newWrapper = $('<div class="qd-new-img"></div>').prependTo(skuGridElem);
			$('.qd-sku-rich-selection-grid .qd-sku-img').each(function(){
				var $t = $(this);
				var imgId = $t.parent().find('.qd-sku-qtt-wrap').attr('id');
				var content = $t.clone();
				var imgColor = $t.closest('.qd-sku-row').attr('data-qd-ssg-secundary-dim');
				content.addClass('qd-sku-color').addClass(imgColor).removeClass('qd-sku-col qd-sku-img').attr('data-sku-id', imgId);
				newWrapper.append(content);
			});

			$('.qd-sku-color, .input-type-text').each(function(){
				$(this).on('click', clickFunction);
			})


		},
		hideInfo:function(){
			if($('.page-header__nav a[href*="-beauty"]').hasClass('active')){
				$('.product__info--skuSelection-head').hide()
			}
		},
		getQttMinMD: function(input, textQttMin, sku, $t, sellerId){
			$.ajax({
				url: '//service.the1showroom.com/qd-qtt-min/get-by-sku/' + sellerId + '/' + sku,
				type: "GET",
				dataType: "json",
				success: function(data) {
					Product.setinputMinQtt(data, $t, input, textQttMin);
				},
				error: function(){
					console.error("Houve um erro na requisição de qtt minima de compra." )
				}
			});
		},
		getQttMinToBuy: function(){
			var input = $t.find('.input-type-text');
			var textQttMin = $('.product-qd-v1-info-qtt-min-buy span');
			if(input.attr('data-qtd-min')){
				input.trigger('QuatroDigital.sq_qtt_min_change', [input.attr('data-qtd-min')]);
				textQttMin.text(input.attr('data-qtd-min'));
				return;
			}
			// var newDate = new Date();
			// newDate.getUTCDate()

			var id = input.attr('data-sku-id');
			var sellerId = input.attr('data-sku-seller');
			$t.addClass('qd-custom-loading');
			
			$.ajax({
				url: "//api.vtexcrm.com.br/theoneshowroom/dataentities/MQ/documents/" + id + "-" + sellerId + "?_fields=id,productId,seller,minQuantity,createdIn",
				type: "GET",
				dataType: "json",
				headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
				success: function(data) {
					if(!data){
						Product.getQttMinMD(input, textQttMin, id, $t, sellerId)
						return;
					}

					Product.setinputMinQtt(data, $t, input, textQttMin);
				},
				error: function(){
					console.error("Houve um erro na requisição de qtt minima de compra." )
				}
			});
		},
		setinputMinQtt:function(data, $t, input, textQttMin){
			$t.removeClass('qd-custom-loading');
			input.removeClass('qd-sq-on');
			input.attr('data-qtd-min', data.minQuantity);
			textQttMin.text(data.minQuantity);
			input.trigger('QuatroDigital.sq_qtt_min_change', [data.minQuantity]);
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
			if($('body').is('.brand-register') || $('body').is('.retailer-register'))
			Institutional.registerHandler();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		formToJson: function() {
			var ret = {};
			if($('.qd-form-page-step-form:visible form').is('#form-department')) {
				var departments = [];
				$('.qd-form-page-step-form:visible form').find('input:checked').each(function(){
					ret[$(this).attr('name')] = $(this).val();
				});

				$('#form-department input').first().removeAttr('required').removeClass('error');
				if(!$('.qd-form-page-step-form:visible form').find('input:checked').length)
				$('#form-department input').first().attr('required', true).addClass('error');
			} else {
				$('.qd-form-page-step-form:visible form').serializeArray().forEach(function(elem){
					ret[elem.name] = elem.value;
				});
			}

			if($('.qd-form-page-step-form:visible form input[type=file]').length) {
				var $this = $('.qd-form-page-step-form:visible form input[type=file]');
				if($this[0].files.length){
					var images = {};
					for(var f = 0; f < $this[0].files.length; f++)
					images[$this[0].files[f].name] = $this[0].files[f];

					ret[$this.attr('name')] = images;
				}
			}

			return ret;
		},
		fillForm: function(userData) {
			for (var name in userData) {

				switch (name.toLowerCase()) {
					case 'segment':
					$('form#form-department #' + userData[name].toLowerCase()).show();
					break;

					case 'pictures':
					$('form .fieldset-file').append("<span style='margin-left: 10px;'>" + (userData[name] || '') + "</span>");
					break;

					default:
					if(userData[name] == null || userData[name].length == 0)
					break;

					$('.qd-form-page-step-form [name='+ name +']:not([type=radio])').val(userData[name]);
					$('.qd-form-page-step-form [name='+ name +'][type=radio]').each(function(){
						if($(this).val() == userData[name].toString()) {
							$(this).attr('checked', 'checked');
						}
					});
					break;
				}
			}
		},
		verifyUser: function(entity, id, fields) {
			$.ajax({
				url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/" + entity + "/documents/" + id + "?_fields=" + fields.join(','),
				type: "GET",
				dataType: "json",
				headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
				success: function(data) {
					if(!data)
					window.location = '/';

					Institutional.fillForm(data);
				},
				error: function(jqXHR, textStatus, errorThrown){
					window.location = '/';
				}
			});
		},
		selectStep: function(formSelector, href, menuIndex, text) {
			// Personaliza o passo atual
			text = text || 'Next Step';

			$('.qd-form-page-step-form').hide();
			$(formSelector).closest('.qd-form-page-step-form').show();
			$('.qd-form-page-steps a').attr('href', href)
			.prependTo($('.qd-form-page-steps li')[menuIndex]).text(text);
		},
		saveData: function(userId, entity, formData, isLast) {
			isLast = isLast || false;
			// Validação dos campos
			$('form:visible input').each(function(){this.setCustomValidity("");	});
			if(!$('form:visible')[0].checkValidity()) {
				$('form:visible input, form:visible select').each(function(){
					if(!this.checkValidity() || this.validity.patternMismatch) {
						this.setCustomValidity("Please enter the required field correctly");
						$(this).on('change', function(){
							this.setCustomValidity("");
						});
					} else
					this.setCustomValidity("");
				});
				$('<input type="submit" style="display:none;">').appendTo($('form:visible')[0]).click().remove();
				return false;
			}


			var formAttach;
			formData.id = userId;
			if(isLast)
			formData['formCompleted'] = true;

			if(formData.pictures) {
				var names = [];
				formAttach = new FormData();
				for(p in formData.pictures) {
					formAttach.append(p, formData.pictures[p]);
					names.push(p);
				}
				formData.pictures = names.join(',');
			}
			$.ajax({
				url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/" + entity + "/documents",
				type: "PATCH",
				dataType: "json",
				headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
				data: JSON.stringify(formData),
				success: function() {
					if(formAttach) {
						$.ajax({
							url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/" + entity + "/documents/" + userId + "/pictures/attachments",
							type: "POST",
							dataType: "multipart/form-data",
							headers: { "Accept": "application/vnd.vtex.ds.v10+json"},
							processData: false,
							contentType: false,
							data: formAttach,
						});
					}
				}
			});
			return true;
		},
		registerHandler: function() {
			var userId = (window.location.search.match(/guid=.{3}(.{36})/i) || ['',''])[1];
			if(!userId)
			return;

			var fields = [];
			var entity = '';
			var brandType = '';
			$('#ajaxBusy').hide();
			if($('body').is('.brand-register')) {
				fields = [
					'segment',
					'companyemail',
					'companyname',
					'companywebsite',
					'phone'
				];
				entity = 'LB';

				function defineStep() {
					var hash = window.location.hash || '#company-information';
					switch (hash) {
						case '#department':
						Institutional.selectStep('#form-department', '#contacts', 1);
						break;

						case '#contacts':
						Institutional.selectStep('#form-contacts', '#business-performance', 2);
						break;

						case '#business-performance':
						Institutional.selectStep('#form-business-performance', '/Sistema/401/register-complete', 3, 'Finish');
						break;

						case '#company-information':
						default:
						Institutional.selectStep('#form-company-information', '#department', 0);
						break;
					}
				}
			}
			else if($('body').is('.retailer-register')) {
				var fields = [
					'Segment',
					'StoreName',
					'StoreWebsite',
					'Street',
					'Streetnumber',
					'ZipCode',
					'City',
					'Country',
					'Fullname',
					'storeemail',
				];
				entity = 'LR';

				function defineStep() {
					var hash = window.location.hash || '#store-information';
					switch (hash) {
						case '#department':
						Institutional.selectStep('#form-department', '#additional-information', 1);
						break;

						case '#additional-information':
						Institutional.selectStep('#form-additional-information', '#business-performance', 2);
						break;

						case '#business-performance':
						Institutional.selectStep('#form-business-performance', '/Sistema/401/register-complete', 3, 'Finish');
						break;

						case '#store-information':
						default:
						Institutional.selectStep('#form-store-information', '#department', 0);
						break;
					}
				}
			}

			Institutional.verifyUser(entity, userId, fields);

			// Check input de departamento quando seleciona categoria
			$('.label-checkbox label input[type=checkbox]').on("click", function() {
				if($(this).is(':checked')){
					$(this).parents('label').find('> input').attr('checked', 'checked');
				}
			});
			// Uncheck inputs de categorias quando departamento é  des-selecionado
			$('label > input[type=checkbox]').on("click", function() {
				if(!$(this).is(':checked')){
					$(this).parent().find('label > input').removeAttr('checked');
				}
			});
			// Adiciona o nome das imagens anexadas
			$('input[type=file]').on("change", function() {
				if($(this)[0].files.length > 3) {
					alert("You can only upload a maximum of 3 files.");
					return;
				}


				var names = [];
				for(var f = 0; f < $(this)[0].files.length; f++)
				names.push($(this)[0].files[f].name);

				$(this).closest('fieldset').find('span').text(names.join(', '));
			});

			$('.qd-form-page-steps a').on("click", function(e){
				var isLast = !$(this).parent().next().length;
				if(!Institutional.saveData(userId, entity, Institutional.formToJson(), isLast))
				e.preventDefault();
			});

			$('.qd-form-page-steps li span').css({'cursor':'pointer'}).on("click", function(e){
				window.location.hash = this.dataset.href;
			});

			defineStep();
			// Faz executar a função sempre que muda a # da url
			$(window).on("hashchange", function() {
				defineStep();
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

	// qd-include ../qd-quatro-lib-plugins/_assets/jquery.cookie-1.4.1.js
	// qd-include ../qd-quatro-lib-plugins/_assets/slick-1.6.0.min.js
	// qd-include ../qd-quatro-lib-plugins/_assets/QD-NumberFormat.js
	// qd-include ../qd-quatro-lib-plugins/_assets/QD-getParent-3.js

	// qd-include ./Web/JS/JS.jquery.elevateZoom.min.js
	// qd-include ../qd-quatro-lib-plugins/Newsletter/QD_news.min.js
	// qd-include ../qd-quatro-lib-plugins/Checkout Queue/QD_checkoutQueue.min.js
	// qd-include ../qd-quatro-lib-plugins/Scroll Toggle/QD_scrollToggle.min.js
	// qd-include ../QD---jQuery-Ajax-Queue/QD-jQueryAjaxQueue.min.js
	// qd-include ../qd-simple-cart/SimpleCart.min.js
	// qd-include ../qd-quatro-lib-plugins/Smart Stock Available/QD_smartStockAvailable.min.js
	// qd-include ../qd-smart-buy-button/QD_buyButton.min.js
	// qd-include ../qd-quatro-lib-plugins/Smart Quantity/QD_smartQuantity.min.js
	// qd-include ../qd-quatro-lib-plugins/Smart SKU Totalizer/QD_smartSkuTotalizer.min.js
	// qd-include ../qd-product-thumbs/QD_productThumbs.min.js
	// qd-include ../qd-amazing-menu/VTEX/QD_amazingMenu.min.js
	// qd-include ../qd-smart-cart/QD_smartCart.min.js
	// qd-include ../qd-quatro-lib-plugins/Affix/QD_affix.min.js
	// qd-include ../qd-quatro-lib-plugins/Smart Notify Me/QD_smartNotifyMe.min.js
	// qd-include ../qd-quatro-lib-plugins/Smart SKU Grid/QD_smartSkuGrid.min.js
	// qd-include ../qd-quatro-lib-plugins/Smart Sku Limiter/QD_smartSkuLimiter.min.js