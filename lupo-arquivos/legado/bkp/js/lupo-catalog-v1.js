
resultSearch = function() {
    if ($("body").hasClass("resultado-busca")) {
        var $main = $(".main .searchResultsTime").eq(0),
            term = $main.find(".resultado-busca-termo .value").text() || "",
            num = $main.find(".resultado-busca-numero .value").text(),
            $result = $(".x-group-result");
            $result.find(".mx-word").text(term),
            $result.find(".mx-number").text(num)
    };
    if($.trim($('.x-group-result .mx-word').text()) == ""){
        $('.mx_term-search').hide();
    }
};

actionFilterMobile = function() {
    // $('.mx-aside .mx-filter-mobile').click(function() {
    //     $('.mx-aside .mx-search-result').fadeIn();
    // });
    // $('.mx-aside .mx-search-result .close').click(function() {
    //     $('.mx-aside .mx-search-result').fadeOut();
    // });
    $('body').on('click', '.mx-aside .mx-filter-mobile', function() {
        console.log("ativo");
        $('.mx-aside .mx-filter-mobile').toggleClass('ativo');
       // $('.mx-aside .mx-search-result').slideToggle();
        $(".mx-aside .mx-search-result").slideToggle('fast', function(){ 
            $('.mx-aside .mx-search-result').css('overflow','visible') 
        });
        
    });
};

emptySearchFilter = function() {
    $('.navigation-tabs .search-multiple-navigator fieldset').each(function() {
        var $lengthInput = $(this).find('input').length;
        if (!$lengthInput) {
            $(this).hide();
        };
    });
    if ($('body').hasClass('resultado-busca')) {
        $('.search-single-navigator li').each(function(){
            var splitFilter = $.trim($(this).find('a').text().split(' (')[0]);
            $(this).find('a').text(splitFilter);
        });
    }
};

colorThumbFilter = function(){
    $('.search-multiple-navigator .filtro_cor label').each(function(){
        var inputColor = $(this).attr('title').split(' - ')[1];
        $(this).find('input').addClass('dimension-Cor cod' + inputColor);
    });
};

moreProducts = function() {
    if ($('.mx-content-catalog .prateleira ul li').length < 12) {
        $('#x-infinityScroll').hide();
    }
};

filter_config = function(){
    var orderBy = $('.orderBy').html();
    var foundProducts = $('.content-catalog-info .resultado-busca-numero').html();
    
    $('.mx-aside h5').each(function(){
        if($(this).next("div").find("label").length){
            $(this).append('<div class="drop"></div>'); 
        };
    });
    $('#sidebar h5').each(function(){
        if($(this).next("div").find("label").length){
            $(this).addClass('<div class="drop"></div>'); 
        };
    });
    $('body').on('click', '.search-single-navigator h5', function() {
        $(this).toggleClass('ativo');
        $(this).next('ul').slideToggle('fast');
    });

    $('body').on('click', '.search-multiple-navigator h5', function() {
        $(this).toggleClass('ativo');
        $(this).next('div').slideToggle('fast');
    });

    $('.main').each(function(){        
        $('.main').before('<div class="bx-orderby"> ' + orderBy +'</div>'); 
        //$('.main').before('<div class="Produtos encontrados">'+ foundProducts +'</div>') 
    });
}


showMoreColors = function(){
    var filtroCor = $('.filtro_cor > div');
   
    filtroCor.after('<div class="btn-mais"><a href="#">Ver Mais Cores</a></div>');
    filtroCor.animate({
		height: '166px'
    });
    $('.btn-mais a').click(function(e){
        e.preventDefault();
        filtroCor.animate({
            height: '100%',
            display:'block'
        },400)  
        $(this).hide();          
    })    
    
}
var resultFilters = $(".resultado-busca-filtro").html();
var searchResultsTime = $('.searchResultsTime').html();
$('.content-catalog-info').append(resultFilters, searchResultsTime);

$(document).ready(function() {
    resultSearch();
    actionFilterMobile();
    emptySearchFilter();
    //showMoreColors();
    filter_config();
    
});

$(document).ajaxStop(function() {
    colorThumbFilter();
    moreProducts();
});

$(window).load(function() {});