var funcionalidadesStatic = function(){
	var init = function(){
		generales();
		desplieguePromesas();
		generarPromesas();
		activePromesa()
	};
	var generales =function(){

	};

	var activePromesa = function(){
		var linkPromesaName = localStorage.getItem("linkName");
		$(".contentPromesas .contInterno."+linkPromesaName).addClass('active');
		console.log('linkPromesaNamelinkPromesaNamelinkPromesaName');
		console.log(".contentPromesas .contInterno."+linkPromesaName);
	}

	var generarPromesas = function(){

		$('.mainContent .staticContent .menuPromesas').empty();

	    $('.headerNew17 .promValor div a').each(function(){
	      var htmlPromesas='';
		      htmlPromesas += '<div>';
		      htmlPromesas +=   '<h2 data-content="'+$(this).data('namecontent')+'">'+$(this).data('tab').toUpperCase()+'</h2>';
		      htmlPromesas += '</div>';


     		$('.mainContent .staticContent .menuPromesas').append(htmlPromesas); 
	    });

	    $('.mainContent .staticContent .menuPromesas h2').click(function(){
	      var classContentText = $(this).data('content');
	      $('.contentPromesas').find('.'+classContentText).siblings().removeClass('active');
	      $('.contentPromesas').find('.'+classContentText).addClass('active');
	    });

	}

	var desplieguePromesas =function(){

		var menuPromesas = $(".promesas .mainContent .menuPromesas div");
		var itemMenuTitle = $(".promesas .mainContent .contentPromesas .contInterno h2")
		var itemSelect = $(".promesas .mainContent .contentPromesas .contInterno");

		menuPromesas.click(function(){

			$(this).addClass("active")
			$(this).siblings().removeClass("active")
			titlePromesas = $(this).children("h2").text();

			itemMenuTitle.each(function(){
				 var titles = $(this).text()
				 if( titles == titlePromesas ){

				 	$(this).parent().addClass("active")

				 }else{
				 	$(this).parent().removeClass("active")
				 }
			})


		});
	};

	return{init:init}
}();

$( document ).ready(function() {


	funcionalidadesStatic.init();

    $('#tabs-sidebar ul li').click(function(){
		var idActual = $(this).attr('id');
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		

		$('#content .tab').each(function(){
			if($(this).hasClass(idActual)){
				$(this).show();
				$(this).siblings().hide();
			}
		});
	});

	$('.accordian ul li h3').click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().find('div').slideUp();
		$(this).addClass("active");
		$(this).parent().siblings().find('h3').removeClass("active");
	});

	var somosUrl = window.location.href;
	var newSomosUrl = somosUrl.indexOf ('quienes-somos')

	if (newSomosUrl > -1){
		$('.somos').addClass('active');
	}

	var faqsUrl = window.location.href;
	var newFaqsUrl = faqsUrl.indexOf ('preguntas-frecuentes')

	if (newFaqsUrl > -1){
		$('.faqs').addClass('active');
	}

	var termsUrl = window.location.href;
	var newTermsUrl = termsUrl.indexOf ('politicas-terminos-condiciones')

	if (newTermsUrl > -1){
		$('.terms').addClass('active');
	}

	var mapUrl = window.location.href;
	var newMapUrl = mapUrl.indexOf ('mapa-sitio')

	if (newMapUrl > -1){
		$('.map').addClass('active');
	}

	var creditUrl = window.location.href;
	var newCreditUrl = creditUrl.indexOf ('linea-credito')

	if (newCreditUrl > -1){
		$('.credit').addClass('active');
	}

});
