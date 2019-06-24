var Search = {
    init: function() {
        Search.searchResults();
        Search.searchBar();
        Search.searchNavigator();
        Search.shelfLineFix();
        Home.applyMosaicBanners();
    },
    ajaxStop: function() {
        Search.shelfLineFix();
    },
    windowOnload: function() {},
    searchResults:function(){
        var searchQty = $(".resultado-busca-numero:first .value").text();
        var searchTerm = $(".resultado-busca-termo:first .value").text();

        $(".QDs__terms").append(searchQty + ' resultado para <br />"' + searchTerm + '"' );
        $(".QDs__r--qty").append(searchQty + ' Modelos').wrapInner('<p></p>');
    },
    searchNavigator:function(){
        $('.QDs__navigator h3 + ul').each(function () {
            var t = $(this)
            if (!t.text().trim().length) {
                t.prev('h3').addClass('qd-no-subs')
            }
        });
        $('.QDs__navigator h4 + ul').each(function () {
            var t = $(this)
            if (!t.text().trim().length) {
                t.prev('h4').addClass('qd-no-subs').prepend('<span></span>');
            }
        });
        $('body.resultado-busca h3>span, body.departamento h4>span').click(function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('qd-on');
        });
        $('.menu-departamento ul').each(function(){
            var $t = $(this);   
            var $span = $('<span class="qd-view-more">Ver mais</span>')

            $span.click(function(){
                $(this).prev('ul').toggleClass('qd-open-div')
            })

            if ($(this).find('li').length > 8){
                $(this).addClass('qd-has-itens');
                $(this).after($span);
            }
        });
        $(".QDs__o--btn").click(function(){
            $('body').toggleClass('qd-sn-on');
        });
        $(".QDs__s--close").click(function () {
            $('body').toggleClass('qd-sn-on');
        });        
    },
    searchBar:function(){
        $(".QDs__n--order >span").click(function(){
            $(this).parent().toggleClass('qd-on')
        });
        
        $('.QDs__n--links >ul>li>a,.QDs__n--links >ul>li>p').click(function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('qd-on');
        });
    },
    shelfLineFix: function () {
        try {
            var exec = function () {
                var curTop;
                var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass('qd-fi-on');

                var shelf = wrapper.children("ul").removeClass('qd-first-line');
                shelf.first().addClass("qd-first-line");

                var setFirst = function () {
                    shelf.each(function () {
                        var $t = $(this);

                        if ($t.is(".qd-first-line")) {
                            curTop = $t.offset().top;
                            shelf = shelf.not($t);
                            return;
                        }

                        var offsetTop = $t.offset().top;
                        if (offsetTop >= curTop - 10 && offsetTop <= curTop + 10)
                            shelf = shelf.not($t);
                        else {
                            $t.addClass("qd-first-line");
                            return false;
                        }
                    });

                    if (shelf.length)
                        setFirst();
                };
                setFirst();
            };
            exec();

            // Olhando para o Smart Research
            if (!window.qd_shelf_line_fix_) {
                $(window).on("QuatroDigital.sr_shelfCallback", exec);
                window.qd_shelf_line_fix_ = true;
            }
            // Olhando tbm para o Infinity Scroll
            if (!window.qd_shelf_line_fix_is) {
                $(window).on("QuatroDigital.is_Callback", exec);
                window.qd_shelf_line_fix_is = true;
            }

            // Olhando para o evento window resize
            var resize = $._data(window).events.resize;
            var allowResize = true;
            if (resize)
                for (var i = 0; i < resize.length; i++) {
                    if (resize[i].namespace == "qd") {
                        allowResize = false;
                        break;
                    }
                }
            if (allowResize) {
                var timeOut = 0;
                $(window).on("resize.qd", function () {
                    clearTimeout(timeOut);
                    timeOut = setTimeout(function () {
                        $(".qd-first-line").removeClass(".qd-first-line");
                        exec();
                    }, 20);
                });
            }
        }
        catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
    }    
};