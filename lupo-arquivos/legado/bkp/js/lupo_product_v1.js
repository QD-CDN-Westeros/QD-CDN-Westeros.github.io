
function addOpenClassOnClick(a, b) {
    a.on("click", function() {
        b.toggleClass("-open")
    })
}
productDescription = function() {
    var a = vtxctx.departmentName,
        b = vtxctx.categoryName,
        c = $.trim($("h1 .productName").text());
    $(".mx-product-description").addClass(a), $(".mx-product-description .product_category").text(b), $(".mx-product-description .product_name").text(c), $("#caracteristicas").is(":empty") && ($(".mx-content .mx-product-description").hide(), $(".mx-content .mx-product-image-info .mx-product_infos .mx-buybutton .mx-infosMore").hide())
}, ancorInfos = function() {
    $(".mx-content .mx-buybutton .mx-infosMore").click(function(a) {
        a.preventDefault(), $("html,body").animate({
            scrollTop: $(".mx-content .mx-product-description").offset().top - 82
        }, 950)
    }), $(".mx-product_infos .mx-evaluationRate .link-ancora").click(function(a) {
        a.preventDefault(), $("html,body").animate({
            scrollTop: $(".mx-review #resenha").offset().top - 70
        }, 2e3)
    })
}, sliderProducts = function() {
    $(".mx-product-list_slider.mx-left .mx-carousel .prateleira > ul").hasClass("slick-initialized") || $(".mx-product-list_slider.mx-left .mx-carousel .prateleira > ul, .mx-product-list_slider.mx-right .mx-carousel .prateleira > ul").slick({
        infinite: !0,
        centerMode: !1,
        slidesToShow: 3,
        centerPadding: "0px",
        focusOnSelect: !1,
        adaptiveHeight: !0,
        touchMove: !0,
        cssEase: "linear",
        responsive: [{
            breakpoint: 760,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3
            }
        }]
    })
}, modalMedidas = function() {
    $(".mx-product_infos .mx-sku-select .mx-help").click(function() {
        $("#mx-modal").fadeIn()
    }), $("#mx-modal .mx-content .mx-close").click(function() {
        $("#mx-modal").fadeOut()
    })
}, splitVariationsProduct = function() {
    $(".mx-sku-select .sku-selector-container .Tamanho li label").each(function() {
        var a = $.trim($(this).text()).split(" -")[0];
        $(this).text(a)
    }), $(".item-dimension-Cor label").each(function() {
        var a = $.trim($(this).text()).split(" - ")[1];
        $(this).addClass("cod" + a)
    })
}, $(document).ready(function() {
    productDescription(), addOpenClassOnClick($(".Description .mx-infosMore"), $(".Description .productDescription")), sliderProducts(), ancorInfos(), splitVariationsProduct()
});
window.onload = function() {
     if ($("body").hasClass("produto") && $('.product-shipping').length > 0) {
            ShippingValue();

            setTimeout(function() {
                //$('#calculoFrete').prepend("<div class='inform-cep'>Informe o CEP para saber o prazo e valor de entrega.</div>");
                //$('#calculoFrete').prepend("<p class='frete-entrega'>frete e entrega <span class='image-cart-frete'></span></p>");
                $("#calculoFrete .freight-btn").val("Calcule");
                sliderRecomendacoes();
            }, 1000);
    } 
   
}
function sliderRecomendacoes(){
    $(".mx-product-list_slider.slider-recomencacoes .mx-carousel .prateleira > ul").slick({
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
    })

} 

function sliderThumbs(){
    $("#show .thumbs").slick({
             
        slidesToShow: 3      
    })

} 
  $(document).ready(function() {
    //sliderRecomendacoes();
   // sliderThumbs();
  });