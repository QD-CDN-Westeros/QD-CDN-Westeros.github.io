$(function() {

	vtexjs.checkout.getOrderForm().done(function(orderForm){
		$('.wrapper-sacola span').html(orderForm.items.length)
	});	

	$('article .row-nome-produto').dotdotdot();
	// QUANTIDADE SACOLA
	$('#numero-carrinho, #numero-carrinhoFloater').load('/no-cache/QuantidadeItensCarrinho.aspx .amount-items-em');

	//MENU PRINCIPAL
	$('.start-drop').mouseover(function() {
		var _this = $(this);
		_this.find('.drop-container').show();

		_this.mouseout(function() {
			_this.find('.drop-container').hide();
		});
	});

	$('#carrinho-barra').hide();
	$(window).scroll(function(){
		if($(window).scrollTop() < 200){
			$('#carrinho-barra').fadeOut('normal');
		} else {
			$('#carrinho-barra').fadeIn('slow');
		}
	}); 

	$('.sub').last().addClass('last');
	
	
	// Newsletter Fixo	
		$(window).scroll(function () { 
		
			var scroll= $(window).scrollTop();
		
			if (scroll >= 360 && scroll < 6000) { 
				$(".news-novo").addClass("news-fixo");			
			} else {
				$(".news-novo").removeClass("news-fixo");
			}
		});  
		$(".news-fechar").click(function(){
			
			$( '#newsletter' ).hide( "slow" );;			
		});
	// Fim News

	if ($('body.produto').length > 0)
		$(".helperComplement").remove();

	$('.sku-data').each(function() {
		var $t = $(this);
		var id_produto = $t.attr('data-sku');
		vtexjs.catalog.getProductWithVariations(id_produto).done(function(product){
			var html = '';

			for (var i = 0; i < product.skus.length; i++) {
				if (i > 2)
					break;

				html += '<img src="'+product.skus[i].image+'" width="60px">';
			}

			$t.find('.sku').html(html);
		});
		$(window).load(function(){
			$t.find('.sku img').on( "click", function() {
				$t.find('.row-imagem-produto img').attr('src', $(this).attr('src'));
			});
		});
	});
});

$(document).ready(function() {
	if($('.menu-departamento ul').length > 0){
		$(".menu-departamento ul").niceScroll({
			autohidemode: false,
			cursorcolor: "#464646",
			cursorwidth: "10px",
	        cursorborder: "1px solid #fff",
	        cursorborderradius: "5px",
	        background: "#d9d9d9",
			zindex: "9999"
		});
	};

	if($('body.colecao-outono').length > 0){
		$('#teste').fancybox();
		
		$('#video').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
		
		var a = function(self){
			self.anchor.fancybox();
		};
		$("#pikame").PikaChoose({buildFinished:a,carousel:true,carouselOptions:{wrap:'circular'}});

	};

	// if($('body.categoria').length > 0){
	// 	//var menuCat = $('.categoria .container-resultado .wrapper-sidebar ul li').length;
	// 	var menuCat = $('.categoria .container-resultado .wrapper-sidebar ul li').text();
	// 	menuCat = menuCat.split('(');
	// 	console.log(menuCat);
		
	// };
});