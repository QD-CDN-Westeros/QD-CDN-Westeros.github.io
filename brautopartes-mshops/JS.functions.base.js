/**
* Funções base
*/
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E", "\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

try {
	var dataImage = [];
	var Common = {
		run: function() {},
		init: function() {
			Common.favicon();
			Common.loading();
			Common.shelfImagesSize();
			Common.qdAffix();
			Common.amazingMenuFloating();
			Common.mobileSearch();
			Common.miniCart();
			Common.classStructure();
			Common.qdOverlay();
			Common.modalOders();
			Common.modalAccount();
			Common.fixImagesLink();
			Common.mobileAmazingMenu();
			Common.formNewsLetter();
		},
		ajaxStop: function() {},
		windowOnload: function() {
			Common.facebookLikebox();
		},
		modalAccount: function() {
			var modal = $('.qd-v1-modal').clone().appendTo(document.body).addClass('qd-v1-modal-account').removeClass('qd-v1-modal');

			modal.find('.modal-body').append('<iframe src="https://www.mercadopago.com.br/settings/account" frameborder="0"></iframe>');
			modal.find('.modal-header').append('<p><strong>Seja Bem-Vindo</strong>, aproveite nossa loja!</p>');

			$('.header-qd-v1-links-user-account').click(function(evt) {
				$(document.body).removeClass(Common.qdOverlayClass);
				evt.preventDefault();
				modal.modal();
			});
		},
		modalOders: function() {
			var modal = $('.qd-v1-modal').clone().appendTo(document.body).addClass('qd-v1-modal-orders').removeClass('qd-v1-modal');

			modal.find('.modal-body').append('<iframe src="//www.mercadopago.com.br/activities?type_date=custom&date_from=01%2F01%2F2015&date_to=01%2F01%2F2060&q=brautopartes" frameborder="0"></iframe>');
			modal.find('.modal-header').append('<p><strong>Seja Bem-Vindo</strong>, aproveite nossa loja!</p>');

			$('.header-qd-v1-links-user-orders').click(function(evt) {
				$(document.body).removeClass(Common.qdOverlayClass);
				evt.preventDefault();
				modal.modal();
			});
		},
		favicon: function() {
			$('link[rel="shortcut icon"]').attr('href', 'http://cdn.quatrodigital.com/brautopartes-mshops/images/favicon-brauto.ico');
		},
		qdOverlayClass: 'qd-am-on qd-sn-on',
		qdOverlay: function() {
			$('.components-qd-v1-overlay').click(function() {
				$(document.body).removeClass(Common.qdOverlayClass);
			});
		},
		loading: function() {
			var loading = $('<div id="ajaxBusy" style="display: none;"><p>Aguarde...</p></div>');
			loading.appendTo(document.body);

			$(document).ajaxStart(function() {loading.show()});
			$(document).ajaxStop(function() {loading.hide()});
		},
		shelfImagesSize: function() {
			$('.shelf-qd-v1-image img, figure img').each(function() {
				var $t = $(this);
				$t.clone().addClass('qd-img-square').hide().insertBefore($t);
				$t.addClass('qd-img-rectangle').attr('src', ($t.attr('src') || '').replace(/Z[a-z]X/i, 'ZcX'));
			});
		},
		facebookLikebox: function () {
			$(".footer-qd-v1-facebook-likebox").html(function (i, html) {
				return html + '<div class="fb-page" data-href="https://www.facebook.com/brautopartes/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/brautopartes/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/brautopartes/"></a></blockquote></div>';
			});
		},
		mobileSearch: function() {
			$('.bnt-call-search').click(function() {
				$('.modal-qd-v1-search').modal();
			});
		},
		mobileAmazingMenu: function() {
			$(window).on('QD_amazingMenuLoaded', function() {
				$('.amazing-menu-mobile-qd-v1-main > ul > li > ul').each(function(index, el) {
					var $ul = $(this);
					$ul.parent().addClass('qd-li-active').append($('<span class="amazing-menu-mobile-qd-v1-dropdown-trigger"><i class="fa fa-chevron-down" /></span>').click(function(evt) {
						console.log("$ul.parent()", $ul.parent());
						$ul.parent().toggleClass('qd-am-is-active');
						$ul.stop(true, true).slideToggle();
						return false;
					}));
				});

				$('.bnt-call-menu-mobile').click(function() {
					$(document.body).toggleClass('qd-am-on');
				});

				$('.close-qd-v1').click(function(){
					$(document.body).removeClass('qd-am-on');
				});
			});
		},
		qdAffix: function() {
			$(document.body).attr('data-qd-scroll-limit', '100');
		},
		amazingMenuFloating: function() {
			$('.floating-qd-v1-btn-call-menu').click(function(evt) {
				$(document.body).toggleClass('qa-am-ft');
			});
		},
		spreadsheetImages: function(searchFor, elem, functionExec) {
			elem.addClass('qd-banner-loading');

			$.qdAjax({
				url: 'https://spreadsheets.google.com/feeds/list/1kNGz4tANV02QRkKS0hJwf4UUy3cmhg-fKlsM_zhAjlg/od6/public/values?alt=json'
			}).done(function(data){
				if (!data.feed.entry.length)
					return;

				for (var i =  0;  i < data.feed.entry.length; i++) {
					if (data.feed.entry[i].gsx$tipodobanner.$t == searchFor)
						elem.append('<a href="' + data.feed.entry[i].gsx$linkdobanner.$t + '" class="' + data.feed.entry[i].gsx$classecssnaoalterar.$t + '"><img src="' + data.feed.entry[i].gsx$urldaimagem.$t + '" alt="' + data.feed.entry[i].gsx$tipodobanner.$t + '" /></a>');
				}

				if (typeof functionExec == "function")
					functionExec();

				elem.removeClass('qd-banner-loading');
			});
		},
		shuffleArray: function(a) {
		    var j, x, i;
		    for (i = a.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = a[i - 1];
		        a[i - 1] = a[j];
		        a[j] = x;
		    }
		},
		worksheetCollection: function(searchFor, elem, functionExec, maxItems, prodParentId, isBuytogether) {
			elem.addClass('qd-shelf-loading');
			prodParentId = prodParentId || '*';
			maxItems = maxItems || 8;

			if (isBuytogether)
				var $html = $('<div class="row"> <div class="col-xs-12 col-md-8"> <div class="row"> <div class="col-xs-10 col-xs-offset-1 col-md-12 col-md-offset-0"> <h3 class="heading-3"></h3> </div> </div> <div class="shelf-qd-v1-structure"></div> </div> <div class="col-xs-12 col-md-4"> <div class="product-qd-v1-shelf-buy-together-content"></div> </div> </div>');
			else
				var $html = $('<div class="row"> <div class="col-xs-12"> <div class="row"> <div class="col-xs-10 col-xs-offset-1 col-md-12 col-md-offset-0"> <h3 class="heading-3"></h3> </div> </div> <div class="carousel-qd-v1-shelf shelf-qd-v1-structure"> </div> </div> </div>');

			var $ulShelf = $('<ul>');
			var handlebarsTemplate = $("#handlebars-template").html('<li class="shelf-qd-v1"> <input type="hidden" name="qd-id" value="{{id}}" /> <input type="hidden" name="qd-idSku" value="{{sku}}" /> <div class="row"> <div class="col-xs-10 col-xs-offset-1"> <div class="row"> <div class="col-xs-12"> <div class="shelf-qd-v1-image"> <a title="{{title}}" href="{{permalink}}"> {{#if pictures.0.url}} <img alt="{{title}}" title="{{title}}" src="{{pictures.0.url}}" /> {{else}} <img alt="Sem Foto" title="Sem Foto" src="{{pictures.0.url}}" /> {{/if}} </a> <div class="shelf-qd-v1-stamp"> {{#if promotion.discount_type}} <p class="shelf-qd-v1-stamp-descont"> <span>{{promotion.discount_percent}}</span> </p> {{/if}} {{#if promotion.free_shipping}} <div class="promotionFreeShippingSmall"> <span class="freeShippingText"> Frete grátis </span> </div> {{/if}} </div> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="shelf-qd-v1-name"> <a href="{{permalink}}" title="{{title}}">{{title}}</a> </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="shelf-qd-v1-price"> {{#eq promotion.discount_type "percent"}} <input type="hidden" name="qd-best-price" value="{{calculatePercentage price promotion.discount_percent}}" /> <span class="shelf-qd-v1-price-best-price"> R$ {{calculatePercentage price promotion.discount_percent}} </span> <span class="shelf-qd-v1-price-old-price"> {{numberFormat price}} </span> {{else}} <input type="hidden" name="qd-best-price" value="{{numberFormat price}}" /> <span class="shelf-qd-v1-price-best-price"> {{numberFormat price}} </span> {{/eq}} </div> </div> </div> <div class="row"> <div class="col-xs-12"> <div class="shelf-qd-v1-buy-button"> <a href="{{permalink}}"> <i class="fa fa-shopping-cart" aria-hidden="true"></i> Comprar </a> </div> </div> </div> </div> </div> </li>');
			var handlebarsCompile = Handlebars.compile(handlebarsTemplate.html());

			if(!Common.applyCollectionData){
				Common.applyCollectionAjax = $.qdAjax({
					url: 'https://spreadsheets.google.com/feeds/list/1gIN5XwyapGzT6AMCqPuapypO4S-LHTAuDmbKpJ8NFNA/od6/public/values?alt=json',
					dataType: 'json',
					clearQueueDelay: null
				}).done(function(data){
					if (!data.feed.entry.length)
						return;

					var dataObj = {};
					var item;
					for (var i =  0;  i < data.feed.entry.length; i++) {
						item = data.feed.entry[i];
						dataObj[item.gsx$tipodacolecao.$t] = dataObj[item.gsx$tipodacolecao.$t] || {};

						var parentId = parseInt(item.gsx$iddoprodutopai.$t) || '*';
						// Produto Pai possui Filhos
						dataObj[item.gsx$tipodacolecao.$t][parentId] = dataObj[item.gsx$tipodacolecao.$t][parentId] || {title: item.gsx$titulodacolecao.$t, products: []};
						dataObj[item.gsx$tipodacolecao.$t][parentId].products.push(item.gsx$iddoproduto.$t);
						// Produto Filho se torna o pai e consequentemente o Pai se torna filho
						if(parentId != '*'){
							dataObj[item.gsx$tipodacolecao.$t][item.gsx$iddoproduto.$t] = dataObj[item.gsx$tipodacolecao.$t][item.gsx$iddoproduto.$t] || {title: item.gsx$titulodacolecao.$t, products: []};
							dataObj[item.gsx$tipodacolecao.$t][item.gsx$iddoproduto.$t].products.push(parentId);
						}
					}

					Common.applyCollectionData = dataObj;
				});
			}

			Common.applyCollectionAjax.done(function() {
				if (!(Common.applyCollectionData[searchFor] && Common.applyCollectionData[searchFor][prodParentId]))
					return elem.removeClass('qd-shelf-loading');

				var scData = Common.applyCollectionData[searchFor][prodParentId];
				$html.find('.heading-3').html(scData.title);

				var products = scData.products;
				Common.shuffleArray(products);
				if(prodParentId != '*' && Common.applyCollectionData[searchFor]['*'])
					products = products.concat(Common.applyCollectionData[searchFor]['*'].products);

				if(isBuytogether)
					products = [prodParentId].concat(products);

				var requestComplete = 0;
				var requestStarted = 0;
				for (var i =  0;  i < products.length && i < maxItems; i++) {
					requestStarted++;

					$.qdAjax({
						url: '//api.mercadoshops.com/v1/shops/161766806/listings/' + products[i],
						dataType: 'json',
						clearQueueDelay: null
					}).done(function(dataJson) {
						var html = 
						$ulShelf.append(handlebarsCompile(dataJson));
					}).complete(function() {
						requestComplete++;

						if (requestComplete >= requestStarted) {
							$html.find('.shelf-qd-v1-structure').html($ulShelf);
							elem.append($html);
							elem.removeClass('qd-shelf-loading');

							if (typeof functionExec == "function")
								functionExec();
						}
					});
				}
			});
		},
		miniCart: function() {
			var monetaryRegex = /[^0-9]+/ig;
			var decimalRegex = /([0-9]{2}$)/i;
			var getData = function() {
				return $.qdAjax({
					url: '/cart',
					dataType: 'html'
				})
			};

			var removeItem = function(url, $cart){
				if(url){
					$cart.addClass('qd-minicart-loading');
					renderCart( $.ajax({ url: url }) );
				}
				else
					alert('Ocorreu um erro! :(');
			};

			var renderCart = function(cart) {
				cart.done(function (data) {
					$data = $(data);

					(function() {
						var qtt = 0;
						$data.find('.itemQtyField').each(function() {
							qtt = qtt + (parseInt($(this).val()) || 0)
						});
						$('.header-qd-v1-mini-cart-value').text(qtt);
					})();

					(function() {
						if($data.find('.noProd').length && !($('.qd-minicart-items tr').length))
							return;

						$cartHtml = $('<div class="qd-minicart-dropdown" aria-hidden="true"><div class="qd-minicart-space"><span>Fechar</span></div><div class="qd-minicart-wrapper"><table class="qd-minicart-items"><tr><td class="qd-minicart-img"></td><td class="qd-minicart-name"></td><td class="qd-minicart-info"><span><span class="qd-minicart-price">Por: <span>---</span></span><span class="qd-minicart-remove"><i class="fa fa-times-circle"></i></span></span></td></tr></table><div class="qd-minicart-footer-wrapper"><table class="qd-minicart-footer"><tr><td class="qd-minicart-total">Total: <span>---</span></td><td><a href="/cart" class="qd-minicart-checkout"><i class="fa fa-shopping-cart"></i> Finalizar compra </a></td></tr></table></div></div></div>');
						var trBase = $cartHtml.find('.qd-minicart-items tr');

						$data.find('ul.tbody').each(function() {
							var myTr = trBase.clone();
							var $t = $(this);

							if(!$t.find('.deleteRow').length)
								return;

							myTr.find('.qd-minicart-img').append($t.find('.colFoto img'));
							myTr.find('.qd-minicart-name').append($t.find('.colTitulo .title'));

							var price = $t.find('.colPrice');
							price.find('del').remove();
							myTr.find('.qd-minicart-price span').text('R$ ' + qd_number_format(parseInt(price.text().trim().replace(monetaryRegex, '')) / 100, 2, ',', '.'));

							myTr.find('.qd-minicart-remove i').click(function() { removeItem( $t.find('.deleteRow .delete').attr('href'), $cartHtml ) });

							myTr.insertBefore(trBase);
						});

						trBase.remove();
						$cartHtml.find('.qd-minicart-total span').text('R$ ' + qd_number_format(parseInt($data.find('#total-to-pay').text().trim().replace(monetaryRegex, '')) / 100, 2, ',', '.'));
						$cartHtml.find('.qd-minicart-space').click(function() {
							$('.qd-minicart-dropdown').removeClass('qd-minicart-mobile');
							$(document.body).removeClass('qd-minicart-mobile-opened');
						});

						$('.qd-minicart-dropdown').remove();
						$cartHtml.appendTo('.header-qd-v1-mini-cart');
					})();
				});
			};
			renderCart(getData());

			$('.floating-mobile-qd-v1 .header-qd-v1-cart-link').click(function(e) {
				e.preventDefault();

				if (!($(this).siblings('.qd-minicart-dropdown').length))
					return;

				$(this).siblings('.qd-minicart-dropdown').toggleClass('qd-minicart-mobile');
				$(document.body).toggleClass('qd-minicart-mobile-opened');
			});
		},
		classStructure: function() {
			$('.component.categoriesPath').attr('class', 'breadcrumbs-qd-v1 clearfix');
		},
		fixImagesLink: function() {
			$('a[href*="$contentImage.link"]').attr('href', '#').removeAttr('target');
		},
		formNewsLetter: function () {
			$.getScript("//cdn.quatrodigital.com/brautopartes-mshops/JS.jquery.validate.min.js");

			$('.newsletter-qd-v1').html('<div class="row"><div class="col-xs-12 col-md-6"><div class="newsletter-qd-v1-banner"></div></div><div class="col-xs-12 col-md-6"><div class="row"><div class="col-xs-12"><div class="newsletter-qd-v1-content"><h3 class="newsletter-qd-v1-title">Receba descontos imperdíveis</h3><p class="newsletter-qd-v1-sub-title">Fique sabendo das nossas promoções, descontos e novidades em primeira mão!</p><div class="newsletter-qd-v1-form"><form> <input class="qd_news_email input-type-text required email" type="text" name="email" placeholder="Digite aqui seu e-mail" /><button class="qd_news_button" type="submit">Enviar <i class="fa fa-paper-plane" aria-hidden="true"></i> </button></form></div><div class="social-qd-v1-list"><ul><li><a href="https://www.facebook.com/brautopartes" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li></ul></div></div></div></div></div></div>');
			var $form = $(".newsletter-qd-v1-form form");

			$(".newsletter-qd-v1-form .qd_news_button").on('click', function (e) {
				$form.addClass('qd-loading');
				$form.validate({
					rules: {email: {email: true } }, 
					submitHandler: function(form) { 
						var $form = $(form); 
						if (!$form.valid()) return; 
						
						$form.trigger('QD.newsSuccess', $form.find('[name]').val()); 
						return false;
					}
				});
			});

			$(window).on('QD.newsSuccess', function(e, data) {
				console.log(data);

				var $url = 'https://docs.google.com/forms/d/e/1FAIpQLSeMYEvVBciEFWyWlAxab32m4Xs2RLPPAjwvStvb9stTR0MqiQ/formResponse';
				var $params = '?entry.727237671='+($form.find('[name="qd_name"]').val() || '')+'&entry.616361496='+$form.find('[name="email"]').val();
				var iframe = $('<iframe src="' + $url + $params + '" style="display:none">');
						
				iframe.load(function() {
					$form.find('.qd_news_email').val('').attr('placeholder', 'Obrigado!');
					$form.removeClass('qd-loading');
					$(this).remove();
				});
				iframe.appendTo($('body'));
			});

			Common.bannerNewsLetter();
		},
		bannerNewsLetter: function () {
			Common.spreadsheetImages('Banner NewsLetter', $('.newsletter-qd-v1-banner'));
		}
	};

	var Home = {
		init: function() {
			Home.sliderFull();
			Home.brandCarroussel();
			Home.bannerCollection();
			Home.bannerMosaicB();
			Home.bannerMosaicT();
			Home.applyCarouselShelf();
			Home.applyCarouselBannerShelf();
			Home.bannerFranchise();
			Home.collections();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		
		collections: function() {
			Common.worksheetCollection('Home - Coleção Abaixo do Mosaico 1', $('.home-qd-v1-shelf-collections'), function() {
				Home.applyCarouselShelf();
			});

			Common.worksheetCollection('Home - Coleção Abaixo do Mosaico 2', $('.home-qd-v1-shelf-collections'), function() {
				Home.applyCarouselShelf();
			});
		},
		bannerFranchise: function() {
			Common.spreadsheetImages('Banner de Franquia', $('.banner-franchise-qd-v1'));
		},
		bannerMosaicB: function() {
			var wrapper = $('.banner-mosaic-qd-v1-bottom');

			Common.spreadsheetImages('Banner Mosaic Bottom', wrapper, function() {
				mosaicAddRow(wrapper.find("> a"));

				function mosaicAddRow($wrapper) {
					var firstTop;
					var items = new $;

					if(!$wrapper.length)
						return;

					$wrapper.each(function(){
						var $t = $(this);
						var offsetTop = $t.offset().top;

						if (!firstTop)
							firstTop = offsetTop;

						if (offsetTop >= firstTop - 9 && offsetTop <= firstTop + 9)
							items = items.add($t);
						else
							return false;
					});

					items.wrapAll('<div class="row"></div>');
					mosaicAddRow(wrapper.find("> a"));
				}
			});
		},
		bannerMosaicT: function () {
			var wrapper = $('.banner-mosaic-qd-v1-top');

			Common.spreadsheetImages('Banner Mosaic Top', wrapper, function () {
				mosaicAddRow(wrapper.find("> a"));

				function mosaicAddRow($wrapper) {
					var firstTop;
					var items = new $;

					if (!$wrapper.length)
						return;

					$wrapper.each(function () {
						var $t = $(this);
						var offsetTop = $t.offset().top;

						if (!firstTop)
							firstTop = offsetTop;

						if (offsetTop >= firstTop - 9 && offsetTop <= firstTop + 9)
							items = items.add($t);
						else
							return false;
					});

					items.wrapAll('<div class="row"></div>');
					mosaicAddRow(wrapper.find("> a"));
				}
			});
		},
		applyCarouselShelf: function() {
			var wrapper = $('.carousel-qd-v1-shelf ul:not(.qd-on)').addClass('qd-on');

			if (!wrapper.length)
				return false;

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
		applyCarouselBannerShelf: function() {
			var wrapper = $('.banner-collection-qd-v1-collection ul');

			if (!wrapper.length)
				return false;

			wrapper.slick({
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				draggable: false,
				speed: 700,
				responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
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
		bannerCollection: function() {
			var wrapper = $('.banner-collection-qd-v1-banner');
			Common.spreadsheetImages('Banner Categoria Home', wrapper);
		},
		brandCarroussel: function() {
			var wrapper = $('.brand-qd-v1-slider');
			Common.spreadsheetImages('Banner de Marca', wrapper, function() {
				wrapper.slick({
					prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					speed: 700,
					responsive: [
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
			});
		},
		sliderFull: function() {
			$('.slider-qd-v1-full').slick({
				dots: true,
				fade: true,
				cssEase: 'linear',
				infinite: true,
				speed: 500,
				draggable: false,
				autoplay: true,
				autoplaySpeed: 9000
			});
		}
	};

	var Search = {
		init: function() {
			Search.setElStructure();
			Search.shelfLineFix();
			Search.insertBuyButton();
			Search.createCategoryList();
			Search.setCategoryListTitle();
			Search.setEmptySearchText();
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
					var wrapper = $(".search-qd-v1-results > ol.component.item-gallery:not('.qd-fi-on')").addClass('qd-fi-on');

					var shelf = wrapper.children("li").removeClass('qd-first-line');
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
		},
		setElStructure: function() {
			var wrapper = $('.searchResults');

			wrapper.children().wrapAll('<div class="container search-qd-v1-wrapper" />').wrap('<div class="row" />').filter(function(){
				$t = $(this);
				return $t.is('.breadcrumbs-qd-v1') || $t.filter('.clearfix.background').has('#lnk-list').addClass('search-qd-v1-filter-wrapper');
			}).wrap('<div class="col-xs-12" />');

			wrapper.find('.rowsWrapper').addClass('search-qd-v1-results').wrap('<div class="row"><div class="col-xs-12 col-md-9" /></div>').parent().before('<div class="col-xs-12 col-md-3"><div class="search-qd-v1-category-list-wrapper"></div></div>');
			$(wrapper.find('> div > .row')[2]).before($('<div class="search-qd-v1-navigator-btn-wrapper"><div class="row"><div class="col-xs-12"></div></div></div>').append($('<a class="search-qd-v1-navigator-trigger" href="#" role="button">Filtrar resultado</a>').click(function(e) {
				e.preventDefault();
				$(document.body).addClass('qd-sn-on');
			})));

			$('.floating-mobile-qd-v1-search .search-qd-v1-navigator-trigger').click(function(e){
				e.preventDefault();
				$(document.body).addClass('qd-sn-on');
			});
		},
		insertBuyButton: function() {
			$('.search-qd-v1-results li > article').append(function(){
				return '<div class="shelf-qd-v1-buy-button"> <a href="' + $(this).find('a').first().attr('href') + '" tabindex="0"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Comprar</a> </div>'
			});
		},
		createCategoryList: function() {
			var wrapper = $('.search-qd-v1-category-list-wrapper').append('<h1 class="search-qd-v1-category-list-title">Categorias</h1>').append($('<div class="search-qd-v1-menu-close"><i class="fa fa-close"></i></div>').click(function() {
				$(document.body).removeClass('qd-sn-on');
			}));

			$.ajax({
				url: '//api.mercadoshops.com/v1/shops/161766806/categories/tree',
				success: function(data) {
					firstList = $('<ul class="search-qd-v1-category-list qd-list-1"></ul>');
					wrapper.append(firstList);
					(function createItems(item, parent, index, level) {
						if(item[index].name == "Outros") {
							index++;
							if(item.length > index)
								createItems(item, parent, index, level);
							return;
						}

						var tagName = (level == 1)?'h2':'p';
						var hasDropdown = (Array.isArray(item[index].children));
						var listElement = $('<li class="qd-level-' + level + ((hasDropdown)?" qd-has-dropdown":"") + '" />').append('<' + tagName + '><a href="' + (item[index].permalink.split('.mercadoshops.com.br').pop()) + '">' + item[index].name + '</a></' + tagName + '>');

						if(hasDropdown) {
							listElement.append($('<span class="search-qd-v1-menu-arrow"><i class="fa fa-chevron-up"></i></span>').click(function() {
								$(this).parent().toggleClass('qd-active');
							}));
							createItems(item[index].children, $('<ul class="qd-list-' + (level + 1).toString() + '" />').appendTo(listElement), 0, level + 1);
						}

						listElement.appendTo(parent);

						index++;
						if(item.length > index)
							createItems(item, parent, index, level);
					})(data, firstList, 0, 1);
				}
			});
		},
		setCategoryListTitle: function() {
			$('.search-qd-v1-category-list-title').text(function() {
				var text = $('.breadcrumbs-qd-v1 li').last().text();
				if(text.indexOf('Resultados para "') == -1) return text;

				var searchText = text.match(/^Resultados para \"([\s\S]+)\"$/);
				if((searchText || []).length < 2) return "Busca";
				return searchText[1];
			});
		},
		setEmptySearchText: function() {
			// Verifica se a busca está vazia
			if($('.breadcrumbs-qd-v1 li').last().text().indexOf('Não há resultados para "') != 0)
				return;

			$(document.body).addClass('qd-empty-search');

			$('.search-qd-v1-wrapper').append('<div class="search-empty-qd-v1-wrapper"><div class="row"><div class="col-xs-12 col-md-6 img-responsive"> <img src="//cdn.quatrodigital.com/brautopartes-mshops/images/empty-search-qd-v1.png" alt="" class="center-block"/></div><div class="col-xs-12 col-md-6"><div class="row"><div class="col-xs-12"><div class="search-empty-qd-v1-block"><h4>Ops! O item procurado não pode ser encontrado.</h4><p>Confira se você digitou as palavras corretamente ou tente novamente a busca.</p> <strong>Dicas para melhorar a sua busca:</strong><p>- Verifique se houve erro de digitação;</p><p>- Procure por um termo similar ou sinônimo;</p><p>- Tente procurar por palavras-chave mais gerais e filtrar o resultado de busca;</p><p>- Tente utilizar uma única palavra.</p></div></div></div></div></div></div>');
		}
	};

	var Product = {
		run: function() {},
		init: function() {
			Product.pageStructure();
			Product.imageStructure();
			Product.bannerTop();
			Product.qdSeeDescription();
			Product.facebookComments();
			// Product.newsletterFooter();
			Product.floating();
			Product.shelfBuyTogether();
			Product.shelfSimilar();
			Product.shelfCollections();
			// Product.affix();
			// Product.tableSize();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		addToCart: function(productId) {
			return 	$.ajax({
				url: '/cartactions',
				type: 'POST',
				data: {
					axn: 'add',
					itemId: productId,
					qty: 1,
				}
			});
		},
		shelfBuyTogether: function() {
			var wrapper = $('.product-qd-v1-shelf-buy-together');
			var buyButton = $('<span class="product-qd-v1-buy-button"><i class="fa fa-shopping-cart" aria-hidden="true"></i> comprar junto</span>');
			var $error = $('<span class="product-qd-v1-error hide"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Selecione a variação</span>');
			var productId1;
			var productId2;

			buyButton.click(function() {
				var status = false;

				wrapper.find('.product-qd-v1-sku-main').each(function(e) {
					var $t = $(this);

					if (!$t.val()) {
						status = true;
						$t.parent().find('select').addClass('error');
						return;
					}

					$t.parent().find('select').removeClass('error');
				});

				if (status) {
					$('html, body').stop().animate({
						'scrollTop': $('.product-qd-v1-shelf-buy-together').offset().top - 100
					}, 900, 'swing');

					return $error.removeClass('hide');
				}

				$error.addClass('hide');

				Product.addToCart($($('.product-qd-v1-sku-main')[0]).val()).complete(function() {
					Product.addToCart($($('.product-qd-v1-sku-main')[1]).val()).complete(function() {
						window.location.href = '/cart';
					})
				});
			});

			Common.worksheetCollection('Produto - Compre Junto', wrapper, function() {
				$('.product-qd-v1-shelf-buy-together-content').appendTo('');
				var price = 0;
				dataSkus = {};

				// Criar Select de Variação de SKU
				wrapper.find('.shelf-qd-v1').each(function() {
					var $t = $(this);
					var idProduct = $t.find('input[name="qd-id"]').val();
				  	var idSku = $t.find('input[name="qd-idSku"]').val();

					// Price
				  	price = price + parseFloat($t.find('input[name="qd-best-price"]').val().replace(',', '.'));

				  	// Variação de SKU
					$.qdAjax({
						url: '/api/available_variations',
						type: 'POST',
						data: {sku: idSku, itemId: idProduct}
					}).done(function(data) {
						var skuSelect1 = $('<select class="product-qd-v1-sku-1">');

						dataSkus[idProduct] = data.values;
						skuSelect1.append('<option value="">' + data.first_variation_name + '</option>');


						// Preenche o primeiro nivel de variação
						for (skuValue1 in data.values) {
							var sku1 = dataSkus[idProduct][skuValue1];

							if (sku1.use_stock && sku1.stock >= 1)
								skuSelect1.append('<option value="' + sku1.id + '">' + skuValue1 + '</option>');
							else
								skuSelect1.append('<option value="' + sku1.id + '">' + skuValue1 + '</option>');
						}

						// Verifica se há um segundo nivel de variação
						if (data.second_variation_name)
							$t.append(skuSelect1, '<select class="product-qd-v1-sku-main product-qd-v1-sku-2 hide"></select>');
						else
							$t.append(skuSelect1.addClass('product-qd-v1-sku-main'));

						// Preenche o segundo nivel de variação
						var skuSelect2 = $t.find('.product-qd-v1-sku-2');
						skuSelect1.on('change', function(e) {
							if (!data.second_variation_name)
								return;

							skuSelect2.html('').append('<option value="">' + data.second_variation_name + '</option>');

							if (typeof dataSkus[idProduct][this.value] == "undefined")
								return skuSelect2.addClass('hide');

							for (skuValue2 in dataSkus[idProduct][this.value].values) {
								var sku2 = dataSkus[idProduct][this.value].values[skuValue2];

								if (!sku2.use_stock)
									skuSelect2.append('<option value="' + sku2.itemIdString + '">' + skuValue2 + '</option>');
							}

							skuSelect2.removeClass('hide');
						});
					}).error(function() {
						$t.append('<input type="hidden" class="product-qd-v1-sku-main" value="' + idProduct  + '" />');
					});
				});

				$('.product-qd-v1-shelf-buy-together-content').append('<span class="qd-v1-best-price">R$ ' + qd_number_format(price, 2, ",", ".") + '</span> <span class="qd-v1-instalment">ou 12x de R$ ' + qd_number_format(price / 12, 2, ",", ".") + '</span>', buyButton, $error);
			}, 2, $('input[name="itemId"]').val(), true);
		},
		shelfSimilar: function() {
			Common.worksheetCollection('Produto - Coleção de Produtos Similares', $('.product-qd-v1-shelf-similar'), function() {
				Home.applyCarouselShelf();
			}, 8, $('input[name="itemId"]').val());
		},
		shelfCollections: function() {
			Common.worksheetCollection('Produto - Coleção', $('.product-qd-v1-shelf-collections'), function() {
				Home.applyCarouselShelf();
			});
		},
		tableSize: function() {
			var link = $('<span class="product-qd-v1-table-size-link">Tabela de Medidas</span>');
			var tabTitle = $('<li><a href="#tabTableSize" role="tab" arial-controls="tabTableSize" class="ch-tab-trigger">Tabela de Medidas</a></li>');

			// var tabContent = '';
			var prodInfo = $('.categoriesPath').text().trim() + ($('input#title').val() || '');

			// var htmlFeminino = '<div class="img-responsive"> <img src="//cdn.quatrodigital.com/brautopartes-mshops/images/Feminino.png" /> </div>';
			// var htmlMasculino = '<div class="img-responsive"> <img src="//cdn.quatrodigital.com/brautopartes-mshops/images/Masculino.png" /> </div>';
			// var htmlMoletom = '<div class="img-responsive"> <img src="//cdn.quatrodigital.com/brautopartes-mshops/images/Moletom.png" /> </div>';
			// var htmlRaglan = '<div class="img-responsive"> <img src="//cdn.quatrodigital.com/brautopartes-mshops/images/Raglan.png" /> </div>';
			// var htmlPoster = '<div class="img-responsive"> <img src="//cdn.quatrodigital.com/brautopartes-mshops/images/Poster.png" /> </div>';

			// if(prodInfo.toLowerCase().indexOf('feminin') > -1) tabContent += htmlFeminino;
			// if(prodInfo.toLowerCase().indexOf('masculin') > -1) tabContent += htmlMasculino;
			// if(prodInfo.toLowerCase().indexOf('moletom') > -1) tabContent += htmlMoletom;
			// if(prodInfo.toLowerCase().indexOf('raglan') > -1) tabContent += htmlRaglan;
			// if(prodInfo.toLowerCase().replaceSpecialChars().indexOf('poster') > -1) tabContent += htmlPoster;

			// if(tabContent == '')
				// tabContent = htmlFeminino + '<hr />' + htmlMasculino + '<hr />' + htmlMoletom + '<hr />' + htmlRaglan;

			// tabContent = $('<article id="tabTableSize" role="tabpanel" aria-hidden="true" class="ch-hide">' + tabContent + '</article>');

			var tabContent = $('<article id="tabTableSize" role="tabpanel" aria-hidden="true" class="ch-hide" />');

			link.click(function(e) {
				e.preventDefault();

				$('a[href="#tabTableSize"]').click();

				$('html, body').stop().animate({
					'scrollTop': $('.prodDescription').offset().top - 100
				}, 900, 'swing');
			});


			if(prodInfo.toLowerCase().indexOf('feminin') > -1) {
				Common.spreadsheetImages('Tab. Medidas Feminino', tabContent);
			}
			if(prodInfo.toLowerCase().indexOf('masculin') > -1) {
				Common.spreadsheetImages('Tab. Medidas Masculino', tabContent);
			}
			if(prodInfo.toLowerCase().indexOf('moletom') > -1) {
				Common.spreadsheetImages('Tab. Medidas Moletom', tabContent);
			}
			if(prodInfo.toLowerCase().indexOf('raglan') > -1) {
				Common.spreadsheetImages('Tab. Medidas Reglan', tabContent);
			}
			if(prodInfo.toLowerCase().replaceSpecialChars().indexOf('poster') > -1) {
				Common.spreadsheetImages('Tab. Medidas Poster', tabContent);
			}

			var refreshVisualCombo = window.mshops.vip.refreshVisualCombo;
			window.mshops.vip.refreshVisualCombo  = function() {
				refreshVisualCombo.apply(refreshVisualCombo, arguments);

				$('#my-var-container .variation-container li').each(function() {
					var $t = $(this);
					var text = $t.text().toLowerCase();

					if (text === 'tamanho' || text.indexOf('moldura') > -1) {
						$t.getParent('.ContentVariation').after(link);

						var prodDescription = $('.prodDescription');
						prodDescription.find('.ch-tabNavigator-triggers').append(tabTitle);
						prodDescription.find('.ch-tabNavigator-content').append(tabContent);
						prodDescription.tabNavigator();

						return false;
					}
				});
			};
		},
		floating: function() {
			var wrapper = $('.product-qd-v1-sku-selection-box');
			var $flaoting = $('<div class="product-qd-v1-floating product-qd-v1-sku-selection-box vip"> <div class="container"> <div class="row"> <div class="col-xs-3 col-md-1"> <div class="product-qd-v1-floating-image img-responsive"></div> </div> <div class="col-xs-9 col-md-11"> <div class="row"> <div class="col-xs-12 col-md-5"> <div class="product-qd-v1-floating-name"></div> </div> <div class="col-xs-6 col-md-3"> <div class="product-qd-v1-floating-price"></div> </div> <div class="col-xs-6 col-md-3"> <div class="product-qd-v1-floating-btn"> <span class="product-qd-v1-floating-error"> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> ESCOLHA A VARIAÇÃO DE PRODUTO </span> <a href="#">Comprar</a> </div> </div> </div> <span class="product-qd-v1-floating-error"> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> ESCOLHA A VARIAÇÃO DE PRODUTO </span> </div> </div> </div> </div>');

			$flaoting.find('.product-qd-v1-floating-image').append('<img src="' + ($('.vip-pub-image:first img').attr('src') || '').replace(/-[a-z]\.jpg/i, '-D.jpg') + '" />');
			$flaoting.find('.product-qd-v1-floating-name').append('<h2>' + wrapper.find('h1.title').text() + '</h2>');
			$flaoting.find('.product-qd-v1-floating-price').append(wrapper.find('.PaymentList li:first').html());
			$(document.body).append($flaoting);

			$flaoting.find('.product-qd-v1-floating-btn').click(function(e) {
				e.preventDefault();

				var has_variations = (mshops && mshops.vip && mshops.vip.variations);

				if (typeof has_variations == "undefined") {
					wrapper.find('.addCart').click();
					return;
				}

				if (has_variations.validate()) {
					$flaoting.find('.product-qd-v1-floating-error').css('display', 'none');
					wrapper.find('.addCart').click();
				} else
					$flaoting.find('.product-qd-v1-floating-error').css('display', 'block');
			});
		},
		affix: function() {
			$(".product-qd-v1-sku-selection-fixed").QD_affix({
				topSpacing: 100,
				bottomLimitSeletor: '.product-qd-v1-shelf-buy-together'
			});
		},
		imageStructure: function() {
			$('.ch-viewervip').find('.vip-pub-image img').each(function() {
				var $t = $(this);
				$t.attr('src', ($t.attr('src') || '').replace(/-[a-z]\.jpg/i, '-F.jpg'));
			});
		},
		newsletterFooter: function() {
			$('.ch-g1.mainContent > .ch-container').after('<div class="newsletter-qd-v1"></div>');
			Home.formNewsLetter();
		},
		facebookComments: function() {
			$('.prodDescription').after('<div id="fb-comments-box" class="third-party-component col-xs-12"> <h2 class="heading-3"> Confira as opniões sobre esse produto </h2> <div class="row"> <div class="col-xs-12 col-xs-offset-0 col-md-10 col-md-offset-1"> <div data-num-posts="4" data-width="100%" class="fb-comments"></div> </div> </div> </div>');
		},
		qdSeeDescription: function() {
			$('.product-qd-v1-details').click(function(e) {
				e.preventDefault();

				$('html, body').stop().animate({
					'scrollTop': $('.prodDescription').offset().top - 100
				}, 900, 'swing');
			});
		},
		pageStructure: function() {
			$('.ch-g1.wrapper').addClass('qd-loaded');
			$('.ch-g1 .mainWrapper').attr('class', 'container').before('<div class="product-qd-v1-banner hidden-xs hidden-sm"></div>').before('<div class="product-qd-v1-banner-mobile visible-xs visible-sm"></div>');
			$('.ch-container.oneColumn').attr('class', 'row');
			$('.ch-g4-10').attr('class', 'col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-0');
			$('.ch-g6-10').attr('class', 'col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0 product-qd-v1-sku-selection-fixed');
			$('.component.vip').addClass('product-qd-v1-sku-selection-box');
			$('.ms-shipping-calculator-container').insertAfter($('.product-qd-v1-sku-selection-box'));
			$('.addCart').after('<span class="product-qd-v1-details">Ver detalhes do produto</span>');
			$('.prodDescription').addClass('col-xs-10 col-xs-offset-1 col-md-12 col-md-offset-0');
			$('.product-qd-v1-sku-selection-fixed').after('<div class="col-xs-12"> <div class="product-qd-v1-shelf-buy-together"></div> <div class="product-qd-v1-shelf-similar"></div> <div class="product-qd-v1-shelf-collections"></div> </div>');

			var priceElement = $('.PaymentList li:first .priceInfo');
			if (priceElement.length == 1)
				priceElement.first().addClass('qd-best-price');
		},
		bannerTop: function() {
			Common.spreadsheetImages('Banner Página de Produto', $('.product-qd-v1-banner'));
			Common.spreadsheetImages('Banner Página de Produto Mobile', $('.product-qd-v1-banner-mobile'));
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
			Institutional.contactFormStructure();
			Institutional.pageStructure();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		pageStructure: function() {
			if(!$(document.body).is('#page-STATIC'))
				return;

			$('.ch-g1.main .mainWrapper').last().addClass('institutional-qd-v1-wrapper').wrapInner('<div class="container" />');
		},
		contactFormStructure: function() {
			if(!$(document.body).is('#page-CONTACT'))
				return;

			$('.ch-g1.main .mainWrapper').last().addClass('contact-form-qd-v1-wrapper').wrapInner('<div class="container" />');

			var social = $('.component.social');
			social.nextAll().add(social).hide();
		}
	};

	var Orders = {
		init: function() {},
		ajaxStop: function() {},
		windowOnload: function() {}
	};

	var Checkout = {
		init: function() {
			Checkout.buttonGoToPayment();
			Checkout.pageStructure();
			Checkout.imageStructure();
			Checkout.bannerTop();
		},
		ajaxStop: function() {},
		windowOnload: function() {},
		buttonGoToPayment: function() {
			$('<span class="qd-btn-go-to-payment">FECHAR PEDIDO</span>').click(function(){
				$('#newBuyCart-submit').click();
			}).insertBefore($('.ch-actions.cart'));
		},
		imageStructure: function() {
			$('.carritoresp .colFoto img').each(function() {
				var $t = $(this);
				$t.attr('src', ($t.attr('src') || '').replace(/-[a-z]\.jpg/i, '-E.jpg'));
			});
		},
		pageStructure: function() {			
			$('.ch-g1.main').attr('class', 'container').before('<div class="product-qd-v1-banner hidden-xs hidden-sm"></div>').before('<div class="product-qd-v1-banner-mobile visible-xs visible-sm"></div>');
			$('.ch-g1.wrapper .ch-container').last().addClass('checkout-qd-v1-wrapper').wrapInner('<div class="container" />');
			$('#couponCode').getParent('.item').addClass('checkout-qd-v1-coupon');
			$('.subtotal').addClass('checkout-qd-v1-subtotal');
			$('#ms-shipping-calculator-container').getParent('.item').addClass('checkout-qd-v1-shipping');
			$('.colFoto').each(function() {
				$(this).getParent('.item').addClass('checkout-qd-v1-item');
			});
		},
		bannerTop: function() {
			Common.spreadsheetImages('Banner Página de Checkout', $('.product-qd-v1-banner'));
			Common.spreadsheetImages('Banner Página de Checkout Mobile', $('.product-qd-v1-banner-mobile'));
		}
	}
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message)); }

try {
	(function() {
		var body, ajaxStop, windowLoad;

		windowLoad = function() {
			Common.windowOnload();
			if (body.is("#page-HOME")) Home.windowOnload();
			else if (body.is("#page-RESULT")) Search.windowOnload();
			else if (body.is("#page-VIP")) Product.windowOnload();
			// else if (body.is(".listas")) List.windowOnload();
			else if (body.is("#page-CONTACT, #page-STATIC")) Institutional.windowOnload();
			// else if (body.is(".orders")) Orders.windowOnload();
			else if (body.is("#page-CART")) Checkout.windowOnload();
		};

		ajaxStop = function() {
			Common.ajaxStop();
			if (body.is("#page-HOME")) Home.ajaxStop();
			else if (body.is("#page-RESULT")) Search.ajaxStop();
			else if (body.is("#page-VIP")) Product.ajaxStop();
			// else if (body.is(".listas")) List.ajaxStop();
			else if (body.is("#page-CONTACT, #page-STATIC")) Institutional.ajaxStop();
			// else if (body.is(".orders")) Orders.ajaxStop();
			else if (body.is("#page-CART")) Checkout.ajaxStop();
		};

		$(function() {
			body = $(document.body);
			Common.init();
			if (body.is("#page-HOME")) Home.init();
			else if (body.is("#page-RESULT")) Search.init();
			else if (body.is("#page-VIP")) Product.init();
			// else if (body.is(".listas")) List.init();
			else if (body.is("#page-CONTACT, #page-STATIC")) Institutional.init();
			// else if (body.is(".orders")) Orders.init();
			else if (body.is("#page-CART")) Checkout.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
		});

		Common.run();
		// if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			// Product.run();
		// else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			// List.run();
	})();
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass('jsFullLoaded jsFullLoadedError') && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message)); }

/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital - Scroll Toggle // 1.4 // Carlos Vinicius // Todos os direitos reservados */
(function(){var c=jQuery,e=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(c){try{console.info(b.join("\n"))}catch(e){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(l){try{console.warn(b.join("\n"))}catch(m){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var d=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)d.push(c(window).height());else return e("N\u00e3o foi informado o limite de scroll necess\u00e1rio para adicionar o atributo.");else{var b=a.split(","),f;for(f in b)"function"!==typeof b[f]&&(a=parseInt(b[f].trim()),
isNaN(a)||d.push(a))}if(!d.length)return e("Aaeeeeeeee irm\u00e3o! N\u00e3o consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return e('"document.body.setAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return e('"document.body.removeAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!document||!document.body||"undefined"===
typeof document.body.getAttribute)return e('"document.body.getAttribute" N\u00e3o \u00e9 uma fun\u00e7\u00e3o :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return e('"$(window).scrollTop" n\u00e3o esta retornando um n\u00famero inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){e("N\u00e3o foi poss\u00edvel fazer o passo a passo de consultar, adicionar e remover um atributo",
g.message)}c(window).scroll(function(){for(var a=0;a<d.length;a++)c(window).scrollTop()>d[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+a)})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();
/* Automatizador de comments box do Facebook // 1.6 // Carlos Vinicius [Quatro Digital] */
$(window).load(function(){var a=$(".fb-comments");a.length&&a.attr("data-href",document.location.href.split("#").shift().split("?").shift());$("#fb-root").length||$("body").append('<div id="fb-root"></div>');if(!$("script#facebook-jssdk").length){a=$("meta[property='fb:app_id']").attr("content")||!1;var b,c=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||(b=document.createElement("script"),b.id="facebook-jssdk",b.src="//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.3"+
(a?"&appId="+a:""),c.parentNode.insertBefore(b,c))}"undefined"!==typeof FB&&"undefined"!==typeof FB.XFBML&&FB.XFBML.parse()});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* Quatro Digital - Affix // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(F,d){if("function"!==typeof d.fn.QD_affix){var y=function(a,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var c;"object"===typeof a?(a.unshift("[Quatro Digital - Affix]\n"),c=a):c=["[Quatro Digital - Affix]\n"+a];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,c)}catch(d){try{console.info(c.join("\n"))}catch(e){}}else try{console.error.apply(console,
c)}catch(k){try{console.error(c.join("\n"))}catch(g){}}else try{console.warn.apply(console,c)}catch(p){try{console.warn(c.join("\n"))}catch(q){}}}},u={topSpacing:20,bottomSpacing:20,bottomLimitSeletor:!1,css:{position:"relative"}},e=d(window);e.width();var k=e.height(),z=function(a){var b=a;d(function(){e.resize(function(){b()})});e.load(function(){b=function(){};e.resize(a)})};z(function(){e.width();k=e.height()});d(function(){e.width();k=e.height()});var E=function(a,b){if(a.is(".qd-affix-on"))return y("Execu\u00e7\u00e3o ignorada pois a classe 'qd-affix-on' foi encontrado o que significa que este elemento j\u00e1 teve o plugin aplicado",
"aviso"),a;a.addClass("qd-affix-on");try{a.css(b.css);var c,m,x=function(){m=c=a.offset();m.top=c.top-b.topSpacing};x();var t=!1;a.width();var g=a.height(),p=function(){a.width();g=a.height();t=g+b.topSpacing+b.bottomSpacing>k;r&&(l=q.offset())},q,r=!1,l;(function(){if(b.bottomLimitSeletor){q=d(b.bottomLimitSeletor).first();var a=q.offset();a&&(r=!0,l=a)}})();var h=0,v=0,A=0,B=0,f=0,C=!1,D=0,w=0,n=function(){clearTimeout(A);A=setTimeout(p,25);5>w&&(a[0].style.top=0,x(),w+=1);f=window.scrollY||document.documentElement.scrollTop;
C=0!==f&&f<=B?!0:!1;B=f;if(r&&t){if(f+k>l.top&&a.offset().top+b.topSpacing+g+b.bottomSpacing>l.top){a[0].style.top=l.top-c.top-(b.topSpacing+g+b.bottomSpacing)+"px";return}}else if(r&&f+b.topSpacing+g+b.bottomSpacing>l.top)return;t?C?(h=f-m.top,-1<h&&a.offset().top-b.topSpacing>f&&(a[0].style.top=f-m.top+"px")):(h=c.top+g+b.bottomSpacing,v=f+k,h<v?f+k>a.offset().top+g+b.bottomSpacing&&(a[0].style.top=v-h-b.bottomSpacing+"px"):a[0].style.top=0):(h=f-m.top,a[0].style.top=-1<h?h+"px":0)};e.scroll(function(){n();
clearTimeout(D);D=setTimeout(n,50)});z(function(){p();n()});e.load(function(){p();n()});n()}catch(u){y("Erro: "+u.message)}};d.fn.QD_affix=function(a){var b=d(this);if(!b.length)return b;var c=d.extend({},u,a);b.each(function(){var a=d(this);a.qdPlugin=new E(a,c)});return b};d(function(){d(".qd_auto_affix").QD_affix()})}})(window,jQuery);