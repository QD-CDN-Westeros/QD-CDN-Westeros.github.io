var Search = {
    init: function () {
        Search.setSubCategories();
        Search.applySearchResult();
        Search.applySmartResearch();
        Search.applyAppendNavigator();
        Search.departmentAdjusts();
    },
    ajaxStop: function () {
        Search.shelfLineFix();
        Search.openFiltersMenu();
    },
    windowOnload: function () {
        Search.setpageHeading();
        Search.shelfLineFix();
    },
    documentReady: function () {
    },
    shelfLineFix: function () {
        try {
            var exec = function () {
                var curTop;
                var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on'), div[id*='ResultItems_'] >.n1colunas:not('.qd-fi-on') ").addClass('qd-fi-on');

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
    },
    setpageHeading: function () {
        var headingElement = $('.search-qd-v1-navigator-title h2');
        var searchResult = $('.resultado-busca-termo .value').first().text();

        if (!$('h1').length)
            headingElement.replaceWith(function () {
                $t = $(this);
                return '<h1' + ($t.attr('class') ? ' class="' + $t.attr('class') + '"' : '') + '>' + $t.text() + '</h1>';
            });
    },
    applySearchResult: function () {
        var searchTitle = $('.search-qd-v1-navigator-title h2');

        if (searchTitle.text().indexOf('Resultado da Busca') != -1)
            searchTitle.text(($('.resultado-busca-termo .value').first().text() || "Caterpillar"));
    },
    setSubCategories: function () {
        $('.search-qd-v1-navigator .navigation-tabs h4').filter(function () {
            return $(this).next().children().length;
        }).addClass('qd-has-sub-category');
    },
    openFiltersMenu: function () {
        $('.search-qd-v1-navigator-trigger').click(function (e) {
            e.preventDefault();
            $(document.body).toggleClass('qd-sn-on');
        });

        $('.search-qd-v1-navigator h5').toggleClass('active');
    },
    applySmartResearch: function () {
        // Coloca um input no slider price para capturar o evento
        // $('<label class="sr_mz-price-filter" title="Filtro de Preço" index="0" style="display: none;"><span class="sr_box"></span><input rel="fq=P:[0+TO+999]" class="multi-search-checkbox" type="checkbox" name="sr_mz-price-filter" value="[0+TO+999]">Filtro de Preço<span class="sr_box2"></span></label>').appendTo(".MZs__sliderPrice");

        $(".search-qd-v1-navigator-list input[type='checkbox']").QD_SmartResearch({
            authorizeUpdate: function () {
                return !0;
            },
            filterScrollTop: function (a) {
                if ($(window).width() > 992) {
                    $('html, body').stop().animate({
                        'scrollTop': $('.search-qd-v1-navigator-list').offset().top - 70
                    }, 900, 'swing');
                } else if ($(window).width() <= 992) {
                    $('html, body').stop().animate({
                        'scrollTop': $('.search-qd-v1-result').offset().top - 165
                    }, 900, 'swing');
                }
            },
            ajaxCallback: function () { },
            shelfCallback: function () { }
        });

        $('.bt-refinar').insertBefore('.search-multiple-navigator h3');
    },
    applyAppendNavigator: function () {
        // Funcao de reposicionamento de blocos
        // Coloca todos os checkbox e coloca antes dos links
        $('.search-multiple-navigator label').each(function () {
            var $t = $(this);
            $t.find('.sr_box').prependTo($t);
            $t.find('.sr_box2').remove(); // evita conflitos
        });
    },
    departmentAdjusts: function () {
        
        $('.search-single-navigator > ul').each(function(){
            $t = $(this);
            if($t.children().length){                
                $t.prev().addClass('ulHasContent');
            }
        });

        $('.search-single-navigator > h4').click(function(){
            //ABRE  A UL
            $t = $(this);
            $t.toggleClass('active');
        });

        
    },
};