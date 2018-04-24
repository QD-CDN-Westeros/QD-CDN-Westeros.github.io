$(function() {

	if ($("body").is('.moda-casa')) {
		// var wrapper = $('.product-carousel');

		// wrapper.find('.wrapper-carrossel').each(function(){
		// 	var wrap = $(this);

		// 	wrap.find("h2").addClass('heading-3').insertBefore(wrap);
		// });
		$('#product-carousel .helperComplement').remove();
		$('#product-carousel ul').jcarousel();
	}

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

	if ($('body.produto').length > 0) {
		$(".helperComplement").remove();
	}
	if ($('.sku-data').length > 0) {
		var elems = $('.sku-data');
		var arr = $.makeArray(elems);
		$.each( arr, function( r, x ){
			var id_produto = $(x).attr('data-sku');
			console.log()
			vtexjs.catalog.getProductWithVariations(id_produto).done(function(product){
				$(x).find('.sku').html('<img src="'+product.skus[0].image+'" width="60px"> <img src="'+product.skus[1].image+'" width="60px"> <img src="'+product.skus[2].image+'" width="60px">');
			});
			$(window).load(function(){
				$(x).find('.sku img').on( "click", function() {
					$(x).find('.row-imagem-produto img').attr('src', $(this).attr('src'));
				});
			});
		});
	}


});

$(document).ready(function() {
	if($('.menu-departamento ul').length > 0){
		$(".menu-departamento ul").niceScroll({
			autohidemode: true,
			cursorcolor: "#464646",
			cursorwidth: "10px",
	        cursorborder: "1px solid #fff",
	        cursorborderradius: "5px",
	        background: "#d9d9d9",
			zindex: "9999"
		});
	};



	// if($('body.categoria').length > 0){
	// 	//var menuCat = $('.categoria .container-resultado .wrapper-sidebar ul li').length;
	// 	var menuCat = $('.categoria .container-resultado .wrapper-sidebar ul li').text();
	// 	menuCat = menuCat.split('(');
	// 	console.log(menuCat);
		
	// };

});


// $(document).ready(function() {
// 	console.log("teste");

// 	if ($("body").is('.moda-casa')) {
// 		$('.wrapper-carrossel >ul').jcarousel();
// 	}
// });