function eh_loadMainSliderControlEspecialHomem() {
    if (eh_isEspecialHomem()) {
        var wrapper_slider = $('#wrapper_mainSliderEspecialHomem');
        var wrapper_cycle = $(wrapper_slider).find('.cycle-slideshow');

        $('<a href="#" class="cycle-prev-custom"></a><a href="#" class="cycle-next-custom"></a>').insertBefore($(wrapper_cycle));

        $(wrapper_slider).find('.cycle-prev-custom,.cycle-next-custom').on('click', function() {
            var active = $(wrapper_cycle).find('.cycle-pager .cycle-pager-active').index();
            var eq = 0;

            // PREVIOUS
            if ($(this).hasClass('cycle-prev-custom')) {
                eq = (active == 0) ? $(wrapper_cycle).find('.cycle-pager span:last').index() : active - 1; // Se estiver no primeiro slide, vai para o Ãºltimo ao clicar em PREVIOUS. Do contrÃ¡rio, vai para o slide anterior.

                // NEXT
            } else {
                eq = (active == $(wrapper_cycle).find('.cycle-pager span:last').index()) ? 0 : active + 1; // Se estiver no Ãºltimo slide, vai para o primeiro ao clicar em NEXT. Do contrÃ¡rio, vai para o prÃ³ximo slide.
            }

            $(wrapper_cycle).find('.cycle-pager span:eq(' + eq + ')').click();

            return false;
        });
    }
}

function eh_loadMainSliderEspecialHomem() {
    // Mobile/Responsivo
    if (eh_isEspecialHomem() && $('body').hasClass('isResponsible')) {
        var wrapper_banners = $('#wrapper_bannersEspecialHomem');

        // 320 a 725
        if ($(wrapper_banners).width() < 726) {
            var wrapper_slider = $('#wrapper_mainSliderEspecialHomem');
            var height = $(wrapper_slider).find('img:first').height();

            if (height > 0) {
                $(wrapper_banners).css('display', 'block');
                $(wrapper_banners).css('visibility', 'visible');

                $(wrapper_slider).find('.cycle-slideshow').css('height', height + 'px');
                $(wrapper_slider).find('img').css('display', 'block');
            } else {
                $(wrapper_banners).css('display', 'none');
                $(wrapper_banners).css('visibility', 'hidden');
            }
        }
    }
}

function eh_loadMenuEspecialHomem() {
    if (eh_isEspecialHomem()) {
        var wrapper_menu = $('#wrapper_subMenuEspecialHomem');
        var path = (window.location.pathname) ? window.location.pathname.toLowerCase() : false;

        if (path) {
            $(wrapper_menu).find('ul li').each(function(i, li) {
                var href = $(li).find('a').attr('href');

                if (!$(li).hasClass('eh-primeiro-menu') && href && path.indexOf(href.toLowerCase()) === 0) {
                    $(li).addClass('active');

                    return false;
                }
            });
        }
    }
}

function eh_isEspecialHomem() {

    if ($(document.body).is('.especial-homem'))
        return true;
    else 
        return false;
}

$(document).ready(function() {
    // Configura o PREV/NEXT do slider
    eh_loadMainSliderControlEspecialHomem();

    // Carrega o slider no modo Mobile/Responsivo (Especial Homem)
    eh_loadMainSliderEspecialHomem();

    // Verifica qual o menu ativo
    eh_loadMenuEspecialHomem();
    
});

window.addEventListener("orientationchange", eh_loadMainSliderEspecialHomem);
window.addEventListener("resize", eh_loadMainSliderEspecialHomem);