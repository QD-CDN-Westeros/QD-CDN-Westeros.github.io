$(function () {
	//$('#bannersCarrossel').after('<div id="navBannersCarrossel" class="nav-banners-carrossel clearfix">').cycle({fx:'fade', pager: '#navBannersCarrossel'});
	$('#bannersCarrossel').after('<div class="container-buttons"><div id="navBannersCarrossel" class="nav-banners-carrossel clearfix">').cycle({fx:'fade', timeout: 8000, pager: '#navBannersCarrossel', next:'#next_banner', prev:'#prev_banner', pause: 1 , after: onAfter});
	function onAfter() { 
		var xis = $('.activeSlide').text();
		var valor_soma = (xis-1)*'36';
		var final_valor = valor_soma+'px 3px'; 
    	$('#navBannersCarrossel').css('background-size', final_valor);
    	//console.log(final_valor);
	}
	$('#navBannersCarrossel').before('<div class="play-pause"><div id="btn-play">Play</div><div id="btn-pause">Pause</div></div>');
	
	$('#btn-pause').click(function() { 
	    $('#bannersCarrossel').cycle('pause');
	    $('#btn-play').css('display','block');
	    $('#btn-pause').css('display','none');
	});
	
	$('#btn-play').click(function() { 
	    $('#bannersCarrossel').cycle('resume'); 
	    $('#btn-pause').css('display','block');
	    $('#btn-play').css('display','none');
	});

	if ($('#carrossel-moda ul').length > 0) {
		$('#carrossel-moda .helperComplement').remove();
		$('#carrossel-moda ul').jcarousel();
	}

	if ($('#carrossel-eletronicos ul').length > 0) {
		$('#carrossel-eletronicos .helperComplement').remove();
		$('#carrossel-eletronicos ul').jcarousel();
	}

	if ($('#carrossel-cmb ul').length > 0) {
		$('#carrossel-cmb .helperComplement').remove();
		$('#carrossel-cmb ul').jcarousel();
	}

	if ($('#carrossel-procurados ul').length > 0) {
		$('#carrossel-procurados .helperComplement').remove();
		$('#carrossel-procurados ul').jcarousel();
	}

	if ($('#carrossel-marcas ul').length > 0) {
		$('#carrossel-marcas ul').jcarousel();
	}
	

	// CARROSSEL FOTOS SKU (ADICIONAR SPAN.prev-foto-sku e SPAN.NEXT-foto-sku no final da DIV.row-imagem-produto)
	// $('.row-imagem-produto').each(function() {
	// 	if ($('span.foto-over img', this).length > 0) {$('.next-foto-sku').show();}
	// })

	// $('.next-foto-sku').click(function() {
	// 	$(this).parent().find('.foto-over').toggle();
	// 	$(this).parent().find('.prev-foto-sku').show();
	// 	$(this).hide();
	// });

	// $('.prev-foto-sku').click(function() {
	// 	$(this).parent().find('.foto-over').toggle();
	// 	$(this).parent().find('.next-foto-sku').show();
	// 	$(this).hide();
	// })
	// end CARROSSEL FOTOS SKU
});