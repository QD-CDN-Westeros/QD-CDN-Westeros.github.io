"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});

function scrollPage(element){
	$('html, body').animate({
		scrollTop: $(element).offset().top
	}, 750);
}

function fixaAlturaImagem(resize){
	if(resize==true){
		if($('#image').find('img:first').outerHeight()>0)
			$('#image').height($('#image').find('img:first').outerHeight());
	}else{
		$('#image').find('img:first').load(function(){ 
			if($('#image').find('img:first').outerHeight()>0)
				$('#image').height($('#image').find('img:first').outerHeight());
		});
	}
}

$(document).ready(function(){
	
	// $('.visual .box-banner a').each(function(e) {
	// 	var $el = $(this).find('> img');
	// 	if ($el.length > 0) {
	// 		$(this).css('background-image','url(' + $el.attr('src') + ')');
	// 		$el.hide();
	// 	}
	// });

	var qdApplyCarrouselTab = function () {
		var wrapper = $('.tab-qd-v1-collections-wrapper');

		// Titulo
		wrapper.find('.prateleira').each(function(){
			var wrap = $(this);
			// wrap.find("h2").addClass('heading-1').insertBefore(wrap);
			$('<div class="carousel-qd-v1-wrapper"></div>').append($(wrap.find('> ul'))).appendTo(wrap);
		});

		wrapper.find('.carousel-qd-v1-wrapper').owlCarousel({
			items: 1,
			slideSpeed: 800,
			navigation: true,
			pagination: false,
			scrollPerPage: true
		});
	}();

	function newsletter(){
		var newsOptions = {
			setDefaultName: false,
			defaultEmail:"email@email...",
			elementError:".form-error",
			elementSuccess:".form-success"
		}

		if(typeof jQuery.fn.vtexNews2=="undefined"){
			jQuery.getScript("/arquivos/mb.newsletter.v.4.js", function(){
				jQuery(".subscribe").vtexNews2(newsOptions);
			});
		} else {
			jQuery(".subscribe").vtexNews2(newsOptions);
		}
	}
	newsletter();
	
	$(".nav-bar nav li").has("ul").addClass("has-drop");
	$(".nav-bar nav ul > .has-drop").append('<span class="opener"></span>');
	$('.nav-bar nav ul li').each(function(){
		if($(this).hasClass('active')) {
			$(this).find('ul').slideDown(0);
		}
	});
	$('#nav-bar nav .has-drop > .opener').click(function(){
		$(this).siblings('ul').slideToggle();
		$(this).closest('li').toggleClass('active');
		$(this).closest('li').siblings('.active').removeClass('active').children('ul').slideUp();
	});
	$('#filter nav .has-drop > .opener').click(function(){
		$(this).siblings('ul').slideToggle();
		$(this).closest('li').toggleClass('active');
		$(this).closest('li').siblings('.active').removeClass('active').children('ul').slideUp();
	});

	// para menu-departamento
	var elemH = $(".nav-bar nav .menu-departamento h3, .nav-bar nav .menu-departamento h4, .nav-bar nav .menu-departamento h5");
	elemH.each(function(){
		var $this = $(this);
		if($this.next("ul").length>0 && $this.next("ul").children().length>0) {
			$this.addClass("has-drop");
		}
	});
	
	$(".nav-bar nav .menu-departamento .has-drop").append('<span class="opener"></span>');
	$('.nav-bar nav .menu-departamento .has-drop > .opener').click(function(){
		$(this).parent().next().slideToggle();
		$(this).closest('.has-drop').toggleClass('active');
		$(this).closest('.has-drop').siblings('.active').removeClass('active').next('ul').slideUp();
	});

	$("#filter nav .menu-departamento").find(".has-drop").first().addClass('active').next("ul").slideDown(0);
	
	$('#wrapper > .container').append('<span class="overlay"></span>');
	$('#wrapper > .container').append('<span class="overlay-filter"></span>');
	
	$('.btn-menu').click(function() {
		$(this).toggleClass('active');
		$('body').toggleClass('open-nav');
		return false;
	});
	
	$('.overlay').on('click', function() {
		$('.btn-menu').click();
	});
	
	$('.btn-filter').click(function() {
		$(this).toggleClass('active');
		$('body').toggleClass('open-filter');
		return false;
	});
	
	$('.overlay-filter').on('click', function() {
		$('.btn-filter').click();
	});
	
	customForm.lib.domReady(function(){
		customForm.customForms.replaceAll();
	});

	// if($('.brandName').length>0){
	// 	$('.brandName').prepend('(').append(')');
	// }


	function tamanhos(){
		$(".skuList label").each(function(){
			var tamUS = $(this).text();
			tamUS = tamUS.substring(0, tamUS.indexOf('/')).replace("US","").replace(/ /g,"");
			$(this).html(tamUS); 
		});

		var skuBR = $(".sku-selector-container .topic").clone().addClass("br");
		$(".sku-selector-container").append(skuBR);
		
		$(".topic").each(function(){
			if(!$(this).hasClass("br")){
				$(this).addClass("us");
			}
		});
		$(".topic.br").wrapAll("<div id='skuBR'></div>");
		$(".topic.us").wrapAll("<div id='skuUS'></div>");

		(function(){
			var tabs = '.skuChoose .tabs';
			var contents = '.skuChoose .sku-selector-container';

			$(contents + ' > div').hide();
			$(contents + ' > div:first-child').show();

			$(tabs + ' a').click(function(){
				$(tabs + ' a').removeClass('selected');
				$(this).addClass('selected');
				$(contents + ' > div').hide();
				$(contents +  ' ' + $(this).attr('href')).show();
				return false;
			}); 
		}) ();
		
		var tamSkuPerna = {
			t28: "71,5",
			t29: "73,5",
			t30: "76",
			t31: "78,5",
			t32: "82",
			t34: "86"
		}
		var tamSkuCintura = {
			t30: "38",
			t31: "40",
			t32: "41",
			t33: "42",
			t34: "43",
			t35: "44",
			t36: "46",
			t38: "48",
			t40: "50"
		}

		$("#skuBR .TamPperna  label").each(function(){
			if($(this).text() == "28"){
				$(this).text(tamSkuPerna.t28);
			} else if($(this).text() == "29"){
				$(this).text(tamSkuPerna.t29);
			} else if($(this).text() == "30"){
				$(this).text(tamSkuPerna.t30);
			}  else if($(this).text() == "31"){
				$(this).text(tamSkuPerna.t31);
			} else if($(this).text() == "32"){
				$(this).text(tamSkuPerna.t32);
			} else if($(this).text() == "34"){
				$(this).text(tamSkuPerna.t34);
			}
		});

		$("#skuBR .TamPcintura  label").each(function(){
			if($(this).text() == "30"){
				$(this).text(tamSkuCintura.t30);
			} else if($(this).text() == "31"){
				$(this).text(tamSkuCintura.t31);
			}  else if($(this).text() == "32"){
				$(this).text(tamSkuCintura.t32);
			} else if($(this).text() == "33"){
				$(this).text(tamSkuCintura.t33);
			} else if($(this).text() == "34"){
				$(this).text(tamSkuCintura.t34);
			} else if($(this).text() == "35"){
				$(this).text(tamSkuCintura.t35);
			} else if($(this).text() == "36"){
				$(this).text(tamSkuCintura.t36);
			} else if($(this).text() == "38"){
				$(this).text(tamSkuCintura.t38);
			} else if($(this).text() == "40"){
				$(this).text(tamSkuCintura.t40);
			}
		});
	}
	if($("body.mb-produto-calca").length > 0){
		tamanhos();
	}

	$(".buy-button").bind("click", function(e) {
		if($(this).attr("href").indexOf('javascript') != -1){
			e.preventDefault();
			$(".erroMsg").css('display','block').delay(5000).fadeOut();
		}
	});
});

$(window).load(function(){

	if($('body').hasClass('produto')){

		function tabs() {
			var tabs = '.details .tabs';
			var contents = '.details .contents';

			$(contents + ' > div').hide();
			$(contents + ' > div:first-child').show().addClass("selected");

			$(tabs + ' a').click(function(){
				$(tabs + ' a').removeClass('selected');
				$(this).addClass('selected');
				$(contents + ' > div').hide();
				$(contents +  ' ' + $(this).attr('href')).show();
				return false;
			}); 
		}
		tabs();

		function sliderProductImages(){
			var thumbs = $('.thumbs');
			if(thumbs.find('li').length<2) return false;

			var slideshow = $('<div/>').attr({'id':'slideshow', 'class':'slideshow'});
			var slides = $('<ul/>').addClass('slides');

			thumbs.find('li').each(function(index, item){
				var rel = $(item).find('a').attr('rel').trim();
				var slideElem = $('<li><figure><img src="'+rel+'" alt="" border="0"></figure></li>');
				slides.append(slideElem);
			});

			slideshow.append(slides);
			$('#image').addClass('slide-active').html(slideshow);

			$('#slideshow').flexslider({
				controlNav: false,
				animation: 'slide'
			});
		}
		fixaAlturaImagem();
		sliderProductImages();
		$('.topic input[type="radio"]').change(function() { 
			$('.thumbs').find('img:first').load(function(){ sliderProductImages(); });
		});
		// fixaAlturaImagem();

		function fixPrice(){
			if($('.valor-por').length>0){
				var valor = $(".valor-por").html().replace("Por:", "");
				$(".valor-por").html(valor);
			}
		}
		fixPrice();

		var specification = function(){
			var specs = $('.especificacoes #caracteristicas'),
			section = $('.details .description'),
			section_div = $('.section-description');

			if(specs.find('.value-field.Aplicacao').length>0){
				section.find('.section-description-1').show().append(specs.find('.value-field.Aplicacao').html());
			}else{
				section.find('.section-description-1').hide();
			}

			if(specs.find('.value-field.ESPECIFICACAO').length>0){
				section.find('.section-description-2').show().append(specs.find('.value-field.ESPECIFICACAO').html());
			}else{
				section.find('.section-description-2').hide();
			}

			// if(specs.find('.value-field.Sobre-a-Marca').length>0){
			// 	section.find('.section-description-3').show().append(specs.find('.value-field.Sobre-a-Marca').html());
			// }else{
			// 	section.find('.section-description-3').hide();
			// }
		}
		specification();

		function pinit(){
			var url = escape(document.location.href);
			var img_url = jQuery('.thumbs li:first a').attr('rel').replace(/\n/,"");
        var img_pin = img_url; //escape(document.location.protocol + "//" + document.location.host + img_url);
        var text_description = jQuery(".productName:first").text();
        var full_url = "//pinterest.com/pin/create/button/?url="+url+"&media="+img_pin+"&description="+text_description;
        var button = jQuery("<a/>").addClass("pin-it-button").attr({"href":full_url,"count-layout":"horizontal"});
        var img = jQuery("<img/>").addClass("pinterest-button").attr({"border":"0","src":"//assets.pinterest.com/images/PinExt.png", "title":"Pin It"});

        jQuery(button).append(img);
        jQuery(".share-pinterest").html(button);

        var script = jQuery("<script/>").attr({"id":"pinit","src":"//assets.pinterest.com/js/pinit.js"});

        if(jQuery("#pinit").length<=0)
        	jQuery(document).append(script);
    }

    function socials(){
    	var socials = $('.socials-widgets');
    	var title   = $('.details .productName').text();
    	var url     = document.location.href;
    	var summary = $('.section-description-0').find('.productDescription').text();
    	var image   = $('.thumbs').find('li:first a').attr('rel').replace(/\n/,"");

    	var face = $('<a href="//www.facebook.com/sharer.php?u='+url+'&amp;t='+title+'&amp;display=popup" target="_blank"><img src="/arquivos/mb-img-social-01.jpg" alt="" /></a>');
    	var encodeURI_text_whats = encodeURI(title+' '+url)
    	var whats = $('<a href="whatsapp://send?text='+encodeURI_text_whats+'" target="_blank"><img src="/arquivos/mb-img-social-02.jpg" alt="" /></a>');
    	var twitter = $('<a href="//twitter.com/share?url='+url+'&amp;text='+title+'&amp;counturl='+url+'" target="_blank"><img src="/arquivos/mb-img-social-03.jpg" alt="" /></a>');

    	socials.find('.share-facebook').append(face);
    	socials.find('.share-whatsapp').append(whats);
    	socials.find('.share-twitter').append(twitter);
    	pinit();
    }
    socials();
}

if($('body').hasClass('departamento') || $('body').hasClass('categoria') || $('body').hasClass('resultado-busca')){

	function orderBy(){
		if($('.sub').length<1) return false;

		$('.searchResultsTime:first').addClass("top");
		$('.sub:first').addClass("top");
		$('.searchResultsTime:last').addClass("bottom");
		$('.sub:last').addClass("bottom");
	}
	orderBy();

	function searchTerm(){
		var uri,urlArray=document.location.href.replace(/http[s]?:\/\//i,"").split("/");

		if(urlArray.length>1)
		{
			urlArray.shift();
			uriArray=urlArray.join("/").split("?");
			if(/busca/.test(urlArray[0]))
			{
				var tmp=uriArray.pop().split("&");
				for(var item in tmp)
					if(typeof(tmp[item])=="string" && tmp[item].search(/ft=/i)>-1)
						uri=tmp[item].replace(/ft=/i,"");
				}
				else
				{
					uri=urlArray.shift().split("?").shift();
				}
			}

			if(uri!=null && uri!="undefined")
				uri=decodeURIComponent(uri);
			else
				uri=$(".bread-crumb li.last").text().replace(/^\s*([\S\s]*?)\s*$/, '$1');

			return uri;
		}

		function searchNotFound(){ 
			var busca = $('body').find('.busca-vazio');
			var searchWord = searchTerm();
			var txt = "";

			busca.html("");
			txt += "<ul><li>Verifique se houve erro de digitação.</li><li>Simplifique sua busca com termos menos específicos.</li><li>Se tiver alguma dúvida, mande um e-mail para: atendimento@simplesbeleza.com.br</li></ul>";

			if(busca.length > 0) {
				$('.btn-filter').hide();

				// $('.headline .bread-crumb ul').append('<li>Cara, nós simplesmente odiamos quando isso acontece!</li>');

				if(searchWord===""){
					busca.append('<h2>Não encontramos nenhum resultado.</h2>');
				}else{
					busca.append('<h2>SUA BUSCA POR "<span>'+searchWord+'</span>"<br/>NÃO ENCONTROU RESULTADOS.</h2>');
					busca.append(txt);
				}
			}
			// else if($('.titulo-sessao:first').text()=="Resultado da Busca:"){
			// 	$('.titulo-sessao').text("Encontramos algo pra você: "+searchWord);
			// 	// $('.titulo-sessao:first').text('Encontramos algo pra você!');
			// }
		}
		
		searchNotFound();
	}

	if($('body').hasClass('account')){
		$('.edit-profile-link').find('#edit-data-link').click(function(e){
			$('#editar-perfil').slideDown();
			scrollPage('#editar-perfil');
			e.preventDefault();
		});
		$('#editar-perfil-conteudo .modal-footer .btn-link, #editar-perfil-conteudo .close').click(function(){
			$('#editar-perfil').slideUp();
			scrollPage('.profile-detail-display');
		});

		$('.address-display-block').find('.address-update').click(function(e){
			$('#address-edit').slideDown();
			scrollPage('#address-edit');
			e.preventDefault();
		});
		$('#address-edit .modal-footer .btn-link, #address-edit .close').click(function(){
			$('#address-edit').slideUp();
			scrollPage('.address-display-block');
		});

	}
	
	if($('body').hasClass('orders')){
		$('#order-content link[rel="stylesheet"]').each(function(ndx,item){
			$(this).prependTo("head");
		});
	}

	$(window).on('resize', function (){
		fixaAlturaImagem(true);			
	});
});


$(document).ready(function(){
	$('.buy-button').click(function(){
		if (Produto()) {
			MensagemSeletorSku();
		};
	})
})

function Produto(){
	if ($('body').hasClass('mobile-produto')) {
		console.log('produto mobile');
		return true;
	}else{
		return false;
	}
}

function MensagemSeletorSku(){

	if ($('.buy-button').attr('href').indexOf('javascript') != -1) {

		alert('Por favor, selecione o tamanho desejado.');

	}else{

		$('.buy-button').attr('onclick', '');

	}
}

/* Smart Tabs - Automatização de Abas // Carlos Vinicius -  Quatro Digital // 1.4 // Todos os direitos reservados */
$(function(){var g;g={tabsWithShelf:function(){$(".qd-smartTabsCollections").each(function(){var c,a,b;c=$(this);a=c.find(".qd-tabNav");b=0;c.find(".qd-collections >div").each(function(){var c,d;c=$(this).addClass("qd-tabContent").addClass("qd_itemContent-"+b);d=$("<li class='qd_itemTitle-"+b+"'></li>").append($("<span></span>").html(c.find(">h2").html()||""));a.append(d);0===b&&(d.addClass("qd-activeTab"),c.addClass("qd-activeContent"));b++});a.find(">li:last").addClass("last");c.addClass("qd-smartTabs")})},
configs:function(c){if(c.length){var a,b,e,d;a=c.attr("data-tabs")||"";c={hideEmpty:null};a=a.split(/\;\s*/);for(b in a)"string"===typeof a[b]&&""!==a[b]&&(e=a[b].split(":"),d=e.shift(),"hideEmpty"===d?c.hideEmpty=e.pop().trim():"showCallback"===d&&(c.showCallback=window[e.pop().trim()]||null));return c}},tabs:function(){$(".qd-smartTabs").each(function(){function c(){var c=a.find(".qd-activeTab");"function"===typeof e.showCallback&&c.length&&e.showCallback(c,a.find(".qd-activeContent"))}var a,b,
e,d,f,k;a=$(this);e=g.configs(a);b=a.find(".qd-tabNav");if(a.find(".box-banner").length){var h=$('<ul class="qd-tabNav"/>').appendTo(a);k=a.find(".box-banner");k.each(function(c,d){var b=$(d);b.addClass("qd-tabContent");h.append("<li>"+b.find("img").attr("alt")+"</li>");b.appendTo(a)});h.find("li:first").addClass("qd-activeTab");a.find(".box-banner:first").addClass("qd-activeContent");h.children("li").bind("click",function(){var b=$(this);if(b.hasClass("qd-activeTab"))return!1;h.find("li").removeClass("qd-activeTab");
b.addClass("qd-activeTab");d=a.find(".qd-tabContent");f=d.eq(b.index());f.is(".qd-activeContent")||(d.hide().removeClass("qd-activeContent"),f.fadeTo(300,1).addClass("qd-activeContent"),c())})}b.children("li").bind("click",function(){var e=$(this);if(e.hasClass("qd-activeTab"))return!1;b.find("li").removeClass("qd-activeTab");e.addClass("qd-activeTab");d=a.find(".qd-tabContent");f=d.eq(e.index());f.is(".qd-activeContent")||(d.hide().removeClass("qd-activeContent"),f.fadeTo(300,1).addClass("qd-activeContent"),
c())});"false"!==e.hideEmpty&&(d=a.find(".qd-tabContent"),d.each(function(){var a;a=$(this);0<a.text().trim().length||(a.addClass("qd-noContent").hide(),b.children("li:eq("+d.index(a)+")").addClass("qd-noContent").hide())}),b.children("li:not(.qd-noContent):first").trigger("click"));c()})}};g.tabsWithShelf();g.tabs()});

// owl carousel
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,c="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(c+=a.owl[d].item);b.$elem.html(c)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);