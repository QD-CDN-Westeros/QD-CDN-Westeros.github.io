
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function showPopup(){
	var popUp = $('#my-popup');
		$.magnificPopup.open({   
			items: {
				src: popUp
			},
			tClose: 'Fechar',
            type: 'inline',
            closeOnBgClick: false 
			
		});

    	$('.btn-close').click(function(){
			$.magnificPopup.close();
        });
        
}

var Cookie = {
    set: function setCookie(cname, cvalue, exdays) {
     var d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
     var expires = "expires="+ d.toUTCString();
     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    get: function get(cname) {
     var name = cname + "=";
     var decodedCookie = decodeURIComponent(document.cookie);
     var ca = decodedCookie.split(';');
     for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
       c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
       return c.substring(name.length, c.length);
      }
     }
     return "";
    }
   }
   
   
   function showPopup(){
    var popUp = $('#my-popup');
     $.magnificPopup.open({   
      items: {
       src: popUp
      },
      tClose: 'Fechar',
               type: 'inline',
               closeOnBgClick: false 
      
     });
   }
   
   var setModal = function setModal(){
    if(Cookie.get('modalVisualized')) return;
   
   // showPopup();
   
    $('.message-yes').click(function(){
        $('.box-heart').html('');
        $('.box-heart').append('<div class="cupomDiscount"><p class="pegue-cupom-message">ParabÃƒÆ’Ã‚Â©ns, vocÃƒÆ’Ã‚Âª ganhou 10% de Desconto, copie e cole o cÃƒÆ’Ã‚Â³digo no campo cupom de desconto</P><span>#LEVELOVE2018</span></div><div class="message-bottom-social"> <p>Compartilhe sua atitude com a gente usando #espalhelove</p></div>');
        $('.mfp-close-btn-in .mfp-close').css('display','block');
        Cookie.set('modalVisualized', true, 365);       
    });
    $('.btn-close').click(function(){
        Cookie.set('modalVisualized', true, 365);
          $.magnificPopup.close();
       });
   }
   setModal();


var visited = readCookie('mypopup');

function primeira_visita() {
	if (!visited) {
		//showPopup();
		createCookie('mypopup', 'lightbox', 3);
	}
}

//primeira_visita();
// function showDiscount(){
//     $('.message-yes').click(function(){
//         $('.box-heart').html('');
//         $('.box-heart').append('<div class="cupomDiscount"><p class="pegue-cupom-message">Seu Cupom de desconto</P><span>ESPALHEOLOVE</span></div>');
//     })
// }
// showDiscount();


// var animateBgHeart = function animateBgHeart(){
//     var id = 0;
//     setInterval(function(){
//       id++;
//       var randColor = Math.round( Math.random() * (6 - 1) ) + 1;
//       var randPos = Math.round( Math.random() * (100 - 0) );
//       var randSize =   Math.round(Math.random() * (10 - 5) + 5) / 10;
//       var randSpeed = Math.round( Math.random() * (6 - 3) ) + 3;
//       $('.heart-bg-animate').append('<figure id="heart-animate-'+id+'" style="transform: scale('+randSize+'); left:'+randPos+'%; animation-duration: '+randSpeed+'s;" class="heart-'+randColor+'"><i></i></figure>');
//       var _this = '.heart-bg-animate figure#heart-animate-'+id;
//       setTimeout(function(){
//         $(_this).detach();
//       },randSpeed*1000+20);
//     }, 400);
//   };
  
 
//     if ($(window).width() > 768) {        
//         $('.bg-pop-picture').addClass('heart-bg-animate');
//         animateBgHeart();
//     }
    
slideBanner = function() {
    var options = {
        slidesToShow: 1,
        fade: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 5000,
        autoplay:true
    }

    $('.mx-content .mx-banner-main').slick(options);
        
};

slideBannerMobile = function() {
    var options = {
        slidesToShow: 1,
        fade: true,
        dots: true,
        arrows: false,
        autoplaySpeed: 5000,
        autoplay:true
    }

    $('.mx-content .mx-banner-main-mobile').slick(options);
};

sliderProducts_Special = function() {
    $('.mx-product-list_special .mx-carousel .prateleira > ul').slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 5,
        centerPadding: '0px',
        focusOnSelect: false,
        adaptiveHeight: true,
        touchMove: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        },{
            breakpoint: 1080,
            settings: {
                slidesToShow: 1
            }
        }]
    });
};

 caraouselMiddle = function(){    
    $('.content-midlle .prateleira > ul').slick({
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        centerPadding: '0px',
        focusOnSelect: false,
        adaptiveHeight: true,
        touchMove: true,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        },{
            breakpoint: 1080,
            settings: {
                slidesToShow: 1
            }
        }]
    });

};

bulletsTextBanner = function() {
    $('.mx-content .mx-banner-main img').each(function(index) {
        var $nameImage = $(this).attr('alt');
        $('.mx-bullets-banner ul').append('<li class="bullets-text" data-index="' + index + '"><p>' + $nameImage + '</p></li>');
        $('.bullets-text, .slick-dots ul li button').eq(0).addClass('mx-active');
    });

    $('.mx-content .mx-bullets-banner ul li').on('click', function() {
        $('.mx-content .mx-bullets-banner ul li').removeClass('mx-active');
        $(this).addClass('mx-active');
        var $indexBullet = $(this).data('index');
        $('.mx-content .mx-banner-main .slick-dots li button').eq($indexBullet).click();
    });

    $(document).on('click', '.mx-content .mx-banner-main .slick-dots li', function() {
        var $bulletIndex = $(this).index();
        $('.mx-content .mx-bullets-banner ul li').removeClass('mx-active');
        $('.mx-content .mx-bullets-banner ul li').eq($bulletIndex).addClass('mx-active');
    });

    // $('.mx-content .mx-banner-main .slick-dots li').each(function(index){
    // console.log(index)
    // if($(this).hasClass("slick-active")){
    //         var $getBulletIndex = $(this).index();
    //         $('.mx-bullets-banner ul li').removeClass('mx-active'); 
    //         $('.mx-bullets-banner ul li').eq($getBulletIndex).addClass("mx-active");
    //     }
    // });


   //  $('.mx-content .mx-banner-main .slick-dots li').each(function(index){
   //      if($(this).find('.mx-content .mx-banner-main .slick-dots li.slick-active').index()){
   //          var $XPTO = $(this).index();
   //          $('.mx-bullets-banner ul li').removeClass('mx-active');    
   //          $('.mx-bullets-banner ul li').eq($XPTO).addClass('mx-active');
   //      }
   // }); 

    $('.slick-slider').on('afterChange', function(event, slick, currentSlide){
        
       // console.log(currentSlide);
        //  var $XPTO = $(this).index();
        // $('.mx-bullets-banner ul li').each(function(index,el) {
        //     $('.mx-bullets-banner ul li').removeClass('mx-active');
        //     $('.mx-bullets-banner ul li').eq($XPTO).addClass('mx-active');
        // });
        
    });

};

$(document).ready(function() {
    slideBanner();
    bulletsTextBanner();
    sliderProducts_Special();
    caraouselMiddle();
    slideBannerMobile();
    if ($('body').width() > 760) {
    	function minHeightBackground() {
	        var $heightVitrine = $('.mx-content .mx-vitrine-special .mx-product-list_special').height() + 80;
	        var $imageMinHeight = $('.mx-content .mx-vitrine-special .mx-banner-vitrine .box-banner img').attr('src');
	        var $divBanner = $('.mx-content .mx-vitrine-special .mx-banner-vitrine');
	        $divBanner.css('height', $heightVitrine);
	        $divBanner.css('background', 'url(' + $imageMinHeight + ')');
	    };
    	minHeightBackground();
	    $(window).resize(function() {
	        minHeightBackground();
	    });
    }
});

$(document).ajaxStop(function() {

});